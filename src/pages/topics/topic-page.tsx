import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { getRouteSeo } from "@/lib/route-seo";
import { getMoneyTopic, MONEY_TOPICS } from "@/data/money-topics";
import { MONEY_PAGE_RELATED_LINKS } from "@/data/money-page-faqs";

type TopicPageProps = {
  params: { slug: string };
};

export default function TopicPage({ params }: TopicPageProps) {
  const topic = getMoneyTopic(params.slug);
  const path = `/topics/${params.slug}`;
  const routeSeo = getRouteSeo(path);
  useSEO(routeSeo);

  if (!topic) {
    return (
      <div className="bg-background min-h-screen pt-16 sm:pt-[4.5rem]">
        <div className="page-container py-20">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Topic not found</h1>
          <p className="text-muted-foreground mb-6">
            This topic page is not available. Browse RMT medical device services or contact our team.
          </p>
          <Button asChild className="rounded-xl">
            <Link href="/services">Browse services</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedTopics = topic.relatedTopicSlugs
    .map((slug) => MONEY_TOPICS.find((t) => t.slug === slug))
    .filter(Boolean);

  return (
    <div className="bg-background min-h-screen pt-16 sm:pt-[4.5rem]">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="page-container relative py-16 md:py-24">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Revive Medical Technologies
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-5">
              {topic.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{topic.pitch}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-xl">
                <Link href="/contact">
                  Talk to RMT
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-xl">
                <Link href={topic.relatedPath}>Related service details</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="page-container py-14 md:py-20">
        <AnimatedSection className="max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Why teams search for {topic.keyword}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{topic.description}</p>
          <p className="text-muted-foreground leading-relaxed mb-8">{topic.body}</p>
          <ul className="space-y-4">
            {topic.bullets.map((item) => (
              <li key={item} className="flex gap-3 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="page-container py-14 md:py-20">
          <AnimatedSection className="max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              How RMT delivers {topic.keyword}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A practical engagement path from inquiry to delivery for regulated MedTech programs.
            </p>
            <ol className="space-y-4 list-decimal list-inside">
              {topic.processSteps.map((step) => (
                <li key={step} className="text-muted-foreground leading-relaxed pl-1">
                  <span className="text-foreground font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </AnimatedSection>
        </div>
      </section>

      <section className="page-container py-14 md:py-20">
        <AnimatedSection className="max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {topic.faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {relatedTopics.length > 0 && (
        <section className="border-t border-border bg-muted/20">
          <div className="page-container py-14 md:py-16">
            <AnimatedSection className="max-w-3xl">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Related topics</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {relatedTopics.map(
                  (t) =>
                    t && (
                      <li key={t.slug}>
                        <Link
                          href={`/topics/${t.slug}`}
                          className="text-primary hover:underline font-medium"
                        >
                          {t.title}
                        </Link>
                      </li>
                    )
                )}
              </ul>
            </AnimatedSection>
          </div>
        </section>
      )}

      <section className="page-container py-12 md:py-14">
        <AnimatedSection className="max-w-3xl">
          <h2 className="font-heading text-xl font-bold text-foreground mb-4">Core RMT services</h2>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {MONEY_PAGE_RELATED_LINKS.slice(0, 8).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-primary hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </section>

      <section className="page-container py-14 md:py-20">
        <AnimatedSection className="max-w-3xl rounded-2xl border border-border bg-card p-8 md:p-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
            Ready to discuss {topic.keyword}?
          </h2>
          <p className="text-muted-foreground mb-6">
            Tell us your device class, markets, and timeline — we will map the right RMT pathway.
          </p>
          <Button asChild className="rounded-xl">
            <Link href="/contact">
              Request a consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </section>
    </div>
  );
}
