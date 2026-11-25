import { createFileRoute } from "@tanstack/react-router";
import { Benefits } from "@/components/landing/Benefits";
import { Closing } from "@/components/landing/Closing";
import { Faq } from "@/components/landing/Faq";
import { Guarantee } from "@/components/landing/Guarantee";
import { Offer } from "@/components/landing/Offer";
import { Solution } from "@/components/landing/Solution";
import { StickyCta } from "@/components/landing/StickyCta";
import { Story } from "@/components/landing/Story";
import { Testimonials } from "@/components/landing/Testimonials";
import { OFFER, formatBRL } from "@/lib/offer";

const title = `Alfabetização Sem Segredo: ${OFFER.activityCount} atividades para imprimir | Reino do Alfabeto`;
const description = `${OFFER.activityCount} atividades de alfabetização organizadas por níveis, prontas para imprimir. ${OFFER.minutesPerDay} minutos por dia, sem telas. Por ${formatBRL(OFFER.priceCents)} com ${OFFER.guaranteeDays} dias de garantia.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-hidden">
      <HeroPromoBar />
      <Hero />
      <Story />
      <Solution />
      <Benefits />
         <div className="testimonials-band px-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <Testimonials />
        </div>
      </div>
      <Offer />
      <Guarantee />
      <Faq />
      <Closing />
      <footer className="bg-royal-deep px-4 pb-24 pt-8 text-center text-sm text-on-color/80 md:pb-8">
        <p className="font-display font-bold">Reino do Alfabeto · Alfabetização Sem Segredo</p>
        <p className="mt-1">Produto digital em PDF. Acesso enviado por e-mail e WhatsApp.</p>
      </footer>
      <StickyCta />
    </main>
  );
}
