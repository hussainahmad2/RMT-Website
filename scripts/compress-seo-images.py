"""Compress oversized public SEO/LCP assets in-place (same path, smaller bytes)."""
from __future__ import annotations

from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "public"

# Critical above-the-fold / PSI-flagged assets
TARGETS = [
    "mdm/cleanroom-1.jpeg",
    "mdm/cleanroom-2.jpeg",
    "mdm/cleanroom-3.jpeg",
    "mdm/facility-1.jpeg",
    "mdm/facility-2.jpeg",
    "mdm/facility-3.jpeg",
    "mdm/angiographic-catheter.jpeg",
    "mdm/guiding-catheter.jpeg",
    "mdm/microspheres.jpeg",
    "hero/doctor-cutout.png",
    "rmt-logo.webp",
    "badges/iso-13485-badge.png",
    "badges/drap-badge.png",
    "badges/iso-logo.png",
    "partner-logos/aku-light-logo.webp",
    "partner-logos/alsons-logo.png",
    "partner-logos/comstech-logo.png",
    "partner-logos/nust-logo.png",
    "partner-logos/university-of-jordan-logo.png",
    "partner-logos/most-light-logo.png",
    "partner-logos/most-dark-logo.png",
    "assets/compliance-bg.webp",
]


def compress(path: Path) -> tuple[int, int]:
    before = path.stat().st_size
    img = Image.open(path)
    suffix = path.suffix.lower()

    # Cap long edge for logos/badges; keep heroes sharper
    max_edge = 1600 if "mdm/" in path.as_posix() or "hero/" in path.as_posix() else 900
    if "partner-logos/" in path.as_posix() or "badges/" in path.as_posix() or path.name.startswith("rmt-logo"):
        max_edge = 640
    if "compliance-bg" in path.name:
        max_edge = 1920

    w, h = img.size
    scale = min(1.0, max_edge / max(w, h))
    if scale < 1.0:
        img = img.resize((max(1, int(w * scale)), max(1, int(h * scale))), Image.Resampling.LANCZOS)

    if suffix in {".jpg", ".jpeg"}:
        if img.mode not in ("RGB", "L"):
            img = img.convert("RGB")
        img.save(path, format="JPEG", quality=72, optimize=True, progressive=True)
    elif suffix == ".png":
        if img.mode not in ("RGBA", "RGB", "P", "L"):
            img = img.convert("RGBA")
        img.save(path, format="PNG", optimize=True)
    elif suffix == ".webp":
        has_alpha = img.mode in ("RGBA", "LA") or ("transparency" in img.info)
        if has_alpha and img.mode != "RGBA":
            img = img.convert("RGBA")
        elif not has_alpha and img.mode != "RGB":
            img = img.convert("RGB")
        img.save(path, format="WEBP", quality=72, method=6)
    else:
        return before, before

    after = path.stat().st_size
    return before, after


def main() -> None:
    total_before = total_after = 0
    for rel in TARGETS:
        path = ROOT / rel
        if not path.exists():
            print(f"SKIP missing {rel}")
            continue
        before, after = compress(path)
        total_before += before
        total_after += after
        saved = (before - after) / 1024
        print(f"{before/1024:7.1f} -> {after/1024:7.1f} KB  ({saved:+.1f})  {rel}")
    print(f"TOTAL {(total_before-total_after)/1024:.1f} KB saved")


if __name__ == "__main__":
    main()
