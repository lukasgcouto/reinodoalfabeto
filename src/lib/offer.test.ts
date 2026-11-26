import { describe, expect, it } from "vitest";
import { OFFER, centsPerActivity, discountPercent, formatBRL } from "./offer";

describe("offer", () => {
  it("sells for R$ 27,00", () => {
    expect(formatBRL(OFFER.priceCents)).toBe("R$ 27,00");
  });
  it("anchors against R$ 67,00", () => {
    expect(formatBRL(OFFER.originalPriceCents)).toBe("R$ 67,00");
  });
  it("shows 60% off against the original price", () => {
    expect(discountPercent()).toBe(60);
  });
  it("includes 200 activities", () => {
    expect(OFFER.activityCount).toBe(200);
  });
  it("costs less than 14 cents per activity", () => {
    expect(centsPerActivity()).toBeLessThan(14);
  });
  it("has a 7-day guarantee", () => {
    expect(OFFER.guaranteeDays).toBe(7);
  });
  it("sends purchase CTAs to the real payment page", () => {
    expect(OFFER.checkoutUrl).toBe("https://payfast.greenn.com.br/9nqv793");
  });
  it("organizes the method in five levels", () => {
    expect(OFFER.levelCount).toBe(5);
  });
  it("includes the parents guide free instead of R$ 29,00", () => {
    expect(OFFER.bonuses[0].originalPriceCents).toBe(2900);
    expect(OFFER.bonuses[0].priceCents).toBe(0);
  });
  it("includes reading sheets and wall alphabet free instead of R$ 37,00", () => {
    expect(OFFER.bonuses[1].originalPriceCents).toBe(3700);
    expect(OFFER.bonuses[1].priceCents).toBe(0);
  });
});
