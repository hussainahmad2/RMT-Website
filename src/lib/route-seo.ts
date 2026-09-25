import { ALL_SERVICES } from "../data/services";
import { INSIGHT_ARTICLES } from "../data/insights-content";
import { HOME_DESCRIPTION, HOME_FAQS, HOME_KEYWORDS, HOME_TITLE } from "../data/home-seo";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "./site-config";
import { faqJsonLd, graphJsonLd, organizationJsonLd, websiteJsonLd } from "./structured-data";
import { getAllSitemapEntries } from "./sitemap-urls";

export interface RouteSeo {
  path: string;
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  jsonLd: Record<string, unknown>;
}

interface StaticSeo {
  title: string;
  description: string;
  keywords: string;
}

const STATIC_SEO: Record<string, StaticSeo> = {
  "/": {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    keywords: HOME_KEYWORDS,
  },
  "/about": {
    title: "About Our Medical Device Company",
    description:
      "Revive Medical Technologies designs, develops, and manufactures medical devices, with R&D, software solutions, and ISO 13485 operations in the US and Pakistan.",
    keywords: "medical device company, medical device manufacturing, medical device R&D, ISO 13485, Revive Medical Technologies",
  },
  "/services": {
    title: "Medical Device Manufacturing, R&D & Software Services",
    description:
      "Device manufacturing, R&D, and software solutions, plus regulatory, quality testing, and production equipment from Revive Medical Technologies.",
    keywords:
      "medical device manufacturing, medical device R&D, medical device software solutions, contract manufacturing, ISO 13485, SaMD",
  },
  "/pharmaceutical": {
    title: "Pharmaceutical Development Services",
    description:
      "Pharmaceutical development from formulation and analytical methods through scale-up, technology transfer, and regulatory documentation support.",
    keywords: "pharmaceutical development, formulation development, technology transfer, CMC, drug delivery",
  },
  "/products": {
    title: "Medical Devices & Production Equipment",
    description:
      "Interventional devices, biomaterials, and custom production equipment designed and manufactured by Revive Medical Technologies.",
    keywords: "medical devices, catheter, biomaterials, production equipment, medical device manufacturing",
  },
  "/testimonials": {
    title: "Client Testimonials",
    description:
      "Client stories from medical device manufacturing, R&D, and software projects delivered by Revive Medical Technologies.",
    keywords: "medical device testimonials, RMT reviews, contract manufacturing clients",
  },
  "/projects": {
    title: "Medical Device Projects",
    description:
      "Project examples spanning medical device development, regulatory submissions, software, and manufacturing across global markets.",
    keywords: "medical device projects, device development portfolio, manufacturing case studies",
  },
  "/testing": {
    title: "Medical Device Testing Services",
    description:
      "Medical device testing including microbiology, electrical safety, biocompatibility, packaging integrity, and bench verification.",
    keywords: "medical device testing, ISO 10993, IEC 60601, sterility testing, biocompatibility testing",
  },
  "/training": {
    title: "Medical Device Training & Workshops",
    description:
      "Training for medical device teams on ISO 13485, ISO 14971, design controls, GMP, and laboratory methods.",
    keywords: "medical device training, ISO 13485 workshop, ISO 14971 training, GMP training",
  },
  "/insights": {
    title: "Medical Device Insights",
    description:
      "Articles on medical device manufacturing, R&D, regulatory pathways, and healthcare software from Revive Medical Technologies.",
    keywords: "medical device insights, FDA 510k, SaMD, medical device R&D, manufacturing articles",
  },
  "/gallery": {
    title: "Facilities & Laboratory Gallery",
    description:
      "Photos of Revive Medical Technologies laboratories, manufacturing space, and the teams behind device R&D and production.",
    keywords: "medical device laboratory, manufacturing facility, RMT gallery",
  },
  "/careers": {
    title: "Medical Device Careers",
    description:
      "Careers in medical device manufacturing, R&D, quality, regulatory, and software at Revive Medical Technologies.",
    keywords: "medical device jobs, R&D careers, SaMD engineer, quality engineer medical device",
  },
  "/contact": {
    title: "Contact a Medical Device Manufacturer",
    description:
      "Talk with Revive Medical Technologies about device manufacturing, R&D, software solutions, testing, and regulatory support.",
    keywords: "contact medical device manufacturer, medical device R&D inquiry, software solutions quote",
  },
  "/sitemap": {
    title: "Sitemap",
    description:
      "All Revive Medical Technologies pages for device manufacturing, R&D, software solutions, regulatory, and testing services.",
    keywords: "RMT sitemap, medical device services",
  },
};

function truncate(text: string, max = 160): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;
  return `${normalized.slice(0, max - 1).trimEnd()}…`;
}

function absoluteUrl(path: string): string {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function resolveOg(image: string | undefined): string {
  if (!image) return DEFAULT_OG_IMAGE;
  if (image.startsWith("http")) return image;
  return absoluteUrl(image);
}

function pageGraph(path: string, title: string, description: string, extra: Record<string, unknown>[] = []) {
  const url = absoluteUrl(path);
  const nodes: Record<string, unknown>[] = [
    organizationJsonLd(),
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: `${title} | ${SITE_NAME}`,
      description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    ...extra,
  ];

  if (path === "/") nodes.unshift(websiteJsonLd());
  return graphJsonLd(nodes);
}

function serviceSeo(path: string): RouteSeo | null {
  const parts = path.split("/").filter(Boolean);
  if (parts[0] !== "services" || !parts[1]) return null;

  const service = ALL_SERVICES.find((item) => item.slug === parts[1]);
  if (!service) return null;

  const sub = parts[2] ? service.subServices.find((item) => item.slug === parts[2]) : undefined;
  if (parts[2] && !sub) return null;

  if (sub) {
    const title = sub.seoTitle ?? `${sub.name} — ${service.shortName}`;
    const description = truncate(`${sub.tagline} ${sub.overview[0] ?? ""} ${service.name}.`);
    const keywords = `${sub.name}, ${service.name}, ${service.keywords}`;
    return {
      path,
      title,
      description,
      keywords,
      ogImage: resolveOg(service.heroImage),
      jsonLd: pageGraph(path, title, description, [
        {
          "@type": "Service",
          name: sub.seoTitle ?? sub.name,
          description,
          url: absoluteUrl(path),
          provider: { "@id": `${SITE_URL}/#organization` },
          serviceType: service.name,
          areaServed: "Worldwide",
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Services", item: absoluteUrl("/services") },
            { "@type": "ListItem", position: 2, name: service.name, item: absoluteUrl(`/services/${service.slug}`) },
            { "@type": "ListItem", position: 3, name: sub.name, item: absoluteUrl(path) },
          ],
        },
      ]),
    };
  }

  const title = service.seoTitle ?? service.name;
  const description = truncate(service.description);
  return {
    path,
    title,
    description,
    keywords: service.keywords,
    ogImage: resolveOg(service.heroImage),
    jsonLd: pageGraph(path, title, description, [
      {
        "@type": "Service",
        name: title,
        description: service.description,
        url: absoluteUrl(path),
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Services", item: absoluteUrl("/services") },
          { "@type": "ListItem", position: 2, name: service.name, item: absoluteUrl(path) },
        ],
      },
    ]),
  };
}

function insightSeo(path: string): RouteSeo | null {
  const id = path.split("/").filter(Boolean)[1];
  if (!id) return null;
  const article = INSIGHT_ARTICLES.find((item) => item.id === id);
  if (!article) return null;
  const description = truncate(article.excerpt);
  const keywords = [article.category, ...(article.tags ?? []), "medical device", "Revive Medical Technologies"].join(", ");
  return {
    path,
    title: article.title,
    description,
    keywords,
    ogImage: resolveOg(article.image),
    jsonLd: pageGraph(path, article.title, description, [
      {
        "@type": "Article",
        headline: article.title,
        description,
        author: { "@type": "Organization", name: SITE_NAME },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: absoluteUrl(path),
      },
    ]),
  };
}

export function getRouteSeo(path: string): RouteSeo {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const service = serviceSeo(normalized);
  if (service) return service;

  if (normalized.startsWith("/insights/") && normalized !== "/insights") {
    const article = insightSeo(normalized);
    if (article) return article;
  }

  const staticSeo = STATIC_SEO[normalized];
  if (staticSeo) {
    const extra = normalized === "/" ? [faqJsonLd(HOME_FAQS)] : [];
    return {
      path: normalized,
      ...staticSeo,
      ogImage: DEFAULT_OG_IMAGE,
      jsonLd: pageGraph(normalized, staticSeo.title, staticSeo.description, extra),
    };
  }

  const label = normalized.split("/").filter(Boolean).pop()?.replace(/-/g, " ") ?? "Page";
  const title = label.replace(/\b\w/g, (char) => char.toUpperCase());
  const description = truncate(`${title} from ${SITE_NAME}.`);
  return {
    path: normalized,
    title,
    description,
    keywords: HOME_KEYWORDS,
    ogImage: DEFAULT_OG_IMAGE,
    jsonLd: pageGraph(normalized, title, description),
  };
}

export function getAllRouteSeo(): RouteSeo[] {
  return getAllSitemapEntries().map((entry) => getRouteSeo(entry.path));
}

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function upsertMetaName(html: string, name: string, content: string): string {
  const tag = `<meta name="${name}" content="${escapeAttr(content)}" />`;
  const pattern = new RegExp(`<meta\\s+name="${name}"\\s+content="[^"]*"\\s*\\/?>`, "i");
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function upsertMetaProperty(html: string, property: string, content: string): string {
  const tag = `<meta property="${property}" content="${escapeAttr(content)}" />`;
  const pattern = new RegExp(`<meta\\s+property="${property}"\\s+content="[^"]*"\\s*\\/?>`, "i");
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function upsertCanonical(html: string, href: string): string {
  const tag = `<link rel="canonical" href="${escapeAttr(href)}" />`;
  const pattern = /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i;
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

export function applyRouteSeoToHtml(html: string, route: RouteSeo): string {
  const fullTitle = `${route.title} | ${SITE_NAME}`;
  const canonical = absoluteUrl(route.path);
  const json = JSON.stringify(route.jsonLd).replace(/</g, "\\u003c");
  const jsonTag = `<script type="application/ld+json" id="seo-jsonld">${json}</script>`;

  let next = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeAttr(fullTitle)}</title>`);
  next = upsertMetaName(next, "description", route.description);
  next = upsertMetaName(next, "keywords", route.keywords);
  next = upsertMetaName(next, "robots", "index, follow");
  next = upsertMetaProperty(next, "og:title", fullTitle);
  next = upsertMetaProperty(next, "og:description", route.description);
  next = upsertMetaProperty(next, "og:url", canonical);
  next = upsertMetaProperty(next, "og:image", route.ogImage);
  next = upsertMetaProperty(next, "og:type", "website");
  next = upsertMetaProperty(next, "og:site_name", SITE_NAME);
  next = upsertMetaName(next, "twitter:card", "summary_large_image");
  next = upsertMetaName(next, "twitter:title", fullTitle);
  next = upsertMetaName(next, "twitter:description", route.description);
  next = upsertMetaName(next, "twitter:image", route.ogImage);
  next = upsertCanonical(next, canonical);

  const jsonPattern = /<script type="application\/ld\+json" id="seo-jsonld">[\s\S]*?<\/script>/i;
  if (jsonPattern.test(next)) next = next.replace(jsonPattern, jsonTag);
  else next = next.replace("</head>", `    ${jsonTag}\n  </head>`);

  return next;
}
