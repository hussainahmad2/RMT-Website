import React from "react";
import { Link } from "wouter";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Target, Eye, Users } from "lucide-react";

import aboutTeam from "@/assets/about-team.png";
import heroBg from "@/assets/hero-bg.png";

export default function About() {
  return (
    <div className="bg-background min-h-screen pt-20">
      
      {/* PAGE HEADER */}
      <section className="py-24 bg-card border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src={heroBg} className="w-full h-full object-cover" alt="Industrial" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <AnimatedSection>
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6">
              About <span className="text-primary">RMT USA</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl leading-relaxed">
              We are a premier industrial services provider, dedicated to engineering, constructing, and maintaining the vital infrastructure of the global energy and manufacturing sectors.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="border-l-4 border-primary pl-6 mb-8">
                <h2 className="font-heading text-3xl font-bold uppercase">The RMT Standard</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Founded with a commitment to uncompromising quality and safety, RMT USA has grown from a specialized regional contractor into a multi-discipline industrial force operating across North America and international markets.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our success is built on the expertise of our craftsmen, the precision of our engineering, and a corporate culture that treats every project—no matter the scale—as mission critical.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="slideLeft">
              <div className="relative p-2 border border-border bg-card">
                <img src={aboutTeam} alt="RMT USA Command Center" className="w-full h-auto" />
                <div className="absolute -bottom-6 -left-6 bg-primary p-6 shadow-xl w-48 text-primary-foreground hidden md:block">
                  <div className="font-heading text-5xl font-bold mb-1">25+</div>
                  <div className="font-mono text-xs uppercase font-bold tracking-wider">Years of Excellence</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} className="p-8 border border-border bg-background">
              <Target className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-heading text-2xl font-bold uppercase mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver comprehensive, safe, and efficient industrial solutions that maximize the operational success and asset longevity of our clients.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="p-8 border border-border bg-background">
              <Eye className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-heading text-2xl font-bold uppercase mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the undisputed industry leader in technical execution, recognized globally for setting the standard in safety, quality, and innovation.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="p-8 border border-border bg-background">
              <ShieldCheck className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-heading text-2xl font-bold uppercase mb-4">Our Values</h3>
              <ul className="text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Safety First:</strong> Zero incidents is the only acceptable goal.</li>
                <li><strong className="text-foreground">Integrity:</strong> Honest, transparent partnerships.</li>
                <li><strong className="text-foreground">Excellence:</strong> Precision in every weld, every connection.</li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SAFETY & COMPLIANCE */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="font-heading text-4xl font-bold uppercase mb-6">Safety & Compliance</h2>
              <p className="text-muted-foreground text-lg mb-12">
                Safety is not a manual; it is our culture. We maintain rigorous compliance with all international, federal, and state regulations.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['OSHA Compliant', 'ISNetworld', 'ASME Certified', 'API Standards'].map((cert, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="flex flex-col items-center justify-center p-6 border border-border bg-card">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-sm text-center uppercase tracking-wider">{cert}</h4>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-16">
            <h2 className="font-heading text-4xl font-bold uppercase">Executive <span className="text-primary">Leadership</span></h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "James Harrison", role: "Chief Executive Officer" },
              { name: "Robert Vance", role: "VP of Operations" },
              { name: "Sarah Jenkins", role: "Director of HSE" },
              { name: "Michael Chang", role: "Chief Engineer" }
            ].map((leader, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="group">
                <div className="aspect-square bg-secondary mb-4 border border-border flex items-center justify-center text-muted-foreground/30 relative overflow-hidden">
                  <Users className="w-16 h-16" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-heading text-xl font-bold">{leader.name}</h3>
                <p className="text-primary text-sm font-mono uppercase">{leader.role}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
