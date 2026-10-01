import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Byggapp: närvaro med GPS och lagstyrning | GeoTapp',
    description: 'Hantera närvaro, skift och lag på bygget med stämplingar med position. Förseglade rapporter som skapas automatiskt, för byggföretag.',
  },
  hero: {
    badge: 'App för byggföretag och byggarbetsplatser',
    h1_line1: 'Din byggarbetsplats dokumenterad,',
    h1_line2: 'vid varje stämpling.',
    subtitle: 'Stämplingar med position, lagstyrning och automatiska förseglade rapporter. Inget papper, och när någon ifrågasätter något har du något att visa. GeoTapp kopplar ihop Flow + TimeTracker för dig som driver byggarbetsplatser, underentreprenörer och projektledning.',
    cta_primary: 'Testa det på en riktig byggarbetsplats',
    cta_note: '14 dagar, upp till 50 medarbetare i fält, utan kreditkort.',
  },
  pain: {
    title: 'Problem vi löser varje dag',
    items: [
      {
        title: 'Vem var på byggarbetsplatsen, och när?',
        desc: 'Varje stämpling registrerar tid och position, som telefonen mäter i samma ögonblick och som inte är inskriven för hand. Den hamnar i den förseglade rapporten, som projektledningen kan verifiera.',
      },
      {
        title: 'Hur håller du ordning på underentreprenörerna?',
        desc: 'Registrera närvaron för alla lag, även underentreprenörerna, i en enda översikt som uppdateras vid varje stämpling.',
      },
      {
        title: 'Tar rapporterna från byggarbetsplatsen timmar?',
        desc: 'De skapas automatiskt med GPS, timmar och närvaro. Klara för projektledningen och för delredovisningarna utan manuell inmatning.',
      },
    ],
  },
  workflow: {
    title: 'Så fungerar det',
    subtitle: 'Tre enkla steg. Inget papper. Inga samtal.',
    steps: [
      {
        title: 'Medarbetaren stämplar in vid byggarbetsplatsen',
        desc: 'Startar passet från smartphonen. GeoTapp registrerar tid och position i det ögonblicket och, om det behövs, bevisfoton. Mellan två stämplingar registreras inget automatiskt.',
      },
      {
        title: 'Platschefen ser stämplingarna så fort de kommer in',
        desc: 'En översikt för alla lag och alla byggarbetsplatser. Vem som har stämplat, var och när, utan att behöva jaga någon per telefon.',
      },
      {
        title: 'Rapporten är klar för delredovisning och projektledning',
        desc: 'När dagen eller uppdraget är slut skapar systemet en förseglad rapport med närvaro, GPS och timmar. Klar för projektledningen utan en minuts manuellt arbete.',
      },
    ],
  },
  differenza: {
    title: 'Byggapp: tidsregistrering eller verifierbart bevis?',
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
        geotapp: 'Du, projektledningen, en tredje part, oberoende',
      },
      {
        label: 'Vid tvist',
        competitor: 'Bara ditt ord',
        geotapp: 'Förseglad rapport, varje ändring kan upptäckas',
      },
      {
        label: 'Rapport från byggarbetsplatsen',
        competitor: 'Manuell eller saknas',
        geotapp: 'Skapas automatiskt med GPS och närvaro',
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
      'Projektledningen frågar vem som var på bygget i tisdags. Ingen vet säkert.',
      'Närvarolistorna kommer ofullständiga, för sent eller oläsliga.',
      'Underentreprenören ifrågasätter timmarna. Du har inga bevis.',
      'Du gör delredovisningen för hand och bygger ihop uppgifterna från WhatsApp-meddelanden.',
    ],
    dopo: [
      'Projektledningen frågar vem som var på bygget i tisdags. Du öppnar dagens stämplingar: allt finns där.',
      'Närvaron registreras vid varje stämpling, med tid och position.',
      'Ifrågasätter underentreprenören något? Du visar den förseglade rapporten.',
      'Delredovisningen är redan klar: timmar, närvaro och GPS sammanställda automatiskt.',
    ],
  },
  features: {
    title: 'Funktioner byggda för byggarbetsplatsen',
    items: [
      {
        title: 'Förseglad GPS-närvaro',
        desc: 'Varje in- och utstämpling och varje rast på byggarbetsplatsen registreras med position och tid. Kan visas för projektledning, beställare och inspektörer när det behövs.',
      },
      {
        title: 'Översikt över flera byggarbetsplatser',
        desc: 'Följ flera byggarbetsplatser från en skärm: för varje byggarbetsplats ser du vem som har stämplat, var och när, så fort stämplingen kommer in.',
      },
      {
        title: 'Automatiska rapporter för delredovisningar',
        desc: 'Systemet skapar rapporter med närvaro, timmar och GPS sammanställda. Klara för delredovisningar och projektledning utan manuell inmatning.',
      },
      {
        title: 'Överblick över underentreprenörer',
        desc: 'Varje lag, internt eller externt, stämplar från sin smartphone. Platschefen ser alla i en och samma översikt utan att behöva jaga någon.',
      },
      {
        title: 'Förseglade fotobevis',
        desc: 'Medarbetarna tar foton från appen. Varje bild kopplas till byggarbetsplatsen med GPS och tidsstämpel: varje ändring i efterhand kan upptäckas.',
      },
      {
        title: 'Position bara vid stämpling',
        desc: 'Geolokalisering byggd för att hålla sig inom ramarna för GDPR: position bara vid stämpling, aldrig löpande, och informationen till medarbetarna undertecknas i appen innan man stämplar.',
      },
    ],
  },
  testimonial: {
    quote: 'Sedan vi började använda GeoTapp ber projektledningen oss inte längre om närvarolistor. Vi öppnar rapporten och delredovisningen är redan klar.',
    author: 'Giuseppe M.',
    role: 'Ägare, byggföretag, 35 anställda',
  },
  faq: {
    title: 'Vanliga frågor',
    subtitle: 'Det vi oftast får frågor om innan man kommer igång.',
    items: [
      {
        q: 'Vem var på byggarbetsplatsen, och när?',
        a: 'Varje stämpling registrerar tid och position, som telefonen mäter i samma ögonblick och som inte är inskriven för hand. Den hamnar i den förseglade rapporten, som projektledningen kan verifiera.',
      },
      {
        q: 'Hur håller du ordning på underentreprenörerna på byggarbetsplatsen?',
        a: 'GeoTapp registrerar närvaron för alla lag, även underentreprenörerna. Varje medarbetare stämplar från sin egen smartphone, och platschefen ser stämplingarna så fort de kommer in, i en och samma översikt.',
      },
      {
        q: 'Kräver rapporter från byggarbetsplatsen timmar av manuellt arbete?',
        a: 'Nej. GeoTapp skapar rapporterna automatiskt med GPS, timmar och närvaro. De är klara för projektledningen och för delredovisningarna utan manuell inmatning.',
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
    per: 'per medarbetare och månad, plus Flow-planen från 39 € i månaden',
    note: 'Gratis provperiod i 14 dagar',
  },
  schema_sector_name: 'Bygg',
  schema_faq: [
    {
      question: 'Vem var på byggarbetsplatsen, och när?',
      answer: 'Varje stämpling registrerar tid och position, som telefonen mäter i samma ögonblick och som inte är inskriven för hand. Den hamnar i den förseglade rapporten, som projektledningen kan verifiera.',
    },
    {
      question: 'Hur håller du ordning på underentreprenörerna på byggarbetsplatsen?',
      answer: 'GeoTapp registrerar närvaron för alla lag, även underentreprenörerna. Varje medarbetare stämplar från sin egen smartphone, och platschefen ser stämplingarna så fort de kommer in, i en och samma översikt.',
    },
    {
      question: 'Kräver rapporter från byggarbetsplatsen timmar av manuellt arbete?',
      answer: 'Nej. GeoTapp skapar rapporterna automatiskt med GPS, timmar och närvaro. De är klara för projektledningen och för delredovisningarna utan manuell inmatning.',
    },
  ],
};

export default content;
