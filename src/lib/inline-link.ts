/** Divide `text` attorno alla prima occorrenza di `anchor`; null se l'ancora non c'e' (si rende testo semplice). */
export function splitAroundAnchor(
  text: string,
  anchor: string | undefined,
): { before: string; anchor: string; after: string } | null {
  if (!anchor) return null;
  const i = text.indexOf(anchor);
  if (i < 0) return null;
  return { before: text.slice(0, i), anchor, after: text.slice(i + anchor.length) };
}
