import React, { useMemo, useRef } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Shield,
  ShieldCheck,
  ScrollText,
  FileSearch,
  Target,
  Globe,
  Medal,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { ALL_SERVICES } from "@/data/services";
import { buildBreadcrumbJsonLd, buildServiceJsonLd, servicePath, subServicePath } from "@/lib/service-seo";
import { ServiceCapabilitiesBlock } from "../_shared/ServiceTemplates";

const SERVICE = ALL_SERVICES.find((s) => s.slug === "regulatory-compliance")!;

const PERFORMANCE_STATS = [
  { label: "Approval Rate", value: "98%" },
  { label: "Jurisdictions", value: "40+" },
  { label: "Submissions", value: "1,200+" },
] as const;

const REGULATORY_STANDARDS = [
  "ISO 13485",
  "ISO 14971",
  "ISO 10993-1:2025",
  "ISO 10993-17:2023",
  "EU MDR 2017/745",
  "FDA 21 CFR",
];

function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <div className={center ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">{eyebrow}</p> : null}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">{title}</h2>
      {description ? <div className={`h-px w-16 bg-primary/50 mb-5 ${center ? "mx-auto" : ""}`} /> : null}
      {description ? <p className="text-muted-foreground leading-relaxed">{description}</p> : null}
    </div>
  );
}

function StatStrip() {
  return (
    <section className="border-b border-white/10 bg-primary">
      <div className="page-container py-4 md:py-5">
        <div className="grid grid-cols-3 divide-x divide-white/15">
          {PERFORMANCE_STATS.map((stat) => (
            <div key={stat.label} className="text-center text-white px-3 py-1.5">
              <p className="font-heading text-xl sm:text-2xl md:text-3xl font-bold leading-none">{stat.value}</p>
              <p className="text-white/70 text-[10px] sm:text-xs uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubServiceCard({
  index,
  name,
  tagline,
}: {
  index: number;
  name: string;
  tagline: string;
}) {
  const themeClasses = [
    "from-primary/12 via-background to-background dark:from-primary/20",
    "from-cyan-500/12 via-background to-background dark:from-cyan-500/20",
    "from-sky-500/12 via-background to-background dark:from-sky-500/20",
    "from-indigo-500/12 via-background to-background dark:from-indigo-500/20",
  ];
  const accentClasses = [
    "border-primary/20 bg-primary/10 text-primary",
    "border-cyan-500/25 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
    "border-sky-500/25 bg-sky-500/10 text-sky-700 dark:text-sky-300",
    "border-indigo-500/25 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
  ];
  const theme = themeClasses[index % themeClasses.length];
  const accent = accentClasses[index % accentClasses.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative h-full min-h-[210px] overflow-hidden rounded-[1.8rem] border border-border/80 bg-card/90 p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-default"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${theme} opacity-100 transition-opacity duration-300 group-hover:opacity-90`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.55),transparent_34%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_34%)]" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xs font-bold shadow-sm ${accent}`}>
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-heading text-xl sm:text-[1.4rem] font-bold text-foreground leading-tight">{name}</h3>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{tagline}</p>
        </div>
      </div>
    </motion.article>
  );
}

function StackDetailCard({
  index,
  name,
  tagline,
  keyPoints,
}: {
  index: number;
  name: string;
  tagline: string;
  keyPoints: string[];
}) {
  const themeClasses = [
    "from-primary/12 via-background to-background dark:from-primary/18",
    "from-cyan-500/12 via-background to-background dark:from-cyan-500/18",
    "from-sky-500/12 via-background to-background dark:from-sky-500/18",
    "from-indigo-500/12 via-background to-background dark:from-indigo-500/18",
  ];
  const accentClasses = [
    "border-primary/20 bg-primary/10 text-primary",
    "border-cyan-500/25 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
    "border-sky-500/25 bg-sky-500/10 text-sky-700 dark:text-sky-300",
    "border-indigo-500/25 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
  ];
  const theme = themeClasses[index % themeClasses.length];
  const accent = accentClasses[index % accentClasses.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="group relative min-h-[270px] overflow-hidden rounded-[1.8rem] border border-border/80 bg-card/90 p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${theme} opacity-100`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.55),transparent_34%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_34%)]" />
        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xs font-bold shadow-sm ${accent}`}>
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>

        <div className="mt-5">
          <h3 className="font-heading text-xl sm:text-[1.35rem] font-bold text-foreground leading-tight">{name}</h3>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{tagline}</p>
        </div>

        <ul className="mt-5 space-y-2.5">
          {keyPoints.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function WhyCard({ title, desc, icon: Icon }: { title: string; desc: string; icon: React.ElementType }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-lg transition-all">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-heading font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

export default function RegulatoryComplianceServicePage() {
  const stackRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start end", "end start"],
  });
  const columnOneY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 42]);
  const columnTwoY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 16, reduceMotion ? 0 : 66]);
  const columnThreeY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 34, reduceMotion ? 0 : 92]);

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
    <div className="bg-background min-h-screen pt-16">
      <PageHero
        eyebrow="Regulatory Affairs"
        title={SERVICE.name}
        description={SERVICE.tagline}
        backgroundImage={SERVICE.heroImage}
        fullHeight
      >
        <Button asChild size="lg" className="rounded-xl font-semibold">
          <Link href="/contact">Start a Submission Plan <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-xl border-white/20 text-white hover:bg-white/10 hover:text-white"
        >
          <Link href="/contact">Speak With Our Experts</Link>
        </Button>
      </PageHero>

      <StatStrip />

      <section className="py-20 md:py-24 border-b border-border">
        <div className="page-container">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-3 space-y-6">
              <SectionIntro
                eyebrow="Overview"
                title="Navigate global regulatory pathways, risk management, and quality standards with confidence."
                description={SERVICE.description}
              />
              <div className="space-y-4">
                {SERVICE.overview.map((para) => (
                  <p key={para} className="text-muted-foreground leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {REGULATORY_STANDARDS.map((std) => (
                  <span
                    key={std}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground/80 hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                    {std}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-5">
              <AnimatedSection>
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <FileSearch className="w-4 h-4 text-primary" />
                    <p className="text-primary text-xs font-bold uppercase tracking-widest">What we cover</p>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                    <p>Technical documentation packages</p>
                    <p>Gap analysis and regulatory strategy</p>
                    <p>Quality management system support</p>
                    <p>Global clearance preparation and audit readiness</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="rounded-2xl border border-border bg-primary/5 p-6 sm:p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="w-4 h-4 text-primary" />
                    <p className="text-primary text-xs font-bold uppercase tracking-widest">Core focus</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We ensure your device meets all safety, performance, and biological requirements.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section ref={stackRef} className="relative border-b border-border bg-secondary/20 py-20 md:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>
        <div className="page-container relative z-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.92fr)_minmax(0,1.08fr)] lg:items-start">
            <div className="lg:sticky lg:top-28 lg:self-start space-y-8 overflow-hidden">
              <AnimatedSection className="max-w-2xl">
                <div className="max-w-xl">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">SUB-SERVICES</p>
                  <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                    What you get
                  </h2>
                </div>
              </AnimatedSection>

              <img
                src="/assets/regulatory-stack-visual-light.png"
                alt="Regulatory compliance visual"
                className="w-full max-w-full mx-auto h-auto object-contain drop-shadow-2xl dark:hidden"
              />
              <img
                src="/assets/regulatory-stack-visual-dark.png"
                alt="Regulatory compliance visual"
                className="hidden w-full max-w-full mx-auto h-auto object-contain drop-shadow-2xl dark:block"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {[0, 1, 2].map((columnIndex) => {
                const columnY = [columnOneY, columnTwoY, columnThreeY][columnIndex];
                const cards = SERVICE.subServices.filter((_, index) => index % 3 === columnIndex);
                return (
                  <motion.div key={columnIndex} style={{ y: columnY }} className={columnIndex === 1 ? "md:pt-10" : columnIndex === 2 ? "md:pt-20" : ""}>
                    <div className="space-y-5">
                      {cards.map((sub, cardIndex) => (
                      <SubServiceCard
                        key={sub.slug}
                        index={columnIndex + cardIndex * 3}
                        name={sub.name}
                        tagline={sub.tagline}
                      />
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 border-b border-border">
        <div className="page-container">
          <div className="space-y-16">
            <AnimatedSection>
              <ServiceCapabilitiesBlock capabilities={SERVICE.capabilities} />
            </AnimatedSection>

            <div>
              <SectionIntro
                eyebrow="Why RMT"
                title="Why teams choose us for regulatory work."
                description="The differentiators below are already part of the service message. This layout just makes them easier to scan."
              />
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {SERVICE.whyRMT.map((item, i) => {
                  const iconMap = [Shield, ScrollText, Globe, BookOpen, Medal] as const;
                  const Icon = iconMap[i % iconMap.length];
                  return <WhyCard key={item.title} title={item.title} desc={item.desc} icon={Icon} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 border-b border-border bg-secondary/10">
        <div className="page-container">
          <AnimatedSection className="mb-10">
            <SectionIntro
              eyebrow=""
              title="Service Snapshot"
              description="These service areas reflect the practical work behind our regulatory compliance support, from risk and evidence to quality systems and approval preparation."
            />
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-3">
            {[0, 1, 2].map((columnIndex) => {
              const cards = SERVICE.subServices.filter((_, index) => index % 3 === columnIndex);
              const columnOffset = columnIndex === 0 ? "" : columnIndex === 1 ? "md:pt-10" : "md:pt-20";
              return (
                <motion.div
                  key={columnIndex}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
                  transition={{ duration: 0.45, delay: columnIndex * 0.08 }}
                  className={columnOffset}
                >
                  <div className="space-y-5">
                    {cards.map((sub, cardIndex) => (
                      <StackDetailCard
                        key={sub.slug}
                        index={columnIndex + cardIndex * 3}
                        name={sub.name}
                        tagline={sub.tagline}
                        keyPoints={sub.keyPoints}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[#060d17] text-white">
        <div className="page-container">
          <AnimatedSection className="max-w-3xl">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Ready to Start?</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Work with a team that understands submissions, standards, and audit pressure.</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Partner with our regulatory specialists to move from strategy to approval with clear documentation and practical execution.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-xl font-semibold bg-primary text-white hover:bg-primary/90">
                <Link href="/contact">Request a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-white/20 text-white hover:bg-white/10 hover:text-white">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
