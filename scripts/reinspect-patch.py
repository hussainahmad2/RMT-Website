#!/usr/bin/env python3
"""Re-inspect a patch file's URLs via GSC URL Inspection."""
from __future__ import annotations

import json
import sys
import time
from collections import Counter
from pathlib import Path

from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

ROOT = Path(__file__).resolve().parents[1]
SA_PATH = Path.home() / ".config" / "claude-seo" / "service-account.json"
PROPERTY = "https://rmt-usa.com/"
SCOPES = ["https://www.googleapis.com/auth/webmasters"]


def classify(status: str) -> str:
    s = status.lower()
    if "submitted and indexed" in s or s == "indexed":
        return "indexed"
    if "discovered" in s:
        return "discovered"
    if "unknown" in s:
        return "unknown"
    if "crawled" in s and "not indexed" in s:
        return "crawled_not_indexed"
    return "other"


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: reinspect-patch.py scripts/index-patches/patch-a.json", file=sys.stderr)
        return 1
    patch_path = Path(sys.argv[1])
    data = json.loads(patch_path.read_text(encoding="utf-8"))
    urls = data["urls"]
    # Optional limit for smoke re-inspect
    limit = None
    for a in sys.argv[2:]:
        if a.startswith("--limit="):
            limit = int(a.split("=", 1)[1])
    if limit:
        urls = urls[:limit]

    print(f"Re-inspecting {len(urls)} URLs from {patch_path.name}...", flush=True)
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
            bucket = classify(status)
            rows.append({"url": url, "status": status, "bucket": bucket, "crawl": idx.get("lastCrawlTime") or "-"})
            print(f"[{i}/{len(urls)}] {bucket:22} | {status[:48]:48} | {url}", flush=True)
        except HttpError as e:
            rows.append({"url": url, "status": f"ERROR:{e.resp.status}", "bucket": "error", "crawl": "-"})
            print(f"[{i}/{len(urls)}] ERROR {e.resp.status} | {url}", flush=True)
            if e.resp.status == 429:
                time.sleep(8)
        time.sleep(0.35)

    buckets = Counter(r["bucket"] for r in rows)
    out = ROOT / "scripts" / "index-patches" / f"reinspect-{patch_path.stem}.json"
    payload = {
        "patch": patch_path.name,
        "total": len(rows),
        "buckets": dict(buckets),
        "rows": rows,
    }
    out.write_text(json.dumps(payload, indent=2), encoding="utf-8")
    print("\n=== SUMMARY ===", flush=True)
    for k, v in buckets.most_common():
        print(f"  {k}: {v}", flush=True)
    print(f"Wrote {out}", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
