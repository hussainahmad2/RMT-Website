#!/usr/bin/env python3
"""GSC exact-query ranks for ALL tracked keywords → Google page numbers."""
from __future__ import annotations

import json
import re
import sys
from datetime import date, timedelta
from pathlib import Path

from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

ROOT = Path(__file__).resolve().parents[1]
PROPERTY = "https://rmt-usa.com/"
SA_PATH = Path.home() / ".config" / "claude-seo" / "service-account.json"
OUT = Path(__file__).resolve().parent / "gsc-keyword-pages-latest.json"

# Money short-heads (primary research set)
MONEY_SHORT = [
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
    "Revive Medical Technologies",
    "RMT company",
    "implantable device contract manufacturing",
    "biomedical device testing services",
    "medical device testing services",
    "medical device CDMO",
    "OEM manufacturing medical devices",
]


def load_targets() -> list[dict]:
    text = (ROOT / "src/data/short-keywords.ts").read_text(encoding="utf-8")
    rows = re.findall(
        r'keyword:\s*"([^"]+)"\s*,\s*url:\s*"([^"]+)"\s*,\s*pageLabel:\s*"([^"]+)"',
        text,
    )
    return [{"keyword": k, "url": u, "pageLabel": p} for k, u, p in rows]


def google_page(position: float | None) -> int | None:
    if position is None or position <= 0:
        return None
    return int((position - 1) // 10) + 1


def main() -> int:
    if not SA_PATH.exists():
        print(f"Missing service account: {SA_PATH}", file=sys.stderr)
        return 1

    targets = load_targets()
    by_kw_target = {t["keyword"].lower(): t for t in targets}

    # Union: short-keywords map + money short-heads
    all_kws: list[str] = []
    seen: set[str] = set()
    for t in targets:
        k = t["keyword"]
        if k.lower() not in seen:
            seen.add(k.lower())
            all_kws.append(k)
    for k in MONEY_SHORT:
        if k.lower() not in seen:
            seen.add(k.lower())
            all_kws.append(k)

    end = date.today() - timedelta(days=2)  # GSC lag
    start = end - timedelta(days=27)

    creds = service_account.Credentials.from_service_account_file(
        str(SA_PATH), scopes=["https://www.googleapis.com/auth/webmasters.readonly"]
    )
    sc = build("searchconsole", "v1", credentials=creds, cache_discovery=False)

    body = {
        "startDate": start.isoformat(),
        "endDate": end.isoformat(),
        "dimensions": ["query"],
        "rowLimit": 25000,
    }
    try:
        resp = sc.searchanalytics().query(siteUrl=PROPERTY, body=body).execute()
    except HttpError as e:
        print(f"GSC error: {e}", file=sys.stderr)
        return 1

    by_q: dict[str, dict] = {}
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
    for kw in all_kws:
        tgt = by_kw_target.get(kw.lower())
        hit = by_q.get(kw.lower())
        if hit:
            pos = hit["position"]
            results.append(
                {
                    "keyword": kw,
                    "status": "FOUND",
                    "match": "exact",
                    "google_page": google_page(pos),
                    "avg_position": pos,
                    "clicks": hit["clicks"],
                    "impressions": hit["impressions"],
                    "ctr_pct": hit["ctr"],
                    "gsc_query": hit["query"],
                    "target_url": tgt["url"] if tgt else None,
                    "pageLabel": tgt["pageLabel"] if tgt else None,
                }
            )
            continue

        # Partial: GSC query contains keyword or all significant tokens
        tokens = [t for t in kw.lower().split() if len(t) > 2]
        partials = []
        for q, v in by_q.items():
            if kw.lower() in q or (tokens and all(tok in q for tok in tokens)):
                partials.append(v)
        if partials:
            best = max(partials, key=lambda x: x["impressions"])
            pos = best["position"]
            results.append(
                {
                    "keyword": kw,
                    "status": "PARTIAL",
                    "match": "partial",
                    "google_page": google_page(pos),
                    "avg_position": pos,
                    "clicks": best["clicks"],
                    "impressions": best["impressions"],
                    "ctr_pct": best["ctr"],
                    "gsc_query": best["query"],
                    "target_url": tgt["url"] if tgt else None,
                    "pageLabel": tgt["pageLabel"] if tgt else None,
                }
            )
        else:
            results.append(
                {
                    "keyword": kw,
                    "status": "MISS",
                    "match": "none",
                    "google_page": None,
                    "avg_position": None,
                    "clicks": 0,
                    "impressions": 0,
                    "ctr_pct": 0,
                    "gsc_query": None,
                    "target_url": tgt["url"] if tgt else None,
                    "pageLabel": tgt["pageLabel"] if tgt else None,
                }
            )

    # Also: top landing pages for exact hits (query + page dimension for FOUND only)
    found_exact = [r for r in results if r["match"] == "exact"]
    page_map: dict[str, str] = {}
    if found_exact:
        # Batch: pull query+page for last 28d, match our exact queries
        body2 = {
            "startDate": start.isoformat(),
            "endDate": end.isoformat(),
            "dimensions": ["query", "page"],
            "rowLimit": 25000,
        }
        try:
            resp2 = sc.searchanalytics().query(siteUrl=PROPERTY, body=body2).execute()
            # best page per query by impressions
            best_page: dict[str, tuple[int, str]] = {}
            for row in resp2.get("rows") or []:
                q, page = row["keys"][0].lower(), row["keys"][1]
                imp = row.get("impressions", 0)
                prev = best_page.get(q)
                if prev is None or imp > prev[0]:
                    best_page[q] = (imp, page)
            for r in results:
                if r["match"] == "exact" and r["gsc_query"]:
                    bp = best_page.get(r["gsc_query"].lower())
                    if bp:
                        r["ranking_url"] = bp[1]
                        page_map[r["keyword"]] = bp[1]
        except HttpError as e:
            print(f"WARN query+page pull failed: {e}", file=sys.stderr)

    exact = [r for r in results if r["match"] == "exact"]
    partial = [r for r in results if r["match"] == "partial"]
    miss = [r for r in results if r["match"] == "none"]

    # Money short-head subset summary
    money_set = {k.lower() for k in MONEY_SHORT}
    money_rows = [r for r in results if r["keyword"].lower() in money_set]

    report = {
        "checked_at": date.today().isoformat(),
        "gsc_range": {"start": start.isoformat(), "end": end.isoformat()},
        "source": "Google Search Console Search Analytics (exact query; page = floor((pos-1)/10)+1)",
        "totals": {
            "keywords_checked": len(results),
            "exact_found": len(exact),
            "partial_only": len(partial),
            "miss": len(miss),
            "gsc_query_rows": len(by_q),
        },
        "money_short_heads": {
            "count": len(money_rows),
            "exact": sum(1 for r in money_rows if r["match"] == "exact"),
            "partial": sum(1 for r in money_rows if r["match"] == "partial"),
            "miss": sum(1 for r in money_rows if r["match"] == "none"),
            "rows": sorted(
                money_rows,
                key=lambda r: (
                    0 if r["status"] == "FOUND" else 1 if r["status"] == "PARTIAL" else 2,
                    r.get("avg_position") or 999,
                ),
            ),
        },
        "results": sorted(
            results,
            key=lambda r: (
                0 if r["status"] == "FOUND" else 1 if r["status"] == "PARTIAL" else 2,
                r.get("avg_position") or 999,
                r["keyword"].lower(),
            ),
        ),
    }

    OUT.write_text(json.dumps(report, indent=2), encoding="utf-8")

    print(f"Range: {start} → {end}")
    print(
        f"Checked {len(results)} keywords | exact={len(exact)} partial={len(partial)} miss={len(miss)}"
    )
    print("\n=== MONEY SHORT-HEADS (exact page) ===")
    for r in report["money_short_heads"]["rows"]:
        page = r["google_page"] if r["google_page"] else "—"
        url = r.get("ranking_url") or r.get("target_url") or ""
        print(
            f"{r['status']:7}  p{page!s:>3}  pos={str(r['avg_position'] or '—'):>5}  "
            f"imp={r['impressions']:<5}  {r['keyword']}"
            + (f"  → {r['gsc_query']}" if r["match"] == "partial" else "")
            + (f"  [{url}]" if url else "")
        )
    print(f"\nWrote {OUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
