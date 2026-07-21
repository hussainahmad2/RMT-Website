import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle,
  Dna,
  ExternalLink,
  FileCheck,
  FlaskConical,
  GraduationCap,
  Handshake,
  Factory,
  Layers,
  Lightbulb,
  Microscope,
  ShieldCheck,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HomeSection, SectionHeading } from "@/components/HomeSection";
import { Button } from "@/components/ui/button";
import type { ServiceData } from "@/data/services";
import {
  BMD_ACADEMIC_PARTNERS,
  BMD_EQUIPMENT,
  BMD_EXPERTISE,
  BMD_INDUSTRIAL_PARTNERS,
  BMD_PATENTS,
  BMD_PRODUCTS,
  BMD_PUBLICATIONS,
  BMD_RESEARCH_AREAS,
} from "@/data/bmd-content";
import { BMD_STANDARDS } from "@/data/bmd-standards";
import { BMD_SECTION_IMAGES, ColumnWatermark, DnaWatermark, FlaskWatermark } from "./bmd-detail-visual";
import { ServiceCapabilitiesBlock } from "./_shared";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const WHY_ICONS = [ShieldCheck, Dna, Lightbulb, FlaskConical, Sparkles] as const;

const RESEARCH_ICONS = [Dna, FlaskConical, Microscope, Layers, Lightbulb, ShieldCheck] as const;
const BMD_HERO_STATS = [
  { label: "Research Articles", value: "40+", icon: BookOpen },
  { label: "Conference Papers", value: "12+", icon: FileCheck },
  { label: "Granted Patents", value: "2", icon: Award },
  { label: "Compliance Standards", value: String(BMD_STANDARDS.length), icon: ShieldCheck },
] as const;
const BMD_PORTFOLIO = [
  { title: "Topical Antifungal Cream", image: encodeURI("/bmd-products/TOPICAL ANTIFUNGAL CREAM.jpeg") },
  { title: "Hyaluronic Acid Serum", image: encodeURI("/bmd-products/HYALURONIC ACID SERUM.jpeg") },
  { title: "Moisturising Sunscreen", image: encodeURI("/bmd-products/MOISTURIZING SUNSCREEN (ALL SKIN TYPES).jpeg") },
  { title: "Vitamin C Serum", image: encodeURI("/bmd-products/VITAMIN C SERUM.jpeg") },
  { title: "Lidocaine Topical Spray", image: encodeURI("/bmd-products/LIDOCAINE TOPICAL SPRAY.jpeg") },
  { title: "PLGA Microspheres", image: encodeURI("/bmd-products/PLGA MICROSPHERES.jpeg") },
  { title: "Glycolic Acid Serum", image: encodeURI("/bmd-products/GLYCOLIC ACID SERUM.jpeg") },
  { title: "Retinol Serum", image: encodeURI("/bmd-products/RETINOL SERUM.jpeg") },
  { title: "Hair Growth Serum", image: encodeURI("/bmd-products/HAIR GROWTH SERUM (MINOXIDIL-BASED).jpeg") },
  { title: "Polymer-Based Coating", image: encodeURI("/bmd-products/POLYMER-BASED COATING (DRUG ELUTING STENT).jpeg") },
  { title: "Polymer-Free Coating", image: encodeURI("/bmd-products/POLYMER-FREE COATING (DRUG ELUTING STENT).jpeg") },
  { title: "Topical Pain Relief Emulgel", image: encodeURI("/bmd-products/TOPICAL PAIN RELIEF EMULGEL.jpeg") },
] as const;
const BMD_PRODUCTS_WITHOUT_IMAGES = [
  "Microspheres",
  "Bioresorbable Vascular Scaffold",
  "Drug Coating for 3rd Generation Drug Eluting Stent",
  "Hydrophilic Coatings",
  "Anti-inflammatory Coatings",
  "Surface Modified Coatings",
  "Drug Eluting Coatings",
] as const;

const BMD_PORTFOLIO_LOOP = [...BMD_PORTFOLIO, ...BMD_PORTFOLIO, ...BMD_PORTFOLIO];

function PartnerCard({
  name,
  type,
  index,
}: {
  name: string;
  type: "academic" | "industrial";
  index: number;
}) {
  const Icon = type === "academic" ? GraduationCap : Building2;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-white/25 bg-white/12 backdrop-blur-md p-6 sm:p-8 hover:border-sky-300/50 hover:bg-white/18 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300"
    >
      <div className="flex items-start gap-5">
        <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-sky-200 group-hover:bg-sky-400/20 group-hover:text-white transition-colors">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
        <div className="min-w-0 pt-1">
          <h3 className="font-heading text-xl sm:text-2xl md:text-[1.65rem] font-bold text-white leading-snug">
            {name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

function WhyCard({
  title,
  desc,
  icon: Icon,
  index,
}: {
  title: string;
  desc: string;
  icon: LucideIcon;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="rounded-2xl border border-white/90 bg-white/95 backdrop-blur-md p-6 sm:p-7 hover:border-primary/35 hover:shadow-lg transition-all h-full dark:border-white/10 dark:bg-white/8 dark:hover:border-sky-300/35 dark:shadow-black/10"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-sky-500/10 dark:from-white/10 dark:to-white/5 flex items-center justify-center text-primary dark:text-sky-200 mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground dark:text-white mb-2">{title}</h3>
      <p className="text-base text-slate-600 dark:text-white/75 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function PortfolioCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const recenterTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollLeft = track.scrollWidth / 3;
  }, []);

  useEffect(() => {
    return () => {
      if (recenterTimerRef.current !== null) {
        window.clearTimeout(recenterTimerRef.current);
      }
    };
  }, []);

  const recenterIfNeeded = () => {
    const track = trackRef.current;
    if (!track) return;

    const thirdWidth = track.scrollWidth / 3;
    if (track.scrollLeft < thirdWidth * 0.5) {
      track.scrollLeft += thirdWidth;
    } else if (track.scrollLeft > thirdWidth * 1.5) {
      track.scrollLeft -= thirdWidth;
    }
  };

  const slide = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({
      left: direction * (track.clientWidth / 2),
      behavior: "smooth",
    });

    if (recenterTimerRef.current !== null) {
      window.clearTimeout(recenterTimerRef.current);
    }

    recenterTimerRef.current = window.setTimeout(recenterIfNeeded, 380);
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {BMD_PORTFOLIO_LOOP.map((item, i) => (
          <motion.article
            key={`${item.title}-${i}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % BMD_PORTFOLIO.length) * 0.03 }}
            className="group flex h-[19rem] w-[calc(50%-0.5rem)] min-w-[calc(50%-0.5rem)] max-w-[calc(50%-0.5rem)] flex-none snap-start flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm shadow-sm transition-all hover:border-primary/35 hover:shadow-lg sm:h-[20rem] sm:w-[calc(33.333%-0.875rem)] sm:min-w-[calc(33.333%-0.875rem)] sm:max-w-[calc(33.333%-0.875rem)] lg:h-[20.5rem] lg:w-[calc((100%-2rem)/3)] lg:min-w-[calc((100%-2rem)/3)] lg:max-w-[calc((100%-2rem)/3)] xl:w-[calc((100%-3rem)/4)] xl:min-w-[calc((100%-3rem)/4)] xl:max-w-[calc((100%-3rem)/4)]"
          >
            <div className="relative flex-1 overflow-hidden bg-white/95 p-2.5 sm:p-3">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="min-h-[4.5rem] border-t border-white/10 p-3.5">
              <h3 className="line-clamp-2 font-heading text-sm sm:text-base font-bold leading-snug text-white">{item.title}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export function BmdServiceDetail({ service }: { service: ServiceData }) {
  const [showAllPublications, setShowAllPublications] = useState(false);
  const visiblePublications = showAllPublications ? BMD_PUBLICATIONS : BMD_PUBLICATIONS.slice(0, 4);
  const hasMorePublications = BMD_PUBLICATIONS.length > 4;

  return (
    <div className="space-y-0">
      <section className="relative bg-[#060d17] overflow-hidden flex items-center min-h-screen py-0">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-transparent dark:bg-black/45" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060d17] via-[#060d17]/88 to-[#060d17]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060d17] via-transparent to-[#060d17]/50" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
          aria-hidden
        />
        <div className="page-container relative z-10 w-full py-28 md:py-32">
          <AnimatedSection immediate className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 mb-5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-[0.18em]">Biomaterials & Drug Innovation</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-[1.05] tracking-tight">
              {service.name}
            </h1>
            <div className="h-px w-20 bg-primary mb-5" />
            <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl">
              {service.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-xl px-8 font-bold shadow-lg bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70 shadow-primary/30">
                <Link href="/contact">Get a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl px-8 border-white/20 text-white hover:bg-white/10 hover:text-white font-semibold">
                <Link href="/services"><ArrowLeft className="mr-2 w-4 h-4" /> All Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-b border-white/10 bg-primary">
        <div className="page-container py-8">
          <div className="grid grid-cols-4 divide-x divide-white/15">
            {BMD_HERO_STATS.map((stat) => (
              <div key={stat.label} className="text-center text-white px-4 py-2">
                <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-none">{stat.value}</p>
                <p className="text-white/70 text-[10px] sm:text-xs uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="relative overflow-x-clip bg-background pt-10 pb-16">
        <div className="page-container relative z-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-5 pb-3 border-b border-border">
              Overview
            </h2>
            <div className="space-y-4">
              {service.overview.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partners — prominent */}
      <HomeSection
        variant="gradient-blue"
        bgImage={BMD_SECTION_IMAGES.partners}
        overlayIntensity="clear"
        darkOverlay
        dots
        rings
        ringSide="both"
        className="py-14 sm:py-16"
      >
        <AnimatedSection className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <SectionHeading
              eyebrow="Collaboration"
              title="Academic & Industry Partners"
              description="Strategic partnerships with universities and global innovators accelerate biomaterials research, validation, and commercialization."
              align="left"
              light
              className="max-w-3xl"
            />
            <div className="flex flex-wrap gap-3 shrink-0">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 bg-white/10 text-white font-heading text-lg font-bold">
                <Handshake className="w-5 h-5 text-sky-300" />
                {BMD_INDUSTRIAL_PARTNERS.length} Industry
              </span>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 bg-white/10 text-white font-heading text-lg font-bold">
                <GraduationCap className="w-5 h-5 text-sky-300" />
                {BMD_ACADEMIC_PARTNERS.length} Academic
              </span>
            </div>
          </div>
        </AnimatedSection>

        <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-4">Academic Partner</h3>
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-8">
          {BMD_ACADEMIC_PARTNERS.map((name, i) => (
            <PartnerCard key={name} name={name} type="academic" index={i} />
          ))}
        </div>
        <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-4">Industry Partner</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {BMD_INDUSTRIAL_PARTNERS.map((name, i) => (
            <PartnerCard key={name} name={name} type="industrial" index={i + BMD_ACADEMIC_PARTNERS.length} />
          ))}
        </div>
        <p className="mt-6 text-white/75 text-base sm:text-lg leading-relaxed max-w-4xl break-words">
          Through these partnerships, RMT contributes to advanced biomaterials with unique mechanical, biological, and functional properties for drug delivery, regenerative medicine, implantable devices, and pharmaceutical technologies.
        </p>
      </HomeSection>

      {/* Research */}
      <HomeSection variant="muted" dots className="py-10 sm:py-12 relative overflow-hidden dark:bg-[#0b1320]">
        <ColumnWatermark className="right-0 left-auto translate-x-[20%]">
          <FlaskWatermark />
        </ColumnWatermark>
        <div className="relative z-10">
          <div className="mb-8 max-w-3xl text-left">
            <p className="font-semibold text-sm uppercase tracking-widest mb-3 text-primary dark:text-sky-300">
              Research
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-slate-900 dark:text-white">
              Research &amp; Publications
            </h2>
            <p className="text-lg max-w-2xl leading-relaxed text-slate-600 dark:text-white/90">
              Scientific advancement in biomaterials, polymer science, drug delivery, and medical device development.
            </p>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground dark:text-white mb-5">Research Focus Areas</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {BMD_RESEARCH_AREAS.map((area, i) => {
              const Icon = RESEARCH_ICONS[i % RESEARCH_ICONS.length];
              return (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-border bg-white/85 dark:bg-white/8 dark:border-white/10 shadow-sm dark:shadow-none backdrop-blur-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-white/10 flex items-center justify-center text-primary dark:text-sky-200 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-base text-slate-800 dark:text-white/85 leading-relaxed pt-1.5">{area}</span>
                </motion.div>
              );
            })}
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground dark:text-white mb-5">Areas of Expertise</h3>
          <div className="flex flex-wrap gap-2.5 mb-8">
            {BMD_EXPERTISE.map((e) => (
              <span key={e} className="text-sm sm:text-base font-medium px-4 py-2 rounded-full bg-primary/8 dark:bg-white/10 border border-primary/20 dark:border-white/10 text-primary dark:text-white/85">
                {e}
              </span>
            ))}
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground dark:text-white mb-5">Granted Patents</h3>
          <div className="overflow-x-auto rounded-2xl border border-border dark:border-white/10 mb-8 bg-card dark:bg-white/8 shadow-sm dark:shadow-none">
            <table className="w-full text-left min-w-[640px]">
              <thead className="bg-muted/50 dark:bg-white/10">
                <tr>
                  <th className="px-5 py-4 font-heading text-sm font-bold text-foreground dark:text-white">Patent Title</th>
                  <th className="px-5 py-4 font-heading text-sm font-bold text-foreground dark:text-white">Inventors</th>
                  <th className="px-5 py-4 font-heading text-sm font-bold text-foreground dark:text-white">Patent No.</th>
                </tr>
              </thead>
              <tbody>
                {BMD_PATENTS.map((pat) => (
                  <tr key={pat.patentNo} className="border-t border-border dark:border-white/10">
                    <td className="px-5 py-4 text-base text-slate-700 dark:text-white/80">{pat.title}</td>
                    <td className="px-5 py-4 text-base text-slate-700 dark:text-white/80">{pat.inventors}</td>
                    <td className="px-5 py-4 text-base font-semibold text-foreground dark:text-white">{pat.patentNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground dark:text-white mb-5">Related Journal Publications</h3>
          <div className="grid lg:grid-cols-2 gap-4">
            {visiblePublications.map((pub, i) => (
              <motion.div
                key={pub.citation.slice(0, 48)}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.03 }}
                className="text-sm sm:text-base text-slate-700 dark:text-white/80 leading-relaxed p-4 rounded-xl border border-border dark:border-white/10 bg-white/85 dark:bg-white/8 hover:border-primary/25 dark:hover:border-white/20 transition-colors backdrop-blur-md shadow-sm dark:shadow-none"
              >
                <p>{pub.citation}</p>
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-primary dark:text-sky-300 hover:text-primary/80 dark:hover:text-sky-200 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    View publication
                  </a>
                )}
              </motion.div>
            ))}
          </div>
          {hasMorePublications && (
            <div className="mt-6 flex justify-center">
              <Button
                type="button"
                variant="outline"
                className="rounded-xl px-6 border-primary/20 text-primary hover:bg-primary/5 hover:text-primary dark:border-white/20 dark:text-white dark:hover:bg-white/10 dark:hover:text-white"
                onClick={() => setShowAllPublications((prev) => !prev)}
              >
                {showAllPublications ? "Show Less" : "View All Publications"}
              </Button>
            </div>
          )}
        </div>
      </HomeSection>

      {/* Products */}
      <HomeSection
        variant="navy"
        bgImage={BMD_SECTION_IMAGES.products}
        overlayIntensity="clear"
        darkOverlay
        dots
        className="py-14 sm:py-16"
      >
        <SectionHeading
          eyebrow="Portfolio"
          title="Products"
          description="A compact visual portfolio of biomaterial, skincare, and drug-delivery products."
          light
          className="mb-12"
        />
        <PortfolioCarousel />
        <SectionHeading
          title="Other Products"
          light
          align="left"
          className="mt-10 mb-6"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BMD_PRODUCTS_WITHOUT_IMAGES.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/8 px-4 py-3 text-sm sm:text-base font-medium text-white/85 backdrop-blur-sm"
            >
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md ring-1 ring-white/20">
                {String(BMD_PRODUCTS_WITHOUT_IMAGES.indexOf(item) + 1).padStart(2, "0")}
              </span>
              {item}
            </div>
          ))}
        </div>
      </HomeSection>

      {/* Equipment */}
      <HomeSection variant="image-blue" bgImage={BMD_SECTION_IMAGES.equipment} overlayIntensity="clear" darkOverlay dots className="py-12 sm:py-14">
        <SectionHeading eyebrow="Infrastructure" title="Laboratory Equipment" align="left" className="mb-8" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BMD_EQUIPMENT.map((eq, i) => (
            <motion.div
              key={eq}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-3 text-base font-medium px-5 py-4 bg-white/95 border border-white/90 rounded-xl shadow-md text-slate-800"
            >
              <Microscope className="w-5 h-5 text-primary shrink-0" />
              {eq}
            </motion.div>
          ))}
        </div>
      </HomeSection>

      {/* Standards */}
      <HomeSection variant="gradient-blue" bgImage={BMD_SECTION_IMAGES.standards} overlayIntensity="medium" darkOverlay dots className="py-12 sm:py-14">
        <SectionHeading eyebrow="Compliance" title="Compliance & Standards" light className="mb-10" />
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {BMD_STANDARDS.map((std, i) => (
            <motion.span
              key={std}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/20 bg-white/10 text-white text-base font-semibold backdrop-blur-sm hover:border-sky-300/50 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-sky-300 shrink-0" />
              {std}
            </motion.span>
          ))}
        </div>
      </HomeSection>

      {/* Capabilities & Why */}
      <HomeSection variant="image-light" bgImage={BMD_SECTION_IMAGES.capabilities} overlayIntensity="clear" darkOverlay dots rings ringSide="left" className="py-14 sm:py-16">
        <ServiceCapabilitiesBlock capabilities={service.capabilities} />
        <SectionHeading eyebrow="Why RMT" title="Why Partner With RMT" align="left" className="mb-10" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.whyRMT.map((item, i) => (
            <WhyCard key={item.title} title={item.title} desc={item.desc} icon={WHY_ICONS[i] ?? CheckCircle} index={i} />
          ))}
        </div>
      </HomeSection>

      <BmdServiceSubServiceSummarySection service={service} />
    </div>
  );
}

function BmdServiceSubServiceSummarySection({ service }: { service: ServiceData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSub = service.subServices[activeIndex] ?? service.subServices[0];
  const serviceIcons = [Dna, Microscope, FlaskConical, Layers, Lightbulb, ShieldCheck, Factory, Wrench, Building2, GraduationCap] as const;
  const ActiveIcon = serviceIcons[activeIndex % serviceIcons.length] ?? CheckCircle;

  useEffect(() => {
    setActiveIndex(0);
  }, [service.slug]);

  return (
    <div className="mx-4 my-4 sm:mx-6 sm:my-6">
      <AnimatedSection className="space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl space-y-2">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Service Breakdown</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Biomaterials and drug innovation scope
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Material science, chemistry, testing, and validation are grouped into one research and development view.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex max-w-full flex-wrap justify-center gap-2">
            {service.subServices.map((sub, index) => {
              const isActive = index === activeIndex;
              const TabIcon = serviceIcons[index % serviceIcons.length] ?? CheckCircle;

              return (
                <button
                  key={sub.slug}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/15"
                      : "border-border bg-background/90 text-muted-foreground hover:border-primary/30 hover:text-primary"
                  )}
                >
                  <TabIcon className="h-4 w-4 shrink-0" />
                  <span className="whitespace-nowrap">{sub.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSub.slug}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-3xl border border-border bg-background/90 shadow-sm"
          >
            <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
            <div className="p-5 sm:p-7 lg:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                    {activeSub.name}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base font-medium text-foreground/80 leading-relaxed max-w-4xl">
                    {activeSub.tagline}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-3 shrink-0 w-full md:w-auto md:min-w-[300px]">
                  <div className="rounded-2xl border border-border bg-secondary/35 px-4 py-4 text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Overview</p>
                    <p className="mt-2 font-heading text-2xl font-bold text-foreground">{activeSub.overview.length}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-secondary/35 px-4 py-4 text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Points</p>
                    <p className="mt-2 font-heading text-2xl font-bold text-foreground">{activeSub.keyPoints.length}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-secondary/35 px-4 py-4 text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Deliverables</p>
                    <p className="mt-2 font-heading text-2xl font-bold text-foreground">{activeSub.deliverables.length}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-8">
                <div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Overview</p>
                  <div className="space-y-3">
                    {activeSub.overview.map((para, paraIndex) => (
                      <p key={paraIndex} className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-5xl">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Key Points</p>
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {activeSub.keyPoints.map((point) => (
                      <div key={point} className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/20 px-4 py-3">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm sm:text-base leading-relaxed text-foreground/85">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Deliverables</p>
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {activeSub.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/20 px-4 py-3">
                        <Layers className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm sm:text-base leading-relaxed text-foreground/85">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </AnimatedSection>
    </div>
  );
}
