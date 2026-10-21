# CLAUDE.md

Portfolio of Harshavardhan J (AWS Cloud × DevOps) — a Framer-exported static
site served through **Next.js 15 App Router + TypeScript**.

## Architecture

- `app/` — App Router routes: `/`, `/about`, `/contact`, `/resume`
  (each `page.tsx` holds its own `metadata`).
- `components/FramerPage.tsx` — reads the original Framer-export HTML
  (`index.html`, `about/index.html`, `contact/index.html`, `resume/index.html`)
  and injects it verbatim; `metadata` duplicates are stripped from the fragment
  since Next renders them in `<head>`.
- `public/_fr/` and `public/assets/` — Framer runtime modules and images,
  served at their original absolute paths `/_fr/*` and `/assets/*`.
- The Formspree contact form and all animations live inside the Framer
  runtime; app code does not own them.

## Commands

- `npm run dev` — dev server
- `npm run build` — production build (also the typecheck gate; no tests/linter)
- `npm start` — production server

## Rules

- Structure conversion only. Do not redesign, restyle, or rewrite content.
- Keep the original HTML sources in place — they are read at render time.
- Don't convert the Framer markup to React components or reorganize `public/`.
- Framer-runtime hydration warnings (React #418/#422/#425) are known-benign.
