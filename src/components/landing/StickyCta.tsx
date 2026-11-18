import { useEffect, useState } from "react";
import { OFFER, formatBRL } from "@/lib/offer";
import { cn } from "@/lib/utils";

export function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t-4 border-on-color bg-royal px-3 py-2.5 transition-transform duration-300 md:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="leading-tight text-on-color">
          <p className="text-xs line-through opacity-80">{formatBRL(OFFER.originalPriceCents)}</p>
          <p className="font-display text-xl font-extrabold text-sun">{formatBRL(OFFER.priceCents)}</p>
        </div>
        <a
          href={OFFER.checkoutUrl}
          className="flex-1 rounded-full bg-leaf px-4 py-3 text-center font-display text-sm font-extrabold uppercase text-on-color shadow-[0_4px_0_0_var(--leaf-deep)]"
        >
          Quero meu kit agora
        </a>
      </div>
    </div>
  );
}
