import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight, Play, CheckCircle, Globe, Users, Award, Clock,
  Cpu, Shield, Brain, FlaskConical, CircuitBoard, Settings2, Pill, Factory, FileText,
  MapPin, Phone, Mail,
} from "lucide-react";
import { RequestQuoteModal } from "@/components/RequestQuoteModal";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/ServiceCard";
import { WorldMap } from "@/components/WorldMap";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";

/* ---- hero background carousel (cinematic zoom) ---- */
const heroImages = [
  { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=85", alt: "Medical professional using digital health technology" },
  { src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=85", alt: "AI-powered healthcare innovation" },
  { src: "https://images.unsplash.com/photo-1559757175-08a4f7e5bbf9?w=1920&q=85", alt: "Advanced medical imaging and diagnostics" },
  { src: "https://images.unsplash.com/photo-1639762681485-74b7f0150504?w=1920&q=85", alt: "Futuristic medical technology interface" },
  { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85", alt: "Medical device engineering and electronics" },
];

const featuredServices = [
  { title: "Regulatory Compliance", description: "Expert guidance through FDA, CE, and global regulatory pathways ??technical files, clinical evaluations, ISO certifications.", icon: <Shield className="w-6 h-6" />, slug: "regulatory-compliance", subServices: ["Technical File for FDA/CE", "Clinical Evaluation Report", "ISO 13485 Certification", "ISO 14971 Risk Management"] },
  { title: "Software & AI Solutions", description: "Intelligent software powering next-generation medical devices ??AI, cloud, SaMD, and full development lifecycle.", icon: <Brain className="w-6 h-6" />, slug: "software-ai", subServices: ["AI & Machine Learning", "DevOps/Cloud Computing", "Software as Medical Device", "UI/UX Development"] },
  { title: "Quality Testing", description: "Rigorous bench-to-market testing ensuring safety, performance, and compliance with international standards.", icon: <FlaskConical className="w-6 h-6" />, slug: "quality-testing", subServices: ["Bench Testing", "Physico-Chemical Testing", "Dimensional Analysis", "Simulation"] },
  { title: "Automation Services", description: "PLC, HMI/SCADA, motion control, and industrial communication for manufacturing and biomedical automation.", icon: <Settings2 className="w-6 h-6" />, slug: "automation-services", subServices: ["PLC Programming", "HMI & SCADA", "Motion Control", "Industrial Communication"] },
  { title: "Design & Fabrication", description: "Mechanical design, thermal engineering, ANSYS/COMSOL simulation, and FDM/SLA rapid prototyping.", icon: <CircuitBoard className="w-6 h-6" />, slug: "design-fabrication", subServices: ["Mechanical Design", "Thermal Engineering", "Simulation & Analysis", "3D Printing"] },
  { title: "Medical Device Manufacturing", description: "ISO cleanroom manufacturing from Class I?III devices ??quality systems, development journey, testing, and scale-up.", icon: <Factory className="w-6 h-6" />, slug: "contract-manufacturing", subServices: ["Quality & Compliance", "Manufacturing Capabilities", "Cleanroom Infrastructure", "Development Journey"] },
];

const stats = [
  { value: "15+", label: "Years of Experience", icon: <Clock className="w-5 h-5" /> },
  { value: "200+", label: "Projects Delivered", icon: <Award className="w-5 h-5" /> },
  { value: "50+", label: "Expert Professionals", icon: <Users className="w-5 h-5" /> },
  { value: "30+", label: "Countries Served", icon: <Globe className="w-5 h-5" /> },
];

const whyChoose = [
  { title: "ISO 13485:2025 Certified", description: "Our quality management system meets the highest international standards for medical device manufacturing." },
  { title: "FDA & CE Expertise", description: "Deep regulatory knowledge ensuring your product navigates approval pathways efficiently and successfully." },
  { title: "End-to-End Partnership", description: "From initial concept through design, testing, approval, and manufacturing ??we are with you every step." },
  { title: "Global Reach", description: "Operating across the USA, Europe, Middle East, and South Asia with local regulatory expertise." },
];

const process = [
  { step: "01", title: "Consult", description: "We assess your product concept, market requirements, and regulatory pathway to build a tailored strategy." },
  { step: "02", title: "Design", description: "Our engineers create and iterate on your product design, developing prototypes for testing and validation." },
  { step: "03", title: "Validate", description: "Rigorous quality testing and regulatory documentation ensure your product meets all required standards." },
  { step: "04", title: "Deliver", description: "We manage regulatory submissions and scale manufacturing for a successful market launch." },
];

const globalOffices = [
  {
    city: "United States",
    label: "HQ",
    description: "North America Operations",
    address: "Revive Medical Technologies Inc., United States of America",
    phone: "+1 (800) 555-0199",
    email: "usa@rmt-usa.com",
  },
  {
    city: "Pakistan",
    label: "PAK",
    description: "South Asia Office",
    address: "Karachi, Pakistan",
    phone: "+92 21 555 0199",
    email: "pakistan@rmt-usa.com",
  },
  {
    city: "UAE",
    label: "ME",
    description: "Middle East & Africa",
    address: "Dubai, UAE",
    phone: "+971 4 555 0199",
    email: "me@rmt-usa.com",
  },
];

/* ---- decorative SVG icons (medical background) ---- */
const StethoscopeBg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="4">
    <circle cx="70" cy="50" r="28" />
    <circle cx="130" cy="50" r="28" />
    <path d="M 42 50 Q 42 120 100 145 Q 158 120 158 50" />
    <circle cx="100" cy="155" r="15" />
    <line x1="100" y1="170" x2="100" y2="195" />
    <circle cx="100" cy="197" r="5" />
  </svg>
);

const DnaBg = () => (
  <svg viewBox="0 0 100 200" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M 20 10 Q 50 30 80 50 Q 50 70 20 90 Q 50 110 80 130 Q 50 150 20 170 Q 50 190 80 210" />
    <path d="M 80 10 Q 50 30 20 50 Q 50 70 80 90 Q 50 110 20 130 Q 50 150 80 170 Q 50 190 20 210" />
    <line x1="20" y1="50" x2="80" y2="50" /><line x1="20" y1="70" x2="80" y2="70" />
    <line x1="20" y1="90" x2="80" y2="90" /><line x1="20" y1="110" x2="80" y2="110" />
    <line x1="20" y1="130" x2="80" y2="130" /><line x1="20" y1="150" x2="80" y2="150" />
  </svg>
);

const CircuitBg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="2">
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

/** Large watermark icon anchored to a content column — matches reference UI */
const ColumnWatermark = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`absolute inset-y-0 left-0 w-[130%] max-w-[520px] pointer-events-none select-none flex items-center ${className}`}
    aria-hidden="true"
  >
    <div
      className="w-full aspect-square opacity-[0.11] sm:opacity-[0.13] lg:opacity-[0.15] text-primary -translate-x-[6%]"
      style={{ maskImage: "linear-gradient(to right, black 55%, transparent 92%)" }}
    >
      {children}
    </div>
  </div>
);

/** Section-edge watermark for centered layouts */
const SectionWatermark = ({
  children,
  side = "right",
}: {
  children: React.ReactNode;
  side?: "left" | "right";
}) => (
  <div
    className={`absolute top-1/2 -translate-y-1/2 pointer-events-none select-none w-[min(50vw,440px)] h-[min(50vw,440px)] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px] ${
      side === "right" ? "right-0 translate-x-[18%]" : "left-0 -translate-x-[18%]"
    }`}
    aria-hidden="true"
  >
    <div
      className="w-full h-full opacity-[0.11] sm:opacity-[0.13] lg:opacity-[0.15] text-primary"
      style={{
        maskImage:
          side === "right"
            ? "linear-gradient(to left, black 50%, transparent 88%)"
            : "linear-gradient(to right, black 50%, transparent 88%)",
      }}
    >
      {children}
    </div>
  </div>
);

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  useSEO({
    title: "Revive Medical Technologies Inc",
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
      <section className="relative min-h-[68vh] sm:min-h-[72vh] md:min-h-[75vh] lg:min-h-[78vh] flex items-center overflow-hidden pt-16 sm:pt-[4.5rem] bg-[#060d17]">
        {/* Full-bleed background with zoom-in (Ken Burns) */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.div
              key={heroIndex}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.12 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1.1, ease: "easeInOut" },
                scale: { duration: 4, ease: "linear" },
              }}
            >
              <img
                src={heroImages[heroIndex].src}
                alt={heroImages[heroIndex].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-[#060d17] via-[#060d17]/88 to-[#060d17]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060d17]/80 via-transparent to-[#060d17]/40" />
        </div>

        {/* Orbital ring decorators */}
        <div className="absolute top-1/2 right-0 w-[900px] h-[900px] rounded-full border border-white/[0.05] translate-x-1/3 -translate-y-1/2 pointer-events-none" aria-hidden />
        <div className="absolute top-1/2 right-0 w-[620px] h-[620px] rounded-full border border-white/[0.07] translate-x-1/4 -translate-y-1/2 pointer-events-none hidden lg:block" aria-hidden />
        <div className="absolute bottom-0 left-1/3 w-[380px] h-[380px] rounded-full border border-white/[0.04] translate-y-1/2 pointer-events-none hidden lg:block" aria-hidden />

        <div className="page-container relative z-10 py-10 sm:py-12 md:py-14 lg:py-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl sm:max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4"
            >
              End-to-End Services
            </motion.p>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-white mb-4 sm:mb-5">
              Invention.<br />
              Validation.<br />
              <span className="text-primary">Impact.</span>
            </h1>

            <p className="text-white/75 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-3 sm:mb-4">
              Global healthtech partner empowering innovation, accelerating product development, and scaling expert teams.
            </p>

            <p className="text-cyan-400 text-sm sm:text-base md:text-lg font-medium mb-6 sm:mb-7">
              AI is seamlessly woven into every innovation.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button asChild size="lg" className="rounded-full h-10 sm:h-11 md:h-12 px-6 sm:px-8 text-sm sm:text-base font-semibold bg-cyan-500 hover:bg-cyan-400 text-[#060d17]">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>

              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2 sm:gap-2.5 h-10 sm:h-11 md:h-12 px-5 sm:px-7 rounded-full border border-white/25 bg-white/10 text-white font-semibold text-xs sm:text-sm hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                </div>
                Watch Overview
              </button>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/15 flex flex-wrap gap-4 sm:gap-6">
              {["CE Mark Compliant", "ISO 13485:2025", "50+ Experts"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-10 flex gap-2 z-10">
            {heroImages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show hero image ${i + 1}`}
                onClick={() => setHeroIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === heroIndex ? "bg-cyan-400 w-8" : "bg-white/40 w-2 hover:bg-white/70"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO MODAL ??portal-style, no Dialog wrapper issues */}
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
      <section className="relative bg-primary py-14 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/8 -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/6 translate-y-1/2 -translate-x-1/2 pointer-events-none" aria-hidden />
        <div className="page-container relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`text-center text-white px-4 sm:px-8 py-3 ${i < stats.length - 1 ? "border-r border-white/15" : ""}`}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center shadow-inner">
                  <span className="[&>svg]:w-7 [&>svg]:h-7">{stat.icon}</span>
                </div>
                <div className="font-heading text-4xl sm:text-5xl font-black tabular-nums leading-none mb-2">{stat.value}</div>
                <div className="text-white/75 text-sm font-medium mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CAPABILITIES SECTION ===== */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Grid dot pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--primary) / 0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden />
        {/* Orbital rings */}
        <div className="absolute top-1/2 right-0 w-[680px] h-[680px] rounded-full border border-primary/[0.07] translate-x-[45%] -translate-y-1/2 pointer-events-none" aria-hidden />
        <div className="absolute top-1/2 right-0 w-[460px] h-[460px] rounded-full border border-primary/[0.05] translate-x-[30%] -translate-y-1/2 pointer-events-none hidden lg:block" aria-hidden />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full border border-primary/[0.05] -translate-x-1/3 translate-y-1/3 pointer-events-none hidden lg:block" aria-hidden />
        <div className="page-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — heading + large watermark (reference layout) */}
            <AnimatedSection className="relative min-h-[220px] sm:min-h-[260px]">
              <ColumnWatermark>
                <StethoscopeBg />
              </ColumnWatermark>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-5">
                  <span className="text-muted-foreground text-xs font-semibold uppercase tracking-widest">Our Capabilities</span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Empowering Innovation,<br />
                  Delivering <span className="text-primary">Excellence</span>
                </h2>
              </div>
            </AnimatedSection>

            {/* Right — description, list, CTA */}
            <AnimatedSection delay={0.15}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our multidisciplinary team brings together a wealth of knowledge across various domains, ensuring every project benefits from a holistic approach. From concept development to market-ready products, we deliver high-quality results that exceed expectations.
              </p>
              <div className="divide-y divide-border border-y border-border mb-8">
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
                      className="group flex items-center justify-between py-4 text-foreground font-semibold hover:text-primary transition-colors"
                    >
                      {cap}
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <Button asChild size="lg" className="rounded-lg">
                <Link href="/services">Learn More <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        {/* Grid dot pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--primary) / 0.06) 1px, transparent 1px)", backgroundSize: "32px 32px" }} aria-hidden />
        {/* Orbital rings */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full border border-primary/[0.07] -translate-x-1/3 -translate-y-1/3 pointer-events-none hidden lg:block" aria-hidden />
        <div className="absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full border border-primary/[0.05] translate-x-1/4 translate-y-1/4 pointer-events-none hidden lg:block" aria-hidden />
        <SectionWatermark side="right">
          <DnaBg />
        </SectionWatermark>
        <div className="page-container relative z-10">
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
        {/* Grid dot pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--primary) / 0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden />
        {/* Orbital rings */}
        <div className="absolute top-0 left-0 w-[720px] h-[720px] rounded-full border border-primary/[0.07] -translate-x-[40%] -translate-y-[40%] pointer-events-none hidden lg:block" aria-hidden />
        <div className="absolute top-0 left-0 w-[480px] h-[480px] rounded-full border border-primary/[0.05] -translate-x-[25%] -translate-y-[25%] pointer-events-none hidden lg:block" aria-hidden />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full border border-primary/[0.05] translate-x-1/4 translate-y-1/4 pointer-events-none hidden lg:block" aria-hidden />
        <div className="page-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
            <AnimatedSection className="relative min-h-[200px]">
              <ColumnWatermark>
                <CircuitBg />
              </ColumnWatermark>
              <div className="relative z-10">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Why RMT</p>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Your Trusted Partner in Medical Innovation</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  We combine deep regulatory expertise with cutting-edge engineering capabilities to help medical device companies bring safe, effective products to market faster and more efficiently.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {whyChoose.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group relative overflow-hidden bg-card/95 border border-border rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-cyan-500/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3 border border-primary/15">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="relative z-10 font-semibold text-foreground text-sm mb-1.5">{item.title}</h4>
                      <p className="relative z-10 text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="relative w-full max-w-[380px] sm:max-w-[430px] md:max-w-[500px] mx-auto lg:ml-auto lg:mr-0">
                <div className="absolute -top-5 -left-5 h-24 w-24 rounded-2xl bg-gradient-to-br from-primary/30 to-cyan-500/30 blur-2xl pointer-events-none" aria-hidden />
                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-primary/20 blur-3xl pointer-events-none" aria-hidden />
                <div className="group relative rounded-3xl overflow-hidden aspect-[4/4.6] shadow-2xl border border-white/10">
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=90" alt="Advanced medical innovation and diagnostics environment" className="w-full h-full object-cover object-center scale-[1.03] group-hover:scale-[1.08] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/70 via-[#071426]/20 to-transparent" />
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-bold tracking-wider text-slate-700 uppercase">Trusted by global med-tech teams</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-background/95 border border-border rounded-2xl p-4 sm:p-5 shadow-xl backdrop-blur">
                  <p className="font-heading text-2xl sm:text-3xl font-bold text-primary">98%</p>
                  <p className="text-xs text-muted-foreground mt-1">Regulatory Approval Rate</p>
                </div>

                <div className="absolute -bottom-4 left-4 bg-slate-900 text-white border border-white/15 rounded-2xl px-4 py-3 shadow-xl">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/70 mb-1">Speed to Market</p>
                  <p className="font-heading text-xl leading-none">2.4x Faster</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        {/* Grid dot pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--primary) / 0.06) 1px, transparent 1px)", backgroundSize: "30px 30px" }} aria-hidden />
        {/* Orbital rings */}
        <div className="absolute top-1/2 right-0 w-[560px] h-[560px] rounded-full border border-primary/[0.07] translate-x-[40%] -translate-y-1/2 pointer-events-none hidden lg:block" aria-hidden />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full border border-primary/[0.05] -translate-x-1/4 translate-y-1/4 pointer-events-none hidden lg:block" aria-hidden />
        <SectionWatermark side="left">
          <StethoscopeBg />
        </SectionWatermark>
        <div className="page-container relative z-10">
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
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Grid dot pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--primary) / 0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden />
        {/* Orbital rings */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border border-primary/[0.07] translate-x-[35%] -translate-y-[35%] pointer-events-none hidden lg:block" aria-hidden />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full border border-primary/[0.05] translate-x-[20%] -translate-y-[20%] pointer-events-none hidden lg:block" aria-hidden />
        <div className="absolute bottom-0 left-0 w-[340px] h-[340px] rounded-full border border-primary/[0.05] -translate-x-1/4 translate-y-1/4 pointer-events-none hidden lg:block" aria-hidden />
        <div className="page-container relative z-10">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Global Presence</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Operating Across 4 Continents</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              With offices in the USA, Europe, South Asia, and the Middle East, RMT Medical Technologies provides local expertise in every major medical device market.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <WorldMap />

              <div className="space-y-4">
                {globalOffices.map((office, i) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-heading text-lg font-bold text-foreground">{office.city}</h3>
                          <span className="text-xs font-bold px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                            {office.label}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{office.description}</p>
                        <p className="text-sm text-foreground/80 mb-2">{office.address}</p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm">
                          <a
                            href={`tel:${office.phone.replace(/\s/g, "")}`}
                            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Phone className="w-3.5 h-3.5 shrink-0" />
                            {office.phone}
                          </a>
                          <a
                            href={`mailto:${office.email}`}
                            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5 shrink-0" />
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(70vw,520px)] h-[min(70vw,520px)] pointer-events-none select-none opacity-[0.10] text-white"
          aria-hidden="true"
        >
          <DnaBg />
        </div>
        <div className="page-container text-center relative z-10">
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

      <RequestQuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
