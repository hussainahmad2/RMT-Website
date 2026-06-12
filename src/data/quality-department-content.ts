import { SQA_OVERVIEW, SQA_STANDARDS, sqaSectionsToQualityCards } from "./sqa-services-content";

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
    id: "qcprod",
    tabLabel: "QC — Production",
    name: "Quality Control — Production (PRD)",
    description:
      "In-process and final product inspection, QC lab services, and release activities for EMD and SD bulk production lines and device batches. QD owns all testing and sign-off.",
    standards: ["ISO 13485 Clause 8", "EMD · PRD · SC"],
    accent: "teal",
    sections: [
      {
        label: "Production Inspection & Testing",
        cards: [
          {
            title: "In-Process & Final Inspection",
            owner: "QD",
            items: [
              "Sample production & module-level inspection",
              "Integration testing (HW/SW interface validation)",
              "Performance testing — speed, torque, precision",
              "Factory Acceptance Testing (FAT) — pre-dispatch sign-off",
            ],
          },
          {
            title: "Electrical & Mechanical Testing",
            owner: "QD",
            items: [
              "Functional / operational testing — machines & rigs",
              "Electrical safety (IEC 60601 series — active devices)",
              "Mechanical load & stress testing",
              "Usability & ergonomics evaluation",
            ],
          },
          {
            title: "Incoming & Goods Inspection",
            owner: "QD",
            items: [
              "IQC of raw materials & components (with SC)",
              "Supplier CoC & documentation verification",
              "Sampling plans per AQL / ISO 2859",
              "Quarantine management & goods receipt records",
            ],
          },
          {
            title: "Non-Conformance Control",
            owner: "QD",
            items: [
              "NC identification, tagging & disposition",
              "Scrap, rework & use-as-is decisions",
              "NC trending & reporting",
              "Batch record review & product release",
            ],
          },
        ],
      },
      {
        label: "QC Lab Services",
        cards: [
          {
            title: "Microscopic & Dimensional Analysis",
            items: [
              "Surface morphology analysis (Leica Microsystems)",
              "Dimensional analysis — microspheres, stents, catheters",
              "Structural evaluation & measurement verification",
              "Biomedical component morphology assessment",
            ],
          },
          {
            title: "UV Spectroscopy Analysis",
            items: [
              "Drug quantification & concentration determination",
              "Drug release studies & drug-eluting stent analysis",
              "Calibration curve development",
              "Analytical method support for biomaterials",
            ],
          },
          {
            title: "Ultrasonication Services",
            items: [
              "Sample dispersion & particle deagglomeration",
              "Suspension / emulsion preparation",
              "Drug extraction & dissolution enhancement",
              "Lab instrument cleaning & formulation optimization",
            ],
          },
          {
            title: "Shelf-Life & Stability Studies",
            items: [
              "Real-time & accelerated stability studies (ASTM F1980)",
              "Product integrity & performance over time",
              "Degradation rate & profile analysis",
              "Material stability & biomaterial performance monitoring",
            ],
          },
          {
            title: "Catheter Bench Testing",
            items: [
              "Air leakage under water & hub assembly aspiration",
              "Flow rate determination through catheter lumen",
              "Leakage under pressure testing",
              "Corrosion resistance evaluation",
            ],
          },
          {
            title: "Statistical Process Control",
            owner: "QD",
            items: [
              "SPC chart implementation",
              "Cpk / Ppk process capability analysis",
              "Yield & defect rate reporting",
              "Control limit setting & trend monitoring",
            ],
          },
        ],
      },
    ],
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
  {
    id: "qcrd",
    tabLabel: "QC — Research and Development",
    name: "Quality Control — Research and Development (PD · EMD · BMD)",
    description:
      "Quality oversight embedded in the product development lifecycle for active and non-active medical devices — from design verification through transfer to manufacturing. QD collaborates with PD, EMD, and BMD.",
    standards: ["ISO 14971:2019", "IEC 60601-1", "ISO 81060", "ASTM Standards", "ISO 10555", "ISO 25539"],
    accent: "coral",
    sections: [
      {
        label: "Design Control & V&V",
        cards: [
          {
            title: "Design Control (§7.3)",
            owner: "QD",
            items: [
              "Design input & output documentation",
              "Design review facilitation",
              "DHF compilation & review",
              "Design change control management",
            ],
          },
          {
            title: "Design Verification & Validation",
            owner: "PD+QD",
            items: [
              "V&V against design inputs (active & non-active)",
              "User needs & intended use confirmation",
              "Clinical / usability evaluation (HFE)",
              "Pre-submission V&V protocol guidance",
            ],
          },
          {
            title: "Dimensional & Mechanical Testing",
            owner: "QD",
            items: [
              "Dimensional / tolerance inspection per engineering drawings",
              "Mechanical performance — burst, kink, pull-force, fatigue",
              "Advanced visual inspection (Leica microscopic systems)",
              "Mechanical safety: impact, drop & strength testing",
            ],
          },
          {
            title: "Risk Management (ISO 14971)",
            owner: "QD",
            items: [
              "Hazard identification & analysis",
              "FMEA & fault tree analysis",
              "Residual risk evaluation",
              "Risk management report review",
            ],
          },
        ],
      },
      {
        label: "Active Device Testing",
        cards: [
          {
            title: "Electrical Safety & Performance",
            owner: "QD",
            items: [
              "IEC 60601-1 compliance — safety & essential performance",
              "ISO 81060 — non-invasive sphygmomanometers",
              "ISO 80601-2-30 — NIBP device requirements",
              "EMC testing (electromagnetic compatibility)",
              "PCB assembly evaluation for active devices",
            ],
          },
          {
            title: "Metrology & Calibration",
            owner: "QD",
            items: [
              "Calibration — temperature, pressure, volume, time",
              "Cleanroom equipment verification (particle counters)",
              "Measurement system analysis (MSA)",
              "Calibration record management",
            ],
          },
          {
            title: "Equipment Qualification",
            owner: "QD",
            items: [
              "Installation Qualification (IQ)",
              "Operational Qualification (OQ)",
              "Performance Qualification (PQ)",
              "Validation documentation & reporting",
            ],
          },
        ],
      },
      {
        label: "Interventional & Implantable Device Testing",
        cards: [
          {
            title: "Cardiovascular Stent Delivery System Testing",
            owner: "QD",
            items: [
              "Testing per ISO 10555 series",
              "Compliance with ISO 25539",
              "Stent deliverability under simulated physiological conditions",
              "Trackability, pushability & corrosion resistance evaluation",
            ],
          },
          {
            title: "Stent & Surface Quality Control",
            owner: "QD",
            items: [
              "Electropolishing quality control (high-magnification)",
              "Particulate evaluation & edge-rounding verification",
              "Leak & package integrity testing",
              "Corrosion & material degradation evaluation",
            ],
          },
          {
            title: "Biocompatibility & Sterilization",
            owner: "BMD+QD",
            items: [
              "Biocompatibility testing per ISO 10993 (patient-contact products)",
              "Sterilization validation — EO, gamma, e-beam",
              "Shelf-life & packaging validation (ASTM F1980)",
              "Regulatory dossier readiness review (PD + PRD + QD)",
            ],
          },
          {
            title: "Technical Consultancy",
            owner: "QD",
            items: [
              "Design V&V strategy — design inputs to outputs mapping",
              "Customized training — calibration & regulatory test setups",
              "Regulatory pathway guidance & submission gap analysis",
              "System-level & integration testing oversight",
            ],
          },
        ],
      },
    ],
    footerNote:
      "QD Core Functions across all Research and Development activities: Test plan creation for all departments · Inspection reports (signed & stamped) · Module-level & system-level integration testing · Performance & usability testing · Bi-monthly QC review meetings · QC pass → CEO presentation (QD + Relevant Dept. Head)",
  },
];
