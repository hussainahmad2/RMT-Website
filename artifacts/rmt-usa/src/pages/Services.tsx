import React from "react";
import { Link, useRoute } from "wouter";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Wrench, Zap, Factory, Construction, Activity, CheckCircle, Droplet, PaintBucket, Briefcase, FileSpreadsheet, HardHat, Cog } from "lucide-react";

import serviceHero from "@/assets/service-hero.png";

const allServices = [
  { slug: "mechanical", title: "Mechanical Services", icon: <Wrench className="w-8 h-8" />, desc: "Rotating equipment, millwright services, and mechanical installation." },
  { slug: "electrical", title: "Electrical Services", icon: <Zap className="w-8 h-8" />, desc: "High voltage installations, switchgear, and power distribution." },
  { slug: "piping", title: "Piping Services", icon: <Factory className="w-8 h-8" />, desc: "Process piping, pipeline construction, and specialized hydrotesting." },
  { slug: "welding-fabrication", title: "Welding & Fabrication", icon: <Construction className="w-8 h-8" />, desc: "Structural steel and custom fabrication in controlled environments." },
  { slug: "civil-structural", title: "Civil & Structural", icon: <HardHat className="w-8 h-8" />, desc: "Industrial concrete, foundations, and heavy structural erection." },
  { slug: "instrumentation", title: "Instrumentation & Controls", icon: <Activity className="w-8 h-8" />, desc: "DCS/SCADA systems, process controls, and precise calibration." },
  { slug: "maintenance-turnaround", title: "Maintenance & Turnaround", icon: <Cog className="w-8 h-8" />, desc: "Planned plant outages, emergency repair, and predictive maintenance." },
  { slug: "scaffolding", title: "Scaffolding Services", icon: <Briefcase className="w-8 h-8" />, desc: "Industrial access solutions built to exacting safety standards." },
  { slug: "insulation", title: "Industrial Insulation", icon: <Droplet className="w-8 h-8" />, desc: "Thermal protection for pipes, vessels, and specialized equipment." },
  { slug: "painting-coating", title: "Painting & Coating", icon: <PaintBucket className="w-8 h-8" />, desc: "NACE certified surface preparation and industrial asset protection." },
  { slug: "project-management", title: "Project Management", icon: <FileSpreadsheet className="w-8 h-8" />, desc: "Complete EPC scheduling, cost control, and execution tracking." }
];

export function ServicesOverview() {
  return (
    <div className="bg-background min-h-screen pt-20">
      <section className="py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6">
              Industrial <span className="text-primary">Services</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              A comprehensive suite of multi-discipline industrial capabilities, executed by certified professionals under a unified management structure.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((svc, i) => (
              <ServiceCard 
                key={svc.slug}
                slug={svc.slug}
                title={svc.title}
                description={svc.desc}
                icon={svc.icon}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = allServices.find(s => s.slug === params.slug);
  
  if (!service) {
    return <div className="pt-32 text-center text-2xl font-bold">Service Not Found</div>;
  }

  return (
    <div className="bg-background min-h-screen pt-20">
      
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
          <img src={serviceHero} alt={service.title} className="w-full h-full object-cover grayscale opacity-50" />
        </div>

        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <AnimatedSection className="max-w-3xl">
            <Link href="/services" className="text-primary font-mono text-sm uppercase tracking-widest hover:underline mb-6 inline-block">
              &larr; Back to Services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary text-primary-foreground">{service.icon}</div>
              <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground">
                {service.title}
              </h1>
            </div>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl">
              Precision execution and industry-leading expertise in {service.title.toLowerCase()} for critical industrial environments.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            
            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection>
                <h2 className="font-heading text-3xl font-bold uppercase mb-6 border-b border-border pb-4">Overview</h2>
                <div className="prose prose-invert max-w-none text-muted-foreground">
                  <p className="text-lg">
                    RMT USA provides top-tier {service.title.toLowerCase()} to the most demanding sectors, including oil & gas, power generation, petrochemicals, and heavy manufacturing. Our teams arrive on site fully equipped, certified, and ready to execute against tight schedules without compromising safety or quality.
                  </p>
                  <p>
                    By leveraging advanced techniques and maintaining a rigorous QA/QC program, we ensure that every installation, repair, or fabrication meets the exact specifications of the project.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-heading text-3xl font-bold uppercase mb-6 border-b border-border pb-4">Core Capabilities</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="flex items-start gap-3 bg-card border border-border p-4">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">Advanced capability specific to {service.title.toLowerCase()}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-1">
              <AnimatedSection className="bg-card border border-border p-8 sticky top-32">
                <h3 className="font-heading text-2xl font-bold uppercase mb-6">Need this service?</h3>
                <p className="text-muted-foreground mb-8 text-sm">
                  Contact our estimating team to discuss your project requirements, scope, and timeline.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full h-12 rounded-none font-bold">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full h-12 rounded-none font-bold border-border">
                    <a href="tel:18005550199">Call 1-800-555-0199</a>
                  </Button>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
