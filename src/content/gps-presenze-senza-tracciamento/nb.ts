import type { PresenzeCopy } from './types';

const nb: PresenzeCopy = {
  metaTitle: 'Kan GPS brukes til oppmøte uten å spore ansatte? - GeoTapp',
  metaDesc:
    'Ja, hvis posisjonen bare registreres ved stempling. Hva en italiensk domstol avgjorde i 2026, hva tilsynsmyndigheter faktisk bøtelegger, og hva et regelverksriktig GPS-oppmøtesystem registrerer.',
  h1: 'Kan GPS brukes til oppmøte uten å spore ansatte?',
  lede:
    'Ja. Et system som bare fanger posisjonen i det nøyaktige øyeblikket en ansatt stempler inn, tar pause eller stempler ut, overvåker ikke personen løpende: det dokumenterer et faktum. Det er nøyaktig det skillet en italiensk domstol bekreftet i 2026, og det stemmer med det tilsynsmyndigheter faktisk bøtelegger: kontinuerlig sporing, ikke det enkeltstående posisjonsoppslaget.',
  updatedLabel: 'Oppdatert 25. september 2026',
  sections: [
    {
      heading: 'Når er GPS tillatt for oppmøteregistrering?',
      paragraphs: [
        'I de fleste EU-land gjelder samme prinsipp: verktøy som kan muliggjøre løpende kontroll av en ansatts aktivitet, krever på forhånd avtale med de ansattes representasjon eller tillatelse fra kompetent myndighet, før de tas i bruk. I Italia er det artikkel 4 i Arbeidstakerstatutten (lov nr. 300/1970) som stiller dette kravet til fjernkontrollverktøy, mens verktøy som bare registrerer adgang og oppmøte er uttrykkelig unntatt.',
        'En italiensk dom av 1. juli 2026 (retten i Cosenza, dom nr. 972) angir hvor grensen går for GPS-baserte stempel-apper: når posisjonen utelukkende fanges i det øyeblikket det stemples, uten løpende sporing av bevegelser mellom stemplingene, regnes systemet som et oppmøteregistreringsverktøy og ikke fjernovervåking. Retten opphevet derfor en bot på 50 000 euro som den italienske personvernmyndigheten hadde ilagt en offentlig virksomhet, nettopp på det grunnlaget.',
        'Den praktiske regelen: et GPS-punkt tatt ved starten og slutten av en vakt fanger et øyeblikk. Et spor av punkter tatt hvert minutt følger en person. Samme satellitteknologi, men to svært ulike verktøy sett fra lovens ståsted.',
      ],
    },
    {
      heading: 'Hva registrerer GeoTapp, og hva registrerer det ikke',
      paragraphs: [
        'GeoTapp fanger posisjonen bare når en ansatt utfører en konkret handling: stempler inn, starter eller avslutter en pause, stempler ut, pluss ett punkt per arbeidsbevisbilde. Mellom to stemplinger registreres ingenting automatisk: ingen spor av bevegelser, ingen sporing i bakgrunnen, ingen posisjon samlet inn uten den ansattes viten.',
      ],
    },
    {
      heading: 'Slik kan en tillitsvalgt, en arbeidsrettsadvokat eller et personvernombud sjekke dette uten å spørre oss om noe',
      paragraphs: [
        'Man trenger ikke ta vårt ord for det: dette kan etterprøves uavhengig. I Android-appen erklærer manifestet kun tillatelsene ACCESS_FINE_LOCATION og ACCESS_COARSE_LOCATION. Tillatelsen ACCESS_BACKGROUND_LOCATION, som ville vært nødvendig for å følge en ansatt mens appen er lukket, blir ikke bedt om, og det finnes ingen forgrunnstjeneste dedikert til posisjon: uten den tillatelsen leverer operativsystemet rett og slett ikke posisjonsdata til en app som ikke er åpen på skjermen. På iOS ber appen kun om tillatelsen "når appen er i bruk" (requestWhenInUseAuthorization), aldri tillatelse til sporing i bakgrunnen.',
        'Det er en sjekk en tillitsvalgt, en arbeidsrettsadvokat eller et personvernombud kan gjøre selv på noen minutter, ved å lese appens manifest eller personvernmerkingen som appbutikken publiserer, enda før de leser informasjonen selskapet legger frem.',
      ],
    },
    {
      heading: 'Hvor lenge oppbevares de innsamlede posisjonene?',
      paragraphs: [
        'I stempelloggen slettes koordinatene etter tolv måneder; et selskap kan korte perioden ned til tretti dager. I rapporter som allerede er levert til en kunde, blir posisjonene derimot værende: det er forseglede dokumenter som dokumenterer det utførte arbeidet, og de følger oppbevaringstiden som gjelder for den typen dokumentasjon, ikke loggens.',
        'Det er to forskjellige regler for to forskjellige ting. Driftsloggen blir lettere over tid; et dokument som allerede er overlevert til noen andre følger sine egne regler, akkurat som ethvert dokument når det først har forlatt våre systemer.',
      ],
    },
    {
      heading: 'Og utenfor Italia?',
      paragraphs: [
        'GDPR (særlig artikkel 5, 6, 12-14 og 25 i EU-forordning 2016/679) gjelder i hele EU og pålegger de samme prinsippene overalt: dataminimering, et angitt formål, klar informasjon til den ansatte. Det som varierer fra land til land, er prosedyren rundt fjernkontroll: det lokale motstykket til den italienske artikkel 4, rollen til de ansattes representasjon, kompetent tilsynsmyndighet. For situasjonen i det enkelte land samler kartet over GPS og ansatte i EU verifiserte profiler land for land.',
      ],
    },
  ],
  table: {
    title: 'Hva som registreres og hva som ikke gjør det',
    colLeft: 'Registrerer',
    colRight: 'Registrerer ikke',
    left: [
      'Posisjon ved inn- og utstempling',
      'Posisjon ved start og slutt av hver pause',
      'Ett GPS-punkt per arbeidsbevisbilde',
      'Tidsstempelet for forseglingen av rapporten, hentet fra serverens klokke',
    ],
    right: [
      'Ingen bevegelse under vakten, mellom to stemplinger',
      'Ingen posisjon utenfor vakten eller når appen er lukket',
      'Ingen poengsetting eller profilering av atferd',
    ],
  },
  sourcesTitle: 'Kilder og referanser',
  sources: [
    'Retten i Cosenza (Italia), dom nr. 972 av 1. juli 2026',
    'Den italienske personvernmyndigheten (Garante), vedtak nr. 382 av 28. mai 2026 (doc-web 10259916)',
    'Den italienske personvernmyndigheten (Garante), vedtak nr. 135 av 13. mars 2025 (doc-web 10128005), opphevet ved dommen ovenfor',
    'Italiensk lov nr. 300 av 20. mai 1970 (Arbeidstakerstatutten), art. 4',
    'Forordning (EU) 2016/679 (GDPR), art. 5, 6, 12-14, 25',
  ],
  disclaimer:
    'Denne siden beskriver generelle prinsipper som kan etterprøves ved kilden, og utgjør ikke juridisk rådgivning: for din spesifikke situasjon bør du kontakte en arbeidsrettsadvokat eller et personvernombud.',
  faq: {
    title: 'Ofte stilte spørsmål',
    items: [
      {
        q: 'Er GPS-sporing av ansatte forbudt under GDPR?',
        a: 'Nei. Tilsynsmyndigheter forbyr ikke GPS på ansatte som sådan. Det de bøtelegger er kontinuerlig sporing, manglende informasjon og innsamling av data som ikke har noe med arbeidet å gjøre: ikke det enkeltstående posisjonsoppslaget ved stempling.',
      },
      {
        q: 'Kreves det alltid avtale med de ansattes representasjon for å bruke GPS til oppmøte?',
        a: 'Det kreves der systemet kan muliggjøre løpende kontroll av den ansattes aktivitet. Retten i Cosenza erkjente imidlertid at et system som bare fanger posisjonen ved stempling, uten løpende sporing, hører under oppmøteregistreringsverktøy som ikke krever den prosedyren.',
      },
      {
        q: 'Hva skjer hvis systemet også sporer under pauser?',
        a: 'Det er en av feilene som har ført til reelle bøter: et transportselskap ble bøtelagt 50 000 euro, delvis fordi sporingen fortsatte under pausene. Prinsippet om dataminimering (GDPR art. 5) krever at innsamlingen stopper når vakten stopper.',
      },
      {
        q: 'Kan GeoTapp spore en ansatt kontinuerlig hvis jeg ber om det?',
        a: 'Nei. Appen ber aldri om tillatelse til posisjon i bakgrunnen og har ingen tjeneste som følger en enhet mens appen er lukket: det er ikke en avslått innstilling, det er en tillatelse koden aldri ber om. Kan etterprøves ved å lese appens manifest eller personvernmerkingen i butikken.',
      },
      {
        q: 'Oppbevares innsamlede posisjoner for alltid?',
        a: 'Nei. I stempelloggen slettes de etter tolv måneder, og et selskap kan korte perioden ned til tretti dager. De blir imidlertid værende i rapporter som allerede er levert til en kunde, fordi det er forseglede dokumenter som dokumenterer det utførte arbeidet.',
      },
    ],
  },
  relatedTitle: 'Relaterte ressurser',
};

export default nb;
