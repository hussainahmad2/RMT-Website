import React, { useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Shield,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CinematicPageHero } from "@/components/CinematicPageHero";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { ALL_SERVICES } from "@/data/services";
import { buildBreadcrumbJsonLd, buildServiceJsonLd, servicePath } from "@/lib/service-seo";
import {
  SOFTWARE_AI_ABOUT_IMAGE,
  SOFTWARE_AI_COMPLIANCE_IMAGE,
  SOFTWARE_AI_EXPERTISE,
  SOFTWARE_AI_HERO_IMAGE,
  SOFTWARE_AI_HIGHLIGHTS,
  SOFTWARE_AI_JOURNEY,
  SOFTWARE_AI_OVERVIEW,
  SOFTWARE_AI_PLATFORMS,
  SOFTWARE_AI_SERVICES,
  SOFTWARE_AI_WHY_CHOOSE,
} from "@/data/software-ai-content";

const SERVICE = ALL_SERVICES.find((s) => s.slug === "software-ai")!;

export default function SoftwareAiServicePage() {
  const [activeExpertise, setActiveExpertise] = useState(SOFTWARE_AI_EXPERTISE[0].id);
  const activeArea = SOFTWARE_AI_EXPERTISE.find((e) => e.id === activeExpertise)!;
  const ActiveIcon = activeArea.icon;

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
      <CinematicPageHero
        eyebrow="Software & AI Solutions"
        title="Intelligent Software for Healthcare"
        description="Full-spectrum software development — AI/ML, cloud, SaMD compliance, and complete validation lifecycle for next-generation medical technology."
        backgroundImage={SOFTWARE_AI_HERO_IMAGE}
        fullHeight
      >
        <Button asChild size="lg" className="rounded-xl font-semibold">
          <Link href="/contact">Start Your Project <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-xl border-white/20 text-white hover:bg-white/10 hover:text-white"
        >
          <Link href="/contact">Speak With Our Experts</Link>
        </Button>
      </CinematicPageHero>

      {/* Highlights */}
      <section className="border-b border-white/10 bg-primary">
        <div className="page-container py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/15">
            {SOFTWARE_AI_HIGHLIGHTS.map((h) => (
              <div key={h.label} className="text-center text-white px-4 py-2">
                <p className="font-heading text-2xl sm:text-3xl font-bold">{h.value}</p>
                <p className="text-white/70 text-xs uppercase tracking-wider mt-1">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-24 border-b border-border">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-4 h-4 text-primary" />
                <p className="text-primary text-xs font-bold uppercase tracking-widest">About Us</p>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Software at the Heart of Modern Medical Devices
              </h2>
              <div className="h-px w-16 bg-primary/50 mb-5" />
              {SOFTWARE_AI_OVERVIEW.map((para, i) => (
                <p key={i} className={`text-muted-foreground leading-relaxed ${i < SOFTWARE_AI_OVERVIEW.length - 1 ? "mb-4" : ""}`}>
                  {para}
                </p>
              ))}
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden border border-border aspect-[4/3]">
                <img
                  src={SOFTWARE_AI_ABOUT_IMAGE}
                  alt="Healthcare software development"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Our Mission</p>
                  <p className="text-white text-sm leading-relaxed">
                    Building compliant, high-performance healthcare software with full traceability to regulatory requirements.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="relative overflow-hidden py-20 md:py-24 border-b border-border">
        <div className="absolute inset-0">
          <img
            src="/assets/software-ai-expertise-bg.webp"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/70 dark:bg-black/78" />
        </div>
        <div className="page-container relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Our Expertise</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Software & AI Development Capabilities
            </h2>
            <div className="h-px w-16 bg-primary/50 mx-auto mb-4" />
            <p className="text-muted-foreground leading-relaxed">
              From custom medical software and AI solutions through cloud deployment, compliance, and quality assurance.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:overflow-visible">
              {SOFTWARE_AI_EXPERTISE.map((area) => {
                const Icon = area.icon;
                const isActive = area.id === activeExpertise;
                return (
                  <button
                    key={area.id}
                    onClick={() => setActiveExpertise(area.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium transition-all shrink-0 lg:shrink ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-card border border-border text-foreground/75 hover:border-primary/30 hover:text-primary"
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="leading-snug">{area.title}</span>
                  </button>
                );
              })}
            </div>

            <AnimatedSection key={activeExpertise} immediate>
              <div className="rounded-2xl border border-border bg-card/95 p-6 sm:p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ActiveIcon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{activeArea.title}</h3>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {activeArea.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-24 bg-[#060d17] border-b border-white/10">
        <div className="page-container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Accelerating Healthcare Software Innovation
            </h2>
            <div className="h-px w-16 bg-primary/50 mx-auto" />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOFTWARE_AI_WHY_CHOOSE.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 0.05}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 h-full hover:border-primary/30 transition-colors">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Journey */}
      <section className="py-20 md:py-24 border-b border-border">
        <div className="page-container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Software Development Journey</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              From Concept to Production Deployment
            </h2>
            <div className="h-px w-16 bg-primary/50 mx-auto" />
          </AnimatedSection>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" aria-hidden />
            <div className="space-y-6">
              {SOFTWARE_AI_JOURNEY.map((step, i) => (
                <AnimatedSection key={step.phase} delay={i * 0.04}>
                  <div className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                    <div className={`sm:w-1/2 ${i % 2 === 0 ? "sm:text-right sm:pr-8" : "sm:pl-8"}`}>
                      <span className="text-primary text-xs font-bold uppercase tracking-widest">{step.phase}</span>
                      <h3 className="font-heading font-bold text-foreground text-lg mt-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{step.detail}</p>
                    </div>
                    <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-1.5" />
                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms & Solutions */}
      <section className="py-20 md:py-24 bg-secondary/20 border-b border-border">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Platforms & Solutions</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Expertise Across Multiple Healthcare Software Segments
              </h2>
              <div className="h-px w-16 bg-primary/50 mb-5" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our software programmes span diverse healthcare technology categories — from SaMD and EHR integration to AI-powered clinical platforms and connected device ecosystems.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
              >
                Discuss your software project <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="flex flex-wrap gap-2.5">
                {SOFTWARE_AI_PLATFORMS.map((platform) => (
                  <span
                    key={platform}
                    className="text-sm font-medium px-4 py-2 rounded-full bg-card border border-border text-foreground/80 hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Compliance Commitment */}
      <section className="py-20 md:py-24 border-b border-border">
        <div className="page-container">
          <AnimatedSection>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-2 relative min-h-[240px]">
                  <img
                    src={SOFTWARE_AI_COMPLIANCE_IMAGE}
                    alt="Software compliance and regulatory standards"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/20" />
                </div>
                <div className="lg:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-5 h-5 text-primary" />
                    <p className="text-primary text-xs font-bold uppercase tracking-widest">Compliance Commitment</p>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Compliance Built Into Every Line of Code
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Compliance is not an afterthought — it&apos;s integrated throughout the entire software development lifecycle. Our programmes follow IEC 62304, FDA SaMD guidance, HIPAA, and ISO 27001 expectations to ensure secure, auditable, and submission-ready healthcare software. Every engagement produces traceable documentation from requirements through verification and post-market change control.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-primary">
        <div className="page-container text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Healthcare Software?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-3">
              Partner with a team that understands regulated healthcare software — from architecture and AI development to validation, deployment, and post-market support.
            </p>
            <p className="text-white/70 mb-8">Let&apos;s build the next generation of health technology together.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-xl font-semibold">
                <Link href="/contact">Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
              >
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
