# Guida al template "direzione L" per le pagine interne

Obiettivo: vestire OGNI pagina del sito con il registro grafico del mockup
`/mnt/disco_secondario/GeoTapp-EcoSystem/docs/redesign-sito-2026-07/esplorazione/`
SENZA cambiare i testi e senza togliere contenuti o funzionalità.

## Regole dure (non negoziabili)
1. **I testi restano quelli del sito** (dizionari `src/dictionaries/*` o stringhe già nelle pagine). MAI copiare i testi italiani del mockup, MAI inventare copy nuovo. Il mockup si imita nella STRUTTURA e nelle CLASSI, i contenuti sono quelli veri.
2. **Niente si toglie**: calcolatori, form, schema JSON-LD, generateMetadata, trackEvent, FAQ, tabelle, badge: tutto resta, al massimo cambia vestito e posizione.
3. Non toccare MAI: `src/dictionaries/*`, `src/components/Navbar.tsx`, `Footer.tsx`, `LEffetti.tsx`, `LSipario.tsx`, `src/app/HomeClient.tsx`, `src/app/[locale]/layout.tsx`, `src/app/l-mockup.css`, `src/app/redesign-l.css`, `src/app/globals.css`.
4. Niente nuove dipendenze. Niente rinomini di file o route.
5. Le pagine sono in 11 lingue: ogni voce mostrata deve venire da un dict o da una stringa già esistente nella pagina. Se il mockup ha un'etichetta che non esiste (es. kicker), riusa un'etichetta dict esistente o ometti l'elemento.

## Il sistema (già caricato globalmente da `src/app/l-mockup.css`)
Tokens: `--ink:#0E0E0C --paper:#F2F0E9 --seal:#8FC436 --lime:#B6E86A --sky:#3BAEE0`.
Contenitori: `.w` (max 1500px) e `.wn` (max 1180px). Kicker: `<p className="kk k">`.
Bottoni: `.b1` (pillola verde), `.b2` (link con filo sotto). Reveal: aggiungi `r`, `r-l`, `r-r`, `r-s`, `rule` con ritardi `d1..d4` — un observer globale (`LEffetti`) li fa entrare da solo, anche su nodi montati dopo.

### Struttura tipo di una pagina interna (dal mockup, da replicare in JSX)
```html
<section class="ph">
  <div class="crumb"><div class="w"><a href="/">Home</a> / Sezione / Pagina</div></div>
  <div class="w">
    <p class="kk k"><s></s>KICKER DALLA PAGINA VERA</p>
    <h1>Titolo vero.<br /><em>Seconda riga in corsivo.</em></h1>
    <p class="lede">Sottotitolo vero.</p>
    <div class="acts"><a class="b1" href="…">CTA vera</a><a class="b2" href="…">CTA secondaria</a></div>
  </div>
</section>
<section class="shot"><div class="wn"><div class="frame r-s">…screenshot in .browser/.phone/.sheet…</div></div></section>
<section class="sec">…sezione chiara…</section>
<section class="sec ink">…sezione su nero (testo chiaro!)…</section>
<div class="slab"><div class="run">…nastro…</div></div>   <!-- opzionale, c'è il componente <LNastro/> -->
<section class="fq">…FAQ con <details>/<summary>…</section>
<section class="end">…ultima inquadratura fotografica con .bg + .ov + CTA…</section>
```
Altri pezzi pronti: `.mods` (griglia articoli numerati `<span class="nn">01</span><h3>…</h3><p>…</p>`),
`.split` (due colonne su ink), `.form`/`.fld`/`.in` (form su nero), `.browser` (finestra con barra),
`.phone` (telefono 268px), `.sheet` (foglio report), `.dirs`/`.marq` (loghi), tabella prezzi in `.lp-prezzi`.
Per vedere ESATTAMENTE le classi di una pagina: leggi il file HTML mockup corrispondente (ogni pagina ha il suo `<style>`: quelle regole sono GIÀ in `l-mockup.css`, tranne le varianti scopate `.lp-<pagina>` elencate sotto).

### Convenzioni obbligatorie
- Il contenuto della pagina va avvolto in `<div className="lp-l lp-<slug>">…</div>` e questo div deve
  risultare FIGLIO DIRETTO di `<main>` (le pagine rendono dentro `<main>{children}</main>`; se la page
  ritorna un fragment con `<script>` + wrapper va bene, i figli del fragment sono figli diretti).
  Motivo: `main{padding-top:100px}` per la barra fissa, ma `main:has(> .lp-l){padding-top:0}` e `.ph` ha già il suo respiro sopra.
- Varianti già scopate esistenti in l-mockup.css: `.lp-home`, `.lp-trial`, `.lp-prezzi`, `.lp-abbonamento`, `.lp-risorsa-strumento`. Usa QUEGLI slug per quelle pagine (es. pricing → `lp-prezzi`, trial → `lp-trial`). Per le altre pagine lo slug è libero (`lp-confronto`, `lp-settore`…).
- CSS aggiuntivo di pagina: SOLO in un file nuovo `l-page.css` accanto alla page (`import './l-page.css'` in cima alla page.tsx). MAI toccare i css condivisi. Prefissa ogni regola con `.lp-<slug> ` per non sporcare il resto del sito.
- Link interni: usa gli helper già presenti nella pagina (`localizePath`/`getLink`). CTA trial deve conservare l'eventuale `trackEvent('trial_click', …)` esistente.
- Immagini: quelle già usate dalla pagina o in `/public` (bg1.webp, bg2.webp, bg3.webp, schermataFlow.webp, TT1.webp, TT2.webp, verifier-report.webp, screenshots/…). `loading="lazy"` sotto la piega.

### Trappole note
- `redesign-l.css` (vecchio strato override) NON tocca ciò che sta dentro `.lp-l` per la tipografia, ma le sue regole su `[class*="bg-white"]`, `[class*="rounded"]`, bottoni ecc. valgono ancora: dentro `.lp-l` EVITA le utility Tailwind di colore/bordo e usa le classi del mockup.
- Un antenato del layout ha classe `text-text-primary` che eredita verde scuro: `.lp-l` già reimposta `color:#0E0E0C`. Nelle sezioni scure imposta SEMPRE i colori chiari come fa il mockup (`.sec.ink` li ha già).
- I testi dict con HTML (`dangerouslySetInnerHTML`) contengono classi chiare tipo `text-slate-900`: su fondo nero aggiungi nel tuo l-page.css `.lp-<slug> .sec.ink [class*="text-slate"]{color:inherit !important}`.
- `<summary>`: il marker webkit è già nascosto; il +/− lo disegnano `summary::before/::after` globali.
- Le pagine `settori/edilizia|impianti|manutenzione|impresa-di-pulizie` esistono ma sono fuori menu: valgono le stesse regole se le tocchi tramite il layout condiviso.

## Verifica (obbligatoria prima di dichiarare finito)
Il dev server gira già su http://localhost:3111 (si ricompila da solo).
Per OGNI pagina toccata:
1. `curl -s -o /dev/null -w "%{http_code}" http://localhost:3111/it/<percorso>/` → deve dare 200 (500 = errore di compilazione: leggi il body e correggi).
2. `curl -s http://localhost:3111/it/<percorso>/ | grep -c "lp-l"` → ≥1.
3. Controlla anche UNA lingua diversa (es. /de/…) → 200.
Riporta nel risultato finale: pagine convertite, file toccati, esito dei curl, eventuali compromessi.
