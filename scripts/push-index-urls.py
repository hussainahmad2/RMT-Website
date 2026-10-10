#!/usr/bin/env python3
"""Push all short-keyword / money-topic URLs to Google Indexing API + IndexNow + sitemap."""
from __future__ import annotations

import json
import re
import time
import urllib.request
from pathlib import Path

from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

ROOT = Path(__file__).resolve().parents[1]
SA_PATH = Path.home() / ".config" / "claude-seo" / "service-account.json"
PROPERTY = "https://rmt-usa.com/"
ORIGIN = "https://rmt-usa.com"
SCOPES = [
    "https://www.googleapis.com/auth/webmasters",
    "https://www.googleapis.com/auth/indexing",
]
INDEXNOW_KEY = "rmtusa8f3a2c91e4b67d05"


def load_urls() -> list[str]:
    text = (ROOT / "src/data/short-keywords.ts").read_text(encoding="utf-8")
    paths = []
    seen = set()
    for url in re.findall(r'url:\s*"([^"]+)"', text):
        if url in seen:
            continue
        seen.add(url)
        paths.append(ORIGIN if url == "/" else f"{ORIGIN}{url}")
    return paths


def main():
    urls = load_urls()
    print(f"URLs to push: {len(urls)}", flush=True)
    if not SA_PATH.exists():
        raise SystemExit(f"Missing {SA_PATH}")

    creds = service_account.Credentials.from_service_account_file(str(SA_PATH), scopes=SCOPES)
    indexing = build("indexing", "v3", credentials=creds, cache_discovery=False)
    sc = build("searchconsole", "v1", credentials=creds, cache_discovery=False)

    ok = fail = 0
    errors = []
    for i, url in enumerate(urls, 1):
        try:
            indexing.urlNotifications().publish(
                body={"url": url, "type": "URL_UPDATED"}
            ).execute()
            ok += 1
            print(f"[{i}/{len(urls)}] OK  {url}", flush=True)
        except HttpError as e:
            fail += 1
            errors.append({"url": url, "status": e.resp.status})
            print(f"[{i}/{len(urls)}] FAIL {e.resp.status} {url}", flush=True)
        time.sleep(0.2)

    try:
        sc.sitemaps().submit(siteUrl=PROPERTY, feedpath=f"{ORIGIN}/sitemap.xml").execute()
        print("Sitemap submit: OK", flush=True)
    except HttpError as e:
        print(f"Sitemap submit: {e.resp.status} (may still be registered)", flush=True)

    # IndexNow in batches of 100
    for start in range(0, len(urls), 100):
        batch = urls[start : start + 100]
        payload = json.dumps(
            {
                "host": "rmt-usa.com",
                "key": INDEXNOW_KEY,
                "keyLocation": f"{ORIGIN}/{INDEXNOW_KEY}.txt",
                "urlList": batch,
            }
        ).encode()
        req = urllib.request.Request(
            "https://api.indexnow.org/indexnow",
            data=payload,
            headers={"Content-Type": "application/json; charset=utf-8"},
            method="POST",
        )
        try:
            with urllib.request.urlopen(req, timeout=45) as resp:
                print(f"IndexNow batch {start // 100 + 1}: {resp.status} ({len(batch)} urls)", flush=True)
        except Exception as e:
            print(f"IndexNow batch {start // 100 + 1}: failed {type(e).__name__}", flush=True)

    print(f"\nDone Indexing API ok={ok} fail={fail}", flush=True)
    if errors:
        print("Sample errors:", errors[:5], flush=True)


if __name__ == "__main__":
    main()
