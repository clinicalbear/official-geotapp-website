

import { NextRequest, NextResponse } from 'next/server';
import { rateLimitOk, clientIp } from '@/lib/rate-limit';

const INDEXNOW_KEY = 'cb109f9fd30e4cf6bff9dfbc9c5b1358';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const HOST = 'geotapp.com';

export async function GET() {
  return NextResponse.json({
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    endpoint: INDEXNOW_ENDPOINT,
  });
}

export async function POST(request: NextRequest) {
  // Anti-abuse: cap submissions per IP so nobody can flood IndexNow with
  // garbage URLs attributed to geotapp.com.
  if (!rateLimitOk(`indexnow:${clientIp(request)}`, 5, 60_000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }
  const body = await request.json().catch(() => null);
  const urls = Array.isArray(body?.urls)
    ? body.urls.filter(
        (entry: unknown): entry is string => typeof entry === 'string',
      )
    : [];

  if (urls.length === 0) {
    return NextResponse.json(
      { error: 'Provide a non-empty urls array.' },
      { status: 400 },
    );
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  });

  return NextResponse.json(
    {
      ok: response.ok,
      status: response.status,
      submitted: urls.length,
    },
    { status: response.ok ? 200 : 502 },
  );
}
