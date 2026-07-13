import React, { useState } from "react";
import { Clock, ArrowRight, Calendar, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import {
  INSIGHT_ARTICLES,
  INSIGHT_CATEGORIES,
  INSIGHT_CATEGORY_COLORS,
  type ArticleCategory,
} from "@/data/insights-content";

export default function Insights() {
  const [filter, setFilter] = useState<ArticleCategory>("All");

  useSEO({
    title: "Insights",
    description:
      "Expert insights, articles, and updates from Revive Medical Technologies — medical devices, regulatory compliance, software & AI, manufacturing, and research.",
    keywords:
      "RMT insights, medical device news, regulatory updates, healthtech software, FDA 510k, RPM digital health",
    path: "/insights",
  });

  const featured = INSIGHT_ARTICLES.find((a) => a.featured)!;
  const filtered = (filter === "All" ? INSIGHT_ARTICLES : INSIGHT_ARTICLES.filter((a) => a.category === filter)).filter(
    (a) => !a.featured
  );

  return (
    <div className="bg-background min-h-screen pt-20">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#060d17] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_65%)]" aria-hidden />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/10" aria-hidden />
        <div className="page-container relative z-10 text-center">
          <AnimatedSection>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Knowledge & Expertise</span>
            </div>
            <h1 className="font-heading text-5xl font-bold text-white mb-5 md:text-6xl">Insights</h1>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-white/65">
              Company updates, product milestones, regulatory guidance, and industry analysis from the RMT team.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-12 bg-background">
        <div className="page-container">
          <AnimatedSection>
            <div className="group grid overflow-hidden rounded-[1.75rem] border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-2xl lg:grid-cols-2">
              <div className="relative aspect-video overflow-hidden lg:aspect-auto">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className={`absolute top-4 left-4 rounded-full px-2.5 py-1 text-xs font-semibold ${INSIGHT_CATEGORY_COLORS[featured.category]}`}>
                  {featured.category}
                </span>
              </div>
              <div className="flex flex-col justify-center p-8">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{featured.readTime} read</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{featured.date}</span>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">Featured</span>
                </div>
                <h2 className="font-heading text-3xl font-bold leading-tight text-foreground mb-4 transition-colors group-hover:text-primary">
                  {featured.title}
                </h2>
                <p className="mb-6 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                {featured.tags && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-full ${featured.author.color} text-xs font-bold text-white`}>
                      {featured.author.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{featured.author.name}</p>
                      <p className="text-xs text-muted-foreground">{featured.author.role}</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="pb-20 bg-background">
        <div className="page-container">
          <div className="mb-8 flex flex-wrap gap-2">
            {INSIGHT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="mb-6 text-sm text-muted-foreground">
            Showing {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            {filter !== "All" ? ` in ${filter}` : ""}
          </p>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-xs font-semibold ${INSIGHT_CATEGORY_COLORS[article.category]}`}>
                    {article.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{article.readTime}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{article.date}</span>
                  </div>
                  <h3 className="mb-2 text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">{article.excerpt}</p>
                  {article.tags && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="rounded-full bg-primary/8 px-2 py-0.5 text-[10px] font-medium text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                    <div className="flex items-center gap-2">
                      <div className={`flex h-7 w-7 items-center justify-center rounded-full ${article.author.color} text-xs font-bold text-white`}>
                        {article.author.initials}
                      </div>
                      <div>
                        <p className="text-xs font-semibold leading-none text-foreground">{article.author.name.split(" ").slice(-1)[0]}</p>
                        <p className="mt-0.5 text-xs leading-none text-muted-foreground">{article.date}</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-semibold text-primary transition-all group-hover:gap-2">
                      Read <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" className="rounded-xl">
              <BookOpen className="mr-2 h-4 w-4" /> More Articles Coming Soon
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
