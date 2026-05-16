# RMT USA

A modern, professional industrial company website for RMT USA — showcasing services, projects, careers, and global presence with cinematic animations and a bold industrial design.

## Run & Operate

- `pnpm --filter @workspace/rmt-usa run dev` — run the frontend (port assigned by workflow)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS v4
- Routing: wouter
- Animations: framer-motion
- UI: shadcn/ui components
- Icons: lucide-react

## Where things live

- `artifacts/rmt-usa/src/pages/` — page components (Home, About, Services, Projects, Careers, Contact)
- `artifacts/rmt-usa/src/pages/services/` — individual service detail pages
- `artifacts/rmt-usa/src/components/` — shared components (Navbar, Footer, WorldMap, etc.)
- `artifacts/rmt-usa/src/App.tsx` — router and page registration
- `artifacts/rmt-usa/src/index.css` — theme and CSS variables

## Architecture decisions

- Purely frontend (no backend) — static site with all pages client-side rendered via wouter
- All service pages are individual routes under /services/[slug]
- World map uses SVG-based rendering with office/project location markers
- YouTube company video embedded via modal/lightbox on the home page
- framer-motion handles all scroll-triggered reveals and page transitions

## Product

RMT USA website with:
- Home page: hero, stats, services grid, world map with branch locations, projects showcase
- About page: company history, mission/vision/values, team
- Services page: all 12 services with clickable cards linking to detail pages
- Individual service pages: Mechanical, Electrical, Piping, Welding & Fabrication, Civil & Structural, Instrumentation, Maintenance & Turnaround, Scaffolding, Insulation, Painting & Coating, Project Management
- Projects page: portfolio with industry filters
- Careers page: job listings and application form
- Contact page: form + office locations

## User preferences

- Bold, dark industrial theme (deep navy/charcoal + electric orange accent)
- Smooth framer-motion animations throughout
- No emojis anywhere in the UI
- All service cards must be clickable and navigate to their respective detail pages

## Gotchas

- Google Fonts @import must appear BEFORE @import "tailwindcss" in index.css
- CSS variables in index.css use space-separated HSL (no hsl() wrapper)
- All red placeholder values in index.css must be replaced with real theme colors

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- YouTube video: https://www.youtube.com/watch?v=LDu3kqfqyPw
- Original site: https://rmt-usa.com/
