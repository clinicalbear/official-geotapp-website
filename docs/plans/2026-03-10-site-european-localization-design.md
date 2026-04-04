# Site European Localization Design

**Date:** 2026-03-10

## Goal

Estendere `geotapp-site` alle stesse lingue gia supportate da `geotapp-flow`, con selezione lingua automatica basata su geolocalizzazione alla prima visita e preferenza utente persistente che ha sempre priorita. Nello stesso intervento vanno aggiornati i testi delle pagine prodotto `GeoTapp Flow` e `GeoTapp TimeTracker` per riflettere le funzioni reali oggi disponibili.

## Scope

- Lingue supportate:
  - `it`
  - `en`
  - `fr`
  - `de`
  - `es`
  - `pt`
  - `nl`
  - `sv`
  - `da`
  - `nb`
  - `ru`
- Sito pubblico completo:
  - homepage
  - pricing
  - pricing bundle
  - pagine prodotto
  - settori
  - contact
  - chi-siamo
  - guida
  - download
  - blog statico
  - login
  - success
  - privacy
  - terms
- Rilevamento lingua:
  - cookie preferenza utente
  - geolocalizzazione paese
  - `Accept-Language`
  - fallback finale
- Refresh contenuti:
  - pagina `GeoTapp Flow`
  - pagina `GeoTapp TimeTracker`

## Current State

- Il sito supporta oggi solo `it` e `en`.
- La root `/` serve il contenuto italiano e `/en` l'inglese.
- `src/middleware.ts` forza tutto cio che non e Italia verso `/en`.
- Molti componenti leggono la lingua con logica rigida `pathname.startsWith('/en')`.
- Il deploy attuale usa `output: 'export'` con pubblicazione della cartella `out`, ma nel repository esiste gia anche il setup Cloudflare/OpenNext (`wrangler.jsonc`).

## Design Decisions

### Locale Model

- Uniformare il sito a un modello `/{locale}/...` per tutte le lingue pubbliche.
- La root `/` non diventa una pagina contenutistica definitiva: diventa entrypoint di risoluzione locale.
- La scelta lingua usa questo ordine:
  1. cookie preferenza utente
  2. paese geolocalizzato
  3. `Accept-Language`
  4. fallback `it`
- La preferenza manuale utente, una volta impostata, vince sempre sulle visite successive.

### Country Mapping

- La geolocalizzazione non deve indovinare “la lingua del continente”, ma applicare una mappa paese -> lingua esplicita.
- Esempi minimi:
  - `IT` -> `it`
  - `FR`, `BE`, `LU`, `MC` -> `fr`
  - `DE`, `AT`, `LI` -> `de`
  - `ES` -> `es`
  - `PT` -> `pt`
  - `NL` -> `nl`
  - `SE` -> `sv`
  - `DK` -> `da`
  - `NO` -> `nb`
  - `RU` -> `ru`
- Nei paesi non coperti direttamente, il sistema prova `Accept-Language` e poi fallback `en` o `it` secondo la regola implementata.

### Deployment Model

- Per rispettare geolocalizzazione, cookie e redirect lato edge, `geotapp-site` non puo restare sul solo `output: export`.
- Il deploy va riallineato al runtime Cloudflare/OpenNext gia presente nel repo.
- Il middleware attuale va evoluto a logica locale-aware compatibile con il runtime Cloudflare e con la futura convenzione `proxy` di Next.

### Content Strategy

- I testi statici vanno portati in un layer i18n centrale, non duplicati in componenti con controlli `isEn`.
- Le due pagine prodotto devono essere riallineate al prodotto reale:
  - `GeoTapp Flow` come centro operativo/gestionale e controllo delle attivita
  - `GeoTapp TimeTracker` come raccolta verificabile del lavoro sul campo
  - interoperabilita Flow + TimeTracker
  - app native Android/iOS in fase di rilascio
  - meno discussioni interne
  - maggiore difendibilita verso il cliente del lavoro svolto

### SEO

- Ogni pagina deve esistere con URL stabile per lingua.
- Aggiungere `lang`, `canonical`, `hreflang` per ogni locale e `x-default`.
- Evitare redirect non deterministici o swap client-side che degradano indicizzazione e first paint.

## Non-Goals

- Nessuna modifica a pricing logic, checkout o catalogo prodotti oltre alla localizzazione del copy.
- Nessun cambio strutturale ai layout delle pagine, salvo l'aggiunta di un selettore lingua e del wiring necessario.
- Nessuna estensione a lingue non gia supportate da `geotapp-flow`.

## Verification

- Test di risoluzione lingua:
  - cookie preferito
  - geolocalizzazione paese
  - `Accept-Language`
  - fallback
- Test routing:
  - `/` reindirizza al locale corretto
  - route con locale rimangono stabili
  - override manuale viene rispettato
- Test contenuti:
  - pagine prodotto Flow/TimeTracker contengono i nuovi claim chiave
  - presenza dei nuovi locale route principali
- Build completa e smoke test browser con simulazione di paesi/lingue.
