import { Star } from "lucide-react";
import { OFFER, formatBRL } from "@/lib/offer";
import { CtaButton, TrustLine } from "./CtaButton";
import { CloudShape, Hills } from "./Decor";
import { media } from "./media";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-sky-gradient pb-28 md:pb-36">
      {/* drifting clouds */}
      <CloudShape className="absolute left-0 top-24 w-40 animate-drift opacity-90 [animation-duration:55s]" />
      <CloudShape className="absolute left-0 top-64 w-28 animate-drift opacity-70 [animation-delay:-25s] [animation-duration:70s]" />
      <CloudShape className="absolute -right-10 top-10 w-56 opacity-80" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-4 pt-4">
        <img
          src={media.logo}
          alt="Reino do Alfabeto"
          width={286}
          height={236}
          className="h-auto w-28 rounded-lg border-4 border-on-color shadow-card md:w-36"
        />
        <a
          href={OFFER.checkoutUrl}
          className="hidden rounded-full bg-on-color px-5 py-2 font-display text-sm font-extrabold text-royal shadow-[0_4px_0_0_var(--sky-deep)] transition hover:-translate-y-0.5 sm:inline-block"
        >
          Garantir por {formatBRL(OFFER.priceCents)}
        </a>
      </header>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 pt-8 md:grid-cols-[1.1fr_1fr] md:pt-14">
        <div className="text-center md:text-left">
          <div className="wood-sign inline-block -rotate-3 rounded-2xl px-5 py-2.5">
            <p className="font-display text-base font-extrabold leading-tight text-on-color md:text-lg">
              O caminho completo para alfabetizar{" "}
              <span className="text-sun">sem segredo!</span>
            </p>
          </div>

          <h1 className="mt-6 text-[2.1rem] font-extrabold leading-[1.1] text-royal-deep md:text-[3.4rem]">
            <span className="text-toy text-[1.15em] leading-none">{`+${OFFER.activityCount}\u00a0Atividades\u00a0`}</span>
            <br />
            {"Prontas Para Imprimir Que Transformam "}
            <span className="my-2 inline-block max-w-full rounded-2xl bg-sun px-2 py-1 align-middle leading-[1.2] shadow-[0_5px_0_0_var(--sun-deep)]">
              {`${OFFER.minutesPerDay}\u00a0Minutos Por Dia`}
            </span>
            {"\u00a0Em Leitura de Verdade"}
          </h1>

          <p className="mx-auto mt-6 max-w-xl rounded-3xl bg-on-color/85 p-5 text-base font-semibold leading-relaxed text-ink shadow-card backdrop-blur md:mx-0 md:text-lg">
            <strong className="text-royal">Alfabetização Sem Segredo</strong> é um material em PDF com{"\u00a0"}
            +{OFFER.activityCount} atividades organizadas por níveis, do zero até a leitura de palavras e frases.
            Você imprime, senta com a criança e aplica em poucos minutos por dia, sem improviso e sem estresse.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 md:items-start">
            <CtaButton>Quero acessar agora por {formatBRL(OFFER.priceCents)}</CtaButton>
            <p className="font-display font-bold text-ink">
              De <s className="text-cherry">{formatBRL(OFFER.originalPriceCents)}</s> por apenas{" "}
              <span className="text-xl font-extrabold text-leaf-deep">{formatBRL(OFFER.priceCents)}</span> à vista
            </p>
            <TrustLine className="md:justify-start" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          {/* cloud badge */}
          <div className="absolute -top-6 right-0 z-20 animate-float rounded-[2.5rem] bg-royal px-5 py-3 text-center shadow-toy md:-right-6">
            <p className="font-display text-base font-extrabold leading-tight text-on-color md:text-lg">
              Aprender também
              <br />
              pode ser <span className="text-sun">divertido!</span>
            </p>
          </div>

          <div className="relative rotate-2 overflow-hidden rounded-[2rem] border-[6px] border-on-color bg-on-color shadow-toy">
            <img
              src={media.kids}
              alt="Menino e menina sorrindo enquanto fazem atividades de alfabetização"
              width={623}
              height={326}
              className="w-full"
            />
          </div>

          {/* worksheet previews */}
          <div className="relative -mt-10 flex justify-center gap-4">
            <img
              src={media.ligue}
              alt="Atividade: ligue cada desenho à palavra"
              width={1050}
              height={1500}
              className="w-[42%] -rotate-6 rounded-xl border-4 border-on-color shadow-card"
            />
            <img
              src={media.silabas}
              alt="Atividade: complete as palavras com as sílabas"
              width={1050}
              height={1500}
              className="mt-6 w-[42%] rotate-6 rounded-xl border-4 border-on-color shadow-card"
            />
          </div>

          <div className="relative z-20 mx-auto mt-6 flex w-fit items-center gap-1 whitespace-nowrap rounded-full bg-sun px-4 py-2 font-display text-sm font-extrabold text-ink shadow-[0_4px_0_0_var(--sun-deep)]">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="size-4 fill-cherry text-cherry" />
            ))}
            <span className="ml-1">Pronto para imprimir</span>
          </div>
        </div>
      </div>

      <Hills className="absolute bottom-0 left-0 h-24 w-full md:h-36" />
    </section>
  );
}
