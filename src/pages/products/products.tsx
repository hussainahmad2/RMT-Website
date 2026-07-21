import React, { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight, Brain, CheckCircle, Factory, FlaskConical, Package, Settings2, ShieldCheck, Sparkles,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CinematicPageHero } from "@/components/CinematicPageHero";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import {
  PRODUCT_CATEGORIES,
  PRODUCT_HIGHLIGHTS,
  PRODUCTS_HERO_IMAGE,
  type ProductCategory,
  type ProductItem,
} from "@/data/products";
import { ALL_SERVICES } from "@/data/services";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "medical-devices": Factory,
  biomaterials: FlaskConical,
  engineering: Settings2,
  "software-ai": Brain,
};

function ProductDetailCard({
  product,
  index,
}: {
  product: ProductItem;
  index: number;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/35 hover:shadow-2xl transition-all duration-500">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute left-3 top-3 z-10 flex flex-col items-start gap-2">
          <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-white/20 bg-black/55 px-2 text-xs font-bold text-white backdrop-blur-sm">
            {index + 1}
          </span>
        </div>
        {product.spec && (
          <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/50 text-white border border-white/15">
            {product.spec}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-heading font-bold text-white text-lg leading-snug mt-1">{product.name}</h3>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        {product.description && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
            {product.description}
          </p>
        )}

        {product.tags && product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.tags.map((t) => (
              <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/8 text-primary border border-primary/15">
                {t}
              </span>
            ))}
          </div>
        )}

        {product.features && product.features.length > 0 && (
          <>
            <div className="h-px bg-border mb-4" />
            <ul className="space-y-2.5">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="h-px bg-border my-4" />
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
        >
          Request details <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}

function CategorySection({ category, reverse = false }: { category: ProductCategory; reverse?: boolean }) {
  const Icon = CATEGORY_ICONS[category.id] ?? Package;

  return (
    <AnimatedSection id={category.id} className="scroll-mt-28" immediate>
      {/* Category banner */}
      <div className="relative rounded-2xl overflow-hidden mb-10 border border-border">
        <div className="grid lg:grid-cols-2 min-h-[220px]">
          <div className={`relative overflow-hidden ${reverse ? "lg:order-2" : ""}`}>
            <img
              src={category.bannerImage}
              alt={category.title}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden" />
          </div>
          <div className={`flex flex-col justify-center p-8 sm:p-10 bg-card ${reverse ? "lg:order-1" : ""}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Category</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">{category.title}</h2>
            <div className="h-px w-14 bg-primary/50 mb-4" />
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">{category.description}</p>
            <Link
              href={`/services/${category.serviceSlug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all w-fit"
            >
              View {category.serviceName} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Product grid with line structure */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-border">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {category.products.length} Products
        </p>
        <a href={`#${category.id}`} className="text-xs text-primary font-semibold hover:underline">
          #{category.id.replace("-", "")}
        </a>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
        {category.products.map((product, i) => (
          <ProductDetailCard key={`${category.id}-${product.name}`} product={product} index={i} />
        ))}
      </div>
    </AnimatedSection>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useSEO({
    title: "Our Products",
    description: "Explore RMT Medical Technologies product portfolio — medical devices, biomaterials, software products, and engineering solutions.",
    keywords: "RMT products, medical devices, biomaterials, LegendEHR, SaMD software",
    path: "/products",
  });

  const visibleCategories =
    activeCategory === "all"
      ? PRODUCT_CATEGORIES
      : PRODUCT_CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <div className="bg-background min-h-screen pt-16 sm:pt-[4.5rem]">
      <CinematicPageHero
        eyebrow="Product Portfolio"
        title="Our Products"
        description="ISO-certified devices, biomaterials, and engineering solutions — engineered with depth, validated for regulated markets."
        backgroundImage={PRODUCTS_HERO_IMAGE}
        fullHeight
      >
        <Button asChild size="lg" className="rounded-xl font-semibold">
          <a href="#medical-devices">Browse Portfolio</a>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-xl border-white/20 text-white hover:bg-white/10 hover:text-white">
          <Link href="/services">See All Services <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
      </CinematicPageHero>

      {/* Highlights */}
      <section className="border-b border-white/10 bg-primary">
        <div className="page-container py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/15">
            {PRODUCT_HIGHLIGHTS.map((h) => (
              <div key={h.label} className="text-center text-white px-4 py-2">
                <p className="font-heading text-2xl sm:text-3xl font-bold">{h.value}</p>
                <p className="text-white/70 text-xs uppercase tracking-wider mt-1">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services bridge */}
      <section className="py-12 border-b border-border bg-secondary/20">
        <div className="page-container">
          <AnimatedSection immediate>
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <p className="text-primary text-xs font-bold uppercase tracking-widest">Full-Service Partner</p>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Products Backed by Complete Services
                </h2>
                <div className="h-px w-16 bg-primary/50 mb-4" />
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  Every product is supported by regulatory compliance, quality testing, engineering, and manufacturing — explore the services behind our portfolio.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Quick Navigation</span>
                </div>
                <nav className="flex flex-col divide-y divide-border">
                  {[
                    { label: "All Services", href: "/services" },
                    { label: "Testimonials", href: "/testimonials" },
                    { label: "Request a Quote", href: "/contact" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between py-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                    >
                      {link.label}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-2">
              {ALL_SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-xs px-3 py-1.5 rounded-full border border-border bg-background text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {s.shortName}
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Category filter anchors */}
      <section className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur py-3">
        <div className="page-container flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === "all" ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:text-primary"
            }`}
          >
            All Products
          </button>
          {PRODUCT_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:text-primary"
              }`}
            >
              {cat.title.split(" & ")[0]}
            </a>
          ))}
        </div>
      </section>

      {/* Product sections */}
      <section className="py-14 md:py-20">
        <div className="page-container space-y-20 md:space-y-28">
          {visibleCategories.map((category, i) => (
            <CategorySection key={category.id} category={category} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#060d17] text-white border-t border-white/10">
        <div className="page-container text-center">
          <AnimatedSection immediate>
            <h2 className="font-heading text-3xl font-bold mb-3">Need a Custom Product Solution?</h2>
            <div className="h-px w-12 bg-primary mx-auto mb-6" />
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="rounded-xl font-semibold">
                <Link href="/contact">Get a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-white/20 text-white hover:bg-white/10 hover:text-white">
                <Link href="/testimonials">Client Stories</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
