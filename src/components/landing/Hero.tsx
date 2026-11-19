import { BookOpen } from "lucide-react";
import { OFFER, formatBRL } from "@/lib/offer";
import { CtaButton } from "./CtaButton";
import { media } from "./media";
import { ProductMockup } from "./ProductMockup";

export function Hero() {
  return (
    <section className="editorial-hero">
      <header className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2 md:px-8 md:py-4">
        <div className="flex min-w-0 items-center gap-2">
          <img src={media.logo} alt="" width={600} height={600} className="size-10 shrink-0 object-contain md:size-16" />
          <p className="whitespace-nowrap font-display text-sm font-extrabold text-royal-deep sm:text-lg md:text-2xl">Reino do Alfabeto</p>
        </div>
        <span className="flex shrink-0 items-center gap-1 text-xs font-bold text-royal md:text-sm"><BookOpen className="size-4" />PDF digital</span>
      </header>
      <div className="hero-editorial-layout mx-auto max-w-6xl px-4 md:px-8">
        <div className="hero-heading text-center md:text-left">
          <p className="mb-2 text-xs font-extrabold text-royal md:mb-4 md:text-sm">O caminho completo para alfabetizar sem segredo!</p>
          <h1 className="text-[1.375rem] font-extrabold leading-[1.15] text-royal-deep md:text-[2.75rem] md:leading-[1.15]">
            {"O Caminho Passo a Passo em "}
            <span className="hero-key-highlight">{`${OFFER.levelCount} Níveis`}</span>
            {" Para Seu Filho Sair do Zero à Leitura de Frases em "}
            <span className="hero-key-highlight">
              {`${OFFER.minutesPerDay} Minutos Por Dia`}
            </span>
          </h1>
        </div>
        <div className="hero-product"><ProductMockup /></div>
        <div className="hero-description text-center md:text-left">
          <p className="text-[0.9375rem] font-semibold leading-relaxed text-ink md:text-base">
            O <strong className="text-royal">Alfabetização Sem Segredo</strong>
            {` é um método estruturado em PDF com mais de ${OFFER.activityCount} atividades progressivas e visual limpo. Você imprime, senta com a criança e aplica sem improviso, sem telas e sem estresse.`}
          </p>
        </div>
        <div className="hero-action flex flex-col items-center gap-2 md:items-start md:gap-3">
            <CtaButton pulse={false} className="hero-primary-cta h-auto min-h-14 w-full px-4 py-3 text-sm md:w-auto md:text-base">Quero destravar a leitura agora</CtaButton>
            <p className="text-center text-sm font-bold text-ink">
              De <s className="text-cherry">{formatBRL(OFFER.originalPriceCents)}</s> por apenas{" "}
              <span className="text-xl font-extrabold text-leaf-deep">{formatBRL(OFFER.priceCents)}</span> à vista
            </p>
            <p className="hero-micro-trust text-center text-xs font-semibold leading-relaxed text-ink md:text-left">
              <span>Acesso imediato em PDF</span>{" • "}<span>Sem mensalidade</span>{" • "}<span>Garantia de {OFFER.guaranteeDays} dias</span>
            </p>
        </div>
      </div>
    </section>
  );
}
