# Veloria Grand — Yelahanka Landing Page

Lead-generation landing page for the Veloria Grand banquet venue at
Bharti Nagar, Hunasamaranahalli, Bangalore North.

## Contents

| Path | Description |
|---|---|
| `index.html` | The page markup |
| `styles.css` | Compiled Tailwind stylesheet — **generated, do not edit by hand** |
| `src/input.css` | Stylesheet source: Tailwind layers plus the `.glass-panel` rule |
| `tailwind.config.js` | Design tokens (colours, type scale, spacing, radii) |
| `assets/` | The nine images referenced by the page |

## Running it

The page is static — `index.html`, `styles.css` and `assets/` are all that
need deploying. To view it:

```sh
npx http-server -p 8080 .
```

## Building the CSS

`styles.css` is compiled from `src/input.css` against the classes found in
`index.html`. After changing any class in the markup, or any token in
`tailwind.config.js`, rebuild it:

```sh
npm install   # first time only
npm run build # or: npm run watch
```

Tailwind only emits classes it can see in `index.html`, so a class added by
JavaScript at runtime will not appear in the stylesheet unless the file is
listed in the config's `content` array.

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

Defined in `tailwind.config.js`:

- **Emerald deep** `#092820` — headers, footer, primary surfaces
- **Champagne gold** `#B8903C` — accents, CTAs, rules
- **Soft cream** `#FAF7F0` — panels, alternating sections
- Display/headings **Playfair Display**, body **Inter**

Note that `borderRadius` deliberately overrides the Tailwind defaults, including
`rounded-full` at `0.75rem` rather than a pill shape. Badges depend on this.

## Deliberate placeholders

These are known and intentional — they are waiting on inputs, not oversights:

1. **The quote form submits nothing.** Every field carries a `name`
   (`event_date`, `guest_count`, `phone`) and the markup is ready to wire, but
   there is no `action` and the button is `type="button"`. To activate it, set
   an `action`/`method` on the form (or attach a submit handler) and change the
   button to `type="submit"`. Until then the page captures no leads.
2. **`event-manager-consultation.jpg` is a stand-in.** It shows a
   business-conference screen rather than the event-manager-with-couple scene
   its description calls for. Both placeholders are marked with `PLACEHOLDER`
   comments in `index.html`.

## Known gaps

1. **Seven of nine images have no `alt` text.** They carry `data-alt`, which
   screen readers ignore. The descriptions are already written and just need
   moving to the real attribute. The hero and the logo are done.
2. **The hero photo carries visible watermarks.** A "VS" mark sits on the back
   wall above the stage, and a second script mark sits in the mirror on the
   right wall. There is also a faint rectangular seam across the ceiling on the
   upper right. Worth sourcing a clean original before launch.

## Contact points in the page

- Phone / WhatsApp: `+91 88843 31096`
- Hours: Daily 9 AM – 11 PM
