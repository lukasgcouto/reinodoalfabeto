import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ActivityCarousel } from "./ActivityCarousel";

const carousel = vi.hoisted(() => ({
  hook: vi.fn(),
  api: {
    selectedScrollSnap: vi.fn(() => 0),
    scrollSnapList: vi.fn(() => [0, 0.3, 0.6, 1]),
    canScrollPrev: vi.fn(() => false),
    canScrollNext: vi.fn(() => true),
    scrollPrev: vi.fn(),
    scrollNext: vi.fn(),
    scrollTo: vi.fn(),
    on: vi.fn(),
    off: vi.fn(),
  },
}));

vi.mock("embla-carousel-react", () => ({ default: carousel.hook }));
vi.mock("./media", () => ({ media: { ligue: "ligue.png", silabas: "silabas.png", recorte: "recorte.png", vogais: "vogais.png" } }));

beforeEach(() => {
  vi.clearAllMocks();
  carousel.api.on.mockReturnValue(carousel.api);
  carousel.api.off.mockReturnValue(carousel.api);
  carousel.hook.mockReturnValue([vi.fn(), carousel.api]);
});
afterEach(() => { cleanup(); vi.useRealTimers(); });

describe("manual activity navigation", () => {
  it("does not move on its own or install autoplay", () => {
    vi.useFakeTimers();
    render(<ActivityCarousel />);
    act(() => vi.advanceTimersByTime(60_000));
    expect(carousel.hook).toHaveBeenCalledWith(expect.objectContaining({ loop: false }), undefined);
    expect(carousel.api.scrollNext).not.toHaveBeenCalled();
    expect(carousel.api.scrollPrev).not.toHaveBeenCalled();
    expect(carousel.api.scrollTo).not.toHaveBeenCalled();
  });

  it("enables user dragging with one-page navigation", () => {
    render(<ActivityCarousel />);
    expect(carousel.hook).toHaveBeenCalledWith(expect.objectContaining({ watchDrag: true, slidesToScroll: 1, axis: "x" }), undefined);
  });

  it("uses a faster manual transition while keeping every page centered", () => {
    render(<ActivityCarousel />);
    expect(carousel.hook).toHaveBeenCalledWith(expect.objectContaining({ duration: 16, align: "center", containScroll: false }), undefined);
  });

  it("moves only when the user requests the next activity or a page", () => {
    render(<ActivityCarousel />);
    fireEvent.click(screen.getByRole("button", { name: "Próxima atividade" }));
    expect(carousel.api.scrollNext).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByRole("button", { name: "Ver página 3" }));
    expect(carousel.api.scrollTo).toHaveBeenCalledWith(2);
  });
});