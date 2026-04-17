# Design: Fix /en/ homepage bounce rate

**Date:** 2026-04-17
**Problem:** `/en/` has 9 views but only 15s average session duration vs `/it/` at 4min 3s with 95.65% engagement.
**Root cause hypothesis:** (A) Italian users landing on /en/ by mistake; (B) hero copy too abstract for cold international visitors.
**Solution:** Option C — both fixes in parallel.

---

## Part 1 — LocaleSuggestionBanner

A thin sticky banner shown only on `/en/` when the visitor's browser language starts with `it`.

**Component:** `src/components/LocaleSuggestionBanner.tsx` (client component)

**Behaviour:**
- Reads `navigator.language` on mount
- If language starts with `it`: renders a 40px banner at top of page
- Dismissed by clicking `×` or the CTA link
- Dismissed state stored in `sessionStorage` → does not reappear on reload within same session
- No redirect — user chooses

**Placement:** In `src/app/[locale]/page.tsx`, conditionally rendered before `<HomeClient />` only when `locale === 'en'`

**Visual:** `amber-50` background, `amber-200` border, slate-700 text. Non-intrusive.

**Copy:**
> Stai cercando GeoTapp in italiano? [Vai alla versione italiana →] [×]

---

## Part 2 — EN hero copy update

Changes in `src/dictionaries/en.json`, `landing` section only.

| Field | Before | After |
|---|---|---|
| `hero_badge` | "The work happened. Now make it provable." | "GPS-verified proof for every field job." |
| `hero_title` | "If you can't prove it, the client says it never happened." | "Stop losing jobs to disputes. Prove every intervention." |
| `hero_subtitle` | Long narrative (mentions sealed reports, GPS, photos) | "GeoTapp records GPS location, hours and photo proof at every job — sealed and tamper-proof. Your client verifies it independently. No disputes, no unpaid invoices." |

All other fields (`hero_cta_primary`, `hero_cta_secondary`, trust signals, sections) unchanged.

---

## Scope

- No new routes
- No layout changes
- No other locale dictionaries touched
- No redirect logic — banner only suggests
