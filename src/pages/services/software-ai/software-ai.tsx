import React, { useState, useEffect, useMemo } from "react";
import { Link } from "wouter";
import {
  ArrowRight, ArrowLeft, ChevronRight, CheckCircle, Shield,
  Brain, Cloud, Bug, MonitorSmartphone, Sparkles, ShieldCheck,
  Code2, Cpu, Terminal, GitBranch, Workflow, Activity,
  Database, Server, Lock, Network, Binary, Fingerprint,
  Layers, Zap, Smartphone, Boxes, ScanLine, CircuitBoard, Cog,
  Globe, Phone, Mail, Users, Star, Award, BarChart3,
  Gauge, FileCheck, Rocket,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { ALL_SERVICES } from "@/data/services";

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
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
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

  useSEO({
    title: "Software & AI Solutions — RMT Medical Technologies",
    description: "Full-spectrum medical software development including AI/ML, cloud, SaMD compliance, and complete software validation lifecycle.",
    keywords: "medical device software, AI machine learning healthcare, SaMD, IEC 62304",
  });

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* HERO */}
      <section className="relative bg-[#020617] overflow-hidden min-h-[88vh] flex items-center py-16">
        <HeroBackground />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border border-cyan-400/8 -translate-y-1/2 translate-x-1/3 pointer-events-none" aria-hidden />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full border border-indigo-400/8 translate-y-1/2 -translate-x-1/3 pointer-events-none" aria-hidden />

        <div className="page-container relative z-10">
          <AnimatedSection>
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-10">
              <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white/70">Software & AI Solutions</span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2.5 bg-cyan-400/10 border border-cyan-400/25 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                <span className="text-cyan-300 text-xs font-bold uppercase tracking-[0.18em]">Software & AI Solutions</span>
                <span className="w-px h-3 bg-cyan-400/30" />
                <span className="text-cyan-400/70 text-xs">IEC 62304 Compliant</span>
              </div>

              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.95] tracking-tight">
                Intelligent<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-indigo-400">Software</span>
                <br />for Healthcare
              </h1>

              <p className="text-white/65 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
                Full-spectrum software development — AI/ML, cloud, SaMD compliance, and complete
                validation lifecycle for next-generation medical technology.
              </p>

              <div className="flex flex-wrap gap-2.5 mb-10">
                {["IEC 62304", "FDA SaMD", "HIPAA", "ISO 27001", "FHIR R4"].map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/15 text-white/70 text-xs font-semibold backdrop-blur-sm">
                    <CheckCircle className="w-3 h-3 text-cyan-400 shrink-0" />{b}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-xl px-8 bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-900 hover:from-cyan-300 hover:to-cyan-400 font-bold shadow-lg shadow-cyan-500/30">
                  <Link href="/contact">Get a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl px-8 border-white/20 text-white hover:bg-white/10 hover:text-white font-semibold">
                  <Link href="/services"><ArrowLeft className="mr-2 w-4 h-4" /> All Services</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* KEY METRICS */}
      <section className="relative bg-gradient-to-r from-cyan-600 via-cyan-500 to-teal-600 py-14 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/8 -translate-y-1/2 translate-x-1/3 pointer-events-none" aria-hidden />
        <div className="page-container relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px">
            {METRICS.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div key={m.label}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="text-center text-white px-4 sm:px-8 py-4">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="font-heading text-4xl sm:text-5xl font-black tabular-nums leading-none mb-2">{m.value}</div>
                  <div className="text-white/75 text-sm font-medium">{m.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="relative py-24 bg-background overflow-hidden">
        <TechIconsScatter />
        <div className="page-container relative z-10">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">

            <div className="lg:col-span-2 space-y-16">

              {/* Overview */}
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Overview</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
                  Software at the Heart of<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">Modern Medical Devices</span>
                </h2>
                <div className="space-y-4">
                  {SERVICE.overview.map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
                  ))}
                </div>
              </AnimatedSection>

              {/* Sub-services */}
              <div>
                <AnimatedSection className="flex items-end justify-between mb-7 pb-3 border-b border-border">
                  <div>
                    <p className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">Services Included</p>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">What We Offer</h2>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold text-cyan-600 bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20 shrink-0">
                    {SERVICE.subServices.length} services
                  </span>
                </AnimatedSection>

                <div className="grid sm:grid-cols-2 gap-5">
                  {SERVICE.subServices.map((sub, i) => {
                    const Icon = SUB_ICONS[sub.slug] ?? CheckCircle;
                    const img = SUB_IMAGES[sub.slug];
                    return (
                      <motion.div key={sub.slug}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }} transition={{ delay: i * 0.07 }}>
                        <Link href={`/services/software-ai/${sub.slug}`}
                          className="group block rounded-2xl overflow-hidden border border-border bg-card hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/8 transition-all duration-300">
                          <div className="relative aspect-[16/9] overflow-hidden bg-[#060d17]">
                            <img src={img} alt={sub.name} loading="lazy"
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                            <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/95 text-slate-900 text-[10px] font-bold uppercase tracking-widest">
                              <Icon className="w-3 h-3" />Software & AI
                            </div>
                            <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-40 transition-opacity">
                              <Icon className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="absolute bottom-3 left-4 right-4 font-heading text-white text-lg font-bold leading-tight drop-shadow group-hover:text-cyan-200 transition-colors">
                              {sub.name}
                            </h3>
                          </div>
                          <div className="p-5">
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{sub.tagline}</p>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {sub.keyPoints.slice(0, 3).map((kp) => (
                                <span key={kp} className="text-[11px] px-2.5 py-1 rounded-full bg-cyan-500/8 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">{kp}</span>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="inline-flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-semibold text-sm group-hover:gap-3 transition-all">
                                Explore <ArrowRight className="w-4 h-4" />
                              </span>
                              <span className="text-[10px] text-muted-foreground bg-secondary/60 px-2 py-0.5 rounded-full border border-border/60">
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

            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-5">
                <AnimatedSection className="rounded-2xl p-6 bg-gradient-to-br from-[#020617] to-[#0a1628] border border-cyan-500/25 shadow-xl text-white">
                  <div className="w-10 h-10 bg-cyan-400/15 rounded-xl flex items-center justify-center mb-4">
                    <Brain className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">Get a Quote</h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-5">
                    Discuss your software or AI project with our specialists and receive a tailored proposal within one business day.
                  </p>
                  <Button asChild className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-900 hover:from-cyan-300 hover:to-cyan-400 font-bold mb-3">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                  <a href="tel:+15551234567" className="flex items-center justify-center gap-2 text-white/50 text-xs hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5" />Schedule a Call
                  </a>
                </AnimatedSection>

                <AnimatedSection className="rounded-2xl border border-border bg-card p-5">
                  <h4 className="font-semibold text-foreground text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />Compliance Standards
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {STANDARDS.map((s) => (
                      <span key={s} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-secondary/60 text-foreground border border-border hover:border-cyan-400/40 transition-colors">
                        <ShieldCheck className="w-3 h-3 text-cyan-500 shrink-0" />{s}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>

                <AnimatedSection className="rounded-2xl border border-border bg-card p-5">
                  <h4 className="font-semibold text-foreground text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-primary" />Other Services
                  </h4>
                  <div className="flex flex-col gap-0.5">
                    {ALL_SERVICES.filter((s) => s.slug !== "software-ai").map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`}
                        className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/60 last:border-0">
                        <span className="flex-1">{s.shortName}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all" />
                      </Link>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES — full-width centered */}
      <section className="py-20 bg-background border-t border-border">
        <div className="page-container">
          <AnimatedSection className="text-center mb-12">
            <p className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Expertise</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">Core Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From regulated SaMD development to cloud-native AI platforms, our team brings deep technical and compliance expertise to every engagement.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {SERVICE.capabilities.map((cap, i) => (
              <motion.div key={cap}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-border bg-card hover:border-cyan-400/50 hover:bg-cyan-500/4 hover:shadow-lg transition-all duration-300">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/10 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                  <span className="font-heading text-sm font-bold text-cyan-600 dark:text-cyan-400">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="text-sm font-medium text-foreground leading-snug mt-1.5 group-hover:text-primary transition-colors">{cap}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE RMT — full-width centered */}
      <section className="py-20 bg-secondary/30 border-y border-border">
        <div className="page-container">
          <AnimatedSection className="text-center mb-12">
            <p className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Why RMT</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">Why Choose RMT</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine medical device domain expertise with modern software engineering practices to deliver compliant, high-performance solutions.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {SERVICE.whyRMT.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-card hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 overflow-hidden">
                {/* Subtle bg gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-indigo-500/0 group-hover:from-cyan-500/4 group-hover:to-indigo-500/3 transition-all duration-500 pointer-events-none rounded-2xl" />
                {/* Icon ring */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/15 to-indigo-500/10 ring-2 ring-cyan-500/20 flex items-center justify-center group-hover:ring-cyan-400/40 transition-all">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/25 to-indigo-500/15 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 text-white text-[10px] font-bold shadow-lg">{i + 1}</span>
                </div>
                <h4 className="font-heading text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20 bg-background border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="page-container relative z-10">
          <AnimatedSection className="text-center mb-10">
            <p className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Tech Stack</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">Technologies & Platforms We Use</h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              We select the right tool for every challenge — proven stacks with healthcare-grade security and compliance.
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {TECH_TABS.map((tab) => (
              <button key={tab} onClick={() => setActiveTechTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeTechTab === tab
                    ? "bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/25"
                    : "bg-card text-muted-foreground border-border hover:border-cyan-400/40 hover:text-foreground"
                }`}>
                {tab}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeTechTab}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {TECH_ITEMS[activeTechTab].map((tech, i) => {
                const TechIcon = tech.icon;
                return (
                  <motion.div key={tech.name}
                    initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex flex-col items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-cyan-400/50 hover:bg-cyan-500/5 hover:shadow-lg transition-all duration-200 cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-cyan-500/15 transition-colors">
                      <TechIcon className="w-6 h-6 text-primary group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">{tech.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-20 bg-background">
        <div className="page-container">
          <AnimatedSection className="text-center mb-14">
            <p className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Methodology</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">Our Approach</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">A structured, audit-ready process delivering compliant, production-quality healthcare software.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {APPROACH_STEPS.map((s, i) => {
              const StepIcon = s.icon;
              return (
                <motion.div key={s.step}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="relative group bg-card border border-border rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300">
                  <div className="font-heading text-7xl font-black text-primary/7 leading-none mb-4 -mt-1 select-none">{s.step}</div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <StepIcon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  {i < APPROACH_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" aria-hidden />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPLIANCE STANDARDS */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="page-container">
          <AnimatedSection className="text-center mb-10">
            <p className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Regulatory</p>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Built for Regulated Healthcare Software</h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm">Every line of code satisfies the most rigorous health IT frameworks.</p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {STANDARDS.map((std, i) => (
              <motion.span key={std}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-cyan-500/25 bg-background text-sm font-semibold text-foreground shadow-sm hover:border-cyan-400/50 hover:bg-cyan-500/5 hover:shadow-md transition-all cursor-default">
                <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />{std}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 bg-background">
        <div className="page-container">
          <AnimatedSection className="flex items-end justify-between gap-4 mb-10 pb-3 border-b border-border">
            <div>
              <p className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2">Portfolio</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">Our Projects</h2>
              <p className="text-muted-foreground text-sm mt-2 max-w-xl">Software and AI platforms delivered for healthcare and digital health clients.</p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold text-cyan-600 bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20 shrink-0">
              {PORTFOLIO.length} projects
            </span>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PORTFOLIO.map((p, i) => (
              <motion.article key={p.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/6 transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#060d17]">
                  <img src={p.image} alt={p.name} loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-cyan-500/95 text-slate-900">
                    <Brain className="w-3 h-3" />{p.tags[0]}
                  </div>
                  <h3 className="absolute bottom-3 left-4 right-4 font-heading text-white text-lg font-bold drop-shadow">{p.name}</h3>
                </div>
                <div className="p-5">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-500/8 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">{t}</span>
                    ))}
                  </div>
                  <Link href="/contact" className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-semibold text-sm group-hover:gap-3 transition-all">
                    Explore Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background border-t border-border">
        <div className="page-container">
          <AnimatedSection>
            <div className="relative w-full bg-gradient-to-br from-[#020617] via-[#050d1f] to-[#0a1628] rounded-3xl p-8 md:p-12 border border-cyan-500/20 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-cyan-500/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-indigo-500/5 translate-y-1/2 -translate-x-1/2 pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
              <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-1.5 mb-5">
                    <Rocket className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-cyan-300 text-xs font-bold uppercase tracking-wider">Ready to Start?</span>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                    Let's Build Your Healthcare<br />Software Together
                  </h2>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">
                    Our Software & AI specialists are available for a free initial consultation. Tell us about your project and we'll respond within one business day.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 lg:min-w-[320px] shrink-0">
                  <Button asChild size="lg" className="flex-1 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-900 hover:from-cyan-300 hover:to-cyan-400 font-bold shadow-lg shadow-cyan-500/25">
                    <Link href="/contact"><Mail className="w-4 h-4 mr-2" /> Send Enquiry</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="flex-1 rounded-xl border-white/20 text-white hover:bg-white/10 hover:text-white">
                    <Link href="/about"><Users className="w-4 h-4 mr-2" /> Meet the Team</Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
