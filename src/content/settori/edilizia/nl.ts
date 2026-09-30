import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Bouwplaats-app: gps-aanwezigheid en ploegbeheer | GeoTapp',
    description: 'Beheer aanwezigheid en diensten op de bouwplaats met registraties met locatie. Verzegelde, automatische rapporten, ontworpen met het oog op de AVG.',
  },
  hero: {
    badge: 'App voor bouwbedrijven en bouwplaatsen',
    h1_line1: 'Uw bouwplaats gedocumenteerd,',
    h1_line2: 'bij elke registratie.',
    subtitle: 'Registraties met locatie, ploegbeheer en automatisch verzegelde rapporten. Geen papier, en als iemand iets betwist, hebt u een bewijs om te tonen. GeoTapp verbindt Flow + TimeTracker voor wie bouwplaatsen, onderaannemers en directievoering beheert.',
    cta_primary: 'Probeer het op een echte bouwplaats',
    cta_note: '14 dagen, tot 50 medewerkers in het veld, geen creditcard.',
  },
  pain: {
    title: 'Problemen die we elke dag oplossen',
    items: [
      {
        title: 'Wie was er op de bouwplaats en wanneer?',
        desc: 'Elke registratie legt tijd en locatie vast die op dat moment door de telefoon zijn bepaald, niet met de hand ingevoerd, en komt in het verzegelde rapport dat de directie kan controleren.',
      },
      {
        title: 'Hoe beheert u de onderaannemers?',
        desc: 'Leg de aanwezigheid van alle ploegen vast, onderaannemers inbegrepen, vanuit één dashboard dat bij elke registratie wordt bijgewerkt.',
      },
      {
        title: 'Kosten de rapporten van de bouwplaats uren?',
        desc: 'Automatisch gemaakt met gps, uren en aanwezigheid. Klaar voor de directie en voor de termijnstaten zonder handmatig invoeren.',
      },
    ],
  },
  workflow: {
    title: 'Hoe het werkt',
    subtitle: 'Drie eenvoudige stappen. Geen papier. Geen telefoontjes.',
    steps: [
      {
        title: 'De medewerker registreert bij de ingang van de bouwplaats',
        desc: 'Hij opent de dienst vanaf zijn smartphone. GeoTapp legt op dat moment tijd en locatie vast en, als het nodig is, de bewijsfoto\'s. Tussen twee registraties in wordt niets automatisch vastgelegd.',
      },
      {
        title: 'De uitvoerder ziet de registraties zodra ze binnenkomen',
        desc: 'Eén dashboard voor alle ploegen en alle bouwplaatsen. Wie heeft geregistreerd, waar en hoe laat, zonder iemand telefonisch achterna te hoeven zitten.',
      },
      {
        title: 'Het rapport is klaar voor de termijnstaat en de directie',
        desc: 'Aan het eind van de dag of van de opdracht maakt het systeem een verzegeld rapport met aanwezigheid, gps en uren. Klaar voor de directie zonder een minuut handwerk.',
      },
    ],
  },
  differenza: {
    title: 'Bouwplaats-app: registratie of controleerbaar bewijs?',
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
        geotapp: 'U, de directie, een derde partij, zelfstandig',
      },
      {
        label: 'Bij een betwisting',
        competitor: 'Alleen uw woord',
        geotapp: 'Verzegeld rapport, elke wijziging zichtbaar',
      },
      {
        label: 'Rapporten van de bouwplaats',
        competitor: 'Handmatig of afwezig',
        geotapp: 'Automatisch gemaakt met gps en aanwezigheid',
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
      'De directie vraagt wie er dinsdag op de bouwplaats was. Niemand weet het zeker.',
      'De presentielijsten komen onvolledig, te laat of onleesbaar binnen.',
      'De onderaannemer betwist de uren. U hebt geen bewijs.',
      'U stelt de termijnstaat met de hand op en reconstrueert de gegevens uit WhatsApp-berichten.',
    ],
    dopo: [
      'De directie vraagt wie er dinsdag op de bouwplaats was. U opent de registraties van die dag: alles staat erin.',
      'De aanwezigheid wordt bij elke registratie vastgelegd, met tijd en locatie.',
      'Betwist de onderaannemer het? U toont het verzegelde rapport.',
      'De termijnstaat is al klaar: uren, aanwezigheid en gps automatisch samengevoegd.',
    ],
  },
  features: {
    title: 'Functies ontworpen voor de bouwplaats',
    items: [
      {
        title: 'Verzegelde gps-aanwezigheid',
        desc: 'Elke aankomst, pauze en elk vertrek van de bouwplaats wordt vastgelegd met locatie en tijd. Om te tonen aan directie, opdrachtgever en arbeidsinspectie wanneer het nodig is.',
      },
      {
        title: 'Dashboard voor meerdere bouwplaatsen',
        desc: 'Volg meerdere bouwplaatsen vanaf één scherm: per bouwplaats ziet u wie heeft geregistreerd, waar en hoe laat, zodra de registratie binnenkomt.',
      },
      {
        title: 'Automatische rapporten voor termijnstaten',
        desc: 'Het systeem maakt rapporten met aanwezigheid, uren en gps samengevoegd. Klaar voor termijnstaten en directie, zonder handmatig invoeren.',
      },
      {
        title: 'Registratie van onderaannemers',
        desc: 'Elke ploeg, intern of extern, registreert met de smartphone. De uitvoerder ziet iedereen in één dashboard, zonder iemand achterna te hoeven zitten.',
      },
      {
        title: 'Verzegelde fotobewijzen',
        desc: 'De medewerkers maken foto\'s met de app. Elk beeld wordt aan de bouwplaats gekoppeld met gps en tijdstempel: elke latere wijziging is zichtbaar.',
      },
      {
        title: 'Locatie alleen bij het registreren',
        desc: 'Geolocatie ontworpen om binnen de kaders van de AVG te blijven: locatie alleen bij het registreren, nooit doorlopend, en een privacyverklaring voor de werknemers die in de app wordt ondertekend voordat ze registreren.',
      },
    ],
  },
  testimonial: {
    quote: 'Sinds we GeoTapp gebruiken, vraagt de directie niet meer om presentielijsten. We openen het rapport en de termijnstaat is al klaar.',
    author: 'Jozef M.',
    role: 'Eigenaar, bouwbedrijf, 35 medewerkers',
  },
  faq: {
    title: 'Veelgestelde vragen',
    subtitle: 'Wat ons het vaakst wordt gevraagd voordat u begint.',
    items: [
      {
        q: 'Wie was er op de bouwplaats en wanneer?',
        a: 'Elke registratie legt tijd en locatie vast die op dat moment door de telefoon zijn bepaald, niet met de hand ingevoerd, en komt in het verzegelde rapport dat de directie kan controleren.',
      },
      {
        q: 'Hoe beheert u de onderaannemers op de bouwplaats?',
        a: 'GeoTapp legt de aanwezigheid van alle ploegen vast, onderaannemers inbegrepen. Elke medewerker registreert met zijn eigen smartphone en de uitvoerder ziet de registraties zodra ze binnenkomen in één dashboard.',
      },
      {
        q: 'Kosten de rapporten van de bouwplaats uren handmatig werk?',
        a: 'Nee. GeoTapp maakt de rapporten automatisch met gps, uren en aanwezigheid. Ze zijn klaar voor de directie en voor de termijnstaten zonder handmatig invoeren.',
      },
    ],
  },
  cta: {
    title: 'Probeer GeoTapp 14 dagen gratis',
    subtitle: 'De proefperiode verplicht u tot niets. Geen creditcard nodig.',
    primary: 'Probeer het 14 dagen gratis',
    secondary: 'Bekijk de prijzen',
  },
  pricing_hint: {
    label: 'TimeTracker-plaatsen vanaf',
    per: 'per medewerker per maand, plus het Flow-plan vanaf € 39 per maand',
    note: 'Gratis proefperiode van 14 dagen',
  },
  schema_sector_name: 'Bouw',
  schema_faq: [
    {
      question: 'Wie was er op de bouwplaats en wanneer?',
      answer: 'Elke registratie legt tijd en locatie vast die op dat moment door de telefoon zijn bepaald, niet met de hand ingevoerd, en komt in het verzegelde rapport dat de directie kan controleren.',
    },
    {
      question: 'Hoe beheert u de onderaannemers op de bouwplaats?',
      answer: 'GeoTapp legt de aanwezigheid van alle ploegen vast, onderaannemers inbegrepen. Elke medewerker registreert met zijn eigen smartphone en de uitvoerder ziet de registraties zodra ze binnenkomen in één dashboard.',
    },
    {
      question: 'Kosten de rapporten van de bouwplaats uren handmatig werk?',
      answer: 'Nee. GeoTapp maakt de rapporten automatisch met gps, uren en aanwezigheid. Ze zijn klaar voor de directie en voor de termijnstaten zonder handmatig invoeren.',
    },
  ],
};

export default content;
