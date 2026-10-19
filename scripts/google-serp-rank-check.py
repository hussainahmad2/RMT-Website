#!/usr/bin/env python3
"""Check Google organic page-1 presence for short keywords (rmt-usa.com)."""
from __future__ import annotations

import json
import time
import urllib.parse
from pathlib import Path

from playwright.sync_api import sync_playwright

KEYWORDS = [
    "OEM manufacturing",
    "medical device manufacturing",
    "healthcare solution",
    "AI solution",
    "ONC certification",
    "CCM PCM implementation",
    "medical device R&D",
    "manufacturing R&D",
    "device manufacturing",
    "contract manufacturing",
    "OEM medical device",
    "cleanroom manufacturing",
    "ISO 13485 manufacturing",
    "catheter manufacturing",
    "machine manufacturing",
    "production equipment",
    "regulatory compliance",
    "FDA compliance",
    "EU MDR",
    "510k",
    "ISO 13485 QMS",
    "CE marking",
    "software services",
    "medical software",
    "SaMD",
    "healthcare software",
    "healthcare AI",
    "clinical decision support",
    "RPM software",
    "CCM software",
    "PCM software",
    "EHR integration",
    "HIPAA compliance software",
    "IEC 62304",
    "medical device engineering",
    "product development",
    "prototype development",
    "design transfer",
    "biomaterials R&D",
    "medical device testing",
    "sterility testing",
    "quality control medical device",
]

# Brand controls (should rank)
BRAND = [
    "revive medical technologies",
    "rmt usa",
    "rmt medical",
]

OUT = Path(__file__).resolve().parent / "serp-rank-results.json"


def check(page, keyword: str, pages: int = 3) -> dict:
    """Scan first N Google result pages for rmt-usa.com."""
    found_page = None
    found_pos = None
    found_url = None
    top_domains_p1 = []

    for p in range(pages):
        start = p * 10
        q = urllib.parse.quote_plus(keyword)
        url = f"https://www.google.com/search?q={q}&num=10&hl=en&gl=us&pws=0&start={start}"
        page.goto(url, wait_until="domcontentloaded", timeout=60000)
        page.wait_for_timeout(1200)

        # Consent / captcha soft-detect
        html = page.content().lower()
        if "unusual traffic" in html or "/sorry/" in page.url:
            return {
                "keyword": keyword,
                "status": "BLOCKED",
                "google_page": None,
                "position_on_page": None,
                "url": None,
                "note": "Google bot check / captcha",
            }

        data = page.evaluate(
            """() => {
              const cites = Array.from(document.querySelectorAll('cite'))
                .map(c => (c.textContent || '').trim())
                .filter(Boolean);
              const uniq = [];
              for (const c of cites) if (!uniq.includes(c)) uniq.push(c);
              const domains = [];
              for (const c of uniq) {
                const d = c.replace(/^https?:\\/\\//,'').split(/[\\s›/]/)[0].toLowerCase();
                if (d.includes('.') && !domains.includes(d)) domains.push(d);
              }
              const has = document.documentElement.outerHTML.toLowerCase().includes('rmt-usa');
              let hitUrl = null;
              for (const a of document.querySelectorAll('a')) {
                const t = (a.innerText || '') + ' ' + (a.href || '');
                if (t.toLowerCase().includes('rmt-usa.com')) {
                  hitUrl = a.innerText.split('\\n').slice(0,3).join(' | ').slice(0,180);
                  break;
                }
              }
              const pos = domains.findIndex(d => d.includes('rmt-usa'));
              return { has, domains, pos: pos >= 0 ? pos + 1 : null, hitUrl };
            }"""
        )

        if p == 0:
            top_domains_p1 = data.get("domains", [])[:10]

        if data.get("has") or data.get("pos"):
            found_page = p + 1
            found_pos = data.get("pos")
            found_url = data.get("hitUrl")
            break

        time.sleep(0.8)

    if found_page:
        abs_pos = None
        if found_pos:
            abs_pos = (found_page - 1) * 10 + found_pos
        return {
            "keyword": keyword,
            "status": "FOUND",
            "google_page": found_page,
            "position_on_page": found_pos,
            "approx_rank": abs_pos,
            "url": found_url,
            "page1_domains": top_domains_p1,
        }

    return {
        "keyword": keyword,
        "status": "NOT_IN_TOP_30",
        "google_page": None,
        "position_on_page": None,
        "approx_rank": None,
        "url": None,
        "page1_domains": top_domains_p1,
        "note": "Not found in Google pages 1–3 (~top 30 organic)",
    }


def main():
    results = []
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            locale="en-US",
            user_agent=(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            ),
            viewport={"width": 1365, "height": 900},
        )
        page = context.new_page()

        print("=== BRAND CONTROLS ===", flush=True)
        for kw in BRAND:
            row = check(page, kw, pages=1)
            results.append({**row, "type": "brand"})
            print(f"{row['status']:14} | page={row.get('google_page')} | {kw}", flush=True)
            time.sleep(1.2)

        print("\n=== 42 SHORT KEYWORDS (pages 1-3) ===", flush=True)
        for i, kw in enumerate(KEYWORDS, 1):
            row = check(page, kw, pages=3)
            results.append({**row, "type": "target"})
            print(
                f"[{i:02d}/42] {row['status']:14} | page={row.get('google_page')} pos={row.get('position_on_page')} | {kw}",
                flush=True,
            )
            time.sleep(1.5)

        browser.close()

    OUT.write_text(json.dumps(results, indent=2), encoding="utf-8")
    found = [r for r in results if r["status"] == "FOUND" and r.get("type") == "target"]
    miss = [r for r in results if r["status"] == "NOT_IN_TOP_30" and r.get("type") == "target"]
    blocked = [r for r in results if r["status"] == "BLOCKED"]
    print("\n=== SUMMARY ===", flush=True)
    print(f"target_found={len(found)} target_not_top30={len(miss)} blocked={len(blocked)}")
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
