import { useEffect } from "react";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site-config";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  /** Path for canonical URL, e.g. /products */
  path?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

function setOG(prop: string, content: string) {
  let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", prop);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function setJsonLd(data?: Record<string, unknown> | Record<string, unknown>[]) {
  const existing = document.getElementById("seo-jsonld");
  if (!data) {
    existing?.remove();
    document.getElementById("json-ld-seo")?.remove();
    return;
  }

  document.getElementById("json-ld-seo")?.remove();

  const payload = Array.isArray(data) ? data : [data];
  let el = existing as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = "seo-jsonld";
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(payload.length === 1 ? payload[0] : payload);
}

function resolveImageUrl(ogImage: string | undefined): string {
  if (!ogImage) return DEFAULT_OG_IMAGE;
  if (ogImage.startsWith("http")) return ogImage;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${SITE_URL}${base}${ogImage.startsWith("/") ? ogImage : `/${ogImage}`}`;
}

function toCanonical(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `${SITE_URL}${base}/`;
  return `${SITE_URL}${base}${normalized}`;
}

export function useSEO({ title, description, keywords, ogImage, path, noIndex, jsonLd }: SEOProps) {
  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    const fullTitle = title === SITE_NAME ? SITE_NAME : `${title} | ${SITE_NAME}`;
    const canonicalPath = path ?? window.location.pathname;
    const canonical = toCanonical(canonicalPath.split("?")[0] || "/");
    const image = resolveImageUrl(ogImage);

    document.title = fullTitle;
    setMeta("description", description);
    setMeta("robots", noIndex ? "noindex, nofollow" : "index, follow");
    if (keywords) setMeta("keywords", keywords);
    else document.querySelector('meta[name="keywords"]')?.remove();

    setOG("og:title", fullTitle);
    setOG("og:description", description);
    setOG("og:type", "website");
    setOG("og:url", canonical);
    setOG("og:image", image);
    setOG("og:site_name", SITE_NAME);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    setLink("canonical", canonical);
    setJsonLd(jsonLdKey ? (JSON.parse(jsonLdKey) as SEOProps["jsonLd"]) : undefined);
  }, [title, description, keywords, ogImage, path, noIndex, jsonLdKey]);
}
