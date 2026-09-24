// geotapp-site/src/lib/shared-swr.ts
// Cache "stale-while-revalidate" condivisa tra gli isolate del Worker.
//
// PERCHE' ESISTE (24/09/2026): home, pagine settore e blog leggono gli articoli da
// WordPress a runtime. Le cache in memoria vivono nel singolo isolate, e Cloudflare ne
// avvia di nuovi di continuo: ogni isolate freddo ripaginava l'archivio (13 richieste,
// 1285 post) e il cliente aspettava 4-18 secondi la prima pagina. Qui il dato si tiene
// nella Cache API del colo: un isolate freddo lo trova gia' pronto, risponde subito e,
// se il dato e' vecchio, lo rinfresca DOPO aver risposto.
//
// Regole: si restituisce sempre il dato che c'e', anche vecchio; si aspetta il loader
// solo quando in quel colo non esiste nessuna copia. Un loader che fallisce (throw o
// null) non sovrascrive mai una copia buona.

import { after } from 'next/server';

const ORIGIN = 'https://geotapp.com/__swr/';
/** Quanto a lungo la Cache API tiene la copia: oltre questo si torna a caricare a freddo. */
const KEEP_SECONDS = 7 * 24 * 60 * 60;

type Entry<T> = { ts: number; value: T };
const memory = new Map<string, Entry<unknown>>();
const inFlight = new Map<string, Promise<unknown>>();

function cacheStore(): Cache | null {
  const cs = (globalThis as { caches?: CacheStorage & { default?: Cache } }).caches;
  return cs?.default ?? null;
}

async function readShared<T>(key: string): Promise<Entry<T> | null> {
  try {
    const c = cacheStore();
    if (!c) return null;
    const hit = await c.match(new Request(ORIGIN + encodeURIComponent(key)));
    if (!hit) return null;
    const e = (await hit.json()) as Entry<T>;
    return e && typeof e.ts === 'number' ? e : null;
  } catch {
    return null;
  }
}

async function writeShared<T>(key: string, e: Entry<T>): Promise<void> {
  try {
    const c = cacheStore();
    if (!c) return;
    await c.put(
      new Request(ORIGIN + encodeURIComponent(key)),
      new Response(JSON.stringify(e), {
        headers: { 'content-type': 'application/json', 'cache-control': `max-age=${KEEP_SECONDS}` },
      }),
    );
  } catch {
    /* best-effort: la cache e' un di piu', non deve mai rompere la richiesta */
  }
}

/** Esegue il loader una volta sola per chiave anche con richieste concorrenti. */
function load<T>(key: string, loader: () => Promise<T | null>, keep: (v: T) => boolean): Promise<T | null> {
  const running = inFlight.get(key) as Promise<T | null> | undefined;
  if (running) return running;
  const p = (async () => {
    const v = await loader();
    if (v !== null && keep(v)) {
      const e = { ts: Date.now(), value: v };
      memory.set(key, e);
      await writeShared(key, e);
    }
    return v;
  })().finally(() => inFlight.delete(key));
  inFlight.set(key, p);
  return p;
}

function refreshLater(key: string, loader: () => Promise<unknown>, keep: (v: never) => boolean): void {
  const job = () => load(key, loader as () => Promise<never>, keep).catch(() => undefined);
  try {
    after(job);
  } catch {
    // Fuori da una richiesta (build, test): si lancia e basta.
    void job();
  }
}

export interface SwrOptions<T> {
  /** Oltre questa eta' il dato si serve lo stesso ma si rinfresca in background. */
  freshMs: number;
  /** Quali risultati vale la pena conservare. Default: tutto cio' che non e' null. */
  keep?: (v: T) => boolean;
}

/**
 * Il valore per `key`: dalla memoria, poi dalla Cache API del colo, altrimenti dal loader.
 * Se il loader lancia e non esiste nessuna copia, l'errore sale al chiamante.
 */
export async function sharedSWR<T>(
  key: string,
  loader: () => Promise<T | null>,
  { freshMs, keep = () => true }: SwrOptions<T>,
): Promise<T | null> {
  const now = Date.now();
  const mem = memory.get(key) as Entry<T> | undefined;
  if (mem) {
    if (now - mem.ts > freshMs) refreshLater(key, loader, keep as (v: never) => boolean);
    return mem.value;
  }
  const shared = await readShared<T>(key);
  if (shared) {
    memory.set(key, shared);
    if (now - shared.ts > freshMs) refreshLater(key, loader, keep as (v: never) => boolean);
    return shared.value;
  }
  return load(key, loader, keep);
}

/** Svuota la memoria locale. Serve ai test. */
export function resetSharedSWR(): void {
  memory.clear();
  inFlight.clear();
}

/**
 * Come sharedSWR ma non aspetta mai il loader: se non esiste nessuna copia la prepara
 * dopo la risposta e intanto restituisce null. Per i dati accessori (es. tempi di
 * lettura) che non devono rallentare la pagina.
 */
export async function sharedPeek<T>(
  key: string,
  loader: () => Promise<T | null>,
  { freshMs, keep = () => true }: SwrOptions<T>,
): Promise<T | null> {
  const now = Date.now();
  const mem = memory.get(key) as Entry<T> | undefined;
  const entry = mem ?? (await readShared<T>(key));
  if (entry) {
    if (!mem) memory.set(key, entry);
    if (now - entry.ts > freshMs) refreshLater(key, loader, keep as (v: never) => boolean);
    return entry.value;
  }
  refreshLater(key, loader, keep as (v: never) => boolean);
  return null;
}

/** Esegue fn su tutti gli elementi, al massimo `limit` alla volta, mantenendo l'ordine. */
export async function mapLimit<I, O>(items: I[], limit: number, fn: (item: I) => Promise<O>): Promise<O[]> {
  const out = new Array<O>(items.length);
  let next = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) {
      const i = next++;
      out[i] = await fn(items[i]);
    }
  });
  await Promise.all(workers);
  return out;
}
