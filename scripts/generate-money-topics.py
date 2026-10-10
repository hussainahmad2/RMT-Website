#!/usr/bin/env python3
"""Generate src/data/money-topics.ts — enough new URLs to reach ~200 indexable pages."""
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
]

assert len(TOPICS) == 57, len(TOPICS)


def ts_escape(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')


def main():
    lines = [
        "/**",
        " * Money-topic landing pages for short-head + commercial keyword indexing.",
        " * Routes: /topics/:slug — included in sitemap + keyword index map.",
        " */",
        "",
        "export type MoneyTopic = {",
        "  slug: string;",
        "  keyword: string;",
        "  title: string;",
        "  description: string;",
        "  relatedPath: string;",
        "  pitch: string;",
        "  bullets: string[];",
        "  faqs: { q: string; a: string }[];",
        "};",
        "",
        "export const MONEY_TOPICS: MoneyTopic[] = [",
    ]

    for slug, kw, related, pitch in TOPICS:
        title = kw[0].upper() + kw[1:] if kw else slug
        desc = f"{pitch} Revive Medical Technologies (RMT) supports {kw} with ISO 13485 systems, engineering, and regulatory-aligned delivery."
        bullets = [
            f"Dedicated landing intent for “{kw}” with clear service pathway.",
            "Aligned to ISO 13485 quality expectations and design controls where applicable.",
            "Connected to the matching RMT service hub for deep capability detail.",
            "US headquarters with global engineering and manufacturing operations.",
        ]
        faqs = [
            (
                f"Does RMT offer {kw}?",
                f"Yes. RMT provides {kw} through integrated engineering, regulatory, and manufacturing teams. Start from the related service page for scope and next steps.",
            ),
            (
                "Who is this for?",
                "MedTech OEMs, startups, HealthTech teams, and manufacturers that need regulated development, software, testing, or contract production support.",
            ),
            (
                "How do we start?",
                "Share your device class, target markets, and timeline via the contact form. We map the pathway across the relevant RMT service lines.",
            ),
        ]
        lines.append("  {")
        lines.append(f'    slug: "{slug}",')
        lines.append(f'    keyword: "{ts_escape(kw)}",')
        lines.append(f'    title: "{ts_escape(title)}",')
        lines.append(f'    description: "{ts_escape(desc)}",')
        lines.append(f'    relatedPath: "{related}",')
        lines.append(f'    pitch: "{ts_escape(pitch)}",')
        lines.append("    bullets: [")
        for b in bullets:
            lines.append(f'      "{ts_escape(b)}",')
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
