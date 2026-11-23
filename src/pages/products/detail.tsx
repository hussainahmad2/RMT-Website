import React, { useEffect, useRef, useState } from "react";
import { Link, useRoute } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  FlaskConical,
  ShieldCheck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRODUCT_CATEGORIES, type ProductItem } from "@/data/products";
import {
  getNeutrixBySlug,
  NEUTRIX_LOGO,
  NEUTRIX_PRODUCTS,
  type NeutrixProduct,
} from "@/data/neutrix-products";
import { useSEO } from "@/lib/seo";
import { cn } from "@/lib/utils";

const slugify = (v: string) =>
  v
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const DOC_LABELS: { key: keyof NeutrixProduct["documents"]; label: string }[] = [
  { key: "spec", label: "Specification Sheet" },
  { key: "coa", label: "Certificate of Analysis" },
  { key: "sds", label: "Safety Data Sheet" },
  { key: "coo", label: "Certificate of Origin" },
];

const PROP_ROWS: { key: keyof NeutrixProduct["properties"]; label: string }[] = [
  { key: "productLine", label: "Product line" },
  { key: "form", label: "Form" },
  { key: "manufacturer", label: "Manufacturer / tradename" },
  { key: "technique", label: "Technique(s)" },
  { key: "pH", label: "pH" },
  { key: "solubility", label: "Solubility" },
  { key: "bulkDensity", label: "Bulk density" },
  { key: "applications", label: "Application(s)" },
  { key: "storageTemp", label: "Storage temperature" },
  { key: "suitability", label: "Suitability" },
];

const BIOMATERIALS_BACK = "/products?category=biomaterials";

function NeutrixRecommendCarousel({
  products,
  onQuickView,
}: {
  products: NeutrixProduct[];
  onQuickView: (p: NeutrixProduct) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [products]);

  const scrollByCard = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-reco-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="py-10">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-heading text-xl font-bold">Recommended products</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Browse the full Neutrix culture media range
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            aria-label="Previous recommended products"
            disabled={!canPrev}
            onClick={() => scrollByCard(-1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition hover:border-emerald-700/40 hover:text-emerald-800 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next recommended products"
            disabled={!canNext}
            onClick={() => scrollByCard(1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition hover:border-emerald-700/40 hover:text-emerald-800 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((item) => (
          <article
            key={item.slug}
            data-reco-card
            className="w-[240px] shrink-0 snap-start overflow-hidden rounded-xl border border-border bg-card sm:w-[260px]"
          >
            <div className="flex h-36 items-center justify-center bg-white p-3">
              <img src={item.image} alt={item.name} className="h-full w-full object-contain" />
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold text-emerald-700">Neutrix</p>
              <h3 className="mt-1 line-clamp-2 min-h-[2.75rem] font-semibold leading-snug">
                {item.name}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{item.packSize}</p>
              <button
                type="button"
                className="mt-3 w-full rounded-lg border border-emerald-700/40 px-3 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-700 hover:text-white"
                onClick={() => onQuickView(item)}
              >
                Quick view
              </button>
              <Link
                href={`/products/biomaterials/${item.slug}`}
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-emerald-800"
              >
                Full details <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function NeutrixDetail({
  product,
  categoryTitle,
}: {
  product: NeutrixProduct;
  categoryTitle: string;
}) {
  const [sizeIdx, setSizeIdx] = useState(0);
  const [quick, setQuick] = useState<NeutrixProduct | null>(null);

  const index = NEUTRIX_PRODUCTS.findIndex((p) => p.slug === product.slug);
  const prev = index > 0 ? NEUTRIX_PRODUCTS[index - 1] : NEUTRIX_PRODUCTS[NEUTRIX_PRODUCTS.length - 1];
  const next =
    index >= 0 && index < NEUTRIX_PRODUCTS.length - 1
      ? NEUTRIX_PRODUCTS[index + 1]
      : NEUTRIX_PRODUCTS[0];
  const recommended = NEUTRIX_PRODUCTS.filter((p) => p.slug !== product.slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product.slug]);

  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-[4.5rem]">
      <div className="border-b border-border bg-card/80 backdrop-blur">
        <div className="page-container flex flex-wrap items-center justify-between gap-3 py-3">
          <Link
            href={BIOMATERIALS_BACK}
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-emerald-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Biomaterials products
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <Link
              href={`/products/biomaterials/${prev.slug}`}
              className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 font-medium hover:border-emerald-700/40 hover:text-emerald-800"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden max-w-[140px] truncate sm:inline">{prev.name}</span>
              <span className="sm:hidden">Prev</span>
            </Link>
            <span className="tabular-nums text-xs text-muted-foreground">
              {index + 1} / {NEUTRIX_PRODUCTS.length}
            </span>
            <Link
              href={`/products/biomaterials/${next.slug}`}
              className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 font-medium hover:border-emerald-700/40 hover:text-emerald-800"
            >
              <span className="hidden max-w-[140px] truncate sm:inline">{next.name}</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <header className="relative overflow-hidden border-b border-border bg-[linear-gradient(135deg,#f7fbf8_0%,#ffffff_45%,#f3f8fc_100%)]">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_55%)]" />

        <div className="page-container relative grid items-start gap-8 py-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:gap-12 lg:py-12">
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-3">
              <img src={NEUTRIX_LOGO} alt="Neutrix" className="h-8 w-auto object-contain" />
              <span className="text-muted-foreground">·</span>
              <span className="text-xs font-medium text-muted-foreground">{categoryTitle}</span>
            </div>

            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {product.name}
            </h1>
            <p className="mt-2 text-base text-muted-foreground">{product.tagline}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-800/15 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-900">
                <FlaskConical className="h-3.5 w-3.5" />
                {product.properties.form}
              </span>
              <span className="inline-flex items-center rounded-md border border-border bg-white px-3 py-1.5 text-xs font-semibold">
                Pack: {product.packSize}
              </span>
              <span className="inline-flex items-center rounded-md border border-border bg-white px-3 py-1.5 text-xs font-semibold">
                {product.properties.storageTemp}
              </span>
            </div>

            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted-foreground">
              {product.generalDescription}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <h2 className="text-sm font-semibold">Select a size</h2>
                <div className="mt-3 overflow-hidden rounded-xl border border-border bg-white">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted/40">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Size</th>
                        <th className="px-4 py-3 font-semibold">Availability</th>
                        <th className="px-4 py-3 text-right font-semibold">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        onClick={() => setSizeIdx(0)}
                        className={cn(
                          "cursor-pointer border-t border-border transition-colors",
                          sizeIdx === 0 ? "bg-emerald-50/90" : "hover:bg-muted/30"
                        )}
                      >
                        <td className="px-4 py-3 font-semibold">{product.packSize}</td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                            Contact RMT
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right text-muted-foreground">On request</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:min-w-[200px]">
                <Button asChild className="w-full bg-emerald-800 hover:bg-emerald-900">
                  <Link
                    href={`/contact?subject=${encodeURIComponent(`Product inquiry: Neutrix ${product.name}`)}`}
                  >
                    Request quote
                  </Link>
                </Button>
                <a
                  href="#documentation"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold hover:border-emerald-700/40 hover:text-emerald-800"
                >
                  Documentation
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-semibold">Key documents</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {DOC_LABELS.map(({ key, label }) => (
                  <a
                    key={key}
                    href={product.documents[key]}
                    download
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2 text-xs font-semibold transition hover:border-emerald-700/40 hover:text-emerald-800"
                  >
                    <FileText className="h-3.5 w-3.5 text-emerald-700" />
                    {label}
                    <Download className="h-3 w-3 opacity-50" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-border/70 bg-white p-6 shadow-[0_20px_50px_-28px_rgba(6,78,59,0.35)] sm:p-8">
              <img
                src={product.image}
                alt={`${product.name} bottle`}
                className="mx-auto aspect-square max-h-[420px] w-full object-contain"
              />
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Neutrix · Revive Medical Technologies
            </p>
          </div>
        </div>
      </header>

      <main className="page-container py-10">
        <section className="grid gap-10 border-b border-border pb-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="font-heading text-xl font-bold">Properties</h2>
            <dl className="mt-4 overflow-hidden rounded-xl border border-border bg-muted/25">
              {PROP_ROWS.map(({ key, label }) => (
                <div
                  key={key}
                  className="grid grid-cols-[minmax(120px,.85fr)_minmax(0,1.15fr)] gap-3 border-b border-border px-4 py-3 last:border-0 sm:px-5"
                >
                  <dt className="text-sm font-semibold text-foreground/80">{label}</dt>
                  <dd className="text-sm leading-relaxed">{product.properties[key]}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-xl font-bold">Description</h2>
              <div className="mt-4 space-y-5">
                <div>
                  <h3 className="font-semibold">General description</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {product.generalDescription}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Application</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {product.application}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Composition</h3>
              {product.compositionNote && (
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {product.compositionNote}
                </p>
              )}
              <div className="mt-4 overflow-x-auto rounded-xl border border-border">
                <table className="w-full min-w-[420px] text-left text-sm">
                  <thead className="bg-muted/60">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Ingredient</th>
                      <th className="px-4 py-3 font-semibold">g/L</th>
                      <th className="px-4 py-3 font-semibold">g per 500 g pack</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.composition.map((row) => {
                      const isTotal = row.ingredient.toLowerCase() === "total";
                      return (
                        <tr
                          key={`${row.ingredient}-${row.gPerLitre}`}
                          className={cn(
                            "border-t border-border",
                            isTotal && "bg-muted/40 font-semibold"
                          )}
                        >
                          <td className="px-4 py-2.5">{row.ingredient}</td>
                          <td className="px-4 py-2.5 tabular-nums">{row.gPerLitre}</td>
                          <td className="px-4 py-2.5 tabular-nums">{row.gPerPack}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border py-10">
          <h2 className="font-heading text-xl font-bold">Analysis note</h2>
          <ul className="mt-4 space-y-2.5">
            {product.analysisNotes.map((note) => (
              <li
                key={note}
                className="flex items-start gap-2.5 text-sm leading-6 text-muted-foreground"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-b border-border py-10">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-emerald-700" />
            <h2 className="font-heading text-xl font-bold">Safety information</h2>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-muted/25 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Storage class
              </p>
              <p className="mt-2 text-sm font-medium">{product.storageClass}</p>
            </div>
            <div className="rounded-xl border border-border bg-muted/25 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Form</p>
              <p className="mt-2 text-sm font-medium">{product.properties.form}</p>
            </div>
            <div className="rounded-xl border border-border bg-muted/25 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Storage temperature
              </p>
              <p className="mt-2 text-sm font-medium">{product.properties.storageTemp}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Always consult the current Safety Data Sheet before handling.
          </p>
        </section>

        <section id="documentation" className="scroll-mt-28 border-b border-border py-10">
          <h2 className="font-heading text-xl font-bold">Documentation</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Product files for {product.name}. Certificate of Origin is shared across the Neutrix
            line.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {DOC_LABELS.map(({ key, label }) => (
              <a
                key={key}
                href={product.documents[key]}
                download
                className="flex items-center justify-between rounded-xl border border-border bg-card p-4 text-sm font-semibold transition-colors hover:border-emerald-700/40 hover:text-emerald-800"
              >
                <span className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-emerald-700" />
                  {label}
                </span>
                <Download className="h-4 w-4" />
              </a>
            ))}
          </div>
        </section>

        <NeutrixRecommendCarousel products={recommended} onQuickView={setQuick} />
      </main>

      {quick && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setQuick(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-label={`${quick.name} quick view`}
            className="relative grid w-full max-w-3xl gap-6 rounded-2xl bg-background p-6 shadow-2xl sm:grid-cols-[160px_1fr] sm:p-8"
          >
            <button
              type="button"
              aria-label="Close quick view"
              onClick={() => setQuick(null)}
              className="absolute right-4 top-4 rounded-full p-2 hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex h-40 items-center justify-center rounded-xl bg-white p-3">
              <img src={quick.image} alt={quick.name} className="h-full w-full object-contain" />
            </div>
            <div className="pr-8">
              <p className="text-sm font-semibold text-emerald-700">Neutrix</p>
              <h2 className="mt-1 text-2xl font-bold">{quick.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {quick.application}
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-semibold">Pack options</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-lg border border-border px-3 py-1.5 text-xs">
                    {quick.packSize}
                  </span>
                  <span className="rounded-lg border border-border px-3 py-1.5 text-xs">
                    {quick.properties.form}
                  </span>
                </div>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Contact RMT for availability
              </p>
              <Button asChild className="mt-5 bg-emerald-800 hover:bg-emerald-900">
                <Link href={`/products/biomaterials/${quick.slug}`}>Open full detail</Link>
              </Button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

function GenericProductDetail({
  product,
  category,
}: {
  product: ProductItem;
  category: { id: string; title: string; products: ProductItem[] };
}) {
  const [quick, setQuick] = useState<ProductItem | null>(null);
  const recommended = category.products.filter((p) => p.name !== product.name).slice(0, 4);
  const backHref = `/products?category=${category.id}`;

  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-[4.5rem]">
      <header className="border-b border-border bg-card">
        <div className="page-container grid gap-8 py-8 md:grid-cols-[1fr_260px] md:py-10 lg:grid-cols-[1fr_280px_260px]">
          <div className="order-2 lg:order-1">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Back to {category.title}
            </Link>
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-primary">
              {category.title}
            </p>
            <h1 className="mt-2 font-heading text-3xl font-bold">{product.name}</h1>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {product.description ??
                "Product grade, standards, form, intended use, and pack sizes are available on request."}
            </p>
          </div>
          <div className="order-1 rounded-xl border border-border bg-white p-4 lg:order-2">
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto aspect-square max-h-64 w-full object-contain"
            />
          </div>
          <aside className="order-3 h-fit rounded-xl border border-border bg-muted/40 p-5">
            <h2 className="font-heading text-lg font-bold">Product inquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Ask RMT about availability, specifications, and documentation.
            </p>
            <Button asChild className="mt-4 w-full">
              <Link href="/contact?subject=Product%20inquiry">Contact RMT</Link>
            </Button>
          </aside>
        </div>
      </header>

      <main className="page-container py-10">
        <section className="py-6">
          <h2 className="font-heading text-xl font-bold">Recommended products</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {recommended.map((item) => (
              <article
                key={item.name}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="flex h-32 items-center justify-center bg-white p-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-primary">{item.tag ?? "RMT"}</p>
                  <h3 className="mt-1 line-clamp-2 font-semibold">{item.name}</h3>
                  <button
                    type="button"
                    className="mt-3 w-full rounded-lg border border-primary/40 px-3 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
                    onClick={() => setQuick(item)}
                  >
                    Quick view
                  </button>
                  <Link
                    href={`/products/${category.id}/${slugify(item.name)}`}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-primary"
                  >
                    Full details <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {quick && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setQuick(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-label={`${quick.name} quick view`}
            className="relative grid w-full max-w-3xl gap-6 rounded-2xl bg-background p-6 shadow-2xl sm:grid-cols-[150px_1fr] sm:p-8"
          >
            <button
              type="button"
              aria-label="Close quick view"
              onClick={() => setQuick(null)}
              className="absolute right-4 top-4 rounded-full p-2 hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex h-36 items-center justify-center rounded-xl bg-white p-3">
              <img src={quick.image} alt={quick.name} className="h-full w-full object-contain" />
            </div>
            <div className="pr-8">
              <p className="text-sm text-primary">{quick.tag ?? "RMT"}</p>
              <h2 className="mt-1 text-2xl font-bold">{quick.name}</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {quick.description ?? "Product description available on request."}
              </p>
              <Button asChild className="mt-5">
                <Link href={`/products/${category.id}/${slugify(quick.name)}`}>
                  Open full detail
                </Link>
              </Button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const [, params] = useRoute("/products/:category/:slug");
  const category = PRODUCT_CATEGORIES.find((x) => x.id === params?.category);
  const slug = params?.slug ?? "";
  const neutrix = category?.id === "biomaterials" ? getNeutrixBySlug(slug) : undefined;
  const product = category?.products.find((x) => slugify(x.name) === slug);

  useSEO({
    title: neutrix
      ? `${neutrix.name} | Neutrix | RMT Medical Technologies`
      : product
        ? `${product.name} | RMT Medical Technologies`
        : "Product | RMT Medical Technologies",
    description:
      neutrix?.generalDescription ??
      product?.description ??
      "Explore product details from Revive Medical Technologies.",
  });

  if (neutrix && category) {
    return <NeutrixDetail product={neutrix} categoryTitle={category.title} />;
  }

  if (!product || !category) {
    return (
      <div className="page-container min-h-screen pt-32">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <Link href="/products" className="mt-4 inline-block text-primary">
          Browse products
        </Link>
      </div>
    );
  }

  return <GenericProductDetail product={product} category={category} />;
}
