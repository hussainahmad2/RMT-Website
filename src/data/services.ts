export interface SubServiceData {
  slug: string;
  name: string;
  tagline: string;
  overview: string[];
  keyPoints: string[];
  deliverables: string[];
}

export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  overview: string[];
  subServices: SubServiceData[];
  capabilities: string[];
  whyRMT: { title: string; desc: string }[];
  keywords: string;
  heroImage: string;
  heroBg: string;
}

export const ALL_SERVICES: ServiceData[] = [
  {
    slug: "regulatory-compliance",
    name: "Regulatory Compliance",
    shortName: "Regulatory",
    tagline: "Navigate global regulatory pathways, risk management, and quality standards with confidence.",
    description: "Expert regulatory affairs and quality assurance services covering risk management, biocompatibility evaluation, quality management system implementation, and global clearances (FDA, EU MDR, SFDA, TGA).",
    overview: [
      "Regulatory compliance and quality assurance are the cornerstones of successful medical device commercialization. RMT's regulatory affairs and quality experts have deep knowledge of ISO 13485, ISO 14971, ISO 10993, FDA 21 CFR, EU MDR, SFDA, and TGA requirements.",
      "We prepare comprehensive technical documentation packages, conduct gap analyses against applicable standards, and work alongside your team to build a quality management system that satisfies both regulatory requirements and operational efficiency.",
      "Our proven track record includes successful submissions for Class I, II, and III medical devices across multiple jurisdictions, with a regulatory approval rate exceeding 98%. We ensure your device meets all safety, performance, and biological requirements.",
    ],
    subServices: [
      {
        slug: "risk-management",
        name: "Risk Management (ISO 14971)",
        tagline: "Systematic risk analysis, evaluation, control, and lifecycle verification.",
        overview: [
          "A documented Risk Management Plan defines the scope of risk management activities, roles and responsibilities, risk acceptance criteria, risk evaluation methods, and risk control measures.",
          "The Risk Management File is a collection of records containing risk analysis, risk evaluation, risk control activities, verification of controls, residual risk assessment, and post-market monitoring data.",
          "The Hazard Traceability Matrix links hazards, hazardous situations, harms, risk controls, and verification activities. This ensures every identified hazard is tracked through mitigation and verification.",
          "Risk Analysis involves the systematic identification and assessment of hazards, causes, probability of occurrence, severity of harm, and risk levels."
        ],
        keyPoints: [
          "ISO 14971:2019 & ISO/TR 24971 compliant",
          "Comprehensive Hazard Traceability Matrix (HTM)",
          "Living Risk Management File (RMF)",
          "Hazard identification & FMEA risk profiling",
          "Post-market risk monitoring integration"
        ],
        deliverables: [
          "Risk Management Plan",
          "Risk Analysis & FMEA Report",
          "Hazard Traceability Matrix (HTM)",
          "Risk Management Report & File"
        ]
      },
      {
        slug: "biocompatibility-evaluation",
        name: "Biocompatibility Evaluation (ISO 10993)",
        tagline: "Biological safety assessment of medical devices for intended clinical body contact.",
        overview: [
          "Biocompatibility Documentation and Evaluation assess whether a medical device is biologically safe for its intended clinical use.",
          "Under the ISO 10993-1:2025 standard (Biological evaluation of medical devices - Framework for biocompatibility assessment), we determine the required biological testing based on device type, nature of body contact, and contact duration."
        ],
        keyPoints: [
          "ISO 10993-1:2025 biological safety framework",
          "Testing determination based on device category",
          "Testing need justification & gap analysis",
          "Materials & body contact characterization"
        ],
        deliverables: [
          "Biological Evaluation Plan (BEP)",
          "Biological Evaluation Report (BER)",
          "Biocompatibility Testing Protocols"
        ]
      },
      {
        slug: "toxicological-risk-assessment",
        name: "Toxicological Risk Assessment (TRA)",
        tagline: "Evaluates toxicological risks associated with device materials per ISO 10993-17.",
        overview: [
          "Conforming to ISO 10993-17:2023, toxicological risk assessment establishes allowable limits for leachable and extractable substances.",
          "We evaluate toxicological risks associated with device materials, supporting biological safety justifications and reducing the need for costly animal testing."
        ],
        keyPoints: [
          "ISO 10993-17:2023 compliant assessment",
          "Extractable & leachable (E&L) substance limits",
          "Toxicological risk profiling of materials",
          "Biological safety justification support"
        ],
        deliverables: [
          "Toxicological Risk Assessment (TRA) Report",
          "Allowable limits calculation dossier",
          "Chemical characterization assessment"
        ]
      },
      {
        slug: "quality-management-system",
        name: "Quality Management System (ISO 13485)",
        tagline: "Medical Device Quality Management System (QMS) development and compliance.",
        overview: [
          "Medical Device Quality Management System (QMS) implementation establishes the organizational framework necessary for compliance and quality consistency.",
          "Key areas of our QMS integration include QMS development, implementation, training, documentation control, design controls, risk management integration, and corrective and preventive actions (CAPA)."
        ],
        keyPoints: [
          "ISO 13485 compliant QMS implementation",
          "Design controls & documentation control",
          "CAPA system development & training",
          "Risk management processes integration"
        ],
        deliverables: [
          "QMS Manual & SOP Documentation",
          "Design History File (DHF) templates",
          "CAPA process dossiers",
          "Internal audit reports & training records"
        ]
      },
      {
        slug: "fda-compliance",
        name: "FDA Compliance",
        tagline: "FDA registration, classification, 510(k), and PMA pathways.",
        overview: [
          "We support all medical device establishment requirements, including FDA Establishment Registration, Device Listing, and Device Classification.",
          "Class I (low-risk devices, e.g., bandages, examination gloves). Requirements: Establishment Registration & Listing.",
          "Class II (moderate-risk devices, e.g., dermatoscopes, infusion pumps). Requirements: FDA 510(k) Premarket Notification.",
          "Class III (high-risk devices, e.g., implantable pacemakers, heart valves). Requirements: PMA (Premarket Approval)."
        ],
        keyPoints: [
          "FDA Establishment Registration & Listing",
          "Device Classification & regulatory pathway strategy",
          "FDA 510(k) Premarket Notification preparation",
          "Class III PMA submission support"
        ],
        deliverables: [
          "FDA Regulatory Strategy Document",
          "510(k) Submission Package / PMA dossiers",
          "Classification Justification Report",
          "FDA Listing confirmation files"
        ]
      },
      {
        slug: "eu-mdr-compliance",
        name: "EU MDR Compliance",
        tagline: "CE Marking, Clinical Evaluation, and Technical Documentation per EU MDR 2017/745.",
        overview: [
          "The European Medical Device Regulation (EU MDR 2017/745) governs device approval and CE marking requirements in the European Union.",
          "We guide you through the CE Marking process, Clinical Evaluation, Post-Market Surveillance (PMS), Risk Management, and Technical Documentation compilation."
        ],
        keyPoints: [
          "EU MDR 2017/745 regulatory compliance",
          "CE Marking documentation & dossier",
          "Clinical Evaluation Reports (CER)",
          "Technical Documentation per Annex II/III"
        ],
        deliverables: [
          "EU MDR Technical File",
          "Clinical Evaluation Plan & Report (CEP/CER)",
          "Post-Market Surveillance (PMS) Plan",
          "CE Marking registration dossier"
        ]
      },
      {
        slug: "sfda-compliance",
        name: "SFDA Compliance",
        tagline: "Marketing authorization and registration with the Saudi Food and Drug Authority.",
        overview: [
          "The Saudi Food and Drug Authority (SFDA) requires Medical Device Marketing Authorization and listing registration for importing and selling devices in Saudi Arabia.",
          "We compile all necessary files to ensure full compliance with SFDA requirements and applicable local/international standards."
        ],
        keyPoints: [
          "SFDA registration and MDMA authorization",
          "Local Authorized Representative support",
          "Compliance with SFDA applicable standards",
          "Saudi market entry strategy"
        ],
        deliverables: [
          "SFDA MDMA Submission Dossier",
          "Standards compliance justification",
          "SFDA approval certificate tracking"
        ]
      },
      {
        slug: "tga-compliance",
        name: "TGA Compliance",
        tagline: "Inclusion in the Australian Register of Therapeutic Goods (ARTG).",
        overview: [
          "To market therapeutic goods in Australia, manufacturers must obtain inclusion in the Australian Register of Therapeutic Goods (ARTG) under the Therapeutic Goods Administration (TGA).",
          "We assist in preparing the required regulatory compliance documentation for a successful TGA application."
        ],
        keyPoints: [
          "TGA compliance review and ARTG inclusion",
          "Australian Register of Therapeutic Goods submission",
          "Sponsor liaison and regulatory documentation",
          "Standards alignment and compliance files"
        ],
        deliverables: [
          "TGA Submission Dossier",
          "ARTG Registration Package",
          "Australian regulatory strategy report"
        ]
      },
      {
        slug: "cybersecurity-testing",
        name: "Cybersecurity Testing & Documentation",
        tagline: "Pre-market and post-market cybersecurity risk management and threat modeling.",
        overview: [
          "Healthcare devices are increasingly connected, making cybersecurity a critical regulatory requirement for FDA clearance and CE marking.",
          "RMT provides comprehensive cybersecurity testing and documentation services, including threat modeling, vulnerability assessments, penetration testing coordination, and post-market cybersecurity management plans."
        ],
        keyPoints: [
          "FDA cybersecurity guidelines alignment",
          "Threat modeling and vulnerability analysis",
          "Software Bill of Materials (SBOM) preparation",
          "Post-market cybersecurity monitoring plans"
        ],
        deliverables: [
          "Cybersecurity Risk Assessment Report",
          "Threat Modeling Dossier (STRIDE/FMEA)",
          "Software Bill of Materials (SBOM)",
          "Penetration Testing Summary Report"
        ]
      },
      {
        slug: "software-sdlc-iec-62304",
        name: "Software Lifecycle (SDLC) IEC 62304",
        tagline: "Compliant software development lifecycle documentation and verification for SaMD/SiMD.",
        overview: [
          "Medical device software must be developed within a structured, documented framework to ensure safety and clinical efficacy.",
          "We establish and document your Software Development Lifecycle (SDLC) in strict compliance with IEC 62304. We assist in software safety classification (Class A, B, C), software risk assessment, software requirements management, architectural design, verification, and release protocols."
        ],
        keyPoints: [
          "IEC 62304 Class A, B, C compliance mapping",
          "Software risk assessment & mitigation",
          "Full requirements-to-test traceability (RTM)",
          "Release management & software configuration controls"
        ],
        deliverables: [
          "Software Development Plan (SDP)",
          "Software Architecture & Design Dossier",
          "Software Verification Plan & Report (SVP/SVR)",
          "Requirements Traceability Matrix (RTM)"
        ]
      },
      {
        slug: "iso-27001-compliance",
        name: "ISO/IEC 27001:2022 Compliance",
        tagline: "Information security management systems for secure patient data and cloud infrastructure.",
        overview: [
          "Securing patient health information and device data is essential for modern cloud-connected medical technologies.",
          "We help you implement and maintain an Information Security Management System (ISMS) in alignment with ISO/IEC 27001:2022. We configure security controls, conduct risk assessments, establish security policies, and ensure compliance with HIPAA and GDPR data privacy standards."
        ],
        keyPoints: [
          "ISO/IEC 27001:2022 ISMS implementation",
          "Patient health data security (HIPAA/GDPR)",
          "Cloud infrastructure security controls",
          "Internal information security audits & training"
        ],
        deliverables: [
          "Information Security Manual & Policies",
          "ISMS Risk Assessment & Treatment Plan",
          "Statement of Applicability (SoA)",
          "Internal Audit Report & Readiness Checklist"
        ]
      },
      {
        slug: "iec-60601-1-compliance",
        name: "IEC 60601-1 Compliance",
        tagline: "Electrical safety and essential performance documentation for medical electrical systems.",
        overview: [
          "Electrical medical devices must meet strict safety and performance standards to protect patients and operators.",
          "We prepare the compliance mapping, safety checklists, and Excel sheet matrices required for IEC 60601-1 certification. We coordinate with accredited laboratories for testing and help you resolve any non-conformities during evaluation."
        ],
        keyPoints: [
          "IEC 60601-1 electrical safety checklists",
          "Essential performance validation planning",
          "EMC testing coordination (IEC 60601-1-2)",
          "Safety-critical component traceability"
        ],
        deliverables: [
          "IEC 60601-1 Compliance Mapping Sheet",
          "Risk Management integration for electrical safety",
          "EMC Test Plan & Laboratory Coordination Dossier",
          "Safety Test Summary Report"
        ]
      },
      {
        slug: "greenlight-guru-setup",
        name: "Greenlight Guru Setup",
        tagline: "Configuration, migration, and management of DHFs and QMS on electronic QMS platforms.",
        overview: [
          "Electronic Quality Management Systems (eQMS) streamline regulatory audits and document control for fast-growing medical device companies.",
          "We configure and manage your electronic QMS on platforms like Greenlight Guru. We migrate paper design history files (DHF) and device master records (DMR) to the digital platform, map SOP workflows, and train your team for audit readiness."
        ],
        keyPoints: [
          "Greenlight Guru workspace design & setup",
          "DHF & DMR digital migration",
          "Standard Operating Procedures (SOP) workflow mapping",
          "Team training & electronic audit preparation"
        ],
        deliverables: [
          "eQMS Workspace Configuration Document",
          "DHF/DMR Migration Log & Verification",
          "Digital SOP Workflow Templates",
          "User Training & Onboarding Dossier"
        ]
      },
      {
        slug: "technical-file-preparation",
        name: "Technical File Preparation",
        tagline: "Technical documentation dossiers compiled per EU MDR Annex II/III and FDA pathways.",
        overview: [
          "A comprehensive technical file is the key deliverable that demonstrates device conformity to regulatory bodies.",
          "We compile technical documentation packages (per EU MDR 2017/745 Annex II/III and FDA pathways) containing device descriptions, design history files, manufacturing flowcharts, and regulatory declaration forms to support smooth clearance."
        ],
        keyPoints: [
          "EU MDR Annex II/III Technical Documentation",
          "Device Master Records (DMR) compilation",
          "Labeling, packaging, and IFU compliance",
          "Declaration of Conformity documentation"
        ],
        deliverables: [
          "EU MDR Technical File / FDA Dossier",
          "Device Master Record (DMR)",
          "Labeling & IFU Compliance Dossier",
          "Declaration of Conformity Draft"
        ]
      },
      {
        slug: "clinical-evaluation",
        name: "Clinical Evaluation",
        tagline: "Clinical data abstraction and evidence mapping to support safety and efficacy claims.",
        overview: [
          "Demonstrating clinical safety and performance is required for all medical devices entering the market.",
          "Our clinical affairs team abstracts raw clinical research data and maps evidence from scientific publications and databases to support your device's safety, efficacy, and clinical performance claims."
        ],
        keyPoints: [
          "Clinical database search and data extraction",
          "Systematic literature searches & protocols",
          "Equivalent product justifications",
          "Clinical evidence gap analysis"
        ],
        deliverables: [
          "Clinical Data Abstraction Report",
          "Equivalence Justification File",
          "Clinical Literature Screening Log",
          "Clinical Evidence Gap Analysis"
        ]
      },
      {
        slug: "clinical-evaluation-report",
        name: "Clinical Evaluation Report (CER)",
        tagline: "Audit-ready CER writing aligned with MEDDEV 2.7/1 Rev 4 and EU MDR requirements.",
        overview: [
          "A Clinical Evaluation Report (CER) documents the assessment and analysis of clinical data to prove your device's safety.",
          "We write audit-ready CER dossiers in accordance with MEDDEV 2.7/1 Rev 4 and EU MDR requirements. We document literature search protocols, evaluate predicate device equivalence, and prove safety using clinical databases."
        ],
        keyPoints: [
          "MEDDEV 2.7/1 Rev 4 compliant CER writing",
          "Literature Research Protocols & search matrices",
          "Benefit-risk ratio analysis based on clinical data",
          "Notified Body audit support & query response"
        ],
        deliverables: [
          "Clinical Evaluation Plan (CEP)",
          "Clinical Evaluation Report (CER)",
          "Literature Search Protocol & Report",
          "Benefit-Risk Assessment File"
        ]
      },
      {
        slug: "literature-research-protocol",
        name: "Literature Research Protocol",
        tagline: "Literature research protocols, search matrices, and equivalent product justifications.",
        overview: [
          "A rigorous literature search protocol forms the foundation of clinical evidence and equivalence arguments.",
          "We develop systematic literature search protocols and database search matrices (MEDLINE, EMBASE, PubMed). We document screening criteria, resolve data extraction queries, and map inputs to prove equivalence with predicate products."
        ],
        keyPoints: [
          "Systematic search strategy & database selection",
          "Database search matrices (EMBASE, MEDLINE, PubMed)",
          "Inclusion/exclusion screening logs",
          "Predicate device raw material & clinical equivalence comparison"
        ],
        deliverables: [
          "Literature Search Protocol (LSP)",
          "Database Search Matrix & Screening Log",
          "Equivalent Product Comparison Dossier",
          "Literature Review Safety Report"
        ]
      },
      {
        slug: "post-market-clinical-evaluation",
        name: "Post Market Clinical Evaluation",
        tagline: "PMCF plans, survey protocols, and periodic safety reports to justify device safety.",
        overview: [
          "Regulatory compliance continues after market launch through active monitoring of real-world device performance.",
          "We define continuous Post-Market Clinical Follow-up (PMCF) plans and compilation protocols. We gather real-world safety data after market entry, conduct clinical surveys, and compile safety update reports to continuously justify device safety."
        ],
        keyPoints: [
          "PMCF Plan and Survey protocol development",
          "Periodic Safety Update Report (PSUR) compilation",
          "Post-market clinical data extraction",
          "Feedback integration into risk files"
        ],
        deliverables: [
          "PMCF Plan & Survey Protocol",
          "Post-Market Clinical Follow-up (PMCF) Report",
          "Periodic Safety Update Report (PSUR)",
          "Post-Market Surveillance (PMS) Report"
        ]
      }
    ],
    capabilities: [
      "FDA 510(k) & PMA Submissions",
      "EU MDR CE Marking & Technical Files",
      "SFDA Marketing Authorizations (MDMA)",
      "TGA ARTG Inclusion",
      "ISO 13485 QMS Implementation",
      "ISO 14971 Risk Management Files",
      "ISO 10993 Biocompatibility Evaluations",
      "Toxicological Risk Assessments (TRA)"
    ],
    whyRMT: [
      { title: "Global Clearance Success", desc: "Proven track record with FDA, EU MDR, SFDA, and TGA approvals across 40+ countries." },
      { title: "Risk & Bio-Safety Experts", desc: "Specialized in ISO 14971 risk files and chemical characterization/TRA under ISO 10993." },
      { title: "Audit-Ready QMS Systems", desc: "From SOP development to training, we build fully integrated ISO 13485 environments." }
    ],
    keywords: "regulatory compliance quality assurance, FDA 510k, EU MDR CE marking, ISO 13485 QMS, ISO 14971 risk management, ISO 10993 biocompatibility, SFDA MDMA, TGA ARTG, toxicological risk assessment TRA",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80",
    heroBg: "from-slate-900/70 to-slate-800/50",
  },
  {
    slug: "software-ai",
    name: "Software & AI Solutions",
    shortName: "Software & AI",
    tagline: "Intelligent software powering next-generation medical devices.",
    description: "Full-spectrum software development including AI/ML, cloud, SaMD compliance, application development, and complete software validation lifecycle for medical technology.",
    overview: [
      "Software is increasingly at the heart of modern medical devices — from embedded firmware to cloud-connected diagnostic platforms. RMT USA's software engineering team brings healthcare-specific expertise to every development engagement.",
      "We develop software in compliance with IEC 62304 and FDA SaMD guidance, ensuring your codebase meets the rigorous documentation and verification requirements of regulatory submissions.",
      "Our AI and machine learning capabilities extend to diagnostic algorithms, predictive maintenance, clinical decision support, and connected device data analytics — all developed with explainability and regulatory acceptance in mind.",
    ],
    subServices: [
      {
        slug: "custom-medical-software",
        name: "Custom Medical Software",
        tagline: "Web, mobile, desktop, EHR, RPM, and CCM platforms built for regulated healthcare.",
        overview: [
          "RMT develops custom medical software across web, mobile, and desktop — from clinician workstations to patient-facing applications — aligned with your intended use and regulatory pathway.",
          "We build electronic health record (EHR) integrations, remote patient monitoring (RPM) platforms, and chronic care management (CCM) programmes with secure data flows, role-based access, and audit-ready documentation.",
          "Every engagement follows structured requirements, architecture, and verification practices suitable for IEC 62304 and SaMD submissions where applicable.",
        ],
        keyPoints: ["Web, mobile & desktop applications", "EHR integration & interoperability", "Remote patient monitoring (RPM)", "Chronic care management (CCM)", "IEC 62304-aligned development"],
        deliverables: ["Production-ready application", "Software requirements & architecture", "V&V test documentation", "Deployment & release package"],
      },
      {
        slug: "software-compliance",
        name: "Software Compliance",
        tagline: "HIPAA, IEC 62304, ISO 13485, ONC, ISO 27001, and FHIR/HL7 interoperability for health software.",
        overview: [
          "Regulated health software must satisfy multiple frameworks simultaneously. RMT helps you map, implement, and evidence compliance across HIPAA privacy and security, IEC 62304 software lifecycle, ISO 13485 quality management, ONC certification requirements, and ISO 27001 information security.",
          "We design FHIR and HL7 interoperability into your architecture from the start — enabling safe data exchange with EHRs, labs, payers, and connected devices without compromising auditability.",
          "Our compliance work produces submission-ready documentation: risk files, traceability matrices, security assessments, and interoperability test evidence.",
        ],
        keyPoints: ["HIPAA privacy & security", "IEC 62304 software lifecycle", "ISO 13485 quality alignment", "ONC certification support", "ISO 27001 information security", "FHIR / HL7 interoperability"],
        deliverables: ["Compliance gap assessment", "Traceability & risk documentation", "Security & privacy controls", "Interoperability test evidence"],
      },
      {
        slug: "ai-solutions",
        name: "AI Solutions",
        tagline: "Custom AI apps, clinical decision support, predictive analytics, and intelligent healthcare automation.",
        overview: [
          "Artificial intelligence is reshaping diagnostics, operations, and patient engagement. RMT delivers custom AI applications, AI add-ons for existing platforms, workflow automation, and generative AI solutions with validation and explainability built in.",
          "We develop clinical decision support systems (CDSS), AI-based billing management, predictive analytics, recommendation engines, disease prediction models, and intelligent appointment and resource schedulers — all documented for regulatory review where required.",
          "Our AI process covers data governance, model training and validation, bias assessment, and change control aligned with FDA AI/ML and EU MDR expectations.",
        ],
        keyPoints: ["Custom AI apps & AI add-ons", "Workflow automation & generative AI", "Clinical decision support (CDSS)", "AI-based billing management", "Predictive analytics & recommendations", "Disease prediction & intelligent scheduling"],
        deliverables: ["Validated AI/ML models", "Performance validation reports", "Algorithm documentation & change protocol", "Deployed AI-enabled product"],
      },
      {
        slug: "cloud-devops",
        name: "Cloud & DevOps",
        tagline: "AWS, Azure, and GCP deployment with CI/CD pipelines and ongoing IT support.",
        overview: [
          "Connected medical and digital health products depend on reliable, secure cloud infrastructure. RMT designs and deploys HIPAA-aligned architectures on AWS, Azure, and GCP for telemetry, analytics, and software updates.",
          "We implement CI/CD pipelines with automated testing and IEC 62304-compliant change control, plus infrastructure-as-code for repeatable, auditable releases.",
          "Post-deployment, our team provides IT support and maintenance — monitoring, patching, incident response, and capacity planning — so your platform stays secure and available.",
        ],
        keyPoints: ["AWS / Azure / GCP deployment", "CI/CD pipeline implementation", "HIPAA-aligned cloud architecture", "IEC 62304 change control", "IT support & maintenance"],
        deliverables: ["Cloud architecture design", "Deployed infrastructure", "CI/CD pipeline configuration", "Operations & maintenance runbooks"],
      },
      {
        slug: "software-quality-assurance",
        name: "Software Quality Assurance (SQA)",
        tagline: "Cybersecurity, automation, unit, and integration testing across the full STLC.",
        overview: [
          "Independent software quality assurance ensures your product meets IEC 62304 and applicable quality system requirements before regulators and customers do.",
          "RMT's SQA services include cybersecurity testing, automation testing, unit testing, and integration testing within a structured Software Testing Lifecycle (STLC) — with traceable test plans, protocols, execution records, and summary reports.",
          "We offer embedded SQA within development teams and independent verification & validation (IV&V) for safety-critical software.",
        ],
        keyPoints: ["Cybersecurity testing", "Automation testing", "Unit testing", "Integration testing & STLC", "IEC 62304 compliance auditing", "IV&V capability"],
        deliverables: ["SQA & test plans", "Test protocols & execution records", "Cybersecurity test reports", "Software Test Summary Report"],
      },
    ],
    capabilities: ["IEC 62304 Compliant Development", "FDA SaMD Framework Compliance", "Cloud-Connected Device Platforms", "Machine Learning Model Validation", "Cybersecurity Risk Management", "Agile/Waterfall Regulated Development"],
    whyRMT: [
      { title: "Regulatory-Grade Code", desc: "All software developed with full traceability to regulatory requirements and standards." },
      { title: "AI Expertise", desc: "Validated AI/ML models for diagnostics, imaging analysis, and clinical decision support." },
      { title: "Full SDLC Support", desc: "From requirements through deployment, verification, and post-market monitoring." },
    ],
    keywords: "medical device software, AI machine learning healthcare, SaMD, IEC 62304, software as medical device",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    heroBg: "from-indigo-950/60 to-indigo-900/40",
  },
  {
    slug: "product-development",
    name: "Turnkey Regulatory Commissioning and Regulatory Approvals",
    shortName: "Turnkey Regulatory Commissioning & Approvals",
    tagline: "Turnkey regulatory commissioning and regulatory approvals from concept through commercialization.",
    description:
      "Comprehensive turnkey product development and regulatory consulting for medical devices and healthcare technologies — complete end-to-end product realization from concept through manufacturing transfer.",
    overview: [
      "At RMT, we provide comprehensive turnkey product development and regulatory consulting services for medical devices and healthcare technologies.",
      "We offer complete end-to-end product realization solutions, allowing clients to focus on business growth while we manage the technical and regulatory complexities of product development.",
      "From concept and feasibility through design, prototyping, verification, validation, regulatory submission, and manufacturing scale-up — we transform innovative ideas into successful commercial products.",
    ],
    subServices: [
      {
        slug: "concept-feasibility",
        name: "Concept & Feasibility",
        tagline: "Clinical need assessment, market analysis, and technical feasibility.",
        overview: [
          "Structured early-stage evaluation to confirm clinical need, market opportunity, and technical viability before major development investment.",
          "We define product requirements, assess technology options, and establish risk mitigation plans aligned with intended regulatory pathways.",
        ],
        keyPoints: ["Clinical need assessment", "Market & competitor analysis", "Product requirement definition", "Technical feasibility studies", "Risk analysis & technology selection"],
        deliverables: ["Feasibility report", "Product requirements document", "Risk management plan outline", "Development roadmap"],
      },
      {
        slug: "design-engineering",
        name: "Product Design & Engineering",
        tagline: "Mechanical, electronic, embedded, and software design with DFM optimization.",
        overview: [
          "Multidisciplinary engineering across mechanical CAD, PCB design, embedded systems, and software/mobile development.",
          "Design-for-manufacturability and cost optimization are integrated from the earliest design iterations.",
        ],
        keyPoints: ["Mechanical CAD development", "PCB & embedded systems", "Software & mobile apps", "DFM & cost optimization"],
        deliverables: ["Engineering drawings & CAD", "PCB layouts & BOMs", "Software architecture", "DFM review report"],
      },
      {
        slug: "prototyping-development",
        name: "Prototyping & Development",
        tagline: "Rapid prototypes through alpha/beta builds with HW/SW integration.",
        overview: [
          "Functional prototypes from rapid builds through alpha and beta stages, with iterative refinement based on test feedback.",
          "Hardware-software integration and 3D-printed models support early validation and stakeholder review.",
        ],
        keyPoints: ["Rapid prototyping", "Alpha & beta prototypes", "3D printing & models", "HW/SW integration", "Iterative refinement"],
        deliverables: ["Functional prototypes", "Integration test records", "Design iteration log", "Beta build documentation"],
      },
      {
        slug: "verification-validation",
        name: "Verification & Validation",
        tagline: "Design V&V, reliability testing, usability, and packaging validation.",
        overview: [
          "Comprehensive verification and validation against design inputs — functional, performance, reliability, environmental, and human factors testing.",
          "Packaging and sterilization validation support ensures transfer-ready products.",
        ],
        keyPoints: ["Design verification testing", "Performance & reliability testing", "Usability / HFE", "Packaging & sterilization validation"],
        deliverables: ["V&V protocols & reports", "Usability evaluation records", "Validation summary", "Traceability matrix"],
      },
      {
        slug: "design-transfer-manufacturing",
        name: "Design Transfer & Manufacturing Support",
        tagline: "Process development, BOM, work instructions, and pilot production.",
        overview: [
          "Structured design transfer from R&D to manufacturing with production documentation, assembly procedures, and test fixture development.",
          "Pilot production, supplier qualification, and scale-up planning prepare your product for commercial launch.",
        ],
        keyPoints: ["Manufacturing process development", "BOM & work instructions", "Test fixture development", "Pilot production & scale-up"],
        deliverables: ["DMR / production documentation", "Assembly & test procedures", "Pilot batch records", "Scale-up plan"],
      },
      {
        slug: "regulatory-consultancy",
        name: "Regulatory Consultancy",
        tagline: "ISO 13485, ISO 14971, IEC 62304/60601, technical files, and FDA/CE submissions.",
        overview: [
          "Full regulatory consultancy spanning QMS implementation, design control documentation, technical files, and submission support.",
          "Our experts assist organizations in achieving compliance while minimizing approval timelines.",
        ],
        keyPoints: ["ISO 13485 QMS", "ISO 14971 & IEC standards", "DHF / DMR / technical files", "FDA & CE submission support"],
        deliverables: ["QMS documentation", "Technical file / DHF", "Submission dossiers", "Gap assessment report"],
      },
    ],
    capabilities: [
      "Turnkey Product Development",
      "Regulatory Consultancy",
      "Mechanical & Electronic Design",
      "Software & Mobile Development",
      "V&V & Human Factors",
      "Design Transfer & Scale-Up",
    ],
    whyRMT: [
      { title: "Complete Turnkey Solutions", desc: "End-to-end development from concept through commercialization." },
      { title: "Medical Device Specialists", desc: "Dedicated teams across engineering, quality, and regulatory." },
      { title: "Regulatory Expertise", desc: "ISO, IEC, FDA, and CE pathways with structured documentation." },
      { title: "Flexible Engagement", desc: "Single workstream or full turnkey — scaled to your needs." },
    ],
    keywords: "product development medical device, turnkey development, regulatory consultancy, design transfer, ISO 13485, FDA CE submission",
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80",
    heroBg: "from-sky-950/60 to-blue-900/40",
  },
  {
    slug: "quality-testing",
    name: "Quality Department Services",
    shortName: "Quality Testing",
    tagline: "Hands-on testing, inspection, sign-off, and compliance support from R&D bench to production release.",
    description:
      "Quality department services across QA, production QC, software quality (SaMD/SiMD), and R&D quality control — ISO 13485-led with advanced lab infrastructure and cross-functional collaboration.",
    overview: [
      "Our Quality Department delivers hands-on testing, inspection, sign-off, and compliance support across all product lines — from R&D bench to production release.",
      "QD leads all quality activities with department collaboration across EMD, SD, BMD, PD, PRD, and Supply Chain — ensuring traceable, audit-ready quality at every stage.",
      "Services span QMS development and audit readiness, production inspection and QC lab testing, SaMD/SiMD software quality, and embedded R&D design control and V&V.",
    ],
    subServices: [
      {
        slug: "quality-assurance",
        name: "Quality Assurance (QA)",
        tagline: "QMS development, audit readiness, CAPA, and operational quality for medical device manufacturers.",
        overview: [
          "Leverage our proven quality expertise to build, strengthen, and maintain compliant quality systems. Having successfully established and maintained an ISO 13485-certified Quality Management System and passed regulatory audits, our team supports medical device manufacturers with QMS development, design & development support, audit readiness, CAPA management, document control, trainings, product release, and continuous improvement initiatives.",
        ],
        keyPoints: [
          "ISO 13485 QMS development & implementation",
          "Compliance support",
          "Documentation services",
          "Design & development support",
          "Complaint handling & investigation support",
          "Training & awareness programs",
          "Validation & qualification support",
          "Audit & inspection readiness",
          "CAPA & risk management",
        ],
        deliverables: [
          "ISO 13485-aligned QMS documentation",
          "Audit plans, checklists and reports",
          "CAPA records",
          "Quality trainings",
          "Quality metrics & data trending",
          "Design & risk management documentation",
          "Improvement recommendations",
        ],
      },
      {
        slug: "qc-production",
        name: "Quality Control — Production",
        tagline: "In-process inspection, QC lab services, and production release testing.",
        overview: [
          "In-process and final product inspection, QC lab services, and release activities for EMD and SD production lines and device batches.",
          "Includes electrical/mechanical testing, incoming inspection, catheter bench testing, stability studies, and SPC.",
        ],
        keyPoints: ["In-process & final inspection", "IEC 60601 electrical safety", "QC lab — microscopy, UV, catheter bench", "Stability & SPC"],
        deliverables: ["Inspection records", "Test reports (signed & stamped)", "Batch release documentation", "SPC charts"],
      },
      {
        slug: "sqa-samd-simd",
        name: "Software Quality Assurance",
        tagline: "IEC 62304 lifecycle, integration testing, cybersecurity, and SaMD dossiers.",
        overview: [
          "Quality oversight for device firmware, web/mobile applications, and Software as/in a Medical Device — spanning IEC 62304, ISO 13485 design controls, and cybersecurity.",
          "QD collaborates with SD on system testing, performance testing, traceability, and regulatory dossier preparation.",
        ],
        keyPoints: ["IEC 62304 lifecycle", "System & integration testing", "Cybersecurity & threat modeling", "RTM & SaMD dossier"],
        deliverables: ["Software V&V reports", "Requirements traceability matrix", "SaMD technical documentation", "Cybersecurity assessment"],
      },
      {
        slug: "qc-rd",
        name: "Quality Control — R&D",
        tagline: "Design control, V&V, active device testing, and interventional device QC.",
        overview: [
          "Quality oversight embedded in the product development lifecycle for active and non-active medical devices — from design verification through transfer to manufacturing.",
          "Covers design control §7.3, ISO 14971 risk management, IEC 60601 testing, catheter/stent QC, biocompatibility coordination, and equipment qualification.",
        ],
        keyPoints: ["Design control & DHF", "ISO 14971 risk management", "IEC 60601 & EMC testing", "Catheter & stent performance testing", "IQ/OQ/PQ qualification"],
        deliverables: ["V&V protocols & reports", "Risk management file support", "Design review records", "Qualification documentation"],
      },
    ],
    capabilities: [
      "ISO 13485 QMS & Audit Readiness",
      "Production QC & Lab Testing",
      "SaMD / SiMD Software Quality",
      "R&D Design Control & V&V",
      "IEC 60601 Electrical Safety",
      "Catheter & Stent Bench Testing",
    ],
    whyRMT: [
      { title: "ISO 13485 Expertise", desc: "Quality management across the full medical device lifecycle." },
      { title: "Broad Device Coverage", desc: "Active, non-active, SaMD, SiMD, and implantable programmes." },
      { title: "Advanced Lab Infrastructure", desc: "Leica microscopy, UV spectroscopy, and metrology capabilities." },
      { title: "Cross-Functional Integration", desc: "QD collaborates with EMD, SD, BMD, PD, PRD, and SC." },
    ],
    keywords: "quality department medical device, ISO 13485:2016, FDA, QMSR, MDSAP, quality management system, QMS, risk management, ISO 14971:2019, QA, QC production testing, SaMD software quality",
    heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80",
    heroBg: "from-teal-950/60 to-teal-900/40",
  },
  {
    slug: "automation-services",
    name: "Automation Services",
    shortName: "Automation",
    tagline: "Industrial automation for manufacturing, biomedical, and process-control applications.",
    description:
      "Advanced industrial automation — PLC programming, HMI & SCADA, motion control, industrial communication, and intelligent monitoring for reliable real-time performance.",
    overview: [
      "We provide advanced industrial automation solutions for manufacturing, biomedical, and process-control applications. Our expertise includes PLC programming, HMI & SCADA systems, motion control, industrial communication, and intelligent monitoring systems.",
      "Our solutions are designed to improve operational efficiency, precision, safety, and scalability while ensuring reliable real-time performance in industrial environments.",
    ],
    subServices: [
      {
        slug: "plc-programming-industrial-control",
        name: "PLC Programming & Industrial Control",
        tagline: "Fatek PLC, ladder logic, PID control, and industrial interlocking.",
        overview: [
          "Programmable logic controllers form the backbone of automated industrial and biomedical equipment. We develop robust control logic tailored to your process requirements.",
        ],
        keyPoints: [
          "Fatek PLC Programming",
          "Ladder Logic Development",
          "PID Control Systems",
          "Industrial Interlocking Logic",
        ],
        deliverables: ["PLC program files", "Control logic documentation", "I/O configuration", "Commissioning support"],
      },
      {
        slug: "hmi-scada-development",
        name: "HMI & SCADA Development",
        tagline: "Weintek HMI, SCADA monitoring, alarms, logging, and real-time visualization.",
        overview: [
          "Human-machine interfaces and SCADA systems provide operators with real-time visibility, control, and traceability across industrial processes.",
        ],
        keyPoints: [
          "Weintek HMI Development",
          "SCADA Monitoring Systems",
          "Alarm & Event Management",
          "Data Logging Systems",
          "Recipe Management",
          "Real-Time Visualization",
        ],
        deliverables: ["HMI interface projects", "SCADA configuration files", "Alarm & event logs", "Operator manuals"],
      },
      {
        slug: "motion-control-systems",
        name: "Motion Control Systems",
        tagline: "Servo, stepper, PID temperature, multi-axis, and conveyor automation.",
        overview: [
          "Precision motion control ensures accurate speed, position, and thermal regulation in automated machinery and process equipment.",
        ],
        keyPoints: [
          "Servo Motor Integration",
          "Stepper Motor Control",
          "PID Temperature Control",
          "Multi-Axis Motion Systems",
          "Conveyor Automation",
          "Speed & Position Control",
        ],
        deliverables: ["Motion control programs", "Tuning & calibration records", "Speed/position test data", "Integration documentation"],
      },
      {
        slug: "industrial-communication",
        name: "Industrial Communication",
        tagline: "Modbus, RS485, Ethernet/IP, IoT connectivity, and remote monitoring.",
        overview: [
          "Reliable industrial communication connects PLCs, drives, sensors, HMIs, and cloud systems into a cohesive, diagnosable architecture.",
        ],
        keyPoints: [
          "Modbus RTU/TCP",
          "RS485 Communication",
          "Ethernet/IP Integration",
          "IoT Connectivity",
          "Remote Monitoring Systems",
        ],
        deliverables: ["Network architecture diagrams", "Communication test reports", "Remote monitoring setup", "Diagnostic tools"],
      },
    ],
    capabilities: [
      "Process Automation",
      "Automated Production Systems",
      "Machine Sequencing",
      "Sensor-Based Control",
      "Industrial Monitoring",
      "Smart Control Systems",
      "Intelligent Temperature Control",
      "Automated Safety Logic",
      "Machine Diagnostics",
      "Predictive Monitoring",
      "Modbus RTU/TCP & Profibus",
      "PLC-to-HMI & PLC-to-VFD Integration",
      "Multi-Device Synchronization",
    ],
    whyRMT: [
      { title: "Real-Time Performance", desc: "Control systems engineered for stable, accurate industrial operation." },
      { title: "Full Stack Integration", desc: "PLC, HMI, motion, and communication developed as one system." },
      { title: "Biomedical & Industrial", desc: "Automation for manufacturing lines and biomedical process equipment." },
    ],
    keywords: "industrial automation, PLC programming, HMI SCADA, motion control, Modbus, Fatek PLC, Weintek HMI",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=80",
    heroBg: "from-slate-950/60 to-slate-900/40",
  },
  {
    slug: "design-fabrication",
    name: "Design & Fabrication",
    shortName: "Design & Fabrication",
    tagline: "Precision mechanical systems, thermal engineering, simulation, and rapid prototyping.",
    description:
      "Mechanical design, thermal engineering, ANSYS/COMSOL simulation, FDM & SLA 3D printing, and manufacturing support for industrial and biomedical platforms.",
    overview: [
      "We develop precision mechanical systems for industrial machinery, biomedical devices, and automated platforms. Our engineering process focuses on structural reliability, thermal performance, manufacturability, and rapid prototyping.",
      "Using advanced CAD tools, simulations, and high-performance 3D printing technologies, we transform concepts into functional engineering solutions.",
    ],
    subServices: [
      {
        slug: "mechanical-design",
        name: "Mechanical Design",
        tagline: "Machine, product, assembly, enclosure, and sheet metal design.",
        overview: [
          "Comprehensive mechanical design from concept through detailed CAD models ready for fabrication and assembly.",
        ],
        keyPoints: [
          "Machine Design",
          "Product Design",
          "Assembly Design",
          "Enclosure Design",
          "Sheet Metal Design",
          "Precision Component Design",
        ],
        deliverables: ["3D CAD models (SOLIDWORKS)", "2D manufacturing drawings", "Assembly documentation", "BOM preparation"],
      },
      {
        slug: "thermal-engineering",
        name: "Thermal Engineering",
        tagline: "Heater integration, heat transfer optimization, and thermal system development.",
        overview: [
          "Thermal engineering ensures stable temperature control for industrial heaters, biomedical devices, and precision heating modules.",
        ],
        keyPoints: [
          "Heater Integration",
          "Heat Transfer Optimization",
          "Thermal System Development",
        ],
        deliverables: ["Thermal system design", "Heater specification", "Thermal test data", "Integration drawings"],
      },
      {
        slug: "simulation-analysis",
        name: "Simulation & Analysis",
        tagline: "ANSYS structural, COMSOL multiphysics, stress, deformation, and vibration analysis.",
        overview: [
          "Simulation-driven design validates structural and thermal performance before physical prototyping, reducing risk and iteration cost.",
        ],
        keyPoints: [
          "ANSYS Structural Simulation",
          "COMSOL Multiphysics Analysis",
          "Stress & Deformation Analysis",
          "Vibration Analysis",
        ],
        deliverables: ["Simulation reports", "FEA/COMSOL model files", "Optimization recommendations", "Validation summary"],
      },
      {
        slug: "rapid-prototyping-3d-printing",
        name: "Rapid Prototyping & 3D Printing",
        tagline: "FDM and SLA prototyping for functional mechanical and biomedical components.",
        overview: [
          "Rapid prototyping accelerates design iteration using industrial FDM and high-resolution SLA 3D printing platforms.",
        ],
        keyPoints: [
          "Functional Prototype Development",
          "Mechanical Part Fabrication",
          "Biomedical Component Prototyping",
          "Rapid Product Iteration",
          "Precision Fit Testing",
          "FDM: Bambu Lab X1 Carbon, Creality K1 Max, Artillery Sidewinder X4 Pro",
          "SLA: Phrozen Mighty 8K",
        ],
        deliverables: ["3D printed prototypes", "Fit & function test records", "Material & process specs", "Iteration reports"],
      },
      {
        slug: "manufacturing-support",
        name: "Manufacturing Support",
        tagline: "Fabrication drawings, BOM, tolerance optimization, and prototype-to-production.",
        overview: [
          "Manufacturing support bridges engineering design and production with documentation and tolerance strategies aligned to your fabricator.",
        ],
        keyPoints: [
          "Fabrication Drawings",
          "BOM Preparation",
          "Tolerance Optimization",
          "Prototype-to-Production Support",
        ],
        deliverables: ["Manufacturing-ready drawings", "Complete BOM", "Tolerance stack analysis", "Production transfer package"],
      },
    ],
    capabilities: [
      "Precision Mechanical Systems",
      "Thermal System Integration",
      "Industrial Product Development",
      "Biomedical Mechanical Components",
      "High-Accuracy Prototype Manufacturing",
      "CAD Modeling",
      "Structural Optimization",
      "Thermal Optimization",
      "Manufacturing-Oriented Design",
      "FDM & SLA 3D Printing",
    ],
    whyRMT: [
      { title: "Simulation-Driven", desc: "ANSYS and COMSOL analysis before committing to tooling." },
      { title: "Advanced 3D Printing", desc: "Industrial FDM and 8K SLA for fast, accurate prototypes." },
      { title: "Biomedical & Industrial", desc: "Mechanical systems for machines, devices, and automated platforms." },
    ],
    keywords: "mechanical design, thermal engineering, ANSYS COMSOL, 3D printing FDM SLA, rapid prototyping, SOLIDWORKS",
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80",
    heroBg: "from-blue-950/60 to-blue-900/40",
  },
  {
    slug: "engineering-product-development",
    name: "Engineering & Product Development",
    shortName: "Engineering",
    tagline: "End-to-end engineering — automation, mechanical design, embedded systems, and rapid product development.",
    description:
      "Cross-disciplinary engineering from concept to production: automation, mechanical design, embedded control, rapid prototyping, and complete documentation deliverables.",
    overview: [
      "We provide end-to-end engineering services covering automation, mechanical design, embedded systems, and rapid product development. Our services are structured to support concept-to-production development with high precision and industrial reliability.",
      "A structured engineering workflow focused on innovation, precision, reliability, and scalable industrial solutions guides every project from requirement analysis through deployment and support.",
    ],
    subServices: [
      {
        slug: "biomedical-systems-engineering",
        name: "Biomedical Systems Engineering",
        tagline: "Biomedical automation, precision thermal control, and prototype equipment.",
        overview: [
          "Specialized engineering for biomedical automation, controlled thermal systems, syringe heating, and prototype biomedical equipment development.",
        ],
        keyPoints: [
          "Biomedical Automation",
          "Precision Temperature Control",
          "Medical Device Prototyping",
          "Controlled Thermal Systems",
          "Syringe Heating Systems",
          "Biomedical Process Control",
          "Precision Thermal Regulation",
          "Prototype Biomedical Equipment Development",
        ],
        deliverables: ["Biomedical prototype systems", "Thermal control modules", "Process control documentation", "Test & validation records"],
      },
      {
        slug: "research-development-engineering",
        name: "Research & Development Engineering",
        tagline: "Prototype engineering, experimental systems, and custom R&D projects.",
        overview: [
          "R&D engineering for experimental systems, rapid development solutions, and advanced technology integration.",
        ],
        keyPoints: [
          "Prototype Engineering",
          "Experimental System Design",
          "Rapid Development Solutions",
          "Custom Engineering Projects",
          "Advanced Technology Integration",
        ],
        deliverables: ["Experimental prototypes", "R&D test reports", "Custom system designs", "Technology integration plans"],
      },
      {
        slug: "industrial-safety-engineering",
        name: "Industrial Safety Engineering",
        tagline: "E-stops, interlocks, alarms, safety logic, and fault detection.",
        overview: [
          "Industrial safety systems protect operators and equipment through emergency stop logic, interlocks, alarms, and fault detection.",
        ],
        keyPoints: [
          "Emergency Stop Systems",
          "Protection Interlocks",
          "Alarm Systems",
          "Industrial Safety Logic",
          "Fault Detection Systems",
        ],
        deliverables: ["Safety logic programs", "Interlock documentation", "Alarm configuration", "Risk assessment support"],
      },
    ],
    capabilities: [
      "End-to-End Product Development",
      "Cross-Disciplinary Engineering",
      "Industrial-Grade Design Standards",
      "Rapid FDM & SLA Prototyping",
      "Simulation-Driven Design",
      "Modular & Scalable Architecture",
      "Industrial Communication & Networking",
    ],
    whyRMT: [
      { title: "Concept to Production", desc: "End-to-end product development from concept through prototype to production." },
      { title: "Cross-Disciplinary", desc: "Automation, mechanical, and embedded engineering under one team." },
      { title: "Complete Deliverables", desc: "CAD, electrical, software, and physical outputs with full documentation." },
    ],
    keywords: "engineering product development, automation mechanical embedded, industrial design, biomedical engineering, prototype to production",
    heroImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
    heroBg: "from-indigo-950/60 to-indigo-900/40",
  },
  {
    slug: "bmd",
    name: "Biomaterials & Drug Innovation",
    shortName: "BMD",
    tagline: "Turning Materials Science Into Real-World Impact — For MedTech, Pharma & Beyond",
    description: "Testing, Validation, Scaffolds, Coatings & Custom Solutions — end-to-end biomaterials, polymer, pharmaceutical, and advanced testing services.",
    overview: [
      "At the intersection of biomaterials innovation, polymer engineering, pharmaceutical materials development, and advanced testing & validation, RMT delivers end-to-end research, development, and industrialization services.",
      "Our global partners include life science companies, biotech startups, medical device manufacturers, pharmaceutical innovators, and academic research institutions seeking cutting-edge solutions that translate efficiently from laboratory discovery to commercial deployment.",
      "By combining interdisciplinary expertise, advanced instrumentation, and scalable R&D methodologies, we help organizations de-risk innovation, validate and optimize new materials, improve product performance, accelerate regulatory pathways, and scale technologies from concept to manufacturing.",
    ],
    subServices: [
      {
        slug: "analytical-testing",
        name: "Analytical Testing",
        tagline: "Drug loading, release kinetics, stability, and chemical safety analysis.",
        overview: [
          "Our laboratories provide ISO-aligned, regulatory-ready testing services supporting biomaterials, polymers, pharmaceuticals, and medical devices.",
          "Analytical testing covers drug loading and quantification, drug release kinetics, degradation profile and rate analysis, visual and microscopic inspection, stability testing (ICH Q1A(R2)), shelf life studies (accelerated and real-time), residual solvent analysis, and extractables & leachables assessment.",
          "Our testing services generate trusted, traceable, and regulatory-compliant data supporting product validation, regulatory submissions, and commercialization.",
        ],
        keyPoints: [
          "Drug Loading & Quantification",
          "Drug Release Kinetics",
          "Degradation Profile & Rate Analysis",
          "Visual & Microscopic Inspection",
          "Stability Testing (ICH Q1A(R2))",
          "Shelf Life Studies (Accelerated & Real-Time)",
          "Residual Solvent Analysis",
          "Extractables & Leachables Assessment",
        ],
        deliverables: ["Analytical test report", "Stability study report", "E&L assessment report", "Validated method documentation"],
      },
      {
        slug: "material-characterization",
        name: "Advanced Material Characterization",
        tagline: "SEM, spectroscopy, thermal analysis, and particle characterisation.",
        overview: [
          "Advanced material characterization confirms composition, morphology, thermal behaviour, and surface properties of biomaterials and polymers.",
          "Capabilities include Scanning Electron Microscopy (SEM) for surface morphology and microstructure; FTIR and Raman spectroscopy for chemical composition; DSC and TGA for thermal transitions and stability; contact angle measurement for wettability and surface energy; laser diffraction and sieve analysis for particle size; and surface morphology and porosity analysis.",
        ],
        keyPoints: [
          "Scanning Electron Microscopy (SEM)",
          "Fourier Transform Infrared Spectroscopy (FTIR)",
          "Raman Spectroscopy",
          "Differential Scanning Calorimetry (DSC)",
          "Thermogravimetric Analysis (TGA)",
          "Contact Angle Measurement",
          "Laser Diffraction Particle Size Analysis",
          "Sieve Particle Size Distribution",
          "Surface Morphology & Porosity Analysis",
        ],
        deliverables: ["Characterisation report", "Raw instrument data", "Comparative batch analysis", "Regulatory summary tables"],
      },
      {
        slug: "mechanical-physical-testing",
        name: "Mechanical & Physical Testing",
        tagline: "Tensile, compression, flexural, fatigue, and device performance evaluation.",
        overview: [
          "Mechanical and physical testing evaluates whether biomaterials and devices meet strength, stiffness, durability, and functional performance requirements.",
          "We perform tensile strength testing, Young's modulus determination, elongation at break, compression testing, flexural strength analysis, material fatigue testing, and device performance evaluation under defined conditions.",
        ],
        keyPoints: [
          "Tensile Strength Testing",
          "Young's Modulus Determination",
          "Elongation at Break",
          "Compression Testing",
          "Flexural Strength Analysis",
          "Material Fatigue Testing",
          "Device Performance Evaluation",
        ],
        deliverables: ["Mechanical test report", "Stress-strain curves", "Statistical summary", "Equipment calibration records"],
      },
      {
        slug: "biocompatibility-testing",
        name: "Biocompatibility Testing",
        tagline: "In vitro biocompatibility aligned with international safety standards.",
        overview: [
          "Testing aligned with international biocompatibility standards to ensure safety of biomaterials and medical devices.",
          "Our in vitro suite includes cytotoxicity (NRU method), skin sensitization (GPMT method), intracutaneous reactivity, acute systemic toxicity, material mediated pyrogen, hemocompatibility studies, and cell adhesion and proliferation testing.",
        ],
        keyPoints: [
          "In Vitro Cytotoxicity (NRU Method)",
          "Skin Sensitization (GPMT Method)",
          "Intracutaneous Reactivity Test",
          "Acute Systemic Toxicity Test",
          "Material Mediated Pyrogen Test",
          "Hemocompatibility Studies",
          "Cell Adhesion & Proliferation Testing",
        ],
        deliverables: ["Biocompatibility test report", "ISO 10993 test matrix", "Biological evaluation support", "Regulatory summary for BER"],
      },
      {
        slug: "biomaterials-tissue-engineering",
        name: "Biomaterials & Tissue Engineering",
        tagline: "Scaffolds, hydrogels, and regenerative medicine biomaterials.",
        overview: [
          "RMT integrates materials science, polymer chemistry, pharmaceutical engineering, and device development to design next-generation healthcare technologies.",
          "We develop electrospun nanofiber scaffolds for tissue engineering, polymer hydrogels and composite scaffolds, bioresorbable polymer systems, drug-eluting biomaterials, custom 3D biomaterial structures, and functional biomaterial design for regenerative medicine.",
        ],
        keyPoints: [
          "Electrospun Nanofiber Scaffolds for tissue engineering",
          "Polymer Hydrogels & Composite Scaffolds",
          "Bioresorbable Polymer Systems",
          "Drug-Eluting Biomaterials",
          "Custom 3D Biomaterial Structures",
          "Functional biomaterial design for regenerative medicine",
        ],
        deliverables: ["Biomaterial prototype", "Characterisation data package", "Process development report", "Regulatory strategy input"],
      },
      {
        slug: "drug-delivery-pharmaceutical-development",
        name: "Drug Delivery & Pharmaceutical Development",
        tagline: "Controlled release, polymer encapsulation, OTC, and plant-based pharmaceutical products.",
        overview: [
          "Drug delivery and pharmaceutical development spans controlled-release systems, polymer-based drug encapsulation, microsphere and nanoparticle systems, implantable drug delivery platforms, long-acting injectable formulations, OTC pharmaceutical formulation development, and plant-based pharmaceutical product development.",
        ],
        keyPoints: [
          "Controlled Release Drug Delivery Systems",
          "Polymer-based Drug Encapsulation",
          "Microsphere & Nanoparticle Systems",
          "Implantable Drug Delivery Platforms",
          "Long-acting injectable formulations",
          "OTC Pharmaceutical Formulation Development",
          "Plant-Based Pharmaceutical Product Development",
        ],
        deliverables: ["Drug delivery prototype", "In vitro release method & data", "Formulation development report", "Regulatory strategy document"],
      },
      {
        slug: "coatings-surface-engineering",
        name: "Coatings & Surface Engineering",
        tagline: "Drug-eluting, antimicrobial, and functional surface modifications.",
        overview: [
          "Surface engineering transforms device performance, biocompatibility, and therapeutic capability through functional polymer coatings, drug-eluting coatings, antimicrobial surface engineering, hydrophobic and hydrophilic modifications, and surface energy optimization.",
        ],
        keyPoints: [
          "Functional Polymer Coatings for Medical Devices",
          "Drug-Eluting Coatings",
          "Antimicrobial Surface Engineering",
          "Hydrophobic / Hydrophilic Surface Modifications",
          "Surface Energy Optimization",
        ],
        deliverables: ["Coated device samples", "Coating process specification", "Surface characterisation report", "Release profile data"],
      },
      {
        slug: "device-prototyping-fabrication",
        name: "Medical Device Prototyping & Fabrication",
        tagline: "Silicone molding, vacuum casting, and precision medical prototypes.",
        overview: [
          "Silicone molding and fabrication: custom silicone molds, soft-walled biomedical devices, flexible polymer device components, and precision prototyping for medical applications.",
          "Vacuum casting: resin-based device components, functional prototypes, and small-batch manufacturing for design verification and pre-production needs.",
        ],
        keyPoints: [
          "Custom silicone molds",
          "Soft-walled biomedical devices",
          "Flexible polymer device components",
          "Resin-based device components",
          "Functional prototypes",
          "Small-batch manufacturing",
        ],
        deliverables: ["Prototype devices", "Mold design documentation", "Dimensional inspection report", "Material & process records"],
      },
      {
        slug: "advanced-manufacturing-support",
        name: "Advanced Manufacturing Support",
        tagline: "Process optimisation, technology transfer, and industrial scale-up.",
        overview: [
          "Moving from prototype to commercial manufacturing requires systematic process optimisation, technology transfer, and scale-up for industrial manufacturing.",
        ],
        keyPoints: ["Process optimization", "Technology transfer", "Scale-up for industrial manufacturing"],
        deliverables: ["Tech transfer package", "Scale-up study report", "Process FMEA", "Training documentation"],
      },
      {
        slug: "laboratory-setup-compliance",
        name: "Laboratory Setup & Regulatory Compliance Consulting",
        tagline: "Design, equip, and qualify testing laboratories for regulatory and industrial use.",
        overview: [
          "RMT supports organizations in building and operationalizing advanced testing laboratories tailored to their product scope and regulatory requirements.",
          "Laboratory setup services include laboratory design based on testing scope, equipment selection and procurement guidance, laboratory layout and workflow design, and method development and validation.",
          "Regulatory documentation and compliance support covers ISO-aligned quality management system development, laboratory SOP preparation, method validation documentation, equipment qualification protocols, and regulatory documentation for audits.",
          "Accreditation and operational readiness includes ISO 13485 alignment for medical device testing labs, staff training and technical onboarding, and regulatory inspection readiness.",
          "This service allows organizations to rapidly establish compliant testing laboratories ready for regulatory and industrial use.",
        ],
        keyPoints: [
          "Laboratory design based on testing scope",
          "Equipment selection and procurement guidance",
          "Laboratory layout and workflow design",
          "Method development and validation",
          "ISO-aligned Quality Management System development",
          "Laboratory SOP preparation",
          "ISO 13485 alignment for medical device testing labs",
          "Regulatory inspection readiness",
        ],
        deliverables: ["Lab design specification", "Equipment qualification protocols", "SOP & method validation package", "Accreditation readiness checklist"],
      },
    ],
    capabilities: [
      "ISO-Aligned Testing & Validation",
      "Biomaterials & Tissue Engineering",
      "Drug Delivery & Pharmaceutical Development",
      "Coatings & Surface Engineering",
      "Device Prototyping & Fabrication",
      "Laboratory Setup & Compliance",
    ],
    whyRMT: [
      { title: "Global Compliance", desc: "Testing and development aligned with ISO, ICH, and GMP standards." },
      { title: "Integrated Expertise", desc: "Combining biomaterials science, polymer engineering, pharmaceutical development, and device engineering." },
      { title: "Innovation-Driven", desc: "Focused on next-generation materials and technologies for healthcare applications." },
      { title: "Scalable Development", desc: "Supporting the entire lifecycle from concept to commercialization." },
      { title: "Collaborative Partnerships", desc: "Flexible engagement models including contract research, technology transfer, and co-development." },
    ],
    keywords: "biomaterials, drug delivery, BMD laboratory testing, pharmaceutical development, polymer R&D, tissue engineering, coatings, ISO 10993",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80",
    heroBg: "from-teal-950/60 to-teal-900/40",
  },
  {
    slug: "mbl-laboratory",
    name: "Microbiology Laboratory Testing",
    shortName: "Microbiology Lab",
    tagline: "Microbiology testing for product quality, safety, and GMP compliance / ISO 13485 alignment.",
    description:
      "Microbiology laboratory testing — sterility testing, bacterial endotoxin testing (BET), microbial limit testing, and specific pathogen testing for pharmaceutical and medical device products.",
    overview: [
      "The Microbiology Department is committed to ensuring product quality, safety, and compliance with GMP and ISO 13485 standards through reliable microbiological testing and contamination control practices.",
      "Our microbiology laboratory supports pharmaceutical, medical device, and biological products with documented sterility, endotoxin, microbial limit, and specified pathogen testing programmes.",
      "Testing is performed under controlled conditions with traceable methods, qualified equipment, and regulatory-ready reporting for batch release and submission support.",
    ],
    subServices: [
      {
        slug: "sterility-testing",
        name: "Sterility Testing",
        tagline: "Membrane filtration, direct inoculation, flush, immersion, and rapid sterility methods.",
        overview: [
          "Sterility testing confirms that pharmaceutical, medical, and biological products are free from viable microorganisms under defined incubation conditions.",
          "We offer membrane filtration sterility testing, direct inoculation sterility testing, product flush method, immersion sterility method, and rapid sterility testing using advanced technologies such as ATP bioluminescence or PCR.",
        ],
        keyPoints: [
          "Membrane Filtration Sterility Test",
          "Direct Inoculation Sterility Test",
          "Product Flush Method",
          "Immersion Sterility Method",
          "Rapid Sterility Testing (ATP bioluminescence / PCR)",
        ],
        deliverables: ["Sterility test protocol & raw data", "Certificate of testing", "Incubation & environmental records", "OOS investigation support"],
      },
      {
        slug: "bacterial-endotoxin-testing",
        name: "Bacterial Endotoxin Testing (BET)",
        tagline: "Gel clot, turbidimetric, chromogenic, and recombinant Factor C endotoxin methods.",
        overview: [
          "Bacterial endotoxin testing detects pyrogenic lipopolysaccharides in products and raw materials, supporting patient safety and pharmacopeial compliance.",
          "Our BET capabilities include gel clot BET method, endpoint turbidimetric BET, kinetic turbidimetric BET, endpoint chromogenic BET, kinetic chromogenic BET, and recombinant Factor C (rFC) BET without horseshoe crab-derived LAL.",
        ],
        keyPoints: [
          "Gel Clot BET Method",
          "Endpoint Turbidimetric BET",
          "Kinetic Turbidimetric BET",
          "Endpoint Chromogenic BET",
          "Kinetic Chromogenic BET",
          "Recombinant Factor C (rFC) BET",
        ],
        deliverables: ["BET test protocol & results", "Method validation documentation", "Sample handling records", "Regulatory summary tables"],
      },
      {
        slug: "microbial-limit-testing",
        name: "Microbial Limit Test",
        tagline: "Microbial enumeration and limit testing for non-sterile and release testing programmes.",
        overview: [
          "Microbial limit testing evaluates the bioburden of pharmaceutical, medical, and biological products against acceptance criteria for non-sterile products and in-process controls.",
          "Our microbiology laboratory performs microbial limit testing using membrane filtration, direct inoculation, product flush, and immersion-based recovery methods, with supporting endotoxin and rapid detection technologies where applicable.",
        ],
        keyPoints: [
          "Membrane Filtration Method",
          "Direct Inoculation Method",
          "Product Flush Method",
          "Immersion Method",
          "Rapid Microbial Detection",
          "Gel Clot & Turbidimetric BET support",
          "Chromogenic & rFC BET support",
        ],
        deliverables: ["Microbial limit test report", "Trend analysis data", "Method qualification records", "Batch release support documentation"],
      },
      {
        slug: "specific-pathogen-testing",
        name: "Specific Pathogen Testing",
        tagline: "Detection of specified harmful microorganisms for product safety and compliance.",
        overview: [
          "A microbiological test performed to detect the presence or absence of specified harmful microorganisms in pharmaceutical, medical, or biological products to ensure product safety and compliance.",
          "Our specific pathogen panel includes testing for indicator and objectionable organisms required by pharmacopeial and regulatory expectations.",
        ],
        keyPoints: [
          "Escherichia coli Test",
          "Salmonella Test",
          "Staphylococcus aureus Test",
          "Pseudomonas aeruginosa Test",
          "Candida albicans Test",
          "Clostridium Test",
          "Bile-Tolerant Gram-Negative Bacteria (BTGN) Test",
          "Enterobacteria Test",
        ],
        deliverables: ["Pathogen test protocol & results", "Presence/absence data package", "Regulatory compliance summary", "Investigation support"],
      },
    ],
    capabilities: [
      "Sterility Testing (USP / ISO)",
      "Bacterial Endotoxin Testing (BET)",
      "Microbial Limit Testing",
      "Specific Pathogen Testing",
      "GMP Compliance & ISO 13485 Aligned Lab",
      "Rapid Microbial Detection",
    ],
    whyRMT: [
      { title: "GMP Compliance & ISO 13485 Alignment", desc: "Microbiology testing and contamination control aligned with GMP compliance and ISO 13485 standards." },
      { title: "Broad Method Portfolio", desc: "Classical and rapid sterility, multiple BET platforms, and specified pathogen panels." },
      { title: "Regulatory-Ready Data", desc: "Traceable protocols, raw data, and reports supporting batch release and submissions." },
    ],
    keywords: "microbiology laboratory testing, microbiology testing, sterility test, bacterial endotoxin BET, microbial limit test, specific pathogen, GMP ISO 13485",
    heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80",
    heroBg: "from-cyan-950/60 to-cyan-900/40",
  },
  {
    slug: "contract-manufacturing",
    name: "Medical Device Manufacturing",
    shortName: "Manufacturing",
    tagline: "From cleanroom to commercialization — medical devices engineered to save lives, at scale.",
    description:
      "End-to-end development and manufacturing of high-performance medical devices — ISO 13485 quality systems, DRAP-registered operations, ISO-classified cleanrooms, and full lifecycle support from concept to market.",
    overview: [
      "At Revive Medical Technologies, we are more than a manufacturer — we are a strategic partner for medical innovators. We specialize in end-to-end development and manufacturing of high-performance medical devices engineered to meet the world's most rigorous international standards.",
      "From concept validation and pilot production through large-scale commercialization and continuous process optimization, our multidisciplinary teams deliver solutions that are reliable, scalable, and built for the real world of healthcare.",
      "Whether you are developing a breakthrough technology, scaling an existing product, or building manufacturing operations from the ground up, we bring the expertise, infrastructure, and commitment to quality your vision deserves.",
    ],
    subServices: [
      {
        slug: "quality-compliance",
        name: "Quality & Compliance",
        tagline: "ISO 13485, DRAP registration, and built-in quality at every stage.",
        overview: [
          "Our quality systems are the foundation of everything we build. Every device leaving our facility is backed by documented, validated, and auditable processes.",
          "Our Quality Management System is fully developed and maintained in accordance with ISO 13485 — ensuring traceability, risk control, and consistency from raw material to finished product.",
          "We operate as a DRAP-registered manufacturing facility in full alignment with applicable regulatory requirements and medical device compliance frameworks.",
        ],
        keyPoints: [
          "ISO 13485 Quality Management System",
          "DRAP-registered manufacturing facility",
          "Process validation and advanced in-line control",
          "Comprehensive documentation and lot traceability",
          "Risk-based quality management (ISO 14971 framework)",
          "Continuous process improvement and CAPA systems",
        ],
        deliverables: ["QMS documentation", "Process validation protocols", "Batch traceability records", "CAPA & audit-ready records"],
      },
      {
        slug: "manufacturing-capabilities",
        name: "Manufacturing Capabilities",
        tagline: "Class I–III devices, active systems, contract manufacturing, and pilot-to-scale production.",
        overview: [
          "From low-risk Class I devices to life-sustaining Class III technologies, we maintain the infrastructure, expertise, and regulatory alignment to manufacture the full spectrum of medical devices.",
          "Our capabilities span high-volume Class I production, enhanced validation for Class II devices, stringent controls for Class III technologies, active medical device assembly and testing, flexible OEM and white-label contract manufacturing, and pilot-to-commercial scale-up.",
        ],
        keyPoints: [
          "Class I, II, and III device manufacturing",
          "Active medical device assembly & functional testing",
          "Contract & OEM manufacturing",
          "Pilot production & commercial scale-up",
          "Interventional catheters, microspheres, inflation devices",
        ],
        deliverables: ["Manufactured devices", "Device History Records (DHR)", "Batch release documentation", "Scale-up & transfer reports"],
      },
      {
        slug: "cleanroom-infrastructure",
        name: "Cleanroom Infrastructure",
        tagline: "ISO 5, 7, and 8 controlled environments with full environmental control.",
        overview: [
          "Our controlled manufacturing environments are purpose-built for sensitive, high-precision medical device production — delivering the contamination control and environmental integrity your product demands.",
          "ISO 5 suites support the most demanding production processes. ISO 7 environments balance accessibility with rigor for precision assembly. ISO 8 areas support material handling and workflow transitions under control.",
          "We also provide cleanroom validation per ISO 14644 — IQ/OQ/PQ protocols, particle and airflow testing, microbial monitoring, and full validation documentation.",
        ],
        keyPoints: [
          "ISO 5, ISO 7, and ISO 8 cleanrooms",
          "Real-time particle and environmental monitoring",
          "Gowning, cascade pressure, and segregation controls",
          "ISO 14644 cleanroom validation (IQ/OQ/PQ)",
          "Microbial environmental monitoring programs",
        ],
        deliverables: ["Cleanroom qualification reports", "Environmental monitoring data", "Validation documentation package", "Contamination control SOPs"],
      },
      {
        slug: "development-journey",
        name: "Development Journey",
        tagline: "From your idea to the patient's bedside — design transfer through scale-up.",
        overview: [
          "The gap between a medical device concept and a commercial product is wide. Our collaborative development framework transforms your design into a validated, manufacturable, market-ready device.",
          "We support design transfer and feasibility, process development and optimization, and pilot production through commercial scale-up — bridging technical, regulatory, and operational hurdles.",
        ],
        keyPoints: [
          "Design transfer & manufacturing feasibility",
          "Design-for-manufacture (DFM) review",
          "Process FMEA and risk-based control planning",
          "Equipment qualification (IQ/OQ/PQ)",
          "Pilot batches & scale-up planning",
        ],
        deliverables: ["Design transfer package", "Process validation protocols", "Pilot batch records", "Scale-up & launch support plan"],
      },
      {
        slug: "testing-validation",
        name: "Testing & Validation",
        tagline: "Bench testing, stability, biocompatibility, and lifecycle optimization.",
        overview: [
          "Every product we manufacture undergoes rigorous evaluation across its development lifecycle. We support the complete validation continuum — from design verification through commercial release testing.",
          "Services include functional bench testing, accelerated and real-time shelf-life studies, ISO 10993 biocompatibility coordination, and continuous product and process improvement.",
        ],
        keyPoints: [
          "Bench & performance testing",
          "Shelf-life & stability evaluation",
          "ISO 10993 biocompatibility support",
          "Product improvement & process optimization",
        ],
        deliverables: ["Test reports & acceptance criteria", "Stability study data", "Biocompatibility test matrix", "Optimization recommendations"],
      },
      {
        slug: "capacity-building",
        name: "Capacity Building",
        tagline: "Build your manufacturing capability — lines, processes, training, and validation-ready systems.",
        overview: [
          "We help organizations establish or expand medical device production operations — not only manufacturing your products, but building the capability to manufacture at scale.",
          "Programs cover manufacturing line development, process engineering, lean implementation, workflow optimization, technical training, and validation-ready production system setup.",
        ],
        keyPoints: [
          "Manufacturing line & facility planning",
          "Process engineering & equipment integration",
          "Lean manufacturing & workflow optimization",
          "Technical training & operational guidance",
          "Validation-ready production setup",
        ],
        deliverables: ["Facility & line design plans", "Process engineering documentation", "Training materials", "Validation-ready system package"],
      },
    ],
    capabilities: [
      "ISO 13485 Quality Management",
      "DRAP-Registered Facility",
      "ISO 5 / 7 / 8 Cleanrooms",
      "Class I–III Device Manufacturing",
      "Contract & OEM Manufacturing",
      "Design Transfer & Scale-Up",
      "Bench & Stability Testing",
      "Cleanroom Validation (ISO 14644)",
    ],
    whyRMT: [
      { title: "Deep Technical Expertise", desc: "Medical device engineering, controlled manufacturing, and regulatory science under one roof." },
      { title: "Truly Scalable", desc: "From 50-unit pilot batches to commercial-volume production." },
      { title: "Regulation-Ready", desc: "Compliance, traceability, and audit-readiness built into every workflow." },
      { title: "Innovation Partnership", desc: "We collaborate from first concept through market launch." },
      { title: "Advanced Infrastructure", desc: "ISO-classified cleanrooms and specialized manufacturing lines." },
    ],
    keywords: "medical device manufacturing, ISO 13485, DRAP, cleanroom ISO 14644, contract manufacturing, Class I II III devices, catheter manufacturing",
    heroImage: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=900&q=80",
    heroBg: "from-orange-950/60 to-orange-900/40",
  },
];
