# AGENTS.md

## Project Intent

HWIKWISI is a one-page, static, SEO-first homage to the phrase "How Will I Know When I See It." The joke is the contrast: the DOM and layout should feel plain, reverent, and manifesto-like, while the background motion carries a cheesy agile coach aesthetic.

## Non-Negotiables

- Keep this a pure static site: hand-written HTML, CSS, and vanilla JS only.
- Do not add a framework, router, backend, analytics, or mandatory build step.
- All ranking content must exist in the initial HTML. Do not inject core copy with JS or hide it in canvas/video/image assets.
- Preserve the single-screen, height-locked hero. Use `100svh` and `100dvh`, not plain `100vh`.
- Keep the page fully responsive, with no scrolling required for the main experience.
- Respect `prefers-reduced-motion`; animations should stop, the typewriter should become static, and the video should pause/degrade gracefully.
- Maintain one `<h1>` only: `HWIKWISI`.

## Core Copy

The key SEO and meaning-bearing text should remain real DOM text:

- `HWIKWISI`
- `/ hee-WEEK-wee-see /`
- `How Will I Know When I See It`
- `A good leader gives their team a clear picture of the end - vivid enough that they'll know it when they see it.`

The typewriter phrases are decorative enhancement, not ranking content.

## Design Direction

- Overall vibe: retro terminal manifesto plus cheesy agile coach background.
- Layout should stay centered, simple, and restrained.
- Loud visuals should come from the background video/poster, gradient pulse, and typewriter motion.
- Typography should remain characterful monospace. Fonts are self-hosted in `assets/fonts/`.
- Avoid turning this into a marketing landing page, multipage site, dashboard, or content-heavy explainer.

## Media

- Background video is decorative and must stay behind the real text.
- Keep both video formats referenced by `index.html`:
  - `assets/hwikwisi.webm`
  - `assets/hwikwisi.mp4`
- Keep `assets/poster.webp` for instant paint and fallback.
- Keep `assets/og-card.png` at social-card dimensions for Open Graph/Twitter metadata.
- Target lightweight media. The WebM should remain roughly under 1-2 MB.

## SEO Requirements

Preserve:

- Title and meta description.
- Canonical URL.
- Open Graph and Twitter card metadata.
- JSON-LD for `DefinedTerm`, `WebSite`, and FAQ-style questions.
- Semantic landmarks: `main`, `header`, `blockquote`, `footer`.
- `robots.txt`, `sitemap.xml`, and `404.html`.

If the deployment URL changes, update the canonical URL, social metadata URLs, JSON-LD URLs, `robots.txt`, and `sitemap.xml` together.

## Animation Notes

- CSS owns visual motion: page-load reveal, gradient pulse, caret blink.
- JS should stay limited to the typewriter loop and video-ready class toggle.
- Prefer animating `opacity` and `transform`; avoid heavy layout-affecting animation.
- Do not put ranking content inside video, canvas, or generated imagery.

## Deployment

GitHub Pages deploy is configured in `.github/workflows/deploy.yml` and uploads the repo root. Keep the repo root as the static site output unless there is a deliberate deploy change.

## Verification Checklist

Before handing off material changes:

- Open the page locally and check desktop, portrait mobile, and short landscape.
- Confirm there is one `<h1>`.
- Confirm key copy exists in `index.html` with JS disabled.
- Confirm all referenced assets return `200`.
- Confirm no unwanted scrollbars or clipped text in the single-screen hero.
- If possible, run Lighthouse and aim for SEO 100, Accessibility 95+, Best Practices 95+, and Performance 90+.
