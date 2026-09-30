/**
 * Ortografia delle varianti dell'inglese.
 * I testi base ("en") sono scritti in inglese britannico. Per en-us (americano) e
 * en-ca (canadese: -ize, ma colour/centre/catalogue) si converte al volo, cosi' non
 * serve mantenere una copia dei testi per variante.
 */

// -ise/-isation -> -ize/-ization (americano e canadese). Radici elencate per non
// toccare parole come advise, raise, precise, noise, expertise, surprise.
const IZE_STEMS =
  '(?:organi|optimi|authori|customi|personali|recogni|minimi|visuali|prioriti|standardi|summari|categori|synchroni|utili|digiti|normali|finali|speciali|emphasi|capitali|characteri|generali|formali|centrali|materiali|maximi|mobili|moderni|penali|stabili|subsidi|sensiti|itemi|digitali|reali|legali|globali|harmoni|familiari|apologi|criti|hospitali|moneti|fertili|saniti)';
const IZE_RE = new RegExp('\\b(' + IZE_STEMS + ')s(e|es|ed|er|ers|ing|ation|ations|ational|ationally|able|ability)\\b', 'gi');
const ANALYSE_RE = /\banalys(e|ed|ing|er|ers)\b/gi;

// Solo americano.
const US_ONLY: Array<[RegExp, string]> = [
  [/\bcolour/gi, 'color'],
  [/\bbehaviour/gi, 'behavior'],
  [/\bhonour/gi, 'honor'],
  [/\blabour/gi, 'labor'],
  [/\bneighbour/gi, 'neighbor'],
  [/\bfavour/gi, 'favor'],
  [/\bcatalogue/gi, 'catalog'],
  [/\blicence/gi, 'license'],
  [/\bcentre/gi, 'center'],
  [/\badviser/gi, 'advisor'],
  [/\bdefence/gi, 'defense'],
  [/\boffence/gi, 'offense'],
  [/\bgrey\b/gi, 'gray'],
  [/\binstalment/gi, 'installment'],
  [/\bcancelled\b/gi, 'canceled'],
  [/\bcancelling\b/gi, 'canceling'],
  [/\bwhilst\b/gi, 'while'],
];

function keepCase(from: string, to: string): string {
  if (from.length > 1 && from === from.toUpperCase()) return to.toUpperCase();
  if (from[0] === from[0].toUpperCase()) return to[0].toUpperCase() + to.slice(1);
  return to;
}

function ize(text: string): string {
  return text
    .replace(IZE_RE, (_m, stem: string, end: string) => `${stem}${stem === stem.toUpperCase() ? 'Z' : 'z'}${end}`)
    .replace(ANALYSE_RE, (m, end: string) => keepCase(m, `analyz${end}`));
}

function programme(text: string): string {
  return text.replace(/\bprogramme(s)?\b/gi, (m) => keepCase(m, m.toLowerCase().endsWith('s') ? 'programs' : 'program'));
}

function usOnly(text: string): string {
  let out = text;
  for (const [re, rep] of US_ONLY) out = out.replace(re, (m) => keepCase(m, rep));
  return out;
}

export function britishToVariant(text: string, locale: string): string {
  if (/^(https?:|mailto:|\/)/.test(text)) return text;
  if (locale === 'en-us') return programme(usOnly(ize(text)));
  if (locale === 'en-ca') return programme(ize(text));
  return text;
}

/** Applica la conversione a tutte le stringhe di un oggetto (senza toccare le chiavi). */
export function localizeEnglishDeep<T>(value: T, locale: string): T {
  if (locale !== 'en-us' && locale !== 'en-ca') return value;
  const walk = (v: unknown): unknown => {
    if (typeof v === 'string') return britishToVariant(v, locale);
    if (Array.isArray(v)) return v.map(walk);
    if (v && typeof v === 'object') {
      const o: Record<string, unknown> = {};
      for (const [k, x] of Object.entries(v as Record<string, unknown>)) o[k] = walk(x);
      return o;
    }
    return v;
  };
  return walk(value) as T;
}
