// Purge della cache edge Cloudflare di geotapp.com dopo un deploy.
//
// Perché: da quando /blog/* è cachato all'edge (next.config headers), l'HTML
// del blog resta al bordo. Dopo un deploy gli hash di /_next/static cambiano;
// senza purge, un HTML blog cachato punterebbe ad asset vecchi (404 → pagina
// senza stile) per la durata dello s-maxage. Il purge sfratta subito l'HTML
// vecchio, ripristinando l'invariante "HTML sempre coerente col deploy corrente".
//
// Nota (reference_cloudflare_purge): il blog è servito dal Worker Next.js, quindi
// il purge per singola URL NON sfratta (chiave cache diversa). Serve
// purge_everything. Il token OAuth di wrangler NON ha il permesso Purge: si usa
// il token dedicato "GeoTapp WAF (Claude CLI)" nel file qui sotto.

import { readFileSync } from 'node:fs';

const ZONE_ID = '3d039a58aa0e80a71ce223b1565e343c';
const TOKEN_PATH = '/home/mike/.config/geotapp/cloudflare-token';

let token;
try {
  token = readFileSync(TOKEN_PATH, 'utf8').trim();
} catch (e) {
  console.warn(`[cf-purge] token non leggibile (${TOKEN_PATH}): ${e.message}. Salto il purge (il deploy resta valido).`);
  process.exit(0); // non far fallire il deploy per il purge
}

try {
  const res = await fetch(`https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/purge_cache`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ purge_everything: true }),
  });
  const data = await res.json().catch(() => ({}));
  if (res.ok && data.success) {
    console.log('[cf-purge] OK — purge_everything eseguito');
  } else {
    console.warn(`[cf-purge] KO ${res.status}: ${JSON.stringify(data.errors || data)}`);
  }
} catch (e) {
  console.warn(`[cf-purge] errore rete: ${e.message}`);
}
