export const PRODUCT_DEVELOPMENT_HERO_STATS = [
  { label: "Lifecycle Coverage", value: "Concept → Market" },
  { label: "Disciplines", value: "HW · SW · Regulatory" },
  { label: "Engagement", value: "Turnkey & Modular" },
  { label: "Standards", value: "ISO · IEC · FDA" },
] as const;

export const PRODUCT_DEVELOPMENT_PHASES = [
  {
    title: "Concept & Feasibility",
    items: [
      "Clinical need assessment",
      "Market and competitor analysis",
      "Product requirement definition",
      "Technical feasibility studies",
      "Risk analysis and mitigation planning",
      "Technology selection",
    ],
  },
  {
    title: "Product Design & Engineering",
    items: [
      "Mechanical design and CAD development",
      "Electronic hardware and PCB design",
      "Embedded systems development",
      "Software and mobile application development",
      "Design for Manufacturability (DFM)",
      "Design optimization and cost reduction",
    ],
  },
  {
    title: "Prototyping & Development",
    items: [
      "Rapid prototyping",
      "Functional prototype development",
      "Alpha and beta prototypes",
      "3D printing and model fabrication",
      "Hardware and software integration",
      "Iterative product refinement",
    ],
  },
  {
    title: "Verification & Validation",
    items: [
      "Design verification testing",
      "Functional and performance testing",
      "Reliability and environmental testing",
      "Usability and human factors engineering",
      "Product validation studies",
      "Packaging and sterilization validation support",
    ],
  },
  {
    title: "Design Transfer & Manufacturing Support",
    items: [
      "Manufacturing process development",
      "Production documentation",
      "Bill of Materials (BOM) preparation",
      "Assembly procedures and work instructions",
      "Test fixture development",
      "Pilot production, supplier qualification, and scale-up",
    ],
  },
] as const;

export const PRODUCT_DEVELOPMENT_REGULATORY = [
  {
    title: "Quality Management Systems",
    items: [
      "ISO 13485 implementation",
      "Quality Manual development",
      "SOP development",
      "Internal audits",
      "Management review support",
      "CAPA and risk management systems",
    ],
  },
  {
    title: "Regulatory Compliance",
    items: [
      "ISO 14971 Risk Management",
      "IEC 62304 Software Lifecycle Compliance",
      "IEC 60601 Medical Electrical Equipment Compliance",
      "Usability Engineering Support",
      "Design Control Documentation",
      "Regulatory gap assessments",
    ],
  },
  {
    title: "Technical Documentation",
    items: [
      "Technical File preparation",
      "Design History File (DHF)",
      "Device Master Record (DMR)",
      "Device Technical Documentation",
      "Essential Requirements documentation",
      "Product registration dossiers",
    ],
  },
  {
    title: "Validation Services",
    items: [
      "Process Validation",
      "Sterilization Validation",
      "Packaging Validation",
      "Cleaning Validation",
      "Equipment Qualification (IQ/OQ/PQ)",
      "Software Validation",
    ],
  },
  {
    title: "Regulatory Submission Support",
    items: [
      "FDA submission support",
      "CE marking documentation support",
      "International product registration support",
      "Regulatory strategy development",
      "Change management and compliance support",
    ],
  },
] as const;

export const PRODUCT_DEVELOPMENT_MANUFACTURING = [
  "Manufacturing line setup",
  "Production process development",
  "Vendor and supplier identification",
  "Production equipment selection",
  "Quality control system implementation",
  "Manufacturing documentation",
  "Staff training and technology transfer",
] as const;

export const PRODUCT_DEVELOPMENT_WHY = [
  {
    title: "Complete Turnkey Solutions",
    description: "End-to-end product realization so you can focus on business growth while we manage technical and regulatory complexity.",
  },
  {
    title: "Medical Device Specialists",
    description: "Dedicated teams across engineering, quality, regulatory, and manufacturing with deep healthcare technology experience.",
  },
  {
    title: "Regulatory Compliance Expertise",
    description: "Structured pathways for ISO, IEC, FDA, and CE requirements — minimizing approval timelines.",
  },
  {
    title: "Proven Complex Technologies",
    description: "Experience delivering active devices, SaMD, biomaterials, and interventional products to market.",
  },
  {
    title: "Flexible Engagement",
    description: "Single workstream support or full turnkey development — scaled to your stage and budget.",
  },
  {
    title: "Faster Time to Market",
    description: "Parallel engineering, validation, and documentation to accelerate development and regulatory approval.",
  },
] as const;
