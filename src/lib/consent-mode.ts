/**
 * Consent Mode geo-aware, versione CLIENT-SIDE (refactor 05/07/2026).
 *
 * PRIMA: i layout chiamavano getConsentMode() che leggeva headers()
 * (cf-ipcountry) sul server. Due problemi gravi:
 * 1. headers() forza TUTTO l'albero [locale] in rendering dinamico → niente
 *    prerender → ogni richiesta paga l'SSR completo sul Worker → TTFB ~5s su
 *    rete mobile (LCP home 5,3-5,5s, misurato PSI 05/07).
 * 2. Con l'HTML cachato all'edge (blog dal 01/07, marketing dal 05/07) il
 *    consent del PRIMO visitatore restava impresso nella copia cachata e
 *    veniva servito a tutti: un utente EU poteva ricevere il default
 *    'granted' di un visitatore US. Non conforme.
 *
 * ORA: l'HTML è identico per tutti (prerenderizzabile e cachabile) e contiene
 * un unico script inline che decide il regime sul CLIENT leggendo il cookie
 * `gt_geo` (impostato dal middleware da cf-ipcountry a ogni richiesta).
 * Fallback senza cookie: 'eu' (safe-by-default, come prima).
 * Il default parte SEMPRE 'denied' con wait_for_update; per i paesi non-GDPR
 * lo script fa subito l'update ad analytics granted (denied→granted è lecito,
 * l'inverso no). GA carica lazyOnload, quindi l'update arriva ben prima.
 *
 * UK GDPR (ICO) richiede comunque consent per analytics non-essenziali,
 * quindi GB resta in lista. CH segue FADP, allineato al GDPR.
 */

/** Paesi GDPR EU / EEA / UK GDPR / Swiss FADP: default denied + banner. */
export const GDPR_COUNTRIES = [
  // EU-27
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
  'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
  'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  // EEA (non-EU)
  'IS', 'LI', 'NO',
  // UK + Switzerland
  'GB', 'CH',
];

/** Nome del cookie geo impostato dal middleware (leggibile da JS, non httpOnly). */
export const GEO_COOKIE = 'gt_geo';

export type ConsentMode = 'eu' | 'rest';

/**
 * Script inline universale (beforeInteractive): stesso HTML per ogni paese,
 * la scelta eu/rest avviene nel browser dal cookie. Espone
 * window.__gtConsentMode ('eu' | 'rest') per il CookieConsentBanner.
 */
export function buildConsentDefaultScript(): string {
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    (function () {
      var GDPR = ${JSON.stringify(GDPR_COUNTRIES)};
      var m = document.cookie.match(/(?:^|;\\s*)${GEO_COOKIE}=([A-Z]{2})/);
      var country = m ? m[1] : '';
      var mode = (!country || GDPR.indexOf(country) !== -1) ? 'eu' : 'rest';
      gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        wait_for_update: 500,
      });
      if (mode === 'rest') {
        gtag('consent', 'update', { analytics_storage: 'granted' });
      }
      window.__gtConsentMode = mode;
    })();
  `;
}
