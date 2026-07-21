import React, { useState } from "react";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, FlaskConical, Microscope, Zap, Shield, Package, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";

const StethoBg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="3.5">
    <circle cx="70" cy="50" r="28" /><circle cx="130" cy="50" r="28" />
    <path d="M 42 50 Q 42 120 100 145 Q 158 120 158 50" />
    <circle cx="100" cy="155" r="15" /><line x1="100" y1="170" x2="100" y2="190" />
    <circle cx="100" cy="193" r="5" />
  </svg>
);

interface TestCategory {
  id: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  image: string;
  tests: { name: string; description: string }[];
  standards: string[];
}

const testCategories: TestCategory[] = [
  {
    id: "microbiology",
    icon: <Microscope className="w-6 h-6" />,
    title: "Microbiology Testing",
    tagline: "Ensuring sterility and microbial safety for patient-contacting medical devices.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&q=80",
    tests: [
      { name: "Sterility Test", description: "Membrane filtration and direct inoculation methods per ISO 11737-2 to confirm absence of viable microorganisms in sterile devices." },
      { name: "Bacterial Endotoxin Test (BET)", description: "LAL (Limulus Amebocyte Lysate) testing per USP <85> and Ph. Eur. 2.6.14 to quantify endotoxin levels in parenteral devices and drug products." },
      { name: "Microbial Limit Test", description: "Total aerobic microbial count (TAMC) and total yeasts/mould count (TYMC) per USP <61>/<62> for non-sterile devices." },
      { name: "ETO Sterilization Services", description: "Ethylene oxide sterilization process development and validation per ISO 11135, including process qualification and residuals testing." },
    ],
    standards: ["ISO 11737-2", "USP <85>", "ISO 11135", "Ph. Eur. 2.6.14"],
  },
  {
    id: "physical",
    icon: <Activity className="w-6 h-6" />,
    title: "Physical & Mechanical Testing",
    tagline: "Verifying structural integrity and mechanical performance under worst-case conditions.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80",
    tests: [
      { name: "Tensile & Fatigue Testing", description: "Tensile strength, elongation at break, and cyclic fatigue testing per ISO 10555 and ASTM standards for implants and structural components." },
      { name: "Hardness & Wear Testing", description: "Shore hardness, Rockwell hardness, and tribological wear testing for polymeric and metallic device components." },
      { name: "Compression & Burst Testing", description: "Compressive strength and burst pressure testing for surgical balloons, vascular grafts, and containment systems per ISO 7198." },
      { name: "Dimensional Measurement", description: "CMM and optical coordinate measurement to verify dimensional conformance against engineering drawing specifications to ��0.01mm tolerance." },
    ],
    standards: ["ISO 10555", "ASTM F2477", "ISO 7198", "ISO 10993-3"],
  },
  {
    id: "chemical",
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Chemical & Analytical Testing",
    tagline: "Characterising material composition, extractables, and leachables for biocompatibility assessment.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80",
    tests: [
      { name: "Chemical Characterisation (ISO 10993-18)", description: "FTIR, GC-MS, ICP-MS, and NMR analytical methods to characterise the chemical composition of device materials and identify extractable compounds." },
      { name: "Extractables & Leachables Study", description: "Controlled extraction testing under exaggerated conditions to identify and quantify chemical substances that may migrate from device materials." },
      { name: "Heavy Metals Analysis", description: "ICP-MS and AAS analysis for heavy metals content per USP <232>/<233> in pharmaceutical and combination products." },
      { name: "Particulate Matter Testing", description: "USP <787>, <788>, and <789> sub-visible and visible particulate testing for parenteral devices and drug products." },
    ],
    standards: ["ISO 10993-18", "USP <232>", "USP <787>", "ICH Q3D"],
  },
  {
    id: "electrical",
    icon: <Zap className="w-6 h-6" />,
    title: "Electrical Safety Testing",
    tagline: "IEC 60601-1 compliance testing for active medical devices and electro-medical equipment.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    tests: [
      { name: "IEC 60601-1 Safety Testing", description: "Comprehensive Type Testing for patient leakage current, protective earth resistance, dielectric strength, and temperature measurement per IEC 60601-1:2012." },
      { name: "EMC Testing (IEC 60601-1-2)", description: "Electromagnetic compatibility emission and immunity testing per IEC 60601-1-2 fourth edition, covering CISPR and IEC test methods." },
      { name: "Wireless Coexistence (IEC 60601-1-2:2014)", description: "RF wireless coexistence testing for medical devices incorporating 2.4GHz (BLE, Wi-Fi), 5GHz, and cellular (4G/5G) interfaces." },
      { name: "Essential Performance Testing", description: "Verification of essential performance under simulated electromagnetic disturbances per the device's specific collateral standards." },
    ],
    standards: ["IEC 60601-1", "IEC 60601-1-2", "CISPR 11", "IEC 62133"],
  },
  {
    id: "biocompatibility",
    icon: <Shield className="w-6 h-6" />,
    title: "Biocompatibility Testing",
    tagline: "ISO 10993 series biological evaluations ensuring patient safety from device materials.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
    tests: [
      { name: "Cytotoxicity Testing (ISO 10993-5)", description: "MEM elution, agar overlay, and direct contact cytotoxicity assays to assess cell viability in the presence of device extracts." },
      { name: "Sensitization Testing (ISO 10993-10)", description: "Guinea pig maximisation (GPMT) and local lymph node assay (LLNA) for skin sensitization potential of device materials." },
      { name: "Intracutaneous Reactivity (ISO 10993-10)", description: "Intracutaneous injection test in rabbits to assess local tissue reaction to device material extracts." },
      { name: "Systemic Toxicity (ISO 10993-11)", description: "Acute systemic toxicity via intravenous and intraperitoneal injection routes to assess systemic response to device material extracts." },
    ],
    standards: ["ISO 10993-5", "ISO 10993-10", "ISO 10993-11", "ISO 10993-18"],
  },
  {
    id: "packaging",
    icon: <Package className="w-6 h-6" />,
    title: "Packaging & Shelf Life Testing",
    tagline: "Validating sterile barrier integrity and product stability through accelerated and real-time aging.",
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=900&q=80",
    tests: [
      { name: "Seal Strength & Burst Testing", description: "Peel seal strength (ASTM F88) and burst testing (ASTM F1140) to characterise sterile barrier performance across the packaging system." },
      { name: "Accelerated Aging (ASTM F1980)", description: "Arrhenius-based accelerated aging at elevated temperature and humidity to establish device shelf life in compressed study timelines." },
      { name: "Dye Penetration & Microbial Challenge", description: "Dye penetration testing (ASTM F1929) and microbial challenge evaluation to confirm seal integrity of the sterile barrier system." },
      { name: "Distribution Simulation Testing (ASTM D4169)", description: "Simulated distribution cycle testing per ASTM D4169 to verify packaging integrity through the distribution environment." },
    ],
    standards: ["ISO 11607", "ASTM F88", "ASTM F1980", "ASTM D4169"],
  },
];

export default function Testing() {
  const [active, setActive] = useState<string>("microbiology");
  const activeCategory = testCategories.find((c) => c.id === active)!;

  useSEO({
    title: "Testing Services",
    description: "Comprehensive medical device testing services — microbiology, physical, chemical, electrical safety (IEC 60601), biocompatibility (ISO 10993), and packaging integrity testing.",
    keywords: "medical device testing, microbiology testing, IEC 60601, ISO 10993 biocompatibility, sterility testing, electrical safety testing",
    path: "/testing",
  });

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* HERO */}
      <section className="relative py-24 bg-[#060d17] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="absolute right-12 top-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.05] text-white pointer-events-none">
          <StethoBg />
        </div>
        <div className="page-container relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Laboratory Services</span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
                Medical Device<br /><span className="text-primary">Testing Services</span>
              </h1>
              <p className="text-white/65 text-xl leading-relaxed mb-8">
                Comprehensive laboratory testing services for medical devices — from sterility and biocompatibility through electrical safety and packaging validation — all aligned with FDA, EU MDR, and international standards.
              </p>
              <Button asChild className="rounded-lg h-11 px-7 font-semibold">
                <Link href="/contact">Request Testing Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CATEGORY TABS + ACTIVE DETAIL */}
      <section className="py-16">
        <div className="page-container">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card/95 shadow-sm dark:border-white/10 dark:bg-slate-950/55">
            <div className="border-b border-border bg-muted/20 px-4 py-4 sm:px-6 dark:border-white/10 dark:bg-white/5">
              <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2">
                {testCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                      active === cat.id
                        ? "border-primary bg-primary text-white shadow-sm dark:border-primary dark:bg-primary dark:text-white"
                        : "border-border bg-background text-muted-foreground hover:border-primary/35 hover:bg-primary/10 hover:text-primary dark:border-white/10 dark:bg-slate-950/60 dark:hover:border-cyan-300/35 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-200"
                    }`}
                  >
                    {cat.icon}
                    <span>{cat.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
                    <div>
                      <h2 className="font-heading text-4xl font-bold text-foreground mb-3">{activeCategory.title}</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">{activeCategory.tagline}</p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {activeCategory.standards.map((std) => (
                          <span key={std} className="text-xs px-3 py-1.5 bg-primary/8 border border-primary/20 text-primary rounded-lg font-medium">
                            {std}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-3">
                        {activeCategory.tests.map((test, i) => (
                          <motion.div
                            key={test.name}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.07 }}
                            className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/35"
                          >
                            <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-primary text-xs font-bold">{i + 1}</span>
                            </div>
                            <div>
                              <p className="font-semibold text-foreground text-sm">{test.name}</p>
                              <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{test.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-8">
                        <Button asChild className="rounded-lg">
                          <Link href="/contact">Request {activeCategory.title} Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                        </Button>
                      </div>
                    </div>

                    <div className="lg:sticky lg:top-28">
                      <motion.div
                        key={activeCategory.image}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]"
                      >
                        <img src={activeCategory.image} alt={activeCategory.title} className="w-full h-full object-cover" />
                      </motion.div>

                      <div className="mt-5 rounded-2xl border border-border bg-background p-6">
                        <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">Why Choose RMT for Testing</h4>
                        <div className="space-y-3">
                          {["Accredited laboratory network", "Regulatory-grade test reports", "Fast turnaround times", "Standards-compliant protocols", "Complete test documentation"].map((item) => (
                            <div key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ALL CATEGORIES OVERVIEW */}
      <section className="py-16 bg-secondary/30">
        <div className="page-container">
          <AnimatedSection className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Complete Testing Portfolio</p>
            <h2 className="font-heading text-3xl font-bold text-foreground">All Testing Services</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testCategories.map((cat, i) => (
              <motion.button key={cat.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                onClick={() => { setActive(cat.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="text-left group bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all">
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">{cat.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{cat.tagline}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {cat.standards.slice(0, 2).map((std) => (
                    <span key={std} className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded border border-border">{std}</span>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="page-container text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Testing?</h2>
            <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">Our laboratory specialists will design a testing programme tailored to your device and regulatory requirements.</p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-lg font-bold h-12 px-8">
              <Link href="/contact">Request a Testing Quote</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
