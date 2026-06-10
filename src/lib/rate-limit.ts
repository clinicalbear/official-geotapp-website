/**
 * Rate limiting best-effort per gli endpoint POST pubblici.
 *
 * In-memory per isolate Worker: non è un limite globale distribuito (ogni
 * isolate ha la sua mappa e gli isolate vengono riciclati), ma frena gli
 * abusi a raffica da singolo IP a costo zero, senza KV/DO. Si somma alle
 * difese già attive: honeypot nei form e Cloudflare Bot Fight Mode.
 */
const buckets = new Map<string, number[]>();
const MAX_BUCKETS = 5000; // tetto memoria: oltre, si svuota tutto (fail-open)

export function rateLimitOk(key: string, max = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  if (buckets.size > MAX_BUCKETS) buckets.clear();
  const hits = (buckets.get(key) ?? []).filter((t) => now - t < windowMs);
  if (hits.length >= max) {
    buckets.set(key, hits);
    return false;
  }
  hits.push(now);
  buckets.set(key, hits);
  return true;
}

/** Estrae l'IP del client dalle header Cloudflare (fallback x-forwarded-for). */
export function clientIp(req: Request): string {
  return (
    req.headers.get('cf-connecting-ip') ??
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    'unknown'
  );
}
