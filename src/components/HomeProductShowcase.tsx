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

const accentStyles = {
  sky: {
    badge: "bg-sky-500/15 text-sky-600 border-sky-400/30 dark:text-sky-300",
    line: "bg-sky-400",
    stat: "border-sky-400/25 bg-sky-500/10 text-sky-700 dark:text-sky-200",
    glow: "from-sky-500/20",
  },
  cyan: {
    badge: "bg-cyan-500/15 text-cyan-600 border-cyan-400/30 dark:text-cyan-300",
    line: "bg-cyan-400",
    stat: "border-cyan-400/25 bg-cyan-500/10 text-cyan-700 dark:text-cyan-200",
    glow: "from-cyan-500/20",
  },
  emerald: {
    badge: "bg-emerald-500/15 text-emerald-600 border-emerald-400/35 dark:text-emerald-300",
    line: "bg-emerald-400",
    stat: "border-emerald-400/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-200",
    glow: "from-emerald-500/20",
  },
  violet: {
    badge: "bg-violet-500/15 text-violet-600 border-violet-400/30 dark:text-violet-300",
    line: "bg-violet-400",
    stat: "border-violet-400/25 bg-violet-500/10 text-violet-700 dark:text-violet-200",
    glow: "from-violet-500/20",
  },
} as const;

function ProductZigzagRow({
  product,
  index,
}: {
  product: HomeFeaturedProduct;
  index: number;
}) {
  const accent = accentStyles[product.accent];
  const imageOnLeft = index % 2 === 0;
  const productsHref = product.productsAnchor
    ? `/products#${product.productsAnchor}`
    : "/products";

  return (
    <motion.article
      id={product.id}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative scroll-mt-28 max-w-6xl w-full ${
        imageOnLeft ? "mr-auto" : "ml-auto"
      }`}
    >
      <div
        className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-8 h-px ${accent.line} opacity-50 ${
          imageOnLeft ? "-right-10" : "-left-10"
        }`}
        aria-hidden
      />

      <div
        className={`relative rounded-2xl border border-border bg-card shadow-xl overflow-hidden ${
          imageOnLeft ? "lg:rounded-r-3xl" : "lg:rounded-l-3xl"
        }`}
      >
        <div className="flex items-center gap-4 px-5 sm:px-6 py-3 border-b border-border bg-muted/40">
          <span className={`font-heading text-3xl font-black tabular-nums ${imageOnLeft ? "text-primary" : "text-primary/80"}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className={`h-8 w-px ${accent.line} opacity-40`} />
          <div className="min-w-0 flex-1">
            <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] ${accent.badge}`}>
              {product.category}
            </span>
            <p className="font-heading font-bold text-foreground truncate mt-1">{product.name}</p>
          </div>
          <div className="hidden md:flex items-center gap-2 shrink-0">
            {product.highlights.map((h) => (
              <div key={h.label} className={`rounded-lg border px-2 py-1.5 text-center min-w-[68px] ${accent.stat}`}>
                <p className="text-[8px] uppercase tracking-wider opacity-70">{h.label}</p>
                <p className="text-[10px] font-bold">{h.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`grid lg:grid-cols-2 ${imageOnLeft ? "" : "lg:[direction:rtl]"}`}>
          <div className={`relative min-h-[280px] sm:min-h-[340px] lg:min-h-[380px] ${imageOnLeft ? "lg:border-r" : "lg:border-l lg:[direction:ltr]"} border-border`}>
            <div className={`absolute -inset-1 bg-gradient-to-br ${accent.glow} to-transparent blur-xl opacity-50 pointer-events-none`} aria-hidden />
            <img
              src={product.image}
              alt={product.imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-[#060d17]/80 via-[#060d17]/20 to-transparent ${
              imageOnLeft ? "lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#060d17]/10" : "lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[#060d17]/10"
            }`} />
            <div className={`absolute bottom-0 ${imageOnLeft ? "left-0" : "right-0 lg:left-auto"} p-5 sm:p-6 lg:[direction:ltr]`}>
              <div className="flex flex-wrap gap-2">
                {product.specs.slice(0, 2).map((spec) => (
                  <span key={spec} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-black/50 text-white border border-white/20 backdrop-blur-sm">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center lg:[direction:ltr]">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-2">
              {product.name}
            </h3>
            <p className="text-base sm:text-lg font-semibold text-foreground/90 leading-snug mb-4">
              {product.headline}
            </p>
            <div className={`h-0.5 w-12 mb-4 ${accent.line}`} />
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              {product.description}
            </p>
            <div className="rounded-xl border border-primary/15 bg-primary/[0.04] p-4 mb-5">
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                <p className="text-sm italic text-foreground/80 leading-relaxed">{product.uniqueAngle}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {product.specs.map((spec) => (
                <span key={spec} className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-border bg-muted/40 text-muted-foreground">
                  {spec}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full h-11 px-6 font-semibold">
                <Link href={`/services/${product.serviceSlug}`}>
                  {product.serviceName} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full h-11 px-6 font-semibold">
                <Link href={productsHref}>Product Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProductionLineStrip() {
  return (
    <div className="relative mb-14 sm:mb-16 rounded-2xl border border-border bg-card/90 backdrop-blur-sm overflow-hidden">
      <div className="px-4 sm:px-6 py-5 sm:py-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary text-center mb-6">
          Concept → Engineer → Validate → Manufacture → Deliver
        </p>
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden sm:block absolute top-5 left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden />
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {HOME_PRODUCTION_LINE.map((stage) => (
              <div key={stage.step} className="flex flex-col items-center text-center">
                <div className="relative z-10 w-10 h-10 rounded-full border-2 border-primary/30 bg-background flex items-center justify-center mb-2 shadow-sm">
                  <span className="text-[10px] font-bold text-primary">{stage.step}</span>
                </div>
                <p className="text-xs font-bold text-foreground">{stage.label}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{stage.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomeProductShowcase() {
  return (
    <div className="relative">
      <ProductionLineStrip />
      <div className="hidden lg:block absolute left-1/2 top-32 bottom-8 w-px -translate-x-1/2 bg-gradient-to-b from-primary/5 via-primary/25 to-primary/5 pointer-events-none" aria-hidden />
      <div className="relative space-y-16 sm:space-y-20 lg:space-y-24">
        {HOME_FEATURED_PRODUCTS.map((product, index) => (
          <ProductZigzagRow key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}
