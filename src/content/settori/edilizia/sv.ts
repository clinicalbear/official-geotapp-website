import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Byggarbetsplats-app: GPS-närvaro & Lagstyrning | GeoTapp',
    description: 'Hantera närvaro, skift och säkerhet på byggarbetsplatsen med GPS i realtid. Förseglade stämplingar, automatiska rapporter. GDPR-kompatibel app för byggföretag.',
  },
  hero: {
    badge: 'App för byggföretag och byggarbetsplatser',
    h1_line1: 'Din byggarbetsplats under kontroll,',
    h1_line2: 'i realtid.',
    subtitle: 'GPS-förseglade stämplingar, lagstyrning och automatiska rapporter. Inget pappersarbete, inga tvister. GeoTapp kopplar ihop Flow + TimeTracker för platschefer, underentreprenörer och projektledning.',
    cta_primary: 'Testa det på en riktig byggarbetsplats',
    cta_note: '14 dagar, upp till 50 medarbetare i fält, utan kreditkort.',
  },
  pain: {
    title: 'Problem vi löser varje dag',
    items: [
      {
        title: 'Vem var på byggarbetsplatsen och när?',
        desc: 'Varje GPS-stämpling är tidsstämplad och förseglad. GeoTapp registrerar verkliga koordinater vid stämplingen, inte manuellt inmatade. Data kan verifieras av projektledningen när som helst.',
      },
      {
        title: 'Hur hanterar du underentreprenörer?',
        desc: 'Spåra tillträde och närvaro för alla lag, inklusive underentreprenörer, från en enda realtidspanel.',
      },
      {
        title: 'Tar byggarbetsplatsrapporter timmar?',
        desc: 'Genereras automatiskt med GPS, timmar och närvaro. Klara för projektledning och delredovisningar utan manuell inmatning.',
      },
    ],
  },
  workflow: {
    title: 'Så fungerar det',
    subtitle: 'Tre enkla steg. Inget papper. Inga samtal.',
    steps: [
      {
        title: 'Arbetaren stämplar in vid byggarbetsplatsen',
        desc: 'Startar skiftet från sin smartphone. GeoTapp registrerar verkliga GPS-koordinater, tidsstämpel och, vid behov, foton. Helt automatiskt, varje ändring syns.',
      },
      {
        title: 'Platschefen ser allt i realtid',
        desc: 'En panel för alla lag och alla byggarbetsplatser. Vem som är närvarande, var och sedan när, utan att jaga någon per telefon.',
      },
      {
        title: 'Rapporten är klar för delredovisningar',
        desc: 'Vid dagens eller projektets slut genererar systemet en förseglad rapport med närvaro, GPS och timmar. Klar för projektledningen utan en minuts manuellt arbete.',
      },
    ],
  },
  differenza: {
    title: 'Byggarbetsplats-app: tidsregistrering eller verifierbart bevis?',
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
        geotapp: 'Du, projektledningen, en tredje part, oberoende',
      },
      {
        label: 'Vid tvist',
        competitor: 'Data inte försvarbar',
        geotapp: 'Förseglad rapport, varje ändring syns',
      },
      {
        label: 'Byggarbetsplatsrapport',
        competitor: 'Manuell eller saknas',
        geotapp: 'Automatiskt genererad med GPS och närvaro',
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
      'Projektledningen frågar vem som var på platsen på tisdag. Ingen vet säkert.',
      'Närvarolistor anländer ofullständiga, sena eller oläsliga.',
      'Underentreprenören bestrider timmarna. Du har inga bevis.',
      'Du förbereder delredovisningen manuellt och sätter ihop data från WhatsApp-meddelanden.',
    ],
    dopo: [
      'Projektledningen frågar vem som var på tisdag. Öppna panelen: allt finns där.',
      'Närvaro registreras automatiskt med GPS och tidsstämpel.',
      'Underentreprenören bestrider? Visa den förseglade rapporten.',
      'Delredovisningen är redan klar: timmar, närvaro och GPS aggregerat automatiskt.',
    ],
  },
  features: {
    title: 'Funktioner byggda för byggarbetsplatsen',
    items: [
      {
        title: 'GPS-förseglad närvaro',
        desc: 'Varje in- och utpassering registreras med verklig GPS-position och tidsstämpel. Försvarbar inför projektledning, kunder och inspektörer.',
      },
      {
        title: 'Multi-byggarbetsplats-panel',
        desc: 'Övervaka flera byggarbetsplatser från en enda skärm. Se i realtid vem som är närvarande, var och sedan när, för varje aktiv byggarbetsplats.',
      },
      {
        title: 'Automatiska framstegsrapporter',
        desc: 'Systemet genererar rapporter med aggregerad närvaro, timmar och GPS. Klara för delredovisningar och projektledning utan manuell inmatning.',
      },
      {
        title: 'Underentreprenörsspårning',
        desc: 'Varje lag, internt eller externt, stämplar in från sin smartphone. Platschefen ser alla på en panel utan att jaga någon.',
      },
      {
        title: 'Förseglade fotobevis',
        desc: 'Arbetare tar foton från appen. Varje bild är kopplad till byggarbetsplatsen med GPS och tidsstämpel, varje ändring syns efter generering.',
      },
      {
        title: 'Inbyggd GDPR-efterlevnad',
        desc: 'Geolokalisering kompatibel by design med GDPR-regler och integritetsriktlinjer. Mallar för integritetsinformation till anställda inkluderade.',
      },
    ],
  },
  testimonial: {
    quote: 'Sedan vi började använda GeoTapp ber projektledningen inte längre om närvarolistor. Vi öppnar rapporten och delredovisningen är klar.',
    author: 'Josef M.',
    role: 'Ägare, byggföretag, 35 anställda',
  },
  faq: {
    title: 'Vanliga frågor',
    subtitle: 'Vad folk frågar oss mest innan de börjar.',
    items: [
      {
        q: 'Vilken byggarbetsplats app behöver jag för att veta vilka som var på plats?',
        a: 'En app för byggarbetsplats som registrerar in- och utstämpling med GPS på plats, inte i efterhand och inte manuellt inmatad. Det är skillnaden som betyder något när någon frågar vilka av dina montörer som var på vilken byggarbetsplats en viss dag. GeoTapp stämplar från arbetarens egen telefon, låser koordinaterna och tiden vid stämplingsögonblicket och samlar allt per byggarbetsplats, så att timmarna går att följa tillbaka till en plats och en tidpunkt i stället för till en minneslista i slutet av månaden.',
      },
      {
        q: 'Vem var på byggarbetsplatsen och när?',
        a: 'Varje GPS-stämpling är tidsstämplad och förseglad. GeoTapp registrerar verkliga koordinater vid stämplingen, inte manuellt inmatade. Data kan verifieras av projektledningen när som helst.',
      },
      {
        q: 'Ersätter GeoTapp den elektroniska personalliggaren?',
        a: 'Nej, och det ska sägas rakt ut. Den elektroniska personalliggaren är reglerad i skatteförfarandelagstiftningen, byggherren anmäler byggarbetsplatsen till Skatteverket innan arbetet påbörjas och ansvarar för att utrustningen finns på plats. Kontrollavgifterna är kännbara, 25 000 kronor om byggarbetsplatsen inte har anmälts, 12 500 kronor om liggaren saknas eller inte förs på rätt sätt, och 2 500 kronor för varje person som är på plats utan att vara registrerad. GeoTapp är inget personalliggarsystem och tar inte över den skyldigheten. Det appen ger dig är din egen tidsregistrering per byggarbetsplats, med GPS-verifierad in- och utstämpling och förseglade tidsstämplar där varje ändring syns, så att du vet vilka av dina egna montörer som var var och när, även när underentreprenörerna är många.',
      },
      {
        q: 'Hur hanterar du underentreprenörer på byggarbetsplatsen?',
        a: 'GeoTapp spårar tillträde och närvaro för alla lag, inklusive underentreprenörer. Varje arbetare stämplar från sin smartphone och platschefen ser allt i realtid på en panel.',
      },
      {
        q: 'Kräver byggarbetsplatsrapporter timmars manuellt arbete?',
        a: 'Nej. GeoTapp genererar rapporter automatiskt med GPS, timmar och närvaro. De är klara för projektledning och delredovisningar utan manuell inmatning.',
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
    per: 'arbetare/månad',
    note: '14 dagars gratis provperiod',
  },
  schema_sector_name: 'Byggbranschen',
  schema_faq: [
    {
      question: 'Vilken byggarbetsplats app behöver jag för att veta vilka som var på plats?',
      answer: 'En app för byggarbetsplats som registrerar in- och utstämpling med GPS på plats, inte i efterhand och inte manuellt inmatad. GeoTapp stämplar från arbetarens egen telefon, låser koordinaterna och tiden vid stämplingsögonblicket och samlar allt per byggarbetsplats, så att timmarna går att följa tillbaka till en plats och en tidpunkt.',
    },
    {
      question: 'Ersätter GeoTapp den elektroniska personalliggaren?',
      answer: 'Nej. Den elektroniska personalliggaren är reglerad i skatteförfarandelagstiftningen, byggherren anmäler byggarbetsplatsen till Skatteverket innan arbetet påbörjas och ansvarar för att utrustningen finns på plats. GeoTapp är inget personalliggarsystem och tar inte över den skyldigheten. Det appen ger dig är din egen tidsregistrering per byggarbetsplats, med GPS-verifierad in- och utstämpling och förseglade tidsstämplar där varje ändring syns.',
    },
    {
      question: 'Vem var på byggarbetsplatsen och när?',
      answer: 'Varje GPS-stämpling är tidsstämplad och förseglad. GeoTapp registrerar verkliga koordinater vid stämplingen, inte manuellt inmatade. Data kan verifieras av projektledningen när som helst.',
    },
    {
      question: 'Hur hanterar du underentreprenörer på byggarbetsplatsen?',
      answer: 'GeoTapp spårar tillträde och närvaro för alla lag, inklusive underentreprenörer. Varje arbetare stämplar från sin smartphone och platschefen ser allt i realtid på en panel.',
    },
    {
      question: 'Kräver byggarbetsplatsrapporter timmars manuellt arbete?',
      answer: 'Nej. GeoTapp genererar rapporter automatiskt med GPS, timmar och närvaro. De är klara för projektledning och delredovisningar utan manuell inmatning.',
    },
  ],
};

export default content;
