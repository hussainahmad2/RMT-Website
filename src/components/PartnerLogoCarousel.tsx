import React from "react";
import { Link } from "wouter";
import {
  Activity,
  Beaker,
  Building2,
  Cable,
  CircleDot,
  Cloud,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  HeartPulse,
  Microscope,
  RadioTower,
  ShieldCheck,
  Stethoscope,
  TabletSmartphone,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface MarqueeItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

const MARQUEE_ITEMS: MarqueeItem[] = [
  { name: "Philips", href: "/testimonials", icon: HeartPulse },
  { name: "Medtronic", href: "/products", icon: Activity },
  { name: "Siemens Healthineers", href: "/services", icon: Building2 },
  { name: "GE HealthCare", href: "/products", icon: Stethoscope },
  { name: "Boston Scientific", href: "/testimonials", icon: Microscope },
  { name: "Abbott", href: "/services", icon: ShieldCheck },
  { name: "Stryker", href: "/products", icon: Factory },
  { name: "BD Medical", href: "/testimonials", icon: CircleDot },
  { name: "LegendEHR", href: "/products#software-ai", icon: TabletSmartphone },
  { name: "e-Vitals", href: "/products#software-ai", icon: Gauge },
  { name: "Cardio", href: "/products#software-ai", icon: HeartPulse },
  { name: "22-RPM", href: "/products#software-ai", icon: RadioTower },
  { name: "Infuzamed", href: "/products#software-ai", icon: Droplets },
  { name: "Diagnostic Catheters", href: "/products#medical-devices", icon: Cable },
  { name: "Angiographic Catheters", href: "/products#medical-devices", icon: Waves },
  { name: "Microspheres", href: "/products#biomaterials", icon: CircleDot },
  { name: "HealthCloud", href: "/products#software-ai", icon: Cloud },
  { name: "Hyaluronic Acid Serum", href: "/products#biomaterials", icon: Beaker },
];

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
          "pointer-events-none absolute left-0 z-20 w-24 bg-gradient-to-r to-transparent sm:w-44 lg:w-64",
          isHero ? "-bottom-32 top-[calc(-100svh+5rem)] from-[#050b14]" : "-bottom-20 -top-20 from-background"
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute right-0 z-20 w-24 bg-gradient-to-l to-transparent sm:w-44 lg:w-64",
          isHero ? "-bottom-32 top-[calc(-100svh+5rem)] from-[#050b14]" : "-bottom-20 -top-20 from-background"
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
                      "inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap font-heading text-2xl font-bold leading-none transition-colors sm:gap-3 sm:text-4xl lg:text-5xl",
                      isHero ? "text-white/32 hover:text-white" : "text-foreground/30 hover:text-primary"
                    )}
                  >
                    <item.icon className="h-5 w-5 shrink-0 stroke-[1.8] sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
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
