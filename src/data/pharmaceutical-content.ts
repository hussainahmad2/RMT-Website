import {
  Beaker,
  ClipboardCheck,
  Factory,
  FileText,
  FlaskConical,
  Layers,
  Microscope,
  Pill,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const PHARMA_HERO_IMAGE =
  "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1920&q=85";

export const PHARMA_HIGHLIGHTS = [
  { label: "Lifecycle Stages", value: "8" },
  { label: "Dosage Form Types", value: "10+" },
  { label: "Therapeutic Areas", value: "10" },
];

export interface ExpertiseArea {
  id: string;
  icon: LucideIcon;
  title: string;
  items: string[];
}

export const PHARMA_EXPERTISE: ExpertiseArea[] = [
  {
    id: "discovery",
    icon: Microscope,
    title: "Discovery Support & Candidate Evaluation",
    items: [
      "Molecule assessment",
      "Developability studies",
      "Excipient compatibility screening",
      "Route of administration selection",
      "Risk assessment and target product profile development",
    ],
  },
  {
    id: "preformulation",
    icon: FlaskConical,
    title: "Pre-formulation Development",
    items: [
      "Solubility characterization",
      "Polymorph screening",
      "Particle engineering",
      "Stability assessment",
      "API-excipient compatibility studies",
    ],
  },
  {
    id: "formulation",
    icon: Pill,
    title: "Formulation Development",
    items: [
      "Immediate Release (IR) Products",
      "Modified Release (MR) Products",
      "Extended Release (ER) Systems",
      "Delayed Release Formulations",
      "Multiparticulate Systems",
      "Orally Disintegrating Tablets",
      "Capsules & Sachets",
      "Topical & Semisolid Products",
      "Liquid Dosage Forms",
      "Complex Generic Development",
    ],
  },
  {
    id: "analytical",
    icon: Beaker,
    title: "Analytical Method Development",
    items: [
      "Method development and validation",
      "Stability-indicating methods",
      "Dissolution method development",
      "Impurity profiling",
      "Extractables & leachables support",
    ],
  },
  {
    id: "process",
    icon: Factory,
    title: "Process Development & Scale-Up",
    items: [
      "QbD-based process optimization",
      "Design of Experiments (DoE)",
      "Process characterization",
      "Technology transfer",
      "Pilot and exhibit batch support",
    ],
  },
  {
    id: "regulatory",
    icon: FileText,
    title: "Regulatory & CMC Support",
    items: [
      "CTD/eCTD dossier preparation",
      "Module 3 documentation",
      "Development reports",
      "Risk management documentation",
      "Regulatory response support",
    ],
  },
  {
    id: "commercialization",
    icon: TrendingUp,
    title: "Commercialization Support",
    items: [
      "Manufacturing transfer",
      "Process validation",
      "Continued process verification",
      "Product launch readiness",
      "Post-approval lifecycle management",
    ],
  },
];

export interface PharmaService {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PHARMA_SERVICES: PharmaService[] = [
  {
    icon: Pill,
    title: "Pharmaceutical Formulation Development",
    description:
      "Developing robust, scalable, and patient-centric formulations using modern Quality by Design (QbD) principles. We focus on product performance, manufacturability, stability, and regulatory compliance from the earliest stages of development.",
  },
  {
    icon: Beaker,
    title: "Analytical Development & Quality Control",
    description:
      "Our analytical team develops reliable methods that support formulation development, stability studies, process validation, and regulatory submissions while ensuring data integrity and compliance.",
  },
  {
    icon: Layers,
    title: "Technology Transfer & Manufacturing Readiness",
    description:
      "Seamlessly transfer laboratory-scale innovations into commercial manufacturing through scientifically designed scale-up strategies and risk-based process optimization.",
  },
  {
    icon: Scale,
    title: "Regulatory Affairs & Compliance",
    description:
      "Navigate global regulatory pathways with confidence through comprehensive CMC documentation, dossier preparation, gap assessments, and submission support.",
  },
];

export interface WhyChooseItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PHARMA_WHY_CHOOSE: WhyChooseItem[] = [
  {
    icon: Sparkles,
    title: "Science-Driven Development",
    description: "Evidence-based formulation strategies designed to maximize product success.",
  },
  {
    icon: ShieldCheck,
    title: "QbD-Focused Approach",
    description: "Building quality into products from the beginning rather than testing it at the end.",
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory Excellence",
    description: "Development aligned with FDA, EMA, ICH, WHO, and regional regulatory expectations.",
  },
  {
    icon: Factory,
    title: "Commercialization Mindset",
    description: "Every formulation is developed with manufacturing scalability and market success in mind.",
  },
  {
    icon: TrendingUp,
    title: "Risk Mitigation",
    description: "Early identification of formulation, analytical, and manufacturing challenges reduces development timelines and costs.",
  },
  {
    icon: Layers,
    title: "End-to-End Support",
    description: "One partner from concept through commercialization.",
  },
];

export const PHARMA_JOURNEY = [
  { phase: "Phase 1", title: "Discovery & Assessment", detail: "Target Product Profile (TPP)" },
  { phase: "Phase 2", title: "Preformulation", detail: "Physicochemical Characterization" },
  { phase: "Phase 3", title: "Formulation Development", detail: "Prototype Design & Optimization" },
  { phase: "Phase 4", title: "Analytical Development", detail: "Method Development & Validation" },
  { phase: "Phase 5", title: "Scale-Up", detail: "Pilot Manufacturing & Process Optimization" },
  { phase: "Phase 6", title: "Regulatory Submission", detail: "CMC Documentation & Filing Support" },
  { phase: "Phase 7", title: "Commercial Manufacturing", detail: "Technology Transfer & Validation" },
  { phase: "Phase 8", title: "Lifecycle Management", detail: "Continuous Improvement & Market Support" },
];

export const PHARMA_THERAPEUTIC_AREAS = [
  "Neurology & CNS",
  "Cardiovascular",
  "Endocrinology & Diabetes",
  "Gastroenterology",
  "Respiratory",
  "Anti-Infectives",
  "Dermatology",
  "Oncology Support Products",
  "Women's Health",
  "Rare Diseases",
];
