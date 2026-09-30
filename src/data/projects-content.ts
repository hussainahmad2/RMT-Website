export type ProjectCategory =
  | "Medical Devices"
  | "Regulatory"
  | "Software"
  | "Manufacturing"
  | "Pharmaceutical";

export type ServiceLink = { href: string; label: string };

export interface ProjectCaseStudy {
  id: string;
  /** Unique URL slug under /projects/:slug */
  slug: string;
  title: string;
  client: string;
  location: string;
  year: string;
  category: ProjectCategory;
  description: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  image: string;
  tags: string[];
  /** Case study → money-page wiring */
  relatedServices: ServiceLink[];
}

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "1",
    slug: "class-iii-cardiac-monitor-ce-mark",
    title: "Class III Implantable Cardiac Monitor — CE Mark Technical File",
    client: "European MedTech Company",
    location: "Germany",
    year: "2023",
    category: "Regulatory",
    description:
      "Led end-to-end regulatory strategy and technical documentation for a novel Class III implantable cardiac monitor, achieving CE Mark approval within 18 months.",
    challenge:
      "The client had a near-final device design but no regulatory documentation or QMS. They needed a complete EU MDR technical file for a novel Class III implantable cardiac monitor within an aggressive 18-month timeline.",
    solution:
      "RMT assembled a dedicated regulatory team and implemented ISO 13485 QMS in parallel with technical file development. We authored the CER, BER, Risk Management File, and complete technical documentation package.",
    outcomes: ["CE Mark Achieved", "ISO 14971 Risk File", "Full V&V Package", "Post-Market Plan"],
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=1200&q=80",
    tags: ["CE Mark", "Class III", "Implantable", "Cardiac"],
    relatedServices: [
      { href: "/services/regulatory-compliance", label: "Regulatory Compliance" },
      { href: "/services/regulatory-compliance/eu-mdr-compliance", label: "EU MDR Compliance" },
    ],
  },
  {
    id: "2",
    slug: "wearable-drug-delivery-design-prototyping",
    title: "Wearable Drug Delivery System — Full Design & Prototyping",
    client: "European Pharma Company",
    location: "UAE",
    year: "2023",
    category: "Medical Devices",
    description:
      "Designed and prototyped a wearable on-body injector for biologics administration, from initial concept through design freeze and CE marking under EU MDR.",
    challenge:
      "Develop a miniaturised, body-worn injector for high-viscosity biologics that could be self-administered by patients — meeting both pharmaceutical and medical device regulatory requirements as a combination product.",
    solution:
      "RMT's integrated team covered mechanical design, electronics, firmware, pharmaceutical formulation, and regulatory strategy simultaneously — reducing the typical serial development timeline by 40%.",
    outcomes: ["CE Mark Achieved", "5 Prototype Iterations", "Design History File", "EU MDR Compliance"],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80",
    tags: ["Wearable", "Drug Delivery", "CE Mark", "EU MDR"],
    relatedServices: [
      { href: "/services/product-development", label: "Product Development" },
      {
        href: "/services/engineering-product-development/research-development-engineering",
        label: "Medical Device R&D",
      },
    ],
  },
  {
    id: "3",
    slug: "ai-diagnostic-imaging-samd",
    title: "AI-Powered Diagnostic Imaging Platform — SaMD Development",
    client: "Diagnostics Startup",
    location: "United Kingdom",
    year: "2022",
    category: "Software",
    description:
      "Developed an AI-powered medical image analysis platform compliant with IEC 62304 and EU MDR SaMD guidance, including full software validation lifecycle documentation.",
    challenge:
      "A diagnostic startup had a promising AI algorithm but no pathway to CE Mark as SaMD. They needed full software development lifecycle documentation and regulatory strategy.",
    solution:
      "RMT implemented IEC 62304-compliant development processes, validated the AI/ML model against clinical datasets, and prepared the complete SaMD technical file for EU MDR submission.",
    outcomes: ["EU MDR SaMD Compliant", "IEC 62304 Lifecycle", "ML Model Validated", "CE Technical File"],
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=1200&q=80",
    tags: ["AI/ML", "SaMD", "Imaging", "IEC 62304"],
    relatedServices: [
      { href: "/services/software-ai", label: "Software & AI (SaMD)" },
      { href: "/services/regulatory-compliance", label: "Regulatory Compliance" },
    ],
  },
  {
    id: "4",
    slug: "poc-biosensor-manufacturing-scale-up",
    title: "Point-of-Care Biosensor Manufacturing Scale-Up",
    client: "Diagnostics Company",
    location: "Pakistan",
    year: "2022",
    category: "Manufacturing",
    description:
      "Scaled up biosensor manufacturing from lab prototype to GMP production capability, achieving ISO 13485 certification and 50,000 unit/month output.",
    challenge:
      "A POC diagnostics company had validated their biosensor technology at lab scale but had no pathway to GMP manufacturing. They needed to scale from 500 to 50,000 units/month within 12 months.",
    solution:
      "RMT designed the manufacturing process, implemented ISO 13485 QMS, installed and validated production equipment, and trained 25 manufacturing staff — delivering on-time and within budget.",
    outcomes: ["ISO 13485 Certified", "50k Units/Month", "Full Traceability", "Process Validated"],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80",
    tags: ["Biosensor", "GMP", "Scale-Up", "ISO 13485"],
    relatedServices: [
      { href: "/services/contract-manufacturing", label: "Contract Manufacturing" },
      {
        href: "/services/contract-manufacturing/manufacturing-capabilities",
        label: "Manufacturing Capabilities",
      },
    ],
  },
  {
    id: "5",
    slug: "drug-device-inhaler-product-development",
    title: "Drug-Device Combination — Inhaler Product Development",
    client: "Pharma Company",
    location: "UAE",
    year: "2022",
    category: "Pharmaceutical",
    description:
      "Full development of a dry powder inhaler combination product from formulation through device design, clinical studies, and regulatory submission.",
    challenge:
      "Develop a novel dry powder inhaler for a challenging peptide API — requiring simultaneous optimisation of the formulation, device mechanics, and patient usability — for multiple regulatory markets.",
    solution:
      "RMT's integrated pharma and medical device teams co-developed the formulation and device design in parallel, conducting formative and summative usability studies and preparing the multi-market regulatory submission.",
    outcomes: [
      "Combination Product Approved",
      "3 Market Submissions",
      "Usability Study Complete",
      "Shelf Life Validated",
    ],
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&q=80",
    tags: ["Pharma", "Inhaler", "Combination", "Formulation"],
    relatedServices: [
      { href: "/services/product-development", label: "Product Development" },
      { href: "/services/bmd", label: "Biomedical Devices" },
    ],
  },
  {
    id: "6",
    slug: "surgical-robotics-software-validation",
    title: "Surgical Robotic System — Software Validation Programme",
    client: "Surgical Robotics Company",
    location: "United States",
    year: "2023",
    category: "Software",
    description:
      "Comprehensive software validation programme for a Class III surgical robotic system, covering IEC 62304 lifecycle, cybersecurity, and human factors.",
    challenge:
      "An established surgical robotics company needed a complete software V&V programme for a major software update — with FDA submission deadline in 9 months.",
    solution:
      "RMT provided a dedicated V&V team that reviewed the software architecture, wrote and executed test protocols covering all software safety classes, and produced a complete V&V summary report for the FDA submission.",
    outcomes: [
      "V&V Package Submitted",
      "Cybersecurity Documented",
      "Human Factors Complete",
      "Zero Major Defects",
    ],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
    tags: ["Surgical", "Robotics", "Software", "V&V"],
    relatedServices: [
      { href: "/services/software-ai", label: "Software & AI (SaMD)" },
      { href: "/services/software-ai/software-quality-assurance", label: "Software Quality Assurance" },
    ],
  },
  {
    id: "7",
    slug: "iso-13485-qms-medtech-startup",
    title: "ISO 13485 QMS Implementation — Medical Device Startup",
    client: "MedTech Startup",
    location: "Pakistan",
    year: "2021",
    category: "Regulatory",
    description:
      "Full ISO 13485 QMS implementation from scratch for a medical device startup — achieving certification in 9 months and providing the quality foundation for CE marking.",
    challenge:
      "A startup needed ISO 13485 certification to win a key customer contract within 9 months. They had no existing quality system, no documented processes, and limited in-house QMS expertise.",
    solution:
      "RMT implemented a lean, practical ISO 13485 QMS tailored to the startup's product scope. We wrote all procedures, trained staff, conducted internal audits, and managed the certification body interaction end-to-end.",
    outcomes: [
      "ISO 13485 Certified (9 months)",
      "Complete QMS Documentation",
      "Internal Audit Programme",
      "Customer Contract Won",
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    tags: ["ISO 13485", "QMS", "Startup", "Regulatory"],
    relatedServices: [
      { href: "/services/regulatory-compliance", label: "Regulatory Compliance" },
      {
        href: "/services/regulatory-compliance/quality-management-system",
        label: "ISO 13485 QMS",
      },
    ],
  },
  {
    id: "8",
    slug: "orthopaedic-implant-contract-manufacturing",
    title: "Orthopaedic Implant — Contract Manufacturing Programme",
    client: "Orthopaedic Company",
    location: "UAE",
    year: "2021",
    category: "Manufacturing",
    description:
      "Contract manufacturing programme for a range of knee and hip orthopaedic implant components, from precision machining through sterile packaging and CE marking.",
    challenge:
      "An orthopaedic company needed a reliable, CE-marked contract manufacturing partner for complex titanium and CoCr implant components — with full DHR documentation and sterile packaging.",
    solution:
      "RMT established a dedicated manufacturing cell for the client, qualifying precision machining processes for titanium and CoCr, implementing sterile packaging qualification, and providing complete DHR documentation for every unit.",
    outcomes: [
      "CE Mark Maintained",
      "Full DHR per Unit",
      "Sterile Packaging Validated",
      "Zero Regulatory Issues",
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80",
    tags: ["Orthopaedics", "Implant", "Contract Mfg", "Titanium"],
    relatedServices: [
      { href: "/services/contract-manufacturing", label: "Contract Manufacturing" },
      {
        href: "/services/contract-manufacturing/quality-compliance",
        label: "Quality & Compliance",
      },
    ],
  },
  {
    id: "9",
    slug: "remote-patient-monitoring-cloud-ai",
    title: "Remote Patient Monitoring Platform — Cloud & AI Development",
    client: "Digital Health Company",
    location: "United States",
    year: "2023",
    category: "Software",
    description:
      "End-to-end development of a HIPAA-compliant cloud platform for remote patient monitoring, including AI-driven alert algorithms and mobile patient application.",
    challenge:
      "A digital health company needed to develop their RPM platform rapidly — integrating IoT medical devices, cloud data analytics, and patient/clinician mobile apps — with full HIPAA compliance and IEC 62304 documentation.",
    solution:
      "RMT's software team built the complete platform stack — cloud infrastructure, AI alert algorithms, iOS/Android patient app, and clinical dashboard — with full IEC 62304 SDLC documentation and HIPAA security architecture.",
    outcomes: ["HIPAA Compliant", "IEC 62304 Documented", "10k Patients Onboarded", "AI Alerts Validated"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    tags: ["RPM", "Cloud", "AI", "HIPAA"],
    relatedServices: [
      { href: "/services/software-ai", label: "Software & AI (SaMD)" },
      { href: "/services/software-ai/ai-solutions", label: "AI Solutions" },
    ],
  },
];

export const PROJECT_FILTER_CATEGORIES: Array<"All" | ProjectCategory> = [
  "All",
  "Medical Devices",
  "Regulatory",
  "Software",
  "Manufacturing",
  "Pharmaceutical",
];

export const MONEY_SERVICE_LINKS: ServiceLink[] = [
  { href: "/services/contract-manufacturing", label: "Contract Manufacturing" },
  {
    href: "/services/engineering-product-development/research-development-engineering",
    label: "Medical Device R&D",
  },
  { href: "/services/product-development", label: "Product Development" },
  { href: "/services/software-ai", label: "Software & AI" },
  { href: "/services/regulatory-compliance", label: "Regulatory Compliance" },
];

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return PROJECT_CASE_STUDIES.find((p) => p.slug === slug);
}

export function projectPath(slug: string): string {
  return `/projects/${slug}`;
}
