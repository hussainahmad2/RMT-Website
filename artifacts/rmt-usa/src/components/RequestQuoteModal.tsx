import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, ArrowRight, ArrowLeft, CheckCircle, Cpu, Shield, Brain,
  FlaskConical, CircuitBoard, Settings2, Pill, Factory,
  DollarSign, Calendar, User, Mail, Phone, Building2, FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuoteFormData {
  services: string[];
  projectType: string;
  projectScope: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const SERVICES = [
  { id: "product-design", label: "Product Design & Prototyping", icon: <Cpu className="w-4 h-4" /> },
  { id: "regulatory-compliance", label: "Regulatory Compliance (FDA/CE)", icon: <Shield className="w-4 h-4" /> },
  { id: "software-ai", label: "Software & AI Solutions", icon: <Brain className="w-4 h-4" /> },
  { id: "quality-testing", label: "Quality Testing", icon: <FlaskConical className="w-4 h-4" /> },
  { id: "electronics-firmware", label: "Electronics & Firmware", icon: <CircuitBoard className="w-4 h-4" /> },
  { id: "turnkey-commissioning", label: "Turnkey Commissioning", icon: <Settings2 className="w-4 h-4" /> },
  { id: "pharmaceutical", label: "Pharmaceutical Development", icon: <Pill className="w-4 h-4" /> },
  { id: "contract-manufacturing", label: "Contract Manufacturing", icon: <Factory className="w-4 h-4" /> },
];

const PROJECT_TYPES = [
  "New Medical Device Development",
  "Regulatory Submission (FDA / CE)",
  "Quality System Implementation",
  "Software / SaMD Development",
  "Contract Manufacturing",
  "Existing Device Modification",
  "Post-Market Surveillance",
  "Other / General Enquiry",
];

const BUDGETS = [
  "Under $25,000",
  "$25,000 – $100,000",
  "$100,000 – $500,000",
  "$500,000 – $1,000,000",
  "Over $1,000,000",
  "To be discussed",
];

const TIMELINES = [
  "Less than 3 months",
  "3 – 6 months",
  "6 – 12 months",
  "12 – 24 months",
  "Over 24 months",
  "Flexible / TBD",
];

const STEPS = [
  { label: "Services", description: "Select what you need" },
  { label: "Project", description: "Tell us about the project" },
  { label: "Budget & Timeline", description: "Scope & schedule" },
  { label: "Contact", description: "Your details" },
];

interface RequestQuoteModalProps {
  open: boolean;
  onClose: () => void;
}

export function RequestQuoteModal({ open, onClose }: RequestQuoteModalProps) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<QuoteFormData>({
    services: [],
    projectType: "",
    projectScope: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const toggleService = (id: string) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(id)
        ? f.services.filter((s) => s !== id)
        : [...f.services, id],
    }));
  };

  const canProceed = () => {
    if (step === 0) return form.services.length > 0;
    if (step === 1) return form.projectType !== "" && form.projectScope.trim() !== "";
    if (step === 2) return form.budget !== "" && form.timeline !== "";
    if (step === 3) return form.name.trim() !== "" && form.email.trim() !== "";
    return true;
  };

  const handleSubmit = () => {
    console.log("Quote request submitted:", form);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(0);
      setSubmitted(false);
      setForm({ services: [], projectType: "", projectScope: "", budget: "", timeline: "", name: "", email: "", phone: "", company: "", message: "" });
    }, 350);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl bg-background border border-border rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border shrink-0">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground">Request a Quote</h2>
                <p className="text-muted-foreground text-sm mt-0.5">Get a tailored proposal for your project</p>
              </div>
              <button
                onClick={handleClose}
                className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress */}
            {!submitted && (
              <div className="px-6 pt-4 pb-2 shrink-0">
                <div className="flex items-center gap-1.5">
                  {STEPS.map((s, i) => (
                    <React.Fragment key={s.label}>
                      <div className="flex items-center gap-1.5">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-300 ${
                            i < step
                              ? "bg-primary text-primary-foreground"
                              : i === step
                              ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                        </div>
                        <span className={`text-xs hidden sm:block ${i === step ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                          {s.label}
                        </span>
                      </div>
                      {i < STEPS.length - 1 && (
                        <div className={`flex-1 h-0.5 rounded-full transition-all duration-500 ${i < step ? "bg-primary" : "bg-border"}`} />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">Quote Request Received</h3>
                  <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-foreground">{form.name}</strong>. Our team will review your requirements and send a tailored proposal within <strong className="text-foreground">2 business days</strong>.
                  </p>
                  <div className="bg-secondary/50 border border-border rounded-xl p-4 text-left max-w-sm mx-auto space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Your Selections</p>
                    <p className="text-sm text-foreground"><span className="text-muted-foreground">Services:</span> {form.services.length} selected</p>
                    <p className="text-sm text-foreground"><span className="text-muted-foreground">Project Type:</span> {form.projectType}</p>
                    <p className="text-sm text-foreground"><span className="text-muted-foreground">Budget:</span> {form.budget}</p>
                    <p className="text-sm text-foreground"><span className="text-muted-foreground">Timeline:</span> {form.timeline}</p>
                  </div>
                  <Button onClick={handleClose} className="mt-2 rounded-xl">
                    Close
                  </Button>
                </motion.div>
              ) : (
                <AnimatePresence mode="wait">
                  {/* STEP 0 — Services */}
                  {step === 0 && (
                    <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }}>
                      <p className="text-sm text-muted-foreground mb-4">Select one or more services you need (required)</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {SERVICES.map((svc) => {
                          const selected = form.services.includes(svc.id);
                          return (
                            <button
                              key={svc.id}
                              onClick={() => toggleService(svc.id)}
                              className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 ${
                                selected
                                  ? "border-primary bg-primary/8 text-foreground ring-1 ring-primary/30"
                                  : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-primary/5"
                              }`}
                            >
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${selected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                                {svc.icon}
                              </div>
                              <span className="text-sm font-medium leading-tight">{svc.label}</span>
                              {selected && <CheckCircle className="w-4 h-4 text-primary ml-auto shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 1 — Project */}
                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Project Type *</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {PROJECT_TYPES.map((pt) => (
                            <button
                              key={pt}
                              onClick={() => setForm((f) => ({ ...f, projectType: pt }))}
                              className={`px-4 py-2.5 rounded-xl border text-sm text-left transition-all ${
                                form.projectType === pt
                                  ? "border-primary bg-primary/8 text-foreground ring-1 ring-primary/30"
                                  : "border-border bg-card text-foreground hover:border-primary/40"
                              }`}
                            >
                              {pt}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          <FileText className="inline w-4 h-4 mr-1.5 text-muted-foreground" />
                          Project Scope *
                        </label>
                        <textarea
                          value={form.projectScope}
                          onChange={(e) => setForm((f) => ({ ...f, projectScope: e.target.value }))}
                          placeholder="Briefly describe your device, target market, current stage, and key challenges..."
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm resize-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2 — Budget & Timeline */}
                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          <DollarSign className="inline w-4 h-4 mr-1.5 text-muted-foreground" />
                          Estimated Budget *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                          {BUDGETS.map((b) => (
                            <button
                              key={b}
                              onClick={() => setForm((f) => ({ ...f, budget: b }))}
                              className={`px-3 py-2.5 rounded-xl border text-sm text-center transition-all ${
                                form.budget === b
                                  ? "border-primary bg-primary/8 text-foreground ring-1 ring-primary/30 font-medium"
                                  : "border-border bg-card text-foreground hover:border-primary/40"
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          <Calendar className="inline w-4 h-4 mr-1.5 text-muted-foreground" />
                          Project Timeline *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                          {TIMELINES.map((t) => (
                            <button
                              key={t}
                              onClick={() => setForm((f) => ({ ...f, timeline: t }))}
                              className={`px-3 py-2.5 rounded-xl border text-sm text-center transition-all ${
                                form.timeline === t
                                  ? "border-primary bg-primary/8 text-foreground ring-1 ring-primary/30 font-medium"
                                  : "border-border bg-card text-foreground hover:border-primary/40"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3 — Contact */}
                  {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">
                            <User className="inline w-3.5 h-3.5 mr-1 text-muted-foreground" />
                            Full Name *
                          </label>
                          <input
                            value={form.name}
                            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                            placeholder="Your name"
                            className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">
                            <Mail className="inline w-3.5 h-3.5 mr-1 text-muted-foreground" />
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                            placeholder="your@company.com"
                            className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">
                            <Phone className="inline w-3.5 h-3.5 mr-1 text-muted-foreground" />
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">
                            <Building2 className="inline w-3.5 h-3.5 mr-1 text-muted-foreground" />
                            Company / Organisation
                          </label>
                          <input
                            value={form.company}
                            onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                            placeholder="Your company name"
                            className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Additional Notes
                        </label>
                        <textarea
                          value={form.message}
                          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                          placeholder="Any additional context, questions, or specific requirements..."
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm resize-none"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        By submitting, you agree that RMT USA may contact you regarding your enquiry. We respect your privacy and never share your data.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>

            {/* Footer actions */}
            {!submitted && (
              <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-border bg-background shrink-0">
                <div className="text-xs text-muted-foreground">
                  Step {step + 1} of {STEPS.length}
                </div>
                <div className="flex gap-2.5">
                  {step > 0 && (
                    <Button
                      variant="outline"
                      onClick={() => setStep((s) => s - 1)}
                      className="rounded-xl"
                    >
                      <ArrowLeft className="w-4 h-4 mr-1.5" />
                      Back
                    </Button>
                  )}
                  {step < STEPS.length - 1 ? (
                    <Button
                      onClick={() => setStep((s) => s + 1)}
                      disabled={!canProceed()}
                      className="rounded-xl"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={!canProceed()}
                      className="rounded-xl"
                    >
                      Submit Request
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
