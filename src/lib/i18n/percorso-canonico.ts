import { normalizeLocaleCode } from './locale-routing';
import { REVERSE_SLUG_MAP } from './slug-map';
import type { AppLocale } from './config';

/**
 * Il percorso senza lingua e con il primo tratto in forma canonica: /ru/tseny/ e
 * /ru/pricing diventano entrambi /pricing.
 *
 * Sul server usePathname vede l'indirizzo interno dopo la riscrittura del middleware,
 * nel browser quello tradotto. Una scelta fatta sull'indirizzo grezzo cambiava fra i
 * due e faceva scartare a React la pagina generata (errore #418).
 */
export function percorsoCanonico(pathname: string): string {
  const parti = pathname.split('/').filter(Boolean);
  const lingua = parti[0] ? normalizeLocaleCode(parti[0]) : null;
  if (lingua) parti.shift();
  if (parti.length === 0) return '/';
  const mappa = REVERSE_SLUG_MAP[(lingua ?? 'it') as AppLocale] ?? {};
  parti[0] = mappa[parti[0]] ?? parti[0];
  return `/${parti.join('/')}`;
}
