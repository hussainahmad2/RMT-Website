import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowRight, Users, TrendingUp, Shield, Heart, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { useForm } from "react-hook-form";
import { useSEO } from "@/lib/seo";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const jobs: Job[] = [
  {
    id: "1",
    title: "Regulatory Affairs Specialist",
    department: "Regulatory",
    location: "USA / Remote",
    type: "Full-time",
    description: "Lead regulatory submissions for FDA 510(k), PMA, and EU MDR technical files. Serve as regulatory liaison with notified bodies and competent authorities.",
    requirements: ["3+ years regulatory affairs experience", "Knowledge of FDA 21 CFR Part 820, EU MDR", "Experience with ISO 13485", "Strong technical writing skills", "Degree in Life Sciences, Engineering, or related field"],
  },
  {
    id: "2",
    title: "Medical Device Design Engineer",
    department: "Product Design",
    location: "USA",
    type: "Full-time",
    description: "Design and develop medical devices from concept through design freeze, applying Design Controls per 21 CFR 820.30 and ISO 13485.",
    requirements: ["5+ years medical device design experience", "Proficiency in SolidWorks or CATIA", "Understanding of design controls and DHF", "Experience with risk management per ISO 14971", "BSc/MSc Mechanical or Biomedical Engineering"],
  },
  {
    id: "3",
    title: "Software Engineer — Medical Devices (SaMD)",
    department: "Software & AI",
    location: "USA / Remote",
    type: "Full-time",
    description: "Develop software for medical devices and SaMD applications compliant with IEC 62304, including embedded firmware and cloud-connected health platforms.",
    requirements: ["4+ years software development experience", "Knowledge of IEC 62304 and FDA SaMD guidance", "Experience with embedded C/C++ or Python/TypeScript", "Familiarity with cybersecurity for medical devices", "BSc Computer Science or Software Engineering"],
  },
  {
    id: "4",
    title: "Quality Engineer",
    department: "Quality Testing",
    location: "USA",
    type: "Full-time",
    description: "Drive quality system implementation, CAPA management, supplier quality, and design verification & validation activities under ISO 13485.",
    requirements: ["3+ years quality engineering in medical devices", "ISO 13485:2016 QMS experience", "CAPA, NCR, and complaint handling", "Experience with IQ/OQ/PQ validation", "ASQ CQE or CQA certification preferred"],
  },
  {
    id: "5",
    title: "Electronics & Firmware Engineer",
    department: "Electronics",
    location: "USA / UAE",
    type: "Full-time",
    description: "Design analog and digital circuits and develop embedded firmware for medical-grade devices, ensuring compliance with IEC 60601 safety standards.",
    requirements: ["4+ years medical electronics experience", "PCB layout with Altium or KiCad", "Embedded firmware in C/C++", "IEC 60601-1 compliance knowledge", "BSc/MSc Electrical or Electronic Engineering"],
  },
  {
    id: "6",
    title: "Project Manager — Medical Device Development",
    department: "Operations",
    location: "USA / Remote",
    type: "Full-time",
    description: "Manage multi-disciplinary medical device development projects from initiation through regulatory approval, ensuring on-time, on-budget delivery.",
    requirements: ["5+ years project management in medtech", "PMP or Prince2 certification", "Experience managing FDA/EU MDR submissions", "Strong stakeholder communication skills", "BSc Engineering, Life Sciences, or Business"],
  },
];

const benefits = [
  { icon: <TrendingUp className="w-5 h-5" />, title: "Career Growth", description: "Structured career development pathways, mentoring, and continuous learning opportunities in medical technology." },
  { icon: <Shield className="w-5 h-5" />, title: "Meaningful Work", description: "Contribute to medical devices that directly improve patient lives — work with purpose every day." },
  { icon: <Users className="w-5 h-5" />, title: "Expert Team", description: "Work alongside leading regulatory, engineering, and scientific professionals from around the world." },
  { icon: <Heart className="w-5 h-5" />, title: "Comprehensive Benefits", description: "Competitive salary, health insurance, flexible working arrangements, and professional development funding." },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
}

export default function Careers() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  useSEO({
    title: "Careers",
    description: "Join RMT USA's growing team of medical device experts. We are hiring regulatory affairs specialists, medical device engineers, software developers, quality engineers, and more.",
    keywords: "medical device careers, regulatory affairs jobs, medical device engineer jobs, SaMD software engineer, quality engineer medical device",
  });

  const onSubmit = (data: FormData) => {
    console.log("Application submitted:", data);
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
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Join Our Team</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-5">Careers at RMT USA</h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Build your career at the intersection of medical technology, regulatory science, and engineering excellence. Help us bring life-changing devices to market.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
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

      {/* JOB LISTINGS */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Open Roles</p>
            <h2 className="font-heading text-4xl font-bold text-foreground">Current Openings</h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl overflow-hidden"
                data-testid={`card-job-${job.id}`}
              >
                <button
                  className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  data-testid={`button-expand-job-${job.id}`}
                >
                  <div className="flex items-start gap-4 min-w-0">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading text-lg font-bold text-foreground">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-1.5">
                        <span className="text-xs text-primary font-medium">{job.department}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 text-muted-foreground">
                    {expandedJob === job.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {expandedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 border-t border-border"
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed mt-4 mb-4">{job.description}</p>
                    <h4 className="font-semibold text-foreground text-sm mb-3">Requirements</h4>
                    <ul className="space-y-2 mb-5">
                      {job.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                    <Button size="sm" className="rounded-lg" data-testid={`button-apply-${job.id}`}
                      onClick={() => document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" })}>
                      Apply for This Role
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply-form" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection className="text-center mb-10">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Apply Now</p>
              <h2 className="font-heading text-4xl font-bold text-foreground">Submit Your Application</h2>
              <p className="text-muted-foreground mt-3">We review every application and will contact suitable candidates within 5 business days.</p>
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
                    <label className="block text-sm font-medium text-foreground mb-1.5">Position of Interest *</label>
                    <select
                      data-testid="select-applicant-position"
                      {...register("position", { required: "Please select a position" })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                    >
                      <option value="">Select a position...</option>
                      {jobs.map((job) => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                      <option value="General Enquiry">General Enquiry / Speculative</option>
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

                <p className="text-xs text-muted-foreground">
                  Please email your CV/resume to <a href="mailto:careers@rmt-usa.com" className="text-primary hover:underline">careers@rmt-usa.com</a> along with your application.
                </p>

                <Button type="submit" className="w-full rounded-lg h-11 font-semibold" data-testid="button-submit-application">
                  Submit Application <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
