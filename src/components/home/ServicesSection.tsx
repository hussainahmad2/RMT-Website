import React from "react";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Cpu, Factory } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";

const servicePillars = [
  {
    slug: "regulatory-compliance",
    title: "Regulatory & Quality",
    tagline: "Navigate approval pathways with confidence",
    description:
      "FDA, CE Mark, ISO 13485, risk management, biocompatibility, and clinical evaluations — handled by specialists who speak the language of notified bodies.",
    services: ["Risk Management", "Biocompatibility", "QMS (ISO 13485)", "Global Registrations", "Quality Assurance"],
    accent: "bg-blue-700",
    iconBg: "bg-blue-400/20",
    textAccent: "text-blue-200",
    Icon: ShieldCheck,
  },
  {
    slug: "product-development",
    title: "Engineering & Development",
    tagline: "From concept sketch to validated prototype",
    description:
      "Mechanical design, software & AI, automation, simulation, and turnkey product development — one integrated engineering team for devices and production equipment.",
    services: ["Product Development", "Software & AI", "Design & Fabrication", "Automation Services", "UI/UX Development"],
    accent: "bg-emerald-700",
    iconBg: "bg-emerald-400/20",
    textAccent: "text-emerald-200",
    Icon: Cpu,
  },
  {
    slug: "contract-manufacturing",
    title: "Manufacturing & Scale-Up",
    tagline: "Bench to cleanroom to commercial batch",
    description:
      "ISO-classified cleanroom production for Class I–III devices, contract manufacturing, validation, and scale-up — without handoffs between teams.",
    services: ["Contract Manufacturing", "Cleanroom Infrastructure", "Quality Control", "Process Validation", "Scale-Up"],
    accent: "bg-violet-700",
    iconBg: "bg-violet-400/20",
    textAccent: "text-violet-200",
    Icon: Factory,
  },
] as const;

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#050b14] py-16 text-white sm:py-20 lg:py-28">
      {/* blueprint watermark */}
      <div className="pointer-events-none absolute inset-0 hidden opacity-[0.14] sm:block" aria-hidden>
        <svg className="h-full w-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="services-grid" width="46" height="46" patternUnits="userSpaceOnUse">
              <path d="M 46 0 L 0 0 0 46" fill="none" stroke="#60a5fa" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
        </svg>
      </div>
      <div
        className="pointer-events-none absolute -left-24 top-0 hidden h-[32rem] w-[32rem] rounded-full bg-blue-600/10 blur-[100px] lg:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 hidden h-[32rem] w-[32rem] rounded-full bg-violet-600/10 blur-[100px] lg:block"
        aria-hidden
      />

      <div className="page-container relative z-10">
        <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center sm:mb-16" animation="slideLeft" delay={0.1} duration={0.9}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-200">What We Do</p>
          <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Three Pillars. <span className="text-blue-300">One Partner.</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/65 lg:text-xl">
            Regulatory strategy, engineering depth, and manufacturing scale — unified so your device moves from concept to market without fragmentation.
          </p>
        </AnimatedSection>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {servicePillars.map((pillar, i) => (
            <motion.article
              key={pillar.slug}
              initial={{ opacity: 0, y: 60, rotate: i % 2 === 0 ? -4 : 4, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px", amount: 0.2 }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-white/22 hover:bg-white/[0.07] ${
                i === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className={`${pillar.accent} px-6 py-7 sm:px-7`}>
                <div className="flex items-center justify-between gap-3">
                  <span className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${pillar.iconBg} ${pillar.textAccent}`}>
                    Pillar {i + 1}
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <pillar.Icon className="h-5 w-5 text-white" />
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-2xl font-bold leading-tight">{pillar.title}</h3>
                <p className={`mt-2 text-base font-semibold ${pillar.textAccent}`}>{pillar.tagline}</p>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-base leading-relaxed text-white/62 lg:text-lg">{pillar.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {pillar.services.map((svc) => (
                    <span
                      key={svc}
                      className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-sm font-medium text-white/75"
                    >
                      {svc}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/services/${pillar.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-all group-hover:gap-3 hover:text-blue-200"
                >
                  Explore {pillar.title.split(" ")[0]} Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <AnimatedSection className="mt-10 text-center sm:mt-12" delay={0.15} animation="scaleUp" duration={0.75}>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/services">
              View Full Service Portfolio <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
