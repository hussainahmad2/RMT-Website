import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  CheckCircle,
  ClipboardList,
  Cog,
  Factory,
  Gauge,
  Handshake,
  Lightbulb,
  Map,
  Package,
  ShieldCheck,
  Stethoscope,
  Wrench,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HomeSection, SectionHeading } from "@/components/HomeSection";
import type { ServiceData } from "@/data/services";
import {
  PRODUCTION_EQUIPMENT_AUTOMATION,
  PRODUCTION_EQUIPMENT_CLEANROOM_LEVELS,
  PRODUCTION_EQUIPMENT_CLEANROOM_STANDARDS,
  PRODUCTION_EQUIPMENT_CORE_CAPABILITIES,
  PRODUCTION_EQUIPMENT_DESIGN,
  PRODUCTION_EQUIPMENT_INTRO,
  PRODUCTION_EQUIPMENT_LINE_FEATURES,
  PRODUCTION_EQUIPMENT_PROCESS_STEPS,
  PRODUCTION_EQUIPMENT_QUALIFICATION_DOCS,
  PRODUCTION_EQUIPMENT_QUALIFICATION_PHASES,
  PRODUCTION_EQUIPMENT_SPECIALIST,
  PRODUCTION_EQUIPMENT_SUPPORT,
  PRODUCTION_EQUIPMENT_WHY_CHOOSE,
} from "@/data/production-equipment-content";
import { ColumnWatermark, GearWatermark, PE_SECTION_IMAGES } from "./production-equipment-detail-visual";

const CAP_ICONS: Record<string, LucideIcon> = {
  cog: Cog,
  factory: Factory,
  wind: Wind,
  clipboard: ClipboardList,
  bot: Bot,
  wrench: Wrench,
};

const LINE_ICONS = [Map, Cog, Gauge, Package] as const;
const WHY_ICONS = [Factory, ShieldCheck, Lightbulb, Handshake] as const;
const SUPPORT_ICONS = [Wrench, Gauge, Package, ShieldCheck] as const;

function FeatureCard({
  title,
  description,
  points,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  points?: readonly string[];
  icon: LucideIcon;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="rounded-2xl border border-white/90 bg-white/95 backdrop-blur-md p-6 sm:p-7 shadow-md h-full"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-sky-500/10 flex items-center justify-center text-primary mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-base text-slate-600 leading-relaxed mb-4">{description}</p>
      {points && (
        <ul className="space-y-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export function ProductionEquipmentServiceDetail({ service }: { service: ServiceData }) {
  return (
    <div className="space-y-0">
      <HomeSection variant="image-light" bgImage={PE_SECTION_IMAGES.overview} overlayIntensity="clear" dots rings ringSide="right" className="py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection className="relative min-h-[200px]">
            <ColumnWatermark><GearWatermark /></ColumnWatermark>
            <div className="relative z-10">
              <SectionHeading eyebrow="Medical Equipment Manufacturing" title={service.name} description={service.tagline} align="left" panel />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="space-y-5">
            {PRODUCTION_EQUIPMENT_INTRO.map((para) => (
              <p key={para.slice(0, 48)} className="text-slate-700 text-base sm:text-lg leading-relaxed rounded-2xl border border-white/90 bg-white/95 backdrop-blur-md px-6 py-5 shadow-md">
                {para}
              </p>
            ))}
          </AnimatedSection>
        </div>
      </HomeSection>

      <HomeSection variant="dark" bgImage={PE_SECTION_IMAGES.capabilities} overlayIntensity="medium" dots className="py-16 sm:py-20">
        <AnimatedSection>
          <SectionHeading eyebrow="Core Capabilities" title="What We Build & Engineer" description="Purpose-built manufacturing equipment across design, lines, cleanrooms, qualification, automation, and support." align="center" panel className="mb-12" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTION_EQUIPMENT_CORE_CAPABILITIES.map((cap, i) => {
            const Icon = CAP_ICONS[cap.icon] ?? Cog;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 hover:border-sky-300/40 hover:bg-white/15 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-400/20 flex items-center justify-center text-sky-200 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">{cap.title}</h3>
                <p className="text-sky-100/80 text-base leading-relaxed">{cap.description}</p>
              </motion.div>
            );
          })}
        </div>
      </HomeSection>

      <HomeSection variant="image-light" bgImage={PE_SECTION_IMAGES.design} overlayIntensity="clear" dots rings ringSide="left" className="py-16 sm:py-20">
        <AnimatedSection className="mb-10">
          <SectionHeading
            eyebrow="Design & Engineering"
            title="Custom Equipment Design for Medical Device Manufacturing"
            description={PRODUCTION_EQUIPMENT_DESIGN.systemsApproach}
            align="left"
            panel
          />
        </AnimatedSection>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed rounded-2xl border border-white/90 bg-white/95 backdrop-blur-md px-6 py-5 shadow-md mb-8 max-w-4xl">
          {PRODUCTION_EQUIPMENT_DESIGN.intro}
        </p>
        <div className="grid lg:grid-cols-2 gap-6">
          <FeatureCard
            title={PRODUCTION_EQUIPMENT_DESIGN.mechanical.title}
            description={PRODUCTION_EQUIPMENT_DESIGN.mechanical.description}
            points={PRODUCTION_EQUIPMENT_DESIGN.mechanical.points}
            icon={Cog}
            index={0}
          />
          <FeatureCard
            title={PRODUCTION_EQUIPMENT_DESIGN.controls.title}
            description={PRODUCTION_EQUIPMENT_DESIGN.controls.description}
            points={PRODUCTION_EQUIPMENT_DESIGN.controls.points}
            icon={Bot}
            index={1}
          />
        </div>
      </HomeSection>

      <HomeSection variant="dark" bgImage={PE_SECTION_IMAGES.lines} overlayIntensity="medium" dots className="py-16 sm:py-20">
        <AnimatedSection className="mb-10">
          <SectionHeading eyebrow="Production Lines" title="End-to-End Production Line Development" description="Holistic line design — product flow, process interdependencies, quality checkpoints, and regulatory compliance at every stage." align="center" panel />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6">
          {PRODUCTION_EQUIPMENT_LINE_FEATURES.map((f, i) => (
            <FeatureCard key={f.title} title={f.title} description={f.description} icon={LINE_ICONS[i % LINE_ICONS.length]} index={i} />
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="image-light" bgImage={PE_SECTION_IMAGES.cleanroom} overlayIntensity="clear" dots rings ringSide="right" className="py-16 sm:py-20">
        <AnimatedSection className="mb-10">
          <SectionHeading eyebrow="Cleanroom Engineering" title="Equipment Built for Controlled Environments" description="Every surface, fastener, lubricant, and control enclosure designed with contamination control as a primary constraint." align="left" panel />
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {PRODUCTION_EQUIPMENT_CLEANROOM_LEVELS.map((level, i) => (
            <motion.div
              key={level.iso}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/90 bg-white/95 backdrop-blur-md p-6 shadow-md"
            >
              <p className="text-3xl font-heading font-bold text-primary mb-3">{level.iso}</p>
              <p className="text-slate-600 text-base leading-relaxed">{level.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="rounded-2xl border border-white/90 bg-white/95 backdrop-blur-md p-6 sm:p-8 shadow-md">
          <h3 className="font-heading text-xl font-bold text-foreground mb-4">Cleanroom Equipment Design Standards</h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {PRODUCTION_EQUIPMENT_CLEANROOM_STANDARDS.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </HomeSection>

      <HomeSection variant="dark" bgImage={PE_SECTION_IMAGES.qualification} overlayIntensity="medium" dots className="py-16 sm:py-20">
        <AnimatedSection className="mb-10">
          <SectionHeading
            eyebrow="Qualification & Validation"
            title="Equipment Qualification: IQ, OQ & PQ"
            description="Comprehensive protocols aligned with FDA 21 CFR Part 820, ISO 13485, and GHTF/IMDRF guidance — delivering a qualification package that withstands regulatory scrutiny."
            align="center"
            panel
          />
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {PRODUCTION_EQUIPMENT_QUALIFICATION_PHASES.map((phase, i) => (
            <motion.div
              key={phase.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6"
            >
              <p className="text-4xl font-heading font-bold text-sky-300 mb-2">{phase.code}</p>
              <h3 className="font-heading text-xl font-bold text-white mb-3">{phase.title}</h3>
              <p className="text-sky-100/80 text-sm leading-relaxed">{phase.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 sm:p-8">
          <h3 className="font-heading text-xl font-bold text-white mb-4">Qualification Documentation Package</h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {PRODUCTION_EQUIPMENT_QUALIFICATION_DOCS.map((doc) => (
              <li key={doc} className="flex items-start gap-2 text-sm text-sky-100/85">
                <CheckCircle className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      </HomeSection>

      <HomeSection variant="image-light" bgImage={PE_SECTION_IMAGES.automation} overlayIntensity="clear" dots rings ringSide="left" className="py-16 sm:py-20">
        <AnimatedSection className="mb-10">
          <SectionHeading eyebrow="Automation" title="Intelligent Process Automation" description="Validated automation that eliminates operator-dependent variation, improves throughput, and generates the process data your quality system demands." align="left" panel />
        </AnimatedSection>
        <div className="grid lg:grid-cols-3 gap-6">
          {PRODUCTION_EQUIPMENT_AUTOMATION.map((a, i) => (
            <FeatureCard key={a.title} title={a.title} description={a.description} points={a.points} icon={[Bot, Gauge, Cog][i]} index={i} />
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="dark" bgImage={PE_SECTION_IMAGES.specialist} overlayIntensity="medium" dots className="py-16 sm:py-20">
        <AnimatedSection className="mb-12">
          <SectionHeading eyebrow="Specialist Equipment" title="Specialized Equipment for Medical Device Manufacturing" description="Deep expertise across the most demanding equipment categories in interventional and minimally invasive device production." align="center" panel />
        </AnimatedSection>
        <div className="space-y-12">
          {PRODUCTION_EQUIPMENT_SPECIALIST.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
            >
              <div className={`${i % 2 === 1 ? "lg:[direction:ltr]" : ""} rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 sm:p-8`}>
                <div className="flex items-center gap-3 mb-4">
                  <Stethoscope className="w-6 h-6 text-sky-300" />
                  <h3 className="font-heading text-2xl font-bold text-white">{item.name}</h3>
                </div>
                <p className="text-sky-100/85 text-base leading-relaxed">{item.description}</p>
              </div>
              <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/20 shadow-2xl ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                <img src={item.image} alt={item.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="image-light" bgImage={PE_SECTION_IMAGES.support} overlayIntensity="clear" dots className="py-16 sm:py-20">
        <AnimatedSection className="mb-10">
          <SectionHeading eyebrow="Ongoing Support" title="Preventive Maintenance, Calibration & Technical Support" description="Post-installation programs designed to keep manufacturing equipment performing at its qualified state." align="left" panel />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTION_EQUIPMENT_SUPPORT.map((s, i) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-white/90 bg-white/95 backdrop-blur-md p-6 shadow-md h-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {React.createElement(SUPPORT_ICONS[i], { className: "w-5 h-5" })}
                </div>
                <span className="text-sm font-bold text-primary">{s.code}</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="dark" bgImage={PE_SECTION_IMAGES.process} overlayIntensity="medium" dots className="py-16 sm:py-20">
        <AnimatedSection className="mb-12">
          <SectionHeading eyebrow="Our Process" title="How We Deliver: Our Engineering Process" description="A structured, stage-gated engineering process — requirements captured precisely, risks managed proactively, equipment delivered qualified and production-ready." align="center" panel />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTION_EQUIPMENT_PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6"
            >
              <p className="text-3xl font-heading font-bold text-sky-300/90 mb-2">{step.step}</p>
              <h3 className="font-heading text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sky-100/80 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="image-light" bgImage={PE_SECTION_IMAGES.why} overlayIntensity="clear" dots rings ringSide="right" className="py-16 sm:py-20">
        <AnimatedSection className="mb-10">
          <SectionHeading eyebrow="Why Revive" title="Why Industry Leaders Choose Our Equipment Expertise" align="center" panel />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6">
          {PRODUCTION_EQUIPMENT_WHY_CHOOSE.map((w, i) => (
            <FeatureCard key={w.title} title={w.title} description={w.description} icon={WHY_ICONS[i]} index={i} />
          ))}
        </div>
      </HomeSection>
    </div>
  );
}
