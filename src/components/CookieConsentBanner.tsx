'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'gtapp_cookie_consent';

type ConsentState = {
  analytics: boolean;
  ads: boolean;
};

const TRANSLATIONS: Record<string, {
  title: string;
  description: string;
  accept_all: string;
  necessary_only: string;
  learn_more: string;
}> = {
  it: {
    title: 'Utilizziamo i cookie',
    description: 'Usiamo cookie analitici e pubblicitari per migliorare il sito. Puoi accettarli tutti o continuare solo con i cookie tecnici essenziali.',
    accept_all: 'Accetta tutto',
    necessary_only: 'Solo necessari',
    learn_more: 'Cookie policy',
  },
  en: {
    title: 'We use cookies',
    description: 'We use analytics and advertising cookies to improve our site. You can accept all or continue with essential cookies only.',
    accept_all: 'Accept all',
    necessary_only: 'Necessary only',
    learn_more: 'Cookie policy',
  },
  de: {
    title: 'Wir verwenden Cookies',
    description: 'Wir verwenden Analyse- und Werbe-Cookies, um unsere Website zu verbessern. Sie können alle akzeptieren oder nur mit wesentlichen Cookies fortfahren.',
    accept_all: 'Alle akzeptieren',
    necessary_only: 'Nur notwendige',
    learn_more: 'Cookie-Richtlinie',
  },
  fr: {
    title: 'Nous utilisons des cookies',
    description: 'Nous utilisons des cookies d\'analyse et de publicité pour améliorer notre site. Vous pouvez tout accepter ou continuer avec les cookies essentiels uniquement.',
    accept_all: 'Tout accepter',
    necessary_only: 'Nécessaires seulement',
    learn_more: 'Politique cookies',
  },
  es: {
    title: 'Usamos cookies',
    description: 'Usamos cookies analíticas y publicitarias para mejorar el sitio. Puedes aceptarlas todas o continuar solo con las cookies técnicas esenciales.',
    accept_all: 'Aceptar todo',
    necessary_only: 'Solo necesarias',
    learn_more: 'Política de cookies',
  },
  pt: {
    title: 'Usamos cookies',
    description: 'Usamos cookies analíticos e publicitários para melhorar o site. Pode aceitar todos ou continuar apenas com os cookies técnicos essenciais.',
    accept_all: 'Aceitar tudo',
    necessary_only: 'Apenas necessários',
    learn_more: 'Política de cookies',
  },
  nl: {
    title: 'Wij gebruiken cookies',
    description: 'Wij gebruiken analyse- en advertentiecookies om onze website te verbeteren. U kunt alle accepteren of doorgaan met alleen essentiële cookies.',
    accept_all: 'Alles accepteren',
    necessary_only: 'Alleen noodzakelijke',
    learn_more: 'Cookiebeleid',
  },
  ru: {
    title: 'Мы используем файлы cookie',
    description: 'Мы используем аналитические и рекламные cookie для улучшения сайта. Вы можете принять все или продолжить только с основными техническими cookie.',
    accept_all: 'Принять все',
    necessary_only: 'Только необходимые',
    learn_more: 'Политика cookie',
  },
  da: {
    title: 'Vi bruger cookies',
    description: 'Vi bruger analyse- og reklamecookies for at forbedre vores hjemmeside. Du kan acceptere alle eller fortsætte med kun de nødvendige cookies.',
    accept_all: 'Acceptér alle',
    necessary_only: 'Kun nødvendige',
    learn_more: 'Cookiepolitik',
  },
  sv: {
    title: 'Vi använder cookies',
    description: 'Vi använder analys- och reklamcookies för att förbättra vår webbplats. Du kan acceptera alla eller fortsätta med endast nödvändiga cookies.',
    accept_all: 'Acceptera alla',
    necessary_only: 'Endast nödvändiga',
    learn_more: 'Cookiepolicy',
  },
  nb: {
    title: 'Vi bruker informasjonskapsler',
    description: 'Vi bruker analyse- og reklamecookies for å forbedre nettstedet. Du kan godta alle eller fortsette med kun nødvendige informasjonskapsler.',
    accept_all: 'Godta alle',
    necessary_only: 'Bare nødvendige',
    learn_more: 'Informasjonskapsel-policy',
  },
};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

function applyConsent(consent: ConsentState) {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: consent.analytics ? 'granted' : 'denied',
      ad_storage: consent.ads ? 'granted' : 'denied',
      ad_user_data: consent.ads ? 'granted' : 'denied',
      ad_personalization: consent.ads ? 'granted' : 'denied',
    });
  }
}

export default function CookieConsentBanner({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false);
  const t = TRANSLATIONS[locale] ?? TRANSLATIONS.en;
  const cookiesUrl = `/${locale}/cookies`;

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        applyConsent(JSON.parse(stored) as ConsentState);
      } catch {
        // ignore malformed stored value
      }
      return;
    }
    setVisible(true);
  }, []);

  function handleAcceptAll() {
    const consent: ConsentState = { analytics: true, ads: true };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    applyConsent(consent);
    setVisible(false);
  }

  function handleNecessaryOnly() {
    const consent: ConsentState = { analytics: false, ads: false };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    applyConsent(consent);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.title}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: 'rgba(15, 23, 42, 0.97)',
        backdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '1.25rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Text */}
        <div style={{ flex: '1 1 320px', minWidth: 0 }}>
          <p style={{
            margin: 0,
            fontFamily: 'var(--font-poppins, Poppins, sans-serif)',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: '#f8fafc',
            marginBottom: '0.25rem',
          }}>
            {t.title}
          </p>
          <p style={{
            margin: 0,
            fontFamily: 'var(--font-inter, Inter, sans-serif)',
            fontSize: '0.8rem',
            color: '#94a3b8',
            lineHeight: 1.5,
          }}>
            {t.description}{' '}
            <Link
              href={cookiesUrl}
              style={{ color: '#8FC436', textDecoration: 'underline', whiteSpace: 'nowrap' }}
            >
              {t.learn_more}
            </Link>
          </p>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '0.625rem', flexShrink: 0, flexWrap: 'wrap' }}>
          <button
            onClick={handleNecessaryOnly}
            style={{
              padding: '0.5rem 1.125rem',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'transparent',
              color: '#cbd5e1',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
              fontSize: '0.8rem',
              fontWeight: 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            {t.necessary_only}
          </button>
          <button
            onClick={handleAcceptAll}
            style={{
              padding: '0.5rem 1.25rem',
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
            {t.accept_all}
          </button>
        </div>
      </div>
    </div>
  );
}
