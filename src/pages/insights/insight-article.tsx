import React from "react";
import { Link } from "wouter";
import { ArrowLeft, Calendar, Clock, BookOpen, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { INSIGHT_ARTICLES, INSIGHT_CATEGORY_COLORS } from "@/data/insights-content";
import { getInsightPostDetail } from "@/data/insights-posts";

type InsightArticlePageProps = {
  params: {
    slug: string;
  };
};

const INSIGHTS_SCROLL_KEY = "insights:scroll-y";
const INSIGHTS_RESTORE_KEY = "insights:restore-scroll";

function renderBody(paragraphs: string[]) {
  const blocks: React.ReactNode[] = [];
  let bulletItems: string[] = [];

  const flushBullets = (key: number) => {
    if (!bulletItems.length) return;
    blocks.push(
      <ul key={`bullets-${key}`} className="space-y-3">
        {bulletItems.map((item) => (
          <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
            <span>{item.replace(/^[-•]\s*/, "")}</span>
          </li>
        ))}
      </ul>
    );
    bulletItems = [];
  };

  paragraphs.forEach((para, idx) => {
    const trimmed = para.trim();
    if (!trimmed) return;

    if (/^[-•*]\s+/.test(trimmed)) {
      bulletItems.push(trimmed);
      return;
    }

    flushBullets(idx);
    blocks.push(
      <p key={`para-${idx}`} className="text-base md:text-lg leading-relaxed text-muted-foreground">
        {trimmed}
      </p>
    );
  });

  flushBullets(paragraphs.length);
  return blocks;
}

function uniqueTags(tags: string[]) {
  return Array.from(new Set(tags)).filter(Boolean);
}

export default function InsightArticlePage({ params }: InsightArticlePageProps) {
  const article = INSIGHT_ARTICLES.find((item) => item.id === params.slug);
  const detail = getInsightPostDetail(params.slug);
  const tags = uniqueTags((detail?.tags && detail.tags.length > 0 ? detail.tags : article?.tags ?? []));

  useSEO({
    title: article ? article.title : "Insight Article",
    description: article?.excerpt ?? "Insight article",
    path: `/insights/${params.slug}`,
    ogImage: detail?.heroImage,
  });

  if (!article || !detail) {
    return (
      <div className="bg-background min-h-screen pt-16 sm:pt-[4.5rem]">
        <div className="page-container py-20">
          <AnimatedSection className="max-w-2xl">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Article not found</h1>
            <p className="text-muted-foreground mb-6">
              The requested insight article could not be located.
            </p>
            <Button asChild className="rounded-xl">
              <Link
                href="/insights"
                onClick={() => {
                  window.sessionStorage.setItem(INSIGHTS_RESTORE_KEY, "1");
                  if (!window.sessionStorage.getItem(INSIGHTS_SCROLL_KEY)) {
                    window.sessionStorage.setItem(INSIGHTS_SCROLL_KEY, "0");
                  }
                }}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Insights
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-16 sm:pt-[4.5rem]">
      <article className="page-container pt-4 pb-10 md:pt-6 md:pb-14">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <Link
              href="/insights"
              onClick={() => {
                window.sessionStorage.setItem(INSIGHTS_RESTORE_KEY, "1");
                if (!window.sessionStorage.getItem(INSIGHTS_SCROLL_KEY)) {
                  window.sessionStorage.setItem(INSIGHTS_SCROLL_KEY, "0");
                }
              }}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Link>
          </Button>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${INSIGHT_CATEGORY_COLORS[article.category]}`}>
            {article.category}
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
          <div className="space-y-10">
            <AnimatedSection className="max-w-4xl">
              <div className="mb-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {article.readTime} read
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4" />
                  Source post
                </span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {article.title}
              </h1>
              <div className="mt-4 h-px w-20 bg-primary" />
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.08} className="max-w-4xl">
              <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-sm">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-primary">
                  From the Post
                </p>
                <div className="space-y-5">
                  {renderBody(detail.body)}
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.05} className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl dark:border-white/10 dark:bg-slate-950/70">
              <div className="flex min-h-[24rem] items-center justify-center bg-card p-4 md:min-h-[34rem] md:p-6 dark:bg-slate-950/70">
                <img
                  src={detail.heroImage}
                  alt={article.title}
                  className="max-h-full max-w-full object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {detail.galleryImages.length > 0 && (
          <AnimatedSection delay={0.12} className="mt-10 max-w-6xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Additional Images
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {detail.galleryImages.map((image, i) => (
                <div key={image} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <img
                    src={image}
                    alt={`${article.title} ${i + 2}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}

        {detail.links.length > 0 && (
          <AnimatedSection delay={0.14} className="mt-10 max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Links
            </p>
            <div className="flex flex-wrap gap-2">
              {detail.links.map((link) => (
                <a
                  key={link}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {link}
                </a>
              ))}
            </div>
          </AnimatedSection>
        )}

        {tags.length > 0 && (
          <AnimatedSection delay={0.16} className="mt-10 max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Tags
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-secondary/30 px-3 py-1.5 text-sm font-medium text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        )}
      </article>
    </div>
  );
}
