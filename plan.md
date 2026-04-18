# Personal Branding Website — Anirban Das

## Context
Greenfield React static website for Anirban Das (Ecommerce Solution Architect, 11 years experience) targeting enterprise recruiters. Hosted on Vercel. Theme: Bold & Futuristic — dark background, electric cyan/blue accents, animated grid, glassmorphism.

---

## Tech Stack
- **Vite + React (JavaScript)**
- **Tailwind CSS** — dark theme, custom color tokens
- **Framer Motion** — scroll-triggered reveals, hover animations, stagger
- **Lucide React** — icons
- **Vercel** — static hosting

---

## File Structure
```
my-personal-website/
├── public/favicon.svg
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css              # .glass, .grid-bg-animated, .text-gradient-cyan
│   ├── components/
│   │   ├── Navbar.jsx         # sticky, scroll-spy with IntersectionObserver
│   │   ├── Hero.jsx           # full-screen, animated grid, typing tagline, CTAs
│   │   ├── Skills.jsx         # 4-category glass cards with Framer stagger
│   │   ├── Timeline.jsx       # alternating L/R scroll-reveal entries
│   │   ├── CaseStudies.jsx    # 3-col grid cards with scan-line hover
│   │   └── Footer.jsx
│   └── data/
│       ├── skills.js
│       ├── timeline.js
│       └── caseStudies.js
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── package.json
```

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `brand-bg` | `#0a0a0f` | Page background |
| `brand-surface` | `#0d1117` | Card backgrounds |
| `brand-cyan` | `#00d4ff` | Primary accent |
| `brand-blue` | `#0066ff` | Secondary accent |
| `brand-muted` | `#8892a4` | Secondary text |
| `brand-text` | `#e2e8f0` | Primary text |

**`.glass`** — `rgba(13,17,23,0.7)` + `backdrop-filter: blur(12px)` + `1px solid rgba(0,212,255,0.1)`

**`.grid-bg-animated`** — Two overlapping `linear-gradient` lines at 4% cyan, 60px spacing, slow diagonal drift via `@keyframes gridScroll`

**`.text-gradient-cyan`** — `linear-gradient(135deg, #00d4ff, #0066ff)` with `background-clip: text`

---

## Sections

### Hero
- Full-screen with `.grid-bg-animated` + radial glow overlay
- Name (`text-6xl bold`), Title (`text-2xl text-brand-muted`)
- Typing tagline cycling: `"Architecting Cloud-Native Commerce at Scale"` / `"Turning AI/ML into Revenue"` / `"11 Years of Digital Transformation"`
- CTAs: "View Case Studies" (solid cyan) + "Download Resume" (ghost)
- Floating tech chip badges (AWS, Shopify Plus…) with staggered float animation

### Skills (`data/skills.js`)
- 4 columns → 2 → 1 responsive
- Glass cards with `whileHover={{ y: -4 }}` + cyan glow shadow
- Categories: Cloud Platforms · Ecommerce · AI/ML · Architecture
- Skill pills: `font-mono text-xs text-brand-cyan`
- Framer stagger `staggerChildren: 0.1` triggered by `useInView`

### Timeline (`data/timeline.js`)
- Center vertical gradient line (`from-brand-cyan via-brand-blue to-transparent`)
- Entries alternate L/R on desktop, stack on mobile
- Each: glass card + cyan dot connector, year in `font-mono`, company in gradient text
- Framer: slides in from side (`x: ±40 → 0`) on `useInView`
- 6 entries 2014–2025 (fill real details in `data/timeline.js`)

### Case Studies (`data/caseStudies.js`)
- 3-col → 2 → 1 grid
- Card structure: icon + title + tags | Problem / Solution / Impact rows (`border-l-2 border-brand-cyan`)
- Impact row in `text-brand-cyan font-medium` to make metrics pop
- Hover: `whileHover={{ y: -6 }}` + glow + CSS scan-line sweep

### Navbar
- Fixed top, `.glass` after 60px scroll
- IntersectionObserver scroll-spy, active link highlight
- Section IDs: `hero`, `skills`, `timeline`, `case-studies`

---

## Bootstrap
```bash
npm create vite@latest . -- --template react   # select React + JavaScript
npm install
npm install framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Build Order
1. `tailwind.config.js` + `index.css` (design tokens + utilities)
2. `index.html` (Google Fonts, `<html class="dark">`)
3. `App.jsx` shell
4. `Hero.jsx` (most complex — validate grid + animations first)
5. `data/skills.js` + `Skills.jsx`
6. `data/caseStudies.js` + `CaseStudies.jsx`
7. `data/timeline.js` + `Timeline.jsx`
8. `Footer.jsx`
9. `vercel.json`
10. `npm run build && npm run preview` → Lighthouse → `vercel --prod`

---

## vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "headers": [
    { "source": "/assets/(.*)", "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }] },
    { "source": "/(.*)", "headers": [{ "key": "X-Content-Type-Options", "value": "nosniff" }, { "key": "X-Frame-Options", "value": "DENY" }] }
  ]
}
```

---

## Verification
1. `npm run dev` → `localhost:5173` — all 4 sections visible
2. Scroll: navbar active states update, timeline entries animate in
3. Hover: skill cards lift, case study cards show scan-line + glow
4. Typing animation cycles all 3 phrases
5. Resize to 375px — no overflow, single-column layout
6. `npm run build && npm run preview` → Lighthouse Performance 90+
7. `vercel --prod` → verify live URL loads correctly
