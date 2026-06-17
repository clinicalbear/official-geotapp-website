import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Bouwplaats-app: GPS-aanwezigheid & Ploegbeheer | GeoTapp',
    description: 'Beheer aanwezigheid, diensten en veiligheid op de bouwplaats met realtime GPS. Gecertificeerde klokregistraties, automatische rapporten. AVG-conforme app voor bouwbedrijven.',
  },
  hero: {
    badge: 'App voor bouwbedrijven en bouwplaatsen',
    h1_line1: 'Uw bouwplaats onder controle,',
    h1_line2: 'in realtime.',
    subtitle: 'GPS-gecertificeerde klokregistraties, ploegbeheer en automatische rapporten. Geen papierwerk, geen geschillen. GeoTapp verbindt Flow + TimeTracker voor bouwplaatsmanagers, onderaannemers en projectleiding.',
    cta_primary: 'Probeer GeoTapp 14 dagen gratis',
    cta_note: 'Geen verplichtingen. Geen creditcard vereist.',
  },
  pain: {
    title: 'Problemen die we dagelijks oplossen',
    items: [
      {
        title: 'Wie was er op de bouwplaats en wanneer?',
        desc: 'Elke GPS-klokregistratie heeft een tijdstempel en is gecertificeerd. GeoTapp registreert echte coördinaten op het moment van inklokken, niet handmatig ingevoerd. De gegevens zijn altijd verifieerbaar door de projectleiding.',
      },
      {
        title: 'Hoe beheert u onderaannemers?',
        desc: 'Volg toegang en aanwezigheid van alle ploegen, inclusief onderaannemers, vanuit één realtime dashboard.',
      },
      {
        title: 'Kosten bouwplaatsrapporten uren werk?',
        desc: 'Automatisch gegenereerd met GPS, uren en aanwezigheden. Klaar voor de projectleiding en termijnstaten zonder handmatige invoer.',
      },
    ],
  },
  workflow: {
    title: 'Hoe het werkt',
    subtitle: 'Drie eenvoudige stappen. Geen papier. Geen telefoontjes.',
    steps: [
      {
        title: 'De medewerker klokt in bij de bouwplaats',
        desc: 'Start de dienst vanaf de smartphone. GeoTapp registreert echte GPS-coördinaten, tijdstempel en, indien nodig, foto\'s. Volledig automatisch, manipulatiebestendig.',
      },
      {
        title: 'De uitvoerder ziet alles in realtime',
        desc: 'Eén dashboard voor alle ploegen en alle bouwplaatsen. Wie aanwezig is, waar en sinds wanneer, zonder iemand na te bellen.',
      },
      {
        title: 'Het rapport is klaar voor termijnstaten',
        desc: 'Aan het einde van de dag of het project genereert het systeem een verzegeld rapport met aanwezigheden, GPS en uren. Klaar voor de projectleiding zonder een minuut handwerk.',
      },
    ],
  },
  differenza: {
    title: 'Bouwplaats-app: tijdregistratie of certificering?',
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
        geotapp: 'U, de projectleiding, een derde partij, onafhankelijk',
      },
      {
        label: 'Bij geschillen',
        competitor: 'Gegevens niet verdedigbaar',
        geotapp: 'Verzegeld rapport, manipulatiebestendig',
      },
      {
        label: 'Bouwplaatsrapport',
        competitor: 'Handmatig of afwezig',
        geotapp: 'Automatisch gegenereerd met GPS en aanwezigheden',
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
      'De projectleiding vraagt wie er dinsdag op de bouwplaats was. Niemand weet het zeker.',
      'Aanwezigheidslijsten komen onvolledig, te laat of onleesbaar aan.',
      'De onderaannemer betwist de uren. U heeft geen bewijs.',
      'U stelt de termijnstaat handmatig op, gegevens samenvoegend uit WhatsApp-berichten.',
    ],
    dopo: [
      'De projectleiding vraagt wie er dinsdag was. Open het dashboard: het staat er allemaal.',
      'Aanwezigheid wordt automatisch geregistreerd, met GPS en tijdstempel.',
      'De onderaannemer betwist? Toon het verzegelde rapport.',
      'De termijnstaat is al klaar: uren, aanwezigheden en GPS automatisch samengevoegd.',
    ],
  },
  features: {
    title: 'Functies gebouwd voor de bouwplaats',
    items: [
      {
        title: 'GPS-gecertificeerde aanwezigheid',
        desc: 'Elke in- en uitgang wordt geregistreerd met echte GPS-positie en tijdstempel. Verdedigbaar voor projectleiding, opdrachtgevers en inspecteurs.',
      },
      {
        title: 'Multi-bouwplaats dashboard',
        desc: 'Monitor meerdere bouwplaatsen vanaf één scherm. Zie in realtime wie aanwezig is, waar en sinds wanneer, voor elke actieve bouwplaats.',
      },
      {
        title: 'Automatische voortgangsrapporten',
        desc: 'Het systeem genereert rapporten met geaggregeerde aanwezigheden, uren en GPS. Klaar voor termijnstaten en projectleiding, geen handmatige invoer nodig.',
      },
      {
        title: 'Onderaannemertracking',
        desc: 'Elk team, intern of extern, klokt in vanaf de smartphone. De uitvoerder ziet iedereen op één dashboard zonder iemand na te jagen.',
      },
      {
        title: 'Verzegeld fotobewijs',
        desc: 'Medewerkers maken foto\'s vanuit de app. Elk beeld is gekoppeld aan de bouwplaats met GPS en tijdstempel, manipulatiebestendig na generatie.',
      },
      {
        title: 'Ingebouwde AVG-conformiteit',
        desc: 'Geolocatie conform by design met AVG-regelgeving en privacyrichtlijnen. Sjablonen voor privacyverklaringen aan medewerkers inbegrepen.',
      },
    ],
  },
  testimonial: {
    quote: 'Sinds we GeoTapp gebruiken, vraagt de projectleiding niet meer om aanwezigheidslijsten. We openen het rapport en de termijnstaat is klaar.',
    author: 'Jozef M.',
    role: 'Eigenaar, bouwbedrijf, 35 medewerkers',
  },
  faq: {
    title: 'Veelgestelde vragen',
    subtitle: 'Wat ons het meest gevraagd wordt voordat men begint.',
    items: [
      {
        q: 'Wie was er op de bouwplaats en wanneer?',
        a: 'Elke GPS-klokregistratie heeft een tijdstempel en is gecertificeerd. GeoTapp registreert echte coördinaten op het moment van inklokken, niet handmatig ingevoerd. De gegevens zijn altijd verifieerbaar door de projectleiding.',
      },
      {
        q: 'Hoe beheert u onderaannemers op de bouwplaats?',
        a: 'GeoTapp volgt toegang en aanwezigheid van alle ploegen, inclusief onderaannemers. Elke medewerker klokt in vanaf de smartphone en de uitvoerder ziet alles in realtime op één dashboard.',
      },
      {
        q: 'Kosten bouwplaatsrapporten uren handwerk?',
        a: 'Nee. GeoTapp genereert rapporten automatisch met GPS, uren en aanwezigheden. Ze zijn klaar voor de projectleiding en termijnstaten zonder handmatige invoer.',
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
    per: 'medewerker/maand',
    note: '14 dagen gratis proberen',
  },
  schema_sector_name: 'Bouw',
  schema_faq: [
    {
      question: 'Wie was er op de bouwplaats en wanneer?',
      answer: 'Elke GPS-klokregistratie heeft een tijdstempel en is gecertificeerd. GeoTapp registreert echte coördinaten op het moment van inklokken, niet handmatig ingevoerd. De gegevens zijn altijd verifieerbaar door de projectleiding.',
    },
    {
      question: 'Hoe beheert u onderaannemers op de bouwplaats?',
      answer: 'GeoTapp volgt toegang en aanwezigheid van alle ploegen, inclusief onderaannemers. Elke medewerker klokt in vanaf de smartphone en de uitvoerder ziet alles in realtime op één dashboard.',
    },
    {
      question: 'Kosten bouwplaatsrapporten uren handwerk?',
      answer: 'Nee. GeoTapp genereert rapporten automatisch met GPS, uren en aanwezigheden. Ze zijn klaar voor de projectleiding en termijnstaten zonder handmatige invoer.',
    },
  ],
};

export default content;
