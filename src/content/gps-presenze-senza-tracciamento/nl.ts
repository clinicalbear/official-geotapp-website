import type { PresenzeCopy } from './types';

const nl: PresenzeCopy = {
  metaTitle: 'Kan GPS voor aanwezigheidsregistratie zonder medewerkers te volgen? - GeoTapp',
  metaDesc:
    'Ja, als de locatie alleen bij het in- en uitklokken wordt vastgelegd. Wat een Italiaanse rechter in 2026 besliste, wat toezichthouders echt beboeten, en wat een conform GPS-prikklok-systeem registreert.',
  h1: 'Kan GPS voor aanwezigheidsregistratie zonder medewerkers te volgen?',
  lede:
    'Ja. Een systeem dat de locatie alleen vastlegt op het exacte moment waarop een medewerker in- of uitklokt of een pauze begint, houdt de persoon niet continu in de gaten: het legt een feit vast. Precies dat onderscheid bevestigde een Italiaanse rechter in 2026, en het komt overeen met wat toezichthouders daadwerkelijk beboeten: continue tracking, niet het momentopname-registreren van locatie.',
  updatedLabel: 'Bijgewerkt op 25 september 2026',
  sections: [
    {
      heading: 'Wanneer mag GPS worden gebruikt voor aanwezigheidsregistratie?',
      paragraphs: [
        'In de meeste EU-landen geldt hetzelfde principe: hulpmiddelen die een continue controle van het gedrag van een werknemer mogelijk zouden kunnen maken, vereisen vooraf instemming van de ondernemingsraad of een vergunning van de bevoegde instantie voordat ze in gebruik worden genomen. In Italië staat die eis in artikel 4 van het Werknemersstatuut (wet nr. 300/1970) voor instrumenten van controle op afstand, met een uitdrukkelijke uitzondering voor instrumenten die alleen toegang en aanwezigheid registreren.',
        'Een Italiaanse rechterlijke uitspraak van 1 juli 2026 (rechtbank van Cosenza, uitspraak nr. 972) geeft aan waar de grens ligt voor GPS-prikklok-apps: als de locatie uitsluitend op het moment van in- of uitklokken wordt vastgelegd, zonder continue volging van verplaatsingen daartussen, geldt het systeem als een instrument voor aanwezigheidsregistratie en niet als controle op afstand. De rechtbank vernietigde daarom een boete van 50.000 euro die de Italiaanse privacytoezichthouder had opgelegd aan een overheidsinstantie, precies om die reden.',
        'De praktische regel: een GPS-punt aan het begin en einde van een dienst legt een moment vast. Een spoor van punten dat elke minuut wordt vastgelegd, volgt een persoon. Dezelfde satelliettechnologie, maar twee heel verschillende instrumenten voor de wet.',
      ],
    },
    {
      heading: 'Wat registreert GeoTapp, en wat niet',
      paragraphs: [
        'GeoTapp legt de locatie alleen vast wanneer een medewerker een specifieke handeling verricht: inklokken, een pauze beginnen of beëindigen, uitklokken, plus één punt per werkbewijs-foto. Tussen twee kloktijden wordt niets automatisch geregistreerd: geen spoor van verplaatsingen, geen tracking op de achtergrond, geen locatie die zonder medeweten van de medewerker wordt verzameld.',
      ],
    },
    {
      heading: 'Hoe een OR-lid, een arbeidsrechtadvocaat of een FG dit kan controleren zonder ons iets te vragen',
      paragraphs: [
        'U hoeft ons niet op ons woord te geloven: dit is onafhankelijk controleerbaar. In de Android-app declareert het manifest alleen de machtigingen ACCESS_FINE_LOCATION en ACCESS_COARSE_LOCATION. De machtiging ACCESS_BACKGROUND_LOCATION, nodig om een medewerker te volgen terwijl de app gesloten is, wordt niet aangevraagd, en er is geen voorgrondservice voor locatiegegevens: zonder die machtiging geeft het besturingssysteem simpelweg geen locatiegegevens door aan een app die niet actief geopend is. Op iOS vraagt de app alleen de machtiging "tijdens gebruik van de app" (requestWhenInUseAuthorization), nooit machtiging voor volgen op de achtergrond.',
        'Dit is een controle die een OR-lid, een arbeidsrechtadvocaat of een functionaris gegevensbescherming zelf in een paar minuten kan uitvoeren, door het app-manifest of het privacylabel van de app store te lezen, nog voordat hij de privacyverklaring van het bedrijf leest.',
      ],
    },
    {
      heading: 'Hoe lang blijven de verzamelde locatiegegevens bewaard?',
      paragraphs: [
        'In het prikklok-register worden de coördinaten na twaalf maanden verwijderd; een bedrijf kan die termijn verkorten tot dertig dagen. In rapporten die al aan een klant zijn geleverd, blijven de locatiegegevens echter bewaard: dat zijn verzegelde documenten die het uitgevoerde werk documenteren, en die volgen de bewaartermijn die voor dat type documentatie geldt, niet die van het register.',
        'Het zijn twee verschillende regels voor twee verschillende zaken. Het operationele register wordt lichter naarmate de tijd verstrijkt; een document dat al aan iemand anders is overhandigd, volgt zijn eigen regels, net als elk document zodra het onze systemen heeft verlaten.',
      ],
    },
    {
      heading: 'En buiten Italië?',
      paragraphs: [
        'De AVG (met name de artikelen 5, 6, 12-14 en 25 van EU-Verordening 2016/679) geldt in de hele Europese Unie en legt overal dezelfde beginselen op: gegevensminimalisatie, een vastgesteld doel, duidelijke informatie voor de werknemer. Wat van land tot land verschilt, is de procedure rond controle op afstand: het lokale equivalent van het Italiaanse artikel 4, de rol van de ondernemingsraad of vakbond, de bevoegde toezichthouder. Voor de situatie in een specifiek land verzamelt de kaart GPS en werknemers in de EU per land geverifieerde profielen.',
      ],
    },
  ],
  table: {
    title: 'Wat wordt geregistreerd en wat niet',
    colLeft: 'Registreert',
    colRight: 'Registreert niet',
    left: [
      'Locatie bij in- en uitklokken',
      'Locatie bij begin en einde van elke pauze',
      'Eén GPS-punt per werkbewijs-foto',
      'Het tijdstip van de verzegeling van het rapport, overgenomen van de serverklok',
    ],
    right: [
      'Geen verplaatsing tijdens de dienst, tussen twee kloktijden',
      'Geen locatie buiten de dienst of wanneer de app gesloten is',
      'Geen scores of profilering van gedrag',
    ],
  },
  sourcesTitle: 'Bronnen en referenties',
  sources: [
    'Rechtbank van Cosenza (Italië), uitspraak nr. 972 van 1 juli 2026',
    'Italiaanse privacytoezichthouder (Garante), besluit nr. 382 van 28 mei 2026 (doc-web 10259916)',
    'Italiaanse privacytoezichthouder (Garante), besluit nr. 135 van 13 maart 2025 (doc-web 10128005), vernietigd door bovenstaande uitspraak',
    'Italiaanse wet nr. 300 van 20 mei 1970 (Werknemersstatuut), art. 4',
    'Verordening (EU) 2016/679 (AVG), art. 5, 6, 12-14, 25',
  ],
  disclaimer:
    'Deze pagina beschrijft algemene, bij de bron controleerbare beginselen en vormt geen juridisch advies: raadpleeg voor uw specifieke situatie een arbeidsrechtadvocaat of een functionaris gegevensbescherming.',
  faq: {
    title: 'Veelgestelde vragen',
    items: [
      {
        q: 'Is GPS-volgen van medewerkers verboden onder de AVG?',
        a: 'Nee. Toezichthouders verbieden GPS bij werknemers niet als zodanig. Wat zij beboeten is continue tracking, ontbrekende informatie, en het verzamelen van gegevens die niets met het werk te maken hebben: niet het momentopname-registreren van locatie bij het klokken.',
      },
      {
        q: 'Is instemming van de ondernemingsraad altijd nodig voor GPS bij aanwezigheidsregistratie?',
        a: 'Die is nodig wanneer het systeem een continue controle van de activiteit van de werknemer mogelijk kan maken. De rechtbank van Cosenza erkende echter dat een systeem dat de locatie alleen bij het klokken vastlegt, zonder continue volging, valt onder aanwezigheidsregistratie-instrumenten waarvoor die procedure niet nodig is.',
      },
      {
        q: 'Wat gebeurt er als het systeem ook tijdens pauzes volgt?',
        a: 'Dat is een van de fouten die tot echte boetes heeft geleid: een transportbedrijf kreeg een boete van 50.000 euro, mede omdat het volgen tijdens pauzes doorging. Het beginsel van gegevensminimalisatie (art. 5 AVG) vereist dat de verzameling stopt wanneer de dienst stopt.',
      },
      {
        q: 'Kan GeoTapp een medewerker continu volgen als ik daarom vraag?',
        a: 'Nee. De app vraagt nooit machtiging voor locatie op de achtergrond en heeft geen service die een apparaat volgt terwijl de app gesloten is: het is geen uitgeschakelde optie, het is een machtiging die de code nooit aanvraagt. Te controleren door het app-manifest of het privacylabel van de store te lezen.',
      },
      {
        q: 'Blijven verzamelde locatiegegevens voor altijd bewaard?',
        a: 'Nee. In het prikklok-register worden ze na twaalf maanden verwijderd, en een bedrijf kan die termijn verkorten tot dertig dagen. Ze blijven echter bewaard in rapporten die al aan een klant zijn geleverd, omdat dat verzegelde documenten zijn die het uitgevoerde werk documenteren.',
      },
    ],
  },
  relatedTitle: 'Gerelateerde bronnen',
};

export default nl;
