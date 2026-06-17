import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App för Installatörer & Tekniker: GPS-uppdrags­spårning | GeoTapp',
    description: 'Spåra uppdrag, timmar och material för VVS-, el- och rörinstallatörer med GPS. Automatiska tjänstebevis, inga kundtvister. Testa GeoTapp gratis.',
  },
  hero: {
    badge: 'App för installatörer, tekniker och serviceteam',
    h1_line1: 'Varje uppdrag dokumenterat,',
    h1_line2: 'varje timme registrerad.',
    subtitle: 'För el-, VVS-, rör- och mekaniska installatörer. GeoTapp kopplar ihop Flow + TimeTracker för att spåra GPS, timmar och foton per uppdrag, från servicebilen till kontoret utan telefonsamtal.',
    cta_primary: 'Testa GeoTapp gratis i 14 dagar',
    cta_note: 'Ingen bindning. Inget kreditkort krävs.',
  },
  pain: {
    title: 'Problem vi löser varje dag',
    items: [
      {
        title: 'Kunder bestrider de arbetade timmarna',
        desc: 'GPS-stämplingar tidsstämplade som obestridligt bevis. Data certifieras vid uppdragstillfället, kan inte redigeras i efterhand.',
      },
      {
        title: 'Jaga tekniker för uppdateringar',
        desc: 'Realtidskarta med status för varje uppdrag. Du vet var alla dina tekniker befinner sig utan att ringa ett enda samtal.',
      },
      {
        title: 'Ofullständiga eller saknade arbetsblad',
        desc: 'Data anländer sent, ofullständigt eller inte alls. Att rekonstruera timmar och uppdrag vid månadens slut är en extra uppgift som kostar tid och pengar.',
      },
    ],
  },
  workflow: {
    title: 'Så fungerar det',
    subtitle: 'Tre enkla steg. Inget papper. Inga samtal.',
    steps: [
      {
        title: 'Teknikern stämplar in via GPS vid start',
        desc: 'Öppnar uppdraget från sin smartphone. GeoTapp registrerar verkliga GPS-koordinater, tidsstämpel och foton, helt automatiskt, manipuleringssäkert.',
      },
      {
        title: 'Timmar registreras automatiskt per uppdrag',
        desc: 'Varje arbetad minut kopplas till rätt uppdrag. Chefen ser i realtid vem som arbetar var.',
      },
      {
        title: 'Kundrapporten genereras utan att skriva något',
        desc: 'Vid uppdragets slut genererar systemet en rapport med GPS, timmar och digital signatur. Kunden tar emot den och verifierar den på egen hand.',
      },
    ],
  },
  differenza: {
    title: 'Installatörs-app: tidsregistrering eller certifiering?',
    subtitle: 'De flesta appar registrerar bara tiden. GeoTapp producerar verifierbart bevis.',
    rows: [
      {
        label: 'Vad som registreras',
        competitor: 'In- och utstämplingstid',
        geotapp: 'Tid + verifierad GPS + foton + utfört arbete',
      },
      {
        label: 'Vem kan verifiera',
        competitor: 'Bara ditt kontor',
        geotapp: 'Du, kunden, en tredje part, oberoende',
      },
      {
        label: 'Vid tvist',
        competitor: 'Data inte försvarbar',
        geotapp: 'Förseglad rapport, manipuleringssäker',
      },
      {
        label: 'Uppdragsrapport',
        competitor: 'Manuell eller saknas',
        geotapp: 'Automatiskt genererad med GPS och foton',
      },
      {
        label: 'GDPR-efterlevnad',
        competitor: 'Ofta tveksam',
        geotapp: 'Kompatibel by design, formulär inkluderade',
      },
    ],
  },
  prima_dopo: {
    title: 'Vad som händer nu. Vad som händer med GeoTapp.',
    prima: [
      'Kunden bestrider sluttiden och begär rabatt.',
      'Teknikern säger "jag jobbade 4 timmar". Kunden säger "det står bara 2".',
      'Du har inga bevis. Diskussionen pågår i dagar och betalningen är i fara.',
      'Vid månadens slut rekonstruerar du timmar och uppdrag från WhatsApp-meddelanden.',
    ],
    dopo: [
      'Kunden bestrider? Öppna rapporten: foton, GPS, tidsstämpel, digital signatur.',
      'Du skickar den. Tvisten löses på en minut.',
      'Betalningen är säkrad. Teknikern är skyddad.',
      'Vid månadens slut är exporten redan klar, timmar och uppdrag aggregerade automatiskt.',
    ],
  },
  features: {
    title: 'Funktioner byggda för installatörer och serviceteam',
    items: [
      {
        title: 'Verifierbar GPS-stämpling',
        desc: 'Varje in- och utpassering är kopplad till plats, tidsstämpel och uppdrag. Försvarbar inför kunder och inspektörer.',
      },
      {
        title: 'Förseglade fotobevis',
        desc: 'Teknikern fotograferar direkt från appen. Varje bild är kopplad till uppdraget med GPS och tidsstämpel, manipuleringssäker efter generering.',
      },
      {
        title: 'Multi-plats uppdragsstyrning',
        desc: 'Tilldela uppdrag, spåra framsteg på alla platser och få automatiska varningar om ett uppdrag inte öppnas eller stängs i tid.',
      },
      {
        title: 'Automatiska digitala arbetsblad',
        desc: 'Vid uppdragets slut är rapporten klar: timmar, foton, anteckningar och signatur. Inget papper, inga samtal. Teknikern skickar den till kunden direkt från appen.',
      },
      {
        title: 'Export för lön och fakturering',
        desc: 'Exportera månatlig närvaro och timmar per uppdrag. Lönehantering och fakturering blir en fråga om minuter.',
      },
      {
        title: 'Inbyggd GDPR-efterlevnad',
        desc: 'Geolokalisering kompatibel by design med GDPR-regler. Mallar för integritetsinformation till anställda inkluderade.',
      },
    ],
  },
  testimonial: {
    quote: 'Kunder bestrider inte längre timmarna. Vi öppnar rapporten med GPS och foton och diskussionen slutar där.',
    author: 'Robert F.',
    role: 'Ägare, installationsföretag, 20 tekniker',
  },
  faq: {
    title: 'Vanliga frågor',
    subtitle: 'Vad folk frågar oss mest innan de börjar.',
    items: [
      {
        q: 'Bestrider kunder de arbetade timmarna på ett uppdrag?',
        a: 'Med GeoTapp tidsstämplas GPS-stämplingar vid uppdragstillfället och kan inte redigeras. De utgör obestridligt bevis för arbetade timmar och eliminerar varje tvist.',
      },
      {
        q: 'Hur övervakar jag flera team på olika uppdrag?',
        a: 'GeoTapp erbjuder en realtidskarta med status för varje uppdrag. Du vet exakt var dina tekniker befinner sig och vilket uppdrag de arbetar på, utan att ringa.',
      },
      {
        q: 'Hur snabbar jag upp faktureringen av avslutade uppdrag?',
        a: 'GeoTapp genererar automatiskt exporten av timmar och uppdrag klar för ditt bokföringsprogram. Ingen manuell inmatning, ingen felrisk, fakturering blir ett klick.',
      },
    ],
  },
  cta: {
    title: 'Testa GeoTapp gratis i 14 dagar',
    subtitle: 'Ingen bindning. Inget kreditkort krävs. Svar inom 12 arbetstimmar.',
    primary: 'Kom igång gratis',
    secondary: 'Se priser',
  },
  pricing_hint: {
    label: 'Från',
    per: 'tekniker/månad',
    note: '14 dagars gratis provperiod',
  },
  schema_sector_name: 'Installationsteknik',
  schema_faq: [
    {
      question: 'Bestrider kunder de arbetade timmarna på ett uppdrag?',
      answer: 'Med GeoTapp tidsstämplas GPS-stämplingar vid uppdragstillfället och kan inte redigeras. De utgör obestridligt bevis för arbetade timmar och eliminerar varje tvist.',
    },
    {
      question: 'Hur övervakar jag flera team på olika uppdrag?',
      answer: 'GeoTapp erbjuder en realtidskarta med status för varje uppdrag. Du vet exakt var dina tekniker befinner sig och vilket uppdrag de arbetar på, utan att ringa.',
    },
    {
      question: 'Hur snabbar jag upp faktureringen av avslutade uppdrag?',
      answer: 'GeoTapp genererar automatiskt exporten av timmar och uppdrag klar för ditt bokföringsprogram. Ingen manuell inmatning, ingen felrisk, fakturering blir ett klick.',
    },
  ],
};

export default content;
