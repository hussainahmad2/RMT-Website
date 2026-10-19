#!/usr/bin/env python3
"""Generate src/data/money-topics.ts — deep money landings for indexing (~200+ URLs)."""
from __future__ import annotations

from pathlib import Path

# (slug, primary_keyword, related_service_path, short_pitch)
TOPICS: list[tuple[str, str, str, str]] = [
    ("oem-manufacturing-medical-devices", "OEM manufacturing medical devices", "/services/contract-manufacturing/manufacturing-capabilities", "ISO 13485 OEM builds for Class I–III devices, from pilot lots to commercial scale."),
    ("medical-device-cdmo", "medical device CDMO", "/services/contract-manufacturing", "CDMO-style contract manufacturing with cleanrooms, validation, and design transfer."),
    ("iso-13485-contract-manufacturer", "ISO 13485 contract manufacturer", "/services/contract-manufacturing", "Contract manufacturing under an ISO 13485 quality system for regulated devices."),
    ("catheter-contract-manufacturing", "catheter contract manufacturing", "/services/contract-manufacturing", "Catheter and interventional device manufacturing with process controls and batch release."),
    ("cleanroom-assembly-medical-devices", "cleanroom assembly medical devices", "/services/contract-manufacturing/cleanroom-infrastructure", "Classified cleanroom assembly for sterile and high-sensitivity medical devices."),
    ("white-label-medical-devices", "white label medical devices", "/services/contract-manufacturing/manufacturing-capabilities", "White-label and private-label medical device manufacturing for OEM brands."),
    ("class-ii-device-manufacturing", "Class II device manufacturing", "/services/contract-manufacturing", "Class II medical device manufacturing with QMS documentation and process validation."),
    ("design-transfer-to-manufacturing", "design transfer to manufacturing", "/services/product-development/design-transfer-manufacturing", "Controlled design transfer into production with fixtures, IQ/OQ/PQ, and DMR readiness."),
    ("fda-510k-consulting-services", "FDA 510k consulting services", "/services/regulatory-compliance/fda-compliance", "510(k) strategy, documentation, and submission support for US market entry."),
    ("eu-mdr-ce-marking-consulting", "EU MDR CE marking consulting", "/services/regulatory-compliance/eu-mdr-compliance", "EU MDR technical documentation and CE marking pathway support."),
    ("iso-13485-qms-implementation", "ISO 13485 QMS implementation", "/services/regulatory-compliance/quality-management-system", "ISO 13485 QMS design, gap assessment, SOPs, and certification readiness."),
    ("iso-14971-risk-management-services", "ISO 14971 risk management services", "/services/regulatory-compliance/risk-management", "ISO 14971 risk files, hazard analysis, and residual risk documentation."),
    ("iso-10993-biocompatibility-consulting", "ISO 10993 biocompatibility consulting", "/services/regulatory-compliance/biocompatibility-evaluation", "Biocompatibility evaluation planning aligned to ISO 10993 and device contact."),
    ("samd-development-company", "SaMD development company", "/services/software-ai", "Software as a Medical Device development under IEC 62304 lifecycle controls."),
    ("healthcare-ai-software-development", "healthcare AI software development", "/services/software-ai/ai-solutions", "Clinical AI/ML solutions with intended-use definition and validation evidence."),
    ("onc-health-it-certification-support", "ONC Health IT certification support", "/services/software-ai/software-compliance", "ONC Health IT certification readiness for regulated healthcare software."),
    ("ccm-software-development", "CCM software development", "/services/software-ai/custom-medical-software", "Chronic Care Management software with care plans, time tracking, and billing workflows."),
    ("pcm-software-development", "PCM software development", "/services/software-ai/custom-medical-software", "Principal Care Management software for single high-risk condition programs."),
    ("rpm-software-platform", "RPM software platform", "/services/software-ai/custom-medical-software", "Remote patient monitoring platforms with device data, alerts, and clinician workflows."),
    ("ehr-integration-services", "EHR integration services", "/services/software-ai/custom-medical-software", "EHR integration for clinical apps, FHIR/HL7 connectivity, and care management modules."),
    ("iec-62304-software-lifecycle", "IEC 62304 software lifecycle", "/services/regulatory-compliance/software-sdlc-iec-62304", "IEC 62304 SDLC documentation for medical device software and SaMD."),
    ("medical-device-cybersecurity-testing", "medical device cybersecurity testing", "/services/regulatory-compliance/cybersecurity-testing", "Cybersecurity risk assessment and testing aligned to FDA expectations."),
    ("clinical-evaluation-report-writing", "clinical evaluation report writing", "/services/regulatory-compliance/clinical-evaluation-report", "CER writing and clinical evidence packages for EU MDR submissions."),
    ("medical-device-rd-services", "medical device R&D services", "/services/engineering-product-development/research-development-engineering", "Medical device R&D from concept through prototype and design controls."),
    ("catheter-product-development", "catheter product development", "/services/product-development", "Catheter and minimally invasive device development with V&V and transfer."),
    ("medical-device-prototyping-services", "medical device prototyping services", "/services/product-development/prototyping-development", "Functional prototypes for design iteration, usability, and early verification."),
    ("verification-validation-medical-devices", "verification validation medical devices", "/services/product-development/verification-validation", "V&V protocols, test methods, and evidence for design controls."),
    ("custom-production-equipment-medical", "custom production equipment medical", "/services/production-equipment-engineering", "Custom production machinery for medical device assembly and packaging lines."),
    ("cleanroom-equipment-design", "cleanroom equipment design", "/services/production-equipment-engineering/cleanroom-equipment-engineering", "Cleanroom-compatible equipment design for controlled manufacturing environments."),
    ("iq-oq-pq-equipment-qualification", "IQ OQ PQ equipment qualification", "/services/production-equipment-engineering/equipment-qualification-validation", "Installation, operational, and performance qualification for production equipment."),
    ("medical-device-sterility-testing-lab", "medical device sterility testing lab", "/services/mbl-laboratory/sterility-testing", "Sterility testing for medical devices with method suitability support."),
    ("bacterial-endotoxin-lal-testing", "bacterial endotoxin LAL testing", "/services/mbl-laboratory/bacterial-endotoxin-testing", "Bacterial endotoxin (LAL) testing for devices and process fluids."),
    ("microbial-limit-testing-services", "microbial limit testing services", "/services/mbl-laboratory/microbial-limit-testing", "Microbial enumeration and limit testing for nonsterile medical products."),
    ("biomaterials-testing-laboratory", "biomaterials testing laboratory", "/services/bmd", "Biomaterials characterization, biocompatibility support, and R&D testing."),
    ("tissue-engineering-biomaterials", "tissue engineering biomaterials", "/services/bmd/biomaterials-tissue-engineering", "Tissue engineering and biomaterial scaffold development support."),
    ("drug-delivery-device-development", "drug delivery device development", "/services/bmd/drug-delivery-pharmaceutical-development", "Drug-delivery and combination product development pathways."),
    ("medical-device-quality-control-testing", "medical device quality control testing", "/services/quality-testing", "QC and quality testing programs for production and R&D lots."),
    ("packaging-integrity-testing-medical", "packaging integrity testing medical", "/services/quality-testing/packaging-integrity-testing", "Package integrity and sterile barrier testing for medical devices."),
    ("bench-testing-medical-devices", "bench testing medical devices", "/services/quality-testing/bench-testing", "Bench and functional performance testing for device verification."),
    ("plc-automation-medical-manufacturing", "PLC automation medical manufacturing", "/services/automation-services/plc-programming-industrial-control", "PLC and industrial control systems for medical manufacturing lines."),
    ("hmi-scada-medical-production", "HMI SCADA medical production", "/services/automation-services/hmi-scada-development", "HMI/SCADA interfaces for regulated production equipment."),
    ("rapid-prototyping-medical-devices", "rapid prototyping medical devices", "/services/design-fabrication/rapid-prototyping-3d-printing", "3D printing and rapid prototyping for medical device development."),
    ("fea-simulation-medical-devices", "FEA simulation medical devices", "/services/design-fabrication/simulation-analysis", "Structural and thermal simulation to de-risk device designs."),
    ("turnkey-medical-production-line", "turnkey medical production line", "/services/turnkey-commissioning", "Turnkey production line supply, commissioning, and validation support."),
    ("iso-13485-implementation-services", "ISO 13485 implementation services", "/services/turnkey-commissioning/iso-13485-implementation", "Hands-on ISO 13485 implementation for new or expanding manufacturers."),
    ("medical-device-product-licensing", "medical device product licensing", "/services/turnkey-commissioning/product-licensing", "Product licensing and registration support across target markets."),
    ("minnesota-medical-device-manufacturer", "Minnesota medical device manufacturer", "/services/contract-manufacturing", "US-headquartered medical device manufacturing partner in Minnesota with global ops."),
    ("implantable-device-contract-manufacturing", "implantable device contract manufacturing", "/services/contract-manufacturing", "Contract manufacturing programs for implantable and high-risk device classes."),
    ("hipaa-compliant-healthcare-software", "HIPAA compliant healthcare software", "/services/software-ai/software-compliance", "HIPAA-aligned healthcare software design, hosting, and compliance controls."),
    ("clinical-decision-support-software", "clinical decision support software", "/services/software-ai/ai-solutions", "Clinical decision support software with intended use and performance evaluation."),
    ("medical-device-technical-file", "medical device technical file", "/services/regulatory-compliance/technical-file-preparation", "Technical file and design dossier preparation for regulatory submissions."),
    ("pmcf-medical-device", "PMCF medical device", "/services/regulatory-compliance/post-market-clinical-evaluation", "Post-market clinical follow-up planning and evidence generation."),
    ("sfda-medical-device-registration", "SFDA medical device registration", "/services/regulatory-compliance/sfda-compliance", "SFDA / Saudi market registration support for medical devices."),
    ("tga-medical-device-registration", "TGA medical device registration", "/services/regulatory-compliance/tga-compliance", "TGA ARTG pathway support for Australia market access."),
    ("iec-60601-compliance-services", "IEC 60601 compliance services", "/services/regulatory-compliance/iec-60601-1-compliance", "IEC 60601-1 electrical safety compliance support for active devices."),
    ("medical-device-process-validation", "medical device process validation", "/services/contract-manufacturing/testing-validation", "Process validation and manufacturing evidence for commercial release."),
    ("medtech-outsourcing-partner", "medtech outsourcing partner", "/services", "One partner for R&D, regulatory, software, testing, and manufacturing."),
    ("oem-manufacturing", "OEM manufacturing", "/services/contract-manufacturing/manufacturing-capabilities", "OEM manufacturing for regulated medical devices under ISO 13485 controls."),
    ("medical-device-manufacturing", "medical device manufacturing", "/services/contract-manufacturing", "Medical device manufacturing from pilot builds through commercial lots."),
    ("contract-manufacturing", "contract manufacturing", "/services/contract-manufacturing", "Contract manufacturing for Class I–III medical devices and assemblies."),
    ("device-manufacturing", "device manufacturing", "/services/contract-manufacturing", "Device manufacturing with cleanroom production and quality documentation."),
    ("cleanroom-manufacturing", "cleanroom manufacturing", "/services/contract-manufacturing/cleanroom-infrastructure", "Cleanroom manufacturing for sterile and contamination-sensitive devices."),
    ("catheter-manufacturing", "catheter manufacturing", "/services/contract-manufacturing", "Catheter manufacturing with process validation and batch-release controls."),
    ("iso-13485-manufacturing", "ISO 13485 manufacturing", "/services/contract-manufacturing", "ISO 13485 manufacturing for OEMs that need auditable production systems."),
    ("regulatory-compliance", "regulatory compliance", "/services/regulatory-compliance", "Regulatory compliance support for FDA, EU MDR, and global device pathways."),
    ("fda-compliance", "FDA compliance", "/services/regulatory-compliance/fda-compliance", "FDA compliance consulting for submissions, QMSR, and US market access."),
    ("fda-510k", "510k", "/services/regulatory-compliance/fda-compliance", "510(k) pathway support from strategy through submission-ready packages."),
    ("eu-mdr", "EU MDR", "/services/regulatory-compliance/eu-mdr-compliance", "EU MDR compliance support for CE marking and technical documentation."),
    ("ce-marking", "CE marking", "/services/regulatory-compliance/eu-mdr-compliance", "CE marking support under EU MDR for medical device market access."),
    ("iso-13485-qms", "ISO 13485 QMS", "/services/regulatory-compliance/quality-management-system", "ISO 13485 QMS implementation, gap assessment, and certification readiness."),
    ("iso-14971", "ISO 14971", "/services/regulatory-compliance/risk-management", "ISO 14971 risk management files for medical device design and production."),
    ("samd", "SaMD", "/services/software-ai", "SaMD development under IEC 62304 with validation and submission evidence."),
    ("healthcare-ai", "healthcare AI", "/services/software-ai/ai-solutions", "Healthcare AI solutions for clinical workflows and decision support."),
    ("ai-solution", "AI solution", "/services/software-ai/ai-solutions", "AI solution development for regulated healthcare and MedTech use cases."),
    ("onc-certification", "ONC certification", "/services/software-ai/software-compliance", "ONC certification readiness for Health IT and clinical software modules."),
    ("medical-software", "medical software", "/services/software-ai/custom-medical-software", "Medical software development for clinical, care management, and SaMD apps."),
    ("healthcare-software", "healthcare software", "/services/software-ai", "Healthcare software engineering with privacy, security, and quality controls."),
    ("ccm-software", "CCM software", "/services/software-ai/custom-medical-software", "CCM software for chronic care plans, time tracking, and monthly billing."),
    ("pcm-software", "PCM software", "/services/software-ai/custom-medical-software", "PCM software for principal care management program operations."),
    ("rpm-software", "RPM software", "/services/software-ai/custom-medical-software", "RPM software for remote monitoring, alerts, and clinician dashboards."),
    ("ehr-integration", "EHR integration", "/services/software-ai/custom-medical-software", "EHR integration for FHIR/HL7 connectivity and care-management workflows."),
    ("iec-62304", "IEC 62304", "/services/software-ai/software-compliance", "IEC 62304 software lifecycle documentation for medical device software."),
    ("medical-device-rd", "medical device R&D", "/services/engineering-product-development/research-development-engineering", "Medical device R&D from concept and feasibility through design controls."),
    ("product-development", "product development", "/services/product-development", "Product development for catheters, disposables, and regulated devices."),
    ("design-transfer", "design transfer", "/services/product-development/design-transfer-manufacturing", "Design transfer into manufacturing with fixtures, process windows, and DMR."),
    ("prototype-development", "prototype development", "/services/product-development/prototyping-development", "Prototype development for early verification and design iteration."),
    ("production-equipment", "production equipment", "/services/production-equipment-engineering", "Production equipment engineered for medical manufacturing lines."),
    ("machine-manufacturing", "machine manufacturing", "/services/production-equipment-engineering", "Machine manufacturing for custom medical production systems."),
    ("sterility-testing", "sterility testing", "/services/mbl-laboratory/sterility-testing", "Sterility testing for medical devices with method suitability support."),
    ("medical-device-testing", "medical device testing", "/testing", "Medical device testing across bench, QC, microbiology, and V&V needs."),
    ("biocompatibility", "biocompatibility", "/services/regulatory-compliance/biocompatibility-evaluation", "Biocompatibility evaluation planning aligned to ISO 10993 contact type."),
    ("cybersecurity", "cybersecurity", "/services/regulatory-compliance/cybersecurity-testing", "Medical device cybersecurity assessment and testing for FDA expectations."),
    ("clinical-decision-support", "clinical decision support", "/services/software-ai/ai-solutions", "Clinical decision support software with intended-use and performance evidence."),
    ("hipaa-compliance-software", "HIPAA compliance software", "/services/software-ai/software-compliance", "HIPAA compliance software design, controls, and hosting readiness."),
    ("class-iii-manufacturing", "Class III manufacturing", "/services/contract-manufacturing", "Class III manufacturing support with elevated process and quality controls."),
    ("de-novo-fda", "De Novo FDA", "/services/regulatory-compliance/fda-compliance", "De Novo FDA pathway support for novel moderate-risk devices."),
    ("qmsr-compliance", "QMSR compliance", "/services/regulatory-compliance/fda-compliance", "QMSR compliance alignment for FDA quality system expectations."),
    ("fhir-integration", "FHIR integration", "/services/software-ai/custom-medical-software", "FHIR integration for interoperable healthcare software and EHR exchange."),
    ("hl7-integration", "HL7 integration", "/services/software-ai/custom-medical-software", "HL7 integration for clinical data exchange and care workflows."),
    ("endotoxin-testing", "endotoxin testing", "/services/mbl-laboratory/bacterial-endotoxin-testing", "Endotoxin testing (LAL) for devices, water, and process fluids."),
    ("biomaterials-rd", "biomaterials R&D", "/services/bmd", "Biomaterials R&D spanning characterization, coatings, and tissue scaffolds."),
    ("dfm-medical-device", "DFM medical device", "/services/design-fabrication/manufacturing-support", "DFM medical device support to reduce cost and scale manufacturing risk."),
    ("process-automation", "process automation", "/services/production-equipment-engineering/process-automation", "Process automation for medical device production and packaging lines."),
    ("technical-documentation", "technical documentation", "/services/regulatory-compliance/technical-file-preparation", "Technical documentation packages for FDA and EU MDR submissions."),
    ("quality-control", "quality control", "/services/quality-testing/quality-control", "Quality control programs for medical device production and release."),
    ("quality-assurance", "quality assurance", "/services/quality-testing/quality-assurance", "Quality assurance systems for regulated medical device operations."),
    ("healthcare-solution", "healthcare solution", "/services/software-ai", "Healthcare solution delivery spanning software, AI, and compliance."),
    ("software-services", "software services", "/services/software-ai", "Software services for SaMD, clinical apps, cloud, and validation."),
    ("manufacturing-rd", "manufacturing R&D", "/services/engineering-product-development", "Manufacturing R&D that links design, process development, and scale-up."),
]

_slugs = [t[0] for t in TOPICS]
assert len(_slugs) == len(set(_slugs)), "duplicate topic slugs"
print(f"topic_count={len(TOPICS)}")


def ts_escape(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')


def category_for(related: str, kw: str) -> str:
    r = related.lower()
    k = kw.lower()
    if "software" in r or "ai" in r or any(x in k for x in ("samd", "ccm", "pcm", "rpm", "ehr", "fhir", "hl7", "onc", "hipaa")):
        return "software"
    if "regulatory" in r or any(x in k for x in ("510k", "mdr", "ce marking", "iso 13485 qms", "iso 14971", "qmsr", "de novo", "technical")):
        return "regulatory"
    if "mbl" in r or "testing" in r or "quality-testing" in r or any(x in k for x in ("sterility", "endotoxin", "biocompatibility", "bench")):
        return "testing"
    if "production-equipment" in r or "automation" in r or "machine" in k or "equipment" in k:
        return "equipment"
    if "product-development" in r or "engineering" in r or "rd" in k or "prototype" in k or "design transfer" in k:
        return "rd"
    if "turnkey" in r:
        return "turnkey"
    if "bmd" in r or "biomaterial" in k:
        return "biomaterials"
    return "manufacturing"


def deep_copy(kw: str, pitch: str, cat: str) -> tuple[str, str, list[str], list[tuple[str, str]], list[str]]:
    """Return (description, body, bullets, faqs, process_steps)."""
    desc = (
        f"{pitch} Revive Medical Technologies (RMT) delivers {kw} with ISO 13485 quality systems, "
        f"design controls where applicable, and coordinated engineering, regulatory, and manufacturing teams "
        f"across Minnesota headquarters and global operations."
    )

    bodies = {
        "manufacturing": (
            f"Buyers searching for {kw} need a partner that can move from pilot builds to repeatable commercial lots "
            f"without breaking documentation or process control. RMT runs classified cleanroom production, material "
            f"traceability, and batch-release discipline so OEM programs stay audit-ready."
        ),
        "regulatory": (
            f"Teams evaluating {kw} usually need evidence packages that survive reviewer scrutiny — not generic templates. "
            f"RMT builds pathway strategy, technical documentation, and risk/clinical evidence so US, EU, and global "
            f"submissions stay aligned to the same design history."
        ),
        "software": (
            f"Programs labeled {kw} must define intended use, software safety class, and validation evidence early. "
            f"RMT engineers clinical and SaMD systems under IEC 62304-aligned lifecycle controls, with privacy, "
            f"security, and interoperability planned into the architecture."
        ),
        "rd": (
            f"When teams search {kw}, they want concept-to-prototype speed without losing design-control rigor. "
            f"RMT combines feasibility engineering, prototyping, V&V planning, and transfer readiness so R&D outputs "
            f"are manufacturable and submission-useful."
        ),
        "testing": (
            f"Requests for {kw} typically sit on critical-path release or submission evidence. RMT supports method "
            f"selection, protocol execution, and report packages that plug into design verification and quality release."
        ),
        "equipment": (
            f"Buyers of {kw} need production systems that qualify under IQ/OQ/PQ and fit cleanroom constraints. "
            f"RMT designs and builds custom machinery, automation, and controls for regulated device lines."
        ),
        "turnkey": (
            f"Organizations searching {kw} want line supply, commissioning, training, and quality-system readiness "
            f"in one program. RMT coordinates equipment, validation, and ISO 13485 implementation so production can start controlled."
        ),
        "biomaterials": (
            f"Work under {kw} spans material characterization, tissue-contact planning, and development experiments. "
            f"RMT supports biomaterials and combination-product pathways with testing and engineering collaboration."
        ),
    }
    body = bodies.get(cat, bodies["manufacturing"])

    bullets = [
        f"Commercial intent page for “{kw}” mapped to a live RMT service pathway.",
        pitch,
        "ISO 13485 quality expectations and design controls applied where the product class requires them.",
        "Documentation, validation, and transfer practices aimed at audit and submission readiness.",
        "Minnesota HQ with manufacturing and engineering capacity for global delivery.",
        "Direct handoff from inquiry to manufacturing, R&D, regulatory, software, or testing specialists.",
    ]

    process = {
        "manufacturing": [
            "Scope device class, volumes, materials, and sterile/cleanroom needs",
            "Define process windows, fixtures, and inspection plans",
            "Pilot builds with batch records and deviation control",
            "Scale to commercial lots with ongoing QC release",
        ],
        "regulatory": [
            "Confirm market pathway and predicate/clinical strategy",
            "Gap the existing design history and technical file",
            "Author or harden risk, clinical, and submission evidence",
            "Support questions through clearance or CE readiness",
        ],
        "software": [
            "Lock intended use, users, and software safety classification",
            "Architect modules, integrations, and security controls",
            "Implement under lifecycle docs (requirements → verification)",
            "Validate, document, and prepare regulatory/compliance packages",
        ],
        "rd": [
            "Feasibility and requirements capture",
            "Prototype and iterate with usability inputs",
            "Verification planning and design reviews",
            "Transfer package into manufacturing or next regulatory gate",
        ],
        "testing": [
            "Select standards and methods for the device/contact type",
            "Protocol and sample plan agreement",
            "Execute testing with controlled records",
            "Deliver reports suitable for V&V or release files",
        ],
        "equipment": [
            "Requirements and cleanroom/process constraints",
            "Mechanical, electrical, and controls design",
            "Build, FAT, and site commissioning",
            "IQ/OQ/PQ support for production release",
        ],
        "turnkey": [
            "Line layout and equipment bill of materials",
            "Supply, install, and commission production cells",
            "Qualify processes and train operators",
            "Align QMS/licensing artifacts for startup",
        ],
        "biomaterials": [
            "Define material/contact and performance goals",
            "Characterize candidates and process routes",
            "Support biocompatibility and development studies",
            "Hand off into device or combination-product programs",
        ],
    }.get(cat, [
        "Discovery and requirements",
        "Technical plan and quotes",
        "Execution with quality records",
        "Delivery and next-phase roadmap",
    ])

    faqs = [
        (
            f"Does RMT provide {kw}?",
            f"Yes. RMT provides {kw} through integrated engineering, regulatory, software, testing, and manufacturing teams. "
            f"Use the related service page for capability depth, then contact us with device class and markets.",
        ),
        (
            f"What makes RMT a fit for {kw}?",
            "ISO 13485 operating discipline, Class I–III device experience, SaMD/software capability, and US + global delivery "
            "so commercial, regulatory, and production work stay coordinated.",
        ),
        (
            "Who typically buys this service?",
            "MedTech OEMs, startups, HealthTech companies, and manufacturers that need regulated development, "
            "software, testing, or contract production without assembling five separate vendors.",
        ),
        (
            "How long does an engagement take?",
            "Timelines depend on device class, documentation maturity, and markets. Share your current phase and deadline; "
            "we propose a phased plan from discovery through delivery.",
        ),
        (
            "How do we start?",
            "Send device class, target markets, volumes or user scale, and any existing drawings or software scope via the contact form. "
            "We respond within one business day with the right RMT pathway.",
        ),
    ]
    return desc, body, bullets, faqs, process


def related_topic_slugs(idx: int, cat: str) -> list[str]:
    """Pick a few peer topics in the same category for internal links."""
    peers = []
    for i, (slug, _kw, related, _p) in enumerate(TOPICS):
        if i == idx:
            continue
        if category_for(related, _kw) == cat:
            peers.append(slug)
    # stable sample: neighbors in list + first peers
    out: list[str] = []
    for slug in peers:
        if slug not in out:
            out.append(slug)
        if len(out) >= 4:
            break
    if len(out) < 3:
        for j, (slug, *_rest) in enumerate(TOPICS):
            if j != idx and slug not in out:
                out.append(slug)
            if len(out) >= 3:
                break
    return out[:4]


def main():
    lines = [
        "/**",
        " * Money-topic landing pages for short-head + commercial keyword indexing.",
        " * Routes: /topics/:slug — included in sitemap + keyword index map.",
        " * Generated by scripts/generate-money-topics.py — do not hand-edit en masse.",
        " */",
        "",
        "export type MoneyTopic = {",
        "  slug: string;",
        "  keyword: string;",
        "  title: string;",
        "  description: string;",
        "  body: string;",
        "  relatedPath: string;",
        "  pitch: string;",
        "  bullets: string[];",
        "  processSteps: string[];",
        "  relatedTopicSlugs: string[];",
        "  faqs: { q: string; a: string }[];",
        "};",
        "",
        "export const MONEY_TOPICS: MoneyTopic[] = [",
    ]

    for idx, (slug, kw, related, pitch) in enumerate(TOPICS):
        title = kw[0].upper() + kw[1:] if kw else slug
        cat = category_for(related, kw)
        desc, body, bullets, faqs, process = deep_copy(kw, pitch, cat)
        related_slugs = related_topic_slugs(idx, cat)

        lines.append("  {")
        lines.append(f'    slug: "{slug}",')
        lines.append(f'    keyword: "{ts_escape(kw)}",')
        lines.append(f'    title: "{ts_escape(title)}",')
        lines.append(f'    description: "{ts_escape(desc)}",')
        lines.append(f'    body: "{ts_escape(body)}",')
        lines.append(f'    relatedPath: "{related}",')
        lines.append(f'    pitch: "{ts_escape(pitch)}",')
        lines.append("    bullets: [")
        for b in bullets:
            lines.append(f'      "{ts_escape(b)}",')
        lines.append("    ],")
        lines.append("    processSteps: [")
        for step in process:
            lines.append(f'      "{ts_escape(step)}",')
        lines.append("    ],")
        lines.append("    relatedTopicSlugs: [")
        for rs in related_slugs:
            lines.append(f'      "{rs}",')
        lines.append("    ],")
        lines.append("    faqs: [")
        for q, a in faqs:
            lines.append(f'      {{ q: "{ts_escape(q)}", a: "{ts_escape(a)}" }},')
        lines.append("    ],")
        lines.append("  },")

    lines += [
        "];",
        "",
        "export function getMoneyTopic(slug: string): MoneyTopic | undefined {",
        "  return MONEY_TOPICS.find((t) => t.slug === slug);",
        "}",
        "",
        "export function getAllMoneyTopicPaths(): string[] {",
        '  return MONEY_TOPICS.map((t) => `/topics/${t.slug}`);',
        "}",
        "",
    ]

    out = Path("src/data/money-topics.ts")
    out.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Wrote {out} topics={len(TOPICS)}")


if __name__ == "__main__":
    main()
