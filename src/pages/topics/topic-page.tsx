import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { getRouteSeo } from "@/lib/route-seo";
import { getMoneyTopic } from "@/data/money-topics";

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
          <Button asChild className="rounded-xl">
            <Link href="/services">Browse services</Link>
          </Button>
        </div>
      </div>
    );
  }

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
          <p className="text-muted-foreground leading-relaxed mb-8">{topic.description}</p>
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
        </div>
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
