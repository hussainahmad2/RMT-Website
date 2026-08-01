import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Shield, Heart, Briefcase } from "lucide-react";
import { useForm } from "react-hook-form";
import { useSEO } from "@/lib/seo";
import { sendFormEmail, getFriendlyFormError } from "@/lib/email";
import { FileUploadField } from "@/components/shared/FileUploadField";

const benefits = [
  { icon: <TrendingUp className="w-5 h-5" />, title: "Career Growth", description: "Structured career development pathways, mentoring, and continuous learning opportunities in medical technology." },
  { icon: <Shield className="w-5 h-5" />, title: "Meaningful Work", description: "Contribute to medical devices that directly improve patient lives — work with purpose every day." },
  { icon: <Users className="w-5 h-5" />, title: "Expert Team", description: "Work alongside leading regulatory, engineering, and scientific professionals from around the world." },
  { icon: <Heart className="w-5 h-5" />, title: "Comprehensive Benefits", description: "Competitive salary, health insurance, flexible working arrangements, and professional development funding." },
];

const POSITION_OPTIONS = [
  "Regulatory Affairs",
  "Medical Device Design / Engineering",
  "Software & SaMD",
  "Quality Engineering",
  "Electronics & Firmware",
  "Project Management",
  "General Enquiry / Speculative",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
}

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  useSEO({
    title: "Careers",
    description: "Join RMT USA's growing team of medical device experts. Submit a speculative application for regulatory, engineering, software, and quality roles.",
    keywords: "medical device careers, regulatory affairs jobs, medical device engineer jobs, SaMD software engineer, quality engineer medical device",
    path: "/careers",
  });

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    setFileError(null);
    setSubmitting(true);
    try {
      await sendFormEmail(
        "career",
        {
          name: data.name,
          email: data.email,
          phone: data.phone || "Not provided",
          position: data.position,
          message: data.message,
          subject: `Career Application: ${data.position} — ${data.name}`,
        },
        { files }
      );
      setSubmitted(true);
      reset();
      setFiles([]);
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error("Career email failed:", err);
      setSubmitError(getFriendlyFormError(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-background min-h-screen pt-16 sm:pt-[4.5rem]">

      {/* HERO */}
      <PageHero
        eyebrow="Join Our Team"
        title="Careers at RMT USA"
        description="Build your career at the intersection of medical technology, regulatory science, and engineering excellence. Help us bring life-changing devices to market."
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
        fullHeight
      >
        {["50+ Expert Team", "Remote-Friendly Roles", "Global Offices"].map((b) => (
          <div key={b} className="flex items-center gap-2 text-sm text-white/65">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {b}
          </div>
        ))}
      </PageHero>

      {/* WHY JOIN */}
      <section className="py-20 bg-background">
        <div className="page-container">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Why RMT USA</p>
            <h2 className="font-heading text-4xl font-bold text-foreground">Why Work With Us</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  {b.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NO CURRENT OPENINGS */}
      <section className="py-20 bg-secondary/30">
        <div className="page-container">
          <AnimatedSection className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Open Roles</p>
            <h2 className="font-heading text-4xl font-bold text-foreground">Current Openings</h2>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto bg-card border border-border rounded-xl p-10 text-center"
          >
            <div className="w-14 h-14 bg-muted text-muted-foreground rounded-xl flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">No Current Job Openings</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We do not have any open positions at the moment. You are welcome to submit a speculative application below — we review every submission and will reach out when a suitable role becomes available.
            </p>
            <Button
              size="sm"
              className="rounded-lg"
              onClick={() => document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Submit an Application
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply-form" className="py-20 bg-background">
        <div className="page-container">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection className="text-center mb-10">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Apply Now</p>
              <h2 className="font-heading text-4xl font-bold text-foreground">Submit Your Application</h2>
              <p className="text-muted-foreground mt-3">We review every application and will contact suitable candidates when a matching role opens.</p>
            </AnimatedSection>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-border rounded-xl p-10 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Application Received</h3>
                <p className="text-muted-foreground">Thank you for your interest in joining RMT USA. Our team will review your application and be in touch shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-border rounded-xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                    <input
                      data-testid="input-applicant-name"
                      {...register("name", { required: "Name is required" })}
                      placeholder="Your full name"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                    <input
                      data-testid="input-applicant-email"
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                    <input
                      data-testid="input-applicant-phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Area of Interest *</label>
                    <select
                      data-testid="select-applicant-position"
                      {...register("position", { required: "Please select an area of interest" })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                    >
                      <option value="">Select an area...</option>
                      {POSITION_OPTIONS.map((pos) => (
                        <option key={pos} value={pos}>{pos}</option>
                      ))}
                    </select>
                    {errors.position && <p className="text-destructive text-xs mt-1">{errors.position.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Cover Letter / Message *</label>
                  <textarea
                    data-testid="textarea-applicant-message"
                    {...register("message", { required: "Please tell us about yourself" })}
                    placeholder="Tell us about your experience, why you want to join RMT USA, and what you would bring to the team..."
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm resize-none"
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
                </div>

                <FileUploadField
                  files={files}
                  onChange={setFiles}
                  label="Upload CV / Documents"
                  hint="Attach your CV/resume, portfolio, or supporting documents (optional)."
                  error={fileError}
                  onError={setFileError}
                  testId="input-applicant-files"
                />

                {submitError && (
                  <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2">
                    {submitError}
                  </p>
                )}

                <Button type="submit" disabled={submitting} className="w-full rounded-lg h-11 font-semibold" data-testid="button-submit-application">
                  {submitting ? "Sending…" : "Submit Application"} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
