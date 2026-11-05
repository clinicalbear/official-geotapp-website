/**
 * Accorcia un testo senza spezzare l'ultima parola: nelle anteprime si leggeva
 * "cosa togli" al posto di "cosa togliere".
 */
export function tagliaAParola(testo: string, max: number): string {
  const pulito = testo.trim();
  if (pulito.length <= max) return pulito;
  const taglio = pulito.slice(0, max);
  const spazio = taglio.lastIndexOf(' ');
  const base = spazio > max * 0.6 ? taglio.slice(0, spazio) : taglio;
  return `${base.replace(/[\s.,;:!?…–—-]+$/u, '')}…`;
}
