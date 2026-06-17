import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App for Installatører & Teknikere: GPS-oppdragssporing | GeoTapp',
    description: 'Spor oppdrag, timer og materialer for VVS-, elektro- og rørleggerinstallatører med GPS. Automatiske tjenestebevis, ingen kundetvister. Prøv GeoTapp gratis.',
  },
  hero: {
    badge: 'App for installatører, teknikere og serviceteam',
    h1_line1: 'Hvert oppdrag dokumentert,',
    h1_line2: 'hver time registrert.',
    subtitle: 'For elektro-, rørlegger-, VVS- og mekaniske installatører. GeoTapp kobler Flow + TimeTracker for å spore GPS, timer og bilder per oppdrag, fra varebilen til kontoret uten telefonsamtaler.',
    cta_primary: 'Prøv GeoTapp gratis i 14 dager',
    cta_note: 'Ingen binding. Ingen kredittkort påkrevd.',
  },
  pain: {
    title: 'Problemer vi løser hver dag',
    items: [
      {
        title: 'Kunder bestrider de arbeidede timene',
        desc: 'GPS-stemplinger tidsstemplet som ugjendrivelig bevis. Data sertifiseres i oppdragsøyeblikket, kan ikke redigeres i etterkant.',
      },
      {
        title: 'Jage teknikere for oppdateringer',
        desc: 'Sanntidskart med status for hvert oppdrag. Du vet hvor alle teknikerne dine er uten å ringe en eneste samtale.',
      },
      {
        title: 'Ufullstendige eller manglende arbeidssedler',
        desc: 'Data ankommer for sent, ufullstendig eller ikke i det hele tatt. Å rekonstruere timer og oppdrag ved månedens slutt er en ekstra oppgave som koster tid og penger.',
      },
    ],
  },
  workflow: {
    title: 'Slik fungerer det',
    subtitle: 'Tre enkle trinn. Null papir. Null samtaler.',
    steps: [
      {
        title: 'Teknikeren stempler inn via GPS ved start',
        desc: 'Åpner oppdraget fra smarttelefonen. GeoTapp registrerer reelle GPS-koordinater, tidsstempel og bilder, helautomatisk, manipulasjonssikkert.',
      },
      {
        title: 'Timer registreres automatisk per oppdrag',
        desc: 'Hvert arbeidet minutt kobles til riktig oppdrag. Lederen ser i sanntid hvem som jobber hvor.',
      },
      {
        title: 'Kunderapporten genereres uten å taste noe',
        desc: 'Ved oppdragets slutt genererer systemet en rapport med GPS, timer og digital signatur. Kunden mottar den og verifiserer den selvstendig.',
      },
    ],
  },
  differenza: {
    title: 'Installatør-app: tidsregistrering eller sertifisering?',
    subtitle: 'De fleste apper registrerer bare tidspunktet. GeoTapp produserer verifiserbart bevis.',
    rows: [
      {
        label: 'Hva som registreres',
        competitor: 'Inn- og utstemplingstid',
        geotapp: 'Tid + verifisert GPS + bilder + utført arbeid',
      },
      {
        label: 'Hvem kan verifisere',
        competitor: 'Bare ditt kontor',
        geotapp: 'Deg, kunden, en tredjepart, uavhengig',
      },
      {
        label: 'Ved tvist',
        competitor: 'Data ikke forsvarlig',
        geotapp: 'Forseglet rapport, manipulasjonssikker',
      },
      {
        label: 'Oppdragsrapport',
        competitor: 'Manuell eller fraværende',
        geotapp: 'Automatisk generert med GPS og bilder',
      },
      {
        label: 'GDPR-samsvar',
        competitor: 'Ofte tvilsom',
        geotapp: 'Kompatibel by design, skjemaer inkludert',
      },
    ],
  },
  prima_dopo: {
    title: 'Hva som skjer nå. Hva som skjer med GeoTapp.',
    prima: [
      'Kunden bestrider sluttidspunktet og ber om rabatt.',
      'Teknikeren sier «jeg jobbet 4 timer». Kunden sier «det står bare 2».',
      'Du har ingen bevis. Diskusjonen varer i dager og betalingen er i fare.',
      'Ved månedens slutt rekonstruerer du timer og oppdrag fra WhatsApp-meldinger.',
    ],
    dopo: [
      'Kunden bestrider? Åpne rapporten: bilder, GPS, tidsstempel, digital signatur.',
      'Du sender den. Tvisten er løst på et minutt.',
      'Betalingen er sikret. Teknikeren er beskyttet.',
      'Ved månedens slutt er eksporten allerede klar, timer og oppdrag aggregert automatisk.',
    ],
  },
  features: {
    title: 'Funksjoner bygget for installatører og serviceteam',
    items: [
      {
        title: 'Verifiserbar GPS-stempling',
        desc: 'Hver inn- og utgang er koblet til lokasjon, tidsstempel og oppdrag. Forsvarlig overfor kunder og inspektører.',
      },
      {
        title: 'Forseglet bildebevis',
        desc: 'Teknikeren fotograferer direkte fra appen. Hvert bilde er koblet til oppdraget med GPS og tidsstempel, manipulasjonssikkert etter generering.',
      },
      {
        title: 'Multi-lokasjon oppdragsstyring',
        desc: 'Tildel oppdrag, spor fremdrift på alle lokasjoner og motta automatiske varsler hvis et oppdrag ikke åpnes eller lukkes i tide.',
      },
      {
        title: 'Automatiske digitale arbeidssedler',
        desc: 'Ved oppdragets slutt er rapporten klar: timer, bilder, notater og signatur. Null papir, null samtaler. Teknikeren sender den til kunden direkte fra appen.',
      },
      {
        title: 'Eksport for lønn og fakturering',
        desc: 'Eksporter månedlig oppmøte og timer per oppdrag. Lønnsbehandling og fakturering blir et spørsmål om minutter.',
      },
      {
        title: 'Innebygd GDPR-samsvar',
        desc: 'Geolokalisering kompatibel by design med GDPR-regler. Maler for personvernerklæring til ansatte inkludert.',
      },
    ],
  },
  testimonial: {
    quote: 'Kunder bestrider ikke lenger timene. Vi åpner rapporten med GPS og bilder, og diskusjonen stopper der.',
    author: 'Robert F.',
    role: 'Eier, installasjonsfirma, 20 teknikere',
  },
  faq: {
    title: 'Ofte stilte spørsmål',
    subtitle: 'Hva folk spør oss mest om før de starter.',
    items: [
      {
        q: 'Bestrider kunder de arbeidede timene på et oppdrag?',
        a: 'Med GeoTapp tidsstemples GPS-stemplinger i oppdragsøyeblikket og kan ikke redigeres. De utgjør ugjendrivelig bevis for arbeidede timer og eliminerer enhver tvist.',
      },
      {
        q: 'Hvordan overvåker jeg flere team på forskjellige oppdrag?',
        a: 'GeoTapp tilbyr et sanntidskart med status for hvert oppdrag. Du vet nøyaktig hvor teknikerne dine er og hvilket oppdrag de jobber på, uten å ringe.',
      },
      {
        q: 'Hvordan fremskynder jeg fakturering av avsluttede oppdrag?',
        a: 'GeoTapp genererer automatisk eksporten av timer og oppdrag klar for regnskapsprogrammet ditt. Ingen manuell inntasting, ingen feilrisiko, fakturering blir ett klikk.',
      },
    ],
  },
  cta: {
    title: 'Prøv GeoTapp gratis i 14 dager',
    subtitle: 'Ingen binding. Ingen kredittkort påkrevd. Svar innen 12 arbeidstimer.',
    primary: 'Kom i gang gratis',
    secondary: 'Se priser',
  },
  pricing_hint: {
    label: 'Fra',
    per: 'tekniker/måned',
    note: '14 dagers gratis prøveperiode',
  },
  schema_sector_name: 'Installasjon',
  schema_faq: [
    {
      question: 'Bestrider kunder de arbeidede timene på et oppdrag?',
      answer: 'Med GeoTapp tidsstemples GPS-stemplinger i oppdragsøyeblikket og kan ikke redigeres. De utgjør ugjendrivelig bevis for arbeidede timer og eliminerer enhver tvist.',
    },
    {
      question: 'Hvordan overvåker jeg flere team på forskjellige oppdrag?',
      answer: 'GeoTapp tilbyr et sanntidskart med status for hvert oppdrag. Du vet nøyaktig hvor teknikerne dine er og hvilket oppdrag de jobber på, uten å ringe.',
    },
    {
      question: 'Hvordan fremskynder jeg fakturering av avsluttede oppdrag?',
      answer: 'GeoTapp genererer automatisk eksporten av timer og oppdrag klar for regnskapsprogrammet ditt. Ingen manuell inntasting, ingen feilrisiko, fakturering blir ett klikk.',
    },
  ],
};

export default content;
