import React, { useState } from "react";
import { Link } from "wouter";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MapPin, Filter } from "lucide-react";

import projectPipeline from "@/assets/project-pipeline.png";
import projectElectrical from "@/assets/project-electrical.png";
import projectWelding from "@/assets/project-welding.png";
import projectMaintenance from "@/assets/project-maintenance.png";

const allProjects = [
  { id: 1, title: "Permian Basin Pipeline Expansion", location: "Midland, TX", image: projectPipeline, category: "Oil & Gas", scope: "150-mile 36-inch pipeline construction including 4 compressor stations." },
  { id: 2, title: "Coastal Refinery Switchgear Upgrade", location: "Corpus Christi, TX", image: projectElectrical, category: "Refinery", scope: "Complete replacement of 15kV switchgear during planned 14-day turnaround." },
  { id: 3, title: "Modular Structural Fabrication", location: "Houston, TX", image: projectWelding, category: "Petrochemical", scope: "Fabrication of 45 modular pipe racks totaling 2,500 tons of structural steel." },
  { id: 4, title: "Power Plant Turnaround", location: "Oklahoma City, OK", image: projectMaintenance, category: "Power", scope: "Comprehensive outage maintenance for 2 combined-cycle gas turbine units." },
  { id: 5, title: "Offshore Platform Topside Piping", location: "Gulf of Mexico", image: projectPipeline, category: "Oil & Gas", scope: "Installation of high-pressure alloy piping systems on production platform." },
  { id: 6, title: "LNG Export Facility Civil Works", location: "Port Arthur, TX", image: projectWelding, category: "Petrochemical", scope: "Mass concrete foundations and underground utilities for train expansion." }
];

const categories = ["All", "Oil & Gas", "Refinery", "Petrochemical", "Power"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <div className="bg-background min-h-screen pt-20">
      <section className="py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6">
              Project <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              A track record of excellence in the most demanding industrial environments. We deliver complex projects on time, on budget, and incident-free.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 border-b border-border bg-background sticky top-[80px] z-40">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground font-heading uppercase font-bold text-lg">
            <Filter className="w-5 h-5" /> Filter by Industry
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 border font-bold text-sm transition-colors ${
                  filter === cat 
                  ? "bg-primary border-primary text-primary-foreground" 
                  : "bg-transparent border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.1} className="group">
                <div className="bg-card border border-border overflow-hidden h-full flex flex-col">
                  <div className="relative h-[300px] overflow-hidden">
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 z-20 bg-primary px-3 py-1 text-primary-foreground font-mono text-xs font-bold uppercase tracking-wider">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="flex items-center text-primary text-sm font-mono uppercase mb-4">
                      <MapPin className="w-4 h-4 mr-1" /> {project.location}
                    </div>
                    <p className="text-muted-foreground text-sm flex-grow">
                      {project.scope}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-muted-foreground text-lg">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
