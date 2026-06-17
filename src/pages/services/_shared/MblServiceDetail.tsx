import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Bug,
  CheckCircle,
  FileCheck,
  FlaskConical,
  Microscope,
  ShieldCheck,
  TestTube2,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HomeSection, SectionHeading } from "@/components/HomeSection";
import type { ServiceData } from "@/data/services";
import {
  MBL_BET_METHODS,
  MBL_EQUIPMENT,
  MBL_SPECIFIC_PATHOGENS,
  MBL_STERILITY_METHODS,
} from "@/data/mbl-content";
import { ColumnWatermark, DnaWatermark } from "./bmd-detail-visual";

const MBL_STANDARDS = ["GMP Compliance", "ISO 13485", "USP <71>", "USP <85>", "EU Pharmacopoeia"] as const;

const WHY_ICONS = [ShieldCheck, FlaskConical, FileCheck] as const;

const PROGRAMMES = [
  { title: "Sterility Testing", icon: FlaskConical, methods: MBL_STERILITY_METHODS },
  { title: "Bacterial Endotoxin Testing (BET)", icon: TestTube2, methods: MBL_BET_METHODS },
  { title: "Specific Pathogen Testing", icon: Bug, methods: MBL_SPECIFIC_PATHOGENS.map((name) => ({ name, description: "Specified microorganism detection for product safety and pharmacopeial compliance." })) },
] as const;

function MethodCard({
  name,
  description,
  index,
}: {
  name: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className="rounded-xl border border-white/25 bg-white/95 p-5 shadow-md hover:border-primary/30 transition-colors"
    >
      <h4 className="font-heading text-base font-bold text-foreground mb-2">{name}</h4>
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function WhyCard({ title, desc, icon: Icon, index }: { title: string; desc: string; icon: LucideIcon; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="rounded-2xl border border-white/90 bg-white/95 backdrop-blur-md p-6 shadow-md h-full"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-base text-slate-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export function MblServiceDetail({ service }: { service: ServiceData }) {
  return (
    <div className="space-y-0">
      <HomeSection
        variant="image-light"
        bgImage="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=80"
        overlayIntensity="clear"
        dots
        rings
        ringSide="right"
        className="py-16 sm:py-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection className="relative min-h-[180px]">
            <ColumnWatermark>
              <DnaWatermark />
            </ColumnWatermark>
            <div className="relative z-10">
              <SectionHeading
                eyebrow="Microbiology Laboratory"
                title={service.name}
                description={service.tagline}
                align="left"
                panel
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="space-y-5">
            {service.overview.map((para) => (
              <p key={para.slice(0, 40)} className="text-slate-700 text-base sm:text-lg leading-relaxed rounded-2xl border border-white/90 bg-white/95 backdrop-blur-md px-6 py-5 shadow-md">
                {para}
              </p>
            ))}
          </AnimatedSection>
        </div>
      </HomeSection>

      <HomeSection variant="primary" bgImage="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1600&q=80" overlayIntensity="clear" className="py-12" innerClassName="!px-0">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Client Projects Completed", value: "10+", icon: Award },
            { label: "Years of Scientific Experience", value: "10+", icon: Microscope },
            { label: "Laboratory Success Rate", value: ">99%", icon: ShieldCheck },
            { label: "Turnaround Time", value: "24–72h", icon: FlaskConical },
          ].map((item, i, arr) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`text-center text-white px-4 py-4 ${i < arr.length - 1 ? "border-r border-white/15" : ""}`}
              >
                <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="font-heading text-3xl sm:text-4xl font-black mb-1">{item.value}</div>
                <div className="text-white/85 text-sm font-medium leading-snug">{item.label}</div>
              </motion.div>
            );
          })}
        </div>
      </HomeSection>

      <HomeSection variant="muted" dots className="py-14 sm:py-16">
        <SectionHeading eyebrow="Infrastructure" title="Laboratory Equipment" align="left" className="mb-8" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MBL_EQUIPMENT.map((eq, i) => (
            <motion.div
              key={eq}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card text-base font-medium text-foreground"
            >
              <Microscope className="w-5 h-5 text-primary shrink-0" />
              {eq}
            </motion.div>
          ))}
        </div>
      </HomeSection>

      {PROGRAMMES.map((programme, pi) => {
        const Icon = programme.icon;
        return (
          <HomeSection
            key={programme.title}
            variant={pi % 2 === 0 ? "gradient-blue" : "navy"}
            bgImage="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1600&q=80"
            overlayIntensity="clear"
            dots
            className="py-14 sm:py-16"
          >
            <SectionHeading
              eyebrow="Testing Programme"
              title={programme.title}
              light
              align="left"
              className="mb-8"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              {programme.methods.map((m, i) => (
                <MethodCard key={m.name} name={m.name} description={m.description} index={i} />
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 text-sky-200">
              <Icon className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-widest">{programme.methods.length} validated methods</span>
            </div>
          </HomeSection>
        );
      })}

      <HomeSection variant="image-light" dots className="py-14 sm:py-16">
        <SectionHeading eyebrow="Compliance" title="Compliance & Standards" align="left" className="mb-8" />
        <div className="flex flex-wrap gap-3 mb-12">
          {MBL_STANDARDS.map((std) => (
            <span key={std} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-base font-semibold">
              <ShieldCheck className="w-4 h-4" /> {std}
            </span>
          ))}
        </div>
        <SectionHeading eyebrow="Capabilities" title="Core Capabilities" align="left" className="mb-8" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {service.capabilities.map((cap) => (
            <div key={cap} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
              <CheckCircle className="w-5 h-5 text-primary shrink-0" />
              <span className="text-base font-medium text-foreground">{cap}</span>
            </div>
          ))}
        </div>
        <SectionHeading eyebrow="Why RMT" title="Why Partner With RMT" align="left" className="mb-8" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.whyRMT.map((item, i) => (
            <WhyCard key={item.title} title={item.title} desc={item.desc} icon={WHY_ICONS[i] ?? ShieldCheck} index={i} />
          ))}
        </div>
      </HomeSection>
    </div>
  );
}
