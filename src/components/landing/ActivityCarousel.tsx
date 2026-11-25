import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { media } from "./media";

const activities = [
  { src: media.ligue, alt: "Atividade ligue cada desenho à palavra correspondente" },
  { src: media.silabas, alt: "Atividade complete as palavras com as sílabas" },
  { src: media.recorte, alt: "Atividade recorte e cole as palavras dos meios de transporte" },
  { src: media.vogais, alt: "Atividade complete os nomes dos animais com as vogais" },
];

export function ActivityCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [entered, setEntered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!api) return;
    const sync = () => {
      setSelected(api.selectedScrollSnap());
      setSnaps(api.scrollSnapList());
      setCanPrevious(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };
    sync();
    api.on("select", sync).on("reInit", sync);
    return () => { api.off("select", sync).off("reInit", sync); };
  }, [api]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setEntered(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="activity-gallery mt-16 rounded-[2.5rem] bg-sky-gradient p-6 md:p-10" data-entered={entered}>
      <p id="activity-gallery-title" className="text-center font-display text-2xl font-extrabold text-royal-deep md:text-3xl">
        Veja como são as páginas por dentro
      </p>
      <Carousel
        setApi={setApi}
        opts={{ align: "center", containScroll: false, duration: 16, slidesToScroll: 1, loop: false, watchDrag: true }}
        className="mt-6"
        aria-labelledby="activity-gallery-title"
        tabIndex={0}
      >
        <CarouselContent className="activity-gallery-track -ml-4 cursor-grab items-center py-5 active:cursor-grabbing md:-ml-6">
          {activities.map((image, index) => (
            <CarouselItem key={image.src} className="basis-[86%] pl-4 sm:basis-[58%] md:basis-[38%] md:pl-6" aria-label={`${index + 1} de ${activities.length}`}>
              <figure className="mx-auto w-full">
                <img src={image.src} alt={image.alt} width={1050} height={1500} loading="lazy" decoding="async" draggable={false}
                  className="mx-auto aspect-[7/10] w-full select-none object-contain" />
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-2 flex items-center justify-center gap-3">
          <Button variant="outline" size="icon" className="size-10 shrink-0 rounded-full border-royal/20 bg-card text-royal" disabled={!canPrevious} onClick={() => api?.scrollPrev()} aria-label="Atividade anterior" title="Atividade anterior">
            <ArrowLeft />
          </Button>
          <div className="flex items-center gap-1" role="group" aria-label="Páginas de atividades">
            {snaps.map((_, index) => (
              <Button key={index} variant="ghost" size="icon" className="size-8 rounded-full" onClick={() => api?.scrollTo(index)} aria-label={`Ver página ${index + 1}`} aria-current={selected === index ? "true" : undefined}>
                <span className={`size-2.5 rounded-full transition-colors ${selected === index ? "bg-royal" : "bg-royal/30"}`} />
              </Button>
            ))}
          </div>
          <Button variant="outline" size="icon" className="activity-gallery-next size-10 shrink-0 rounded-full border-royal/20 bg-card text-royal" disabled={!canNext} onClick={() => api?.scrollNext()} aria-label="Próxima atividade" title="Próxima atividade">
            <ArrowRight />
          </Button>
        </div>
      </Carousel>
    </div>
  );
}