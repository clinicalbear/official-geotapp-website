'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'gtapp_cookie_consent';

const TEXTS: Record<string, string> = {
  it: 'Questo sito usa cookie analitici per migliorare l\'esperienza. Continuando accetti.',
  en: 'This site uses analytics cookies to improve your experience. By continuing you accept.',
  de: 'Diese Website verwendet Analyse-Cookies. Durch Weitersurfen stimmen Sie zu.',
  fr: 'Ce site utilise des cookies analytiques. En continuant, vous acceptez.',
  es: 'Este sitio usa cookies analíticas. Al continuar, aceptas su uso.',
  pt: 'Este site usa cookies analíticos. Ao continuar, aceita o seu uso.',
  nl: 'Deze site gebruikt analytische cookies. Door verder te gaan, gaat u akkoord.',
  da: 'Denne side bruger analytiske cookies. Ved at fortsætte accepterer du.',
  sv: 'Denna webbplats använder analyticscookies. Genom att fortsätta godkänner du.',
  nb: 'Denne siden bruker analytiske informasjonskapsler. Ved å fortsette godtar du.',
  ru: 'Этот сайт использует аналитические cookie. Продолжая, вы соглашаетесь.',
};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

function grantAnalytics() {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }
}

export default function CookieConsentBanner({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false);
  const text = TEXTS[locale] ?? TEXTS.en;

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      grantAnalytics();
      return;
    }
    setVisible(true);
  }, []);

  function handleOk() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics: true }));
    grantAnalytics();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '0.875rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <p style={{
          margin: 0,
          fontFamily: 'var(--font-inter, Inter, sans-serif)',
          fontSize: '0.8rem',
          color: '#94a3b8',
          lineHeight: 1.5,
          flex: '1 1 300px',
        }}>
          {text}
        </p>
        <button
          onClick={handleOk}
          style={{
            padding: '0.5rem 1.5rem',
            borderRadius: '8px',
            border: 'none',
            background: '#8FC436',
            color: '#0f172a',
            fontFamily: 'var(--font-inter, Inter, sans-serif)',
            fontSize: '0.8rem',
            fontWeight: 700,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}
