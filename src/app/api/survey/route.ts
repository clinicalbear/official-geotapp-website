/**
 * Riceve l'invio del sondaggio anonimo "Prova del lavoro" dal form sul sito
 * e lo inoltra al CRM (/api/lead/survey) che lo salva in public_survey_responses.
 *
 * Difese: rate-limit best-effort + honeypot `hp`. Nessun dato obbligatorio
 * oltre a `side` (A/B). Il paese arriva da Cloudflare cf-ipcountry.
 * L'endpoint CRM è derivato da CRM_LEAD_ENDPOINT (stesso host), auth via CRM_SYNC_SECRET.
 */
import { NextRequest, NextResponse } from 'next/server';
import { rateLimitOk, clientIp } from '@/lib/rate-limit';

function surveyEndpoint(): string | null {
  const base = process.env.CRM_LEAD_ENDPOINT;
  if (!base) return null;
  try {
    return new URL('/api/lead/survey', base).toString();
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  if (!rateLimitOk(`survey:${clientIp(req)}`, 5, 60_000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  // Honeypot: campo nascosto valorizzato = bot. Scarta in silenzio (finto 200).
  if (typeof body.hp === 'string' && body.hp.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const side = typeof body.side === 'string' ? body.side.trim() : '';
  if (side !== 'A' && side !== 'B') {
    return NextResponse.json({ error: 'Invalid side' }, { status: 400 });
  }

  const endpoint = surveyEndpoint();
  const secret = process.env.CRM_SYNC_SECRET;
  if (!endpoint || !secret) {
    console.error('[survey] CRM_LEAD_ENDPOINT / CRM_SYNC_SECRET mancanti');
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
  }

  const country = req.headers.get('cf-ipcountry') ?? undefined;

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-sync-secret': secret },
      body: JSON.stringify({
        locale: body.locale,
        country,
        sector: body.sector,
        side,
        a1: body.a1,
        a2: body.a2,
        a3: body.a3,
        b1: body.b1,
        b2: body.b2,
        b3: body.b3,
        email: body.email,
      }),
    });
    if (!res.ok) {
      const t = await res.text().catch(() => '');
      console.error('[survey] CRM notify failed:', res.status, t.slice(0, 200));
      return NextResponse.json({ error: 'Upstream error' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('[survey] forward failed', e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
