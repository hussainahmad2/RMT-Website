# Unified Claude SEO Health Report — rmt-usa.com

**Date:** 2026-09-29  
**Toolkit:** Claude SEO v2.4.0  
**Specialists:** [Technical+schema](8b9aeead-8aeb-45bd-a48a-0ee6dcac95a6) · [Content+GEO+local+images](adb9ee06-245b-47b0-baa4-1125ac23354e)

## Scores (pre-fix baselines)

| Area | Score |
|------|------:|
| Technical + schema | 71 |
| Content | ~72 |
| E-E-A-T | ~61 |
| GEO | ~64 |
| Local | ~48 |
| Images | ~52 |

## Applied (pushed)

1. **MedicalBusiness JSON-LD on home** (not only `/contact`)
2. **NAP:** US `postalCode` 56377 + telephone `+92-51-8480117` in Organization/MedicalBusiness + Footer
3. **OG image:** `opengraph.jpg` (~114 KB) instead of `products-hero.png` (~1.5 MB)
4. **R&D money page:** expanded overview / keyPoints / deliverables for `research-development-engineering`
5. **Orphan 404s:** `/services/turnkey-commissioning/*` → 301 to manufacturing / ISO 13485 QMS
6. **robots.txt:** Content-Signal repeated on named AI search/training groups
7. **Per-route crawlable `#root` shell** (fix home-H1 leak on money pages)
8. **Client JSON-LD:** `useSEO` / `setJsonLd` always emit `@graph`; service pages use `getRouteSeo` (no wipe of Organization/WebPage)
9. **Person schema:** CEO `Person` on all routes; Organization `founder` / `employee` link
10. **Money-page FAQs:** manufacturing / R&D / product-development FAQPage + no-JS FAQ blocks + visible FAQ UI
11. **IndexNow:** key file `/{key}.txt` + `npm run indexnow`
12. **Security headers:** HSTS, X-Frame-Options, Permissions-Policy
13. **Content image alts:** product showcase + Why RMT cards (decorative backgrounds remain `alt=""` + `aria-hidden`)
14. **Mobile LCP:** hero `fetchPriority=high` / `loading=eager`, non-blocking Google Fonts, correct home preload, service-hero preload in prerender HTML

## Retest snapshot (2026-09-29)

| Check | Result |
|-------|--------|
| Agentic home | P0 server-rendered **pass** (~180 no-JS words) |
| Sitemap | valid `sitemap.xml` |
| Live H1 shells | home / manufacturing / R&D each have correct unique H1 + JSON-LD + FAQ |
| IndexNow key | `200` text/plain |
| PSI SEO category | **100** on tested URLs |
| CrUX origin/home | LCP 3.2s NI · INP/CLS good |

## Still open

- Compress heavy assets (partner logos, `rmt-logo.webp`, `mdm/cleanroom-1.jpeg`, badges) — largest PSI image-delivery waste
- True full-page SSG (beyond SEO stub)
- GSC / URL Inspection (needs OAuth or service account)
- URL-level CrUX on money pages (needs more Chrome traffic)
- Re-run specialists after next deploy for score deltas

## PageSpeed Insights (lab)

| URL | Strategy | Perf | A11y | BP | SEO | LCP | FCP |
|-----|----------|-----:|-----:|---:|----:|----:|----:|
| `/` | mobile | 66 | 91 | 96 | **100** | 7.4s | 3.5s |
| `/` | desktop | **92** | 91 | 96 | **100** | 1.5s | 0.7s |
| Manufacturing | mobile | 69 | 92 | 100 | **100** | 7.1s | 3.5s |
| R&D money page | mobile | 68 | 91 | 100 | **100** | 6.3s | 3.8s |

## CrUX field data (28-day)

| Metric | p75 | Rating |
|--------|----:|--------|
| LCP | 3.2s | needs improvement |
| FCP | 2.8s | needs improvement |
| INP | 169ms | **good** |
| CLS | 0.00 | **good** |
| TTFB | 1.1s | needs improvement |

## Capability list

See `CLAUDE-SEO-CAPABILITIES.md`
