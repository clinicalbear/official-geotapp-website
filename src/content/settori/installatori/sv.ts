import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App för installatörer och VVS-tekniker | GeoTapp',
    description: 'GeoTapp är appen för installatörer, rörmokare och VVS-tekniker: arbetsrapporter med position och foto, bevisfoton och rapporter där varje ändring syns. Testa gratis.',
  },
  hero: {
    badge: 'App för installatörer, rörmokare och VVS-tekniker',
    h1_line1: 'Bestrider kunden timmarna?',
    h1_line2: 'Visa arbetsrapporten med GPS.',
    subtitle: 'Dina tekniker stämplar från smartphonen med ett tryck. Systemet skapar en arbetsrapport med registrerad position och foton: varje ändring syns. När kunden frågar "hur lång tid tog det?" har du svaret redo.',
    cta_primary: 'Testa gratis i 14 dagar',
    cta_note: 'Inget kreditkort. Igång från första dagen.',
  },
  pain: {
    title: 'Problemet du redan känner till',
    items: [
      {
        title: 'Tvister om timmar och utfört arbete',
        desc: 'Kunden nekar till tiden. Teknikern har inget bevis. Tvisten drar ut i veckor och kostar mer än själva jobbet.',
      },
      {
        title: 'Kontoret jagar fältet',
        desc: 'Chefen ringer teknikerna för att få veta var de är, vad de har gjort och när de blir klara. Varje samtal avbryter båda.',
      },
      {
        title: 'Ofullständiga eller bortkomna arbetsrapporter',
        desc: 'Lappar, WhatsApp, e-post: uppgifterna kommer ofullständiga, sent eller inte alls. Att bygga ihop sammanställningen i efterhand är ett eget jobb.',
      },
    ],
  },
  workflow: {
    title: 'Så fungerar det i tre steg',
    subtitle: 'Från skåpbilen till kontoret, utan telefonsamtal.',
    steps: [
      {
        title: 'Teknikern stämplar på plats',
        desc: 'Med GeoTapp TimeTracker registrerar teknikern start, raster, slut, foton och anteckningar direkt från smartphonen. Positionen registreras bara vid stämplingen, så som GDPR kräver.',
      },
      {
        title: 'Kontoret ser allt så fort det kommer in',
        desc: 'Flow tar emot uppgifterna direkt. Chefen ser uppdrag, framsteg, tilldelad tekniker och bevisfoton utan att ringa.',
      },
      {
        title: 'Rapporten är ditt bevis, att visa för kunden',
        desc: 'När jobbet är klart skapas rapporten med registrerade GPS-uppgifter och bevisfoton. Varje ändring syns. Kunden kan själv kontrollera att den är oförändrad. När det uppstår tvivel behöver du inte förklara. Du visar.',
      },
    ],
  },
  differenza: {
    title: 'App för installatörer: stämpling eller verifierbart bevis?',
    subtitle: 'De flesta appar registrerar klockslaget. GeoTapp skapar verifierbara bevis.',
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
        label: 'Arbetsrapport för uppdraget',
        competitor: 'Manuell eller saknas',
        geotapp: 'Skapas automatiskt med GPS och foto',
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
      'Kunden nekar till tiden eller till att jobbet blev gjort.',
      'Teknikern säger "jag gjorde det". Kunden säger "det syns inte".',
      'Du har inget i handen. Diskussionen pågår i dagar.',
      'Ibland går betalningen förlorad. Tiden går alltid förlorad.',
    ],
    dopo: [
      'Kunden nekar till tiden eller till att jobbet blev gjort.',
      'Du öppnar rapporten: foton, GPS, tid, försegling.',
      'Du skickar den. Diskussionen är över på en minut.',
      'Du har ett bevis att visa. Teknikern har också något i handen.',
    ],
  },

  scenario: {
    title: 'Ett typiskt fall',
    body: 'Kunden bestrider sluttiden och kräver rabatt på fakturan. Med GeoTapp öppnar du rapporten för uppdraget: foton av den färdiga installationen, tider och positioner för stämplingarna och automatiskt beräknad varaktighet, allt skapat från teknikerns smartphone när jobbet utfördes.',
    resolution: 'I stället för ord mot ord finns ett dokument som kunden kan kontrollera själv.',
  },

  features: {
    title: 'App för installatörer och VVS-tekniker: GPS-arbetsrapporter och bevisfoton.',
    items: [
      {
        title: 'Verifierbar stämpling med GPS',
        desc: 'Varje instämpling, rast och utstämpling kopplas till position, tid och uppdrag. Att visa för kunden eller tillsynsmyndigheten när det behövs.',
      },
      {
        title: 'Förseglade bevisfoton',
        desc: 'Teknikern tar foton i appen. Varje bild kopplas till uppdraget med GPS och tidsstämpel och tas sedan med i rapporten. Ingen kan ändra dem utan att systemet upptäcker det.',
      },
      {
        title: 'Export för lönehantering',
        desc: 'Exportera månadens närvaro till Excel eller CSV, redo för din redovisningsbyrå eller lönekontor.',
      },
      {
        title: 'Hantering av uppdrag på flera arbetsplatser',
        desc: 'Tilldela uppdrag, följ framstegen på varje arbetsplats och få en avisering om ett pass blir kvar öppet.',
      },
      {
        title: 'Automatiska digitala arbetsrapporter',
        desc: 'När jobbet är klart är arbetsrapporten redan färdig: timmar, foton och anteckningar. Inget papper, inga samtal. Kontoret skickar den till kunden från Flow med ett klick.',
      },
      {
        title: 'Även dina tekniker har ett bevis',
        desc: 'En verifierbar rapport ger teknikern något i handen mot ogrundade anklagelser. Den som gör ett bra jobb visar det med data. Ingen gråzon mellan fält och kontor.',
      },
    ],
  },

  cta_mid: {
    title: 'Vill du se hur det fungerar på ett riktigt uppdrag?',
    body: 'Vi visar hela flödet: från att uppdraget öppnas till arbetsrapporten som kunden får.',
    cta: 'Testa gratis i 14 dagar',
  },

  trust: {
    title: 'Våra rapporter: varje ändring syns. Inte bara dina. Inte bara våra.',
    body: 'GeoTapps rapporter skapas av systemet när uppdraget utförs. När rapporten väl är förseglad bryter en ändrad tid eller ett flyttat foto förseglingen, och kontrollen visar det. Den som får rapporten, kund eller rådgivare, kan kontrollera den själv.',
    badge: 'Kan kontrolleras av vem som helst, utan åtkomst till ditt konto',
  },
  testimonial: {
    quote: 'Förut la vi timmar på att samla in lappar från fältet. Nu är arbetsrapporten redan klar när teknikern kommer tillbaka till skåpbilen.',
    author: 'Marco R.',
    role: 'Driftchef, installationer i bostäder',
  },
  faq: {
    title: 'Vanliga frågor',
    subtitle: 'Det vi oftast får frågor om innan man kommer igång.',
    items: [
      {
        q: 'Passar GeoTapp som program för installatörer och underhållstekniker?',
        a: 'Ja. GeoTapp hjälper installatörer, elektriker, rörmokare och underhållstekniker att hantera uppdrag, arbetsrapporter, timmar, resor och bevis på utfört arbete mellan fält och kontor.',
      },
      {
        q: 'Kan jag använda GeoTapp för arbetsrapporter och bevisfoton?',
        a: 'Ja. TimeTracker samlar foton, anteckningar och verifierbara stämplingar i fält, medan Flow kopplar allt till uppdraget och den operativa historiken.',
      },
      {
        q: 'Hjälper GeoTapp till att minska tvister om timmar och utfört arbete?',
        a: 'Det är ett av de främsta användningsområdena: tider, position, anteckningar och bevisfoton gör det tydligare och enklare att visa vad som gjordes på uppdraget.',
      },
    ],
  },
  cta: {
    title: 'Jobbet blev gjort. Nu kan du visa det.',
    subtitle: 'GeoTapp skapar verifierbar dokumentation av varje uppdrag, förseglade rapporter som kunden kan kontrollera själv.',
    primary: 'Testa gratis i 14 dagar',
    secondary: 'Se priserna',
  },
  pricing_hint: {
    label: 'TimeTracker-platser från',
    per: 'per medarbetare och månad, plus Flow-abonnemang från 39 € per månad',
    note: 'Gratis provperiod i 14 dagar',
  },

  schema_sector_name: 'Installatörer',
  schema_faq: [
    {
      question: 'Fungerar GeoTapp för rörmokare och VVS-tekniker i fält?',
      answer: 'Ja. GeoTapp är appen för installatörer och VVS-tekniker som arbetar på byggplatser och i privata hem. Med arbetsrapporterna inbyggda registrerar teknikerna uppdrag, foton och timmar direkt från smartphonen, utan att åka tillbaka till kontoret.',
    },
    {
      question: 'Hur dokumenterar jag ett underhålls- eller installationsuppdrag?',
      answer: 'När uppdraget är klart registrerar teknikern i GeoTapp start- och sluttid med position, foton av det utförda arbetet och tekniska anteckningar. Systemet skapar en förseglad rapport som kunden kan kontrollera själv.',
    },
    {
      question: 'Kan jag använda GeoTapp för flera installationsteam på olika arbetsplatser?',
      answer: 'Ja. Med GeoTapp Flow kan ägaren samordna flera team, tilldela uppdrag, följa status och samla bevisfoton från alla aktiva arbetsplatser så fort de kommer in.',
    },
    {
      question: 'Är rapporterna till nytta vid en tvist med kunden?',
      answer: 'GeoTapps rapporter är förseglade med position, tidsstämpel och bevisfoton. Kunden kontrollerar dem själv. De hjälper till att visa att dokumentet inte har ändrats; ensamma är de inget absolut bevis för händelsen och inte juridisk rådgivning.',
    },
    {
      question: 'Följer GeoTapp GDPR när det gäller positionering av tekniker?',
      answer: 'Den är byggd för att hålla sig inom ramarna: positionen registreras bara när teknikern stämplar eller tar ett bevisfoto, aldrig löpande, och informationen till medarbetarna signeras i appen före den första stämplingen. Resten (avtal med fackförbund eller samråd, där det krävs) ansvarar arbetsgivaren för.',
    },
  ],
};

export default content;
