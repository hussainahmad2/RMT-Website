import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

export interface MarqueeItem {
  name: string;
  href: string;
  logo: string;
  lightLogo?: string;
  darkLogo?: string;
}

const UNIVERSITY_LOGOS = [
  {
    name: "ABMI",
    href: "/about",
    logo: "/partner-logos/abmi-logo.png",
  },
  {
    name: "Aga Khan University",
    href: "/about",
    logo: "/partner-logos/agha-khan-university-logo.jpg",
  },
  {
    name: "Alsons",
    href: "/about",
    logo: "/partner-logos/alsons-logo.png",
  },
  {
    name: "APPNA",
    href: "/about",
    logo: "/partner-logos/appna-logo.png",
  },
  {
    name: "COMSTECH",
    href: "/about",
    logo: "/partner-logos/comstech-logo.png",
  },
  {
    name: "Convo",
    href: "/about",
    logo: "/partner-logos/convo-logo.png",
  },
  {
    name: "Diagnox Health",
    href: "/about",
    logo: "/partner-logos/diagnoxhealth-logo.jpg",
  },
  {
    name: "DRAP",
    href: "/about",
    logo: "/partner-logos/drap-logo.png",
  },
  {
    name: "Ezshifa",
    href: "/about",
    logo: "/partner-logos/ezshifa.png",
  },
  {
    name: "Foundation University Islamabad",
    href: "/about",
    logo: "/partner-logos/fui-logo.png",
  },
  {
    name: "Heinz Schade GmbH",
    href: "/about",
    logo: "/partner-logos/heinz-schade-gmbh.png",
  },
  {
    name: "KIT",
    href: "/about",
    logo: "/partner-logos/kit-logo.png",
  },
  {
    name: "University of Cincinnati",
    href: "/about",
    logo: "/partner-logos/university-of-cincinnati-logo.png",
  },
  {
    name: "MedIQ",
    href: "/about",
    logo: "/partner-logos/mediq-logo.png",
  },
  {
    name: "Meethi Zindagi",
    href: "/about",
    logo: "/partner-logos/meethi-zindagi-logo-black.png",
  },
  {
    name: "Melamine Emporium",
    href: "/about",
    logo: "/partner-logos/melamine-emporium-logo.jpg",
  },
  {
    name: "MOST",
    href: "/about",
    logo: "/partner-logos/most-logo.jpg",
    lightLogo: "/partner-logos/most-light-logo.png",
    darkLogo: "/partner-logos/most-dark-logo.png",
  },
  {
    name: "Neureveal",
    href: "/about",
    logo: "/partner-logos/neureveal-logo.png",
  },
  {
    name: "NIC",
    href: "/about",
    logo: "/partner-logos/nic-logo.webp",
  },
  {
    name: "NOMW Health",
    href: "/about",
    logo: "/partner-logos/nomw-health-logo.jpg",
  },
  {
    name: "National University of Sciences and Technology",
    href: "/about",
    logo: "/partner-logos/nust-logo.png",
  },
  {
    name: "OPEN Islamabad",
    href: "/about",
    logo: "/partner-logos/open-isb-logo.png",
  },
  {
    name: "Rao Dermatology",
    href: "/about",
    logo: "/partner-logos/rao-dermatology-logo.png",
  },
  {
    name: "Riphah",
    href: "/about",
    logo: "/partner-logos/riphah-logo.jpg",
  },
  {
    name: "Tech4Life",
    href: "/about",
    logo: "/partner-logos/tech4life-logo.png",
  },
  {
    name: "The University of Toledo",
    href: "/about",
    logo: "/partner-logos/university-of-toledo-logo.png",
  },
  {
    name: "Universiti Teknologi MARA",
    href: "/about",
    logo: "/partner-logos/universiti-teknologi-mara-logo.webp",
  },
  {
    name: "University of Jordan",
    href: "/about",
    logo: "/partner-logos/university-of-jordan-logo.png",
  },
  {
    name: "University of Karachi ICCCS",
    href: "/about",
    logo: "/partner-logos/university-of-karachi-icccs-logo.png",
  },
  {
    name: "University of Karachi",
    href: "/about",
    logo: "/partner-logos/university-of-karachi-logo.png",
  },
  {
    name: "US Surgitech",
    href: "/about",
    logo: "/partner-logos/us-surgitech-logo.png",
  },
  {
    name: "Vita Durare",
    href: "/about",
    logo: "/partner-logos/vita-durare-logo.svg",
  },
] as const;

/** Repeat logos densely so the track always fills the viewport with no gaps */
function buildDenseItems(repeatCount: number): MarqueeItem[] {
  const items: MarqueeItem[] = [];
  for (let r = 0; r < repeatCount; r++) {
    UNIVERSITY_LOGOS.forEach((item) => {
      items.push(item);
    });
  }
  return items;
}

const HERO_MARQUEE_ITEMS = buildDenseItems(6);
const HERO_MARQUEE_ITEMS_ROW_2 = buildDenseItems(6).slice().reverse();
const DEFAULT_MARQUEE_ITEMS = buildDenseItems(6);

function MarqueeRow({
  items,
  isHero,
  reverse = false,
}: {
  items: MarqueeItem[];
  isHero: boolean;
  reverse?: boolean;
}) {
  const { theme } = useTheme();

  const resolveLogo = (item: MarqueeItem) => {
    if (item.name !== "MOST") return item.logo;
    return theme === "dark" ? item.darkLogo ?? item.logo : item.lightLogo ?? item.logo;
  };

  const renderSet = (setIndex: number, ariaHidden?: boolean) =>
    items.map((item, i) => (
      <Link
        key={`${setIndex}-${item.name}-${i}`}
        href={item.href}
        title={item.name}
        aria-label={item.name}
        aria-hidden={ariaHidden}
        tabIndex={ariaHidden ? -1 : undefined}
        className="group inline-flex shrink-0 items-center px-2 sm:px-3"
      >
        <span
          className={cn(
            "flex h-14 w-[150px] items-center justify-center rounded-xl bg-transparent px-3 py-2 transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-16 sm:w-[180px]",
            isHero ? "backdrop-blur-[2px]" : "bg-transparent"
          )}
        >
          <img
            src={resolveLogo(item)}
            alt={item.name}
            className="max-h-full max-w-full object-contain object-center opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
            loading="lazy"
            decoding="async"
          />
        </span>
      </Link>
    ));

  return (
    <div
      className="partner-marquee-track items-center"
      style={reverse ? { animationName: "partner-marquee-reverse" } : undefined}
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
  eyebrow?: string;
  heading?: string;
}

export function PartnerLogoCarousel({
  items,
  variant = "default",
  eyebrow = "Trusted Across Borders",
  heading = "Institutions & Partners We Work With",
}: PartnerLogoCarouselProps) {
  const isHero = variant === "hero";
  const marqueeItems = items ?? (isHero ? HERO_MARQUEE_ITEMS : DEFAULT_MARQUEE_ITEMS);
  const marqueeItemsRow2 = items ?? HERO_MARQUEE_ITEMS_ROW_2;

  return (
    <section
      className={cn(
        "partner-carousel-surface relative border-y group",
        isHero
          ? "w-full overflow-hidden border-border bg-white py-8 sm:py-10 dark:bg-[#08111f]"
          : "overflow-hidden border-border bg-background py-8 sm:py-10"
      )}
      aria-label="University and partner logos"
    >
      {isHero && (
        <div className="page-container relative z-10 mb-6 flex flex-col items-center gap-1.5 text-center sm:mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
          <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">{heading}</h3>
        </div>
      )}

      <div
        className="relative z-10 overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
          maskImage: "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <MarqueeRow items={marqueeItems} isHero={isHero} />
        {isHero && (
          <div className="mt-5 sm:mt-7">
            <MarqueeRow items={marqueeItemsRow2} isHero={isHero} reverse />
          </div>
        )}
      </div>
    </section>
  );
}