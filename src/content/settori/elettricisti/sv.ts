import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App för Elektriker | GeoTapp - GPS Arbetsrapporter & Bevis',
    description: 'GeoTapp är appen för elektriker: GPS-verifierade arbetsrapporter, installationsfoton och manipuleringssäkra register. Stäng tvister med riktiga bevis. Prova gratis.',
  },
  hero: {
    badge: 'App för Elektriker och El-installatörer',
    h1_line1: 'App för elektriker:',
    h1_line2: 'GPS-rapporter, fotobevis och noll tvister.',
    subtitle: 'GeoTapp registrerar varje elinstallation med GPS, foton och verifierbara tidsstämplar. Kunden bestrider arbetet? Visa rapporten, ingen diskussion. Dina tekniker är skyddade, dina fakturor också.',
    cta_primary: 'Börja gratis',
    cta_note: 'Utan åtagande. Svar inom 12 arbetstimmar.',
  },
  pain: {
    title: 'Problemet som alla elektriker känner igen',
    items: [
      {
        title: 'Kunden nekar till insatsen eller timmarna',
        desc: 'De säger att teknikern inte var på plats eller att installationen inte slutfördes. Utan verifierbart bevis drar tvisten ut på veckor.',
      },
      {
        title: 'Ingen dokumentation av installationen efter jobbet',
        desc: 'Teknikern är klar, men det finns ingen fotodokumentation eller teknisk anteckning. Att rekonstruera vad som gjordes blir omöjligt.',
      },
      {
        title: 'Kontoret vet inte var teknikerna är',
        desc: 'Samtal, meddelanden, osäkerhet. För att informera en kund om framsteg måste du först hitta teknikern.',
      },
    ],
  },
  workflow: {
    title: 'Hur det fungerar i tre steg',
    subtitle: 'Från arbetsplatsen till kontoret, utan telefonsamtal.',
    steps: [
      {
        title: 'Teknikern registrerar insatsen på plats',
        desc: 'Med GeoTapp TimeTracker stämplar han in och ut med GPS, fotograferar installationen och lägger till tekniska anteckningar från sin smartphone.',
      },
      {
        title: 'Kontoret ser allt i realtid',
        desc: 'GeoTapp Flow tar emot data omedelbart. Den ansvarige ser uppdraget, tilldelad tekniker, framsteg och fotobevis utan att ringa.',
      },
      {
        title: 'Rapporten är ditt bevis',
        desc: 'Vid avslutning genererar systemet en förseglad rapport: GPS-tidsstämpel, installationsfoton, tekniska anteckningar. Manipuleringssäker. Kunden kan verifiera den självständigt.',
      },
    ],
  },
  features: {
    title: 'App för elektriker: vad du får med GeoTapp.',
    items: [
      {
        title: 'Verifierbar GPS-tidregistrering',
        desc: 'Varje ankomst och avresa registreras med plats, tidsstämpel och uppdrag. Försvarbart mot kunder och inspektioner.',
      },
      {
        title: 'Förseglade installationsfoton',
        desc: 'Teknikern fotograferar från appen. Varje bild är kopplad till GPS och tidsstämpel, manipuleringssäker.',
      },
      {
        title: 'Automatiska digitala arbetsrapporter',
        desc: 'Rapporten är klar vid avslutning: timmar, foton, anteckningar och underskrift. Teknikern skickar från appen.',
      },
      {
        title: 'Hantering av flera arbetsplatser',
        desc: 'Tilldela insatser och ta emot varningar om en uppgift inte öppnas eller stängs i tid.',
      },
      {
        title: 'Lönexport',
        desc: 'Månadsvis närvaro kompatibel med Visma, Fortnox och Hogia. Lönehantering blir en snabb uppgift.',
      },
      {
        title: 'Dina elektriker är skyddade',
        desc: 'En verifierbar rapport skyddar teknikern mot ogrundade anklagelser. Bra arbete bevisas med data.',
      },
    ],
  },
  testimonial: {
    quote: 'Med GeoTapp dokumenterar mina tekniker installationen direkt när de är klara. Ingen tvist överlever rapporten. Fakturorna betalas.',
    author: 'Karl M.',
    role: 'Ägare, el-installationer',
  },
  faq: {
    title: 'Vanliga frågor',
    subtitle: 'Vad elektriker frågar oss innan de börjar.',
    items: [
      {
        q: 'Är GeoTapp lämplig som app för elektriker?',
        a: 'Ja. GeoTapp används av elektriker och el-installatörer för att hantera insatser, tidrapporter, närvaro och fotodokumentation av installationer.',
      },
      {
        q: 'Hjälper GeoTapp med att lösa tvister med kunder?',
        a: 'Det är den primära användningen: GPS, fotobevis och förseglade rapporter löser alla ogrundade tvister på minuter.',
      },
      {
        q: 'Uppfyller GeoTapp GDPR för medarbetargeolokalisering?',
        a: 'Ja. GeoTapp hanterar geolokalisering i enlighet med GDPR och inkluderar informationsformulär till medarbetare.',
      },
    ],
  },
  cta: {
    title: 'Varje välutfört jobb förtjänar bevis. GeoTapp genererar det.',
    subtitle: 'Verifierbara rapporter, riktigt GPS, förseglade foton. Ditt arbete är försvarbart.',
    primary: 'Börja gratis',
    secondary: 'Se priser',
  },
  pricing_hint: {
    label: 'Från',
    per: 'medarbetare/månad',
    note: 'Gratis provperiod 14 dagar',
  },
  schema_sector_name: 'Elektriker',
};

export default content;
