# kl4e.us

Personal website for amateur radio station **KL4E** (Brian Chandler) —
station notes, HF band references, and ham-radio software projects.
Live at <https://kl4e.us>.

## About the site

A small, agentically-built static site. The visual design and theme
are my own creative direction, realized agentically. It has three
sections:

- **Bands** — band-by-band HF notes covering propagation, key
  frequencies, and band plans, with a page per band and an overview of
  the US HF allocations and notable FCC rules.
- **Software** — ham-radio tools I've written (a POTA logger, embedded
  drivers, a protocol decoder) alongside third-party software of note.
- **Links** — a hand-picked set of starting points for anyone new to
  amateur radio.

## Built with

- [Zola](https://www.getzola.org/) — a single-binary static site
  generator. Content is Markdown with TOML front matter; the layout is
  a set of agentically-written HTML templates and plain CSS, with no
  Sass or JavaScript build step.
- **GitHub Actions** builds the site and deploys it to **GitHub Pages**
  on every push.
