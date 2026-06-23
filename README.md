Eduardo Henrique — Dev Portfolio

Overview
----------------
This repository hosts a personal portfolio built with Next.js (App Router) and TypeScript. It demonstrates responsive design, performance-minded assets, accessible navigation, animation, and component-driven structure.

Tech stack
----------------
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- PostCSS
- Swiper (carousels)
- Motion / animations

Quick start
----------------
Prerequisites: Node.js 20.9+ and npm.

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

Build & Production
----------------
```bash
npm run build
npm run start
```

Project structure
----------------
- `src/app/` — Next.js App Router pages, layout, and portfolio sections
- `src/components/` — Reusable UI components (Header, Footer, Button, etc.)
- `src/styles/` — Tailwind global styles and design tokens
- `src/types/` — Shared TypeScript declarations
- `public/` — Static images, icons, and documents

Notes & troubleshooting
----------------
- Tailwind CSS is configured through `@tailwindcss/postcss` in `postcss.config.mjs`.
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
