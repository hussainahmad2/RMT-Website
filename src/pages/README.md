# Pages folder structure

Each route has its own folder with a file named after the folder (e.g. `gallery/gallery.tsx`) so you can edit one screen without touching others.

## Top-level pages

| URL | Edit this file |
|-----|----------------|
| `/` | `home/home.tsx` |
| `/about` | `about/about.tsx` |
| `/contact` | `contact/contact.tsx` |
| `/projects` | `projects/projects.tsx` |
| `/testing` | `testing/testing.tsx` |
| `/training` | `training/training.tsx` |
| `/insights` | `insights/insights.tsx` |
| `/gallery` | `gallery/gallery.tsx` |
| `/careers` | `careers/careers.tsx` |
| `/services` | `services/services.tsx` |

## Services (nested folders)

```
services/
  services.tsx                 → /services (overview)
  software-ai/
    software-ai.tsx            → /services/software-ai
    ai-solutions/
      ai-solutions.tsx         → /services/software-ai/ai-solutions
  product-design/
    product-design.tsx
    3d-design-modelling/
      3d-design-modelling.tsx
  ...
```

- **Service page:** `services/<service-slug>/<service-slug>.tsx`
- **Sub-service page:** `services/<service-slug>/<sub-slug>/<sub-slug>.tsx`

Each file is a thin wrapper. Replace the default export with your own JSX to fully customize that screen, or keep the wrapper and pass props to `ServiceDetail` / `SubServiceDetail` from `services/_shared/`.

## Shared service UI

Reusable layouts, heroes, and grids live in:

- `services/_shared/_shared.tsx` — default templates for all services
- `services/_shared/index.ts` — exports

Routing resolves custom pages automatically via `ServiceRoute.tsx` and `SubServiceRoute.tsx`.

## Layout spacing

Use the `page-container` CSS class or the `PageContainer` component from `@/components/PageContainer` for consistent left/right gutters on every screen.

## Imports

Always use the **lowercase folder** path (e.g. `@/pages/home/home`). Do not add `Home.tsx` shims at the pages root — on Windows they cause circular import errors with the `home/` folder.
