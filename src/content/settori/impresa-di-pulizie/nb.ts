import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App for Rengjøringsfirma: GPS-Teamstyring & Servicebevis | GeoTapp',
    description:
      'Styr rengjøringsteam, vaktplaner og oppmøte med GPS i sanntid. Automatisk servicebevis, null kundetvister. GDPR-kompatibel rengjøringsapp.',
  },

  hero: {
    badge: 'App for rengjøringsfirmaer og multiservice',
    h1_line1: 'Ditt rengjøringsfirma,',
    h1_line2: 'styrt i sanntid.',
    subtitle:
      'GPS-stempling, automatisk servicebevis og vaktstyring i én app. Ingen regneark, ingen tvister. Kunden klager? Send rapporten, og diskusjonen er over.',
    cta_primary: 'Prøv GeoTapp gratis i 14 dager',
    cta_note: 'Ingen binding. Ingen kredittkort påkrevd.',
  },

  pain: {
    title: 'Problemer vi løser hver dag',
    items: [
      {
        title: 'Kunder bestrider de arbeidede timene?',
        desc: 'Hver stempling er GPS-verifisert og tidsstemplet. Send rapporten, og diskusjonen ender på tretti sekunder.',
      },
      {
        title: 'Papirtimelister er upålitelige?',
        desc: 'Automatisk registrering fra smarttelefonen, ingen manuelle registreringer. Dataene er hva de er, og kan ikke endres.',
      },
      {
        title: 'Vanskelig å koordinere flere team?',
        desc: 'Se hvor alle er i sanntid, på alle lokasjoner, fra ett dashboard. Ingen oppringinger.',
      },
    ],
  },

  prima_dopo: {
    title: 'Hva som skjer nå. Hva som skjer med GeoTapp.',
    prima: [
      'Kunden ringer og sier at badet ikke ble vasket.',
      'Renholderen sier "Det har jeg gjort". Kunden sier "Nei, det har du ikke".',
      'Du har ingenting å bevise noe med.',
      'Diskusjonen drar ut i dager. Noen ganger mister du kontrakten.',
    ],
    dopo: [
      'Kunden ringer og sier at badet ikke ble vasket.',
      'Du åpner oppdrapsrapporten: bilde av det rene badet, tid, GPS.',
      'Du sender den. Diskusjonen ender på tretti sekunder.',
      'Kontrakten er sikker. Renholderen er beskyttet.',
    ],
  },

  workflow: {
    title: 'Slik fungerer det',
    subtitle: 'Tre enkle trinn. Null papir. Null oppringinger.',
    steps: [
      {
        title: 'Renholderen stempler med GPS',
        desc: 'Åpner og lukker vakten fra smarttelefonen. GeoTapp registrerer ekte GPS-koordinater, bilder og tidsstempel, helautomatisk, manipuleringssikkert.',
      },
      {
        title: 'Lederen ser alt i sanntid',
        desc: 'Ett dashboard for alle lokasjoner. Vet nøyaktig hvem som er på stedet, hvor og siden når, uten å jage noen.',
      },
      {
        title: 'Rapporten er klar automatisk',
        desc: 'Ved vaktens slutt genererer systemet en forseglet rapport med GPS, bilder og digital signatur. Send den til kunden, uavhengig verifiserbar.',
      },
    ],
  },

  differenza: {
    title: 'Stempling vs Servicebevis.',
    subtitle: 'De fleste apper registrerer tider. GeoTapp produserer bevis for kunden din.',
    rows: [
      {
        label: 'Hva det registrerer',
        competitor: 'Inn-/utstemplingstid',
        geotapp: 'Tid + verifisert GPS + bilder + utførte oppgaver',
      },
      {
        label: 'Hvem kan verifisere',
        competitor: 'Bare ditt kontor',
        geotapp: 'Deg, kunden, en tredjepart, selvstendig',
      },
      {
        label: 'Ved tvister',
        competitor: 'Data ikke forsvarlige',
        geotapp: 'Forseglet rapport, manipuleringssikker',
      },
      {
        label: 'Fotobevis',
        competitor: 'Manglende eller frakoblet',
        geotapp: 'Vedlagt rapport med tidsstempel og GPS',
      },
      {
        label: 'GDPR-overholdelse',
        competitor: 'Ofte å kontrollere',
        geotapp: 'Kompatibel by design, skjemaer inkludert',
      },
    ],
  },

  features: {
    title: 'App for rengjøringsfirma: servicebevis, ikke bare stempling.',
    items: [
      {
        title: 'Automatisk servicebevis',
        desc: 'Hvert fullført oppdrag genererer en rapport med GPS, bilder og tidsstempel. Kunden mottar den og verifiserer selvstendig.',
      },
      {
        title: 'Ekte kontroll over alle lokasjoner',
        desc: 'Se i sanntid hvem som er aktiv hvor, på alle bygg samtidig. Ingen oppringinger, ingen e-poster.',
      },
      {
        title: 'Forsvarlige rapporter overalt',
        desc: 'Hver rapport er digitalt signert og manipuleringssikker. Gyldig overfor en kunde, en inspektør eller en advokat.',
      },
      {
        title: 'Vakt- og teamstyring',
        desc: 'Tildel vakter, styr oppdrag og motta automatiske varsler om et oppdrag ikke åpnes eller lukkes i tide.',
      },
      {
        title: 'Fotodokumentasjon',
        desc: 'Renholdere tar bilder direkte fra appen. Hvert bilde er geotagget med tidsstempel, visuelt bevis for utført arbeid.',
      },
      {
        title: 'Ditt personale er beskyttet',
        desc: 'En verifiserbar rapport beskytter også renholderen mot grunnløse anklager. Godt arbeid bevises av data.',
      },
    ],
  },

  testimonial: {
    quote:
      'Siden vi begynte å bruke GeoTapp, løses kundetvister på ett minutt. Vi sender rapporten med bilder og GPS, og diskusjonen stopper der. Vi har ikke mistet en eneste kontrakt på et år.',
    author: 'Susanne M.',
    role: 'Eier, kommersielt rengjøringsfirma - Norge',
  },

  faq: {
    title: 'Ofte stilte spørsmål',
    subtitle: 'Det vi oftest blir spurt om før start.',
    items: [
      {
        q: 'Hvordan fungerer GPS-stempling for rengjøringsfirmaer?',
        a: 'Renholderen stempler inn og ut fra smarttelefonen. GeoTapp registrerer GPS-koordinatene i det øyeblikket, ikke manuelt registrert. Hver stempling er sertifisert med tidsstempel og posisjon verifiserbar av kunden.',
      },
      {
        q: 'Kan jeg bevise overfor kunden at tjenesten ble utført?',
        a: 'Ja. GeoTapp genererer automatisk en forseglet rapport med GPS, bilder og tidsstempel etter hvert oppdrag. Kunden mottar den og verifiserer selvstendig.',
      },
      {
        q: 'Er GeoTapp GDPR-kompatibelt for GPS-registrering av ansatte?',
        a: 'Ja. GeoTapp sporer posisjon kun i aktiv arbeidstid, inkluderer maler for ansattinformasjon og samler ikke inn unødvendige data.',
      },
      {
        q: 'Hvordan styrer jeg team på flere lokasjoner samtidig?',
        a: 'Med GeoTapp Flow har du ett dashboard for alle lokasjoner. Se i sanntid hvem som er aktiv hvor, tildel oppdrag og motta automatiske varsler.',
      },
      {
        q: 'Er papirtimelister fortsatt nødvendige?',
        a: 'Nei. GeoTapp erstatter papirtimelister fullstendig med automatisk GPS-registrering fra smarttelefoner. Data kan eksporteres for lønnsbehandling.',
      },
      {
        q: 'Hva koster GeoTapp for et rengjøringsfirma?',
        a: 'Planene starter fra noen få euro per medarbeider per måned. Prøv gratis i 14 dager, uten binding.',
      },
    ],
  },

  cta: {
    title: 'Dine renholdere gjør godt arbeid. Sørg for at kunden ser det.',
    subtitle:
      'Hvert oppdrag blir til verifiserbart servicebevis. Null tvister, null tapte kontrakter.',
    primary: 'Start gratis nå!',
    secondary: 'Se Priser',
  },

  pricing_hint: {
    label: 'Fra',
    per: 'medarbeider/måned',
    note: '14 dagers gratis prøveperiode',
  },

  schema_sector_name: 'Rengjøringsfirma',

  schema_faq: [
    {
      question: 'Hvordan fungerer GPS-stempling for rengjøringsfirmaer?',
      answer:
        'Renholderen stempler fra smarttelefonen. GeoTapp registrerer GPS-koordinater, ikke manuelt registrert. Hver stempling er sertifisert med tidsstempel og posisjon verifiserbar av kunden.',
    },
    {
      question: 'Kan jeg bevise overfor kunden at tjenesten ble utført?',
      answer:
        'Ja. GeoTapp genererer automatisk en forseglet rapport med GPS, bilder og tidsstempel. Kunden mottar den og verifiserer selvstendig.',
    },
    {
      question: 'Er GeoTapp GDPR-kompatibelt for GPS-registrering av ansatte?',
      answer:
        'Ja. GeoTapp sporer posisjon kun i aktiv arbeidstid, inkluderer maler for ansattinformasjon og samler ikke inn unødvendige data.',
    },
  ],
};

export default content;
