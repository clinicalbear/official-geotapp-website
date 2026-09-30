import type { PresenzeCopy } from './types';

const nl: PresenzeCopy = {
  metaTitle: 'Kan gps voor aanwezigheid worden gebruikt zonder werknemers te volgen? - GeoTapp',
  metaDesc:
    'Ja, als de locatie alleen bij het registreren wordt vastgelegd. Wat de rechtbank van Cosenza zegt, wat de Italiaanse toezichthouder (Garante Privacy) bestraft en wat een gps-systeem voor aanwezigheid dat aan de regels voldoet echt vastlegt.',
  h1: 'Kan gps voor aanwezigheid worden gebruikt zonder werknemers te volgen?',
  lede:
    'Ja. Een systeem dat de locatie alleen vastlegt op het moment dat de medewerker zijn aankomst, pauze of vertrek registreert, bewaakt de persoon niet: het documenteert een feit. De rechtbank van Cosenza heeft dat in 2026 erkend, en de besluiten van de Garante Privacy, die juist doorlopende tracking bestraffen, bevestigen het.',
  updatedLabel: 'Bijgewerkt op 25 september 2026',
  sections: [
    {
      heading: 'Wanneer is gps toegestaan voor aanwezigheid?',
      paragraphs: [
        'Artikel 4 van het Italiaanse arbeidsstatuut (Statuto dei Lavoratori, wet van 20 mei 1970, nr. 300) maakt onderscheid tussen twee categorieën instrumenten. Lid 1 betreft de systemen waaruit controle op afstand van de activiteit kan voortvloeien: daarvoor is voordat ze worden ingeschakeld een akkoord met de vakbond (RSA of RSU) of een vergunning van de arbeidsinspectie nodig. Lid 2 betreft de instrumenten voor de registratie van toegang en aanwezigheid, waarvoor die procedure niet nodig is.',
        'De rechtbank van Cosenza heeft met vonnis nr. 972 van 1 juli 2026 aangegeven waar de grens tussen de twee categorieën ligt wanneer het instrument een registratie-app met gps is. Ze vernietigde een boete van 50.000 euro die de Garante had opgelegd aan een overheidsinstelling, omdat het systeem de locatie uitsluitend op het moment van de registratie vastlegde, zonder doorlopende monitoring van de verplaatsingen mogelijk te maken: volgens de rechter maakt dat het een instrument voor de registratie van toegang en aanwezigheid in de zin van lid 2, en geen instrument voor controle op afstand.',
        'Het praktische principe: een gps-punt aan het begin en aan het einde van de dienst legt een moment vast. Een reeks punten die elke minuut wordt genomen, volgt een persoon. Het is dezelfde satelliettechnologie, maar voor de wet zijn het twee verschillende instrumenten.',
      ],
    },
    {
      heading: 'Wat GeoTapp wel en niet vastlegt',
      paragraphs: [
        'GeoTapp legt de locatie alleen vast wanneer de medewerker een precies gebaar maakt: aankomst, begin en einde van elke pauze, vertrek, plus een punt voor elke bewijsfoto van het werk. Tussen twee registraties in wordt er niets automatisch vastgelegd: geen spoor van verplaatsingen, geen tracking op de achtergrond, geen locatie die buiten medeweten van de medewerker wordt verzameld.',
      ],
    },
    {
      heading: 'Hoe een arbeidsadviseur of een vakbondsvertegenwoordiger het kan controleren zonder ons iets te vragen',
      paragraphs: [
        'Het is niet nodig ons op ons woord te geloven: u kunt het zelf controleren. In de Android-app verklaart het manifest alleen de rechten ACCESS_FINE_LOCATION en ACCESS_COARSE_LOCATION. ACCESS_BACKGROUND_LOCATION ontbreekt, het recht dat nodig zou zijn om een werknemer te volgen terwijl de app gesloten is, en er is geen service op de voorgrond die aan de locatie is gewijd: zonder dat recht levert het besturingssysteem de locatie niet aan een app die niet open op het scherm staat. In de iOS-app wordt alleen de toestemming "tijdens gebruik" gevraagd (requestWhenInUseAuthorization), nooit die voor tracking op de achtergrond.',
        'Het is een controle die een vertegenwoordiger van de werknemers voor veiligheid, een arbeidsadviseur of een functionaris voor gegevensbescherming in een paar minuten zelf kan uitvoeren, door het manifest van de app of het privacylabel van de store te lezen, nog voordat hij de privacyverklaring leest die het bedrijf hem voorlegt.',
      ],
    },
    {
      heading: 'Hoe lang blijven de verzamelde locaties bewaard?',
      paragraphs: [
        'In het register van de registraties worden de coördinaten na twaalf maanden gewist; het bedrijf kan de termijn verkorten tot dertig dagen. In de werkbonnen die al aan de klant zijn afgeleverd blijven de locaties daarentegen staan: het zijn verzegelde documenten die het uitgevoerde werk documenteren, en ze volgen de bewaartermijn die voor dat soort documentatie geldt, niet die van het register.',
        'Het zijn twee verschillende regels voor twee verschillende objecten. Het operationele register wordt na verloop van tijd lichter; het document dat al aan iemand anders is afgeleverd, volgt zijn eigen regels, zoals elk document nadat het onze systemen heeft verlaten.',
      ],
    },
    {
      heading: 'En buiten Italië?',
      paragraphs: [
        'De AVG (in het bijzonder art. 5, 6, 12-14 en 25 van Verordening (EU) 2016/679) geldt in de hele Europese Unie en legt overal hetzelfde beginsel op: minimale gegevensverwerking, een vooraf benoemd doel, een heldere privacyverklaring voor de werknemer. Wat van land tot land verschilt, is de procedure rond controle op afstand: het lokale equivalent van het Italiaanse artikel 4, de rol van de ondernemingsraad of de vakbond, de bevoegde toezichthouder. Voor de situatie van een afzonderlijk land bevat de kaart over gps bij werknemers in de EU de landpagina\'s, stuk voor stuk gecontroleerd.',
      ],
    },
  ],
  table: {
    title: 'Wat wordt vastgelegd en wat niet',
    colLeft: 'Legt vast',
    colRight: 'Legt niet vast',
    left: [
      'Locatie bij aankomst en vertrek van de dienst',
      'Locatie bij het begin en het einde van elke pauze',
      'Een gps-punt bij elke bewijsfoto van het werk',
      'Tijdstip van de verzegeling van de werkbon, afkomstig van de klok van de server',
    ],
    right: [
      'Geen verplaatsing tijdens de dienst, tussen twee registraties in',
      'Geen locatie wanneer de medewerker buiten werktijd is of de app gesloten is',
      'Geen score of profilering van gedrag',
    ],
  },
  sourcesTitle: 'Bronnen en verwijzingen',
  sources: [
    'Rechtbank van Cosenza, vonnis nr. 972 van 1 juli 2026',
    'Garante per la protezione dei dati personali (Italiaanse toezichthouder voor gegevensbescherming), besluit nr. 382 van 28 mei 2026 (doc-web 10259916)',
    'Garante per la protezione dei dati personali, besluit nr. 135 van 13 maart 2025 (doc-web 10128005), vernietigd door het bovenstaande vonnis',
    'Wet van 20 mei 1970, nr. 300 (Statuto dei Lavoratori, Italiaans arbeidsstatuut), art. 4',
    'Verordening (EU) 2016/679 (AVG), art. 5, 6, 12-14, 25',
  ],
  disclaimer:
    'Deze pagina beschrijft algemene beginselen, bij de bron te controleren, en vormt geen juridisch advies: controleer uw specifieke situatie met een arbeidsadviseur of een functionaris voor gegevensbescherming.',
  faq: {
    title: 'Veelgestelde vragen',
    items: [
      {
        q: 'Is gps bij werknemers verboden door de AVG?',
        a: 'Nee. De Garante Privacy verbiedt gps bij werknemers niet als zodanig. Ze bestraft doorlopende tracking, het ontbreken van een privacyverklaring en het verzamelen van gegevens die niet relevant zijn voor het werk: niet het op één moment vastleggen van de locatie bij de registratie.',
      },
      {
        q: 'Is altijd een akkoord met de vakbond nodig om gps voor aanwezigheid te gebruiken?',
        a: 'Het is nodig waar het systeem controle op afstand van de werkzaamheden kan inhouden. De rechtbank van Cosenza heeft echter erkend dat een systeem dat de locatie alleen bij de registratie vastlegt, zonder doorlopende monitoring, valt onder de instrumenten voor de registratie van aanwezigheid van lid 2 van art. 4, waarvoor die procedure niet nodig is.',
      },
      {
        q: 'Wat gebeurt er als het systeem ook tijdens de pauzes volgt?',
        a: 'Het is een van de fouten die tot echte boetes hebben geleid: de Garante beboette een transportbedrijf voor 50.000 euro, mede omdat de tracking tijdens de pauzes doorliep. Het beginsel van minimale gegevensverwerking (art. 5 AVG) vraagt om te stoppen wanneer de dienst stopt.',
      },
      {
        q: 'Kan GeoTapp een medewerker doorlopend volgen, als ik dat vraag?',
        a: 'Nee. De app vraagt geen locatierecht op de achtergrond en heeft geen service die haar volgt terwijl de app gesloten is: het is geen uitgeschakelde optie, het is een recht dat de code niet vraagt. Het is te controleren door het manifest van de app of het privacylabel van de store te lezen.',
      },
      {
        q: 'Blijven de verzamelde locaties voor altijd bewaard?',
        a: 'Nee. In het register van de registraties worden ze na twaalf maanden gewist, en het bedrijf kan de termijn verkorten tot dertig dagen. Ze blijven wel staan in de werkbonnen die al aan de klant zijn afgeleverd, omdat het verzegelde documenten zijn die het uitgevoerde werk documenteren.',
      },
    ],
  },
  relatedTitle: 'Gerelateerde bronnen',
};

export default nl;
