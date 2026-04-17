# EN Homepage Fix Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reduce the 15-second bounce on /en/ by (A) showing a language suggestion banner to Italian-browser visitors and (B) tightening the EN hero copy.

**Architecture:** Two independent changes — a new client component `LocaleSuggestionBanner` injected into `[locale]/page.tsx` only for `locale === 'en'`, plus copy updates in `src/dictionaries/en.json`.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, React client components.

---

### Task 1: Create LocaleSuggestionBanner component

**Files:**
- Create: `src/components/LocaleSuggestionBanner.tsx`

**Step 1: Write the component**

```tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const SESSION_KEY = 'locale-banner-dismissed';

export default function LocaleSuggestionBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const lang = navigator.language ?? '';
    if (lang.toLowerCase().startsWith('it')) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(SESSION_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="w-full bg-amber-50 border-b border-amber-200 px-4 py-2 flex items-center justify-center gap-3 text-sm text-slate-700 z-50">
      <span>Stai cercando GeoTapp in italiano?</span>
      <Link
        href="/it/"
        onClick={dismiss}
        className="font-semibold text-amber-700 hover:underline whitespace-nowrap"
      >
        Vai alla versione italiana →
      </Link>
      <button
        onClick={dismiss}
        aria-label="Chiudi"
        className="ml-2 text-slate-400 hover:text-slate-600 text-lg leading-none"
      >
        ×
      </button>
    </div>
  );
}
```

**Step 2: Verify the file exists**

```bash
cat src/components/LocaleSuggestionBanner.tsx
```
Expected: file content printed without errors.

**Step 3: Commit**

```bash
git add src/components/LocaleSuggestionBanner.tsx
git commit -m "feat(en): add LocaleSuggestionBanner for Italian-browser visitors"
```

---

### Task 2: Inject banner into /en/ page

**Files:**
- Modify: `src/app/[locale]/page.tsx`

**Step 1: Add the import at the top of the file**

After the existing imports, add:
```tsx
import LocaleSuggestionBanner from '@/components/LocaleSuggestionBanner';
```

**Step 2: Conditionally render the banner**

In the `LocalePage` component return, add the banner before `<HomeClient />` only when locale is `en`:

```tsx
return (
  <>
    {faq && (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    )}
    {locale === 'en' && <LocaleSuggestionBanner />}
    <HomeClient />
    <BlogHighlights locale={locale as AppLocale} categoryId={54} />
  </>
);
```

**Step 3: Build check**

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site
npm run build 2>&1 | tail -20
```
Expected: build completes with no TypeScript errors.

**Step 4: Commit**

```bash
git add src/app/[locale]/page.tsx
git commit -m "feat(en): inject LocaleSuggestionBanner on /en/ only"
```

---

### Task 3: Update EN hero copy

**Files:**
- Modify: `src/dictionaries/en.json`

**Step 1: Update the three fields in the `landing` section**

Find and replace these exact values:

| Field | Old value | New value |
|---|---|---|
| `hero_badge` | `"The work happened. Now make it provable."` | `"GPS-verified proof for every field job."` |
| `hero_title` | `"If you can't prove it, the client says it never happened."` | `"Stop losing jobs to disputes. Prove every intervention."` |
| `hero_subtitle` | existing long text | `"GeoTapp records GPS location, hours and photo proof at every job — sealed and tamper-proof. Your client verifies it independently. No disputes, no unpaid invoices."` |

**Step 2: Validate JSON**

```bash
python3 -c "import json; json.load(open('src/dictionaries/en.json')); print('JSON OK')"
```
Expected: `JSON OK`

**Step 3: Build check**

```bash
npm run build 2>&1 | tail -10
```
Expected: build completes, no errors.

**Step 4: Commit**

```bash
git add src/dictionaries/en.json
git commit -m "copy(en): tighten hero — concrete value prop over narrative"
```

---

### Task 4: Push to main

**Step 1: Push**

```bash
git push origin HEAD:main
```

**Step 2: Verify deploy on Cloudflare**

Wait ~2 minutes then check: `curl -s -o /dev/null -w "%{http_code}" https://geotapp.com/en/`
Expected: `200`
