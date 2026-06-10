import { Link } from "wouter";
import { ALL_SERVICES } from "@/data/services";
import { useSEO } from "@/lib/seo";
import { servicePath, subServicePath } from "@/lib/service-seo";

const MAIN_PAGES = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Testing", href: "/testing" },
  { label: "Training & Workshops", href: "/training" },
  { label: "Insights", href: "/insights" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function SitemapPage() {
  useSEO({
    title: "Sitemap",
    description: "Complete sitemap of Revive Medical Technologies — all services, sub-services, and main pages for medical device development, regulatory compliance, and manufacturing.",
    keywords: "RMT sitemap, medical device services, regulatory compliance services",
    path: "/sitemap",
  });

  return (
    <div className="bg-background min-h-screen pt-28 pb-16">
      <div className="page-container max-w-5xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">Sitemap</h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Browse every page on the RMT website, including all service categories and specialized offerings.
        </p>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Main Pages</h2>
          <ul className="grid sm:grid-cols-2 gap-2">
            {MAIN_PAGES.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="text-primary hover:underline text-sm">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-10">
          <h2 className="font-heading text-2xl font-bold text-foreground">Services</h2>
          {ALL_SERVICES.map((service) => (
            <div key={service.slug} className="border border-border rounded-2xl p-6 bg-card">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                <Link href={servicePath(service.slug)} className="hover:text-primary transition-colors">
                  {service.name}
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{service.tagline}</p>
              <nav aria-label={`${service.name} pages`}>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {service.subServices.map((sub) => (
                    <li key={sub.slug}>
                      <Link
                        href={subServicePath(service.slug, sub.slug)}
                        className="text-sm text-foreground/80 hover:text-primary transition-colors"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
