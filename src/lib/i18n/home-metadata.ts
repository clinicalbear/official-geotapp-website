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
  nl: 'GPS-software buitendienst',
  ru: 'GPS-программа выезда',
  da: 'GPS-software feltservice',
  sv: 'GPS-mjukvara fältservice',
  nb: 'GPS-programvare feltservice',
};

export const HOME_META: Record<string, { title: string; description: string }> = {
  it: {
    title: 'Software GPS presenze: prova ogni intervento | GeoTapp',
    description: 'Cliente contesta il servizio? GeoTapp registra GPS, foto, orario e rapportino non modificabile. Prova ogni intervento e fatturi senza dover discutere.',
  },
  en: {
    title: 'GPS field service software: prove every visit | GeoTapp',
    description: 'Client claims the job was not done? GeoTapp logs GPS, timestamps, photos and tamper-proof reports. Prove every visit and get paid without argument.',
  },
  de: {
    title: 'GPS-Software Außendienst: Einsätze belegen | GeoTapp',
    description: 'Kunde bestreitet den Einsatz? GeoTapp erfasst GPS, Uhrzeit, Fotos und manipulationssichere Berichte. Arbeit belegen und ohne Diskussion bezahlt werden.',
  },
  fr: {
    title: 'Logiciel GPS terrain : prouvez vos interventions | GeoTapp',
    description: 'Client conteste ? GeoTapp enregistre GPS, heure, photos et rapport non modifiable. Prouvez le travail effectué et soyez payé sans discussion.',
  },
  es: {
    title: 'Software GPS operarios: prueba cada trabajo | GeoTapp',
    description: '¿Cliente reclama? GeoTapp registra GPS, hora, fotos e informe no alterable. Demuestra el trabajo hecho y cobra sin discusiones.',
  },
  pt: {
    title: 'Software GPS campo: prove cada serviço | GeoTapp',
    description: 'Cliente contesta? GeoTapp registra GPS, hora, fotos e relatório não alterável. Prove o serviço feito e receba sem discussões.',
  },
  nl: {
    title: 'GPS-software buitendienst: bewijs elk bezoek | GeoTapp',
    description: 'Betwist de klant je werk? GeoTapp registreert GPS, tijd, foto\'s en een niet-wijzigbaar rapport. Bewijs wat gedaan is en word betaald zonder discussie.',
  },
  ru: {
    title: 'GPS-программа выезда: докажите работы | GeoTapp',
    description: 'Клиент оспаривает работу? GeoTapp фиксирует GPS, время, фото и неизменяемый отчёт. Докажите выполненное и получите оплату без споров.',
  },
  da: {
    title: 'GPS-software feltservice: bevis hvert besøg | GeoTapp',
    description: 'Kunden bestrider arbejdet? GeoTapp registrerer GPS, tid, fotos og en ikke-redigerbar rapport. Bevis opgaven og få betaling uden diskussion.',
  },
  sv: {
    title: 'GPS-mjukvara fältservice: bevisa varje jobb | GeoTapp',
    description: 'Kunden ifrågasätter jobbet? GeoTapp loggar GPS, tid, foton och en ej ändringsbar rapport. Bevisa arbetet och få betalt utan diskussion.',
  },
  nb: {
    title: 'GPS-programvare feltservice: bevis hver jobb | GeoTapp',
    description: 'Kunden bestrider jobben? GeoTapp registrerer GPS, tid, bilder og en ikke-endringsbar rapport. Bevis arbeidet og få betalt uten diskusjon.',
  },
};
