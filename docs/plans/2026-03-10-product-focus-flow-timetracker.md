# Product Focus Flow TimeTracker Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove FortyX and Zenith SEO from geotapp-site public visibility and redirect their product URLs to pricing pages, keeping the site focused on Flow and TimeTracker.

**Architecture:** Trim the public navigation and homepage sections to only Flow and TimeTracker, reduce pricing to the active product categories, and replace the disabled product pages with redirect-only route handlers/pages. Update broad marketing copy and metadata that still advertise the wider suite so the site reads consistently after the removals.

**Tech Stack:** Next.js App Router, static export (`output: export`), React, TypeScript, Node test runner.

---

### Task 1: Add the failing regression test

**Files:**
- Create: `geotapp-site/test/product-visibility-focus.test.js`

**Step 1: Write the failing test**

Assert from source that:
- `src/components/Navbar.tsx` no longer links to `/products/fortyx` or `/products/zenith-seo`
- `src/app/page.tsx` no longer links to `/products/fortyx` or `/products/zenith-seo`
- `src/app/pricing/page.tsx` no longer contains category ids `fortyx` and `zenith`
- route files for disabled products redirect to `/pricing` or `/en/pricing`

**Step 2: Run test to verify it fails**

Run: `node --test test/product-visibility-focus.test.js`

Expected: FAIL because current sources still expose the products.

### Task 2: Remove public links and pricing exposure

**Files:**
- Modify: `geotapp-site/src/components/Navbar.tsx`
- Modify: `geotapp-site/src/app/page.tsx`
- Modify: `geotapp-site/src/app/pricing/page.tsx`
- Modify: `geotapp-site/src/dictionaries/it.json`
- Modify: `geotapp-site/src/dictionaries/en.json`

**Step 1: Navbar cleanup**

Remove FortyX and Zenith from desktop/mobile product menus.

**Step 2: Homepage cleanup**

Remove the two dedicated homepage product sections and any no-longer-needed mockup/import code.

**Step 3: Pricing cleanup**

Remove FortyX and Zenith from `baseCategories` so pricing only shows Flow and TimeTracker.

**Step 4: Messaging cleanup**

Update broad hero/marketing text to speak only about Flow and TimeTracker.

### Task 3: Disable direct product pages

**Files:**
- Modify: `geotapp-site/src/app/products/fortyx/page.tsx`
- Modify: `geotapp-site/src/app/products/zenith-seo/page.tsx`
- Modify: `geotapp-site/src/app/en/products/fortyx/page.tsx`
- Modify: `geotapp-site/src/app/en/products/zenith-seo/page.tsx`

**Step 1: Replace full product pages with redirect-only routes**

Redirect:
- Italian routes -> `/pricing`
- English routes -> `/en/pricing`

**Step 2: Keep implementation compatible with static export**

If server redirect semantics do not build under `output: export`, switch to the smallest client-side redirect page that passes build and still prevents public product exposure.

### Task 4: Re-run tests and finish repo hygiene

**Files:**
- Modify: `geotapp-site/package.json`
- Modify: `AGENTS.md`

**Step 1: Run targeted tests**

Run:
- `node --test test/pricing-promo-codes.test.js test/site-branding-and-sectors.test.js test/product-visibility-focus.test.js`

**Step 2: Bump patch version**

Increment `geotapp-site/package.json` patch version for the user-facing site change.

**Step 3: Update repo notes**

Add an `AGENTS.md` note for the public product focus change.

**Step 4: Full verification**

Run:
- `node --test test/pricing-promo-codes.test.js test/site-branding-and-sectors.test.js test/product-visibility-focus.test.js`
- `npm run build`

Expected:
- all tests pass
- static build passes
