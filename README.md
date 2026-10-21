# Harshavardhan J — Portfolio

AWS Cloud × DevOps portfolio, originally built and exported from Framer, now
served through **Next.js 15 (App Router, TypeScript)**.

## Commands

```bash
npm run dev     # development server (next dev)
npm run build   # production build (next build)
npm start       # serve the production build (next start)
```

## Structure

```text
app/                      # App Router routes: /, /about, /contact, /resume
  layout.tsx              # root shell + shared favicon metadata
  globals.css             # intentionally empty (all styles ship in the pages)
components/
  FramerPage.tsx          # renders the original Framer-export pages verbatim
public/
  assets/                 # project images (securelink.webp, error-explainer.webp, …)
  _fr/                    # Framer runtime modules (React, motion, script_main, …)
index.html                # original Framer export — source of the / page
about/index.html          # source of /about
contact/index.html        # source of /contact
resume/index.html         # source of /resume
```

## How the conversion works

The site is a Framer static export: each `*.html` file embeds its own fonts,
styles, inline scripts and loads `/_fr/*` runtime modules, and the Formspree
contact form is wired inside those runtime modules. To preserve appearance,
animations and behaviour **exactly**, `components/FramerPage.tsx` injects each
original page's `<head>`/`<body>` markup verbatim into the Next.js page, while
`app/<route>/page.tsx` files declare the same title/description/OG/Twitter
metadata through Next's `metadata` API. Static-only routes, so no server-side
generation logic is needed.

- Runtime modules keep their original absolute paths (`/_fr/...`) and project
  images (`/assets/...`) — both are served from `public/`.
- The contact form on `/contact` still submits through Formspree (unchanged).

## Notes

- The Framer runtime produces the same recoverable hydration warnings with
  Next.js as it would in the normal Framer hosting flow; the site remains
  fully functional.
- `demo 2/` (empty), `.claude/` and `.freebuff/` are workspace artifacts, not
  part of the site.
