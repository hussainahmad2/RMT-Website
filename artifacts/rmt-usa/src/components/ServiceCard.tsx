import React from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  delay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, slug, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="p-8 relative z-10 h-full flex flex-col">
        <div className="w-14 h-14 bg-secondary text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm flex-grow mb-6">{description}</p>
        
        <Link href={`/services/${slug}`} className="inline-flex items-center text-primary font-semibold text-sm hover:underline mt-auto">
          Explore Service <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};
