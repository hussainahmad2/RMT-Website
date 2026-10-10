#!/usr/bin/env python3
"""Build ~200 URL keyword map from site sitemap sources and write short-keywords.ts."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def extract_ids(path: Path, key: str) -> list[str]:
    text = path.read_text(encoding="utf-8")
    return re.findall(rf"^\s*{key}:\s*[\"']([^\"']+)[\"']", text, re.M)


def service_paths() -> list[tuple[str, str]]:
    """Return (path, label) for every service + subservice from services.ts structure."""
    text = (ROOT / "src/data/services.ts").read_text(encoding="utf-8")
    # Split by top-level service blocks roughly via slug + title + subServices
    # Parse: each { slug, title, ... subServices: [ { slug, title } ] }
    services = []
    # Find service titles and slugs at indent of 4 spaces under ALL_SERVICES
    # Simpler: walk known folder structure under pages/services
    out: list[tuple[str, str]] = []
    services_root = ROOT / "src/pages/services"
    for index in sorted(services_root.rglob("index.tsx")):
        rel = index.parent.relative_to(ROOT / "src/pages").as_posix()
        path = "/" + rel
        label = rel.replace("/", " › ").replace("-", " ").title()
        out.append((path, label))
    return out


# Money / short + long keyword seeds per URL path (override/extra)
MONEY_KEYWORDS: dict[str, list[str]] = {
    "/": ["Revive Medical Technologies", "RMT USA medical device", "medical device company Minnesota"],
    "/services": ["medical device services", "end to end medical device solutions"],
    "/services/contract-manufacturing": [
        "medical device manufacturing",
        "contract manufacturing",
        "device manufacturing",
        "ISO 13485 manufacturing",
        "catheter manufacturing",
        "medical device contract manufacturing",
    ],
    "/services/contract-manufacturing/manufacturing-capabilities": [
        "OEM manufacturing",
        "OEM medical device",
        "OEM manufacturing medical device",
        "white label medical device manufacturing",
    ],
    "/services/contract-manufacturing/cleanroom-infrastructure": [
        "cleanroom manufacturing",
        "ISO cleanroom medical device",
    ],
    "/services/contract-manufacturing/quality-compliance": [
        "ISO 13485 quality manufacturing",
        "medical device manufacturing quality",
    ],
    "/services/contract-manufacturing/testing-validation": [
        "manufacturing process validation",
        "IQ OQ PQ manufacturing",
    ],
    "/services/contract-manufacturing/development-journey": [
        "pilot to commercial manufacturing",
    ],
    "/services/contract-manufacturing/capacity-building": [
        "manufacturing capacity building",
    ],
    "/services/regulatory-compliance": [
        "regulatory compliance",
        "medical device regulatory compliance",
        "medical device regulatory consulting",
    ],
    "/services/regulatory-compliance/fda-compliance": [
        "FDA compliance",
        "510k",
        "FDA 510k consulting",
    ],
    "/services/regulatory-compliance/eu-mdr-compliance": [
        "EU MDR",
        "CE marking",
        "EU MDR compliance consulting",
    ],
    "/services/regulatory-compliance/quality-management-system": [
        "ISO 13485 QMS",
        "medical device QMS",
        "ISO 13485 certification support",
    ],
    "/services/regulatory-compliance/risk-management": [
        "ISO 14971",
        "medical device risk management",
    ],
    "/services/regulatory-compliance/biocompatibility-evaluation": [
        "ISO 10993 biocompatibility",
        "biocompatibility evaluation",
    ],
    "/services/regulatory-compliance/toxicological-risk-assessment": [
        "toxicological risk assessment",
    ],
    "/services/regulatory-compliance/sfda-compliance": ["SFDA compliance"],
    "/services/regulatory-compliance/tga-compliance": ["TGA compliance"],
    "/services/regulatory-compliance/cybersecurity-testing": [
        "medical device cybersecurity",
        "FDA cybersecurity guidance",
    ],
    "/services/regulatory-compliance/software-sdlc-iec-62304": [
        "IEC 62304 SDLC",
        "software lifecycle IEC 62304",
    ],
    "/services/regulatory-compliance/iso-27001-compliance": ["ISO 27001 compliance"],
    "/services/regulatory-compliance/iec-60601-1-compliance": ["IEC 60601"],
    "/services/regulatory-compliance/greenlight-guru-setup": ["Greenlight Guru setup"],
    "/services/regulatory-compliance/technical-file-preparation": [
        "technical file preparation",
        "medical device technical documentation",
    ],
    "/services/regulatory-compliance/clinical-evaluation": ["clinical evaluation"],
    "/services/regulatory-compliance/clinical-evaluation-report": [
        "clinical evaluation report",
        "CER medical device",
    ],
    "/services/regulatory-compliance/literature-research-protocol": [
        "literature research protocol",
    ],
    "/services/regulatory-compliance/post-market-clinical-evaluation": [
        "post market clinical follow up",
        "PMCF medical device",
    ],
    "/services/software-ai": [
        "healthcare solution",
        "software services",
        "SaMD",
        "healthcare software",
        "software as a medical device",
        "medical device software development",
    ],
    "/services/software-ai/ai-solutions": [
        "AI solution",
        "healthcare AI",
        "clinical decision support",
        "medical AI development",
    ],
    "/services/software-ai/software-compliance": [
        "ONC certification",
        "HIPAA compliance software",
        "IEC 62304",
        "ONC Health IT certification consulting",
    ],
    "/services/software-ai/custom-medical-software": [
        "CCM PCM implementation",
        "medical software",
        "RPM software",
        "CCM software",
        "PCM software",
        "EHR integration",
        "custom medical software development",
        "remote patient monitoring software",
    ],
    "/services/software-ai/cloud-devops": [
        "healthcare cloud DevOps",
        "HIPAA cloud infrastructure",
    ],
    "/services/software-ai/software-quality-assurance": [
        "software quality assurance medical",
        "SaMD verification testing",
    ],
    "/services/product-development": [
        "product development",
        "medical device product development",
    ],
    "/services/product-development/concept-feasibility": [
        "concept feasibility medical device",
    ],
    "/services/product-development/design-engineering": [
        "medical device design engineering",
    ],
    "/services/product-development/prototyping-development": [
        "medical device prototyping",
    ],
    "/services/product-development/verification-validation": [
        "verification and validation medical device",
    ],
    "/services/product-development/design-transfer-manufacturing": [
        "design transfer",
        "design transfer medical device",
    ],
    "/services/product-development/regulatory-consultancy": [
        "regulatory consultancy product development",
    ],
    "/services/engineering-product-development": [
        "manufacturing R&D",
        "medical device engineering",
        "biomedical engineering services",
    ],
    "/services/engineering-product-development/research-development-engineering": [
        "medical device R&D",
        "prototype development",
        "research and development medical device",
    ],
    "/services/engineering-product-development/biomedical-systems-engineering": [
        "biomedical systems engineering",
    ],
    "/services/engineering-product-development/industrial-safety-engineering": [
        "industrial safety engineering",
    ],
    "/services/production-equipment-engineering": [
        "machine manufacturing",
        "production equipment",
        "custom medical production equipment",
    ],
    "/services/production-equipment-engineering/custom-equipment-design": [
        "custom equipment design",
    ],
    "/services/production-equipment-engineering/production-line-development": [
        "production line development",
    ],
    "/services/production-equipment-engineering/cleanroom-equipment-engineering": [
        "cleanroom equipment engineering",
    ],
    "/services/production-equipment-engineering/equipment-qualification-validation": [
        "equipment qualification validation",
    ],
    "/services/production-equipment-engineering/process-automation": [
        "process automation medical manufacturing",
    ],
    "/services/production-equipment-engineering/specialist-production-equipment": [
        "specialist production equipment",
    ],
    "/services/production-equipment-engineering/maintenance-calibration-support": [
        "equipment maintenance calibration",
    ],
    "/services/design-fabrication": ["medical device design fabrication"],
    "/services/design-fabrication/mechanical-design": ["mechanical design medical device"],
    "/services/design-fabrication/thermal-engineering": ["thermal engineering medical device"],
    "/services/design-fabrication/simulation-analysis": ["FEA simulation medical device"],
    "/services/design-fabrication/rapid-prototyping-3d-printing": [
        "rapid prototyping 3D printing medical",
    ],
    "/services/design-fabrication/manufacturing-support": ["manufacturing support DFM"],
    "/services/automation-services": ["industrial automation medical"],
    "/services/automation-services/plc-programming-industrial-control": [
        "PLC programming medical device",
    ],
    "/services/automation-services/hmi-scada-development": ["HMI SCADA development"],
    "/services/automation-services/motion-control-systems": ["motion control systems"],
    "/services/automation-services/industrial-communication": [
        "industrial communication protocols",
    ],
    "/services/quality-testing": [
        "quality control medical device",
        "medical device quality testing",
    ],
    "/services/quality-testing/quality-assurance": ["medical device quality assurance"],
    "/services/quality-testing/quality-control": ["medical device quality control"],
    "/services/quality-testing/sqa-samd-simd": ["SaMD SiMD SQA"],
    "/services/quality-testing/packaging-integrity-testing": ["packaging integrity testing"],
    "/services/quality-testing/bench-testing": ["bench testing medical device"],
    "/services/quality-testing/dimensional-analysis": ["dimensional analysis medical device"],
    "/services/quality-testing/physico-chemical-testing": [
        "physico chemical testing medical device",
    ],
    "/services/quality-testing/visual-inspection": ["visual inspection medical device"],
    "/services/quality-testing/defect-analysis": ["defect analysis medical device"],
    "/services/quality-testing/simulation": ["quality testing simulation medical device"],
    "/services/quality-testing/qc-production": ["QC production medical device"],
    "/services/quality-testing/qc-rd": ["QC R&D medical device"],
    "/services/quality-testing/quality-plan": ["medical device quality plan"],
    "/testing": ["medical device testing", "medical device test lab"],
    "/services/mbl-laboratory": ["microbiology lab medical device"],
    "/services/mbl-laboratory/sterility-testing": [
        "sterility testing",
        "medical device sterility testing",
    ],
    "/services/mbl-laboratory/bacterial-endotoxin-testing": [
        "bacterial endotoxin testing",
        "LAL testing medical device",
    ],
    "/services/mbl-laboratory/microbial-limit-testing": ["microbial limit testing"],
    "/services/mbl-laboratory/specific-pathogen-testing": ["specific pathogen testing"],
    "/services/bmd": ["biomaterials R&D", "biomaterials testing"],
    "/services/bmd/analytical-testing": ["analytical testing biomaterials"],
    "/services/bmd/material-characterization": ["material characterization medical device"],
    "/services/bmd/mechanical-physical-testing": ["mechanical physical testing biomaterials"],
    "/services/bmd/biocompatibility-testing": ["biocompatibility testing lab"],
    "/services/bmd/biomaterials-tissue-engineering": ["tissue engineering biomaterials"],
    "/services/bmd/drug-delivery-pharmaceutical-development": [
        "drug delivery pharmaceutical development",
    ],
    "/services/bmd/coatings-surface-engineering": ["coatings surface engineering medical"],
    "/services/bmd/device-prototyping-fabrication": ["device prototyping fabrication"],
    "/services/bmd/advanced-manufacturing-support": ["advanced manufacturing support biomaterials"],
    "/services/bmd/laboratory-setup-compliance": ["laboratory setup compliance"],
    "/services/turnkey-commissioning": ["turnkey commissioning medical device"],
    "/services/turnkey-commissioning/commissioning-validation": [
        "production line commissioning validation",
    ],
    "/services/turnkey-commissioning/oq-pq-qualification": ["OQ PQ qualification"],
    "/services/turnkey-commissioning/supply-commission": ["supply commission production machines"],
    "/services/turnkey-commissioning/iso-13485-implementation": [
        "ISO 13485 implementation turnkey",
    ],
    "/services/turnkey-commissioning/product-licensing": ["medical device product licensing"],
    "/services/turnkey-commissioning/hr-training": ["medical device manufacturing training"],
    "/services/turnkey-commissioning/installation-training": [
        "equipment installation training medical",
    ],
    "/pharmaceutical": [
        "pharmaceutical manufacturing services",
        "pharma product development",
    ],
    "/products": ["medical device products", "RMT medical devices"],
    "/about": ["about Revive Medical Technologies", "RMT company"],
    "/contact": ["contact RMT medical device", "medical device manufacturer contact"],
    "/careers": ["RMT careers", "medical device jobs"],
    "/training": ["medical device training programs"],
    "/testimonials": ["RMT client testimonials"],
    "/projects": ["medical device case studies", "RMT projects"],
    "/insights": ["medical device insights", "medtech articles"],
    "/media": ["RMT media kit", "Revive Medical Technologies media"],
    "/gallery": ["RMT facility gallery"],
}


def default_keywords(path: str, label: str) -> list[str]:
    # Derive 1–2 searchable phrases from path slug
    slug = path.rstrip("/").split("/")[-1].replace("-", " ")
    if path.startswith("/insights/"):
        return [f"{slug} medical device", f"{label}"]
    if path.startswith("/projects/"):
        return [f"{slug} case study", f"{label} medical device project"]
    # service fallback
    return [slug, f"{slug} medical device"]


def money_topic_paths() -> list[tuple[str, str, str]]:
    """Return (path, keyword, label) from money-topics.ts."""
    text = (ROOT / "src/data/money-topics.ts").read_text(encoding="utf-8")
    slugs = re.findall(r'^\s*slug:\s*[\"\']([^\"\']+)[\"\']', text, re.M)
    keywords = re.findall(r'^\s*keyword:\s*[\"\']([^\"\']+)[\"\']', text, re.M)
    out = []
    for slug, kw in zip(slugs, keywords):
        path = f"/topics/{slug}"
        out.append((path, kw, kw))
        MONEY_KEYWORDS.setdefault(path, [kw, f"{kw} services", f"{kw} RMT"])
    return out


def main():
    rows: list[tuple[str, str, str]] = []  # keyword, url, label
    seen_kw: set[str] = set()
    urls_order: list[str] = []

    # 1) Static + service pages first (money)
    static = [
        "/",
        "/services",
        "/pharmaceutical",
        "/products",
        "/about",
        "/contact",
        "/careers",
        "/training",
        "/testimonials",
        "/projects",
        "/insights",
        "/media",
        "/gallery",
        "/testing",
    ]
    for path, label in [(p, p) for p in static] + service_paths():
        if path in ("/home", "/not-found", "/sitemap"):
            continue
        if path not in urls_order:
            urls_order.append(path)

    # Money topic landings (new indexable URLs)
    for path, kw, _label in money_topic_paths():
        if path not in urls_order:
            urls_order.append(path)

    # 2) Insights
    insight_ids = extract_ids(ROOT / "src/data/insights-content.ts", "id")
    # titles for labels
    insight_text = (ROOT / "src/data/insights-content.ts").read_text(encoding="utf-8")
    insight_titles = dict(
        zip(
            insight_ids,
            re.findall(r"^\s*title:\s*[\"']([^\"']+)[\"']", insight_text, re.M),
        )
    )
    for iid in insight_ids:
        path = f"/insights/{iid}"
        if path not in urls_order:
            urls_order.append(path)
        title = insight_titles.get(iid, iid.replace("-", " "))
        MONEY_KEYWORDS.setdefault(path, [title, f"{title} medical device"])

    # 3) Projects
    project_slugs = extract_ids(ROOT / "src/data/projects-content.ts", "slug")
    project_text = (ROOT / "src/data/projects-content.ts").read_text(encoding="utf-8")
    project_titles = dict(
        zip(
            project_slugs,
            re.findall(r"^\s*title:\s*[\"']([^\"']+)[\"']", project_text, re.M),
        )
    )
    for slug in project_slugs:
        path = f"/projects/{slug}"
        if path not in urls_order:
            urls_order.append(path)
        title = project_titles.get(slug, slug.replace("-", " "))
        MONEY_KEYWORDS.setdefault(path, [title, f"{title} case study"])

    # Trim or pad to ~200 URLs
    # Prefer keeping all unique real URLs; if < 200, we already have what exists
    # If > 200, keep first 200 prioritizing money/static/services then insights/projects
    if len(urls_order) > 200:
        urls_order = urls_order[:200]

    for path in urls_order:
        label = path.strip("/").replace("/", " › ").replace("-", " ") or "Home"
        kws = MONEY_KEYWORDS.get(path) or default_keywords(path, label)
        # Ensure at least 1 keyword per URL; add second money-style if only one
        if len(kws) == 1:
            kws = kws + [f"{kws[0]} services"]
        for kw in kws:
            kw_n = kw.strip()
            if not kw_n:
                continue
            key = kw_n.lower()
            if key in seen_kw:
                continue
            seen_kw.add(key)
            rows.append((kw_n, path, label))

    # If keywords < 200, synthesize extra unique money variants for money pages
    money_boost = [
        ("/services/contract-manufacturing", "ISO 13485 contract manufacturer"),
        ("/services/contract-manufacturing", "Class III medical device manufacturing"),
        ("/services/contract-manufacturing/manufacturing-capabilities", "OEM contract manufacturer medical"),
        ("/services/regulatory-compliance/fda-compliance", "FDA QMSR compliance"),
        ("/services/regulatory-compliance/fda-compliance", "premarket notification 510k"),
        ("/services/regulatory-compliance/eu-mdr-compliance", "MDR CE mark consulting"),
        ("/services/software-ai", "SaMD development company"),
        ("/services/software-ai/ai-solutions", "AI clinical decision support software"),
        ("/services/software-ai/custom-medical-software", "chronic care management software"),
        ("/services/software-ai/custom-medical-software", "principal care management software"),
        ("/services/engineering-product-development/research-development-engineering", "medtech R&D partner"),
        ("/services/product-development", "catheter development services"),
        ("/services/mbl-laboratory/sterility-testing", "USP sterility testing"),
        ("/services/production-equipment-engineering", "medical device production machinery"),
        ("/pharmaceutical", "pharmaceutical CDMO services"),
        ("/testing", "biomedical device testing services"),
    ]
    for path, kw in money_boost:
        if path not in urls_order:
            continue
        key = kw.lower()
        if key in seen_kw:
            continue
        seen_kw.add(key)
        rows.append((kw, path, path))

    # Pad keywords to at least 200 with unique long-tails tied to existing URLs
    i = 0
    while len(rows) < 200 and i < len(urls_order) * 3:
        path = urls_order[i % len(urls_order)]
        slug = path.rstrip("/").split("/")[-1].replace("-", " ") or "rmt home"
        kw = f"{slug} ISO 13485" if i % 2 == 0 else f"{slug} FDA compliant"
        key = kw.lower()
        if key not in seen_kw:
            seen_kw.add(key)
            rows.append((kw, path, path))
        i += 1

    # Write TS file
    lines = [
        "/**",
        " * Keyword → primary URL map for Google indexing / on-page SEO.",
        " * Target: ~200 URLs and ~200+ keywords (short-head + money long-tail).",
        " * Auto-maintained structure — prefer editing MONEY_KEYWORDS via scripts/build-200-keyword-map.py",
        " * or append manually below.",
        " */",
        "export type ShortKeywordTarget = {",
        "  keyword: string;",
        "  url: string;",
        "  pageLabel: string;",
        "};",
        "",
        "export const SHORT_KEYWORD_TARGETS: ShortKeywordTarget[] = [",
    ]
    for kw, url, label in rows:
        safe_kw = kw.replace("\\", "\\\\").replace('"', '\\"')
        safe_label = label.replace("\\", "\\\\").replace('"', '\\"')
        lines.append(
            f'  {{ keyword: "{safe_kw}", url: "{url}", pageLabel: "{safe_label}" }},'
        )
    lines += [
        "];",
        "",
        "/** Unique absolute URLs to request indexing (priority = first keyword order). */",
        'export function getShortKeywordIndexUrls(origin = "https://rmt-usa.com"): string[] {',
        "  const seen = new Set<string>();",
        "  const urls: string[] = [];",
        "  for (const row of SHORT_KEYWORD_TARGETS) {",
        "    if (seen.has(row.url)) continue;",
        "    seen.add(row.url);",
        "    urls.push(`${origin}${row.url}`);",
        "  }",
        "  return urls;",
        "}",
        "",
        "export function getShortKeywordStats() {",
        "  const urls = new Set(SHORT_KEYWORD_TARGETS.map((r) => r.url));",
        "  return {",
        "    keywords: SHORT_KEYWORD_TARGETS.length,",
        "    uniqueUrls: urls.size,",
        "  };",
        "}",
        "",
    ]

    out = ROOT / "src/data/short-keywords.ts"
    out.write_text("\n".join(lines), encoding="utf-8")

    unique_urls = len({u for _, u, _ in rows})
    print(f"Wrote {out}")
    print(f"keywords={len(rows)} unique_urls={unique_urls} url_pool={len(urls_order)}")


if __name__ == "__main__":
    main()
