import { ArrowRight, Lock, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OFFER, formatBRL } from "@/lib/offer";
import { cn } from "@/lib/utils";

export function CtaButton({
  children,
  className,
  pulse = true,
}: {
  children?: React.ReactNode;
  className?: string;
  pulse?: boolean;
}) {
  return (
    <Button asChild variant="cta" size="xl" className={cn(pulse && "animate-pulse-cta", className)}>
      <a href={OFFER.checkoutUrl}>
        {children ?? (
          <span className="whitespace-pre-line text-center">
            {`QUERO MEU KIT POR\n${formatBRL(OFFER.priceCents)}`}
          </span>
        )}
        <ArrowRight />
      </a>
    </Button>
  );
}

export function TrustLine({ className }: { className?: string }) {
  const items = [
    { icon: Lock, label: "Compra segura" },
    { icon: Zap, label: "Acesso imediato por e-mail e WhatsApp" },
    { icon: ShieldCheck, label: `${OFFER.guaranteeDays} dias de garantia incondicional` },
  ];
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm font-bold text-muted-foreground",
        className,
      )}
    >
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-1.5">
          <Icon className="size-4 text-leaf" />
          {label}
        </li>
      ))}
    </ul>
  );
}
