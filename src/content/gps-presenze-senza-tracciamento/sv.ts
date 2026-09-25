import type { PresenzeCopy } from './types';

const sv: PresenzeCopy = {
  metaTitle: 'Kan GPS användas för närvaro utan att spåra anställda? - GeoTapp',
  metaDesc:
    'Ja, om positionen bara registreras vid stämpling. Vad en italiensk domstol slog fast 2026, vad tillsynsmyndigheter faktiskt bötfäller, och vad ett regelenligt GPS-närvarosystem registrerar.',
  h1: 'Kan GPS användas för närvaro utan att spåra anställda?',
  lede:
    'Ja. Ett system som bara fångar position i exakt det ögonblick en anställd stämplar in, tar rast eller stämplar ut övervakar inte personen löpande: det dokumenterar ett faktum. Det är precis den distinktionen som en italiensk domstol bekräftade 2026, och den stämmer med det som tillsynsmyndigheter faktiskt bötfäller: kontinuerlig spårning, inte den enskilda positionsregistreringen.',
  updatedLabel: 'Uppdaterad 25 september 2026',
  sections: [
    {
      heading: 'När är GPS tillåtet för närvaroregistrering?',
      paragraphs: [
        'I de flesta EU-länder gäller samma princip: verktyg som skulle kunna möjliggöra löpande kontroll av en anställds beteende kräver, innan de tas i bruk, en överenskommelse med facklig representation eller tillstånd från behörig myndighet. I Italien fastställer artikel 4 i Arbetartadgan (lag nr 300/1970) detta krav för fjärrkontrollverktyg, medan verktyg som bara registrerar in- och utpassering samt närvaro uttryckligen undantas.',
        'En italiensk dom av den 1 juli 2026 (domstolen i Cosenza, dom nr 972) drar gränsen för GPS-baserade stämplingsappar: när positionen bara fångas i det ögonblick man stämplar, utan löpande spårning av förflyttningar däremellan, klassas systemet som ett närvaroregistreringsverktyg och inte som fjärrövervakning. Domstolen upphävde därför ett bötesbelopp på 50 000 euro som den italienska dataskyddsmyndigheten hade ålagt en offentlig aktör, just av det skälet.',
        'Den praktiska regeln: en GPS-punkt tagen vid arbetspassets start och slut fångar ett ögonblick. Ett spår av punkter tagna varje minut följer en person. Samma satellitteknik, men två helt olika verktyg inför lagen.',
      ],
    },
    {
      heading: 'Vad registrerar GeoTapp, och vad registrerar det inte',
      paragraphs: [
        'GeoTapp fångar bara position när en anställd utför en konkret handling: stämplar in, påbörjar eller avslutar en rast, stämplar ut, plus en punkt per live-taget arbetsbevisfoto. Mellan två stämplingar registreras inget automatiskt: inget spår av förflyttningar, ingen spårning i bakgrunden, ingen position insamlad utan den anställdes vetskap.',
      ],
    },
    {
      heading: 'Så kan ett skyddsombud, en arbetsrättsjurist eller ett dataskyddsombud kontrollera det utan att fråga oss om något',
      paragraphs: [
        'Man behöver inte ta vårt ord för det: det går att kontrollera oberoende. I Android-appen deklarerar manifestet bara behörigheterna ACCESS_FINE_LOCATION och ACCESS_COARSE_LOCATION. Behörigheten ACCESS_BACKGROUND_LOCATION, som skulle krävas för att följa en anställd medan appen är stängd, begärs inte, och det finns ingen förgrundstjänst dedikerad åt position: utan den behörigheten levererar operativsystemet helt enkelt ingen positionsdata till en app som inte är öppen på skärmen. På iOS begär appen bara behörigheten "när appen används" (requestWhenInUseAuthorization), aldrig behörighet för bakgrundsspårning.',
        'Det är en kontroll som ett skyddsombud, en arbetsrättsjurist eller ett dataskyddsombud kan göra själv på några minuter, genom att läsa appens manifest eller den integritetsmärkning som publiceras av appbutiken, redan innan de läser den information som företaget lägger fram.',
      ],
    },
    {
      heading: 'Hur länge sparas insamlade positioner?',
      paragraphs: [
        'I stämplingsloggen raderas koordinaterna efter tolv månader; ett företag kan förkorta perioden till trettio dagar. I rapporter som redan levererats till en kund kvarstår däremot positionerna: det är förseglade dokument som fungerar som bevis för utfört arbete, och de följer den lagringstid som gäller för den typen av dokumentation, inte loggens.',
        'Det är två olika regler för två olika saker. Driftloggen blir lättare med tiden; ett dokument som redan överlämnats till någon annan följer sina egna regler, precis som vilket dokument som helst när det väl lämnat våra system.',
      ],
    },
    {
      heading: 'Och utanför Italien?',
      paragraphs: [
        'GDPR (särskilt artiklarna 5, 6, 12-14 och 25 i EU-förordning 2016/679) gäller i hela EU och ställer samma principer överallt: dataminimering, ett angivet ändamål, tydlig information till den anställde. Det som skiljer sig mellan länder är förfarandet kring fjärrkontroll: den lokala motsvarigheten till den italienska artikel 4, den fackliga representationens roll, behörig tillsynsmyndighet. För situationen i ett enskilt land samlar kartan över GPS och anställda i EU verifierade profiler land för land.',
      ],
    },
  ],
  table: {
    title: 'Vad som registreras och vad som inte gör det',
    colLeft: 'Registrerar',
    colRight: 'Registrerar inte',
    left: [
      'Position vid in- och utstämpling',
      'Position vid start och slut av varje rast',
      'En GPS-punkt per arbetsbevisfoto, tagen live',
      'En tidsstämpel genererad av servern, inte av den anställdes enhet',
    ],
    right: [
      'Ingen förflyttning under arbetspasset, mellan två stämplingar',
      'Ingen position utanför arbetspasset eller när appen är stängd',
      'Ingen poängsättning eller profilering av beteende',
      'Ingen position från foton uppladdade från ett galleri: enbart livekamera',
    ],
  },
  sourcesTitle: 'Källor och referenser',
  sources: [
    'Domstolen i Cosenza (Italien), dom nr 972 av den 1 juli 2026',
    'Den italienska dataskyddsmyndigheten (Garante), beslut nr 382 av den 28 maj 2026 (doc-web 10259916)',
    'Den italienska dataskyddsmyndigheten (Garante), beslut nr 135 av den 13 mars 2025 (doc-web 10128005), upphävt genom domen ovan',
    'Italiensk lag nr 300 av den 20 maj 1970 (Arbetartadgan), art. 4',
    'Förordning (EU) 2016/679 (GDPR), art. 5, 6, 12-14, 25',
  ],
  disclaimer:
    'Den här sidan beskriver allmänna principer som går att verifiera vid källan och utgör inte juridisk rådgivning: för din specifika situation, kontakta en arbetsrättsjurist eller ett dataskyddsombud.',
  faq: {
    title: 'Vanliga frågor',
    items: [
      {
        q: 'Är GPS-spårning av anställda förbjudet enligt GDPR?',
        a: 'Nej. Tillsynsmyndigheter har aldrig förbjudit GPS på anställda som sådant. Det de bötfäller är kontinuerlig spårning, avsaknad av information, insamling av data som inte har med arbetet att göra: inte den enskilda positionsregistreringen vid stämpling.',
      },
      {
        q: 'Krävs det alltid en överenskommelse med facklig representation för att använda GPS för närvaro?',
        a: 'Det krävs där systemet kan möjliggöra löpande kontroll av den anställdes aktivitet. Domstolen i Cosenza slog dock fast att ett system som bara fångar position vid stämpling, utan löpande spårning, faller under närvaroregistreringsverktyg som inte kräver det förfarandet.',
      },
      {
        q: 'Vad händer om systemet även spårar under raster?',
        a: 'Det är ett av de misstag som lett till verkliga böter: ett transportföretag bötfälldes med 50 000 euro, delvis eftersom spårningen fortsatte under raster. Principen om dataminimering (GDPR art. 5) kräver att insamlingen stoppas när arbetspasset stoppar.',
      },
      {
        q: 'Kan GeoTapp spåra en anställd kontinuerligt om jag ber om det?',
        a: 'Nej. Appen begär aldrig behörighet för position i bakgrunden och har ingen tjänst som följer en enhet medan appen är stängd: det är inte en avstängd inställning, det är en behörighet som koden aldrig begär. Går att kontrollera genom att läsa appens manifest eller integritetsmärkningen i butiken.',
      },
      {
        q: 'Sparas insamlade positioner för alltid?',
        a: 'Nej. I stämplingsloggen raderas de efter tolv månader, och ett företag kan förkorta perioden till trettio dagar. De kvarstår dock i rapporter som redan levererats till en kund, eftersom det är förseglade dokument som fungerar som bevis för utfört arbete.',
      },
    ],
  },
  relatedTitle: 'Relaterade resurser',
};

export default sv;
