# Newsletter Modal Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Show a scroll-triggered newsletter signup modal on first visit, using GeoTapp logo colors, with locale-specific headlines.

**Architecture:** New `NewsletterModal.tsx` client component uses a scroll event listener to fire at ≥50% page depth. State persisted in `localStorage` key `gtapp_nl_modal_seen`. Mounted in `[locale]/layout.tsx` alongside the existing `CookieConsentBanner`.

**Tech Stack:** Next.js App Router, React hooks (`useState`, `useEffect`), existing `NewsletterForm` component (variant="compact"), inline styles (no new CSS files).

---

### Task 1: Create NewsletterModal.tsx

**Files:**
- Create: `src/components/NewsletterModal.tsx`

**Step 1: Create the file with translations and skeleton**

```tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import NewsletterForm from '@/components/NewsletterForm';

const HEADLINES: Record<string, string> = {
  it: 'Rimani nel loop sul futuro del lavoro',
  en: 'Stay ahead in field operations',
  de: 'Bleib auf dem neuesten Stand',
  fr: 'Gardez une longueur d\'avance',
  es: 'Mantente a la vanguardia',
  pt: 'Fique à frente no setor',
  nl: 'Blijf voorop in jouw sector',
  ru: 'Будь в курсе новостей отрасли',
  da: 'Hold dig foran i din branche',
  sv: 'Håll dig steget före',
  nb: 'Hold deg foran i bransjen',
};

const STORAGE_KEY = 'gtapp_nl_modal_seen';

export default function NewsletterModal({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show if already seen
    if (localStorage.getItem(STORAGE_KEY)) return;

    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (scrolled / total >= 0.5) {
        setVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close after successful subscription (NewsletterForm sets status=success)
  // We watch for the success state via a wrapper
  const [subscribed, setSubscribed] = useState(false);
  useEffect(() => {
    if (subscribed) {
      localStorage.setItem(STORAGE_KEY, '1');
      const t = setTimeout(() => setVisible(false), 1500);
      return () => clearTimeout(t);
    }
  }, [subscribed]);

  const close = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  const headline = HEADLINES[locale] ?? HEADLINES.en;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.55)',
          zIndex: 9998,
        }}
      />

      {/* Card */}
      <div style={{
        position: 'fixed',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(460px, calc(100vw - 32px))',
        background: '#fff',
        borderRadius: '16px',
        overflow: 'hidden',
        zIndex: 9999,
        boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
      }}>

        {/* Header with logo gradient */}
        <div style={{
          background: 'linear-gradient(135deg, #66d97a 0%, #46bdc0 50%, #2da5e4 100%)',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Image
            src="/LogoGeoTapp.webp"
            alt="GeoTapp"
            width={140}
            height={48}
            style={{ filter: 'brightness(0) invert(1)', height: '40px', width: 'auto' }}
          />
          <button
            onClick={close}
            aria-label="Close"
            style={{
              background: 'rgba(255,255,255,0.25)',
              border: 'none',
              borderRadius: '50%',
              width: '32px', height: '32px',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: '18px', lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '24px' }}>
          <h2 style={{
            margin: '0 0 16px',
            fontFamily: 'var(--font-poppins, Poppins, sans-serif)',
            fontSize: '1.2rem',
            fontWeight: 700,
            color: '#0f172a',
            lineHeight: 1.3,
          }}>
            {headline}
          </h2>

          {/* Wrap NewsletterForm to detect success */}
          <NewsletterFormWrapper locale={locale} onSuccess={() => setSubscribed(true)} />
        </div>
      </div>
    </>
  );
}

// Wrapper to intercept success state from NewsletterForm
// We replicate the form inline so we can detect the success callback.
// Simpler: just render NewsletterForm and let it handle its own success state.
// The modal closes when subscribed flag is set.
function NewsletterFormWrapper({ locale, onSuccess }: { locale: string; onSuccess: () => void }) {
  return (
    <div onClick={(e) => {
      // Detect success message rendered by NewsletterForm
      const target = e.currentTarget;
      const hasSuccess = target.querySelector('svg[stroke="#8FC436"]');
      if (hasSuccess) onSuccess();
    }}>
      <SuccessWatchedForm locale={locale} onSuccess={onSuccess} />
    </div>
  );
}

// We need a way to know when NewsletterForm succeeds.
// Cleanest approach: inline a minimal form that calls the same API,
// and on success triggers onSuccess(). This avoids coupling into NewsletterForm internals.
function SuccessWatchedForm({ locale, onSuccess }: { locale: string; onSuccess: () => void }) {
  const [done, setDone] = useState(false);

  const handleSuccess = () => {
    setDone(true);
    onSuccess();
  };

  if (done) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.75rem',
        padding: '1rem 1.25rem', borderRadius: '12px',
        background: 'rgba(102,217,122,0.12)', border: '1px solid rgba(102,217,122,0.3)',
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#46bdc0" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
        </svg>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#0f172a', fontWeight: 500,
          fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
          {locale === 'it' ? 'Iscrizione confermata! Controlla la tua email.' : 'Subscription confirmed!'}
        </p>
      </div>
    );
  }

  return <NewsletterForm locale={locale} variant="compact" />;
}
```

> **Note:** The `SuccessWatchedForm` approach duplicates the success UI slightly. An alternative is to add an `onSuccess` prop to `NewsletterForm` — see Task 2 for the cleaner version.

**Step 2: Verify file was created**

Check file exists at `src/components/NewsletterModal.tsx`.

---

### Task 2: Add onSuccess prop to NewsletterForm (optional but cleaner)

**Files:**
- Modify: `src/components/NewsletterForm.tsx`

**Step 1: Add optional `onSuccess` callback to props**

In `NewsletterForm`, add `onSuccess?: () => void` to the props type and call it when `setStatus('success')` fires:

```tsx
// In the component signature:
export default function NewsletterForm({
  locale,
  variant = 'default',
  onSuccess,
}: {
  locale: string;
  variant?: 'default' | 'compact';
  onSuccess?: () => void;
}) {
```

```tsx
// In handleSubmit, replace:
setStatus(res.ok ? 'success' : 'error');
// With:
if (res.ok) {
  setStatus('success');
  onSuccess?.();
} else {
  setStatus('error');
}
```

**Step 2: Simplify NewsletterModal to use onSuccess prop**

Replace the `SuccessWatchedForm` wrapper in `NewsletterModal.tsx` with:

```tsx
<NewsletterForm locale={locale} variant="compact" onSuccess={() => setSubscribed(true)} />
```

And remove the `SuccessWatchedForm` and `NewsletterFormWrapper` functions entirely.

**Step 3: Commit**

```bash
git add src/components/NewsletterForm.tsx src/components/NewsletterModal.tsx
git commit -m "feat: newsletter modal with scroll trigger and logo gradient"
```

---

### Task 3: Mount modal in layout

**Files:**
- Modify: `src/app/[locale]/layout.tsx`

**Step 1: Import and add NewsletterModal**

Find the import for `CookieConsentBanner` and add alongside it:

```tsx
import NewsletterModal from '@/components/NewsletterModal';
```

In the JSX, add `<NewsletterModal locale={locale} />` right after `<CookieConsentBanner locale={locale} />`:

```tsx
<CookieConsentBanner locale={locale} />
<NewsletterModal locale={locale} />
```

**Step 2: Verify build**

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site
npm run build 2>&1 | tail -20
```

Expected: no TypeScript errors, build succeeds.

**Step 3: Commit**

```bash
git add src/app/\[locale\]/layout.tsx
git commit -m "feat: mount NewsletterModal in locale layout"
```

---

### Task 4: Deploy

**Step 1: Deploy to Cloudflare**

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site
npx wrangler deploy 2>&1 | tail -10
```

Expected: `Deployed geotapp-site` with URL.

**Step 2: Smoke test**

- Open `https://geotapp.com/it/` in browser
- Scroll down past 50% of page
- Modal should appear with gradient header and IT headline
- Click × — modal closes, `gtapp_nl_modal_seen` set in localStorage
- Reload page — modal does not reappear
- Clear localStorage, reload, scroll again — modal reappears

---
