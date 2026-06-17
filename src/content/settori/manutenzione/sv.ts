import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Underhållsapp: Teamhantering och Uppdrag med GPS | GeoTapp',
    description:
      'Hantera underhållsteam med GPS: uppdrag, scheman, servicebevis. Komplett historik per anläggning eller kundplats. Testa GeoTapp gratis.',
  },

  hero: {
    badge: 'App för underhållsteam',
    h1_line1: 'Ditt underhållsteam,',
    h1_line2: 'alltid under kontroll.',
    subtitle:
      'Registrera uppdrag, planera scheman och dokumentera varje besök med äkta GPS och fotobevis. Komplett historik per anläggning och kund, utan manuell inmatning.',
    cta_primary: 'Testa GeoTapp gratis i 14 dagar',
    cta_note: 'Ingen bindning. Inget kreditkort krävs.',
  },

  pain: {
    title: 'Problem vi löser varje dag',
    items: [
      {
        title: 'Hur dokumenterar du periodiska underhållsbesök?',
        desc: 'Automatisk rapport med GPS, timmar och foton för varje besök. Komplett historik, nedladdningsbar, utan manuell inmatning.',
      },
      {
        title: 'Kommer teknikerna verkligen i tid?',
        desc: 'Realtidsverifiering utan samtal. GPS och ankomsttid finns redan i din dashboard, för varje plats.',
      },
      {
        title: 'Hur bevisar du den levererade tjänsten?',
        desc: 'Komplett nedladdningsbar historik per kundplats: datum, timmar, GPS och foton. Kunden verifierar självständigt, utan åtkomst till ditt system.',
      },
    ],
  },

  workflow: {
    title: 'Så fungerar det',
    subtitle: 'Tre enkla steg. Noll papper. Noll samtal.',
    steps: [
      {
        title: 'Teknikern stämplar GPS vid ankomst',
        desc: 'Öppnar uppdraget från sin smartphone. GeoTapp registrerar äkta GPS-koordinater, tidsstämpel och foton, helautomatiskt, manipuleringssäkert.',
      },
      {
        title: 'Timmar och uppdrag registreras automatiskt',
        desc: 'Varje arbetad minut kopplas till platsen och uppdragstypen. Ansvarig ser realtidsstatus för varje besök.',
      },
      {
        title: 'Kunden får den digitalt signerade rapporten',
        desc: 'Vid uppdragets slut genererar systemet en rapport med GPS, timmar och digital signatur. Kunden verifierar den självständigt.',
      },
    ],
  },

  features: {
    title: 'Underhållsapp: total kontroll över varje uppdrag.',
    items: [
      {
        title: 'GPS-verifierad närvaro',
        desc: 'Varje ankomst och avfärd är certifierad med äkta GPS, tidsstämpel och tilldelad plats. Försvarbart gentemot kunder och inspektörer.',
      },
      {
        title: 'Underhållshistorik per anläggning',
        desc: 'Varje uppdrag är kopplat till platsen eller anläggningen. Komplett historik är sökbar och nedladdningsbar.',
      },
      {
        title: 'Automatiska manipuleringssäkra rapporter',
        desc: 'Efter varje uppdrag genererar systemet en förseglad rapport: timmar, GPS, foton och digital signatur.',
      },
      {
        title: 'Teamplanering',
        desc: 'Tilldela uppdrag, hantera scheman och få automatiska varningar om ett uppdrag inte öppnas eller stängs i tid.',
      },
      {
        title: 'Fotodokumentation',
        desc: 'Tekniker tar foton direkt från appen: före, under och efter uppdraget. Varje bild är geotaggad med tidsstämpel.',
      },
      {
        title: 'Fungerar även offline',
        desc: 'På platser utan nätverkstäckning sparas data lokalt och synkroniseras så snart anslutningen återkommer.',
      },
    ],
  },

  testimonial: {
    quote:
      'Med GeoTapp är varje underhållsbesök spårbart. Kunderna ser den kompletta historiken per anläggning och det finns inga fler diskussioner om timmar eller utfört arbete.',
    author: 'Anders L.',
    role: 'Underhållschef, facility management - Sverige',
  },

  faq: {
    title: 'Vanliga frågor',
    subtitle: 'Det vi oftast får frågor om innan start.',
    items: [
      {
        q: 'Hur dokumenterar man periodiska underhållsbesök?',
        a: 'GeoTapp genererar automatiskt en rapport per besök med GPS, timmar och foton. Komplett historik per anläggning eller kundplats, utan manuell inmatning.',
      },
      {
        q: 'Kommer teknikerna verkligen i tid?',
        a: 'Med GeoTapp kan du verifiera ankomsttid och GPS-position för varje tekniker i realtid. Inget samtal behövs.',
      },
      {
        q: 'Hur bevisar jag den levererade underhållstjänsten för kunden?',
        a: 'GeoTapp upprätthåller en komplett nedladdningsbar historik per kundplats: datum, timmar, GPS och foton. Kunden verifierar självständigt.',
      },
      {
        q: 'Fungerar GeoTapp för fastighetsunderhåll och anläggningsservice?',
        a: 'Ja. GeoTapp används av underhållsföretag, facility management-företag och organisationer med distribuerade team. Plattformen skalar från 3 till 300 tekniker.',
      },
      {
        q: 'Är GeoTapp GDPR-kompatibelt?',
        a: 'Ja. GeoTapp spårar plats endast under aktiv arbetstid, inkluderar mallar för medarbetarinformation och samlar inte in onödiga data.',
      },
      {
        q: 'Vad kostar GeoTapp för ett underhållsföretag?',
        a: 'Planerna börjar från några euro per medarbetare per månad. Testa gratis i 14 dagar, utan bindning.',
      },
    ],
  },

  cta: {
    title: 'Varje underhållsuppdrag förtjänar ett bevis. GeoTapp skapar det.',
    subtitle:
      'Verifierbara rapporter, äkta GPS, komplett historik per anläggning. Ditt arbete blir försvarbart.',
    primary: 'Starta gratis nu!',
    secondary: 'Se Priser',
  },

  pricing_hint: {
    label: 'Från',
    per: 'medarbetare/månad',
    note: '14 dagars gratis provperiod',
  },

  schema_sector_name: 'Underhåll',

  schema_faq: [
    {
      question: 'Hur dokumenterar man periodiska underhållsbesök?',
      answer:
        'GeoTapp genererar automatiskt en rapport per besök med GPS, timmar och foton. Komplett historik per anläggning eller kundplats.',
    },
    {
      question: 'Kommer teknikerna verkligen i tid?',
      answer:
        'Med GeoTapp kan du verifiera ankomsttid och GPS-position för varje tekniker i realtid. Data finns redan i din dashboard.',
    },
    {
      question: 'Hur bevisar jag den levererade underhållstjänsten?',
      answer:
        'GeoTapp upprätthåller en komplett nedladdningsbar historik per kundplats: datum, timmar, GPS och foton. Kunden verifierar självständigt.',
    },
  ],
};

export default content;
