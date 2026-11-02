#!/usr/bin/env python3
"""URL Inspection summary for all short-keyword index URLs (+ why not indexed)."""
from __future__ import annotations

import json
import re
import time
from collections import Counter
from pathlib import Path

from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

ROOT = Path(__file__).resolve().parents[1]
SA_PATH = Path.home() / ".config" / "claude-seo" / "service-account.json"
PROPERTY = "https://rmt-usa.com/"
ORIGIN = "https://rmt-usa.com"
SCOPES = ["https://www.googleapis.com/auth/webmasters"]


def load_urls() -> list[str]:
    text = (ROOT / "src/data/short-keywords.ts").read_text(encoding="utf-8")
    seen = set()
    out = []
    for path in re.findall(r'url:\s*"([^"]+)"', text):
        if path in seen:
            continue
        seen.add(path)
        out.append(ORIGIN if path == "/" else f"{ORIGIN}{path}")
    return out


def classify(status: str) -> str:
    s = status.lower()
    if "error" in s:
        return "error"
    if "submitted and indexed" in s or s == "indexed":
        return "indexed"
    if "discovered" in s:
        return "discovered"
    if "crawled" in s and "not indexed" in s:
        return "crawled_not_indexed"
    if "unknown" in s:
        return "unknown"
    if "excluded" in s or "alternate" in s or "redirect" in s or "duplicate" in s:
        return "excluded_other"
    if "not found" in s or "404" in s:
        return "not_found"
    if "blocked" in s or "robots" in s:
        return "blocked"
    return "other"


def main():
    urls = load_urls()
    print(f"Inspecting {len(urls)} URLs...", flush=True)
    creds = service_account.Credentials.from_service_account_file(str(SA_PATH), scopes=SCOPES)
    sc = build("searchconsole", "v1", credentials=creds, cache_discovery=False)

    rows = []
    for i, url in enumerate(urls, 1):
        try:
            resp = (
                sc.urlInspection()
                .index()
                .inspect(body={"inspectionUrl": url, "siteUrl": PROPERTY})
                .execute()
            )
            ir = resp.get("inspectionResult", {})
            idx = ir.get("indexStatusResult", {})
            status = (idx.get("coverageState") or idx.get("verdict") or "UNKNOWN").strip()
            bucket = classify(status)
            row = {
                "url": url,
                "status": status,
                "bucket": bucket,
                "verdict": idx.get("verdict"),
                "crawl": idx.get("lastCrawlTime") or "-",
                "robotsTxt": idx.get("robotsTxtState"),
                "indexingState": idx.get("indexingState"),
                "pageFetch": idx.get("pageFetchState"),
                "crawledAs": idx.get("crawledAs"),
                "googleCanonical": idx.get("googleCanonical"),
                "userCanonical": idx.get("userCanonical"),
                "sitemap": idx.get("sitemap"),
                "referringUrls": idx.get("referringUrls") or [],
            }
            rows.append(row)
            print(f"[{i}/{len(urls)}] {bucket:22} | {status[:48]:48} | {url}", flush=True)
        except HttpError as e:
            rows.append(
                {
                    "url": url,
                    "status": f"ERROR:{e.resp.status}",
                    "bucket": "error",
                    "crawl": "-",
                    "verdict": None,
                    "robotsTxt": None,
                    "indexingState": None,
                    "pageFetch": None,
                    "crawledAs": None,
                    "googleCanonical": None,
                    "userCanonical": None,
                    "sitemap": None,
                    "referringUrls": [],
                }
            )
            print(f"[{i}/{len(urls)}] ERROR {e.resp.status} | {url}", flush=True)
            if e.resp.status == 429:
                time.sleep(8)
        time.sleep(0.35)

    buckets = Counter(r["bucket"] for r in rows)
    reasons = Counter(r["status"] for r in rows if r["bucket"] != "indexed")
    print("\n=== SUMMARY ===", flush=True)
    for k, v in buckets.most_common():
        print(f"  {k}: {v}", flush=True)
    print("\n=== WHY NOT INDEXED ===", flush=True)
    for k, v in reasons.most_common():
        print(f"  {v:4}  {k}", flush=True)
    left = sum(v for k, v in buckets.items() if k != "indexed")
    print(f"\n  TOTAL: {len(rows)}", flush=True)
    print(f"  INDEXED: {buckets.get('indexed', 0)}", flush=True)
    print(f"  LEFT (not indexed): {left}", flush=True)

    out2 = ROOT / "scripts" / "gsc-index-status-latest.json"
    payload = {
        "total": len(rows),
        "indexed": buckets.get("indexed", 0),
        "left": left,
        "buckets": dict(buckets),
        "why_not_indexed": dict(reasons),
        "not_indexed_urls": [r for r in rows if r["bucket"] != "indexed"],
        "indexed_urls": [r["url"] for r in rows if r["bucket"] == "indexed"],
        "rows": rows,
    }
    out2.write_text(json.dumps(payload, indent=2), encoding="utf-8")
    print(f"\nWrote {out2}", flush=True)


if __name__ == "__main__":
    main()
