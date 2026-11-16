/**
 * Immagini del blog servite in WebP al posto dei PNG/JPG pesanti.
 *
 * Il 13/11/2026 le immagini di wp-content/uploads sopra i 100 KB (1.428, 982 MB in
 * tutto) sono state convertite (il 16/11 anche le altre misure di WordPress e i
 * vecchi WebP rimasti pesanti) in WebP e caricate ACCANTO all'originale con il
 * suffisso `-w.webp` (`foto-1024x585.png` -> `foto-1024x585-w.webp`). Gli originali
 * restano sul server e gli articoli in WordPress non sono stati toccati: lo scambio
 * avviene qui, al momento del render, solo per i percorsi elencati (gli unici per cui
 * il WebP esiste davvero).
 *
 * Immagini nuove: dal 16/11/2026 le converte da solo, ogni ora, lo script
 * `geotapp-growth-engine/backend/scripts/ops/blog_immagini_webp.py` (cron), che pubblica
 * l'elenco aggiornato in `wp-content/uploads/gt-webp/manifest.txt`. Il sito lo rilegge
 * al massimo ogni 10 minuti (`aggiornaElencoWebp`), quindi non serve un deploy.
 * Il JSON in `src/data/wp-webp.json` resta come base: se il manifest non si legge si
 * usa quello.
 */
import elenco from '@/data/wp-webp.json';

const BASE: readonly string[] = elenco as string[];
let convertite: ReadonlySet<string> = new Set(BASE);
let lettoAlle = 0;

// Fuori dalla radice di uploads e con estensione .txt: li' Cloudflare risponde 403.
const MANIFEST = 'https://blog.geotapp.com/wp-content/uploads/gt-webp/manifest.txt';
const OGNI_MS = 10 * 60 * 1000;

/**
 * Rilegge l'elenco delle immagini convertite (al massimo ogni 10 minuti per isolate).
 * Non lancia mai: se il manifest non risponde resta l'elenco di prima.
 */
export async function aggiornaElencoWebp(): Promise<void> {
  const ora = Date.now();
  if (ora - lettoAlle < OGNI_MS) return;
  lettoAlle = ora;
  try {
    const r = await fetch(MANIFEST, {
      headers: { host: 'blog.geotapp.com', 'x-geotapp-proxy': '1', 'x-forwarded-proto': 'https' },
      cache: 'no-store',
      signal: AbortSignal.timeout(3000),
    });
    if (!r.ok) return;
    const dati = (await r.json()) as { percorsi?: unknown };
    if (Array.isArray(dati.percorsi) && dati.percorsi.length > 0) {
      const nuovi = dati.percorsi.filter((p): p is string => typeof p === 'string');
      convertite = new Set([...BASE, ...nuovi]);
    }
  } catch {
    /* manifest non raggiungibile: si tiene l'elenco che c'e' */
  }
}

/** Solo per i test: imposta l'elenco come se arrivasse dal manifest. */
export function _impostaElencoPerTest(percorsi: string[]): void {
  convertite = new Set([...BASE, ...percorsi]);
  lettoAlle = Date.now();
}

// geotapp.com/blog/... e il vecchio blog.geotapp.com/... (che fa 301 al primo).
const UPLOAD_RE =
  /https?:\/\/(?:www\.)?(?:geotapp\.com\/blog|blog\.geotapp\.com)\/wp-content\/uploads\/([^\s"'<>(),]+?\.(?:png|jpe?g|webp))/gi;

function scambia(percorso: string): string | null {
  let chiave = percorso;
  if (!convertite.has(chiave)) {
    // Nell'HTML il nome puo' arrivare codificato (%C3%A9), nel manifest e' com'e' sul disco.
    try {
      chiave = decodeURIComponent(percorso);
    } catch {
      return null;
    }
    if (!convertite.has(chiave)) return null;
  }
  return `https://geotapp.com/blog/wp-content/uploads/${percorso.replace(/\.(?:png|jpe?g|webp)$/i, '-w.webp')}`;
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
