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

const MBL_STANDARDS = ["GMP Compliance", "ISO 13485", "USP <71>", "USP <85>", "EU Pharmacopoeia"] as const;

const WHY_ICONS = [ShieldCheck, FlaskConical, FileCheck] as const;

const PROGRAMMES = [
  { title: "Sterility Testing", icon: FlaskConical, methods: MBL_STERILITY_METHODS },
  { title: "Bacterial Endotoxin Testing (BET)", icon: TestTube2, methods: MBL_BET_METHODS },
  { title: "Specific Pathogen Testing", icon: Bug, methods: MBL_SPECIFIC_PATHOGENS.map((name) => ({ name, description: "Specified microorganism detection for product safety and pharmacopeial compliance." })) },
] as const;

const PROGRAMME_STAGGER_CLASSES = ["lg:translate-y-0", "lg:translate-y-8", "lg:translate-y-16"] as const;

function MethodCard({
  name,
  description,
  index,
  theme = "light",
  diagonalClass = "",
}: {
  name: string;
  description: string;
  index: number;
  theme?: "light" | "dark";
  diagonalClass?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className={`group relative overflow-hidden rounded-2xl p-5 md:p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${diagonalClass} ${theme === "dark" ? "border border-white/15 bg-slate-950/35 shadow-black/15" : "border border-border bg-card/95 shadow-sm"}`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 ${
          theme === "dark"
            ? "bg-gradient-to-r from-cyan-300/70 via-sky-300/70 to-indigo-300/70"
            : "bg-gradient-to-r from-primary/70 via-sky-500/70 to-cyan-500/70"
        }`}
        aria-hidden
      />
      <h4 className={`font-heading text-base font-bold mb-2 ${theme === "dark" ? "text-white" : "text-foreground"}`}>
        {name}
      </h4>
      <p className={`text-sm sm:text-base leading-relaxed ${theme === "dark" ? "text-white/78" : "text-muted-foreground"}`}>
        {description}
      </p>
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
        const programmeBg =
          programme.title === "Bacterial Endotoxin Testing (BET)"
            ? "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1600&q=80"
            : "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1600&q=80";
        const isRightAligned = pi % 2 === 0;
        return (
          <HomeSection
            key={programme.title}
            variant={pi % 2 === 0 ? "gradient-blue" : "navy"}
            bgImage={programmeBg}
            overlayIntensity="clear"
            darkOverlay={programme.title === "Bacterial Endotoxin Testing (BET)"}
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
            <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 lg:max-w-6xl ${isRightAligned ? "lg:ml-auto" : "lg:mr-auto"}`}>
              {programme.methods.map((m, i) => (
                <MethodCard
                  key={m.name}
                  name={m.name}
                  description={m.description}
                  index={i}
                  theme="dark"
                  diagonalClass={`${
                    isRightAligned ? "sm:translate-x-2" : "sm:-translate-x-2"
                  } ${PROGRAMME_STAGGER_CLASSES[i % PROGRAMME_STAGGER_CLASSES.length]}`}
                />
              ))}
            </div>
          </HomeSection>
        );
      })}

      <HomeSection variant="image-light" dots className="py-14 sm:py-16">
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
