import React from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  subServices?: string[];
  delay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, slug, subServices, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay }}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
      data-testid={`card-service-${slug}`}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Icon + title row */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative shrink-0">
            {/* Outer ring decoration */}
            <div className="w-14 h-14 rounded-2xl bg-primary/8 border border-primary/15 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
              <span className="text-primary group-hover:text-white transition-colors duration-300 [&>svg]:w-6 [&>svg]:h-6">
                {icon}
              </span>
            </div>
            {/* Active dot */}
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary border-2 border-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex-1 min-w-0 pt-1">
            <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{title}</h3>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{description}</p>

        {subServices && subServices.length > 0 && (
          <ul className="flex flex-col gap-2 mb-5 flex-grow">
            {subServices.slice(0, 4).map((sub) => (
              <li key={sub} className="flex items-center gap-2.5 text-xs text-muted-foreground group/item">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0 group-hover/item:bg-primary transition-colors" />
                {sub}
              </li>
            ))}
            {subServices.length > 4 && (
              <li className="text-xs text-primary font-semibold pl-4">+{subServices.length - 4} more</li>
            )}
          </ul>
        )}

        <Link
          href={`/services/${slug}`}
          data-testid={`link-service-learn-more-${slug}`}
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all mt-auto pt-4 border-t border-border/60"
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};
