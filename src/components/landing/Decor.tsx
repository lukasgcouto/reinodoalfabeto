import { cn } from "@/lib/utils";

export function CloudShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 90" aria-hidden className={cn("fill-on-color", className)}>
      <path d="M40 80c-20 0-34-12-34-28s14-28 32-28c4-14 18-22 34-22 14 0 26 7 32 18 6-4 13-6 20-6 20 0 36 14 36 32 18 0 34 12 34 26s-12 8-30 8H40z" />
    </svg>
  );
}

export function Hills({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden className={className}>
      <path className="fill-grass" d="M0 90C180 30 360 20 560 70s420 60 600 10 230-40 280-30v110H0z" />
      <path className="fill-leaf" d="M0 120c220-40 420-30 640 0s480 30 800-20v60H0z" />
    </svg>
  );
}

export function Wave({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden
      className={cn("block h-10 w-full md:h-16", flip && "rotate-180", className)}
    >
      <path d="M0 40c240 40 480 40 720 0s480-40 720 0v40H0z" />
    </svg>
  );
}

export function SectionTitle({
  kicker,
  title,
  className,
  tone = "dark",
}: {
  kicker?: string;
  title: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {kicker && (
        <span className="inline-block -rotate-2 rounded-full bg-sun px-5 py-1.5 font-display text-sm font-extrabold uppercase tracking-wider text-ink shadow-[0_4px_0_0_var(--sun-deep)]">
          {kicker}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 text-3xl font-extrabold leading-tight md:text-5xl",
          tone === "dark" ? "text-royal-deep" : "text-on-color",
        )}
      >
        {title}
      </h2>
    </div>
  );
}
