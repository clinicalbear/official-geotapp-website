# Piano SEO Follow-up — 2026-04-17

## Contesto

Continuazione del lavoro SEO iniziato il 2026-04-16/17. I 21 URL 404 nel sitemap sono stati
risolti con il reverse-slug rewrite nel middleware. Questo piano copre i lavori rimanenti,
escluse le pagine settori edilizia/impianti/manutenzione (rimandato).

---

## Task 1 — FR blog: fix CTR articolo "comment suivre…"

**Problema:** articolo francese "comment suivre le temps de travail des équipes terrain?"
ha pos 8.8 in GSC con 0 click (impressions sì, CTR 0%).

**Causa probabile:** title/description Yoast mancanti o non ottimizzati per il click.

**Azioni:**
1. Identificare il post via WP REST API (`/wp-json/wp/v2/posts?lang=fr&search=comment+suivre`)
2. Leggere il title e la description Yoast attuali
3. Scrivere un title < 60 caratteri con keyword esatta + brand
4. Scrivere una description < 160 caratteri action-oriented
5. PATCH il post via WP REST API (`meta._yoast_wpseo_title` + `meta._yoast_wpseo_metadesc`)
6. Verificare su GSC che la modifica venga recepita (dopo crawl)

**Script:** usare `fetch_wp.py` o curl diretto con WP App Password.

---

## Task 2 — NL settore pulizie: contenuto localizzato

**Problema:** `/nl/sectoren/schoonmaak/` ora risponde 200 ma serve la pagina IT.
GSC mostra "software voor schoonmaakbedrijven" 46 impressioni a pos 69 — opportunità reale.

**Causa:** la pagina `settori/pulizie/page.tsx` non ha contenuto NL — usa lo stesso testo IT
per tutti i locali non gestiti.

**Azioni:**
1. Leggere `src/app/[locale]/settori/pulizie/page.tsx` per capire la struttura attuale
2. Verificare se la pagina ha già gestione multi-locale o è solo IT
3. Aggiungere testo NL per i contenuti chiave (H1, hero desc, problem cards, how-it-works)
   con keyword target: "software schoonmaakbedrijf", "gps aanwezigheidsregistratie"
4. Metadata NL dedicata (title/desc)
5. Fare lo stesso per `/nl/sectoren/beveiliging/` e `/nl/sectoren/installateurs/`
   (stessa struttura, stessa priorità)
6. Deploy

**Note:** le pagine `installatori` e `sicurezza` hanno già contenuto IT buono — tradurre
in NL seguendo lo stesso pattern.

---

## Task 3 — Internal linking blog: audit + miglioramento

**Problema:** 147 post (IT:64, EN:54, DE:29) senza audit dei link interni.
Opportunità: articoli con buon ranking potrebbero linkare pagine prodotto/settori.

**Contesto:** il plugin `geotapp-internal-linking` è installato nel blog WP ma non è stato
analizzato. I post non linkano sistematicamente le landing page di settore.

**Azioni:**
1. Analizzare il plugin `geotapp-internal-linking` via SFTP: capire cosa fa, se inserisce
   link automaticamente o manualmente
2. Recuperare via WP REST API i 10 post IT con più impressioni GSC
3. Per ciascuno: verificare se contengono link a `/it/settori/pulizie/`,
   `/it/settori/installatori/`, `/it/settori/sicurezza/`, `/it/products/geotapp-flow/`
4. Identificare i 5 post con il gap di linking più alto (alto traffico, zero link interni
   a pagine chiave)
5. Per questi 5: aggiungere 1-2 link interni contestuali via WP REST API PATCH
6. Ripetere per EN (top 5 post EN) e DE (top 5 post DE)

**Script:** usare `fetch_gsc.py` per top pages + `fetch_wp.py` per content dei post.

---

## Task 4 — Keyword research multilingua: azioni da GSC

**Problema:** dati GSC raccolti per DE/NL/FR ma nessuna azione concreta è stata presa.

**Dati già disponibili dal report 2026-04-17:**
- **DE:** "zeiterfassung außendienst" — opportunità principale
- **NL:** "software voor schoonmaakbedrijven" pos 69 (coperto da Task 2)
- **FR:** "logiciel pointage chantier", "application suivi chantier"

**Azioni:**
1. Rileggere il report GSC `google-analysis/reports/2026-04-17-report.md` per le quick wins
   DE/FR/NL (pos 4-20, >100 impressioni)
2. Per ogni quick win identificata:
   a. Leggere il title/desc della pagina corrispondente
   b. Aggiornare il title con keyword esatta se non presente
   c. Aggiornare la description con call-to-action + keyword
3. Priorità quick wins per volume:
   - DE homepage title (già fatto? verificare)
   - FR homepage description
   - NL homepage description
   - DE/FR blog post titles che appaiono tra pos 4-20

**Script:** `fetch_gsc.py` per dati aggiornati + modifiche via `locale-metadata.ts`
per il sito e WP REST API per il blog.

---

## Ordine di esecuzione

```
Task 1 (FR blog CTR)      — 20 min  — impatto immediato, lavoro minimo
Task 4 (keyword research) — 45 min  — quick wins su traffico esistente
Task 2 (NL settori)       — 60 min  — nuova opportunità di traffico NL
Task 3 (internal linking) — 90 min  — dipende da Task 2 per avere pagine da linkare
```

---

## File coinvolti

- `src/middleware.ts` — già modificato (reverse-slug rewrite) ✅
- `src/app/[locale]/settori/pulizie/page.tsx` — aggiungere contenuto NL
- `src/app/[locale]/settori/installatori/page.tsx` — aggiungere contenuto NL
- `src/app/[locale]/settori/sicurezza/page.tsx` — aggiungere contenuto NL
- `src/app/[locale]/page.tsx` — eventuali fix title/desc FR/NL/DE
- WP Blog: PATCH via REST API per post FR + post IT/EN/DE (internal linking)
- `google-analysis/reports/2026-04-17-report.md` — fonte dati GSC

## Credenziali necessarie

- WP App Password: in `memory/reference_blog_geotapp_credentials.md`
- GSC service account: `~/Scaricati/geotap-v2-a7cc3737638c.json`
