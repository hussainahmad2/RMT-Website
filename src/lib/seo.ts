import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  /** Path for canonical URL, e.g. /products */
  path?: string;
  noIndex?: boolean;
}

const SITE_NAME = "Revive Medical Technologies Inc";
const DEFAULT_OG_IMAGE = "/rmt-logo.webp";

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

export function useSEO({ title, description, keywords, ogImage, path, noIndex }: SEOProps) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? SITE_NAME : `${title} | ${SITE_NAME}`;
    const origin = window.location.origin;
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    const canonicalPath = path ?? `${window.location.pathname}${window.location.search}`;
    const canonical = `${origin}${base}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;
    const image = ogImage?.startsWith("http") ? ogImage : `${origin}${ogImage ?? DEFAULT_OG_IMAGE}`;

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
  }, [title, description, keywords, ogImage, path, noIndex]);
}
