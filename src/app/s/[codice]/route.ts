/**
 * `geotapp.com/s/<codice>` — l'indirizzo che finisce nei post dei gruppi.
 *
 * Risolve il codice, segna il passaggio e manda alla pagina del sondaggio. Il
 * perche' di questo giro (invece di un `?utm_source=` sul link diretto) sta in
 * `src/lib/link-brevi.ts`: la card di anteprima dei social si genera su questo
 * indirizzo, quindi conta anche i clic sulla card, e il conteggio non dipende
 * dal consenso ai cookie.
 *
 * COSA VIENE SCRITTO: una chiave per apertura nello stesso KV dei conteggi del
 * banner, con il conteggio nel nome della chiave:
 *   l:2026-09-06:IT:fb-jimdo:<uuid>
 * Niente cookie, niente IP, niente user agent, nessun identificatore della
 * persona. Una chiave per evento e non un contatore da rileggere e riscrivere,
 * perche' su KV quel pattern perde gli incrementi concorrenti (misurato in
 * produzione il 20/08/2026 con /api/consent).
 *
 * Se il KV non c'e' (sviluppo locale) o la scrittura fallisce, il redirect
 * parte lo stesso: si perde il conteggio, non la persona.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

import { risolviLinkBreve } from '@/lib/link-brevi';

export const dynamic = 'force-dynamic';

type KvLike = {
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
};

export async function GET(req: NextRequest, ctx: { params: Promise<{ codice: string }> }) {
  const { codice } = await ctx.params;
  const { destinazione, conosciuto } = risolviLinkBreve(codice ?? '');

  // Segnare il passaggio non deve poter ritardare il redirect: se qualcosa va
  // storto qui, la persona arriva comunque al sondaggio.
  try {
    const { env } = getCloudflareContext();
    const kv = (env as unknown as { CONSENT_STATS?: KvLike }).CONSENT_STATS;
    if (kv) {
      const paese = (req.headers.get('cf-ipcountry') || 'XX').slice(0, 2).toUpperCase();
      const giorno = new Date().toISOString().slice(0, 10);
      const etichetta = conosciuto
        ? codice.trim().toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 40)
        : 'sconosciuto';
      // 400 giorni, come i conteggi del banner: un anno di confronti e poi si
      // pulisce da solo senza consumare la quota del piano Free.
      await kv.put(`l:${giorno}:${paese}:${etichetta}:${crypto.randomUUID()}`, '', {
        expirationTtl: 400 * 24 * 60 * 60,
      });
    }
  } catch {
    // KV assente o quota esaurita: si prosegue.
  }

  const url = new URL(destinazione, req.nextUrl.origin);
  const risposta = NextResponse.redirect(url, 302);
  // Senza questo Cloudflare potrebbe servire il redirect dalla cache e le
  // aperture successive non arriverebbero mai qui.
  risposta.headers.set('Cache-Control', 'no-store, must-revalidate');
  risposta.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return risposta;
}
