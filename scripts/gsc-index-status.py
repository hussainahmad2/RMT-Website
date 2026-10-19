#!/usr/bin/env python3
"""URL Inspection summary for all short-keyword index URLs."""
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
    if "excluded" in s or "alternate" in s or "redirect" in s:
        return "excluded_other"
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
            idx = resp.get("inspectionResult", {}).get("indexStatusResult", {})
            status = (idx.get("coverageState") or idx.get("verdict") or "UNKNOWN").strip()
            crawl = idx.get("lastCrawlTime") or "-"
            bucket = classify(status)
            rows.append({"url": url, "status": status, "bucket": bucket, "crawl": crawl})
            print(f"[{i}/{len(urls)}] {bucket:22} | {status[:40]:40} | {url}", flush=True)
        except HttpError as e:
            rows.append({"url": url, "status": f"ERROR:{e.resp.status}", "bucket": "error", "crawl": "-"})
            print(f"[{i}/{len(urls)}] ERROR {e.resp.status} | {url}", flush=True)
            if e.resp.status == 429:
                time.sleep(5)
        time.sleep(0.3)

    buckets = Counter(r["bucket"] for r in rows)
    print("\n=== SUMMARY ===", flush=True)
    for k, v in buckets.most_common():
        print(f"  {k}: {v}", flush=True)
    left = sum(v for k, v in buckets.items() if k != "indexed")
    print(f"\n  TOTAL: {len(rows)}", flush=True)
    print(f"  INDEXED: {buckets.get('indexed', 0)}", flush=True)
    print(f"  LEFT (not indexed): {left}", flush=True)

    out = Path.home() / "AppData" / "Local" / "Temp" / "gsc-index-status.json"
    # also write to scripts for convenience
    out2 = ROOT / "scripts" / "gsc-index-status-latest.json"
    payload = {
        "total": len(rows),
        "indexed": buckets.get("indexed", 0),
        "left": left,
        "buckets": dict(buckets),
        "rows": rows,
    }
    out2.write_text(json.dumps(payload, indent=2), encoding="utf-8")
    print(f"\nWrote {out2}", flush=True)


if __name__ == "__main__":
    main()
