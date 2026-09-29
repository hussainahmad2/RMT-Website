import { faqsForPath } from "@/data/money-page-faqs";

/** Visible FAQ block for manufacturing / R&D / product-development money pages. */
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
