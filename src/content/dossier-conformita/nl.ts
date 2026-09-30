import type { DossierCopy } from './types';

const nl: DossierCopy = {
  metaTitle: 'GeoTapp conformiteitsdossier: bewijs van werk, geen toezicht',
  metaDesc:
    'Wat GeoTapp wel en niet doet, met de wettelijke bronnen openlijk benoemd en de grenzen zonder omhaal gesteld. AVG, artikel 4 van het Italiaanse arbeidsstatuut, integriteit van het bewijs.',
  badge: 'Conformiteitsdossier',
  h1: 'Bewijs van werk, geen toezicht',
  subtitle:
    'Wat GeoTapp doet en vooral wat het niet doet. Met de wettelijke bronnen openlijk benoemd en de grenzen zonder omhaal gesteld. Een document om te lezen, te controleren en te citeren.',
  sections: [
    {
      heading: 'Waarom dit document bestaat',
      paragraphs: [
        'In Brussel worden nu de regels geschreven over hoe werknemers gemonitord mogen worden, met de richtlijn over platformwerk, algoritmisch beheer en de AI-verordening toegepast op werk. Intussen moet wie teams het veld in stuurt al de uren registreren, die kunnen aantonen wanneer iemand ze betwist, en dat doen zonder de privacy van mensen met voeten te treden. Het is een lastig evenwicht, en op dat evenwicht rust een groot deel van het vertrouwen tussen wie het werk organiseert en wie het uitvoert.',
        'GeoTapp is binnen dit probleem ontstaan, niet ernaast. Daarom belooft het niets, maar zet het op papier wat het wel en niet doet, met de wettelijke bronnen openlijk benoemd en de grenzen zonder omhaal gesteld. Wat volgt, kunt u lezen, controleren en citeren. Wie een zwak punt vindt, wordt uitgenodigd dat te melden: een conformiteitsdossier telt om wat het overeind houdt, niet om hoe het klinkt.',
      ],
    },
    {
      heading: 'Wat het doet, en vooral wat het niet doet',
      paragraphs: [
        'Het uitgangspunt is er maar één: het feit vastleggen, niet de persoon volgen.',
        'GeoTapp legt de locatie alleen vast wanneer de medewerker registreert (aankomst, begin en einde van de pauze, vertrek) of een bewijsfoto maakt, en niet tijdens de dag. Tussen twee registraties in wordt er niets automatisch vastgelegd: geen spoor van verplaatsingen, geen locatie die buiten medeweten wordt verzameld, geen digitale achtervolging. De app vraagt zelfs geen toestemming om de locatie op de achtergrond te lezen, dus ze zou het ook niet kunnen, al wilde ze dat. In de huidige versie van de app wordt de bewijsfoto alleen met de live camera gemaakt: er kan geen afbeelding uit de galerij worden geüpload. De verzamelde gegevens zijn uit ontwerpkeuze beperkt tot het strikt noodzakelijke, niet als latere bedenking.',
        'Wat GeoTapp niet doet, is even belangrijk. Het volgt de medewerker niet buiten werktijd, het profileert geen gedrag, het meet geen vakbondsactiviteit, het leest geen gemoedstoestanden af en het bouwt geen scores over mensen op. Dat is het terrein dat de Europese voorstellen over platformwerk en algoritmisch beheer als te verbieden aanwijzen, en GeoTapp is ontworpen om daarbuiten te blijven.',
      ],
    },
    {
      heading: 'De beginselen van de AVG, toegepast en niet opgedreund',
      paragraphs: [
        'Minimale gegevensverwerking (art. 5, lid 1, onder c, AVG): de locatie wordt alleen bij de registratie verzameld, niet doorlopend.',
        'Doelbinding (art. 5, lid 1, onder b): het doel is het bewijs van het uitgevoerde werk, niet het controleren van de persoon op afstand.',
        'Rechtsgrond (art. 6): uitvoering van de arbeidsrelatie en gedocumenteerd gerechtvaardigd belang, vergezeld van de privacyverklaring.',
        'Transparantie (art. 12-14): de werknemer ontvangt een heldere privacyverklaring. GeoTapp stelt een voorbeeld van een GPS-privacyverklaring beschikbaar, gratis en te downloaden.',
        'Gegevensbescherming door ontwerp (art. 25): minimale verzameling is het standaardgedrag van het hulpmiddel, geen optie die moet worden ingeschakeld.',
      ],
    },
    {
      heading: 'De afstemming op artikel 4 van het Italiaanse arbeidsstatuut',
      paragraphs: [
        'In Italië wordt controle op afstand geregeld door artikel 4 van wet 300/1970 (Statuto dei Lavoratori): instrumenten waaruit ook controle op de activiteit kan voortvloeien, zijn toegestaan om organisatorische, productie- of veiligheidsredenen of ter bescherming van het vermogen, na een akkoord met de vakbond of een vergunning van de arbeidsinspectie, en altijd met passende informatie aan de werknemer. De norm stelt bovendien de instrumenten voor de registratie van toegang en aanwezigheid vrij.',
        'GeoTapp plaatst zich binnen dit kader als een hulpmiddel dat naleving vergemakkelijkt, niet als een sluiproute eromheen. De verwerkingsverantwoordelijke blijft het bedrijf, met zijn verplichtingen: GeoTapp levert een hulpmiddel dat is ontworpen om binnen de regels te blijven, en de bronnen om ze toe te passen. Voor de andere Europese landen bevat de kaart over gps bij werknemers in de EU negenendertig met de hand gecontroleerde landpagina\'s, met de verplichtingen, de bevoegde autoriteit en de sancties van elk land.',
      ],
    },
    {
      heading: 'De integriteit van het bewijs',
      paragraphs: [
        'Wanneer GeoTapp "bewijs van werk" zegt, bedoelt het iets om te tonen wanneer iemand het betwist, en om dat te kunnen moet het moeilijk te vervalsen zijn, en elke latere aanpassing moet zichtbaar zijn. De verdediging is gelaagd.',
        'Het maken van de foto is vergrendeld op de live camera: de waarde die deze modus aanduidt staat vast in de clients en wordt vooral gecontroleerd door de regels van de database op het moment van schrijven, die een registratie met een andere modus weigeren. Bij elke foto berekent de client een cryptografische SHA-256-vingerafdruk, een noodzakelijke voorwaarde om verder te gaan.',
        'Eenmaal aangemaakt zijn de werksessies beschermd: de begintijd, de locatie die bij de registratie is vastgelegd en de identiteit van de gebruiker kunnen door de werknemer niet worden gewijzigd, en verwijderen is voorbehouden aan de beheerders. Sessies met locatie ontstaan alleen via een functie aan de serverkant met beheerdersrechten, niet via rechtstreeks schrijven vanuit de app, zodat de medewerker een registratie niet kan terugdateren, de locatie ervan kan verschuiven of haar kan laten verdwijnen.',
        'De detectie van valse gps werkt al voordat de registratie vertrekt. Op Android-apparaten is de controle gelaagd, met een lijst van bekende spoofing-apps en de controle van de rechten voor nep-locaties: slaat ze aan, dan wordt de registratie geweigerd, niet alleen gemeld. Tekenen van root worden herkend en het bedrijf kan ervoor kiezen de registratie op die telefoons te blokkeren. Ook te onnauwkeurige locaties worden geweigerd. Op iOS wordt het eigen signaal van het besturingssysteem gebruikt dat een via software gesimuleerde locatie aangeeft. Daarnaast wordt de "teleportatie" onderschept, dat wil zeggen een verplaatsing met een fysiek onmogelijke snelheid tussen twee registraties.',
        'Elke registratie laat ten slotte een spoor achter in een controleregister aan de serverkant, met de tijd die door de server is gegenereerd en niet door het apparaat, en geen enkele app, ook niet die van een beheerder, kan in dat register schrijven.',
      ],
    },
    {
      heading: 'De grenzen, helder benoemd',
      paragraphs: [
        'Dit is het gedeelte dat velen zouden weglaten, en juist dat maakt al het andere geloofwaardig. GeoTapp maakt spoofing moeilijk en bevestigt de context van de registratie, maar belooft niet het onmogelijke, en dat te zeggen is een vorm van respect voor wie leest.',
        'De server controleert de coördinaten niet opnieuw cryptografisch: hij controleert of ze aannemelijk zijn en binnen de eventuele geofence vallen, maar vertrouwt op de locatie die het apparaat doorgeeft. De attestatie van het apparaat bevestigt dat de app uit de officiële kanalen komt, en beschermt niet tegen een aangepaste client die wordt geanalyseerd door iemand met de nodige vaardigheden. De modus "alleen live camera" is een eerlijke verklaring van het apparaat, geen cryptografisch bewijs dat de server op het beeld kan herhalen. De controles zijn completer op de smartphone dan op het horloge. En vooral: het hulpmiddel ontslaat het bedrijf niet van zijn rol als verwerkingsverantwoordelijke: de plicht tot informatie, tot een akkoord waar dat nodig is en tot evenredigheid blijft de zijne.',
        'Anders gezegd: GeoTapp legt de lat hoger en documenteert het feit, maar verkoopt geen onkwetsbaarheid. Wie onkwetsbaarheid belooft, heeft die meestal nooit voor de rechter hoeven aantonen.',
      ],
    },
    {
      heading: 'De openbare bronnen als ondersteuning',
      paragraphs: [
        'Alles wat nodig is om deze beginselen toe te passen, is openbaar en gratis: de kaart over gps bij werknemers in de EU met de pagina\'s van de negenendertig landen, het voorbeeld van een GPS-privacyverklaring, de boetecalculator, de index van het toezicht. Bij de bron gecontroleerd, vrij te gebruiken en te citeren met vermelding van de herkomst. Ze staan er omdat het in orde brengen van het werk geen voorrecht zou moeten zijn van wie zich een juridische afdeling kan veroorloven.',
      ],
    },
    {
      heading: 'Verklaring',
      paragraphs: [
        'De technische beweringen in dit document worden gedaan en ondertekend door Michele Angelo Petraroli, oprichter van GeoTapp, die er de verantwoordelijkheid voor neemt en beschikbaar is voor controle en tegenspraak.',
      ],
    },
  ],
  sourcesTitle: 'Bronnen en verwijzingen',
  sources: [
    'Verordening (EU) 2016/679 (AVG), in het bijzonder art. 5, 6, 12-14, 25.',
    'Italiaanse wet van 20 mei 1970, nr. 300 (Statuto dei Lavoratori, arbeidsstatuut), art. 4.',
    'Besluiten van de Italiaanse toezichthouder voor gegevensbescherming (Garante) over controle op afstand.',
    'Teksten van de EU in bespreking: richtlijn over platformwerk; bepalingen over algoritmisch beheer; de verordening over kunstmatige intelligentie toegepast op werk.',
  ],
  lastUpdated: 'Versie 1.1 · bijgewerkt op 30 september 2026',
  faq: {
    title: 'Veelgestelde vragen',
    items: [
      { q: 'Wat is het conformiteitsdossier?', a: 'Het is het document dat, bronnen in de hand, uitlegt waarom GeoTapp een hulpmiddel voor bewijs van werk is en geen toezichtsysteem, en hoe dat steunt op de AVG en op de arbeidsregels. Het is voor wie echt wil begrijpen hoe het met gegevens omgaat, niet voor wie tevreden is met een slogan.' },
      { q: 'Is GeoTapp een toezichtsysteem?', a: 'Nee, het is niet bedoeld om te bewaken. Het legt de locatie alleen vast wanneer de medewerker registreert (aankomst, pauzes, vertrek) of een bewijsfoto maakt, nooit doorlopend, en bereidt de privacyverklaring voor die de werknemer in de app ondertekent voordat hij registreert. Het toont wat er is gedaan en waar, het kijkt niet naar mensen.' },
      { q: 'Waar heb ik dit dossier voor nodig?', a: 'Om te antwoorden wanneer een werknemer, een klant of een adviseur u vraagt of wat u gebruikt in orde is. In plaats van te improviseren hebt u een tekst die de redenering en de bronnen op een rij zet, en die u ongewijzigd kunt doorsturen.' },
      { q: 'Zijn de bronnen gecontroleerd?', a: 'Ja, het dossier verwijst naar echte regels en besluiten, onderaan vermeld met de datum van bijwerking. Het blijft echter een informatieve bron en geen juridisch advies: laat voor uw specifieke situatie alles door een professional beoordelen.' },
      { q: 'Kan ik het aan een klant laten zien of in een rechtszaak gebruiken?', a: 'U kunt het gebruiken om de opzet van GeoTapp uit te leggen en te laten zien dat naleving geen los geroepen bewering is. In een geschil telt echter wat uw echte gegevens en uw privacyverklaring zeggen: het dossier is de context, het bewijs is de vastgelegde werksessie.' },
      { q: 'Geldt het alleen voor Italië?', a: 'De onderliggende redenering houdt in de hele Unie stand, omdat ze uitgaat van de AVG, maar de details over controle op werknemers verschillen van land tot land. Begin voor de situatie van een afzonderlijk land bij de pagina van dat land, hier bij de bronnen.' },
    ],
  },
};

export default nl;
