import React from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, MapPin, Calendar, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { getRouteSeo } from "@/lib/route-seo";
import {
  getProjectBySlug,
  PROJECT_CASE_STUDIES,
  projectPath,
} from "@/data/projects-content";

type CaseStudyPageProps = {
  params: { slug: string };
};

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = getProjectBySlug(params.slug);
  const routeSeo = getRouteSeo(`/projects/${params.slug}`);
  useSEO({
    ...routeSeo,
    ogImage: project?.image ?? routeSeo.ogImage,
  });

  if (!project) {
    return (
      <div className="bg-background min-h-screen pt-16 sm:pt-[4.5rem]">
        <div className="page-container py-20">
          <AnimatedSection className="max-w-2xl">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Case study not found</h1>
            <p className="text-muted-foreground mb-6">
              This project may have moved. Browse the full portfolio for medical device case studies.
            </p>
            <Button asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to projects
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    );
  }

  const primaryService = project.relatedServices[0];
  const related = PROJECT_CASE_STUDIES.filter((p) => p.slug !== project.slug && p.category === project.category).slice(
    0,
    3
  );

  return (
    <div className="bg-background min-h-screen pt-16 sm:pt-[4.5rem]">
      <section className="relative min-h-[360px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${project.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/35" />
        <div className="page-container relative z-10 pb-12 pt-28">
          <AnimatedSection>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> All case studies
            </Link>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-0.5 bg-primary text-white rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
              {project.title}
            </h1>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/75">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" />
                {project.year}
              </span>
              <span className="font-medium text-white">{project.client}</span>
              <span className="px-2.5 py-0.5 bg-white/10 text-white text-xs rounded-full font-semibold">
                {project.category}
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="page-container grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-14">
          <article className="space-y-10">
            <AnimatedSection>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Project overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.05} className="grid sm:grid-cols-2 gap-5">
              <div className="bg-muted/50 rounded-xl p-5 border border-border">
                <h2 className="font-semibold text-foreground mb-2">The challenge</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
              </div>
              <div className="bg-primary/5 border border-primary/15 rounded-xl p-5">
                <h2 className="font-semibold text-foreground mb-2">Our solution</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Key outcomes</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex items-center gap-2.5 bg-card border border-border rounded-lg px-3 py-3"
                  >
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{outcome}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-2">
                Need the same capability?
              </h2>
              <p className="text-muted-foreground text-sm mb-5">
                Continue to the matching service page, then request a quote for a similar engagement.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.relatedServices.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary border border-primary/20 bg-primary/5 rounded-full px-3 py-1.5 hover:bg-primary/10"
                  >
                    {svc.label} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {primaryService && (
                  <Button asChild>
                    <Link href={primaryService.href}>
                      View {primaryService.label} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                )}
                <Button asChild variant="outline">
                  <Link href="/contact">
                    Request a quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
                Related services
              </h2>
              <ul className="space-y-2">
                {project.relatedServices.map((svc) => (
                  <li key={svc.href}>
                    <Link href={svc.href} className="text-sm font-medium text-primary hover:underline">
                      {svc.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-border">
                <Button asChild className="w-full">
                  <Link href="/contact">Request a quote</Link>
                </Button>
              </div>
            </div>

            {related.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-5">
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
                  More {project.category.toLowerCase()} work
                </h2>
                <ul className="space-y-3">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={projectPath(item.slug)}
                        className="text-sm text-foreground hover:text-primary transition-colors leading-snug block"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>
    </div>
  );
}
