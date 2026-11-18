import { OFFER } from "@/lib/offer";
import { media } from "./media";

export function Guarantee() {
  return (
    <section className="bg-leaf px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-8 rounded-[2.5rem] bg-card p-7 shadow-[0_8px_0_0_var(--leaf-deep)] md:grid-cols-[280px_1fr] md:p-12">
        <img
          src={media.selo}
          alt={`Selo de garantia de ${OFFER.guaranteeDays} dias`}
          width={816}
          height={816}
          loading="lazy"
          className="mx-auto w-56 animate-float md:w-full"
        />
        <div className="space-y-4 text-lg leading-relaxed text-ink">
          <span className="inline-block rounded-full bg-sun px-4 py-1 font-display text-sm font-extrabold uppercase text-ink">
            Garantia blindada de {OFFER.guaranteeDays} dias
          </span>
          <h2 className="text-3xl font-extrabold leading-tight text-royal-deep md:text-4xl">
            Teste sem risco nenhum
          </h2>
          <p>Sabemos que, quando se trata do seu filho, você quer ter certeza.</p>
          <p className="font-bold">Por isso, a decisão é toda sua, e o risco é todo nosso.</p>
          <p>
            Ao adquirir o Alfabetização Sem Segredo, você tem {OFFER.guaranteeDays} dias de garantia
            incondicional. Baixe o material, imprima as primeiras atividades, sente com seu filho e veja com seus
            próprios olhos como ele reage ao visual limpo e à progressão por níveis.
          </p>
          <p>
            Se por qualquer motivo você sentir que não é para você, basta pedir o reembolso dentro de{" "}
            {OFFER.guaranteeDays} dias.{" "}
            <strong>Sem perguntas, sem burocracia e sem letras miúdas.</strong>
          </p>
          <p className="font-display text-xl font-extrabold text-leaf-deep">
            Quem tem medo de errar é quem não tem garantia. Aqui, você tem.
          </p>
        </div>
      </div>
    </section>
  );
}
