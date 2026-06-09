import React from "react";
import { Link } from "wouter";

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

interface PartnerLogoCarouselProps {
  items?: MarqueeItem[];
}

/** Slim horizontal scrolling anchor strip — no heading, no external images */
export function PartnerLogoCarousel({ items = MARQUEE_ITEMS }: PartnerLogoCarouselProps) {
  const loop = [...items, ...items];

  return (
    <section className="border-y border-border bg-muted/25 py-0" aria-label="Partners and products">
      <div className="relative overflow-hidden min-h-[40px]">
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-muted/25 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-muted/25 to-transparent z-10 pointer-events-none" />

        <div className="partner-marquee-track items-center">
          {loop.map((item, i) => (
            <Link
              key={`${item.name}-${i}`}
              href={item.href}
              title={item.name}
              className="inline-flex h-10 shrink-0 items-center border-r border-border px-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap transition-colors hover:bg-muted/60 hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
