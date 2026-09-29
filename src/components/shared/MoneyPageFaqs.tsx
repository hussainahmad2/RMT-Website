import { Link } from "wouter";
import { faqsForPath, MONEY_PAGE_RELATED_LINKS } from "@/data/money-page-faqs";

/** Visible FAQ block for money pages. */
export function MoneyPageFaqs({ path }: { path: string }) {
  const faqs = faqsForPath(path);
  if (!faqs?.length) return null;

  return (
    <section className="border-t border-border bg-secondary/20 py-16 sm:py-20" aria-labelledby="money-page-faqs">
      <div className="page-container max-w-3xl">
        <h2 id="money-page-faqs" className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-border bg-card px-5 py-4"
            >
              <summary className="cursor-pointer font-heading text-base font-semibold text-foreground sm:text-lg">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Cross-links between manufacturing, R&D, product-dev, regulatory, and SaMD. */
export function MoneyPageRelatedServices({ currentPath }: { currentPath: string }) {
  const links = MONEY_PAGE_RELATED_LINKS.filter((link) => link.href !== currentPath);
  if (!links.length) return null;

  return (
    <section className="border-t border-border bg-background py-14 sm:py-16" aria-labelledby="money-related-services">
      <div className="page-container max-w-4xl">
        <h2 id="money-related-services" className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
          Related medical device services
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Continue with ISO 13485 manufacturing, medical device R&D, product development, regulatory compliance, or SaMD software.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
