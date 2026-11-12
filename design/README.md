# KL4E station site — build handoff

A static design-reference implementation of the amateur-radio site for **Brian
Chandler, KL4E**. It is a faithful, working starter built from the approved
design mock. Hand it to Claude Code (or build on it directly) to produce the
deployable site.

This is a **starter / reference**, not the finished site: some content is real,
some is marked placeholder (see *Content status*). Nothing here requires a
framework — it's plain HTML, one CSS file, and one small JS file.

---

## Run it

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000      # then visit http://localhost:8000
```

No build step. Google Fonts load from the CDN.

---

## Files

```
kl4e-site/
├── index.html          Home (station card + inline radio line-art)
├── bands.html          Band index (cards; 40 m links to its detail page)
├── band-40m.html       40 m detail (takeaways, at-a-glance, code blocks)
├── experiments.html    Experiments log (placeholder entries)
├── software.html       Software projects (pota-logger + placeholders)
├── assets/
│   ├── css/styles.css  All styles + design tokens (light + dark)
│   ├── js/theme.js     Dark-mode toggle (OS default + localStorage override)
│   └── img/
│       ├── radio.svg   Standalone HF-radio line-art (portable, reusable)
│       └── favicon.svg KL4E callsign favicon
└── README.md
```

> **Missing asset:** `assets/img/avatar.jpg` — drop in the operator photo
> referenced by the Home hero (square source recommended; it renders in a
> circle). Until then the `<img>` shows nothing.

---

## Design system — "Field Station"

Warm paper/ink with a single amber signal accent. IBM Plex Sans for text,
**IBM Plex Mono** for the callsign, frequencies, and any technical data. Clean,
utilitarian, no stock-template tropes.

### Tokens (defined in `assets/css/styles.css`)

| Token          | Light       | Dark        | Use                              |
|----------------|-------------|-------------|----------------------------------|
| `--ground`     | `#F4F1EA`   | `#2A2621`   | page background                  |
| `--ink`        | `#17150F`   | `#EDE7DB`   | primary text                     |
| `--muted`      | `#5C5649`   | `#B3AA98`   | secondary text / labels          |
| `--line`       | `#DAD4C7`   | `#403B32`   | borders / rules                  |
| `--panel`      | `#FBFAF5`   | `#332F28`   | card / panel surface             |
| `--code`       | `#F1ECE1`   | `#23201A`   | code-block surface               |
| `--accent`     | `#B5531F`   | `#B5531F`   | signal accent (amber), unchanged |
| `--accent-ink` | `= --accent`| lightened¹  | accent as text/strokes           |

¹ In dark mode `--accent-ink` is `color-mix(in oklch, var(--accent), white 42%)`
so the amber stays legible on the dark ground. The base `--accent` (used for
solid fills like the button and the avatar ring) is the same in both themes.

**Fonts:** IBM Plex Sans (400/500/600/700) + IBM Plex Mono (400/500/600) via
Google Fonts. Self-host for production if you prefer.

**Accent is swappable:** change `--accent` once and the whole site re-tints.
The design was explored with amber `#B5531F` (default) plus green `#2F6E54`,
blue `#2B5B86`, purple `#7A4B86` as alternates.

---

## Dark mode

- Defaults to the visitor's OS setting via `prefers-color-scheme`.
- A manual choice (the moon/sun button) is saved to `localStorage` and wins
  over the OS setting.
- Implemented with `<html data-theme="light|dark">` + CSS custom properties.
  See `assets/js/theme.js` (loaded in `<head>` so the stored theme applies
  before first paint — no flash).
- Icon convention: **moon = switch to dark**, **sun = switch to light** (the
  icon shows the mode you'll move to).

---

## Layout / responsiveness

- Content is capped at `max-width: 1080px` and centered. On a 1920-wide screen
  it does **not** stretch edge-to-edge — raise the `.wrap` max-width if you want
  it wider.
- The Home hero is a two-column flex row (text + radio) that stacks on narrow
  screens. All card grids use `auto-fit` + `minmax`, so they collapse to one
  column on a phone. Code blocks scroll horizontally rather than wrap.
- The radio on Home is **inline SVG** (so it themes with the page via the
  `.rstk / .rmut / .racc / …` classes). `assets/img/radio.svg` is a
  standalone copy with concrete colors for reuse in other projects.

---

## Content status

**Real (verified with the operator):**
- Identity: Brian Chandler, KL4E, Amateur Extra, Kernersville NC (grid
  **EM96WE**, CQ zone 5, ITU zone 8), 40 m EFHW ≈ 28 ft, modes SSB + FT8,
  QSL via QRZ + LoTW.
- Band list + which are WARC (30/17/12) and VHF (2 m). Frequency edges are US
  allocations.
- 40 m detail page: takeaways, band-at-a-glance numbers, key frequencies, and
  band plan — all from the operator's notebook.
- Software: `pota-logger` → https://github.com/bmchandler/pota_logger

**Placeholder (bracketed `[...]` — fill before launch):**
- Per-band notes on `bands.html` (except 40 m).
- The "US HF Ham Bands — overview" block on `bands.html`.
- All Experiments entries.
- Software descriptions/langs beyond pota-logger, and the two extra project
  cards.
- Home hero photo (`assets/img/avatar.jpg`).

---

## Suggested next steps for the build-out

- [ ] Add `assets/img/avatar.jpg` (operator photo).
- [ ] Fill the bracketed placeholder content.
- [ ] Generate raster favicon fallbacks from `favicon.svg`
      (`favicon-32.png`, `favicon-16.png`, `apple-touch-icon.png`, `favicon.ico`)
      and add the `<link>` tags. The SVG favicon already covers modern browsers.
- [ ] Build the remaining band detail pages using `band-40m.html` as the
      template (same four blocks: takeaways, at-a-glance, key frequencies,
      band plan). Consider generating them from Markdown/Obsidian so the data
      stays single-sourced.
- [ ] Optional: a contact / QSL line on Home (email or "QSL via…") beyond the
      QRZ link.
- [ ] Optional: a print stylesheet so a band page prints as a clean frequency
      reference card.
- [ ] Decide hosting (static host / GitHub Pages / Netlify) and wire a deploy.

---

## Accessibility notes (already in place — keep them)

- Real semantic elements: `<button>` for the toggle, `<a href>` for links,
  `<nav aria-label>`, heading order. Icon-only controls have `aria-label`;
  decorative SVGs are `aria-hidden`, meaningful ones have `role="img"` + label.
- Text contrast meets WCAG AA in both themes; the dark-mode accent is
  lightened specifically to keep accent text legible.
- Colors that must be told apart differ in lightness, not hue alone.

---

## Assets & licensing

- **`radio.svg`** and **`favicon.svg`** are original artwork made for this
  site — KL4E owns them and may reuse them in other projects.
- The footer robot + heart icons are original inline SVGs (no third-party icon
  set, nothing to attribute).
- The moon/sun toggle icons are drawn in a Lucide-style; if you swap in the
  actual [Lucide](https://lucide.dev) set (ISC license) that's fine too.
- "Built with AI" in the footer is intentionally generic (no vendor logo).
  Note: Anthropic does **not** provide a self-serve "Built with Claude" badge;
  using the Claude/Anthropic name or logo requires their permission
  (marketing@anthropic.com). Plain text like this is the low-risk route.
