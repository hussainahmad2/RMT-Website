import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight, Play, CheckCircle, Globe, Users, Award, Clock,
  Cpu, Shield, Brain, FlaskConical, CircuitBoard, Settings2, Pill, Factory
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/ServiceCard";
import { WorldMap } from "@/components/WorldMap";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";

/* ---- hero images carousel ---- */
const heroImages = [
  { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80", alt: "Medical device engineer working in laboratory" },
  { src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80", alt: "Medical team reviewing regulatory documentation" },
  { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80", alt: "Pharmaceutical research and development" },
  { src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80", alt: "Quality testing in medical laboratory" },
];

const featuredServices = [
  { title: "Product Design & Prototyping", description: "End-to-end product design from concept to functional prototype — 3D modelling, PCB design, and advanced manufacturing.", icon: <Cpu className="w-6 h-6" />, slug: "product-design", subServices: ["3D Design & Modelling", "PCB Design", "Additive Manufacturing", "Subtractive Manufacturing"] },
  { title: "Regulatory Compliance", description: "Expert guidance through FDA, CE, and global regulatory pathways — technical files, clinical evaluations, ISO certifications.", icon: <Shield className="w-6 h-6" />, slug: "regulatory-compliance", subServices: ["Technical File for FDA/CE", "Clinical Evaluation Report", "ISO 13485 Certification", "ISO 14971 Risk Management"] },
  { title: "Software & AI Solutions", description: "Intelligent software powering next-generation medical devices — AI, cloud, SaMD, and full development lifecycle.", icon: <Brain className="w-6 h-6" />, slug: "software-ai", subServices: ["AI & Machine Learning", "DevOps/Cloud Computing", "Software as Medical Device", "UI/UX Development"] },
  { title: "Quality Testing", description: "Rigorous bench-to-market testing ensuring safety, performance, and compliance with international standards.", icon: <FlaskConical className="w-6 h-6" />, slug: "quality-testing", subServices: ["Bench Testing", "Physico-Chemical Testing", "Dimensional Analysis", "Simulation"] },
  { title: "Electronics & Firmware", description: "Precision electronics and firmware for life-critical applications — design, verification, and full validation.", icon: <CircuitBoard className="w-6 h-6" />, slug: "electronics-firmware", subServices: ["Firmware Development", "Electronics Design", "Design V&V"] },
  { title: "Contract Manufacturing", description: "GMP-compliant manufacturing of active and non-active medical devices, injectables, wearables, and biomaterials.", icon: <Factory className="w-6 h-6" />, slug: "contract-manufacturing", subServices: ["Active Medical Devices", "Injectables", "Wearables", "Biosensors"] },
];

const stats = [
  { value: "15+", label: "Years of Experience", icon: <Clock className="w-5 h-5" /> },
  { value: "200+", label: "Projects Delivered", icon: <Award className="w-5 h-5" /> },
  { value: "50+", label: "Expert Professionals", icon: <Users className="w-5 h-5" /> },
  { value: "30+", label: "Countries Served", icon: <Globe className="w-5 h-5" /> },
];

const whyChoose = [
  { title: "ISO 13485:2016 Certified", description: "Our quality management system meets the highest international standards for medical device manufacturing." },
  { title: "FDA & CE Expertise", description: "Deep regulatory knowledge ensuring your product navigates approval pathways efficiently and successfully." },
  { title: "End-to-End Partnership", description: "From initial concept through design, testing, approval, and manufacturing — we are with you every step." },
  { title: "Global Reach", description: "Operating across the USA, Europe, Middle East, and South Asia with local regulatory expertise." },
];

const process = [
  { step: "01", title: "Consult", description: "We assess your product concept, market requirements, and regulatory pathway to build a tailored strategy." },
  { step: "02", title: "Design", description: "Our engineers create and iterate on your product design, developing prototypes for testing and validation." },
  { step: "03", title: "Validate", description: "Rigorous quality testing and regulatory documentation ensure your product meets all required standards." },
  { step: "04", title: "Deliver", description: "We manage regulatory submissions and scale manufacturing for a successful market launch." },
];

const officeLocations = [
  { city: "United States", label: "HQ", description: "North America Operations" },
  { city: "Germany", label: "EU", description: "European Operations" },
  { city: "Pakistan", label: "PAK", description: "South Asia Office" },
  { city: "UAE", label: "ME", description: "Middle East & Africa" },
];

/* ---- decorative SVG icons (medical background) ---- */
const StethoscopeBg = () => (
  <svg viewBox="0 0 200 200" className="absolute opacity-[0.04] text-primary" fill="none" stroke="currentColor" strokeWidth="4">
    <circle cx="70" cy="50" r="28" />
    <circle cx="130" cy="50" r="28" />
    <path d="M 42 50 Q 42 120 100 145 Q 158 120 158 50" />
    <circle cx="100" cy="155" r="15" />
    <line x1="100" y1="170" x2="100" y2="195" />
    <circle cx="100" cy="197" r="5" />
  </svg>
);

const DnaBg = () => (
  <svg viewBox="0 0 100 200" className="absolute opacity-[0.04] text-primary" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M 20 10 Q 50 30 80 50 Q 50 70 20 90 Q 50 110 80 130 Q 50 150 20 170 Q 50 190 80 210" />
    <path d="M 80 10 Q 50 30 20 50 Q 50 70 80 90 Q 50 110 20 130 Q 50 150 80 170 Q 50 190 20 210" />
    <line x1="20" y1="50" x2="80" y2="50" /><line x1="20" y1="70" x2="80" y2="70" />
    <line x1="20" y1="90" x2="80" y2="90" /><line x1="20" y1="110" x2="80" y2="110" />
    <line x1="20" y1="130" x2="80" y2="130" /><line x1="20" y1="150" x2="80" y2="150" />
  </svg>
);

const CircuitBg = () => (
  <svg viewBox="0 0 200 200" className="absolute opacity-[0.04] text-primary" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="30" y="30" width="40" height="40" rx="4" />
    <rect x="130" y="30" width="40" height="40" rx="4" />
    <rect x="80" y="110" width="40" height="40" rx="4" />
    <rect x="30" y="130" width="30" height="30" rx="4" />
    <rect x="140" y="130" width="30" height="30" rx="4" />
    <line x1="70" y1="50" x2="130" y2="50" /><line x1="100" y1="70" x2="100" y2="110" />
    <line x1="50" y1="70" x2="50" y2="130" /><line x1="150" y1="70" x2="150" y2="130" />
    <line x1="60" y1="145" x2="80" y2="130" /><line x1="120" y1="130" x2="140" y2="145" />
    <circle cx="50" cy="50" r="4" fill="currentColor" />
    <circle cx="150" cy="50" r="4" fill="currentColor" />
    <circle cx="100" cy="130" r="4" fill="currentColor" />
  </svg>
);

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  useSEO({
    title: "Medical Device & Technology Solutions",
    description: "RMT Medical Technologies provides end-to-end medical device development, regulatory compliance, software & AI solutions, quality testing, and contract manufacturing globally.",
    keywords: "medical device development, regulatory compliance FDA CE, ISO 13485, contract manufacturing, pharmaceutical development",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-background text-foreground">

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Decorative icon background */}
        <div className="absolute top-10 right-10 w-80 h-80 pointer-events-none">
          <DnaBg />
        </div>
        <div className="absolute bottom-10 left-0 w-64 h-64 pointer-events-none">
          <CircuitBg />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/20 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* LEFT TEXT */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-bold uppercase tracking-widest">ISO 13485 Certified Company</span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-6">
              End-to-End<br />
              <span className="text-primary">Medical Device</span><br />
              Solutions
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-8">
              From concept to commercialization — RMT Medical Technologies provides expert product design, regulatory compliance, software & AI, quality testing, and contract manufacturing for medical technology companies worldwide.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-lg h-12 px-7 font-semibold">
                <Link href="/services">
                  Explore Services <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>

              {/* Watch Overview — plain button, opens iframe */}
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2.5 h-12 px-7 rounded-lg border border-border bg-background text-foreground font-semibold text-sm hover:bg-muted transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                </div>
                Watch Overview
              </button>
            </div>

            <div className="mt-10 pt-8 border-t border-border flex flex-wrap gap-6">
              {["FDA/CE Compliant", "ISO 13485:2016", "50+ Experts"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — IMAGE CAROUSEL */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl bg-muted">
              <AnimatePresence mode="wait">
                <motion.img
                  key={heroIndex}
                  src={heroImages[heroIndex].src}
                  alt={heroImages[heroIndex].alt}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </AnimatePresence>
              {/* Carousel dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === heroIndex ? "bg-white w-5" : "bg-white/50"}`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 bg-background border border-border rounded-xl p-4 shadow-lg z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Latest Achievement</p>
                  <p className="text-sm font-bold text-foreground">200+ Devices Approved</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-primary text-white rounded-xl p-4 shadow-lg z-10">
              <p className="text-3xl font-bold font-heading">15+</p>
              <p className="text-xs text-white/80 font-medium">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VIDEO MODAL — portal-style, no Dialog wrapper issues */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/LDu3kqfqyPw?autoplay=1"
                title="RMT Medical Technologies Company Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-3 right-3 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors text-lg leading-none"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== STATS BAR ===== */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-2 opacity-80">{stat.icon}</div>
                <div className="font-heading text-4xl font-bold">{stat.value}</div>
                <div className="text-white/70 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CAPABILITIES SECTION (like image 3) ===== */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Large stethoscope icon as background decoration */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px] pointer-events-none">
          <StethoscopeBg />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-5">
                <span className="text-muted-foreground text-xs font-semibold uppercase tracking-widest">Our Capabilities</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Empowering Innovation,<br />
                Delivering <span className="text-primary">Excellence</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our multidisciplinary team brings together a wealth of knowledge across various domains, ensuring every project benefits from a holistic approach. From concept development to market-ready products, we deliver high-quality results that exceed expectations.
              </p>
              <Button asChild size="lg" className="rounded-lg">
                <Link href="/services">Learn More <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="space-y-3">
                {[
                  "Active Medical Devices",
                  "Non-Active Medical Devices",
                  "Biomaterials & Drug Synthesis",
                  "AI Driven Medical Devices",
                  "Software as a Medical Device (SaMD)",
                ].map((cap, i) => (
                  <motion.div
                    key={cap}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href="/services"
                      className="group flex items-center justify-between px-5 py-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200 cursor-pointer"
                    >
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{cap}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="absolute right-0 top-10 w-72 h-72 pointer-events-none">
          <DnaBg />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions covering every stage of medical device development, from initial design through regulatory approval and commercialization.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredServices.map((svc, i) => (
              <ServiceCard key={svc.slug} slug={svc.slug} title={svc.title} description={svc.description} icon={svc.icon} subServices={svc.subServices} delay={i * 0.08} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="rounded-lg">
              <Link href="/services">View All 8 Services <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== WHY RMT ===== */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-80 h-80 pointer-events-none">
          <CircuitBg />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Why RMT</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Your Trusted Partner in Medical Innovation</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We combine deep regulatory expertise with cutting-edge engineering capabilities to help medical device companies bring safe, effective products to market faster and more efficiently.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyChoose.map((item, i) => (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-xl p-5">
                    <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center mb-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-square shadow-xl">
                  <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80" alt="RMT USA team of medical device engineers" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-background border border-border rounded-xl p-5 shadow-lg">
                  <p className="font-heading text-3xl font-bold text-primary">98%</p>
                  <p className="text-xs text-muted-foreground mt-1">Regulatory Approval Rate</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-64 h-64 pointer-events-none">
          <StethoscopeBg />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">How We Work</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">A structured, proven methodology that reduces risk and accelerates time-to-market.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors">
                <div className="font-heading text-5xl font-bold text-primary/15 mb-4">{step.step}</div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                {i < process.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GLOBAL PRESENCE + WORLD MAP ===== */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Global Presence</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Operating Across 4 Continents</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              With offices in the USA, Europe, South Asia, and the Middle East, RMT Medical Technologies provides local expertise in every major medical device market.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <WorldMap />
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {officeLocations.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/40 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <p className="font-bold text-foreground text-sm">{office.city}</p>
                <p className="text-xs text-muted-foreground mt-1">{office.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <DnaBg />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Ready to Bring Your Medical Device to Market?</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Partner with RMT Medical Technologies for end-to-end expertise. Our team is ready to discuss your project requirements and build a tailored solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-lg h-12 px-8 font-bold">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-lg h-12 px-8 font-bold">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
