import React, { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Play, Cpu, Shield, Brain, FlaskConical, CircuitBoard, Settings2, Pill, Factory, CheckCircle, Globe, Users, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/ServiceCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";

const featuredServices = [
  {
    title: "Product Design & Prototyping",
    description: "End-to-end product design from concept to functional prototype — 3D modelling, PCB design, and advanced manufacturing.",
    icon: <Cpu className="w-6 h-6" />,
    slug: "product-design",
    subServices: ["3D Design & Modelling", "PCB Design", "Additive Manufacturing", "Subtractive Manufacturing"],
  },
  {
    title: "Regulatory Compliance",
    description: "Expert guidance through FDA, CE, and global regulatory pathways — technical files, clinical evaluations, ISO certifications.",
    icon: <Shield className="w-6 h-6" />,
    slug: "regulatory-compliance",
    subServices: ["Technical File for FDA/CE", "Clinical Evaluation Report", "ISO 13485 Certification", "ISO 14971 Risk Management"],
  },
  {
    title: "Software & AI Solutions",
    description: "Intelligent software powering next-generation medical devices — AI, cloud, SaMD, and full development lifecycle.",
    icon: <Brain className="w-6 h-6" />,
    slug: "software-ai",
    subServices: ["AI & Machine Learning", "DevOps/Cloud Computing", "Software as Medical Device", "UI/UX Development"],
  },
  {
    title: "Quality Testing",
    description: "Rigorous bench-to-market testing ensuring safety, performance, and compliance with international standards.",
    icon: <FlaskConical className="w-6 h-6" />,
    slug: "quality-testing",
    subServices: ["Bench Testing", "Physico-Chemical Testing", "Dimensional Analysis", "Simulation"],
  },
  {
    title: "Electronics & Firmware",
    description: "Precision electronics and firmware for life-critical applications — design, verification, and full validation.",
    icon: <CircuitBoard className="w-6 h-6" />,
    slug: "electronics-firmware",
    subServices: ["Firmware Development", "Electronics Design", "Design Verification & Validation"],
  },
  {
    title: "Contract Manufacturing",
    description: "GMP-compliant manufacturing of active and non-active medical devices, injectables, wearables, and biomaterials.",
    icon: <Factory className="w-6 h-6" />,
    slug: "contract-manufacturing",
    subServices: ["Active Medical Devices", "Injectables", "Wearables", "Biosensors"],
  },
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
  { title: "Global Reach", description: "Operating across the USA, Europe, Middle East, and Asia with local regulatory expertise in each market." },
];

const process = [
  { step: "01", title: "Consult", description: "We assess your product concept, market requirements, and regulatory pathway to build a tailored strategy." },
  { step: "02", title: "Design", description: "Our engineers create and iterate on your product design, developing prototypes for testing and validation." },
  { step: "03", title: "Validate", description: "Rigorous quality testing and regulatory documentation ensure your product meets all required standards." },
  { step: "04", title: "Deliver", description: "We manage regulatory submissions and scale manufacturing for a successful market launch." },
];

const industries = [
  "Medical Devices", "Pharmaceuticals", "Biotechnology", "Wearable Health", "Diagnostics", "Drug Delivery"
];

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);

  useSEO({
    title: "Medical Device & Technology Solutions",
    description: "RMT USA delivers end-to-end medical device development, regulatory compliance, software & AI solutions, quality testing, and contract manufacturing services globally.",
    keywords: "medical device development, regulatory compliance FDA CE, ISO 13485, contract manufacturing, pharmaceutical development, software AI solutions, electronics firmware, quality testing",
  });

  return (
    <div className="bg-background text-foreground">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, hsl(220,25%,12%) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center py-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">ISO 13485 Certified Company</span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-6">
              End-to-End<br />
              <span className="text-primary">Medical Device</span><br />
              Solutions
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-8">
              From concept to commercialization — RMT USA provides expert product design, regulatory compliance, software & AI, quality testing, and contract manufacturing for medical technology companies worldwide.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-lg h-12 px-7 font-semibold" data-testid="button-explore-services">
                <Link href="/services">
                  Explore Services <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>

              <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="rounded-lg h-12 px-7 font-semibold gap-2.5" data-testid="button-watch-overview">
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                    </div>
                    Watch Overview
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 border-0 bg-black rounded-xl overflow-hidden">
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/LDu3kqfqyPw?autoplay=1"
                      title="RMT USA Company Overview"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </DialogContent>
              </Dialog>
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                alt="Medical device development laboratory"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Latest Achievement</p>
                  <p className="text-sm font-semibold text-foreground">200+ Devices Approved</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-primary text-white rounded-xl p-4 shadow-lg">
              <p className="text-3xl font-bold font-heading">15+</p>
              <p className="text-xs text-white/80 font-medium">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
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

      {/* SERVICES GRID */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions covering every stage of medical device development, from initial design through regulatory approval and commercialization.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredServices.map((svc, i) => (
              <ServiceCard
                key={svc.slug}
                slug={svc.slug}
                title={svc.title}
                description={svc.description}
                icon={svc.icon}
                subServices={svc.subServices}
                delay={i * 0.08}
              />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="rounded-lg">
              <Link href="/services" data-testid="button-all-services">
                View All 8 Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE RMT */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Why RMT USA</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Your Trusted Partner in Medical Innovation
              </h2>
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
                    className="bg-card border border-border rounded-lg p-5"
                  >
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
                  <img
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80"
                    alt="RMT USA team of medical device engineers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-background border border-border rounded-xl p-5 shadow-lg max-w-[200px]">
                  <p className="font-heading text-3xl font-bold text-primary">98%</p>
                  <p className="text-xs text-muted-foreground mt-1">Regulatory Approval Rate</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">How We Work</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">A structured, proven methodology that reduces risk and accelerates time-to-market.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-card border border-border rounded-xl p-6"
              >
                <div className="font-heading text-5xl font-bold text-primary/15 mb-4">{step.step}</div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Industries We Serve</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Expertise Spans Across</h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, i) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="px-6 py-3 bg-card border border-border rounded-full text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Bring Your Medical Device to Market?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Partner with RMT USA for end-to-end expertise. Our team is ready to discuss your project requirements and build a tailored solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-lg h-12 px-8 font-bold" data-testid="button-cta-contact">
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
