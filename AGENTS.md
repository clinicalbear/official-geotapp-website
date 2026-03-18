# geotapp-site

Sito marketing GeoTapp — Next.js 16 + Tailwind, deploy Cloudflare Workers via OpenNext.

## Stack & Deploy

- **Runtime**: Cloudflare Workers (NON Firebase). `firebase.json` non esiste.
- **Build**: `opennextjs-cloudflare build` → `wrangler deploy -c wrangler.jsonc`
- **Comandi utili**:
  - `npm run dev` — sviluppo locale
  - `npm run build` — build produzione
  - `npm run deploy` — build + deploy + ping motori di ricerca
  - `npm run ping` — solo ping post-deploy (Google sitemap, Bing, IndexNow)
- **Compatibilità Cloudflare Workers**: `nodejs_compat` flag attivo. NON usare `readFileSync`/`fs` a runtime — le chiavi PEM e qualsiasi asset devono essere inline come stringhe letterali (vedi `geotapp-report-verifier/src/keys/index.ts`).
- **Middleware locale-aware**: il middleware rileva locale da pathname → cookie → paese CF → Accept-Language. Path con prefisso locale (`/it/`, `/en/`) passano senza redirect.

## Struttura i18n

- **Locali supportati**: `it` (default), `en`, `de`, `fr`, `es`, `pt`, `nl`, `ru`, `da`, `sv`, `nb`
- **Config**: `src/lib/i18n/config.ts` — `SUPPORTED_LOCALES`, `LOCALE_LABELS`, `COUNTRY_TO_LOCALE`
- **Routing**: `src/app/[locale]/` — ogni route ha `generateStaticParams` via `@/lib/i18n/static-params`
- **Dizionari**: `src/dictionaries/{locale}.json` — chiavi usate via `getDictionary(locale)`

## SEO — Architettura completa (da v0.2.0+)

### Titoli e metadati per-locale
- `src/app/[locale]/page.tsx` esporta `generateMetadata` con `title`, `description`, `alternates.languages` (hreflang) per tutti e 11 i locali.
- Titolo IT: `"GeoTapp | La piattaforma che rende il lavoro verificabile"` — keyword SEO anchor.
- `src/app/layout.tsx` ha titolo di fallback con `template: '%s | GeoTapp'`.

### H1 per-locale
- `src/dictionaries/{locale}.json` → `landing.hero_title` = variante locale di "Rendi il lavoro verificabile".
- H2 money pages: `home_sections.core.title` (turni/mobilità) e `home_sections.footer_cta.title` (piani SaaS).

### JSON-LD (Schema.org)
| File | Schema | Scope |
|---|---|---|
| `src/app/layout.tsx` | `Organization` (`@id: /#organization`) + `SoftwareApplication` (root) | Tutte le pagine |
| `src/app/[locale]/layout.tsx` | `SoftwareApplication` con `@id` e `url` per-locale, description e featureList tradotti | Solo pagine locale |

- Organization include: `telephone: +393520140978`, `email: info@geotapp.com`, `ContactPoint`, `sameAs: []` (aggiungere LinkedIn verificato).
- `featureList` include sempre `"Verificabilità del lavoro tramite geolocalizzazione"` (e equivalente per lingua).
- NON aggiungere `aggregateRating` senza recensioni reali verificabili.

### Sitemap
- `src/app/sitemap.ts` — dinamica, TTL 1h (`revalidate: 3600`)
- **317 URL totali**, **198 con `xhtml:link rel="alternate"`** (hreflang per tutti i locali + `x-default`)
- Blog WordPress: auto-popolato via WP REST API (`blog.geotapp.com/?rest_route=/wp/v2/posts`). Articoli futuri appaiono automaticamente al prossimo refresh.
- `/success` ESCLUSA dalla sitemap (pagina Stripe post-pagamento, noindex).
- `localize: false` solo su routes che non hanno varianti locale (es. `/blog` index).

### hreflang — coerenza HTML ↔ sitemap
- Tag `<link rel="alternate" hreflang="...">` generati da `metadata.alternates.languages` in `[locale]/page.tsx`.
- Tag `<xhtml:link rel="alternate">` nella sitemap via `alternates.languages` in `sitemap.ts`.
- I due set DEVONO essere coerenti — se si aggiunge un locale, aggiornare entrambi.

### noindex
- `src/app/[locale]/success/page.tsx`: `robots: { index: false, follow: false }` — pagina Stripe thank-you.

### Cache-Control (next.config.mjs)
- Static assets (`/_next/static/`): `max-age=31536000, immutable`
- Immagini/font: `max-age=86400, stale-while-revalidate=604800`
- HTML pages: `max-age=3600, s-maxage=86400, stale-while-revalidate=86400`

### Performance (layout.tsx `<head>`)
- `preconnect`: `fonts.googleapis.com`, `fonts.gstatic.com` (crossOrigin), `js.stripe.com`
- `dns-prefetch`: `api.stripe.com`, `googletagmanager.com`, `google-analytics.com`, `pagead2.googlesyndication.com`, `app.geotapp.com`, `blog.geotapp.com`

### Ping automation post-deploy
- `scripts/ping-search-engines.mjs` — chiamato automaticamente da `npm run deploy`
- Invia 32 URL prioritari (home locale × 11 + pricing + products) a **IndexNow API**
- Google e Bing sitemap ping sono deprecati (2023) — IndexNow rimane il canale attivo

## Verifier (`/api/verify-report`)

- Usa `@geotapp/report-verifier` (package locale `.tgz`)
- **ATTENZIONE**: il package non deve usare `readFileSync` — Cloudflare Workers non supporta `node:fs` a runtime nemmeno con `nodejs_compat`. Le chiavi PEM sono inline come stringhe in `geotapp-report-verifier/src/keys/index.ts`.
- Se si aggiorna il package con stesso nome file `.tgz`, npm usa la cache — **bumpa sempre la versione** (es. `0.2.1 → 0.2.2`) e aggiorna il riferimento in `package.json`.
- Report generati prima di Flow v2.0 ECDSA (prima dell'implementazione firma) restituiscono "Legacy — Leggibile, senza sigillo forte" — comportamento atteso.

## Footer
- Link Blog → `/blog` (interno, NON `https://blog.geotapp.com`)
- Locale switcher: link hard-coded `/it/`, `/en/`... per Googlebot crawlability
- Importa `SUPPORTED_LOCALES` e `LOCALE_LABELS` da `@/lib/i18n/config`

## Blog
- Già servito a `geotapp.com/blog/` via Next.js (`src/app/blog/page.tsx`, `src/app/[locale]/blog/`)
- Chiama WP REST API su `blog.geotapp.com` — nessun reverse proxy Cloudflare aggiuntivo necessario
- Autorità del dominio non si disperde su sottodomini

## Aggiornamenti da eseguire manualmente
- `sameAs` in Organization JSON-LD (`src/app/layout.tsx`): aggiungere URL LinkedIn verificato quando disponibile
- `aggregateRating`: aggiungere solo quando si hanno dati recensioni reali (G2, Capterra o simili)
