#!/usr/bin/env python3
"""GSC follow-up: URL Inspection + Search Analytics + Indexing API for short-keyword URLs."""
from __future__ import annotations

import json
import os
import sys
import time
from collections import Counter
from pathlib import Path

from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

ORIGIN = "https://rmt-usa.com"
PROPERTY = "https://rmt-usa.com/"
SA_PATH = Path.home() / ".config" / "claude-seo" / "service-account.json"
SCOPES = [
    "https://www.googleapis.com/auth/webmasters",
    "https://www.googleapis.com/auth/indexing",
]

# Unique money / short-keyword landing URLs (from short-keywords.ts)
PATHS = [
    "/",
    "/services/contract-manufacturing",
    "/services/contract-manufacturing/manufacturing-capabilities",
    "/services/contract-manufacturing/cleanroom-infrastructure",
    "/services/software-ai",
    "/services/software-ai/ai-solutions",
    "/services/software-ai/software-compliance",
    "/services/software-ai/custom-medical-software",
    "/services/engineering-product-development",
    "/services/engineering-product-development/research-development-engineering",
    "/services/production-equipment-engineering",
    "/services/regulatory-compliance",
    "/services/regulatory-compliance/fda-compliance",
    "/services/regulatory-compliance/eu-mdr-compliance",
    "/services/regulatory-compliance/quality-management-system",
    "/services/product-development",
    "/services/bmd",
    "/testing",
    "/services/mbl-laboratory/sterility-testing",
    "/services/quality-testing",
]

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


def creds():
    return service_account.Credentials.from_service_account_file(str(SA_PATH), scopes=SCOPES)


def verdict(inspection: dict) -> str:
    ir = inspection.get("inspectionResult", {})
    idx = ir.get("indexStatusResult", {})
    cov = (idx.get("coverageState") or idx.get("verdict") or "UNKNOWN").strip()
    return cov


def last_crawl(inspection: dict) -> str:
    ir = inspection.get("inspectionResult", {})
    idx = ir.get("indexStatusResult", {})
    return idx.get("lastCrawlTime") or "-"


def inspect_all(searchconsole):
    rows = []
    for path in PATHS:
        url = ORIGIN if path == "/" else f"{ORIGIN}{path}"
        try:
            resp = (
                searchconsole.urlInspection()
                .index()
                .inspect(body={"inspectionUrl": url, "siteUrl": PROPERTY})
                .execute()
            )
            rows.append(
                {
                    "url": url,
                    "status": verdict(resp),
                    "crawl": last_crawl(resp),
                    "raw_verdict": resp.get("inspectionResult", {})
                    .get("indexStatusResult", {})
                    .get("verdict"),
                    "robots": resp.get("inspectionResult", {})
                    .get("indexStatusResult", {})
                    .get("robotsTxtState"),
                    "pageFetch": resp.get("inspectionResult", {})
                    .get("indexStatusResult", {})
                    .get("pageFetchState"),
                }
            )
        except HttpError as e:
            rows.append({"url": url, "status": f"ERROR:{e.resp.status}", "crawl": "-", "err": str(e)[:200]})
        time.sleep(0.35)
    return rows


def classify(status: str) -> str:
    s = status.lower()
    if "error" in s:
        return "error"
    if "submitted and indexed" in s or s == "indexed" or "passed" in s:
        return "indexed"
    if "discovered" in s:
        return "discovered"
    if "crawled" in s and "indexed" not in s:
        return "crawled_not_indexed"
    if "unknown" in s or "url is unknown" in s:
        return "unknown"
    return "other"


def search_analytics(searchconsole):
    # GSC data lags ~2–3 days; pull last 28 days
    body = {
        "startDate": "2026-09-12",
        "endDate": "2026-10-09",
        "dimensions": ["query"],
        "rowLimit": 25000,
        "dimensionFilterGroups": [
            {
                "filters": [
                    {
                        "dimension": "query",
                        "operator": "includingRegex",
                        "expression": "|".join(
                            # escape specials lightly
                            k.replace("(", "\\(").replace(")", "\\)").replace("+", "\\+")
                            for k in KEYWORDS
                        ),
                    }
                ]
            }
        ],
    }
    try:
        resp = searchconsole.searchanalytics().query(siteUrl=PROPERTY, body=body).execute()
    except HttpError as e:
        # Fallback: pull top queries and match client-side
        print(f"WARN regex filter failed ({e.resp.status}), falling back to top queries", file=sys.stderr)
        body.pop("dimensionFilterGroups", None)
        resp = searchconsole.searchanalytics().query(siteUrl=PROPERTY, body=body).execute()

    by_q = {}
    for row in resp.get("rows") or []:
        q = row["keys"][0]
        by_q[q.lower()] = {
            "query": q,
            "clicks": row.get("clicks", 0),
            "impressions": row.get("impressions", 0),
            "ctr": round(row.get("ctr", 0) * 100, 2),
            "position": round(row.get("position", 0), 1),
        }

    results = []
    for kw in KEYWORDS:
        hit = by_q.get(kw.lower())
        if hit:
            results.append({**hit, "match": "exact"})
        else:
            # partial: any query containing the keyword
            partials = [
                v
                for q, v in by_q.items()
                if kw.lower() in q or all(tok in q for tok in kw.lower().split() if len(tok) > 2)
            ]
            if partials:
                best = max(partials, key=lambda x: x["impressions"])
                results.append({**best, "keyword": kw, "match": "partial"})
            else:
                results.append(
                    {
                        "keyword": kw,
                        "query": kw,
                        "clicks": 0,
                        "impressions": 0,
                        "ctr": 0,
                        "position": 0,
                        "match": "MISS",
                    }
                )
    return results, len(resp.get("rows") or [])


def brand_vs_other(searchconsole):
    body = {
        "startDate": "2026-09-12",
        "endDate": "2026-10-09",
        "dimensions": ["query"],
        "rowLimit": 1000,
    }
    resp = searchconsole.searchanalytics().query(siteUrl=PROPERTY, body=body).execute()
    rows = resp.get("rows") or []
    brand_imp = non_imp = 0
    for row in rows:
        q = row["keys"][0].lower()
        imp = row.get("impressions", 0)
        if "rmt" in q:
            brand_imp += imp
        else:
            non_imp += imp
    return {
        "queries": len(rows),
        "brand_impressions_top1000": brand_imp,
        "nonbrand_impressions_top1000": non_imp,
        "top10": [
            {
                "q": r["keys"][0],
                "imp": r.get("impressions", 0),
                "pos": round(r.get("position", 0), 1),
                "clicks": r.get("clicks", 0),
            }
            for r in sorted(rows, key=lambda x: x.get("impressions", 0), reverse=True)[:10]
        ],
    }


def push_indexing(indexing, urls: list[str]):
    out = []
    for url in urls:
        try:
            indexing.urlNotifications().publish(
                body={"url": url, "type": "URL_UPDATED"}
            ).execute()
            out.append({"url": url, "ok": True})
        except HttpError as e:
            out.append({"url": url, "ok": False, "err": f"{e.resp.status}"})
        time.sleep(0.25)
    return out


def notify_sitemap(searchconsole):
    try:
        searchconsole.sitemaps().submit(
            siteUrl=PROPERTY, feedpath=f"{ORIGIN}/sitemap.xml"
        ).execute()
        return {"ok": True}
    except HttpError as e:
        # submit often returns empty 204; list to confirm
        try:
            listed = searchconsole.sitemaps().list(siteUrl=PROPERTY).execute()
            return {"ok": True, "note": f"submit status {e.resp.status}", "sitemaps": len(listed.get("sitemap") or [])}
        except HttpError as e2:
            return {"ok": False, "err": str(e2.resp.status)}


def main():
    if not SA_PATH.exists():
        print(f"Missing service account: {SA_PATH}", file=sys.stderr)
        sys.exit(1)

    c = creds()
    sc = build("searchconsole", "v1", credentials=c, cache_discovery=False)
    idx = build("indexing", "v3", credentials=c, cache_discovery=False)

    print("=== URL INSPECTION ===", flush=True)
    inspections = inspect_all(sc)
    buckets = Counter(classify(r["status"]) for r in inspections)
    for r in inspections:
        print(f"{classify(r['status']):22} | {r['status'][:48]:48} | crawl={r['crawl']} | {r['url']}")

    print("\n=== INSPECTION SUMMARY ===", flush=True)
    for k, v in buckets.most_common():
        print(f"  {k}: {v}")

    gaps = [
        r["url"]
        for r in inspections
        if classify(r["status"]) in ("unknown", "discovered", "crawled_not_indexed", "other", "error")
    ]
    # Always keep home out of gap push if indexed; push gaps only
    print(f"\n=== RE-PUSH GAPS ({len(gaps)}) ===", flush=True)
    pushes = push_indexing(idx, gaps) if gaps else []
    ok = sum(1 for p in pushes if p.get("ok"))
    print(f"  Indexing API ok={ok}/{len(pushes)}")
    sm = notify_sitemap(sc)
    print(f"  Sitemap submit: {sm}")

    # IndexNow (public key, no secrets)
    try:
        import urllib.request

        key = "rmtusa8f3a2c91e4b67d05"
        payload = json.dumps(
            {
                "host": "rmt-usa.com",
                "key": key,
                "keyLocation": f"https://rmt-usa.com/{key}.txt",
                "urlList": gaps[:100] if gaps else [f"{ORIGIN}/"],
            }
        ).encode()
        req = urllib.request.Request(
            "https://api.indexnow.org/indexnow",
            data=payload,
            headers={"Content-Type": "application/json; charset=utf-8"},
            method="POST",
        )
        with urllib.request.urlopen(req, timeout=30) as resp:
            print(f"  IndexNow: {resp.status}")
    except Exception as e:
        print(f"  IndexNow: failed ({type(e).__name__})")

    print("\n=== 42 SHORT KEYWORDS (Search Analytics) ===", flush=True)
    kw_rows, raw_n = search_analytics(sc)
    hits = [r for r in kw_rows if r.get("match") != "MISS" and r.get("impressions", 0) > 0]
    misses = [r for r in kw_rows if r.get("match") == "MISS" or r.get("impressions", 0) == 0]
    print(f"  hits_with_impressions={len(hits)}  misses={len(misses)}  raw_rows={raw_n}")
    for r in kw_rows:
        label = r.get("keyword") or r.get("query")
        print(
            f"  {r.get('match','?'):7} | imp={r.get('impressions',0):5} | pos={r.get('position',0):5} | clicks={r.get('clicks',0):3} | {label}"
            + (f" (via '{r.get('query')}')" if r.get("match") == "partial" else "")
        )

    print("\n=== BRAND vs NON-BRAND (top 1000 queries) ===", flush=True)
    overview = brand_vs_other(sc)
    print(
        f"  queries={overview['queries']} brand_imp={overview['brand_impressions_top1000']} nonbrand_imp={overview['nonbrand_impressions_top1000']}"
    )
    for t in overview["top10"]:
        print(f"  top | imp={t['imp']:5} pos={t['pos']:5} clicks={t['clicks']:3} | {t['q']}")

    out = {
        "inspected_at": time.strftime("%Y-%m-%dT%H:%M:%S"),
        "buckets": dict(buckets),
        "inspections": inspections,
        "gaps_pushed": pushes,
        "sitemap": sm,
        "keywords": kw_rows,
        "overview": overview,
    }
    out_path = Path(os.environ.get("TEMP", ".")) / "gsc-followup-2026-10-10.json"
    out_path.write_text(json.dumps(out, indent=2), encoding="utf-8")
    print(f"\nWrote {out_path}", flush=True)


if __name__ == "__main__":
    main()
