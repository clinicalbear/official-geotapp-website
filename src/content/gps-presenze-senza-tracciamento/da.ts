import type { PresenzeCopy } from './types';

const da: PresenzeCopy = {
  metaTitle: 'Kan GPS bruges til fremmøde uden at spore medarbejdere? - GeoTapp',
  metaDesc:
    'Ja, hvis positionen kun registreres ved stempling. Hvad en italiensk domstol afgjorde i 2026, hvad tilsynsmyndigheder reelt straffer, og hvad et lovligt GPS-fremmøde-system registrerer.',
  h1: 'Kan GPS bruges til fremmøde uden at spore medarbejdere?',
  lede:
    'Ja. Et system, der kun registrerer position i det præcise øjeblik en medarbejder stempler ind, holder pause eller stempler ud, overvåger ikke personen kontinuerligt: det dokumenterer et faktum. Det er præcis den skelnen, som en italiensk domstol bekræftede i 2026, og den stemmer overens med det, tilsynsmyndigheder faktisk straffer: kontinuerlig sporing, ikke det enkeltstående positionsopslag.',
  updatedLabel: 'Opdateret 25. september 2026',
  sections: [
    {
      heading: 'Hvornår er GPS tilladt til fremmøderegistrering?',
      paragraphs: [
        'I de fleste EU-lande gælder samme princip: værktøjer, der kan muliggøre løbende kontrol med en medarbejders adfærd, kræver forudgående aftale med medarbejderrepræsentationen eller tilladelse fra den kompetente myndighed, før de tages i brug. I Italien er det artikel 4 i Arbejderstatutten (lov nr. 300/1970), der stiller dette krav til fjernkontrol-værktøjer, mens rene adgangs- og fremmøderegistreringsværktøjer udtrykkeligt er undtaget.',
        'En italiensk dom af 1. juli 2026 (retten i Cosenza, dom nr. 972) angiver, hvor grænsen går for GPS-baserede stempel-apps: når positionen udelukkende registreres i det øjeblik, der stemples, uden løbende sporing af bevægelser derimellem, betragtes systemet som et fremmøderegistreringsværktøj og ikke som fjernovervågning. Retten ophævede derfor en bøde på 50.000 euro, som den italienske databeskyttelsesmyndighed havde pålagt en offentlig instans, netop på det grundlag.',
        'Den praktiske regel: et GPS-punkt taget ved vagtens start og slut fanger et øjeblik. Et spor af punkter taget hvert minut følger en person. Samme satellitteknologi, men to meget forskellige værktøjer set med lovens øjne.',
      ],
    },
    {
      heading: 'Hvad registrerer GeoTapp, og hvad registrerer det ikke',
      paragraphs: [
        'GeoTapp registrerer kun positionen, når en medarbejder foretager en konkret handling: stempler ind, starter eller afslutter en pause, stempler ud, plus ét punkt pr. arbejdsbevis-foto. Mellem to stemplinger registreres intet automatisk: intet spor af bevægelser, ingen sporing i baggrunden, ingen position indsamlet uden medarbejderens vidende.',
      ],
    },
    {
      heading: 'Sådan kan en tillidsrepræsentant, en arbejdsretsadvokat eller en DPO tjekke det uden at spørge os om noget',
      paragraphs: [
        'Man behøver ikke tage vores ord for det: det kan efterprøves uafhængigt. I Android-appen erklærer manifestet kun tilladelserne ACCESS_FINE_LOCATION og ACCESS_COARSE_LOCATION. Tilladelsen ACCESS_BACKGROUND_LOCATION, som ville være nødvendig for at følge en medarbejder, mens appen er lukket, anmodes der ikke om, og der findes ingen forgrundstjeneste dedikeret til position: uden den tilladelse leverer operativsystemet simpelthen ikke positionsdata til en app, der ikke er åben på skærmen. På iOS anmoder appen kun om tilladelsen "når appen bruges" (requestWhenInUseAuthorization), aldrig tilladelse til sporing i baggrunden.',
        'Det er et tjek, en tillidsrepræsentant, en arbejdsretsadvokat eller en databeskyttelsesrådgiver selv kan udføre på få minutter ved at læse app-manifestet eller den privatlivsmærkning, som app-butikken offentliggør, allerede før de læser den information, virksomheden forelægger dem.',
      ],
    },
    {
      heading: 'Hvor længe opbevares de indsamlede positioner?',
      paragraphs: [
        'I stempellogen slettes koordinaterne efter tolv måneder; en virksomhed kan afkorte perioden til helt ned til tredive dage. I rapporter, der allerede er leveret til en kunde, forbliver positionerne derimod: det er forseglede dokumenter, der dokumenterer det udførte arbejde, og de følger den opbevaringsperiode, der gælder for den type dokumentation, ikke logens.',
        'Det er to forskellige regler for to forskellige ting. Driftsloggen bliver lettere med tiden; et dokument, der allerede er udleveret til en anden, følger sine egne regler, ligesom ethvert dokument, når det først har forladt vores systemer.',
      ],
    },
    {
      heading: 'Og uden for Italien?',
      paragraphs: [
        'GDPR (særligt artikel 5, 6, 12-14 og 25 i EU-forordning 2016/679) gælder i hele EU og pålægger de samme principper overalt: dataminimering, et angivet formål, klar information til medarbejderen. Det, der varierer fra land til land, er proceduren omkring fjernkontrol: det lokale modstykke til den italienske artikel 4, medarbejderrepræsentationens rolle, den kompetente tilsynsmyndighed. For det enkelte lands situation samler kortet over GPS og medarbejdere i EU verificerede profiler land for land.',
      ],
    },
  ],
  table: {
    title: 'Hvad der registreres, og hvad der ikke gør',
    colLeft: 'Registrerer',
    colRight: 'Registrerer ikke',
    left: [
      'Position ved ind- og udstempling',
      'Position ved start og slut af hver pause',
      'Ét GPS-punkt pr. arbejdsbevis-foto',
      'Tidsstemplet for forseglingen af rapporten, taget fra serverens ur',
    ],
    right: [
      'Ingen bevægelse under vagten, mellem to stemplinger',
      'Ingen position uden for vagten eller når appen er lukket',
      'Ingen scoring eller profilering af adfærd',
    ],
  },
  sourcesTitle: 'Kilder og referencer',
  sources: [
    'Retten i Cosenza (Italien), dom nr. 972 af 1. juli 2026',
    'Den italienske databeskyttelsesmyndighed (Garante), afgørelse nr. 382 af 28. maj 2026 (doc-web 10259916)',
    'Den italienske databeskyttelsesmyndighed (Garante), afgørelse nr. 135 af 13. marts 2025 (doc-web 10128005), ophævet ved ovenstående dom',
    'Italiensk lov nr. 300 af 20. maj 1970 (Arbejderstatutten), art. 4',
    'Forordning (EU) 2016/679 (GDPR), art. 5, 6, 12-14, 25',
  ],
  disclaimer:
    'Denne side beskriver generelle principper, der kan efterprøves ved kilden, og udgør ikke juridisk rådgivning: for din specifikke situation bør du kontakte en arbejdsretsadvokat eller en databeskyttelsesrådgiver.',
  faq: {
    title: 'Ofte stillede spørgsmål',
    items: [
      {
        q: 'Er GPS-sporing af medarbejdere forbudt under GDPR?',
        a: 'Nej. Tilsynsmyndigheder forbyder ikke GPS på medarbejdere som sådan. Det, de straffer, er kontinuerlig sporing, manglende information og indsamling af data, der ikke har noget med arbejdet at gøre: ikke det enkeltstående positionsopslag ved stempling.',
      },
      {
        q: 'Kræves der altid en aftale med medarbejderrepræsentationen for at bruge GPS til fremmøde?',
        a: 'Det kræves, hvor systemet kan muliggøre løbende kontrol med medarbejderens aktivitet. Retten i Cosenza anerkendte dog, at et system, der kun registrerer positionen ved stempling, uden løbende sporing, hører under fremmøderegistreringsværktøjer, der ikke kræver den procedure.',
      },
      {
        q: 'Hvad sker der, hvis systemet også sporer under pauser?',
        a: 'Det er en af de fejl, der har ført til reelle bøder: et transportfirma blev straffet med 50.000 euro, blandt andet fordi sporingen fortsatte under pauser. Princippet om dataminimering (GDPR art. 5) kræver, at indsamlingen stopper, når vagten stopper.',
      },
      {
        q: 'Kan GeoTapp spore en medarbejder kontinuerligt, hvis jeg beder om det?',
        a: 'Nej. Appen anmoder aldrig om tilladelse til position i baggrunden og har ingen tjeneste, der følger en enhed, mens appen er lukket: det er ikke en slået-fra indstilling, det er en tilladelse, koden aldrig anmoder om. Kan efterprøves ved at læse app-manifestet eller privatlivsmærkningen i butikken.',
      },
      {
        q: 'Opbevares indsamlede positioner for altid?',
        a: 'Nej. I stempellogen slettes de efter tolv måneder, og en virksomhed kan afkorte perioden til tredive dage. De forbliver dog i rapporter, der allerede er leveret til en kunde, fordi det er forseglede dokumenter, der dokumenterer det udførte arbejde.',
      },
    ],
  },
  relatedTitle: 'Relaterede ressourcer',
};

export default da;
