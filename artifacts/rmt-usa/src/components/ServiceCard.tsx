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
      className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300"
      data-testid={`card-service-${slug}`}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-lg mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
          {icon}
        </div>

        <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

        {subServices && subServices.length > 0 && (
          <ul className="flex flex-col gap-1.5 mb-5 flex-grow">
            {subServices.slice(0, 4).map((sub) => (
              <li key={sub} className="flex items-start gap-2 text-xs text-muted-foreground">
                <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                {sub}
              </li>
            ))}
            {subServices.length > 4 && (
              <li className="text-xs text-primary font-medium">+{subServices.length - 4} more</li>
            )}
          </ul>
        )}

        <Link
          href={`/services/${slug}`}
          data-testid={`link-service-learn-more-${slug}`}
          className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all mt-auto"
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};
