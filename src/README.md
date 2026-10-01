# Yash Arora | Portfolio

A single-page, dark, high-contrast portfolio for an AI/ML Engineer. It's built with React, TypeScript, Tailwind CSS, GSAP (ScrollTrigger) and Framer Motion.

## Updating content

**All content lives in one file: `data/content.ts`.**

| What | Where in `data/content.ts` |
| --- | --- |
| Name, headline, email, phone, links, resume URL | `siteConfig` |
| Profile photo (**TODO: replace**) | `siteConfig.profilePhoto` |
| SEO title / description | `siteConfig.seo` |
| Hero stats | `heroStats` |
| Bio + traits | `about` |
| Impact numbers | `metrics` (`featured: true` makes a metric large) |
| Roles | `experience` |
| Projects (images, tags, GitHub links) | `projects` |
| Skills | `skills` |
| Degree + certifications | `education`, `certifications` |

Change the name once in `siteConfig.name`. The nav, hero, alt text, footer and SEO tags all update from it.

## Running locally (Vite)

```bash
npm create vite@latest portfolio -- --template react-ts
# copy these files into the project root / src, then:
npm install gsap @gsap/react framer-motion lucide-react
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p   # then replace with the included tailwind.config.js
npm run dev
```

## Deploying to Vercel

1. Push to GitHub.
2. Import the repo in Vercel. It detects Vite automatically (build: `npm run build`, output: `dist`).
3. Deploy.

## Motion

- The hero has a letter-by-letter name reveal, stat count-ups, a floating portrait and a parallax grid. See `components/Hero.tsx`.
- Scroll reveals, staggered groups and parallax use data attributes (`data-reveal`, `data-stagger-group` / `data-stagger`, `data-parallax`) handled in `hooks/useRevealAnimations.ts`.
- The experience timeline has a scrubbed progress line in `components/Experience.tsx`.
- Every animation runs inside `gsap.matchMedia('(prefers-reduced-motion: no-preference)')`. Users who ask for reduced motion see static, fully visible content.
- `useGSAP` handles cleanup automatically.
