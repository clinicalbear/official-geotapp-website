import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App voor Installateurs & Monteurs: GPS-opdrachttracking | GeoTapp',
    description: 'Volg opdrachten, uren en materialen voor HVAC-, elektro- en loodgietersinstallateurs met GPS. Automatische servicebewijzen, geen klantgeschillen. Probeer GeoTapp gratis.',
  },
  hero: {
    badge: 'App voor installateurs, monteurs en serviceteams',
    h1_line1: 'Elke opdracht gedocumenteerd,',
    h1_line2: 'elk uur bijgehouden.',
    subtitle: 'Voor elektro-, loodgieters-, HVAC- en mechanische installateurs. GeoTapp verbindt Flow + TimeTracker om GPS, uren en foto\'s per opdracht bij te houden — van de bus naar kantoor zonder telefoontjes.',
    cta_primary: 'Probeer GeoTapp 14 dagen gratis',
    cta_note: 'Geen verplichtingen. Geen creditcard vereist.',
  },
  pain: {
    title: 'Problemen die we dagelijks oplossen',
    items: [
      {
        title: 'Klanten betwisten de gewerkte uren',
        desc: 'GPS-klokregistraties met tijdstempel als onweerlegbaar bewijs. De gegevens worden gecertificeerd op het moment van de opdracht — niet achteraf te wijzigen.',
      },
      {
        title: 'Monteurs achternazitten voor updates',
        desc: 'Realtime kaart met de status van elke opdracht. U weet waar al uw monteurs zijn zonder een enkel telefoontje te plegen.',
      },
      {
        title: 'Onvolledige of ontbrekende werkbonnen',
        desc: 'Gegevens komen te laat, onvolledig of helemaal niet. Uren en opdrachten reconstrueren aan het einde van de maand is een extra klus die tijd en geld kost.',
      },
    ],
  },
  workflow: {
    title: 'Hoe het werkt',
    subtitle: 'Drie eenvoudige stappen. Geen papier. Geen telefoontjes.',
    steps: [
      {
        title: 'De monteur klokt in via GPS bij aanvang',
        desc: 'Opent de opdracht vanaf de smartphone. GeoTapp registreert echte GPS-coördinaten, tijdstempel en foto\'s — volledig automatisch, manipulatiebestendig.',
      },
      {
        title: 'Uren worden automatisch per opdracht geregistreerd',
        desc: 'Elke gewerkte minuut wordt gekoppeld aan de juiste opdracht. De manager ziet in realtime wie waar werkt.',
      },
      {
        title: 'Het klantrapport wordt gegenereerd zonder iets te typen',
        desc: 'Aan het einde van de opdracht genereert het systeem een rapport met GPS, uren en digitale handtekening. De klant ontvangt het en verifieert het zelfstandig.',
      },
    ],
  },
  differenza: {
    title: 'Installateurs-app: tijdregistratie of certificering?',
    subtitle: 'De meeste apps registreren alleen het inklokken. GeoTapp levert verifieerbaar bewijs.',
    rows: [
      {
        label: 'Wat wordt geregistreerd',
        competitor: 'In- en uitkloktijd',
        geotapp: 'Tijd + geverifieerd GPS + foto\'s + uitgevoerd werk',
      },
      {
        label: 'Wie kan verifiëren',
        competitor: 'Alleen uw kantoor',
        geotapp: 'U, de klant, een derde partij — onafhankelijk',
      },
      {
        label: 'Bij geschillen',
        competitor: 'Gegevens niet verdedigbaar',
        geotapp: 'Verzegeld rapport, manipulatiebestendig',
      },
      {
        label: 'Werkbon',
        competitor: 'Handmatig of afwezig',
        geotapp: 'Automatisch gegenereerd met GPS en foto\'s',
      },
      {
        label: 'AVG-conformiteit',
        competitor: 'Vaak twijfelachtig',
        geotapp: 'Conform by design, formulieren inbegrepen',
      },
    ],
  },
  prima_dopo: {
    title: 'Wat er nu gebeurt. Wat er met GeoTapp gebeurt.',
    prima: [
      'De klant betwist de eindtijd en vraagt korting.',
      'De monteur zegt "ik heb 4 uur gewerkt". De klant zegt "er staan maar 2".',
      'U heeft geen bewijs. De discussie duurt dagen en de betaling is in gevaar.',
      'Aan het einde van de maand reconstrueert u uren en opdrachten uit WhatsApp-berichten.',
    ],
    dopo: [
      'De klant betwist? Open het rapport: foto\'s, GPS, tijdstempel, digitale handtekening.',
      'U stuurt het. Het geschil is in een minuut opgelost.',
      'De betaling is veilig. De monteur is beschermd.',
      'Aan het einde van de maand is de export al klaar — uren en opdrachten automatisch samengevoegd.',
    ],
  },
  features: {
    title: 'Functies gebouwd voor installateurs en serviceteams',
    items: [
      {
        title: 'Verifieerbare GPS-klokregistratie',
        desc: 'Elke in- en uitgang is gekoppeld aan locatie, tijdstempel en opdracht. Verdedigbaar voor klanten en inspecteurs.',
      },
      {
        title: 'Verzegeld fotobewijs',
        desc: 'De monteur maakt foto\'s vanuit de app. Elk beeld is gekoppeld aan de opdracht met GPS en tijdstempel — manipulatiebestendig na generatie.',
      },
      {
        title: 'Multi-locatie opdrachtbeheer',
        desc: 'Wijs opdrachten toe, volg de voortgang op alle locaties en ontvang automatische waarschuwingen als een opdracht niet op tijd wordt geopend of gesloten.',
      },
      {
        title: 'Automatische digitale werkbonnen',
        desc: 'Aan het einde van de opdracht is het rapport klaar: uren, foto\'s, notities en handtekening. Geen papier, geen telefoontjes. De monteur stuurt het direct vanuit de app naar de klant.',
      },
      {
        title: 'Export voor salarisadministratie en facturatie',
        desc: 'Exporteer maandelijkse aanwezigheden en uren per opdracht. Salarisadministratie en facturatie worden een kwestie van minuten.',
      },
      {
        title: 'Ingebouwde AVG-conformiteit',
        desc: 'Geolocatie conform by design met AVG-regelgeving. Sjablonen voor privacyverklaringen aan medewerkers inbegrepen.',
      },
    ],
  },
  testimonial: {
    quote: 'Klanten betwisten de uren niet meer. We openen het rapport met GPS en foto\'s en de discussie stopt daar.',
    author: 'Robert F.',
    role: 'Eigenaar, installatiebedrijf — 20 monteurs',
  },
  faq: {
    title: 'Veelgestelde vragen',
    subtitle: 'Wat ons het meest gevraagd wordt voordat men begint.',
    items: [
      {
        q: 'Betwisten klanten de gewerkte uren op een opdracht?',
        a: 'Met GeoTapp worden GPS-klokregistraties op het moment van de opdracht vastgelegd en zijn niet te wijzigen. Ze vormen onweerlegbaar bewijs van gewerkte uren en elimineren elk geschil.',
      },
      {
        q: 'Hoe monitor ik meerdere teams op verschillende opdrachten?',
        a: 'GeoTapp biedt een realtime kaart met de status van elke opdracht. U weet precies waar uw monteurs zijn en aan welke opdracht ze werken, zonder te bellen.',
      },
      {
        q: 'Hoe versnel ik de facturatie van afgeronde opdrachten?',
        a: 'GeoTapp genereert automatisch de export van uren en opdrachten, klaar voor uw boekhoudsoftware. Geen handmatige invoer, geen foutrisico — facturatie wordt één klik.',
      },
    ],
  },
  cta: {
    title: 'Probeer GeoTapp 14 dagen gratis',
    subtitle: 'Geen verplichtingen. Geen creditcard vereist. Reactie binnen 12 werkuren.',
    primary: 'Nu gratis beginnen',
    secondary: 'Prijzen bekijken',
  },
  pricing_hint: {
    label: 'Vanaf',
    per: 'monteur/maand',
    note: '14 dagen gratis proberen',
  },
  schema_sector_name: 'Installatietechniek',
  schema_faq: [
    {
      question: 'Betwisten klanten de gewerkte uren op een opdracht?',
      answer: 'Met GeoTapp worden GPS-klokregistraties op het moment van de opdracht vastgelegd en zijn niet te wijzigen. Ze vormen onweerlegbaar bewijs van gewerkte uren en elimineren elk geschil.',
    },
    {
      question: 'Hoe monitor ik meerdere teams op verschillende opdrachten?',
      answer: 'GeoTapp biedt een realtime kaart met de status van elke opdracht. U weet precies waar uw monteurs zijn en aan welke opdracht ze werken, zonder te bellen.',
    },
    {
      question: 'Hoe versnel ik de facturatie van afgeronde opdrachten?',
      answer: 'GeoTapp genereert automatisch de export van uren en opdrachten, klaar voor uw boekhoudsoftware. Geen handmatige invoer, geen foutrisico — facturatie wordt één klik.',
    },
  ],
};

export default content;
