import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App för underhåll: team och uppdrag med GPS | GeoTapp',
    description:
      'Hantera underhållsteam med GPS: uppdrag, skift, bevis på utförd tjänst. Fullständig historik för varje anläggning eller kundplats. Testa GeoTapp gratis.',
  },

  hero: {
    badge: 'App för underhållsteam',
    h1_line1: 'Ditt underhållsteam,',
    h1_line2: 'varje besök dokumenterat.',
    subtitle:
      'Registrera uppdragen, planera skiften och dokumentera varje besök med positionen vid stämplingen och bevisfoton. Fullständig historik för anläggningar och kunder, utan någon manuell inmatning.',
    cta_primary: 'Testa GeoTapp gratis i 14 dagar',
    cta_note: 'Provperioden binder dig inte till något. Inget kreditkort krävs.',
  },

  pain: {
    title: 'Problem vi löser varje dag',
    items: [
      {
        title: 'Hur dokumenterar du de periodiska uppdragen?',
        desc: 'Automatisk rapport med GPS, timmar och foton för varje besök. Historiken är komplett och kan laddas ned utan någon manuell inmatning.',
      },
      {
        title: 'Kommer teknikerna verkligen i utsatt tid?',
        desc: 'Du ser det så fort teknikern stämplar, utan samtal: ankomsttid och position finns redan i Flow, för varje plats.',
      },
      {
        title: 'Hur visar du kunderna den utförda tjänsten?',
        desc: 'Fullständig historik att ladda ned för varje plats: datum, timmar, GPS och foton. Kunden kontrollerar själv, utan att komma åt ditt system.',
      },
    ],
  },

  workflow: {
    title: 'Så fungerar det',
    subtitle: 'Tre enkla steg. Inget papper. Inga samtal.',
    steps: [
      {
        title: 'Teknikern stämplar med GPS vid ankomsten',
        desc: 'Teknikern öppnar uppdraget från smartphonen. GeoTapp registrerar tid och position i det ögonblicket, samt bevisfotona. Mellan två stämplingar registreras ingenting automatiskt.',
      },
      {
        title: 'Timmar och uppdrag registreras automatiskt',
        desc: 'De arbetade timmarna kopplas till platsen och typen av uppdrag. Chefen ser vid varje stämpling status för varje besök.',
      },
      {
        title: 'Kunden får den förseglade rapporten',
        desc: 'När uppdraget är klart skapar systemet en rapport med GPS, timmar och försegling. Kunden kontrollerar den själv, utan åtkomst till ditt system.',
      },
    ],
  },

  features: {
    title: 'App för underhåll: varje uppdrag dokumenterat.',
    items: [
      {
        title: 'Närvaro med position och tid',
        desc: 'Varje ankomst, rast och avfärd registreras med position, tid och tilldelad plats, och hamnar i den förseglade rapporten. Att visa för kunden eller tillsynsmyndigheten när det behövs.',
      },
      {
        title: 'Underhållshistorik per anläggning',
        desc: 'Varje uppdrag är kopplat till platsen eller anläggningen. Den fullständiga historiken kan läsas och laddas ned, av dig och av kunden.',
      },
      {
        title: 'Automatiska och förseglade rapporter',
        desc: 'När uppdraget är klart skapar systemet en förseglad rapport: timmar, positioner, foton och försegling. Kunden kan kontrollera den själv.',
      },
      {
        title: 'Planering av skift och team',
        desc: 'Tilldela uppdrag, hantera skiften och få en avisering om ett pass blir kvar öppet.',
      },
      {
        title: 'Fotodokumentation',
        desc: 'Teknikerna tar foton direkt från appen: före, under och efter uppdraget. Varje bild är kopplad till en plats och har en tidsstämpel.',
      },
      {
        title: 'Stämpling med ett tryck',
        desc: 'Teknikern stämplar in vid ankomsten med GPS, markerar raster och avslutar uppdraget med ett tryck. Varje foto som tas förblir kopplat till uppdraget och dess tider.',
      },
    ],
  },

  testimonial: {
    quote:
      'Med GeoTapp är varje underhållsuppdrag dokumenterat, och vi skickar rapporten för varje besök till kunderna.',
    author: 'Andrea L.',
    role: 'Underhållschef, fastighetsservice',
  },

  faq: {
    title: 'Vanliga frågor',
    subtitle: 'Det vi oftast får frågor om innan man kommer igång.',
    items: [
      {
        q: 'Hur dokumenterar du de periodiska underhållsuppdragen?',
        a: 'GeoTapp skapar automatiskt en rapport för varje besök med GPS, timmar och foton. Historiken är komplett och kan laddas ned per anläggning eller kundplats, utan någon manuell inmatning.',
      },
      {
        q: 'Kommer teknikerna verkligen i utsatt tid?',
        a: 'Med GeoTapp ser du ankomsttiden och positionen för varje tekniker i det ögonblick han eller hon stämplar. Inga samtal: uppgiften finns redan i Flow.',
      },
      {
        q: 'Hur visar jag kunderna det utförda underhållet?',
        a: 'GeoTapp sparar en fullständig historik att ladda ned för varje kundplats: datum, timmar, GPS och foton för varje uppdrag. Till kunden skickar du den förseglade rapporten, som kunden kontrollerar själv utan att komma åt ditt system.',
      },
      {
        q: 'Fungerar GeoTapp för underhåll av anläggningar och fastighetsservice?',
        a: 'Ja. GeoTapp används av underhållsföretag, fastighetsservice och företag med team fördelade på flera platser. Det passar allt från ett litet team till ett företag med hundratals tekniker.',
      },
      {
        q: 'Hur hanterar GeoTapp GDPR vid positionering?',
        a: 'GeoTapp är byggt för att hålla sig inom GDPR:s ramar: positionen registreras bara när teknikern stämplar (in, raster, ut) eller tar ett bevisfoto, informationen till medarbetaren signeras i appen före stämplingen och inga onödiga uppgifter samlas in.',
      },
      {
        q: 'Vad kostar GeoTapp för ett underhållsföretag?',
        a: 'GeoTapp Flow börjar på 39 € per månad; TimeTracker-platserna för teknikerna kostar 3 € per månad vardera upp till 25. Abonnemanget har en bindningstid på 12 månader. Först kan du testa det gratis i 14 dagar, utan kort.',
      },
    ],
  },

  cta: {
    title: 'Varje underhållsuppdrag förtjänar ett bevis. GeoTapp skapar det.',
    subtitle:
      'Verifierbara rapporter, position vid stämplingarna, fullständig historik för varje anläggning.',
    primary: 'Testa gratis i 14 dagar',
    secondary: 'Se priserna',
  },

  pricing_hint: {
    label: 'TimeTracker-platser från',
    per: 'per medarbetare och månad, plus Flow-abonnemang från 39 € per månad',
    note: 'Gratis provperiod i 14 dagar',
  },

  schema_sector_name: 'Underhåll',

  schema_faq: [
    {
      question: 'Hur dokumenterar du de periodiska underhållsuppdragen?',
      answer:
        'GeoTapp skapar automatiskt en rapport för varje besök med GPS, timmar och foton. Historiken är komplett och kan laddas ned per anläggning eller kundplats, utan någon manuell inmatning.',
    },
    {
      question: 'Kommer teknikerna verkligen i utsatt tid?',
      answer:
        'Med GeoTapp ser du ankomsttiden och positionen för varje tekniker i det ögonblick han eller hon stämplar. Uppgiften finns redan i Flow, utan samtal.',
    },
    {
      question: 'Hur visar jag kunderna det utförda underhållet?',
      answer:
        'GeoTapp sparar en fullständig historik att ladda ned för varje kundplats: datum, timmar, GPS och foton för varje uppdrag. Till kunden skickar du den förseglade rapporten, som kunden kontrollerar själv.',
    },
  ],
};

export default content;
