import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App för installatörer och tekniker: uppdrag med GPS | GeoTapp',
    description: 'Dokumentera uppdrag, timmar och material för installatörer och tekniker, med position vid stämplingarna. Servicebevis som skapas automatiskt. Prova GeoTapp gratis.',
  },
  hero: {
    badge: 'App för installatörer, tekniker och serviceteam',
    h1_line1: 'Varje uppdrag dokumenterat,',
    h1_line2: 'varje timme registrerad.',
    subtitle: 'För el-, VVS- och andra installatörer och tekniker. GeoTapp kopplar ihop Flow + TimeTracker och registrerar GPS, timmar och foton för varje uppdrag, från servicebilen till kontoret utan telefonsamtal.',
    cta_primary: 'Prova GeoTapp gratis i 14 dagar',
    cta_note: 'Provperioden binder dig inte till något. Inget kreditkort krävs.',
  },
  pain: {
    title: 'Problem vi löser varje dag',
    items: [
      {
        title: 'Kunderna ifrågasätter timmarna på jobben',
        desc: 'GPS-stämplingar med tidsstämpel som verifierbart bevis. Uppgiften förseglas i samma ögonblick som jobbet utförs: varje ändring i efterhand kan upptäckas.',
      },
      {
        title: 'Du jagar teknikerna för att veta var de är',
        desc: 'Varje stämpling från teknikern kommer direkt in i översikten, med tid och position. Du vet var de har stämplat utan att ringa ett samtal.',
      },
      {
        title: 'Ofullständiga arbetsrapporter eller sådana som aldrig lämnas in',
        desc: 'Uppgifterna kommer för sent, ofullständiga eller inte alls. Att rekonstruera timmar och jobb vid månadsskiftet är ett eget arbete som kostar tid och pengar.',
      },
    ],
  },
  workflow: {
    title: 'Så fungerar det',
    subtitle: 'Tre enkla steg. Inget papper. Inga samtal.',
    steps: [
      {
        title: 'Teknikern stämplar in när jobbet börjar',
        desc: 'Öppnar uppdraget från smartphonen. GeoTapp registrerar position och tid i det ögonblicket och, om det behövs, foton: varje ändring kan upptäckas. Mellan två stämplingar registreras inget automatiskt.',
      },
      {
        title: 'Timmarna kopplas till rätt uppdrag',
        desc: 'Varje stämpling kopplas till rätt uppdrag. Ansvarig ser, stämpling för stämpling, vem som arbetar var.',
      },
      {
        title: 'Kundrapporten skapas utan att du skriver något',
        desc: 'När jobbet är klart skapar systemet en rapport med GPS, timmar och försegling. Kunden får den och verifierar den själv.',
      },
    ],
  },
  differenza: {
    title: 'App för installatörer: stämpling eller verifierbart bevis?',
    subtitle: 'De flesta appar registrerar bara tiden. GeoTapp tar fram verifierbara bevis.',
    rows: [
      {
        label: 'Vad som registreras',
        competitor: 'In- och utstämplingstid',
        geotapp: 'Tid + position vid stämplingen + foton + utfört arbete',
      },
      {
        label: 'Vem kan verifiera',
        competitor: 'Bara ditt kontor',
        geotapp: 'Du, beställaren, en tredje part, oberoende',
      },
      {
        label: 'Vid tvist',
        competitor: 'Bara ditt ord',
        geotapp: 'Förseglad rapport, varje ändring kan upptäckas',
      },
      {
        label: 'Arbetsrapport för jobbet',
        competitor: 'Manuell eller saknas',
        geotapp: 'Skapas automatiskt med GPS och foton',
      },
      {
        label: 'GDPR',
        competitor: 'Ofta oklart',
        geotapp: 'Byggd för att hålla sig inom ramarna för GDPR, blanketter ingår',
      },
    ],
  },
  prima_dopo: {
    title: 'Så ser det ut nu. Så ser det ut med GeoTapp.',
    prima: [
      'Kunden ifrågasätter sluttiden för jobbet och begär rabatt.',
      'Teknikern säger "jag la fyra timmar". Kunden säger "det står två".',
      'Du har inga bevis. Diskussionen pågår i flera dagar och betalningen är i fara.',
      'Vid månadsskiftet rekonstruerar du timmar och uppdrag från WhatsApp-meddelanden.',
    ],
    dopo: [
      'Ifrågasätter kunden? Du öppnar rapporten: foton, position, tider, försegling.',
      'Du skickar den. Diskussionen är över på en minut.',
      'Du har något att visa. Även teknikern har något i handen.',
      'Vid månadsskiftet är exporten redan klar, timmar och uppdrag sammanställda automatiskt.',
    ],
  },
  features: {
    title: 'Funktioner byggda för installatörer och tekniker',
    items: [
      {
        title: 'Verifierbar GPS-stämpling',
        desc: 'Varje in-, rast- och utstämpling kopplas till position, tid och uppdrag. Att visa för kunden eller för tillsynen när det behövs.',
      },
      {
        title: 'Förseglade fotobevis',
        desc: 'Teknikern tar foton från appen. Varje bild kopplas till jobbet med GPS och tidsstämpel: varje ändring efter att rapporten skapats kan upptäckas.',
      },
      {
        title: 'Hantering av uppdrag på flera arbetsplatser',
        desc: 'Fördela uppdrag, följ framstegen i varje jobb och få en varning om ett pass står öppet.',
      },
      {
        title: 'Automatiska digitala arbetsrapporter',
        desc: 'När jobbet är klart är rapporten redan färdig: timmar, foton och anteckningar. Inget papper, inga samtal. Kontoret skickar den till kunden från Flow med ett klick.',
      },
      {
        title: 'Export till lön och fakturering',
        desc: 'Exportera månadens närvaro och timmar per uppdrag. Lön och fakturering utgår från de färdiga uppgifterna, utan att du skriver av något igen.',
      },
      {
        title: 'Position bara vid stämpling',
        desc: 'Geolokalisering byggd för att hålla sig inom ramarna för GDPR: aldrig löpande, och informationen till medarbetarna undertecknas i appen innan man stämplar.',
      },
    ],
  },
  testimonial: {
    quote: 'När en kund ifrågasätter timmarna öppnar vi rapporten med position och foton, och kunden kontrollerar den själv.',
    author: 'Roberto F.',
    role: 'Ägare, installationsföretag, 20 tekniker',
  },
  faq: {
    title: 'Vanliga frågor',
    subtitle: 'Det vi oftast får frågor om innan man kommer igång.',
    items: [
      {
        q: 'Ifrågasätter kunderna timmarna på jobben?',
        a: 'Med GeoTapp får GPS-stämplingarna tidsstämpel i det ögonblick jobbet utförs, och varje ändring kan upptäckas. De är ett verifierbart bevis för de utförda timmarna när någon ifrågasätter dem.',
      },
      {
        q: 'Hur följer jag flera lag på olika uppdrag?',
        a: 'GeoTapp visar uppdragens status i en och samma översikt, uppdaterad varje gång en tekniker stämplar. Du ser vem som har stämplat på vilket uppdrag, utan att ringa.',
      },
      {
        q: 'Hur får jag faktureringen av jobben att gå snabbare?',
        a: 'GeoTapp skapar automatiskt en export av timmar och uppdrag, klar för ditt system. Inget att skriva av för hand: färre fel, och faktureringen utgår från de färdiga uppgifterna.',
      },
    ],
  },
  cta: {
    title: 'Prova GeoTapp gratis i 14 dagar',
    subtitle: 'Provperioden binder dig inte till något. Inget kreditkort krävs.',
    primary: 'Starta gratis provperiod',
    secondary: 'Se priserna',
  },
  pricing_hint: {
    label: 'TimeTracker-platser från',
    per: 'per tekniker och månad, plus Flow-planen från 39 € i månaden',
    note: 'Gratis provperiod i 14 dagar',
  },
  schema_sector_name: 'Installation',
  schema_faq: [
    {
      question: 'Ifrågasätter kunderna timmarna på jobben?',
      answer: 'Med GeoTapp får GPS-stämplingarna tidsstämpel i det ögonblick jobbet utförs, och varje ändring kan upptäckas. De är ett verifierbart bevis för de utförda timmarna när någon ifrågasätter dem.',
    },
    {
      question: 'Hur följer jag flera lag på olika uppdrag?',
      answer: 'GeoTapp visar uppdragens status i en och samma översikt, uppdaterad varje gång en tekniker stämplar. Du ser vem som har stämplat på vilket uppdrag, utan att ringa.',
    },
    {
      question: 'Hur får jag faktureringen av jobben att gå snabbare?',
      answer: 'GeoTapp skapar automatiskt en export av timmar och uppdrag, klar för ditt system. Inget att skriva av för hand: färre fel, och faktureringen utgår från de färdiga uppgifterna.',
    },
  ],
};

export default content;
