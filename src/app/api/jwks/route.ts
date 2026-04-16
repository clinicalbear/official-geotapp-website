import { createPublicKey } from 'crypto';
import { NextResponse } from 'next/server';

// Public key matching GEOTAPP_SEAL_PRIVATE_KEY deployed in Cloud Functions.
// Key ID must match SEAL_KEY_ID in geotapp-flow/functions/index.js and
// geotapp-report-verifier/src/keys/index.ts.
// When rotating keys: add the new entry to `keys[]` below, keeping old entries
// for backward compatibility with already-sealed reports.
const KNOWN_KEYS: Array<{ kid: string; pem: string }> = [
  {
    kid: 'geotapp-seal-2026-v1',
    pem: `-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5BKTkgTBtzLKQAlR679xsgPMbIQe
LNmrFIBX8cXgPYWilkbIuy0+s+8Kts7r20MPs8ZhOnJjE2AKpVTgykv45Q==
-----END PUBLIC KEY-----`,
  },
];

export const dynamic = 'force-dynamic';

export async function GET() {
  const keys = KNOWN_KEYS.map(({ kid, pem }) => {
    const keyObject = createPublicKey(pem);
    const jwk = keyObject.export({ format: 'jwk' }) as Record<string, unknown>;
    return {
      ...jwk,
      kid,
      use: 'sig',
      alg: 'ES256',
    };
  });

  return NextResponse.json(
    { keys },
    {
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        'Content-Type': 'application/json',
      },
    },
  );
}
