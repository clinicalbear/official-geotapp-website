import type { Metadata } from 'next';
import { SUPPORTED_LOCALES } from './config';
import { translatePath } from './slug-map';
import type { AppLocale } from './config';

const BASE = 'https://geotapp.com';

/**
 * Maps internal locale codes to BCP-47 hreflang tags.
 * Google uses BCP-47 (e.g. it-IT, de-DE) for regional targeting.
 * Generic codes (en) are used where no single country dominates.
 *
 * Exported so [locale]/page.tsx (home) and sitemap.ts use the same source of
 * truth and never drift on casing (audit 2026-05-23 ha rilevato en-us vs en-US
 * tra mappa inline della home e questa mappa canonical).
 */
export const HREFLANG: Record<string, string> = {
  it: 'it-IT',
  en: 'en',
  'en-us': 'en-US',
  'en-gb': 'en-GB',
  'en-au': 'en-AU',
  'en-ie': 'en-IE',
  'en-ca': 'en-CA',
  de: 'de-DE',
  nl: 'nl-NL',
  fr: 'fr-FR',
  es: 'es-ES',
  pt: 'pt-PT',
  da: 'da-DK',
  nb: 'nb-NO',
  sv: 'sv-SE',
  ru: 'ru-RU',
};


/**
 * Builds canonical + hreflang alternates for a locale-prefixed page.
 * Use inside generateMetadata({ params }) in every [locale]/* wrapper page.
 *
 * @param locale  The resolved locale (e.g. 'da', 'it', 'en', 'en-us')
 * @param path    The path WITHOUT locale prefix (e.g. '/contact/', '/settori/pulizie/')
 *
 * All path segments are translated independently using translatePath(), so
 * compound paths like '/settori/pulizie/' produce fully-localised hreflang URLs
 * (e.g. /en/sectors/cleaning/, /de/branchen/reinigung/) instead of partially-
 * translated ones (e.g. /en/sectors/pulizie/) that trigger a redirect chain.
 *
 * Canonical: sempre self, per ogni locale. Vedi il blocco sopra buildCanonicalUrl().
 */

/**
 * CANONICAL = SEMPRE SE STESSA, per ogni locale e per ogni path.
 *
 * Decisione di Mike, 14/08/2026: «sono pagine vere e localizzate in base alla
 * loro lingua». Le varianti EN regionali (en-us, en-gb, en-au, en-ie, en-ca)
 * non sono duplicati di /en/: rendono prezzi in valuta locale (LOCALE_CURRENCY
 * in lib/pricing.ts) e, per en-ie, una FAQ legale irlandese propria che su /en/
 * non esiste (content/settori/*\/regional-faq.ts: Contract Cleaning ERO, OWTA
 * s.18C, WRC, Sick Leave Act 2022).
 *
 * Verificato live prima di cambiare (14/08/2026, con cache-buster): /en-gb/
 * rende £189.99 e £1,905, /en-us/ $126.99 e $1,266.49, /en-ca/ $137.49, dove
 * /en/ rende €198.00 e €1,990. Anche le home differiscono nelle cifre convertite.
 *
 * Cosa c'era prima e perche' e' stato tolto: una regola IBRIDA (audit 02/06/2026,
 * corretta il 16/07/2026) che consolidava su /en/ le pagine brand/entity (home,
 * what-is-geotapp, about-us) lasciando self-canonical solo quelle commerciali.
 * Nasceva dall'incidente 13-25/05/2026, quando la query "geotapp" e' scesa da
 * posizione 4 a 12 con pagine inglesi quasi-duplicate in competizione. Il costo
 * di quella regola era che sitemap e hreflang dichiaravano 430 URL che poi si
 * dichiaravano non canoniche: Ahrefs le contava come errore (crawl 13/08/2026,
 * 867 "hreflang to non-canonical") e Google riceveva due segnali opposti sulla
 * stessa pagina.
 *
 * ⚠️ Se la posizione sulla query di brand dovesse riscendere, il primo sospetto
 * e' questa riga. Il rimedio non e' tornare a consolidare, ma differenziare
 * davvero i testi brand per mercato, oppure togliere le varianti da sitemap e
 * hreflang: le tre strade sono alternative, mescolarle e' quello che rompe.
 */

/**
 * L'URL canonico di una pagina, con la stessa identica logica di
 * buildLocaleAlternates(). Serve per og:url, che DEVE combaciare col canonical.
 *
 * Perche' esiste (17/07/2026): le 10 pagine settore costruivano og:url a mano
 * come `${BASE}/${locale}${pathname}`, cioe' con lo slug ITALIANO grezzo e senza
 * slash finale, mentre il canonical passava da translatePath() ed era tradotto.
 * Risultato: og:url = /de/settori/installatori/ contro canonical
 * /de/branchen/installateure/. Non era rotto (2 hop di 308 e si arrivava), ma
 * ogni condivisione social passava da una catena di redirect e consolidava
 * like e share su un URL che non e' quello della pagina. Con Facebook come
 * prima sorgente di traffico, si buttava via proprio li'.
 *
 * Regola: og:url non si scrive a mano, si chiede a questa funzione.
 */
export function buildCanonicalUrl(locale: string, path: string): string {
  return `${BASE}/${locale}${translatePath(path, locale as AppLocale)}`;
}

export function buildLocaleAlternates(
  locale: string,
  path: string,
): Metadata['alternates'] {
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => {
      const localizedPath = translatePath(path, l as AppLocale);
      return [HREFLANG[l] ?? l, `${BASE}/${l}${localizedPath}`];
    }),
  ) as Record<string, string>;

  // x-default: English path, /en/ is a real page with no redirect.
  // The bare canonical path (e.g. /chi-siamo/) triggers a 308 → /it/ leaking link equity.
  languages['x-default'] = `${BASE}/en${translatePath(path, 'en')}`;

  // Canonical self per ogni locale: ogni URL dichiarata in hreflang e in sitemap
  // e' anche la canonical di se stessa, quindi i due segnali non si contraddicono.
  // Una sola fonte di verita', condivisa con og:url: vedi buildCanonicalUrl().
  return {
    canonical: buildCanonicalUrl(locale, path),
    languages,
  };
}
