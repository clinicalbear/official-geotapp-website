import type { DossierCopy } from './types';

const nl: DossierCopy = {
  metaTitle: 'GeoTapp conformiteitsdossier: bewijs van werk, geen toezicht',
  metaDesc:
    'Wat GeoTapp wel en niet doet, met de juridische bronnen open op tafel en de grenzen eerlijk benoemd. AVG, ondernemingsraad, integriteit van het bewijs.',
  badge: 'Conformiteitsdossier',
  h1: 'Bewijs van werk, geen toezicht',
  subtitle:
    'Wat GeoTapp doet en vooral wat het niet doet. Met de juridische bronnen open op tafel en de grenzen zonder omhaal benoemd. Een document om te lezen, te toetsen en te citeren.',
  sections: [
    {
      heading: 'Waarom dit document bestaat',
      paragraphs: [
        'In Brussel worden nu de regels geschreven over hoe werknemers gevolgd mogen worden: de richtlijn over platformwerk, het algoritmisch management en de AI-verordening toegepast op arbeid. Ondertussen moet wie ploegen het veld in stuurt de uren al registreren, ze kunnen aantonen wanneer iemand ze betwist, en dat doen zonder de privacy van mensen te vertrappen. Het is een lastig evenwicht, en op dat evenwicht rust een groot deel van het vertrouwen tussen wie het werk organiseert en wie het uitvoert.',
        'GeoTapp is binnen dit probleem ontstaan, niet ernaast. Daarom belooft het niets, maar zet het op papier wat het wel en niet doet, met de juridische bronnen open op tafel en de grenzen zonder omhaal benoemd. Wat volgt kun je lezen, toetsen en citeren. Wie een zwakke plek vindt wordt uitgenodigd die te melden: een conformiteitsdossier telt om wat het draagt, niet om hoe het klinkt.',
      ],
    },
    {
      heading: 'Wat het doet, en vooral wat het niet doet',
      paragraphs: [
        'Het uitgangspunt is er maar een: het feit vastleggen, niet de persoon volgen.',
        'GeoTapp registreert de locatie alleen op het moment van het in- en uitklokken, en niet gedurende de dag. Tussen twee klokmomenten in is er geen enkele tracking: geen spoor van verplaatsingen, geen locatie die buiten medeweten wordt verzameld, geen digitale achtervolging. De foto bij het klokmoment kan alleen met de live camera worden gemaakt, je kunt geen afbeelding uit de galerij uploaden. De verzamelde gegevens zijn tot het strikt noodzakelijke beperkt, als ontwerpkeuze en niet als latere bedenking.',
        'Wat GeoTapp niet doet is even belangrijk. Het volgt de werknemer niet buiten werktijd, het profileert geen gedrag, het meet geen vakbondsactiviteit, het leest geen emoties af en het bouwt geen scores over mensen op. Dat is precies het terrein dat het Europees Parlement als te verbieden heeft aangewezen, en GeoTapp blijft er al buiten.',
      ],
    },
    {
      heading: 'De AVG-beginselen, toegepast en niet opgedreund',
      paragraphs: [
        'Dataminimalisatie (art. 5.1.c AVG): de locatie wordt alleen bij het klokmoment verzameld, niet doorlopend.',
        'Doelbinding (art. 5.1.b): het doel is het bewijs van het verrichte werk, niet het op afstand controleren van de persoon.',
        'Rechtsgrond (art. 6): uitvoering van de arbeidsovereenkomst en een gedocumenteerd gerechtvaardigd belang, samen met de verplichte informatie aan de werknemer.',
        'Transparantie (art. 12-14): de werknemer ontvangt heldere informatie. GeoTapp stelt een gratis te downloaden voorbeeld van een GPS-privacyverklaring beschikbaar.',
        'Gegevensbescherming door ontwerp (art. 25): de minimale verzameling is het standaardgedrag van het instrument, niet een optie die je moet aanzetten.',
      ],
    },
    {
      heading: 'De aansluiting bij het Nederlandse kader',
      paragraphs: [
        'In Nederland wordt toezicht op werknemers begrensd door de AVG, onder toezicht van de Autoriteit Persoonsgegevens, en raakt het aan de Arbeidstijdenwet voor de registratie van arbeids- en rusttijden. Een regeling die de monitoring van personeel raakt, valt onder het instemmingsrecht van de ondernemingsraad: een voorgenomen voorziening om aanwezigheid of gedrag van werknemers te volgen vraagt om voorafgaande instemming. Daarbovenop gelden proportionaliteit, het beperken van de verwerking tot wat nodig is, en de plicht de werknemer vooraf te informeren.',
        'GeoTapp plaatst zich binnen dit kader als instrument dat de naleving vergemakkelijkt, niet als sluiproute eromheen. De verwerkingsverantwoordelijke blijft de werkgever, met de eigen verplichtingen: GeoTapp levert een instrument dat is ontworpen om binnen de regels te blijven, plus de middelen om ze toe te passen. Voor de overige Europese landen verzamelt de EU-kaart over GPS bij werknemers negenendertig met de hand geverifieerde landenfiches, met per land de verplichtingen, de bevoegde autoriteit en de sancties.',
      ],
    },
    {
      heading: 'De integriteit van het bewijs',
      paragraphs: [
        'Wanneer GeoTapp spreekt van "bewijs van werk", bedoelt het iets dat een betwisting doorstaat, en om dat te doen moet het moeilijk te vervalsen en onmogelijk achteraf bij te werken zijn. De verdediging zit in lagen.',
        'Het maken van de foto is vastgezet op de live camera: de waarde die deze modus aanduidt ligt vast in de clients en wordt vooral door de databaseregels gecontroleerd op het moment van schrijven, die een klokmoment met een andere modus weigeren. Bij elke foto berekent de client een cryptografische SHA-256-vingerafdruk aan de clientzijde, een noodzakelijke voorwaarde om door te gaan.',
        'De werksessies zijn onveranderlijk zodra ze zijn aangemaakt: het begintijdstip, de bij het klokmoment vastgelegde locatie en de identiteit van de gebruiker kunnen niet door de werknemer worden gewijzigd, en verwijderen is voorbehouden aan beheerders. Sessies met locatie ontstaan alleen via een functie aan de serverzijde met beheerdersrechten, niet door rechtstreeks schrijven vanuit de app, zodat de gebruiker een klokmoment niet kan terugdateren, de locatie niet kan verschuiven en het niet kan laten verdwijnen.',
        'De detectie van valse GPS grijpt in nog voordat het klokmoment vertrekt. Op Android-toestellen is de controle meerlaags, met een lijst van bekende spoofing-apps, het nagaan van toestemmingen voor neplocaties en van tekenen van root: als die aanslaat, wordt het klokmoment geblokkeerd en niet alleen gemeld. Op iOS wordt het ingebouwde signaal van het besturingssysteem gebruikt dat wijst op een via software gesimuleerde locatie. Daarnaast wordt teleportatie onderschept, dat wil zeggen een verplaatsing tegen een fysiek onmogelijke snelheid tussen twee klokmomenten.',
        'Elk klokmoment laat ten slotte een spoor na in een audit-log aan de serverzijde, met het tijdstip dat door de server en niet door het toestel wordt gegenereerd, en geen enkele client kan in dat log schrijven, zelfs een beheerder niet.',
      ],
    },
    {
      heading: 'De grenzen, helder benoemd',
      paragraphs: [
        'Dit is de sectie die velen zouden weglaten, en juist die maakt al het andere geloofwaardig. GeoTapp maakt spoofing moeilijk en bevestigt de context van het klokmoment, maar belooft niet het onmogelijke, en dat zeggen is een vorm van respect voor wie meeleest.',
        'De server controleert de coordinaten niet opnieuw cryptografisch: hij gaat na of ze plausibel zijn en binnen een eventuele geofence vallen, maar vertrouwt op de locatie die het toestel doorgeeft. De toestelattestatie bevestigt dat de app uit de officiele kanalen komt, maar beschermt niet tegen een client die is aangepast en geanalyseerd door wie daar de kennis voor heeft. De modus "alleen live camera" is een eerlijke verklaring van het toestel, geen cryptografisch bewijs dat de server op de afbeelding kan overdoen. De controles zijn vollediger op de smartphone dan op het horloge. En vooral: het instrument ontslaat de werkgever niet van zijn rol als verwerkingsverantwoordelijke: de plicht tot informeren, tot instemming waar nodig en tot proportionaliteit blijft de zijne.',
        'Anders gezegd: GeoTapp legt de lat hoger en documenteert het feit, het verkoopt geen onkwetsbaarheid. Wie onkwetsbaarheid belooft, heeft die meestal nooit voor de rechter hoeven aantonen.',
      ],
    },
    {
      heading: 'De openbare middelen ter ondersteuning',
      paragraphs: [
        'Alles wat nodig is om deze beginselen toe te passen is openbaar en gratis: de EU-kaart over GPS bij werknemers met de fiches van de negenendertig landen, het voorbeeld van een GPS-privacyverklaring, de boetecalculator, de toezichtindex. Bij de bron geverifieerd, vrij te gebruiken en te citeren met bronvermelding. Ze staan er omdat het naleven van de regels rond werk geen voorrecht zou moeten zijn van wie zich een juridische afdeling kan veroorloven.',
      ],
    },
    {
      heading: 'Attestatie',
      paragraphs: [
        'De technische beweringen in dit document zijn opgesteld en ondertekend door Michele Angelo Petraroli, oprichter van GeoTapp, die er de verantwoordelijkheid voor draagt en zich beschikbaar stelt voor toetsing en weerwoord. De goedkeuring van een arbeidsrechtadvocaat en een functionaris voor gegevensbescherming wordt toegevoegd in de volgende versie van het document.',
      ],
    },
  ],
  sourcesTitle: 'Bronnen en verwijzingen',
  sources: [
    'Verordening (EU) 2016/679 (AVG), in het bijzonder art. 5, 6, 12-14, 25.',
    'Nederlandse Uitvoeringswet AVG en het toezicht door de Autoriteit Persoonsgegevens op werknemersmonitoring.',
    'Wet op de ondernemingsraden (instemmingsrecht bij personeelsvolgsystemen) en de Arbeidstijdenwet.',
    'EU-teksten in behandeling: richtlijn over platformwerk; bepalingen over algoritmisch management; AI-verordening toegepast op arbeid.',
  ],
  lastUpdated: 'Versie 1.0',
  faq: {"title": "Veelgestelde vragen", "items": [{"q": "Wat is het conformiteitsdossier?", "a": "Het is het document dat met bronnen in de hand uitlegt waarom GeoTapp een werkbewijstool is en geen bewakingstool, en hoe dat standhoudt onder de AVG en de arbeidsregels. Het is voor iedereen die echt wil begrijpen hoe de gegevens worden behandeld, niet voor wie tevreden is met een slogan."}, {"q": "Is GeoTapp een bewakingssysteem?", "a": "Nee, en het is bewust zo gebouwd dat het dat niet is. De tool legt de locatie alleen vast bij het inklokken, wanneer iemand een klus opent of afsluit, nooit continu, en hij maakt de privacyverklaring aan om te laten ondertekenen. Hij bewijst wat er gedaan is en waar, hij bekijkt geen mensen."}, {"q": "Waarvoor heb ik dit dossier nodig?", "a": "Om te antwoorden wanneer een werknemer, een klant of een adviseur vraagt of wat je gebruikt wel conform is. In plaats van te improviseren heb je een tekst die de redenering en de bronnen uiteenzet, en die je zo kunt doorsturen."}, {"q": "Zijn de bronnen geverifieerd?", "a": "Ja, het dossier verwijst naar echte wetgeving en beslissingen, achteraan opgesomd met de datum van bijwerking. Toch blijft het een informatieve bron en geen juridisch advies: laat voor jouw specifieke situatie alles door een professional nakijken."}, {"q": "Kan ik het tonen aan een klant of in een geschil?", "a": "Je kunt het gebruiken om uit te leggen hoe GeoTapp is opgezet en om aan te tonen dat conformiteit geen lichtzinnig geuite bewering is. In een rechtszaak telt echter je echte data en je privacyverklaring: het dossier is de context, het bewijs is de geregistreerde werksessie."}, {"q": "Geldt het alleen voor Italië?", "a": "De onderliggende redenering houdt stand in heel de Unie, omdat ze vertrekt vanuit de AVG, maar de details over het volgen van werknemers verschillen van land tot land. Voor de situatie van één land begin je bij de bijbehorende fiche hier bij de bronnen."}]},
};

export default nl;
