# Newsletter Modal — Design Document
**Date:** 2026-03-28

## Goal
Show a newsletter signup modal on first visit to the Next.js site, coordinated with GeoTapp logo colors, triggered by scroll depth.

## Trigger
- Fires when user has scrolled ≥50% of the page
- `localStorage` key: `gtapp_nl_modal_seen`
  - Set to `"1"` on dismiss (× button or outside click)
  - Set to `"1"` on successful subscription
  - If key exists, modal never shows again

## Visual Design
- **Backdrop:** fixed overlay, `rgba(0,0,0,0.55)`, z-index high
- **Card:** max-width 460px, centered, border-radius 16px, white background
- **Header strip:** 80px tall, diagonal gradient `#66d97a → #2da5e4` (logo colors), GeoTapp logo white centered
- **Body:** white, 24px padding
  - `<h2>` — locale-specific headline
  - `<NewsletterForm variant="compact" locale={locale} />`
- **Close button:** × top-right corner of card, also close on backdrop click

## Localized Headlines (11 languages)
| Locale | Headline |
|--------|----------|
| it | Rimani nel loop sul futuro del lavoro |
| en | Stay ahead in field operations |
| de | Bleib auf dem neuesten Stand |
| fr | Gardez une longueur d'avance |
| es | Mantente a la vanguardia |
| pt | Fique à frente no setor |
| nl | Blijf voorop in jouw sector |
| ru | Будь в курсе новостей отрасли |
| da | Hold dig foran i din branche |
| sv | Håll dig steget före |
| nb | Hold deg foran i bransjen |

## Architecture
- **New file:** `src/components/NewsletterModal.tsx` — `'use client'`
- **Mounted in:** `src/app/[locale]/layout.tsx` alongside `CookieConsentBanner`
- **Dependencies:** React `useState`, `useEffect`, scroll event listener
- **Reuses:** `NewsletterForm` with `variant="compact"`

## Success State
- On successful subscription (`status === 'success'` in NewsletterForm), modal auto-closes after 1.5s and sets localStorage flag

## Non-goals
- No A/B testing
- No timer-based fallback (scroll only)
- No exit-intent detection
