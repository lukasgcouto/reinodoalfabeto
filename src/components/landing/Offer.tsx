import { BookOpen, CheckCircle2 } from "lucide-react";
import { OFFER, centsPerActivity, discountPercent, formatBRL } from "@/lib/offer";
import { CtaButton, TrustLine } from "./CtaButton";
import { CloudShape, Hills } from "./Decor";
import { media } from "./media";

const items = [
  `+${OFFER.activityCount} atividades de alfabetização cuidadosamente selecionadas`,
  "Organização por níveis de evolução, do zero até a leitura de palavras e frases",
  "Design limpo e de alta qualidade estética, sem poluição visual",
  "Pronto para imprimir: use em casa ou na sala de aula, quantas vezes quiser",
  "Acesso vitalício: o material é seu para sempre",
  "Acesso imediato, enviado para o seu e-mail e WhatsApp",
];

export function Offer() {
  const perActivity = Math.ceil(centsPerActivity());
  return (
    <section id="oferta" className="relative scroll-mt-4 overflow-hidden bg-sky px-4 pb-40 pt-12 md:pb-48">
      <CloudShape className="absolute -left-12 top-10 w-48 opacity-80" />
      <CloudShape className="absolute -right-10 top-1/3 w-56 opacity-70" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="text-center">
          <img
            src={media.logo}
            alt="Reino do Alfabeto"
            width={600}
            height={600}
            loading="lazy"
            className="mx-auto h-auto w-48 rounded-2xl shadow-card"
          />
          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-royal-deep md:text-5xl">
            Tudo o que você recebe hoje
          </h2>
        </div>

        <div className="mt-8 rounded-[2.5rem] border-[6px] border-royal bg-card p-6 shadow-toy md:p-10">
          <div className="flex items-center gap-3 rounded-2xl bg-muted p-4">
            <BookOpen className="size-8 shrink-0 text-royal" />
            <p className="font-display text-lg font-extrabold text-royal-deep md:text-xl">
              Material Completo Digital em PDF: Alfabetização Sem Segredo
            </p>
          </div>
          <ul className="mt-6 space-y-3">
            {items.map((t) => (
              <li key={t} className="flex gap-3 text-lg text-ink">
                <CheckCircle2 className="mt-0.5 size-6 shrink-0 fill-leaf text-on-color" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-3xl bg-muted p-5 text-center">
            <p className="font-display text-xl font-extrabold text-royal-deep">
              Quanto vale ver seu filho lendo com leveza?
            </p>
            <p className="mt-2 text-ink">
              Uma aula particular de reforço pode custar facilmente mais do que isso por semana. Apostilas
              impressas, jogos e materiais soltos vão somando, e muitas vezes não seguem uma sequência.
            </p>
            <p className="mt-2 font-semibold text-ink">
              Mas hoje você não vai pagar nem os {formatBRL(OFFER.originalPriceCents)} do valor normal.
            </p>
          </div>

          <div className="mt-8 text-center">
            <span className="inline-block -rotate-3 rounded-full bg-cherry px-4 py-1 font-display text-sm font-extrabold uppercase text-on-color shadow-[0_4px_0_0_var(--cherry-deep)]">
              {discountPercent()}% de desconto hoje
            </span>
            <p className="mt-4 font-display text-xl font-bold text-muted-foreground">
              De <s className="text-cherry">{formatBRL(OFFER.originalPriceCents)}</s>
            </p>
            <p className="font-display text-lg font-bold text-ink">por apenas</p>
            <p className="text-toy text-7xl leading-none md:text-8xl">{formatBRL(OFFER.priceCents)}</p>
            <p className="mt-2 font-display text-lg font-bold text-ink">à vista</p>
            <p className="mx-auto mt-4 max-w-md rounded-2xl bg-sun px-4 py-2 font-bold text-ink">
              Isso dá menos de {perActivity} centavos por atividade. Menos do que um chiclete, para ter um caminho
              completo de alfabetização nas suas mãos, para sempre.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
            <CtaButton className="w-full">
              Quero acessar o Alfabetização Sem Segredo agora por {formatBRL(OFFER.priceCents)}
            </CtaButton>
            <TrustLine />
          </div>
        </div>
      </div>
      <Hills className="absolute bottom-0 left-0 h-28 w-full md:h-40" />
    </section>
  );
}
