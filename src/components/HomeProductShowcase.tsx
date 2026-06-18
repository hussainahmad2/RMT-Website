import React from "react";
import { Link } from "wouter";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  HOME_FEATURED_PRODUCTS,
  HOME_PRODUCTION_LINE,
  type HomeFeaturedProduct,
} from "@/data/home-products";
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

function ProductionLineStrip() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-4 shadow-sm sm:p-5">
      <div
        className="absolute inset-x-8 top-[3.55rem] hidden h-px bg-gradient-to-r from-blue-500/20 via-green-500/35 to-red-500/20 sm:block"
        aria-hidden
      />
      <div className="grid gap-3 sm:grid-cols-5">
        {HOME_PRODUCTION_LINE.map((stage, index) => (
          <div
            key={stage.step}
            className="relative rounded-2xl border border-border bg-background/80 px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
          >
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-card font-heading text-base font-bold text-primary shadow-sm">
              {stage.step}
            </div>
            <p className="mt-1 text-sm font-bold text-foreground sm:text-base">{stage.label}</p>
            <p className="mt-1 text-xs font-medium leading-snug text-muted-foreground sm:text-sm">{stage.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturedProductPanel({ product }: { product: HomeFeaturedProduct }) {
  const accent = accentStyles[product.accent];
  const productsHref = product.productsAnchor ? `/products#${product.productsAnchor}` : "/products";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="grid overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="relative min-h-[380px] overflow-hidden lg:min-h-[560px]">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d17]/85 via-[#060d17]/18 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
          {product.specs.slice(0, 3).map((spec) => (
            <span key={spec} className="rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
              {spec}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <div className={`mb-5 inline-flex w-fit items-center rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${accent.border} ${accent.bg} ${accent.text}`}>
          {product.category}
        </div>
        <h3 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {product.name}
        </h3>
        <p className="mt-3 text-lg font-semibold leading-snug text-foreground/90">
          {product.headline}
        </p>
        <div className={`my-5 h-0.5 w-16 ${accent.line}`} />
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {product.description}
        </p>
        <div className="mt-5 rounded-2xl border border-border bg-background/70 p-4">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p className="text-sm italic leading-relaxed text-foreground/80">{product.uniqueAngle}</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {product.highlights.map((highlight) => (
            <div key={highlight.label} className={`rounded-xl border px-3 py-3 ${accent.border} ${accent.bg}`}>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">{highlight.label}</p>
              <p className={`mt-1 text-xs font-bold ${accent.text}`}>{highlight.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild className="h-11 px-6 font-semibold">
            <Link href={`/services/${product.serviceSlug}`}>
              {product.serviceName} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-11 px-6 font-semibold">
            <Link href={productsHref}>Product Details</Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

function ProductIndexCard({
  product,
  index,
}: {
  product: HomeFeaturedProduct;
  index: number;
}) {
  const accent = accentStyles[product.accent];
  const productsHref = product.productsAnchor ? `/products#${product.productsAnchor}` : "/products";

  return (
    <motion.article
      id={product.id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group grid overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl md:grid-cols-[0.42fr_0.58fr]"
    >
      <div className="relative min-h-[220px] overflow-hidden">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d17]/72 via-transparent to-transparent" />
      </div>

      <div className="p-5 sm:p-6">
        <span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] ${accent.border} ${accent.bg} ${accent.text}`}>
          {product.category}
        </span>
        <h3 className="mt-4 font-heading text-xl font-bold leading-tight text-foreground">
          {product.name}
        </h3>
        <p className="mt-2 text-sm font-semibold leading-snug text-foreground/85">{product.headline}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.specs.slice(0, 3).map((spec) => (
            <span key={spec} className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] text-muted-foreground">
              {spec}
            </span>
          ))}
        </div>
        <div className="mt-5 border-t border-border pt-4">
          <Link href={`/services/${product.serviceSlug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
            {product.serviceName} <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="my-3 h-px w-full bg-border/80" aria-hidden />
          <Link href={productsHref} className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
            Product Details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function PortfolioIndexCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href="/products"
        className="group grid h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl md:grid-cols-[0.42fr_0.58fr]"
      >
        <div className="relative min-h-[220px] overflow-hidden bg-[#050b14]">
          <img
            src={HOME_IMAGES.process}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-72 transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,20,0.88),rgba(5,11,20,0.45)),linear-gradient(180deg,rgba(5,11,20,0.1),rgba(5,11,20,0.82))]" />
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
            Portfolio
          </span>
        </div>

        <div className="flex items-center justify-between gap-5 p-5 sm:p-6">
          <span className="font-heading text-xl font-bold leading-tight text-foreground">
            View Full Product Portfolio
          </span>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function HomeProductShowcase() {
  const [featured, ...rest] = HOME_FEATURED_PRODUCTS;

  return (
    <div className="relative">
      <ProductionLineStrip />
      <div className="mt-10 sm:mt-12">
        <FeaturedProductPanel product={featured} />
      </div>
      <div className="my-10 flex items-center gap-4 sm:my-12" aria-hidden>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border" />
        <div className="h-2 w-2 rounded-full bg-primary/50" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border" />
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        {rest.map((product, index) => (
          <ProductIndexCard key={product.id} product={product} index={index} />
        ))}
        <PortfolioIndexCard />
      </div>
    </div>
  );
}
