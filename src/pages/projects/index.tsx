import React, { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, MapPin, Calendar, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { getRouteSeo } from "@/lib/route-seo";
import {
  MONEY_SERVICE_LINKS,
  PROJECT_CASE_STUDIES,
  PROJECT_FILTER_CATEGORIES,
  projectPath,
  type ProjectCategory,
} from "@/data/projects-content";

const CircuitBg = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="30" y="30" width="40" height="40" rx="4" />
    <rect x="130" y="30" width="40" height="40" rx="4" />
    <rect x="80" y="110" width="40" height="40" rx="4" />
    <rect x="30" y="130" width="30" height="30" rx="4" />
    <rect x="140" y="130" width="30" height="30" rx="4" />
    <line x1="70" y1="50" x2="130" y2="50" />
    <line x1="100" y1="70" x2="100" y2="110" />
    <line x1="50" y1="70" x2="50" y2="130" />
    <line x1="150" y1="70" x2="150" y2="130" />
    <line x1="60" y1="145" x2="80" y2="130" />
    <line x1="120" y1="130" x2="140" y2="145" />
    <circle cx="50" cy="50" r="4" fill="currentColor" />
    <circle cx="150" cy="50" r="4" fill="currentColor" />
    <circle cx="100" cy="130" r="4" fill="currentColor" />
  </svg>
);

export default function Projects() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  useSEO(getRouteSeo("/projects"));

  const filtered =
    filter === "All" ? PROJECT_CASE_STUDIES : PROJECT_CASE_STUDIES.filter((p) => p.category === filter);

  return (
    <div className="bg-background min-h-screen pt-20">
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/92 via-black/80 to-primary/45" />
        <div
          className="absolute inset-0 opacity-[0.05] text-white pointer-events-none"
          style={{ position: "absolute", right: "-5%", bottom: "-10%", width: "50%", height: "120%" }}
        >
          <CircuitBg />
        </div>
        <div className="page-container text-center relative z-10 py-20">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Our Work</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-5">
              Project <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
              Medical device case studies spanning regulatory, R&amp;D, software, and ISO 13485 manufacturing —
              each linked to the service that delivered the result.
            </p>
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

      <section className="sticky top-16 bg-background/95 backdrop-blur border-b border-border z-30 py-3">
        <div className="page-container">
          <div className="flex flex-wrap gap-2">
            {PROJECT_FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-white shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="page-container">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={projectPath(project.slug)}
                    className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300 block h-full"
                  >
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 bg-primary text-white rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-primary text-white rounded-full p-2">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {project.year}
                        </span>
                      </div>
                      <h2 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors leading-snug mb-2">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.outcomes.slice(0, 2).map((o) => (
                          <span
                            key={o}
                            className="flex items-center gap-1 text-xs text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full"
                          >
                            <CheckCircle className="w-2.5 h-2.5" />
                            {o}
                          </span>
                        ))}
                      </div>
                      {project.relatedServices.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-border">
                          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                            Related services
                          </p>
                          <div className="flex flex-wrap gap-x-3 gap-y-1">
                            {project.relatedServices.map((svc) => (
                              <span key={svc.href} className="text-xs font-medium text-primary">
                                {svc.label}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="page-container">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
              Need the same capability for your device?
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-6">
              Each case study maps to a live service page. Open the relevant service, then request a quote.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {MONEY_SERVICE_LINKS.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary border border-primary/20 bg-primary/5 rounded-full px-3 py-1.5 hover:bg-primary/10"
                >
                  {svc.label} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
            <Button asChild className="rounded-lg">
              <Link href="/contact">
                Contact / request a quote <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
