import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Building2,
  CheckCircle,
  Dna,
  FileCheck,
  FlaskConical,
  GraduationCap,
  Handshake,
  Layers,
  Lightbulb,
  Microscope,
  ShieldCheck,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HomeSection, SectionHeading } from "@/components/HomeSection";
import type { ServiceData } from "@/data/services";
import {
  BMD_ACADEMIC_PARTNERS,
  BMD_EQUIPMENT,
  BMD_EXPERTISE,
  BMD_INDUSTRIAL_PARTNERS,
  BMD_PATENTS,
  BMD_PRODUCTS,
  BMD_PUBLICATIONS,
  BMD_RESEARCH_AREAS,
} from "@/data/bmd-content";
import { BMD_STANDARDS } from "@/data/bmd-standards";
import { BMD_SECTION_IMAGES, ColumnWatermark, DnaWatermark, FlaskWatermark } from "./bmd-detail-visual";

const WHY_ICONS = [ShieldCheck, Dna, Lightbulb, FlaskConical, Sparkles] as const;
const CAP_ICONS = [Microscope, Dna, FlaskConical, Layers, Wrench, ShieldCheck] as const;

const RESEARCH_ICONS = [Dna, FlaskConical, Microscope, Layers, Lightbulb, ShieldCheck] as const;

function PartnerCard({
  name,
  type,
  index,
}: {
  name: string;
  type: "academic" | "industrial";
  index: number;
}) {
  const Icon = type === "academic" ? GraduationCap : Building2;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-white/25 bg-white/12 backdrop-blur-md p-6 sm:p-8 hover:border-sky-300/50 hover:bg-white/18 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300"
    >
      <div className="flex items-start gap-5">
        <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-sky-200 group-hover:bg-sky-400/20 group-hover:text-white transition-colors">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
        <div className="min-w-0 pt-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-300/90 mb-2">
            {type === "academic" ? "Academic Partner" : "Industry Partner"}
          </p>
          <h3 className="font-heading text-xl sm:text-2xl md:text-[1.65rem] font-bold text-white leading-snug">
            {name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

function WhyCard({
  title,
  desc,
  icon: Icon,
  index,
}: {
  title: string;
  desc: string;
  icon: LucideIcon;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="rounded-2xl border border-white/90 bg-white/95 backdrop-blur-md p-6 sm:p-7 hover:border-primary/35 hover:shadow-lg transition-all h-full"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-sky-500/10 flex items-center justify-center text-primary mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-base text-slate-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export function BmdServiceDetail({ service }: { service: ServiceData }) {
  return (
    <div className="space-y-0">
      {/* Overview */}
      <HomeSection
        variant="image-light"
        bgImage={BMD_SECTION_IMAGES.overview}
        overlayIntensity="clear"
        dots
        rings
        ringSide="right"
        className="py-16 sm:py-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <AnimatedSection className="relative min-h-[200px]">
            <ColumnWatermark>
              <DnaWatermark />
            </ColumnWatermark>
            <div className="relative z-10">
              <SectionHeading
                eyebrow="Biomaterials Department"
                title={service.name}
                description={service.tagline}
                align="left"
                panel
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="space-y-5">
            {service.overview.map((para) => (
              <p key={para.slice(0, 48)} className="text-slate-700 text-base sm:text-lg leading-relaxed rounded-2xl border border-white/90 bg-white/95 backdrop-blur-md px-6 py-5 shadow-md">
                {para}
              </p>
            ))}
          </AnimatedSection>
        </div>
      </HomeSection>

      {/* Stats */}
      <HomeSection variant="primary" bgImage={BMD_SECTION_IMAGES.stats} overlayIntensity="clear" className="py-12 sm:py-14" innerClassName="!px-0">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Research & Review Articles", value: "40+", icon: BookOpen },
            { label: "Conference Papers", value: "12+", icon: FileCheck },
            { label: "Granted Patents", value: "2", icon: Award },
            { label: "Compliance Standards", value: String(BMD_STANDARDS.length), icon: ShieldCheck },
          ].map((item, i, arr) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`text-center text-white px-4 sm:px-8 py-4 ${i < arr.length - 1 ? "border-r border-white/15" : ""}`}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="font-heading text-4xl sm:text-5xl font-black tabular-nums leading-none mb-2">{item.value}</div>
                <div className="text-white/85 text-sm sm:text-base font-medium leading-snug max-w-[12rem] mx-auto">{item.label}</div>
              </motion.div>
            );
          })}
        </div>
      </HomeSection>

      {/* Partners — prominent */}
      <HomeSection
        variant="gradient-blue"
        bgImage={BMD_SECTION_IMAGES.partners}
        overlayIntensity="clear"
        dots
        rings
        ringSide="both"
        className="py-20 sm:py-24"
      >
        <AnimatedSection className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Collaboration"
              title="Academic & Industry Partners"
              description="Strategic partnerships with universities and global innovators accelerate biomaterials research, validation, and commercialization."
              align="left"
              light
              className="max-w-3xl"
            />
            <div className="flex flex-wrap gap-3 shrink-0">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 bg-white/10 text-white font-heading text-lg font-bold">
                <Handshake className="w-5 h-5 text-sky-300" />
                {BMD_INDUSTRIAL_PARTNERS.length} Industry
              </span>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 bg-white/10 text-white font-heading text-lg font-bold">
                <GraduationCap className="w-5 h-5 text-sky-300" />
                {BMD_ACADEMIC_PARTNERS.length} Academic
              </span>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-8">
          {BMD_ACADEMIC_PARTNERS.map((name, i) => (
            <PartnerCard key={name} name={name} type="academic" index={i} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {BMD_INDUSTRIAL_PARTNERS.map((name, i) => (
            <PartnerCard key={name} name={name} type="industrial" index={i + BMD_ACADEMIC_PARTNERS.length} />
          ))}
        </div>
        <p className="mt-10 text-white/75 text-base sm:text-lg leading-relaxed max-w-4xl">
          Through these partnerships, RMT contributes to advanced biomaterials with unique mechanical, biological, and functional properties for drug delivery, regenerative medicine, implantable devices, and pharmaceutical technologies.
        </p>
      </HomeSection>

      {/* Research */}
      <HomeSection variant="muted" dots className="py-16 sm:py-20 relative overflow-hidden">
        <ColumnWatermark className="right-0 left-auto translate-x-[20%]">
          <FlaskWatermark />
        </ColumnWatermark>
        <AnimatedSection className="relative z-10">
          <SectionHeading
            eyebrow="Research"
            title="Research & Publications"
            description="Scientific advancement in biomaterials, polymer science, drug delivery, and medical device development."
            align="left"
            className="mb-12"
          />
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-5">Research Focus Areas</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {BMD_RESEARCH_AREAS.map((area, i) => {
              const Icon = RESEARCH_ICONS[i % RESEARCH_ICONS.length];
              return (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-base text-slate-700 leading-relaxed pt-1.5">{area}</span>
                </motion.div>
              );
            })}
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-5">Areas of Expertise</h3>
          <div className="flex flex-wrap gap-2.5 mb-12">
            {BMD_EXPERTISE.map((e) => (
              <span key={e} className="text-sm sm:text-base font-medium px-4 py-2 rounded-full bg-primary/8 border border-primary/20 text-primary">
                {e}
              </span>
            ))}
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-5">Granted Patents</h3>
          <div className="overflow-x-auto rounded-2xl border border-border mb-12 bg-card shadow-sm">
            <table className="w-full text-left min-w-[640px]">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-5 py-4 font-heading text-sm font-bold text-foreground">Patent Title</th>
                  <th className="px-5 py-4 font-heading text-sm font-bold text-foreground">Inventors</th>
                  <th className="px-5 py-4 font-heading text-sm font-bold text-foreground">Patent No.</th>
                </tr>
              </thead>
              <tbody>
                {BMD_PATENTS.map((pat) => (
                  <tr key={pat.patentNo} className="border-t border-border">
                    <td className="px-5 py-4 text-base text-slate-600">{pat.title}</td>
                    <td className="px-5 py-4 text-base text-slate-600">{pat.inventors}</td>
                    <td className="px-5 py-4 text-base font-semibold text-foreground">{pat.patentNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-5">Related Journal Publications</h3>
          <div className="grid lg:grid-cols-2 gap-4">
            {BMD_PUBLICATIONS.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.03 }}
                className="text-sm sm:text-base text-slate-600 leading-relaxed p-4 rounded-xl border border-border bg-card"
              >
                {pub}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </HomeSection>

      {/* Products */}
      <HomeSection
        variant="navy"
        bgImage={BMD_SECTION_IMAGES.products}
        overlayIntensity="clear"
        dots
        className="py-16 sm:py-20"
      >
        <SectionHeading
          eyebrow="Portfolio"
          title="Products"
          description="Innovative biomaterial and pharmaceutical products from RMT research and industrial partnerships."
          light
          className="mb-12"
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-primary/40 bg-primary/10 backdrop-blur-sm p-6 sm:p-8 mb-8 shadow-lg shadow-primary/10"
        >
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-sky-200 mb-6 flex items-center gap-3">
            <Lightbulb className="w-7 h-7 text-primary" />
            Innovative Products
          </h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {BMD_PRODUCTS.innovative.map((item) => (
              <li key={item} className="text-base text-white/90 flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Skin Care", items: BMD_PRODUCTS.skincare },
            { title: "Hair Care", items: BMD_PRODUCTS.haircare },
          ].map((group) => (
            <div key={group.title} className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm p-6 sm:p-7">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-5">{group.title}</h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="text-base text-white/80 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-sky-300 shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </HomeSection>

      {/* Equipment */}
      <HomeSection variant="image-blue" bgImage={BMD_SECTION_IMAGES.equipment} overlayIntensity="clear" dots className="py-14 sm:py-16">
        <SectionHeading eyebrow="Infrastructure" title="Laboratory Equipment" align="left" className="mb-8" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BMD_EQUIPMENT.map((eq, i) => (
            <motion.div
              key={eq}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-3 text-base font-medium px-5 py-4 bg-white/95 border border-white/90 rounded-xl shadow-md text-slate-800"
            >
              <Microscope className="w-5 h-5 text-primary shrink-0" />
              {eq}
            </motion.div>
          ))}
        </div>
      </HomeSection>

      {/* Standards */}
      <HomeSection variant="gradient-blue" bgImage={BMD_SECTION_IMAGES.standards} overlayIntensity="medium" dots className="py-14 sm:py-16">
        <SectionHeading eyebrow="Compliance" title="Compliance & Standards" light className="mb-10" />
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {BMD_STANDARDS.map((std, i) => (
            <motion.span
              key={std}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/20 bg-white/10 text-white text-base font-semibold backdrop-blur-sm hover:border-sky-300/50 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-sky-300 shrink-0" />
              {std}
            </motion.span>
          ))}
        </div>
      </HomeSection>

      {/* Capabilities & Why */}
      <HomeSection variant="image-light" bgImage={BMD_SECTION_IMAGES.capabilities} overlayIntensity="clear" dots rings ringSide="left" className="py-16 sm:py-20">
        <SectionHeading eyebrow="Capabilities" title="Core Capabilities" align="left" className="mb-10" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {service.capabilities.map((cap, i) => {
            const Icon = CAP_ICONS[i] ?? CheckCircle;
            return (
              <motion.div
                key={cap}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/90 bg-white/95 backdrop-blur-md shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-base font-semibold text-foreground leading-snug">{cap}</span>
              </motion.div>
            );
          })}
        </div>
        <SectionHeading eyebrow="Why RMT" title="Why Partner With RMT" align="left" className="mb-10" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.whyRMT.map((item, i) => (
            <WhyCard key={item.title} title={item.title} desc={item.desc} icon={WHY_ICONS[i] ?? CheckCircle} index={i} />
          ))}
        </div>
      </HomeSection>
    </div>
  );
}
