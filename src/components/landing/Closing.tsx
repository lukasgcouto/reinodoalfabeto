import { OFFER, formatBRL } from "@/lib/offer";
import { CtaButton, TrustLine } from "./CtaButton";
import { media } from "./media";

export function Closing() {
  return (
    <section className="bg-sky-gradient px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-extrabold leading-tight text-royal-deep md:text-5xl">
          Daqui a alguns meses, onde você quer estar?
        </h2>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          <img
            src={media.maeFilha}
            alt="Mãe orgulhosa ao lado da filha que lê sozinha uma folha com o alfabeto"
            width={1280}
            height={960}
            loading="lazy"
            className="rotate-2 rounded-[2rem] border-[6px] border-on-color shadow-toy"
          />
          <div className="space-y-4 text-lg leading-relaxed text-ink">
            <p className="font-bold">Imagine esta cena.</p>
            <p>
              Seu filho, sentado à mesa, com o lápis na mão e um sorrisinho orgulhoso no rosto. Ele olha para uma
              palavra e, devagar, lê.
            </p>
            <p className="font-display text-4xl font-extrabold text-cherry">Sozinho.</p>
            <p>E você, ao lado dele, com aquele nó no peito se transformando em orgulho.</p>
            <p>
              Essa cena não depende de mágica nem de você virar professora. Ela começa com um passo simples: dar a
              ele um material claro, bonito e organizado, e dedicar {OFFER.minutesPerDay} minutos por dia.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4 text-center text-lg leading-relaxed text-ink">
          <p>
            Cada dia que passa é um dia em que a tela ocupa o espaço que poderia ser de aprendizado, vínculo e
            descoberta. E o melhor momento para começar não é “quando der tempo”. <strong>É agora.</strong>
          </p>
          <p>
            Por <strong>{formatBRL(OFFER.priceCents)}</strong>, menos do que um lanche, você leva um caminho
            completo de alfabetização, com {OFFER.activityCount} atividades, acesso imediato, acesso vitalício e{" "}
            {OFFER.guaranteeDays} dias de garantia.
          </p>
          <p className="font-display text-2xl font-extrabold text-royal-deep md:text-3xl">
            Você não tem nada a perder.
            <br />
            <span className="text-leaf-deep">Seu filho tem muito a ganhar.</span>
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <CtaButton className="w-full max-w-2xl">
            Quero destravar a leitura do meu filho
          </CtaButton>
          <TrustLine />
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-4 rounded-[2rem] bg-card p-7 text-ink shadow-card">
          <p>
            <strong className="text-royal">P.S.:</strong> Lembre-se: você tem {OFFER.guaranteeDays} dias para
            testar. Se seu filho não se envolver com as atividades, você pede o reembolso. Mas se ele se envolver (e
            a maioria das crianças reage muito bem a materiais limpos e lúdicos), você terá dado a ele um presente
            que dura a vida inteira: o prazer de ler. 💛
          </p>
          <p>
            <strong className="text-royal">P.P.S.:</strong> Cada dia de espera é um dia a menos de progresso.
            Garanta agora o acesso por {formatBRL(OFFER.priceCents)} e comece ainda hoje.
          </p>
        </div>
      </div>
    </section>
  );
}
