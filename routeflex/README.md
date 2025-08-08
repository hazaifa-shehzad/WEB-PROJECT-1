# RouteFlex Front-end

A modern Next.js + Tailwind (v4) front-end for the RouteFlex marketing site.

## Tech
- Next.js (App Router, TypeScript)
- Tailwind CSS v4 tokens
- React Icons

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Build & preview
```bash
npm run build
npm run start
```

## Structure
- `src/app/layout.tsx`: Global layout and metadata
- `src/app/page.tsx`: Landing page sections (Hero, Features, How, Pricing, Testimonials, CTA, Footer)
- `src/app/globals.css`: Theme tokens and base styles

## Notes
- Image assets referenced in the hero (`/hero-map.svg`, `/users.svg`) are placeholders. Replace with real exports from Figma under `public/`.
