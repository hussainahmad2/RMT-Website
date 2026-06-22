import React from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const servicePillars = [
  {
    slug: "regulatory-compliance",
    title: "Regulatory & Quality",
    tagline: "Navigate approval pathways with confidence",
    description:
      "FDA, CE Mark, ISO 13485, risk management, biocompatibility, and clinical evaluations — handled by specialists who speak the language of notified bodies.",
    services: ["Risk Management", "Biocompatibility", "QMS (ISO 13485)", "Global Registrations", "Quality Assurance"],
    accent: "from-blue-600/90 to-blue-800/95",
    iconBg: "bg-blue-400/20",
    textAccent: "text-blue-200",
  },
  {
    slug: "product-development",
    title: "Engineering & Development",
    tagline: "From concept sketch to validated prototype",
    description:
      "Mechanical design, software & AI, automation, simulation, and turnkey product development — one integrated engineering team for devices and production equipment.",
    services: ["Product Development", "Software & AI", "Design & Fabrication", "Automation Services", "UI/UX Development"],
    accent: "from-emerald-600/90 to-emerald-800/95",
    iconBg: "bg-emerald-400/20",
    textAccent: "text-emerald-200",
  },
  {
    slug: "contract-manufacturing",
    title: "Manufacturing & Scale-Up",
    tagline: "Bench to cleanroom to commercial batch",
    description:
      "ISO-classified cleanroom production for Class I–III devices, contract manufacturing, validation, and scale-up — without handoffs between teams.",
    services: ["Contract Manufacturing", "Cleanroom Infrastructure", "Quality Control", "Process Validation", "Scale-Up"],
    accent: "from-violet-600/90 to-violet-800/95",
    iconBg: "bg-violet-400/20",
    textAccent: "text-violet-200",
  },
] as const;

export function HomeServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#050b14] py-16 text-white sm:py-20 lg:py-24">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />
      <div className="page-container relative z-10">
        <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-200">What We Do</p>
          <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Three Pillars. <span className="text-blue-300">One Partner.</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/65 lg:text-xl">
            Regulatory strategy, engineering depth, and manufacturing scale — unified so your device moves from concept to market without fragmentation.
          </p>
        </AnimatedSection>

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {servicePillars.map((pillar, i) => (
            <motion.article
              key={pillar.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-white/22 hover:bg-white/[0.07]"
            >
              <div className={`bg-gradient-to-br ${pillar.accent} px-6 py-7 sm:px-7`}>
                <span className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${pillar.iconBg} ${pillar.textAccent}`}>
                  Pillar {i + 1}
                </span>
                <h3 className="mt-4 font-heading text-2xl font-bold leading-tight">{pillar.title}</h3>
                <p className={`mt-2 text-sm font-semibold ${pillar.textAccent}`}>{pillar.tagline}</p>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-sm leading-relaxed text-white/62 lg:text-base">{pillar.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {pillar.services.map((svc) => (
                    <span
                      key={svc}
                      className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs font-medium text-white/75"
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

        <AnimatedSection className="mt-10 text-center" delay={0.15}>
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
