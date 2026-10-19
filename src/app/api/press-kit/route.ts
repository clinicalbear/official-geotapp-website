/**
 * Richiesta del media kit dalla pagina stampa. Il sito non spedisce mail e non
 * serve il file: valida, frena gli abusi e inoltra al CRM (/api/lead/press-kit),
 * che registra la richiesta e manda il link firmato alla persona, nella lingua scelta.
 *
 * Difese: rate-limit best-effort + honeypot `hp`. Auth verso il CRM: CRM_SYNC_SECRET.
 * L'endpoint CRM e' derivato da CRM_LEAD_ENDPOINT (stesso host), come per /api/survey.
 */
import { NextRequest, NextResponse } from 'next/server';
import { rateLimitOk, clientIp } from '@/lib/rate-limit';
import { PRESS_KIT_LOCALES } from '@/lib/press/kit-locales';

function pressKitEndpoint(): string | null {
  const base = process.env.CRM_LEAD_ENDPOINT;
  if (!base) return null;
  try {
    return new URL('/api/lead/press-kit', base).toString();
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  if (!rateLimitOk(`presskit:${clientIp(req)}`, 5, 60_000)) {
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

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (!email || email.length > 190 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }
  const locale = typeof body.locale === 'string' ? body.locale : '';
  if (!(PRESS_KIT_LOCALES as readonly string[]).includes(locale)) {
    return NextResponse.json({ error: 'Invalid locale' }, { status: 400 });
  }

  const endpoint = pressKitEndpoint();
  const secret = process.env.CRM_SYNC_SECRET;
  if (!endpoint || !secret) {
    console.error('[press-kit] CRM_LEAD_ENDPOINT / CRM_SYNC_SECRET mancanti');
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-sync-secret': secret },
      body: JSON.stringify({
        email,
        locale,
        pressOptIn: body.pressOptIn === true,
        country: req.headers.get('cf-ipcountry') ?? undefined,
      }),
    });
    if (!res.ok) {
      console.error('[press-kit] CRM', res.status, (await res.text().catch(() => '')).slice(0, 200));
      return NextResponse.json({ error: 'Request failed' }, { status: 502 });
    }
  } catch (err) {
    console.error('[press-kit] CRM call error:', err);
    return NextResponse.json({ error: 'Request failed' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
