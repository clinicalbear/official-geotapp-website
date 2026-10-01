import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App för städföretag: lag med GPS | GeoTapp',
    description:
      'Hantera lag, pass och närvaro med GPS-stämplingar. Servicebevis som skapas automatiskt när en kund ifrågasätter något. App byggd med GDPR i åtanke.',
  },

  hero: {
    badge: 'App för städföretag och fastighetsservice',
    h1_line1: 'Ditt städföretag,',
    h1_line2: 'styrt, stämpling för stämpling.',
    subtitle:
      'GPS-stämplingar, automatiska servicebevis och passhantering i en app. Inga kalkylblad, färre tvister. Ifrågasätter kunden något? Skicka rapporten i stället för att diskutera.',
    cta_primary: 'Testa det på ett riktigt uppdrag',
    cta_note: '14 dagar, upp till 50 medarbetare i fält, utan kreditkort.',
  },

  pain: {
    title: 'Problem vi löser varje dag',
    items: [
      {
        title: 'Ifrågasätter kunderna de arbetade timmarna?',
        desc: 'Varje stämpling registrerar position och tid. Skicka rapporten, så kan kunden verifiera den själv.',
      },
      {
        title: 'Är pappersblanketterna för närvaro opålitliga?',
        desc: 'Stämplingar från smartphonen, utan att något skrivs in för hand. Uppgifterna står som de registrerades: varje ändring kan upptäckas.',
      },
      {
        title: 'Är det svårt att samordna flera lag?',
        desc: 'Du ser vem som har stämplat, och var, på alla platser, i en och samma översikt. Inga telefonsamtal.',
      },
    ],
  },

  prima_dopo: {
    title: 'Så ser det ut nu. Så ser det ut med GeoTapp.',
    prima: [
      'Kunden ringer och säger att toaletten inte har blivit städad.',
      'Medarbetaren säger: "Det har jag gjort." Kunden säger: "Nej, det har du inte."',
      'Du har inget i handen som bevisar något.',
      'Diskussionen drar ut i flera dagar. Ibland förlorar du kontraktet.',
    ],
    dopo: [
      'Kunden ringer och säger att toaletten inte har blivit städad.',
      'Du öppnar rapporten för uppdraget: foto av den städade toaletten, tid, position.',
      'Du skickar den till kunden, och kunden verifierar den själv.',
      'Du har något att visa. Medarbetaren har också något i handen.',
    ],
  },

  workflow: {
    title: 'Så fungerar det',
    subtitle: 'Tre enkla steg. Inget papper. Inga samtal.',
    steps: [
      {
        title: 'Medarbetaren stämplar in på plats',
        desc: 'Öppnar och avslutar passet från smartphonen. GeoTapp registrerar position och tid i det ögonblicket och, om det behövs, bevisfoton. Mellan två stämplingar registreras inget automatiskt.',
      },
      {
        title: 'Arbetsledaren ser varje stämpling så fort den kommer in',
        desc: 'En översikt för alla platser. Du ser vem som har stämplat, var och när, utan att behöva jaga någon.',
      },
      {
        title: 'Rapporten är klar automatiskt',
        desc: 'När passet är slut skapar systemet en förseglad rapport med GPS, foton och kryptografisk försegling. Skicka den till kunden, som kan verifiera den själv.',
      },
    ],
  },

  differenza: {
    title: 'Stämpling eller servicebevis.',
    subtitle: 'De flesta appar registrerar bara tiden. GeoTapp tar fram bevis åt din kund.',
    rows: [
      {
        label: 'Vad som registreras',
        competitor: 'In- och utstämplingstid',
        geotapp: 'Tid + position vid stämplingen + foton + utfört arbete',
      },
      {
        label: 'Vem kan verifiera',
        competitor: 'Bara ditt kontor',
        geotapp: 'Du själv, kunden eller en tredje part, oberoende',
      },
      {
        label: 'Vid tvist',
        competitor: 'Bara ditt ord',
        geotapp: 'Förseglad rapport, varje ändring kan upptäckas',
      },
      {
        label: 'Fotobevis',
        competitor: 'Saknas eller är lösryckt',
        geotapp: 'Bifogat rapporten med tidsstämpel och GPS',
      },
      {
        label: 'GDPR',
        competitor: 'Ofta oklart',
        geotapp: 'Byggd för att hålla sig inom ramarna för GDPR, blanketter ingår',
      },
    ],
  },

  features: {
    title: 'App för städföretag: servicebevis, inte bara stämplingar.',
    items: [
      {
        title: 'Automatiska servicebevis',
        desc: 'Varje avslutat uppdrag skapar en rapport med GPS, foton och tidsstämpel. Kunden får den och verifierar den själv, utan åtkomst till ditt system.',
      },
      {
        title: 'Överblick över alla platser',
        desc: 'Du ser vem som har stämplat, och var, i alla byggnader, allteftersom varje stämpling kommer in. Inga samtal, inga e-postmeddelanden. Mellan två stämplingar registreras inget automatiskt.',
      },
      {
        title: 'Rapporter som vem som helst kan verifiera',
        desc: 'Varje rapport är förseglad, och varje ändring kan upptäckas. En kund, en inspektör eller en advokat kan verifiera den oberoende.',
      },
      {
        title: 'Hantering av pass och lag',
        desc: 'Fördela pass, hantera uppdrag och få en varning om ett pass står öppet.',
      },
      {
        title: 'Fotodokumentation',
        desc: 'Medarbetarna tar foton direkt från appen. Varje bild har tid och position: ett visuellt bevis på det utförda arbetet.',
      },
      {
        title: 'Din personal är skyddad',
        desc: 'En verifierbar rapport ger också medarbetaren något att svara med mot ogrundade anklagelser. Den som arbetar bra visar det med uppgifter.',
      },
    ],
  },

  testimonial: {
    quote:
      'När en kund ifrågasätter ett uppdrag skickar vi rapporten med foton och position, och kunden verifierar den själv.',
    author: 'Rosa M.',
    role: 'Ägare, städföretag',
  },

  faq: {
    title: 'Vanliga frågor',
    subtitle: 'Det vi oftast får frågor om innan man kommer igång.',
    items: [
      {
        q: 'Hur fungerar GPS-stämpling för städföretag?',
        a: 'Medarbetaren stämplar in och ut från smartphonen. GeoTapp registrerar GPS-positionen i det ögonblicket, och den skrivs inte in för hand. Varje stämpling ingår i den förseglade rapporten med tidsstämpel och position, som kunden kan verifiera.',
      },
      {
        q: 'Kan jag bevisa för kunden att uppdraget har utförts?',
        a: 'Ja. GeoTapp skapar automatiskt en förseglad rapport med GPS, foton och tidsstämpel när uppdraget är klart. Kunden får den och verifierar den själv, utan åtkomst till ditt system.',
      },
      {
        q: 'Är GeoTapp byggt för att hålla sig inom GDPR vid geolokalisering av anställda?',
        a: 'GeoTapp är byggt för att hålla sig inom ramarna för dataskyddsreglerna (GDPR): det registrerar bara positionen när medarbetaren stämplar (start, rast, slut) eller tar ett bevisfoto, låter medarbetarna underteckna informationen i appen före första stämplingen och samlar inte in onödiga uppgifter. Mellan två stämplingar registreras inget automatiskt.',
      },
      {
        q: 'Hur hanterar jag lag som är fördelade på flera platser samtidigt?',
        a: 'Med GeoTapp Flow har du en enda översikt för alla platser. Du ser vem som har stämplat, och var, kan fördela uppdrag och få en varning om ett pass står öppet.',
      },
      {
        q: 'Behövs pappersblanketter för närvaro fortfarande?',
        a: 'Nej. GeoTapp ersätter pappersblanketterna med stämplingar från smartphonen. Uppgifterna kan exporteras till Excel eller CSV för lönehanteringen.',
      },
      {
        q: 'Vad kostar GeoTapp för ett städföretag?',
        a: 'GeoTapp Flow börjar på 39 € i månaden; varje medarbetare med TimeTracker-appen kostar 3 € i månaden extra (2,50 € från den 26:e platsen). Abonnemanget har en lägsta löptid på 12 månader. Priserna är exklusive moms. Du kan prova gratis i 14 dagar, utan kreditkort.',
      },
      {
        q: 'GPS-spårar GeoTapp medarbetarna?',
        a: 'Det finns ingen löpande spårning. Medarbetaren stämplar in och ut från smartphonen, och varje stämpling kopplas till en GPS-position och en tidsstämpel som registreras i det ögonblicket (start, rast, slut) och när ett bevisfoto tas. Det är en position som ska visa närvaro, inte övervaka: mellan två stämplingar registreras inget automatiskt, och appen ber inte om tillstånd till position i bakgrunden.',
      },
    ],
  },

  cta: {
    title: 'Dina medarbetare arbetar bra. Se till att kunden kan se det.',
    subtitle:
      'Varje uppdrag blir en rapport som du kan visa och som kunden kan verifiera själv.',
    primary: 'Starta gratis provperiod',
    secondary: 'Se priserna',
  },

  pricing_hint: {
    label: 'TimeTracker-platser från',
    per: 'per medarbetare och månad, plus Flow-planen från 39 € i månaden (exklusive moms)',
    note: 'Gratis provperiod i 14 dagar',
  },

  schema_sector_name: 'Städföretag',

  schema_faq: [
    {
      question: 'Hur fungerar GPS-stämpling för städföretag?',
      answer:
        'Medarbetaren stämplar in och ut från smartphonen. GeoTapp registrerar GPS-positionen i det ögonblicket, och den skrivs inte in för hand. Varje stämpling ingår i den förseglade rapporten med tidsstämpel och position, som kunden kan verifiera.',
    },
    {
      question: 'Kan jag bevisa för kunden att uppdraget har utförts?',
      answer:
        'Ja. GeoTapp skapar automatiskt en förseglad rapport med GPS, foton och tidsstämpel. Kunden får den och verifierar den själv.',
    },
    {
      question: 'Är GeoTapp byggt för att hålla sig inom GDPR vid geolokalisering av anställda?',
      answer:
        'GeoTapp är byggt för att hålla sig inom ramarna för dataskyddsreglerna (GDPR): det registrerar bara positionen när medarbetaren stämplar (start, rast, slut) eller tar ett bevisfoto, låter medarbetarna underteckna informationen i appen före första stämplingen och samlar inte in onödiga uppgifter. Mellan två stämplingar registreras inget automatiskt.',
    },
    {
      question: 'GPS-spårar GeoTapp medarbetarna?',
      answer:
        'Det finns ingen löpande spårning. Medarbetaren stämplar in och ut från smartphonen, och varje stämpling kopplas till en GPS-position och en tidsstämpel som registreras i det ögonblicket (start, rast, slut) och när ett bevisfoto tas. Mellan två stämplingar registreras inget automatiskt.',
    },
  ],
};

export default content;
