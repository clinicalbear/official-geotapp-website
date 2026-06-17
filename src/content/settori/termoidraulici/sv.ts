import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App för Rörmokare och VVS-tekniker | GeoTapp - GPS, Rapporter & Bevis',
    description: 'GeoTapp är appen för rörmokare och VVS-tekniker: GPS-verifierade rapporter, foton av installationer och oföränderlig dokumentation. Lös tvister med riktiga bevis. Testa gratis.',
  },
  hero: {
    badge: 'App för Rörmokare och VVS-tekniker',
    h1_line1: 'App för rörmokare och VVS-tekniker:',
    h1_line2: 'GPS-rapporter, fotobevis och noll tvister.',
    subtitle: 'GeoTapp registrerar varje uppdrag på pannor och värmesystem med GPS, foton och verifierbara tidsstämplar. Kunden nekar utbytta delar? Visa rapporten, ingen diskussion behövs. Dina tekniker är skyddade, din fakturering också.',
    cta_primary: 'Kom igång gratis!',
    cta_note: 'Ingen bindning. Svar inom 12 arbetstimmar.',
  },
  pain: {
    title: 'Problemet som varje VVS-företag känner väl till',
    items: [
      {
        title: 'Kunden nekar utbytta delar på pannan',
        desc: 'Hen säger att du installerade andra komponenter än överenskommet, eller att anläggningen redan var så. Utan fotobevis blir tvisten ord mot ord.',
      },
      {
        title: 'Ingen dokumentation av installationen efter uppdraget',
        desc: 'Teknikern avslutade reparationen, men det finns varken fotoregistrering eller teknisk anteckning. Om felet återkommer är det omöjligt att rekonstruera vad som gjordes.',
      },
      {
        title: 'Akutjobb är inte spårbara',
        desc: 'Värmefel uppstår vid omöjliga tidpunkter. Teknikern rycker ut, löser problemet, men det finns inget kvar att visa kunden eller försäkringen.',
      },
    ],
  },
  workflow: {
    title: 'Hur det fungerar i tre steg',
    subtitle: 'Från jobbet till kontoret, utan telefonsamtal.',
    steps: [
      {
        title: 'Teknikern registrerar uppdraget på plats',
        desc: 'Med GeoTapp TimeTracker stämplar hen in och ut med GPS, fotograferar anläggning och panna och lägger till anteckningar om utbytta delar från sin smartphone.',
      },
      {
        title: 'Kontoret ser allt i realtid',
        desc: 'GeoTapp Flow tar emot data omedelbart. Den ansvarige ser ärendet, tilldelad tekniker, framsteg och fotobevis utan att ringa.',
      },
      {
        title: 'Rapporten är ditt bevis',
        desc: 'Efter uppdraget genererar systemet en förseglad rapport: GPS-tidsstämpel, anläggningsfoton och delar, tekniska anteckningar. Oföränderlig. Kunden kan verifiera den självständigt.',
      },
    ],
  },
  differenza: {
    title: 'App för rörmokare: tidsregistrering eller jobbcertifiering?',
    subtitle: 'De flesta appar registrerar incheckning. GeoTapp producerar verifierbart bevis.',
    rows: [
      {
        label: 'Vad det registrerar',
        competitor: 'In- och utcheckningstid',
        geotapp: 'Tid + verifierat GPS + anläggningsfoton + utbytta delar',
      },
      {
        label: 'Vid tvist',
        competitor: 'Data ej försvarbar',
        geotapp: 'Förseglad rapport, oföränderlig',
      },
      {
        label: 'Jobbdokumentation',
        competitor: 'Manuell eller frånvarande',
        geotapp: 'Autogenererad med GPS och foton',
      },
      {
        label: 'Vem kan verifiera',
        competitor: 'Bara ditt kontor',
        geotapp: 'Du, beställaren, en tredje part',
      },
      {
        label: 'GDPR-efterlevnad',
        competitor: 'Ofta att verifiera',
        geotapp: 'Compliant by design, formulär inkluderade',
      },
    ],
  },
  prima_dopo: {
    title: 'Före GeoTapp. Efter GeoTapp.',
    prima: [
      'Kunden nekar att ventilen byttes ut.',
      'Du har inga foton och inga dokumenterade delar.',
      'Diskussionen pågår i veckor. Du riskerar att inte bli betald.',
      'Teknikern har inget i handen för att försvara sig.',
    ],
    dopo: [
      'Kunden nekar att ventilen byttes ut.',
      'Du öppnar rapporten: foto på borttagen del, på den nya monterade, GPS-tidsstämpel, tekniska anteckningar.',
      'Du skickar den. Tvisten slutar på en minut.',
      'Betalningen är säkrad. Teknikern är skyddad.',
    ],
  },
  scenario: {
    title: 'Verkligt fall',
    body: 'En kund bestrider utbytet av en pannbrännare och vägrar betala fakturan. Med GeoTapp öppnar du rapporten: foto på den defekta, borttagna delen, den nya installerade, GPS-tidsstämpel för uppdraget och tekniska anteckningar från teknikern, allt automatiskt genererat från smartphonen på plats.',
    resolution: 'Tvisten försvinner. Fakturan betalas i sin helhet.',
  },
  features: {
    title: 'App för rörmokare och VVS-tekniker: vad du hittar i GeoTapp.',
    items: [
      {
        title: 'Verifierbar GPS-tidsstämpling',
        desc: 'Varje besök och avresa från anläggningen registreras med plats, tidsstämpel och ärende. Försvarbar mot kunder och försäkringsbolag.',
      },
      {
        title: 'Förseglade anläggningsfoton',
        desc: 'Teknikern fotograferar från appen under och efter uppdraget. Varje bild är kopplad till GPS och tidsstämpel, oföränderlig efter generering.',
      },
      {
        title: 'Automatiska digitala jobbrapporter',
        desc: 'När arbetet är klart är rapporten redo: timmar, foton, utbytta delar och underskrift. Teknikern skickar den till kunden direkt från appen.',
      },
      {
        title: 'Ärendes- och akuthantering',
        desc: 'Tilldela akutjobb, övervaka framsteg och ta emot varningar om en aktivitet inte slutförs i tid.',
      },
      {
        title: 'Löneexport',
        desc: 'Exportera månadsfrånvaro i format kompatibla med svenska lönesystem. Lönebehandling blir en snabb operation.',
      },
      {
        title: 'Dina tekniker är skyddade',
        desc: 'En verifierbar rapport skyddar teknikern mot ogrundade anklagelser om delar eller timmar. Den som arbetar bra bevisar det med data.',
      },
    ],
  },
  cta_mid: {
    title: 'Vill du se hur det fungerar på ett riktigt VVS-jobb?',
    body: 'Vi visar dig hela flödet: från att öppna ett ärende till den rapport kunden får. På 20 minuter vet du om det är rätt för dig.',
    cta: 'Kom igång gratis!',
  },
  trust: {
    title: 'Våra rapporter kan inte ändras. Inte av dig. Inte av oss.',
    body: 'GeoTapp-rapporter genereras av systemet i stunden för uppdraget. Det finns ingen panel för att "korrigera" en tid eller flytta ett foto. Datan är vad den är, digitalt signerad, med riktigt GPS.',
    badge: 'Verifierbar av vem som helst, utan tillgång till ditt konto',
  },
  testimonial: {
    quote: 'Med GeoTapp fotograferar mina tekniker anläggningen före och efter varje uppdrag. Tvister om delar har försvunnit. Fakturor betalas.',
    author: 'Marco S.',
    role: 'Ägare, bostads- och kommersiella värmeinstallationer',
  },
  faq: {
    title: 'Vanliga frågor',
    subtitle: 'Vad rörmokare frågar oss mest innan de börjar.',
    items: [
      {
        q: 'Är GeoTapp lämplig som app för rörmokare och VVS-tekniker?',
        a: 'Ja. GeoTapp används av rörmokare och VVS-tekniker för att hantera uppdrag på pannor och anläggningar med GPS-rapporter, foton och verifierbara timmar.',
      },
      {
        q: 'Kan jag använda GeoTapp för att dokumentera utbyte av delar på pannor?',
        a: 'Ja. Teknikern fotograferar från appen den borttagna och den installerade delen. Varje bild är kopplad till GPS, tidsstämpel och ärende, ingår i den oföränderliga rapporten.',
      },
      {
        q: 'Hjälper GeoTapp till att lösa kundtvister om installationer?',
        a: 'Det är exakt det primära användningsfallet: GPS-tidsstämpel, fotobevis på delar och en förseglad rapport gör varje ogrundad tvist lösbar på några minuter.',
      },
    ],
  },
  cta: {
    title: 'Varje välgjort VVS-uppdrag förtjänar bevis. GeoTapp genererar det.',
    subtitle: 'Verifierbara rapporter, riktigt GPS, förseglade foton. Ditt arbete är försvarbart.',
    primary: 'Kom igång gratis!',
    secondary: 'Se priser',
  },
  pricing_hint: {
    label: 'Från',
    per: 'operatör/månad',
    note: '14 dagars gratis provperiod',
  },
  schema_sector_name: 'Rörmokare och VVS-tekniker',
  schema_faq: [
    {
      question: 'Fungerar GeoTapp som app för rörmokare och VVS-tekniker?',
      answer: 'Ja. GeoTapp är appen för rörmokare och VVS-tekniker som registrerar varje uppdrag på pannor och anläggningar med GPS, foton och verifierbara tidsstämplar. Teknikern stämplar in från platsen, kontoret ser allt i realtid och kunden får en förseglad rapport.',
    },
    {
      question: 'Hur certifierar jag ett pannuppdrag med GeoTapp?',
      answer: 'Teknikern registrerar start och slut med verifierat GPS, fotograferar utbytta delar och lägger till tekniska anteckningar. Systemet genererar en förseglad rapport som kunden kan verifiera självständigt.',
    },
    {
      question: 'Hanterar GeoTapp flera team av VVS-tekniker på olika uppdrag?',
      answer: 'Ja. GeoTapp Flow låter ägaren koordinera flera team, tilldela akutjobb, följa ärendesstatus och samla fotobevis från alla aktiva platser i realtid.',
    },
    {
      question: 'Accepteras GeoTapp-rapporter vid tvister om värmeinstallationer?',
      answer: 'GeoTapp-rapporter är förseglade med GPS, tidsstämplar och fotobevis. De har framgångsrikt använts för att lösa tvister om arbeten som nekades av slutkunden.',
    },
  ],
};

export default content;
