# Surynetra Energy — Corporate Website

A production-ready Next.js corporate site for **Surynetra Energy Private Limited**, positioned as a
serious, engineering-driven renewable energy infrastructure company (Solar EPC, RESCO, Open Access, O&M).

## Stack

- Next.js 16 (App Router, Turbopack) + TypeScript
- Tailwind CSS v4 (CSS-variable-based brand theme in `app/globals.css`)
- lucide-react icons
- Server Components by default; client components only where interactive (forms, calculator, filters, accordions)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Project Structure

```
app/                      Routes (App Router)
  page.tsx                 Home
  about/                   About
  solutions/                Solutions index + epc/resco/open-access/om
  resco/                    RESCO process page
  open-access/               Redirects to /solutions/open-access
  projects/                  Project portfolio (client-side filterable)
  sustainability/            Sustainability + impact counters
  calculator/                Energy savings calculator
  contact/                   Lead form + contact details
  insights/                  Blog/insights listing
  legal/                     Privacy, Terms, Disclaimer
  careers/                   Careers stub
  api/leads/route.ts         Lead capture API (POST)
  sitemap.ts / robots.ts     Technical SEO

components/
  layout/                   Navbar, Footer, Logo
  sections/                 Hero, ServiceCard, CapabilityStrip, FAQAccordion,
                             ProjectCard, BlogCard, AnimatedCounter
  diagrams/                 EnergyFlowDiagram, RescoFlowDiagram,
                             OpenAccessDiagram, ProcessTimeline
  forms/                    LeadForm, Calculator
  ui/                       SectionHeader, StatCard, CTASection, Disclaimer

lib/
  constants/                company.ts (single source of contact/nav config),
                             services.ts, projects.ts, faqs.ts, blog.ts
  calculations/             solar-calculator.ts — modular estimate engine
  leads/                    store.ts (placeholder storage), validate.ts

types/index.ts              Shared TypeScript interfaces
```

## Content & Configuration

All company-identifying details (phone, email, address, social links, disclaimers) live in
**`lib/constants/company.ts`**. Update that one file to rebrand contact info across the whole site.

Sample/placeholder content is explicitly labeled in the UI and in code comments:
- **Projects** (`lib/constants/projects.ts`) — 4 sample entries marked `isSample: true` and shown with a
  "Sample Project" badge. Replace with real projects (or wire to a CMS/DB) before launch.
- **Blog posts** (`lib/constants/blog.ts`) — 4 placeholder articles, structured for future migration to
  MDX/CMS/database.
- **Sustainability counters** — set to `0` placeholders; wire to verified company figures.
- **Trust signals / certifications / partner logos** — intentionally omitted; no logos or claims were
  fabricated. Add a `TrustSignals` section once real certifications/partners are confirmed.

No company facts, clients, certifications, project numbers, financial results, or regulatory approvals
were invented anywhere in the codebase.

## Energy Savings Calculator

`lib/calculations/solar-calculator.ts` is a self-contained, swappable estimation engine. All assumptions
(generation per kWp, system cost per kWp, illustrative RESCO energy cost, grid emission factor) are named
constants at the top of the file — replace with verified engineering/financial assumptions before using
this for real customer-facing numbers. All calculator output is labeled "Indicative estimate — subject to
technical and commercial feasibility."

## Lead Capture

`POST /api/leads`:
1. Basic per-IP rate limiting (in-memory — swap for Redis/Upstash in multi-instance deployments)
2. Honeypot field (`website`) for basic spam protection
3. Server-side validation (`lib/leads/validate.ts`)
4. Storage via `lib/leads/store.ts` — **currently writes to a local `.data/leads.json` file** as a working
   placeholder. Replace `saveLead()` with a real integration (CRM API, email notification, Google Sheets,
   or a database) before production use. The API route itself does not need to change.

## SEO

- Per-page `metadata` exports (title, description, canonical)
- OpenGraph + Twitter card metadata in the root layout
- JSON-LD Organization + WebSite schema
- `sitemap.ts` and `robots.ts`
- Semantic headings, alt-text-ready image components, accessible forms/nav

## Deployment

Works out of the box on **Vercel**, **Railway**, or **Cloudflare** (Next.js adapter). No required env vars
for the current placeholder lead storage; add secrets (CRM API keys, email provider keys, etc.) once a real
`saveLead()` integration is implemented, and read them via `process.env`.

## Fonts

The layout currently uses the system font stack (see `app/globals.css`) rather than `next/font/google`,
because the build environment here had no outbound access to `fonts.googleapis.com`. If your deployment
environment has network access and you want a custom typeface, swap in `next/font/google` or a self-hosted
font via `next/font/local` in `app/layout.tsx`.

## Verified in this build

- `npx tsc --noEmit` — clean
- `npx eslint .` — clean
- `npm run build` — succeeds, all 22 routes prerendered
- Manual smoke test of every route (200/307 as expected) and a live `POST /api/leads` submission

## Remaining items that require actual Surynetra company data

- Real logo (`/public/logo.svg`) — a text-based placeholder logo component is in `components/layout/Logo.tsx`
- Real phone/email/office address/WhatsApp number/Google Maps embed (`lib/constants/company.ts`)
- Real project portfolio entries, capacities, locations, statuses
- Real sustainability figures (capacity, generation, CO₂ avoided, businesses powered)
- Certifications, EPC/technology/financial partner logos (none fabricated — add once supplied)
- Final licensed photography (utility-scale solar, industrial rooftop, substations, engineers on site)
  to replace the current CSS-gradient placeholders in the Hero and Project cards
- Reviewed legal copy for Privacy Policy, Terms, and Disclaimer pages
- A production lead-storage integration (CRM/email/DB) to replace the local JSON placeholder
- State-specific Open Access regulatory content, reviewed by legal/compliance
