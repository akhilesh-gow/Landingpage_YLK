/** Mirrors the design tokens that were previously inlined for the Tailwind Play CDN. */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tertiary-fixed": "#e5e2db",
        "on-primary": "#ffffff",
        "on-error": "#ffffff",
        "primary-fixed-dim": "#adcec1",
        "secondary-fixed": "#ffdea3",
        "secondary-fixed-dim": "#edc067",
        "on-primary-container": "#729186",
        "on-secondary-fixed": "#261900",
        "on-secondary-fixed-variant": "#5d4200",
        "on-secondary": "#ffffff",
        "surface-container-high": "#e8e8e8",
        "secondary": "#7a5902",
        "tertiary-fixed-dim": "#c9c6c0",
        "inverse-primary": "#adcec1",
        "inverse-on-surface": "#f0f1f1",
        "emerald-deep": "#092820",
        "on-primary-fixed-variant": "#2f4c43",
        "surface-container": "#eeeeee",
        "surface-container-lowest": "#ffffff",
        "secondary-container": "#ffd175",
        "tertiary": "#0d0d0a",
        "background": "#f9f9f9",
        "surface-bright": "#f9f9f9",
        "on-primary-fixed": "#022019",
        "surface-tint": "#47645a",
        "surface-dim": "#dadada",
        "surface-variant": "#e2e2e2",
        "error-container": "#ffdad6",
        "error": "#ba1a1a",
        "primary-fixed": "#c9eadd",
        "outline-variant": "#c1c8c4",
        "on-tertiary": "#ffffff",
        "success-green": "#1FA855",
        "on-surface-variant": "#414845",
        "on-secondary-container": "#795801",
        "surface-container-highest": "#e2e2e2",
        "outline": "#727975",
        "surface": "#f9f9f9",
        "on-tertiary-fixed": "#1c1c18",
        "on-background": "#1a1c1c",
        "on-error-container": "#93000a",
        "on-surface": "#1a1c1c",
        "champagne-gold": "#B8903C",
        "surface-container-low": "#f3f3f4",
        "tertiary-container": "#23231f",
        "on-tertiary-container": "#8b8a84",
        "primary-container": "#092820",
        "on-tertiary-fixed-variant": "#474742",
        "primary": "#00110b",
        "inverse-surface": "#2f3131",
        "soft-cream": "#FAF7F0"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        "container-max": "1280px",
        "gutter": "24px",
        "unit": "8px",
        "section-gap-desktop": "120px",
        "section-gap-mobile": "64px",
        "margin-desktop": "80px"
      },
      fontFamily: {
        "body-lg": ["Inter"],
        "label-caps": ["Inter"],
        "headline-md": ["Playfair Display"],
        "display-hero-mobile": ["Playfair Display"],
        "headline-sm": ["Playfair Display"],
        "body-md": ["Inter"],
        "button-text": ["Inter"],
        "headline-lg": ["Playfair Display"],
        "display-hero": ["Playfair Display"]
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "600" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "display-hero-mobile": ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-sm": ["24px", { lineHeight: "1.4", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "button-text": ["14px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" }],
        "headline-lg": ["48px", { lineHeight: "1.2", fontWeight: "600" }],
        "display-hero": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }]
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
};
