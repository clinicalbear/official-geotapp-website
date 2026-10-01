import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App för rörmokare och VVS: rapporter med GPS | GeoTapp',
    description: 'App för rörmokare och VVS-installatörer: arbetsrapporter med position och foto av anläggningarna, där varje ändring kan upptäckas. Prova gratis.',
  },
  hero: {
    badge: 'App för rörmokare, VVS-installatörer och värmetekniker',
    h1_line1: 'App för rörmokare och VVS-installatörer:',
    h1_line2: 'GPS-rapporter, fotobevis och färre tvister.',
    subtitle: 'GeoTapp registrerar varje VVS-jobb med GPS, foton och registrerade tider. Ifrågasätter kunden något? Du visar arbetsrapporten i stället för att diskutera muntligt.',
    cta_primary: 'Prova gratis i 14 dagar',
    cta_note: 'Provperioden binder dig inte till något. Inget kreditkort.',
  },
  pain: {
    title: 'Problemet som varje VVS-firma känner igen',
    items: [
      {
        title: 'Kunden förnekar jobbet eller materialet som användes',
        desc: 'Kunden säger att reparationen inte gjordes eller att materialet var ett annat. Utan verifierbara bevis blir varje invändning ord mot ord.',
      },
      {
        title: 'Ingen dokumentation av anläggningen efter jobbet',
        desc: 'Teknikern har gjort klart arbetet, men det finns varken foton eller tekniska anteckningar. Vid ett senare fel blir det omöjligt att rekonstruera vad som gjordes.',
      },
      {
        title: 'Akutjobben blir utan dokument',
        desc: 'Akuta utryckningar är svårast att dokumentera. Teknikern åker i all hast, arbetar utan papper, och sedan finns det inget att visa kunden.',
      },
    ],
  },
  workflow: {
    title: 'Så fungerar det i tre steg',
    subtitle: 'Från arbetsplatsen till kontoret utan telefonsamtal.',
    steps: [
      {
        title: 'Teknikern registrerar jobbet på plats',
        desc: 'Med GeoTapp TimeTracker stämplar teknikern in, tar rast och stämplar ut med position, tar foton av VVS-anläggningen och lägger till tekniska anteckningar från smartphonen.',
      },
      {
        title: 'Kontoret ser allt så fort det kommer in',
        desc: 'GeoTapp Flow tar emot uppgifterna så fort telefonen har täckning. Ansvarig ser uppdrag, tilldelad tekniker, framsteg och fotobevis utan att ringa.',
      },
      {
        title: 'Arbetsrapporten är ditt bevis',
        desc: 'När jobbet är klart skapar systemet en förseglad rapport: tider med GPS, foton av anläggningen, använt material, tekniska anteckningar. Varje ändring kan upptäckas. Kunden kan verifiera den själv.',
      },
    ],
  },
  differenza: {
    title: 'App för rörmokare: registrering eller verifierbart bevis?',
    subtitle: 'De flesta appar registrerar bara tiden. GeoTapp tar fram verifierbara bevis.',
    rows: [
      {
        label: 'Vad som registreras',
        competitor: 'In- och utstämplingstid',
        geotapp: 'Tid + position vid stämplingen + foton av anläggningen + material och anteckningar',
      },
      {
        label: 'Vid tvist',
        competitor: 'Bara ditt ord',
        geotapp: 'Förseglad rapport, varje ändring kan upptäckas',
      },
      {
        label: 'Dokumentation av jobbet',
        competitor: 'Manuell eller saknas',
        geotapp: 'Skapas automatiskt med GPS och foton',
      },
      {
        label: 'Vem kan verifiera',
        competitor: 'Bara ditt kontor',
        geotapp: 'Du, beställaren, en tredje part',
      },
      {
        label: 'GDPR',
        competitor: 'Ofta oklart',
        geotapp: 'Byggd för att hålla sig inom ramarna för GDPR, blanketter ingår',
      },
    ],
  },
  prima_dopo: {
    title: 'Före GeoTapp. Efter GeoTapp.',
    prima: [
      'Kunden förnekar att reparationen utfördes.',
      'Du har varken foton eller verifierbara tider.',
      'Diskussionen pågår i veckor. Du riskerar att inte få betalt.',
      'Teknikern har inget att försvara sig med.',
    ],
    dopo: [
      'Kunden förnekar att reparationen utfördes.',
      'Du öppnar arbetsrapporten: foto av anläggningen med position, förseglad tid, tekniska anteckningar.',
      'Du skickar den, och kunden verifierar den själv.',
      'Du har något att visa. Även teknikern har något i handen.',
    ],
  },
  scenario: {
    title: 'Ett typiskt fall',
    body: 'En kund ifrågasätter ett akut VVS-jobb och vägrar betala med motiveringen att arbetet inte blev klart. Med GeoTapp öppnar du arbetsrapporten: foto av anläggningen före och efter, tid och position för ankomst och avslut, tekniska anteckningar om det material som byttes ut, allt skapat automatiskt från teknikerns smartphone på plats.',
    resolution: 'I stället för ord mot ord finns det ett dokument som kunden kontrollerar själv.',
  },
  features: {
    title: 'App för rörmokare och VVS: det här får du i GeoTapp.',
    items: [
      {
        title: 'Verifierbar GPS-stämpling',
        desc: 'Varje in-, rast- och utstämpling registreras med position, tidsstämpel och uppdrag. Att visa för kunden när det behövs.',
      },
      {
        title: 'Förseglade foton av VVS-anläggningar',
        desc: 'Teknikern tar foton före och efter jobbet. Varje bild kopplas till GPS och tidsstämpel: varje ändring i efterhand kan upptäckas.',
      },
      {
        title: 'Automatiska digitala arbetsrapporter',
        desc: 'När jobbet är klart är arbetsrapporten redan färdig: timmar, foton, tekniska anteckningar och material. Kontoret skickar den till kunden från Flow med ett klick.',
      },
      {
        title: 'Hantering av akutjobb och planerat underhåll',
        desc: 'Hantera både akuta utryckningar och periodiskt underhåll från samma översikt. Varje jobb har sitt uppdrag och sin historik.',
      },
      {
        title: 'Export av närvaro till lönen',
        desc: 'Exportera månadens närvaro till Excel eller CSV, klar för lönekontoret eller redovisningsbyrån. Lönehanteringen blir en snabb åtgärd.',
      },
      {
        title: 'Dina rörmokare är skyddade',
        desc: 'En verifierbar rapport ger teknikern något att svara med mot ogrundade anklagelser om jobb som inte utförts eller material som inte använts.',
      },
    ],
  },
  cta_mid: {
    title: 'Vill du se hur det fungerar på ett riktigt VVS-jobb?',
    body: 'Prova det på ett riktigt jobb, från att uppdraget öppnas till arbetsrapporten som kunden får: 14 dagar gratis, utan kreditkort.',
    cta: 'Prova gratis i 14 dagar',
  },
  trust: {
    title: 'I våra rapporter syns varje ändring, även om du gör den eller vi gör den.',
    body: 'GeoTapps rapporter skapas av systemet i samma ögonblick som jobbet utförs. När rapporten väl är förseglad bryter en ändrad tid eller en flyttad bild förseglingen, och verifieringen visar det.',
    badge: 'Kan verifieras av vem som helst, utan åtkomst till ditt konto',
  },
  testimonial: {
    quote: 'Förut la jag timmar på att förklara jobben för kunderna. Nu skickar jag arbetsrapporten och kunden kontrollerar den själv.',
    author: 'Roberto C.',
    role: 'Ägare, VVS-firma',
  },
  faq: {
    title: 'Vanliga frågor',
    subtitle: 'Det rörmokare frågar oss innan de kommer igång.',
    items: [
      {
        q: 'Passar GeoTapp som app för rörmokare och VVS-installatörer?',
        a: 'Ja. GeoTapp används av rörmokare och VVS-installatörer för att hantera jobb, arbetsrapporter, timmar och fotobevis av anläggningar. Det fungerar både för akutjobb och för planerat underhåll.',
      },
      {
        q: 'Kan jag använda GeoTapp för att dokumentera VVS-jobb?',
        a: 'Ja. Teknikern tar foton före och efter jobbet från appen. Varje bild kopplas till GPS, tidsstämpel och uppdrag och tas med i en arbetsrapport där varje ändring kan upptäckas.',
      },
      {
        q: 'Hanterar GeoTapp både akutjobb och planerat underhåll?',
        a: 'Ja. Varje typ av jobb, akut, underhåll, besiktning, har sitt eget uppdrag i GeoTapp. Historiken för varje anläggning finns alltid tillgänglig med alla fotobevis.',
      },
    ],
  },
  cta: {
    title: 'Varje väl utfört jobb förtjänar ett bevis. GeoTapp skapar det.',
    subtitle: 'Verifierbara rapporter, position vid stämplingarna, foton förseglade i rapporten.',
    primary: 'Prova gratis i 14 dagar',
    secondary: 'Se priserna',
  },
  pricing_hint: {
    label: 'TimeTracker-platser från',
    per: 'per tekniker och månad, plus Flow-planen från 39 € i månaden',
    note: 'Gratis provperiod i 14 dagar',
  },
  schema_sector_name: 'VVS',
  schema_faq: [
    {
      question: 'Fungerar GeoTapp som app för rörmokare och VVS-installatörer?',
      answer: 'Ja. GeoTapp är appen för rörmokare och VVS-installatörer som registrerar varje jobb med GPS, foton och registrerade tider. Teknikern stämplar från fältet, kontoret ser allt så fort det kommer in, kunden får en förseglad arbetsrapport.',
    },
    {
      question: 'Hur förseglar jag ett VVS-jobb med GeoTapp?',
      answer: 'Teknikern registrerar i GeoTapp start- och sluttid med position, foton av anläggningen före och efter och tekniska anteckningar om använt material. Systemet skapar en förseglad arbetsrapport som kunden kan verifiera själv.',
    },
    {
      question: 'Hanterar GeoTapp akuta VVS-jobb och planerat underhåll?',
      answer: 'Ja. Både akuta utryckningar och periodiskt underhåll hanteras i samma app. Varje jobb ger en historik med fotobevis samt tider och positioner som registrerats vid stämplingarna.',
    },
    {
      question: 'Godtas GeoTapps arbetsrapporter vid en tvist?',
      answer: 'GeoTapps arbetsrapporter är förseglade med GPS, tidsstämpel och fotobevis. Kunden verifierar dem själv. De hjälper till att visa att dokumentet inte har ändrats; ensamma är de inget absolut bevis för händelsen och inte juridisk rådgivning.',
    },
  ],
};

export default content;
