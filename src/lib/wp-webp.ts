/**
 * Immagini del blog servite in WebP al posto dei PNG/JPG pesanti.
 *
 * Il 13/11/2026 le immagini di wp-content/uploads sopra i 100 KB (1.428, 982 MB in
 * tutto) sono state convertite in WebP e caricate ACCANTO all'originale con il
 * suffisso `-w.webp` (`foto-1024x585.png` -> `foto-1024x585-w.webp`). Gli originali
 * restano sul server e gli articoli in WordPress non sono stati toccati: lo scambio
 * avviene qui, al momento del render, solo per i percorsi elencati in
 * `src/data/wp-webp.json` (gli unici per cui il WebP esiste davvero).
 *
 * Per aggiungere immagini nuove: convertire, caricare con lo stesso suffisso e
 * aggiungere il percorso relativo a uploads/ nel JSON.
 */
import elenco from '@/data/wp-webp.json';

const CONVERTITE: ReadonlySet<string> = new Set(elenco as string[]);

// geotapp.com/blog/... e il vecchio blog.geotapp.com/... (che fa 301 al primo).
const UPLOAD_RE =
  /https?:\/\/(?:www\.)?(?:geotapp\.com\/blog|blog\.geotapp\.com)\/wp-content\/uploads\/([^\s"'<>(),]+?\.(?:png|jpe?g))/gi;

function scambia(percorso: string): string | null {
  if (!CONVERTITE.has(percorso)) return null;
  return `https://geotapp.com/blog/wp-content/uploads/${percorso.replace(/\.(?:png|jpe?g)$/i, '-w.webp')}`;
}

/** URL di un'immagine del blog: la versione WebP se esiste, altrimenti quella di prima. */
export function wpImmagine<T extends string | null | undefined>(url: T): T {
  if (!url) return url;
  return url.replace(UPLOAD_RE, (tutto, percorso: string) => scambia(percorso) ?? tutto) as T;
}

/** Stesso scambio dentro l'HTML di un articolo (src e srcset). */
export function wpHtmlImmagini(html: string): string {
  if (!html) return html;
  return html.replace(UPLOAD_RE, (tutto, percorso: string) => scambia(percorso) ?? tutto);
}
