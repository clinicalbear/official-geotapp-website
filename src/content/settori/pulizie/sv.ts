import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Programvara för Städföretag och Facility Management | Skiftdokumentation | GeoTapp',
    description: 'GeoTapp för städföretag och facility management: GPS-verifierad tidregistrering, fotodokumentation av städade utrymmen, tillsyn av utspridda team och efterlevnad av Städ- och serviceentreprenadavtalet.',
  },
  hero: {
    badge: 'Programvara för Städföretag, Facility Management och Serviceentreprenader',
    h1_line1: 'Programvara för städföretag:',
    h1_line2: 'scheman, fotodokumentation och verifierade timmar — på varje objekt',
    subtitle: 'GeoTapp kopplar samman Flow + TimeTracker för team fördelade på flera byggnader och våningar. Era städare stämplar in med GPS-verifierad smartphone; kontoret ser vem som städat vad, var och när — med bifogad fotodokumentation. Inga tvister, full efterlevnad av Städ- och serviceentreprenadavtalet.',
    cta_primary: 'Begär en demo',
    cta_note: 'Inga bindningar. Svar inom 12 arbetstimmar.',
  },
  pain: {
    title: 'Problemet du redan känner igen',
    items: [
      {
        title: 'Tvister om huruvida utrymmen verkligen städades',
        desc: 'Kunden hävdar att ett utrymme inte städades eller ifrågasätter tidpunkten. Dina städare har inga bevis. Tvisten drar ut på tiden och kontraktet riskerar att gå förlorat.',
      },
      {
        title: 'Tillsyn av utspridda team på flera objekt',
        desc: 'Du har personal på flera byggnader, våningar och skiftscheman samtidigt. Att veta vem som är var och om rundan är avklarad kräver en rad samtal och meddelanden.',
      },
      {
        title: 'Ofullständiga skiftöverlämningar och avtalskrav',
        desc: 'Dagskiftet vet inte vad kvällsskiftet gjorde. Pappersblanketter försvinner, meddelanden ignoreras, och Städavtalet kräver spårbara register över raster och övertid.',
      },
    ],
  },
  workflow: {
    title: 'Så fungerar det i tre steg',
    subtitle: 'Från byggnaden till kontoret — utan att jaga någon.',
    steps: [
      {
        title: 'Städaren stämplar in på plats',
        desc: 'Med GeoTapp TimeTracker registrerar de start, slut, foton av utrymmena och anteckningar direkt från smartphones. GPS-verifierat, GDPR-anpassat, Städavtalet-kompatibelt.',
      },
      {
        title: 'Kontoret ser allt i realtid',
        desc: 'Flow tar emot data omedelbart. Objektansvarig ser vilken byggnad som betjänats, av vem, vid vilken tid och med vilka fotodokument — utan ett enda telefonsamtal.',
      },
      {
        title: 'Överlämningsrapporten är redan klar',
        desc: 'I slutet av skiftet är servicerapporten redan strukturerad med verkliga data: arbetade timmar, raster, täckta utrymmen och foton. Ingen manuell rekonstruktion, inget obesvarat krav.',
      },
    ],
  },
  features: {
    title: 'Vad du får',
    items: [
      {
        title: 'GPS-verifierad tidstämpling per objekt',
        desc: 'Varje in- och utstämpling är kopplad till position, tidsstämpel och tilldelad byggnad. Försvarbart mot kunden, uppdragsgivaren och Arbetsmiljöverket.',
      },
      {
        title: 'Fotodokumentation före och efter',
        desc: 'Städarna fotograferar direkt från appen. Bilder med datum, tid och GPS: obestridligt bevis på utförd tjänst.',
      },
      {
        title: 'Löneexport för Visma och Fortnox',
        desc: 'Exportera månadsvis närvaro kompatibel med Visma, Fortnox och andra svenska lönesystem, med automatisk separering av ordinarie timmar, övertid och OB-tillägg enligt Städavtalet.',
      },
    ],
  },
  testimonial: {
    quote: 'Sedan vi började använda GeoTapp har vi inte fått ett enda skriftligt klagomål från en kund. Fotona talar för sig.',
    author: 'Anna-Lena K.',
    role: 'Driftchef, städentreprenad',
  },
  faq: {
    title: 'Vanliga frågor',
    subtitle: 'Det vi får fråga om mest innan man sätter igång.',
    items: [
      {
        q: 'Är GeoTapp lämpligt för städföretag och facility management-aktörer?',
        a: 'Ja. GeoTapp hjälper städföretag, FM-leverantörer och serviceentreprenörer att hantera scheman på flera objekt, dokumentera tjänster med GPS-tidregistrering och fotodokumentation, och uppfylla kraven i Städ- och serviceentreprenadavtalet.',
      },
      {
        q: 'Hur hanterar jag team fördelade på flera byggnader samtidigt?',
        a: 'Flow visar realtidsstatus och position för varje städare per byggnad. Du kan tilldela skift, kontrollera täckning och få automatiska aviseringar vid frånvaro eller förseningar.',
      },
      {
        q: 'Hjälper GeoTapp med efterlevnad av Städavtalet för raster och övertid?',
        a: 'Ja. Systemet registrerar automatiskt rasttider, övertid och skiftmönster. Månadsexporten är kompatibel med Visma och Fortnox för avtalsenlig lönehantering.',
      },
    ],
  },
  cta: {
    title: 'Sluta med tvister. Börja bevisa.',
    subtitle: 'GeoTapp Flow och TimeTracker ger ditt städföretag den operativa kontroll och de bevis du verkligen behöver.',
    primary: 'Begär en demo',
    secondary: 'Se priser',
  },
  schema_sector_name: 'Städföretag',
};

export default content;
