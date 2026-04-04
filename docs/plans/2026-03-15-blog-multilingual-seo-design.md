# Blog Multilingual SEO Automation Design

**Date:** 2026-03-15

## Goal
Automatizzare la traduzione di tutti gli articoli WordPress passati e futuri in tutte le lingue supportate (`it,en,de,fr,es,pt,nl,sv,da,nb,ru`) mantenendo qualità SEO per SERP su dominio pubblico `https://geotapp.com/blog`.

## Context
- Origin WordPress: `https://blog.geotapp.com`
- Frontend pubblico via reverse proxy: `https://geotapp.com/blog`
- Stack locale geotapp-site: middleware Cloudflare/OpenNext già attivo su `/blog/*`

## Chosen Architecture (A)
1. Polylang come source of truth delle relazioni tra traduzioni (post e lingua).
2. Plugin custom WordPress `GeoTapp Multilingual SEO Automation`:
- Hook publish/update per enqueue traduzioni automatiche.
- Queue processor WP-Cron per evitare timeout in admin.
- Backfill completo per articoli storici.
- Provider DeepL per traduzione contenuti (`title`, `excerpt`, `content`).
3. SEO guardrails nel plugin:
- `hreflang` per ogni traduzione + `x-default`.
- Canonical normalizzato verso URL pubbliche.
- `X-Robots-Tag: noindex` e `robots.txt Disallow` su host origin `blog.geotapp.com`.
4. Sitemap Next aggiornata:
- Fetch post con `lang` per tutte le locale.
- Usa `link` restituito da WP per URL canonica finale.
- De-duplica URL per evitare collisioni SERP.

## SEO/SERP Guarantees
- Una sola versione indicizzabile per lingua su dominio pubblico.
- Origin host protetto da noindex per evitare duplicazione dominio.
- Alternates/hreflang espliciti per cluster internazionale.
- Sitemap coerente con URL reali tradotte.

## Operational Flow
1. Admin attiva Polylang + plugin custom.
2. Inserisce DeepL API key nelle impostazioni plugin.
3. Esegue `Backfill` una volta per storico.
4. Nuovi post in lingua sorgente vengono tradotti automaticamente in coda.
5. WP-Cron processa batch regolari; opzionale run manuale via UI o WP-CLI.

## Risks & Mitigations
- DeepL key assente/non valida -> queue non processata (mitigazione: notice admin + run manuale).
- Traduzioni aggiornate manualmente potrebbero essere sovrascritte se `sync_updates` attivo (mitigazione: default OFF).
- Tassonomie non tradotte in Polylang -> fallback al termine originale.
