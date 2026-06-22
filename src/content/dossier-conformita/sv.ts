import type { DossierCopy } from './types';

const sv: DossierCopy = {
  metaTitle: 'GeoTapp efterlevnadsdossier: bevis på arbete, inte övervakning',
  metaDesc:
    'Vad GeoTapp gör och inte gör, med rättskällorna i klartext och gränserna sagda rakt ut. GDPR, svensk arbetsrätt och MBL, bevisets integritet.',
  badge: 'Efterlevnadsdossier',
  h1: 'Bevis på arbete, inte övervakning',
  subtitle:
    'Vad GeoTapp gör och, framför allt, vad det inte gör. Med rättskällorna i klartext och gränserna sagda rakt ut. Ett dokument att läsa, granska och hänvisa till.',
  sections: [
    {
      heading: 'Varför det här dokumentet finns',
      paragraphs: [
        'I Bryssel skrivs just nu reglerna för hur arbetstagare får följas upp, mellan direktivet om plattformsarbete, algoritmisk styrning och AI-förordningen tillämpad på arbetslivet. Under tiden måste den som skickar arbetslag ut på fält redan registrera arbetstid, kunna styrka den när någon ifrågasätter den, och göra det utan att trampa på människors integritet. Det är en svår balans, och på den balansen vilar en stor del av förtroendet mellan den som organiserar arbetet och den som utför det.',
        'GeoTapp föddes inuti det här problemet, inte vid sidan av det. Därför, i stället för att lova, skriver vi ner vad GeoTapp gör och inte gör, med rättskällorna i klartext och gränserna sagda rakt ut. Det som följer går att läsa, att granska och att hänvisa till. Den som hittar en svag punkt är välkommen att påpeka den: ett efterlevnadsdossier är värt det som håller, inte hur det låter.',
      ],
    },
    {
      heading: 'Vad det gör, och framför allt vad det inte gör',
      paragraphs: [
        'Principen är en enda: registrera händelsen, inte följ personen.',
        'GeoTapp läser av positionen endast i samband med stämplingen, vid in- och utstämpling, och inte under arbetsdagen. Mellan två stämplingar finns ingen spårning alls: inget spår av förflyttningar, ingen position insamlad i smyg, ingen digital skuggning. Fotot som följer med stämplingen kan tas endast med livekameran, det går inte att ladda upp en bild ur galleriet. De insamlade uppgifterna är begränsade till det minsta nödvändiga som ett medvetet val i utformningen, inte som en eftertanke.',
        'Det GeoTapp inte gör är lika viktigt. Det följer inte den anställde utanför arbetstid, profilerar inte beteenden, mäter inte facklig verksamhet, läser inte av känslolägen, bygger inte poäng på människor. Det är precis den gräns som Europaparlamentet har pekat ut som det som bör förbjudas, och GeoTapp håller sig redan utanför den.',
      ],
    },
    {
      heading: 'GDPR-principerna, tillämpade och inte upplästa',
      paragraphs: [
        'Uppgiftsminimering (art. 5.1 c GDPR): positionen samlas in endast vid stämpling, inte fortlöpande.',
        'Ändamålsbegränsning (art. 5.1 b): syftet är att styrka utfört arbete, inte att kontrollera personen på distans.',
        'Rättslig grund (art. 6): fullgörande av anställningsavtalet och ett dokumenterat berättigat intresse, åtföljda av information.',
        'Öppenhet (art. 12-14): arbetstagaren får tydlig information. GeoTapp tillhandahåller en mall för GPS-information, gratis och nedladdningsbar.',
        'Inbyggt dataskydd (art. 25): minimal insamling är verktygets standardbeteende, inte ett val att slå på.',
      ],
    },
    {
      heading: 'Förhållandet till svensk arbetsrätt och MBL',
      paragraphs: [
        'I Sverige finns ingen enskild paragraf som reglerar kontroll på distans på samma sätt som i andra länder; ramen ges av dataskyddsförordningen (GDPR) tillsammans med den svenska arbetsrätten. Personuppgiftsansvarig är fortsatt arbetsgivaren, och behandlingen ska vara proportionerlig: åtgärden ska stå i rimlig relation till ändamålet, inte gå längre än nödvändigt och föregås av förhandsinformation till arbetstagaren. Integritetsskyddsmyndigheten (IMY) är tillsynsmyndighet och har gett vägledning om kontroll och behandling av anställdas uppgifter.',
        'Till detta kommer den kollektiva arbetsrätten. Lagen om medbestämmande i arbetslivet (MBL) innebär att arbetsgivaren har en förhandlingsskyldighet inför viktigare förändringar i verksamheten, och införandet av ett system som behandlar anställdas positions- och närvarouppgifter kan utlösa förhandling och medbestämmande med facket. GeoTapp placerar sig inom denna ram som ett verktyg som underlättar efterlevnad, inte som en genväg som kringgår den. Personuppgiftsansvarig förblir arbetsgivaren, med sina skyldigheter: GeoTapp levererar ett verktyg utformat för att hålla sig inom reglerna, och resurserna för att tillämpa dem. För övriga europeiska länder samlar EU-kartan över GPS för arbetstagare trettionio nationella faktablad, granskade för hand, med skyldigheter, behörig myndighet och sanktioner för varje land.',
      ],
    },
    {
      heading: 'Bevisets integritet',
      paragraphs: [
        'När GeoTapp talar om bevis på arbete menas något som håller mot ett ifrågasättande, och för att hålla måste det vara svårt att förfalska och omöjligt att ändra i efterhand. Försvaret är uppbyggt i lager.',
        'Tagningen av fotot är låst till livekameran: värdet som identifierar detta läge är fastställt i klienterna och, framför allt, kontrolleras av databasens regler i skrivögonblicket, som avvisar en stämpling med ett annat läge. För varje foto beräknar klienten ett kryptografiskt SHA-256-avtryck, ett nödvändigt villkor för att gå vidare.',
        'Arbetspassen är oföränderliga när de väl skapats: starttiden, positionen som registrerats vid stämplingen och användarens identitet kan inte ändras av den anställde, och borttagning är förbehållen administratörer. Pass med position uppstår endast genom en serverfunktion med administrativa rättigheter, inte genom direkt skrivning från appen, så att operatören inte kan datera om en stämpling, flytta dess position eller få den att försvinna.',
        'Upptäckten av falsk GPS verkar redan innan stämplingen startar. På Android-enheter sker kontrollen i flera nivåer, med en lista över kända spoofing-appar, kontroll av behörigheter för fingerad position och av tecken på root: om den slår till blockeras stämplingen, den signaleras inte bara. På iOS används operativsystemets inbyggda signal som anger en position simulerad via mjukvara. Dessutom fångas teleportering upp, det vill säga en förflyttning i en fysiskt omöjlig hastighet mellan två stämplingar.',
        'Varje stämpling lämnar slutligen ett spår i en granskningslogg på servern, med tidpunkten genererad av servern och inte av enheten, och ingen klient kan skriva i den loggen, inte ens en administratör.',
      ],
    },
    {
      heading: 'Gränserna, klart sagt',
      paragraphs: [
        'Det här är avsnittet som många skulle utelämna, och det är just det som gör allt det övriga trovärdigt. GeoTapp gör spoofing svårt och styrker stämplingens sammanhang, men lovar inte det omöjliga, och att säga det är en form av respekt mot den som läser.',
        'Servern verifierar inte koordinaterna kryptografiskt på nytt: den kontrollerar att de är rimliga och inom en eventuell geofence, men litar på den position som enheten uppger. Enhetens attestering intygar att appen kommer från de officiella kanalerna, den skyddar inte mot en klient som modifierats och analyserats av någon med rätt kompetens. Läget endast livekamera är en ärlig deklaration från enheten, inte ett kryptografiskt bevis som servern kan göra om på bilden. Kontrollerna är mer fullständiga på smarttelefonen än på klockan. Och, framför allt, befriar verktyget inte arbetsgivaren från sin roll som personuppgiftsansvarig: kvar hos arbetsgivaren ligger plikten att informera, att förhandla där det krävs, att hålla behandlingen proportionerlig.',
        'Sagt på ett annat sätt: GeoTapp höjer ribban och dokumenterar händelsen, det säljer inte ogenomtränglighet. Den som lovar ogenomtränglighet har för det mesta aldrig behövt bevisa den i en domstol.',
      ],
    },
    {
      heading: 'De offentliga resurserna som stöd',
      paragraphs: [
        'Allt som behövs för att tillämpa dessa principer är offentligt och gratis: EU-kartan över GPS för arbetstagare med faktablad för trettionio länder, mallen för GPS-information, sanktionsräknaren, övervakningsindexet. Granskade vid källan, fria att använda och hänvisa till med angiven källa. De finns där eftersom att följa reglerna i arbetslivet inte borde vara ett privilegium för den som har råd med en juristavdelning.',
      ],
    },
    {
      heading: 'Intygande',
      paragraphs: [
        'De tekniska påståendena i detta dokument är upprättade och undertecknade av Michele Angelo Petraroli, grundare av GeoTapp, som tar ansvar för dem och ställer sig till förfogande för granskning och motfrågor. Ett utlåtande från en arbetsrättsjurist och en dataskyddsombud kommer att läggas till i nästa version av dokumentet.',
      ],
    },
  ],
  sourcesTitle: 'Källor och hänvisningar',
  sources: [
    'Förordning (EU) 2016/679 (GDPR), särskilt art. 5, 6, 12-14, 25.',
    'Svensk arbetsrätt och lagen (1976:580) om medbestämmande i arbetslivet (MBL).',
    'Vägledning från Integritetsskyddsmyndigheten (IMY) om kontroll och behandling av anställdas personuppgifter.',
    'EU-texter under behandling: direktivet om arbete via digitala plattformar; bestämmelser om algoritmisk styrning; förordningen om artificiell intelligens tillämpad på arbetslivet.',
  ],
  lastUpdated: 'Version 1.0',
  faq: {"title": "Vanliga frågor", "items": [{"q": "Vad är efterlevnadsdossiern?", "a": "Det är dokumentet som förklarar, med källor i hand, varför GeoTapp är ett verktyg för bevis på utfört arbete och inte ett övervakningsverktyg, och hur det håller under GDPR och arbetsrätten. Det är till för alla som verkligen vill förstå hur data hanteras, inte för dem som nöjer sig med en slogan."}, {"q": "Är GeoTapp ett övervakningssystem?", "a": "Nej, och det är byggt specifikt för att inte vara det. Verktyget registrerar platsen endast vid instämpling, när någon öppnar eller avslutar ett uppdrag, aldrig kontinuerligt, och det tar fram integritetsinformationen som ska skrivas under. Det bevisar vad som gjordes och var, det övervakar inte människor."}, {"q": "Vad behöver jag den här dossiern till?", "a": "För att kunna svara när en anställd, en kund eller en rådgivare frågar om det du använder är förenligt med reglerna. I stället för att improvisera har du en text som lägger ut resonemanget och källorna, och som du kan vidarebefordra som den är."}, {"q": "Är källorna verifierade?", "a": "Ja, dossiern pekar på verklig lag och verkliga beslut, listade i slutet med uppdateringsdatumet. Den förblir ändå en informativ resurs och inte juridisk rådgivning: för din specifika situation, låt en yrkesperson granska allt."}, {"q": "Kan jag visa den för en kund eller i en tvist?", "a": "Du kan använda den för att förklara hur GeoTapp är uppbyggt och för att visa att efterlevnad inte är ett påstående som slängs ut lättvindigt. I en rättstvist är det dock dina verkliga data och din integritetsinformation som räknas: dossiern är sammanhanget, beviset är den registrerade arbetssessionen."}, {"q": "Gäller den bara för Italien?", "a": "Det underliggande resonemanget håller i hela unionen, eftersom det utgår från GDPR, men detaljerna kring övervakning av arbetstagare ändras från land till land. För en enskild stats situation, utgå från dess blad här i resurserna."}]},
};

export default sv;
