import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Beaker,
  CheckCircle,
  CircuitBoard,
  Factory,
  FlaskConical,
  Gauge,
  HeartPulse,
  Microscope,
  PackageCheck,
  Pill,
  ScanLine,
  ShieldCheck,
  TestTube2,
  ArrowRight,
  ClipboardList,
  Target,
  Zap,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import type { SubServiceData } from "@/data/services";
import {
  QC_OVERVIEW,
  QC_TAGLINE,
  QC_STANDARDS,
  QC_DELIVERABLES,
  QC_RD_APPROACH,
  QC_PRODUCTION_APPROACH,
  QC_WHY_CHOOSE,
  QC_CLOSING_NOTE,
  QC_PORTFOLIO,
  QC_TESTING_CAPABILITIES,
  QC_LAB_EQUIPMENT,
  QC_HERO_STATS,
} from "@/data/quality-control-content";
import {
  FullBleedBlock,
  SectionHeading,
  LifecycleRoadmap,
  PillarGrid,
  IconCardGrid,
  StatBadgeRow,
} from "./service-extras-visual";
import {
  QD_DARK_SECTION,
  QD_DARK_SECTION_ALT,
  QD_MUTED_SECTION,
  QD_PILL,
  QdDarkDecor,
  QdGridOverlay,
} from "./quality-dept-detail-theme";

const PORTFOLIO_ICONS = [CircuitBoard, HeartPulse, Factory, Pill, ShieldCheck] as const;
const CAPABILITY_ICONS = [
  ClipboardList,
  Zap,
  Target,
  Activity,
  PackageCheck,
  Gauge,
  ScanLine,
  PackageCheck,
  Beaker,
] as const;
const LAB_ICONS = [FlaskConical, Microscope, TestTube2, ScanLine, Gauge, Microscope] as const;
const RD_ICONS = [ClipboardList, TestTube2, Target, CheckCircle, Factory] as const;
const PROD_ICONS = [PackageCheck, Factory, CheckCircle, ShieldCheck, Beaker, Gauge] as const;
const WHY_ICONS = [Target, Zap, ShieldCheck] as const;

function DesignTransferBridge() {
  return (
    <div className="relative py-10 md:py-12">
      <div className="absolute inset-x-[10%] top-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent hidden md:block" />
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm px-6 py-3 shadow-lg shadow-primary/10">
          <span className="hidden sm:inline text-xs font-bold uppercase tracking-[0.2em] text-primary/80">R&D Quality</span>
          <span className="hidden sm:inline w-8 h-px bg-primary/40" />
          <span className="flex items-center gap-2 text-sm font-bold text-foreground">
            <ArrowRight className="w-4 h-4 text-primary" />
            Seamless Design Transfer
            <ArrowRight className="w-4 h-4 text-primary" />
          </span>
          <span className="hidden sm:inline w-8 h-px bg-primary/40" />
          <span className="hidden sm:inline text-xs font-bold uppercase tracking-[0.2em] text-primary/80">Production QC</span>
        </div>
        <p className="text-sm text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
          One unified Quality Control function spanning development verification through manufacturing release — no gaps at the handoff.
        </p>
      </motion.div>
    </div>
  );
}

export function QualityControlDetail({ subService }: { subService: SubServiceData }) {
  const rdSteps = QC_RD_APPROACH.map((s, i) => ({
    title: s.title,
    items: [s.desc] as readonly string[],
    icon: RD_ICONS[i] ?? CheckCircle,
  }));

  const prodSteps = QC_PRODUCTION_APPROACH.map((s, i) => ({
    title: s.title,
    items: [s.desc] as readonly string[],
    icon: PROD_ICONS[i] ?? CheckCircle,
  }));

  return (
    <div className="space-y-0 -mt-4">
      {/* Overview */}
      <FullBleedBlock bgClassName="bg-background relative overflow-hidden">
        <QdGridOverlay />
        <AnimatedSection className="relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <SectionHeading
                eyebrow="Unified Quality Control"
                title={subService.name}
                description={QC_TAGLINE}
              />
              <div className="space-y-4">
                {QC_OVERVIEW.map((para) => (
                  <p key={para.slice(0, 40)} className="text-muted-foreground leading-relaxed text-[15px]">
                    {para}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className={QD_PILL}>
                  <TestTube2 className="w-3.5 h-3.5" /> R&D Design Control
                </span>
                <span className={QD_PILL}>
                  <Factory className="w-3.5 h-3.5" /> Production Release
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {QC_HERO_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-card p-5 text-center hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <p className="font-heading text-lg sm:text-xl font-bold text-primary leading-tight">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </FullBleedBlock>

      {/* Device Portfolio */}
      <FullBleedBlock bgClassName={QD_MUTED_SECTION}>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Expertise"
            title="Our Device Portfolio"
            description="Comprehensive compliance pathways across active, non-active, implantable, and drug-device combination portfolios."
          />
          <PillarGrid
            pillars={QC_PORTFOLIO.map((p, i) => ({
              ...p,
              icon: PORTFOLIO_ICONS[i] ?? Microscope,
            }))}
          />
        </AnimatedSection>
      </FullBleedBlock>

      {/* Core Testing Capabilities */}
      <FullBleedBlock bgClassName="bg-background">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Capabilities"
            title="Core Testing Capabilities & Key Services"
            description="End-to-end quality engineering from planning and verification through production inspection and release."
          />
          <IconCardGrid
            columns={3}
            cards={QC_TESTING_CAPABILITIES.map((cap, i) => ({
              title: cap.title,
              description: cap.description,
              icon: CAPABILITY_ICONS[i] ?? CheckCircle,
            }))}
          />
        </AnimatedSection>
      </FullBleedBlock>

      {/* R&D Phase-Gated Approach */}
      <FullBleedBlock bgClassName={QD_DARK_SECTION}>
        <QdDarkDecor />
        <AnimatedSection className="relative">
          <SectionHeading
            eyebrow="Development Quality"
            title="R&D Phase-Gated Approach"
            description="Lifecycle-embedded quality engineering from concept through design freeze and operational acceptance."
            light
          />
          <LifecycleRoadmap steps={rdSteps} variant="dark" />
        </AnimatedSection>
      </FullBleedBlock>

      <DesignTransferBridge />

      {/* Production Quality Control */}
      <FullBleedBlock bgClassName={QD_DARK_SECTION_ALT}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532187863486-abf9db8811ee?w=1600&q=80')] bg-cover bg-center opacity-[0.07]" aria-hidden />
        <AnimatedSection className="relative">
          <SectionHeading
            eyebrow="Manufacturing Quality"
            title="Production Quality Control"
            description="From incoming material qualification through finished product release and stability monitoring."
            light
          />
          <LifecycleRoadmap steps={prodSteps} variant="dark" />
        </AnimatedSection>
      </FullBleedBlock>

      {/* Laboratory Infrastructure */}
      <FullBleedBlock bgClassName="bg-gradient-to-b from-background to-secondary/30">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Infrastructure"
            title="Advanced Laboratory & Analytical Infrastructure"
            description="State-of-the-art analytical instrumentation and precision testing systems for quantitative, traceable, audit-ready verification data."
          />
          <IconCardGrid
            columns={3}
            cards={QC_LAB_EQUIPMENT.map((lab, i) => ({
              title: lab.title,
              description: lab.description,
              icon: LAB_ICONS[i] ?? Microscope,
            }))}
          />
        </AnimatedSection>
      </FullBleedBlock>

      {/* Why Partner */}
      <FullBleedBlock bgClassName="bg-background">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Partnership"
            title="Why Partner With Us?"
            description="Bridging engineering insight with quality rigor across the full medical device lifecycle."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {QC_WHY_CHOOSE.map((item, i) => {
              const Icon = WHY_ICONS[i] ?? ShieldCheck;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative rounded-2xl border border-border bg-card p-7 overflow-hidden hover:border-primary/35 hover:shadow-xl transition-all"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-sky-500/10 flex items-center justify-center text-primary mb-5 group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-3 relative">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed relative">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </FullBleedBlock>

      {/* Standards */}
      <FullBleedBlock bgClassName={QD_DARK_SECTION}>
        <AnimatedSection className="relative">
          <SectionHeading
            eyebrow="Compliance"
            title="Regulatory & Standards Framework Covered"
            description="Design controls, testing workflows, and engineering governance mapped against international harmonized standards."
            light
          />
          <StatBadgeRow
            items={[
              { label: "Harmonized Standards", value: "14+", icon: ShieldCheck },
              { label: "Device Classes", value: "I–III", icon: Target },
              { label: "QC Lifecycle Phases", value: "11", icon: ClipboardList },
              { label: "Lab Techniques", value: "6+", icon: Microscope },
            ]}
          />
          <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
            {QC_STANDARDS.map((std, i) => (
              <motion.span
                key={std}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-white/85 text-xs sm:text-sm font-semibold backdrop-blur-sm hover:border-primary/40 hover:bg-primary/10 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" />
                {std}
              </motion.span>
            ))}
          </div>
        </AnimatedSection>
      </FullBleedBlock>

      {/* Deliverables */}
      <FullBleedBlock bgClassName="bg-background">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Outputs"
            title="Deliverables"
            description="Audit-ready documentation and traceable records across every phase of the quality lifecycle."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {QC_DELIVERABLES.map((del, i) => (
              <motion.div
                key={del}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-foreground leading-snug pt-1.5">{del}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground text-sm leading-relaxed border-l-2 border-primary/40 pl-4 max-w-3xl">
            {QC_CLOSING_NOTE}
          </p>
        </AnimatedSection>
      </FullBleedBlock>
    </div>
  );
}
