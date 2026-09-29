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

## Applied this round (pushed)

1. **MedicalBusiness JSON-LD on home** (not only `/contact`)
2. **NAP:** US `postalCode` 56377 + telephone `+92-51-8480117` in Organization/MedicalBusiness + Footer
3. **OG image:** `opengraph.jpg` (~114 KB) instead of `products-hero.png` (~1.5 MB)
4. **R&D money page:** expanded overview / keyPoints / deliverables for `research-development-engineering`
5. **Orphan 404s:** `/services/turnkey-commissioning/*` → 301 to manufacturing / ISO 13485 QMS
6. **robots.txt:** Content-Signal repeated on named AI search/training groups
7. **Earlier:** per-route crawlable `#root` shell (fix home-H1 leak on money pages)

## Still open

- Richer no-JS body beyond SEO stub (true SSG/prerender)
- Client `useSEO` JSON-LD replace vs prerender `@graph` consistency
- IndexNow key + submit
- Compress remaining empty alts on manufacturing images
- PageSpeed/GSC when `GOOGLE_API_KEY` configured
- Named Person schema for leadership on money pages

## Capability list

See `CLAUDE-SEO-CAPABILITIES.md`
