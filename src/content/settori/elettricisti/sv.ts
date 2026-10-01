import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App för elektriker: rapport med tid, plats och foto',
    description: 'Ett tryck vid ankomsten, ett vid avgång, bilder på elcentralen bifogade till jobbet. Arbetsrapporten är klar när du kör vidare. 14 dagar gratis.',
  },
  hero: {
    badge: 'App för elektriker och elinstallatörer',
    h1_line1: 'App för elektriker:',
    h1_line2: 'GPS-rapporter, fotobevis och färre tvister.',
    subtitle: 'GeoTapp registrerar varje elarbete med GPS, foton och registrerade tider. Ifrågasätter kunden något? Du visar arbetsrapporten i stället för att diskutera muntligt.',
    cta_primary: 'Prova gratis i 14 dagar',
    cta_note: 'Provperioden binder dig inte till något. Inget kreditkort.',
  },
  pain: {
    title: 'Problemet som varje elfirma känner igen',
    items: [
      {
        title: 'Kunden förnekar jobbet eller tiden',
        desc: 'Kunden säger att teknikern inte var på plats eller att anläggningen inte blev klar. Utan verifierbara bevis drar sig tvisten i veckor.',
      },
      {
        title: 'Ingen dokumentation av anläggningen efter jobbet',
        desc: 'Teknikern har gjort klart arbetet, men det finns varken foton eller tekniska anteckningar. Att rekonstruera vad som gjordes blir omöjligt.',
      },
      {
        title: 'Kontoret vet inte var teknikerna är',
        desc: 'Samtal, meddelanden, osäkerhet. Varje gång du ska uppdatera en kund om hur jobbet går måste du först få tag på teknikern.',
      },
    ],
  },
  workflow: {
    title: 'Så fungerar det i tre steg',
    subtitle: 'Från arbetsplatsen till kontoret utan telefonsamtal.',
    steps: [
      {
        title: 'Teknikern registrerar jobbet på plats',
        desc: 'Med GeoTapp TimeTracker stämplar teknikern in, tar rast och stämplar ut med position, tar foton av anläggningen och lägger till tekniska anteckningar från smartphonen.',
      },
      {
        title: 'Kontoret ser allt så fort det kommer in',
        desc: 'GeoTapp Flow tar emot uppgifterna så fort telefonen har täckning. Ansvarig ser uppdrag, tilldelad tekniker, framsteg och fotobevis utan att ringa.',
      },
      {
        title: 'Arbetsrapporten är ditt bevis',
        desc: 'När jobbet är klart skapar systemet en förseglad rapport: tider med GPS, foton av anläggningen, tekniska anteckningar. Varje ändring kan upptäckas. Kunden kan verifiera den själv.',
      },
    ],
  },
  differenza: {
    title: 'App för elektriker: registrering eller verifierbart bevis?',
    subtitle: 'De flesta appar registrerar bara tiden. GeoTapp tar fram verifierbara bevis.',
    rows: [
      {
        label: 'Vad som registreras',
        competitor: 'In- och utstämplingstid',
        geotapp: 'Tid + position vid stämplingen + foton av anläggningen + tekniska anteckningar',
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
      'Kunden förnekar att anläggningen blev klar.',
      'Du har varken foton eller verifierbara tider.',
      'Diskussionen pågår i veckor. Du riskerar att inte få betalt.',
      'Teknikern har inget att försvara sig med.',
    ],
    dopo: [
      'Kunden förnekar att anläggningen blev klar.',
      'Du öppnar arbetsrapporten: foto av anläggningen, förseglad tid, position.',
      'Du skickar den, och kunden verifierar den själv.',
      'Du har något att visa. Även teknikern har något i handen.',
    ],
  },
  scenario: {
    title: 'Ett typiskt fall',
    body: 'En kund ifrågasätter att elinstallationen blev klar och vägrar betala sista fakturan. Med GeoTapp öppnar du arbetsrapporten: foto av den färdiga elcentralen, tid och position för start och slut, teknikerns tekniska anteckningar, allt skapat automatiskt från smartphonen på plats.',
    resolution: 'I stället för ord mot ord finns det ett dokument som kunden kontrollerar själv.',
  },
  cosa_cambia: {
    title: 'Vad som verkligen förändras, från första jobbet',
    items: [
      {
        title: 'Inget skrivs av på kvällen längre',
        desc: 'Timmarna går inte via papper, sedan via meddelande, sedan via ekonomisystemet. De uppstår redan på rätt uppdrag, med position och tid från när de utfördes, och vid månadsskiftet är exporten för lönerna klar utan att någon skriver av dem igen.',
      },
      {
        title: 'Arbetsrapporten slutar vara en diskussion',
        desc: 'När beställaren frågar hur många timmar som lagts på hans anläggning är svaret inte teknikerns ord mot hans, utan ett förseglat dokument med bilder på elcentralen, tider och tekniska anteckningar, som han kan kontrollera själv utan att logga in på ditt konto.',
      },
      {
        title: 'Även teknikern har något i handen',
        desc: 'Det gäller åt båda håll. Den som gör ett bra jobb och får höra att hon kom för sent har beviset på tiden, och behöver inte minnas utantill vad hon gjorde för tre veckor sedan för att försvara sig.',
      },
    ],
  },
  features: {
    title: 'App för elektriker: det här får du i GeoTapp.',
    items: [
      {
        title: 'Verifierbar GPS-stämpling',
        desc: 'Varje in-, rast- och utstämpling registreras med position, tidsstämpel och uppdrag. Att visa för kunden när det behövs.',
      },
      {
        title: 'Fotobevis av anläggningen',
        desc: 'Teknikern tar foton från appen när jobbet är klart. Varje bild kopplas till GPS och tidsstämpel: varje ändring i efterhand kan upptäckas.',
      },
      {
        title: 'Automatiska digitala arbetsrapporter',
        desc: 'När jobbet är klart är arbetsrapporten redan färdig: timmar, foton och tekniska anteckningar. Kontoret skickar den till kunden från Flow med ett klick.',
      },
      {
        title: 'Hantering av uppdrag på flera arbetsplatser',
        desc: 'Fördela jobb och följ framstegen uppdrag för uppdrag.',
      },
      {
        title: 'Export av närvaro till lönen',
        desc: 'Exportera månadens närvaro till Excel eller CSV, klar för lönekontoret eller redovisningsbyrån. Lönehanteringen blir en snabb åtgärd.',
      },
      {
        title: 'Dina elektriker är skyddade',
        desc: 'En verifierbar rapport ger teknikern något att svara med mot ogrundade anklagelser. Den som arbetar bra visar det med uppgifter.',
      },
    ],
  },
  cta_mid: {
    title: 'Vill du se hur det fungerar på ett riktigt elarbete?',
    body: 'Prova det på ett riktigt jobb, från att uppdraget öppnas till arbetsrapporten som kunden får: 14 dagar gratis, utan kreditkort.',
    cta: 'Prova gratis i 14 dagar',
  },
  trust: {
    title: 'I våra rapporter syns varje ändring, även om du gör den eller vi gör den.',
    body: 'GeoTapps rapporter skapas av systemet i samma ögonblick som jobbet utförs. När rapporten väl är förseglad bryter en ändrad tid eller en flyttad bild förseglingen, och verifieringen visar det.',
    badge: 'Kan verifieras av vem som helst, utan åtkomst till ditt konto',
  },
  testimonial: {
    quote: 'Med GeoTapp registrerar mina tekniker anläggningen direkt när den är klar. När en kund ifrågasätter något har vi arbetsrapporten att visa.',
    author: 'Luca M.',
    role: 'Ägare, civila och industriella elinstallationer',
  },
  faq: {
    title: 'Vanliga frågor',
    subtitle: 'Det elektriker frågar oss innan de kommer igång.',
    items: [
      {
        q: 'Passar GeoTapp som app för elektriker?',
        a: 'Ja. GeoTapp används av elektriker och installatörer för att hantera jobb, arbetsrapporter, timmar och fotobevis av anläggningar. Det fungerar både för arbeten på ett enskilt uppdrag och för flera arbetsplatser parallellt.',
      },
      {
        q: 'Kan jag använda GeoTapp för att dokumentera elanläggningar och elarbeten?',
        a: 'Ja. Teknikern tar foton från appen under eller efter jobbet. Varje bild kopplas till GPS, tidsstämpel och uppdrag och tas med i en arbetsrapport där varje ändring kan upptäckas.',
      },
      {
        q: 'Hjälper GeoTapp till att lösa tvister med kunder?',
        a: 'Det är precis det huvudsakliga användningsfallet: tid och position med GPS, fotobevis och en förseglad arbetsrapport ger dig ett dokument att visa när en invändning saknar grund.',
      },
      {
        q: 'Går det bra även som app för installatörer, inte bara för elektriker?',
        a: 'Ja. Elinstallationer, VVS, kyla och ventilation, brandskydd, solceller. Yrket skiljer sig, problemet är detsamma: att visa vem som var var, hur länge de stannade och vad de lämnade färdigt. Arbetsrapporten ser likadan ut för alla.',
      },
      {
        q: 'Hur fungerar arbetsrapporterna för installatörer?',
        a: 'Teknikern avslutar jobbet från telefonen och arbetsrapporten är redan skriven, med timmar, position, foton av anläggningen och tekniska anteckningar. Det finns inget formulär kvar att fylla i på kvällen, vilket annars är anledningen till att arbetsrapporter kommer för sent eller aldrig.',
      },
      {
        q: 'Kan vi sluta samla in timmar och foton i WhatsApp?',
        a: 'Det är orsaken till att de flesta företag kommer till oss. I chatten försvinner timmarna bland meddelandena, fotona komprimeras och vid månadsskiftet måste någon skriva av allt för hand. Här uppstår uppgiften redan kopplad till uppdraget och personen.',
      },
    ],
  },
  cta: {
    title: 'Varje väl utfört elarbete förtjänar ett bevis. GeoTapp skapar det.',
    subtitle: 'Verifierbara rapporter, position vid stämplingarna, foton förseglade i rapporten.',
    primary: 'Prova gratis i 14 dagar',
    secondary: 'Se priserna',
  },
  pricing_hint: {
    label: 'TimeTracker-platser från',
    per: 'per tekniker och månad, plus Flow-planen från 39 € i månaden',
    note: 'Gratis provperiod i 14 dagar',
  },
  schema_sector_name: 'Elektriker',
  schema_faq: [
    {
      question: 'Fungerar GeoTapp som app för elektriker?',
      answer: 'Ja. GeoTapp är appen för elektriker och installatörer som registrerar varje jobb med GPS, foton och registrerade tider. Teknikern stämplar från fältet, kontoret ser allt så fort det kommer in, kunden får en förseglad arbetsrapport.',
    },
    {
      question: 'Hur förseglar jag ett elarbete med GeoTapp?',
      answer: 'Teknikern registrerar i GeoTapp start- och sluttid med position, foton av anläggningen och tekniska anteckningar. Systemet skapar en förseglad arbetsrapport som kunden kan verifiera själv.',
    },
    {
      question: 'Hjälper GeoTapp till att hantera flera elektrikerlag på olika arbetsplatser?',
      answer: 'Ja. Med GeoTapp Flow kan ägaren samordna flera lag, fördela uppdrag, följa jobbens status och samla fotobevis från alla aktiva arbetsplatser så fort de laddas upp.',
    },
    {
      question: 'Godtas GeoTapps arbetsrapporter vid en tvist?',
      answer: 'GeoTapps arbetsrapporter är förseglade med GPS, tidsstämpel och fotobevis. Kunden verifierar dem själv. De hjälper till att visa att dokumentet inte har ändrats; ensamma är de inget absolut bevis för händelsen och inte juridisk rådgivning.',
    },
    {
      question: 'Fungerar GeoTapp även som app för installatörer?',
      answer: 'Ja. Utöver elinstallationer täcker det VVS, kyla och ventilation, brandskydd och solceller. Teknikern registrerar jobbet från fältet med GPS och foton, och arbetsrapporten skapas på samma sätt för varje typ av anläggning.',
    },
    {
      question: 'Följer GeoTapp teknikernas position under dagen?',
      answer: 'Nej. Positionen registreras bara när teknikern stämplar (in, rast, ut) eller tar ett bevisfoto. Mellan två stämplingar registreras inget automatiskt: appen ber inte ens om tillstånd att läsa positionen i bakgrunden.',
    },
  ],
};

export default content;
