import React from "react";
import { Link } from "wouter";
import { ArrowRight, Sparkles, Stethoscope, Microscope, Cog, Atom, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  HOME_FEATURED_PRODUCTS,
  HOME_PRODUCTION_LINE,
  type HomeFeaturedProduct,
} from "@/data/home-products";
import { MANUFACTURING_IMAGES } from "@/data/revive-manufacturing-content";
import { HOME_IMAGES } from "@/data/home-images";

const accentStyles = {
  sky: {
    border: "border-blue-400/30",
    bg: "bg-blue-400/15",
    text: "text-blue-100",
    line: "bg-blue-400",
  },
  cyan: {
    border: "border-green-400/30",
    bg: "bg-green-400/15",
    text: "text-green-100",
    line: "bg-green-400",
  },
  emerald: {
    border: "border-red-400/30",
    bg: "bg-red-400/15",
    text: "text-red-100",
    line: "bg-red-400",
  },
  violet: {
    border: "border-blue-400/30",
    bg: "bg-blue-400/15",
    text: "text-blue-100",
    line: "bg-blue-400",
  },
} as const;

const productCategories = [
  {
    title: "Interventional Catheters",
    description: "Guiding, angiographic, and diagnostic catheters engineered for tortuous anatomy and multi-device delivery.",
    image: MANUFACTURING_IMAGES.angiographicCatheter,
    href: "/products#medical-devices",
    count: "3+ device families",
    accent: "sky" as const,
  },
  {
    title: "Biomaterials & Microspheres",
    description: "Calibrated embolization spheres and biomaterial platforms with tight size distribution and batch release criteria.",
    image: MANUFACTURING_IMAGES.microspheres,
    href: "/products#biomaterials",
    count: "Multi-range sizing",
    accent: "emerald" as const,
  },
  {
    title: "Cleanroom & Production Equipment",
    description: "ISO-classified manufacturing and custom catheter forming, bonding, and validation-ready production lines.",
    image: MANUFACTURING_IMAGES.facility2,
    href: "/products#production-equipment",
    count: "Class I–III + bespoke lines",
    accent: "violet" as const,
  },
] as const;

function FeaturedProductPanel({ product }: { product: HomeFeaturedProduct }) {
  const accent = accentStyles[product.accent];
  const productsHref = product.productsAnchor ? `/products#${product.productsAnchor}` : "/products";

  return (
    <motion.article
      initial={{ opacity: 0, x: -140, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px", amount: 0.15 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="grid overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#0b1322]/85 shadow-2xl backdrop-blur-md sm:rounded-[2rem] lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="relative min-h-[260px] overflow-hidden sm:min-h-[320px] lg:min-h-[480px]">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#060d17]/72" />
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 sm:bottom-5 sm:left-5 sm:right-5">
          {product.specs.slice(0, 3).map((spec) => (
            <span key={spec} className="rounded-full border border-white/20 bg-black/45 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm sm:px-3 sm:text-[11px]">
              {spec}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
        <div className={`mb-4 inline-flex w-fit items-center rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${accent.border} ${accent.bg} ${accent.text}`}>
          Flagship Device
        </div>
        <h3 className="font-heading text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
          {product.name}
        </h3>
        <p className="mt-3 text-base font-semibold leading-snug text-white/92 sm:text-lg">
          {product.headline}
        </p>
        <div className={`my-5 h-0.5 w-16 ${accent.line}`} />
        <p className="line-clamp-4 text-sm leading-relaxed text-white/68 sm:text-base lg:text-lg">
          {product.description}
        </p>
        <div className="mt-5 rounded-2xl border border-white/12 bg-white/5 p-4">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
            <p className="text-sm italic leading-relaxed text-white/78 lg:text-base">{product.uniqueAngle}</p>
          </div>
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild className="h-11 px-6 font-semibold">
            <Link href={productsHref}>Explore Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline" className="h-11 border-white/30 px-6 font-semibold text-white hover:bg-white/10">
            <Link href={`/services/${product.serviceSlug}`}>{product.serviceName}</Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

function CategoryCard({
  category,
  index,
}: {
  category: (typeof productCategories)[number];
  index: number;
}) {
  const accent = accentStyles[category.accent];
  const fromSide = index % 2 === 0 ? -1 : 1;

  return (
    <motion.article
      initial={{ opacity: 0, x: fromSide * 90, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px", amount: 0.2 }}
      transition={{ delay: index * 0.13, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={category.href}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#0b1322]/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:shadow-2xl"
      >
        <div className="relative h-40 overflow-hidden sm:h-44 lg:h-48">
          <img
            src={category.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#060d17]/66" />
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/85 backdrop-blur-sm">
            {category.count}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="font-heading text-lg font-bold leading-tight text-white transition-colors group-hover:text-sky-300 sm:text-xl lg:text-2xl">
            {category.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-white/62 lg:text-base">
            {category.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300 transition-all group-hover:gap-2.5">
            View category <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

/** Scattered icon watermark — stands in for a photo background without competing with the cards */
function DeliveryWatermark() {
  const marks = [
    { Icon: Stethoscope, top: "6%", left: "4%", size: 120, rotate: -18, opacity: 0.05 },
    { Icon: Cog, top: "62%", left: "2%", size: 90, rotate: 14, opacity: 0.06 },
    { Icon: Microscope, top: "10%", left: "88%", size: 130, rotate: 12, opacity: 0.05 },
    { Icon: Atom, top: "58%", left: "90%", size: 110, rotate: -10, opacity: 0.06 },
    { Icon: FlaskConical, top: "82%", left: "48%", size: 90, rotate: 8, opacity: 0.05 },
  ] as const;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {marks.map(({ Icon, top, left, size, rotate, opacity }, i) => (
        <Icon
          key={i}
          style={{
            position: "absolute",
            top,
            left,
            width: size,
            height: size,
            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
            opacity,
          }}
          className="text-primary dark:text-white"
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

export function HomeCapabilitiesSection() {
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-background py-14 sm:py-16 lg:py-24">
      <div className="hidden lg:block">
        <DeliveryWatermark />
      </div>
      <div className="page-container relative z-10">
        <AnimatedSection className="mx-auto mb-10 max-w-3xl text-center" animation="scaleUp" delay={0.1} duration={0.85}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">How We Deliver</p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Concept to Market, <span className="text-primary">Under One Roof</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground lg:text-xl">
            RMT is a full-stack medical technology partner — not just a manufacturer. Every stage of your product journey is covered in-house.
          </p>
        </AnimatedSection>

        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-4 shadow-sm sm:p-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {HOME_PRODUCTION_LINE.map((stage, i) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 50, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px", amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-border bg-background/80 px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-card font-heading text-base font-bold text-primary shadow-sm">
                  {stage.step}
                </div>
                <p className="text-base font-bold text-foreground sm:text-lg">{stage.label}</p>
                <p className="mt-1 text-sm font-medium leading-snug text-muted-foreground sm:text-base">{stage.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { value: "15+", label: "Years in medtech" },
            { value: "ISO 13485", label: "Certified QMS" },
            { value: "2 Continents", label: "US & South Asia ops" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-border bg-card px-5 py-4 text-center shadow-sm"
            >
              <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-base text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeProductShowcase() {
  const featured = HOME_FEATURED_PRODUCTS[0];

  return (
    <div className="relative">
      <FeaturedProductPanel product={featured} />

      <div className="my-8 flex items-center gap-4 sm:my-10" aria-hidden>
        <div className="h-px flex-1 bg-white/15" />
        <p className="shrink-0 text-xs font-bold uppercase tracking-[0.2em] text-white/50">Product Lines</p>
        <div className="h-px flex-1 bg-white/15" />
      </div>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {productCategories.map((category, index) => (
          <CategoryCard key={category.title} category={category} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.15, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8"
      >
        <Link
          href="/products"
          className="group relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl border border-white/12 bg-[#0b1322]/85 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <img
            src={HOME_IMAGES.process}
            alt=""
            className="absolute inset-0 hidden h-full w-full object-cover opacity-15 sm:block"
            loading="lazy"
            aria-hidden
          />
          <div className="absolute inset-0 bg-[#0b1322]/88" aria-hidden />
          <div className="relative z-10 min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
              Full Portfolio
            </p>
            <h3 className="mt-2 font-heading text-xl font-bold text-white sm:text-2xl lg:text-3xl">
              Explore All Devices &amp; Production Equipment
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/68 sm:text-base">
              Six flagship technologies and a growing portfolio of interventional devices, biomaterials, cleanroom manufacturing, and custom production lines.
            </p>
          </div>
          <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-primary">
            <ArrowRight className="h-5 w-5" />
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
