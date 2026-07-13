import {
  Beaker,
  Brain,
  Bug,
  Cloud,
  Code2,
  Cpu,
  FileCheck,
  Layers,
  MonitorSmartphone,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ALL_SERVICES } from "./services";

const SERVICE = ALL_SERVICES.find((s) => s.slug === "software-ai")!;

export const SOFTWARE_AI_HERO_IMAGE =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=85";

export const SOFTWARE_AI_ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80";

export const SOFTWARE_AI_COMPLIANCE_IMAGE =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80";

export const SOFTWARE_AI_HIGHLIGHTS = [
  { label: "Software Projects Delivered", value: "50+" },
  { label: "Regulatory Frameworks", value: "6+" },
  { label: "Technologies & Stacks", value: "15+" },
  { label: "Client Satisfaction", value: "98%" },
];

export interface ExpertiseArea {
  id: string;
  icon: LucideIcon;
  title: string;
  items: string[];
  slug?: string;
}

export const SOFTWARE_AI_EXPERTISE: ExpertiseArea[] = SERVICE.subServices.map((sub) => ({
  id: sub.slug,
  slug: sub.slug,
  icon:
    sub.slug === "custom-medical-software"
      ? MonitorSmartphone
      : sub.slug === "software-compliance"
        ? ShieldCheck
        : sub.slug === "ai-solutions"
          ? Sparkles
          : sub.slug === "cloud-devops"
            ? Cloud
            : Bug,
  title: sub.name,
  items: sub.keyPoints,
}));

export interface SoftwareService {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
}

export const SOFTWARE_AI_SERVICES: SoftwareService[] = SERVICE.subServices.map((sub) => ({
  icon:
    sub.slug === "custom-medical-software"
      ? MonitorSmartphone
      : sub.slug === "software-compliance"
        ? ShieldCheck
        : sub.slug === "ai-solutions"
          ? Brain
          : sub.slug === "cloud-devops"
            ? Cloud
            : Bug,
  title: sub.name,
  description: sub.overview[0],
  slug: sub.slug,
}));

export interface WhyChooseItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SOFTWARE_AI_WHY_CHOOSE: WhyChooseItem[] = [
  {
    icon: ShieldCheck,
    title: "Regulatory-Grade Code",
    description: SERVICE.whyRMT[0].desc,
  },
  {
    icon: Brain,
    title: "AI Expertise",
    description: SERVICE.whyRMT[1].desc,
  },
  {
    icon: Rocket,
    title: "Full SDLC Support",
    description: SERVICE.whyRMT[2].desc,
  },
  {
    icon: Cloud,
    title: "Cloud-Connected Platforms",
    description: "HIPAA-aligned AWS, Azure, and GCP architectures with CI/CD and IEC 62304 change control.",
  },
  {
    icon: Bug,
    title: "Independent SQA & IV&V",
    description: "Cybersecurity, automation, unit, and integration testing with full STLC documentation.",
  },
  {
    icon: Network,
    title: "Healthcare Interoperability",
    description: "FHIR and HL7 integration designed into architecture from day one for EHR and device connectivity.",
  },
];

export const SOFTWARE_AI_JOURNEY = [
  { phase: "Phase 1", title: "Discover", detail: "Requirements, intended use, regulatory pathway, and stakeholder alignment." },
  { phase: "Phase 2", title: "Design", detail: "Architecture, UX, security model, and traceability mapped to applicable standards." },
  { phase: "Phase 3", title: "Build & Validate", detail: "Development, V&V, cybersecurity testing, and documentation for submission." },
  { phase: "Phase 4", title: "Deploy & Support", detail: "Release, cloud deployment, monitoring, and post-market change control." },
];

export const SOFTWARE_AI_PLATFORMS = [
  "Web & Mobile Apps",
  "EHR & FHIR Integration",
  "Remote Patient Monitoring",
  "Clinical Decision Support",
  "AI / ML Platforms",
  "Cloud & DevOps",
  "SaMD & IEC 62304",
  "Cybersecurity Testing",
  "HIPAA Compliance",
  "Connected Devices",
];

export const SOFTWARE_AI_OVERVIEW = SERVICE.overview;
