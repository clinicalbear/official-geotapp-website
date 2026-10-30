import { NextRequest, NextResponse } from 'next/server';
import { rateLimitOk, clientIp } from '@/lib/rate-limit';
import { mapLimit, sharedSWR } from '@/lib/shared-swr';

/**
 * Controllo delle fonti di un articolo del blog (aggiunto 30/10/2026).
 *
 * A COSA SERVE: sotto ogni pillola "Fonte" a margine dell'articolo (public/ibrida/ibrida.js) compare
 * "link verificato il <data>" quando la pagina citata risponde. Qui il server apre quei link e dice quali
 * rispondono. Non si dice nulla sul contenuto della fonte: solo che il link e' vivo.
 *
 * PERCHE' NON E' UN PROXY APERTO: in ingresso arriva solo lo slug dell'articolo. I link da aprire si leggono
 * dal contenuto dell'articolo su WordPress, non dalla richiesta: chi chiama non puo' far aprire indirizzi suoi.
 *
 * QUANTO COSTA: il risultato resta nella cache condivisa del colo per un giorno (sharedSWR), al massimo 12
 * link per articolo, 3 alla volta, 6 secondi ciascuno. Se un sito rifiuta i robot (401/403/429) il link
 * non e' "rotto": risulta "?" e in pagina non si scrive niente.
 *
 * CONTRATTO WORKER (AGENTS.md): trailing slash sull'endpoint WordPress, header di proxy,
 * cache 'no-store' piu' AbortSignal.
 */

const WP = 'https://blog.geotapp.com';
const WP_HEADERS = { host: 'blog.geotapp.com', 'x-geotapp-proxy': '1', 'x-forwarded-proto': 'https' };
const DAY_MS = 24 * 60 * 60 * 1000;
const MAX_LINKS = 12;

type Esito = 'ok' | 'ko' | '?';
interface Fonti { checked: string; links: Record<string, Esito> }

function linkEsterni(html: string): string[] {
  const out = new Set<string>();
  for (const m of html.matchAll(/href=["'](https?:\/\/[^"'#\s]+)["']/gi)) {
    let u: URL;
    try { u = new URL(m[1].replace(/&amp;/g, '&')); } catch { continue; }
    if (/(^|\.)geotapp\.com$/i.test(u.hostname)) continue;
    out.add(u.toString());
    if (out.size >= MAX_LINKS) break;
  }
  return [...out];
}

async function esito(url: string): Promise<Esito> {
  const prova = async (method: 'HEAD' | 'GET'): Promise<number> => {
    const r = await fetch(url, {
      method,
      redirect: 'follow',
      cache: 'no-store',
      signal: AbortSignal.timeout(6000),
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; GeoTapp-link-check; +https://geotapp.com)' },
    });
    return r.status;
  };
  try {
    let st = await prova('HEAD');
    if (st === 405 || st === 501 || st === 403) st = await prova('GET');   // molti siti non accettano HEAD
    if (st >= 200 && st < 400) return 'ok';
    if (st === 401 || st === 403 || st === 429) return '?';
    return 'ko';
  } catch {
    return '?';
  }
}

async function controlla(slug: string): Promise<Fonti | null> {
  const r = await fetch(`${WP}/wp-json/wp/v2/posts/?slug=${encodeURIComponent(slug)}&_fields=content`, {
    headers: WP_HEADERS,
    cache: 'no-store',
    signal: AbortSignal.timeout(8000),
  });
  if (!r.ok) return null;
  const posts = (await r.json()) as Array<{ content?: { rendered?: string } }>;
  const html = posts?.[0]?.content?.rendered;
  if (!html) return null;
  const urls = linkEsterni(html);
  const esiti = await mapLimit(urls, 3, esito);
  const links: Record<string, Esito> = {};
  urls.forEach((u, i) => { links[u] = esiti[i]; });
  return { checked: new Date().toISOString(), links };
}

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug') ?? '';
  if (!/^[a-z0-9-]{3,200}$/.test(slug)) {
    return NextResponse.json({ error: 'slug non valido' }, { status: 400 });
  }
  if (!rateLimitOk(`fonti:${clientIp(req)}`, 30)) {
    return NextResponse.json({ error: 'troppe richieste' }, { status: 429 });
  }
  const dati = await sharedSWR(`fonti:${slug}`, () => controlla(slug), { freshMs: DAY_MS }).catch(() => null);
  if (!dati) return NextResponse.json({ checked: null, links: {} }, { headers: { 'cache-control': 'no-store' } });
  return NextResponse.json(dati, { headers: { 'cache-control': 'public, max-age=3600' } });
}
