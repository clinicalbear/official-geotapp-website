/**
 * Guida per iniziare, una per lingua.
 *
 * Fino al 30/09/2026 la pagina caricava /guida-utente.md: un testo di marzo, solo in
 * italiano (anche sulle versioni straniere), con il marchio scritto «GeoTap». La guida
 * vera, completa, e' il manuale dentro Flow; qui resta un avvio rapido, coerente con
 * la scheda claim, che rimanda a quel manuale.
 */
import it from './it';

const GUIDE: Record<string, string> = { it };

export function guidaPer(locale: string): string {
  return GUIDE[locale] ?? GUIDE[locale.split('-')[0]] ?? GUIDE.it;
}
