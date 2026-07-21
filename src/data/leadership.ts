const BASE = import.meta.env.BASE_URL;

const teamImage = (unit: string, file: string) => `${BASE}team/${unit}/${file}`;

export type LeadershipMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  detail?: string | string[];
  /** Optional per-photo crop override */
  imageClassName?: string;
};

/** C-level executive team */
export const C_LEVEL_LEADERSHIP: LeadershipMember[] = [
  {
    name: "Dr. Murtaza Najabat Ali",
    role: "Chief Executive Officer",
    image: teamImage("c-level", "ceo.webp"),
    imageClassName: "object-contain object-center",
    bio: "Dr. Murtaza Najabat Ali is the Founder and Chief Executive Officer of Revive Medical Technologies Inc. (RMT), a U.S.-based medical device research, development, and manufacturing organization serving innovators worldwide. A biomedical engineer and academic leader with a PhD from the University of Sheffield and postgraduate training at Queen Mary University of London and Brunel University, he brings more than two decades of experience in biomaterials, drug delivery systems, medical device R&D, and regulatory strategy.",
    detail: [
      "Beyond RMT, Dr. Ali has held senior leadership roles including Professor of Biomedical Engineering, Founding Director of the Medical Devices Development Center (MDDC) at NUST, and Founding CEO of N-ovative Health Technologies — Pakistan's first UKAS-accredited medical device manufacturing facility producing cardiovascular and electromedical devices. He serves as a COMSTECH Distinguished Scholar for capacity building across OIC member states and as a Member Expert Committee at Pakistan's Drug Regulatory Authority (DRAP).",
      "Under his leadership, RMT has grown into a cross-functional partner offering end-to-end solutions — from concept and engineering through quality systems, regulatory submissions, software & AI, and contract manufacturing — guiding 200+ projects across North America, Europe, the Middle East, and South Asia. His mission is to bridge industry and academia, empower emerging innovators, and accelerate the path from inventive healthcare ideas to safe, market-ready medical technologies.",
    ],
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
    name: "Muhammad Hafeez Khan",
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
    image: teamImage("rd-wing/microbiology-laboratory", "hamza.webp"),
    bio: "Leads microbiology lab operations for sterility, microbial limit, and pathogen testing.",
  },
  {
    name: "Syed Ali Hassan",
    role: "Assistant, Microbiology",
    image: teamImage("rd-wing/microbiology-laboratory", "ali.webp"),
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
  {
    name: "Nimra Shabbir",
    role: "Junior Research Scientist",
    image: teamImage("rd-wing/biomaterials-department", "nimra.webp"),
    bio: "Supports biomaterials research, laboratory testing, and formulation development activities",
  },
  {
    name: "Mohammad Ali",
    role: "Junior Research Scientist",
    image: teamImage("rd-wing/biomaterials-department", "ali_bmd.jpeg"),
    bio: "Assists biomaterials research, analytical testing, and project documentation.",
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
  {
    name: "Muhammad Hussain Ahmad Bilal",
    role: "Software Engineer",
    image: teamImage("software-department", "hussain.webp"),
    bio: "Develops and maintains medical software applications across the software engineering lifecycle.",
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
    image: teamImage("production-wing", "umer.webp"),
    bio: "Supports production planning, shop-floor coordination, and daily manufacturing operations.",
  },
  {
    name: "Abdullah Amjad Abbasi",
    role: "Technical Staff",
    image: teamImage("production-wing", "abdullah_abbasi.jpeg"),
    bio: "Supports technical production activities and shop-floor operations for medical device manufacturing.",
  },
  {
    name: "Muhammad Amjad Hussain",
    role: "Technical Staff",
    image: teamImage("production-wing", "amjad.jpeg"),
    bio: "Contributes to production processes and technical support within the manufacturing wing.",
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
  {
    name: "Ms. Fehmida Hamza",
    role: "Director, Clinical Affairs",
    image: teamImage("regulatory-department", "fehmida-hamza.webp"),
    bio: "Directs clinical affairs programmes including evaluation planning, evidence generation, and clinical documentation for regulatory submissions.",
  },
  {
    name: "Ms. Saleha Ali",
    role: "Managing Director",
    image: teamImage("regulatory-department", "saleha-ali.webp"),
    bio: "Leads regulatory strategy and operations, aligning clinical, compliance, and market-access priorities across RMT programmes.",
  },
  {
    name: "Ms. Sundleen Jannat",
    role: "Manager, Regulatory Affairs",
    image: teamImage("regulatory-department", "sundleen-jannat.webp"),
    bio: "Manages regulatory submissions, technical documentation, and compliance activities across device programmes.",
  },
  {
    name: "Ms. Zarqa Iqbal",
    role: "Senior Research Specialist",
    image: teamImage("regulatory-department", "zarqa-iqbal.webp"),
    bio: "Supports regulatory research, literature review, and evidence compilation for clinical and compliance dossiers.",
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
  {
    name: "Hammad Shakeel",
    role: "Manager, Software Quality Assurance",
    image: teamImage("quality-control-wing", "hammad.jpg"),
    bio: "Leads software quality assurance for SaMD and SiMD, supporting IEC 62304 and FDA compliance.",
  },
];

/** Supply Chain Wing */
export const SUPPLY_CHAIN_WING: LeadershipMember[] = [
  {
    name: "Syed Mir",
    role: "Manager, Supply Chain",
    image: teamImage("supply-chain-wing", "mir.webp"),
    bio: "Leads vendor management, procurement, and logistics for medical device programmes.",
  },
  {
    name: "Muhammad Fawad Idrees",
    role: "Assistant Manager, Supply Chain",
    image: teamImage("supply-chain-wing", "fawad.jpeg"),
    bio: "Supports procurement, purchase orders, and supply chain coordination with production teams.",
  },
];

/** Warehouse & Distribution Wing */
export const WAREHOUSE_DISTRIBUTION_WING: LeadershipMember[] = [
  {
    name: "Azeem Iqbal Khan",
    role: "Assistant Manager, Warehouse & Distribution",
    image: teamImage("warehouse-distribution-wing", "azeem.jpeg"),
    bio: "Supports warehouse operations, inventory control, and distribution coordination across RMT programmes.",
  },
  {
    name: "Esha Gull",
    role: "Assistant Manager, Store & Warehouse",
    image: teamImage("warehouse-distribution-wing", "esha.jpeg"),
    bio: "Assists store and warehouse activities including stock handling, documentation, and day-to-day inventory support.",
  },
];

/** Finance Department */
export const FINANCE_DEPARTMENT: LeadershipMember[] = [
  {
    name: "Farman Ali",
    role: "Manager, Finance",
    image: teamImage("finance-department", "farman_finance.jpeg"),
    bio: "Leads budgeting, accounts, and financial reporting across global operations.",
  },
  {
    name: "Aneel Kumar",
    role: "Assistant Manager, Finance",
    image: teamImage("finance-department", "aneel.webp"),
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
    name: "Asad Abdullah",
    role: "GM Product Development",
    image: teamImage("product-development-wing", "asad-abdullah.jpeg"),
    bio: "Leads product development strategy, turnkey programmes, and cross-functional delivery from concept through regulatory-ready commercialization.",
  },
  {
    name: "Muhammad Umar Javed",
    role: "Assistant Manager, Product Development",
    image: teamImage("product-development-wing", "umar.webp"),
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
    name: "Muhammad Saleem",
    role: "Manager Coordination Business Development",
    image: teamImage("business-marketing-unit", "saleem_business.jpeg"),
    bio: "Coordinates business development activities and supports marketing and client engagement across RMT programmes.",
  },
  {
    name: "Hamna Imtiaz",
    role: "Assistant Manager, Business Development",
    image: teamImage("business-marketing-unit", "hamna.webp"),
    bio: "Supports business development outreach, client engagement, and partnership growth across RMT programmes.",
  },
  {
    name: "Laraib Hussain Malik",
    role: "Assistant Manager, Marketing",
    image: teamImage("business-marketing-unit", "laraib.webp"),
    bio: "Supports marketing initiatives, brand communications, and market engagement across RMT programmes.",
  },
];
