import React from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export interface MarqueeItem {
  name: string;
  href: string;
  logo: string;
}

const PARTNER_LOGOS = [
  "/partner-logos/1.webp",
  "/partner-logos/2.png",
  "/partner-logos/3.png",
  "/partner-logos/4.png",
  "/partner-logos/5.png",
  "/partner-logos/6.png",
] as const;

const LOGO_LINKS = [
  { name: "Philips", href: "/testimonials" },
  { name: "Medtronic", href: "/products" },
  { name: "Siemens Healthineers", href: "/services" },
  { name: "GE HealthCare", href: "/products" },
  { name: "Boston Scientific", href: "/testimonials" },
  { name: "Abbott", href: "/services" },
] as const;

/** Repeat logos densely so the track always fills the viewport with no gaps */
function buildDenseItems(repeatCount: number): MarqueeItem[] {
  const items: MarqueeItem[] = [];
  for (let r = 0; r < repeatCount; r++) {
    PARTNER_LOGOS.forEach((logo, i) => {
      const link = LOGO_LINKS[i];
      items.push({ name: link.name, href: link.href, logo });
    });
  }
  return items;
}

const HERO_MARQUEE_ITEMS = buildDenseItems(10);
const DEFAULT_MARQUEE_ITEMS = buildDenseItems(6);

function MarqueeRow({
  items,
  reverse,
  isHero,
}: {
  items: MarqueeItem[];
  reverse?: boolean;
  isHero: boolean;
}) {
  const renderSet = (setIndex: number, ariaHidden?: boolean) =>
    items.map((item, i) => (
      <Link
        key={`${setIndex}-${item.name}-${i}`}
        href={item.href}
        title={item.name}
        aria-label={item.name}
        aria-hidden={ariaHidden}
        tabIndex={ariaHidden ? -1 : undefined}
        className={cn(
          "inline-flex shrink-0 items-center px-2 transition-opacity sm:px-3",
          isHero ? "opacity-70 hover:opacity-100" : "opacity-60 hover:opacity-100"
        )}
      >
        <img
          src={item.logo}
          alt={item.name}
          className="h-8 w-auto min-w-[72px] max-w-[120px] object-contain object-center sm:h-10 sm:min-w-[88px] sm:max-w-[140px]"
          loading="lazy"
          decoding="async"
        />
      </Link>
    ));

  return (
    <div
      className={cn(
        "partner-marquee-track items-center",
        reverse && "partner-marquee-track-reverse"
      )}
    >
      <div className="flex shrink-0 items-center gap-6 sm:gap-10">{renderSet(0)}</div>
      <div className="flex shrink-0 items-center gap-6 sm:gap-10" aria-hidden>
        {renderSet(1, true)}
      </div>
    </div>
  );
}

interface PartnerLogoCarouselProps {
  items?: MarqueeItem[];
  variant?: "default" | "hero";
}

export function PartnerLogoCarousel({ items, variant = "default" }: PartnerLogoCarouselProps) {
  const isHero = variant === "hero";
  const marqueeItems = items ?? (isHero ? HERO_MARQUEE_ITEMS : DEFAULT_MARQUEE_ITEMS);
  const midpoint = Math.ceil(marqueeItems.length / 2);
  const rows = [marqueeItems.slice(0, midpoint), marqueeItems.slice(midpoint)];

  return (
    <section
      className={cn(
        "relative border-y",
        isHero
          ? "w-full overflow-hidden border-border bg-white py-5 sm:py-6"
          : "overflow-hidden border-border bg-background py-8 sm:py-10"
      )}
      aria-label="Partners and products"
    >
      <div
        className={cn(
          "pointer-events-none absolute left-0 z-20 bg-gradient-to-r to-transparent",
          isHero ? "-inset-y-0 w-10 from-white sm:w-24 lg:w-40" : "-bottom-20 -top-20 w-24 from-background sm:w-44 lg:w-64"
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute right-0 z-20 bg-gradient-to-l to-transparent",
          isHero ? "-inset-y-0 w-10 from-white sm:w-24 lg:w-40" : "-bottom-20 -top-20 w-24 from-background sm:w-44 lg:w-64"
        )}
      />
      <div className="relative overflow-hidden">
        <div className="space-y-4 sm:space-y-5">
          <MarqueeRow items={rows[0]} isHero={isHero} />
          <MarqueeRow items={rows[1]} reverse isHero={isHero} />
        </div>
      </div>
    </section>
  );
}
