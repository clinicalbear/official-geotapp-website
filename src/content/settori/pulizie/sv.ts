import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App för städföretag: närvaro med GPS och foton per objekt',
    description: 'Stämpling med GPS bara vid start och slut och foton av varje uppdrag: bevisen att visa kunden när en tjänst bestrids. 14 dagar gratis.',
  },

  hero: {
    badge: 'App för städföretag, fastighetsservice och facility management',
    h1_line1: 'Appen för städföretag',
    h1_line2: 'som förseglar varje uppdrag.',
    subtitle:
      'GeoTapp är appen för städföretag som gör varje uppdrag till ett bevis att visa. Kunderna bestrider, och en nedskriven tid räcker inte. GeoTapp registrerar positionen vid varje stämpling, samlar bevisfotona och avslutar allt i en förseglad rapport, där varje ändring syns, som beställaren kan kontrollera själv.',
    cta_primary: 'Testa på ett riktigt uppdrag',
    cta_note: '14 dagar, upp till 50 medarbetare i fält, inget kreditkort.',
  },

  pain: {
    title: 'Om du inte kan visa det har det för kunden aldrig hänt.',
    items: [
      {
        title: 'Kunden nekar till att städningen gjordes',
        desc: 'Kunden säger att området inte har städats eller att medarbetaren inte var där. Du har en nedskriven tid, kunden sin version. Utan verifierbara bevis riskerar du kontraktet.',
      },
      {
        title: 'Medarbetare i fält som du inte kan kontrollera',
        desc: 'Du kan inte vara på alla platser. Du vet inte om jobbet är gjort förrän kunden klagar, och då är det redan för sent att rekonstruera något.',
      },
      {
        title: 'Tillsynen vill ha riktig dokumentation',
        desc: 'Tider, närvaro, övertid, raster: ett närvaroblad räcker inte. Den som kontrollerar vill ha registrerade tider, inte sådana som rekonstruerats ur minnet.',
      },
    ],
  },

  prima_dopo: {
    title: 'Så är det nu. Så blir det med GeoTapp.',
    prima: [
      'Kunden ringer och säger att toaletten inte har städats.',
      'Medarbetaren säger "jag gjorde det". Kunden säger "det gjorde han inte".',
      'Du har inget i handen att bevisa något med.',
      'Diskussionen pågår i dagar. Ibland förlorar du kontraktet.',
    ],
    dopo: [
      'Kunden ringer och säger att toaletten inte har städats.',
      'Du öppnar rapporten för uppdraget: foto av den städade toaletten, tid, position.',
      'Du skickar den. Du har svarat med data, och kunden kontrollerar dem själv.',
      'Du har ett bevis att visa. Även medarbetaren har något i handen.',
    ],
  },

  scenario: {
    title: 'Ett typiskt fall',
    body: 'Kunden säger att toaletten inte har städats. Med GeoTapp öppnar du rapporten och visar fotot av utrymmet, tiden då det togs och positionen, allt skapat automatiskt från medarbetarens app när uppdraget utfördes.',
    resolution: 'Du har svarat med data, inte med ditt ord mot kundens.',
  },

  differenza: {
    title: 'Stämpling eller verifierbart bevis på arbetet.',
    subtitle: 'De flesta appar registrerar data. GeoTapp skapar bevis.',
    rows: [
      {
        label: 'Vad som registreras',
        competitor: 'Tid för in- och utstämpling',
        geotapp: 'Tid + position vid stämplingen + foto + utfört arbete',
      },
      {
        label: 'Vem kan kontrollera',
        competitor: 'Bara ditt kontor',
        geotapp: 'Du, beställaren eller en utomstående, på egen hand',
      },
      {
        label: 'Vid en tvist',
        competitor: 'Bara ditt ord',
        geotapp: 'Förseglad rapport, varje ändring syns',
      },
      {
        label: 'Bevisfoto',
        competitor: 'Saknas eller är frikopplat',
        geotapp: 'Bifogat rapporten med tid och position',
      },
      {
        label: 'GDPR',
        competitor: 'Ofta oklart',
        geotapp: 'Byggd för att hålla sig inom GDPR:s ramar, blanketter ingår',
      },
      {
        label: 'Överblick uppdaterad vid varje stämpling',
        competitor: 'Nej',
        geotapp: 'Ja, alla platser, alla medarbetare',
      },
    ],
  },

  non_gestionale: {
    title: 'Det är inte bara ett affärssystem.',
    subtitle: 'Affärssystem organiserar arbetet. GeoTapp organiserar det och förseglar det dessutom.',
    items: [
      {
        label: 'Huvudsyfte',
        gestionale: 'Planera och organisera',
        geotapp: 'Skapa verifierbara bevis',
      },
      {
        label: 'Vad det skapar',
        gestionale: 'Data inom ditt eget system',
        geotapp: 'Förseglade rapporter som utomstående kan kontrollera',
      },
      {
        label: 'Vid en tvist',
        gestionale: 'Du visar data som bara du kan läsa',
        geotapp: 'Du skickar en rapport som kunden kontrollerar själv',
      },
      {
        label: 'Värde för kunden',
        gestionale: 'Inget, det är ett internt verktyg',
        geotapp: 'Högt: kunden kontrollerar den själv',
      },
      {
        label: 'Bevisfoto',
        gestionale: 'Ingår inte eller finns separat',
        geotapp: 'Inbyggt i rapporten med GPS och tidsstämpel',
      },
    ],
  },

  workflow: {
    title: 'Från arbetsplatsen till kontoret blir varje uppdrag ett bevis.',
    subtitle: 'Tre steg. Inget papper. Inga samtal.',
    steps: [
      {
        title: 'Medarbetaren förseglar beviset på plats',
        desc: 'Med GeoTapp TimeTracker registrerar medarbetaren instämpling, raster, utstämpling, foton av utrymmena och anteckningar från smartphonen. Positionen läses av från telefonen i det ögonblicket, matas inte in för hand, och varje senare ändring syns.',
      },
      {
        title: 'Kontoret är uppdaterat vid varje stämpling',
        desc: 'Flow visar på en enda skärm vem som har stämplat, var och när. Du ser status för varje byggnad, får en avisering om ett pass blir kvar öppet och tilldelar uppdrag, utan att jaga någon.',
      },
      {
        title: 'Rapporten är redan klar. Förseglad: varje ändring syns.',
        desc: 'När passet är slut skapar systemet automatiskt en förseglad rapport med positioner, foton och försegling. Beställaren får den och kontrollerar den själv, utan åtkomst till ditt system, utan att behöva lita på ditt ord.',
      },
    ],
  },

  features: {
    title: 'App för städföretag: färre diskussioner, fler bevis.',
    items: [
      {
        title: 'Svara på varje invändning med data',
        desc: 'När varje uppdrag har en verifierbar rapport har du dokumentationen att svara direkt. Färre muntliga förhandlingar som drar ut i veckor.',
      },
      {
        title: 'Verklig kontroll över alla platser',
        desc: 'Du vet var och när varje medarbetare har stämplat, så fort stämplingen kommer in, i alla byggnader och från vilken enhet som helst. Mellan två stämplingar registreras ingenting automatiskt.',
      },
      {
        title: 'Rapporter som håller på varje plats',
        desc: 'Varje rapport är förseglad: varje ändring syns. Den som får den, kund, inspektör eller rådgivare, kan kontrollera den själv.',
      },
      {
        title: 'Redo för tillsynen',
        desc: 'Tider, raster, övertid och tillägg registreras pass för pass och kommer med i sammanställningen till din redovisningsbyrå eller ditt lönekontor. Vid en kontroll är dokumentationen redan i ordning.',
      },
      {
        title: 'Hantering av flera platser utan samtal',
        desc: 'Tiotals platser, en enda skärm. Du tilldelar uppdrag, ser vem som har stämplat var och får en avisering om ett pass blir kvar öppet.',
      },
      {
        title: 'Din personal är skyddad',
        desc: 'En verifierbar rapport ger även medarbetaren något i handen mot ogrundade anklagelser. Den som gör ett bra jobb visar det.',
      },
    ],
  },

  cosa_cambia: {
    title: 'Vad som verkligen förändras.',
    items: [
      {
        title: 'Du behöver inte längre lita blint på medarbetarna.',
        desc: 'Inte för att de är opålitliga, utan för att du inte behöver. Systemet skapar beviset när uppdraget utförs, oberoende av vad de säger. Uppgiften förblir den som registrerades.',
      },
      {
        title: 'Du behöver inte längre försvara dig muntligt.',
        desc: 'Du slipper förklara, rättfärdiga och påminna. När en kund bestrider något öppnar du rapporten och skickar den. Det är inte ditt ord mot kundens. Det är ett verifierbart dokument.',
      },
      {
        title: 'Du har verifierbara bevis. Alltid.',
        desc: 'Varje avslutat uppdrag blir automatiskt en rapport: positioner, foton, tider och försegling. Du behöver inte göra något extra. Systemet gör det medan dina medarbetare arbetar.',
      },
    ],
  },

  prova_visiva: {
    title: 'Det du ser, det kunden ser.',
    subtitle: 'Appen för dem som arbetar i fält. Rapporten för dem som ska svara.',
  },

  cta_mid: {
    title: 'Vill du se hur det fungerar i ett riktigt fall?',
    body: 'Testa det på ett verkligt uppdrag, från medarbetaren som öppnar uppdraget till rapporten som kunden får: 14 dagar gratis, utan kreditkort.',
    cta: 'Testa gratis i 14 dagar',
  },

  testimonial: {
    quote:
      'Förut hade vi alltid någon kund som bestred. Sedan vi började använda GeoTapp skickar vi rapporten och samtalet ändras direkt: man pratar om data, inte om ord. Diskussionerna blir mycket kortare.',
    author: 'Roberta M.',
    role: 'Driftchef, industriell städning',
  },

  trust: {
    title: 'Om en av våra rapporter ändras syns det. Även om vi gör det själva.',
    body:
      'GeoTapps rapporter skapas av systemet när uppdraget utförs. När rapporten väl är förseglad bryter en ändrad tid eller ett flyttat foto förseglingen, och kontrollen visar det. Den som får rapporten, kund, inspektör eller rådgivare, kan kontrollera den själv.',
    badge: 'Kan kontrolleras av vem som helst, utan åtkomst till ditt konto',
  },

  faq: {
    title: 'Vanliga frågor',
    subtitle: 'Det vi oftast får frågor om innan man kommer igång.',
    items: [
      {
        q: 'Är GeoTapp bara en stämplingsapp för städföretag?',
        a: 'Nej. GeoTapp är ett system för verifierbara bevis på utfört arbete, inte bara en stämplingsapp. Stämplingsappar registrerar en tid. GeoTapp skapar en förseglad rapport med position, bevisfoton och tidsstämpel som beställaren kan kontrollera på egen hand. Skillnaden mellan "det står skrivet" och "det går att visa".',
      },
      {
        q: 'Kan det användas tillsammans med gällande kollektivavtal?',
        a: 'GeoTapp registrerar arbetstider, raster, övertid och tillägg, även natt- och helgarbete, och exporterar dem till Excel eller CSV för din redovisningsbyrå eller ditt lönekontor, som tillämpar dem enligt gällande kollektivavtal. Vid en kontroll har du all dokumentation redo.',
      },
      {
        q: 'Hur hanterar jag team fördelade på flera platser samtidigt?',
        a: 'Med GeoTapp Flow har du en enda skärm för alla platser. Du ser vem som har stämplat var så fort stämplingen kommer in, tilldelar uppdrag och får en avisering om ett pass blir kvar öppet. Inga samtal, inga e-postmeddelanden.',
      },
      {
        q: 'Hur kontrollerar jag att medarbetarna har utfört arbetet?',
        a: 'Varje uppdrag öppnas och avslutas med position registrerad från medarbetarens smartphone. Medarbetaren skickar bevisfoton kopplade till uppdraget, med tid och position. Rapporten skapas automatiskt och förseglas vid avslutet: varje ändring syns.',
      },
      {
        q: 'Hur hanterar GeoTapp GDPR vid positionering av medarbetare?',
        a: 'GeoTapp är byggt för att hålla sig inom GDPR:s ramar och IMY:s vägledning: positionen registreras bara när medarbetaren stämplar (in, raster, ut) eller tar ett bevisfoto, informationen signeras i appen före stämplingen och inga onödiga uppgifter samlas in.',
      },
      {
        q: 'Fungerar det även för fastighetsservice och facility management?',
        a: 'Ja. GeoTapp används av städföretag, fastighetsservice, facility management och alla verksamheter med medarbetare fördelade på flera platser. Det passar allt från ett litet team till ett företag med hundratals medarbetare, utan komplicerade inställningar.',
      },
      {
        q: 'Vad kostar GeoTapp för ett städföretag?',
        a: 'GeoTapp Flow börjar på 39 € per månad; TimeTracker-platserna för medarbetarna kostar 3 € per månad vardera upp till 25, 2,50 € från den tjugosjätte. Abonnemanget har en bindningstid på 12 månader. Först kan du testa det gratis i 14 dagar, utan kort.',
      },
    ],
  },

  cta: {
    title: 'Dina medarbetare gör ett bra jobb. Se till att det syns.',
    subtitle:
      'Varje dag blir jobbet gjort. Problemet är att utan verifierbara bevis står ditt ord mot kundens när någon bestrider. GeoTapp gör varje uppdrag till dokumentation att visa.',
    primary: 'Testa gratis i 14 dagar',
    secondary: 'Se priserna',
  },

  pricing_hint: {
    label: 'TimeTracker-platser från',
    per: 'per medarbetare och månad, plus Flow-abonnemang från 39 € per månad',
    note: 'Gratis provperiod i 14 dagar',
  },

  schema_sector_name: 'Städföretag',

  schema_faq: [
    {
      question: 'Är GeoTapp bara en stämplingsapp för städföretag?',
      answer: 'Nej. GeoTapp är appen och programvaran för städföretag och fastighetsservice som går längre än stämpling: den skapar förseglade rapporter med positioner, foton och tider som beställaren kontrollerar själv, inte bara ett tidsregister.',
    },
    {
      question: 'Kan det användas tillsammans med gällande kollektivavtal?',
      answer: 'GeoTapp registrerar arbetstider, raster, övertid och tillägg och exporterar dem till Excel eller CSV för din redovisningsbyrå eller ditt lönekontor, som tillämpar dem enligt gällande kollektivavtal.',
    },
    {
      question: 'Hur hanterar jag flera platser samtidigt?',
      answer: 'En enda skärm för alla platser. Du ser vem som har stämplat var så fort stämplingen kommer in, tilldelar uppdrag och får en avisering om ett pass blir kvar öppet, utan samtal.',
    },
    {
      question: 'Hur dokumenterar jag att arbetet har utförts?',
      answer: 'Varje uppdrag öppnas och avslutas med registrerad position. Medarbetaren skickar bevisfoton kopplade till uppdraget. Rapporten skapas automatiskt och förseglas vid avslutet: varje ändring syns.',
    },
    {
      question: 'Hur hanterar GeoTapp GDPR vid positionering av medarbetare?',
      answer: 'Byggd för att hålla sig inom GDPR:s ramar: positionen registreras bara när medarbetaren stämplar eller tar ett bevisfoto, aldrig löpande, och informationen signeras i appen före stämplingen.',
    },
    {
      question: 'Fungerar det även för fastighetsservice och facility management?',
      answer: 'Ja. GeoTapp passar städföretag, fastighetsservice och facility management, från ett litet team till ett företag med hundratals medarbetare.',
    },
    {
      question: 'Vad kostar det?',
      answer: 'GeoTapp Flow från 39 € per månad, plus TimeTracker-platser från 3 € per medarbetare och månad. Abonnemanget har en bindningstid på 12 månader. Först kan du testa det gratis i 14 dagar, utan kort.',
    },
  ],
};

export default content;
