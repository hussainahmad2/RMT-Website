import React from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export interface MarqueeItem {
  name: string;
  href: string;
}

const MARQUEE_ITEMS: MarqueeItem[] = [
  { name: "Philips", href: "/testimonials" },
  { name: "Medtronic", href: "/products" },
  { name: "Siemens Healthineers", href: "/services" },
  { name: "GE HealthCare", href: "/products" },
  { name: "Boston Scientific", href: "/testimonials" },
  { name: "Abbott", href: "/services" },
  { name: "Stryker", href: "/products" },
  { name: "BD Medical", href: "/testimonials" },
  { name: "LegendEHR", href: "/products#software-ai" },
  { name: "e-Vitals", href: "/products#software-ai" },
  { name: "Cardio", href: "/products#software-ai" },
  { name: "22-RPM", href: "/products#software-ai" },
  { name: "Infuzamed", href: "/products#software-ai" },
  { name: "Diagnostic Catheters", href: "/products#medical-devices" },
  { name: "Angiographic Catheters", href: "/products#medical-devices" },
  { name: "Microspheres", href: "/products#biomaterials" },
  { name: "HealthCloud", href: "/products#software-ai" },
  { name: "Hyaluronic Acid Serum", href: "/products#biomaterials" },
];

function LogoMark({ variant }: { variant: number }) {
  const baseClass = "flex h-8 w-10 shrink-0 items-center justify-center text-white/72 sm:h-9 sm:w-12";

  if (variant === 0) {
    return (
      <span className={cn(baseClass, "font-heading text-[0.72rem] font-black italic tracking-tighter sm:text-sm")} aria-hidden>
        SAP
      </span>
    );
  }

  if (variant === 1) {
    return (
      <span className={cn(baseClass, "font-serif text-3xl font-black leading-none sm:text-4xl")} aria-hidden>
        U
      </span>
    );
  }

  if (variant === 2) {
    return (
      <span className={cn(baseClass, "gap-0.5")} aria-hidden>
        <span className="h-5 w-1.5 rounded-full bg-current" />
        <span className="h-7 w-1.5 rounded-full bg-current" />
        <span className="h-4 w-1.5 rounded-full bg-current" />
      </span>
    );
  }

  if (variant === 3) {
    return (
      <span className={cn(baseClass, "relative")} aria-hidden>
        <span className="absolute h-6 w-6 rounded-full border-4 border-current" />
        <span className="absolute h-2 w-2 rounded-full bg-current" />
      </span>
    );
  }

  if (variant === 4) {
    return (
      <span className={cn(baseClass, "font-heading text-2xl font-black leading-none sm:text-3xl")} aria-hidden>
        +
      </span>
    );
  }

  return (
    <span className={cn(baseClass, "gap-1")} aria-hidden>
      <span className="h-4 w-4 rounded-tl-xl rounded-br-xl bg-current" />
      <span className="h-4 w-4 rounded-tr-xl rounded-bl-xl bg-current" />
    </span>
  );
}

interface PartnerLogoCarouselProps {
  items?: MarqueeItem[];
  variant?: "default" | "hero";
}

export function PartnerLogoCarousel({ items = MARQUEE_ITEMS, variant = "default" }: PartnerLogoCarouselProps) {
  const midpoint = Math.ceil(items.length / 2);
  const rows = [items.slice(0, midpoint), items.slice(midpoint)];
  const isHero = variant === "hero";

  return (
    <section
      className={cn(
        "relative border-y",
        isHero
          ? "left-1/2 w-screen -translate-x-1/2 overflow-visible border-white/12 bg-white/[0.06] py-5 backdrop-blur-md sm:py-6"
          : "overflow-hidden border-border bg-background py-8 sm:py-10"
      )}
      aria-label="Partners and products"
    >
      <div
        className={cn(
          "pointer-events-none absolute left-0 z-20 bg-gradient-to-r to-transparent",
          isHero ? "-bottom-10 -top-10 w-10 from-[#050b14] sm:-bottom-32 sm:top-[calc(-100svh+5rem)] sm:w-44 lg:w-64" : "-bottom-20 -top-20 w-24 from-background sm:w-44 lg:w-64"
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute right-0 z-20 bg-gradient-to-l to-transparent",
          isHero ? "-bottom-10 -top-10 w-10 from-[#050b14] sm:-bottom-32 sm:top-[calc(-100svh+5rem)] sm:w-44 lg:w-64" : "-bottom-20 -top-20 w-24 from-background sm:w-44 lg:w-64"
        )}
      />
      <div className="relative overflow-hidden">
        <div className="space-y-4 sm:space-y-5">
          {rows.map((row, rowIndex) => {
            const loop = [...row, ...row, ...row];
            return (
              <div
                key={rowIndex}
                className={`partner-marquee-track ${rowIndex === 1 ? "partner-marquee-track-reverse" : ""} items-center gap-9 sm:gap-14`}
              >
                {loop.map((item, i) => (
                  <Link
                    key={`${rowIndex}-${item.name}-${i}`}
                    href={item.href}
                    title={item.name}
                    className={cn(
                      "inline-flex shrink-0 items-center gap-2 whitespace-nowrap font-heading text-lg font-bold leading-none transition-colors sm:gap-2.5 sm:text-2xl lg:text-3xl",
                      isHero ? "text-white/32 hover:text-white" : "text-foreground/30 hover:text-primary"
                    )}
                  >
                    <LogoMark variant={(i + rowIndex) % 6} />
                    {item.name}
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
