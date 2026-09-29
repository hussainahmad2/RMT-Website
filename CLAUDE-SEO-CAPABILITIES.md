# Claude SEO — Full Capability List (v2.4.0)

Installed locally. Runtime: `py -3 ~/.claude/skills/seo/scripts/runtime.py`

## Commands (`/seo …`)

| Command | What you get |
|---|---|
| **audit** | Full site audit — parallel specialists + health score 0–100 |
| **page** | Deep single-page analysis |
| **technical** | Crawlability, indexability, security, URLs, CWV, JS rendering |
| **sitemap** | Analyze or generate XML sitemaps |
| **schema** | Detect / validate / generate Schema.org JSON-LD |
| **content** | E-E-A-T + content quality |
| **content-brief** | Keyword brief, outline, internal links |
| **images** | Alt text, image SEO, file checks |
| **geo** | AI Overviews / ChatGPT / Perplexity citability |
| **agentic** | Agent readiness (llms.txt, no-JS content, robots AI groups) |
| **local** | GBP, citations, reviews, map pack |
| **maps** | Geo-grid / GBP / competitors (needs DataForSEO) |
| **backlinks** | Free: Common Crawl; Moz/Bing with API keys |
| **cluster** | Keyword clustering / content architecture |
| **sxo** | Search experience: page types, personas |
| **hreflang** | International / i18n |
| **google** | GSC, PageSpeed, CrUX, Indexing, GA4 (needs Google API) |
| **drift** | Baseline → compare → history (change monitoring) |
| **plan** | Strategic SEO plan by business type |
| **programmatic** | Programmatic SEO planning |
| **competitor-pages** | Competitor comparison page briefs |
| **ecommerce** | Product schema / marketplace (N/A for RMT) |
| **flow** | FLOW prompts: Find / Leverage / Optimize / Win / Local |
| **setup / doctor** | Install/check Python + Playwright runtime |

## Optional extensions (need install + API keys)
DataForSEO, Firecrawl, Ahrefs, SE Ranking, Matomo, Banana (image gen), Unlighthouse

## Specialist agents (19)
technical, content, schema, sitemap, performance, visual, geo, agentic, local, maps, google, backlinks, cluster, ecommerce, drift, sxo, flow, dataforseo, image-gen

## What works for RMT *right now* (no API keys)
audit · page · technical · sitemap · schema · content · images · geo · agentic · local · sxo · drift · parasite/domain/CommonCrawl · plan/flow/content-brief

## Needs API keys later
PageSpeed/CrUX/GSC/GA4 · Moz backlinks · DataForSEO maps/SERP · Firecrawl full crawl
