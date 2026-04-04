# geotapp-site

Sito marketing GeoTapp — Next.js 16 + Tailwind, deploy Cloudflare Workers via OpenNext.

## Stack & Deploy

- **Runtime**: Cloudflare Workers (NON Firebase). `firebase.json` non esiste.
- **Build**: `opennextjs-cloudflare build` → `node scripts/inject-scheduled-handler.mjs` → `wrangler deploy -c wrangler.jsonc`
- **Comandi utili**:
  - `npm run dev` — sviluppo locale
  - `npm run build` — build produzione (opennextjs-cloudflare)
  - `npm run deploy` — build + inject scheduled handler + deploy + ping motori di ricerca
  - `npm run ping` — solo ping post-deploy (Google sitemap, Bing, IndexNow)
- **Compatibilità Cloudflare Workers**: `nodejs_compat` flag attivo. NON usare `readFileSync`/`fs` a runtime — le chiavi PEM e qualsiasi asset devono essere inline come stringhe letterali.
- **Middleware locale-aware**: rileva locale da pathname → cookie → `cf-ipcountry` → `x-vercel-ip-country` → `geo.country` → Accept-Language. NON usare `x-country` (rimosso: era spoofable pubblicamente).

## Struttura i18n

- **Locali supportati**: `it` (default), `en`, `de`, `fr`, `es`, `pt`, `nl`, `ru`, `da`, `sv`, `nb`
- **Config**: `src/lib/i18n/config.ts` — `SUPPORTED_LOCALES`, `LOCALE_LABELS`, `COUNTRY_TO_LOCALE`
- **Routing**: `src/app/[locale]/` — ogni route ha `generateStaticParams` via `@/lib/i18n/static-params`
- **Dizionari**: `src/dictionaries/{locale}.json` — chiavi usate via `getDictionary(locale)`

## Security Headers (middleware.ts)

Aggiunti in `applySecurityHeaders()`, applicati a tutti i path non-blog (`NextResponse.next()`):

```
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), camera=(), microphone=()
Cross-Origin-Embedder-Policy: credentialless
```

**NON** usare `require-corp` per COEP: Google Maps embed su `/contact` non emette `Cross-Origin-Resource-Policy` headers e verrebbe bloccato. `credentialless` è la scelta corretta per siti con embed cross-origin.

Il blog proxy (`/blog/*`) NON riceve questi header — le risposte WordPress vengono passate as-is.

## SEO — Architettura completa

### `<html lang>` — attributo locale-aware

`src/app/layout.tsx` è un pass-through puro (solo `metadata` export, no html/body). Tutto il rendering html/body è in `src/app/[locale]/layout.tsx` che usa `<html lang={locale}>`.

- Ogni locale page ottiene il corretto `lang` attribute (`lang="es"` per `/es/`, `lang="da"` per `/da/`, ecc.)
- `src/app/en/` è stato eliminato — tutte le route `/en/*` ora passano da `app/[locale]/` con `locale="en"`
- Pagine root-level (`chi-siamo/`, `contact/`, ecc.) sono sempre redirect da middleware e non vengono servite direttamente

### Titoli e metadati per-locale

- `src/app/layout.tsx`: `title.template: '%s | GeoTapp'` (fallback per pagine senza titolo proprio).
- `src/app/[locale]/page.tsx` (home): usa `title: { absolute: meta.title }` — il titolo include già "GeoTapp" all'inizio, `absolute` bypassa il template per evitare "GeoTapp | ... | GeoTapp".
- Settori pages (`pulizie`, `installatori`, `sicurezza`): stessa logica `title: { absolute: content.meta.title }` — i titoli nei content file terminano con `| GeoTapp`.
- `src/app/[locale]/pricing/page.tsx`: ha `generateMetadata` con `title: { absolute: ... }` e `description` per tutti i 11 locali via `PRICING_META`.
- `src/app/[locale]/settori/page.tsx`: ha `generateMetadata` con `title: { absolute: ... }` e `description` per tutti i 11 locali via `SETTORI_META`.
- **Regola generale**: se il titolo include già il brand name, usare `title: { absolute: '...' }`. Se è solo il nome della pagina (es. "Pricing"), usare stringa plain e il template aggiunge `| GeoTapp`.

### Root strategy (`/`)

`/` NON è una pagina indicizzabile — il middleware fa sempre 308 redirect verso `/{geo-locale}/` (es. `/it/` per utenti italiani). Questo significa:

- `x-default` NON può mai essere `/` — è un redirect URL
- `x-default` corretto: `https://geotapp.com/en/` o `https://geotapp.com/en/{path}/`
- La homepage locale è gestita da `app/[locale]/page.tsx` con locale="en" per il default

### x-default hreflang

**IMPORTANTE**: `x-default` deve sempre puntare a una pagina reale, NON a un URL che fa redirect.

- ✅ Corretto: `https://geotapp.com/en/settori/pulizie/` (pagina reale)
- ✅ Corretto: `https://geotapp.com/en/` (homepage inglese — pagina reale)
- ❌ Sbagliato: `https://geotapp.com/settori/pulizie/` (308 redirect a `/it/`)
- ❌ Sbagliato: `https://geotapp.com/` (308 redirect al locale geo-risolto)

Usare sempre `buildLocaleAlternates(locale, path)` da `src/lib/i18n/locale-metadata.ts` — gestisce automaticamente `x-default → /en/{path}`.

### Trailing slash

`next.config.mjs` ha `trailingSlash: true`. La regola è:

**`localizePath(path, locale)` in `src/lib/i18n/locale-routing.ts`** emette sempre trailing slash (`/it/contact/`, non `/it/contact`). Questo elimina il 2-hop chain: middleware 308 → URL-senza-slash → Next.js 308 → URL-con-slash. Con il fix, il redirect è sempre 1 hop.

**`buildLocaleAlternates(locale, path)`** riceve il path CON trailing slash: `'/contact/'` non `'/contact'`. Senza trailing slash i canonical e gli hreflang puntano a URL che causano 308 redirect → crawl budget sprecato.

Eccezione: `app/[locale]/page.tsx` (homepage) usa URL assolute costruite manualmente con trailing slash — `BASE_URL + '/' + locale + '/'`.

Le settori pages (`pulizie`, `installatori`, `sicurezza`) usano `buildLocaleAlternates`. NON reimplementare la mappa `languages` manualmente.

### JSON-LD (Schema.org)

| File | Schema | Note |
|---|---|---|
| `src/app/layout.tsx` | `Organization` (`@id: /#organization`) | Entità canonica brand |
| `src/app/layout.tsx` | `SoftwareApplication` (`@id: /#software`) | Entità canonica prodotto (root, IT) |
| `src/app/[locale]/layout.tsx` | `SoftwareApplication` (`@id: /{locale}/`, `sameAs: /#software`) | Entità locale, collega alla canonica |
| `src/app/[locale]/settori/pulizie/page.tsx` | `FAQPage` (solo `it`) | 3 domande con `@id` univoci |

**Regole KG**:
- Ogni entità SoftwareApplication/Organization DEVE avere `@id` — senza `@id` Google crea un'entità anonima nel Knowledge Graph.
- Le entità locale-specifiche DEVONO avere `sameAs` che punta all'entità canonica root.
- NON aggiungere `aggregateRating` senza recensioni reali verificabili.

### Sitemap (sharded)

`src/app/sitemap.ts` usa `generateSitemaps()` — genera 12 shard:
- Shard 0-10: un locale ciascuno (19 URL × locale), con hreflang alternates
- Shard 11: post WordPress (blog.geotapp.com REST API), deduplicati per URL

URL generate da Next.js:
- `/sitemap.xml` — sitemap index (auto-generato)
- `/sitemap/0.xml` … `/sitemap/11.xml` — shard individuali

**Trailing slash**: tutti i path in `ROUTES[]` terminano con `/` — obbligatorio con `trailingSlash: true` in `next.config.mjs`. URL senza trailing slash causano redirect 308 in sitemap = spreco crawl budget.

**Cache sitemap** (`next.config.mjs`):
```
/sitemap.xml        → Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400
/sitemap/:id        → stessa policy (shards)
/robots.txt         → stessa policy
```
Regole posizionate DOPO la regola HTML generale — last match wins in Next.js headers().

**x-default in sitemap**: `buildAlternates()` in `sitemap.ts` usa `${BASE_URL}/en${path}` (coerente con `locale-metadata.ts`).

### Worker Pre-warming (Cron Trigger)

**wrangler.jsonc**: `"triggers": { "crons": ["*/15 * * * *"] }`

**scripts/inject-scheduled-handler.mjs**: script post-build che inietta il `scheduled` handler in `.open-next/worker.js`. Necessario perché opennextjs/cloudflare 1.x non espone hook nativi per eventi `scheduled`.

Il deploy script chiama lo script in sequenza: `build → inject → wrangler deploy`. Lo script è idempotente (skip se già iniettato). Se il pattern del worker.js cambia dopo un upgrade opennextjs, lo script fallisce con exit 1 bloccando il deploy.

Money pages warmup (9 URL): `/`, `/it/`, `/it/products/geotapp-flow/`, `/it/products/geotapp-app/`, `/it/pricing/`, `/it/settori/`, `/it/settori/pulizie/`, `/it/settori/installatori/`, `/it/settori/sicurezza/`.

### Cache-Control (next.config.mjs)

```
/_next/static/(*) → max-age=31536000, immutable
/*.{png,jpg,...}   → max-age=86400, stale-while-revalidate=604800
/(tutto il resto)  → max-age=3600, s-maxage=86400, stale-while-revalidate=86400
/sitemap.xml       → s-maxage=3600, stale-while-revalidate=86400
/sitemap/:id       → s-maxage=3600, stale-while-revalidate=86400
/robots.txt        → s-maxage=3600, stale-while-revalidate=86400
```

### Performance (layout.tsx `<head>`)

- `preconnect`: `fonts.googleapis.com`, `fonts.gstatic.com` (crossOrigin), `js.stripe.com`
- `dns-prefetch`: `api.stripe.com`, `googletagmanager.com`, `google-analytics.com`, `pagead2.googlesyndication.com`, `app.geotapp.com`, `blog.geotapp.com`

### Ping automation post-deploy

- `scripts/ping-search-engines.mjs` — chiamato automaticamente da `npm run deploy`
- Invia URL prioritari a **IndexNow API** (Google e Bing sitemap ping deprecati dal 2023)

## Blog WordPress (proxy)

- Servito su `geotapp.com/blog/` tramite middleware proxy verso `blog.geotapp.com`
- Plugin SEO: **Zenith SEO** (proprietario, NON Yoast) — `wp-content/plugins/zenith-seo/`
- SFTP accesso: `su325938@access-5018990701.webspace-host.com` porta 22
- Canonical blog index: usa `get_pagenum_link(1)` in `class-head-renderer.php` — NON `get_permalink()` (bug: restituisce l'URL del primo post del loop)
- La homepage WordPress ha `body.home.blog` (is_front_page() AND is_home() entrambi true) — il fix canonical usa `if (is_home())` senza la condizione `!is_front_page()`

## Verifier (`/api/verify-report`)

- Usa `@geotapp/report-verifier` (package locale `.tgz`)
- NON usare `readFileSync` — CF Workers non supporta `node:fs` a runtime nemmeno con `nodejs_compat`
- Se si aggiorna il package: bumpa sempre la versione e aggiorna `package.json`

## Footer

- Link Blog → `/blog` (interno, NON `https://blog.geotapp.com`)
- Locale switcher: link hard-coded `/it/`, `/en/`... per Googlebot crawlability
- Importa `SUPPORTED_LOCALES` e `LOCALE_LABELS` da `@/lib/i18n/config`

## Homepage Hero (src/app/page.tsx)

- H1 BOFU: "Riduci contestazioni e ore non fatturate del personale sul campo" (IT) — in `dict.landing.hero_title`
- CTA primaria → `/demo/` (via `getLink('/demo')`), testo `dict.landing.hero_cta_primary`
- CTA secondaria → `/settori/` (via `getLink('/settori')`), testo `dict.landing.hero_cta_secondary`
- TrustBlock: 3 icone (ShieldCheck GDPR / MapPin GPS / WifiOff Offline) con chiavi `trust_gdpr*`, `trust_gps*`, `trust_offline*` — presenti in tutti i 11 dizionari

## Pagina Demo (src/app/demo/page.tsx + src/app/[locale]/demo/page.tsx)

- Form 4 campi: Nome, Azienda, Settore (dropdown), Email + Telefono (opzionale)
- Sezione "Cosa vedrai" con 3 card
- FAQ accordion (4 domande)
- Post-submit: banner success con messaggio di follow-up
- Submit via `submitContact()` — stesso endpoint del form di contatto
- Metadati per tutti i 11 locali in `DEMO_META` in `[locale]/demo/page.tsx`
- Sitemap: `/demo/` priority 0.9 aggiunta a `ROUTES[]` in `sitemap.ts`

## Aggiornamenti da eseguire manualmente

- `sameAs` in Organization JSON-LD (`src/app/layout.tsx`): aggiungere URL LinkedIn verificato quando disponibile
- `aggregateRating`: aggiungere solo quando si hanno dati recensioni reali (G2, Capterra o simili)
- Blog shard resilienza WP outage: considerare `throw` su `fetchWpPostsForLocale()` che ritorna array vuoto — evita che CF sovrascriva cache con sitemap blog vuota durante downtime WP
- Set-Cookie condizionale: impostare `geotapp_locale` cookie solo quando cambia locale (non ad ogni request) — sblocca Cloudflare CDN cache sulle pagine HTML
- Immagini: `images: { unoptimized: true }` disabilita WebP/AVIF — configurare Cloudflare Images come loader esterno per ottimizzazione formato
