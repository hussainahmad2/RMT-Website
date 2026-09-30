import React from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, ExternalLink, Copy } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/seo";
import { getRouteSeo } from "@/lib/route-seo";
import {
  BACKLINK_TARGETS,
  CITATION_NAP,
  GSC_FOLLOWUPS,
} from "@/data/media-citations";

export default function MediaPage() {
  useSEO(getRouteSeo("/media"));

  const copyText = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // ignore — clipboard may be blocked
    }
  };

  return (
    <div className="bg-background min-h-screen pt-16 sm:pt-[4.5rem]">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060d17] via-[#0a1628] to-primary/30" />
        <div className="page-container relative z-10 py-16 md:py-20">
          <AnimatedSection>
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Media & citations</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight">
              Official brand kit for directories and partners
            </h1>
            <p className="mt-5 text-white/70 text-lg max-w-2xl leading-relaxed">
              Use this page when claiming Google Business Profile, supplier directories, or association listings —
              so name, address, phone, and website stay consistent everywhere.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="page-container grid lg:grid-cols-[1fr_340px] gap-10">
          <div className="space-y-10">
            <AnimatedSection className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Official company name</h2>
              <p className="text-foreground font-semibold text-lg">{CITATION_NAP.legalName}</p>
              <p className="text-muted-foreground text-sm mt-1">Also: {CITATION_NAP.shortName} / RMT USA</p>
              <p className="mt-5 text-muted-foreground leading-relaxed">{CITATION_NAP.boilerplate}</p>
              <Button
                type="button"
                variant="outline"
                className="mt-5"
                onClick={() => void copyText(CITATION_NAP.boilerplate)}
              >
                <Copy className="w-4 h-4 mr-2" /> Copy boilerplate
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={0.05} className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">NAP (use exactly)</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="rounded-xl bg-muted/40 border border-border p-4">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                    United States HQ
                  </p>
                  <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
                    {CITATION_NAP.usAddress.oneLine}
                  </p>
                </div>
                <div className="rounded-xl bg-muted/40 border border-border p-4">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                    Pakistan office
                  </p>
                  <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
                    {CITATION_NAP.pkAddress.oneLine}
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-foreground">
                <li>
                  <span className="text-muted-foreground">Phone:</span> {CITATION_NAP.phone}
                </li>
                <li>
                  <span className="text-muted-foreground">Email:</span> {CITATION_NAP.email}
                </li>
                <li>
                  <span className="text-muted-foreground">Website:</span>{" "}
                  <a href={CITATION_NAP.website} className="text-primary hover:underline">
                    {CITATION_NAP.website}
                  </a>
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.08} className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                Priority listings to claim
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                These are the highest-value next steps for backlinks and local citations. Claim each with the NAP above.
              </p>
              <div className="space-y-4">
                {BACKLINK_TARGETS.map((target) => (
                  <div key={target.name} className="rounded-xl border border-border p-4">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <h3 className="font-semibold text-foreground">{target.name}</h3>
                      <a
                        href={target.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        Open <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{target.why}</p>
                    <p className="text-sm text-foreground">
                      <span className="font-medium">Action:</span> {target.action}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Google Search Console follow-ups
              </h2>
              <ul className="space-y-3">
                {GSC_FOLLOWUPS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
                Logo assets
              </h2>
              <div className="rounded-xl bg-[#060d17] p-4 mb-3 flex items-center justify-center">
                <img src="/rmt-logo.webp" alt="RMT logo" className="h-12 w-auto" />
              </div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/rmt-logo.webp" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                    Logo (webp)
                  </a>
                </li>
                <li>
                  <a href="/rmt-icon.png" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                    Icon / favicon source
                  </a>
                </li>
                <li>
                  <a href="/opengraph.jpg" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                    Open Graph image
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
                Preferred service links
              </h2>
              <ul className="space-y-2">
                {CITATION_NAP.moneyPages.map((page) => (
                  <li key={page.href}>
                    <a href={page.href} className="text-sm font-medium text-primary hover:underline">
                      {page.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-border space-y-2">
                {CITATION_NAP.social.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-foreground/80 hover:text-primary"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
              <Button asChild className="w-full mt-5">
                <Link href="/contact">
                  Contact / media inquiry <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
