import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Byggeplass-app: GPS-oppmøte & Lagstyring | GeoTapp',
    description: 'Administrer oppmøte, skift og sikkerhet på byggeplassen med GPS i sanntid. Sertifiserte stemplinger, automatiske rapporter. GDPR-kompatibel app for byggefirmaer.',
  },
  hero: {
    badge: 'App for byggefirmaer og byggeplasser',
    h1_line1: 'Din byggeplass under kontroll,',
    h1_line2: 'i sanntid.',
    subtitle: 'GPS-sertifiserte stemplinger, lagstyring og automatiske rapporter. Null papirarbeid, null tvister. GeoTapp kobler Flow + TimeTracker for anleggsledere, underentreprenører og prosjektledelse.',
    cta_primary: 'Prøv GeoTapp gratis i 14 dager',
    cta_note: 'Ingen binding. Ingen kredittkort påkrevd.',
  },
  pain: {
    title: 'Problemer vi løser hver dag',
    items: [
      {
        title: 'Hvem var på byggeplassen og når?',
        desc: 'Hver GPS-stempling er tidsstemplet og sertifisert. GeoTapp registrerer reelle koordinater i stemplingsøyeblikket, ikke lagt inn manuelt. Data kan verifiseres av prosjektledelsen når som helst.',
      },
      {
        title: 'Hvordan styrer du underentreprenører?',
        desc: 'Spor tilgang og oppmøte for alle lag, inkludert underentreprenører, fra ett sanntidsdashboard.',
      },
      {
        title: 'Tar byggeplassrapporter timer?',
        desc: 'Generert automatisk med GPS, timer og oppmøte. Klare for prosjektledelse og fremdriftsrapporter uten manuell inntasting.',
      },
    ],
  },
  workflow: {
    title: 'Slik fungerer det',
    subtitle: 'Tre enkle trinn. Null papir. Null samtaler.',
    steps: [
      {
        title: 'Arbeideren stempler inn ved byggeplassen',
        desc: 'Starter skiftet fra smarttelefonen. GeoTapp registrerer reelle GPS-koordinater, tidsstempel og, om nødvendig, bilder. Helautomatisk, manipulasjonssikkert.',
      },
      {
        title: 'Anleggslederen ser alt i sanntid',
        desc: 'Ett dashboard for alle lag og alle byggeplasser. Hvem som er til stede, hvor og siden når, uten å jage noen over telefonen.',
      },
      {
        title: 'Rapporten er klar for fremdriftsrapporter',
        desc: 'Ved dagens eller prosjektets slutt genererer systemet en forseglet rapport med oppmøte, GPS og timer. Klar for prosjektledelsen uten ett minutts manuelt arbeid.',
      },
    ],
  },
  differenza: {
    title: 'Byggeplass-app: tidsregistrering eller sertifisering?',
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
        geotapp: 'Deg, prosjektledelsen, en tredjepart, uavhengig',
      },
      {
        label: 'Ved tvist',
        competitor: 'Data ikke forsvarlig',
        geotapp: 'Forseglet rapport, manipulasjonssikker',
      },
      {
        label: 'Byggeplassrapport',
        competitor: 'Manuell eller fraværende',
        geotapp: 'Automatisk generert med GPS og oppmøte',
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
      'Prosjektledelsen spør hvem som var på plassen tirsdag. Ingen vet sikkert.',
      'Oppmøtelister ankommer ufullstendige, forsinket eller uleselige.',
      'Underentreprenøren bestrider timene. Du har ingen bevis.',
      'Du forbereder fremdriftsrapporten manuelt og setter sammen data fra WhatsApp-meldinger.',
    ],
    dopo: [
      'Prosjektledelsen spør hvem som var der tirsdag. Åpne dashboardet: alt er der.',
      'Oppmøte registreres automatisk med GPS og tidsstempel.',
      'Underentreprenøren bestrider? Vis den forseglede rapporten.',
      'Fremdriftsrapporten er allerede klar: timer, oppmøte og GPS aggregert automatisk.',
    ],
  },
  features: {
    title: 'Funksjoner bygget for byggeplassen',
    items: [
      {
        title: 'GPS-sertifisert oppmøte',
        desc: 'Hver inn- og utgang registreres med reell GPS-posisjon og tidsstempel. Forsvarlig overfor prosjektledelse, kunder og inspektører.',
      },
      {
        title: 'Multi-byggeplass-dashboard',
        desc: 'Overvåk flere byggeplasser fra én skjerm. Se i sanntid hvem som er til stede, hvor og siden når, for hver aktiv byggeplass.',
      },
      {
        title: 'Automatiske fremdriftsrapporter',
        desc: 'Systemet genererer rapporter med aggregert oppmøte, timer og GPS. Klare for fremdriftsrapporter og prosjektledelse uten manuell inntasting.',
      },
      {
        title: 'Underentreprenør-sporing',
        desc: 'Hvert lag, internt eller eksternt, stempler inn fra smarttelefonen. Anleggslederen ser alle på ett dashboard uten å jage noen.',
      },
      {
        title: 'Forseglet bildebevis',
        desc: 'Arbeidere tar bilder fra appen. Hvert bilde er koblet til byggeplassen med GPS og tidsstempel, manipulasjonssikkert etter generering.',
      },
      {
        title: 'Innebygd GDPR-samsvar',
        desc: 'Geolokalisering kompatibel by design med GDPR-regler og personvernretningslinjer. Maler for personvernerklæring til ansatte inkludert.',
      },
    ],
  },
  testimonial: {
    quote: 'Siden vi begynte å bruke GeoTapp, ber ikke prosjektledelsen lenger om oppmøtelister. Vi åpner rapporten og fremdriftsrapporten er klar.',
    author: 'Josef M.',
    role: 'Eier, byggefirma, 35 ansatte',
  },
  faq: {
    title: 'Ofte stilte spørsmål',
    subtitle: 'Hva folk spør oss mest om før de starter.',
    items: [
      {
        q: 'Hvem var på byggeplassen og når?',
        a: 'Hver GPS-stempling er tidsstemplet og sertifisert. GeoTapp registrerer reelle koordinater i stemplingsøyeblikket, ikke lagt inn manuelt. Data kan verifiseres av prosjektledelsen når som helst.',
      },
      {
        q: 'Hvordan styrer du underentreprenører på byggeplassen?',
        a: 'GeoTapp sporer tilgang og oppmøte for alle lag, inkludert underentreprenører. Hver arbeider stempler fra sin smarttelefon og anleggslederen ser alt i sanntid på ett dashboard.',
      },
      {
        q: 'Krever byggeplassrapporter timers manuelt arbeid?',
        a: 'Nei. GeoTapp genererer rapporter automatisk med GPS, timer og oppmøte. De er klare for prosjektledelse og fremdriftsrapporter uten manuell inntasting.',
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
    per: 'arbeider/måned',
    note: '14 dagers gratis prøveperiode',
  },
  schema_sector_name: 'Bygg og anlegg',
  schema_faq: [
    {
      question: 'Hvem var på byggeplassen og når?',
      answer: 'Hver GPS-stempling er tidsstemplet og sertifisert. GeoTapp registrerer reelle koordinater i stemplingsøyeblikket, ikke lagt inn manuelt. Data kan verifiseres av prosjektledelsen når som helst.',
    },
    {
      question: 'Hvordan styrer du underentreprenører på byggeplassen?',
      answer: 'GeoTapp sporer tilgang og oppmøte for alle lag, inkludert underentreprenører. Hver arbeider stempler fra sin smarttelefon og anleggslederen ser alt i sanntid på ett dashboard.',
    },
    {
      question: 'Krever byggeplassrapporter timers manuelt arbeid?',
      answer: 'Nei. GeoTapp genererer rapporter automatisk med GPS, timer og oppmøte. De er klare for prosjektledelse og fremdriftsrapporter uten manuell inntasting.',
    },
  ],
};

export default content;
