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
  tone?: "blue" | "green" | "red";
}

const toneStyles = {
  blue: {
    card: "hover:border-blue-500/40 hover:shadow-blue-500/10",
    icon: "bg-blue-500/10 border-blue-500/15 group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:shadow-blue-500/20",
    iconText: "text-blue-700 group-hover:text-white",
    dot: "bg-blue-500",
    title: "group-hover:text-blue-700",
    bullet: "bg-blue-500/50 group-hover/item:bg-blue-500",
    more: "text-blue-700",
    link: "text-blue-700",
  },
  green: {
    card: "hover:border-green-500/40 hover:shadow-green-500/10",
    icon: "bg-green-500/10 border-green-500/15 group-hover:bg-green-500 group-hover:border-green-500 group-hover:shadow-green-500/20",
    iconText: "text-green-700 group-hover:text-white",
    dot: "bg-green-500",
    title: "group-hover:text-green-700",
    bullet: "bg-green-500/50 group-hover/item:bg-green-500",
    more: "text-green-700",
    link: "text-green-700",
  },
  red: {
    card: "hover:border-red-500/40 hover:shadow-red-500/10",
    icon: "bg-red-500/10 border-red-500/15 group-hover:bg-red-500 group-hover:border-red-500 group-hover:shadow-red-500/20",
    iconText: "text-red-700 group-hover:text-white",
    dot: "bg-red-500",
    title: "group-hover:text-red-700",
    bullet: "bg-red-500/50 group-hover/item:bg-red-500",
    more: "text-red-700",
    link: "text-red-700",
  },
} as const;

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, slug, subServices, delay = 0, tone = "blue" }) => {
  const styles = toneStyles[tone];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay }}
      className={`group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ${styles.card}`}
      data-testid={`card-service-${slug}`}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Icon + title row */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative shrink-0">
            {/* Outer ring decoration */}
            <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center group-hover:shadow-lg transition-all duration-300 ${styles.icon}`}>
              <span className={`transition-colors duration-300 [&>svg]:w-6 [&>svg]:h-6 ${styles.iconText}`}>
                {icon}
              </span>
            </div>
            {/* Active dot */}
            <span className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${styles.dot}`} />
          </div>
          <div className="flex-1 min-w-0 pt-1">
            <h3 className={`font-heading text-lg font-bold text-foreground transition-colors leading-tight ${styles.title}`}>{title}</h3>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{description}</p>

        {subServices && subServices.length > 0 && (
          <ul className="flex flex-col gap-2 mb-5 flex-grow">
            {subServices.slice(0, 4).map((sub) => (
              <li key={sub} className="flex items-center gap-2.5 text-xs text-muted-foreground group/item">
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${styles.bullet}`} />
                {sub}
              </li>
            ))}
            {subServices.length > 4 && (
              <li className={`text-xs font-semibold pl-4 ${styles.more}`}>+{subServices.length - 4} more</li>
            )}
          </ul>
        )}

        <Link
          href={`/services/${slug}`}
          data-testid={`link-service-learn-more-${slug}`}
          className={`inline-flex items-center gap-2 font-semibold text-sm hover:gap-3 transition-all mt-auto pt-4 border-t border-border/60 ${styles.link}`}
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};
