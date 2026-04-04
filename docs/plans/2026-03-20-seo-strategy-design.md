# SEO Strategy Design — geotapp.com
**Data:** 2026-03-20
**Periodo analisi GSC:** 18 dic 2025 – 17 mar 2026
**Autore:** Claude Code

---

## 1. Posizionamento Strategico

### Il problema del mercato attuale
GeoTapp non è un'app di timbratura con geolocalizzazione. È un **sistema che certifica il lavoro sul campo** — una categoria quasi inesistente nel panorama software italiano ed europeo.

La distinzione è fondamentale:

| Competitor (tracking) | GeoTapp (certificazione) |
|---|---|
| "Sappiamo dove sono i tuoi dipendenti" | "Proviamo che il lavoro è stato fatto" |
| Dati GPS grezzi | Report sigillati + GPS + foto + timestamp |
| Uso interno | Valido verso clienti, enti, tribunali |
| Contestabile | Non alterabile |

### Strategia di categoria
Poiché la keyword "certificazione lavoro sul campo" non esiste ancora come ricerca, la strategia è **education-first**:

1. **Intercettare** chi cerca soluzioni tracking/timbratura (competitor keywords)
2. **Educare** sulla differenza tra tracciare e certificare
3. **Convertire** mostrando che solo GeoTapp risolve il problema reale (contestazioni, pagamenti, responsabilità)

---

## 2. Stato Attuale — GSC Data

### Metriche aggregate (90 giorni)
- Clic totali: ~20
- Impressioni totali: ~2.100
- CTR medio: <1%
- Mercato principale: Italia (19/20 clic)
- Trend: +300% impressioni da dic → feb (indicizzazione in crescita)

### Pagine top per impressioni
| URL | Clic | Impressioni | Priorità |
|---|---|---|---|
| blog: geolocalizzazione-dipendenti-gdpr | 14 | 1.093 | ⭐ Potenziare |
| /settori/pulizie/ | 0 | 265 | 🔴 Fix urgente |
| /en/ | 0 | 57 | 🟡 Ottimizzare |
| blog: category/gestione-presenze | 0 | 53 | 🟡 Migliorare |
| /download/ | 0 | 47 | 🟡 Fix trailing slash |

### Query principali con potenziale
| Query | Impressioni | Azione |
|---|---|---|
| app per impresa di pulizie | 174 | Ottimizza /settori/pulizie/ |
| geolocalizzazione gdpr | 34 | Cluster articoli GDPR |
| rilevazione presenze geolocalizzata | 32 | Landing + articolo |
| software per imprese di pulizia | 20 | /settori/pulizie/ |
| app elettricisti / termoidraulici | 8+3 | Nuove landing settori |

---

## 3. Problemi Tecnici Critici

### 3.1 crm.geotapp.com indicizzato (BLOCCANTE)
Il sottodominio CRM appare in GSC (5 impressioni). Non deve essere mai indicizzato.
**Fix:** `X-Robots-Tag: noindex` + `robots.txt` con `Disallow: /` su crm.geotapp.com.

### 3.2 Redirect www → non-www mancante
`www.geotapp.com/servizi`, `www.geotapp.com/chi-siamo` indicizzati separatamente.
**Fix:** Cloudflare Page Rule / Redirect Rule `www.geotapp.com/*` → `geotapp.com/$1` (301).

### 3.3 URL duplicati trailing slash
```
/download  vs  /download/
/en        vs  /en/
/features  vs  /features/
```
**Fix:** Cloudflare Page Rule force trailing slash + verifica middleware Next.js.

### 3.4 Pagine WP di default indicizzate
`/checkout/`, `/cart/`, `/about-us/`, `/services/`, `/pagina-di-esempio/` sul blog.
**Fix:** noindex via Rank Math/Yoast + Disallow in robots.txt del blog WP.

### 3.5 Double slash su articolo blog
`/gestione-delle-squadre-in-mobilita//` — problema canonical WP.
**Fix:** verifica permalink WordPress + canonical tag.

### 3.6 Blog Next.js è uno stub statico
`src/app/blog/page.tsx` ha 3 articoli hardcodati con `slug: '#'`. Non SSR, `'use client'`.
**Fix:** sostituire con fetch SSR da WP REST API — articoli reali, cliccabili, indicizzabili.

---

## 4. Architettura Contenuto — Cluster Model

La strategia di contenuto è organizzata in cluster tematici, ciascuno con una **pillar page** e articoli satelliti che linkano ad essa.

```
CLUSTER 1: Certificazione Lavoro (categoria proprietaria)
├── Pillar: "Cosa significa certificare il lavoro sul campo"
├── "Differenza tra tracciare e certificare"
├── "Come funziona un report sigillato GeoTapp"
└── "Perché le contestazioni si vincono con prove, non con testi"

CLUSTER 2: GDPR & Geolocalizzazione (già avviato — star article)
├── Pillar: geolocalizzazione-dipendenti-gdpr (già esiste, potenziare)
├── "Timbratura geolocalizzata: cosa dice la legge"
├── "Informativa dipendenti GPS: fac-simile"
└── "Garante Privacy e tracciamento lavoratori: guida 2026"

CLUSTER 3: Gestione Squadre Sul Campo
├── Pillar: "Guida completa alla gestione squadre esterne"
├── "Come tracciare le ore senza fogli Excel"
├── "Coordinamento tecnici multi-sede"
└── "Da dove nasce GeoTapp Flow" (già esiste, ottimizzare)

CLUSTER 4: Settori Verticali (una per settore)
├── /settori/pulizie/ → keyword: "software impresa pulizie"
├── /settori/installatori/ → keyword: "app installatori elettricisti"
├── /settori/sicurezza/ → keyword: "gestione guardie sicurezza"
├── /settori/cantieri/ (nuova) → keyword: "gestione cantieri edili"
├── /settori/idraulici/ (nuova) → keyword: "app termoidraulici"
└── /settori/facility/ (nuova) → keyword: "software facility management"

CLUSTER 5: Confronto Competitor (differenziazione)
├── "GeoTapp vs app di timbratura: la differenza che conta"
├── "Perché il GPS da solo non basta come prova"
└── "Chi usa GeoTapp e perché non torna indietro"
```

---

## 5. Schema Struttura Dati (Schema.org)

Da aggiungere su ogni tipologia di pagina:

| Pagina | Schema |
|---|---|
| Homepage | `Organization` + `SoftwareApplication` |
| Prodotti | `SoftwareApplication` + `Offer` + `FAQPage` |
| Settori | `Service` + `FAQPage` + `BreadcrumbList` |
| Blog articoli | `Article` + `BreadcrumbList` |
| Pricing | `PriceSpecification` + `FAQPage` |

---

## 6. Ottimizzazione On-Page Prioritaria

### /settori/pulizie/ — azione immediata
Query target: "app per impresa di pulizie" (174 imp, 0 clic)

- **Title:** `Software per Imprese di Pulizie | GeoTapp — Certifica ogni intervento`
- **H1:** `La piattaforma che certifica il lavoro delle imprese di pulizie`
- **Meta desc:** Differenziare su "prova dell'intervento", non solo "gestione squadre"
- **FAQ Schema:** Aggiungere 5 domande reali (cosa cercano gli utenti in GSC)
- **CTA above fold:** "Richiedi demo gratuita" visibile senza scroll

### Articolo GDPR — potenziamento
`geolocalizzazione-dipendenti-gdpr` — 1.093 imp, 14 clic (pos. stimata 10-20)

- Aggiornare data (segnale freshness)
- Aggiungere `Article` + `FAQPage` Schema
- Aggiungere CTA interna → `/demo/`
- Creare 3 articoli satellite che linkano a questo
- Obiettivo: portare da pos. ~15 a pos. ~5

---

## 7. Internazionalizzazione

### Approccio per mercati prioritari
Il contenuto attuale nelle 11 lingue è traduzione letterale, non localizzazione SEO.
Priorità mercati per volume atteso:

1. **IT** — mercato principale, già in crescita
2. **EN** — UK + USA (già 408 imp combinati)
3. **DE** — Germania (17 imp con contenuto non ottimizzato)
4. **NL** — Paesi Bassi (80 imp sorprendentemente alti)
5. **FR, ES** — fase successiva

### Azioni internazionali
- Keyword research dedicato per ogni mercato (non traduzione IT)
- Meta title/desc localizzati con keyword del mercato locale
- Blog: ogni articolo tradotto almeno in EN + DE come priorità

---

## 8. Piano di Implementazione — Fasi

### FASE 0 — Fix tecnici (settimana 1)
1. Blocca `crm.geotapp.com` da indicizzazione
2. Redirect 301 `www` → non-www su Cloudflare
3. Fix trailing slash duplicati
4. Noindex pagine WP default (checkout, cart, about-us, services, sample-page)
5. Fix canonical double slash blog

### FASE 1 — Quick wins SEO (settimane 2-4)
6. Ottimizzazione `/settori/pulizie/` (title, H1, meta, FAQ Schema)
7. Potenziamento articolo GDPR (Schema, freshness, CTA interna)
8. Structured data `Organization` + `SoftwareApplication` su homepage
9. Structured data `Service` + `FAQPage` su tutte le landing settori
10. Ottimizzazione meta title/desc su tutti i prodotti in IT

### FASE 2 — Blog reale (settimane 3-5)
11. Sostituire blog stub Next.js con fetch SSR da WP REST API
12. Schema `Article` su tutti i post blog
13. Internal linking sistematico: ogni post → landing prodotto/settore
14. Breadcrumb visibili + `BreadcrumbList` Schema

### FASE 3 — Nuovi contenuti (mese 2)
15. Pillar page "Certificazione lavoro sul campo" (concetto proprietario)
16. Cluster GDPR: 3 articoli satellite
17. Nuove landing: `/settori/cantieri/`, `/settori/idraulici/`, `/settori/facility/`
18. Landing Zenith-SEO (attualmente fa redirect a /pricing)
19. Articoli cluster "differenziazione vs competitor tracking"

### FASE 4 — Internazionale (mese 3-4)
20. Keyword research EN, DE, NL
21. Meta localizzati per mercati prioritari
22. Blog tradotto in EN (minimo 5 articoli top performance)
23. Outreach link building settoriale IT + EN

---

## 9. KPI e Obiettivi

| Metrica | Baseline | +30gg | +60gg | +90gg |
|---|---|---|---|---|
| Clic/mese | ~7 | 30-50 | 100-200 | 300-500 |
| Impressioni/mese | ~700 | 1.500 | 3.000 | 6.000+ |
| Pagine indicizzate correttamente | ~30 | 40 | 60 | 80+ |
| Articoli blog reali su /blog/ | 0 | 15+ | 25+ | 40+ |
| Settori verticali | 3 | 3 | 6 | 6+ |
| Lingue con meta localizzati | 0 | 2 (IT+EN) | 4 | 7+ |

---

## 10. Note Architetturali

- Il sito è Next.js su Cloudflare Workers — le fix trailing slash vanno gestite sia nel middleware che nelle Page Rules Cloudflare
- Il blog WP usa Polylang — la fetch REST API deve passare il parametro `lang` per ogni locale
- La sitemap è già force-dynamic e fetcha WP in tempo reale — rimane invariata
- Il CRM su `crm.geotapp.com` va bloccato a livello Cloudflare (WAF rule o Page Rule) oltre che con robots.txt
- `www.geotapp.com` probabilmente non ha un redirect configurato in Cloudflare — verificare DNS e Page Rules
