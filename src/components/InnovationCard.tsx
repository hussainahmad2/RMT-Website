import React from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface InnovationCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  tag: string;
  delay?: number;
}

export function InnovationCard({
  title,
  description,
  image,
  href,
  tag,
  delay = 0,
}: InnovationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060d17] via-[#060d17]/55 to-[#060d17]/10 transition-opacity duration-500 group-hover:via-[#060d17]/70" />
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />

      <div className="absolute top-5 left-5">
        <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
          {tag}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sky-300 font-semibold text-sm group-hover:gap-3 transition-all duration-200"
        >
          Explore <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
