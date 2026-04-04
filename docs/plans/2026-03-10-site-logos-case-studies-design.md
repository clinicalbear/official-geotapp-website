# Site Logos And Case Studies Design

**Date:** 2026-03-10

## Goal

Aggiornare `geotapp-site` con i nuovi loghi ufficiali di GeoTapp Flow e GeoTapp TimeTracker e riallineare i case studies `installatori` e `sicurezza` allo stato reale del prodotto oggi.

## Scope

- Usare gli allegati approvati dall'utente come nuovi asset:
  - `/home/mike/Scaricati/logoFlow.png`
  - `/home/mike/Scaricati/logoTT.png`
- Pubblicare i nuovi asset in `geotapp-site/public/`.
- Aggiornare i principali punti del sito che mostrano i loghi Flow/TimeTracker:
  - pricing
  - pagina prodotto Flow
  - pagina prodotto TimeTracker
- Aggiornare i case studies `installatori` e `sicurezza` per includere:
  - app native Android/iOS in rilascio
  - coordinamento ufficio-campo tra Flow e TimeTracker
  - timbrature verificabili con GPS start/end
  - prove lavoro, note e documentazione operativa
  - riduzione delle discussioni interne e con il cliente
  - maggiore difendibilita e veridicita del lavoro svolto

## Design Decisions

### Logos

- Non sostituiremo i vecchi file binari esistenti con rename impliciti.
- Introdurremo `public/logoFlow.png` e `public/logoTT.png`.
- I componenti e le pagine che rappresentano esplicitamente Flow o TimeTracker useranno i nuovi asset con path espliciti.
- I punti generici corporate (`LogoGeoTapp.png`) resteranno invariati per evitare di confondere brand prodotto con brand aziendale.

### Case Studies

- `installatori` e `sicurezza` verranno portati a un taglio piu concreto e meno astratto.
- Il contenuto mettera in evidenza come GeoTapp evita contestazioni grazie a:
  - eventi temporali verificabili
  - prove operative raccolte sul campo
  - storico commessa/servizio consultabile dall'ufficio
  - materiali piu chiari da presentare al cliente
- Il testo evitera claim assoluti di tipo legale o certificatorio; parlera invece di evidenze operative, tracciabilita e maggiore affidabilita.

## Verification

- Test minimo sul sorgente:
  - i riferimenti principali ai loghi devono puntare ai nuovi asset
  - i case studies devono includere i nuovi messaggi chiave
- Build completa con `npm run build`
