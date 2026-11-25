import { Clock } from "lucide-react";
import { OFFER } from "@/lib/offer";
import { CloudShape } from "./Decor";

export function Story() {
  return (
    <section className="bg-cream">
      <div className="paper-dots rounded-t-[3rem] px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="relative order-2 md:order-1">
            <img
              src="/crianca-tela.webp"
              alt="Mãe cansada no sofá enquanto o filho olha para o tablet"
              width={1024}
              height={1024}
              loading="lazy" decoding="async"
              className="-rotate-2 rounded-[2rem] border-[6px] border-on-color shadow-card"
            />
            <div className="absolute -bottom-6 right-4 rotate-3 rounded-3xl bg-cherry px-5 py-3 font-display text-lg font-extrabold text-on-color shadow-[0_5px_0_0_var(--cherry-deep)]">
              “Será que ele está atrasado?”
            </div>
          </div>

          <div className="order-1 space-y-4 text-lg leading-relaxed text-ink md:order-2">
            <h2 className="text-3xl font-extrabold leading-tight text-royal-deep md:text-4xl">
              Você já olhou para o seu filho e sentiu aquele aperto no peito?
            </h2>
            <p>
              Aquela pergunta que não sai da cabeça: <strong>“Será que ele está atrasado na leitura?”</strong>
            </p>
            <p>
              Você vê os coleguinhas já soletrando palavras. Ouve comentários na saída da escola. Abre as redes
              sociais e vê outra mãe mostrando a filha lendo uma historinha inteira.
            </p>
            <p>
              E aí você olha para o seu pequeno… e ele está de novo com os olhos{" "}
              <strong className="text-cherry">grudados na tela</strong>.
            </p>
            <p>
              Você tenta tirar o tablet ou o celular e vira uma guerra. Tenta sentar para ensinar e ele levanta em
              dois minutos. E você, cansada depois de um dia inteiro, não sabe por onde começar, nem qual material
              usar, nem se está fazendo do jeito certo.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-4 text-center text-lg leading-relaxed text-ink">
          <p className="font-display text-2xl font-extrabold text-royal">Se você se identificou, respire.</p>
          <p>Isso não é falta de capacidade sua, nem preguiça do seu filho.</p>
          <p>
            Na maioria das vezes, o problema é outro:{" "}
            <mark className="rounded-lg bg-sun px-1.5 font-bold text-ink">
              falta um caminho claro, organizado e leve.
            </mark>
          </p>
          <p>
            Existe uma saída que não exige que você vire professora, nem que gaste horas planejando aula, nem que
            brigue para tirar seu filho da tela.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-2xl">
          <CloudShape className="absolute -left-10 -top-8 w-32 opacity-90" />
          <div className="relative rounded-[3rem] bg-royal-gradient px-8 py-8 text-center shadow-toy">
            <Clock className="mx-auto size-12 animate-wiggle text-sun" />
            <p className="mt-3 font-display text-3xl font-extrabold leading-tight text-on-color md:text-4xl">
              E ela cabe em <span className="text-sun">{OFFER.minutesPerDay} minutos por dia.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
