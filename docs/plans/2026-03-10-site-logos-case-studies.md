# Site Logos And Case Studies Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Update geotapp-site with the new approved Flow and TimeTracker logos and refresh the installatori/sicurezza sector pages to reflect current product capabilities.

**Architecture:** Add the user-approved logo assets to `public/` and reference them directly from the product-facing pages that currently render Flow and TimeTracker brand marks. Refresh the two sector pages by editing their content modules to align with the current Flow + TimeTracker positioning, including native apps, operational evidence, and reduced disputes through traceable work data.

**Tech Stack:** Next.js App Router, React, TypeScript, static assets in `public/`, Node test runner, Next build.

---

### Task 1: Add regression tests for logos and sector messaging

**Files:**
- Modify: `geotapp-site/test/pricing-promo-codes.test.js`
- Create: `geotapp-site/test/site-branding-and-sectors.test.js`

**Step 1: Write the failing test**

Create a source-level test that checks:
- `src/app/pricing/page.tsx` references `/logoFlow.png` and `/logoTT.png`
- `src/app/products/geotapp-flow/page.tsx` references `/logoFlow.png`
- `src/app/products/geotapp-app/page.tsx` references `/logoTT.png`
- `src/app/settori/installatori/content.tsx` includes messaging about native apps and verifiable work evidence
- `src/app/settori/sicurezza/content.tsx` includes messaging about native apps and reduced disputes

**Step 2: Run test to verify it fails**

Run: `node --test test/site-branding-and-sectors.test.js`

Expected: FAIL because the source still points to old logo assets and older sector copy.

**Step 3: Keep existing promo regression intact**

Ensure the current pricing promo test remains separate and still passes after the new test file is added.

**Step 4: Run both targeted tests**

Run: `node --test test/pricing-promo-codes.test.js test/site-branding-and-sectors.test.js`

Expected: promo test passes, new branding/sector test fails.

### Task 2: Add the approved logo assets and update references

**Files:**
- Create: `geotapp-site/public/logoFlow.png`
- Create: `geotapp-site/public/logoTT.png`
- Modify: `geotapp-site/src/app/pricing/page.tsx`
- Modify: `geotapp-site/src/app/products/geotapp-flow/page.tsx`
- Modify: `geotapp-site/src/app/products/geotapp-app/page.tsx`

**Step 1: Copy the approved logo files**

Use:
- `/home/mike/Scaricati/logoFlow.png`
- `/home/mike/Scaricati/logoTT.png`

Copy them into `geotapp-site/public/`.

**Step 2: Update the failing references**

Replace the old product logo references:
- `/FlowTrasparente.png` -> `/logoFlow.png`
- `/TimeTrackerTrasparente.png` -> `/logoTT.png`

Only in product-specific surfaces identified by the failing test.

**Step 3: Run the new branding test**

Run: `node --test test/site-branding-and-sectors.test.js`

Expected: branding assertions still fail until sector content is updated.

### Task 3: Refresh the installatori case study

**Files:**
- Modify: `geotapp-site/src/app/settori/installatori/page.tsx`
- Modify: `geotapp-site/src/app/settori/installatori/content.tsx`

**Step 1: Write minimal content changes**

Refresh:
- metadata description
- hero promise
- problem statements
- solution/workflow blocks
- proof/dispute reduction messaging

Include explicit references to:
- Flow + TimeTracker working together
- Android/iOS native apps in release
- GPS-based verification
- photos/notes/report evidence for the client
- less internal arguing about hours and travel

**Step 2: Keep scope tight**

Do not redesign the page architecture. Reuse the existing sections and update only the copy and emphasis needed to match current capabilities.

**Step 3: Run the targeted test**

Run: `node --test test/site-branding-and-sectors.test.js`

Expected: installatori assertions pass; sicurezza assertions may still fail.

### Task 4: Refresh the sicurezza case study

**Files:**
- Modify: `geotapp-site/src/app/settori/sicurezza/page.tsx`
- Modify: `geotapp-site/src/app/settori/sicurezza/content.tsx`

**Step 1: Write minimal content changes**

Refresh:
- metadata description
- hero positioning
- pain points
- solution bullets
- final CTA support copy

Include explicit references to:
- native Android/iOS app availability messaging
- cleaner turn/service history
- operational evidence for clients and supervisors
- fewer disputes on presence, start/end time, and completed service

**Step 2: Run the targeted tests**

Run: `node --test test/pricing-promo-codes.test.js test/site-branding-and-sectors.test.js`

Expected: both tests pass.

### Task 5: Update project notes and verify full build

**Files:**
- Modify: `geotapp-site/package.json`
- Modify: `AGENTS.md`

**Step 1: Bump patch version**

Increment `geotapp-site/package.json` patch version for this user-facing site change.

**Step 2: Update repo notes**

Add a 2026-03-10 bullet in `AGENTS.md` describing:
- new Flow/TimeTracker logos on geotapp-site
- refreshed installatori/sicurezza sector pages with current product positioning

**Step 3: Run final verification**

Run:
- `node --test test/pricing-promo-codes.test.js test/site-branding-and-sectors.test.js`
- `npm run build`

Expected:
- tests pass
- production build passes

**Step 4: Commit**

```bash
git add geotapp-site/public/logoFlow.png geotapp-site/public/logoTT.png geotapp-site/src/app/pricing/page.tsx geotapp-site/src/app/products/geotapp-flow/page.tsx geotapp-site/src/app/products/geotapp-app/page.tsx geotapp-site/src/app/settori/installatori/page.tsx geotapp-site/src/app/settori/installatori/content.tsx geotapp-site/src/app/settori/sicurezza/page.tsx geotapp-site/src/app/settori/sicurezza/content.tsx geotapp-site/test/site-branding-and-sectors.test.js geotapp-site/package.json AGENTS.md geotapp-site/docs/plans/2026-03-10-site-logos-case-studies-design.md geotapp-site/docs/plans/2026-03-10-site-logos-case-studies.md
git commit -m "feat: refresh site logos and sector case studies"
```
