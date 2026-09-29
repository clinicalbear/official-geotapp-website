import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Vedlikeholdsapp: Teamstyring og Oppdrag med GPS | GeoTapp',
    description:
      'Styr vedlikeholdsteam med GPS: oppdrag, vaktplaner, servicebevis. Komplett historikk per anlegg eller kundelokasjon. Prøv GeoTapp gratis.',
  },

  hero: {
    badge: 'App for vedlikeholdsteam',
    h1_line1: 'Ditt vedlikeholdsteam,',
    h1_line2: 'under kontroll, oppdrag for oppdrag.',
    subtitle:
      'Registrer oppdrag, planlegg vakter og dokumenter hvert besøk med ekte GPS og fotodokumentasjon. Komplett historikk per anlegg og kunde, uten manuell registrering.',
    cta_primary: 'Prøv GeoTapp gratis i 14 dager',
    cta_note: 'Ingen binding. Ingen kredittkort påkrevd.',
  },

  pain: {
    title: 'Problemer vi løser hver dag',
    items: [
      {
        title: 'Hvordan dokumenterer du periodiske vedlikeholdsbesøk?',
        desc: 'Automatisk rapport med GPS, timer og bilder for hvert besøk. Komplett historikk, nedlastbar, uten manuell registrering.',
      },
      {
        title: 'Kommer teknikerne virkelig i tide?',
        desc: 'Verifisering uten oppringinger. GPS og ankomsttid dukker opp i dashboardet ditt så snart teknikeren stempler inn, for hver lokasjon.',
      },
      {
        title: 'Hvordan beviser du den leverte tjenesten?',
        desc: 'Komplett nedlastbar historikk per kundelokasjon: datoer, timer, GPS og bilder. Kunden verifiserer selvstendig, uten tilgang til systemet ditt.',
      },
    ],
  },

  workflow: {
    title: 'Slik fungerer det',
    subtitle: 'Tre enkle trinn. Null papir. Null oppringinger.',
    steps: [
      {
        title: 'Teknikeren stempler GPS ved ankomst',
        desc: 'Åpner oppdraget fra smarttelefonen. GeoTapp registrerer ekte GPS-koordinater, tidsstempel og bilder, helautomatisk, forseglet.',
      },
      {
        title: 'Timer og oppdrag registreres automatisk',
        desc: 'Hvert arbeidet minutt er knyttet til lokasjonen og oppdragstypen. Lederen ser status for hvert besøk med en gang stemplingen skjer.',
      },
      {
        title: 'Kunden mottar den digitalt signerte rapporten',
        desc: 'Ved oppdragets slutt genererer systemet en rapport med GPS, timer og digital signatur. Kunden verifiserer den selvstendig.',
      },
    ],
  },

  features: {
    title: 'Vedlikeholdsapp: total kontroll over hvert oppdrag.',
    items: [
      {
        title: 'GPS-verifisert oppmøte',
        desc: 'Hver ankomst og avreise blir forseglet med ekte GPS, tidsstempel og tildelt lokasjon. Forsvarlig overfor kunder og inspektører.',
      },
      {
        title: 'Vedlikeholdshistorikk per anlegg',
        desc: 'Hvert oppdrag er knyttet til lokasjonen eller anlegget. Komplett historikk er søkbar og nedlastbar.',
      },
      {
        title: 'Automatiske forseglede rapporter',
        desc: 'Etter hvert oppdrag genererer systemet en forseglet rapport: timer, GPS, bilder og digital signatur.',
      },
      {
        title: 'Teamplanlegging',
        desc: 'Tildel oppdrag, styr vakter og motta automatiske varsler om et oppdrag ikke åpnes eller lukkes i tide.',
      },
      {
        title: 'Fotodokumentasjon',
        desc: 'Teknikere tar bilder direkte fra appen: før, under og etter oppdraget. Hvert bilde er geotagget med tidsstempel.',
      },
      {
        title: 'Stemple inn med ett trykk',
        desc: 'Teknikeren stempler inn med GPS, markerer pauser og avslutter oppdraget med ett trykk. Hvert bilde som tas forblir koblet til oppdraget og tidspunktene.',
      },
    ],
  },

  testimonial: {
    quote:
      'Med GeoTapp er hvert vedlikeholdsbesøk sporbart. Kundene ser den komplette historikken per anlegg, og diskusjoner om timer eller utført arbeid blir sjeldnere.',
    author: 'Anders L.',
    role: 'Vedlikeholdsleder, facility management - Norge',
  },

  faq: {
    title: 'Ofte stilte spørsmål',
    subtitle: 'Det vi oftest blir spurt om før start.',
    items: [
      {
        q: 'Hvordan dokumenterer man periodiske vedlikeholdsbesøk?',
        a: 'GeoTapp genererer automatisk en rapport per besøk med GPS, timer og bilder. Komplett historikk per anlegg eller kundelokasjon, uten manuell registrering.',
      },
      {
        q: 'Kommer teknikerne virkelig i tide?',
        a: 'Med GeoTapp kan du verifisere ankomsttid og GPS-posisjon for hver tekniker så snart de stempler inn. Ingen oppringning nødvendig.',
      },
      {
        q: 'Hvordan beviser jeg den leverte vedlikeholdstjenesten overfor kunden?',
        a: 'GeoTapp opprettholder en komplett nedlastbar historikk per kundelokasjon: datoer, timer, GPS og bilder. Kunden verifiserer selvstendig.',
      },
      {
        q: 'Fungerer GeoTapp for eiendomsvedlikehold og anleggsservice?',
        a: 'Ja. GeoTapp brukes av vedlikeholdsfirmaer, facility management-selskaper og organisasjoner med distribuerte team. Plattformen skalerer fra 3 til 300 teknikere.',
      },
      {
        q: 'Er GeoTapp GDPR-kompatibelt?',
        a: 'GeoTapp er bygget for å holde seg innenfor GDPR: posisjon spores kun i aktiv arbeidstid, maler for ansattinformasjon følger med, og det samles ikke inn unødvendige data.',
      },
      {
        q: 'Hva koster GeoTapp for en vedlikeholdsbedrift?',
        a: 'Planene starter fra noen få euro per medarbeider per måned. Prøv gratis i 14 dager, uten binding.',
      },
    ],
  },

  cta: {
    title: 'Hvert vedlikeholdsoppdrag fortjener et bevis. GeoTapp skaper det.',
    subtitle:
      'Verifiserbare rapporter, ekte GPS, komplett historikk per anlegg. Arbeidet ditt blir forsvarlig.',
    primary: 'Start gratis nå!',
    secondary: 'Se Priser',
  },

  pricing_hint: {
    label: 'Fra',
    per: 'medarbeider/måned',
    note: '14 dagers gratis prøveperiode',
  },

  schema_sector_name: 'Vedlikehold',

  schema_faq: [
    {
      question: 'Hvordan dokumenterer man periodiske vedlikeholdsbesøk?',
      answer:
        'GeoTapp genererer automatisk en rapport per besøk med GPS, timer og bilder. Komplett historikk per anlegg eller kundelokasjon.',
    },
    {
      question: 'Kommer teknikerne virkelig i tide?',
      answer:
        'Med GeoTapp kan du verifisere ankomsttid og GPS-posisjon for hver tekniker så snart de stempler inn. Dataene er allerede i dashboardet ditt.',
    },
    {
      question: 'Hvordan beviser jeg den leverte vedlikeholdstjenesten?',
      answer:
        'GeoTapp opprettholder en komplett nedlastbar historikk per kundelokasjon: datoer, timer, GPS og bilder. Kunden verifiserer selvstendig.',
    },
  ],
};

export default content;
