# Design: Allineamento visivo WordPress blog con geotapp.com

**Data:** 2026-03-16
**Tema WordPress:** `official-v2` (path: `/blog/wp-content/themes/official-v2/`)
**Accesso:** SFTP `su325938@access-5018990701.webspace-host.com:22` path `/blog`

---

## Obiettivo

Eliminare le differenze visive tra `geotapp.com/blog` (WordPress) e `geotapp.com` (Next.js), rendendo i due sistemi indistinguibili all'utente finale per font, colori, spaziature e struttura.

---

## Token di design — sito ufficiale (fonte di verità)

| Token | Valore |
|---|---|
| Font body | Inter |
| Font heading/display | Poppins |
| Background | `#ffffff` |
| Surface | `#f8fafc` (Slate 50) |
| Border | `#e2e8f0` (Slate 200) |
| Primary green | `#8FC436` |
| Text primary | `#0f172a` (Slate 900) |
| Text secondary | `#475569` (Slate 600) |
| Text muted | `#94a3b8` (Slate 400) |
| TopBar | `#E6D8BA` |
| Glow 1 | `bg-sky-100 blur-[120px] opacity-60` top-left fixed |
| Glow 2 | `bg-purple-100 blur-[120px] opacity-60` bottom-right fixed |

---

## Difformità rilevate nel tema `official-v2`

### 1. Font invertiti
- WP Tailwind config: `sans: ['Poppins']`, `display: ['Inter']`
- Corretto: `sans: ['Inter']`, `display: ['Poppins']`
- CSS: `--font-body` e `--font-heading` invertiti

### 2. Colore accent errato
- Attuale: `--color-accent: #16A34A` (green-600 generico)
- Corretto: `--color-accent: #8FC436` (brand green)
- Impatto: link articoli, bordi blockquote, badge categoria

### 3. Tipografia — dettagli
- `line-height: 1.8` → corretto a `1.75`
- H2 ha `border-bottom: 2px solid #F1F5F9` → da rimuovere
- Nessuna copertura per `.wp-block-image` (immagini Gutenberg native senza margine/bordo-raggio)

### 4. Footer scuro
- Attuale: `background: #0c1024` dark a 4 colonne
- Corretto: chiaro `#f8fafc`, struttura minimal identica al sito ufficiale

### 5. Sidebar negli articoli
- Layout attuale: 2/3 articolo + 1/3 sidebar
- Contenuto sidebar: search, post recenti, newsletter
- Soluzione: rimuovere layout sidebar, integrare i contenuti come sezioni verticali dopo l'articolo

### 6. Glow effects assenti
- Aggiungere i due blob fixed in `header.php` identici al sito ufficiale

---

## Struttura finale articolo (`single.php`)

```
[Hero full-width: immagine + overlay + titolo + meta + autore-avatar]
[Corpo articolo: max-w-3xl centrato, prose, font Inter/Poppins corretti]
[Tags]
[Blocco autore: avatar Gravatar 96px + nome + bio + link profilo]
[Articoli correlati: griglia 3 colonne, stessa categoria, max 3 post]
[CTA Newsletter: banda bg-primary/10, input email + button]
[Footer chiaro]
```

---

## File da modificare

| File | Intervento |
|---|---|
| `style.css` | Fix font roles, fix `--color-accent`, fix line-height, rimozione border-bottom H2, aggiunta stili `wp-block-image` e `wp-block-*` |
| `header.php` | Aggiunta glow effects fixed (sky + purple) |
| `single.php` | Rimozione sidebar, layout full-width centrato, aggiunta blocco autore, articoli correlati, CTA newsletter |
| `footer.php` | Sostituzione dark footer con footer chiaro identico all'ufficiale + fix Tailwind config (font roles) |

**File NON toccati:** `home.php`, `page.php`, `sidebar.php`, `functions.php`, `index.php`

---

## Dettaglio blocco autore

```php
// Dati da WordPress author meta (collegato a Gravatar)
get_avatar(get_the_author_meta('ID'), 96)   // foto 96px
the_author()                                  // nome completo
get_the_author_meta('description')           // bio
get_author_posts_url(get_the_author_meta('ID')) // link
```

Design: card `bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 flex gap-5 items-start`

---

## Dettaglio articoli correlati

```php
$args = array(
    'category__in' => wp_get_post_categories($post->ID),
    'post__not_in' => array($post->ID),
    'posts_per_page' => 3,
    'orderby' => 'date',
);
```

Design: griglia `grid grid-cols-1 md:grid-cols-3 gap-6`, card con thumbnail + categoria + titolo + data.

---

## Dettaglio CTA newsletter

Banda full-width `bg-[#8FC436]/10 rounded-2xl p-10 text-center` con:
- Titolo: "Resta aggiornato"
- Sottotitolo: "Ricevi i migliori articoli direttamente nella tua email"
- Input email + button verde `#8FC436`
- Usa `wp_mail` o redirect a lista esistente

---

## Animazioni GSAP (già presenti, da estendere)

- Hero: `from y:20 opacity:0` con stagger — già presente ✓
- Corpo articolo: `ScrollTrigger.batch` su paragrafi e immagini — già presente ✓
- **Nuovo:** blocco autore fade-in dal basso
- **Nuovo:** articoli correlati stagger cards
- **Nuovo:** CTA newsletter scale-in al scroll
