# HWIKWISI

**How Will I Know When I See It**

Pronounced: **hee-WEEK-wee-see**

A tiny, extremely serious leadership manifesto wearing a monster-movie cape.

HWIKWISI is the reminder that a good leader gives the team a clear enough picture of the end goal that everyone can recognize success when it arrives. The page keeps the message plain and real in the HTML, then lets the background get theatrical about it.

## What Is This?

One static page. One acronym. One roaring neon beast making sure the definition of "done" has adequate stage presence.

The design goal is simple:

> Manifesto restraint in the DOM, monster-movie camp in the animation.

## Run It Locally

No install. No build. No ceremony.

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173/
```

Opening `index.html` directly also mostly works, but a tiny static server is better for checking assets the way GitHub Pages will serve them.

## Project Shape

```text
index.html                  Core page and SEO text
assets/styles.css           Hand-written styling and motion
assets/main.js              Typewriter loop and video reveal
assets/hwikwisi.webm        Background video
assets/hwikwisi.mp4         Background video fallback
assets/poster.webp          Instant poster/fallback image
assets/og-card.png          Social share image
404.html                    GitHub Pages fallback
robots.txt                  Crawl rules
sitemap.xml                 Single-page sitemap
.github/workflows/deploy.yml GitHub Pages deploy
```

## Rules Of The Shrine

- Keep it static: HTML, CSS, and vanilla JS.
- Keep the important copy in the initial HTML.
- Keep one `h1`: `HWIKWISI`.
- Keep it one screen.
- Keep the media decorative.
- Keep reduced-motion behavior respectful.
- Do not turn the joke into a product funnel.

More maintenance notes live in [AGENTS.md](AGENTS.md).

## Deploy

Push to `main`. GitHub Actions deploys the repo root to GitHub Pages.

After the first deploy, make sure the repository's Pages source is set to **GitHub Actions**.
