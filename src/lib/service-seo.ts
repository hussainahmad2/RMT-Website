import type { ServiceData, SubServiceData } from "@/data/services";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";

export function servicePath(slug: string): string {
  return `/services/${slug}`;
}

export function subServicePath(serviceSlug: string, subSlug: string): string {
  return `/services/${serviceSlug}/${subSlug}`;
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function truncateDescription(text: string, max = 160): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;
  return `${normalized.slice(0, max - 1).trimEnd()}…`;
}

export function buildSubServiceDescription(sub: SubServiceData, service: ServiceData): string {
  const lead = sub.overview[0] ?? sub.tagline;
  return truncateDescription(`${sub.tagline} ${lead}`);
}

export function buildSubServiceKeywords(sub: SubServiceData, service: ServiceData): string {
  const points = sub.keyPoints.slice(0, 3).join(", ");
  return `${sub.name}, ${service.name}, ${service.keywords}${points ? `, ${points}` : ""}`;
}

const ORGANIZATION_PROVIDER = {
  "@type": "Organization" as const,
  name: SITE_NAME,
  url: SITE_URL,
};

export function buildServiceJsonLd(service: ServiceData) {
  const url = absoluteUrl(servicePath(service.slug));
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url,
    provider: ORGANIZATION_PROVIDER,
    areaServed: "Worldwide",
    serviceType: service.name,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} offerings`,
      itemListElement: service.subServices.map((sub, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: sub.name,
          description: sub.tagline,
          url: absoluteUrl(subServicePath(service.slug, sub.slug)),
        },
      })),
    },
  };
}

export function buildSubServiceJsonLd(service: ServiceData, sub: SubServiceData) {
  const url = absoluteUrl(subServicePath(service.slug, sub.slug));
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: sub.name,
    description: buildSubServiceDescription(sub, service),
    url,
    provider: ORGANIZATION_PROVIDER,
    category: service.name,
    areaServed: "Worldwide",
    isPartOf: {
      "@type": "Service",
      name: service.name,
      url: absoluteUrl(servicePath(service.slug)),
    },
  };
}

export function buildBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
