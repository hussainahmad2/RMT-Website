import { SQA_OVERVIEW, SQA_STANDARDS, sqaSectionsToQualityCards } from "./sqa-services-content";
import {
  QC_TAGLINE,
  QC_STANDARDS,
  QC_RD_APPROACH,
  QC_PRODUCTION_APPROACH,
  QC_CLOSING_NOTE,
} from "./quality-control-content";

export type QualityServiceCard = {
  title: string;
  items: string[];
  owner?: "QD" | "SD" | "PD+QD" | "BMD+QD";
};

export type QualityDepartment = {
  id: string;
  tabLabel: string;
  name: string;
  description: string;
  standards: string[];
  accent: "blue" | "teal" | "purple" | "coral";
  sections: { label: string; cards: QualityServiceCard[] }[];
  footerNote?: string;
};

export const QUALITY_DEPARTMENT_INTRO = {
  badge: "ISO 13485 · IEC 60601 · ISO 14971",
  title: "Quality Department Services",
  description:
    "Hands-on testing, inspection, sign-off, and compliance support across all product lines — from Research and Development bench to production release. QD leads all quality activities with department collaboration across EMD, SD, BMD, PD, PRD, and SC.",
} as const;

export const QUALITY_WHY_CHOOSE = [
  { title: "ISO 13485 Expertise", description: "Deep quality management expertise across the full medical device lifecycle." },
  { title: "Broad Device Coverage", description: "Active, non-active, SaMD, SiMD, and implantable device programmes." },
  { title: "Advanced Lab Infrastructure", description: "Leica microscopy, UV spectroscopy, metrology, and catheter bench testing." },
  { title: "Cross-Functional Teams", description: "Integrated with EMD, SD, BMD, PD, PRD, and Supply Chain." },
] as const;

export const QUALITY_DEPARTMENTS: QualityDepartment[] = [
  {
    id: "qa",
    tabLabel: "Quality Assurance (QA)",
    name: "Quality Assurance (QA)",
    description:
      "Leverage our proven quality expertise to build, strengthen, and maintain compliant quality systems — QMS development, audit readiness, CAPA, document control, and continuous improvement structured around ISO 13485:2016.",
    standards: ["ISO 13485:2016", "QMSR (FDA 21 CFR 820)", "ISO 14971:2019", "DRAP Compliance"],
    accent: "blue",
    sections: [
      {
        label: "QMS & Compliance",
        cards: [
          {
            title: "QMS Development",
            items: [
              "ISO 13485 compliant QMS development & implementation",
              "Quality manuals, SOPs, work instructions & templates",
              "QMS restructuring & process optimization",
              "Documentation review & improvement",
            ],
          },
          {
            title: "Document Control",
            items: [
              "SOP writing, formatting & revision control",
              "Controlled document management setup",
              "Master document list preparation",
              "Technical & quality document standardization",
            ],
          },
          {
            title: "Audit & Inspection Readiness",
            items: [
              "Internal, process & system audits",
              "Mock audits & compliance checks",
              "Audit report preparation & response support",
              "Regulatory inspection preparation & action plans",
            ],
          },
          {
            title: "CAPA & Non-Conformance",
            items: [
              "CAPA system setup & improvement",
              "Root cause analysis support",
              "Deviation & NC investigation",
              "Corrective & preventive action planning",
            ],
          },
          {
            title: "Risk Management",
            items: [
              "Risk assessment facilitation",
              "FMEA & hazard analysis support",
              "Risk management file preparation",
              "Risk mitigation planning",
            ],
          },
          {
            title: "Validation & Qualification",
            items: [
              "Process validation support",
              "Equipment qualification (IQ / OQ / PQ)",
              "Validation protocol & report review",
              "Validation documentation preparation",
            ],
          },
        ],
      },
      {
        label: "Operational Quality",
        cards: [
          {
            title: "Product Release & Batch Review",
            items: [
              "Batch manufacturing record review",
              "Release documentation verification",
              "Pre-release compliance verification",
              "Final QC pass — CEO presentation sign-off",
            ],
          },
          {
            title: "Complaint Handling",
            items: [
              "Complaint management system setup",
              "Investigation & trending analysis",
              "Customer feedback review",
              "Corrective action coordination",
            ],
          },
          {
            title: "Quality Metrics & Trending",
            items: [
              "KPI monitoring & dashboard preparation",
              "CAPA, deviation & audit trending",
              "Bi-monthly QC review meetings",
              "Continuous improvement reporting",
            ],
          },
          {
            title: "Training Programs",
            items: [
              "ISO 13485 & QMS awareness training",
              "Internal auditor training",
              "Documentation practices & compliance orientation",
              "Calibration methodology & regulatory testing",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "qc",
    tabLabel: "Quality Control",
    name: "Quality Control",
    description: QC_TAGLINE,
    standards: [...QC_STANDARDS],
    accent: "teal",
    sections: [
      {
        label: "Device Portfolio Expertise",
        cards: [
          {
            title: "Active Medical Devices & Electro-Mechanical Systems",
            items: [
              "IEC 60601-1 series safety & essential performance testing",
              "EMC compliance and PCB assembly evaluation",
              "System-level integration and functional verification",
            ],
          },
          {
            title: "Non-Active & Implantable Devices",
            items: [
              "Microspheres, stents, and catheter bench testing",
              "Dimensional & mechanical performance verification",
              "Surface morphology and structural integrity analysis",
            ],
          },
          {
            title: "Production & Testing Machines",
            items: [
              "Factory Acceptance Testing (FAT) pre-dispatch sign-off",
              "Site Acceptance Testing (SAT) and equipment qualification",
              "Metrology, calibration, and process capability analysis",
            ],
          },
          {
            title: "Drug Delivery Systems",
            items: [
              "Drug elution profiling and release studies",
              "Combination product analytical support",
              "Formulation-related quality verification",
            ],
          },
          {
            title: "Multi-Class Regulatory Pathways",
            items: [
              "Comprehensive compliance across Class I, Class II, and Class III portfolios",
              "Design controls aligned with ISO 13485 Clause 7.3",
              "Risk management per ISO 14971 throughout the lifecycle",
            ],
          },
        ],
      },
      {
        label: "Core Testing Capabilities",
        cards: [
          {
            title: "Quality Planning & Documentation",
            owner: "QD",
            items: [
              "Quality Plan formulation & Requirements Traceability Matrix",
              "Rigorous Verification & Validation (V&V) protocols",
              "Quality SOPs and Work Instruction documentation",
            ],
          },
          {
            title: "Electrical Safety & Compliance",
            owner: "QD",
            items: [
              "IEC 60601-1 series testing",
              "Electromagnetic compatibility (EMC) compliance",
              "Essential performance evaluation for active devices",
            ],
          },
          {
            title: "Usability & Ergonomic Engineering",
            owner: "QD",
            items: [
              "Human factors testing per IEC 62366-1",
              "Usability engineering thresholds and validation",
              "Clinical / intended-use confirmation support",
            ],
          },
          {
            title: "Interventional & Cardiovascular Testing",
            owner: "QD",
            items: [
              "Physical and performance testing per ISO 10555 series",
              "ISO 25539 specialized cardiovascular requirements",
              "Trackability, pushability & corrosion resistance evaluation",
            ],
          },
          {
            title: "Incoming Raw Materials Inspection",
            owner: "QD",
            items: [
              "Inspection per ISO 2859-1:2026 sampling plans",
              "Supplier CoC & documentation verification",
              "Quarantine management & goods receipt records",
            ],
          },
          {
            title: "Mechanical & Physical Verification",
            owner: "QD",
            items: [
              "Mechanical endurance, burst, kink, pull-force & fatigue testing",
              "PCB stress testing and advanced simulation testing",
              "Physical and chemical characterization",
            ],
          },
          {
            title: "Industrial Validation",
            owner: "QD",
            items: [
              "Metrology & specialized calibrations",
              "Equipment verifications (IQ / OQ / PQ)",
              "Factory Acceptance Testing (FAT) & Site Acceptance Testing (SAT)",
            ],
          },
          {
            title: "Packaging & Sterile Barrier Validation",
            owner: "QD",
            items: [
              "Transit simulation & shelf-life testing",
              "Peel-strength verification per ISO 11607 & ASTM F88",
              "Accelerated aging per ASTM F1980",
            ],
          },
          {
            title: "Materials Characterization Support",
            owner: "BMD+QD",
            items: [
              "Biological evaluation planning per ISO 10993",
              "Chemical characterization early in the lifecycle",
              "SEM and FTIR analyses for structure & composition",
            ],
          },
        ],
      },
      {
        label: "R&D Phase-Gated Approach",
        cards: QC_RD_APPROACH.map((s) => ({
          title: `${s.step}. ${s.title}`,
          owner: "QD" as const,
          items: [s.desc],
        })),
      },
      {
        label: "Production Quality Control",
        cards: QC_PRODUCTION_APPROACH.map((s) => ({
          title: `${s.step}. ${s.title}`,
          owner: "QD" as const,
          items: [s.desc],
        })),
      },
      {
        label: "Advanced Laboratory Infrastructure",
        cards: [
          {
            title: "High-Performance Liquid Chromatography (HPLC)",
            items: [
              "Chemical characterization & material purity assessment",
              "Drug elution profile quantification for combination devices",
            ],
          },
          {
            title: "Leica Optical Microscopy & Snap Gauge Systems",
            items: [
              "Micro-structural integrity & surface morphology analysis",
              "Ultra-precise dimensional verification of device components",
            ],
          },
          {
            title: "Ultrasonication Processing",
            items: [
              "Sample dispersion, homogenization & de-agglomeration",
              "Enhanced mixing and analytical sample preparation",
            ],
          },
          {
            title: "UV-Vis Spectrophotometer",
            items: [
              "Quantitative chemical analysis & raw material identification",
              "Drug release profiling & degradation rate studies",
            ],
          },
          {
            title: "Environmental Stability Chambers",
            items: [
              "Accelerated & real-time shelf-life studies",
              "Environmental stress screening per ISO 11607 guidelines",
            ],
          },
          {
            title: "Advanced Materials Characterization",
            items: [
              "SEM and FTIR analyses for material structure & composition",
              "Audit-ready, quantitative verification data",
            ],
          },
        ],
      },
    ],
    footerNote: QC_CLOSING_NOTE,
  },
  {
    id: "sqa",
    tabLabel: "Software Quality Assurance",
    name: "Software Quality Assurance",
    description: SQA_OVERVIEW.join(" "),
    standards: [...SQA_STANDARDS],
    accent: "purple",
    sections: sqaSectionsToQualityCards(),
  },
];
