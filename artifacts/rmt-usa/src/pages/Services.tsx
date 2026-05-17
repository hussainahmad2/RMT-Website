import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  Cpu, Shield, Brain, FlaskConical, CircuitBoard,
  Settings2, Pill, Factory, CheckCircle, ArrowRight, ArrowLeft, ChevronRight,
  Search, ClipboardList, Wrench, TestTube2, Rocket
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { ALL_SERVICES, type ServiceData, type SubServiceData } from "@/data/services";

/* ---- Map slug → icon ---- */
const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "product-design": <Cpu className="w-6 h-6" />,
  "regulatory-compliance": <Shield className="w-6 h-6" />,
  "software-ai": <Brain className="w-6 h-6" />,
  "quality-testing": <FlaskConical className="w-6 h-6" />,
  "electronics-firmware": <CircuitBoard className="w-6 h-6" />,
  "turnkey-commissioning": <Settings2 className="w-6 h-6" />,
  "pharmaceutical": <Pill className="w-6 h-6" />,
  "contract-manufacturing": <Factory className="w-6 h-6" />,
};

/* ---- Large decorative background icons per service ---- */
const ServiceBgIcon = ({ slug }: { slug: string }) => {
  const icon = SERVICE_ICONS[slug];
  if (!icon) return null;
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none" style={{ width: 280, height: 280 }}>
      <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="2" className="w-full h-full">
        <circle cx="50" cy="50" r="45" />
        <circle cx="50" cy="50" r="35" />
        <line x1="50" y1="5" x2="50" y2="25" />
        <line x1="50" y1="75" x2="50" y2="95" />
        <line x1="5" y1="50" x2="25" y2="50" />
        <line x1="75" y1="50" x2="95" y2="50" />
      </svg>
    </div>
  );
};

/* ---- Stethoscope outline SVG ---- */
const StethoBg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="4">
    <circle cx="70" cy="50" r="28" />
    <circle cx="130" cy="50" r="28" />
    <path d="M 42 50 Q 42 120 100 145 Q 158 120 158 50" />
    <circle cx="100" cy="155" r="15" />
    <line x1="100" y1="170" x2="100" y2="190" />
    <circle cx="100" cy="193" r="5" />
  </svg>
);

/* ======================================================
   SERVICES OVERVIEW
====================================================== */
export function ServicesOverview() {
  useSEO({
    title: "Our Services",
    description: "RMT Medical Technologies provides comprehensive medical device services — product design, regulatory compliance, software & AI, quality testing, electronics, pharmaceutical development, and contract manufacturing.",
    keywords: "medical device services, regulatory compliance, product design prototyping, contract manufacturing",
  });

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* HERO */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/92 via-black/80 to-primary/50" />
        <div className="absolute inset-0 opacity-[0.05] text-white pointer-events-none" style={{ position: "absolute", right: "-10%", top: "-10%", width: "60%", height: "120%" }}>
          <StethoBg />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
        <ServiceBgIcon slug="regulatory-compliance" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10 py-24">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-bold uppercase tracking-widest">What We Offer</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-5">Our <span className="text-primary">Services</span></h1>
            <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
              A comprehensive suite of medical device and technology services — covering every stage from design through regulatory approval, manufacturing, and commercialization.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-white/10">
              {["8 Core Services", "End-to-End Solutions", "Global Regulatory Expertise"].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-white/65">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {b}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-16 bg-secondary/20 border-y border-border overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Proven Process</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">From first consultation to regulatory approval and beyond — a structured, milestone-driven approach that de-risks your project at every stage.</p>
          </AnimatedSection>

          {/* Horizontal connected timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" style={{ top: "2.5rem" }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative">
              {[
                { step: "01", title: "Discovery", Icon: Search, desc: "Deep-dive into your project goals, regulatory pathway, market requirements, and technical constraints.", color: "from-blue-500/10 to-primary/10" },
                { step: "02", title: "Strategy", Icon: ClipboardList, desc: "We define a detailed project plan — scope, timeline, regulatory strategy, and risk mitigation roadmap.", color: "from-primary/10 to-indigo-500/10" },
                { step: "03", title: "Design & Build", Icon: Wrench, desc: "Engineering, software, and regulatory teams work in parallel to deliver your device design and documentation.", color: "from-indigo-500/10 to-violet-500/10" },
                { step: "04", title: "Validate", Icon: TestTube2, desc: "Rigorous V&V testing, risk management closure, and quality system review ahead of regulatory submission.", color: "from-violet-500/10 to-primary/10" },
                { step: "05", title: "Approve & Scale", Icon: Rocket, desc: "Regulatory submission, approval management, and manufacturing scale-up for successful market launch.", color: "from-primary/10 to-blue-500/10" },
              ].map((phase, i) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Number circle */}
                  <div className="relative mb-4">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${phase.color} border-2 border-primary/25 flex flex-col items-center justify-center shadow-lg group-hover:border-primary group-hover:shadow-primary/20 transition-all duration-300`}>
                      <phase.Icon className="w-7 h-7 text-primary mb-0.5" />
                      <span className="text-[10px] font-bold text-primary/70">{phase.step}</span>
                    </div>
                    {/* Connector dot for desktop line */}
                    <div className="hidden lg:block absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{phase.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed max-w-[180px]">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Regulatory pathways strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              { label: "FDA 510(k)", sub: "USA Clearance", color: "border-blue-500/30 bg-blue-500/5 text-blue-400" },
              { label: "EU MDR CE", sub: "European Approval", color: "border-indigo-500/30 bg-indigo-500/5 text-indigo-400" },
              { label: "ISO 13485:2025", sub: "QMS Certification", color: "border-primary/30 bg-primary/5 text-primary" },
              { label: "PMA / De Novo", sub: "Class III Devices", color: "border-violet-500/30 bg-violet-500/5 text-violet-400" },
            ].map((p) => (
              <div key={p.label} className={`flex flex-col items-center text-center px-4 py-4 rounded-xl border ${p.color} transition-all hover:scale-[1.02]`}>
                <p className="font-bold text-sm">{p.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{p.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">All Services</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ALL_SERVICES.map((svc, i) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.07 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/services/${svc.slug}`} className="block p-7">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {SERVICE_ICONS[svc.slug]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">{svc.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{svc.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {svc.subServices.slice(0, 3).map((sub) => (
                          <span key={sub.slug} className="text-xs px-2.5 py-1 bg-primary/8 text-primary rounded-full font-medium border border-primary/15">
                            {sub.name}
                          </span>
                        ))}
                        {svc.subServices.length > 3 && (
                          <span className="text-xs px-2.5 py-1 border border-border text-muted-foreground rounded-full">
                            +{svc.subServices.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary font-semibold text-sm mt-5 group-hover:gap-2.5 transition-all">
                    Explore Service <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Not sure which service you need?</h2>
            <p className="text-white/80 text-lg mb-8">Our experts will assess your project and recommend the right combination of services.</p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-lg font-bold">
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

/* ======================================================
   SERVICE HERO CAROUSEL
====================================================== */
const SERVICE_CAROUSEL_IMAGES: Record<string, string[]> = {
  "product-design": [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  ],
  "regulatory-compliance": [
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  ],
  "software-ai": [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&q=80",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
  ],
  "quality-testing": [
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?w=800&q=80",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
  ],
  "electronics-firmware": [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=800&q=80",
  ],
  "contract-manufacturing": [
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
  ],
  "pharmaceutical": [
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
  ],
  "turnkey-commissioning": [
    "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  ],
};

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
];

function ServiceHeroCarousel({ service }: { service: ServiceData }) {
  const images = SERVICE_CAROUSEL_IMAGES[service.slug] ?? FALLBACK_IMAGES;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl bg-[#060d17]">
      <AnimatePresence>
        <motion.img
          key={idx}
          src={images[idx]}
          alt={service.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="w-full h-full object-cover absolute inset-0"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`rounded-full transition-all duration-300 ${i === idx ? "bg-white w-5 h-2" : "bg-white/50 w-2 h-2"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ======================================================
   SERVICE DETAIL
====================================================== */
export function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = ALL_SERVICES.find((s) => s.slug === params.slug);

  useSEO({
    title: service ? service.name : "Service Not Found",
    description: service ? service.description : "Service not found.",
    keywords: service?.keywords,
  });

  if (!service) {
    return (
      <div className="pt-40 text-center min-h-screen bg-background">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
        <Button asChild><Link href="/services">View All Services</Link></Button>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* UNIQUE HERO per service */}
      <section className="relative py-20 bg-[#060d17] overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <ServiceBgIcon slug={service.slug} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{service.name}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/30">
                  {SERVICE_ICONS[service.slug]}
                </div>
                <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">{service.name}</h1>
                <p className="text-white/70 text-xl leading-relaxed mb-8">{service.tagline}</p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="rounded-lg">
                    <Link href="/contact">Get a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-lg border-white/20 text-white hover:bg-white/10">
                    <Link href="/services"><ArrowLeft className="mr-2 w-4 h-4" /> All Services</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <ServiceHeroCarousel service={service} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">

              <AnimatedSection>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">Overview</h2>
                <div className="space-y-4">
                  {service.overview.map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
                  ))}
                </div>
              </AnimatedSection>

              {/* SUB-SERVICES — each is a clickable card linking to its own page */}
              <AnimatedSection>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">Services Included</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.subServices.map((sub, i) => (
                    <motion.div
                      key={sub.slug}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link
                        href={`/services/${service.slug}/${sub.slug}`}
                        className="group flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/50 hover:shadow-md transition-all duration-200"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-all">
                          <CheckCircle className="w-4 h-4 text-primary group-hover:text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors leading-snug">{sub.name}</p>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{sub.tagline}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* CAPABILITIES */}
              <AnimatedSection>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">Core Capabilities</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">{cap}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* WHY RMT */}
              <AnimatedSection>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">Why Choose RMT</h2>
                <div className="grid sm:grid-cols-3 gap-5">
                  {service.whyRMT.map((item) => (
                    <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                      <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center mb-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

            </div>

            {/* SIDEBAR */}
            <div>
              <div className="sticky top-24 space-y-5">
                <AnimatedSection className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="font-heading text-xl font-bold mb-3">Get a Quote</h3>
                  <p className="text-white/80 text-sm mb-5 leading-relaxed">Discuss your requirements with our specialists and receive a tailored proposal.</p>
                  <Button asChild className="w-full bg-white text-primary hover:bg-white/90 rounded-lg font-bold">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </AnimatedSection>

                <AnimatedSection className="bg-card border border-border rounded-2xl p-6">
                  <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-widest">Other Services</h4>
                  <div className="flex flex-col gap-1">
                    {ALL_SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1.5 border-b border-border last:border-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                        {s.shortName}
                      </Link>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ======================================================
   SUB-SERVICE DETAIL
====================================================== */
export function SubServiceDetail({ params }: { params: { slug: string; subSlug: string } }) {
  const service = ALL_SERVICES.find((s) => s.slug === params.slug);
  const subService = service?.subServices.find((ss) => ss.slug === params.subSlug);

  useSEO({
    title: subService ? `${subService.name} — ${service?.shortName}` : "Not Found",
    description: subService?.tagline ?? "Sub-service not found.",
    keywords: `${subService?.name}, ${service?.name}, medical device`,
  });

  if (!service || !subService) {
    return (
      <div className="pt-40 text-center min-h-screen bg-background">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Page Not Found</h1>
        <Button asChild><Link href="/services">View All Services</Link></Button>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* UNIQUE HERO */}
      <section className="relative py-20 bg-[#060d17] overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-primary/5 translate-y-1/3 -translate-x-1/4 pointer-events-none" />
        <ServiceBgIcon slug={service.slug} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/services/${service.slug}`} className="hover:text-white transition-colors">{service.shortName}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{subService.name}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <div className="w-4 h-4 text-primary">{SERVICE_ICONS[service.slug]}</div>
              <span className="text-primary text-xs font-bold uppercase tracking-widest">{service.shortName}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{subService.name}</h1>
            <p className="text-white/70 text-xl leading-relaxed mb-8">{subService.tagline}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-lg">
                <Link href="/contact">Get a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="rounded-lg border-white/20 text-white hover:bg-white/10">
                <Link href={`/services/${service.slug}`}><ArrowLeft className="mr-2 w-4 h-4" /> {service.shortName}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">

            <div className="lg:col-span-2 space-y-10">

              {/* Hero image for sub-service */}
              <AnimatedSection>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-video mb-8">
                  <img
                    src={service.heroImage}
                    alt={subService.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">Overview</h2>
                {subService.overview.map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
                ))}
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">Key Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {subService.keyPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">Deliverables</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {subService.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-3 px-4 py-3 bg-primary/5 border border-primary/15 rounded-lg">
                      <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm font-medium text-foreground">{d}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* OTHER SUB-SERVICES in this service */}
              <AnimatedSection>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                  Other {service.shortName} Services
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.subServices
                    .filter((ss) => ss.slug !== subService.slug)
                    .map((ss) => (
                      <Link
                        key={ss.slug}
                        href={`/services/${service.slug}/${ss.slug}`}
                        className="group flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition-all"
                      >
                        <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                          <CheckCircle className="w-3.5 h-3.5 text-primary group-hover:text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{ss.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{ss.tagline}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </AnimatedSection>
            </div>

            {/* SIDEBAR */}
            <div>
              <div className="sticky top-24 space-y-5">
                <AnimatedSection className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="font-heading text-xl font-bold mb-3">Get a Quote</h3>
                  <p className="text-white/80 text-sm mb-5 leading-relaxed">Speak with our {service.shortName} specialists today.</p>
                  <Button asChild className="w-full bg-white text-primary hover:bg-white/90 rounded-lg font-bold">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </AnimatedSection>

                <AnimatedSection className="bg-card border border-border rounded-2xl p-6">
                  <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-widest">Parent Service</h4>
                  <Link href={`/services/${service.slug}`} className="flex items-center gap-3 p-3 bg-muted rounded-xl hover:bg-primary/10 transition-colors group">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      {SERVICE_ICONS[service.slug]}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{service.shortName}</p>
                      <p className="text-xs text-muted-foreground">{service.subServices.length} services</p>
                    </div>
                  </Link>
                </AnimatedSection>

                <AnimatedSection className="bg-card border border-border rounded-2xl p-6">
                  <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-widest">All Services</h4>
                  {ALL_SERVICES.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-2 text-sm py-1.5 border-b border-border last:border-0 text-muted-foreground hover:text-primary transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                      {s.shortName}
                    </Link>
                  ))}
                </AnimatedSection>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
