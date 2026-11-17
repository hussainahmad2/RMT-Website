#!/usr/bin/env python3
"""Build Patch A/B/C URL lists from gsc-index-status-latest.json."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
STATUS = ROOT / "scripts" / "gsc-index-status-latest.json"
OUT_DIR = ROOT / "scripts" / "index-patches"

# Patch A: money topics + key hubs (priority for ranks)
PATCH_A_PREFIXES = (
    "/topics/",
)
PATCH_A_EXACT = {
    "https://rmt-usa.com/services",
    "https://rmt-usa.com/products",
    "https://rmt-usa.com/projects",
    "https://rmt-usa.com/training",
    "https://rmt-usa.com/services/software-ai",
    "https://rmt-usa.com/services/regulatory-compliance",
    "https://rmt-usa.com/services/engineering-product-development",
    "https://rmt-usa.com/services/product-development",
    "https://rmt-usa.com/services/contract-manufacturing",
    "https://rmt-usa.com/services/contract-manufacturing/manufacturing-capabilities",
    "https://rmt-usa.com/services/contract-manufacturing/cleanroom-infrastructure",
    "https://rmt-usa.com/services/contract-manufacturing/quality-compliance",
    "https://rmt-usa.com/services/contract-manufacturing/testing-validation",
    "https://rmt-usa.com/services/contract-manufacturing/capacity-building",
    "https://rmt-usa.com/services/contract-manufacturing/development-journey",
    "https://rmt-usa.com/services/software-ai/ai-solutions",
    "https://rmt-usa.com/services/software-ai/software-compliance",
    "https://rmt-usa.com/services/software-ai/custom-medical-software",
    "https://rmt-usa.com/services/regulatory-compliance/fda-compliance",
    "https://rmt-usa.com/services/regulatory-compliance/eu-mdr-compliance",
    "https://rmt-usa.com/services/regulatory-compliance/quality-management-system",
    "https://rmt-usa.com/services/engineering-product-development/research-development-engineering",
    "https://rmt-usa.com/services/product-development/design-transfer-manufacturing",
    "https://rmt-usa.com/services/bmd",
    "https://rmt-usa.com/testing",
}


def path_of(url: str) -> str:
    return url.replace("https://rmt-usa.com", "") or "/"


def is_patch_a(url: str) -> bool:
    if url in PATCH_A_EXACT:
        return True
    p = path_of(url)
    return any(p.startswith(pref) for pref in PATCH_A_PREFIXES)


def is_patch_b(url: str) -> bool:
    p = path_of(url)
    return p.startswith("/services/") and not is_patch_a(url)


def sort_key(row: dict) -> tuple:
    # unknown first, then discovered
    order = {"unknown": 0, "discovered": 1, "other": 2, "crawled_not_indexed": 3}
    return (order.get(row.get("bucket", "other"), 9), row["url"])


def main() -> None:
    data = json.loads(STATUS.read_text(encoding="utf-8"))
    not_indexed = [r for r in data["rows"] if r["bucket"] != "indexed"]

    patch_a = sorted([r for r in not_indexed if is_patch_a(r["url"])], key=sort_key)
    used = {r["url"] for r in patch_a}
    patch_b = sorted(
        [r for r in not_indexed if r["url"] not in used and is_patch_b(r["url"])],
        key=sort_key,
    )
    used |= {r["url"] for r in patch_b}
    patch_c = sorted([r for r in not_indexed if r["url"] not in used], key=sort_key)

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    def write(name: str, rows: list[dict]) -> None:
        urls = [r["url"] for r in rows]
        payload = {
            "name": name,
            "count": len(urls),
            "unknown": sum(1 for r in rows if r["bucket"] == "unknown"),
            "discovered": sum(1 for r in rows if r["bucket"] == "discovered"),
            "urls": urls,
            "rows": [{"url": r["url"], "bucket": r["bucket"], "status": r["status"]} for r in rows],
        }
        path = OUT_DIR / f"{name}.json"
        path.write_text(json.dumps(payload, indent=2), encoding="utf-8")
        print(f"{name}: {len(urls)} (unknown={payload['unknown']} discovered={payload['discovered']}) -> {path}")

    write("patch-a", patch_a)
    write("patch-b", patch_b)
    write("patch-c", patch_c)

    summary = {
        "indexed": data["indexed"],
        "left": data["left"],
        "patch_a": len(patch_a),
        "patch_b": len(patch_b),
        "patch_c": len(patch_c),
    }
    (OUT_DIR / "summary.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")
    print("summary:", summary)


if __name__ == "__main__":
    main()
