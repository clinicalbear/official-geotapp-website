import type { ContestazioniCopy } from './types';

/**
 * Sidan "När någon ifrågasätter arbetet" (27/10/2026), skriven på svenska från grunden.
 * Varje påstående om produkten kommer från claim-schemat (docs/stampa/scheda-claim.md), från it.ts
 * eller från de redan publicerade strängarna i dict.features (sv.json). Aldrig här: "aldrig mer
 * tvister", "juridiskt bevis", "intygar/certifierar", "garanterar", krypterade positioner,
 * "i realtid"/"livekarta", foton "bara live", "ingenting registreras mellan" utan "automatiskt",
 * siffror utan källa. Behörigheten för plats i bakgrunden gäller bara Android och iPhone.
 */
const sv: ContestazioniCopy = {
  metaTitle: 'Tvister om utfört arbete: det här ändras med GeoTapp | GeoTapp',
  metaDesc:
    'När en kund eller en medarbetare ifrågasätter arbetet: vad har du i handen? Samma diskussion sedd från tre håll: företaget, den som arbetar och beställaren.',
  kicker: 'Tvister om utfört arbete',
  h1: 'När någon ifrågasätter arbetet: det här ändras med GeoTapp',
  lede:
    'En tvist går inte att undvika. Det som ändras är vad du har i handen när den dyker upp: ett minne mot ett annat minne, eller ett dokument. Här ser du samma diskussion från tre håll: företaget, den som arbetar och den som beställde arbetet.',
  updatedLabel: 'Uppdaterad den 27 oktober 2026',
  scenes: [
    {
      kicker: 'Företaget',
      heading: 'Om du är företaget',
      scene: '«Kunden säger att ni aldrig kom. Eller att ni var där en timme, inte tre.»',
      haveTitle: 'Det här har du i handen',
      have: [
        'Tiden för ankomst, raster och avslut för varje uppdrag.',
        'Platsen som registrerades vid stämplingen. Vid stämpling avvisar appen positioner som simulerats av appar för falsk plats, positioner som är för oprecisa och omöjliga förflyttningar.',
        'Bevisfotona från uppdraget. På foton avvisas ingenting: de flaggas, genom att tid och plats för bilden jämförs med stämplingens.',
        'En rapport som sätts ihop av stämplingar, foton och anteckningar när uppdraget är klart och som förseglas: varje senare ändring går att upptäcka.',
      ],
      changeTitle: 'Det här ändras',
      change: [
        'I stället för att rekonstruera från minnet mellan WhatsApp, mejl och papperslappar skickar du ett dokument.',
        'Saknas nätet ligger stämplingen sparad i telefonen och skickas av sig själv när signalen kommer tillbaka, med den tid då den gjordes.',
        'Dokumenterade timmar är timmar du kan visa upp när du fakturerar dem.',
      ],
    },
    {
      kicker: 'Den som arbetar',
      heading: 'Om det är du som arbetar',
      scene: '«Jag jobbade fler timmar än jag fick betalt för.»',
      haveTitle: 'Det här har du',
      have: [
        'Dina arbetspass, med starttid, raster och sluttid, som du kan gå igenom i appen per period, med summan av timmarna.',
        'Platsen registreras bara när du stämplar eller tar ett bevisfoto: in, början och slut på rast, ut.',
        'Mellan två stämplingar registreras ingen plats automatiskt och löpande. På Android och iPhone ber appen inte ens om behörighet till plats i bakgrunden.',
      ],
      changeTitle: 'Det här ändras',
      change: [
        'Om det blir diskussion om timmarna finns det en tid som registrerades genom något du gjorde, och den hänger inte på någons minne.',
        'Kontoret ser stämplingarna när de kommer in: skärmen heter Dagens stämplingar och visar de stämplingar som gjorts, inte var någon befinner sig just nu.',
      ],
      extra: {
        title: 'Vad som finns kvar av platserna, och hur länge',
        paragraphs: [
          'I registret raderas platser efter tolv månader, en period som företaget kan korta ner till trettio dagar.',
          'I rapporter som redan lämnats ut finns de kvar, eftersom de är förseglade dokument, och de följer den lagstadgade bevarandetiden: efter fem år raderas paketet. En utlämnad rapport är en ögonblicksbild: den uppdateras inte och går inte att ändra utan att bryta det sigill som gör den kontrollerbar.',
        ],
      },
    },
    {
      kicker: 'Beställaren',
      heading: 'Om du är beställaren',
      scene: '«De säger att arbetet är gjort. Hur kan jag veta det utan att bara lita på dem?»',
      haveTitle: 'Det här gör du',
      have: [
        'Du får en länk till rapporten och kontrollerar den själv, online eller med offlineverifieraren: en enda fil som inte ansluter till internet och bär den publika nyckeln inuti.',
        'Kontrollen räknar om avtrycket för varje händelse och varje foto och verifierar signaturen. Verifieringssidan visar två skilda saker: om dokumentet är intakt och signaturen.',
        'Det fungerar även om flera år, även utan GeoTapp: den som har paketet och verifieraren kan göra om kontrollen.',
      ],
      changeTitle: 'Vad det visar och vad det inte visar',
      change: [
        'Systemet kan hjälpa till att upptäcka ändringar i det överlämnade paketet och att kontrollera dess tekniska konsistens och integritet; det utgör i sig varken ett absolut bevis för själva händelsen eller juridisk rådgivning.',
        '«Intakt dokument» betyder att det inte har manipulerats. Det är signaturen, som inte går att göra om utan nyckeln, som visar att det är vi som har utfärdat paketet.',
      ],
    },
  ],
  sample: {
    heading: 'Prova med en riktig rapport',
    paragraphs: [
      'Nedan finns en exempelrapport, ett byte av elcentral. Ladda ner den och kontrollera den i din webbläsare: kontrollen körs hos dig och filen skickas inte till oss.',
    ],
  },
  limits: {
    heading: 'Vad GeoTapp inte gör',
    items: [
      'Det spårar inte löpande, inte ens om vi ville: på Android och iPhone ber appen inte om behörighet till plats i bakgrunden.',
      'Det bevisar inte i sig att händelsen inträffade: det visar om paketet har ändrats efter överlämnandet.',
      'Det lovar inte att tvisterna försvinner: det ändrar vad du lägger fram när de kommer.',
      'Det ersätter inte en arbetsrättskonsult, dataskyddsombudet, överenskommelser med arbetstagarrepresentanter eller de tillstånd som lagen i ditt land kan kräva.',
    ],
    formula:
      'Kort sagt: systemet kan hjälpa till att upptäcka ändringar i det överlämnade paketet och att kontrollera dess tekniska konsistens och integritet; det utgör i sig varken ett absolut bevis för själva händelsen eller juridisk rådgivning.',
  },
  faq: {
    title: 'Vanliga frågor',
    items: [
      {
        q: 'Räcker en GeoTapp-rapport för att vinna en tvist?',
        a: 'Inte ensam. Rapporten visar vad som registrerades och låter vem som helst kontrollera att den inte har ändrats efter överlämnandet; den bevisar inte i sig att händelsen inträffade, och den är inte juridisk rådgivning. Det är ett ordnat och kontrollerbart dokument i stället för ett minne mot ett annat.',
      },
      {
        q: 'Spårar GeoTapp de anställda under dagen?',
        a: 'Nej. Platsen registreras bara när den som arbetar gör något: in, början och slut på rast, ut, bevisfoto. Mellan två stämplingar registreras ingen plats automatiskt och löpande. På Android och iPhone ber appen inte ens om behörighet till plats i bakgrunden.',
      },
      {
        q: 'Måste beställaren lita på GeoTapp för att kontrollera rapporten?',
        a: 'Nej. Offlineverifieraren är en enda fil som inte ansluter till internet och bär den publika nyckeln inuti: den räknar om avtrycken och kontrollerar signaturen även om flera år, även utan GeoTapp. Kontrollen visar om paketet har ändrats, inte om händelsen inträffade.',
      },
      {
        q: 'Vad händer med platserna efter överlämnandet?',
        a: 'I registret raderas de efter tolv månader, en period som företaget kan korta ner till trettio dagar. I rapporter som redan lämnats ut finns de kvar, eftersom de är förseglade dokument, och de följer den lagstadgade bevarandetiden: efter fem år raderas paketet.',
      },
      {
        q: 'Var finns uppgifterna?',
        a: 'Arbetsdata och foton lagras i Europeiska unionen.',
      },
      {
        q: 'Ersätter GeoTapp arbetsrättskonsulten eller överenskommelser med arbetstagarrepresentanter?',
        a: 'Nej. GeoTapp hjälper dig att hålla dig inom ramarna för GDPR, men ersätter varken en arbetsrättskonsult, dataskyddsombudet, överenskommelser med arbetstagarrepresentanter eller de tillstånd som lagen i ditt land kan kräva.',
      },
    ],
  },
  next: {
    heading: 'Vill du gå vidare?',
    paragraph: 'Vill du se vad som finns inuti funktion för funktion, eller priserna, går du vidare härifrån.',
    featuresLabel: 'Vad GeoTapp gör, funktion för funktion →',
    pricingLabel: 'Se priserna →',
  },
  card: {
    title: 'Det här ändras när någon ifrågasätter arbetet',
    text: 'Företaget, den som arbetar och beställaren sida vid sida.',
    cta: 'Läs sidan',
  },
  disclaimer:
    'Den här sidan beskriver vad GeoTapp gör och är inte juridisk rådgivning. Vänd dig till en arbetsrättskonsult eller ett dataskyddsombud för just din situation.',
};

export default sv;
