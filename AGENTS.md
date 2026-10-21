# AGENTS.md

Guidance for AI agents and contributors working in this repository.

## What this project is

A personal portfolio (Harshavardhan J — AWS Cloud × DevOps) originally authored
in Framer and exported as static HTML with a bundled runtime (`_fr/`). It was
converted to **Next.js 15 App Router + TypeScript** as a *structure conversion
only* — visuals, content, animations and integrations are untouched.

## Key facts

- **Pages live in `app/`**: `app/page.tsx` (/), `app/about`, `app/contact`,
  `app/resume`. Each declares its own `metadata` and renders the original
  Framer HTML through `components/FramerPage.tsx`.
- **`components/FramerPage.tsx` is the core mechanism**: it reads the original
  `index.html` / `<sub>/index.html` and injects the head fragment + body
  verbatim. Do not "Reactify" the markup; the Framer runtime depends on exact
  script/style order.
- **Original sources** (`index.html`, `about/index.html`, `contact/index.html`,
  `resume/index.html`) must stay where they are — they are read at build/render
  time and are the single source of truth for the visuals.
- **Runtime + images are in `public/`** (`public/_fr/`, `public/assets/`) and
  are referenced with absolute URLs (`/_fr/...`, `/assets/...`). Do not rename
  these paths.
- **The contact form** is a Formspree integration wired inside the Framer
  runtime (`_fr/*.mjs`), not in app code. No reCAPTCHA; a hidden honeypot
  (`company_url`) already exists.

## Tasks

```bash
npm run dev     # dev server
npm run build   # production build + typecheck
npm start       # serve production build
```

There is no test suite or linter configured; `npm run build` (which type-checks)
is the verification gate.

## Conventions

- Keep edits minimal and purposeful; this is a preserved design, not a rebuild.
- New pages: create `app/<route>/page.tsx`, add the original HTML source file,
  pass it to `FramerPage`, and redeclare that page's meta in `metadata`.
- Don't add CSS frameworks, Tailwind or UI libraries — the design system ships
  inside the Framer export.
- Hydration warnings from the Framer runtime (React #418/#422/#425) are known
  and benign; don't chase them or wrap pages in `suppressHydrationWarning`
  hacks beyond what `app/layout.tsx` already does.
