import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight, Play, CheckCircle, Globe, Users, Award, Clock,
  Shield, Factory,
  MapPin, Phone, Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { HomeProductShowcase, HomeCapabilitiesSection } from "@/components/HomeProductShowcase";
import { PartnerLogoCarousel } from "@/components/PartnerLogoCarousel";
import { HomeServicesSection } from "@/components/HomeServicesSection";
import { HomeWhyRmtSection } from "@/components/HomeWhyRmtSection";
import { RequestQuoteModal } from "@/components/RequestQuoteModal";
import { WorldMap } from "@/components/WorldMap";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { HOME_IMAGES } from "@/data/home-images";
import { HOME_PRODUCT_HERO_SLIDES } from "@/data/home-products";

const stats = [
  { value: 15, step: 1, suffix: "+", label: "Years of Experience", icon: <Clock className="w-5 h-5" /> },
  { value: 200, step: 5, suffix: "+", label: "Projects Delivered", icon: <Award className="w-5 h-5" /> },
  { value: 50, step: 1, suffix: "+", label: "Expert Professionals", icon: <Users className="w-5 h-5" /> },
  { value: 30, step: 1, suffix: "+", label: "Countries Served", icon: <Globe className="w-5 h-5" /> },
];

const heroCertificationMarks = [
  { label: "ISO 13485:2016", icon: "/badges/iso-13485-badge.png" },
  { label: "DRAP", icon: "/badges/drap-badge.png" },
] as const;

const ctaHighlights = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Regulatory Confidence",
    description: "FDA, CE Mark, and ISO 13485 pathways handled by specialists.",
  },
  {
    icon: <Factory className="w-5 h-5" />,
    title: "Bench to Production",
    description: "Design, validation, and cleanroom manufacturing under one roof.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Global Delivery",
    description: "US headquarters and South Asia operations for worldwide reach.",
  },
];

const globalOffices = [
  {
    city: "United States",
    label: "HQ",
    description: "North America Operations",
    address: "St. Cloud Edgewater Business Centre Sartell, Minnesota, United States",
    phone: "+1 (707) 5618 771",
    email: "info@rmt-usa.com",
    latitude: 45.6216,
    longitude: -94.2069,
  },
  {
    city: "Pakistan",
    label: "PAK",
    description: "South Asia Office",
    address: "Building 2A, W1 Street, Rawat Industrial Estate, Islamabad, 46220",
    phone: "+1 (707) 5618 771",
    email: "info@rmt-usa.com",
    latitude: 30.3753,
    longitude: 69.3451,
  },
];

/** Easily swappable — production-floor image used behind the pinned "What We Build" section */
const PRODUCTION_BG_IMAGE = HOME_IMAGES.capabilities;

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const activeHero = HOME_PRODUCT_HERO_SLIDES[heroIndex];

  useSEO({
    title: "Revive Medical Technologies Inc",
    description: "RMT designs and manufactures interventional catheters, microspheres, cleanroom medical devices, and custom production equipment — with end-to-end regulatory, development, and manufacturing services.",
    keywords: "medical device development, regulatory compliance FDA CE, ISO 13485, contract manufacturing, pharmaceutical development",
    path: "/",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HOME_PRODUCT_HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-background text-foreground">
      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden bg-background pb-2 pt-12 text-white sm:pb-3 sm:pt-14 lg:pt-16">
        <div className="page-container">
          <div className="relative isolate overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[#0b1322] dark:shadow-[0_28px_80px_rgba(2,6,23,0.45)] sm:rounded-[2rem]">
            <div className="relative min-h-[480px] overflow-hidden rounded-[1.5rem] bg-[#07111d] sm:min-h-[560px] sm:rounded-[2rem] lg:h-[calc(100svh-7rem)] lg:min-h-0">
              <AnimatePresence mode="sync">
                <motion.img
                  key={activeHero.src}
                  src={activeHero.src}
                  alt={activeHero.alt}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1.08 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                    scale: { duration: 5, ease: "linear" },
                  }}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-[#07111d]/74 dark:bg-[#040a12]/80" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,29,0.9)_0%,rgba(7,17,29,0.55)_46%,rgba(7,17,29,0.88)_100%)] lg:bg-[linear-gradient(90deg,rgba(7,17,29,0.92)_0%,rgba(7,17,29,0.78)_38%,rgba(7,17,29,0.26)_100%)] dark:bg-[linear-gradient(180deg,rgba(4,10,18,0.92)_0%,rgba(4,10,18,0.6)_46%,rgba(4,10,18,0.9)_100%)] dark:lg:bg-[linear-gradient(90deg,rgba(4,10,18,0.94)_0%,rgba(4,10,18,0.82)_38%,rgba(4,10,18,0.32)_100%)]" />

              <div className="relative flex min-h-[480px] flex-col justify-center gap-6 px-4 py-8 sm:min-h-[560px] sm:px-6 sm:py-10 md:px-8 lg:h-[calc(100svh-7rem)] lg:min-h-0 lg:flex-row lg:items-center lg:gap-8 lg:px-12 lg:py-10 xl:px-16">
                <div className="mb-3 flex justify-end sm:mb-4 lg:absolute lg:right-12 lg:top-8 lg:z-20 lg:w-auto">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    {heroCertificationMarks.map((mark) => (
                      <div key={mark.label} className="flex items-center justify-center">
                        <span
                          aria-hidden
                          className="block h-8 w-8 shrink-0 bg-white sm:h-10 sm:w-10 lg:h-12 lg:w-12"
                          style={{
                            WebkitMaskImage: `url('${mark.icon}')`,
                            maskImage: `url('${mark.icon}')`,
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                            WebkitMaskPosition: "center",
                            maskPosition: "center",
                            WebkitMaskSize: "contain",
                            maskSize: "contain",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* ---- Text block ---- */}
                <motion.div
                  initial={{ opacity: 0, x: -140 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-xl lg:flex-1 lg:max-w-2xl"
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-[18ch] font-heading text-[clamp(1.25rem,4vw,2.7rem)] font-bold leading-[0.92] tracking-[-0.045em] text-white sm:max-w-[17ch] md:max-w-[18ch]"
                  >
                    Devices &amp; Machines<br />
                    Built for <span className="text-blue-300">Clinical Impact</span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.32, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-3 hidden max-w-2xl text-[clamp(0.8rem,1.25vw,1rem)] leading-relaxed text-white/84 sm:mt-4 sm:block"
                  >
                    From interventional catheters and biomaterial microspheres to custom production equipment and ISO-classified cleanrooms — RMT engineers technologies that are as unique as the procedures they enable.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.44, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-2 hidden max-w-2xl text-[clamp(0.7rem,1vw,0.85rem)] leading-relaxed text-white/70 md:mt-2 md:block"
                  >
                    Every product on this page connects to deep end-to-end services — development, validation, regulatory, and manufacturing.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.56, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3"
                  >
                    <Button asChild size="lg" className="h-10 rounded-xl bg-white px-4 text-sm font-bold text-primary hover:bg-white/92 sm:h-11 sm:px-5 sm:text-sm">
                      <a href="#featured-products">Explore Our Technologies <ArrowRight className="ml-2 h-4 w-4" /></a>
                    </Button>
                    <button
                      type="button"
                      aria-label="Watch Overview"
                      onClick={() => setVideoOpen(true)}
                      className="inline-flex h-10 items-center justify-center rounded-xl border border-white/28 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/16 sm:h-11 sm:px-5"
                    >
                      <Play className="mr-2 h-4 w-4 fill-current" />
                      Watch Overview
                    </button>
                  </motion.div>
                </motion.div>

                {/* ---- Image ---- */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex min-h-[7rem] w-full shrink-0 flex-col items-center gap-3 sm:min-h-[9rem] sm:gap-4 md:min-h-[12rem] lg:min-h-0 lg:flex-1 lg:flex-row-reverse lg:items-end lg:justify-start lg:gap-6"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="hidden md:flex md:flex-1 md:justify-center"
                  >
                    <img
                      src="/hero/doctor-cutout.png"
                      alt="Medical professional"
                      className="h-[14rem] w-auto max-w-[80vw] object-contain object-bottom sm:h-[18rem] sm:max-w-full md:h-[22rem] lg:h-[26rem] xl:h-[30rem]"
                      loading="eager"
                      decoding="async"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== COMPANY SNAPSHOT ===================== */}
      <section className="relative overflow-hidden bg-background py-14 sm:py-16 lg:min-h-[calc(100svh-8rem)] lg:py-20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[24rem] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_58%)] sm:h-[28rem]"
          aria-hidden
        />
        <motion.div
          className="page-container relative z-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px", amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          onViewportEnter={() => setStatsInView(true)}
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">Company Snapshot</p>
            <h2 className="font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              Numbers That Speak for Themselves
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              A track record built across two continents and thirty-plus countries.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px", amount: 0.3 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] sm:min-h-[260px] sm:p-8 lg:min-h-[360px] lg:p-10"
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0)_28%)] opacity-60 dark:opacity-20" aria-hidden />
                <div className="relative flex h-full min-h-[190px] flex-col justify-between sm:min-h-[210px] lg:min-h-[260px]">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-primary/12 bg-primary/8 text-primary shadow-sm sm:h-16 sm:w-16 lg:h-20 lg:w-20 [&>svg]:h-6 [&>svg]:w-6 sm:[&>svg]:h-7 sm:[&>svg]:w-7 lg:[&>svg]:h-8 lg:[&>svg]:w-8">
                    {stat.icon}
                  </div>
                  <div className="mt-7">
                    <p className="font-heading text-4xl font-bold leading-none text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        duration={1.9}
                        delay={0.2 + i * 0.1}
                        start={statsInView}
                      />
                    </p>
                    <p className="mt-4 max-w-[16rem] text-left text-sm font-semibold leading-snug text-muted-foreground sm:text-base lg:text-lg xl:text-xl">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 bg-white dark:bg-[#08111f]">
          <PartnerLogoCarousel variant="hero" />
        </div>
      </section>

      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe className="h-full w-full" src="https://www.youtube.com/embed/LDu3kqfqyPw?autoplay=1" title="RMT Medical Technologies Company Overview" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              <button onClick={() => setVideoOpen(false)} className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-lg leading-none text-white transition-colors hover:bg-black/80">&times;</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================== WHAT WE BUILD (pinned bg) ===================== */}
      <section className="relative overflow-hidden bg-background">
        {/* pinned production-floor background — stays fixed while the cards below scroll over it,
            then releases naturally once this section's content has fully passed */}
        <div className="hidden lg:sticky lg:top-0 lg:-z-10 lg:block lg:h-screen lg:w-full lg:overflow-hidden">
          <img src={PRODUCTION_BG_IMAGE} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" aria-hidden />
          <div className="absolute inset-0 bg-[#040a12]/86" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.18),transparent_55%)]" />
        </div>

        <div className="relative z-10 lg:-mt-[100vh]">
          <div className="page-container py-14 sm:py-16 lg:py-32">
            <section id="featured-products" className="scroll-mt-28">
              <AnimatedSection className="mb-8 max-w-3xl lg:mb-10" animation="slideDown" delay={0.1} duration={0.9}>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-300">What We Build</p>
                <h2 className="font-heading text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  Flagship Devices &amp; <span className="text-sky-300">Production Machines</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg lg:text-xl">
                  A curated look at our flagship interventional device — plus the three product lines that define RMT&apos;s engineering and manufacturing footprint.
                </p>
              </AnimatedSection>
              <HomeProductShowcase />
            </section>
          </div>
        </div>
      </section>

      {/* ===================== HOW WE DELIVER ===================== */}
      <HomeCapabilitiesSection />

      {/* ===================== WHAT WE DO ===================== */}
      <HomeServicesSection />

      {/* ===================== WHY RMT ===================== */}
      <HomeWhyRmtSection />

      {/* ===================== GLOBAL PRESENCE ===================== */}
      <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
        <div
          className="pointer-events-none absolute right-[-10rem] top-1/2 z-0 hidden -translate-y-1/2 lg:block"
          aria-hidden
        >
          <div
            className="h-[38rem] w-[38rem] bg-primary/8 dark:bg-white/8"
            style={{
              WebkitMaskImage: "url('/bg-icons/globe.png')",
              maskImage: "url('/bg-icons/globe.png')",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />
        </div>
        <div className="page-container relative z-10">
          <AnimatedSection className="mb-10 max-w-3xl" animation="blurFade" delay={0.1} duration={0.95}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Global Presence</p>
            <h2 className="font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              Operating Across 2 Continents
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              With offices in the United States and South Asia, RMT Medical Technologies delivers local regulatory and engineering expertise across key global medical device markets.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -140, scale: 0.94 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px", amount: 0.15 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-2xl border border-border shadow-sm"
            >
              <WorldMap offices={globalOffices} />
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {globalOffices.map((office, i) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, x: 120, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px", amount: 0.2 }}
                  transition={{ delay: 0.2 + i * 0.16, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <h3 className="font-heading text-lg font-bold text-foreground">{office.city}</h3>
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">{office.label}</span>
                      </div>
                      <p className="mb-2 text-base text-muted-foreground sm:text-lg">{office.description}</p>
                      <p className="mb-3 text-base text-foreground/80 sm:text-lg">{office.address}</p>
                      <div className="flex flex-col gap-1.5 text-base sm:text-lg">
                        <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary">
                          <Phone className="h-3.5 w-3.5 shrink-0" />{office.phone}
                        </a>
                        {office.email && (
                          <a href={`mailto:${office.email}`} className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary">
                            <Mail className="h-3.5 w-3.5 shrink-0" />{office.email}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== LET'S BUILD TOGETHER ===================== */}
      <section className="relative overflow-hidden bg-[#050b14] py-16 text-white sm:py-20 lg:py-28">
        <img src={HOME_IMAGES.cta} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b14]/70 via-[#050b14]/92 to-[#050b14]" />
        <div
          className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-blue-500/15 blur-[110px]"
          aria-hidden
        />

        <div className="page-container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-4 py-1.5 backdrop-blur-sm"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Let&apos;s Build Together</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Ready to Bring Your <span className="text-blue-300">Medical Device</span> to Market?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.12, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/82 sm:text-lg lg:text-xl"
            >
              Partner with RMT Medical Technologies for end-to-end expertise — from regulatory strategy and engineering to validation and commercial-scale manufacturing.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.22, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">
                  Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                onClick={() => setQuoteOpen(true)}
                className="border-white/40 bg-white/5 text-white hover:bg-white/12"
              >
                Request a Quote
              </Button>
            </motion.div>
          </div>

          <div className="mt-14 grid gap-4 grid-cols-1 sm:grid-cols-3 sm:gap-5">
            {ctaHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px", amount: 0.2 }}
                transition={{ delay: i * 0.13, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-4 rounded-2xl border border-white/16 bg-white/8 p-5 backdrop-blur-sm transition-colors hover:bg-white/12 sm:p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/18 bg-white/10 text-blue-200">
                  {item.icon}
                </div>
                <div className="min-w-0 text-left">
                  <h3 className="font-heading text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-base leading-relaxed text-white/68">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 flex max-w-3xl flex-col gap-4 rounded-2xl border border-white/16 bg-white/8 p-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="text-left">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/55">Talk to our team</p>
              <p className="font-semibold text-white">info@rmt-usa.com</p>
            </div>
            <Button asChild variant="outline" size="sm" className="shrink-0 border-white/30 text-white hover:bg-white/10">
              <Link href="/services">View All Services <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
            </Button>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 border-t border-white/15 pt-6 sm:gap-7">
            {["CE Mark Compliant", "ISO 13485:2016", "200+ Projects"].map((badge, i) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2 text-base text-white/78"
              >
                <CheckCircle className="h-4 w-4 shrink-0 text-blue-300" />
                {badge}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RequestQuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
