import { NextRequest, NextResponse } from 'next/server';

// Gateway commenti del blog (headless).
// Il browser invia qui; questo endpoint valida, filtra lo spam e poi crea il
// commento su WordPress con una chiamata AUTENTICATA server-to-server.
// L'API di WordPress NON è esposta alla scrittura anonima: la credenziale
// resta solo lato server e ogni commento nasce in stato "hold" (moderazione).

const WP = 'https://blog.geotapp.com';
const WP_HEADERS: Record<string, string> = {
  host: 'blog.geotapp.com',
  'x-geotapp-proxy': '1',
  'x-forwarded-proto': 'https',
};

const MAX_NAME = 80;
const MIN_COMMENT = 3;
const MAX_COMMENT = 3000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  // base64 di "utente:application-password" di un account WordPress che può moderare.
  const auth = process.env.WP_COMMENTS_AUTH;
  if (!auth) {
    return NextResponse.json({ error: 'server_misconfig' }, { status: 500 });
  }

  let postId: number;
  let name = '';
  let email = '';
  let content = '';
  let consent = false;
  let honeypot = '';
  try {
    const body = await req.json();
    postId = Number(body.post);
    name = String(body.author_name ?? '').trim();
    email = String(body.author_email ?? '').trim().toLowerCase();
    content = String(body.content ?? '').trim();
    consent = body.consent === true;
    honeypot = String(body.gt_hp ?? '').trim();
  } catch {
    return NextResponse.json({ error: 'bad_request' }, { status: 400 });
  }

  // Honeypot: un umano lascia "gt_hp" vuoto. Se è pieno è un bot.
  // Rispondiamo ok per non dargli un segnale su cui adattarsi.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!Number.isInteger(postId) || postId <= 0) {
    return NextResponse.json({ error: 'invalid_post' }, { status: 400 });
  }
  if (!name || name.length > MAX_NAME) {
    return NextResponse.json({ error: 'invalid_name' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
  }
  if (content.length < MIN_COMMENT || content.length > MAX_COMMENT) {
    return NextResponse.json({ error: 'invalid_content' }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ error: 'consent_required' }, { status: 400 });
  }

  try {
    const res = await fetch(`${WP}/wp-json/wp/v2/comments`, {
      method: 'POST',
      headers: {
        ...WP_HEADERS,
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post: postId,
        author_name: name,
        author_email: email,
        content,
        status: 'hold', // sempre in moderazione, nulla va online senza approvazione
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error('WP comment create failed:', res.status, err);
      return NextResponse.json({ error: 'submit_failed' }, { status: 502 });
    }
  } catch (e) {
    console.error('WP comment create exception:', e);
    return NextResponse.json({ error: 'submit_failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
