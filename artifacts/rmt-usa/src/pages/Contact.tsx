import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { useSEO } from "@/lib/seo";

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
    address: "RMT USA Inc.\nUnited States of America",
    phone: "+1 (800) 555-0199",
    email: "usa@rmt-usa.com",
  },
  {
    city: "Germany",
    label: "European Office",
    address: "RMT Europe GmbH\nGermany",
    phone: "+49 (0) 89 555 0199",
    email: "europe@rmt-usa.com",
  },
  {
    city: "UAE",
    label: "Middle East Office",
    address: "RMT Middle East FZ-LLC\nUnited Arab Emirates",
    phone: "+971 4 555 0199",
    email: "me@rmt-usa.com",
  },
];

const services = [
  "Product Design & Prototyping",
  "Regulatory Compliance",
  "Software & AI Solutions",
  "Quality Testing",
  "Electronics & Firmware Development",
  "Turnkey Commissioning & Regulatory Approvals",
  "Pharmaceutical Product Development",
  "Contract Manufacturing",
  "General Enquiry",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  useSEO({
    title: "Contact Us",
    description: "Contact RMT USA for medical device development, regulatory compliance, software & AI, quality testing, and contract manufacturing enquiries. Offices in USA, Europe, and Middle East.",
    keywords: "contact RMT USA, medical device development enquiry, regulatory compliance consultation, contract manufacturing quote",
  });

  const onSubmit = (data: FormData) => {
    console.log("Contact form submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* HERO */}
      <section className="py-20 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-5">Contact RMT USA</h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              Ready to discuss your medical device project? Our experts are here to help. Reach out and we will respond within one business day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* FORM */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-card border border-border rounded-xl p-12 text-center"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Message Sent</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Thank you for reaching out. A member of our team will review your message and respond within one business day.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                        <input
                          data-testid="input-contact-name"
                          {...register("name", { required: "Name is required" })}
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                        />
                        {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                        <input
                          data-testid="input-contact-company"
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
                          data-testid="input-contact-email"
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
                          data-testid="input-contact-phone"
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
                        data-testid="select-contact-service"
                        {...register("service", { required: "Please select a service" })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && <p className="text-destructive text-xs mt-1">{errors.service.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                      <textarea
                        data-testid="textarea-contact-message"
                        {...register("message", { required: "Please provide a message" })}
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        rows={5}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm resize-none"
                      />
                      {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    <Button type="submit" size="lg" className="w-full rounded-lg h-11 font-semibold" data-testid="button-contact-submit">
                      Send Message <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* SIDEBAR INFO */}
            <div className="space-y-5">
              <AnimatedSection delay={0.1}>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-2.5 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Response Time</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We respond to all enquiries within <strong className="text-foreground">1 business day</strong>. For urgent matters, please call our main office directly.
                  </p>
                </div>
              </AnimatedSection>

              {offices.map((office, i) => (
                <AnimatedSection key={office.city} delay={0.15 + i * 0.08}>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold px-2 py-0.5 bg-primary/10 text-primary rounded-full">{office.label}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-3">{office.city}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm whitespace-pre-line">{office.address}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-primary shrink-0" />
                        <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                          {office.phone}
                        </a>
                      </li>
                      <li className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-primary shrink-0" />
                        <a href={`mailto:${office.email}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                          {office.email}
                        </a>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
              ))}

              <AnimatedSection delay={0.35}>
                <div className="bg-primary rounded-xl p-6 text-white">
                  <h3 className="font-heading text-lg font-bold mb-2">Need Immediate Help?</h3>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">For urgent regulatory or technical enquiries, speak directly with one of our experts.</p>
                  <a
                    href="tel:+18005550199"
                    data-testid="link-contact-phone-cta"
                    className="inline-flex items-center gap-2 bg-white text-primary font-semibold text-sm px-4 py-2 rounded-lg hover:bg-white/90 transition-colors"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
