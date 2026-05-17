import React from "react";
import { Link } from "wouter";
import { CheckCircle, Globe, Users, Award, Target, Eye, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";

const milestones = [
  { year: "2008", title: "Company Founded", description: "RMT USA was established with a mission to simplify the medical device development process for innovators worldwide." },
  { year: "2011", title: "ISO 13485 Certification", description: "Achieved ISO 13485:2003 certification, formalizing our commitment to medical-grade quality management systems." },
  { year: "2014", title: "Regulatory Affairs Division", description: "Launched a dedicated regulatory affairs team with expertise in FDA, EU MDR, and international regulatory submissions." },
  { year: "2017", title: "Software & AI Division", description: "Expanded into medical software development and AI-driven diagnostic solutions, including SaMD compliance frameworks." },
  { year: "2020", title: "Global Expansion", description: "Opened offices in Europe and the Middle East, bringing our expertise to international medical device markets." },
  { year: "2023", title: "200+ Projects Milestone", description: "Celebrated the successful delivery of over 200 medical device projects across 30+ countries." },
];

const values = [
  { icon: <Target className="w-5 h-5" />, title: "Precision", description: "Every detail matters in medical device development. We apply meticulous attention to standards, specifications, and documentation." },
  { icon: <Users className="w-5 h-5" />, title: "Collaboration", description: "We work as an extension of your team — transparent, communicative, and aligned with your goals at every stage." },
  { icon: <Award className="w-5 h-5" />, title: "Excellence", description: "We hold ourselves to the highest standards, because the patients who rely on the devices we help create deserve nothing less." },
  { icon: <Heart className="w-5 h-5" />, title: "Patient Focus", description: "Behind every medical device project is a patient whose quality of life depends on what we build. That responsibility drives us." },
];

const certifications = [
  { name: "ISO 13485:2016", description: "Medical Device Quality Management Systems" },
  { name: "FDA Registered", description: "US Food & Drug Administration Facility" },
  { name: "CE Mark Specialist", description: "EU Medical Device Regulation (MDR) Expertise" },
  { name: "ISO 14971", description: "Medical Device Risk Management" },
  { name: "IEC 62304", description: "Medical Device Software Lifecycle" },
  { name: "ISN Registered", description: "Industry Safety Network Compliance" },
];

const leadership = [
  { name: "Dr. Robert M. Thompson", role: "Chief Executive Officer", bio: "20+ years in medical device industry with deep expertise in regulatory strategy and business development across FDA and EU markets." },
  { name: "Sarah Chen, MS", role: "Chief Technology Officer", bio: "Former senior engineer at leading medical device OEM, specializing in electronics and software architecture for Class II/III devices." },
  { name: "Dr. Maria Vasquez", role: "Head of Regulatory Affairs", bio: "PhD Biomedical Engineering, 15 years of global regulatory submissions including complex PMA and EU MDR technical files." },
  { name: "James O'Brien", role: "Head of Manufacturing", bio: "25 years in GMP manufacturing operations, leading ISO 13485 facilities and complex contract manufacturing programs globally." },
];

export default function About() {
  useSEO({
    title: "About Us",
    description: "RMT USA is a leading medical device and technology company providing comprehensive end-to-end solutions from product design through regulatory approval and contract manufacturing. Founded in 2008, serving 30+ countries.",
    keywords: "RMT USA about, medical device company, regulatory compliance experts, ISO 13485 certified, medical device development",
  });

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* HERO */}
      <section className="py-20 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About RMT USA</p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-5 leading-tight">
                Your Partner in Medical Innovation
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Since 2008, RMT USA has been the trusted development and regulatory partner for medical device companies seeking to bring safe, effective products to market — faster and with greater confidence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We combine regulatory expertise, engineering excellence, and manufacturing capability under one roof, enabling clients to navigate the complex medical device landscape with a single accountable partner.
              </p>
              <Button asChild className="rounded-lg" data-testid="button-about-services">
                <Link href="/services">Explore Our Services <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80"
                    alt="RMT USA medical device development team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {[{ val: "15+", label: "Years" }, { val: "200+", label: "Projects" }, { val: "30+", label: "Countries" }].map((stat) => (
                    <div key={stat.label} className="bg-card border border-border rounded-xl p-4 text-center">
                      <p className="font-heading text-2xl font-bold text-primary">{stat.val}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-card border border-border rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To accelerate the development and commercialization of medical devices by providing world-class expertise in design, regulatory affairs, software, quality, and manufacturing — empowering innovators to improve patient outcomes globally.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-card border border-border rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the global partner of choice for medical device companies, recognized for our regulatory expertise, engineering excellence, and unwavering commitment to patient safety and product quality.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="font-heading text-4xl font-bold text-foreground">Our Core Values</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  {val.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{val.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="font-heading text-4xl font-bold text-foreground">Company Milestones</h2>
          </AnimatedSection>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="flex-1">
                    <div className="bg-card border border-border rounded-xl p-6">
                      <span className="text-primary font-bold text-sm">{m.year}</span>
                      <h3 className="font-heading text-xl font-bold text-foreground mt-1 mb-2">{m.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-primary items-center justify-center shrink-0 z-10">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Quality & Standards</p>
            <h2 className="font-heading text-4xl font-bold text-foreground">Certifications & Compliance</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">Our certifications demonstrate our commitment to maintaining the highest international standards across all operations.</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/50 transition-colors"
              >
                <CheckCircle className="w-6 h-6 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground text-sm">{cert.name}</h4>
                <p className="text-muted-foreground text-xs mt-1">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Team</p>
            <h2 className="font-heading text-4xl font-bold text-foreground">Leadership Team</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">Experienced professionals with decades of combined expertise in medical device development, regulatory affairs, and manufacturing.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{leader.name}</h3>
                <p className="text-primary text-sm font-medium mt-1 mb-3">{leader.role}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center">
            <Globe className="w-12 h-12 text-white/70 mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Global Presence</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">Operating across the USA, Europe, Middle East, and Asia — with local regulatory expertise in each market we serve.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {["United States", "Germany", "United Kingdom", "UAE", "Saudi Arabia", "Canada"].map((country) => (
                <span key={country} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium">
                  {country}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
