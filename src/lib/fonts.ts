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

const titoliLatino = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
  adjustFontFallback: false,
});

// `preload: false` sulle due istanze cirilliche, e non e' un dettaglio.
// next/font emette un <link rel=preload> per OGNI istanza presente nel modulo,
// non per quella che la pagina usa: misurato in produzione il 16/09/2026,
// /it/ e /ru/ scaricavano gli STESSI sei file, cioe' le dieci lingue latine
// pagavano i glifi russi. Senza preload il file cirillico arriva solo quando
// il browser incontra un glifo di quell'intervallo, cioe' solo su /ru/.
const titoliCirillico = Manrope({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
  adjustFontFallback: false,
  preload: false,
});

const corpoLatino = Source_Sans_3({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
  display: 'optional',
  fallback: ['Source Sans Pro', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
});

const corpoCirillico = Source_Sans_3({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-body',
  display: 'optional',
  fallback: ['Source Sans Pro', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
  preload: false,
});

// ⚠️ NOTO E MISURATO, 16/09/2026: due istanze della stessa famiglia fanno
// scaricare due volte le facce latine — 53 KB per visita a freddo, due file
// con lo stesso hash di base, uno con `.p.` e uno senza. Provata l'alternativa
// a UNA istanza con tutti i sottoinsiemi: pareggia a 158 KB per tutti, ma fa
// scaricare il cirillico anche alle dieci lingue latine, cioe' rompe proprio
// la cosa che A45 prometteva. Misura a cache spenta, /it/ e /de/:
//     due istanze (questa)   6 file, 178 KB, zero cirillico
//     una istanza sola       6 file, 158 KB, cirillico dentro
//     /ru/ con due istanze   8 file, 210 KB
// Tenuta questa. La via per togliere il doppione senza perdere la promessa
// sarebbe un'istanza SOLO cirillica con una variabile sua, e la pila composta
// in CSS su :lang(ru): vale 53 KB a freddo, e il freno vero dell'apertura e'
// il JavaScript (1.150 ms di blocco, misurati il 15/09), non i font.

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

/**
 * Le classi delle variabili CSS da mettere sul `<body>`.
 * Il cirillico entra solo su /ru/: e' l'unica delle undici lingue che lo usa.
 */
export function fontiPerLingua(locale: string): string[] {
  const cirillico = locale === 'ru';
  const titoli = cirillico ? titoliCirillico : titoliLatino;
  const corpo = cirillico ? corpoCirillico : corpoLatino;
  return [titoli.variable, corpo.variable, mono.variable];
}

/** Per le pagine fuori da /[locale]/ (blog, links): sempre latino. */
export const fontiLatine = [titoliLatino.variable, corpoLatino.variable, mono.variable];
