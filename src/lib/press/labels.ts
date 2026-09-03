// geotapp-site/src/lib/press/labels.ts
// Etichetta della fascia "citati su", in un modulo SENZA 'use client'.
//
// Stava dentro FeaturedIn.tsx, che e' un componente client: un componente SERVER che
// ne importava la costante non riceveva l'oggetto ma un riferimento client, quindi
// FEATURED_LABEL[locale] veniva undefined e l'etichetta usciva vuota. Succedeva su
// cos-e-geotapp, confronto, il template di confronto e le pagine articolo del blog.
//
// Tradotta idiomaticamente per mercato: un "citati su" letterale suona sbagliato in
// inglese e tedesco.
export const FEATURED_LABEL: Record<string, string> = {
  it: 'Citati su',
  en: 'Featured in',
  de: 'Bekannt aus',
  fr: 'Cités dans',
  es: 'Citados en',
  pt: 'Citados em',
  nl: 'Bekend van',
  ru: 'О нас пишут',
  da: 'Omtalt i',
  sv: 'Omtalade i',
  nb: 'Omtalt i',
};

/** Etichetta per una lingua qualsiasi, con ripiego sull'inglese. */
export function featuredLabel(locale: string): string {
  return FEATURED_LABEL[locale] ?? FEATURED_LABEL[locale?.split('-')[0]] ?? FEATURED_LABEL.en;
}
