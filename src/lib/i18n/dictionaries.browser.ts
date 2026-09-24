// geotapp-site/src/lib/i18n/dictionaries.browser.ts
// Versione BROWSER di dictionaries.ts, sostituita in build da next.config.mjs
// (turbopack.resolveAlias, condizione `browser`). Non importa nessun JSON: legge il
// dizionario consegnato dal server tramite DictionaryBridge. Il server (SSR e RSC)
// continua a usare dictionaries.ts con tutti i dizionari.
import type { AppLocale } from './config';
import type { SiteDictionary } from './dictionaries';
import { readDictionary } from './client-dictionary-store';

export type { SiteDictionary } from './dictionaries';

export function getDictionary(locale?: AppLocale | null): SiteDictionary {
  const dict = readDictionary(locale);
  if (!dict) {
    throw new Error(
      'getDictionary (browser): nessun dizionario consegnato. Il layout deve avvolgere la pagina in <DictionaryBridge>.',
    );
  }
  return dict;
}
