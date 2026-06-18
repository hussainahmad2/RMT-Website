import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight, Play, CheckCircle, Globe, Users, Award, Clock,
  Shield, Brain, FlaskConical, CircuitBoard, Settings2, Factory, Layers,
  MapPin, Phone, Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HomeProductShowcase } from "@/components/HomeProductShowcase";
import { PartnerLogoCarousel } from "@/components/PartnerLogoCarousel";
import { RequestQuoteModal } from "@/components/RequestQuoteModal";
import { ServiceCard } from "@/components/ServiceCard";
import { WorldMap } from "@/components/WorldMap";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { HOME_IMAGES } from "@/data/home-images";
import { HOME_PRODUCT_HERO_SLIDES } from "@/data/home-products";

const featuredServices = [
  { title: "Regulatory Compliance", description: "Navigate global pathways, risk management, and quality standards — Risk Management (ISO 14971), Biocompatibility, QMS, and Clinical Evaluations.", icon: <Shield className="w-6 h-6" />, slug: "regulatory-compliance", subServices: ["Risk Management", "Biocompatibility", "QMS (ISO 13485)", "Technical Files & Clinicals", "Global Registrations"] },
  { title: "Software & AI Solutions", description: "Intelligent software powering next-generation medical devices — AI, cloud, SaMD, and full development lifecycle.", icon: <Brain className="w-6 h-6" />, slug: "software-ai", subServices: ["AI & Machine Learning", "DevOps/Cloud Computing", "Software as Medical Device", "UI/UX Development"] },
  { title: "Turnkey Regulatory Commissioning and Regulatory Approvals", description: "Turnkey regulatory commissioning and regulatory approvals from concept through design, V&V, and manufacturing transfer.", icon: <Layers className="w-6 h-6" />, slug: "product-development", subServices: ["Concept & Feasibility", "Design & Engineering", "Prototyping", "Regulatory Consultancy"] },
  { title: "Quality Department Services", description: "QA, unified Quality Control, and SaMD software quality — testing and compliance from bench to release.", icon: <FlaskConical className="w-6 h-6" />, slug: "quality-testing", subServices: ["Quality Assurance (QA)", "Quality Control", "Software Quality Assurance"] },
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

const certifications = [
  "ISO 13485:2025",
  "ISO 14971",
  "IEC 62304",
  "CE Mark / MDR",
  "FDA 510(k)",
  "GMP Compliance",
];

const heroCertifications = [
  "ISO 13485:2025",
  "CE Mark",
  "ISO 14971",
  "IEC 62304",
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

const serviceTones = ["blue", "green", "red"] as const;

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
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
      <section className="relative min-h-[calc(100svh-1rem)] overflow-hidden bg-[#050b14] pt-20 text-white">
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
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,20,0.96)_0%,rgba(5,11,20,0.82)_42%,rgba(5,11,20,0.38)_100%),linear-gradient(180deg,rgba(5,11,20,0.1)_0%,rgba(5,11,20,0.88)_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
          aria-hidden
        />

        <div className="page-container relative z-10 flex min-h-[calc(100svh-5rem)] flex-col justify-between py-10 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-8 pt-8 sm:pt-12 lg:grid-cols-[minmax(0,4fr)_minmax(280px,2fr)] lg:items-start"
          >
            <div className="max-w-4xl">
              <h1 className="font-heading text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                Devices &amp; Machines<br />
                Built for <span className="text-blue-300">Clinical Impact</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
                From interventional catheters and biomaterial microspheres to custom production equipment and ISO-classified cleanrooms — RMT engineers technologies that are as unique as the procedures they enable.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/68 sm:text-base md:text-lg">
                Every product on this page connects to deep end-to-end services — development, validation, regulatory, and manufacturing.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <a href="#featured-products">Explore Our Technologies <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
                <button
                  type="button"
                  aria-label="Watch Overview"
                  onClick={() => setVideoOpen(true)}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-white/25 bg-white/8 text-white backdrop-blur-sm transition-colors hover:bg-white/12"
                >
                  <Play className="h-4 w-4 fill-current" />
                </button>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-white/12 bg-white/8 backdrop-blur-md sm:grid-cols-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.08, duration: 0.55 }}
                    className={`p-4 sm:p-5 ${i < stats.length - 1 ? "sm:border-r border-white/12" : ""} ${i < 2 ? "border-b sm:border-b-0 border-white/12" : ""}`}
                  >
                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-blue-200">
                      {stat.icon}
                    </div>
                    <p className="font-heading text-3xl font-bold leading-none text-white sm:text-4xl">{stat.value}</p>
                    <p className="mt-2 text-xs font-medium leading-snug text-white/65">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-5 lg:justify-self-end lg:pt-8">
              {heroCertifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-3 text-lg font-bold text-white/86 sm:text-xl lg:text-2xl"
                >
                  <CheckCircle className="h-7 w-7 shrink-0 stroke-[3] text-white/86 sm:h-8 sm:w-8 lg:h-9 lg:w-9" />
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="mt-10 space-y-4 sm:space-y-5">
            <PartnerLogoCarousel variant="hero" />
          </div>
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

      <section id="featured-products" className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
        <div className="page-container">
          <AnimatedSection className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">What We Build</p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
              Flagship Devices &amp; <span className="text-primary">Production Machines</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Six technologies engineered for specific clinical and manufacturing outcomes — each alternating left and right, each opening the full service behind it.
            </p>
          </AnimatedSection>
          <HomeProductShowcase />
        </div>
      </section>

      <section className="border-y border-border bg-secondary/25 py-16 sm:py-20">
        <div className="page-container">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <AnimatedSection className="lg:sticky lg:top-28">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">What We Do</p>
              <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Services Behind Every Product
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Regulatory strategy, engineering, quality, and manufacturing — unified under one roof so your device moves from concept to market without handoffs.
              </p>
              <Button asChild variant="outline" size="lg" className="mt-8">
                <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </AnimatedSection>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {featuredServices.map((svc, i) => (
                <ServiceCard
                  key={svc.slug}
                  slug={svc.slug}
                  title={svc.title}
                  description={svc.description}
                  icon={svc.icon}
                  subServices={svc.subServices}
                  delay={i * 0.06}
                  tone={serviceTones[i % serviceTones.length]}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050b14] py-16 text-white sm:py-20 lg:py-24">
        <img src={HOME_IMAGES.whyRmt} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,20,0.95),rgba(5,11,20,0.82),rgba(5,11,20,0.72))]" />
        <div className="page-container relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <AnimatedSection>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-200">Why RMT</p>
              <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Your Trusted Partner in <span className="text-blue-300">Medical Innovation</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                Deep regulatory expertise and cutting-edge engineering — helping medical device companies bring safe, effective products to market faster.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span key={cert} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-xs font-semibold text-white/82">
                    <CheckCircle className="h-3.5 w-3.5 shrink-0 text-blue-300" />
                    {cert}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <div className="grid gap-4 sm:grid-cols-2">
              {whyChoose.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-white/12 bg-white/8 p-5 backdrop-blur-sm transition-colors hover:bg-white/12"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-blue-200">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/62">{item.description}</p>
                </motion.div>
              ))}
              {whyStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.06 }}
                  className="rounded-2xl border border-white/12 bg-white/8 p-5 backdrop-blur-sm"
                >
                  <p className="font-heading text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/58">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="page-container">
          <AnimatedSection className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Global Presence</p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
              Operating Across 2 Continents
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              With offices in the United States and South Asia, RMT Medical Technologies delivers local regulatory and engineering expertise across key global medical device markets.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
              <div className="overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-sm">
                <WorldMap offices={globalOffices} />
              </div>
              <div className="grid gap-4">
                {globalOffices.map((office, i) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
                        <p className="mb-2 text-sm text-muted-foreground">{office.description}</p>
                        <p className="mb-3 text-sm text-foreground/80">{office.address}</p>
                        <div className="flex flex-col gap-1.5 text-sm">
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
          </AnimatedSection>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050b14] py-16 text-white sm:py-20 lg:py-24">
        <img src={HOME_IMAGES.cta} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,20,0.94),rgba(5,11,20,0.8),rgba(5,11,20,0.7))]" />
        <div className="page-container relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <AnimatedSection animation="slideRight">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-4 py-1.5 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Let&apos;s Build Together</span>
              </div>
              <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Ready to Bring Your <span className="text-blue-300">Medical Device</span> to Market?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/82 sm:text-lg">
                Partner with RMT Medical Technologies for end-to-end expertise — from regulatory strategy and engineering to validation and commercial-scale manufacturing.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
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
              </div>
              <div className="mt-8 flex flex-wrap gap-5 border-t border-white/15 pt-6 sm:gap-7">
                {["CE Mark Compliant", "ISO 13485:2025", "200+ Projects"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-sm text-white/78">
                    <CheckCircle className="h-4 w-4 shrink-0 text-blue-300" />
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
                  className="flex gap-4 rounded-2xl border border-white/16 bg-white/8 p-5 backdrop-blur-sm transition-colors hover:bg-white/12 sm:p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/18 bg-white/10 text-blue-200">
                    {item.icon}
                  </div>
                  <div className="min-w-0 text-left">
                    <h3 className="font-heading text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/68">{item.description}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-4 rounded-2xl border border-white/16 bg-white/8 p-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="text-left">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/55">Talk to our team</p>
                  <p className="font-semibold text-white">info@rmt-usa.com</p>
                </div>
                <Button asChild variant="outline" size="sm" className="shrink-0 border-white/30 text-white hover:bg-white/10">
                  <Link href="/services">View All Services <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <RequestQuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
