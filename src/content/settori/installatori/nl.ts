import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App voor installateurs en cv-installateurs | GeoTapp',
    description: 'De app voor installateurs en cv-installateurs: werkbonnen met locatie en foto\'s en rapporten waarin elke wijziging zichtbaar is. Probeer het gratis.',
  },
  hero: {
    badge: 'App voor installateurs, loodgieters en cv-installateurs',
    h1_line1: 'Betwist de klant de uren?',
    h1_line2: 'Toon hem de werkbon met gps.',
    subtitle: 'Uw monteurs registreren met één tik op hun smartphone. Het systeem maakt een werkbon met vastgelegde locatie en foto\'s: elke wijziging is zichtbaar. Wanneer de klant vraagt "hoe lang hebben jullie erover gedaan?", hebt u het antwoord klaar.',
    cta_primary: 'Probeer het 14 dagen gratis',
    cta_note: 'Geen creditcard. Vanaf de eerste dag operationeel.',
  },
  pain: {
    title: 'Het probleem dat u al kent',
    items: [
      {
        title: 'Betwistingen over uren en klussen',
        desc: 'De klant ontkent het tijdstip. De monteur heeft geen bewijs. Het geschil sleept zich weken voort en kost meer dan de klus zelf.',
      },
      {
        title: 'Een kantoor dat het veld achternaloopt',
        desc: 'De verantwoordelijke belt de monteurs om te weten waar ze zijn, wat ze hebben gedaan, wanneer ze klaar zijn. Elk telefoontje is een onderbreking voor beiden.',
      },
      {
        title: 'Onvolledige of verloren werkbonnen',
        desc: 'Briefjes, WhatsApp, e-mail: de gegevens komen onvolledig, te laat of helemaal niet. De eindafrekening reconstrueren is een apart karwei.',
      },
    ],
  },
  workflow: {
    title: 'Zo werkt het in drie stappen',
    subtitle: 'Van de bestelbus naar het kantoor zonder telefoontjes.',
    steps: [
      {
        title: 'De monteur registreert in het veld',
        desc: 'Met GeoTapp TimeTracker legt hij aankomst, pauzes, vertrek, foto\'s en notities rechtstreeks vanaf zijn smartphone vast. De locatie wordt alleen bepaald wanneer hij registreert, zoals de AVG vraagt.',
      },
      {
        title: 'Het kantoor ziet alles zodra het binnenkomt',
        desc: 'Flow ontvangt de gegevens direct. De verantwoordelijke ziet opdracht, voortgang, toegewezen monteur en fotobewijzen zonder te bellen.',
      },
      {
        title: 'Het rapport is uw bewijs, om aan de klant te tonen',
        desc: 'Aan het eind van de klus wordt het rapport gemaakt met echte gps-gegevens en fotobewijzen. Elke wijziging is zichtbaar. De klant kan de echtheid zelf controleren. Komt er twijfel, dan hoeft u niet uit te leggen. U hoeft alleen te tonen.',
      },
    ],
  },
  differenza: {
    title: 'App voor installateurs: registratie of controleerbaar bewijs?',
    subtitle: 'De meeste apps leggen de tijd vast. GeoTapp levert controleerbaar bewijs.',
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
        geotapp: 'Verzegeld rapport, elke wijziging is zichtbaar',
      },
      {
        label: 'Werkbon van de klus',
        competitor: 'Handmatig of afwezig',
        geotapp: 'Automatisch gemaakt met gps en foto\'s',
      },
      {
        label: 'Naleving van de AVG',
        competitor: 'Vaak nog te controleren',
        geotapp: 'Gebouwd om binnen de kaders van de AVG te blijven, inclusief formulieren',
      },
    ],
  },

  prima_dopo: {
    title: 'Wat er nu gebeurt. Wat er met GeoTapp gebeurt.',
    prima: [
      'De klant ontkent het tijdstip of de uitgevoerde klus.',
      'De monteur zegt "ik heb het gedaan". De klant zegt "dat staat nergens".',
      'U hebt niets in handen. De discussie duurt dagen.',
      'Soms verliest u de betaling. Altijd verliest u tijd.',
    ],
    dopo: [
      'De klant ontkent het tijdstip of de uitgevoerde klus.',
      'U opent het rapport: foto\'s, gps, tijd, verzegeling.',
      'U stuurt het door. De discussie is in een minuut voorbij.',
      'U hebt een bewijs om te tonen. Ook de monteur heeft iets in handen.',
    ],
  },

  scenario: {
    title: 'Een typisch geval',
    body: 'De klant betwist de eindtijd van het werk en vraagt korting op de factuur. Met GeoTapp opent u het rapport van de klus: foto\'s van de afgemaakte installatie, tijden en locaties van de registraties, automatisch berekende duur, alles gemaakt met de smartphone van de monteur op het moment van het werk.',
    resolution: 'In plaats van woord tegen woord is er een document dat de klant zelf controleert.',
  },

  features: {
    title: 'App voor installateurs en cv-installateurs: werkbonnen met gps en fotobewijzen.',
    items: [
      {
        title: 'Controleerbare gps-registratie',
        desc: 'Elke aankomst, pauze en elk vertrek is gekoppeld aan locatie, tijd en opdracht. Om aan de klant of de arbeidsinspectie te tonen wanneer het nodig is.',
      },
      {
        title: 'Verzegelde fotobewijzen',
        desc: 'De monteur maakt foto\'s met de app. Elk beeld is gekoppeld aan de klus met gps en tijdstempel, en daarna opgenomen in het rapport. Niemand kan ze wijzigen zonder dat het systeem het opmerkt.',
      },
      {
        title: 'Export voor het salaris',
        desc: 'Exporteer de aanwezigheid van de maand in Excel of CSV, klaar voor de salarisadministrateur.',
      },
      {
        title: 'Opdrachtenbeheer voor meerdere bouwplaatsen',
        desc: 'Wijs opdrachten toe, volg de voortgang van elke bouwplaats en ontvang een melding als een dienst open blijft staan.',
      },
      {
        title: 'Automatische digitale werkbonnen',
        desc: 'Aan het eind van de klus is de werkbon al klaar: uren, foto\'s en notities. Geen papier, geen telefoontjes. Het kantoor stuurt hem met één klik vanuit Flow naar de klant.',
      },
      {
        title: 'Ook uw monteurs hebben een bewijs',
        desc: 'Een controleerbaar rapport geeft de monteur iets in handen tegen ongegronde beschuldigingen. Wie goed werkt, toont het aan met gegevens. Geen grijs gebied tussen veld en kantoor.',
      },
    ],
  },

  cta_mid: {
    title: 'Wilt u zien hoe het werkt bij een echte klus?',
    body: 'We laten u de volledige keten zien: van het openen van de opdracht tot de werkbon die de klant ontvangt.',
    cta: 'Probeer het 14 dagen gratis',
  },

  trust: {
    title: 'Onze rapporten: elke wijziging is zichtbaar. Niet door u. Niet door ons.',
    body: 'GeoTapp-rapporten worden door het systeem gemaakt op het moment van de klus. Is het rapport eenmaal verzegeld, dan verbreekt het corrigeren van een tijd of het verplaatsen van een foto de verzegeling, en de controle meldt het. Wie het ontvangt, klant of adviseur, kan het zelf controleren.',
    badge: 'Te controleren door iedereen, zonder toegang tot uw account',
  },
  testimonial: {
    quote: 'Vroeger waren we uren bezig met het ophalen van de lijsten uit het veld. Nu is de werkbon al klaar wanneer de monteur terug bij de bestelbus is.',
    author: 'Mark R.',
    role: 'Operationeel verantwoordelijke, installaties voor woningbouw',
  },
  faq: {
    title: 'Veelgestelde vragen',
    subtitle: 'Wat ons het vaakst wordt gevraagd voordat u begint.',
    items: [
      {
        q: 'Is GeoTapp geschikt als software voor installateurs en onderhoudsmonteurs?',
        a: 'Ja. GeoTapp helpt installateurs, elektriciens, loodgieters en onderhoudsmonteurs om klussen, werkbonnen, uren, reizen en bewijs van het uitgevoerde werk te beheren tussen veld en kantoor.',
      },
      {
        q: 'Kan ik GeoTapp gebruiken voor werkbonnen en fotobewijzen?',
        a: 'Ja. TimeTracker verzamelt foto\'s, notities en controleerbare registraties in het veld, terwijl Flow alles koppelt aan de opdracht en aan de operationele historie.',
      },
      {
        q: 'Helpt GeoTapp om betwistingen over uren en uitgevoerd werk te verminderen?',
        a: 'Dat is een van de belangrijkste toepassingen: tijden, locatie, notities en fotobewijzen maken de reconstructie van de klus duidelijker en gemakkelijker te tonen.',
      },
    ],
  },
  cta: {
    title: 'Het werk is gedaan. Bewijs het nu.',
    subtitle: 'GeoTapp maakt controleerbaar bewijs van elke klus, verzegelde rapporten die de klant zelf kan controleren.',
    primary: 'Probeer het 14 dagen gratis',
    secondary: 'Bekijk de prijzen',
  },
  pricing_hint: {
    label: 'TimeTracker-plaatsen vanaf',
    per: 'per medewerker per maand, plus het Flow-plan vanaf € 39 per maand',
    note: 'Gratis proefperiode van 14 dagen',
  },

  schema_sector_name: 'Installateurs',
  schema_faq: [
    {
      question: 'Werkt GeoTapp voor loodgieters en cv-installateurs die onderweg zijn?',
      answer: 'Ja. GeoTapp is de app voor installateurs en cv-installateurs, gemaakt voor wie op bouwplaatsen en in particuliere woningen werkt. Met de geïntegreerde software voor het beheer van werkbonnen leggen de monteurs klussen, foto\'s en uren rechtstreeks vanaf hun smartphone vast, zonder terug naar kantoor te hoeven.',
    },
    {
      question: 'Hoe documenteer ik een onderhouds- of installatieklus?',
      answer: 'Na elke klus legt de monteur in GeoTapp vast: begin- en eindtijd met de locatie, foto\'s van het uitgevoerde werk en technische notities. Het systeem maakt een verzegeld rapport dat de klant zelfstandig kan controleren.',
    },
    {
      question: 'Kan ik GeoTapp gebruiken om meerdere ploegen installateurs op verschillende bouwplaatsen te beheren?',
      answer: 'Ja. Met GeoTapp Flow kan de eigenaar meerdere ploegen coördineren, opdrachten toewijzen, de status van de klussen volgen en fotobewijzen van alle actieve bouwplaatsen verzamelen, zodra ze binnenkomen.',
    },
    {
      question: 'Zijn de rapporten nuttig bij een betwisting met de klant?',
      answer: 'GeoTapp-rapporten zijn verzegeld met de locatie, tijdstempel en fotobewijzen. De klant controleert ze zelf. Ze helpen te laten zien dat het document niet is gewijzigd; op zichzelf zijn ze geen absoluut bewijs van het feit en geen juridisch advies.',
    },
    {
      question: 'Houdt GeoTapp zich aan de AVG voor de geolocatie van monteurs?',
      answer: 'Het is gebouwd om daarbinnen te blijven: de locatie wordt alleen vastgelegd wanneer de monteur registreert of een bewijsfoto maakt, nooit doorlopend, en de privacyverklaring voor de werknemers wordt in de app ondertekend vóór de eerste registratie. De rest (akkoord met de vakbond of vergunning, waar nodig) is aan de werkgever.',
    },
  ],
};

export default content;
