# Settori Landing Pages SEO Optimization Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Improve organic ranking for the 3 settori landing pages (pulizie, installatori, sicurezza) by adding SoftwareApplication schema, surfacing pricing, enriching keywords, and adding an internal link from a relevant blog post.

**Architecture:** All 3 settori share one layout component (`SettorePageLayout.tsx`) and one types file (`src/content/settori/types.ts`). Schema and layout changes propagate automatically to all 3. Content enrichment is done per-file.

**Tech Stack:** Next.js / TypeScript, JSON-LD structured data, WordPress REST API (blog post update via authenticated POST)

---

## Context

### GSC opportunity
`app per impresa di pulizie` — 204 impressions, position 42. The page `/it/settori/pulizie/` is the right target.

### Pricing
- TimeTracker: **2 €/operatore/mese** (24 €/operatore/anno)
- Free plan available
- Source: `src/lib/pricing.ts` → `priceAnnualPerSeat: 24.0`

### Blog post for internal link
- WP ID: **5297** — "App pulizie: basta Excel, gestisci squadre con GPS"
- WP REST API base: `https://geotapp.com/blog/wp-json/wp/v2`
- Credentials: WP App Password (from `reference_blog_geotapp_credentials.md` memory)

### Relevant files
- `src/components/SettorePageLayout.tsx` — shared layout, schema injection point
- `src/content/settori/types.ts` — `SettoreContent` interface
- `src/content/settori/pulizie/it.ts`
- `src/content/settori/installatori/it.ts`
- `src/content/settori/sicurezza/it.ts`
- `src/app/[locale]/products/geotapp-flow/page.tsx` — reference for SoftwareApplication schema shape

---

## Task 1: Add SoftwareApplication schema to SettorePageLayout

**Files:**
- Modify: `src/components/SettorePageLayout.tsx`

All 3 settori benefit automatically — no per-page change needed.

**Step 1: Read the current layout schema block**

Open `src/components/SettorePageLayout.tsx` and find the `schema_faq` block (around line 87–107). This is where we'll add the SoftwareApplication schema alongside the existing Service + FAQPage schemas.

**Step 2: Write the failing test**

There is no automated test for schema output in this project (Next.js page rendering). Skip to implementation. Verify manually after build.

**Step 3: Add SoftwareApplication schema inside the `schema_faq` block**

In `SettorePageLayout.tsx`, inside the `{content.schema_faq && content.schema_faq.length > 0 && (` block, add a third `<JsonLd>` after the existing FAQPage one:

```tsx
<JsonLd data={{
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'GeoTapp',
  operatingSystem: 'Android, iOS, Web',
  applicationCategory: 'BusinessApplication',
  offers: {
    '@type': 'Offer',
    price: '2',
    priceCurrency: 'EUR',
    description: 'Piano TimeTracker da 2 €/operatore/mese. Piano gratuito disponibile.',
  },
  url: `https://geotapp.com/${locale}/settori/${settore}/`,
}} />
```

The `locale` and `settore` props are already available in scope.

**Step 4: Verify locally**

Run `npm run build` in `geotapp-site/`. Expect zero TypeScript errors and a successful build.

**Step 5: Commit**

```bash
git add src/components/SettorePageLayout.tsx
git commit -m "feat(seo): add SoftwareApplication schema to settore pages"
```

---

## Task 2: Add pricing_hint field to SettoreContent type + render in layout

**Files:**
- Modify: `src/content/settori/types.ts`
- Modify: `src/components/SettorePageLayout.tsx`

This adds an optional pricing hint banner visible just below the hero section when provided.

**Step 1: Add the optional field to the interface**

In `src/content/settori/types.ts`, add after the `cta` field (before `schema_sector_name`):

```ts
pricing_hint?: {
  label: string;     // e.g. "A partire da"
  price: string;     // e.g. "2 €"
  per: string;       // e.g. "operatore/mese"
  note: string;      // e.g. "Piano gratuito disponibile"
};
```

**Step 2: Render pricing_hint in the layout**

In `SettorePageLayout.tsx`, find the hero section's CTA note (the `<p className="mt-4 text-sm text-slate-400">` line). Add the pricing hint **after** the "Guide e articoli" link, as a small inline badge:

```tsx
{content.pricing_hint && (
  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
    <span className="text-slate-500">{content.pricing_hint.label}</span>
    <span className={`font-bold ${colors.accent}`}>{content.pricing_hint.price}</span>
    <span className="text-slate-500">{content.pricing_hint.per}</span>
    <span className="mx-1 text-slate-300">·</span>
    <span className="text-slate-400">{content.pricing_hint.note}</span>
  </div>
)}
```

**Step 3: Verify build**

```bash
npm run build
```

Expect: zero TypeScript errors. Since `pricing_hint` is optional, existing content files without it compile fine.

**Step 4: Commit**

```bash
git add src/content/settori/types.ts src/components/SettorePageLayout.tsx
git commit -m "feat(settori): add optional pricing_hint field and hero badge"
```

---

## Task 3: Update content files — pricing_hint + keyword enrichment

**Files:**
- Modify: `src/content/settori/pulizie/it.ts`
- Modify: `src/content/settori/installatori/it.ts`
- Modify: `src/content/settori/sicurezza/it.ts`

### 3a — pulizie/it.ts

**Target keyword:** `app per impresa di pulizie` (position 42 — primary opportunity)

Changes:
1. Add `pricing_hint` object
2. Enrich `meta.title` to include "software" variant: `'App e software per imprese di pulizie | GeoTapp — Certifica ogni intervento'`
3. Enrich `meta.description` to add "software gestione pulizie": `'GeoTapp è l\'app e il software per la gestione delle imprese di pulizie: GPS, presenze, report non alterabili. Conforme CCNL e GDPR. Prova gratis.'`
4. Add to `hero.subtitle` the phrase "software gestione pulizie" naturally — can append a sentence: change last sentence to end with `"— che il committente può verificare da solo. Il software di gestione pulizie che fa il lavoro sporco per te."`
5. Enrich one FAQ answer to include "software gestione pulizie":
   - In the inline `faq.items`, find the last item (about pricing) — no change needed there.
   - In `schema_faq`, the first question about "App per pulizie, multiservizi..." — update answer to include "app e software per imprese di pulizie e multiservizi".

Full `pricing_hint` to add (before `schema_sector_name`):

```ts
pricing_hint: {
  label: 'A partire da',
  price: '2 €',
  per: 'operatore/mese',
  note: 'Piano gratuito disponibile',
},
```

### 3b — installatori/it.ts

**Target keyword:** `app per installatori` / `software gestione interventi`

Changes:
1. Add `pricing_hint` (same as above)
2. Enrich `meta.title`: `'App per Installatori ed Elettricisti | GeoTapp — Rapportini GPS'`
3. Enrich `meta.description` to include "software gestione interventi": `'GeoTapp è l\'app e software per installatori, elettricisti e idraulici: rapportini GPS, prove fotografiche e report non alterabili. Prova gratis.'`
4. Enrich `hero.subtitle` — append: `" Il software di gestione interventi per installatori che lavora mentre sei sul campo."`
5. Enrich `schema_faq` first answer to add "app per installatori ed elettricisti": already present. Add "software per gestione rapportini" naturally.

Full `pricing_hint` to add:

```ts
pricing_hint: {
  label: 'A partire da',
  price: '2 €',
  per: 'operatore/mese',
  note: 'Piano gratuito disponibile',
},
```

### 3c — sicurezza/it.ts

**Target keyword:** `software aziende di sicurezza` / `app vigilanza privata`

Changes:
1. Add `pricing_hint` (same as above)
2. Enrich `meta.description` to include "app vigilanza privata": `'GeoTapp è il software per aziende di sicurezza e vigilanza privata: turni certificati con GPS, ronde documentate e prove fotografiche non alterabili. Conforme GDPR. Prova gratis.'`
3. Enrich `hero.subtitle` — add mention of "app vigilanza privata": append `" L\'app per vigilanza privata che certifica ogni turno, ogni ronda, ogni presenza."`

Full `pricing_hint`:

```ts
pricing_hint: {
  label: 'A partire da',
  price: '2 €',
  per: 'operatore/mese',
  note: 'Piano gratuito disponibile',
},
```

**Step after each file edit: verify TypeScript**

```bash
npx tsc --noEmit
```

Expect: no errors.

**Step: full build**

```bash
npm run build
```

Expect: zero errors, successful build.

**Step: commit**

```bash
git add src/content/settori/pulizie/it.ts src/content/settori/installatori/it.ts src/content/settori/sicurezza/it.ts
git commit -m "feat(settori): add pricing_hint and keyword enrichment to all 3 settori"
```

---

## Task 4: Add internal link from WP blog post 5297 to /it/settori/pulizie/

**Files:** None (WordPress REST API call)

This adds an internal link from the blog post "App pulizie: basta Excel, gestisci squadre con GPS" (ID 5297) pointing to `https://geotapp.com/it/settori/pulizie/`.

**Step 1: Fetch current post content**

```bash
curl -s "https://geotapp.com/blog/wp-json/wp/v2/posts/5297?_fields=id,title,content" \
  | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['title']['rendered']); print(d['content']['rendered'][:200])"
```

Expected: prints title and first 200 chars of content.

**Step 2: Identify insertion point**

Read the full post content (rendered HTML). Find a natural spot to insert the internal link — ideally in the first 2 paragraphs or in a "conclusion" paragraph. The anchor text should be: `app per imprese di pulizie` or `software gestione pulizie`.

**Step 3: Update via REST API**

```bash
# Credentials: see reference_blog_geotapp_credentials.md memory
# WP_USER=Mike Petraroli (or the wp_user set there)
# WP_APP_PASS=the app password

curl -s -X POST \
  "https://geotapp.com/blog/wp-json/wp/v2/posts/5297" \
  -u "$WP_USER:$WP_APP_PASS" \
  -H "Content-Type: application/json" \
  -d '{"content": "<NEW CONTENT WITH LINK>"}'
```

Replace `<NEW CONTENT WITH LINK>` with the full post content including the added anchor:

```html
<a href="https://geotapp.com/it/settori/pulizie/">app per imprese di pulizie</a>
```

**Step 4: Verify**

```bash
curl -s "https://geotapp.com/blog/wp-json/wp/v2/posts/5297?_fields=content" \
  | python3 -c "import sys,json; d=json.load(sys.stdin); print('settori/pulizie' in d['content']['rendered'])"
```

Expected: `True`

**Step 5: Commit note**

No code files changed. Add a note in the commit message context (no actual commit needed unless project tracks API calls).

---

## Verification checklist

After all tasks complete:

- [ ] `npm run build` passes with zero errors
- [ ] View source of `/it/settori/pulizie/` — confirm `SoftwareApplication` JSON-LD block present
- [ ] View source of `/it/settori/installatori/` — confirm `SoftwareApplication` JSON-LD block present
- [ ] View source of `/it/settori/sicurezza/` — confirm `SoftwareApplication` JSON-LD block present
- [ ] Hero section of each settore page shows pricing badge "A partire da **2 €** operatore/mese · Piano gratuito disponibile"
- [ ] WP post 5297 contains link to `https://geotapp.com/it/settori/pulizie/`
- [ ] Google Rich Results Test: paste each URL, confirm FAQPage + SoftwareApplication detected
