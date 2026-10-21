import { readFileSync } from "node:fs";
import { join } from "node:path";

export interface FramerPageProps {
  /**
   * Workspace-relative path of the original Framer-export page
   * (e.g. "index.html" or "about/index.html"). The markup is embedded as
   * authored — no visual or behavioural changes.
   */
  source: string;
}

/**
 * Meta values that Next.js renders into the real <head> through each page's
 * `metadata` export (title/description/OG/Twitter/favicon) are removed from the
 * injected fragment so they are not duplicated into <body>.
 */
function stripMetadataDuplicates(headFragment: string): string {
  return headFragment
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .replace(/<meta name="description"[^>]*>/, "")
    .replace(/<meta property="og:[^>]*>\n?/g, "")
    .replace(/<meta name="twitter:[^>]*>\n?/g, "")
    .replace(/<link[^>]*rel="icon"[^>]*>\n?/g, "")
    .replace(/<link[^>]*rel="apple-touch-icon"[^>]*>\n?/g, "")
    .replace(/<!-- Open Graph -->|<!-- X -->/g, "");
}

/**
 * Renders one page of the original Framer static export through the Next.js
 * App Router without altering appearance or behaviour:
 *
 * - Framer pages execute inline scripts and load `/_fr/*` runtime modules in a
 *   specific order, so the page markup is injected verbatim instead of being
 *   rebuilt as React elements.
 * - The `<head>` contents (fonts, breakpoint/SSR styles, scroll and link-fix
 *   scripts, runtime preloads) are injected at the top of the rendered body —
 *   `<style>`/`<script>`/`<link>` tags apply identically from any document
 *   position; only the static meta tags are rendered by Next via `metadata`.
 * - The Framer modules and public assets keep their original absolute paths
 *   (`/_fr/...`, `/assets/...`) and are served from the `public/` directory.
 */
export function FramerPage({ source }: FramerPageProps) {
  const html = readFileSync(join(process.cwd(), source), "utf8");

  const headEnd = html.indexOf("</head>");
  const head = html.slice(
    html.indexOf("<head>") + "<head>".length,
    headEnd === -1 ? undefined : headEnd
  );

  const bodyEnd = html.lastIndexOf("</body>");
  const body = html.slice(
    html.indexOf("<body>") + "<body>".length,
    bodyEnd === -1 ? undefined : bodyEnd
  );

  return (
    <>
      {/* display:contents — zero layout impact, only a passthrough wrapper */}
      <div
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: stripMetadataDuplicates(head) }}
      />
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}

export default FramerPage;
