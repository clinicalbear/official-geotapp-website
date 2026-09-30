import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App voor schoonmaakbedrijven: gps-aanwezigheid en foto\'s',
    description: 'Registraties met gps alleen aan het begin en aan het einde en foto\'s van elke klus: het bewijs om aan de klant te tonen wanneer hij een dienst betwist. 14 dagen gratis.',
  },

  hero: {
    badge: 'App voor schoonmaakbedrijven, facility management en multiservice',
    h1_line1: 'De app voor schoonmaakbedrijven',
    h1_line2: 'die elke klus verzegelt.',
    subtitle:
      'GeoTapp is de app voor schoonmaakbedrijven die van elke klus een bewijs maakt om te tonen. Klanten betwisten iets, en een opgeschreven tijd is niet genoeg. GeoTapp legt de locatie bij elke registratie vast, verzamelt de bewijsfoto\'s en sluit alles af in een verzegeld rapport, waarin elke wijziging zichtbaar is, dat de opdrachtgever zelf kan controleren.',
    cta_primary: 'Probeer het op een echte opdracht',
    cta_note: '14 dagen, tot 50 medewerkers in het veld, geen creditcard.',
  },

  pain: {
    title: 'Als u het niet kunt bewijzen, is het voor de klant nooit gebeurd.',
    items: [
      {
        title: 'De klant ontkent de klus',
        desc: 'Hij zegt dat de ruimte niet is schoongemaakt of dat de medewerker er niet was. U hebt een opgeschreven tijd, hij heeft zijn versie. Zonder controleerbaar bewijs riskeert u het contract.',
      },
      {
        title: 'Medewerkers in het veld die u niet kunt controleren',
        desc: 'U kunt niet op alle locaties zijn. U weet niet of het werk is gedaan totdat de klant klaagt, en dan is het al te laat om nog iets te reconstrueren.',
      },
      {
        title: 'De arbeidsinspectie vraagt echte documentatie',
        desc: 'Tijden, aanwezigheid, overuren, pauzes: de presentielijst is niet genoeg. Wie controleert wil vastgelegde tijden, niet uit het hoofd gereconstrueerde.',
      },
    ],
  },

  prima_dopo: {
    title: 'Wat er nu gebeurt. Wat er met GeoTapp gebeurt.',
    prima: [
      'De klant belt en zegt dat het toilet niet is schoongemaakt.',
      'De medewerker zegt "ik heb het gedaan". De klant zegt "hij heeft het niet gedaan".',
      'U hebt niets in handen om iets aan te tonen.',
      'De discussie duurt dagen. Soms verliest u het contract.',
    ],
    dopo: [
      'De klant belt en zegt dat het toilet niet is schoongemaakt.',
      'U opent het rapport van de klus: foto van het schone toilet, tijd, locatie.',
      'U stuurt het door. U hebt met gegevens geantwoord, en hij controleert ze zelf.',
      'U hebt een bewijs om te tonen. Ook de medewerker heeft iets in handen.',
    ],
  },

  scenario: {
    title: 'Een typisch geval',
    body: 'De klant zegt dat het toilet niet is schoongemaakt. Met GeoTapp opent u het rapport en toont u de foto van de ruimte, het tijdstip van de opname en de locatie, alles automatisch gemaakt door de app van de medewerker op het moment van de klus.',
    resolution: 'U hebt met gegevens geantwoord, niet met uw woord tegen het zijne.',
  },

  differenza: {
    title: 'Registratie vs controleerbaar bewijs van het werk.',
    subtitle: 'De meeste apps leggen gegevens vast. GeoTapp levert bewijs.',
    rows: [
      {
        label: 'Wat het vastlegt',
        competitor: 'Tijd van aankomst/vertrek',
        geotapp: 'Tijd + locatie bij de registratie + foto + uitgevoerde activiteit',
      },
      {
        label: 'Wie kan controleren',
        competitor: 'Alleen uw kantoor',
        geotapp: 'U, de opdrachtgever, een derde partij, zelfstandig',
      },
      {
        label: 'Bij een betwisting',
        competitor: 'Alleen uw woord',
        geotapp: 'Verzegeld rapport, elke wijziging zichtbaar',
      },
      {
        label: 'Fotobewijs',
        competitor: 'Afwezig of losgekoppeld',
        geotapp: 'Bij het rapport gevoegd met tijd en locatie',
      },
      {
        label: 'Naleving van de AVG',
        competitor: 'Vaak nog te controleren',
        geotapp: 'Gebouwd om binnen de kaders van de AVG te blijven, inclusief formulieren',
      },
      {
        label: 'Overzicht bijgewerkt bij elke registratie',
        competitor: 'Nee',
        geotapp: 'Ja, alle locaties, alle medewerkers',
      },
    ],
  },

  non_gestionale: {
    title: 'Het is niet alleen een beheersysteem.',
    subtitle: 'Beheersystemen organiseren het werk. GeoTapp organiseert het en verzegelt het bovendien.',
    items: [
      {
        label: 'Hoofddoel',
        gestionale: 'Plannen en organiseren',
        geotapp: 'Controleerbaar bewijs maken',
      },
      {
        label: 'Wat het oplevert',
        gestionale: 'Gegevens binnen uw eigen systeem',
        geotapp: 'Verzegelde rapporten die derden kunnen controleren',
      },
      {
        label: 'Bij een betwisting',
        gestionale: 'U toont gegevens die alleen u kunt lezen',
        geotapp: 'U stuurt een rapport dat de klant zelf controleert',
      },
      {
        label: 'Waarde voor de klant',
        gestionale: 'Geen, het is een intern hulpmiddel',
        geotapp: 'Hoog: de klant controleert het zelf',
      },
      {
        label: 'Fotobewijs',
        gestionale: 'Niet voorzien of los',
        geotapp: 'Geïntegreerd in het rapport met gps en tijdstempel',
      },
    ],
  },

  workflow: {
    title: 'Van de werkplek naar het kantoor, elke klus wordt een bewijs.',
    subtitle: 'Drie stappen. Geen papier. Geen telefoontjes.',
    steps: [
      {
        title: 'De medewerker verzegelt het bewijs ter plaatse',
        desc: 'Met GeoTapp TimeTracker legt hij aankomst, pauzes, vertrek, foto\'s van de ruimtes en notities vast vanaf zijn smartphone. De locatie wordt op dat moment door de telefoon bepaald, niet met de hand ingevoerd, en elke latere wijziging is zichtbaar.',
      },
      {
        title: 'Het kantoor is bijgewerkt bij elke registratie',
        desc: 'Flow toont op één scherm wie heeft geregistreerd, waar en hoe laat. U ziet de stand van elk gebouw, ontvangt een melding als een dienst open blijft staan en wijst opdrachten toe, zonder iemand achterna te zitten.',
      },
      {
        title: 'Het rapport is al klaar. Verzegeld: elke wijziging is zichtbaar.',
        desc: 'Aan het eind van de dienst maakt het systeem automatisch een verzegeld rapport met locaties, foto\'s en verzegeling. De opdrachtgever ontvangt het en controleert het zelf, zonder toegang tot uw systeem, zonder op uw woord te hoeven vertrouwen.',
      },
    ],
  },

  features: {
    title: 'App voor schoonmaakbedrijven: minder discussie, meer bewijs.',
    items: [
      {
        title: 'Antwoord op elke betwisting met gegevens',
        desc: 'Wanneer elke klus een controleerbaar rapport heeft, hebt u de documentatie om meteen te antwoorden. Minder mondelinge onderhandelingen die weken duren.',
      },
      {
        title: 'Echt overzicht over alle locaties',
        desc: 'U weet waar en hoe laat elke medewerker heeft geregistreerd, zodra de registratie binnenkomt, in alle gebouwen en vanaf elk apparaat. Tussen twee registraties in wordt niets automatisch vastgelegd.',
      },
      {
        title: 'Rapporten die overal te verdedigen zijn',
        desc: 'Elk rapport is verzegeld: elke wijziging is zichtbaar. Wie het ontvangt, klant, inspecteur of adviseur, kan het zelf controleren.',
      },
      {
        title: 'Klaar voor de arbeidsinspectie',
        desc: 'Tijden, pauzes, overuren en toeslagen worden dienst voor dienst vastgelegd en komen in het overzicht voor de salarisadministrateur. Bij een controle is de documentatie al op orde.',
      },
      {
        title: 'Beheer van meerdere locaties zonder telefoontjes',
        desc: 'Tientallen locaties, één scherm. U wijst opdrachten toe, ziet wie waar heeft geregistreerd en ontvangt een melding als een dienst open blijft staan.',
      },
      {
        title: 'Uw personeel is beschermd',
        desc: 'Een controleerbaar rapport geeft ook de medewerker iets in handen tegen ongegronde beschuldigingen. Wie goed werkt, toont het aan.',
      },
    ],
  },

  cosa_cambia: {
    title: 'Wat er echt verandert.',
    items: [
      {
        title: 'U hoeft de medewerkers niet meer te vertrouwen.',
        desc: 'Niet omdat ze onbetrouwbaar zijn, maar omdat u dat niet hoeft te doen. Het systeem maakt het bewijs op het moment van de klus, onafhankelijk van wat ze u vertellen. Het gegeven blijft zoals het is vastgelegd.',
      },
      {
        title: 'U hoeft u niet meer mondeling te verdedigen.',
        desc: 'U hoeft niet meer uit te leggen, te rechtvaardigen, te herinneren. Wanneer een klant iets betwist, opent u het rapport en stuurt u het door. Het is niet uw woord tegen het zijne. Het is een controleerbaar document.',
      },
      {
        title: 'U hebt controleerbaar bewijs. Altijd.',
        desc: 'Elke afgesloten klus wordt automatisch een rapport: locaties, foto\'s, tijden en verzegeling. U hoeft niets extra te doen. Het systeem doet het terwijl uw medewerkers werken.',
      },
    ],
  },

  prova_visiva: {
    title: 'Wat u ziet, wat de klant ziet.',
    subtitle: 'De app voor wie in het veld werkt. Het rapport voor wie moet antwoorden.',
  },

  cta_mid: {
    title: 'Wilt u zien hoe het werkt in een echt geval?',
    body: 'Probeer het op een echte opdracht, van de medewerker die de klus opent tot het rapport dat de klant ontvangt: 14 dagen gratis, zonder creditcard.',
    cta: 'Probeer het 14 dagen gratis',
  },

  testimonial: {
    quote:
      'Vroeger hadden we altijd wel een klant die iets betwistte. Sinds we GeoTapp gebruiken, sturen we het rapport en verandert het gesprek meteen: het gaat over gegevens, niet over woorden. De discussies worden een stuk korter.',
    author: 'Roberta M.',
    role: 'Operationeel verantwoordelijke, industrieel schoonmaakbedrijf - Noord-Italië',
  },

  trust: {
    title: 'Als een rapport van ons wordt gewijzigd, is dat zichtbaar. Ook als wij het doen.',
    body:
      'GeoTapp-rapporten worden door het systeem gemaakt op het moment van de klus. Is het rapport eenmaal verzegeld, dan verbreekt het corrigeren van een tijd of het verplaatsen van een foto de verzegeling, en de controle meldt het. Wie het ontvangt, klant, inspecteur of adviseur, kan het zelf controleren.',
    badge: 'Te controleren door iedereen, zonder toegang tot uw account',
  },

  faq: {
    title: 'Veelgestelde vragen',
    subtitle: 'Wat ons het vaakst wordt gevraagd voordat u begint.',
    items: [
      {
        q: 'Is GeoTapp alleen een registratie-app voor schoonmaakbedrijven?',
        a: 'Nee. GeoTapp is een systeem voor controleerbaar bewijs van het werk, niet alleen een registratie-app. Registratie-apps leggen een tijd vast. GeoTapp maakt een verzegeld rapport met de locatie, fotobewijzen en tijdstempel, dat de opdrachtgever zelfstandig kan controleren. Het verschil tussen "het staat er" en "het is aan te tonen".',
      },
      {
        q: 'Is het compatibel met de cao voor multiservice (CCNL Multiservizi)?',
        a: 'GeoTapp legt tijden, pauzes, overuren en toeslagen vast, nachtelijke en feestdagen inbegrepen, en exporteert ze in Excel of CSV voor de salarisadministrateur, die ze toepast volgens de Italiaanse cao voor multiservice (CCNL Multiservizi). Bij een inspectie hebt u alle documentatie klaar.',
      },
      {
        q: 'Hoe beheer ik ploegen die over meerdere locaties tegelijk verdeeld zijn?',
        a: 'Met GeoTapp Flow hebt u één scherm voor alle locaties. U ziet wie waar heeft geregistreerd zodra de registratie binnenkomt, wijst opdrachten toe en ontvangt een melding als een dienst open blijft staan. Geen telefoontjes, geen e-mails.',
      },
      {
        q: 'Hoe controleer ik of de medewerkers het werk hebben uitgevoerd?',
        a: 'Elke klus wordt geopend en afgesloten met een locatie die door de smartphone van de medewerker is vastgelegd. De medewerker stuurt de bewijsfoto\'s die aan de opdracht zijn gekoppeld, met tijd en locatie. Het rapport wordt automatisch gemaakt en is bij het afsluiten verzegeld: elke wijziging is zichtbaar.',
      },
      {
        q: 'Is GeoTapp conform de AVG voor de geolocatie van werknemers?',
        a: 'GeoTapp is gebouwd om binnen de kaders van de AVG en van de aanwijzingen van de Italiaanse toezichthouder (Garante Privacy) te blijven: het legt de locatie alleen vast wanneer de medewerker registreert (aankomst, pauzes, vertrek) of een bewijsfoto maakt, laat de privacyverklaring in de app ondertekenen voordat hij registreert en verzamelt geen onnodige gegevens.',
      },
      {
        q: 'Werkt het ook voor facility management en multiservice?',
        a: 'Ja. GeoTapp wordt gebruikt door schoonmaakbedrijven, multiservicebedrijven, facility management en elk bedrijf met medewerkers verdeeld over meerdere locaties. Het past van de ploeg van een paar mensen tot het bedrijf met honderden medewerkers, zonder ingewikkelde instellingen.',
      },
      {
        q: 'Wat kost GeoTapp voor een schoonmaakbedrijf?',
        a: 'GeoTapp Flow begint bij € 39 per maand; de TimeTracker-plaatsen voor de medewerkers kosten € 3 per maand per plaats tot 25, € 2,50 vanaf de zesentwintigste. Minimaal abonnement van 12 maanden. Eerst kunt u het 14 dagen gratis uitproberen, zonder creditcard.',
      },
    ],
  },

  cta: {
    title: 'Uw medewerkers werken goed. Zorg dat het te zien is.',
    subtitle:
      'Elke dag wordt het werk gedaan. Het probleem is dat zonder controleerbaar bewijs, wanneer iemand iets betwist, uw woord tegen het zijne staat. GeoTapp maakt van elke klus documentatie om te tonen.',
    primary: 'Probeer het 14 dagen gratis',
    secondary: 'Bekijk de prijzen',
  },

  pricing_hint: {
    label: 'TimeTracker-plaatsen vanaf',
    per: 'per medewerker per maand, plus het Flow-plan vanaf € 39 per maand',
    note: 'Gratis proefperiode van 14 dagen',
  },

  schema_sector_name: 'Schoonmaakbedrijven',

  schema_faq: [
    {
      question: 'Is GeoTapp alleen een registratie-app voor schoonmaakbedrijven?',
      answer: 'Nee. GeoTapp is de app en software voor schoonmaak- en multiservicebedrijven die verder gaat dan registreren: het maakt verzegelde rapporten met locaties, foto\'s en tijden, die de opdrachtgever zelf controleert: geen simpel urenregister.',
    },
    {
      question: 'Is het compatibel met de cao voor multiservice (CCNL Multiservizi)?',
      answer: 'GeoTapp legt tijden, pauzes, overuren en toeslagen vast en exporteert ze in Excel of CSV voor de salarisadministrateur, die ze toepast volgens de Italiaanse cao voor multiservice (CCNL Multiservizi).',
    },
    {
      question: 'Hoe beheer ik meerdere locaties tegelijk?',
      answer: 'Eén scherm voor alle locaties. U ziet wie waar heeft geregistreerd zodra de registratie binnenkomt, wijst opdrachten toe en ontvangt een melding als een dienst open blijft staan, zonder telefoontjes.',
    },
    {
      question: 'Hoe documenteer ik dat het werk is uitgevoerd?',
      answer: 'Elke klus wordt geopend en afgesloten met een vastgelegde locatie. De medewerker stuurt de bewijsfoto\'s die aan de opdracht zijn gekoppeld. Het rapport wordt automatisch gemaakt en is bij het afsluiten verzegeld: elke wijziging is zichtbaar.',
    },
    {
      question: 'Is GeoTapp conform de AVG voor de geolocatie van werknemers?',
      answer: 'Gebouwd om binnen de kaders van de AVG te blijven: het legt de locatie alleen vast wanneer de medewerker registreert of een bewijsfoto maakt, nooit doorlopend, en laat de privacyverklaring in de app ondertekenen voordat hij registreert.',
    },
    {
      question: 'Werkt het ook voor facility management en multiservice?',
      answer: 'Ja. GeoTapp past bij schoonmaakbedrijven, multiservice en facility management, van de ploeg van een paar mensen tot het bedrijf met honderden medewerkers.',
    },
    {
      question: 'Wat kost het?',
      answer: 'GeoTapp Flow vanaf € 39 per maand, plus de TimeTracker-plaatsen vanaf € 3 per medewerker per maand. Minimaal abonnement van 12 maanden. Eerst kunt u het 14 dagen gratis uitproberen, zonder creditcard.',
    },
  ],
};

export default content;
