import React, { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, MapPin, Calendar, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";

type Category = "All" | "Medical Devices" | "Regulatory" | "Software" | "Manufacturing" | "Pharmaceutical";

interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  year: string;
  category: Category;
  description: string;
  outcomes: string[];
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "Class III Implantable Cardiac Monitor — FDA PMA Submission",
    client: "Confidential MedTech Company",
    location: "United States",
    year: "2023",
    category: "Regulatory",
    description: "Led end-to-end regulatory strategy and technical documentation for a novel Class III implantable cardiac monitor, achieving FDA PMA approval within 18 months.",
    outcomes: ["FDA PMA Approval", "ISO 14971 Risk File", "Full V&V Package", "Post-Market Plan"],
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&q=80",
    tags: ["FDA PMA", "Class III", "Implantable", "Cardiac"],
  },
  {
    id: "2",
    title: "Wearable Drug Delivery System — Full Design & Prototyping",
    client: "European Pharma Company",
    location: "Germany",
    year: "2023",
    category: "Medical Devices",
    description: "Designed and prototyped a wearable on-body injector for biologics administration, from initial concept through design freeze and CE marking under EU MDR.",
    outcomes: ["CE Mark Achieved", "5 Prototype Iterations", "Design History File", "EU MDR Compliance"],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80",
    tags: ["Wearable", "Drug Delivery", "CE Mark", "EU MDR"],
  },
  {
    id: "3",
    title: "AI-Powered Diagnostic Imaging Platform — SaMD Development",
    client: "Diagnostics Startup",
    location: "United Kingdom",
    year: "2022",
    category: "Software",
    description: "Developed an AI-powered medical image analysis platform compliant with IEC 62304 and FDA SaMD guidance, including full software validation lifecycle documentation.",
    outcomes: ["IEC 62304 Compliance", "FDA SaMD Framework", "ML Model Validation", "UKCA Mark"],
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=600&q=80",
    tags: ["AI/ML", "SaMD", "Imaging", "IEC 62304"],
  },
  {
    id: "4",
    title: "Pharmaceutical Coating Line — Turnkey Commissioning",
    client: "Generic Pharma Manufacturer",
    location: "UAE",
    year: "2022",
    category: "Manufacturing",
    description: "Delivered turnkey commissioning of a high-throughput tablet coating line, including full IQ/OQ/PQ validation and operator training for ISO 13485 compliance.",
    outcomes: ["IQ/OQ/PQ Complete", "ISO 13485 Certified", "48 Operators Trained", "GMP Ready"],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    tags: ["Commissioning", "IQ/OQ/PQ", "ISO 13485", "Pharmaceutical"],
  },
  {
    id: "5",
    title: "Injectable Drug Formulation Development — Biologics",
    client: "Biotech Company",
    location: "Canada",
    year: "2023",
    category: "Pharmaceutical",
    description: "Developed and optimized a lyophilized injectable formulation for a novel biologic therapeutic, including stability studies and CMC documentation for regulatory submission.",
    outcomes: ["ICH Stability Data", "CMC Package", "Process Validation", "Tech Transfer Complete"],
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80",
    tags: ["Injectable", "Biologics", "Formulation", "CMC"],
  },
  {
    id: "6",
    title: "PCB & Firmware Development — Patient Monitor",
    client: "Hospital Equipment OEM",
    location: "United States",
    year: "2021",
    category: "Medical Devices",
    description: "Designed custom PCB and RTOS-based firmware for a multi-parameter patient monitor, compliant with IEC 60601-1 and IEC 60601-1-2 (EMC) requirements.",
    outcomes: ["IEC 60601-1 Compliant", "EMC Pre-Compliance", "RTOS Firmware", "Design V&V"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    tags: ["PCB Design", "Firmware", "IEC 60601", "Patient Monitor"],
  },
];

const categories: Category[] = ["All", "Medical Devices", "Regulatory", "Software", "Manufacturing", "Pharmaceutical"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  useSEO({
    title: "Projects & Case Studies",
    description: "Explore RMT USA's portfolio of successful medical device development, regulatory approval, software, and contract manufacturing projects across 30+ countries.",
    keywords: "medical device projects, FDA approval case study, CE marking project, contract manufacturing portfolio, SaMD development",
  });

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* HERO */}
      <section className="py-20 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-5">Projects & Case Studies</h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              A selection of the projects we have delivered across medical device development, regulatory compliance, software engineering, pharmaceutical development, and contract manufacturing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-10 border-b border-border bg-background sticky top-16 z-30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                data-testid={`button-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-sm"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full">{project.category}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {project.year}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                      <MapPin className="w-3.5 h-3.5 shrink-0" /> {project.location}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 border border-border rounded text-muted-foreground">{tag}</span>
                      ))}
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-widest">Key Outcomes</p>
                      <div className="grid grid-cols-2 gap-1">
                        {project.outcomes.map((outcome) => (
                          <div key={outcome} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-primary shrink-0" /> {outcome}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Have a Project in Mind?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Let's discuss how RMT USA can support your medical device development goals.</p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-lg font-bold" data-testid="button-projects-cta">
              <Link href="/contact">Start the Conversation <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
