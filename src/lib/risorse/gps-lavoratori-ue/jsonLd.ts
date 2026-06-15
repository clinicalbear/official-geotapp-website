/**
 * Costruttori di structured data (JSON-LD) per la risorsa "GPS sui lavoratori in UE".
 *
 * Tutte le URL sono ASSOLUTE (BASE_URL + path localizzato) come richiesto da Google
 * per il rich-result testing. Gli slug di percorso vengono localizzati via translatePath,
 * coerentemente con buildLocaleAlternates / la sitemap.
 */

import type { AppLocale } from '@/lib/i18n/config';
import { translatePath } from '@/lib/i18n/slug-map';

export const BASE_URL = 'https://geotapp.com';

// Riferimento all'entità Organization definita una sola volta in [locale]/layout.tsx
// (id "https://geotapp.com/#organization"). Riusarla evita di duplicare il publisher.
const ORGANIZATION_REF = { '@id': `${BASE_URL}/#organization` } as const;

export interface BreadcrumbItem {
  name: string;
  /** URL assoluta dell'elemento (omessa solo, eventualmente, per l'ultimo nodo). */
  item: string;
}

/** URL assoluta di una pagina, con lo slug-path localizzato per la locale data. */
export function absoluteLocalizedUrl(canonicalPath: string, locale: AppLocale): string {
  return `${BASE_URL}/${locale}${translatePath(canonicalPath, locale)}`;
}

/**
 * Costruisce la catena di breadcrumb (Home -> Strumento -> [Paese]).
 * Funzione PURA: nessun side-effect, facile da testare.
 *
 * Nota: NON c'e' una landing /[locale]/risorse/ pubblicata, quindi si omette il
 * nodo intermedio "Risorse" (punterebbe a un 404). La gerarchia reale e'
 * Home -> selettore-strumento -> scheda-paese.
 *
 * @param toolName   etichetta localizzata dello strumento (h1 del selettore)
 * @param country    se presente, aggiunge il nodo-paese in coda
 */
export function buildBreadcrumbItems(
  locale: AppLocale,
  toolName: string,
  country?: { name: string; canonicalSlug: string },
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { name: 'GeoTapp', item: `${BASE_URL}/${locale}/` },
    {
      name: toolName,
      item: absoluteLocalizedUrl('/risorse/gps-lavoratori-ue/', locale),
    },
  ];

  if (country) {
    items.push({
      name: country.name,
      item: absoluteLocalizedUrl(
        `/risorse/gps-lavoratori-ue/${country.canonicalSlug}/`,
        locale,
      ),
    });
  }

  return items;
}

/** Schema.org BreadcrumbList a partire dagli item costruiti sopra. */
export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
}

/**
 * Article della scheda-paese. Riusa l'Organization del sito come author/publisher.
 * dateModified = scheda.aggiornatoIl (atteso YYYY-MM-DD).
 */
export function buildSchedaArticleJsonLd(args: {
  locale: AppLocale;
  headline: string;
  description: string;
  dateModified: string;
  canonicalSlug: string;
}): Record<string, unknown> {
  const url = absoluteLocalizedUrl(
    `/risorse/gps-lavoratori-ue/${args.canonicalSlug}/`,
    args.locale,
  );
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: args.headline,
    description: args.description,
    inLanguage: args.locale,
    dateModified: args.dateModified,
    mainEntityOfPage: url,
    url,
    author: ORGANIZATION_REF,
    publisher: ORGANIZATION_REF,
  };
}
