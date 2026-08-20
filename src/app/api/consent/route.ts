import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { rateLimitOk, clientIp } from '@/lib/rate-limit';

/**
 * Contatore delle scelte cookie, lato server (aggiunto 20/08/2026).
 *
 * PERCHE' ESISTE: in GA4 il rifiuto e' invisibile per costruzione. Con
 * analytics_storage = 'denied' gtag manda solo cookieless ping, che non
 * entrano nei report standard. Verificato sui dati: in 90 giorni
 * consent_choice risulta 98 volte, TUTTE con action 'accept_all'. Zero
 * rifiuti, zero abbandoni. Il denominatore non esisteva, quindi l'accept
 * rate non era calcolabile.
 *
 * COSA SALVA: solo conteggi aggregati per giorno / paese / azione. Nessun
 * cookie, nessun identificatore, nessun IP, nessuna pagina, nessun
 * user-agent. Non e' un dato personale e non traccia la persona che ha
 * detto no: conta quante volte e' stato detto no. L'IP arriva alla route
 * come arriva a qualsiasi richiesta HTTP, viene usato in memoria per il
 * rate limit e non viene mai scritto.
 *
 * DOVE FINISCE: KV namespace CONSENT_STATS, una chiave per giorno.
 *   d:2026-08-20 -> {"IT":{"shown":12,"accept_all":7,"necessary_only":4,"dismissed_x":1}}
 * Lettura: npx wrangler kv key get --remote --binding CONSENT_STATS d:2026-08-20
 */

const ACTIONS = new Set([
  'shown',
  'accept_all',
  'necessary_only',
  'custom_yes',
  'custom_no',
  'accept_all_from_modal',
  'dismissed_x',
]);

type DayStats = Record<string, Record<string, number>>;

/** Superficie KV minima: evita di dipendere dai global di workers-types,
 *  che non sono nei "types" del tsconfig. */
type KvLike = {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
};

export async function POST(req: NextRequest) {
  // 20 colpi al minuto per IP: un utente ne fa 2 (shown + scelta).
  if (!rateLimitOk(`cs:${clientIp(req)}`, 20, 60_000)) {
    return new NextResponse(null, { status: 429 });
  }

  let action = '';
  let locale = '';
  try {
    const body = (await req.json()) as { action?: unknown; locale?: unknown };
    action = typeof body.action === 'string' ? body.action : '';
    locale = typeof body.locale === 'string' ? body.locale.slice(0, 5) : '';
  } catch {
    return new NextResponse(null, { status: 400 });
  }
  if (!ACTIONS.has(action)) {
    return new NextResponse(null, { status: 400 });
  }

  let kv: KvLike | undefined;
  try {
    const { env } = getCloudflareContext();
    kv = (env as unknown as { CONSENT_STATS?: KvLike }).CONSENT_STATS;
  } catch {
    // dev locale senza binding: non e' un errore per il chiamante
  }
  if (!kv) return new NextResponse(null, { status: 204 });

  const country = (req.headers.get('cf-ipcountry') || 'XX').slice(0, 2).toUpperCase();
  const key = `d:${new Date().toISOString().slice(0, 10)}`;

  try {
    const raw = await kv.get(key);
    const stats: DayStats = raw ? (JSON.parse(raw) as DayStats) : {};
    const bucket = (stats[country] ??= {});
    bucket[action] = (bucket[action] ?? 0) + 1;
    if (locale) {
      const lb = (stats[`lang:${locale}`] ??= {});
      lb[action] = (lb[action] ?? 0) + 1;
    }
    // 400 giorni: tiene un anno di confronti stagionali e poi si pulisce da solo.
    await kv.put(key, JSON.stringify(stats), { expirationTtl: 400 * 24 * 60 * 60 });
  } catch {
    return new NextResponse(null, { status: 204 });
  }

  return new NextResponse(null, { status: 204 });
}
