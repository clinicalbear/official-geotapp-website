/**
 * fix-asset-headers.mjs
 *
 * OpenNext generates .open-next/assets/_headers with max-age=0 for ALL files.
 * This overrides the next.config headers() rules, which never apply to static
 * assets served directly by the Cloudflare ASSETS binding.
 *
 * Fix: prepend a specific rule for /_next/static/* that sets immutable caching,
 * so CSS/JS chunks with content-addressed hashes are properly cached in browsers.
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const headersFile = join(__dirname, '..', '.open-next', 'assets', '_headers');

const immutableRule = `/_next/static/*
  Cache-Control: public, max-age=31536000, immutable

`;

const current = readFileSync(headersFile, 'utf8');

// Avoid duplicate injection if script is run twice
if (!current.includes('max-age=31536000')) {
  writeFileSync(headersFile, immutableRule + current);
  console.log('[fix-asset-headers] Injected immutable cache rule for /_next/static/*');
} else {
  console.log('[fix-asset-headers] Already patched, skipping.');
}
