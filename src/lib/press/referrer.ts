import type { AppLocale } from '@/lib/i18n/config';
import type { PressItem } from './data';

/**
 * Banner di benvenuto per chi arriva da una testata che ci ha linkato.
 *
 * Il confronto e' sull'host ESATTO (senza "www."): `hrportugal.sapo.pt` non fa scattare il banner
 * per `pmemagazine.sapo.pt`, che non ci linka. Un referrer assente, vuoto o troncato all'origine
 * (strict-origin-when-cross-origin, il default dei browser) basta: serve solo l'host.
 */

export type ReferrerRule = {
  hosts: string[];
  outlet: string;
  locale: AppLocale;
  welcome: string;
  cta?: { label: string; path: string };
};

export type ReferrerCopy = { cta: string; close: string };

// Lingua del PEZZO, non della pagina: chi viene da un articolo in olandese legge olandese.
export const REFERRER_COPY: Record<string, ReferrerCopy> = {
  it: { cta: 'Vedi come funziona', close: 'Chiudi' },
  en: { cta: 'See how GeoTapp works', close: 'Close' },
  de: { cta: 'So arbeitet GeoTapp', close: 'Schließen' },
  fr: { cta: 'Découvrez GeoTapp', close: 'Fermer' },
  es: { cta: 'Descubra cómo funciona GeoTapp', close: 'Cerrar' },
  pt: { cta: 'Descubra como funciona a GeoTapp', close: 'Fechar' },
  nl: { cta: 'Zo werkt GeoTapp', close: 'Sluiten' },
  ru: { cta: 'Как работает GeoTapp', close: 'Закрыть' },
  da: { cta: 'Se hvordan GeoTapp virker', close: 'Luk' },
  sv: { cta: 'Se hur GeoTapp fungerar', close: 'Stäng' },
  nb: { cta: 'Se hvordan GeoTapp fungerer', close: 'Lukk' },
};

export function copyForLocale(locale: string): ReferrerCopy {
  return REFERRER_COPY[locale] ?? REFERRER_COPY[locale.split('-')[0]] ?? REFERRER_COPY.en;
}

export function normalizeHost(host: string): string {
  return host.trim().toLowerCase().replace(/^www\./, '').replace(/\.$/, '');
}

/** Le uscite con un banner, ridotte al minimo da passare al client. */
export function buildReferrerRules(items: PressItem[]): ReferrerRule[] {
  return items
    .filter((i): i is PressItem & { referrer: NonNullable<PressItem['referrer']> } => !!i.referrer && !i.referrer.noReferrer && !!i.referrer.welcome)
    .map((i) => ({
      hosts: i.referrer.hosts.map(normalizeHost),
      outlet: i.outlet,
      locale: i.locale,
      welcome: i.referrer.welcome as string,
      cta: i.referrer.cta,
    }));
}

/** Regola che corrisponde al referrer, o null (referrer vuoto, illeggibile, o il nostro stesso sito). */
export function matchReferrer(
  referrer: string,
  rules: ReferrerRule[],
  ownHost = 'geotapp.com',
): ReferrerRule | null {
  if (!referrer) return null;
  let host: string;
  try {
    host = normalizeHost(new URL(referrer).hostname);
  } catch {
    return null;
  }
  if (!host || host === normalizeHost(ownHost)) return null;
  return rules.find((r) => r.hosts.includes(host)) ?? null;
}

export const SLOT_ID = 'press-slot';
export const BAR_VAR = '--press-bar';
export const DISMISS_KEY = 'gtapp_press_banner_dismissed';
export const OUTLET_KEY = 'gtapp_press_outlet';

/** Testo che il banner mostrera' per questa regola (serve a stimare lo spazio da riservare). */
export function bannerText(rule: ReferrerRule): { text: string; cta: string } {
  const c = copyForLocale(rule.locale);
  return { text: rule.welcome, cta: rule.cta?.label ?? c.cta };
}

/**
 * Script inline, eseguito PRIMA del primo paint (come lo script del consenso): se il referrer e'
 * una delle testate, riserva sul contenitore l'altezza che il banner occupera', stimata dalla
 * lunghezza del testo e dalla larghezza dello schermo. Cosi' il banner entra in uno spazio gia'
 * pronto e la pagina non scivola verso il basso (CLS), senza leggere l'header lato server: la
 * pagina resta statica e in cache. Se il referrer non c'e' o e' gia' chiuso, non fa niente.
 */
export function slotScript(rules: ReferrerRule[]): string {
  const data = rules.map((r) => {
    const b = bannerText(r);
    return { h: r.hosts, t: b.text.length, c: b.cta.length };
  });
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return (
    `(function(){try{var s=document.getElementById(${JSON.stringify(SLOT_ID)});if(!s)return;` +
    `if(sessionStorage.getItem(${JSON.stringify(DISMISS_KEY)}))return;var r=document.referrer;if(!r)return;` +
    `var h=new URL(r).hostname.toLowerCase().replace(/^www\\./,'');var R=${json};` +
    `for(var i=0;i<R.length;i++){if(R[i].h.indexOf(h)>-1){var w=Math.max(innerWidth-32,200);` +
    `var one=Math.ceil((R[i].t+R[i].c+6)*6.6/w)==1;var l=one?1:Math.ceil(R[i].t*6.6/w)+1;` +
    `var px=(l*20+16+(l>1?6:0))+'px';s.style.minHeight=px;document.documentElement.style.setProperty(${JSON.stringify(BAR_VAR)},px);return}}}catch(e){}})();`
  );
}

// Chiavi di sessione condivise fra banner, scheda e sondaggio.
export const CTA_CLICKED_KEY = 'gtapp_press_cta_clicked';
export const CARD_KEY = 'gtapp_press_card';
// Le stesse che usa SurveyInvite: un solo overlay per visita, e mai prima della scelta sui cookie.
export const VISIT_KEY = 'gtapp_modal_open_visit';
export const CONSENT_KEY = 'gtapp_cookie_consent';

// Segnale FUNZIONALE, senza nome della testata: "questa visita e' arrivata da una testata, niente inviti".
// Vale solo per non disturbare; il nome (OUTLET_KEY) e' dato di misura e si salva solo col consenso analytics.
export const QUIET_KEY = 'gtapp_quiet_visit';
/** Evento che CookieConsentBanner emette quando la persona sceglie (detail.analytics: boolean). */
export const CONSENT_EVENT = 'gtapp:cookie-consent';

/**
 * True se in questa sessione il visitatore e' arrivato dal link di una testata. Chi arriva da un
 * articolo non riceve il sondaggio ne' altri inviti (regola di Mike, 26/10/2026): ci pensa il banner.
 * Alla visita successiva (sessione nuova) il sondaggio torna a valere come per tutti.
 */
export function arrivatoDallaStampa(): boolean {
  try {
    return !!sessionStorage.getItem(QUIET_KEY);
  } catch {
    return false;
  }
}

/**
 * Il consenso analytics c'e'? Fuori dai paesi GDPR il banner non si mostra e il regime e' "rest"
 * (analytics concesso di default, vedi consent-mode.ts); altrove serve la scelta salvata.
 * Il nome della testata e' un dato di misura: si scrive sul dispositivo solo se questo e' true.
 */
export function analyticsConsentito(): boolean {
  try {
    if ((window as unknown as { __gtConsentMode?: string }).__gtConsentMode === 'rest') return true;
    const raw = localStorage.getItem(CONSENT_KEY);
    return !!raw && JSON.parse(raw).analytics === true;
  } catch {
    return false;
  }
}

/** Testo della scheda del trial, preso dai dizionari del sito (gia' controllati) e passato dal server. */
export type CardCopy = { title: string; text: string; cta: string };

/** Sceglie il testo per la lingua della pagina ("en-gb" -> "en"), con ripiego sull'inglese. */
export function cardCopyFor(copy: Record<string, CardCopy>, lang: string): CardCopy | null {
  const l = (lang || '').toLowerCase();
  return copy[l] ?? copy[l.split('-')[0]] ?? copy.en ?? null;
}
