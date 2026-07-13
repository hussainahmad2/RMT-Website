export type ArticleCategory =
  | "All"
  | "Compliance"
  | "Software & AI"
  | "Medical Devices"
  | "Regulatory"
  | "Manufacturing"
  | "Research"
  | "Testing";

export interface InsightArticle {
  id: string;
  category: Exclude<ArticleCategory, "All">;
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  author: { name: string; role: string; initials: string; color: string };
  image: string;
  featured?: boolean;
  tags?: string[];
}

export const INSIGHT_CATEGORIES: ArticleCategory[] = [
  "All",
  "Compliance",
  "Software & AI",
  "Medical Devices",
  "Regulatory",
  "Manufacturing",
  "Research",
  "Testing",
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: "22-rpm-ecosystem",
    category: "Software & AI",
    readTime: "4 min",
    date: "Jun 2025",
    title: "22-RPM Ecosystem Now Live on Google Play and the Apple App Store",
    excerpt:
      "Revive Medical Technologies successfully launched the complete 22-RPM Remote Patient Monitoring solution — featuring a real-time web dashboard for clinicians and a secure mobile app for patients, built for scalable, patient-focused digital care.",
    author: { name: "RMT Software Team", role: "HealthTech Engineering", initials: "RMT", color: "bg-cyan-600" },
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    featured: true,
    tags: ["RPM", "Digital Health", "Mobile App"],
  },
  {
    id: "22-rpm-google-play",
    category: "Software & AI",
    readTime: "5 min",
    date: "May 2025",
    title: "22-RPM App Passes Google Play Healthcare Requirements",
    excerpt:
      "Our software team deployed a production-grade RPM app with medical device integration, secure vitals capture, clinician dashboards, AI healthcare agent insights, and strict compliance — meeting Google Play's stringent healthcare policies.",
    author: { name: "RMT Software Team", role: "Product Engineering", initials: "RMT", color: "bg-teal-600" },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    tags: ["Google Play", "AI in Healthcare", "RPM"],
  },
  {
    id: "fda-small-business-waiver",
    category: "Regulatory",
    readTime: "6 min",
    date: "May 2025",
    title: "FDA Small Business Fee Waiver — Reducing 510(k) Costs from $26,067 to $6,517",
    excerpt:
      "RMT successfully obtained FDA Small Business Determination approval for a client's 510(k) Cranial Implant submission. We guide eligible businesses through FDA Form 3602N and CDRH's Small Business Determination Program.",
    author: { name: "RMT Regulatory Team", role: "Regulatory Affairs", initials: "RR", color: "bg-blue-600" },
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    tags: ["FDA 510(k)", "CDRH", "Regulatory Consulting"],
  },
  {
    id: "ace-pump",
    category: "Medical Devices",
    readTime: "3 min",
    date: "Apr 2025",
    title: "ACE Pump — Precision Infusion Technology for Critical Care",
    excerpt:
      "Introducing the ACE Pump: an advanced infusion solution engineered for critical care with high-precision drug delivery, intelligent touchscreen controls, multiple infusion modes, and real-time monitoring for ICU-ready performance.",
    author: { name: "RMT Product Team", role: "Medical Devices", initials: "RP", color: "bg-emerald-600" },
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&q=80",
    tags: ["Infusion Technology", "Critical Care", "MedTech"],
  },
  {
    id: "biomaterial-scaffolds",
    category: "Research",
    readTime: "7 min",
    date: "Apr 2025",
    title: "3D-Printed Biomaterial Scaffolds — Engineering Biology for Bone Regeneration",
    excerpt:
      "Critical-sized bone defects are difficult to treat. 3D-printed scaffolds create temporary frameworks that guide the body to regenerate its own tissue — exploring scaffold design, testing, manufacturing, and regulatory strategy.",
    author: { name: "RMT Biomaterials Team", role: "Tissue Engineering", initials: "RB", color: "bg-violet-600" },
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    tags: ["Biomaterials", "3D Printing", "Regenerative Medicine"],
  },
  {
    id: "microspheres-milestone",
    category: "Medical Devices",
    readTime: "6 min",
    date: "Mar 2025",
    title: "Microspheres R&D Complete — FDA Approval & Contract Manufacturing Underway",
    excerpt:
      "RMT completed R&D of high-quality intravascular microspheres for vascular embolization for a U.S. client, now handling US-FDA approval and full-scale contract manufacturing at onshore and offshore facilities.",
    author: { name: "RMT Manufacturing", role: "Contract Manufacturing", initials: "RM", color: "bg-indigo-600" },
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    tags: ["Microspheres", "Embolization", "ISO 13485"],
  },
  {
    id: "scttm-catheter-testing",
    category: "Manufacturing",
    readTime: "5 min",
    date: "Mar 2025",
    title: "SCTTM — Next-Generation Catheter Trackability Testing Machine",
    excerpt:
      "The Specialised Catheter Trackability Testing Machine delivers ±10mN force accuracy, real-world stroke emulation, programmable stroke length, and temperature-controlled testing for intracranial and cardiovascular catheters.",
    author: { name: "RMT Engineering", role: "Production Equipment", initials: "RE", color: "bg-orange-600" },
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    tags: ["Catheter Testing", "Precision Engineering", "MedTech"],
  },
  {
    id: "vision-awareness-device",
    category: "Medical Devices",
    readTime: "4 min",
    date: "Feb 2025",
    title: "Vision Awareness Device (VAD) — Accessible Eye Health Screening",
    excerpt:
      "The VAD by Revive Medical Technologies redefines community eye health — a passive, low-cost solution for effortless self-assessment in schools, workplaces, and public spaces without clinical setup or supervision.",
    author: { name: "RMT Innovation", role: "Product Development", initials: "RI", color: "bg-rose-600" },
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    tags: ["Digital Health", "Screening", "Patient Access"],
  },
  {
    id: "product-development-lifecycle",
    category: "Compliance",
    readTime: "6 min",
    date: "Feb 2025",
    title: "Product Development Lifecycle — Quality Built In from Ideation to Market",
    excerpt:
      "A robust product development lifecycle is essential for safety, performance, and regulatory compliance. RMT integrates structured planning, design validation, and continuous improvement aligned with ISO 13485.",
    author: { name: "Sarah Chen", role: "QA Manager", initials: "SC", color: "bg-indigo-600" },
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    tags: ["ISO 13485", "Quality Management", "MedTech"],
  },
  {
    id: "comprehensive-testing",
    category: "Testing",
    readTime: "5 min",
    date: "Jan 2025",
    title: "One Stop, Zero Hassle — Comprehensive Testing Services Under One Roof",
    excerpt:
      "From microbiology testing and analytical evaluations to advanced characterization and biocompatibility assessments — ISO 13485-certified end-to-end testing to streamline validation and accelerate product development.",
    author: { name: "RMT Laboratory", role: "Testing Services", initials: "RL", color: "bg-cyan-600" },
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    tags: ["Biocompatibility", "Microbiology", "ISO 13485"],
  },
  {
    id: "bath-shaker",
    category: "Testing",
    readTime: "3 min",
    date: "Jan 2025",
    title: "Bath Shaker — Precision Laboratory Testing Equipment",
    excerpt:
      "Engineered for consistency, the Bath Shaker delivers uniform temperature distribution with adjustable shaking speed, digital interface, corrosion-resistant chamber, and multiple safety protections for reliable lab performance.",
    author: { name: "RMT Laboratory", role: "Lab Equipment", initials: "RL", color: "bg-teal-600" },
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    tags: ["Lab Equipment", "Quality Testing"],
  },
  {
    id: "tensura-stretching",
    category: "Manufacturing",
    readTime: "4 min",
    date: "Dec 2024",
    title: "Tensura — Outer Tube Stretching Machine for Balloon Catheters",
    excerpt:
      "Precision manufacturing solution for balloon catheters and vascular sheaths with advanced temperature control, customizable parameters, and optional multi-tube processing for high-volume production.",
    author: { name: "RMT Engineering", role: "Production Equipment", initials: "RE", color: "bg-purple-600" },
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    tags: ["Catheter Manufacturing", "Balloon Catheters"],
  },
  {
    id: "aquelis-coating",
    category: "Manufacturing",
    readTime: "4 min",
    date: "Nov 2024",
    title: "Aquelis — Hydrophilic Polymer Coating Machine for PTCA & PTA Balloon Catheters",
    excerpt:
      "Automated hydrophilic coating application for balloon catheters — enhancing trackability, reducing friction, and improving procedural safety and efficiency during minimally invasive angioplasty.",
    author: { name: "RMT Engineering", role: "Coating Technology", initials: "RE", color: "bg-amber-600" },
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    tags: ["Hydrophilic Coating", "Balloon Catheters"],
  },
  {
    id: "rmt-biomaterials-legacy",
    category: "Research",
    readTime: "5 min",
    date: "Oct 2024",
    title: "Pioneering Biomaterials & Cardiovascular Device Innovation",
    excerpt:
      "RMT's distinguished legacy includes proprietary production and testing equipment, drug coating formulations, and establishing the first medical device industries in Pakistan and Saudi Arabia for life-saving cardiovascular devices.",
    author: { name: "Dr. Aisha Kapoor", role: "Materials Engineer", initials: "AK", color: "bg-emerald-600" },
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&q=80",
    tags: ["Biomaterials", "Cardiovascular", "Drug Coating"],
  },
  {
    id: "eu-mdr-cybersecurity",
    category: "Compliance",
    readTime: "7 min",
    date: "May 2025",
    title: "Navigating EU MDR Cybersecurity Guidelines for Medical Devices in 2025",
    excerpt:
      "A deep dive into the latest EU MDR updates regarding premarket cybersecurity requirements and how manufacturers should prepare their technical file packages.",
    author: { name: "Dr. James Hartwell", role: "VP of Regulatory Affairs", initials: "JH", color: "bg-blue-600" },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    tags: ["EU MDR", "Cybersecurity"],
  },
  {
    id: "hl7-vs-fhir",
    category: "Software & AI",
    readTime: "8 min",
    date: "Apr 2025",
    title: "HL7 vs FHIR: Which Standard to Choose for Your Healthcare App",
    excerpt:
      "Understanding the technical and strategic differences between healthcare interoperability standards — and when to use each for your medical software project.",
    author: { name: "Michael Torres", role: "Software Architect", initials: "MT", color: "bg-teal-600" },
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&q=80",
    tags: ["FHIR", "HL7", "Interoperability"],
  },
];

export const INSIGHT_CATEGORY_COLORS: Record<string, string> = {
  Compliance: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Software & AI": "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
  "Medical Devices": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Regulatory: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  Manufacturing: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  Research: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
  Testing: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
};
