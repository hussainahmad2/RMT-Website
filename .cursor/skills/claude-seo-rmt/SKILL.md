---
name: claude-seo-rmt
description: >-
  Run Claude SEO (v2.4.0) audits for rmt-usa.com. Use when the user asks for
  /seo audit, technical SEO, schema, GEO, sitemap, content quality, or agentic
  checks. Prefer keyword-only SERP checks (no brand name). Runtime lives at
  ~/.claude/skills/seo; mirrored docs under .cursor/skills/.
---

# Claude SEO for RMT Website

## Runtime

```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
py -3 "$env:USERPROFILE\.claude\skills\seo\scripts\runtime.py" doctor --json
py -3 "$env:USERPROFILE\.claude\skills\seo\scripts\runtime.py" run <script.py> <args> --json
```

## Target site

- Production: `https://rmt-usa.com`
- Focus keywords: ISO 13485, medical device manufacturing, contract manufacturing, medical device R&D (do **not** rely on brand queries)

## Standard audit sequence

1. `sitemap_discovery.py https://rmt-usa.com --json`
2. `render_page.py <url> --mode always --json --output out.html`
3. `parse_html.py out.html --json`
4. `content_quality.py out.html --json`
5. `agentic_check.py https://rmt-usa.com/ --json`
6. Money pages: `/`, `/services/contract-manufacturing`, `/services/engineering-product-development/research-development-engineering`, `/services/product-development`, `/services/software-ai`, `/services/regulatory-compliance`

## Hub skill

Read `~/.claude/skills/seo/SKILL.md` (or `.cursor/skills/seo/SKILL.md`) for full `/seo` command map and parallel agent orchestration.
