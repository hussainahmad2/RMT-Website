import React, { useState, useEffect, useMemo } from "react";
import { Link } from "wouter";
import {
  ArrowRight, ArrowLeft, ChevronRight, CheckCircle, Shield,
  Brain, Cloud, Bug, MonitorSmartphone, Sparkles, ShieldCheck,
  Code2, Cpu, Terminal, GitBranch, Workflow, Activity,
  Database, Server, Lock, Network, Binary, Fingerprint,
  Layers, Zap, Smartphone, Boxes, ScanLine, CircuitBoard, Cog,
  Globe, Phone, Mail, Users, Star, Award, BarChart3,
  Gauge, FileCheck, Rocket, Medal, Microscope, ShieldAlert,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { ALL_SERVICES } from "@/data/services";
import { buildBreadcrumbJsonLd, buildServiceJsonLd, servicePath } from "@/lib/service-seo";

type PageProps = { params?: { slug: string } };
type TechCategory = "Frontend" | "Backend" | "Cloud" | "AI/ML" | "DevOps" | "Standards";

const SERVICE = ALL_SERVICES.find((s) => s.slug === "software-ai")!;

const SUB_IMAGES: Record<string, string> = {
  "custom-medical-software": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
  "software-compliance": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  "ai-solutions": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
  "cloud-devops": "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80",
  "software-quality-assurance": "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
};

const SUB_ICONS: Record<string, React.ElementType> = {
  "custom-medical-software": MonitorSmartphone,
  "software-compliance": ShieldCheck,
  "ai-solutions": Sparkles,
  "cloud-devops": Cloud,
  "software-quality-assurance": Bug,
};

const PORTFOLIO = [
  { name: "LegendEHR", description: "Electronic health record platform with clinician workflows, patient charting, and FHIR-based interoperability.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80", tags: ["EHR", "FHIR", "Web"] },
  { name: "e-Vitals", description: "Digital vitals capture and clinical dashboard for connected monitoring and care-team visibility.", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80", tags: ["RPM", "Mobile", "Cloud"] },
  { name: "Cardio", description: "Cardiology-focused software for cardiac data review, reporting, and device-integrated workflows.", image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80", tags: ["Cardiology", "SaMD", "Analytics"] },
  { name: "22-RPM", description: "Remote patient monitoring programme with device pairing, alerts, and chronic care coordination.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80", tags: ["RPM", "CCM", "HIPAA"] },
  { name: "Infuzamed", description: "Infusion therapy management platform supporting clinical documentation and compliance-ready operations.", image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=900&q=80", tags: ["Infusion", "Clinical", "IEC 62304"] },
];

const METRICS = [
  { value: "50+", label: "Software Projects Delivered", icon: Rocket },
  { value: "6+", label: "Regulatory Frameworks", icon: Shield },
  { value: "15+", label: "Technologies & Stacks", icon: Cpu },
  { value: "98%", label: "Client Satisfaction", icon: Star },
];

const STANDARDS = [
  "IEC 62304", "FDA SaMD Guidance", "HIPAA Privacy & Security",
  "ISO 13485 QMS", "ISO 27001 InfoSec", "FHIR / HL7", "ONC Certification",
];

const APPROACH_STEPS = [
  { step: "01", title: "Discover", desc: "Requirements, intended use, regulatory pathway, and stakeholder alignment.", icon: FileCheck },
  { step: "02", title: "Design", desc: "Architecture, UX, security model, and traceability mapped to applicable standards.", icon: Layers },
  { step: "03", title: "Build & Validate", desc: "Development, V&V, cybersecurity testing, and documentation for submission.", icon: Code2 },
  { step: "04", title: "Deploy & Support", desc: "Release, cloud deployment, monitoring, and post-market change control.", icon: Rocket },
];

const TECH_TABS: TechCategory[] = ["Frontend", "Backend", "Cloud", "AI/ML", "DevOps", "Standards"];
const TECH_ITEMS: Record<TechCategory, { name: string; icon: React.ElementType }[]> = {
  Frontend: [
    { name: "React", icon: CircuitBoard }, { name: "Angular", icon: Layers }, { name: "Vue.js", icon: Code2 },
    { name: "React Native", icon: Smartphone }, { name: "TypeScript", icon: Binary }, { name: "Tailwind CSS", icon: Zap },
  ],
  Backend: [
    { name: "Node.js", icon: Server }, { name: "Python", icon: Terminal }, { name: "Java", icon: Cpu },
    { name: ".NET", icon: Code2 }, { name: "FastAPI", icon: Zap }, { name: "GraphQL", icon: Network },
  ],
  Cloud: [
    { name: "AWS", icon: Cloud }, { name: "Azure", icon: Cloud }, { name: "GCP", icon: Globe },
    { name: "Docker", icon: Boxes }, { name: "Kubernetes", icon: Workflow }, { name: "Terraform", icon: Cog },
  ],
  "AI/ML": [
    { name: "TensorFlow", icon: Brain }, { name: "PyTorch", icon: Sparkles }, { name: "OpenAI", icon: Brain },
    { name: "Scikit-learn", icon: BarChart3 }, { name: "Hugging Face", icon: Brain }, { name: "LangChain", icon: Network },
  ],
  DevOps: [
    { name: "GitHub Actions", icon: GitBranch }, { name: "Jenkins", icon: Workflow }, { name: "Terraform", icon: Cog },
    { name: "Datadog", icon: Activity }, { name: "Prometheus", icon: Gauge }, { name: "SonarQube", icon: ScanLine },
  ],
  Standards: [
    { name: "IEC 62304", icon: Shield }, { name: "HIPAA", icon: Lock }, { name: "FHIR R4", icon: Network },
    { name: "ISO 27001", icon: ShieldCheck }, { name: "FDA SaMD", icon: FileCheck }, { name: "HL7 v2/v3", icon: Database },
  ],
};

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=85",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1920&q=85",
  "https://images.unsplash.com/photo-1581093577421-f561a654a353?w=1920&q=85",
  "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1920&q=85",
];

const WHY_RMT_ICONS: React.ElementType[] = [ShieldCheck, Sparkles, Rocket];

function HeroBackground() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_IMAGES.length), 4000);
    return () => clearInterval(t);
  }, []);

  const nodes = useMemo(() =>
    Array.from({ length: 22 }).map((_, i) => {
      const seed = (i + 1) * 9301;
      return { x: 80 + (((seed * 49297) % 1200) % 1060), y: 40 + (((seed * 233280) % 600) % 520) };
    }), []);

  const edges = useMemo(() => {
    const list: { a: number; b: number }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        if (Math.sqrt(dx * dx + dy * dy) < 250) list.push({ a: i, b: j });
      }
    }
    return list.slice(0, 40);
  }, [nodes]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#020617]">
      <AnimatePresence mode="sync">
        <motion.div key={idx} className="absolute inset-0"
          initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 0.20, scale: 1.08 }} exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 4, ease: "linear" } }}>
          <img src={HERO_IMAGES[idx]} alt="" className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,rgba(56,189,248,0.18),transparent_50%),radial-gradient(ellipse_at_75%_60%,rgba(99,102,241,0.22),transparent_55%),linear-gradient(180deg,#020617_0%,#050a1a_100%)]" />
      <div className="absolute inset-0 opacity-[0.09]"
        style={{ backgroundImage: "linear-gradient(rgba(125,211,252,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.5) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" aria-hidden>
        {edges.map((e, k) => (
          <motion.line key={k} x1={nodes[e.a].x} y1={nodes[e.a].y} x2={nodes[e.b].x} y2={nodes[e.b].y}
            stroke={k % 3 === 0 ? "rgba(165,180,252,0.35)" : "rgba(125,211,252,0.25)"}
            strokeWidth={k % 5 === 0 ? 1.2 : 0.7}
            initial={{ opacity: 0.05 }} animate={{ opacity: [0.03, 0.4, 0.03] }}
            transition={{ duration: 3 + (k % 5), delay: (k % 7) * 0.2, repeat: Infinity }} />
        ))}
        {nodes.map((n, k) => (
          <g key={k}>
            <motion.circle cx={n.x} cy={n.y} r={10}
              fill={k % 3 === 0 ? "rgba(165,180,252,0.5)" : "rgba(125,211,252,0.5)"}
              initial={{ opacity: 0.1 }} animate={{ opacity: [0.08, 0.55, 0.08] }}
              transition={{ duration: 2.5 + (k % 4), delay: (k % 6) * 0.25, repeat: Infinity }} />
            <motion.circle cx={n.x} cy={n.y} r={2.5}
              fill={k % 3 === 0 ? "rgba(199,210,254,0.95)" : "rgba(186,230,253,0.95)"}
              initial={{ r: 2.5 }} animate={{ r: [2, 3.8, 2] }}
              transition={{ duration: 2 + (k % 3), delay: (k % 5) * 0.3, repeat: Infinity }} />
          </g>
        ))}
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020617] to-transparent" />
    </div>
  );
}

function TechIconsScatter() {
  const ICONS: React.ElementType[] = [Code2, Cpu, Cloud, Terminal, Brain, Sparkles, GitBranch,
    MonitorSmartphone, Workflow, Bug, Layers, Zap, Smartphone, ShieldCheck, Activity, Cog,
    Boxes, Database, Server, Lock, Network, Binary, Fingerprint];

  const items = useMemo(() => {
    const cols = 7; const rows = 10;
    return Array.from({ length: rows * cols }).map((_, idx) => {
      const seed = (idx + 1) * 9301 + 49297;
      if (seed % 9 < 2) return null;
      const c = idx % cols; const r = Math.floor(idx / cols);
      const xJ = (((seed >> 7) % 100) - 50) / 100;
      const yJ = (((seed >> 11) % 100) - 50) / 100;
      return {
        Icon: ICONS[(seed >> 5) % ICONS.length],
        x: ((c + 0.5 + xJ * 0.7) / cols) * 100,
        y: ((r + 0.5 + yJ * 0.7) / rows) * 100,
        size: 16 + ((seed >> 13) % 20),
        rot: ((seed >> 9) % 50) - 25,
        delay: ((seed >> 17) % 100) / 20,
        dur: 7 + ((seed >> 15) % 8),
        floatY: 4 + ((seed >> 19) % 8),
      };
    }).filter(Boolean) as NonNullable<{ Icon: React.ElementType; x: number; y: number; size: number; rot: number; delay: number; dur: number; floatY: number }>[];
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {items.map((it, i) => {
        const Icon = it.Icon;
        return (
          <motion.div key={i} className="absolute text-primary/[0.06] dark:text-primary/[0.09]"
            style={{ left: `${it.x}%`, top: `${it.y}%` }}
            initial={{ rotate: it.rot, opacity: 0.04 }}
            animate={{ y: [-it.floatY, it.floatY, -it.floatY], rotate: [it.rot - 5, it.rot + 5, it.rot - 5], opacity: [0.04, 0.12, 0.04] }}
            transition={{ duration: it.dur, delay: it.delay, repeat: Infinity, ease: "easeInOut" }}>
            <Icon size={it.size} strokeWidth={1.5} />
          </motion.div>
        );
      })}
    </div>
  );
}

export default function SoftwareAiServicePage({ params }: PageProps) {
  const [activeTechTab, setActiveTechTab] = useState<TechCategory>("Frontend");

  const jsonLd = useMemo(
    () => [
      buildServiceJsonLd(SERVICE),
      buildBreadcrumbJsonLd([
        { name: "Services", path: "/services" },
        { name: SERVICE.name, path: servicePath(SERVICE.slug) },
      ]),
    ],
    []
  );

  useSEO({
    title: SERVICE.name,
    description: SERVICE.description,
    keywords: SERVICE.keywords,
    path: servicePath(SERVICE.slug),
    ogImage: SERVICE.heroImage,
    jsonLd,
  });

  return (
    <div className="bg-background min-h-screen">
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#020617] pt-20 pb-8 sm:pb-10 lg:pb-12">
        <HeroBackground />
        <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full border border-cyan-400/8" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 translate-y-1/2 -translate-x-1/3 rounded-full border border-indigo-400/8" aria-hidden />
        <div className="page-container relative z-10">
          <AnimatedSection>
            <nav className="mb-6 flex items-center gap-2 text-sm text-white/40 sm:mb-8">
              <Link href="/services" className="transition-colors hover:text-white/70">Services</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/70">Software & AI Solutions</span>
            </nav>
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 backdrop-blur-sm sm:mb-6">
                <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-cyan-400" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Software & AI Solutions</span>
                <span className="h-3 w-px bg-cyan-400/30" />
                <span className="text-xs text-cyan-400/70">IEC 62304 Compliant</span>
              </div>
              <h1 className="mb-4 font-heading text-[clamp(3rem,5vw,5.75rem)] font-black leading-[0.92] tracking-tight text-white sm:mb-5">
                Intelligent{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-indigo-400">Software</span>
                <br />for Healthcare
              </h1>
              <p className="mb-6 max-w-2xl text-[clamp(0.98rem,1.25vw,1.15rem)] leading-relaxed text-white/65 sm:mb-8">
                Full-spectrum software development - AI/ML, cloud, SaMD compliance, and complete validation lifecycle for next-generation medical technology.
              </p>
              <div className="mb-6 flex flex-wrap gap-2 sm:mb-8">
                {["IEC 62304", "FDA SaMD", "HIPAA", "ISO 27001", "FHIR R4"].map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-xs font-semibold text-white/70 backdrop-blur-sm">
                    <CheckCircle className="h-3 w-3 shrink-0 text-cyan-400" />{b}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 px-8 font-bold text-slate-900 shadow-lg shadow-cyan-500/30 hover:from-cyan-300 hover:to-cyan-400">
                  <Link href="/contact">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl border-white/20 px-8 font-semibold text-white hover:bg-white/10 hover:text-white">
                  <Link href="/services"><ArrowLeft className="mr-2 h-4 w-4" /> All Services</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* KEY METRICS */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#205897] via-[#2a6ba8] to-[#1a4d78] py-14">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 -translate-y-1/2 translate-x-1/3 rounded-full bg-white/8" aria-hidden />
        <div className="page-container relative z-10">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
            {METRICS.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative overflow-hidden rounded-3xl border border-white/18 bg-white/10 px-5 py-4 text-white backdrop-blur-sm shadow-[0_10px_30px_rgba(2,6,23,0.12)] sm:px-6 sm:py-5"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" aria-hidden />
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="font-heading text-3xl font-black leading-none tracking-tight tabular-nums sm:text-[2.15rem]">
                        {m.value}
                      </div>
                      <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/78 sm:text-xs">
                        {m.label}
                      </div>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/15 shadow-inner">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="relative overflow-visible py-24">
        <TechIconsScatter />
        <div className="page-container relative z-10">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-12">
            <div className="space-y-16">
              <AnimatedSection>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background/75 px-4 py-1.5 backdrop-blur-sm dark:bg-[#08111f]/45">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">Overview</span>
                </div>
                <h2 className="mb-6 font-heading text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
                  Software at the Heart of<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">Modern Medical Devices</span>
                </h2>
                <div className="space-y-4 rounded-2xl border border-border/60 bg-background/72 p-5 backdrop-blur-md dark:border-white/10 dark:bg-[#08111f]/45">
                  {SERVICE.overview.map((para, i) => (
                    <p key={i} className="leading-relaxed text-slate-700 dark:text-slate-200">{para}</p>
                  ))}
                </div>
              </AnimatedSection>

              <div>
                <AnimatedSection className="mb-7 flex items-end justify-between border-b border-border pb-3">
                  <div className="rounded-2xl border border-border/50 bg-background/72 px-4 py-3 backdrop-blur-sm dark:border-white/10 dark:bg-[#08111f]/45">
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300">Services Included</p>
                    <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">What We Offer</h2>
                  </div>
                  <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-[11px] font-bold text-cyan-600 sm:inline-flex">
                    {SERVICE.subServices.length} services
                  </span>
                </AnimatedSection>
                <div className="grid gap-5 sm:grid-cols-2">
                  {SERVICE.subServices.map((sub, i) => {
                    const Icon = SUB_ICONS[sub.slug] ?? CheckCircle;
                    const img = SUB_IMAGES[sub.slug];
                    return (
                      <motion.div
                        key={sub.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ delay: i * 0.07 }}
                      >
                        <Link
                          href={`/services/software-ai/${sub.slug}`}
                          className="group block overflow-hidden rounded-2xl border border-border bg-white/95 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/8 dark:bg-[#0a1628]/80"
                        >
                          <div className="relative aspect-[16/9] overflow-hidden bg-[#060d17]">
                            <img
                              src={img}
                              alt={sub.name}
                              loading="lazy"
                              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                            <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-cyan-500/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-900">
                              <Icon className="h-3 w-3" />Software & AI
                            </div>
                            <div className="absolute right-3 top-3 opacity-20 transition-opacity group-hover:opacity-40">
                              <Icon className="h-10 w-10 text-white" />
                            </div>
                            <h3 className="absolute bottom-3 left-4 right-4 font-heading text-lg font-bold leading-tight text-white drop-shadow transition-colors group-hover:text-cyan-200">
                              {sub.name}
                            </h3>
                          </div>
                          <div className="p-5">
                            <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{sub.tagline}</p>
                            <div className="mb-4 flex flex-wrap gap-1.5">
                              {sub.keyPoints.slice(0, 3).map((kp) => (
                                <span key={kp} className="rounded-full border border-cyan-500/20 bg-cyan-500/8 px-2.5 py-1 text-[11px] text-cyan-700 dark:text-cyan-300">
                                  {kp}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 transition-all group-hover:gap-3 dark:text-cyan-400">
                                Explore <ArrowRight className="h-4 w-4" />
                              </span>
                              <span className="rounded-full border border-border/60 bg-secondary/60 px-2 py-0.5 text-[10px] text-slate-600 dark:text-slate-300">
                                {sub.deliverables.length} deliverables
                              </span>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <section className="relative overflow-hidden border-t border-border py-20">
                <div className="page-container relative z-10">
                  <AnimatedSection className="mb-12 text-center">
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300">Expertise</p>
                    <h2 className="mb-3 font-heading text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Core Capabilities</h2>
                    <p className="mx-auto max-w-2xl rounded-2xl border border-border/50 bg-background/70 px-5 py-4 text-slate-700 backdrop-blur-sm dark:border-white/10 dark:bg-[#08111f]/45 dark:text-slate-200">
                      From regulated SaMD development to cloud-native AI platforms, our team brings deep technical and compliance expertise to every engagement.
                    </p>
                  </AnimatedSection>
                  <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICE.capabilities.map((cap, i) => (
                      <motion.div
                        key={cap}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="group flex items-start gap-4 rounded-2xl border border-border bg-white/95 p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/4 hover:shadow-lg dark:bg-[#0a1628]/72"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/20 to-indigo-500/10 transition-transform group-hover:scale-105">
                          <span className="font-heading text-sm font-bold text-cyan-600 dark:text-cyan-400">{String(i + 1).padStart(2, "0")}</span>
                        </div>
                        <p className="mt-1.5 text-sm font-medium leading-snug text-slate-800 transition-colors group-hover:text-primary dark:text-slate-100">{cap}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="relative overflow-hidden border-y border-border py-20">
                <div className="page-container relative z-10">
                  <AnimatedSection className="mb-12 text-center">
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300">Why RMT</p>
                    <h2 className="mb-3 font-heading text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Why Choose RMT</h2>
                    <p className="mx-auto max-w-2xl rounded-2xl border border-border/50 bg-background/70 px-5 py-4 text-slate-700 backdrop-blur-sm dark:border-white/10 dark:bg-[#08111f]/45 dark:text-slate-200">
                      We combine medical device domain expertise with modern software engineering practices to deliver compliant, high-performance solutions.
                    </p>
                  </AnimatedSection>
                  <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICE.whyRMT.map((item, i) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white/95 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/5 dark:bg-[#0a1628]/72"
                      >
                        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-indigo-500/0 transition-all duration-500 group-hover:from-cyan-500/4 group-hover:to-indigo-500/3" />
                        <div className="relative mb-6 flex justify-center">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/15 to-indigo-500/10 ring-2 ring-cyan-500/20 transition-all group-hover:ring-cyan-400/40">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/25 to-indigo-500/15">
                              {(() => {
                                const Icon = WHY_RMT_ICONS[i] ?? ShieldCheck;
                                return <Icon className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />;
                              })()}
                            </div>
                          </div>
                        </div>
                        <h4 className="mb-3 font-heading text-base font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-white">{item.title}</h4>
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="relative overflow-hidden border-t border-border py-20">
                <div className="page-container relative z-10">
                  <AnimatedSection className="mb-10 text-center">
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300">Tech Stack</p>
                    <h2 className="mb-3 font-heading text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Technologies & Platforms We Use</h2>
                    <p className="mx-auto max-w-xl rounded-2xl border border-border/50 bg-background/70 px-5 py-4 text-base text-slate-700 backdrop-blur-sm dark:border-white/10 dark:bg-[#08111f]/45 dark:text-slate-200">
                      We select the right tool for every challenge - proven stacks with healthcare-grade security and compliance.
                    </p>
                  </AnimatedSection>
                  <div className="mb-10 flex flex-wrap justify-center gap-2">
                    {TECH_TABS.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTechTab(tab)}
                        className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                          activeTechTab === tab
                            ? "border-cyan-500 bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                            : "border-border bg-card text-slate-600 hover:border-cyan-400/40 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTechTab}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.22 }}
                      className="mx-auto grid max-w-4xl grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6"
                    >
                      {TECH_ITEMS[activeTechTab].map((tech, i) => {
                        const TechIcon = tech.icon;
                        return (
                          <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.88 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="group flex cursor-default flex-col items-center gap-3 rounded-xl border border-border bg-white/95 p-4 backdrop-blur-sm transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-500/5 hover:shadow-lg dark:bg-[#0a1628]/72"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 transition-colors group-hover:bg-cyan-500/15">
                              <TechIcon className="h-6 w-6 text-primary transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400" />
                            </div>
                            <span className="text-center text-xs font-semibold leading-tight text-slate-600 transition-colors group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white">
                              {tech.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </section>

              <section className="relative overflow-hidden py-20">
                <div className="page-container relative z-10">
                  <AnimatedSection className="mb-14 text-center">
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300">Methodology</p>
                    <h2 className="mb-3 font-heading text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Our Approach</h2>
                    <p className="mx-auto max-w-xl rounded-2xl border border-border/50 bg-background/70 px-5 py-4 text-slate-700 backdrop-blur-sm dark:border-white/10 dark:bg-[#08111f]/45 dark:text-slate-200">A structured, audit-ready process delivering compliant, production-quality healthcare software.</p>
                  </AnimatedSection>
                  <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {APPROACH_STEPS.map((s, i) => {
                      const StepIcon = s.icon;
                      return (
                        <motion.div
                          key={s.step}
                          initial={{ opacity: 0, y: 24 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="group relative flex h-full flex-col rounded-2xl border border-border bg-white/95 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/5 dark:bg-[#0a1628]/72"
                        >
                          <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/20 to-indigo-500/10 transition-transform group-hover:scale-105">
                              <StepIcon className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                            </div>
                            <h3 className="min-w-0 font-heading text-lg font-bold leading-tight text-slate-900 dark:text-white">{s.title}</h3>
                          </div>
                          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{s.desc}</p>
                          {i < APPROACH_STEPS.length - 1 && (
                            <div className="absolute -right-2.5 top-1/2 hidden h-px w-5 bg-gradient-to-r from-cyan-500/40 to-transparent lg:block" aria-hidden />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </section>

              <section className="relative overflow-hidden border-y border-border py-16">
                <div className="page-container relative z-10">
                  <AnimatedSection className="mb-10 text-center">
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300">Regulatory</p>
                    <h2 className="mb-2 font-heading text-3xl font-bold text-slate-900 dark:text-white">Built for Regulated Healthcare Software</h2>
                    <p className="mx-auto max-w-lg rounded-2xl border border-border/50 bg-background/70 px-5 py-4 text-sm text-slate-700 backdrop-blur-sm dark:border-white/10 dark:bg-[#08111f]/45 dark:text-slate-200">Every line of code satisfies the most rigorous health IT frameworks.</p>
                  </AnimatedSection>
                  <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
                    {STANDARDS.map((std, i) => (
                      <motion.span
                        key={std}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="inline-flex cursor-default items-center gap-2.5 rounded-full border border-cyan-500/25 bg-background/75 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-sm transition-all hover:border-cyan-400/50 hover:bg-cyan-500/5 hover:shadow-md dark:bg-[#08111f]/55 dark:text-slate-100"
                      >
                        <ShieldCheck className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" />
                        {std}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </section>

              <section className="relative overflow-hidden py-24">
                <div className="page-container relative z-10">
                  <AnimatedSection className="mb-10 flex items-end justify-between gap-4 border-b border-border pb-3">
                    <div className="rounded-2xl border border-border/50 bg-background/70 px-5 py-4 backdrop-blur-sm dark:border-white/10 dark:bg-[#08111f]/45">
                      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300">Portfolio</p>
                      <h2 className="font-heading text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Our Projects</h2>
                      <p className="mt-2 max-w-xl text-sm text-slate-700 dark:text-slate-200">Software and AI platforms delivered for healthcare and digital health clients.</p>
                    </div>
                    <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-[11px] font-bold text-cyan-600 sm:inline-flex">
                      {PORTFOLIO.length} projects
                    </span>
                  </AnimatedSection>
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {PORTFOLIO.map((p, i) => (
                      <motion.article
                        key={p.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="group overflow-hidden rounded-2xl border border-border bg-white/95 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/6 dark:bg-[#0a1628]/72"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-[#060d17]">
                          <img
                            src={p.image}
                            alt={p.name}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                          <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-cyan-500/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-900">
                            <Brain className="h-3 w-3" />{p.tags[0]}
                          </div>
                          <h3 className="absolute bottom-3 left-4 right-4 font-heading text-lg font-bold text-white drop-shadow">
                            {p.name}
                          </h3>
                        </div>
                        <div className="p-5">
                          <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{p.description}</p>
                          <div className="mb-4 flex flex-wrap gap-1.5">
                            {p.tags.map((t) => (
                              <span key={t} className="rounded-full border border-cyan-500/20 bg-cyan-500/8 px-2 py-0.5 text-[11px] text-cyan-700 dark:text-cyan-300">
                                {t}
                              </span>
                            ))}
                          </div>
                          <Link href="/contact" className="flex items-center gap-1.5 text-sm font-semibold text-cyan-600 transition-all group-hover:gap-3 dark:text-cyan-400">
                            Explore Project <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </section>

              <section className="relative overflow-hidden border-t border-border py-16">
                <div className="page-container relative z-10">
                  <AnimatedSection>
                    <div className="relative w-full overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-[#020617] via-[#050d1f] to-[#0a1628] p-8 shadow-2xl md:p-12">
                      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5" />
                      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 -translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-500/5" />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
                      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-2xl">
                          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5">
                            <Rocket className="h-3.5 w-3.5 text-cyan-400" />
                            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">Ready to Start?</span>
                          </div>
                          <h2 className="mb-3 font-heading text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
                            Let's Build Your Healthcare<br />Software Together
                          </h2>
                          <p className="text-sm leading-relaxed text-white/60 md:text-base">
                            Our Software & AI specialists are available for a free initial consultation. Tell us about your project and we'll respond within one business day.
                          </p>
                        </div>
                        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:min-w-[320px]">
                          <Button asChild size="lg" className="flex-1 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 font-bold text-slate-900 shadow-lg shadow-cyan-500/25 hover:from-cyan-300 hover:to-cyan-400">
                            <Link href="/contact"><Mail className="mr-2 h-4 w-4" /> Send Enquiry</Link>
                          </Button>
                          <Button asChild size="lg" variant="outline" className="flex-1 rounded-xl border-white/20 text-white hover:bg-white/10 hover:text-white">
                            <Link href="/about"><Users className="mr-2 h-4 w-4" /> Meet the Team</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </section>
            </div>

            <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start lg:h-fit lg:justify-self-end">
              <div className="space-y-5">
                <AnimatedSection className="rounded-2xl border border-cyan-500/25 bg-gradient-to-br from-[#020617] to-[#0a1628] p-6 text-white shadow-xl">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/15">
                    <Brain className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-bold">Get a Quote</h3>
                  <p className="mb-5 text-sm leading-relaxed text-white/65">
                    Discuss your software or AI project with our specialists and receive a tailored proposal within one business day.
                  </p>
                  <Button asChild className="mb-3 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 font-bold text-slate-900 hover:from-cyan-300 hover:to-cyan-400">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                  <a href="tel:+15551234567" className="flex items-center justify-center gap-2 text-xs text-white/50 transition-colors hover:text-white">
                    <Phone className="h-3.5 w-3.5" />Schedule a Call
                  </a>
                </AnimatedSection>

                <AnimatedSection className="rounded-2xl border border-border bg-white/95 p-5 dark:bg-card">
                  <h4 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-900 dark:text-white">
                    <ShieldCheck className="h-3.5 w-3.5 text-cyan-500" />Compliance Standards
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {STANDARDS.map((s) => (
                      <span key={s} className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/60 px-2.5 py-1.5 text-xs font-medium text-slate-800 transition-colors hover:border-cyan-400/40 dark:text-slate-100">
                        <ShieldCheck className="h-3 w-3 shrink-0 text-cyan-500" />{s}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>

                <AnimatedSection className="rounded-2xl border border-border bg-white/95 p-5 dark:bg-card">
                  <h4 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-900 dark:text-white">
                    <Globe className="h-3.5 w-3.5 text-primary" />Other Services
                  </h4>
                  <div className="flex flex-col gap-0.5">
                    {ALL_SERVICES.filter((s) => s.slug !== "software-ai").map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="group flex items-center gap-2 border-b border-border/60 py-2 text-sm text-slate-600 transition-colors hover:text-primary last:border-0 dark:text-slate-300"
                      >
                        <span className="flex-1">{s.shortName}</span>
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100" />
                      </Link>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
