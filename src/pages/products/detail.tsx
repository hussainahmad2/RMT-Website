import React, { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
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

function NeutrixDetail({
  product,
  categoryTitle,
}: {
  product: NeutrixProduct;
  categoryTitle: string;
}) {
  const [sizeIdx, setSizeIdx] = useState(0);
  const [quick, setQuick] = useState<NeutrixProduct | null>(null);
  const recommended = NEUTRIX_PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product.slug]);

  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-[4.5rem]">
      <header className="relative overflow-hidden border-b border-border bg-gradient-to-br from-emerald-50/80 via-background to-sky-50/40">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-1/3 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />

        <div className="page-container relative grid gap-8 py-8 md:grid-cols-[280px_1fr_260px] md:py-10">
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border/80 bg-white p-5 shadow-sm">
              <img
                src={product.image}
                alt={`${product.name} bottle`}
                className="mx-auto aspect-square max-h-72 w-full object-contain"
              />
            </div>
            <img
              src={NEUTRIX_LOGO}
              alt="Neutrix"
              className="mx-auto h-10 w-auto object-contain opacity-90"
            />
          </div>

          <div>
            <Link
              href="/products#biomaterials"
              className="inline-flex items-center gap-2 text-sm text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Products
            </Link>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                {product.brand}
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="text-xs font-medium text-muted-foreground">{categoryTitle}</span>
            </div>

            <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 text-base text-muted-foreground">{product.tagline}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white/80 px-3 py-1.5 text-xs font-semibold">
                <FlaskConical className="h-3.5 w-3.5 text-emerald-700" />
                {product.properties.form}
              </span>
              <span className="inline-flex items-center rounded-lg border border-border bg-white/80 px-3 py-1.5 text-xs font-semibold">
                {product.packSize}
              </span>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">
              {product.generalDescription}
            </p>

            <div className="mt-6">
              <h2 className="text-sm font-semibold">Select a size</h2>
              <div className="mt-3 overflow-hidden rounded-xl border border-border bg-white/70">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted/50">
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
                        sizeIdx === 0 ? "bg-emerald-50/80" : "hover:bg-muted/30"
                      )}
                    >
                      <td className="px-4 py-3 font-semibold">{product.packSize}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          Contact RMT for availability
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right text-muted-foreground">On request</td>
                    </tr>
                  </tbody>
                </table>
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
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2 text-xs font-semibold hover:border-emerald-600/40 hover:text-emerald-800"
                  >
                    <FileText className="h-3.5 w-3.5 text-emerald-700" />
                    {label}
                    <Download className="h-3 w-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-white/80 p-5 shadow-sm backdrop-blur">
            <h2 className="font-heading text-lg font-bold">Product inquiry</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Ask RMT about availability, pack size, batch documentation, and technical support for{" "}
              {product.name}.
            </p>
            <Button asChild className="mt-4 w-full bg-emerald-700 hover:bg-emerald-800">
              <Link
                href={`/contact?subject=${encodeURIComponent(`Product inquiry: Neutrix ${product.name}`)}`}
              >
                Contact RMT
              </Link>
            </Button>
            <a
              href="#documentation"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 text-sm font-semibold text-emerald-800 hover:underline"
            >
              View all documentation <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </aside>
        </div>
      </header>

      <main className="page-container py-10">
        <section className="grid gap-10 border-b border-border pb-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="font-heading text-xl font-bold">Properties</h2>
            <dl className="mt-4 overflow-hidden rounded-xl border border-border bg-muted/30">
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
            <div className="rounded-xl border border-border bg-muted/30 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Storage class
              </p>
              <p className="mt-2 text-sm font-medium">{product.storageClass}</p>
            </div>
            <div className="rounded-xl border border-border bg-muted/30 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Form
              </p>
              <p className="mt-2 text-sm font-medium">{product.properties.form}</p>
            </div>
            <div className="rounded-xl border border-border bg-muted/30 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Storage temperature
              </p>
              <p className="mt-2 text-sm font-medium">{product.properties.storageTemp}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Always consult the current Safety Data Sheet before handling. Download the SDS from the
            documentation section below.
          </p>
        </section>

        <section id="documentation" className="scroll-mt-28 border-b border-border py-10">
          <h2 className="font-heading text-xl font-bold">Documentation</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Product files for {product.name}. The Certificate of Origin is shared across the Neutrix
            line.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {DOC_LABELS.map(({ key, label }) => (
              <a
                key={key}
                href={product.documents[key]}
                download
                className="flex items-center justify-between rounded-xl border border-border bg-card p-4 text-sm font-semibold transition-colors hover:border-emerald-600/40 hover:text-emerald-800"
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

        <section className="py-10">
          <h2 className="font-heading text-xl font-bold">Recommended products</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {recommended.map((item) => (
              <article
                key={item.slug}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="flex h-36 items-center justify-center bg-white p-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-emerald-700">Neutrix</p>
                  <h3 className="mt-1 line-clamp-2 font-semibold">{item.name}</h3>
                  <button
                    type="button"
                    className="mt-3 w-full rounded-lg border border-emerald-700/40 px-3 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-700 hover:text-white"
                    onClick={() => setQuick(item)}
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
              <Button asChild className="mt-5 bg-emerald-700 hover:bg-emerald-800">
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

  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-[4.5rem]">
      <header className="border-b border-border bg-card">
        <div className="page-container grid gap-8 py-8 md:grid-cols-[260px_1fr_280px] md:py-10">
          <div className="rounded-xl border border-border bg-white p-4">
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto aspect-square max-h-64 w-full object-contain"
            />
          </div>
          <div>
            <Link href="/products" className="inline-flex items-center gap-2 text-sm text-primary">
              <ArrowLeft className="h-4 w-4" /> Products
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
          <aside className="h-fit rounded-xl border border-border bg-muted/40 p-5">
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
