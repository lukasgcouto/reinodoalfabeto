import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { OFFER } from "@/lib/offer";
import { SectionTitle } from "./Decor";

const faqs: { q: string; a: string[] }[] = [
  {
    q: "Meu filho não para quieto para estudar. Isso vai funcionar?",
    a: [
      `Cada criança tem seu ritmo. As atividades curtas e o visual limpo ajudam a reduzir distrações; comece com calma e respeite as pausas. Você tem ${OFFER.guaranteeDays} dias de garantia para testar.`,
    ],
  },
  {
    q: "Eu não sei como ensinar meu filho a ler. Vou conseguir aplicar?",
    a: [
      "Sim, você não precisa ser professora. Siga os níveis na ordem, sente ao lado da criança e incentive cada tentativa. As atividades já vêm prontas para aplicar, um passo de cada vez.",
    ],
  },
  {
    q: "Eu não tenho tempo. Como encaixar isso na minha rotina?",
    a: [
      `Reserve ${OFFER.minutesPerDay} minutos por dia, depois do lanche ou do jantar, por exemplo. Imprima a próxima atividade e siga a sequência: você não precisa gastar tempo planejando.`,
    ],
  },
  {
    q: "Como recebo o material? Preciso esperar?",
    a: [
      "Assim que a compra for confirmada, o acesso chega por e-mail e WhatsApp. O material é em PDF: você pode baixar, salvar e imprimir quantas vezes quiser, com acesso vitalício.",
    ],
  },
  {
    q: "Serve para professores também?",
    a: [
      "Sim! Professores alfabetizadores usam o material como fonte de atividades lúdicas e organizadas por nível, prontas para imprimir e aplicar com a turma ou em reforço individual.",
    ],
  },
  {
    q: "E se eu não gostar?",
    a: [
      `Você tem ${OFFER.guaranteeDays} dias de garantia incondicional. Se não fizer sentido para você, é só pedir o reembolso. Sem complicação.`,
    ],
  },
];

export function Faq() {
  return (
    <section className="paper-dots px-4 py-20 md:py-28">
      <SectionTitle kicker="Dúvidas" title="Perguntas frequentes" />
      <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl space-y-4">
        {faqs.map((f, i) => (
          <AccordionItem
            key={f.q}
            value={`item-${i}`}
            className="rounded-3xl border-4 border-border bg-card px-5 shadow-card data-[state=open]:border-royal"
          >
            <AccordionTrigger className="font-display text-lg font-extrabold text-royal-deep hover:no-underline md:text-xl">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="space-y-3 text-base leading-relaxed text-ink">
              {f.a.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
