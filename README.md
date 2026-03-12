# Nikita Borale — Product × Finance × Creativity

Minimalist, modern portfolio built with React + Vite, Tailwind CSS, Framer Motion, and Recharts. The site blends fintech-style dashboards, product case studies, and a creative gallery. Optimized for static hosting on GitHub Pages.

## Stack
- React (Vite)
- Tailwind CSS
- Framer Motion
- Recharts
- gh-pages for GitHub Pages deploys

## Local development
1) Use Node **22.12+** (Vite requires >=20.19). If you installed a local copy at `/tmp/node-v22.12.0-darwin-x64`, prefix commands with `PATH=/tmp/node-v22.12.0-darwin-x64/bin:$PATH`.
2) Install deps: `npm install`
3) Start dev server: `npm run dev` then open the printed local URL.

## Build
```bash
PATH=/tmp/node-v22.12.0-darwin-x64/bin:$PATH npm run build
```
Outputs to `dist/` and duplicates `404.html` for GitHub Pages SPA routing.

## Deploy to GitHub Pages (static)
1) Ensure `base` in `vite.config.js` stays `./` for relative assets.
2) Build: `npm run build`
3) Deploy: `npm run deploy` (pushes `dist/` to `gh-pages` branch via `gh-pages` package).
4) In your GitHub repo settings, set Pages source to the `gh-pages` branch root.

## Content
- Hero with animated grid + sparkline
- About with education, experience, and timeline
- Product thinking framework
- Case studies with Problem → Approach → Solution → Impact
- Finance & markets charts
- Product breakdowns, creative gallery with modal, writing, now, and contact form
