// Titolo e descrizione dell'homepage, una riga per lingua.
//
// Vivono qui, e non dentro `app/[locale]/page.tsx`, per una ragione sola: cosi'
// sono leggibili da un test senza tirarsi dietro tutta la pagina React. Il
// difetto che ha portato a spostarli era invisibile proprio perche' nessuno li
// misurava (vedi home-metadata.test.ts).
//
// --- La regola dei title, e perche' esiste -----------------------------------
// Il 26/08/2026 il prefisso `GeoTapp | ` e' stato rimesso davanti al title
// (commit 9dfdf9b), scelta voluta. Effetto misurato il 06/09: IT a 83 caratteri
// e EN a 82, mentre Google taglia lo snippet intorno ai 60-65. Cio' che finiva
// oltre il taglio era la coda, cioe' **la parola chiave** (`Software GPS
// presenze`): la pagina si presentava con il marchio e con la domanda, e senza
// dire che cosa vende. Tutte e undici le lingue erano oltre i 60.
//
// Da qui la forma: **parola chiave, poi la promessa, poi il marchio**, entro
// HOME_TITLE_MAX caratteri.
//   - la parola chiave sta all'inizio, dove il taglio non la raggiunge mai;
//   - il marchio resta (era la volonta' del 26/08) ma in coda, dove perderlo
//     costa poco, perche' Google il nome del sito lo mostra comunque;
//   - la domanda che apriva il vecchio title ("Cliente contesta il lavoro?")
//     non e' andata persa: vive nella description, che di spazio ne ha 155 e
//     dove infatti apre gia' la frase.
//
// Chi tocca un title qui deve restare sotto HOME_TITLE_MAX e tenere la parola
// chiave di HOME_TITLE_KEYWORD prima del marchio. Il test lo verifica.

/** Il taglio di Google e' a pixel, non a caratteri: 60 e' il margine prudente. */
export const HOME_TITLE_MAX = 60;

/** La parola chiave che il taglio non deve mai mangiare, per lingua. */
export const HOME_TITLE_KEYWORD: Record<string, string> = {
  it: 'Software GPS presenze',
  en: 'GPS field service software',
  de: 'GPS-Software Außendienst',
  fr: 'Logiciel GPS terrain',
  es: 'Software GPS operarios',
  pt: 'Software GPS campo',
  nl: 'GPS-software voor aanwezigheid',
  ru: 'GPS-программа выезда',
  da: 'GPS-software feltservice',
  sv: 'GPS-programvara för fältteam',
  nb: 'GPS-programvare for feltteam',
};

export const HOME_META: Record<string, { title: string; description: string }> = {
  it: {
    title: 'Software GPS presenze: prova ogni intervento | GeoTapp',
    description: 'Software per squadre sul campo: GeoTapp registra posizione, orari e foto a ogni timbratura e li sigilla in un report che il cliente verifica da solo.',
  },
  en: {
    title: 'GPS field service software: prove every visit | GeoTapp',
    description: 'Software for field crews: at every clock-in GeoTapp records location, times and photos and seals them in a report the client verifies alone.',
  },
  de: {
    title: 'GPS-Software Außendienst: Einsätze belegen | GeoTapp',
    description: 'Software für Teams im Außendienst: GeoTapp erfasst bei jeder Buchung Standort, Zeiten und Fotos und versiegelt sie in einem Bericht, den der Kunde selbst prüft.',
  },
  fr: {
    title: 'Logiciel GPS terrain : prouvez vos interventions | GeoTapp',
    description: 'Logiciel pour équipes de terrain : à chaque pointage, GeoTapp enregistre position, horaires et photos et les scelle dans un rapport que le client vérifie seul.',
  },
  es: {
    title: 'Software GPS operarios: prueba cada trabajo | GeoTapp',
    description: 'Software para equipos de campo: en cada fichaje, GeoTapp registra ubicación, horas y fotos y los sella en un informe que el cliente verifica por su cuenta.',
  },
  pt: {
    title: 'Software GPS campo: prove cada serviço | GeoTapp',
    description: 'Software para equipas no terreno: a cada picagem, o GeoTapp regista localização, horas e fotos e sela-os num relatório que o cliente verifica sozinho.',
  },
  nl: {
    title: 'GPS-software voor aanwezigheid: bewijs elke klus | GeoTapp',
    description: 'Software voor teams in het veld: GeoTapp legt bij elke registratie locatie, tijden en foto\'s vast en verzegelt ze in een rapport dat de klant zelf controleert.',
  },
  ru: {
    title: 'GPS-программа выезда: докажите работы | GeoTapp',
    description: 'Клиент оспаривает работу? GeoTapp фиксирует GPS, время, фото и отчёт с обнаруживаемыми изменениями. Докажите выполненное и получите оплату без споров.',
  },
  da: {
    title: 'GPS-software feltservice: bevis hvert besøg | GeoTapp',
    description: 'Software til hold i marken: GeoTapp registrerer position, tidspunkter og fotos ved hver stempling og forsegler dem i en rapport, som kunden selv kan verificere.',
  },
  sv: {
    title: 'GPS-programvara för fältteam: bevisa varje uppdrag | GeoTapp',
    description: 'Programvara för team på fältet: GeoTapp sparar position, tider och foton vid varje stämpling och förseglar dem i en rapport som kunden själv kan kontrollera.',
  },
  nb: {
    title: 'GPS-programvare for feltteam: bevis hvert oppdrag | GeoTapp',
    description: 'Programvare for team i felt: GeoTapp registrerer posisjon, tid og bilder ved hver stempling og forsegler dem i en rapport som kunden selv kan kontrollere.',
  },
};
