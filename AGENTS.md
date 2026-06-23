# Repository Guidelines

## Agent-Specific Instructions

This project uses Next.js `16.2.4`, which may differ from older conventions. Before writing Next.js code, read the relevant guide in `node_modules/next/dist/docs/` and follow deprecation notices.

## Project Structure & Module Organization

- `src/app/` contains the App Router entrypoints, including `layout.tsx`, `page.tsx`, API routes, and portfolio sections.
- `src/components/` contains reusable UI components such as navigation, buttons, headers, footer, Spotify widgets, and skill icons.
- `src/lib/` holds shared utilities, including Spotify API helpers.
- `src/types/` stores shared TypeScript declarations.
- `src/styles/` contains global CSS.
- `public/` contains static assets such as images, icons, and documents.

## Build, Test, and Development Commands

- `npm install` installs project dependencies.
- `npm run dev` starts the local Next.js development server.
- `npm run build` creates a production build.
- `npm run start` serves the production build locally.
- `npm run lint` runs ESLint with the Next.js core web vitals and TypeScript rules.

## Coding Style & Naming Conventions

Use TypeScript, React functional components, and strict typing. Keep component and section entrypoints aligned with the existing folder pattern, such as `src/components/Button/index.tsx` or `src/app/sections/Hero/index.tsx`.

Name React components with PascalCase, functions and local variables with camelCase, and static data exports descriptively, such as `projects` or `menuItems`. Prefer the configured `@/*` path alias when it improves import clarity. Keep styles consistent with the existing Tailwind/global CSS approach.

## Testing Guidelines

No dedicated test framework is currently configured. Before submitting changes, run at least:

```bash
npm run lint
npm run build
```

If tests are added later, prefer colocated tests beside the component or a clearly named `tests/` directory, and document the new command in `package.json`.

## Commit & Pull Request Guidelines

Follow the existing Conventional Commit-style history, for example `feat: add Spotify section`, `refactor: update animation handling`, or `chore: clean up logs`.

Pull requests should include a concise summary, validation steps, linked issues when applicable, and screenshots or short recordings for UI changes.

## Security & Configuration Tips

Keep Spotify credentials in `.env.local`; do not commit secrets. The Spotify variables are optional, and missing values should leave the site functional with a safe not-playing response.
