'use client';

import { useEffect, useState } from 'react';
import { trackEvent } from '@/lib/analytics';

const STORAGE_KEY = 'gtapp_cookie_consent';

type Texts = { body: string; accept: string; decline: string };

const TEXTS: Record<string, Texts> = {
  it: { body: 'Usiamo cookie analitici per capire cosa funziona sul sito. Niente pubblicità. Decidi tu.', accept: 'Accetta', decline: 'Rifiuta' },
  en: { body: 'We use analytics cookies to understand what works on the site. No ads. Your choice.', accept: 'Accept', decline: 'Decline' },
  de: { body: 'Wir verwenden Analyse-Cookies, um zu verstehen, was funktioniert. Keine Werbung. Sie entscheiden.', accept: 'Akzeptieren', decline: 'Ablehnen' },
  fr: { body: 'Cookies analytiques pour comprendre ce qui marche. Pas de publicité. À vous de choisir.', accept: 'Accepter', decline: 'Refuser' },
  es: { body: 'Usamos cookies analíticas para entender qué funciona. Sin publicidad. Tú decides.', accept: 'Aceptar', decline: 'Rechazar' },
  pt: { body: 'Usamos cookies analíticos para perceber o que funciona. Sem publicidade. Você decide.', accept: 'Aceitar', decline: 'Recusar' },
  nl: { body: 'We gebruiken analytische cookies om te begrijpen wat werkt. Geen advertenties. Jij kiest.', accept: 'Accepteren', decline: 'Weigeren' },
  da: { body: 'Vi bruger analytiske cookies for at forstå hvad der virker. Ingen reklamer. Du vælger.', accept: 'Accepter', decline: 'Afvis' },
  sv: { body: 'Vi använder analyscookies för att förstå vad som fungerar. Inga annonser. Du väljer.', accept: 'Acceptera', decline: 'Avvisa' },
  nb: { body: 'Vi bruker analytiske informasjonskapsler for å forstå hva som fungerer. Ingen reklame. Du velger.', accept: 'Aksepter', decline: 'Avvis' },
  ru: { body: 'Мы используем аналитические cookie, чтобы понять, что работает. Без рекламы. Вы выбираете.', accept: 'Принять', decline: 'Отклонить' },
};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

function updateConsent(granted: boolean) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
}

export default function CookieConsentBanner({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false);
  const t = TEXTS[locale] ?? TEXTS.en;

  useEffect(() => {
    let stored: { analytics?: boolean } | null = null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      stored = raw ? JSON.parse(raw) : null;
    } catch {
      // localStorage non disponibile (private mode, SSR fallback)
    }
    if (stored && typeof stored.analytics === 'boolean') {
      updateConsent(stored.analytics);
      return;
    }
    setVisible(true);
  }, []);

  function handleChoice(accept: boolean) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics: accept, ts: Date.now() }));
    } catch {
      // ignora
    }
    updateConsent(accept);
    // Misuriamo l'accept rate: emettiamo l'evento DOPO updateConsent, così se
    // l'utente ha accettato, l'evento stesso viene loggato. Se rifiuta, gtag
    // lo dropperebbe; per misurare i rifiuti usiamo invece localStorage,
    // che la dashboard può aggregare server-side se serve.
    if (accept) {
      trackEvent('consent_choice', { choice: 'accept' });
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        bottom: 16,
        left: 16,
        right: 16,
        zIndex: 9999,
        maxWidth: 720,
        margin: '0 auto',
        background: 'rgba(15, 23, 42, 0.97)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: 16,
        border: '1px solid rgba(255,255,255,0.08)',
        padding: '14px 18px',
        boxShadow: '0 20px 60px rgba(15, 23, 42, 0.35), 0 8px 16px rgba(15, 23, 42, 0.2)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--font-inter, Inter, sans-serif)',
            fontSize: '0.85rem',
            color: '#cbd5e1',
            lineHeight: 1.5,
            flex: '1 1 280px',
            minWidth: 0,
          }}
        >
          🍪 {t.body}
        </p>
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          <button
            type="button"
            onClick={() => handleChoice(false)}
            style={{
              padding: '8px 16px',
              borderRadius: 10,
              border: '1px solid rgba(148,163,184,0.3)',
              background: 'transparent',
              color: '#94a3b8',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 180ms ease',
            }}
          >
            {t.decline}
          </button>
          <button
            type="button"
            onClick={() => handleChoice(true)}
            style={{
              padding: '8px 18px',
              borderRadius: 10,
              border: 'none',
              background: '#8FC436',
              color: '#0f172a',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 180ms ease',
              boxShadow: '0 2px 8px rgba(143, 196, 54, 0.3)',
            }}
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
