import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App for renholdsbedrifter: team med GPS | GeoTapp',
    description:
      'Styr team, vakter og oppmøte med GPS-stemplinger. Tjenestebevis som lages automatisk når en kunde bestrider noe. App bygget med GDPR i tankene.',
  },

  hero: {
    badge: 'App for renholdsbedrifter og multiservice',
    h1_line1: 'Renholdsbedriften din,',
    h1_line2: 'styrt, stempling for stempling.',
    subtitle:
      'GPS-stemplinger, automatiske tjenestebevis og vaktstyring i én app. Ingen regneark, færre tvister. Bestrider kunden noe? Send rapporten i stedet for å diskutere.',
    cta_primary: 'Prøv det på en ekte kontrakt',
    cta_note: '14 dager, opptil 50 ansatte i felten, uten kredittkort.',
  },

  pain: {
    title: 'Problemer vi løser hver dag',
    items: [
      {
        title: 'Bestrider kundene de arbeidede timene?',
        desc: 'Hver stempling registrerer posisjon og klokkeslett. Send rapporten, så kan kunden selv verifisere den.',
      },
      {
        title: 'Er timelistene på papir upålitelige?',
        desc: 'Stemplinger fra smarttelefonen, uten noe skrevet inn for hånd. Dataene står slik de ble registrert: enhver endring kan oppdages.',
      },
      {
        title: 'Er det vanskelig å koordinere flere team?',
        desc: 'Du ser hvem som har stemplet, og hvor, på alle steder, i ett dashbord. Ingen telefonsamtaler.',
      },
    ],
  },

  prima_dopo: {
    title: 'Slik er det nå. Slik er det med GeoTapp.',
    prima: [
      'Kunden ringer og sier at toalettet ikke er rengjort.',
      'Den ansatte sier: «Det har jeg gjort.» Kunden sier: «Nei, det har du ikke.»',
      'Du har ingenting i hånden som beviser noe.',
      'Diskusjonen drar ut i dagevis. Noen ganger mister du kontrakten.',
    ],
    dopo: [
      'Kunden ringer og sier at toalettet ikke er rengjort.',
      'Du åpner rapporten for oppdraget: foto av det rene toalettet, klokkeslett, posisjon.',
      'Du sender den til kunden, og kunden verifiserer den selv.',
      'Du har noe å vise. Den ansatte har også noe i hånden.',
    ],
  },

  workflow: {
    title: 'Slik fungerer det',
    subtitle: 'Tre enkle trinn. Ingen papir. Ingen samtaler.',
    steps: [
      {
        title: 'Den ansatte stempler inn på stedet',
        desc: 'Åpner og lukker vakten fra smarttelefonen. GeoTapp registrerer posisjon og klokkeslett i det øyeblikket og, om nødvendig, bevisbilder. Mellom to stemplinger registreres ingenting automatisk.',
      },
      {
        title: 'Lederen ser hver stempling så snart den kommer',
        desc: 'Ett dashbord for alle steder. Du ser hvem som har stemplet, hvor og når, uten å jage noen.',
      },
      {
        title: 'Rapporten er klar automatisk',
        desc: 'Ved vaktens slutt lager systemet en forseglet rapport med GPS, bilder og kryptografisk segl. Send den til kunden, som selv kan verifisere den.',
      },
    ],
  },

  differenza: {
    title: 'Stempling eller tjenestebevis.',
    subtitle: 'De fleste appene registrerer klokkeslett. GeoTapp lager bevis til kunden din.',
    rows: [
      {
        label: 'Hva som registreres',
        competitor: 'Tidspunkt for inn- og utstempling',
        geotapp: 'Klokkeslett + posisjon ved stemplingen + bilder + utført arbeid',
      },
      {
        label: 'Hvem kan verifisere',
        competitor: 'Bare kontoret ditt',
        geotapp: 'Du selv, kunden eller en tredjepart, uavhengig',
      },
      {
        label: 'Ved uenighet',
        competitor: 'Bare ditt ord',
        geotapp: 'Forseglet rapport, enhver endring kan oppdages',
      },
      {
        label: 'Fotobevis',
        competitor: 'Fraværende eller løsrevet',
        geotapp: 'Vedlagt rapporten med tidsstempel og GPS',
      },
      {
        label: 'GDPR',
        competitor: 'Ofte uavklart',
        geotapp: 'Bygget for å holde seg innenfor rammene i GDPR, skjemaer inkludert',
      },
    ],
  },

  features: {
    title: 'App for renholdsbedrifter: tjenestebevis, ikke bare stemplinger.',
    items: [
      {
        title: 'Automatiske tjenestebevis',
        desc: 'Hvert avsluttede oppdrag lager en rapport med GPS, bilder og tidsstempel. Kunden mottar den og verifiserer den selv, uten tilgang til systemet ditt.',
      },
      {
        title: 'Oversikt over alle steder',
        desc: 'Du ser hvem som har stemplet, og hvor, i alle bygninger, etter hvert som hver stempling kommer. Ingen samtaler, ingen e-poster. Mellom to stemplinger registreres ingenting automatisk.',
      },
      {
        title: 'Rapporter som alle kan verifisere',
        desc: 'Hver rapport er forseglet, og enhver endring kan oppdages. En kunde, en inspektør eller en advokat kan verifisere den uavhengig.',
      },
      {
        title: 'Styring av vakter og team',
        desc: 'Tildel vakter, styr kontrakter, og få en varsling hvis en vakt står åpen.',
      },
      {
        title: 'Fotodokumentasjon',
        desc: 'De ansatte tar bilder direkte fra appen. Hvert bilde har klokkeslett og posisjon: et visuelt bevis på det utførte arbeidet.',
      },
      {
        title: 'De ansatte dine er beskyttet',
        desc: 'En verifiserbar rapport gir også den ansatte noe å svare med på ubegrunnede beskyldninger. Den som jobber godt, viser det med data.',
      },
    ],
  },

  testimonial: {
    quote:
      'Når en kunde bestrider et oppdrag, sender vi rapporten med bilder og posisjon, og kunden verifiserer den selv.',
    author: 'Rosa M.',
    role: 'Eier, renholdsbedrift',
  },

  faq: {
    title: 'Ofte stilte spørsmål',
    subtitle: 'Det vi oftest blir spurt om før dere kommer i gang.',
    items: [
      {
        q: 'Hvordan fungerer GPS-stempling for renholdsbedrifter?',
        a: 'Den ansatte stempler inn og ut fra smarttelefonen. GeoTapp registrerer GPS-posisjonen i det øyeblikket, og den er ikke skrevet inn for hånd. Hver stempling inngår i den forseglede rapporten med tidsstempel og posisjon, som kunden kan verifisere.',
      },
      {
        q: 'Kan jeg bevise overfor kunden at oppdraget er utført?',
        a: 'Ja. GeoTapp lager automatisk en forseglet rapport med GPS, bilder og tidsstempel når oppdraget er ferdig. Kunden mottar den og verifiserer den selv, uten tilgang til systemet ditt.',
      },
      {
        q: 'Er GeoTapp bygget for å holde seg innenfor GDPR ved geolokalisering av ansatte?',
        a: 'GeoTapp er bygget for å holde seg innenfor rammene i personvernreglene (GDPR): det registrerer bare posisjonen når den ansatte stempler (start, pause, slutt) eller tar et bevisbilde, lar de ansatte signere informasjonen i appen før første stempling og samler ikke inn unødvendige data. Mellom to stemplinger registreres ingenting automatisk.',
      },
      {
        q: 'Hvordan styrer jeg team fordelt på flere steder samtidig?',
        a: 'Med GeoTapp Flow har du ett dashbord for alle steder. Du ser hvem som har stemplet, og hvor, kan tildele kontrakter og få en varsling hvis en vakt står åpen.',
      },
      {
        q: 'Trenger jeg fortsatt timelister på papir?',
        a: 'Nei. GeoTapp erstatter timelistene på papir med stemplinger fra smarttelefonen. Dataene kan eksporteres til Excel eller CSV for lønnsbehandlingen.',
      },
      {
        q: 'Hva koster GeoTapp for en renholdsbedrift?',
        a: 'GeoTapp Flow starter på 39 € per måned; hver ansatt med TimeTracker-appen koster 3 € per måned ekstra (2,50 € fra den 26. plassen). Abonnementet har en minste varighet på 12 måneder. Prisene er eksklusive mva. Du kan prøve gratis i 14 dager, uten kredittkort.',
      },
      {
        q: 'GPS-sporer GeoTapp de ansatte?',
        a: 'Det er ingen løpende sporing. Den ansatte stempler inn og ut fra smarttelefonen, og hver stempling knyttes til en GPS-posisjon og et tidsstempel som registreres i det øyeblikket (start, pause, slutt) og når det tas et bevisbilde. Det er en posisjon som skal vise oppmøte, ikke overvåking: mellom to stemplinger registreres ingenting automatisk, og appen ber ikke om tillatelse til posisjon i bakgrunnen.',
      },
    ],
  },

  cta: {
    title: 'De ansatte dine jobber bra. Sørg for at kunden kan se det.',
    subtitle:
      'Hvert oppdrag blir til en rapport du kan vise, og som kunden selv kan verifisere.',
    primary: 'Start gratis prøveperiode',
    secondary: 'Se prisene',
  },

  pricing_hint: {
    label: 'TimeTracker-plasser fra',
    per: 'per ansatt per måned, pluss Flow-planen fra 39 € per måned (eksklusive mva.)',
    note: 'Gratis prøveperiode i 14 dager',
  },

  schema_sector_name: 'Renholdsbedrift',

  schema_faq: [
    {
      question: 'Hvordan fungerer GPS-stempling for renholdsbedrifter?',
      answer:
        'Den ansatte stempler inn og ut fra smarttelefonen. GeoTapp registrerer GPS-posisjonen i det øyeblikket, og den er ikke skrevet inn for hånd. Hver stempling inngår i den forseglede rapporten med tidsstempel og posisjon, som kunden kan verifisere.',
    },
    {
      question: 'Kan jeg bevise overfor kunden at oppdraget er utført?',
      answer:
        'Ja. GeoTapp lager automatisk en forseglet rapport med GPS, bilder og tidsstempel. Kunden mottar den og verifiserer den selv.',
    },
    {
      question: 'Er GeoTapp bygget for å holde seg innenfor GDPR ved geolokalisering av ansatte?',
      answer:
        'GeoTapp er bygget for å holde seg innenfor rammene i personvernreglene (GDPR): det registrerer bare posisjonen når den ansatte stempler (start, pause, slutt) eller tar et bevisbilde, lar de ansatte signere informasjonen i appen før første stempling og samler ikke inn unødvendige data. Mellom to stemplinger registreres ingenting automatisk.',
    },
    {
      question: 'GPS-sporer GeoTapp de ansatte?',
      answer:
        'Det er ingen løpende sporing. Den ansatte stempler inn og ut fra smarttelefonen, og hver stempling knyttes til en GPS-posisjon og et tidsstempel som registreres i det øyeblikket (start, pause, slutt) og når det tas et bevisbilde. Mellom to stemplinger registreres ingenting automatisk.',
    },
  ],
};

export default content;
