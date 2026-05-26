'use client';

import { useEffect, useState } from 'react';
import { trackEvent } from '@/lib/analytics';

const STORAGE_KEY = 'gtapp_cookie_consent';

type Texts = {
  body: string;
  acceptAll: string;
  necessaryOnly: string;
  customize: string;
  modalTitle: string;
  modalIntro: string;
  catNecessary: string;
  catNecessaryDesc: string;
  alwaysOn: string;
  catAnalytics: string;
  catAnalyticsDesc: string;
  save: string;
  close: string;
};

const TEXTS: Record<string, Texts> = {
  it: {
    body: 'Usiamo cookie per capire cosa funziona sul sito. Niente pubblicità.',
    acceptAll: 'Accetta tutti',
    necessaryOnly: 'Solo necessari',
    customize: 'Personalizza',
    modalTitle: 'Preferenze cookie',
    modalIntro: 'Decidi quali categorie vuoi abilitare. Puoi cambiare idea in qualsiasi momento.',
    catNecessary: 'Necessari',
    catNecessaryDesc: 'Login, lingua, sicurezza. Senza questi il sito non funziona.',
    alwaysOn: 'sempre attivi',
    catAnalytics: 'Analitici',
    catAnalyticsDesc: 'Google Analytics: capire quali pagine funzionano. Dati anonimi. Niente pubblicità.',
    save: 'Salva preferenze',
    close: 'Chiudi',
  },
  en: {
    body: 'We use cookies to understand what works on the site. No advertising.',
    acceptAll: 'Accept all',
    necessaryOnly: 'Necessary only',
    customize: 'Customise',
    modalTitle: 'Cookie preferences',
    modalIntro: 'Choose which categories you want to enable. You can change your mind anytime.',
    catNecessary: 'Necessary',
    catNecessaryDesc: 'Login, language, security. Without these the site does not work.',
    alwaysOn: 'always on',
    catAnalytics: 'Analytics',
    catAnalyticsDesc: 'Google Analytics: understand which pages work. Anonymous data. No advertising.',
    save: 'Save preferences',
    close: 'Close',
  },
  de: {
    body: 'Wir verwenden Cookies, um zu verstehen, was auf der Website funktioniert. Keine Werbung.',
    acceptAll: 'Alle akzeptieren',
    necessaryOnly: 'Nur notwendige',
    customize: 'Anpassen',
    modalTitle: 'Cookie-Einstellungen',
    modalIntro: 'Wählen Sie, welche Kategorien Sie aktivieren möchten. Sie können jederzeit Ihre Meinung ändern.',
    catNecessary: 'Notwendig',
    catNecessaryDesc: 'Login, Sprache, Sicherheit. Ohne diese funktioniert die Seite nicht.',
    alwaysOn: 'immer an',
    catAnalytics: 'Analytisch',
    catAnalyticsDesc: 'Google Analytics: verstehen, welche Seiten funktionieren. Anonyme Daten. Keine Werbung.',
    save: 'Einstellungen speichern',
    close: 'Schließen',
  },
  fr: {
    body: 'Nous utilisons des cookies pour comprendre ce qui fonctionne sur le site. Pas de publicité.',
    acceptAll: 'Tout accepter',
    necessaryOnly: 'Seulement nécessaires',
    customize: 'Personnaliser',
    modalTitle: 'Préférences cookies',
    modalIntro: 'Choisissez les catégories à activer. Vous pouvez changer d\'avis à tout moment.',
    catNecessary: 'Nécessaires',
    catNecessaryDesc: 'Connexion, langue, sécurité. Sans eux le site ne fonctionne pas.',
    alwaysOn: 'toujours actifs',
    catAnalytics: 'Analytiques',
    catAnalyticsDesc: 'Google Analytics : comprendre quelles pages fonctionnent. Données anonymes. Pas de publicité.',
    save: 'Enregistrer',
    close: 'Fermer',
  },
  es: {
    body: 'Usamos cookies para entender qué funciona en el sitio. Sin publicidad.',
    acceptAll: 'Aceptar todo',
    necessaryOnly: 'Solo necesarias',
    customize: 'Personalizar',
    modalTitle: 'Preferencias de cookies',
    modalIntro: 'Elige qué categorías activar. Puedes cambiar de opinión en cualquier momento.',
    catNecessary: 'Necesarias',
    catNecessaryDesc: 'Login, idioma, seguridad. Sin ellas el sitio no funciona.',
    alwaysOn: 'siempre activas',
    catAnalytics: 'Analíticas',
    catAnalyticsDesc: 'Google Analytics: entender qué páginas funcionan. Datos anónimos. Sin publicidad.',
    save: 'Guardar preferencias',
    close: 'Cerrar',
  },
  pt: {
    body: 'Usamos cookies para perceber o que funciona no site. Sem publicidade.',
    acceptAll: 'Aceitar tudo',
    necessaryOnly: 'Apenas necessários',
    customize: 'Personalizar',
    modalTitle: 'Preferências de cookies',
    modalIntro: 'Escolha quais categorias ativar. Pode mudar de ideia a qualquer momento.',
    catNecessary: 'Necessários',
    catNecessaryDesc: 'Login, idioma, segurança. Sem eles o site não funciona.',
    alwaysOn: 'sempre ativos',
    catAnalytics: 'Analíticos',
    catAnalyticsDesc: 'Google Analytics: perceber quais páginas funcionam. Dados anónimos. Sem publicidade.',
    save: 'Guardar preferências',
    close: 'Fechar',
  },
  nl: {
    body: 'We gebruiken cookies om te begrijpen wat werkt op de site. Geen advertenties.',
    acceptAll: 'Alles accepteren',
    necessaryOnly: 'Alleen noodzakelijke',
    customize: 'Aanpassen',
    modalTitle: 'Cookievoorkeuren',
    modalIntro: 'Kies welke categorieën je wilt inschakelen. Je kunt op elk moment van gedachten veranderen.',
    catNecessary: 'Noodzakelijk',
    catNecessaryDesc: 'Login, taal, beveiliging. Zonder deze werkt de site niet.',
    alwaysOn: 'altijd aan',
    catAnalytics: 'Analytisch',
    catAnalyticsDesc: 'Google Analytics: begrijpen welke pagina\'s werken. Anonieme gegevens. Geen advertenties.',
    save: 'Voorkeuren opslaan',
    close: 'Sluiten',
  },
  da: {
    body: 'Vi bruger cookies for at forstå hvad der virker på siden. Ingen reklamer.',
    acceptAll: 'Accepter alle',
    necessaryOnly: 'Kun nødvendige',
    customize: 'Tilpas',
    modalTitle: 'Cookie-præferencer',
    modalIntro: 'Vælg hvilke kategorier du vil aktivere. Du kan ændre mening når som helst.',
    catNecessary: 'Nødvendige',
    catNecessaryDesc: 'Login, sprog, sikkerhed. Uden disse virker siden ikke.',
    alwaysOn: 'altid aktive',
    catAnalytics: 'Analyse',
    catAnalyticsDesc: 'Google Analytics: forstå hvilke sider der virker. Anonyme data. Ingen reklamer.',
    save: 'Gem præferencer',
    close: 'Luk',
  },
  sv: {
    body: 'Vi använder cookies för att förstå vad som fungerar på webbplatsen. Inga annonser.',
    acceptAll: 'Acceptera alla',
    necessaryOnly: 'Endast nödvändiga',
    customize: 'Anpassa',
    modalTitle: 'Cookieinställningar',
    modalIntro: 'Välj vilka kategorier du vill aktivera. Du kan ändra dig när som helst.',
    catNecessary: 'Nödvändiga',
    catNecessaryDesc: 'Inloggning, språk, säkerhet. Utan dessa fungerar inte webbplatsen.',
    alwaysOn: 'alltid på',
    catAnalytics: 'Analys',
    catAnalyticsDesc: 'Google Analytics: förstå vilka sidor som fungerar. Anonyma data. Inga annonser.',
    save: 'Spara inställningar',
    close: 'Stäng',
  },
  nb: {
    body: 'Vi bruker informasjonskapsler for å forstå hva som fungerer på nettstedet. Ingen reklame.',
    acceptAll: 'Godta alle',
    necessaryOnly: 'Bare nødvendige',
    customize: 'Tilpass',
    modalTitle: 'Innstillinger for informasjonskapsler',
    modalIntro: 'Velg hvilke kategorier du vil aktivere. Du kan ombestemme deg når som helst.',
    catNecessary: 'Nødvendige',
    catNecessaryDesc: 'Innlogging, språk, sikkerhet. Uten disse fungerer ikke siden.',
    alwaysOn: 'alltid på',
    catAnalytics: 'Analyse',
    catAnalyticsDesc: 'Google Analytics: forstå hvilke sider som fungerer. Anonyme data. Ingen reklame.',
    save: 'Lagre innstillinger',
    close: 'Lukk',
  },
  ru: {
    body: 'Мы используем cookie, чтобы понять, что работает на сайте. Без рекламы.',
    acceptAll: 'Принять все',
    necessaryOnly: 'Только необходимые',
    customize: 'Настроить',
    modalTitle: 'Настройки cookie',
    modalIntro: 'Выберите, какие категории включить. Вы можете изменить своё решение в любой момент.',
    catNecessary: 'Необходимые',
    catNecessaryDesc: 'Вход, язык, безопасность. Без них сайт не работает.',
    alwaysOn: 'всегда включены',
    catAnalytics: 'Аналитика',
    catAnalyticsDesc: 'Google Analytics: понимать, какие страницы работают. Анонимные данные. Без рекламы.',
    save: 'Сохранить настройки',
    close: 'Закрыть',
  },
};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

function updateConsent(analytics: boolean) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('consent', 'update', {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
}

type StoredConsent = { analytics: boolean; ts: number; action: string };

export default function CookieConsentBanner({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [analyticsToggle, setAnalyticsToggle] = useState(true);
  const t = TEXTS[locale] ?? TEXTS.en;

  useEffect(() => {
    let stored: StoredConsent | null = null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      stored = raw ? (JSON.parse(raw) as StoredConsent) : null;
    } catch {
      /* private mode, ignore */
    }
    if (stored && typeof stored.analytics === 'boolean') {
      updateConsent(stored.analytics);
      return;
    }
    setVisible(true);
    // Misuriamo gli "ignorers": il banner è apparso, l'utente non ha ancora scelto.
    // Combinato con consent_choice, accept rate = consent_choice / banner_shown.
    // banner_shown viene buffered finché gtag carica (analytics.ts gestisce la coda).
    trackEvent('banner_shown', { locale });
  }, [locale]);

  function persist(analytics: boolean, action: string) {
    try {
      const payload: StoredConsent = { analytics, ts: Date.now(), action };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      /* ignore */
    }
    updateConsent(analytics);
    // L'evento consent_choice viene emesso DOPO updateConsent. Se l'utente
    // ha negato analytics, il gtag.js droppa l'evento e in GA4 lo vediamo
    // come "non emesso" — è semanticamente corretto (chi nega analytics non
    // vuole essere tracciato neanche per misurare il rifiuto).
    trackEvent('consent_choice', { action, analytics: analytics ? 'granted' : 'denied' });
    setVisible(false);
    setModalOpen(false);
  }

  if (!visible) return null;

  return (
    <>
      {/* Banner principale */}
      {!modalOpen && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label={t.modalTitle}
          style={{
            position: 'fixed',
            bottom: 16,
            left: 16,
            right: 16,
            zIndex: 9999,
            maxWidth: 760,
            margin: '0 auto',
            background: 'rgba(15, 23, 42, 0.97)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '16px 20px',
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
            <div style={{ display: 'flex', gap: 8, flexShrink: 0, flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => persist(false, 'necessary_only')}
                style={btnSecondaryStyle}
              >
                {t.necessaryOnly}
              </button>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                style={btnGhostStyle}
              >
                {t.customize}
              </button>
              <button
                type="button"
                onClick={() => persist(true, 'accept_all')}
                style={btnPrimaryStyle}
              >
                {t.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal granulare */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.modalTitle}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: 'rgba(15, 23, 42, 0.55)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div
            style={{
              maxWidth: 480,
              width: '100%',
              background: 'rgba(15, 23, 42, 0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: 20,
              border: '1px solid rgba(255,255,255,0.08)',
              padding: 28,
              boxShadow: '0 32px 80px rgba(15, 23, 42, 0.5)',
              color: '#e2e8f0',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: 'white' }}>
                {t.modalTitle}
              </h3>
              <button
                type="button"
                aria-label={t.close}
                onClick={() => setModalOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  fontSize: 20,
                  lineHeight: 1,
                  padding: 4,
                }}
              >
                ×
              </button>
            </div>
            <p style={{ margin: '0 0 18px 0', fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5 }}>
              {t.modalIntro}
            </p>

            {/* Necessari — sempre on */}
            <CategoryRow
              title={t.catNecessary}
              desc={t.catNecessaryDesc}
              checked={true}
              disabled={true}
              alwaysOnLabel={t.alwaysOn}
              onChange={() => {}}
            />

            {/* Analytics — toggle */}
            <CategoryRow
              title={t.catAnalytics}
              desc={t.catAnalyticsDesc}
              checked={analyticsToggle}
              disabled={false}
              onChange={(v) => setAnalyticsToggle(v)}
            />

            <div style={{ display: 'flex', gap: 8, marginTop: 22, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => persist(analyticsToggle, analyticsToggle ? 'custom_yes' : 'custom_no')}
                style={btnSecondaryStyle}
              >
                {t.save}
              </button>
              <button
                type="button"
                onClick={() => persist(true, 'accept_all_from_modal')}
                style={btnPrimaryStyle}
              >
                {t.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CategoryRow({
  title,
  desc,
  checked,
  disabled,
  alwaysOnLabel,
  onChange,
}: {
  title: string;
  desc: string;
  checked: boolean;
  disabled: boolean;
  alwaysOnLabel?: string;
  onChange: (v: boolean) => void;
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 16,
        padding: '14px 0',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'white' }}>{title}</span>
          {alwaysOnLabel && (
            <span
              style={{
                fontSize: '0.65rem',
                color: '#8FC436',
                background: 'rgba(143, 196, 54, 0.12)',
                padding: '2px 8px',
                borderRadius: 99,
                fontWeight: 600,
                textTransform: 'lowercase',
              }}
            >
              {alwaysOnLabel}
            </span>
          )}
        </div>
        <p style={{ margin: 0, fontSize: '0.76rem', color: '#94a3b8', lineHeight: 1.45 }}>{desc}</p>
      </div>
      <Toggle checked={checked} disabled={disabled} onChange={onChange} />
    </div>
  );
}

function Toggle({
  checked,
  disabled,
  onChange,
}: {
  checked: boolean;
  disabled: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      style={{
        width: 40,
        height: 22,
        borderRadius: 999,
        border: 'none',
        background: checked ? '#8FC436' : '#334155',
        position: 'relative',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        transition: 'background 180ms ease',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: 2,
          left: checked ? 20 : 2,
          width: 18,
          height: 18,
          borderRadius: 99,
          background: 'white',
          transition: 'left 180ms ease',
          boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
        }}
      />
    </button>
  );
}

const btnPrimaryStyle: React.CSSProperties = {
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
};

const btnSecondaryStyle: React.CSSProperties = {
  padding: '8px 16px',
  borderRadius: 10,
  border: '1px solid rgba(148,163,184,0.3)',
  background: 'transparent',
  color: '#cbd5e1',
  fontFamily: 'var(--font-inter, Inter, sans-serif)',
  fontSize: '0.8rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 180ms ease',
};

const btnGhostStyle: React.CSSProperties = {
  padding: '8px 12px',
  borderRadius: 10,
  border: 'none',
  background: 'transparent',
  color: '#94a3b8',
  fontFamily: 'var(--font-inter, Inter, sans-serif)',
  fontSize: '0.8rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 180ms ease',
  textDecoration: 'underline',
  textUnderlineOffset: 3,
};
