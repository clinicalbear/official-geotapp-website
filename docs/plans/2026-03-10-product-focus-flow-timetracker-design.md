# Product Focus Design

**Date:** 2026-03-10

## Goal

Rendere `geotapp-site` focalizzato solo su GeoTapp Flow e GeoTapp TimeTracker, rimuovendo FortyX e Zenith SEO dalla visibilità pubblica e disattivando le relative route prodotto.

## Scope

- Rimuovere FortyX e Zenith SEO da:
  - navbar desktop/mobile
  - homepage
  - pricing
- Disattivare le route:
  - `/products/fortyx`
  - `/products/zenith-seo`
  - `/en/products/fortyx`
  - `/en/products/zenith-seo`
- Redirect verso:
  - `/pricing`
  - `/en/pricing`
- Riallineare testi generali e metadata dove il sito oggi parla ancora della suite ampia.

## Design Decisions

### Public Visibility

- Il sito pubblico promuovera solo due linee prodotto: Flow e TimeTracker.
- Non lasciamo link residui in menu, homepage o pricing che portino a prodotti disattivati.

### Route Handling

- Le pagine prodotto di FortyX e Zenith non devono produrre 404.
- Useremo pagine disattivate che reindirizzano a `pricing`, mantenendo un percorso commerciale sensato anche per vecchi link o backlink.
- Poiche `geotapp-site` usa `output: export`, la soluzione va verificata in build reale.

### Messaging

- Aggiorniamo copy e metadata troppo larghi per evitare incoerenza:
  - homepage hero subtitle
  - layout description
- Non tocchiamo contenuti storici non direttamente esposti da questa modifica, come blog o asset interni, salvo blocchi build o routing.

## Verification

- Test minimo su sorgente:
  - assenza di link pubblici a FortyX/Zenith in navbar, homepage e pricing
  - route prodotto convertite in redirect verso pricing
- Build completa con `npm run build`
