import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useSearch } from "wouter";
import {
  ArrowRight,
  Brain,
  Factory,
  FlaskConical,
  Package,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { getRouteSeo } from "@/lib/route-seo";
import { cn } from "@/lib/utils";
import {
  PRODUCT_CATEGORIES,
  PRODUCT_HIGHLIGHTS,
  PRODUCTS_HERO_IMAGE,
  type ProductCategory,
  type ProductItem,
} from "@/data/products";

const VALID_CATEGORY_IDS = new Set(PRODUCT_CATEGORIES.map((c) => c.id));

function productsHref(categoryId: string) {
  return categoryId === "all" ? "/products" : `/products?category=${categoryId}`;
}

function categoryFromSearch(search: string): string {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  const fromQuery = params.get("category");
  if (fromQuery && VALID_CATEGORY_IDS.has(fromQuery)) return fromQuery;
  return "all";
}

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function productDetailHref(categoryId: string, product: ProductItem) {
  return `/products/${categoryId}/${slugify(product.name)}`;
}

function matchesQuery(product: ProductItem, query: string) {
  if (!query) return true;
  const q = query.toLowerCase();
  const haystack = [
    product.name,
    product.description ?? "",
    product.tag ?? "",
    product.spec ?? "",
    ...(product.tags ?? []),
    ...(product.features ?? []),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "medical-devices": Factory,
  biomaterials: FlaskConical,
  engineering: Settings2,
  "software-ai": Brain,
  "production-equipment": Package,
};

function ProductDetailCard({
  product,
  categoryId,
  index,
}: {
  product: ProductItem;
  categoryId: string;
  index: number;
}) {
  const href = productDetailHref(categoryId, product);
  const isMediaCard = product.tag === "BMD" || product.tag === "Neutrix";

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/35 hover:shadow-lg"
    >
      {isMediaCard ? (
        <div className="relative aspect-[5/4] overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full bg-white/90 object-contain p-3 transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
          <div className="absolute left-2 top-2 z-10 flex flex-col items-start gap-1.5">
            <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-white/20 bg-black/55 px-1.5 text-[10px] font-bold text-white backdrop-blur-sm">
              {index + 1}
            </span>
            {product.tag === "Neutrix" && (
              <span className="rounded-full border border-emerald-400/40 bg-emerald-700/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                Neutrix
              </span>
            )}
          </div>
          {product.spec && (
            <span className="absolute right-2 top-2 rounded-full border border-white/15 bg-black/50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
              {product.spec}
            </span>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="font-heading text-sm font-bold leading-snug text-white sm:text-[15px]">
              {product.name}
            </h3>
          </div>
        </div>
      ) : (
        <div className="relative aspect-[5/4] overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="font-heading text-sm font-bold leading-snug text-white sm:text-[15px]">
              {product.name}
            </h3>
          </div>
        </div>
      )}

      <div className="p-3.5">
        {product.description && (
          <p className="mb-2.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {product.description}
          </p>
        )}

        {product.tags && product.tags.length > 0 && (
          <div className="mb-2.5 flex flex-wrap gap-1">
            {product.tags.slice(0, 2).map((t) => (
              <span
                key={t}
                className="rounded-full border border-primary/15 bg-primary/8 px-1.5 py-0.5 text-[9px] font-semibold text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-all group-hover:gap-1.5">
          View details <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}

function CategorySection({
  category,
  products,
  reverse = false,
}: {
  category: ProductCategory;
  products: ProductItem[];
  reverse?: boolean;
}) {
  const Icon = CATEGORY_ICONS[category.id] ?? Package;

  if (products.length === 0) return null;

  return (
    <AnimatedSection id={category.id} className="scroll-mt-28" immediate>
      <div className="relative mb-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="grid lg:grid-cols-2 lg:items-stretch">
          <div
            className={cn(
              "relative isolate aspect-[16/10] overflow-hidden sm:aspect-[2/1] lg:aspect-auto lg:min-h-[280px]",
              reverse ? "lg:order-2" : "lg:order-1"
            )}
          >
            <img
              src={category.bannerImage}
              alt={category.title}
              className="absolute inset-0 h-full w-full scale-[1.01] object-cover object-center"
              loading="lazy"
            />
            <div
              className={cn(
                "absolute inset-0",
                reverse
                  ? "bg-gradient-to-l from-card/20 via-transparent to-transparent"
                  : "bg-gradient-to-r from-transparent via-transparent to-card/20"
              )}
            />
          </div>
          <div
            className={cn(
              "flex flex-col justify-center px-6 py-7 sm:px-8 sm:py-9 lg:px-10",
              reverse ? "lg:order-1" : "lg:order-2"
            )}
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Category
              </span>
            </div>
            <h2 className="mb-2 font-heading text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
              {category.title}
            </h2>
            <div className="mb-3 h-px w-12 bg-primary/50" />
            <p className="mb-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {category.description}
            </p>
            <Link
              href={`/services/${category.serviceSlug}`}
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
            >
              View {category.serviceName} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between gap-4 border-b border-border pb-3">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {products.length} Product{products.length === 1 ? "" : "s"}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
        {products.map((product, i) => (
          <ProductDetailCard
            key={`${category.id}-${product.name}`}
            product={product}
            categoryId={category.id}
            index={i}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}

export default function Products() {
  const [, setLocation] = useLocation();
  const search = useSearch();
  const activeCategory = useMemo(() => categoryFromSearch(search), [search]);
  const [query, setQuery] = useState("");

  useSEO(getRouteSeo("/products"));

  useEffect(() => {
    if (activeCategory === "all") return;
    const el = document.getElementById(activeCategory);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [activeCategory]);

  const selectCategory = (categoryId: string) => {
    setLocation(productsHref(categoryId));
  };

  const filteredCategories = useMemo(() => {
    const base =
      activeCategory === "all"
        ? PRODUCT_CATEGORIES
        : PRODUCT_CATEGORIES.filter((c) => c.id === activeCategory);

    const q = query.trim();
    return base
      .map((category) => ({
        ...category,
        products: category.products.filter((p) => matchesQuery(p, q)),
      }))
      .filter((category) => category.products.length > 0);
  }, [activeCategory, query]);

  const totalMatches = filteredCategories.reduce((sum, c) => sum + c.products.length, 0);

  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-[4.5rem]">
      <PageHero
        eyebrow="Product Portfolio"
        title="Our Products"
        description="ISO-certified devices, biomaterials, and engineering solutions — engineered with depth, validated for regulated markets."
        backgroundImage={PRODUCTS_HERO_IMAGE}
        fullHeight
      >
        <Button asChild size="lg" className="rounded-xl font-semibold">
          <a href="#medical-devices">Browse Portfolio</a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-xl border-white/20 text-white hover:bg-white/10 hover:text-white"
        >
          <Link href="/services">
            See All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </PageHero>

      <section className="border-b border-white/10 bg-primary">
        <div className="page-container py-8">
          <div className="grid grid-cols-2 divide-x divide-white/15 lg:grid-cols-4">
            {PRODUCT_HIGHLIGHTS.map((h) => (
              <div key={h.label} className="px-4 py-2 text-center text-white">
                <p className="font-heading text-2xl font-bold sm:text-3xl">{h.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/70">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/20 py-12">
        <div className="page-container">
          <AnimatedSection immediate>
            <div className="grid items-start gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="mb-3 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">
                    Full-Service Partner
                  </p>
                </div>
                <h2 className="mb-3 font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Products Backed by Complete Services
                </h2>
                <div className="mb-4 h-px w-16 bg-primary/50" />
                <p className="max-w-2xl leading-relaxed text-muted-foreground">
                  Every product is supported by regulatory compliance, quality testing, engineering,
                  and manufacturing — explore the services behind our portfolio.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold">Quick Navigation</span>
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
                      className="group flex items-center justify-between py-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                      <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="sticky top-16 z-30 border-b border-border bg-background/95 py-3 backdrop-blur">
        <div className="page-container flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => selectCategory("all")}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:text-primary"
              }`}
            >
              All Products
            </button>
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => selectCategory(cat.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:text-primary"
                }`}
              >
                {cat.title.split(" & ")[0]}
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-md shrink-0">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              aria-label="Search products"
              className="h-11 w-full rounded-xl border-2 border-primary/35 bg-card py-2 pl-10 pr-10 text-sm font-medium shadow-sm outline-none transition placeholder:text-muted-foreground/80 hover:border-primary/55 focus:border-primary focus:ring-2 focus:ring-primary/25"
            />
            {query && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="page-container space-y-20 md:space-y-28">
          {query.trim() && (
            <p className="-mb-12 text-sm text-muted-foreground md:-mb-20">
              {totalMatches === 0
                ? `No products match “${query.trim()}”.`
                : `${totalMatches} product${totalMatches === 1 ? "" : "s"} matching “${query.trim()}”.`}
            </p>
          )}

          {filteredCategories.map((category, i) => (
            <CategorySection
              key={category.id}
              category={category}
              products={category.products}
              reverse={i % 2 === 1}
            />
          ))}

          {filteredCategories.length === 0 && (
            <div className="rounded-2xl border border-border bg-card px-6 py-16 text-center">
              <p className="font-heading text-xl font-bold">No matching products</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try a different search term or clear the filter.
              </p>
              <Button
                type="button"
                className="mt-6"
                onClick={() => {
                  setQuery("");
                  selectCategory("all");
                }}
              >
                Reset filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#060d17] py-16 text-white">
        <div className="page-container text-center">
          <AnimatedSection immediate>
            <h2 className="mb-3 font-heading text-3xl font-bold">Need a Custom Product Solution?</h2>
            <div className="mx-auto mb-6 h-px w-12 bg-primary" />
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-xl font-semibold">
                <Link href="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/testimonials">Client Stories</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
