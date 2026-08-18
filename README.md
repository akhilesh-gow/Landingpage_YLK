# Veloria Grand — Yelahanka Landing Page

Lead-generation landing page for the Veloria Grand banquet venue at
Bharti Nagar, Hunasamaranahalli, Bangalore North.

## Contents

| Path | Description |
|---|---|
| `index.html` | The full desktop page — single self-contained file |
| `assets/` | The nine images referenced by the page |

Open `index.html` in a browser, or serve the folder:

```sh
npx http-server -p 8080 .
```

## Source

Exported from the Stitch project **Veloria Grand Lead Gen Redesign**
(screen *Veloria Grand Yelahanka - Updated Assets (Desktop)*).

Images originally pointed at temporary `lh3.googleusercontent.com/aida/...`
CDN URLs. They have been downloaded into `assets/` and the `src` attributes
rewritten to relative paths, so the page no longer depends on those links —
they expire.

The hero image (`hero-banquet-hall.webp`, 2000x1331) was supplied separately
and replaces the Stitch placeholder, which was only 512px wide. The former
hero now serves the "Grand Functions" card alone, as
`hall-grand-functions.jpg`.

## Design tokens

Defined inline in the `tailwind-config` block:

- **Emerald deep** `#092820` — headers, footer, primary surfaces
- **Champagne gold** `#B8903C` — accents, CTAs, rules
- **Soft cream** `#FAF7F0` — panels, alternating sections
- Display/headings **Playfair Display**, body **Inter**

## Known gaps

Carried over from the export — none are blockers for review, but all need a
decision before this goes live:

1. **The quote form captures nothing.** It has no `action`, no `name`
   attributes on any field, and its button is `type="button"`, so nothing is
   submitted or stored. On a lead-gen page this is the critical gap — it needs
   a backend endpoint or a form service before launch.
2. **Three nav links point at sections that do not exist** in this export:
   `#reviews`, `#faq`, `#location`. Only `#our-halls` and `#why-veloria`
   resolve. Either build those sections or drop the links.
3. **Seven of nine images have no `alt` text.** They carry `data-alt`
   instead, which screen readers ignore. The descriptions are already
   written — they just need to move to the real attribute. The hero and the
   logo are done.
4. **The hero photo carries visible watermarks.** A "VS" mark sits on the
   back wall above the stage, and a second script mark sits in the mirror on
   the right wall. There is also a faint rectangular seam across the ceiling
   on the upper right. Worth sourcing a clean original before launch.
5. **`event-manager-consultation.jpg` shows a business-conference screen**,
   not the event-manager-with-couple scene its description specifies.
6. **Tailwind is loaded from `cdn.tailwindcss.com`**, which compiles styles in
   the browser on every page load and is not intended for production. Build
   the CSS ahead of time before launch.

## Contact points in the page

- Phone / WhatsApp: `+91 88843 31096`
- Hours: Daily 9 AM – 11 PM
