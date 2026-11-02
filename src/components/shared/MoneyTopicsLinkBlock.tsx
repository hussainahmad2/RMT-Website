import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { MONEY_TOPICS } from "@/data/money-topics";

type MoneyTopicsLinkBlockProps = {
  /** When set, only topics whose relatedPath starts with this prefix */
  relatedPathPrefix?: string;
  /** Max links to show (default 24 on hubs, fewer on service pages) */
  limit?: number;
  title?: string;
  description?: string;
};

/** Crawlable internal links from hubs → /topics/* money landings. */
export function MoneyTopicsLinkBlock({
  relatedPathPrefix,
  limit = 24,
  title = "Solution topics",
  description = "Commercial keyword landings mapped to RMT manufacturing, regulatory, software, and testing pathways.",
}: MoneyTopicsLinkBlockProps) {
  const topics = MONEY_TOPICS.filter((t) =>
    relatedPathPrefix
      ? t.relatedPath === relatedPathPrefix || t.relatedPath.startsWith(`${relatedPathPrefix}/`)
      : true
  ).slice(0, limit);

  if (topics.length === 0) return null;

  return (
    <section className="py-16 border-t border-border bg-secondary/15">
      <div className="page-container">
        <AnimatedSection className="mb-8 max-w-3xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Browse by intent
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </AnimatedSection>
        <nav aria-label="Money topic landings" className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <Link
              key={t.slug}
              href={`/topics/${t.slug}`}
              className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border border-border bg-card text-foreground hover:border-primary/40 hover:text-primary transition-colors"
            >
              {t.keyword}
              <ArrowRight className="w-3.5 h-3.5 opacity-60" />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
