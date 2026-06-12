import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight, Play, CheckCircle, Globe, Users, Award, Clock,
  Shield, Brain, FlaskConical, CircuitBoard, Settings2, Factory, Layers,
  MapPin, Phone, Mail, ClipboardList, PenTool, FileCheck, PackageCheck,
} from "lucide-react";
import { RequestQuoteModal } from "@/components/RequestQuoteModal";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/ServiceCard";
import { WorldMap } from "@/components/WorldMap";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { PartnerLogoCarousel } from "@/components/PartnerLogoCarousel";
import { HomeSection, SectionHeading } from "@/components/HomeSection";
import { InnovationCard } from "@/components/InnovationCard";
import { HOME_IMAGES } from "@/data/home-images";

const featuredServices = [
  { title: "Regulatory Compliance", description: "Navigate global pathways, risk management, and quality standards — Risk Management (ISO 14971), Biocompatibility, QMS, and Clinical Evaluations.", icon: <Shield className="w-6 h-6" />, slug: "regulatory-compliance", subServices: ["Risk Management", "Biocompatibility", "QMS (ISO 13485)", "Technical Files & Clinicals", "Global Registrations"] },
  { title: "Software & AI Solutions", description: "Intelligent software powering next-generation medical devices — AI, cloud, SaMD, and full development lifecycle.", icon: <Brain className="w-6 h-6" />, slug: "software-ai", subServices: ["AI & Machine Learning", "DevOps/Cloud Computing", "Software as Medical Device", "UI/UX Development"] },
  { title: "Turnkey Regulatory Commissioning and Regulatory Approvals", description: "Turnkey regulatory commissioning and regulatory approvals from concept through design, V&V, and manufacturing transfer.", icon: <Layers className="w-6 h-6" />, slug: "product-development", subServices: ["Concept & Feasibility", "Design & Engineering", "Prototyping", "Regulatory Consultancy"] },
  { title: "Quality Department Services", description: "QA, production QC, SaMD software quality, and R&D design control — testing and compliance from bench to release.", icon: <FlaskConical className="w-6 h-6" />, slug: "quality-testing", subServices: ["Quality Assurance (QA)", "QC — Production", "Software Quality Assurance", "QC — R&D"] },
  { title: "Automation Services", description: "PLC, HMI/SCADA, motion control, and industrial communication for manufacturing and biomedical automation.", icon: <Settings2 className="w-6 h-6" />, slug: "automation-services", subServices: ["PLC Programming", "HMI & SCADA", "Motion Control", "Industrial Communication"] },
  { title: "Design & Fabrication", description: "Mechanical design, thermal engineering, ANSYS/COMSOL simulation, and FDM/SLA rapid prototyping.", icon: <CircuitBoard className="w-6 h-6" />, slug: "design-fabrication", subServices: ["Mechanical Design", "Thermal Engineering", "Simulation & Analysis", "3D Printing"] },
  { title: "Medical Device Manufacturing", description: "ISO cleanroom manufacturing from Class I–III devices — quality systems, development journey, testing, and scale-up.", icon: <Factory className="w-6 h-6" />, slug: "contract-manufacturing", subServices: ["Quality & Compliance", "Manufacturing Capabilities", "Cleanroom Infrastructure", "Development Journey"] },
];

const stats = [
  { value: "15+", label: "Years of Experience", icon: <Clock className="w-5 h-5" /> },
  { value: "200+", label: "Projects Delivered", icon: <Award className="w-5 h-5" /> },
  { value: "50+", label: "Expert Professionals", icon: <Users className="w-5 h-5" /> },
  { value: "30+", label: "Countries Served", icon: <Globe className="w-5 h-5" /> },
];

const innovationPillars = [
  {
    title: "AI-Driven Diagnostics",
    description: "Machine learning models and SaMD platforms that accelerate clinical decision-making and regulatory clearance.",
    image: HOME_IMAGES.innovation[0],
    href: "/services/software-ai",
    tag: "Software & AI",
  },
  {
    title: "Biomaterials & Drug Synthesis",
    description: "Advanced biomaterial characterization, synthesis, and validation for next-generation implantable and drug-device combinations.",
    image: HOME_IMAGES.innovation[1],
    href: "/services/bmd",
    tag: "Biomaterials",
  },
  {
    title: "Cleanroom Manufacturing",
    description: "ISO 13485 certified cleanroom production from prototype to commercial scale for Class I–III medical devices.",
    image: HOME_IMAGES.innovation[2],
    href: "/services/contract-manufacturing",
    tag: "Manufacturing",
  },
];

const whyChoose = [
  { title: "ISO 13485:2025 Certified", description: "Our quality management system meets the highest international standards for medical device manufacturing.", icon: <Shield className="w-5 h-5" /> },
  { title: "FDA & CE Expertise", description: "Deep regulatory knowledge ensuring your product navigates approval pathways efficiently and successfully.", icon: <Award className="w-5 h-5" /> },
  { title: "End-to-End Partnership", description: "From initial concept through design, testing, approval, and manufacturing — we are with you every step.", icon: <Users className="w-5 h-5" /> },
  { title: "Global Reach", description: "Operating across the USA, Europe, Middle East, and South Asia with local regulatory expertise.", icon: <Globe className="w-5 h-5" /> },
];

const whyStats = [
  { value: "98%", label: "Regulatory Approval Rate" },
  { value: "2.4x", label: "Faster Time to Market" },
  { value: "200+", label: "Projects Delivered" },
  { value: "30+", label: "Countries Served" },
];

const process = [
  { step: "01", title: "Consult", description: "We assess your product concept, market requirements, and regulatory pathway to build a tailored strategy.", icon: <ClipboardList className="w-5 h-5" /> },
  { step: "02", title: "Design", description: "Our engineers create and iterate on your product design, developing prototypes for testing and validation.", icon: <PenTool className="w-5 h-5" /> },
  { step: "03", title: "Validate", description: "Rigorous quality testing and regulatory documentation ensure your product meets all required standards.", icon: <FileCheck className="w-5 h-5" /> },
  { step: "04", title: "Deliver", description: "We manage regulatory submissions and scale manufacturing for a successful market launch.", icon: <PackageCheck className="w-5 h-5" /> },
];

const certifications = [
  "ISO 13485:2025",
  "ISO 14971",
  "IEC 62304",
  "CE Mark / MDR",
  "FDA 510(k)",
  "GMP Compliance",
];

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
  },
  {
    city: "Pakistan",
    label: "PAK",
    description: "South Asia Office",
    address: "Building 2A, W1 Street, Rawat Industrial Estate, Islamabad, 46220",
    phone: "+1 (707) 5618 771",
    email: "info@rmt-usa.com",
  },
];

const StethoscopeBg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="4">
    <circle cx="70" cy="50" r="28" /><circle cx="130" cy="50" r="28" />
    <path d="M 42 50 Q 42 120 100 145 Q 158 120 158 50" />
    <circle cx="100" cy="155" r="15" /><line x1="100" y1="170" x2="100" y2="195" /><circle cx="100" cy="197" r="5" />
  </svg>
);

const ColumnWatermark = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`absolute inset-y-0 left-0 w-[130%] max-w-[520px] pointer-events-none select-none flex items-center ${className}`} aria-hidden="true">
    <div className="w-full aspect-square opacity-[0.11] sm:opacity-[0.13] lg:opacity-[0.15] text-primary -translate-x-[6%]" style={{ maskImage: "linear-gradient(to right, black 55%, transparent 92%)" }}>
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
    path: "/",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HOME_IMAGES.heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-background text-foreground">

      {/* ===== HERO — zoom carousel ===== */}
      <section className="relative min-h-[72vh] sm:min-h-[78vh] lg:min-h-[85vh] flex items-center overflow-hidden pt-16 sm:pt-[4.5rem] bg-[#060d17]">
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.div
              key={heroIndex}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.14 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 5, ease: "linear" },
              }}
            >
              <img
                src={HOME_IMAGES.heroSlides[heroIndex].src}
                alt={HOME_IMAGES.heroSlides[heroIndex].alt}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-[#060d17]/94 via-[#060d17]/78 to-[#060d17]/42" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060d17]/88 via-[#060d17]/20 to-[#060d17]/55" />
        </div>

        <div className="page-container relative z-10 py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl sm:max-w-2xl"
          >
            <p className="text-sky-300 text-xs font-bold uppercase tracking-[0.18em] mb-4">End-to-End Services</p>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.06] tracking-tight text-white mb-5 sm:mb-6">
              Invention.<br />
              Validation.<br />
              <span className="text-sky-300">Impact.</span>
            </h1>

            <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-4">
              Global healthtech partner empowering innovation, accelerating product development, and scaling expert teams.
            </p>
            <p className="text-white/70 text-sm sm:text-base md:text-lg mb-8">
              AI is seamlessly woven into every innovation.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button asChild size="lg" className="rounded-full h-11 sm:h-12 px-7 sm:px-8 font-semibold">
                <Link href="/contact">Get Started <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2.5 h-11 sm:h-12 px-6 sm:px-7 rounded-full border border-white/30 bg-white/10 text-white font-semibold text-sm hover:bg-white/15 transition-colors duration-200"
              >
                <Play className="w-4 h-4 fill-current" />
                Watch Overview
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap gap-5 sm:gap-7">
              {["CE Mark Compliant", "ISO 13485:2025", "50+ Experts"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-white/75">
                  <CheckCircle className="w-4 h-4 text-sky-300 shrink-0" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-6 md:right-10 flex gap-2 z-10">
            {HOME_IMAGES.heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show hero image ${i + 1}`}
                onClick={() => setHeroIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === heroIndex ? "bg-sky-300 w-8" : "bg-white/40 w-2 hover:bg-white/70"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4" onClick={() => setVideoOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/LDu3kqfqyPw?autoplay=1" title="RMT Medical Technologies Company Overview" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              <button onClick={() => setVideoOpen(false)} className="absolute top-3 right-3 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors text-lg leading-none">&times;</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== STATS BAR — colored section ===== */}
      <HomeSection variant="primary" bgImage={HOME_IMAGES.stats} overlayIntensity="clear" className="py-14" innerClassName="!px-0">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className={`text-center text-white px-4 sm:px-8 py-3 ${i < stats.length - 1 ? "border-r border-white/15" : ""}`}>
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
                <span className="[&>svg]:w-7 [&>svg]:h-7">{stat.icon}</span>
              </div>
              <div className="font-heading text-4xl sm:text-5xl font-black tabular-nums leading-none mb-2">{stat.value}</div>
              <div className="text-white/80 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </HomeSection>

      <PartnerLogoCarousel />

      {/* ===== CAPABILITIES — white section + bg image ===== */}
      <HomeSection variant="image-light" bgImage={HOME_IMAGES.capabilities} bgPosition="right center" overlayIntensity="clear" dots rings ringSide="right">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <AnimatedSection className="relative min-h-[220px] sm:min-h-[260px]">
            <ColumnWatermark><StethoscopeBg /></ColumnWatermark>
            <div className="relative z-10 rounded-2xl border border-white/90 bg-white/95 backdrop-blur-md px-6 py-6 sm:px-8 sm:py-7 shadow-lg max-w-xl">
              <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-5 bg-white">
                <span className="text-muted-foreground text-xs font-semibold uppercase tracking-widest">Our Capabilities</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Empowering Innovation,<br />
                Delivering <span className="text-primary">Excellence</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-slate-700 text-lg leading-relaxed mb-8 rounded-2xl border border-white/90 bg-white/95 backdrop-blur-md px-6 py-5 shadow-lg">
              Our multidisciplinary team brings together a wealth of knowledge across various domains, ensuring every project benefits from a holistic approach. From concept development to market-ready products, we deliver high-quality results that exceed expectations.
            </p>
            <div className="divide-y divide-border border border-border mb-8 bg-white/98 rounded-xl overflow-hidden shadow-md">
              {["Active Medical Devices", "Non-Active Medical Devices", "Biomaterials & Drug Synthesis", "AI Driven Medical Devices", "Software as a Medical Device (SaMD)"].map((cap, i) => (
                <motion.div key={cap} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
                  <Link href="/services" className="group flex items-center justify-between px-5 py-4 text-foreground font-semibold hover:text-primary hover:bg-primary/5 transition-colors">
                    {cap}
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/services">Learn More <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </HomeSection>

      {/* ===== INNOVATION SHOWCASE — colored section ===== */}
      <HomeSection variant="gradient-blue" bgImage={HOME_IMAGES.innovation[0]} overlayIntensity="clear" dots rings ringSide="both" className="py-24">
        <AnimatedSection className="mb-14">
          <SectionHeading
            eyebrow="Innovation Focus"
            title={<>Pioneering the Future of <span className="text-cyan-400">MedTech</span></>}
            description="Three pillars of expertise driving breakthrough medical technologies from lab bench to global market."
            light
            panel
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {innovationPillars.map((pillar, i) => (
            <InnovationCard key={pillar.title} {...pillar} delay={i * 0.12} />
          ))}
        </div>
      </HomeSection>

      {/* ===== SERVICES — white section ===== */}
      <HomeSection variant="image-light" bgImage={HOME_IMAGES.services} bgPosition="center" overlayIntensity="clear" dots rings ringSide="left">
        <AnimatedSection className="text-center mb-14">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Core Services"
            description="Comprehensive solutions covering every stage of medical device development, from initial design through regulatory approval and commercialization."
            panel
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredServices.map((svc, i) => (
            <ServiceCard key={svc.slug} slug={svc.slug} title={svc.title} description={svc.description} icon={svc.icon} subServices={svc.subServices} delay={i * 0.08} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/services">View All 8 Services <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </HomeSection>

      {/* ===== WHY RMT — colored section ===== */}
      <HomeSection variant="navy" bgImage={HOME_IMAGES.whyRmt} overlayIntensity="clear" className="!py-0" innerClassName="!px-0 !max-w-none">
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-5 min-h-0">
          {/* Left — content panel */}
          <div className="lg:col-span-3 relative text-white py-14 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-14 xl:px-16 flex flex-col justify-center">
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} aria-hidden />

            <AnimatedSection className="relative z-10">
              <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4">Why RMT</p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Your Trusted Partner in{" "}
                <span className="text-cyan-400">Medical Innovation</span>
              </h2>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
                We combine deep regulatory expertise with cutting-edge engineering capabilities to help medical device companies bring safe, effective products to market faster.
              </p>

              <div className="space-y-4 mb-10">
                {whyChoose.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="group flex gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-4 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-white/90">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base mb-1">{item.title}</h4>
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {whyStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.06 }}
                    className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-4 text-center"
                  >
                    <p className="font-heading text-xl sm:text-2xl font-bold text-white leading-none mb-1">{stat.value}</p>
                    <p className="text-[10px] sm:text-xs text-white/55 leading-snug">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right — contained image (smaller) */}
          <div className="lg:col-span-2 relative flex items-center justify-center p-6 sm:p-8 lg:p-10">
            <div className="relative w-full max-w-[420px] mx-auto">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3.5] border border-white/15 shadow-xl">
                <img
                  src={HOME_IMAGES.whyRmt}
                  alt="Advanced medical innovation and diagnostics environment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/80 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-4 rounded-xl border border-white/15 bg-white/[0.08] p-4 sm:p-5"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/75">Live Partnership</span>
                </div>
                <p className="text-white font-heading text-base sm:text-lg font-bold leading-snug mb-1.5">
                  Trusted by global med-tech teams
                </p>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  From startups to enterprise manufacturers — regulatory confidence at every stage.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      </HomeSection>

      {/* ===== PROCESS — white section ===== */}
      <HomeSection variant="image-light" bgImage={HOME_IMAGES.process} bgPosition="center" overlayIntensity="clear" dots rings ringSide="both" className="py-24">
        <AnimatedSection className="text-center mb-16">
          <SectionHeading
            eyebrow="Our Process"
            title={<>How We <span className="text-primary">Work</span></>}
            description="A structured, proven methodology that reduces risk and accelerates time-to-market."
            panel
          />
        </AnimatedSection>

        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-primary/20" aria-hidden />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center lg:items-start text-center lg:text-left h-full"
              >
                <div className="relative z-10 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 shrink-0">
                  {step.icon}
                </div>
                <div className="relative flex flex-col flex-1 w-full min-h-[220px] rounded-2xl border border-border bg-white p-6 shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">Step {step.step}</p>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </HomeSection>

      {/* ===== CERTIFICATIONS — colored section ===== */}
      <HomeSection variant="navy" bgImage={HOME_IMAGES.certifications} overlayIntensity="clear" className="py-16">
        <AnimatedSection className="text-center mb-10">
          <SectionHeading
            eyebrow="Quality & Compliance"
            title={<>Certified to the Highest <span className="text-cyan-400">Global Standards</span></>}
            description="Our certifications and regulatory expertise ensure your products meet every requirement for safe, effective market entry."
            light
            panel
          />
        </AnimatedSection>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white/90 hover:border-sky-300/40 hover:bg-white/15 transition-colors duration-200"
            >
              <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
              {cert}
            </motion.div>
          ))}
        </div>
      </HomeSection>

      {/* ===== GLOBAL PRESENCE — white section with earth bg ===== */}
      <HomeSection variant="image-light" bgImage={HOME_IMAGES.global} bgPosition="center" overlayIntensity="clear" dots rings ringSide="right" className="py-20 sm:py-24">
        <AnimatedSection className="text-center mb-10 sm:mb-12">
          <SectionHeading
            eyebrow="Global Presence"
            title="Operating Across 2 Continents"
            description="With offices in the United States and South Asia, RMT Medical Technologies delivers local regulatory and engineering expertise across key global medical device markets."
            align="center"
            panel
          />
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="rounded-2xl border border-border bg-white p-4 sm:p-5 shadow-sm">
              <WorldMap />
            </div>
            <div className="space-y-4 flex flex-col justify-center">
              {globalOffices.map((office, i) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-xl border border-border bg-white p-5 shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-heading text-lg font-bold text-foreground">{office.city}</h3>
                        <span className="text-xs font-bold px-2 py-0.5 bg-primary/10 text-primary rounded-full">{office.label}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{office.description}</p>
                      <p className="text-sm text-foreground/80 mb-3">{office.address}</p>
                      <div className="flex flex-col gap-1.5 text-sm">
                        <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                          <Phone className="w-3.5 h-3.5 shrink-0" />{office.phone}
                        </a>
                        <a href={`mailto:${office.email}`} className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                          <Mail className="w-3.5 h-3.5 shrink-0" />{office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </HomeSection>

      {/* ===== CTA — colored section ===== */}
      <HomeSection variant="gradient-blue" bgImage={HOME_IMAGES.cta} bgPosition="center 40%" overlayIntensity="clear" className="py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-sky-300/10 blur-3xl" />
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <AnimatedSection animation="slideRight" className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sky-200 text-xs font-bold uppercase tracking-widest">Let&apos;s Build Together</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Ready to Bring Your{" "}
              <span className="text-cyan-300">Medical Device</span> to Market?
            </h2>

            <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Partner with RMT Medical Technologies for end-to-end expertise — from regulatory strategy and engineering to validation and commercial-scale manufacturing.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full h-12 px-8 font-bold shadow-xl shadow-black/20">
                <Link href="/contact">
                  Start a Conversation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                onClick={() => setQuoteOpen(true)}
                className="border-white/50 text-white bg-white/5 hover:bg-white/15 rounded-full h-12 px-8 font-bold backdrop-blur-sm"
              >
                Request a Quote
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5 sm:gap-7 pt-6 border-t border-white/15">
              {["CE Mark Compliant", "ISO 13485:2025", "200+ Projects"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-white/80">
                  <CheckCircle className="w-4 h-4 text-cyan-300 shrink-0" />
                  {badge}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideLeft" delay={0.12} className="space-y-4">
            {ctaHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group flex gap-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-5 sm:p-6 hover:border-cyan-300/40 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-cyan-200 group-hover:bg-cyan-400/20 group-hover:text-cyan-100 transition-colors">
                  {item.icon}
                </div>
                <div className="min-w-0 text-left">
                  <h3 className="font-heading text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-white/15 bg-[#071426]/40 backdrop-blur-md p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <div className="text-left">
                <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Talk to our team</p>
                <p className="text-white font-semibold">info@rmt-usa.com</p>
              </div>
              <Button asChild variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 rounded-full shrink-0">
                <Link href="/services">View All Services <ArrowRight className="ml-1.5 w-3.5 h-3.5" /></Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </HomeSection>

      <RequestQuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
