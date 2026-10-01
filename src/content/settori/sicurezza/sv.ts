import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Programvara för bevakningsföretag | GeoTapp skift med GPS',
    description: 'GeoTapp är programvaran för bevaknings- och säkerhetsföretag: skift med position vid stämplingarna, dokumenterade kontroller och bevisfoton. Byggd med GDPR i åtanke. Testa gratis.',
  },
  hero: {
    badge: 'Programvara för bevakningsföretag, väktare och evenemangsvakter',
    h1_line1: 'Verifierbar närvaro och skift',
    h1_line2: 'för bevakning och säkerhet',
    subtitle: 'GeoTapp Flow och TimeTracker dokumenterar väktarnas närvaro på tilldelade poster: position och tid vid varje stämpling, bevisfoton och förseglade rapporter. Skift, önskemål om passbyten och meddelanden på en enda plattform. Appen för bevakningsföretag som förseglar varje pass, varje ronderingsrunda och varje närvaro.',
    cta_primary: 'Testa gratis i 14 dagar',
    cta_note: 'Provperioden binder dig inte till något. Inget kreditkort.',
  },
  pain: {
    title: 'Problemen du redan känner till',
    items: [
      {
        title: 'Att visa närvaro på de tilldelade posterna',
        desc: 'Kunden bestrider att väktaren var på plats vid en viss tidpunkt. Utan registrerad position och tid står ditt ord mot hans, och du riskerar kontraktet.',
      },
      {
        title: 'Incidentrapporter utan bevis på plats',
        desc: 'En handskriven incidentrapport, utan registrerad position och tid, är lätt att bestrida.',
      },
      {
        title: 'Skiftöverlämning på papper',
        desc: 'Skiftbytet mellan väktare sker med lappar eller telefonsamtal. Viktig information går förlorad, ansvaret blir oklart och det är svårt att rekonstruera efteråt.',
      },
    ],
  },
  workflow: {
    title: 'Så fungerar det i tre steg',
    subtitle: 'Från posten till kontoret, utan papper.',
    steps: [
      {
        title: 'Väktaren stämplar på den tilldelade posten',
        desc: 'GeoTapp TimeTracker registrerar instämpling, raster och utstämpling med position och tid, samt bevisfoton vid kontrollpunkterna. Varje kontroll dokumenteras av väktaren med ett tryck: mellan två stämplingar registreras inget automatiskt.',
      },
      {
        title: 'Chefen ser passen så fort de kommer in',
        desc: 'Flow tar emot uppgifterna så fort de kommer in. Driftschefen kontrollerar bemanningen på alla poster, passbyten och eventuella avvikelser utan att ringa till fältet.',
      },
      {
        title: 'Rapporten är ditt bevis, redo att visa vid en granskning',
        desc: 'När passet är slut skapas närvaroregistret med de positioner som registrerats vid stämplingarna, och varje ändring syns. Kunden eller myndigheten kan själv kontrollera att det är oförändrat.',
      },
    ],
  },
  differenza: {
    title: 'Programvara för bevakningsföretag: närvaroregister eller verifierbara bevis?',
    subtitle: 'De flesta program registrerar passen. GeoTapp förseglar varje närvaro i en verifierbar rapport.',
    rows: [
      {
        label: 'Vad som registreras',
        competitor: 'Tid för passets start och slut',
        geotapp: 'Tid + position vid stämplingen + foto + position på den tilldelade posten',
      },
      {
        label: 'Vem kan kontrollera',
        competitor: 'Bara ditt kontor',
        geotapp: 'Du, beställaren eller myndigheten, på egen hand',
      },
      {
        label: 'Vid en tvist',
        competitor: 'Bara ditt ord',
        geotapp: 'Förseglad rapport, som utomstående kan kontrollera',
      },
      {
        label: 'Bevis på ronderingsrunda',
        competitor: 'Saknas eller finns på papper',
        geotapp: 'Position, tid och foto vid kontrollpunkten',
      },
      {
        label: 'GDPR',
        competitor: 'Ofta oklart',
        geotapp: 'Byggd för att hålla sig inom GDPR:s ramar, blanketter ingår',
      },
    ],
  },

  prima_dopo: {
    title: 'Så är det nu. Så blir det med GeoTapp.',
    prima: [
      'Kunden bestrider att väktaren var på plats vid en viss tidpunkt.',
      'Väktaren säger "jag var där". Kunden säger "det syns inte".',
      'Du har inget att bevisa det med. Tvisten drar ut på tiden.',
      'Du riskerar att förlora kontraktet.',
    ],
    dopo: [
      'Kunden bestrider att väktaren var på plats vid en viss tidpunkt.',
      'Du öppnar rapporten: position på den tilldelade posten, tider, foto av platsen.',
      'Du skickar den, och kunden kontrollerar den själv.',
      'Du har ett bevis att visa.',
    ],
  },

  scenario: {
    title: 'Ett typiskt fall',
    body: 'Beställaren hävdar att väktaren inte var på sin post vid en kritisk tidpunkt. Med GeoTapp öppnar du passrapporten: position registrerad vid kontrollpunkten, förseglad tidsstämpel, foto av platsen, allt registrerat från väktarens smartphone när väktaren stämplade och tog fotona.',
    resolution: 'I stället för ord mot ord finns ett dokument som beställaren kan kontrollera själv.',
  },

  features: {
    title: 'Programvara för bevakningsföretag: förseglade pass, dokumenterade kontroller.',
    items: [
      {
        title: 'Verifierbar stämpling med GPS för varje väktare',
        desc: 'Varje närvaro kopplas till position, tid och tilldelad post. Att visa för kunden, tillsynsmyndigheten eller vid en kontraktsgranskning när det behövs.',
      },
      {
        title: 'Register över väktarna',
        desc: 'Spara roll, kontaktuppgifter och tilldelade poster för varje väktare, och bestäm vem som ser vad i appen.',
      },
      {
        title: 'Export till Excel eller CSV för lön',
        desc: 'Exportera månadens närvaro till Excel eller CSV, redo för din redovisningsbyrå eller lönekontor. Lönehanteringen går snabbt och utan fel från omskrivning.',
      },
      {
        title: 'Digital skiftöverlämning',
        desc: 'Önskemål om passbyten går via appen och meddelandena finns kvar i uppdragets kanal: färre lappar och telefonsamtal mellan två pass.',
      },
      {
        title: 'Översikt över flera platser, uppdaterad vid varje stämpling',
        desc: 'Chefen ser den senast stämplade positionen för varje väktare, status för varje post och pågående passbyten, från vilken enhet som helst, utan telefonsamtal.',
      },
      {
        title: 'Rapporter som håller vid en granskning och inför myndigheterna',
        desc: 'Varje pass ger en förseglad rapport med positioner, tider och bevisfoton som kunden och myndigheterna kan kontrollera själva.',
      },
    ],
  },

  cta_mid: {
    title: 'Vill du se hur det fungerar i en riktig tvist?',
    body: 'Testa det på den riktiga tjänsten, från väktaren som stämplar på sin post till rapporten som beställaren får: 14 dagar gratis, utan kreditkort.',
    cta: 'Testa gratis i 14 dagar',
  },

  trust: {
    title: 'Varje ändring i våra rapporter syns, även om du eller vi gör den.',
    body: 'GeoTapps rapporter skapas av systemet när passet pågår. När rapporten väl är förseglad bryter en ändrad tid eller ett flyttat foto förseglingen, och kontrollen visar det. Den som får rapporten, beställare eller myndighet, kan kontrollera den själv.',
    badge: 'Kan kontrolleras av vem som helst, utan åtkomst till ditt konto',
  },
  testimonial: {
    quote: 'Vi skickar kunderna det förseglade närvaroregistret med positionerna från stämplingarna: när de bestrider något kontrollerar de själva.',
    author: 'Luca M.',
    role: 'Driftchef, bevakningsföretag',
  },
  faq: {
    title: 'Vanliga frågor',
    subtitle: 'Det vi oftast får frågor om innan man kommer igång.',
    items: [
      {
        q: 'Passar GeoTapp för bevakningsföretag och väktare?',
        a: 'Ja. Bevakningsföretag använder GeoTapp för att dokumentera närvaron på de tilldelade posterna med position, hantera skift och passbyten och samla bevisfoton vid kontrollpunkterna.',
      },
      {
        q: 'Hur hjälper GeoTapp till med incidentrapporter?',
        a: 'TimeTracker kopplar varje händelse till position och tid, som förseglas i rapporten. Incidentrapporten från GeoTapp innehåller koordinater, tid och foto, och beställaren kan själv kontrollera att dokumentet inte har ändrats.',
      },
      {
        q: 'Hjälper GeoTapp vid skiftbyte mellan väktare?',
        a: 'Ja. Önskemål om passbyten går via appen, passen finns i Flows kalender och meddelandena finns kvar i uppdragets kanal. Chefen ser vem som täcker vad utan att vara beroende av telefonsamtal.',
      },
    ],
  },
  cta: {
    title: 'Passet blev genomfört. Nu kan du visa det.',
    subtitle: 'GeoTapp skapar verifierbar dokumentation av varje bevakningsuppdrag, förseglade rapporter som kunden och myndigheterna kan kontrollera själva.',
    primary: 'Testa gratis i 14 dagar',
    secondary: 'Se priserna',
  },
  pricing_hint: {
    label: 'TimeTracker-platser från',
    per: 'per medarbetare och månad, plus Flow-abonnemang från 39 € per månad',
    note: 'Gratis provperiod i 14 dagar',
  },

  schema_sector_name: 'Bevakningsföretag',
  schema_faq: [
    {
      question: 'Fungerar GeoTapp för hantering av väktare och ronderingsrundor?',
      answer: 'Ja. GeoTapp gör det möjligt för säkerhetsföretag att försegla varje pass och varje runda: väktarna stämplar från smartphonen med position, och det ger dokumenterade bevis för den utförda tjänsten.',
    },
    {
      question: 'Hur dokumenterar jag ronderingsrundor och periodiska kontroller?',
      answer: 'Varje kontroll registreras med GeoTapp TimeTracker: tid, position, foto av platsen och anteckningar. Den förseglade rapporten är tillgänglig för beställaren så fort den skapats, eller när passet är slut.',
    },
    {
      question: 'Kan jag visa kunden att ronderingsrundorna har genomförts regelbundet?',
      answer: 'Ja. GeoTapps rapporter är förseglade och innehåller positioner, tider och bevisfoton från kontrollpunkterna. Beställaren kan själv kontrollera att rapporten inte har ändrats och se när och var väktaren stämplade.',
    },
    {
      question: 'Hjälper GeoTapp med nattarbete och kollektivavtalet för bevakning?',
      answer: 'GeoTapp registrerar arbetstider, övertid samt natt- och helgarbete och exporterar dem till din redovisningsbyrå eller ditt lönekontor, som tillämpar dem enligt gällande kollektivavtal. Den är byggd för att hålla sig inom GDPR:s ramar: position bara när väktaren stämplar.',
    },
    {
      question: 'Fungerar det även för att samordna flera team på olika platser?',
      answer: 'Ja. Med GeoTapp Flow ser chefen den senast stämplade positionen för alla väktare, tilldelar skift, hanterar akuta ersättningar och samlar rapporterna från alla platser på en enda skärm.',
    },
  ],
};

export default content;
