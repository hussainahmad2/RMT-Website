import React, { useState } from "react";
import { CheckCircle, Shield, Award, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { HOME_IMAGES } from "@/data/home-images";

const whyChoose = [
  {
    title: "ISO 13485:2016 Certified",
    description: "Our quality management system meets the highest international standards for medical device manufacturing.",
    icon: Shield,
    image: HOME_IMAGES.industry[0].src,
    accent: "border-blue-500/30 bg-blue-50 text-blue-700",
    iconBg: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "FDA & CE Expertise",
    description: "Deep regulatory knowledge ensuring your product navigates approval pathways efficiently and successfully.",
    icon: Award,
    image: HOME_IMAGES.industry[1].src,
    accent: "border-emerald-500/30 bg-emerald-50 text-emerald-700",
    iconBg: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "End-to-End Partnership",
    description: "From initial concept through design, testing, approval, and manufacturing — we are with you every step.",
    icon: Users,
    image: HOME_IMAGES.industry[2].src,
    accent: "border-violet-500/30 bg-violet-50 text-violet-700",
    iconBg: "bg-violet-500/10 text-violet-600",
  },
  {
    title: "Global Reach",
    description: "Operating across the USA, Europe, Middle East, and South Asia with local regulatory expertise.",
    icon: Globe,
    image: HOME_IMAGES.industry[3].src,
    accent: "border-amber-500/30 bg-amber-50 text-amber-700",
    iconBg: "bg-amber-500/10 text-amber-600",
  },
] as const;

const whyStats = [
  { value: 98, decimals: 0, suffix: "%", label: "Regulatory Approval Rate" },
  { value: 2.4, decimals: 1, suffix: "x", label: "Faster Time to Market" },
  { value: 200, decimals: 0, suffix: "+", label: "Projects Delivered" },
  { value: 30, decimals: 0, suffix: "+", label: "Countries Served" },
] as const;

const certifications = [
  "ISO 13485:2016",
  "ISO 14971",
  "IEC 62304",
  "CE Mark / MDR",
  "FDA 510(k)",
  "GMP Compliance",
] as const;

export function WhyRmtSection() {
  const [statsInView, setStatsInView] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28 dark:bg-[#08111f]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <img
          src={HOME_IMAGES.whyRmt}
          alt=""
          className="absolute inset-0 hidden h-full w-full object-cover object-center scale-125 opacity-[0.26] dark:opacity-[0.24] sm:block"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/20 dark:bg-[#08111f]/28" />
      </div>

      <div className="page-container relative z-10">
        <div className="grid items-start gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          {/* Left — headline & certs */}
          <AnimatedSection className="lg:sticky lg:top-28" animation="slideRight" delay={0.1} duration={0.95}>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Why RMT</p>
            </div>
            <h2 className="font-heading text-3xl font-bold leading-[1.08] text-foreground dark:text-white sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
              Your Trusted Partner in{" "}
              <span className="relative inline-block text-primary">
                Medical Innovation
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-primary/20" aria-hidden />
              </span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground dark:text-white/72 sm:text-lg lg:text-xl">
              Deep regulatory expertise and cutting-edge engineering — helping medical device companies bring safe, effective products to market faster.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-2.5 sm:gap-3">
              {certifications.map((cert, i) => (
                <motion.span
                  key={cert}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-background/80 px-3 py-2.5 text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm dark:border-white/12 dark:bg-white/6 dark:text-white sm:text-sm"
                >
                  <CheckCircle className="h-3.5 w-3.5 shrink-0 text-primary" />
                  {cert}
                </motion.span>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — staggered feature cards with image strips */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {whyChoose.map((item, i) => {
              const Icon = item.icon;
              const offset = i % 2 === 1 ? "sm:mt-8" : "";
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -70 : 70, y: 24, rotate: i % 2 === 0 ? -3 : 3, scale: 0.94 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px", amount: 0.2 }}
                  transition={{ delay: i * 0.13, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className={`group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-xl dark:border-white/10 dark:bg-white/6 dark:shadow-black/20 ${offset}`}
                >
                  <div className="relative h-28 overflow-hidden sm:h-32">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-white/20 dark:bg-[#08111f]/28" />
                    <div className={`absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border ${item.accent} dark:border-white/10`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-heading text-xl font-bold leading-tight text-foreground dark:text-white sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground dark:text-white/68 sm:text-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Stats band with gradient background */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          onViewportEnter={() => setStatsInView(true)}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 overflow-hidden rounded-[1.75rem] border border-border/70 shadow-lg sm:mt-16 dark:border-white/10"
        >
          <div className="absolute inset-0 bg-white/90 backdrop-blur-[1px] dark:bg-[#08111f]/92" aria-hidden />
          <div className="relative grid grid-cols-1 divide-y divide-border/40 sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
            {whyStats.map((stat, i) => (
              <div
                key={stat.label}
                className="px-5 py-7 text-center sm:px-6 sm:py-9"
              >
                <p className="font-heading text-3xl font-bold text-sky-600 dark:text-sky-300 sm:text-4xl">
                  <AnimatedCounter
                    value={stat.value}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    duration={1.8}
                    delay={i * 0.15}
                    start={statsInView}
                  />
                </p>
                <p className="mt-1.5 text-sm font-medium uppercase tracking-wider text-rose-700/85 dark:text-rose-300/85 sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
