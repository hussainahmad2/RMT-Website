export const QC_TAGLINE =
  "Governing healthcare technology with rigorous compliance, technical verification, and lifecycle risk management from inception to seamless design transfer.";

export const QC_OVERVIEW = [
  "Our Quality Control team provides comprehensive, lifecycle-embedded quality engineering support throughout the R&D phase of medical device development. By embedding quality directly into product planning from concept to commercialization, we help organizations accelerate time-to-market while strictly mitigating regulatory and clinical risk.",
  "We act as the cross-functional bridge between engineering, regulatory affairs, and manufacturing to ensure that critical quality requirements are systematically defined, executed, and maintained.",
  "Our quality system extends into production through incoming material inspection, in-process controls, final product testing, and stability monitoring to ensure consistent translation of validated designs into compliant manufacturing outcomes.",
] as const;

export const QC_STANDARDS = [
  "ISO 13485",
  "ISO 14971",
  "IEC 60601-1 Series",
  "IEC 62304 / IEC 62366-1",
  "ISO 10555 / ISO 25539",
  "ISO 14644",
  "ISO 2859-1:2026",
  "ISO 11607",
  "ISO 10993",
  "ASTM F88",
  "ASTM F1980",
  "ISO 15223-1",
  "ICH Q2 (R2)",
  "ICH Q1A(R2)",
] as const;

export const QC_KEY_POINTS = [
  "Active & non-active medical devices, electro-mechanical systems, and drug delivery platforms",
  "Quality planning, traceability matrices, V&V protocols, and SOP/WI documentation",
  "IEC 60601 electrical safety, EMC, and IEC 62366-1 usability engineering",
  "Interventional & cardiovascular testing per ISO 10555 and ISO 25539 series",
  "Incoming inspection per ISO 2859-1:2026 sampling plans",
  "Production inline QC, finished product release, and stability monitoring",
  "FAT/SAT, metrology, packaging & sterile barrier validation (ISO 11607, ASTM F88)",
  "Advanced lab infrastructure — HPLC, microscopy, UV-Vis, ultrasonication, stability chambers",
] as const;

export const QC_DELIVERABLES = [
  "Quality Management Plans & Requirements Traceability Matrices",
  "V&V protocols, inspection reports (signed & stamped)",
  "Design review records & hazard traceability documentation",
  "Incoming, in-process & finished product test reports",
  "FAT/SAT protocols & equipment qualification documentation",
  "Packaging integrity & stability study reports",
  "Batch release documentation & NC/CAPA records",
] as const;

export const QC_RD_APPROACH = [
  {
    step: "01",
    title: "Planning & Input Architecture",
    desc: "Establishing the Quality Management Plan (QMP), Requirements Traceability Matrix (RTM), and Hazard Traceability Matrix — mapping clinical, user, and regulatory requirements before engineering begins.",
  },
  {
    step: "02",
    title: "Technical Verification & Testing",
    desc: "Implementing rigorous in-house testing protocols during prototyping to verify that hardware, software, and initial packaging configurations mirror design inputs.",
  },
  {
    step: "03",
    title: "Design Reviews",
    desc: "Conducting formal, multidisciplinary design reviews at critical milestones to evaluate performance data and authorize phase progression.",
  },
  {
    step: "04",
    title: "Comprehensive Final Product Testing",
    desc: "Executing thorough functional, safety, and performance evaluations of the completed design architecture before design freeze.",
  },
  {
    step: "05",
    title: "Operational Acceptance (FAT & SAT)",
    desc: "Overseeing Factory and Site Acceptance Testing to verify manufacturing equipment and production lines meet performance thresholds.",
  },
] as const;

export const QC_PRODUCTION_APPROACH = [
  {
    step: "01",
    title: "Incoming Raw Material Inspection",
    desc: "Inspecting incoming raw materials and packaging components against predefined specifications using approved methods and ISO 2859-1 sampling plans before release for production.",
  },
  {
    step: "02",
    title: "Production Inline Quality Control",
    desc: "Performing in-process quality checks at critical manufacturing stages to ensure process consistency and compliance with established specifications.",
  },
  {
    step: "03",
    title: "Finished Product Quality Control",
    desc: "Conducting final product testing and documentation review to verify conformity with acceptance criteria prior to lot release.",
  },
  {
    step: "04",
    title: "Packaging & Sterile Barrier Validation",
    desc: "Evaluating packaging integrity and sterile barrier performance to ensure product protection and maintenance of sterility throughout intended shelf life.",
  },
  {
    step: "05",
    title: "Materials Characterization",
    desc: "Utilizing analytical and characterization techniques to assess critical material attributes and support product quality and performance verification.",
  },
  {
    step: "06",
    title: "Shelf Life & Stability Studies",
    desc: "Conducting real-time and accelerated stability studies to monitor product performance and establish shelf life under defined storage conditions.",
  },
] as const;

export const QC_WHY_CHOOSE = [
  {
    title: "Engineering Insight Meets Quality Rigor",
    desc: "We don't just flag non-conformances — we solve them. Our team bridges complex R&D and strict regulatory requirements, working side-by-side with design engineers to architect quality into the device from the start.",
  },
  {
    title: "Cost Mitigation via Early Containment",
    desc: "Catching a design flaw on the bench costs fractions of what it costs during third-party compliance testing or post-market production. Through in-house simulation, physical testing, and ISO 14971 risk management, we contain variances early.",
  },
  {
    title: "Lifecycle Competency Across Multi-Class Portfolios",
    desc: "From production machines to Class I through Class III medical technologies, our expertise spans the full hardware and software lifecycle — IEC 60601, ISO 10555/25539, and cross-functional manufacturing validation (FAT/SAT).",
  },
] as const;

export const QC_CLOSING_NOTE =
  "This phase-gated approach ensures effective quality control from incoming material qualification through stability monitoring — maintaining compliance, traceability, and confidence in product quality throughout the lifecycle.";

export const QC_PORTFOLIO = [
  {
    title: "Active Medical Devices & Electro-Mechanical Systems",
    items: [
      "IEC 60601-1 safety & essential performance",
      "EMC compliance and system integration testing",
      "PCB assembly evaluation for active devices",
    ],
  },
  {
    title: "Non-Active & Implantable Devices",
    items: [
      "Microspheres, stents & catheter bench testing",
      "Dimensional & mechanical performance verification",
      "Surface morphology and structural integrity analysis",
    ],
  },
  {
    title: "Production & Testing Machines",
    items: [
      "Factory Acceptance Testing (FAT) sign-off",
      "Site Acceptance Testing (SAT) validation",
      "Metrology, calibration & process capability",
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
    title: "Class I · II · III Pathways",
    items: [
      "Multi-class regulatory compliance portfolios",
      "Design controls per ISO 13485 Clause 7.3",
      "ISO 14971 risk management throughout lifecycle",
    ],
  },
] as const;

export const QC_TESTING_CAPABILITIES = [
  {
    title: "Quality Planning & Documentation",
    description: "Quality Plan formulation, requirement traceability matrices, rigorous V&V protocols, and SOP/WI documentation.",
  },
  {
    title: "Electrical Safety & Compliance",
    description: "IEC 60601-1 series testing and electromagnetic compatibility (EMC) compliance for active medical devices.",
  },
  {
    title: "Usability & Ergonomic Engineering",
    description: "Human factors testing compliant with IEC 62366-1 thresholds and intended-use validation.",
  },
  {
    title: "Interventional & Cardiovascular Testing",
    description: "Physical and performance testing per ISO 10555 and specialized ISO 25539 series requirements.",
  },
  {
    title: "Incoming Raw Materials Inspection",
    description: "Sampling and inspection per ISO 2859-1:2026 to ensure compliance with specified quality requirements.",
  },
  {
    title: "Mechanical & Physical Verification",
    description: "Mechanical endurance, PCB stress testing, physical/chemical characterization, and simulation testing.",
  },
  {
    title: "Industrial Validation",
    description: "Metrology, specialized calibrations, equipment verifications, FAT and SAT protocols.",
  },
  {
    title: "Packaging & Sterile Barrier Validation",
    description: "Transit simulation, shelf-life testing, and peel-strength verification per ISO 11607 and ASTM F88.",
  },
  {
    title: "Materials Characterization Support",
    description: "Biological evaluation and chemical characterization early in the lifecycle per ISO 10993.",
  },
] as const;

export const QC_LAB_EQUIPMENT = [
  {
    title: "High-Performance Liquid Chromatography (HPLC)",
    description:
      "Advanced chemical characterization, material purity assessment, and precise quantification of drug elution profiles in combination or drug-coated devices.",
  },
  {
    title: "Leica Optical Microscopy & Snap Gauge Systems",
    description:
      "High-precision physical testing, micro-structural integrity analysis, surface morphology evaluation, and rapid dimensional tolerance checks.",
  },
  {
    title: "Ultrasonication Processing",
    description:
      "Efficient dispersion, homogenization, and de-agglomeration for uniform sample preparation and enhanced analytical extraction.",
  },
  {
    title: "UV-Vis Spectrophotometer",
    description:
      "Quantitative chemical analysis, concentration verification, drug release profiling, and degradation rate studies.",
  },
  {
    title: "Environmental Stability Chambers",
    description:
      "Accelerated and real-time shelf-life studies, environmental stress screening, and packaging degradation analysis.",
  },
  {
    title: "Advanced Materials Characterization",
    description:
      "SEM and FTIR analyses to assess material structure and composition — delivering audit-ready verification data.",
  },
] as const;

export const QC_HERO_STATS = [
  { label: "Lifecycle Coverage", value: "R&D → Production" },
  { label: "Device Classes", value: "Class I–III" },
  { label: "Standards Mapped", value: "14+" },
  { label: "QC Phases", value: "11 Gates" },
] as const;
