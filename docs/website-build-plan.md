# SecCon Website — Build Plan & Decisions Log

*Last updated: May 2026*

---

## Project Goal

Build the official web presence for SecCon Group — a Service-Disabled Veteran Owned Small Business (SDVOSB) + Minority Business Enterprise (MBE) security contracting company. Primary audience: DoD contracting officers and government agencies vetting contractors before awarding contracts. Secondary: job seekers and potential teaming partners.

---

## Design References

| Site | Why It's Referenced |
|---|---|
| [constellis.com](https://constellis.com) | Dominant PSC — gold standard layout, dark navy/charcoal palette, institutional authority |
| [gov2x.com](https://gov2x.com) | Defense contractor — cinematic video hero, clean sans-serif, "mission-critical" tone |

**Design direction:** Dark navy background, ice blue + platinum accents (matching SecCon logo), full-screen animated Earth hero, clean and minimal — no bloat.

---

## Approved Tech Stack

| Layer | Decision | Reason |
|---|---|---|
| Framework | **Next.js 14** (App Router, static export) | `output: 'export'` = pure HTML/CSS/JS, no server. React ecosystem for Three.js. Easy Vercel deploy. |
| Styling | **Tailwind CSS** | Utility-first, custom dark theme, zero runtime overhead |
| Hero Animation | **Three.js** | Real-time rotating 3D Earth with NASA Blue Marble texture + atmosphere shader |
| Hosting | **Vercel** (free tier) | Zero-config for Next.js, custom domain (seccon.com), auto HTTPS |
| Icons | **Lucide React** | Clean, lightweight |
| Fonts | **Oswald** (headings) + **Inter** (body) | Military/institutional authority feel |

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `bg-primary` | `#080C14` | Page background (near-black navy) |
| `bg-surface` | `#0F1624` | Cards, sections |
| `border` | `#1E2D45` | Dividers, card borders |
| `accent-blue` | `#4A9ECC` | Ice blue — primary CTA, highlights (matches logo handle) |
| `accent-silver` | `#C0C8D0` | Platinum/silver — secondary (matches logo tines) |
| `accent-gold` | `#B8960C` | SDVOSB/MBE badges, callouts |
| `text-primary` | `#FFFFFF` | Headings, main text |
| `text-secondary` | `#8899AA` | Body text, captions |

---

## Site Architecture

```
src/
├── app/
│   ├── layout.tsx              # Root layout: Navbar + Footer
│   ├── page.tsx                # Home
│   ├── about/page.tsx          # About Us
│   ├── what-we-do/page.tsx     # What We Do
│   ├── who-we-serve/page.tsx   # Who We Serve
│   ├── careers/page.tsx        # Careers
│   └── contact/page.tsx        # Contact Us
├── components/
│   ├── Navbar.tsx              # Sticky top nav
│   ├── Footer.tsx              # Multi-col footer + social links
│   ├── HeroEarth.tsx           # Three.js rotating Earth (client component)
│   ├── PageHero.tsx            # Inner-page hero banner (reusable)
│   ├── ServiceCard.tsx         # Service/capability card (reusable)
│   └── ValuesBanner.tsx        # Trust · Performance · Dedication tagline strip
└── lib/
    └── earth.ts                # Three.js scene, globe geometry, atmosphere
public/
└── textures/                   # NASA Blue Marble texture maps
```

---

## Page-by-Page Content Plan

### Home (`/`)
- Full-viewport Three.js rotating Earth hero
- Headline: *"Trusted Partner. Critical Mission."*
- Values strip: Trust · Performance · Dedication · Accountability · Results
- 3-column service preview cards (Training | Protective Security | Mentor & Advising)
- SDVOSB + MBE badges
- CTA: "Serving U.S. Government Agencies, Defense Sectors & Intelligence Communities"

### About Us (`/about`)
- PageHero (dark)
- SDVOSB + MBE certification badges
- Mission statement
- Founder/founder-era operational experience

### What We Do (`/what-we-do`)
- Intro paragraph
- Service cards with icons:
  - Canine Unit Development & Handler Training
  - Physical Security Assessment & Personnel Deployment
  - Law Enforcement Professional Development & Security Sector Reform
  - Precision Marksman & Counter-Sniper Training
  - Weapons Systems & Marksmanship Qualification Training
  - Combat Medical (TCCC) Training & Deployable Medical Personnel

### Who We Serve (`/who-we-serve`)
- 6-card capability grid
- "Why Trust Us" (4 pillars: Readiness, Compliance, Global Footprint, Vetted Personnel)
- Compliance statement: ITAR | FAR | Active SAM.gov | Cleared Personnel

### Careers (`/careers`)
- "Future roles posted here" placeholder
- Fraud Warning block
- Available Roles note

### Contact Us (`/contact`)
- 3-column cards: Corporate HQ | Media | HR/Recruitment

### Footer (all pages)
- Logo + tagline
- Quick links
- Social links: Instagram, Facebook, Twitter (placeholder until accounts created)
- SDVOSB + MBE badges
- CAGE code / UEI / SAM.gov active status (once registered)

---

## Market Research–Informed Additions

Based on competitive research, these sections should be added beyond the original brief:

### Phase 1 (Launch)
- [ ] Downloadable **Capabilities Statement PDF** (1-page — standard for gov contracting)
- [ ] **Compliance / Certifications** section on Who We Serve or footer (ITAR, FAR, NISPOM, CMMC)
- [ ] **SDVOSB + MBE badges** in header and footer with SBA verification links
- [ ] **NAICS Codes** listed on Contact or About page

### Phase 2 (Post-Launch)
- [ ] **How to Work With Us** page — step-by-step procurement guide for contracting officers
- [ ] **Contract Vehicles** page — list OASIS+, GSA Schedule, etc. as they're acquired
- [ ] **Leadership / Team** page — founder bio, military background, certifications
- [ ] **Past Performance** section — even anonymized examples once available
- [ ] **Teaming & Subcontracting** section — invite primes to contact SecCon for diverse sub opportunities

---

## Three.js Earth Implementation Notes

- `THREE.SphereGeometry` with NASA Blue Marble texture (public domain)
- Atmosphere glow: secondary sphere with `AdditiveBlending` shader
- Rotation: slow Y-axis spin (~0.001 rad/frame)
- Background: CSS gradient `#000000 → #080C14`
- Wrapped in `'use client'` component, lazy-loaded with `next/dynamic` (no SSR)
- `ResizeObserver` for responsive canvas

---

## Deployment Plan

1. Build → `npm run build` → `out/` directory
2. Connect Vercel project to GitHub repo
3. Add custom domain `seccon.com` in Vercel dashboard
4. Vercel auto-provisions HTTPS via Let's Encrypt
5. Update DNS A/CNAME records at domain registrar

---

## Implementation Order

1. ~~Save full audio transcripts to `docs/`~~ ✅
2. ~~Market research to `docs/`~~ ✅
3. Init Next.js 14 + Tailwind in project root
4. `next.config.ts` — static export + image config
5. `tailwind.config.ts` — custom colors + fonts
6. `Navbar.tsx` + `Footer.tsx`
7. `HeroEarth.tsx` — Three.js component
8. `Home` page
9. Remaining 5 pages
10. Capabilities Statement PDF
11. Polish: responsive, hover states, ARIA
12. `npm run build` → verify static output
13. Deploy to Vercel

---

## Decisions Log

| Date | Decision | Rationale |
|---|---|---|
| May 2026 | Next.js 14 + Tailwind + Three.js | Static export, React ecosystem for 3D animation, Vercel zero-config deploy |
| May 2026 | Vercel hosting | Free tier, custom domain, auto HTTPS, zero Next.js config |
| May 2026 | 3D animated Earth hero (Three.js) | Matches client brief ("rotating Earth from space"), premium feel, no video file needed |
| May 2026 | Oswald headings + Inter body | Military/institutional authority, matches constellis.com tone |
| May 2026 | Add Capabilities Statement PDF | Standard government contracting requirement; top competitors all have one |
| May 2026 | Reframe service names to gov-buyer language | Contracting officers search by technical terms, not casual descriptions |
| May 2026 | Phase 1 / Phase 2 content split | Launch with clean MVP; add contract vehicles + past performance as company matures |
