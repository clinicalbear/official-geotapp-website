import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { rateLimitOk, clientIp } from '@/lib/rate-limit';

/**
 * Contatore delle visioni dei video, lato server (aggiunto 18/09/2026).
 *
 * PERCHE' ESISTE: in GA4 si vede solo chi ha accettato i cookie, e sui video
 * questo e' il grosso della domanda, non un dettaglio. Il video del giro parte
 * da solo per tutti, anche per chi ha detto no: senza un conteggio nostro non
 * sapremmo nemmeno quante volte e' partito. Stessa ragione, e stessa forma,
 * del contatore del banner in src/app/api/consent/route.ts.
 *
 * COSA SALVA: solo conteggi aggregati per giorno / paese / lingua / video, e i
 * secondi guardati arrotondati a dieci. Nessun cookie, nessun identificatore,
 * nessun IP, nessun percorso di navigazione, nessun user-agent. L'IP arriva
 * alla route come a qualsiasi richiesta HTTP, serve in memoria per il rate
 * limit e non viene mai scritto.
 *
 * DOVE FINISCE: lo stesso namespace KV del consenso (CONSENT_STATS), con un
 * prefisso diverso, UNA CHIAVE PER EVENTO e il valore vuoto:
 *   v:2026-09-18:IT:it:giro:start:<uuid>
 *   v:2026-09-18:IT:it:giro:s40:<uuid>
 * Una chiave per evento e non un contatore da leggere-sommare-riscrivere,
 * perche' su KV gli incrementi concorrenti si perdono (misurato il 20/08/2026
 * sul consenso: sei richieste ravvicinate contate cinque). Il prefisso `v:`
 * tiene questi eventi fuori dalla lettura del consenso, che elenca `e:`.
 *
 * LIMITE: mille scritture KV al giorno sul piano gratuito, e qui ne servono
 * due per visione. Oltre le cinquecento visioni al giorno va spostato su un
 * Durable Object. Se la quota finisce, la put fallisce, il catch la ingoia e
 * il video continua a funzionare: si perde il conteggio, non la visione.
 */

const VIDEO = new Set(['giro', 'tutorial']);
const EVENTI = new Set(['start', 'visto']);

type KvLike = {
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
};

export async function POST(req: NextRequest) {
  // 30 colpi al minuto per IP: una visione ne fa due, e una pagina con piu'
  // video aperta a lungo resta comodamente sotto.
  if (!rateLimitOk(`vs:${clientIp(req)}`, 30, 60_000)) {
    return new NextResponse(null, { status: 429 });
  }

  let video = '';
  let evento = '';
  let locale = '';
  let secondi = 0;
  try {
    const body = (await req.json()) as {
      video?: unknown; evento?: unknown; locale?: unknown; secondi?: unknown;
    };
    video = typeof body.video === 'string' ? body.video : '';
    evento = typeof body.evento === 'string' ? body.evento : '';
    locale = typeof body.locale === 'string' ? body.locale.slice(0, 5) : '';
    secondi = typeof body.secondi === 'number' && Number.isFinite(body.secondi)
      ? Math.min(Math.max(Math.round(body.secondi / 10) * 10, 0), 600)
      : 0;
  } catch {
    return new NextResponse(null, { status: 400 });
  }
  if (!VIDEO.has(video) || !EVENTI.has(evento)) {
    return new NextResponse(null, { status: 400 });
  }

  let kv: KvLike | undefined;
  try {
    const { env } = getCloudflareContext();
    kv = (env as unknown as { CONSENT_STATS?: KvLike }).CONSENT_STATS;
  } catch {
    // in locale il binding non c'e': per chi chiama non e' un errore
  }
  if (!kv) return new NextResponse(null, { status: 204 });

  const paese = (req.headers.get('cf-ipcountry') || 'XX').slice(0, 2).toUpperCase();
  const giorno = new Date().toISOString().slice(0, 10);
  const lingua = locale.replace(/[^a-z-]/gi, '') || 'xx';
  const cosa = evento === 'visto' ? `s${secondi}` : 'start';
  const chiave = `v:${giorno}:${paese}:${lingua}:${video}:${cosa}:${crypto.randomUUID()}`;

  try {
    // 400 giorni, come il consenso: un anno di confronti e poi si pulisce da solo.
    await kv.put(chiave, '', { expirationTtl: 400 * 24 * 60 * 60 });
  } catch {
    return new NextResponse(null, { status: 204 });
  }

  return new NextResponse(null, { status: 204 });
}
