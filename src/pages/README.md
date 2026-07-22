# Pages folder structure

Each route has its own folder with a matching file (e.g. `gallery/gallery.tsx`).

## Top-level pages

| URL | File |
|-----|------|
| `/` | `home/home.tsx` |
| `/about` | `about/about.tsx` |
| `/contact` | `contact/contact.tsx` |
| `/projects` | `projects/projects.tsx` |
| `/products` | `products/products.tsx` |
| `/testing` | `testing/testing.tsx` |
| `/training` | `training/training.tsx` |
| `/insights` | `insights/insights.tsx` |
| `/gallery` | `gallery/gallery.tsx` |
| `/careers` | `careers/careers.tsx` |
| `/testimonials` | `testimonials/testimonials.tsx` |
| `/pharmaceutical` | `pharmaceutical/pharmaceutical.tsx` |
| `/services` | `services/services.tsx` |

## Services (folder name = URL slug — do not rename)

```
services/<service-slug>/<service-slug>.tsx
services/<service-slug>/<sub-slug>/<sub-slug>.tsx
```

Shared UI lives in `services/_shared/` (`ServiceTemplates.tsx`, detail pages, `*Visuals.tsx`).

## Components

```
src/components/
  layout/   Navbar, Footer, ThemeProvider, PageContainer, ScrollToTop
  home/     ProductShowcase, ServicesSection, WhyRmtSection, PartnerLogos
  shared/   PageHero, PageSection, AnimatedSection, WorldMap, …
  ui/       shadcn primitives
```
