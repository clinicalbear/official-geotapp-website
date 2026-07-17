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
 * Regional EN variants (en-us, en-gb, en-au, en-ie, en-ca) renderizzano prezzi
 * in valuta locale (USD/GBP/AUD/CAD), vedi LOCALE_CURRENCY in lib/pricing.ts.
 *
 * Strategia canonical IBRIDA (audit 2026-06-02):
 *  - Pagine BRAND/entity (home, what-is-geotapp, about-us): canonical → `/en/`
 *    per consolidare authority sulla query "geotapp" (incidente pos 4→12 del
 *    13-25/05/2026, causato da pagine inglesi quasi-duplicate in competizione).
 *  - Pagine COMMERCIALI (pricing, products, settori, roi-calculator): canonical
 *    = self, così la variante in valuta locale è indicizzabile e ranka nel suo
 *    mercato (un inglese trova £, un americano $, non il prezzo in €). Hreflang
 *    cluster resta completo → Google serve la variante giusta per geo.
 *
 * ⚠️ CORREZIONE 16/07/2026 — il criterio è il CONTENUTO, non la valuta.
 * La regola precedente consolidava en-ie su /en/ per OGNI path, motivandolo con
 * "en-ie renderizza EUR → byte-identica a /en/". È vero per pricing/products/
 * roi-calculator, ma FALSO per le pagine settore: `content/settori/*\/regional-faq.ts`
 * dà a en-ie una FAQ legale irlandese sua (Contract Cleaning ERO, OWTA s.18C, WRC,
 * Sick Leave Act 2022) su tutti e 10 i settori, contenuto che su /en/ NON ESISTE.
 * Consolidarle diceva a Google "questa è un duplicato di /en/" indicando una pagina
 * che quel contenuto non ce l'ha → l'unica pagina che risponde al mercato irlandese
 * veniva soppressa. Verificato live: /en-ie/sectors/cleaning/ rende ERO/OWTA/WRC,
 * /en/sectors/cleaning/ non rende alcuna FAQ regionale.
 * Le valute differenziano il PREZZO; le leggi differenziano il MERCATO.
 */
const REGIONAL_EN_VARIANTS = new Set(['en-us', 'en-gb', 'en-au', 'en-ie', 'en-ca']);

// en-ie usa EUR come /en/ (LOCALE_CURRENCY): il prezzo NON la differenzia.
const EUR_REGIONAL_EN = new Set(['en-ie']);

// Prefissi delle pagine commerciali con prezzo in valuta locale: qui le varianti
// regionali (USD/GBP/AUD/CAD) fanno canonical su se stesse per rankare nel mercato.
// Tutto il resto (brand/entity/info/legal) resta consolidato su /en/.
const REGIONAL_SELF_CANONICAL_PREFIXES = ['/pricing', '/products/', '/settori', '/roi-calculator'];

// Varianti EN che condividono la valuta con /en/ (oggi solo en-ie): si differenziano
// per LEGGE, non per prezzo → self-canonical solo dove esiste contenuto regionale
// proprio (le pagine settore, via regional-faq.ts). Altrove restano consolidate.
const EUR_REGIONAL_EN_SELF_PREFIXES = ['/settori'];

/**
 * Per la `locale` data e il `path` (senza prefisso locale), il canonical punta
 * a se stesso (true) o consolida su /en/ (false, solo per varianti EN regionali).
 */
function regionalSelfCanonical(locale: string, path: string): boolean {
  if (!REGIONAL_EN_VARIANTS.has(locale)) return true; // locale primarie: sempre self
  const prefixes = EUR_REGIONAL_EN.has(locale)
    ? EUR_REGIONAL_EN_SELF_PREFIXES
    : REGIONAL_SELF_CANONICAL_PREFIXES;
  return prefixes.some((p) => path.startsWith(p));
}

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
 * Canonical strategy (IBRIDA, vedi regionalSelfCanonical sopra):
 * - Locale primary (it, en, de, fr, es, nl, pt, da, sv, nb, ru): canonical = self
 * - Regional EN su pagine commerciali (pricing/products/settori/roi): canonical = self
 *   (ranka con valuta locale; hreflang cluster resta completo)
 * - Regional EN su pagine brand/entity/info + en-ie: canonical = /en/{path}
 *   (consolida authority sul brand)
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
  const canonicalLocale = regionalSelfCanonical(locale, path) ? locale : 'en';
  return `${BASE}/${canonicalLocale}${translatePath(path, canonicalLocale as AppLocale)}`;
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

  // Hybrid canonical: commercial regional-EN pages self-canonical (rank with local
  // currency); brand/entity/info pages + en-ie consolidate to /en/ (brand authority).
  // Una sola fonte di verita', condivisa con og:url: vedi buildCanonicalUrl().
  return {
    canonical: buildCanonicalUrl(locale, path),
    languages,
  };
}
