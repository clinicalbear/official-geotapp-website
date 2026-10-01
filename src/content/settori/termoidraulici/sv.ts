import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App för VVS-tekniker: arbetsrapporter med GPS och foton',
    description: 'Arbetsrapporter med GPS vid stämplingen och foton av varje anläggning: bevisen att visa när kunden bestrider pannor och utbytta delar. Testa gratis i 14 dagar.',
  },
  hero: {
    badge: 'App för VVS-tekniker och värmeinstallatörer',
    h1_line1: 'App för VVS-tekniker:',
    h1_line2: 'arbetsrapporter med GPS, bevisfoton och färre tvister.',
    subtitle: 'GeoTapp registrerar varje uppdrag på pannor och anläggningar med GPS, foton och registrerade tider. Nekar kunden till de utbytta delarna? Du visar arbetsrapporten i stället för att diskutera muntligt.',
    cta_primary: 'Testa gratis i 14 dagar',
    cta_note: 'Provperioden binder dig inte till något. Inget kreditkort.',
  },
  pain: {
    title: 'Problemet som varje VVS-företag känner väl',
    items: [
      {
        title: 'Kunden nekar till de utbytta delarna på pannan',
        desc: 'Kunden säger att du bytte andra komponenter än de överenskomna, eller att anläggningen redan såg ut så. Utan bevisfoton blir tvisten ord mot ord.',
      },
      {
        title: 'Ingen dokumentation av anläggningen efter uppdraget',
        desc: 'Teknikern har avslutat reparationen, men det finns varken foton eller någon teknisk anteckning. Om felet kommer tillbaka är det omöjligt att rekonstruera vad som gjordes.',
      },
      {
        title: 'Akuta jobb på natten och helgerna lämnar inga spår',
        desc: 'Uppdrag vid värmeavbrott kommer på omöjliga tider. Teknikern åker ut och löser problemet, men det finns inget kvar att visa för kunden eller försäkringsbolaget.',
      },
    ],
  },
  workflow: {
    title: 'Så fungerar det i tre steg',
    subtitle: 'Från arbetsplatsen till kontoret, utan telefonsamtal.',
    steps: [
      {
        title: 'Teknikern registrerar uppdraget på plats',
        desc: 'Med GeoTapp TimeTracker stämplar teknikern in, tar raster och stämplar ut med positionen, tar foton av anläggningen och pannan och lägger till anteckningar om utbytta komponenter från smartphonen.',
      },
      {
        title: 'Kontoret ser allt så fort det kommer in',
        desc: 'GeoTapp Flow tar emot uppgifterna så fort telefonen har täckning. Chefen ser uppdrag, tilldelad tekniker, framsteg och bevisfoton utan att ringa.',
      },
      {
        title: 'Arbetsrapporten är ditt bevis',
        desc: 'När uppdraget är klart skapar systemet en förseglad rapport: tid med GPS, foton av anläggning och komponenter, tekniska anteckningar. Varje ändring syns. Kunden kan kontrollera den själv.',
      },
    ],
  },
  differenza: {
    title: 'App för VVS-tekniker: registrering eller verifierbart bevis?',
    subtitle: 'De flesta appar registrerar klockslaget. GeoTapp skapar verifierbara bevis.',
    rows: [
      {
        label: 'Vad som registreras',
        competitor: 'Tid för in- och utstämpling',
        geotapp: 'Tid + position vid stämplingen + foto av anläggningen + utbytta komponenter',
      },
      {
        label: 'Vid en tvist',
        competitor: 'Bara ditt ord',
        geotapp: 'Förseglad rapport, varje ändring syns',
      },
      {
        label: 'Dokumentation av uppdraget',
        competitor: 'Manuell eller saknas',
        geotapp: 'Skapas automatiskt med GPS och foto',
      },
      {
        label: 'Vem kan kontrollera',
        competitor: 'Bara ditt kontor',
        geotapp: 'Du, beställaren eller en utomstående',
      },
      {
        label: 'GDPR',
        competitor: 'Ofta oklart',
        geotapp: 'Byggd för att hålla sig inom GDPR:s ramar, blanketter ingår',
      },
    ],
  },
  prima_dopo: {
    title: 'Före GeoTapp. Efter GeoTapp.',
    prima: [
      'Kunden nekar till att ventilen har bytts.',
      'Du har varken foton eller dokumenterat material.',
      'Diskussionen pågår i veckor. Du riskerar att inte få betalt.',
      'Teknikern har inget i handen att försvara sig med.',
    ],
    dopo: [
      'Kunden nekar till att ventilen har bytts.',
      'Du öppnar arbetsrapporten: foto av den borttagna komponenten, av den nya som monterats, tid med GPS, tekniska anteckningar.',
      'Du skickar den, och kunden kontrollerar den själv.',
      'Du har ett bevis att visa. Teknikern har också något i handen.',
    ],
  },
  scenario: {
    title: 'Ett typiskt fall',
    body: 'En kund bestrider bytet av en brännare på pannan och vägrar betala fakturan. Med GeoTapp öppnar du arbetsrapporten: foto av den defekta komponenten som togs bort, av den nya som installerades, tid med GPS för uppdraget och teknikerns tekniska anteckningar, allt skapat automatiskt från smartphonen på plats.',
    resolution: 'I stället för ord mot ord finns ett dokument som kunden kontrollerar själv.',
  },
  features: {
    title: 'App för VVS-tekniker: det här får du i GeoTapp.',
    items: [
      {
        title: 'Verifierbar stämpling med GPS',
        desc: 'Varje instämpling, rast och utstämpling registreras med position, tidsstämpel och uppdrag. Att visa för kunden och försäkringsbolaget när det behövs.',
      },
      {
        title: 'Bevisfoton av anläggningen',
        desc: 'Teknikern tar foton i appen under och efter uppdraget. Varje bild kopplas till position och tid och hamnar i den förseglade rapporten: varje senare ändring syns.',
      },
      {
        title: 'Automatiska digitala arbetsrapporter',
        desc: 'När arbetet är klart är arbetsrapporten redan färdig: timmar, foton, utbytta komponenter. Kontoret skickar den till kunden från Flow med ett klick.',
      },
      {
        title: 'Hantering av uppdrag och akuta jobb',
        desc: 'Tilldela akuta uppdrag och följ framstegen uppdrag för uppdrag.',
      },
      {
        title: 'Export av närvaro för lön',
        desc: 'Exportera månadens närvaro till Excel eller CSV, redo för din redovisningsbyrå eller lönekontor. Lönehanteringen går snabbt.',
      },
      {
        title: 'Även dina tekniker har ett bevis',
        desc: 'En verifierbar rapport ger teknikern något i handen mot ogrundade anklagelser om material eller tider. Den som gör ett bra jobb visar det med data.',
      },
    ],
  },
  cta_mid: {
    title: 'Vill du se hur det fungerar på ett riktigt VVS-uppdrag?',
    body: 'Testa det på ett verkligt uppdrag, från att uppdraget öppnas till arbetsrapporten som kunden får: 14 dagar gratis, utan kreditkort.',
    cta: 'Testa gratis i 14 dagar',
  },
  trust: {
    title: 'Varje ändring i våra rapporter syns. Inte bara dina. Inte bara våra.',
    body: 'GeoTapps rapporter skapas av systemet när uppdraget utförs. När rapporten väl är förseglad bryter en ändrad tid eller ett flyttat foto förseglingen, och kontrollen visar det.',
    badge: 'Kan kontrolleras av vem som helst, utan åtkomst till ditt konto',
  },
  testimonial: {
    quote: 'Med GeoTapp fotograferar mina tekniker anläggningen före och efter varje uppdrag. När en kund bestrider materialet har vi fotona att visa.',
    author: 'Marco S.',
    role: 'Ägare, VVS-installationer för bostäder och industri',
  },
  faq: {
    title: 'Vanliga frågor',
    subtitle: 'Det VVS-tekniker frågar oss innan de kommer igång.',
    items: [
      {
        q: 'Passar GeoTapp som app för VVS-tekniker?',
        a: 'Ja. GeoTapp används av VVS-tekniker och värmeinstallatörer för att hantera uppdrag på pannor, värmesystem och sanitetsinstallationer, med arbetsrapporter, foton och timmar med GPS som kan kontrolleras.',
      },
      {
        q: 'Kan jag använda GeoTapp för att dokumentera utbyte av komponenter på pannor?',
        a: 'Ja. Teknikern tar foton i appen av den borttagna komponenten och den som installerats. Varje bild kopplas till GPS, tidsstämpel och uppdrag och tas med i den förseglade arbetsrapporten.',
      },
      {
        q: 'Hjälper GeoTapp till att lösa kundernas tvister om installationer?',
        a: 'Det är precis det främsta användningsområdet: tid med GPS, bevisfoton av materialet och den förseglade arbetsrapporten ger dig ett dokument att visa när en invändning är obefogad.',
      },
    ],
  },
  cta: {
    title: 'Varje väl utfört VVS-uppdrag förtjänar ett bevis. GeoTapp skapar det.',
    subtitle: 'Verifierbara rapporter, position vid stämplingarna, foton förseglade i rapporten.',
    primary: 'Testa gratis i 14 dagar',
    secondary: 'Se priserna',
  },
  pricing_hint: {
    label: 'TimeTracker-platser från',
    per: 'per medarbetare och månad, plus Flow-abonnemang från 39 € per månad',
    note: 'Gratis provperiod i 14 dagar',
  },
  schema_sector_name: 'VVS-tekniker',
  schema_faq: [
    {
      question: 'Fungerar GeoTapp som app för VVS-tekniker?',
      answer: 'Ja. GeoTapp är appen för VVS-tekniker och installatörer som registrerar varje uppdrag på pannor och anläggningar med GPS, foton och registrerade tider. Teknikern stämplar från fältet, kontoret ser allt så fort det kommer in och kunden får en förseglad arbetsrapport.',
    },
    {
      question: 'Hur förseglar jag ett uppdrag på en panna med GeoTapp?',
      answer: 'Teknikern registrerar i GeoTapp start- och sluttid med position, foton av de utbytta komponenterna och tekniska anteckningar. Systemet skapar en förseglad arbetsrapport som kunden kan kontrollera själv.',
    },
    {
      question: 'Hjälper GeoTapp till att hantera flera VVS-team på olika uppdrag?',
      answer: 'Ja. Med GeoTapp Flow kan ägaren samordna flera team, tilldela akuta uppdrag, följa status och samla bevisfoton från alla aktiva arbetsplatser så fort de laddats upp.',
    },
    {
      question: 'Är GeoTapps arbetsrapporter till nytta vid en tvist om värmeanläggningar?',
      answer: 'GeoTapps arbetsrapporter är förseglade med GPS, tidsstämpel och bevisfoton. Kunden kontrollerar dem själv. De hjälper till att visa att dokumentet inte har ändrats; ensamma är de inget absolut bevis för händelsen och inte juridisk rådgivning.',
    },
  ],
};

export default content;
