import { useState } from "react";
import { Pause, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  { name: "Camila R.", role: "Mãe do Davi, 5 anos", quote: "Eu já tinha baixado um pacote com mil folhas da internet, mas era tudo bagunçado e meu filho odiava. Com esse material limpo e dividido por níveis, ele mesmo pede para fazer a folhinha do dia." },
  { name: "Profa. Mariana S.", role: "Alfabetizadora", quote: "Uso em sala de aula com meus alunos com dificuldade. A progressão de letras para sons e sílabas faz total sentido pedagógico e me economiza horas de planejamento." },
  { name: "Fernanda T.", role: "Mãe da Alice, 6 anos", quote: "Em três semanas fazendo 15 minutinhos depois do jantar, minha filha juntou as primeiras sílabas sozinha. Foi a melhor forma que encontrei de tirar ela do tablet sem briga." },
  { name: "Juliana M.", role: "Mãe do Pedro, 4 anos", quote: "Os outros materiais eram tão simples e sem graça que meu filho perdia o interesse rapidinho. Com esse, ele fica muito mais animado para fazer as atividades!" },
  { name: "Patrícia L.", role: "Mãe do Theo, 7 anos", quote: "Achei que não ia conseguir ensinar por não ser professora, mas o material guia a gente passo a passo. Vale cada centavo, muito superior às apostilas de banca." },
];

export function Testimonials() {
  const [paused, setPaused] = useState(false);
  const [held, setHeld] = useState(false);
  return (
    <section className="mt-16" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title" className="text-center text-3xl font-extrabold text-royal-deep md:text-4xl">Quem já aplicou, aprovou</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-ink">Veja o que dizem mães e professoras que trocaram atividades soltas pelo nosso método:</p>
      <div className="mt-4 flex justify-center">
        <Button variant="ghost" size="icon" onClick={() => setPaused(!paused)} aria-label={paused ? "Reproduzir depoimentos" : "Pausar depoimentos"} title={paused ? "Reproduzir depoimentos" : "Pausar depoimentos"}>
          {paused ? <Play /> : <Pause />}
        </Button>
      </div>
      <div className="testimonials-window mt-4" data-paused={paused || held} onPointerDown={() => setHeld(true)} onPointerUp={() => setHeld(false)} onPointerCancel={() => setHeld(false)} onPointerLeave={() => setHeld(false)}>
        <div className="testimonials-track">
          {[0, 1].map((copy) => (
            <div className="testimonials-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {testimonials.map((item) => (
                <figure key={item.name} className="testimonial-card flex flex-col rounded-lg border-2 border-border bg-card p-6 shadow-card">
                  <div className="flex gap-1" role="img" aria-label="5 de 5 estrelas">
                    {[0, 1, 2, 3, 4].map((star) => <Star key={star} className="size-5 fill-sun text-sun-deep" aria-hidden="true" />)}
                  </div>
                  <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink">“{item.quote}”</blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <p className="font-display text-lg font-extrabold text-royal-deep">{item.name}</p>
                    <p className="text-sm font-semibold text-muted-foreground">{item.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
