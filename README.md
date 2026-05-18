Eduardo Henrique — Dev Portfolio

Overview
----------------
This repository hosts a production-ready personal portfolio built with Next.js (App Router) and TypeScript. It demonstrates modern frontend practices including responsive design, performance optimizations, accessibility considerations, and component-driven architecture.

Tech stack
----------------
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- PostCSS + Autoprefixer
- Swiper (carousels)
- Motion / animations

Quick start
----------------
Prerequisites: Node.js 18+ and npm/yarn/pnpm.

1. Install dependencies:

```bash
npm install
```

2. Create a local env file by copying the example and filling the values (required only for Spotify integration):

```bash
cp .env.example .env.local
# set SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN
```

3. Run development server:

```bash
npm run dev
```

Build & Production
----------------
```bash
npm run build
npm run start
```

Environment variables
----------------
- `SPOTIFY_CLIENT_ID` — Spotify API client id (optional; used by the now-playing integration)
- `SPOTIFY_CLIENT_SECRET` — Spotify API client secret
- `SPOTIFY_REFRESH_TOKEN` — Spotify refresh token

If you don't set Spotify variables, the site will still work — the now-playing API will return a safe `isPlaying: false` response.

Project structure
----------------
- `app/` — Next.js App Router pages and layout
- `src/components/` — Reusable UI components (Header, Footer, Button, etc.)
- `src/app/sections/` — Page sections composed by the landing page
- `src/styles/` — Tailwind global styles and design tokens
- `src/lib/` — Client/server utilities (Spotify integration)

Notes & troubleshooting
----------------
- Tailwind is configured via `tailwind.config.cjs`. If styles don't apply, ensure `postcss.config.mjs` contains `tailwindcss` + `autoprefixer` (already configured).
- If build fails due to missing packages (e.g., `framer-motion` vs `motion`), install the expected package or align imports.

Recommended improvements
----------------
- Add CI workflow (lint/build/test) — provide GitHub Actions for continuous checks.
- Add a `tailwind.config.cjs` customizing theme tokens and safelist if needed.
- Add lightweight unit tests (React Testing Library) and accessibility checks (axe).

Contact
----------------
Eduardo Henrique — find me on LinkedIn: https://www.linkedin.com/in/eduardohcm/

License
----------------
This repository is the author's portfolio. Use the code as reference; no license provided.
