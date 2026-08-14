import type { SettoreSlug } from './types';

/**
 * Settori che hanno DAVVERO una pagina /settori/<settore>/risorse/.
 *
 * Unica fonte di verita' per decidere se mostrare il pulsante "Guide e articoli"
 * nell'hero di SettorePageLayout. Deve restare allineata alle chiavi di
 * SETTORE_CONFIG in src/app/[locale]/settori/[settore]/risorse/page.tsx, che
 * genera le pagine statiche e chiama notFound() per tutto il resto.
 *
 * Perche' esiste (13/08/2026): il pulsante veniva stampato per tutti e nove i
 * settori del layout, ma la rotta risorse ne conosceva solo tre. Risultato: 96
 * URL in 404 (6 settori x 16 lingue) e 90 redirect rotti, tutti da un pulsante
 * ben visibile nell'hero, accanto alla CTA del trial. Vedi crawl Ahrefs 13/08.
 *
 * Aggiungendo un settore qui SENZA aggiungerlo a SETTORE_CONFIG si ricrea il
 * bug: la guardia in generateStaticParams (risorse/page.tsx) ferma la build.
 */
export const SETTORI_CON_RISORSE = ['pulizie', 'installatori', 'sicurezza'] as const;

export type SettoreConRisorse = (typeof SETTORI_CON_RISORSE)[number];

export function haPaginaRisorse(settore: SettoreSlug): boolean {
  return (SETTORI_CON_RISORSE as readonly string[]).includes(settore);
}
