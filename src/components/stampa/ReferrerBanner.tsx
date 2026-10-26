'use client';

/**
 * Benvenuto a chi arriva cliccando il link che una testata ci ha messo nel pezzo.
 * Legge solo document.referrer, non salva nulla oltre al "chiuso" in sessionStorage
 * e non manda il referrer a nessun endpoint nostro. L'unico segnale e' un evento
 * analytics col nome della testata (passa dal consenso, come gli altri).
 * Referrer assente o di un'altra testata: non mostra niente.
 */

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';
import { localizePath } from '@/lib/i18n/locale-routing';
import { bannerText, copyForLocale, matchReferrer, CTA_CLICKED_KEY, BAR_VAR, DISMISS_KEY, OUTLET_KEY, SLOT_ID, type ReferrerRule } from '@/lib/press/referrer';

const DEFAULT_CTA_PATH = '/products/geotapp-timetracker';

type Shown = { text: string; cta: string; href: string; close: string; outlet: string };

export default function ReferrerBanner({ rules }: { rules: ReferrerRule[] }) {
  const [shown, setShown] = useState<Shown | null>(null);

  useEffect(() => {
    const slot = document.getElementById(SLOT_ID);
    const release = () => {
      if (slot) slot.style.minHeight = '';
      document.documentElement.style.removeProperty(BAR_VAR);
    };
    const rule = matchReferrer(document.referrer, rules, window.location.hostname);
    if (!rule) { release(); return; }
    try {
      // La testata resta in sessione per marcare gli eventi trial_* (vedi analytics.ts), anche a banner chiuso.
      sessionStorage.setItem(OUTLET_KEY, rule.outlet);
      if (sessionStorage.getItem(DISMISS_KEY)) { release(); return; }
    } catch {
      /* modalita' privata: il banner si mostra comunque, una volta per caricamento */
    }
    const b = bannerText(rule);
    setShown({
      text: b.text,
      cta: b.cta,
      href: localizePath(rule.cta?.path ?? DEFAULT_CTA_PATH, rule.locale),
      close: copyForLocale(rule.locale).close,
      outlet: rule.outlet,
    });
    trackEvent('press_referrer_banner_view', { outlet: rule.outlet });
  }, [rules]);

  // Il menu e' fisso in cima e coprirebbe la barra (e la sua x): lo abbassiamo della parte di barra
  // ancora visibile, che si riduce man mano che si scorre. Vedi `.nv,.nvl,.nvr` in l-mockup.css.
  useEffect(() => {
    if (!shown) return;
    const slot = document.getElementById(SLOT_ID);
    if (!slot) return;
    const root = document.documentElement;
    const aggiorna = () => {
      // Il fondo della barra rispetto alla finestra: pieno a inizio pagina, 0 quando e' scrollata via.
      root.style.setProperty(BAR_VAR, `${Math.max(0, Math.round(slot.getBoundingClientRect().bottom))}px`);
    };
    aggiorna();
    window.addEventListener('scroll', aggiorna, { passive: true });
    window.addEventListener('resize', aggiorna);
    return () => {
      window.removeEventListener('scroll', aggiorna);
      window.removeEventListener('resize', aggiorna);
      root.style.removeProperty(BAR_VAR);
    };
  }, [shown]);

  if (!shown) return null;

  const dismiss = () => {
    try {
      sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      /* ignore */
    }
    const slot = document.getElementById(SLOT_ID);
    if (slot) slot.style.minHeight = '';
    document.documentElement.style.removeProperty(BAR_VAR);
    setShown(null);
  };

  return (
    <div
      role="region"
      aria-label={shown.outlet}
      className="w-full bg-brand-blue/[0.06] border-b border-brand-blue/20 px-4 py-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-slate-700"
    >
      <span>{shown.text}</span>
      <Link
        href={shown.href}
        onClick={() => {
          try { sessionStorage.setItem(CTA_CLICKED_KEY, '1'); } catch { /* ignore */ }
          trackEvent('press_referrer_banner_click', { outlet: shown.outlet });
        }}
        className="font-semibold text-brand-blue-ink hover:underline whitespace-nowrap"
      >
        {shown.cta} →
      </Link>
      <button
        type="button"
        onClick={dismiss}
        aria-label={shown.close}
        className="ml-2 text-slate-600 hover:text-slate-800 text-lg leading-none"
      >
        ×
      </button>
    </div>
  );
}
