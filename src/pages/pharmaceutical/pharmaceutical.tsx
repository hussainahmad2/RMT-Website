import React, { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  FlaskConical,
  Shield,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CinematicPageHero } from "@/components/CinematicPageHero";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import {
  PHARMA_EXPERTISE,
  PHARMA_HERO_IMAGE,
  PHARMA_HIGHLIGHTS,
  PHARMA_JOURNEY,
  PHARMA_SERVICES,
  PHARMA_THERAPEUTIC_AREAS,
  PHARMA_WHY_CHOOSE,
} from "@/data/pharmaceutical-content";

export default function Pharmaceutical() {
  const [activeExpertise, setActiveExpertise] = useState(PHARMA_EXPERTISE[0].id);
  const activeArea = PHARMA_EXPERTISE.find((e) => e.id === activeExpertise)!;
  const ActiveIcon = activeArea.icon;

  useSEO({
    title: "Pharmaceutical Domain",
    description:
      "End-to-end pharmaceutical development services — from pre-formulation and formulation development to scale-up, regulatory submission, technology transfer, and commercial manufacturing support.",
    keywords:
      "pharmaceutical development, formulation development, CMC support, QbD, analytical method development, technology transfer, CTD dossier, generic development, 505(b)(2)",
    path: "/pharmaceutical",
  });

  return (
    <div className="bg-background min-h-screen">
      <CinematicPageHero
        eyebrow="Pharmaceutical Domain"
        title="Transforming Molecules into Market-Ready Medicines"
        description="From pre-formulation research and formulation development to scale-up, regulatory submission, technology transfer, and commercial manufacturing support — we help pharmaceutical innovators accelerate development while reducing risk."
        backgroundImage={PHARMA_HERO_IMAGE}
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
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {PHARMA_HIGHLIGHTS.map((h) => (
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
                <FlaskConical className="w-4 h-4 text-primary" />
                <p className="text-primary text-xs font-bold uppercase tracking-widest">About Us</p>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Your Strategic Pharmaceutical Development Partner
              </h2>
              <div className="h-px w-16 bg-primary/50 mb-5" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are a science-driven pharmaceutical development organization dedicated to transforming innovative concepts into commercially successful medicines. Our multidisciplinary team of formulation scientists, analytical experts, regulatory specialists, and manufacturing professionals collaborates across every stage of the product lifecycle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you are developing a generic product, a complex dosage form, a 505(b)(2) opportunity, or a novel drug delivery system, we provide the technical expertise and regulatory insight needed to achieve successful commercialization.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden border border-border aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80"
                  alt="Pharmaceutical formulation laboratory"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Our Mission</p>
                  <p className="text-white text-sm leading-relaxed">
                    Building the future of healthcare through science, innovation, and regulatory excellence.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 md:py-24 bg-secondary/20 border-b border-border">
        <div className="page-container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Our Expertise</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Pharmaceutical Product Lifecycle Management
            </h2>
            <div className="h-px w-16 bg-primary/50 mx-auto mb-4" />
            <p className="text-muted-foreground leading-relaxed">
              Comprehensive capabilities spanning discovery support through post-approval lifecycle management.
            </p>
          </AnimatedSection>

          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2 pb-2 lg:pb-0">
              {PHARMA_EXPERTISE.map((area) => {
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
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 h-full">
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

      {/* Services */}
      <section className="py-20 md:py-24 border-b border-border">
        <div className="page-container">
          <AnimatedSection className="mb-12">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              End-to-End Pharmaceutical Development Services
            </h2>
            <div className="h-px w-16 bg-primary/50 mb-4" />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {PHARMA_SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={i * 0.05}>
                  <article className="group h-full rounded-2xl border border-border bg-card p-6 sm:p-7 hover:border-primary/35 hover:shadow-xl transition-all duration-300">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-24 bg-[#060d17] border-b border-white/10">
        <div className="page-container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Accelerating Pharmaceutical Innovation
            </h2>
            <div className="h-px w-16 bg-primary/50 mx-auto" />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PHARMA_WHY_CHOOSE.map((item, i) => {
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
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Product Development Journey</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              From Concept to Commercial Success
            </h2>
            <div className="h-px w-16 bg-primary/50 mx-auto" />
          </AnimatedSection>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" aria-hidden />
            <div className="space-y-6">
              {PHARMA_JOURNEY.map((step, i) => (
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

      {/* Therapeutic Areas */}
      <section className="py-20 md:py-24 bg-secondary/20 border-b border-border">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Therapeutic Areas</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Expertise Across Multiple Therapeutic Segments
              </h2>
              <div className="h-px w-16 bg-primary/50 mb-5" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our development programmes span diverse therapeutic categories, enabling tailored formulation strategies and regulatory pathways for each product class.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
              >
                Discuss your therapeutic area <ChevronRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="flex flex-wrap gap-2.5">
                {PHARMA_THERAPEUTIC_AREAS.map((area) => (
                  <span
                    key={area}
                    className="text-sm font-medium px-4 py-2 rounded-full bg-card border border-border text-foreground/80 hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 md:py-24 border-b border-border">
        <div className="page-container">
          <AnimatedSection>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-2 relative min-h-[240px]">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SMihTJ9cRqAJITol-v9D-yF92297NeMS7IoMbQWYJN6iUj-zIJhPXXc&s=10"
                    alt="Quality assurance in pharmaceutical development"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/20" />
                </div>
                <div className="lg:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-5 h-5 text-primary" />
                    <p className="text-primary text-xs font-bold uppercase tracking-widest">Quality Commitment</p>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Quality Built Into Every Stage
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Quality is not a final checkpoint — it&apos;s integrated throughout the entire development process. Our development programmes follow risk-based methodologies, scientific rigor, and regulatory expectations to ensure reliable, reproducible, and commercially viable pharmaceutical products. This aligns with the lifecycle-focused approach increasingly emphasized in pharmaceutical development and manufacturing.
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
              Ready to Bring Your Pharmaceutical Product to Market?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-3">
              Partner with a team that understands the complete pharmaceutical product lifecycle — from formulation strategy and analytical development to regulatory approval and commercialization.
            </p>
            <p className="text-white/70 mb-8">Let&apos;s develop the next generation of medicines together.</p>
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
