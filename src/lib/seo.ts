import { useEffect } from "react";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/site-config";

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
  const existing = document.getElementById("json-ld-seo");
  if (!data) {
    existing?.remove();
    return;
  }

  const payload = Array.isArray(data) ? data : [data];
  let el = existing as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = "json-ld-seo";
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(payload.length === 1 ? payload[0] : payload);
}

function resolveImageUrl(ogImage: string | undefined, origin: string): string {
  if (!ogImage) return DEFAULT_OG_IMAGE;
  if (ogImage.startsWith("http")) return ogImage;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${origin}${base}${ogImage.startsWith("/") ? ogImage : `/${ogImage}`}`;
}

export function useSEO({ title, description, keywords, ogImage, path, noIndex, jsonLd }: SEOProps) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? SITE_NAME : `${title} | ${SITE_NAME}`;
    const origin = window.location.origin;
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    const canonicalPath = path ?? `${window.location.pathname}${window.location.search}`;
    const canonical = `${origin}${base}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;
    const image = resolveImageUrl(ogImage, origin);

    document.title = fullTitle;
    setMeta("description", description);
    setMeta("robots", noIndex ? "noindex, nofollow" : "index, follow");
    if (keywords) setMeta("keywords", keywords);

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
    setJsonLd(jsonLd);
  }, [title, description, keywords, ogImage, path, noIndex, jsonLd]);
}
