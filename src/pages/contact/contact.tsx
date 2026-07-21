import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { useSEO } from "@/lib/seo";
import { ALL_SERVICES } from "@/data/services";
import { LogoSpinner } from "@/components/LogoSpinner";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const offices = [
  {
    city: "United States",
    label: "Headquarters",
    address: "St. Cloud Edgewater Business Centre\nSartell, Minnesota, United States",
    email: "info@rmt-usa.com",
  },
  {
    city: "Pakistan",
    label: "South Asia Office",
    address: "Building 2A, W1 Street\nRawat Industrial Estate, Islamabad, 46220",
    email: "info@rmt-usa.com",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  useSEO({
    title: "Contact Us",
    description: "Contact RMT Medical Technologies for medical device development, regulatory compliance, software & AI, quality testing, and contract manufacturing enquiries. Offices in USA and Pakistan.",
    keywords: "contact RMT medical technologies, medical device enquiry, regulatory compliance consultation",
    path: "/contact",
  });

  const onSubmit = (data: FormData) => {
    console.log("Contact form:", data);
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 8000);
    }, 1200);
  };

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* HERO */}
      <section className="relative min-h-[380px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/82 to-primary/50" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="page-container text-center relative z-10 py-20">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Get in Touch</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-5">Contact <span className="text-primary">RMT</span></h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
              Ready to discuss your medical device project? Our experts are here to help — we respond within one business day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* OFFICE CARDS */}
      <section className="py-12 bg-secondary/30 border-b border-border">
        <div className="page-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {offices.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-5 text-center"
              >
                <div className="flex justify-center mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 bg-primary/10 text-primary rounded-full">{office.label}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{office.city}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start justify-center gap-2">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-xs whitespace-pre-line text-center">{office.address}</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-muted-foreground text-xs hover:text-primary transition-colors">{office.email}</a>
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="py-20">
        <div className="page-container">
          <div className="grid lg:grid-cols-3 gap-10 items-stretch">

            {/* FORM */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>

                {submitting ? (
                  <div className="bg-card border border-border rounded-2xl p-16 flex flex-col items-center justify-center gap-4">
                    <LogoSpinner size="lg" label="Sending your message..." />
                  </div>
                ) : submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-card border border-border rounded-2xl p-12 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Message Sent</h3>
                    <p className="text-muted-foreground">Thank you — a member of our team will respond within one business day.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-border rounded-2xl p-8 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                        <input
                          {...register("name", { required: "Name is required" })}
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                        />
                        {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                        <input
                          {...register("company")}
                          placeholder="Your company name"
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } })}
                          placeholder="your@company.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                        />
                        {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          {...register("phone")}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Service of Interest *</label>
                      <select
                        {...register("service", { required: "Please select a service" })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                      >
                        <option value="">Select a service...</option>
                        {ALL_SERVICES.map((s) => (
                          <option key={s.slug} value={s.name}>{s.name}</option>
                        ))}
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                      {errors.service && <p className="text-destructive text-xs mt-1">{errors.service.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                      <textarea
                        {...register("message", { required: "Please provide a message" })}
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        rows={5}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm resize-none"
                      />
                      {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    <Button type="submit" size="lg" className="w-full rounded-lg h-11 font-semibold">
                      Send Message <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* SIDEBAR */}
            <div className="grid gap-5 h-full content-stretch">
              <AnimatedSection delay={0.1} className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Response Time</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We respond to all enquiries within <strong className="text-foreground">1 business day</strong>. For urgent matters, please call our main office directly.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15} className="bg-primary rounded-2xl p-6 text-white">
                <h3 className="font-heading text-lg font-bold mb-2">Need Immediate Help?</h3>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">For urgent regulatory or technical enquiries, speak directly with one of our experts.</p>
                <a
                  href="mailto:info@rmt-usa.com"
                  className="inline-flex items-center gap-2 bg-white text-primary font-semibold text-sm px-4 py-2 rounded-lg hover:bg-white/90 transition-colors"
                >
                  <Mail className="w-4 h-4" /> Email Now
                </a>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="bg-card border border-border rounded-2xl p-6">
                <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-widest">Our Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {["ISO 13485:2016", "FDA Registered", "CE Mark", "ISO 14971", "IEC 62304"].map((cert) => (
                    <span key={cert} className="text-xs px-3 py-1.5 border border-primary/30 bg-primary/5 text-primary rounded-lg font-medium">
                      {cert}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
