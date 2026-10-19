import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, ArrowRight, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { useSEO } from "@/lib/seo";
import { getRouteSeo } from "@/lib/route-seo";
import { ALL_SERVICES } from "@/data/services";
import { CONTACT_FAQS } from "@/data/money-page-faqs";
import { LogoSpinner } from "@/components/shared/LogoSpinner";
import { sendFormEmail, getFriendlyFormError } from "@/lib/email";

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
    address: "St. Cloud Edgewater Business Centre\nSartell, Minnesota 56377, United States",
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
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  useSEO(getRouteSeo("/contact"));

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    setSubmitting(true);
    try {
      await sendFormEmail("contact", {
        name: data.name,
        company: data.company || "Not provided",
        email: data.email,
        phone: data.phone || "Not provided",
        service: data.service,
        message: data.message,
        subject: `Contact Enquiry: ${data.service} — ${data.name}`,
      });
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 8000);
    } catch (err) {
      console.error("Contact email failed:", err);
      setSubmitError(getFriendlyFormError(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* HERO */}
      <section className="relative min-h-[380px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8fhB8TId2hQbaX3OSbNQn1h_kqezihZdsrVXa-ZFvOg&s=10')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/82 to-primary/50" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="page-container text-center relative z-10 py-20">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Get in Touch</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-5">
              Contact a Medical Device Manufacturer
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
              Request a quote for ISO 13485 manufacturing, device R&D, SaMD software, testing, or FDA/EU MDR support.
              Sartell, MN headquarters — we respond within one business day.
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

      {/* CONTACT FORM */}
      <section className="py-20">
        <div className="page-container max-w-3xl">
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

                {submitError && (
                  <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2">
                    {submitError}
                  </p>
                )}

                <Button type="submit" size="lg" disabled={submitting} className="w-full rounded-lg h-11 font-semibold">
                  Send Message <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 border-t border-border bg-secondary/20">
        <div className="page-container max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
              Contact FAQs
            </h2>
            <div className="space-y-6">
              {CONTACT_FAQS.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
