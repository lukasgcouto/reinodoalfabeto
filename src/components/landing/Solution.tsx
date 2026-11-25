import { Check, X } from "lucide-react";
import { OFFER } from "@/lib/offer";
import { CtaButton } from "./CtaButton";
import { SectionTitle } from "./Decor";
import { ActivityCarousel } from "./ActivityCarousel";

const levels = [
  { label: "Letras", tone: "bg-sun text-ink shadow-[0_6px_0_0_var(--sun-deep)]" },
  { label: "Sons", tone: "bg-cherry text-on-color shadow-[0_6px_0_0_var(--cherry-deep)]" },
  { label: "Sílabas", tone: "bg-leaf text-on-color shadow-[0_6px_0_0_var(--leaf-deep)]" },
  { label: "Palavras", tone: "bg-sky-deep text-on-color shadow-[0_6px_0_0_var(--royal)]" },
  { label: "Frases", tone: "bg-royal text-on-color shadow-[0_6px_0_0_var(--royal-deep)]" },
];

const problems = [
  "Páginas poluídas, cheias de desenhos, cores e elementos que competem pela atenção da criança",
  "Atividades jogadas sem ordem lógica, que deixam a mãe perdida",
  "Visual confuso, que cansa os olhos e faz a criança desistir antes de começar",
];

const solutions = [
  { title: "Eliminar distrações visuais", text: "o olhar da criança vai direto para o que importa" },
  {
    title: "Prender a atenção de forma natural",
    text: "um visual limpo, bonito e lúdico, que convida em vez de cansar",
  },
  { title: "Guiar o raciocínio passo a passo", text: "cada atividade prepara a criança para a próxima" },
  {
    title: "Organizar o caminho para você",
    text: "você sempre sabe em que nível seu filho está e o que vem depois",
  },
];

export function Solution() {
  return (
    <section className="bg-background px-4 py-20 md:py-28">
      <SectionTitle kicker="Conheça" title={<>Alfabetização Sem Segredo</>} />
      <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-relaxed text-ink">
        Um material completo em PDF com mais de{"\u00a0"}
        <strong>{OFFER.activityCount} atividades</strong> de alfabetização
        selecionadas, organizadas em níveis de evolução. A criança sai do zero e avança, degrau por degrau, até a
        leitura de palavras e frases.
      </p>

      {/* level staircase */}
      <ol className="mx-auto mt-12 flex max-w-4xl flex-wrap items-end justify-center gap-3 md:gap-4">
        {levels.map((l, i) => (
          <li
            key={l.label}
            className={`flex w-[30%] flex-col items-center justify-end rounded-2xl px-2 pb-3 pt-4 font-display font-extrabold sm:w-36 ${l.tone}`}
            style={{ minHeight: `${4.5 + i * 1.1}rem` }}
          >
            <span className="text-xs uppercase opacity-80">Nível {i + 1}</span>
            <span className="text-xl md:text-2xl">{l.label}</span>
          </li>
        ))}
      </ol>
      <p className="mx-auto mt-6 max-w-xl text-center font-semibold text-muted-foreground">
        Você não precisa montar nada, pesquisar nada nem adivinhar o próximo passo. Está tudo pronto: é só
        imprimir e aplicar.
      </p>

      <div className="mx-auto mt-20 max-w-6xl">
        <SectionTitle title="Por que ele é diferente das apostilas que você já viu?" className="max-w-4xl" />
        <p className="mt-4 text-center text-lg text-ink">
          Vamos ser sinceras: a maioria das apostilas do mercado tem os mesmos problemas.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border-4 border-dashed border-cherry/40 bg-muted p-7">
            <h3 className="text-2xl font-extrabold text-cherry">A maioria das apostilas</h3>
            <ul className="mt-5 space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex gap-3 text-ink">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-cherry text-on-color">
                    <X className="size-4" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border-4 border-leaf bg-card p-7 shadow-card">
            <h3 className="text-2xl font-extrabold text-leaf-deep">Alfabetização Sem Segredo</h3>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">
              Design pedagógico de alta qualidade estética + aprendizado focado e progressivo. Cada página foi
              desenhada para:
            </p>
            <ul className="mt-5 space-y-4">
              {solutions.map((s) => (
                <li key={s.title} className="flex gap-3 text-ink">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-leaf text-on-color">
                    <Check className="size-4" strokeWidth={3} />
                  </span>
                  <span>
                    <strong>{s.title}:</strong> {s.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ActivityCarousel />

        <p className="mx-auto mt-12 max-w-2xl text-center text-xl font-bold leading-relaxed text-ink">
          O resultado é uma alfabetização <span className="text-leaf-deep">mais rápida</span>,{" "}
          <span className="text-royal">mais organizada</span> e{" "}
          <span className="text-cherry">muito mais prazerosa</span>, para a criança e para você.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButton destination="offer" />
        </div>
      </div>
    </section>
  );
}
