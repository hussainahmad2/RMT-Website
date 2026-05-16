import React from "react";
import { Link } from "wouter";
import { ArrowRight, Play, Wrench, Zap, Factory, Construction, ShieldCheck, Clock, Award, Users, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/ServiceCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import heroBg from "@/assets/hero-bg.png";
import projectPipeline from "@/assets/project-pipeline.png";
import projectElectrical from "@/assets/project-electrical.png";
import projectWelding from "@/assets/project-welding.png";

const featuredServices = [
  {
    title: "Mechanical Services",
    description: "Precision installation, alignment, and maintenance of heavy rotating and static equipment.",
    icon: <Wrench className="w-7 h-7" />,
    slug: "mechanical"
  },
  {
    title: "Electrical Services",
    description: "High and low voltage systems, switchgear, motor controls, and comprehensive power distribution.",
    icon: <Zap className="w-7 h-7" />,
    slug: "electrical"
  },
  {
    title: "Piping Services",
    description: "Process piping, cross-country pipelines, testing, and specialty alloy fabrication.",
    icon: <Factory className="w-7 h-7" />,
    slug: "piping"
  },
  {
    title: "Welding & Fabrication",
    description: "ASME certified structural and pipe welding, custom fabrication in controlled shop environments.",
    icon: <Construction className="w-7 h-7" />,
    slug: "welding-fabrication"
  },
  {
    title: "Civil & Structural",
    description: "Industrial foundations, concrete work, structural steel erection, and site preparation.",
    icon: <Construction className="w-7 h-7" />,
    slug: "civil-structural"
  },
  {
    title: "Maintenance & Turnaround",
    description: "Planned outages, emergency response, and preventative maintenance for optimal uptime.",
    icon: <Clock className="w-7 h-7" />,
    slug: "maintenance-turnaround"
  }
];

const projects = [
  { title: "Permian Basin Pipeline Expansion", location: "Midland, TX", image: projectPipeline, category: "Oil & Gas" },
  { title: "Coastal Refinery Switchgear Upgrade", location: "Corpus Christi, TX", image: projectElectrical, category: "Refinery" },
  { title: "Modular Structural Fabrication", location: "Houston, TX", image: projectWelding, category: "Fabrication" }
];

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
          <img src={heroBg} alt="Industrial Refinery at Night" className="w-full h-full object-cover" />
        </div>

        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <AnimatedSection animation="slideRight" className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/80 border border-primary/30 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-mono text-xs tracking-wider uppercase">Operating Worldwide</span>
            </div>
            
            <h1 className="font-heading text-6xl md:text-8xl font-bold text-foreground leading-[0.9] mb-6 tracking-tight uppercase">
              Industrial <br />
              <span className="text-primary">Excellence</span> <br />
              Delivered.
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              We engineer, build, and maintain the complex infrastructure that powers the modern world. Precision execution for uncompromising environments.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-base font-semibold rounded-none">
                <Link href="/services">Our Services <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="h-14 px-8 text-base font-semibold rounded-none bg-background/50 backdrop-blur-sm border-border hover:bg-secondary">
                    <Play className="mr-2 w-5 h-5 text-primary" /> Watch Overview
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl p-0 bg-black border-none rounded-none">
                  <div className="aspect-video w-full">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/LDu3kqfqyPw?autoplay=1" 
                      title="RMT USA Overview" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { value: "25+", label: "Years Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "50+", label: "Expert Teams" },
              { value: "12", label: "Industry Certifications" }
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1} animation="fade" className="py-8 px-4 text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <AnimatedSection className="max-w-2xl">
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">Core <span className="text-primary">Capabilities</span></h2>
              <p className="text-muted-foreground text-lg">Comprehensive multi-discipline industrial solutions delivered with uncompromising safety and precision.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Button asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/services">View All Services</Link>
              </Button>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.slug} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-card border-y border-border overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideRight">
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">Built on <span className="text-primary">Safety</span> & Precision</h2>
              <p className="text-muted-foreground text-lg mb-8">
                In heavy industry, there is no margin for error. RMT USA operates with a safety-first culture that protects our people, your assets, and the environment.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <ShieldCheck className="w-6 h-6 text-primary" />, title: "Impeccable Safety Record", desc: "Industry-leading TRIR and EMR ratings. ISNetworld certified." },
                  { icon: <Award className="w-6 h-6 text-primary" />, title: "Certified Expertise", desc: "ASME, API, and AWS certified welders and craftsmen." },
                  { icon: <Clock className="w-6 h-6 text-primary" />, title: "24/7 Rapid Response", desc: "Always-ready teams for emergency outages and critical repairs." },
                  { icon: <Users className="w-6 h-6 text-primary" />, title: "Integrated Delivery", desc: "Single-source provider for multi-craft industrial projects." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 bg-background p-3 rounded-none border border-border shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-heading mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideLeft" className="relative h-[600px] border border-border p-4 bg-background">
              <div className="w-full h-full relative">
                {/* SVG Map Placeholder - in a real app this would use react-simple-maps */}
                <div className="absolute inset-0 bg-secondary/30 flex items-center justify-center flex-col">
                   <span className="text-muted-foreground font-mono mb-4 text-sm">[Interactive SVG Map Component]</span>
                   <div className="text-center space-y-2">
                     <p className="text-primary font-bold">Houston, TX (HQ)</p>
                     <p className="text-foreground text-sm">Corpus Christi, TX</p>
                     <p className="text-foreground text-sm">Midland, TX</p>
                     <p className="text-foreground text-sm">Saudi Arabia</p>
                     <p className="text-foreground text-sm">UAE</p>
                   </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* LATEST PROJECTS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">Proven <span className="text-primary">Performance</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A selection of our recent complex industrial executions.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={i} delay={i * 0.15} className="group cursor-pointer">
                <div className="relative h-80 overflow-hidden border border-border mb-4">
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors z-10" />
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20 bg-primary px-3 py-1 text-primary-foreground font-mono text-xs font-bold uppercase">
                    {project.category}
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm flex items-center"><MapPin className="w-4 h-4 mr-1" />{project.location}</p>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-none border-border">
              <Link href="/projects">View Project Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">Ready to start your next project?</h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Contact our engineering and estimation team to discuss your requirements and receive a comprehensive proposal.
            </p>
            <Button asChild size="lg" className="h-14 px-10 text-base font-bold bg-background text-foreground hover:bg-card rounded-none">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
