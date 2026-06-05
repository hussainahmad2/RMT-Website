const BASE = import.meta.env.BASE_URL;

const teamImage = (unit: string, file: string) => `${BASE}team/${unit}/${file}`;

export type LeadershipMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  detail?: string;
  /** Optional per-photo crop override */
  imageClassName?: string;
};

/** C-level executive team */
export const C_LEVEL_LEADERSHIP: LeadershipMember[] = [
  {
    name: "Dr. Murtaza Najabat Ali",
    role: "Chief Executive Officer",
    image: teamImage("c-level", "ceo.webp"),
    bio: "Founder and CEO of RMT Medical Technologies, leading the company's vision to deliver end-to-end medical device, biomaterials, and healthtech solutions for clients worldwide.",
    detail:
      "With deep expertise in biomaterials, regulatory strategy, and R&D, Dr. Ali has guided 200+ projects spanning FDA and CE compliance, product development, laboratory services, software & AI, and contract manufacturing — serving partners across North America, Europe, the Middle East, and South Asia.",
  },
  {
    name: "Ali Asghar",
    role: "Chief Financial Officer",
    image: teamImage("c-level", "ali.webp"),
    bio: "Leads financial planning, reporting, and governance across RMT's global operations.",
  },
  {
    name: "Ammad Ahmed",
    role: "Chief Product Officer",
    image: teamImage("c-level", "ammad.webp"),
    bio: "Drives product strategy from concept through design validation and commercial readiness.",
  },
  {
    name: "Muhammad Hafeez",
    role: "Chief Growth Officer",
    image: teamImage("c-level", "hafeez.webp"),
    bio: "Leads business development, partnerships, and market expansion in medical devices and digital health.",
  },
  {
    name: "Ibraheem Raza",
    role: "Chief Technology Officer",
    image: teamImage("c-level", "ibrahim.webp"),
    bio: "Heads technology strategy across software, AI, cloud platforms, and connected medical systems.",
  },
];

/** R&D Wing — Microbiology Laboratory */
export const RD_WING_MICROBIOLOGY_LABORATORY: LeadershipMember[] = [
  {
    name: "Hamza",
    role: "Microbiology Laboratory Lead",
    image: teamImage("rd-wing/microbiology-laboratory", "hamza.jpeg"),
    bio: "Leads microbiology lab operations for sterility, microbial limit, and pathogen testing.",
  },
  {
    name: "Syed Ali Hassan",
    role: "Assistant, Microbiology",
    image: teamImage("rd-wing/microbiology-laboratory", "ali.jpg"),
    bio: "Supports microbiology testing, sample handling, and laboratory documentation.",
  },
];

/** R&D Wing — Electromechanical Department */
export const RD_WING_ELECTROMECHANICAL: LeadershipMember[] = [
  {
    name: "Awais Cheema",
    role: "Mechanical Engineer",
    image: teamImage("rd-wing/electromechanical-department", "awais.webp"),
    bio: "Supports mechanical design, prototyping, and electromechanical integration for device R&D.",
  },
  {
    name: "Raheel Abid",
    role: "PCB Lead",
    image: teamImage("rd-wing/electromechanical-department", "raheel.webp"),
    bio: "Leads PCB design, layout, and electronics development for regulated medical devices.",
  },
];

/** R&D Wing — Biomaterials Department */
export const RD_WING_BIOMATERIALS: LeadershipMember[] = [
  {
    name: "Fatima Zahra",
    role: "General Manager, Biomaterials & Drug Discovery",
    image: teamImage("rd-wing/biomaterials-department", "fatima.webp"),
    bio: "Oversees biomaterials research, drug discovery, and laboratory operations.",
  },
  {
    name: "Waleed Imtiaz",
    role: "Deputy Director, Biomaterials",
    image: teamImage("rd-wing/biomaterials-department", "waleed.webp"),
    bio: "Supports biomaterials R&D strategy, project delivery, and technical oversight.",
  },
];

/** Software Department */
export const SOFTWARE_DEPARTMENT: LeadershipMember[] = [
  {
    name: "Wajahat Ali Khan",
    role: "Head of Software Department",
    image: teamImage("software-department", "wajahat.webp"),
    bio: "Leads medical software, AI solutions, and regulated digital health development.",
  },
  {
    name: "Istafa Malik",
    role: "Software Development Manager",
    image: teamImage("software-department", "istafa.webp"),
    bio: "Manages software engineering teams and delivery for medical and enterprise applications.",
  },
  {
    name: "Muhammad Umer",
    role: "Software Compliance Manager",
    image: teamImage("software-department", "umer.webp"),
    bio: "Ensures software compliance with IEC 62304, FDA SaMD, and HIPAA requirements.",
  },
  {
    name: "Muhammad Amir",
    role: "AI Software Manager",
    image: teamImage("software-department", "amir.jpeg"),
    bio: "Leads AI and machine learning initiatives for clinical and healthcare software.",
  },
];

/** Production Wing */
export const PRODUCTION_WING: LeadershipMember[] = [
  {
    name: "Manal Fatima",
    role: "General Manager, Production",
    image: teamImage("production-wing", "manal.webp"),
    bio: "Leads production operations and ISO 13485-aligned medical device manufacturing.",
  },
  {
    name: "Umer Shahid",
    role: "Assistant Manager, Production",
    image: teamImage("production-wing", "umer.jpeg"),
    bio: "Supports production planning, shop-floor coordination, and daily manufacturing operations.",
  },
];

/** Regulatory Department */
export const REGULATORY_DEPARTMENT: LeadershipMember[] = [
  {
    name: "Nida Ali",
    role: "Director, Regulatory Affairs",
    image: teamImage("regulatory-department", "nida.webp"),
    bio: "Leads regulatory affairs across FDA, CE, and international device submissions.",
  },
];

/** Quality Control Wing */
export const QUALITY_CONTROL_WING: LeadershipMember[] = [
  {
    name: "Suhail",
    role: "General Manager, Quality",
    image: teamImage("quality-control-wing", "suhail.webp"),
    bio: "Leads quality management across ISO 13485 systems, audits, and QMS excellence.",
  },
  {
    name: "Hafsa Inam",
    role: "Manager, QA",
    image: teamImage("quality-control-wing", "hafsa.webp"),
    bio: "Manages quality assurance processes, documentation control, and audit readiness.",
  },
  {
    name: "Sualeha Naveed",
    role: "Manager, QC (R&D)",
    image: teamImage("quality-control-wing", "sualeha.webp"),
    bio: "Leads quality control for R&D laboratory testing and research-phase product quality.",
  },
  {
    name: "Muhammad Wahaj",
    role: "Manager, QC (Production)",
    image: teamImage("quality-control-wing", "wahaj.webp"),
    bio: "Manages production QC, in-process inspection, and release testing for manufactured devices.",
  },
];

/** Supply Chain Wing */
export const SUPPLY_CHAIN_WING: LeadershipMember[] = [
  {
    name: "Syed Mir",
    role: "Manager, Supply Chain",
    image: teamImage("supply-chain-wing", "mir.jpg"),
    bio: "Leads vendor management, procurement, and logistics for medical device programmes.",
  },
  {
    name: "Muhammad Fahad",
    role: "Assistant Manager, Supply Chain",
    image: teamImage("supply-chain-wing", "fahad.jpg"),
    bio: "Supports procurement, purchase orders, and supply chain coordination with production teams.",
  },
];

/** Finance Department */
export const FINANCE_DEPARTMENT: LeadershipMember[] = [
  {
    name: "Farman",
    role: "Manager, Finance",
    image: teamImage("finance-department", "farman.jpg"),
    bio: "Leads budgeting, accounts, and financial reporting across global operations.",
  },
  {
    name: "Aneel Kumar",
    role: "Assistant Manager, Finance",
    image: teamImage("finance-department", "aneel.jpeg"),
    bio: "Supports finance operations, bookkeeping, payroll, and accounts payable/receivable.",
  },
];

/** HR & Admin Support Wing */
export const HR_ADMIN_SUPPORT_WING: LeadershipMember[] = [
  {
    name: "Sonia Saleem",
    role: "Manager, HR",
    image: teamImage("hr-admin-wing", "sonia.webp"),
    bio: "Leads recruitment, employee relations, and HR policy across RMT's global teams.",
  },
  {
    name: "Muhammad Asad Tariq",
    role: "Manager, Admin",
    image: teamImage("hr-admin-wing", "asad.webp"),
    bio: "Oversees office management, facilities, and internal administrative support services.",
  },
];

/** Product Development Wing */
export const PRODUCT_DEVELOPMENT_WING: LeadershipMember[] = [
  {
    name: "Muhammad Umar Javed",
    role: "Assistant Manager, Product Development",
    image: teamImage("product-development-wing", "umar.jpeg"),
    bio: "Supports product development from concept through design validation and manufacturing transfer.",
  },
  {
    name: "Sobia Rafique",
    role: "Assistant Manager, Product Development",
    image: teamImage("product-development-wing", "sobia.jpeg"),
    bio: "Assists product development planning, documentation, and cross-team coordination.",
  },
];

/** Business Marketing Unit */
export const BUSINESS_MARKETING_UNIT: LeadershipMember[] = [
  {
    name: "Bilal Baqir",
    role: "Director, Business Development & Marketing",
    image: teamImage("business-marketing-unit", "bilal.webp"),
    bio: "Leads business development and marketing strategy across healthcare and med-tech markets.",
  },
  {
    name: "Adan Afsar",
    role: "Manager, Marketing",
    image: teamImage("business-marketing-unit", "adan.webp"),
    bio: "Manages marketing operations, content, and channel execution for RMT's global presence.",
  },
];
