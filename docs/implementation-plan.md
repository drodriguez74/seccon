# SecCon Group Website — Implementation Plan

## Context
Building the official web presence for SecCon Group, a Service-Disabled Veteran Owned Small Business (SDVOSB) and Minority Business Enterprise (MBE) in private military/security contracting. The primary audience is DoD and US government agencies who vet contractors by reviewing their website before awarding contracts. The site must project institutional authority, operational competence, and credibility — on par with constellis.com and gov2x.com.

All content is finalized in `docs/seccon-website-brief.md`. Full audio transcripts still need to be saved to `docs/` (currently only summaries exist there; verbatim transcripts live in `/tmp/transcripts/`).

---

## Step 0 — Save Full Audio Transcripts to /docs

Save verbatim transcripts from `/tmp/transcripts/audio1.txt`, `audio2.txt`, `audio3.txt` into:
- `docs/transcript-audio1.md`
- `docs/transcript-audio2.md`
- `docs/transcript-audio3.md`

---

## Tech Stack Decision

**Recommended: Next.js 14 (App Router) + Tailwind CSS + Three.js**

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 (static export) | `output: 'export'` generates pure HTML/CSS/JS — no server needed. React ecosystem enables Three.js animations. Easy Vercel deployment (free). |
| Styling | Tailwind CSS | Utility-first, consistent dark theme, no runtime overhead, pairs well with the design system |
| Animation / Hero | Three.js | Rotating 3D Earth with atmosphere shader — matches the "viewed from space" brief exactly |
| Deployment | Vercel (free tier) | Zero-config for Next.js, custom domain (seccon.com), HTTPS auto-provisioned |
| Icons | Lucide React | Clean, lightweight icon set |
| Fonts | Inter (body) + Bebas Neue or Oswald (headings) | Military/institutional feel matching constellis.com |

**Why not alternatives:**
- Plain HTML/CSS: Harder to maintain; no component reuse for nav/footer across pages
- Astro: Less ecosystem for Three.js integration and future extensibility
- Create React App / Vite only: No static routing out of the box

---

## Design System

**Color Palette (matching reference sites + SecCon branding):**
- Background: `#080C14` (near-black navy)
- Surface: `#0F1624` (dark navy)
- Border/divider: `#1E2D45`
- Primary accent: `#4A9ECC` (ice blue — matches logo handle)
- Secondary accent: `#C0C8D0` (platinum/silver — matches logo tines)
- Gold highlight: `#B8960C` (for SDVOSB/MBE badges)
- Text primary: `#FFFFFF`
- Text secondary: `#8899AA`

**Typography:**
- Headings: `Oswald` (bold, military, authority)
- Body: `Inter` (clean, readable)
- Accent/tagline: tracking-widest uppercase spans

---

## Site Architecture

```
seccon/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout: nav + footer
│   │   ├── page.tsx            # Home (hero + values + capabilities preview)
│   │   ├── about/page.tsx      # About Us
│   │   ├── what-we-do/page.tsx # What We Do + service cards
│   │   ├── who-we-serve/page.tsx # Who We Serve + capability grid
│   │   ├── careers/page.tsx    # Careers + fraud warning
│   │   └── contact/page.tsx    # Contact Us
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky top nav with dropdown-ready structure
│   │   ├── Footer.tsx          # Multi-col footer with quick links + social
│   │   ├── HeroEarth.tsx       # Three.js rotating Earth (client component)
│   │   ├── PageHero.tsx        # Reusable inner-page hero banner
│   │   ├── ServiceCard.tsx     # Reusable service/capability card
│   │   └── ValuesBanner.tsx    # "Trust · Performance · Dedication · Accountability · Results"
│   └── lib/
│       └── earth.ts            # Three.js scene setup, globe geometry, atmosphere
├── public/
│   └── textures/               # Earth texture maps (NASA Blue Marble)
├── next.config.ts              # output: 'export', basePath if needed
└── tailwind.config.ts          # Custom colors + fonts
```

---

## Page-by-Page Plan

### Home (`/`)
- Full-viewport Three.js rotating Earth hero with overlay headline: *"Trusted Partner. Critical Mission."*
- Values banner: `Trust · Performance · Dedication · Accountability · Results`
- 3-column service preview cards (Training, Protective Security, Mentor & Advising)
- CTA strip: "Serving U.S. Government Agencies, Defense Sectors, and Intelligence Communities"

### About Us (`/about`)
- PageHero with dark imagery
- SDVOSB + MBE badges (styled pill components)
- Mission statement copy from brief
- Thin divider line sections

### What We Do (`/what-we-do`)
- Intro paragraph
- 3 service cards with icons (Training, Protective Security, Mentor & Advising)

### Who We Serve (`/who-we-serve`)
- Intro + commitment paragraph
- 6-card capability grid (Global Logistics, Tactical Security, Law Enforcement, Mission Training, Intelligence Support, Contingency Operations)
- "Why Trust Us" section (4 trust pillars: Readiness, Compliance, Global Footprint, Vetted Personnel)

### Careers (`/careers`)
- "Job Search" section with placeholder state ("Future roles posted here")
- Fraud Warning block (styled warning card with icon)
- Available Roles note

### Contact Us (`/contact`)
- 3-column contact cards (Corporate HQ, Media, HR/Recruitment)
- Placeholder phone/email fields (to be filled when domain is live)

### Footer (all pages)
- Left: Logo + tagline
- Center: Quick links
- Right: Contact info + social icons (Instagram, Facebook, Twitter — placeholder links)
- Bottom bar: Copyright + legal links

---

## Three.js Earth Implementation Notes

- Use `THREE.SphereGeometry` with NASA Blue Marble texture (free, public domain)
- Add atmosphere glow with `AdditiveBlending` shader layer
- Slow continuous rotation on Y-axis (~0.001 rad/frame)
- Dark space background (#000000 → #080C14 gradient via CSS overlay)
- Wrap in `'use client'` Next.js component, lazy-loaded with `next/dynamic` to avoid SSR issues
- Resize observer for responsive canvas

---

## Implementation Order

1. Save full audio transcripts to `docs/`
2. Init Next.js 14 project with Tailwind in `/Users/darwinrodriguez/projects/seccon/`
3. Configure `next.config.ts` for static export + Tailwind config with custom colors/fonts
4. Build `Navbar` + `Footer` components
5. Build `HeroEarth` Three.js component
6. Build `Home` page assembling hero + values + service previews
7. Build remaining 5 pages (About, What We Do, Who We Serve, Careers, Contact)
8. Polish: responsive breakpoints, hover states, accessibility (ARIA labels)
9. Final review against reference sites

---

## Verification

- `npm run build` produces static `out/` directory with no errors
- Open `out/index.html` locally — Earth rotates, nav links work
- Test all 6 pages for content accuracy against `docs/seccon-website-brief.md`
- Check mobile responsiveness at 375px, 768px, 1280px viewports
- Verify no console errors in browser devtools
