from pathlib import Path
import re

it = Path("src/data/insights-content.ts").read_text(encoding="utf-8")
ids = re.findall(r'^\s*id:\s*["\']([^"\']+)["\']', it, re.M)
print("insights", len(ids))

pt = Path("src/data/projects-content.ts").read_text(encoding="utf-8")
slugs = re.findall(r'^\s*slug:\s*["\']([^"\']+)["\']', pt, re.M)
print("projects", len(slugs))

svc = list(Path("src/pages/services").rglob("index.tsx"))
print("service pages", len(svc))

# other static index pages
other = [
    p
    for p in Path("src/pages").glob("*/index.tsx")
    if p.parent.name
    not in ("services", "home", "not-found", "sitemap")
]
print("top-level pages", [p.parent.name for p in other], len(other))
print("total approx", len(svc) + len(ids) + len(slugs) + len(other) + 1)  # + home
