import React, { useState } from "react";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, GraduationCap, FlaskConical, Lightbulb, Settings2, Users, Calendar, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";

const DnaBg = () => (
  <svg viewBox="0 0 100 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M 20 10 Q 50 30 80 50 Q 50 70 20 90 Q 50 110 80 130 Q 50 150 20 170 Q 50 190 80 210" />
    <path d="M 80 10 Q 50 30 20 50 Q 50 70 80 90 Q 50 110 20 130 Q 50 150 80 170 Q 50 190 20 210" />
    <line x1="20" y1="50" x2="80" y2="50" /><line x1="20" y1="70" x2="80" y2="70" />
    <line x1="20" y1="90" x2="80" y2="90" /><line x1="20" y1="110" x2="80" y2="110" />
    <line x1="20" y1="130" x2="80" y2="130" /><line x1="20" y1="150" x2="80" y2="150" />
  </svg>
);

interface TrainingModule {
  name: string;
  duration: string;
  level: string;
  description: string;
}

interface TrainingTrack {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  tagline: string;
  color: string;
  image: string;
  modules: TrainingModule[];
  outcomes: string[];
  audience: string;
}

const tracks: TrainingTrack[] = [
  {
    id: "regulatory",
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Regulatory & Quality Compliance Training",
    subtitle: "Compliance Training",
    tagline: "Master the regulatory frameworks governing medical device development and manufacturing.",
    color: "from-blue-600/80 to-blue-800/90",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    audience: "Quality engineers, regulatory affairs professionals, QMS managers, senior management",
    modules: [
      { name: "HIPAA Compliance", duration: "2 days", level: "Intermediate", description: "Healthcare data privacy and security requirements, breach notification, and practical compliance strategies for medical device companies handling health data." },
      { name: "ISO 13485:2016", duration: "3 days", level: "Foundation", description: "Comprehensive implementation guide for the medical device QMS standard — documentation requirements, process approach, and internal audit techniques." },
      { name: "ISO 14971", duration: "2 days", level: "Intermediate", description: "Medical device risk management throughout the product lifecycle — hazard identification, risk analysis, risk control, and residual risk evaluation." },
      { name: "ISO 62304", duration: "2 days", level: "Intermediate", description: "Software lifecycle requirements for medical device software — safety classification, SDLC activities, change management, and problem resolution." },
      { name: "ISO 27001", duration: "2 days", level: "Intermediate", description: "Information security management system implementation for medical device organisations — asset management, access control, and incident response." },
      { name: "GMP Compliance", duration: "1.5 days", level: "Foundation", description: "Good Manufacturing Practice fundamentals for medical device manufacturing — documentation, environmental controls, equipment qualification, and batch record practices." },
    ],
    outcomes: ["Regulatory framework competency", "Internal audit readiness", "QMS documentation skills", "Risk management proficiency"],
  },
  {
    id: "engineering",
    icon: <Settings2 className="w-6 h-6" />,
    title: "Engineering & Product Development Workshops",
    subtitle: "Engineering Workshops",
    tagline: "Practical engineering skills for medical device design, development, and risk management.",
    color: "from-teal-600/80 to-teal-800/90",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    audience: "Medical device engineers, product development managers, R&D teams, design control leads",
    modules: [
      { name: "Design Control & Management", duration: "3 days", level: "Intermediate", description: "Medical device design control requirements per 21 CFR 820.30 and ISO 13485 — design inputs, design outputs, design reviews, design verification and validation, and design transfer." },
      { name: "FMEA & DFMEA", duration: "2 days", level: "Intermediate", description: "Failure Mode and Effects Analysis (FMEA) and Design FMEA methodology for medical devices — structured team approach, severity/occurrence/detectability scoring, and risk priority number (RPN) reduction." },
      { name: "Healthtech Workforce Training", duration: "2 days", level: "Foundation", description: "Comprehensive introduction to the medical device industry for engineers transitioning from other sectors — regulatory landscape, design controls, quality systems, and technical documentation." },
    ],
    outcomes: ["Design control implementation", "FMEA facilitation skills", "V&V planning competency", "Technical documentation proficiency"],
  },
  {
    id: "research",
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Research & Entrepreneurship Modules",
    subtitle: "Research & Innovation",
    tagline: "Bridging scientific research and commercial healthcare technology development.",
    color: "from-violet-600/80 to-violet-800/90",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    audience: "Researchers, clinicians, startup founders, medical technology entrepreneurs",
    modules: [
      { name: "Research Methodology", duration: "2 days", level: "Foundation", description: "Structured approaches to medical technology research — study design, literature review, data collection, statistical analysis, and publication/patent strategy." },
      { name: "Entrepreneurship in Healthtech", duration: "2 days", level: "Foundation", description: "Building a successful medical technology company from a research concept — value proposition, market analysis, business model, funding strategy, and go-to-market planning." },
      { name: "Business Plan & Technocommercial Feasibility", duration: "1.5 days", level: "Intermediate", description: "Developing investment-ready business plans for medical technology ventures — market sizing, financial projections, risk analysis, regulatory pathway costing, and investor pitch preparation." },
    ],
    outcomes: ["Research commercialisation skills", "Business plan development", "Market analysis capability", "Investment pitch readiness"],
  },
  {
    id: "laboratory",
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Scientific & Laboratory Skills Workshop",
    subtitle: "Lab Skills",
    tagline: "Advanced analytical and laboratory techniques for pharmaceutical and medical device testing.",
    color: "from-emerald-600/80 to-emerald-800/90",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    audience: "Laboratory scientists, analytical chemists, pharmaceutical QC professionals, research scientists",
    modules: [
      { name: "HPLC (High-Performance Liquid Chromatography)", duration: "3 days", level: "Intermediate", description: "Practical HPLC theory, instrument operation, method development, and method validation for pharmaceutical and medical device applications — covering reversed-phase, ion-exchange, and size-exclusion modes." },
      { name: "UV Spectrophotometry", duration: "1.5 days", level: "Foundation", description: "UV-Vis spectrophotometry principles and practical applications — instrument calibration, Beer-Lambert law, quantitative analysis, and method validation for pharmaceutical QC." },
      { name: "Drug/API Synthesis", duration: "3 days", level: "Advanced", description: "Synthetic organic chemistry techniques for active pharmaceutical ingredient synthesis — reaction types, purification methods, characterisation, and scale-up considerations." },
      { name: "Pharmacokinetics & Pharmacodynamics", duration: "2 days", level: "Advanced", description: "PK/PD principles and their application to drug-device combination products — absorption, distribution, metabolism, excretion (ADME), and PK/PD modelling." },
    ],
    outcomes: ["Advanced analytical technique proficiency", "Method development skills", "Data analysis capability", "GLP documentation competency"],
  },
];

export default function Training() {
  const [active, setActive] = useState<string>("regulatory");
  const activeTrack = tracks.find((t) => t.id === active)!;

  useSEO({
    title: "Training & Workshops",
    description: "Professional medical device training and workshops — regulatory compliance (ISO 13485, ISO 14971), engineering (FMEA, design control), research entrepreneurship, and laboratory skills.",
    keywords: "medical device training, ISO 13485 training, regulatory compliance workshop, FMEA training, GMP training, HPLC workshop",
    path: "/training",
  });

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* HERO */}
      <section className="relative py-24 bg-[#060d17] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/8 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-72 h-72 opacity-[0.05] text-white pointer-events-none"><DnaBg /></div>
        <div className="page-container relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Professional Development</span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
                Training &<br /><span className="text-primary">Workshops</span>
              </h1>
              <p className="text-white/65 text-xl leading-relaxed mb-8">
                Practical, standards-focused training programmes delivered by industry practitioners — building the regulatory, engineering, scientific, and entrepreneurship capabilities your team needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="rounded-lg h-11 px-7 font-semibold">
                  <Link href="/contact">Enquire About Training <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Users className="w-4 h-4" />
                  In-person & online delivery
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* TRACK TABS (matching image 2 style) */}
      <section className="py-14 bg-background">
        <div className="page-container">

          {/* Tab selectors */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {tracks.map((track) => (
              <button key={track.id} onClick={() => setActive(track.id)}
                className={`text-left p-4 rounded-xl border transition-all ${active === track.id ? "border-primary bg-primary/5 shadow-sm" : "border-border bg-card hover:border-primary/40"}`}>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2.5 transition-all ${active === track.id ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                  {track.icon}
                </div>
                <p className={`font-semibold text-xs leading-snug ${active === track.id ? "text-primary" : "text-foreground"}`}>{track.subtitle}</p>
              </button>
            ))}
          </div>

          {/* Active track detail — columns style like image 2 */}
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.22 }}>

              <div className="grid lg:grid-cols-3 gap-8">

                {/* Track intro */}
                <div className="lg:col-span-1">
                  <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] mb-5 bg-gradient-to-br ${activeTrack.color}`}>
                    <img src={activeTrack.image} alt={activeTrack.title} className="w-full h-full object-cover mix-blend-overlay opacity-70" />
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white mb-3">
                        {activeTrack.icon}
                      </div>
                      <h2 className="font-heading text-xl font-bold text-white leading-tight">{activeTrack.title}</h2>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{activeTrack.tagline}</p>
                  <div className="bg-muted rounded-xl p-4">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5">Target Audience</p>
                    <p className="text-sm text-foreground">{activeTrack.audience}</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    {activeTrack.outcomes.map((o) => (
                      <div key={o} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                        {o}
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full mt-5 rounded-lg">
                    <Link href="/contact">Enquire Now <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>

                {/* Modules — the 4-column teal table style from image 2 */}
                <div className="lg:col-span-2">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4 pb-3 border-b border-border">
                    {activeTrack.title} — Modules
                  </h3>
                  <div className="space-y-3">
                    {activeTrack.modules.map((module, i) => (
                      <motion.div key={module.name} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
                        className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-sm transition-all">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h4 className="font-bold text-foreground text-sm leading-snug">{module.name}</h4>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="flex items-center gap-1 text-xs text-muted-foreground border border-border px-2 py-0.5 rounded-full">
                              <Clock className="w-3 h-3" />{module.duration}
                            </span>
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${module.level === "Foundation" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : module.level === "Advanced" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"}`}>
                              {module.level}
                            </span>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-xs leading-relaxed">{module.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ALL TRACKS OVERVIEW */}
      <section className="py-16 bg-secondary/30">
        <div className="page-container">
          <AnimatedSection className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">All Programmes</p>
            <h2 className="font-heading text-3xl font-bold text-foreground">Training Tracks Overview</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tracks.map((track, i) => (
              <motion.button key={track.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                onClick={() => { setActive(track.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="text-left group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all">
                <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${track.color}`}>
                  <img src={track.image} alt={track.title} className="w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center text-primary">{track.icon}</div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide">{track.subtitle}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-xs leading-snug mb-1 group-hover:text-primary transition-colors">{track.title}</h3>
                  <p className="text-xs text-muted-foreground">{track.modules.length} modules available</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="page-container text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Ready to Upskill Your Team?</h2>
            <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">All programmes are available as in-house group training, public scheduled courses, or custom workshops tailored to your organisation.</p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-lg font-bold h-12 px-8">
              <Link href="/contact">Request a Training Proposal</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
