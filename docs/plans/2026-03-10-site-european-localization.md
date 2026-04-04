# Site European Localization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Localize the full public `geotapp-site` into the same languages supported by `geotapp-flow`, route visitors to the correct locale based on persisted preference or geolocation, and refresh the Flow and TimeTracker product pages to reflect current functionality.

**Architecture:** Replace the current binary `it/en` handling with a shared locale system that drives routing, dictionaries, metadata, and navigation links. Serve locale-aware routes through Cloudflare/OpenNext so edge logic can resolve the first-visit locale using cookie, GeoIP country, and `Accept-Language`, while preserving a manual user override across visits.

**Tech Stack:** Next.js App Router, TypeScript, React, Cloudflare/OpenNext worker runtime, Node test runner.

---

### Task 1: Introduce locale configuration and failing locale-resolution tests

**Files:**
- Create: `geotapp-site/src/lib/i18n/config.ts`
- Create: `geotapp-site/src/lib/i18n/locale-routing.ts`
- Create: `geotapp-site/test/locale-routing.test.js`

**Step 1: Write the failing test**

Cover:
- supported locale list matches `geotapp-flow`
- country mappings resolve expected locales
- cookie locale overrides country locale
- `Accept-Language` is used when country is missing or unsupported
- fallback locale is deterministic

**Step 2: Run test to verify it fails**

Run: `node --test test/locale-routing.test.js`

Expected: FAIL because locale helpers do not exist yet.

**Step 3: Write minimal implementation**

Implement:
- `SUPPORTED_LOCALES`
- locale labels
- country-to-locale map
- `resolveLocale({ cookieLocale, countryCode, acceptLanguage })`
- helper to normalize locale codes

**Step 4: Run test to verify it passes**

Run: `node --test test/locale-routing.test.js`

Expected: PASS

### Task 2: Add locale path helpers and navigation tests

**Files:**
- Create: `geotapp-site/test/locale-links.test.js`
- Modify: `geotapp-site/src/components/Navbar.tsx`
- Modify: `geotapp-site/src/components/Footer.tsx`
- Modify: `geotapp-site/src/app/layout.tsx`

**Step 1: Write the failing test**

Assert from source that:
- navigation no longer hardcodes only `/` and `/en`
- locale-aware helpers are used for links
- layout exposes the current locale in HTML metadata wiring

**Step 2: Run test to verify it fails**

Run: `node --test test/locale-links.test.js`

Expected: FAIL because components still use `pathname.startsWith('/en')`.

**Step 3: Write minimal implementation**

Implement shared helpers:
- detect current locale from pathname
- build localized hrefs
- expose locale labels for a future switcher

Refactor navbar/footer/layout to consume the shared helpers instead of binary `isEn`.

**Step 4: Run test to verify it passes**

Run: `node --test test/locale-links.test.js`

Expected: PASS

### Task 3: Replace binary dictionaries with a locale registry

**Files:**
- Create: `geotapp-site/src/dictionaries/fr.json`
- Create: `geotapp-site/src/dictionaries/de.json`
- Create: `geotapp-site/src/dictionaries/es.json`
- Create: `geotapp-site/src/dictionaries/pt.json`
- Create: `geotapp-site/src/dictionaries/nl.json`
- Create: `geotapp-site/src/dictionaries/sv.json`
- Create: `geotapp-site/src/dictionaries/da.json`
- Create: `geotapp-site/src/dictionaries/nb.json`
- Create: `geotapp-site/src/dictionaries/ru.json`
- Create: `geotapp-site/src/lib/i18n/dictionaries.ts`
- Modify: `geotapp-site/src/dictionaries/it.json`
- Modify: `geotapp-site/src/dictionaries/en.json`

**Step 1: Add translated dictionaries**

Create locale JSON files aligned to the current `it/en` structure.

**Step 2: Add dictionary loader/registry**

Export a locale-keyed dictionary map and helpers such as:
- `getDictionary(locale)`
- `getDefaultDictionary()`

**Step 3: Keep copy refresh in scope**

Update `product_pages.flow` and `product_pages.app` content in all dictionaries so the refreshed product messaging is consistent across locales.

### Task 4: Add localized route structure for the full public site

**Files:**
- Create: `geotapp-site/src/app/[locale]/layout.tsx`
- Create: `geotapp-site/src/app/[locale]/page.tsx`
- Create: `geotapp-site/src/app/[locale]/pricing/page.tsx`
- Create: `geotapp-site/src/app/[locale]/pricing/bundle/page.tsx`
- Create: `geotapp-site/src/app/[locale]/contact/page.tsx`
- Create: `geotapp-site/src/app/[locale]/products/geotapp-flow/page.tsx`
- Create: `geotapp-site/src/app/[locale]/products/geotapp-app/page.tsx`
- Create: `geotapp-site/src/app/[locale]/settori/page.tsx`
- Create: `geotapp-site/src/app/[locale]/settori/installatori/page.tsx`
- Create: `geotapp-site/src/app/[locale]/settori/pulizie/page.tsx`
- Create: `geotapp-site/src/app/[locale]/settori/sicurezza/page.tsx`
- Create: `geotapp-site/src/app/[locale]/chi-siamo/page.tsx`
- Create: `geotapp-site/src/app/[locale]/guida/page.tsx`
- Create: `geotapp-site/src/app/[locale]/download/page.tsx`
- Create: `geotapp-site/src/app/[locale]/blog/page.tsx`
- Create: `geotapp-site/src/app/[locale]/login/page.tsx`
- Create: `geotapp-site/src/app/[locale]/success/page.tsx`
- Create: `geotapp-site/src/app/[locale]/privacy/page.tsx`
- Create: `geotapp-site/src/app/[locale]/terms/page.tsx`
- Modify: locale-specific legacy wrappers under `geotapp-site/src/app/en/...`

**Step 1: Write the failing route smoke test**

Extend or add a source test asserting the main locale route files exist for the public site and import the shared page implementations.

**Step 2: Build locale wrappers**

Make localized routes reuse shared implementations rather than duplicate logic.

**Step 3: Preserve legacy `/en` compatibility during migration**

Ensure old `/en/...` entrypoints either delegate to `[locale]` or remain valid aliases if needed for continuity.

### Task 5: Implement edge locale resolution and manual override persistence

**Files:**
- Modify: `geotapp-site/src/middleware.ts`
- Create: `geotapp-site/src/components/LanguageSwitcher.tsx`
- Modify: `geotapp-site/src/components/Navbar.tsx`
- Modify: `geotapp-site/src/components/Footer.tsx`
- Modify: `geotapp-site/src/app/[locale]/layout.tsx`

**Step 1: Write the failing middleware behavior test**

Add a Node-level test for locale resolution inputs and a source assertion that middleware uses the locale helpers and preference cookie.

**Step 2: Update edge behavior**

Middleware/proxy logic should:
- ignore static assets and API paths
- detect existing locale in pathname
- redirect `/` and non-localized public routes to the resolved locale
- set or respect the locale cookie

**Step 3: Add manual language switcher**

Provide a visible locale switcher that:
- navigates to the same page in another locale where possible
- writes the persistent cookie
- keeps user choice on future visits

**Step 4: Verify behavior**

Run the locale tests again and confirm they pass.

### Task 6: Refresh Flow and TimeTracker product page messaging

**Files:**
- Modify: `geotapp-site/src/app/products/geotapp-flow/page.tsx`
- Modify: `geotapp-site/src/app/products/geotapp-app/page.tsx`
- Modify: `geotapp-site/src/dictionaries/it.json`
- Modify: `geotapp-site/src/dictionaries/en.json`
- Modify: all newly added locale dictionaries
- Modify: `geotapp-site/test/site-branding-and-sectors.test.js`
- Create: `geotapp-site/test/product-copy-refresh.test.js`

**Step 1: Write the failing copy test**

Assert that Flow and TimeTracker product pages mention the refreshed concepts, for example:
- operational control / management hub
- verifiable field work
- native Android/iOS apps in release
- reduced disputes and stronger client-facing proof

**Step 2: Update page copy**

Refresh:
- hero subtitle
- feature cards/highlights
- cross-product positioning blocks

Do not change page structure unless needed for locale plumbing.

**Step 3: Run test to verify it passes**

Run: `node --test test/site-branding-and-sectors.test.js test/product-copy-refresh.test.js`

Expected: PASS

### Task 7: Localize remaining public pages and metadata

**Files:**
- Modify: `geotapp-site/src/app/page.tsx`
- Modify: `geotapp-site/src/app/pricing/page.tsx`
- Modify: `geotapp-site/src/app/pricing/bundle/page.tsx`
- Modify: `geotapp-site/src/app/contact/page.tsx`
- Modify: `geotapp-site/src/app/chi-siamo/page.tsx`
- Modify: `geotapp-site/src/app/guida/page.tsx`
- Modify: `geotapp-site/src/app/download/page.tsx`
- Modify: `geotapp-site/src/app/blog/page.tsx`
- Modify: `geotapp-site/src/app/login/page.tsx`
- Modify: `geotapp-site/src/app/success/page.tsx`
- Modify: `geotapp-site/src/app/privacy/page.tsx`
- Modify: `geotapp-site/src/app/terms/page.tsx`
- Modify: `geotapp-site/src/app/settori/page.tsx`
- Modify: `geotapp-site/src/app/settori/installatori/page.tsx`
- Modify: `geotapp-site/src/app/settori/installatori/content.tsx`
- Modify: `geotapp-site/src/app/settori/pulizie/page.tsx`
- Modify: `geotapp-site/src/app/settori/pulizie/content.tsx`
- Modify: `geotapp-site/src/app/settori/sicurezza/page.tsx`
- Modify: `geotapp-site/src/app/settori/sicurezza/content.tsx`
- Modify: `geotapp-site/src/app/layout.tsx`

**Step 1: Remove residual binary locale checks**

Replace remaining `isEn` branches with locale-aware dictionary consumption.

**Step 2: Localize metadata**

Set proper:
- `lang`
- titles/descriptions per locale
- `alternate` links / `hreflang`

**Step 3: Verify main pages**

Add/extend tests so major public pages can render with different locales and keep content consistent.

### Task 8: Update deploy path, versioning, docs, and run full verification

**Files:**
- Modify: `geotapp-site/next.config.mjs`
- Modify: `geotapp-site/package.json`
- Modify: `geotapp-site/wrangler.jsonc`
- Modify: `AGENTS.md`
- Modify: `geotapp-site/AGENTS.md`

**Step 1: Align deploy scripts to the worker runtime**

Replace the static-export deployment assumption with the OpenNext/Cloudflare worker build path already present in the repository.

**Step 2: Bump version**

Increment `geotapp-site/package.json` patch/minor version according to the size of the public-facing change.

**Step 3: Update agent notes**

Document:
- new locale architecture
- supported locales
- cookie/geolocation behavior
- product page refresh

**Step 4: Run targeted verification**

Run:
- `node --test test/locale-routing.test.js`
- `node --test test/locale-links.test.js`
- `node --test test/site-branding-and-sectors.test.js test/product-copy-refresh.test.js`
- any additional public-page locale smoke tests added during implementation

**Step 5: Run full build**

Run the production build path matching the new deployment model.

Expected:
- all locale and content tests pass
- production build passes
- generated output/runtime includes locale-aware routing logic
