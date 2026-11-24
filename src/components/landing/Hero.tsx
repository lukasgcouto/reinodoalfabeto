import { BookOpen, CalendarCheck, Flame, ShieldCheck, Timer, Zap } from "lucide-react";
import { OFFER, formatBRL } from "@/lib/offer";
import { CloudShape } from "./Decor";
import { media } from "./media";
import { ProductMockup } from "./ProductMockup";
import { CtaButton } from "./CtaButton";

const benefits = [
  { icon: Zap, label: "Acesso imediato em PDF" },
  { icon: CalendarCheck, label: "Sem mensalidade" },
  { icon: ShieldCheck, label: `Garantia de ${OFFER.guaranteeDays} dias` },
];

export function HeroPromoBar() {
  return (
    <div className="hero-promo">
      <Flame className="hero-promo-flame" aria-hidden />
      <span>
        {"Oferta de hoje: de "}<s>{formatBRL(OFFER.originalPriceCents)}</s>{" por apenas "}
        <strong>{formatBRL(OFFER.priceCents)}</strong>
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="ref-hero">
      <CloudShape className="ref-cloud ref-cloud-1" />
      <CloudShape className="ref-cloud ref-cloud-2" />
      <CloudShape className="ref-cloud ref-cloud-3" />
      <CloudShape className="ref-cloud ref-cloud-4" />
      <div className="ref-inner">
        <header className="ref-header">
          <img src={media.logo} alt="" width={600} height={600} className="ref-logo" />
        </header>

        <h1 className="ref-title">
          <span className="ref-line-1">{"O Passo a Passo em "}<span className="ref-red ref-underline">{`${OFFER.levelCount} Níveis`}</span></span>
          <span className="ref-line-2">{"Para Seu Filho Sair do"}</span>
          <span className="ref-line-3"><span className="ref-pill">{"Zero à Leitura de Frases"}</span></span>
          <span className="ref-line-4"><Timer className="ref-timer" aria-hidden />{"em "}<span className="ref-red">{`${OFFER.minutesPerDay} Minutos`}</span>{" Por Dia"}</span>
        </h1>

        <div className="ref-stage">
          <span className="ref-letter ref-letter-a" aria-hidden>A</span>
          <span className="ref-letter ref-letter-b" aria-hidden>B</span>
          <span className="ref-letter ref-letter-c" aria-hidden>C</span>
          <ProductMockup />
          <div className="ref-ground" aria-hidden />
        </div>

        <div className="ref-action">
          <CtaButton className="w-full sm:w-auto">Quero destravar a leitura agora</CtaButton>
          <p className="ref-price">
            {"De "}<s>{formatBRL(OFFER.originalPriceCents)}</s>{" por apenas "}
            <strong>{formatBRL(OFFER.priceCents)}</strong>{" à vista"}
          </p>
          <ul className="ref-benefits">
            {benefits.map(({ icon: Icon, label }) => (
              <li key={label}><Icon aria-hidden /><span>{label}</span></li>
            ))}
          </ul>
          <p className="ref-description">
            {"O "}<strong>Alfabetização Sem Segredo</strong>
            {` é um método estruturado em PDF com mais de ${OFFER.activityCount} atividades progressivas e visual limpo. Você imprime, senta com a criança e aplica sem improviso, sem telas e sem estresse.`}
          </p>
        </div>
      </div>
      <svg className="ref-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
        <path className="ref-wave-light" d="M0 50c240-40 480-40 720 0s480 40 720 0v70H0z" />
        <path className="ref-wave-deep" d="M0 70c260-45 520-35 760 5s460 30 680-10v55H0z" />
      </svg>
    </section>
  );
}
