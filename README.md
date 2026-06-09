# SecCon Group — Corporate Website

Official website for **SecCon (The Security Contractor Group)**, a Service-Disabled Veteran Owned Small Business (SDVOSB) and Minority Business Enterprise (MBE) specializing in security contracting, training, and mission support for U.S. government agencies and NGOs.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| 3D / Animation | Three.js (rotating Earth hero) |
| Icons | Lucide React |
| Theming | next-themes |

## Pages

| Route | Page |
|---|---|
| `/` | Home — full-screen animated Earth hero, values banner |
| `/about` | About Us — company background, certifications |
| `/what-we-do` | Services — Training, Protective Security, Mentor & Advising |
| `/who-we-serve` | Clients — government agencies, defense, intelligence |
| `/careers` | Job board with fraud warning |
| `/contact` | Contact information and inquiry form |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

### Static export

```bash
npm run build
# Output is in the /out directory
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Home
│   ├── layout.tsx         # Root layout (Navbar, Footer, ThemeProvider)
│   ├── about/
│   ├── careers/
│   ├── contact/
│   ├── what-we-do/
│   └── who-we-serve/
└── components/
    ├── HeroEarth.tsx      # Three.js rotating Earth (SSR-safe)
    ├── HeroEarthClient.tsx
    ├── HeroVideo.tsx
    ├── Navbar.tsx
    ├── Footer.tsx
    ├── PageHero.tsx
    ├── ValuesBanner.tsx
    ├── ServiceCard.tsx
    ├── Badge.tsx
    ├── ThemeProvider.tsx
    └── ThemeToggle.tsx
```

## Branding

- **Logo:** Trident mark — platinum chrome tines, ice blue handle
- **Wordmark:** "Sec" and "Con" rendered in contrasting colors
- **Tagline:** Trust · Performance · Dedication · Accountability · Results
- **Tone:** Professional, authoritative, government-contractor appropriate

## Compliance Notes

- ITAR/FAR compliant messaging throughout
- Careers page includes a fraud disclaimer: SecCon never charges application fees and only contacts candidates via `@seccon.com` email addresses

## Contact

| Channel | Details |
|---|---|
| General | info@seccon.com |
| Media | media@seccon.com |
| HR / Recruitment | humanresource@seccon.com · recruiting@seccon.com · 1-844-4-SECCON |
