import { GraduationCap, Heart, Sparkles, Sun } from "lucide-react";
import { OFFER } from "@/lib/offer";
import { SectionTitle, Wave } from "./Decor";

const forChild = [
  "Reconhecer e relacionar letras, sons e sílabas de forma gradual, sem pular etapas",
  "Ganhar confiança ao completar atividades no próprio ritmo",
  "Avançar da base até a leitura de palavras e frases, seguindo uma sequência pensada para isso",
  "Criar o hábito de aprender em momentos curtos, leves e sem pressão",
  "Ficar mais tempo longe das telas, com uma atividade que chama a atenção por si só",
];

const forYou = [
  "Menos culpa e menos ansiedade, porque agora existe um método a seguir",
  "Mais tempo de qualidade com seu filho, aprendendo juntos",
  "Zero preparo: nada de pesquisar, recortar ou montar material às 23h",
  "Clareza sobre o que ensinar hoje e o que vem amanhã",
];

export function Benefits() {
  return (
    <section className="relative bg-royal-gradient">
      <Wave className="fill-background" flip />
      <div className="px-4 py-16 md:py-24">
        <SectionTitle tone="light" kicker="Na prática" title="O que seu filho (ou aluno) vai conquistar" />

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-card p-7 shadow-[0_8px_0_0_var(--royal-deep)]">
            <div className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-sun text-ink">
                <Sparkles className="size-6" />
              </span>
              <h3 className="text-2xl font-extrabold text-royal-deep">Para a criança</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {forChild.map((t, i) => (
                <li key={t} className="flex gap-3 text-ink">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-sky font-display font-extrabold text-royal-deep">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="pt-1">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-sunny p-7 shadow-[0_8px_0_0_var(--sun-deep)]">
            <div className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-cherry text-on-color">
                <Heart className="size-6 fill-on-color" />
              </span>
              <h3 className="text-2xl font-extrabold text-royal-deep">E o que muda para você</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {forYou.map((t) => (
                <li key={t} className="flex gap-3 rounded-2xl bg-on-color/70 p-3 font-semibold text-ink">
                  <Heart className="mt-0.5 size-5 shrink-0 fill-cherry text-cherry" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-6xl">
          <SectionTitle tone="light" title="Para quem é o Alfabetização Sem Segredo?" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border-4 border-on-color/30 bg-on-color/10 p-7 text-on-color backdrop-blur">
              <Sun className="size-10 text-sun" />
              <h3 className="mt-3 text-2xl font-extrabold">Para mães e pais</h3>
              <p className="mt-2 leading-relaxed opacity-90">
                De crianças de {OFFER.ageRange} que querem acompanhar e acelerar a alfabetização em casa, sem
                depender de telas e sem precisar de experiência pedagógica.
              </p>
            </div>
            <div className="rounded-[2rem] border-4 border-on-color/30 bg-on-color/10 p-7 text-on-color backdrop-blur">
              <GraduationCap className="size-10 text-sun" />
              <h3 className="mt-3 text-2xl font-extrabold">Para professores alfabetizadores</h3>
              <p className="mt-2 leading-relaxed opacity-90">
                Que buscam atividades lúdicas, bonitas e prontas para imprimir, economizando horas de planejamento
                e enriquecendo as aulas com material organizado por níveis.
              </p>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg font-bold text-on-color">
            Seja em casa ou na sala de aula, a lógica é a mesma: material bem ilustrado, progressivo e fácil de aplicar.
          </p>
        </div>
      </div>
      <Wave className="fill-sky" />
    </section>
  );
}
