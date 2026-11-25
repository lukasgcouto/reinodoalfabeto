// Single source of truth for the offer shown on the sales page.
export const OFFER = {
  productName: "Alfabetização Sem Segredo",
  brand: "Reino do Alfabeto",
  activityCount: 200,
  priceCents: 2700,
  originalPriceCents: 9700,
  guaranteeDays: 7,
  minutesPerDay: 15,
  levelCount: 5,
  bonuses: [
    {
      title: "Plano de Ação para Pais Sem Tempo",
      description: "Como conduzir os 15 minutos diários sem brigas e o que fazer quando a criança errar.",
      originalPriceCents: 2900,
      priceCents: 0,
    },
    {
      title: "Fichas de Leitura Rápida e Alfabeto de Parede",
      description: "Material complementar para reforçar os sons e sílabas no dia a dia da casa.",
      originalPriceCents: 3700,
      priceCents: 0,
    },
  ],
  ageRange: "4 a 8 anos",
  // Replace with the real payment link (Kiwify, Hotmart, etc.).
  checkoutUrl: "#oferta",
} as const;

export function formatBRL(cents: number): string {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })
    .format(cents / 100)
    .replace(/\u00a0/g, " ");
}

/** Price per activity in cents, rounded to 1 decimal. */
export function centsPerActivity(priceCents = OFFER.priceCents, count = OFFER.activityCount) {
  return Math.round((priceCents / count) * 10) / 10;
}

export function discountPercent(price = OFFER.priceCents, original = OFFER.originalPriceCents) {
  return Math.round((1 - price / original) * 100);
}
