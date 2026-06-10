import { ALL_SERVICES } from "../data/services";
import { SITE_URL } from "./site-config";

export interface SitemapEntry {
  path: string;
  priority: string;
  changefreq: "weekly" | "monthly";
}

const STATIC_PAGES: SitemapEntry[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "weekly" },
  { path: "/products", priority: "0.9", changefreq: "weekly" },
  { path: "/testimonials", priority: "0.8", changefreq: "monthly" },
  { path: "/projects", priority: "0.8", changefreq: "monthly" },
  { path: "/testing", priority: "0.7", changefreq: "monthly" },
  { path: "/training", priority: "0.7", changefreq: "monthly" },
  { path: "/insights", priority: "0.7", changefreq: "weekly" },
  { path: "/gallery", priority: "0.6", changefreq: "monthly" },
  { path: "/careers", priority: "0.7", changefreq: "weekly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/sitemap", priority: "0.4", changefreq: "monthly" },
];

export function getAllSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [...STATIC_PAGES];

  for (const service of ALL_SERVICES) {
    entries.push({
      path: `/services/${service.slug}`,
      priority: "0.8",
      changefreq: "monthly",
    });
    for (const sub of service.subServices) {
      entries.push({
        path: `/services/${service.slug}/${sub.slug}`,
        priority: "0.7",
        changefreq: "monthly",
      });
    }
  }

  return entries;
}

export function buildSitemapXml(): string {
  const today = new Date().toISOString().slice(0, 10);
  const urls = getAllSitemapEntries()
    .map(
      (entry) =>
        `  <url><loc>${SITE_URL}${entry.path}</loc><lastmod>${today}</lastmod><changefreq>${entry.changefreq}</changefreq><priority>${entry.priority}</priority></url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
