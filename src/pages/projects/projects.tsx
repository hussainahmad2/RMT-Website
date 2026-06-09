import React, { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, MapPin, Calendar, CheckCircle, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";

const CircuitBg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="30" y="30" width="40" height="40" rx="4" /><rect x="130" y="30" width="40" height="40" rx="4" />
    <rect x="80" y="110" width="40" height="40" rx="4" /><rect x="30" y="130" width="30" height="30" rx="4" />
    <rect x="140" y="130" width="30" height="30" rx="4" />
    <line x1="70" y1="50" x2="130" y2="50" /><line x1="100" y1="70" x2="100" y2="110" />
    <line x1="50" y1="70" x2="50" y2="130" /><line x1="150" y1="70" x2="150" y2="130" />
    <line x1="60" y1="145" x2="80" y2="130" /><line x1="120" y1="130" x2="140" y2="145" />
    <circle cx="50" cy="50" r="4" fill="currentColor" /><circle cx="150" cy="50" r="4" fill="currentColor" />
    <circle cx="100" cy="130" r="4" fill="currentColor" />
  </svg>
);

type Category = "All" | "Medical Devices" | "Regulatory" | "Software" | "Manufacturing" | "Pharmaceutical";

interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  year: string;
  category: Category;
  description: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  image: string;
  tags: string[];
}

const projects: Project[] = [
  { id: "1", title: "Class III Implantable Cardiac Monitor ??CE Mark Technical File", client: "European MedTech Company", location: "Germany", year: "2023", category: "Regulatory", description: "Led end-to-end regulatory strategy and technical documentation for a novel Class III implantable cardiac monitor, achieving CE Mark approval within 18 months.", challenge: "The client had a near-final device design but no regulatory documentation or QMS. They needed a complete EU MDR technical file for a novel Class III implantable cardiac monitor within an aggressive 18-month timeline.", solution: "RMT assembled a dedicated regulatory team and implemented ISO 13485 QMS in parallel with technical file development. We authored the CER, BER, Risk Management File, and complete technical documentation package.", outcomes: ["CE Mark Achieved", "ISO 14971 Risk File", "Full V&V Package", "Post-Market Plan"], image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&q=80", tags: ["CE Mark", "Class III", "Implantable", "Cardiac"] },
  { id: "2", title: "Wearable Drug Delivery System ??Full Design & Prototyping", client: "European Pharma Company", location: "UAE", year: "2023", category: "Medical Devices", description: "Designed and prototyped a wearable on-body injector for biologics administration, from initial concept through design freeze and CE marking under EU MDR.", challenge: "Develop a miniaturised, body-worn injector for high-viscosity biologics that could be self-administered by patients ??meeting both pharmaceutical and medical device regulatory requirements as a combination product.", solution: "RMT's integrated team covered mechanical design, electronics, firmware, pharmaceutical formulation, and regulatory strategy simultaneously ??reducing the typical serial development timeline by 40%.", outcomes: ["CE Mark Achieved", "5 Prototype Iterations", "Design History File", "EU MDR Compliance"], image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80", tags: ["Wearable", "Drug Delivery", "CE Mark", "EU MDR"] },
  { id: "3", title: "AI-Powered Diagnostic Imaging Platform ??SaMD Development", client: "Diagnostics Startup", location: "United Kingdom", year: "2022", category: "Software", description: "Developed an AI-powered medical image analysis platform compliant with IEC 62304 and EU MDR SaMD guidance, including full software validation lifecycle documentation.", challenge: "A diagnostic startup had a promising AI algorithm but no pathway to CE Mark as SaMD. They needed full software development lifecycle documentation and regulatory strategy.", solution: "RMT implemented IEC 62304-compliant development processes, validated the AI/ML model against clinical datasets, and prepared the complete SaMD technical file for EU MDR submission.", outcomes: ["EU MDR SaMD Compliant", "IEC 62304 Lifecycle", "ML Model Validated", "CE Technical File"], image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&q=80", tags: ["AI/ML", "SaMD", "Imaging", "IEC 62304"] },
  { id: "4", title: "Point-of-Care Biosensor Manufacturing Scale-Up", client: "Diagnostics Company", location: "Pakistan", year: "2022", category: "Manufacturing", description: "Scaled up biosensor manufacturing from lab prototype to GMP production capability, achieving ISO 13485 certification and 50,000 unit/month output.", challenge: "A POC diagnostics company had validated their biosensor technology at lab scale but had no pathway to GMP manufacturing. They needed to scale from 500 to 50,000 units/month within 12 months.", solution: "RMT designed the manufacturing process, implemented ISO 13485 QMS, installed and validated production equipment, and trained 25 manufacturing staff ??delivering on-time and within budget.", outcomes: ["ISO 13485 Certified", "50k Units/Month", "Full Traceability", "Process Validated"], image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80", tags: ["Biosensor", "GMP", "Scale-Up", "ISO 13485"] },
  { id: "5", title: "Drug-Device Combination ??Inhaler Product Development", client: "Pharma Company", location: "UAE", year: "2022", category: "Pharmaceutical", description: "Full development of a dry powder inhaler combination product from formulation through device design, clinical studies, and regulatory submission.", challenge: "Develop a novel dry powder inhaler for a challenging peptide API ??requiring simultaneous optimisation of the formulation, device mechanics, and patient usability ??for multiple regulatory markets.", solution: "RMT's integrated pharma and medical device teams co-developed the formulation and device design in parallel, conducting formative and summative usability studies and preparing the multi-market regulatory submission.", outcomes: ["Combination Product Approved", "3 Market Submissions", "Usability Study Complete", "Shelf Life Validated"], image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80", tags: ["Pharma", "Inhaler", "Combination", "Formulation"] },
  { id: "6", title: "Surgical Robotic System ??Software Validation Programme", client: "Surgical Robotics Company", location: "United States", year: "2023", category: "Software", description: "Comprehensive software validation programme for a Class III surgical robotic system, covering IEC 62304 lifecycle, cybersecurity, and human factors.", challenge: "An established surgical robotics company needed a complete software V&V programme for a major software update ??with FDA submission deadline in 9 months.", solution: "RMT provided a dedicated V&V team that reviewed the software architecture, wrote and executed test protocols covering all software safety classes, and produced a complete V&V summary report for the FDA submission.", outcomes: ["V&V Package Submitted", "Cybersecurity Documented", "Human Factors Complete", "Zero Major Defects"], image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80", tags: ["Surgical", "Robotics", "Software", "V&V"] },
  { id: "7", title: "ISO 13485 QMS Implementation ??Medical Device Startup", client: "MedTech Startup", location: "Pakistan", year: "2021", category: "Regulatory", description: "Full ISO 13485 QMS implementation from scratch for a medical device startup ??achieving certification in 9 months and providing the quality foundation for CE marking.", challenge: "A startup needed ISO 13485 certification to win a key customer contract within 9 months. They had no existing quality system, no documented processes, and limited in-house QMS expertise.", solution: "RMT implemented a lean, practical ISO 13485 QMS tailored to the startup's product scope. We wrote all procedures, trained staff, conducted internal audits, and managed the certification body interaction end-to-end.", outcomes: ["ISO 13485 Certified (9 months)", "Complete QMS Documentation", "Internal Audit Programme", "Customer Contract Won"], image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80", tags: ["ISO 13485", "QMS", "Startup", "Regulatory"] },
  { id: "8", title: "Orthopaedic Implant ??Contract Manufacturing Programme", client: "Orthopaedic Company", location: "UAE", year: "2021", category: "Manufacturing", description: "Contract manufacturing programme for a range of knee and hip orthopaedic implant components, from precision machining through sterile packaging and CE marking.", challenge: "An orthopaedic company needed a reliable, CE-marked contract manufacturing partner for complex titanium and CoCr implant components ??with full DHR documentation and sterile packaging.", solution: "RMT established a dedicated manufacturing cell for the client, qualifying precision machining processes for titanium and CoCr, implementing sterile packaging qualification, and providing complete DHR documentation for every unit.", outcomes: ["CE Mark Maintained", "Full DHR per Unit", "Sterile Packaging Validated", "Zero Regulatory Issues"], image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80", tags: ["Orthopaedics", "Implant", "Contract Mfg", "Titanium"] },
  { id: "9", title: "Remote Patient Monitoring Platform ??Cloud & AI Development", client: "Digital Health Company", location: "United States", year: "2023", category: "Software", description: "End-to-end development of a HIPAA-compliant cloud platform for remote patient monitoring, including AI-driven alert algorithms and mobile patient application.", challenge: "A digital health company needed to develop their RPM platform rapidly ??integrating IoT medical devices, cloud data analytics, and patient/clinician mobile apps ??with full HIPAA compliance and IEC 62304 documentation.", solution: "RMT's software team built the complete platform stack ??cloud infrastructure, AI alert algorithms, iOS/Android patient app, and clinical dashboard ??with full IEC 62304 SDLC documentation and HIPAA security architecture.", outcomes: ["HIPAA Compliant", "IEC 62304 Documented", "10k Patients Onboarded", "AI Alerts Validated"], image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", tags: ["RPM", "Cloud", "AI", "HIPAA"] },
];

const CATEGORIES: Category[] = ["All", "Medical Devices", "Regulatory", "Software", "Manufacturing", "Pharmaceutical"];

export default function Projects() {
  const [filter, setFilter] = useState<Category>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  useSEO({
    title: "Projects",
    description: "RMT Medical Technologies project portfolio — medical device development, regulatory compliance, software, and manufacturing case studies across 30+ countries.",
    keywords: "medical device projects portfolio, regulatory compliance case studies, ISO 13485 projects",
    path: "/projects",
  });

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* HERO */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/92 via-black/80 to-primary/45" />
        <div className="absolute inset-0 opacity-[0.05] text-white pointer-events-none" style={{ position: "absolute", right: "-5%", bottom: "-10%", width: "50%", height: "120%" }}>
          <CircuitBg />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="page-container text-center relative z-10 py-20">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Our Work</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-5">Project <span className="text-primary">Portfolio</span></h1>
            <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">A selection of our medical device development, regulatory compliance, software, and manufacturing engagements across 30+ countries.</p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-white/10">
              {["200+ Projects Delivered", "30+ Countries", "98% Approval Rate"].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-white/65">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {b}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FILTER */}
      <section className="sticky top-16 bg-background/95 backdrop-blur border-b border-border z-30 py-3">
        <div className="page-container">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${filter === cat ? "bg-primary text-white shadow-sm" : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-16">
        <div className="page-container">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSelected(project)}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 bg-primary text-white rounded-full font-medium">{tag}</span>
                      ))}
                    </div>
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-primary text-white rounded-full p-2"><ArrowRight className="w-4 h-4" /></div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{project.location}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{project.year}</span>
                    </div>
                    <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors leading-snug mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.outcomes.slice(0, 2).map((o) => (
                        <span key={o} className="flex items-center gap-1 text-xs text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full">
                          <CheckCircle className="w-2.5 h-2.5" />{o}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* PROJECT DETAIL MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative bg-background border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-10 w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors">
                <X className="w-4 h-4 text-foreground" />
              </button>

              {/* Hero image */}
              <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-12">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {selected.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 bg-primary text-white rounded-full font-medium">{tag}</span>
                    ))}
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-white leading-tight">{selected.title}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground border-b border-border pb-4">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" />{selected.location}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" />{selected.year}</span>
                  <span className="font-medium text-foreground">{selected.client}</span>
                  <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-semibold">{selected.category}</span>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground text-xs uppercase tracking-widest text-muted-foreground mb-2">Project Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">{selected.description}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h3 className="font-semibold text-foreground text-sm mb-2">The Challenge</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{selected.challenge}</p>
                  </div>
                  <div className="bg-primary/5 border border-primary/15 rounded-xl p-4">
                    <h3 className="font-semibold text-foreground text-sm mb-2">Our Solution</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{selected.solution}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground text-xs uppercase tracking-widest text-muted-foreground mb-3">Key Outcomes</h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {selected.outcomes.map((o) => (
                      <div key={o} className="flex items-center gap-2.5 bg-card border border-border rounded-lg px-3 py-2.5">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm font-medium text-foreground">{o}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center border-t border-border">
                  <Button asChild className="rounded-lg">
                    <Link href="/contact" onClick={() => setSelected(null)}>Discuss a Similar Project <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                  <button onClick={() => setSelected(null)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
