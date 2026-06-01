# KarmaInMotion88 — Massage Therapy Website

A modern, polished marketing website for **KarmaInMotion88**, the holistic massage
practice of Roxanne Young, LMT in New York City. Rebuilt from scratch as a premium,
fast, accessible brand experience — replacing the original Wix site.

Built with **Next.js (App Router) · React · TypeScript · Tailwind CSS**.

## Highlights

- **Brand-true design system** — palette (deep navy, dusty rose, warm cream) and the
  lotus motif are derived directly from the real KarmaInMotion88 logo. Typography pairs
  **Fraunces** (display) with **Hanken Grotesk** (body).
- **Fully self-hosted media** — every image was scraped from the original CDN,
  downloaded, de-duplicated, and is served locally (`/public/images`). The site has no
  runtime dependency on the original website.
- **Normalized content layer** — all services, packages, hours, posts, and business
  info live in typed modules under `src/data`, so content is easy to maintain.
- **Conversion-focused UX** — a clear booking flow, sticky service booking cards,
  package savings, and personal contact at every step.
- **SEO + accessibility** — per-route metadata, JSON-LD `HealthAndBeautyBusiness`,
  `sitemap.xml`, `robots.txt`, semantic landmarks, a skip link, and reduced-motion support.

## Project structure

```
src/
  app/                     # App Router routes
    page.tsx               # Home
    services/              # Service menu + dynamic [slug] detail pages
    packages/              # Packages & gift cards
    about/  contact/  book/
    blog/                  # Journal list + dynamic [slug] posts
    sitemap.ts  robots.ts  icon.svg  not-found.tsx
    layout.tsx  globals.css
  data/                    # Normalized, typed content (source of truth)
    business.ts services.ts packages.ts posts.ts testimonials.ts types.ts
  lib/
    components/            # Navbar, footer, hero/UI primitives, forms, lotus motif
    format.ts
public/images/             # Locally hosted brand media
raw messy data/            # Original scraped markdown (kept for reference)
```

## Development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

> Note: Tailwind requires `postcss.config.mjs` (included). Without it, no utility
> classes are generated.

## Content notes

All business facts (services, pricing, hours, story, testimonial, blog posts) are
transcribed from the original site — nothing is fabricated. Booking and contact forms
compose an email to the studio (no backend/payment is taken online), matching how the
practice actually operates.

---

Website by [@VoltaNYC](https://nyc.voltanpo.org).
