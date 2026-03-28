# Design Refresh — geotapp.com + blog — Design Document

**Date:** 2026-03-28
**Scope:** Homepage (geotapp-site / Next.js) + Blog (WordPress via SFTP)
**Approach:** Component-level refresh + WP theme CSS (Option B)

---

## Goals

- Uniform visual identity between homepage and blog
- Use all GeoTapp logo colors (green #8FC436, brand-green #52C065, brand-blue #3BAEE0)
- Improve product mockup visibility
- Fix blog cover image heterogeneity
- Add mobile sticky CTA
- Clean up inflated files (maintenance-note spam)

---

## Section 1 — Design System

### Token updates (`tailwind.config.ts`)

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#8FC436` | Primary CTA, kept as-is |
| `brand-green` | `#52C065` | Logo icon green — hover states, gradient decorations |
| `brand-blue` | `#3BAEE0` | Logo text blue — secondary CTAs, links, badges, highlights |
| `flow` | `#059669` | GeoTapp Flow product color |
| `app` | `#d97706` | GeoTapp App product color |

### Spacing tokens

Add `section-sm` (py-16), `section-md` (py-24), `section-lg` (py-32) utility classes in `globals.css` to enforce consistent vertical rhythm across all sections.

### Animations

Apply `.reveal` class systematically to all section entry points (already defined in globals.css but unused consistently).

### File cleanup

Remove `maintenance-note-1..N` comment blocks from all project files. These are identical, repeated comments injected by a previous agent run that provide no value and inflate file sizes.

---

## Section 2 — Homepage (`page.tsx` + components)

### Hero
- Add `brand-blue` to micro-trust signals (GPS, GDPR, offline icons) for visual weight
- Structure unchanged

### Problem section
- Replace numbered red circles with: large `brand-blue` number + left colored border on card
- Stronger visual hierarchy

### Settori section
- Align hover colors to brand tokens
- Increase contrast on hover states

### Product sections (Verifier, Flow, App)
- Increase mockup column from 50% to 60% on desktop
- Add `shadow-2xl` + subtle 3D tilt (`rotate-1` / `-rotate-1`) to mockup containers
- Makes the product the visual protagonist of each section

### TrustBar placement
- Move `TrustBar` component immediately below Hero (currently buried at bottom)
- Maximum attention zone

### Sticky mobile CTA
- Add `fixed bottom-0 left-0 right-0` bar, `md:hidden`
- Primary CTA button, full width
- Auto-hides when user scrolls into a CTA section (IntersectionObserver)

### Footer (`Footer.tsx`)
- Simplify to 3 clean columns: logo+tagline | nav links | copyright
- Remove language links cascade from footer (kept in navbar LanguageSwitcher only)

---

## Section 3 — Blog (WordPress via SFTP)

### Cover images
- PHP script via SFTP: reads current featured image, applies semi-transparent color overlay by category + white title text, saves as new featured image
- Original images remain intact in WP media library
- `save_post` hook applies template automatically to future posts

**Category overlay colors:**
| Category | Color |
|----------|-------|
| GPS / Tracking | `#3BAEE0` (brand-blue) |
| Sicurezza | `#6366f1` (indigo) |
| Gestione / Operazioni | `#52C065` (brand-green) |
| Tecnologia | `#d97706` (amber) |
| Generico / Default | `#8FC436` (primary) |

### Grid layout
- First post: full-width featured card (latest article)
- Remaining posts: 3-column grid

### Card improvements
- Reading time (calculated from post word count)
- Typography: title 18px bold, excerpt 14px, CTA link green
- Uniform aspect ratio on cover images

### Category filter
- Clickable filter bar above grid
- JS filtering without page reload

### Mid-page banner
- Remove as full-width interrupting band
- Re-integrate as regular grid card with brand background

### Open Graph
- Cover images used automatically as OG meta image via featured image field

### Footer
- Aligned with homepage: same 3-column layout, same logo, same structure
- Implemented via WP theme custom CSS + template_parts override via SFTP

---

## Coherence Elements (Home ↔ Blog)

- Same navbar
- Same footer structure
- Same card component style (blog cards = same visual language as homepage feature cards)
- Shared color tokens referenced in both Next.js (tailwind) and WP (CSS variables)

---

## Files to Modify

### geotapp-site
- `tailwind.config.ts` — add brand-green, brand-blue tokens
- `src/app/globals.css` — add spacing tokens, clean maintenance-notes
- `src/app/page.tsx` — hero, problem, settori, product sections, TrustBar position, sticky CTA
- `src/components/Footer.tsx` — simplify layout
- All other files with maintenance-note spam — cleanup only

### WordPress (via SFTP)
- `blog/wp-content/themes/[active-theme]/style.css` — card styles, grid, typography, footer
- `blog/wp-content/themes/[active-theme]/functions.php` — save_post hook for auto-cover
- New: `blog/wp-content/themes/[active-theme]/cover-generator.php` — one-time script for existing posts
- WP Admin > Appearance > Customize > Additional CSS — filter bar JS/CSS

---

## Out of Scope

- Structural narrative of homepage (problem → solution → proof → CTA) — working well, not touched
- Blog 3-column grid layout — correct, only execution improved
- Any backend/API changes
