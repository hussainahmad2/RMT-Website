import React from "react";
import { Link } from "wouter";
import { CheckCircle, Globe, Users, Award, Target, Eye, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import {
  C_LEVEL_LEADERSHIP,
  BUSINESS_MARKETING_UNIT,
  RD_WING_MICROBIOLOGY_LABORATORY,
  RD_WING_ELECTROMECHANICAL,
  RD_WING_BIOMATERIALS,
  SOFTWARE_DEPARTMENT,
  PRODUCT_DEVELOPMENT_WING,
  PRODUCTION_WING,
  REGULATORY_DEPARTMENT,
  QUALITY_CONTROL_WING,
  SUPPLY_CHAIN_WING,
  FINANCE_DEPARTMENT,
  HR_ADMIN_SUPPORT_WING,
} from "@/data/leadership";
import { LeadershipCard } from "@/components/LeadershipCard";
import { TeamWingSection, TeamMemberGrid } from "@/components/TeamDepartmentSection";

/* Decorative SVG backgrounds */
const StethoBg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="3.5">
    <circle cx="70" cy="50" r="28" /><circle cx="130" cy="50" r="28" />
    <path d="M 42 50 Q 42 120 100 145 Q 158 120 158 50" />
    <circle cx="100" cy="155" r="15" /><line x1="100" y1="170" x2="100" y2="190" />
    <circle cx="100" cy="193" r="5" />
  </svg>
);
const DnaBg = () => (
  <svg viewBox="0 0 100 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M 20 10 Q 50 30 80 50 Q 50 70 20 90 Q 50 110 80 130 Q 50 150 20 170 Q 50 190 80 210" />
    <path d="M 80 10 Q 50 30 20 50 Q 50 70 80 90 Q 50 110 20 130 Q 50 150 80 170 Q 50 190 20 210" />
    <line x1="20" y1="50" x2="80" y2="50" /><line x1="20" y1="70" x2="80" y2="70" />
    <line x1="20" y1="90" x2="80" y2="90" /><line x1="20" y1="110" x2="80" y2="110" />
    <line x1="20" y1="130" x2="80" y2="130" /><line x1="20" y1="150" x2="80" y2="150" />
  </svg>
);

const milestones = [
  { year: "2008", title: "Company Founded", description: "RMT Medical Technologies was established with a mission to simplify medical device development for innovators worldwide." },
  { year: "2011", title: "ISO 13485 Certification", description: "Achieved ISO 13485:2003 certification, formalizing our commitment to medical-grade quality management systems." },
  { year: "2014", title: "Regulatory Affairs Division", description: "Launched a dedicated regulatory affairs team with expertise in CE, and international regulatory submissions." },
  { year: "2017", title: "Software & AI Division", description: "Expanded into medical software development and AI-driven diagnostic solutions including SaMD compliance frameworks." },
  { year: "2020", title: "Global Expansion", description: "Opened offices in the Middle East and South Asia, bringing our expertise to international medical device markets." },
  { year: "2023", title: "200+ Projects Milestone", description: "Celebrated the successful delivery of over 200 medical device projects across 30+ countries." },
];

const values = [
  { icon: <Target className="w-5 h-5" />, title: "Precision", description: "Every detail matters in medical device development. We apply meticulous attention to standards, specifications, and documentation." },
  { icon: <Users className="w-5 h-5" />, title: "Collaboration", description: "We work as an extension of your team — transparent, communicative, and aligned with your goals at every stage." },
  { icon: <Award className="w-5 h-5" />, title: "Excellence", description: "We hold ourselves to the highest standards, because the patients who rely on the devices we help create deserve nothing less." },
  { icon: <Heart className="w-5 h-5" />, title: "Patient Focus", description: "Behind every medical device project is a patient whose quality of life depends on what we build. That responsibility drives us." },
];

const certifications = [
  { name: "ISO 13485:2025", description: "Medical Device Quality Management Systems" },
  { name: "CE Mark Specialist", description: "EU Medical Device Regulation (MDR) Expertise" },
  { name: "ISO 14971", description: "Medical Device Risk Management" },
  { name: "IEC 62304", description: "Medical Device Software Lifecycle" },
  { name: "ISO 62304", description: "Software Lifecycle Standards" },
  { name: "GMP Compliance", description: "Good Manufacturing Practice" },
];

const [ceo, ...executiveTeam] = C_LEVEL_LEADERSHIP;

export default function About() {
  useSEO({
    title: "About Us",
    description: "RMT Medical Technologies is a leading medical device and technology company providing comprehensive end-to-end solutions from product design through regulatory approval and contract manufacturing. Founded 2008, serving 30+ countries.",
    keywords: "RMT Medical Technologies about, medical device company, regulatory compliance experts, ISO 13485 certified",
    path: "/about",
  });

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* ===== DARK HERO ===== */}
      <section className="relative min-h-[480px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/80 to-primary/40" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        {/* Large decorative SVG overlay */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.06] text-white pointer-events-none">
          <StethoBg />
        </div>
        <div className="page-container relative z-10 py-24">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">Our Story</span>
                </div>
                <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
                  About RMT<br /><span className="text-primary">Medical Technologies</span>
                </h1>
                <p className="text-white/65 text-lg leading-relaxed mb-8">
                  Founded in 2008, RMT Medical Technologies Inc. has grown from a specialist regulatory consultancy into a full-service medical device and technology partner — operating across North America, South Asia, and the Middle East.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="rounded-lg h-11 px-6">
                    <Link href="/contact">Work With Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-lg h-11 px-6 border-white/20 text-white hover:bg-white/10">
                    <Link href="/projects">View Projects</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {[
                  { val: "15+", label: "Years Experience" },
                  { val: "200+", label: "Projects Delivered" },
                  { val: "50+", label: "Expert Team" },
                  { val: "30+", label: "Countries Served" },
                ].map((item) => (
                  <div key={item.val} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                    <p className="font-heading text-4xl font-bold text-primary">{item.val}</p>
                    <p className="text-white/60 text-sm mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== MISSION / VISION ===== */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-72 h-72 opacity-[0.04] text-primary pointer-events-none">
          <DnaBg />
        </div>
        <div className="page-container relative z-10">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Who We Are</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Our Mission & Vision</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Target, title: "Our Mission", text: "To accelerate medical device innovation by providing world-class engineering, regulatory, and manufacturing expertise — enabling our clients to bring safer, more effective products to patients faster." },
              { Icon: Eye, title: "Our Vision", text: "To be the most trusted global partner for end-to-end medical device development — the first call every medical technology company makes when they need expertise, speed, and certainty." },
              { Icon: Award, title: "Our Commitment", text: "To maintain the highest standards of quality, compliance, and technical excellence in everything we do — because the patients who will use the devices we develop deserve nothing less." },
            ].map(({ Icon, title, text }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-7">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MILESTONES ===== */}
      <section className="py-20 bg-background">
        <div className="page-container">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Company Milestones</h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <motion.div key={m.year} initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className={`relative flex items-start gap-8 md:w-1/2 ${i % 2 === 0 ? "md:ml-0 md:pr-12" : "md:ml-auto md:pl-12"}`}>
                  <div className="relative flex-shrink-0">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 md:absolute md:left-auto md:right-[-2.5rem]" />
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5 flex-1 ml-8 md:ml-0">
                    <span className="inline-block text-xs font-bold text-primary border border-primary/25 bg-primary/8 px-2.5 py-1 rounded-full mb-2">{m.year}</span>
                    <h3 className="font-semibold text-foreground mb-1">{m.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-80 h-80 opacity-[0.04] text-primary pointer-events-none">
          <StethoBg />
        </div>
        <div className="page-container relative z-10">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Our Core Values</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  {v.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section className="py-20 bg-background">
        <div className="page-container">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Leadership</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Meet Our Executive Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Experienced leaders across medical devices, finance, product, growth, and technology — united in bringing safe, innovative health solutions to market.
            </p>
          </AnimatedSection>

          <div className="mb-8">
            <LeadershipCard person={ceo} index={0} featured />
          </div>

          <TeamMemberGrid members={executiveTeam} indexOffset={1} />
        </div>
      </section>

      {/* ===== SOFTWARE DEPARTMENT ===== */}
      <section className="py-20 bg-secondary/30">
        <div className="page-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Software Department
            </h2>
          </AnimatedSection>

          <TeamMemberGrid members={SOFTWARE_DEPARTMENT} />
        </div>
      </section>

      {/* ===== BUSINESS & MARKETING UNIT ===== */}
      <section className="py-20 bg-background">
        <div className="page-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Business & Marketing Unit
            </h2>
          </AnimatedSection>

          <TeamMemberGrid members={BUSINESS_MARKETING_UNIT} />
        </div>
      </section>

      {/* ===== PRODUCT DEVELOPMENT WING ===== */}
      <section className="py-20 bg-secondary/30">
        <div className="page-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Product Development Wing
            </h2>
          </AnimatedSection>

          <TeamMemberGrid members={PRODUCT_DEVELOPMENT_WING} />
        </div>
      </section>

      <TeamWingSection
        title="R&D Wing"
        departments={[
          {
            name: "Electromechanical Department",
            members: RD_WING_ELECTROMECHANICAL,
          },
          {
            name: "Biomaterials Department",
            members: RD_WING_BIOMATERIALS,
          },
          {
            name: "Microbiology Laboratory",
            members: RD_WING_MICROBIOLOGY_LABORATORY,
          },
        ]}
        className="py-20 bg-background"
      />

      {/* ===== PRODUCTION WING ===== */}
      <section className="py-20 bg-secondary/30">
        <div className="page-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Production Wing
            </h2>
          </AnimatedSection>

          <TeamMemberGrid members={PRODUCTION_WING} />
        </div>
      </section>

      {/* ===== REGULATORY DEPARTMENT ===== */}
      <section className="py-20 bg-background">
        <div className="page-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Regulatory Department
            </h2>
          </AnimatedSection>

          <TeamMemberGrid members={REGULATORY_DEPARTMENT} />
        </div>
      </section>

      {/* ===== QUALITY CONTROL WING ===== */}
      <section className="py-20 bg-secondary/30">
        <div className="page-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Quality Control Wing
            </h2>
          </AnimatedSection>

          <TeamMemberGrid members={QUALITY_CONTROL_WING} columns={5} />
        </div>
      </section>

      {/* ===== SUPPLY CHAIN WING ===== */}
      <section className="py-20 bg-background">
        <div className="page-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Supply Chain Wing
            </h2>
          </AnimatedSection>

          <TeamMemberGrid members={SUPPLY_CHAIN_WING} />
        </div>
      </section>

      {/* ===== FINANCE DEPARTMENT ===== */}
      <section className="py-20 bg-secondary/30">
        <div className="page-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Finance Department
            </h2>
          </AnimatedSection>

          <TeamMemberGrid members={FINANCE_DEPARTMENT} />
        </div>
      </section>

      {/* ===== HR & ADMIN SUPPORT WING ===== */}
      <section className="py-20 bg-background">
        <div className="page-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              HR & Admin Support Wing
            </h2>
          </AnimatedSection>

          <TeamMemberGrid members={HR_ADMIN_SUPPORT_WING} />
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="py-20 bg-background">
        <div className="page-container">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Standards & Compliance</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Our Certifications</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div key={cert.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 hover:border-primary/40 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{cert.name}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 opacity-[0.07] text-white pointer-events-none"><DnaBg /></div>
        <div className="page-container text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-heading text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-white/75 text-lg max-w-xl mx-auto mb-8">Partner with our expert team for medical device development, regulatory compliance, and manufacturing excellence.</p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-lg font-bold h-12 px-8">
              <Link href="/contact">Start a Conversation <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
