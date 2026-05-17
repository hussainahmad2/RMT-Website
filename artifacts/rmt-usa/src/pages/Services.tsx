import React from "react";
import { Link } from "wouter";
import { Cpu, Shield, Brain, FlaskConical, CircuitBoard, Settings2, Pill, Factory, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";

export interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  overview: string[];
  icon: React.ReactNode;
  iconName: string;
  subServices: string[];
  capabilities: string[];
  whyRMT: { title: string; desc: string }[];
  keywords: string;
}

export const ALL_SERVICES: ServiceData[] = [
  {
    slug: "product-design",
    name: "Product Design & Prototyping",
    tagline: "From concept to functional prototype — precision engineering at every step.",
    description: "Comprehensive product design and prototyping for medical devices, from initial 3D modelling through PCB design, additive manufacturing, and subtractive machining.",
    overview: [
      "RMT USA's product design team bridges the gap between innovative concepts and market-ready medical devices. We combine advanced CAD/CAM technologies with deep knowledge of medical device standards to produce designs that are both functional and manufacturable.",
      "Our prototyping capabilities span multiple technologies — from rapid 3D printing for early-stage validation to precision CNC machining for pre-production units. Every prototype is developed with your regulatory pathway in mind, ensuring smooth transition from design to approval.",
      "Whether you need a single proof-of-concept model or a full design-freeze package ready for V&V testing, our engineering team delivers on time, on spec, and on budget.",
    ],
    icon: <Cpu className="w-6 h-6" />,
    iconName: "Cpu",
    subServices: ["3D Design & Modelling", "PCB Design", "Additive Manufacturing", "Subtractive Manufacturing", "PCB Manufacturing"],
    capabilities: ["SolidWorks & CATIA Design", "FEA & Simulation Analysis", "Design for Manufacturability (DFM)", "Design for Assembly (DFA)", "Risk-Based Design Controls", "Design History File (DHF) Management"],
    whyRMT: [
      { title: "Regulatory-Ready Design", desc: "Every design decision is documented to support your regulatory submission." },
      { title: "Multi-Technology Prototyping", desc: "From SLA/SLS to CNC to injection moulding — we select the right technology for your stage." },
      { title: "Speed to Prototype", desc: "Rapid iteration cycles reduce development time and cost significantly." },
    ],
    keywords: "medical device product design, prototyping, 3D modelling, PCB design, additive manufacturing",
  },
  {
    slug: "regulatory-compliance",
    name: "Regulatory Compliance",
    tagline: "Navigate FDA, CE, and global regulatory pathways with confidence.",
    description: "Expert regulatory affairs services covering technical file preparation, clinical evaluations, quality management system implementation, and ISO certifications for medical devices.",
    overview: [
      "Regulatory compliance is the cornerstone of successful medical device commercialization. RMT USA's regulatory affairs experts have deep knowledge of FDA 510(k)/PMA, EU MDR, ISO 13485, and other international frameworks.",
      "We prepare comprehensive technical documentation packages, conduct gap analyses against applicable standards, and work alongside your team to build a quality management system that satisfies both regulatory requirements and operational efficiency.",
      "Our proven track record includes successful submissions for Class I, II, and III medical devices across multiple jurisdictions, with a regulatory approval rate exceeding 98%.",
    ],
    icon: <Shield className="w-6 h-6" />,
    iconName: "Shield",
    subServices: ["Technical File Preparation for FDA/CE", "Clinical Evaluation Report (CER)", "Biological Evaluation Report (BER)", "Implementation of Quality Management System", "ISO 13485: Compliance & Certification", "ISO 14971: Risk Management & Analysis", "Software as a Medical Device (SaMD)"],
    capabilities: ["FDA 510(k) & PMA Submissions", "EU MDR/IVDR Technical Files", "Post-Market Surveillance Systems", "PMCF Study Design", "Notified Body Interactions", "CAPA Management Systems"],
    whyRMT: [
      { title: "98% Approval Rate", desc: "Our regulatory submissions have an exceptional track record across all device classes." },
      { title: "Multi-Jurisdictional Expertise", desc: "FDA, EU MDR, Health Canada, TGA, and more — one partner for global compliance." },
      { title: "QMS Implementation", desc: "We don't just document your QMS — we implement and train your team to sustain it." },
    ],
    keywords: "regulatory compliance medical device, FDA CE approval, ISO 13485, clinical evaluation report, technical file",
  },
  {
    slug: "software-ai",
    name: "Software & AI Solutions",
    tagline: "Intelligent software powering next-generation medical devices.",
    description: "Full-spectrum software development including AI/ML, cloud, SaMD compliance, application development, and complete software validation lifecycle for medical technology.",
    overview: [
      "Software is increasingly at the heart of modern medical devices — from embedded firmware to cloud-connected diagnostic platforms. RMT USA's software engineering team brings healthcare-specific expertise to every development engagement.",
      "We develop software in compliance with IEC 62304, IEC 82304, and FDA guidance on Software as a Medical Device, ensuring your codebase meets the rigorous documentation and verification requirements of regulatory submissions.",
      "Our AI and machine learning capabilities extend to diagnostic algorithms, predictive maintenance, clinical decision support, and connected device data analytics — all developed with explainability and regulatory acceptance in mind.",
    ],
    icon: <Brain className="w-6 h-6" />,
    iconName: "Brain",
    subServices: ["AI & Machine Learning", "DevOps / Cloud Computing", "Application Development", "UI/UX Development", "Software Quality Assurance (SQA)", "Software Development Lifecycle (SDLC)", "Software Testing Lifecycle (STLC)", "Software as a Medical Device (SaMD)"],
    capabilities: ["IEC 62304 Compliant Development", "FDA SaMD Framework Compliance", "Cloud-Connected Device Platforms", "Machine Learning Model Validation", "Cybersecurity Risk Management", "Agile/Waterfall Regulated Development"],
    whyRMT: [
      { title: "Regulatory-Grade Code", desc: "All software developed with full traceability to regulatory requirements and standards." },
      { title: "AI Expertise", desc: "Validated AI/ML models for diagnostics, imaging analysis, and clinical decision support." },
      { title: "Full SDLC Support", desc: "From requirements through deployment, verification, and post-market monitoring." },
    ],
    keywords: "medical device software, AI machine learning healthcare, SaMD, IEC 62304, software as medical device",
  },
  {
    slug: "quality-testing",
    name: "Quality Testing",
    tagline: "Rigorous testing ensuring safety, performance, and regulatory compliance.",
    description: "Comprehensive quality testing services including bench testing, physico-chemical analysis, visual inspection, dimensional analysis, and simulation for medical devices and pharmaceuticals.",
    overview: [
      "Quality testing is integral to both product safety and regulatory compliance. RMT USA operates a well-equipped testing laboratory and works with accredited partners to deliver complete characterization of medical devices and pharmaceutical products.",
      "Our testing protocols are developed from applicable standards (ISO, ASTM, USP) and tailored to the specific requirements of your device class and intended use. Every test is fully documented to support Design Verification and Validation (V&V) activities.",
      "From early feasibility testing through pre-submission testing and ongoing quality control, our laboratory services provide the data you need to make confident design and regulatory decisions.",
    ],
    icon: <FlaskConical className="w-6 h-6" />,
    iconName: "FlaskConical",
    subServices: ["Quality Plan", "Bench Testing", "Physico-Chemical Testing", "Visual Inspection", "Dimensional Analysis", "Defect Analysis", "Packaging Integrity Testing", "Simulation"],
    capabilities: ["ISO 10993 Biocompatibility Testing", "IEC 60601 Electrical Safety Testing", "Sterility & Endotoxin Testing", "Accelerated Aging Studies", "Usability & Human Factors Studies", "Statistical Process Control (SPC)"],
    whyRMT: [
      { title: "Standards Expertise", desc: "Deep knowledge of ISO, ASTM, USP, and IEC standards relevant to your device type." },
      { title: "Full V&V Packages", desc: "Complete test reports formatted for FDA, EU MDR, and global regulatory submissions." },
      { title: "Fast Turnaround", desc: "Efficient laboratory workflows minimize testing delays in your development timeline." },
    ],
    keywords: "medical device quality testing, bench testing, physico-chemical testing, biocompatibility, design verification validation",
  },
  {
    slug: "electronics-firmware",
    name: "Electronics & Firmware Development",
    tagline: "Precision electronics for life-critical medical applications.",
    description: "End-to-end electronics and firmware development for medical devices — from initial electronics design through firmware development, design verification, and full validation.",
    overview: [
      "Medical-grade electronics demand a level of reliability, safety, and regulatory compliance that goes far beyond commercial electronics. RMT USA's electronics team designs hardware and firmware to meet the stringent requirements of IEC 60601, ISO 14708, and other applicable medical device standards.",
      "Our firmware development process is aligned with IEC 62304 software lifecycle requirements, ensuring full traceability between requirements, design, implementation, and verification. We develop embedded systems for a wide range of medical device applications, from simple sensors to complex multi-parameter monitoring systems.",
      "Design Verification and Validation (V&V) activities are planned from the outset, with dedicated test protocols that systematically verify performance against design inputs under worst-case operating conditions.",
    ],
    icon: <CircuitBoard className="w-6 h-6" />,
    iconName: "CircuitBoard",
    subServices: ["Firmware Design & Development", "Electronics Design & Development", "Design Verification & Validation"],
    capabilities: ["Schematic & PCB Layout Design", "FPGA & Microcontroller Development", "Real-Time Operating Systems (RTOS)", "Wireless Connectivity (BLE, Wi-Fi, LoRa)", "EMC/EMI Pre-Compliance Testing", "Design for IEC 60601 Safety"],
    whyRMT: [
      { title: "Medical-Grade Standards", desc: "All electronics designed to IEC 60601, ISO 14708, and other applicable standards." },
      { title: "Integrated Hardware-Firmware", desc: "Co-design of hardware and firmware minimizes integration issues and speeds development." },
      { title: "V&V Expertise", desc: "Structured verification and validation testing packages ready for regulatory submission." },
    ],
    keywords: "medical electronics design, firmware development, IEC 60601, design verification validation, embedded systems medical device",
  },
  {
    slug: "turnkey-commissioning",
    name: "Turnkey Commissioning & Regulatory Approvals",
    tagline: "Complete production line setup, validation, and regulatory approval.",
    description: "End-to-end turnkey commissioning of medical device production lines — from equipment supply through installation, qualification (IQ/OQ/PQ), training, and full regulatory approval.",
    overview: [
      "Establishing a compliant medical device manufacturing operation requires more than just equipment procurement. RMT USA provides a complete turnkey service — from production line design and equipment specification through installation, commissioning, and full performance qualification.",
      "Our commissioning team follows a structured GAMP 5-aligned approach with comprehensive Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ) protocols. Every step is documented to the standard required by regulatory authorities.",
      "We also manage the regulatory approval process for your manufacturing facility, supporting ISO 13485 implementation, FDA facility registration, CE manufacturing documentation, and notified body audits.",
    ],
    icon: <Settings2 className="w-6 h-6" />,
    iconName: "Settings2",
    subServices: ["Supply & Commission of RMT Production Machines", "Installation & Training", "Commissioning and Validation Support", "HR Training", "Operation and Performance Qualification (OQ/PQ)", "ISO 13485 Implementation & Certification", "Product Licensing & Regulatory Approval"],
    capabilities: ["IQ/OQ/PQ Protocol Development", "GAMP 5 Compliant Validation", "Cleanroom Design & Qualification", "Process Validation Studies", "Change Control Management", "Regulatory Audit Support"],
    whyRMT: [
      { title: "Turnkey Delivery", desc: "Single point of responsibility from equipment specification through regulatory approval." },
      { title: "Qualification Expertise", desc: "IQ/OQ/PQ protocols accepted by FDA, EMA, and other global regulators." },
      { title: "Training Programs", desc: "Comprehensive operator and technical training ensures sustainable compliance." },
    ],
    keywords: "medical device manufacturing commissioning, IQ OQ PQ qualification, ISO 13485 implementation, production line setup",
  },
  {
    slug: "pharmaceutical",
    name: "Pharmaceutical Product Development",
    tagline: "From formulation science to market-ready pharmaceutical products.",
    description: "Comprehensive pharmaceutical development services including drug formulation, coating, drug delivery system development, and recipe verification for pharmaceutical and combination products.",
    overview: [
      "RMT USA's pharmaceutical development team provides formulation expertise across a wide range of dosage forms — from solid oral formulations to complex parenteral drug products and drug-device combination products.",
      "Our scientists apply Quality by Design (QbD) principles throughout development, building in quality from the earliest formulation stages. This approach accelerates regulatory review and reduces the risk of post-approval changes.",
      "We have particular expertise in drug delivery systems for combination devices — including drug-eluting implants, pre-filled syringes, and inhaled drug products — bridging pharmaceutical and medical device regulatory requirements.",
    ],
    icon: <Pill className="w-6 h-6" />,
    iconName: "Pill",
    subServices: ["Pharmaceutical Formulation & Coating", "Drug Development & Delivery Systems", "Recipe Verification & Optimization"],
    capabilities: ["QbD Formulation Development", "Drug-Device Combination Products", "Analytical Method Development", "Stability Studies (ICH Guidelines)", "Scale-Up & Tech Transfer", "CMC Documentation for Regulatory Submission"],
    whyRMT: [
      { title: "QbD Approach", desc: "Quality by Design principles built into every formulation for regulatory efficiency." },
      { title: "Combination Product Expertise", desc: "Unique capability bridging drug and device regulatory requirements." },
      { title: "Scale-Up Ready", desc: "Formulations designed for smooth technology transfer to GMP manufacturing." },
    ],
    keywords: "pharmaceutical formulation development, drug delivery systems, drug device combination, QbD pharmaceutical",
  },
  {
    slug: "contract-manufacturing",
    name: "Contract Manufacturing",
    tagline: "GMP-compliant manufacturing for medical devices and biomaterials.",
    description: "Contract manufacturing services for active and non-active medical devices, injectables, wearables, implantable devices, biosensors, and specialized biomaterials under full GMP compliance.",
    overview: [
      "RMT USA provides contract manufacturing services for a comprehensive range of medical products — from simple non-active devices to complex active implantable devices and advanced biomaterials. Our manufacturing operations are conducted under a certified ISO 13485 quality management system.",
      "We work with companies at every scale, from clinical trial supply batches through commercial production. Our flexible manufacturing infrastructure accommodates rapid scale-up as your product transitions from development to commercialization.",
      "Our quality systems ensure full batch traceability, incoming material control, in-process inspection, and final release testing — providing the confidence you need when entrusting your products to a contract manufacturer.",
    ],
    icon: <Factory className="w-6 h-6" />,
    iconName: "Factory",
    subServices: ["Active Medical Devices", "Non-Active Medical Devices", "Injectables", "Wearables", "Drug Delivery Vehicles", "Intravascular Devices", "Implantable Devices", "Consumables / Components", "Biosensors", "Specialized Biomaterials"],
    capabilities: ["ISO 13485:2016 QMS", "Cleanroom Manufacturing (ISO 7/8)", "Sterile Manufacturing", "Full Batch Traceability", "Component & Raw Material Control", "Post-Market Surveillance Support"],
    whyRMT: [
      { title: "ISO 13485 Certified", desc: "Manufacturing under a fully certified and audited quality management system." },
      { title: "Broad Device Portfolio", desc: "Active, non-active, sterile, implantable, and advanced biomaterial manufacturing." },
      { title: "Scalable Capacity", desc: "From clinical batches to commercial-scale production with consistent quality." },
    ],
    keywords: "medical device contract manufacturing, ISO 13485, active medical devices, implantable devices, biosensors manufacturing",
  },
];

export function ServicesOverview() {
  useSEO({
    title: "Our Services",
    description: "RMT USA provides comprehensive medical device services — product design, regulatory compliance, software & AI, quality testing, electronics, pharmaceutical development, and contract manufacturing.",
    keywords: "medical device services, regulatory compliance, product design prototyping, contract manufacturing, software AI medical, quality testing",
  });

  return (
    <div className="bg-background min-h-screen pt-20">
      <section className="py-20 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-5">Our Services</h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              A comprehensive suite of medical device and technology services — covering every stage from design through regulatory approval, manufacturing, and commercialization.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {ALL_SERVICES.map((svc, i) => (
              <ServiceCard
                key={svc.slug}
                slug={svc.slug}
                title={svc.name}
                description={svc.description}
                icon={svc.icon}
                subServices={svc.subServices}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Not sure which service you need?
            </h2>
            <p className="text-white/80 text-lg mb-8">Our experts will assess your project and recommend the right combination of services.</p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-lg font-bold">
              <Link href="/contact" data-testid="button-services-cta">Talk to an Expert</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

export function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = ALL_SERVICES.find((s) => s.slug === params.slug);

  useSEO({
    title: service ? service.name : "Service Not Found",
    description: service ? service.description : "Service not found.",
    keywords: service?.keywords,
  });

  if (!service) {
    return (
      <div className="pt-40 text-center min-h-screen bg-background">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
        <p className="text-muted-foreground mb-8">The service you are looking for does not exist.</p>
        <Button asChild>
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* HERO */}
      <section className="py-20 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
            <div className="flex items-start gap-5 mb-5">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                {service.icon}
              </div>
              <div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">{service.name}</h1>
                <p className="text-muted-foreground text-lg mt-2">{service.tagline}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {service.subServices.slice(0, 4).map((sub) => (
                <span key={sub} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">{sub}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">

            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">Overview</h2>
                <div className="space-y-4">
                  {service.overview.map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">Services Included</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.subServices.map((sub) => (
                    <div key={sub} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground">{sub}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">Core Capabilities</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-sm text-muted-foreground">{cap}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">Why Choose RMT USA for {service.name}</h2>
                <div className="grid sm:grid-cols-3 gap-5">
                  {service.whyRMT.map((item) => (
                    <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                      <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center mb-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-5">
                <AnimatedSection className="bg-primary text-white rounded-xl p-6">
                  <h3 className="font-heading text-xl font-bold mb-3">Get a Quote</h3>
                  <p className="text-white/80 text-sm mb-5 leading-relaxed">
                    Discuss your project requirements with our specialists and receive a tailored proposal.
                  </p>
                  <Button asChild className="w-full bg-white text-primary hover:bg-white/90 rounded-lg font-bold" data-testid={`button-quote-${service.slug}`}>
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </AnimatedSection>

                <AnimatedSection className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-widest">Other Services</h4>
                  <div className="flex flex-col gap-2">
                    {ALL_SERVICES.filter((s) => s.slug !== service.slug).slice(0, 5).map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
