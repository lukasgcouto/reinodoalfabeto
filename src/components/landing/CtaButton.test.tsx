import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CtaButton } from "./CtaButton";
import { Hero } from "./Hero";
import { StickyCta } from "./StickyCta";

vi.mock("@/lib/offer", async (importOriginal) => {
  const original = await importOriginal<typeof import("@/lib/offer")>();
  return { ...original, OFFER: { ...original.OFFER, checkoutUrl: "https://checkout.example.com/pay" } };
});

afterEach(cleanup);

describe("offer navigation independently of the checkout URL", () => {
  it("routes intermediate CTAs to the local offer", () => {
    render(<CtaButton destination="offer" />);
    expect(screen.getByRole("link").getAttribute("href")).toBe("#oferta");
  });
  it("routes the hero CTA to the local offer", () => {
    render(<Hero />);
    expect(screen.getByRole("link").getAttribute("href")).toBe("#oferta");
  });
  it("routes the sticky CTA to the local offer, not checkout", () => {
    render(<StickyCta />);
    expect(screen.getByRole("link").getAttribute("href")).toBe("#oferta");
  });
  it("preserves the external checkout destination for purchase CTAs", () => {
    render(<CtaButton />);
    expect(screen.getByRole("link").getAttribute("href")).toBe("https://checkout.example.com/pay");
  });
});