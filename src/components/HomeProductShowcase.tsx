import React from "react";
import { Link } from "wouter";
import { ArrowRight, Sparkles } from "lucide-react";
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
    border: "border-blue-500/25",
    bg: "bg-blue-500/10",
    text: "text-blue-700 dark:text-blue-200",
    line: "bg-blue-500",
  },
  cyan: {
    border: "border-green-500/25",
    bg: "bg-green-500/10",
    text: "text-green-700 dark:text-green-200",
    line: "bg-green-500",
  },
  emerald: {
    border: "border-red-500/25",
    bg: "bg-red-500/10",
    text: "text-red-700 dark:text-red-200",
    line: "bg-red-500",
  },
  violet: {
    border: "border-blue-500/25",
    bg: "bg-blue-500/10",
    text: "text-blue-700 dark:text-blue-200",
    line: "bg-blue-500",
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
      initial={{ opacity: 0, x: -60, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      className="grid overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="relative min-h-[320px] overflow-hidden lg:min-h-[480px]">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#060d17]/72" />
        <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
          {product.specs.slice(0, 3).map((spec) => (
            <span key={spec} className="rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
              {spec}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <div className={`mb-4 inline-flex w-fit items-center rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${accent.border} ${accent.bg} ${accent.text}`}>
          Flagship Device
        </div>
        <h3 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {product.name}
        </h3>
        <p className="mt-3 text-lg font-semibold leading-snug text-foreground/90">
          {product.headline}
        </p>
        <div className={`my-5 h-0.5 w-16 ${accent.line}`} />
        <p className="line-clamp-4 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
          {product.description}
        </p>
        <div className="mt-5 rounded-2xl border border-border bg-background/70 p-4">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p className="text-sm italic leading-relaxed text-foreground/80 lg:text-base">{product.uniqueAngle}</p>
          </div>
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild className="h-11 px-6 font-semibold">
            <Link href={productsHref}>Explore Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline" className="h-11 px-6 font-semibold">
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

  return (
    <motion.article
      initial={{ opacity: 0, y: 36, scale: 0.93 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.13, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={category.href}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
      >
        <div className="relative h-44 overflow-hidden sm:h-48">
          <img
            src={category.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#060d17]/66" />
          <span className="absolute left-4 top-4 rounded-full border border-border/80 bg-background/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/70 shadow-sm backdrop-blur-sm dark:border-white/12 dark:bg-white/10 dark:text-white/72">
            {category.count}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="font-heading text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
            {category.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground lg:text-base">
            {category.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
            View category <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export function HomeCapabilitiesSection() {
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-transparent py-16 sm:py-20">
      <div
        className="pointer-events-none absolute right-0 top-[-2rem] z-30 hidden lg:block"
        aria-hidden
      >
        <div
          className="h-[49rem] w-[49rem] bg-primary/8 dark:bg-white/8"
          style={{
            WebkitMaskImage: "url('/bg-icons/stethoscope.png')",
            maskImage: "url('/bg-icons/stethoscope.png')",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            transform: "rotate(-90deg)",
            transformOrigin: "center center",
          }}
        />
      </div>
      <div className="page-container relative z-10">
        <AnimatedSection className="mx-auto mb-10 max-w-3xl text-center" animation="scaleUp" delay={0.5} duration={0.8}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">How We Deliver</p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Concept to Market, <span className="text-primary">Under One Roof</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground lg:text-xl">
            RMT is a full-stack medical technology partner — not just a manufacturer. Every stage of your product journey is covered in-house.
          </p>
        </AnimatedSection>

        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-4 shadow-sm sm:p-6">
          <div className="grid gap-3 sm:grid-cols-5">
            {HOME_PRODUCTION_LINE.map((stage, i) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, x: -18, scale: 0.92 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { value: "15+", label: "Years in medtech" },
            { value: "ISO 13485", label: "Certified QMS" },
            { value: "2 Continents", label: "US & South Asia ops" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

      <div className="my-10 flex items-center gap-4 sm:my-12" aria-hidden>
        <div className="h-px flex-1 bg-border" />
        <p className="shrink-0 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Product Lines</p>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {productCategories.map((category, index) => (
          <CategoryCard key={category.title} category={category} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.65 }}
        className="mt-8"
      >
        <Link
          href="/products"
          className="group relative flex items-center justify-between gap-6 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-xl dark:border-white/10 dark:bg-[#0b1322] sm:p-8"
        >
          <img
            src={HOME_IMAGES.process}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-10 dark:opacity-20"
            loading="lazy"
            aria-hidden
          />
          <div className="absolute inset-0 bg-background/88 dark:bg-[#0b1322]/88" aria-hidden />
          <div className="relative z-10 min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
              Full Portfolio
            </p>
            <h3 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl dark:text-white">
              Explore All Devices &amp; Production Equipment
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base dark:text-white/68">
              Six flagship technologies and a growing portfolio of interventional devices, biomaterials, cleanroom manufacturing, and custom production lines.
            </p>
          </div>
          <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-background text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-white dark:border-white/12 dark:bg-white/10 dark:text-white dark:group-hover:bg-white dark:group-hover:text-primary">
            <ArrowRight className="h-5 w-5" />
          </span>
        </Link>
      </motion.div>
    </div>
  );
}