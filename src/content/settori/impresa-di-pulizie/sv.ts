import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App för Städföretag: GPS-Teamhantering & Servicebevis | GeoTapp',
    description:
      'Hantera städteam, scheman och närvaro med GPS i realtid. Automatiskt servicebevis, inga kundtvister. GDPR-kompatibel städapp.',
  },

  hero: {
    badge: 'App för städföretag och fastighetsservice',
    h1_line1: 'Ditt städföretag,',
    h1_line2: 'hanterat i realtid.',
    subtitle:
      'GPS-stämpling, automatiskt servicebevis och schemahantering i en app. Inga kalkylblad, inga tvister. Kunden klagar? Skicka rapporten och diskussionen är över.',
    cta_primary: 'Testa GeoTapp gratis i 14 dagar',
    cta_note: 'Ingen bindning. Inget kreditkort krävs.',
  },

  pain: {
    title: 'Problem vi löser varje dag',
    items: [
      {
        title: 'Kunder bestrider arbetade timmar?',
        desc: 'Varje stämpling är GPS-verifierad och tidsstämplad. Skicka rapporten och diskussionen slutar på trettio sekunder.',
      },
      {
        title: 'Papperstidrapporter är opålitliga?',
        desc: 'Automatisk registrering från smartphonen, inga manuella inmatningar. Datan är vad den är, och kan inte ändras.',
      },
      {
        title: 'Svårt att samordna flera team?',
        desc: 'Se var alla befinner sig i realtid, på alla platser, från en enda dashboard. Inga samtal.',
      },
    ],
  },

  prima_dopo: {
    title: 'Vad som händer nu. Vad som händer med GeoTapp.',
    prima: [
      'Kunden ringer och säger att badrummet inte städades.',
      'Städaren säger "Det har jag gjort". Kunden säger "Nej, det har du inte".',
      'Du har inget att bevisa någonting med.',
      'Diskussionen drar ut i dagar. Ibland förlorar du kontraktet.',
    ],
    dopo: [
      'Kunden ringer och säger att badrummet inte städades.',
      'Du öppnar uppdragsrapporten: foto av det rena badrummet, tid, GPS.',
      'Du skickar den. Diskussionen slutar på trettio sekunder.',
      'Kontraktet är säkert. Städaren är skyddad.',
    ],
  },

  workflow: {
    title: 'Så fungerar det',
    subtitle: 'Tre enkla steg. Noll papper. Noll samtal.',
    steps: [
      {
        title: 'Städaren stämplar med GPS',
        desc: 'Öppnar och stänger passet från sin smartphone. GeoTapp registrerar äkta GPS-koordinater, foton och tidsstämpel, helautomatiskt, manipuleringssäkert.',
      },
      {
        title: 'Ansvarig ser allt i realtid',
        desc: 'En dashboard för alla platser. Vet exakt vem som är på plats, var och sedan när, utan att jaga någon.',
      },
      {
        title: 'Rapporten är klar automatiskt',
        desc: 'Vid passens slut genererar systemet en förseglad rapport med GPS, foton och digital signatur. Skicka den till kunden, oberoende verifierbar.',
      },
    ],
  },

  differenza: {
    title: 'Stämpling vs Servicebevis.',
    subtitle: 'De flesta appar registrerar tider. GeoTapp producerar bevis för din kund.',
    rows: [
      {
        label: 'Vad den registrerar',
        competitor: 'In-/utstämplingstid',
        geotapp: 'Tid + verifierad GPS + foton + utförda uppgifter',
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
        label: 'Fotobevis',
        competitor: 'Saknas eller frånkopplat',
        geotapp: 'Bifogat rapport med tidsstämpel och GPS',
      },
      {
        label: 'GDPR-kompatibilitet',
        competitor: 'Ofta att kontrollera',
        geotapp: 'Kompatibelt by design, formulär inkluderade',
      },
    ],
  },

  features: {
    title: 'App för städföretag: servicebevis, inte bara stämpling.',
    items: [
      {
        title: 'Automatiskt servicebevis',
        desc: 'Varje avslutat uppdrag genererar en rapport med GPS, foton och tidsstämpel. Kunden tar emot den och verifierar oberoende.',
      },
      {
        title: 'Verklig kontroll över alla platser',
        desc: 'Se i realtid vem som är aktiv var, över alla byggnader samtidigt. Inga samtal, inga e-postmeddelanden.',
      },
      {
        title: 'Försvarbara rapporter överallt',
        desc: 'Varje rapport är digitalt signerad och manipuleringssäker. Giltig inför en kund, en inspektör eller en advokat.',
      },
      {
        title: 'Schema- och teamhantering',
        desc: 'Tilldela pass, hantera uppdrag och få automatiska varningar om ett uppdrag inte öppnas eller stängs i tid.',
      },
      {
        title: 'Fotodokumentation',
        desc: 'Städare tar foton direkt från appen. Varje bild är geotaggad med tidsstämpel, visuellt bevis för utfört arbete.',
      },
      {
        title: 'Din personal är skyddad',
        desc: 'En verifierbar rapport skyddar även städaren mot ogrundade anklagelser. Bra arbete bevisas av data.',
      },
    ],
  },

  testimonial: {
    quote:
      'Sedan vi började använda GeoTapp löses kundtvister på en minut. Vi skickar rapporten med foton och GPS, och diskussionen slutar där. Vi har inte förlorat ett enda kontrakt på ett år.',
    author: 'Susanne M.',
    role: 'Ägare, kommersiellt städföretag - Sverige',
  },

  faq: {
    title: 'Vanliga frågor',
    subtitle: 'Det vi oftast får frågor om innan start.',
    items: [
      {
        q: 'Hur fungerar GPS-stämpling för städföretag?',
        a: 'Städaren stämplar in och ut från sin smartphone. GeoTapp registrerar GPS-koordinaterna i det ögonblicket, inte manuellt inmatade. Varje stämpling är certifierad med tidsstämpel och position verifierbar av kunden.',
      },
      {
        q: 'Kan jag bevisa för kunden att tjänsten utfördes?',
        a: 'Ja. GeoTapp genererar automatiskt en förseglad rapport med GPS, foton och tidsstämpel efter varje uppdrag. Kunden tar emot den och verifierar oberoende.',
      },
      {
        q: 'Är GeoTapp GDPR-kompatibelt för GPS-registrering av anställda?',
        a: 'Ja. GeoTapp spårar plats endast under aktiv arbetstid, inkluderar mallar för medarbetarinformation och samlar inte in onödiga data.',
      },
      {
        q: 'Hur hanterar jag team på flera platser samtidigt?',
        a: 'Med GeoTapp Flow har du en dashboard för alla platser. Se i realtid vem som är aktiv var, tilldela uppdrag och få automatiska varningar.',
      },
      {
        q: 'Behövs papperstidrapporter fortfarande?',
        a: 'Nej. GeoTapp ersätter papperstidrapporter helt med automatisk GPS-registrering från smartphones. Data kan exporteras för lönehantering.',
      },
      {
        q: 'Vad kostar GeoTapp för ett städföretag?',
        a: 'Planerna börjar från några euro per medarbetare per månad. Testa gratis i 14 dagar, utan bindning.',
      },
    ],
  },

  cta: {
    title: 'Dina städare gör bra arbete. Se till att kunden ser det.',
    subtitle:
      'Varje uppdrag blir verifierbart servicebevis. Inga tvister, inga förlorade kontrakt.',
    primary: 'Starta gratis nu!',
    secondary: 'Se Priser',
  },

  pricing_hint: {
    label: 'Från',
    per: 'medarbetare/månad',
    note: '14 dagars gratis provperiod',
  },

  schema_sector_name: 'Städföretag',

  schema_faq: [
    {
      question: 'Hur fungerar GPS-stämpling för städföretag?',
      answer:
        'Städaren stämplar från sin smartphone. GeoTapp registrerar GPS-koordinater, inte manuellt inmatade. Varje stämpling är certifierad med tidsstämpel och position verifierbar av kunden.',
    },
    {
      question: 'Kan jag bevisa för kunden att tjänsten utfördes?',
      answer:
        'Ja. GeoTapp genererar automatiskt en förseglad rapport med GPS, foton och tidsstämpel. Kunden tar emot den och verifierar oberoende.',
    },
    {
      question: 'Är GeoTapp GDPR-kompatibelt för GPS-registrering av anställda?',
      answer:
        'Ja. GeoTapp spårar plats endast under aktiv arbetstid, inkluderar mallar för medarbetarinformation och samlar inte in onödiga data.',
    },
  ],
};

export default content;
