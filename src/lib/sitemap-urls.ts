import { INSIGHT_ARTICLES } from "../data/insights-content";
import { PROJECT_CASE_STUDIES } from "../data/projects-content";
import { ALL_SERVICES } from "../data/services";
import { SITE_URL } from "./site-config";

export interface SitemapEntry {
  path: string;
  priority: string;
  changefreq: "weekly" | "monthly";
}

/** High-value pages Google should crawl/index first for manufacturing, R&D, ISO 13485. */
const MONEY_PAGE_PRIORITY: Record<string, { priority: string; changefreq: "weekly" | "monthly" }> = {
  "/": { priority: "1.0", changefreq: "weekly" },
  "/services": { priority: "0.95", changefreq: "weekly" },
  "/services/contract-manufacturing": { priority: "1.0", changefreq: "weekly" },
  "/services/contract-manufacturing/manufacturing-capabilities": { priority: "0.9", changefreq: "weekly" },
  "/services/contract-manufacturing/cleanroom-infrastructure": { priority: "0.9", changefreq: "weekly" },
  "/services/contract-manufacturing/quality-compliance": { priority: "0.9", changefreq: "weekly" },
  "/services/product-development": { priority: "1.0", changefreq: "weekly" },
  "/services/engineering-product-development": { priority: "0.95", changefreq: "weekly" },
  "/services/engineering-product-development/research-development-engineering": {
    priority: "1.0",
    changefreq: "weekly",
  },
  "/services/software-ai": { priority: "0.95", changefreq: "weekly" },
  "/services/regulatory-compliance": { priority: "0.95", changefreq: "weekly" },
  "/services/regulatory-compliance/fda-compliance": { priority: "0.9", changefreq: "weekly" },
  "/services/regulatory-compliance/eu-mdr-compliance": { priority: "0.9", changefreq: "weekly" },
  "/services/regulatory-compliance/quality-management-system": { priority: "0.9", changefreq: "weekly" },
  "/services/mbl-laboratory": { priority: "0.95", changefreq: "weekly" },
  "/services/mbl-laboratory/sterility-testing": { priority: "0.9", changefreq: "weekly" },
  "/services/mbl-laboratory/bacterial-endotoxin-testing": { priority: "0.9", changefreq: "weekly" },
  "/pharmaceutical": { priority: "0.9", changefreq: "weekly" },
  "/contact": { priority: "0.85", changefreq: "monthly" },
  "/about": { priority: "0.85", changefreq: "monthly" },
};

const STATIC_PAGES: SitemapEntry[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "weekly" },
  { path: "/pharmaceutical", priority: "0.9", changefreq: "monthly" },
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

function withMoneyPriority(entry: SitemapEntry): SitemapEntry {
  const boost = MONEY_PAGE_PRIORITY[entry.path];
  if (!boost) return entry;
  return { ...entry, priority: boost.priority, changefreq: boost.changefreq };
}

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

  for (const article of INSIGHT_ARTICLES) {
    entries.push({
      path: `/insights/${article.id}`,
      priority: "0.6",
      changefreq: "monthly",
    });
  }

  for (const project of PROJECT_CASE_STUDIES) {
    entries.push({
      path: `/projects/${project.slug}`,
      priority: "0.75",
      changefreq: "monthly",
    });
  }

  return entries.map(withMoneyPriority);
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
