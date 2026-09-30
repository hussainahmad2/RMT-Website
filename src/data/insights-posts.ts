import { INSIGHT_ARTICLES } from "@/data/insights-content";
import docxMap from "@/data/insights-images.json";

type DocxArticle = {
  index: number;
  images: string[];
  title: string;
  paras: string[];
};

type InsightPostDetail = {
  heroImage: string;
  galleryImages: string[];
  body: string[];
  tags: string[];
  links: string[];
  relatedServices: Array<{ href: string; label: string }>;
  sourceTitle: string;
};

const DOCX_ARTICLES = docxMap as DocxArticle[];

const DOCX_INDEX_BY_ID: Record<string, number> = {
  "22-rpm-ecosystem": 16,
  "22-rpm-google-play": 11,
  "fda-small-business-waiver": 2,
  "ace-pump": 1,
  "biomaterial-scaffolds": 3,
  "microspheres-milestone": 15,
  "scttm-catheter-testing": 10,
  "vision-awareness-device": 8,
  "product-development-lifecycle": 9,
  "comprehensive-testing": 14,
  "bath-shaker": 7,
  "tensura-stretching": 20,
  "aquelis-coating": 22,
  "rmt-biomaterials-legacy": 19,
};

const FALLBACK_IMAGE_BY_ID: Record<string, string> = {
  "eu-mdr-cybersecurity": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=85",
  "hl7-vs-fhir": "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=1600&q=85",
  "iso-13485-contract-manufacturing-guide":
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=85",
  "samd-iec-62304-development-path": "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=1600&q=85",
  "fda-510k-eu-mdr-pathway": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=85",
  "medical-device-product-development-roadmap":
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=85",
};

const FALLBACK_BODY_BY_ID: Record<string, string[]> = {
  "eu-mdr-cybersecurity": [
    "A practical guide to aligning software and device cybersecurity expectations with the EU MDR framework.",
    "It covers technical documentation, secure development controls, and the evidence reviewers expect to see in a submission-ready package.",
  ],
  "hl7-vs-fhir": [
    "A clear comparison of healthcare interoperability standards and where each one fits in a modern healthcare platform.",
    "The goal is to help teams make an implementation choice that balances compatibility, speed, and long-term maintainability.",
  ],
  "iso-13485-contract-manufacturing-guide": [
    "ISO 13485 contract manufacturing is not just capacity — it is a controlled transfer of design intent into a production system that can be audited, validated, and scaled.",
    "Start with design transfer readiness. Before a cleanroom line can run, you need a frozen device design, Bill of Materials, manufacturing and inspection plans, process risk controls, and acceptance criteria that match your Design History File.",
    "Evaluate the partner’s quality system against your product class. Class I volume devices and Class III implantables both need ISO 13485, but the depth of process validation, environmental monitoring, sterilization controls, and Device History Record traceability will differ.",
    "Cleanroom and process capability matter early. Ask how classified rooms are monitored, how equipment is qualified (IQ/OQ/PQ), and whether the site can support pilot lots before commercial volumes.",
    "Build validation into the schedule. Process validation, packaging validation, and sterilization validation (where applicable) should be planned before first commercial release — not after demand arrives.",
    "Keep regulatory ownership clear. Your technical file or 510(k)/EU MDR documentation must stay consistent with the manufacturing changes you approve. A good CMO collaborates on change control instead of treating production as a black box.",
    "If you are selecting a manufacturing partner now, map your device class, target markets, and scale timeline first — then pressure-test candidates against those constraints.",
  ],
  "samd-iec-62304-development-path": [
    "Software as a Medical Device (SaMD) fails reviews when teams treat IEC 62304 as paperwork instead of an engineering control system.",
    "Classify software safety early. Safety class drives architecture decisions, verification depth, and anomaly handling. Changing class late usually means rework across requirements, risk controls, and tests.",
    "Use a living software development plan. Define lifecycle model, tools, configuration management, coding standards, and integration with ISO 14971 risk management before the first sprint of regulated code.",
    "Separate SOUP and AI/ML concerns. Third-party libraries, models, and cloud services need identification, qualification, and update strategy — especially when cybersecurity or clinical performance can change after release.",
    "Verification evidence must map to requirements. Unit, integration, and system tests should prove intended use claims and risk controls, not only happy-path UI flows.",
    "Cybersecurity is now a submission expectation. Secure design, threat modeling, vulnerability handling, and update processes belong in the same package as IEC 62304 documentation for FDA and EU MDR pathways.",
    "Teams that integrate SDLC, risk, and clinical claims from day one spend less time reverse-engineering a technical file after the product already works in a demo.",
  ],
  "fda-510k-eu-mdr-pathway": [
    "Choosing FDA 510(k) or EU MDR as your first market is a business decision as much as a regulatory one — but the evidence packages are not interchangeable copy-paste jobs.",
    "FDA 510(k) centers on substantial equivalence. You need a valid predicate strategy, performance testing against that predicate’s claims, and a submission narrative that proves sameness where it matters and justifies differences.",
    "EU MDR centers on conformity assessment with a more demanding clinical evaluation and technical documentation structure. Risk management, PMS/PMCF planning, and Unique Device Identification expectations are baked into the lifecycle.",
    "QMS timing differs in practice. Both pathways expect controlled quality systems, but EU MDR Notified Body scrutiny of ISO 13485 implementation is often earlier and deeper for higher-risk devices.",
    "Do not duplicate work blindly. Bench testing, biocompatibility, software validation, and sterilization evidence can often serve both markets if protocols are written with dual-use acceptance criteria from the start.",
    "Sequence markets intentionally. Many teams clear a US 510(k) first for revenue, then adapt the dossier for EU MDR — or the reverse when European clinical partners are the beachhead. Either way, freeze the claim set before rewriting documents twice.",
    "A clear regulatory strategy memo — intended use, classification, predicate or conformity route, and evidence gaps — saves months of rework later.",
  ],
  "medical-device-product-development-roadmap": [
    "Successful medical device product development is a controlled sequence: prove the need, lock requirements, verify design, then transfer into manufacturing without breaking the design history.",
    "Concept and feasibility should answer clinical need, user needs, preliminary hazards, and whether the architecture can meet regulatory claims. Skipping this stage creates expensive redesign later.",
    "Design and development planning under design controls sets the master schedule for inputs, outputs, reviews, verification, validation, and design transfer. Vague plans produce chaotic DHFs.",
    "Prototyping is evidence generation, not just demo hardware. Each iteration should reduce technical risk and update risk files, usability findings, and requirement traceability.",
    "Verification and validation close the loop. Verification proves you built the device right; validation proves you built the right device for intended users and use environments.",
    "Design transfer is where many programs stall. Manufacturing process definition, supplier controls, process FMEA, and pilot builds must be complete before commercial release commitments.",
    "Treat regulatory and manufacturing as parallel workstreams from feasibility onward. Waiting until “engineering is done” to involve compliance or production is the most common schedule killer in MedTech.",
  ],
};

const RELATED_SERVICES_BY_ID: Record<string, Array<{ href: string; label: string }>> = {
  "iso-13485-contract-manufacturing-guide": [
    { href: "/services/contract-manufacturing", label: "ISO 13485 Contract Manufacturing" },
    {
      href: "/services/contract-manufacturing/manufacturing-capabilities",
      label: "Manufacturing Capabilities",
    },
    { href: "/services/contract-manufacturing/quality-compliance", label: "Quality & Compliance" },
  ],
  "samd-iec-62304-development-path": [
    { href: "/services/software-ai", label: "Software & AI (SaMD)" },
    { href: "/services/software-ai/software-compliance", label: "Software Compliance" },
    {
      href: "/services/regulatory-compliance/software-sdlc-iec-62304",
      label: "IEC 62304 / SDLC",
    },
  ],
  "fda-510k-eu-mdr-pathway": [
    { href: "/services/regulatory-compliance", label: "Regulatory Compliance" },
    { href: "/services/regulatory-compliance/fda-compliance", label: "FDA Compliance" },
    { href: "/services/regulatory-compliance/eu-mdr-compliance", label: "EU MDR Compliance" },
  ],
  "medical-device-product-development-roadmap": [
    { href: "/services/product-development", label: "Product Development" },
    {
      href: "/services/engineering-product-development/research-development-engineering",
      label: "Medical Device R&D",
    },
    {
      href: "/services/product-development/design-transfer-manufacturing",
      label: "Design Transfer",
    },
  ],
};

const pickDocxArticle = (id: string): DocxArticle | undefined => {
  const index = DOCX_INDEX_BY_ID[id];
  if (!index) return undefined;
  return DOCX_ARTICLES.find((article) => article.index === index);
};

const imagePath = (relativePath: string) => `/insights/posts/${relativePath.split("/").pop()}`;

const TAG_PATTERN = /#([A-Za-z0-9_]+)/g;
const URL_PATTERN = /https?:\/\/[^\s)]+/g;
const IGNORED_PREFIXES = [
  "already okay",
  "new",
  "fix tags",
  "add tags",
  "make sure that the tags are not in post but in tags",
];

const cleanSourceTitle = (raw: string) =>
  raw
    .replace(/^(Already okay|Fix tags|Add tags)\s*/i, "")
    .replace(/\s*\|\s*Revive Medical Technologies Inc\.?$/i, "")
    .trim();

const extractTags = (text: string) => {
  const tags = [];
  for (const match of text.matchAll(TAG_PATTERN)) {
    const normalized = match[1].trim();
    if (normalized) tags.push(normalized);
  }
  return tags;
};

const extractUrls = (text: string) => {
  const urls = [];
  for (const match of text.matchAll(URL_PATTERN)) {
    urls.push(match[0]);
  }
  return urls;
};

const shouldIgnoreParagraph = (text: string) => {
  const lower = text.trim().toLowerCase();
  return IGNORED_PREFIXES.some((prefix) => lower.startsWith(prefix));
};

const cleanBodyParagraph = (text: string) => {
  let output = text.trim();
  output = output.replace(URL_PATTERN, "").trim();
  output = output.replace(TAG_PATTERN, "").trim();
  output = output.replace(/\s{2,}/g, " ").trim();
  return output;
};

export function getInsightRelatedServices(id: string): Array<{ href: string; label: string }> {
  return RELATED_SERVICES_BY_ID[id] ?? [];
}

export function getInsightPostDetail(id: string): InsightPostDetail | null {
  const article = INSIGHT_ARTICLES.find((item) => item.id === id);
  if (!article) return null;

  const docxArticle = pickDocxArticle(id);
  if (docxArticle) {
    const tags = new Set<string>();
    const links = new Set<string>();
    const body: string[] = [];

    docxArticle.paras.forEach((para, index) => {
      if (!para) return;

      extractTags(para).forEach((tag) => tags.add(tag));
      extractUrls(para).forEach((url) => links.add(url));

      if (index === 0) return;
      if (shouldIgnoreParagraph(para)) return;
      if (/^(phone:|email:|website:)\s*/i.test(para)) return;
      if (/^#/.test(para.trim())) return;

      const cleaned = cleanBodyParagraph(para);
      if (cleaned) {
        body.push(cleaned);
      }
    });

    return {
      heroImage: imagePath(docxArticle.images[0]),
      galleryImages: docxArticle.images.slice(1).map(imagePath),
      body: body.length ? body : [article.excerpt],
      tags: Array.from(tags),
      links: Array.from(links),
      relatedServices: RELATED_SERVICES_BY_ID[id] ?? [],
      sourceTitle: cleanSourceTitle(docxArticle.title) || article.title,
    };
  }

  return {
    heroImage: FALLBACK_IMAGE_BY_ID[id] ?? article.image,
    galleryImages: [],
    body: FALLBACK_BODY_BY_ID[id] ?? [article.excerpt],
    tags: article.tags ?? [],
    links: [],
    relatedServices: RELATED_SERVICES_BY_ID[id] ?? [],
    sourceTitle: article.title,
  };
}
