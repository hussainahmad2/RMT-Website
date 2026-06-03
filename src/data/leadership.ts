const BASE = import.meta.env.BASE_URL;

const teamImage = (unit: string, file: string) => `${BASE}team/${unit}/${file}`;

export type LeadershipMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  detail?: string;
  /** Tight crop — use only for Amir; all others use default or object-center */
  imageClassName?: string;
};

/** C-level executive team */
export const C_LEVEL_LEADERSHIP: LeadershipMember[] = [
  {
    name: "Dr. Murtaza Najabat Ali",
    role: "Chief Executive Officer",
    image: teamImage("c-level", "ceo.webp"),
    bio: "Founder and CEO of RMT Medical Technologies, guiding the company's mission to deliver end-to-end medical device and healthtech solutions worldwide.",
    detail:
      "With a strong background in biomaterials, regulatory strategy, and R&D, he has led 200+ projects across regulatory compliance, product development, and contract manufacturing for clients in North America, Europe, the Middle East, and South Asia.",
  },
  {
    name: "Ali Asghar",
    role: "Chief Financial Officer",
    image: teamImage("c-level", "ali.webp"),
    bio: "Leads financial planning, reporting, and governance across RMT's global offices and service lines.",
    detail:
      "Focuses on sustainable growth, operational efficiency, and transparent financial stewardship to support long-term client partnerships and international expansion.",
  },
  {
    name: "Ammad Ahmed",
    role: "Chief Product Officer",
    image: teamImage("c-level", "ammad.webp"),
    bio: "Owns product strategy from early concept through design freeze, validation, and commercial readiness.",
    detail:
      "Works closely with engineering, regulatory, and manufacturing teams to align device roadmaps with ISO 13485 design controls and market requirements.",
  },
  {
    name: "Muhammad Hafeez",
    role: "Chief Growth Officer",
    image: teamImage("c-level", "hafeez.webp"),
    bio: "Drives business development, strategic partnerships, and market expansion in medical devices and digital health.",
    detail:
      "Builds relationships with hospitals, OEMs, startups, and investors to scale RMT's presence across key healthcare and med-tech markets.",
  },
  {
    name: "Ibraheem Raza",
    role: "Chief Technology Officer",
    image: teamImage("c-level", "ibrahim.webp"),
    bio: "Heads technology strategy across software, AI, cloud platforms, and connected medical systems.",
    detail:
      "Oversees IEC 62304-compliant development, cybersecurity, and integration of SaMD and IoT solutions into regulated product portfolios.",
  },
];

/** R&D Wing — Microbiology Laboratory */
export const RD_WING_MICROBIOLOGY_LABORATORY: LeadershipMember[] = [
  {
    name: "Hamza",
    role: "Microbiology Laboratory Lead",
    image: teamImage("rd-wing/microbiology-laboratory", "hamza.jpg"),
    imageClassName: "object-cover object-center",
    bio: "Leads microbiology laboratory operations supporting sterility, microbial limit, and pathogen testing for RMT R&D programmes.",
    detail:
      "Manages lab workflows, method validation, and quality documentation aligned with GMP and ISO 13485 laboratory requirements.",
  },
  {
    name: "Syed Ali Hassan",
    role: "Assistant, Microbiology",
    image: teamImage("rd-wing/microbiology-laboratory", "ali.jpg"),
    imageClassName: "object-cover object-[center_28%]",
    bio: "Supports microbiology laboratory testing, sample handling, and documentation for sterility and microbial analysis programmes.",
    detail:
      "Assists with culture preparation, environmental monitoring, and QC records across RMT's microbiology R&D laboratory.",
  },
];

/** R&D Wing — Electromechanical Department */
export const RD_WING_ELECTROMECHANICAL: LeadershipMember[] = [
  {
    name: "Awais Cheema",
    role: "Mechanical Engineer",
    image: teamImage("rd-wing/electromechanical-department", "awais.webp"),
    bio: "Supports mechanical design, prototyping, and electromechanical integration for medical device R&D projects.",
    detail:
      "Works on CAD modelling, design validation, and hardware development alongside RMT's product and manufacturing teams.",
  },
  {
    name: "Raheel Abid",
    role: "PCB Lead",
    image: teamImage("rd-wing/electromechanical-department", "raheel.webp"),
    bio: "Leads printed circuit board design, layout, and electronics development for regulated medical devices.",
    detail:
      "Delivers PCB architecture, component selection, and design-for-manufacturing support across RMT's electromechanical programmes.",
  },
];

/** R&D Wing — Biomaterials Department */
export const RD_WING_BIOMATERIALS: LeadershipMember[] = [
  {
    name: "Fatima Zahra",
    role: "General Manager, Biomaterials & Drug Discovery",
    image: teamImage("rd-wing/biomaterials-department", "fatima.webp"),
    bio: "Oversees biomaterials research, drug discovery programmes, and laboratory operations at RMT.",
    detail:
      "Leads formulation development, biocompatibility studies, and cross-functional collaboration between R&D and regulatory teams.",
  },
  {
    name: "Waleed Imtiaz",
    role: "Deputy Director, Biomaterials",
    image: teamImage("rd-wing/biomaterials-department", "waleed.webp"),
    bio: "Supports biomaterials R&D strategy, project delivery, and technical oversight across drug discovery and materials programmes.",
    detail:
      "Works with laboratory and engineering teams on biomaterial development, testing workflows, and progression from research to product readiness.",
  },
];

/** Software Department */
export const SOFTWARE_DEPARTMENT: LeadershipMember[] = [
  {
    name: "Wajahat Ali Khan",
    role: "Head of Software Department",
    image: teamImage("software-department", "wajahat.webp"),
    bio: "Leads RMT's software department across medical software development, AI solutions, and regulated digital health platforms.",
    detail:
      "Sets technical direction, team structure, and delivery standards for IEC 62304-aligned software programmes and client-facing SaMD projects.",
  },
  {
    name: "Istafa Malik",
    role: "Software Development Manager",
    image: teamImage("software-department", "istafa.webp"),
    bio: "Manages software engineering teams, sprint delivery, and development lifecycle for medical and enterprise applications.",
    detail:
      "Oversees architecture, code quality, and cross-functional coordination from requirements through release and maintenance.",
  },
  {
    name: "Muhammad Umer",
    role: "Software Compliance Manager",
    image: teamImage("software-department", "umer.webp"),
    bio: "Ensures software projects meet regulatory and quality requirements including IEC 62304, FDA SaMD, and HIPAA.",
    detail:
      "Owns compliance documentation, validation planning, and audit readiness across RMT's software development portfolio.",
  },
  {
    name: "Muhammad Amir",
    role: "AI Software Manager",
    image: teamImage("software-department", "amir.webp"),
    imageClassName: "object-cover object-[center_20%] scale-[1.08]",
    bio: "Leads AI and machine learning initiatives for clinical, diagnostic, and operational healthcare software.",
    detail:
      "Drives model development, integration, and validation workflows for AI-enabled medical and healthtech products.",
  },
];

/** Production Wing */
export const PRODUCTION_WING: LeadershipMember[] = [
  {
    name: "Manal Fatima",
    role: "General Manager, Production",
    image: teamImage("production-wing", "manal.webp"),
    imageClassName: "object-cover object-center",
    bio: "Leads RMT's production operations, manufacturing coordination, and delivery of ISO 13485-aligned medical device output.",
    detail:
      "Oversees production planning, quality workflows, and cross-functional alignment between manufacturing, engineering, and regulatory teams.",
  },
];

/** Regulatory Department */
export const REGULATORY_DEPARTMENT: LeadershipMember[] = [
  {
    name: "Nida Ali",
    role: "Director, Regulatory Affairs",
    image: teamImage("regulatory-department", "nida.webp"),
    imageClassName: "object-cover object-center",
    bio: "Leads RMT's regulatory affairs function across FDA, CE, and international medical device submissions.",
    detail:
      "Directs technical file development, clinical evaluation, risk management documentation, and regulatory strategy for clients worldwide.",
  },
];

/** Quality Control Wing */
export const QUALITY_CONTROL_WING: LeadershipMember[] = [
  {
    name: "Suhail",
    role: "General Manager, Quality",
    image: teamImage("quality-control-wing", "suhail.webp"),
    bio: "Leads RMT's quality management function across ISO 13485 systems, audits, and organisation-wide QMS excellence.",
    detail:
      "Sets quality strategy, ensures compliance with medical device standards, and drives continuous improvement across all RMT operations.",
  },
  {
    name: "Hafsa Inam",
    role: "Manager, QA",
    image: teamImage("quality-control-wing", "hafsa.webp"),
    bio: "Manages quality assurance processes, documentation control, and audit readiness for RMT's service and manufacturing activities.",
    detail:
      "Oversees CAPA, internal audits, SOP maintenance, and QA support for regulatory submissions and client projects.",
  },
  {
    name: "Sualeha Naveed",
    role: "Manager, QC (R&D)",
    image: teamImage("quality-control-wing", "sualeha.webp"),
    bio: "Leads quality control for R&D programmes including laboratory testing, validation, and research-phase product quality.",
    detail:
      "Ensures test method validation, sample integrity, and QC documentation for biomaterials, analytical, and development projects.",
  },
  {
    name: "Muhammad Wahaj",
    role: "Manager, QC (Production)",
    image: teamImage("quality-control-wing", "wahaj.webp"),
    bio: "Manages production quality control, in-process inspection, and release testing for manufactured medical devices.",
    detail:
      "Coordinates batch records, incoming inspection, and final product QC aligned with GMP and ISO 13485 manufacturing requirements.",
  },
];

/** Supply Chain Wing */
export const SUPPLY_CHAIN_WING: LeadershipMember[] = [
  {
    name: "Syed Mir",
    role: "Manager, Supply Chain",
    image: teamImage("supply-chain-wing", "mir.jpg"),
    bio: "Leads RMT's supply chain operations including vendor management, procurement, and logistics for medical device programmes.",
    detail:
      "Coordinates sourcing, inventory planning, and supplier qualification to support R&D, production, and client delivery timelines.",
  },
  {
    name: "Muhammad Fahad",
    role: "Assistant Manager, Supply Chain",
    image: teamImage("supply-chain-wing", "fahad.jpg"),
    bio: "Supports day-to-day supply chain activities, purchase orders, and coordination with production and quality teams.",
    detail:
      "Manages material tracking, vendor communications, and supply chain documentation across RMT's global operations.",
  },
];

/** Finance Department */
export const FINANCE_DEPARTMENT: LeadershipMember[] = [
  {
    name: "Farman",
    role: "Manager, Finance",
    image: teamImage("finance-department", "farman.jpg"),
    imageClassName: "object-cover object-center",
    bio: "Leads RMT's finance function including budgeting, accounts, and financial reporting across global operations.",
    detail:
      "Oversees financial planning, compliance with accounting standards, and coordination with leadership on business performance and investment decisions.",
  },
  {
    name: "Aneel Kumar",
    role: "Assistant Manager, Finance",
    image: teamImage("finance-department", "aneel.jpg"),
    imageClassName: "object-cover object-center",
    bio: "Supports day-to-day finance operations, bookkeeping, payroll coordination, and accounts payable/receivable.",
    detail:
      "Assists with financial documentation, expense tracking, and reporting to keep RMT's finance processes accurate and audit-ready.",
  },
];

/** HR & Admin Support Wing */
export const HR_ADMIN_SUPPORT_WING: LeadershipMember[] = [
  {
    name: "Sonia Saleem",
    role: "Manager, HR",
    image: teamImage("hr-admin-wing", "sonia.webp"),
    imageClassName: "object-cover object-center",
    bio: "Leads human resources including recruitment, employee relations, and HR policy across RMT's global teams.",
    detail:
      "Manages onboarding, performance processes, and workplace compliance to support RMT's growing medical device workforce.",
  },
  {
    name: "Muhammad Asad Tariq",
    role: "Manager, Admin",
    image: teamImage("hr-admin-wing", "asad.webp"),
    imageClassName: "object-cover object-center",
    bio: "Oversees administrative operations, office management, and internal support services for RMT offices.",
    detail:
      "Coordinates facilities, logistics, documentation, and day-to-day admin workflows that keep RMT operations running smoothly.",
  },
];

/** Business Marketing Unit */
export const BUSINESS_MARKETING_UNIT: LeadershipMember[] = [
  {
    name: "Bilal Baqir",
    role: "Director, Business Development & Marketing",
    image: teamImage("business-marketing-unit", "bilal.webp"),
    bio: "Leads RMT's business development and marketing strategy, connecting our services with clients across healthcare and med-tech.",
    detail:
      "Drives brand positioning, client acquisition, and partnership outreach while aligning marketing campaigns with RMT's full-service medical device portfolio.",
  },
  {
    name: "Adan Afsar",
    role: "Manager, Marketing",
    image: teamImage("business-marketing-unit", "adan.webp"),
    bio: "Manages day-to-day marketing operations, content, and channel execution for RMT's global presence.",
    detail:
      "Coordinates digital campaigns, events, and collateral to showcase RMT's capabilities in regulatory, engineering, laboratory, and manufacturing services.",
  },
];
