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
  welcome?: string;
  cta?: { label: string; path: string };
};

export type ReferrerCopy = { welcome: string; cta: string; close: string };

// Lingua del PEZZO, non della pagina: chi viene da un articolo in olandese legge olandese.
export const REFERRER_COPY: Record<string, ReferrerCopy> = {
  it: { welcome: 'Benvenuto, lettore di {outlet}.', cta: 'Scopri come lavora GeoTapp', close: 'Chiudi' },
  en: { welcome: 'Welcome, {outlet} reader.', cta: 'See how GeoTapp works', close: 'Close' },
  de: { welcome: 'Willkommen, Leser von {outlet}.', cta: 'So arbeitet GeoTapp', close: 'Schließen' },
  fr: { welcome: 'Bienvenue, lecteur de {outlet}.', cta: 'Découvrez GeoTapp', close: 'Fermer' },
  es: { welcome: 'Bienvenido, lector de {outlet}.', cta: 'Descubra cómo funciona GeoTapp', close: 'Cerrar' },
  pt: { welcome: 'Bem-vindo, leitor de {outlet}.', cta: 'Descubra como funciona a GeoTapp', close: 'Fechar' },
  nl: { welcome: 'Welkom, lezer van {outlet}.', cta: 'Zo werkt GeoTapp', close: 'Sluiten' },
  ru: { welcome: 'Добро пожаловать, читатель {outlet}.', cta: 'Как работает GeoTapp', close: 'Закрыть' },
  da: { welcome: 'Velkommen, læser af {outlet}.', cta: 'Se hvordan GeoTapp virker', close: 'Luk' },
  sv: { welcome: 'Välkommen, läsare av {outlet}.', cta: 'Se hur GeoTapp fungerar', close: 'Stäng' },
  nb: { welcome: 'Velkommen, leser av {outlet}.', cta: 'Se hvordan GeoTapp fungerer', close: 'Lukk' },
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
    .filter((i): i is PressItem & { referrer: NonNullable<PressItem['referrer']> } => !!i.referrer && !i.referrer.noReferrer)
    .map((i) => ({
      hosts: i.referrer.hosts.map(normalizeHost),
      outlet: i.outlet,
      locale: i.locale,
      welcome: i.referrer.welcome,
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
export const DISMISS_KEY = 'gtapp_press_banner_dismissed';
export const OUTLET_KEY = 'gtapp_press_outlet';

/** Testo che il banner mostrera' per questa regola (serve a stimare lo spazio da riservare). */
export function bannerText(rule: ReferrerRule): { text: string; cta: string } {
  const c = copyForLocale(rule.locale);
  return { text: rule.welcome ?? c.welcome.replace('{outlet}', rule.outlet), cta: rule.cta?.label ?? c.cta };
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
    `s.style.minHeight=(l*20+16+(l>1?6:0))+'px';return}}}catch(e){}})();`
  );
}
