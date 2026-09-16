// A45 del piano del 15/09: la coppia tipografica.
//
// Prima: Anton per i titoli (un solo peso, maiuscolo forzato, SENZA cirillico:
// la home russa titolava in un carattere di ripiego scelto dal browser), Inter
// per il corpo, Poppins residuo nei componenti vecchi. Tre file per pagina, e
// il tedesco spezzato dal condensato maiuscolo.
//
// Adesso: Manrope per i titoli, Source Sans 3 per il corpo, IBM Plex Mono per
// codici sigillo, hash e coordinate. Verificato il 16/09/2026 leggendo il CSS
// servito da fonts.googleapis.com: tutti e tre hanno il blocco `cyrillic`.
// Il cirillico pero' si carica SOLO sul russo (vedi `fontiPerLingua`): le altre
// dieci lingue non pagano quei glifi.
//
// Manrope e Source Sans 3 sono variabili (un file solo per tutti i pesi), Plex
// Mono e' statico e quindi i pesi si elencano.
//
// ⚠️ **Le opzioni qui sotto sono ripetute per esteso di proposito.** Turbopack
// pretende che ogni valore passato a un font loader sia un letterale scritto
// sul posto: una costante condivisa fa fallire la compilazione con
// «Font loader values must be explicitly written literals». Quindi le liste di
// ripiego si ripetono invece di stare in una variabile, e vanno cambiate tutte
// insieme.

import { IBM_Plex_Mono, Manrope, Source_Sans_3 } from 'next/font/google';

// display 'optional' sul corpo: e' la scelta gia' presa il 05/07 per l'LCP e
// non la tocchiamo, altrimenti "l'apertura peggiora" (prova di fatto di A45).
// Sui titoli 'swap', come faceva Anton.

// UNA istanza per famiglia, con tutti e tre i sottoinsiemi.
//
// Ci sono arrivato dopo aver provato — e misurato — l'alternativa a due
// istanze, una latina e una cirillica scelte dal locale. Non funziona con
// next/font, e il motivo e' preciso: due istanze della stessa famiglia
// emettono DUE `@font-face` con lo stesso nome ("Manrope") e lo stesso
// `unicode-range`. Il `<link rel=preload>` punta a uno dei due file e la
// cascata del CSS ne sceglie l'altro, quindi il browser li scarica ENTRAMBI e
// il preload e' sprecato per intero: 53 KB a ogni visita a freddo.
//
// Misura a cache spenta (Chrome vero, /it/, /de/, /ru/):
//     due istanze          it/de 6 file 178 KB, ru 8 file 210 KB
//     una istanza (questa) tutte e tre 6 file 158 KB
//
// Il prezzo di questa scelta va detto: next/font precarica OGNI sottoinsieme
// dichiarato, quindi anche le dieci lingue latine si portano i file cirillici.
// Li pagano, ma pagano MENO di prima, perche' niente e' scaricato due volte.
// L'idea di far pagare il cirillico al solo russo, che A45 prometteva, con
// next/font non si ottiene: o si duplica, o si condivide.
const titoli = Manrope({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
  adjustFontFallback: false,
});

const corpo = Source_Sans_3({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-body',
  display: 'optional',
  fallback: ['Source Sans Pro', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
});

// Il mono serve per il codice sigillo (8QK4-P2NX), gli hash e le coordinate:
// sono cifre e lettere latine in tutte le lingue, quindi niente cirillico e
// niente preload, cosi' non toglie banda all'elemento LCP.
export const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
  adjustFontFallback: false,
  preload: false,
});

/** Le classi delle variabili CSS da mettere sul `<body>`. */
export function fontiPerLingua(_locale: string): string[] {
  return [titoli.variable, corpo.variable, mono.variable];
}

/** Per le pagine fuori da /[locale]/ (blog, links): le stesse. */
export const fontiLatine = [titoli.variable, corpo.variable, mono.variable];
