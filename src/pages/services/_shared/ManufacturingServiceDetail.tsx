import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Beaker,
  Building2,
  CheckCircle,
  Cog,
  Factory,
  Gauge,
  Lightbulb,
  PackageCheck,
  Rocket,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  Wind,
  Atom,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HomeSection, SectionHeading } from "@/components/HomeSection";
import type { ServiceData } from "@/data/services";
import type { ManufacturingProductMade } from "@/data/revive-manufacturing-content";
import {
  MANUFACTURING_CAPACITY_BUILDING,
  MANUFACTURING_CLEANROOMS,
  MANUFACTURING_DEVELOPMENT_PHASES,
  MANUFACTURING_DEVICE_CLASSES,
  MANUFACTURING_ENVIRONMENTAL_CONTROLS,
  MANUFACTURING_PRODUCTS,
  MANUFACTURING_PRODUCTS_MADE,
  MANUFACTURING_QUALITY_POINTS,
  MANUFACTURING_TESTING_SERVICES,
  MANUFACTURING_WHY_CHOOSE,
} from "@/data/revive-manufacturing-content";
import { ColumnWatermark, FactoryWatermark, MDM_SECTION_IMAGES } from "./manufacturing-detail-visual";

const PRODUCT_ICONS: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  atom: Atom,
};

const DEVICE_ICONS = [Factory, ShieldCheck, Award, Cog, PackageCheck, Rocket] as const;
const WHY_ICONS = [Award, TrendingUp, ShieldCheck, Lightbulb, Factory] as const;
const PHASE_ICONS = [Lightbulb, Cog, Rocket] as const;

function ProductMadeCard({ product, reverse = false }: { product: ManufacturingProductMade; reverse?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`grid lg:grid-cols-2 gap-10 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}
    >
      <div className={`${reverse ? "lg:[direction:ltr]" : ""} rounded-2xl border border-white/90 bg-white/95 backdrop-blur-md p-6 sm:p-8 shadow-lg`}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">{product.category}</p>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">{product.name}</h3>
        <p className="text-base text-slate-600 leading-relaxed mb-6">{product.description}</p>
        <div className="space-y-4 mb-6">
          {product.features.map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-base font-semibold text-foreground">{f.title}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {product.specs.map((spec) => (
            <span key={spec} className="text-sm font-medium px-3 py-1.5 rounded-full bg-primary/8 text-primary border border-primary/15">
              {spec}
            </span>
          ))}
        </div>
      </div>
      <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/20 shadow-2xl ${reverse ? "lg:[direction:ltr]" : ""}`}>
        <img src={product.image} alt={product.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
}

export function ManufacturingServiceDetail({ service }: { service: ServiceData }) {
  return (
    <div className="space-y-0">
      <HomeSection variant="image-light" bgImage={MDM_SECTION_IMAGES.overview} overlayIntensity="clear" dots rings ringSide="right" className="py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection className="relative min-h-[200px]">
            <ColumnWatermark><FactoryWatermark /></ColumnWatermark>
            <div className="relative z-10">
              <SectionHeading eyebrow="Medical Device Manufacturing" title={service.name} description={service.tagline} align="left" panel />
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

      <HomeSection variant="gradient-blue" bgImage={MDM_SECTION_IMAGES.quality} overlayIntensity="clear" dots rings ringSide="both" className="py-14 sm:py-16">
        <SectionHeading eyebrow="Quality & Compliance" title="Built-In Quality at Every Stage" description="ISO 13485-certified operations in controlled cleanroom environments with documented, validated, and auditable processes." light align="left" className="mb-8" />
        <div className="grid sm:grid-cols-2 gap-4">
          {MANUFACTURING_QUALITY_POINTS.map((point, i) => (
            <motion.div key={point} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-5 py-4">
              <ShieldCheck className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
              <span className="text-base text-white/90">{point}</span>
            </motion.div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="muted" dots className="py-14 sm:py-16">
        <SectionHeading eyebrow="Portfolio" title="Flagship Products & Technologies" description="Precision-engineered medical devices developed to clinical-grade standards." align="left" className="mb-10" />
        <div className="grid md:grid-cols-2 gap-6">
          {MANUFACTURING_PRODUCTS.map((p, i) => {
            const Icon = PRODUCT_ICONS[p.icon] ?? PackageCheck;
            const image = "image" in p ? (p as { image?: string }).image : undefined;
            return (
              <motion.div key={p.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-card overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                {image && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={image} alt={p.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                )}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">{p.name}</h3>
                  </div>
                  <p className="text-base text-slate-600 leading-relaxed mb-4">{p.description}</p>
                  <ul className="space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="text-sm text-slate-600 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </HomeSection>

      <HomeSection variant="navy" bgImage={MDM_SECTION_IMAGES.products} overlayIntensity="clear" dots className="py-16 sm:py-20">
        <SectionHeading eyebrow="Products Made" title="Clinical-Grade Devices We Manufacture" description="Vascular and interventional devices engineered for precision, safety, and regulatory compliance." light className="mb-14" />
        <div className="space-y-20">
          {MANUFACTURING_PRODUCTS_MADE.map((product, i) => (
            <ProductMadeCard key={product.name} product={product} reverse={i % 2 === 1} />
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="image-light" bgImage={MDM_SECTION_IMAGES.capabilities} overlayIntensity="clear" dots className="py-14 sm:py-16">
        <SectionHeading eyebrow="Capabilities" title="Full-Spectrum Device Manufacturing" align="left" className="mb-10" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MANUFACTURING_DEVICE_CLASSES.map((item, i) => {
            const Icon = DEVICE_ICONS[i] ?? Factory;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="relative rounded-2xl border border-white/90 bg-white/95 p-6 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-base text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </HomeSection>

      <HomeSection variant="gradient-blue" bgImage={MDM_SECTION_IMAGES.cleanroom} overlayIntensity="clear" dots rings ringSide="both" className="py-14 sm:py-16">
        <SectionHeading eyebrow="Infrastructure" title="World-Class Cleanroom Environments" light align="left" className="mb-10" />
        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {MANUFACTURING_CLEANROOMS.map((room, i) => (
            <motion.div key={room.grade} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 text-center">
              <Wind className="w-8 h-8 text-sky-300 mx-auto mb-3" />
              <p className="text-3xl font-heading font-black text-white">{room.grade}</p>
              <p className="text-sm sm:text-base text-white/75 mt-3 leading-relaxed">{room.description}</p>
            </motion.div>
          ))}
        </div>
        <h3 className="font-heading text-xl font-bold text-white mb-4">Environmental Control Systems</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {MANUFACTURING_ENVIRONMENTAL_CONTROLS.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/8 px-4 py-3">
              <Gauge className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base text-white/85">{item}</span>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="light" dots className="py-14 sm:py-16">
        <SectionHeading eyebrow="Process" title="Development Journey" description="From your idea to the patient's bedside — bridging technical, regulatory, and operational hurdles." align="left" className="mb-10" />
        <div className="grid lg:grid-cols-3 gap-6">
          {MANUFACTURING_DEVELOPMENT_PHASES.map((phase, i) => {
            const Icon = PHASE_ICONS[i] ?? Cog;
            return (
              <motion.div key={phase.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="text-sm sm:text-base text-slate-600 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </HomeSection>

      <HomeSection variant="image-blue" bgImage={MDM_SECTION_IMAGES.validation} overlayIntensity="clear" dots className="py-14 sm:py-16">
        <SectionHeading eyebrow="Validation" title="Testing & Validation" align="left" className="mb-8" />
        <div className="grid sm:grid-cols-2 gap-5">
          {MANUFACTURING_TESTING_SERVICES.map((svc, i) => (
            <motion.div key={svc.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-white/90 bg-white/95 p-6 shadow-md">
              <Beaker className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{svc.title}</h3>
              <p className="text-base text-slate-600 leading-relaxed">{svc.description}</p>
            </motion.div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="muted" className="py-12 sm:py-14">
        <SectionHeading eyebrow="Scale" title="Capacity Building" align="left" className="mb-8" />
        <div className="grid sm:grid-cols-2 gap-3">
          {MANUFACTURING_CAPACITY_BUILDING.map((item) => (
            <div key={item} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
              <Building2 className="w-5 h-5 text-primary shrink-0" />
              <span className="text-base font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="gradient-blue" bgImage={MDM_SECTION_IMAGES.why} overlayIntensity="medium" dots className="py-14 sm:py-16">
        <SectionHeading title="Why Choose Us for Manufacturing" light className="mb-10" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MANUFACTURING_WHY_CHOOSE.map((item, i) => {
            const Icon = WHY_ICONS[i] ?? CheckCircle;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6">
                <Icon className="w-6 h-6 text-sky-300 mb-3" />
                <h3 className="font-heading text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-base text-white/80 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </HomeSection>
    </div>
  );
}
