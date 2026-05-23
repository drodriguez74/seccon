# SecCon Group Website — Requirements Document

*Version 1.0 | May 2026*

---

## 1. Executive Summary

SecCon Group (The Security Contractor Group) is a Service-Disabled Veteran Owned Small Business (SDVOSB) and Minority Business Enterprise (MBE) specializing in security training, force protection, and law enforcement advisory services for international deployment. The company requires an official public website that establishes institutional credibility, supports government contract pursuit, and serves as a professional touchpoint for prospective clients, candidates, and partners.

---

## 2. Business Context

### 2.1 Problem Statement
SecCon Group currently has no public web presence. Before the U.S. Department of Defense and other federal agencies award contracts, they vet contractors by reviewing their website. Without a credible, professional site, SecCon cannot compete for set-aside contracts, attract qualified candidates, or be taken seriously by prime contractors seeking diverse subcontractors.

### 2.2 Business Goals

| # | Goal | Success Metric |
|---|---|---|
| BG-01 | Establish credible web presence for government vetting | Site live at seccon.com before first contract pursuit |
| BG-02 | Communicate SDVOSB + MBE dual certification status | Certifications visible within 3 seconds of page load |
| BG-03 | Attract qualified security/military candidates | Careers page functional and indexed by search engines |
| BG-04 | Support prime contractor teaming inquiries | Contact page with dedicated email routing |
| BG-05 | Position SecCon as DoD-ready within the $28.6B SDVOSB market | Site tone/content matches constellis.com and gov2x.com standard |
| BG-06 | Enable company-branded email infrastructure | @seccon.com email addresses operational (not Gmail/Yahoo) |

### 2.3 Target Audiences

| Audience | Priority | What They Look For |
|---|---|---|
| DoD / Federal Contracting Officers | **Primary** | SDVOSB certification, SAM.gov registration, CAGE code, ITAR compliance, past performance, contract vehicles |
| Prime Contractors (teaming/sub opportunities) | **Primary** | Capabilities, NAICS codes, certifications, contact info |
| Security/Military Job Seekers | **Secondary** | Open roles, company legitimacy, how to apply |
| Media / General Public | **Tertiary** | Company overview, contact info |

### 2.4 Competitive Benchmark
The site must match the design quality and content standard of:
- **constellis.com** — institutional authority, dark navy palette, full-screen hero, structured service taxonomy
- **gov2x.com** — cinematic hero, mission-critical tone, clean sans-serif typography, concise content

---

## 3. Scope

### 3.1 In Scope
- Public-facing marketing website (6 pages)
- Full-screen animated 3D Earth hero (homepage)
- Static informational content on all pages
- Downloadable Capabilities Statement PDF
- Careers job board (placeholder — no backend, no applications)
- Contact page with email routing display
- Social media link placeholders (Instagram, Facebook, Twitter/X)
- SDVOSB + MBE certification badge display
- Compliance and credibility signal section
- Responsive design (mobile, tablet, desktop)
- Deployment to Vercel with custom domain (seccon.com)

### 3.2 Out of Scope (Phase 1)
- Live job application portal / ATS integration
- CMS / content management system
- User login or authentication
- Payment processing
- Blog / news publishing system
- Contract vehicle pages (until vehicles are acquired)
- Past performance case studies (until available)
- Live chat or chatbot
- Backend API or database

---

## 4. Functional Requirements

### 4.1 Navigation

| ID | Requirement | Priority |
|---|---|---|
| FR-NAV-01 | Site shall have a persistent top navigation bar visible on all pages | Must Have |
| FR-NAV-02 | Navigation shall include: Home, About Us, What We Do, Who We Serve, Careers, Contact Us | Must Have |
| FR-NAV-03 | Navigation shall be sticky (remains visible on scroll) | Must Have |
| FR-NAV-04 | Active page shall be visually indicated in the nav | Must Have |
| FR-NAV-05 | Navigation shall collapse into a hamburger menu on mobile (< 768px) | Must Have |
| FR-NAV-06 | SecCon logo shall appear in the top-left of the nav and link to Home | Must Have |

### 4.2 Home Page

| ID | Requirement | Priority |
|---|---|---|
| FR-HOME-01 | Home page shall display a full-viewport (100vw × 100vh) hero section | Must Have |
| FR-HOME-02 | Hero shall render a real-time rotating 3D Earth (Three.js) with starfield background | Must Have |
| FR-HOME-03 | Hero shall display headline: "Trusted Partner. Critical Mission." over the Earth | Must Have |
| FR-HOME-04 | Hero shall display a supporting subheadline and a "Learn More" CTA button | Must Have |
| FR-HOME-05 | Values strip shall display: Trust · Performance · Dedication · Accountability · Results | Must Have |
| FR-HOME-06 | Home page shall display 3 service preview cards (Training, Protective Security, Mentor & Advising) | Must Have |
| FR-HOME-07 | SDVOSB and MBE certification badges shall be visible on the home page | Must Have |
| FR-HOME-08 | A CTA banner shall state: "Serving U.S. Government Agencies, Defense Sectors & Intelligence Communities" | Should Have |

### 4.3 About Us Page

| ID | Requirement | Priority |
|---|---|---|
| FR-ABOUT-01 | Page shall display inner-page hero banner with page title | Must Have |
| FR-ABOUT-02 | SDVOSB + MBE certification badges shall be displayed | Must Have |
| FR-ABOUT-03 | Full "About Us" copy from the website brief shall be displayed | Must Have |
| FR-ABOUT-04 | Mission statement shall be visually highlighted (pull quote or styled block) | Should Have |

### 4.4 What We Do Page

| ID | Requirement | Priority |
|---|---|---|
| FR-WTD-01 | Page shall display the intro paragraph | Must Have |
| FR-WTD-02 | Page shall display 6 service cards, one per core service | Must Have |
| FR-WTD-03 | Each service card shall include: service name, icon, and brief description | Must Have |
| FR-WTD-04 | Services displayed shall use government-buyer language per market research | Must Have |

**Services (government-buyer framing):**
1. Canine Unit Development & Handler Training
2. Physical Security Assessment & Personnel Deployment
3. Law Enforcement Professional Development & Security Sector Reform
4. Precision Marksman & Counter-Sniper Training
5. Weapons Systems & Marksmanship Qualification Training
6. Combat Medical (TCCC) Training & Deployable Medical Personnel

### 4.5 Who We Serve Page

| ID | Requirement | Priority |
|---|---|---|
| FR-WTS-01 | Page shall display intro and commitment paragraph | Must Have |
| FR-WTS-02 | Page shall display 6-card capability grid | Must Have |
| FR-WTS-03 | Page shall display "Why Government Partners Can Trust Us" section with 4 trust pillars | Must Have |
| FR-WTS-04 | Page shall display compliance statement: ITAR \| FAR \| Active SAM.gov \| Cleared Personnel | Must Have |

**Capability cards:**
1. Global Logistics
2. Tactical Security
3. Law Enforcement
4. Mission Training
5. Intelligence Support
6. Contingency Operations

**Trust pillars:**
1. Readiness
2. Strict Compliance (ITAR, FAR, federal regulations)
3. Global Footprint
4. Vetted Personnel (active federal security clearances)

### 4.6 Careers Page

| ID | Requirement | Priority |
|---|---|---|
| FR-CAR-01 | Page shall display "Job Search" section with placeholder state ("Future roles will be posted here") | Must Have |
| FR-CAR-02 | Page shall display the fraud warning block with all 4 fraud warning points | Must Have |
| FR-CAR-03 | Page shall display the available roles notice regarding the prior candidate pool | Must Have |
| FR-CAR-04 | Fraud warning shall be visually distinct (styled warning card) | Must Have |
| FR-CAR-05 | All recruiting contact shall reference @seccon.com email only | Must Have |

### 4.7 Contact Us Page

| ID | Requirement | Priority |
|---|---|---|
| FR-CON-01 | Page shall display 3 contact cards: Corporate HQ, Media Inquiries, HR/Recruitment | Must Have |
| FR-CON-02 | Each card shall show department name, phone placeholder, and email address | Must Have |
| FR-CON-03 | Email addresses shall be mailto: linked | Must Have |
| FR-CON-04 | Phone numbers shall display placeholder format until finalized | Must Have |

### 4.8 Footer

| ID | Requirement | Priority |
|---|---|---|
| FR-FOOT-01 | Footer shall appear on all pages | Must Have |
| FR-FOOT-02 | Footer shall display SecCon logo and values tagline | Must Have |
| FR-FOOT-03 | Footer shall display quick links mirroring the main navigation | Must Have |
| FR-FOOT-04 | Footer shall display corporate contact info (phone, email) | Must Have |
| FR-FOOT-05 | Footer shall display social media icons linking to Instagram, Facebook, Twitter/X | Must Have |
| FR-FOOT-06 | Footer shall display SDVOSB + MBE badges | Must Have |
| FR-FOOT-07 | Footer shall display copyright line and SAM.gov registration status | Should Have |
| FR-FOOT-08 | Footer shall display CAGE code and UEI number once registered | Should Have |

### 4.9 Capabilities Statement

| ID | Requirement | Priority |
|---|---|---|
| FR-CAP-01 | A downloadable 1-page Capabilities Statement PDF shall be available from the website | Should Have |
| FR-CAP-02 | PDF shall include: company overview, core competencies, NAICS codes, SDVOSB/MBE status, CAGE code, contact info | Should Have |
| FR-CAP-03 | Download link shall be accessible from the footer and/or About Us page | Should Have |

### 4.10 Three.js Earth Hero

| ID | Requirement | Priority |
|---|---|---|
| FR-3D-01 | Earth shall use NASA Blue Marble texture (public domain) | Must Have |
| FR-3D-02 | Earth shall rotate continuously on the Y-axis at a slow, smooth pace | Must Have |
| FR-3D-03 | A subtle atmosphere/glow layer shall appear around the Earth | Should Have |
| FR-3D-04 | Background shall be a dark space environment with stars | Must Have |
| FR-3D-05 | Canvas shall be responsive and fill the full viewport at all screen sizes | Must Have |
| FR-3D-06 | Component shall degrade gracefully if WebGL is not supported (fallback image) | Should Have |

---

## 5. Non-Functional Requirements

### 5.1 Performance

| ID | Requirement | Target |
|---|---|---|
| NFR-PERF-01 | Lighthouse Performance score | ≥ 85 (desktop) |
| NFR-PERF-02 | First Contentful Paint (FCP) | < 2.0 seconds |
| NFR-PERF-03 | Time to Interactive (TTI) | < 3.5 seconds |
| NFR-PERF-04 | Total page weight (excluding 3D hero assets) | < 500 KB |
| NFR-PERF-05 | Earth texture maps shall be compressed (WebP or compressed JPEG) | < 2 MB combined |
| NFR-PERF-06 | Three.js hero shall load asynchronously and not block page render | Required |

### 5.2 Accessibility

| ID | Requirement | Standard |
|---|---|---|
| NFR-ACC-01 | Site shall conform to WCAG 2.1 Level AA | Required |
| NFR-ACC-02 | All images shall have descriptive alt text | Required |
| NFR-ACC-03 | Color contrast ratio shall meet AA standard (4.5:1 for normal text) | Required |
| NFR-ACC-04 | All interactive elements shall be keyboard navigable | Required |
| NFR-ACC-05 | ARIA labels shall be applied to nav, hero canvas, and icon-only buttons | Required |
| NFR-ACC-06 | Site shall function without JavaScript for core content (progressive enhancement) | Should Have |

### 5.3 SEO

| ID | Requirement | Notes |
|---|---|---|
| NFR-SEO-01 | All pages shall have unique `<title>` and `<meta description>` tags | Required |
| NFR-SEO-02 | Pages shall use semantic HTML (h1, h2, nav, main, footer, section) | Required |
| NFR-SEO-03 | Site shall include an XML sitemap | Required |
| NFR-SEO-04 | Site shall include `robots.txt` allowing all crawlers | Required |
| NFR-SEO-05 | Open Graph and Twitter card meta tags shall be present on all pages | Should Have |
| NFR-SEO-06 | Primary keywords: "SDVOSB security contractor", "security training DoD", "force protection contractor", "law enforcement advisory" | Target |

### 5.4 Security

| ID | Requirement | Notes |
|---|---|---|
| NFR-SEC-01 | Site shall be served exclusively over HTTPS | Required |
| NFR-SEC-02 | No user data shall be collected or stored (no forms, no cookies beyond consent) | Required |
| NFR-SEC-03 | All external links shall use `rel="noopener noreferrer"` | Required |
| NFR-SEC-04 | No exposed API keys, tokens, or secrets in client-side code | Required |
| NFR-SEC-05 | Content Security Policy (CSP) headers shall be configured via Vercel | Should Have |

### 5.5 Compatibility

| ID | Requirement | Notes |
|---|---|---|
| NFR-COMP-01 | Site shall render correctly in Chrome, Firefox, Safari, Edge (latest 2 versions) | Required |
| NFR-COMP-02 | Site shall be fully functional on iOS Safari and Android Chrome | Required |
| NFR-COMP-03 | Minimum supported viewport width: 375px (iPhone SE) | Required |
| NFR-COMP-04 | Three.js hero shall fall back gracefully on devices without WebGL support | Required |

### 5.6 Reliability & Availability

| ID | Requirement | Target |
|---|---|---|
| NFR-REL-01 | Site uptime | ≥ 99.9% (Vercel SLA) |
| NFR-REL-02 | Static export — no server dependencies means zero server downtime risk | Required |
| NFR-REL-03 | Site shall be deployable from a single `npm run build` command | Required |

### 5.7 Maintainability

| ID | Requirement | Notes |
|---|---|---|
| NFR-MAIN-01 | All page content shall be editable from a single clearly-named `.tsx` file per page | Required |
| NFR-MAIN-02 | Color palette and typography shall be centralized in `tailwind.config.ts` | Required |
| NFR-MAIN-03 | No content shall be hardcoded across multiple components | Required |
| NFR-MAIN-04 | Codebase shall use TypeScript throughout | Required |
| NFR-MAIN-05 | Project README shall document how to run, build, and deploy the site | Should Have |

### 5.8 Hosting & Deployment

| ID | Requirement | Notes |
|---|---|---|
| NFR-HOST-01 | Site shall be deployed to Vercel (free tier) | Required |
| NFR-HOST-02 | Custom domain seccon.com shall be connected | Required |
| NFR-HOST-03 | HTTPS certificate shall be auto-provisioned (Vercel / Let's Encrypt) | Required |
| NFR-HOST-04 | Build output shall be a static export (`out/` directory — no Node.js server) | Required |
| NFR-HOST-05 | Deployments shall be triggered automatically on push to `main` branch | Should Have |

---

## 6. Content Requirements

### 6.1 Brand Identity

| Element | Specification |
|---|---|
| Company name | SecCon — The Security Contractor Group |
| Logo | Trident — platinum chrome tines, ice blue handle. "Sec" in different color from "Con". SVG format. |
| Tagline | Trust · Performance · Dedication · Accountability · Results |
| Color: Background | `#080C14` near-black navy |
| Color: Ice blue accent | `#4A9ECC` (logo handle, CTAs, links) |
| Color: Platinum accent | `#C0C8D0` (logo tines, secondary elements) |
| Color: Gold | `#B8960C` (SDVOSB/MBE badges, callouts) |
| Font: Headings | Oswald (Bold) — military authority |
| Font: Body | Inter (Regular/Medium) — clean, readable |

### 6.2 Tone of Voice
- **Authoritative** — no hedging language, no exclamation marks
- **Precise** — use exact military/government terminology
- **Credible** — facts over adjectives; certifications over claims
- **Concise** — no walls of text; DoD readers skim, not read

---

## 7. Compliance Requirements

| Requirement | Details |
|---|---|
| ITAR | Site content shall not expose controlled technical data; compliance statement required |
| Section 508 | Federal contractor websites targeting government audiences should be 508-accessible (aligns with WCAG 2.1 AA) |
| CAN-SPAM | Any future email functionality must comply |
| Privacy | No PII collected Phase 1; no privacy policy required until forms/tracking added |

---

## 8. Future Phase Considerations (Not in Scope Now)

These are documented for planning purposes only:

- **Phase 2:** Contract Vehicles page (OASIS+, GSA Schedule once acquired)
- **Phase 2:** Leadership/Team bios page
- **Phase 2:** Past Performance section (anonymized examples)
- **Phase 2:** Teaming & Subcontracting page
- **Phase 2:** How to Work With Us (procurement guide for COs)
- **Phase 3:** Live job application portal
- **Phase 3:** News/press releases section
- **Phase 3:** Client portal (if needed for contract performance)

---

## 9. Assumptions & Dependencies

| # | Assumption / Dependency |
|---|---|
| A-01 | seccon.com domain will be purchased and DNS managed by the client |
| A-02 | Official @seccon.com email addresses will be set up (Google Workspace or Microsoft 365) |
| A-03 | SDVOSB certification is active or in process via SBA |
| A-04 | MBE certification is active or in process via certifying body |
| A-05 | SAM.gov registration and CAGE code will be obtained before launch |
| A-06 | Social media accounts (Instagram, Facebook, Twitter/X) will be created and URLs provided before launch |
| A-07 | Phone numbers will be finalized and provided before launch |
| A-08 | Logo (SVG) will be provided or created before launch; placeholder used during development |
| A-09 | Capabilities Statement content will be finalized for PDF generation |

---

*Document Owner: SecCon Group*
*Prepared with: Claude Code (claude-sonnet-4-6)*
