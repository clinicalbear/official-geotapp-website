// geotapp-site/src/lib/i18n/client-dictionary-store.ts
// Dove vive, nel browser, il dizionario della lingua della pagina.
//
// PERCHE' (24/09/2026): `dictionaries.ts` importa tutti gli 11 dizionari (~1 MB). I 35
// componenti client che chiamano getDictionary() li portavano TUTTI nel bundle del
// browser: 303 KB compressi e 1 MB da interpretare a ogni prima visita, per usarne uno.
// Ora il server passa solo il dizionario della lingua corrente (DictionaryBridge) e
// nel browser getDictionary legge da qui (alias in next.config.mjs).

import type { SiteDictionary } from './dictionaries';

const byLocale = new Map<string, SiteDictionary>();
let latest: SiteDictionary | null = null;

// Le sezioni si SOMMANO: il layout di [locale] consegna il dizionario comune, i layout di
// alcune rotte aggiungono le sezioni che servono solo a loro (vedi dizionarioComune in
// dictionaries.ts). Una consegna successiva non toglie mai quello che c'era.
export function storeDictionary(locale: string, dict: Partial<SiteDictionary>): void {
  const merged = { ...(byLocale.get(locale) ?? {}), ...dict } as SiteDictionary;
  byLocale.set(locale, merged);
  latest = merged;
}

export function readDictionary(locale?: string | null): SiteDictionary | null {
  return (locale ? byLocale.get(locale) : undefined) ?? latest;
}
