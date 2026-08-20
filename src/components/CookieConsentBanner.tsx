'use client';

import { useEffect, useRef, useState } from 'react';
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
  closeRefuse: string;
  dismissHint: string;
  policyLabel: string;
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
    closeRefuse: 'Chiudi e rifiuta',
    dismissHint: 'Chiudendo con la X continui a navigare rifiutando i cookie non necessari.',
    policyLabel: 'Cookie policy',
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
    closeRefuse: 'Close and refuse',
    dismissHint: 'Closing with the X lets you keep browsing while refusing non-essential cookies.',
    policyLabel: 'Cookie policy',
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
    closeRefuse: 'Schließen und ablehnen',
    dismissHint: 'Wenn Sie mit dem X schließen, surfen Sie weiter und lehnen nicht notwendige Cookies ab.',
    policyLabel: 'Cookie-Richtlinie',
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
    closeRefuse: 'Fermer et refuser',
    dismissHint: 'En fermant avec la croix, vous continuez la navigation en refusant les cookies non nécessaires.',
    policyLabel: 'Politique cookies',
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
    closeRefuse: 'Cerrar y rechazar',
    dismissHint: 'Al cerrar con la X sigues navegando y rechazas las cookies no necesarias.',
    policyLabel: 'Política de cookies',
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
    closeRefuse: 'Fechar e recusar',
    dismissHint: 'Ao fechar no X continua a navegar recusando os cookies não necessários.',
    policyLabel: 'Política de cookies',
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
    closeRefuse: 'Sluiten en weigeren',
    dismissHint: 'Sluit u met de X, dan gaat u verder en weigert u niet-noodzakelijke cookies.',
    policyLabel: 'Cookiebeleid',
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
    closeRefuse: 'Luk og afvis',
    dismissHint: 'Lukker du med X, fortsætter du og afviser ikke-nødvendige cookies.',
    policyLabel: 'Cookiepolitik',
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
    closeRefuse: 'Stäng och avvisa',
    dismissHint: 'Stänger du med X fortsätter du och avvisar icke nödvändiga kakor.',
    policyLabel: 'Cookiepolicy',
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
    closeRefuse: 'Lukk og avslå',
    dismissHint: 'Lukker du med X, fortsetter du og avslår ikke-nødvendige informasjonskapsler.',
    policyLabel: 'Cookie-erklæring',
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
    closeRefuse: 'Закрыть и отклонить',
    dismissHint: 'Закрыв крестиком, вы продолжите просмотр, отклонив необязательные файлы cookie.',
    policyLabel: 'Политика cookie',
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

/**
 * Conteggio della scelta verso il nostro endpoint, indipendente da GA4.
 *
 * Serve perche' il rifiuto in GA4 non esiste: con analytics_storage 'denied'
 * gtag manda solo cookieless ping, che nei report non compaiono. Verificato
 * sui dati il 20/08/2026: in 90 giorni consent_choice risulta 98 volte, tutte
 * con action 'accept_all'. Senza denominatore l'accept rate non e' calcolabile.
 *
 * Manda solo il nome dell'azione e la lingua. Nessun cookie, nessun
 * identificatore: lato server diventa un contatore per giorno/paese/azione
 * (src/app/api/consent/route.ts). Chi rifiuta non viene tracciato, viene
 * contato.
 */
function reportConsent(action: string, locale: string): void {
  if (typeof window === 'undefined') return;
  if ((window as unknown as { __gtSkip?: boolean }).__gtSkip === true) return;
  const payload = JSON.stringify({ action, locale });
  try {
    if (typeof navigator.sendBeacon === 'function') {
      // sendBeacon sopravvive alla chiusura della scheda: e' il caso di chi
      // sceglie e se ne va subito, quello che con la coda di gtag si perdeva.
      const blob = new Blob([payload], { type: 'application/json' });
      if (navigator.sendBeacon('/api/consent', blob)) return;
    }
    void fetch('/api/consent', {
      method: 'POST',
      body: payload,
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* mai far fallire il banner per la telemetria */
  }
}

type StoredConsent = { analytics: boolean; ts: number; action: string };

export default function CookieConsentBanner({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [analyticsToggle, setAnalyticsToggle] = useState(true);
  const persistRef = useRef<((analytics: boolean, action: string) => void) | null>(null);
  const t = TEXTS[locale] ?? TEXTS.en;

  useEffect(() => {
    // Regime deciso client-side dallo script consent (cookie gt_geo, vedi
    // lib/consent-mode.ts): fuori dai paesi GDPR il banner non si mostra.
    // Il componente ora è SEMPRE renderizzato dai layout (HTML statico
    // identico per tutti), quindi il gate geografico vive qui.
    if ((window as unknown as { __gtConsentMode?: string }).__gtConsentMode === 'rest') {
      return;
    }
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
    // Denominatore dell'accept rate. Va al nostro endpoint, non a GA4: in stato
    // denied gtag non riporta nulla, e chi se ne va prima che gtag.js finisca di
    // caricare (lazyOnload, coda di 10s in analytics.ts) sparisce del tutto.
    // trackEvent resta per chi accetta, cosi' il dato storico non si spezza.
    reportConsent('shown', locale);
    trackEvent('banner_shown', { locale });
  }, [locale]);

  // Con la scelta a schermo il fondo non deve scorrere, altrimenti l'overlay
  // e' aggirabile e la scelta torna ignorabile. Escape vale come la X, cioe'
  // rifiuto: una via d'uscita da tastiera deve esserci.
  useEffect(() => {
    if (!visible) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') persistRef.current?.(false, 'dismissed_x');
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [visible]);

  function persist(analytics: boolean, action: string) {
    try {
      const payload: StoredConsent = { analytics, ts: Date.now(), action };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      /* ignore */
    }
    updateConsent(analytics);
    // Il conteggio aggregato parte SEMPRE, anche sul rifiuto: e' l'unico modo
    // di conoscere il denominatore. Non traccia la persona, conta la scelta.
    reportConsent(action, locale);
    // consent_choice resta per continuita' con lo storico GA4. Se l'utente ha
    // negato, gtag non lo riporta: e' atteso, e per questo esiste il beacon.
    trackEvent('consent_choice', { action, analytics: analytics ? 'granted' : 'denied' });
    setVisible(false);
    setModalOpen(false);
  }
  persistRef.current = persist;

  if (!visible) return null;

  return (
    <>
      {/* Scelta obbligata (20/08/2026).
          NON e' un cookie wall: rifiutare da' accesso identico al sito, quindi
          il consenso resta libero (art. 4 n. 11 e art. 7 par. 4 GDPR, EDPB
          05/2020). L'overlay serve solo a impedire che la scelta venga
          ignorata, perche' chi ignora resta in 'denied' e per noi diventa
          invisibile.
          La X in alto a destra e' li' per le Linee guida cookie del Garante
          (10/06/2021, provv. 231): deve esistere un comando, di pari evidenza
          visiva, per chiudere il banner SENZA prestare consenso. Vale come
          rifiuto e viene ricordata come le altre scelte, quindi il banner non
          si ripresenta. */}
      {!modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.modalTitle}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
          }}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: 460,
              width: '100%',
              background: 'rgba(15, 23, 42, 0.98)',
              borderRadius: 20,
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '26px 24px 22px',
              boxShadow: '0 32px 80px rgba(15, 23, 42, 0.5)',
              color: '#e2e8f0',
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
            }}
          >
            {/* Rifiuto a un clic, stessa evidenza visiva dei pulsanti. */}
            <button
              type="button"
              aria-label={t.closeRefuse}
              title={t.closeRefuse}
              onClick={() => persist(false, 'dismissed_x')}
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                border: '1px solid rgba(148,163,184,0.35)',
                background: 'transparent',
                color: '#cbd5e1',
                fontSize: 18,
                lineHeight: 1,
                cursor: 'pointer',
              }}
            >
              &times;
            </button>

            {/* Inter esplicito: gli h2 del sito prendono il font display
                maiuscolo, che qui manda il titolo a capo dentro la card. */}
            <h2
              style={{
                margin: '0 0 8px 0',
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
                fontSize: '1.02rem',
                fontWeight: 700,
                letterSpacing: 'normal',
                textTransform: 'none',
                lineHeight: 1.3,
                color: 'white',
                paddingRight: 40,
              }}
            >
              🍪 {t.modalTitle}
            </h2>
            <p style={{ margin: '0 0 16px 0', fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.5 }}>
              {t.body}{' '}
              <a
                href={`/${locale}/cookies/`}
                style={{ color: '#8FC436', textDecoration: 'underline', textUnderlineOffset: 3 }}
              >
                {t.policyLabel}
              </a>
            </p>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => persist(false, 'necessary_only')}
                style={{ ...btnChoiceBase, ...btnChoiceSecondary }}
              >
                {t.necessaryOnly}
              </button>
              <button
                type="button"
                onClick={() => persist(true, 'accept_all')}
                style={{ ...btnChoiceBase, ...btnChoicePrimary }}
              >
                {t.acceptAll}
              </button>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 12,
                marginTop: 14,
                flexWrap: 'wrap',
              }}
            >
              <p style={{ margin: 0, fontSize: '0.7rem', color: '#94a3b8', lineHeight: 1.4, flex: '1 1 200px' }}>
                {t.dismissHint}
              </p>
              <button type="button" onClick={() => setModalOpen(true)} style={btnGhostStyle}>
                {t.customize}
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

            {/* Necessari, sempre on */}
            <CategoryRow
              title={t.catNecessary}
              desc={t.catNecessaryDesc}
              checked={true}
              disabled={true}
              alwaysOnLabel={t.alwaysOn}
              onChange={() => {}}
            />

            {/* Analytics, toggle */}
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

/* Accetta e rifiuta devono costare lo stesso clic e pesare lo stesso a
   schermo (EDPB 05/2020, Linee guida Garante 231/2021): stessa dimensione,
   stesso font-weight, stesso raggio. Cambia solo il colore. */
const btnChoiceBase: React.CSSProperties = {
  flex: '1 1 140px',
  padding: '11px 16px',
  borderRadius: 12,
  fontFamily: 'var(--font-inter, Inter, sans-serif)',
  fontSize: '0.85rem',
  fontWeight: 700,
  cursor: 'pointer',
  transition: 'all 180ms ease',
};

const btnChoicePrimary: React.CSSProperties = {
  border: '1px solid #8FC436',
  background: '#8FC436',
  color: '#0f172a',
};

const btnChoiceSecondary: React.CSSProperties = {
  border: '1px solid rgba(148,163,184,0.45)',
  background: 'transparent',
  color: '#e2e8f0',
};

const btnPrimaryStyle: React.CSSProperties = {
  padding: '6px 14px',
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
  padding: '6px 12px',
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
  padding: '6px 10px',
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
