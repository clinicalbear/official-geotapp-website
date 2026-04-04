# GeoTapp Multilingual SEO Automation

Plugin WordPress per `blog.geotapp.com` (pubblicato su `geotapp.com/blog`) che automatizza:

- traduzione articoli storici (backfill)
- traduzione articoli futuri (hook publish)
- collegamento traduzioni con Polylang
- segnali SEO (hreflang + canonical coerenti col dominio pubblico)
- anti-duplicazione SERP (`X-Robots-Tag: noindex` su host origin `blog.geotapp.com`)

## Prerequisiti

- WordPress con **Polylang** attivo
- chiave API **DeepL**
- permalink WordPress attivi

## Installazione

1. Carica e attiva il plugin.
2. Vai in `Impostazioni > GeoTapp Blog i18n`.
3. Imposta:
   - lingua sorgente (`it`)
   - lingue target CSV (`en,de,fr,es,pt,nl,sv,da,nb,ru`)
   - `DeepL API Key`
4. Salva.
5. Clicca `Avvia backfill completo` per tradurre gli articoli già pubblicati.

## Operatività

- Nuovo articolo pubblicato in lingua sorgente: viene messo in coda e tradotto in batch via WP-Cron.
- Aggiornamento articolo sorgente: opzionale (`sync_updates`).
- Batch size coda configurabile (`queue_batch_size`).

## WP-CLI

- `wp gtmsa backfill` -> mette in coda tutti i post sorgente
- `wp gtmsa run` -> esegue subito un ciclo della coda

## SEO/ SERP

- Genera `hreflang` per tutte le traduzioni collegate.
- Forza canonical coerente con URL pubblico.
- Su `blog.geotapp.com` invia `X-Robots-Tag: noindex, nofollow, noarchive` e `robots.txt` disallow.

