import React, { useState } from "react";
import { motion } from "framer-motion";
import type { LeadershipMember } from "@/data/leadership";

function initialsFromName(name: string) {
  return name
    .replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.)\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

type LeadershipCardProps = {
  person: LeadershipMember;
  index?: number;
  featured?: boolean;
};

export function LeadershipCard({ person, index = 0, featured = false }: LeadershipCardProps) {
  const [imgError, setImgError] = useState(false);
  const initials = initialsFromName(person.name);
  const tightCrop = person.imageClassName?.includes("scale-");

  const imageBlock = (
    <div
      className={
        featured
          ? "relative shrink-0 w-full lg:w-[38%] bg-muted overflow-hidden min-h-[320px] lg:min-h-[420px]"
          : "relative aspect-[4/5] overflow-hidden bg-muted"
      }
    >
      {!imgError ? (
        <img
          src={person.image}
          alt={person.name}
          className={`absolute inset-0 w-full h-full transition-transform duration-500 ${
            person.imageClassName
              ? `${person.imageClassName} ${tightCrop ? "group-hover:scale-[1.12]" : "group-hover:scale-[1.02]"}`
              : `group-hover:scale-[1.02] ${featured ? "object-cover object-center" : "object-cover object-[center_15%]"}`
          }`}
          onError={() => setImgError(true)}
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5"
          aria-hidden
        >
          <span className="font-heading text-4xl sm:text-5xl font-bold text-primary/70">{initials}</span>
        </div>
      )}
    </div>
  );

  const textBlock = (
    <div className={`flex flex-col justify-center ${featured ? "p-6 lg:p-8 lg:flex-1" : "p-5"}`}>
      <h3 className={`font-semibold text-foreground ${featured ? "text-xl lg:text-2xl" : ""}`}>
        {person.name}
      </h3>
      <p className="text-primary text-xs font-bold uppercase tracking-wide mt-1 mb-3">{person.role}</p>
      <p className={`text-muted-foreground leading-relaxed ${featured ? "text-sm" : "text-xs"}`}>
        {person.bio}
      </p>
      {person.detail && (
        <p className={`text-muted-foreground/90 leading-relaxed mt-3 ${featured ? "text-sm" : "text-xs"}`}>
          {person.detail}
        </p>
      )}
    </div>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all group"
    >
      {featured ? (
        <div className="flex flex-col lg:flex-row">
          {imageBlock}
          {textBlock}
        </div>
      ) : (
        <>
          {imageBlock}
          {textBlock}
        </>
      )}
    </motion.article>
  );
}
