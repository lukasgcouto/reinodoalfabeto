import { describe, expect, it } from "vitest";
import { OFFER, centsPerActivity, formatBRL } from "./offer";

describe("offer", () => {
  it("sells for R$ 27,00", () => {
    expect(formatBRL(OFFER.priceCents)).toBe("R$ 27,00");
  });
  it("anchors against R$ 97,00", () => {
    expect(formatBRL(OFFER.originalPriceCents)).toBe("R$ 97,00");
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
});
