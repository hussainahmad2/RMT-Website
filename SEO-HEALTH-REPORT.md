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
10. **Money-page FAQs:** manufacturing / R&D / product-development FAQPage + no-JS FAQ blocks
11. **IndexNow:** key file `/{key}.txt` + `npm run indexnow`
12. **Security headers:** HSTS, X-Frame-Options, Permissions-Policy
13. **Content image alts:** product showcase + Why RMT cards (decorative backgrounds remain `alt=""` + `aria-hidden`)

## Still open (needs keys / larger work)

- Richer no-JS body beyond SEO stub (true SSG/prerender of full React trees)
- PageSpeed Insights / GSC live checks when `GOOGLE_API_KEY` is configured
- Re-run Claude SEO specialists after deploy to refresh scores

## Capability list

See `CLAUDE-SEO-CAPABILITIES.md`
