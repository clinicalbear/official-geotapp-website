import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App voor installateurs: klusbeheer met gps | GeoTapp',
    description: 'Documenteer klussen, uren en materialen, met de locatie bij de registraties. Automatisch bewijs van de dienstverlening. Probeer GeoTapp gratis.',
  },
  hero: {
    badge: 'App voor installateurs en technici',
    h1_line1: 'Elke klus gedocumenteerd,',
    h1_line2: 'elk uur vastgelegd.',
    subtitle: 'Voor elektrotechnische en sanitaire installateurs, cv-installateurs en installatiebedrijven. GeoTapp verbindt Flow + TimeTracker om gps, uren en foto\'s bij te houden voor elke opdracht, van de bestelbus naar het kantoor zonder telefoontjes.',
    cta_primary: 'Probeer GeoTapp 14 dagen gratis',
    cta_note: 'De proefperiode verplicht u tot niets. Geen creditcard nodig.',
  },
  pain: {
    title: 'Problemen die we elke dag oplossen',
    items: [
      {
        title: 'Klanten betwisten de uren van de klus',
        desc: 'Gps-registraties met tijdstempel als controleerbaar bewijs. Het gegeven wordt verzegeld op het moment van de klus: elke latere wijziging is zichtbaar.',
      },
      {
        title: 'U loopt de monteurs achterna om te weten waar ze zijn',
        desc: 'Elke registratie van de monteur komt direct in het dashboard, met tijd en locatie. U weet waar ze zijn geweest zonder te bellen.',
      },
      {
        title: 'Onvolledige of nooit ingeleverde werkbonnen',
        desc: 'De gegevens komen te laat, onvolledig of helemaal niet. Aan het eind van de maand uren en klussen reconstrueren is een apart karwei dat tijd en geld kost.',
      },
    ],
  },
  workflow: {
    title: 'Hoe het werkt',
    subtitle: 'Drie eenvoudige stappen. Geen papier. Geen telefoontjes.',
    steps: [
      {
        title: 'De monteur registreert met gps bij het begin van de klus',
        desc: 'Hij opent de opdracht op zijn smartphone. GeoTapp legt echte gps-coördinaten, tijdstempel en foto\'s vast, alles automatisch: elke wijziging is zichtbaar.',
      },
      {
        title: 'De uren worden automatisch per opdracht vastgelegd',
        desc: 'Elke gewerkte minuut wordt aan de juiste opdracht gekoppeld. De verantwoordelijke ziet, registratie na registratie, wie waar werkt.',
      },
      {
        title: 'Het klantrapport wordt gemaakt zonder iets te typen',
        desc: 'Aan het eind van de klus maakt het systeem een rapport met gps, uren en verzegeling. De klant ontvangt het en controleert het zelfstandig.',
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
      'De klant betwist de eindtijd van de klus en vraagt korting.',
      'De monteur zegt "ik heb 4 uur gewerkt". De klant zegt "er staan er 2 op".',
      'U hebt geen bewijs. De discussie duurt dagen en de betaling is in gevaar.',
      'Aan het eind van de maand reconstrueert u uren en opdrachten uit WhatsApp-berichten.',
    ],
    dopo: [
      'Betwist de klant het? U opent het rapport: foto\'s, locatie, tijden, verzegeling.',
      'U stuurt het door. De discussie is in een minuut voorbij.',
      'U hebt een bewijs om te tonen. Ook de monteur heeft iets in handen.',
      'Aan het eind van de maand is de export al klaar, uren en opdrachten automatisch samengevoegd.',
    ],
  },
  features: {
    title: 'Functies ontworpen voor installateurs',
    items: [
      {
        title: 'Controleerbare gps-registratie',
        desc: 'Elke aankomst, pauze en elk vertrek is gekoppeld aan locatie, tijd en opdracht. Om aan de klant of de arbeidsinspectie te tonen wanneer het nodig is.',
      },
      {
        title: 'Verzegelde fotobewijzen',
        desc: 'De monteur maakt foto\'s met de app. Elk beeld is gekoppeld aan de klus met gps en tijdstempel: elke wijziging na het aanmaken is zichtbaar.',
      },
      {
        title: 'Opdrachtenbeheer voor meerdere bouwplaatsen',
        desc: 'Wijs opdrachten toe, volg de voortgang van elke klus en ontvang een melding als een dienst open blijft staan.',
      },
      {
        title: 'Automatische digitale werkbonnen',
        desc: 'Aan het eind van de klus is de werkbon al klaar: uren, foto\'s en notities. Geen papier, geen telefoontjes. Het kantoor stuurt hem met één klik vanuit Flow naar de klant.',
      },
      {
        title: 'Export voor salaris en facturering',
        desc: 'Exporteer de maandelijkse aanwezigheid en de uren per opdracht. Salaris en facturering starten vanuit de gegevens die al klaar zijn, zonder iets over te typen.',
      },
      {
        title: 'Locatie alleen bij het registreren',
        desc: 'Geolocatie ontworpen om binnen de kaders van de AVG te blijven: nooit doorlopend, en een privacyverklaring voor de werknemers die in de app wordt ondertekend voordat ze registreren.',
      },
    ],
  },
  testimonial: {
    quote: 'Wanneer een klant de uren betwist, openen we het rapport met locatie en foto\'s en controleert hij het zelf.',
    author: 'Robert F.',
    role: 'Eigenaar, installatiebedrijf, 20 monteurs',
  },
  faq: {
    title: 'Veelgestelde vragen',
    subtitle: 'Wat ons het vaakst wordt gevraagd voordat u begint.',
    items: [
      {
        q: 'Betwisten klanten de uren van de klus?',
        a: 'Met GeoTapp krijgen de gps-registraties een tijdstempel op het moment van de klus en is elke wijziging zichtbaar. Ze zijn een controleerbaar bewijs van de gewerkte uren wanneer iemand eraan twijfelt.',
      },
      {
        q: 'Hoe volg ik meerdere ploegen op verschillende opdrachten?',
        a: 'GeoTapp toont de registraties van vandaag op de kaart, bijgewerkt bij elke geopende of gesloten klus. U weet aan welke opdracht uw monteurs werken, zonder te bellen.',
      },
      {
        q: 'Hoe versnel ik de facturering van de klussen?',
        a: 'GeoTapp maakt automatisch de export van uren en opdrachten, klaar voor het beheersysteem. Niets met de hand over te typen: minder fouten, en de facturering start vanuit de gegevens die al klaar zijn.',
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
  schema_sector_name: 'Installaties',
  schema_faq: [
    {
      question: 'Betwisten klanten de uren van de klus?',
      answer: 'Met GeoTapp krijgen de gps-registraties een tijdstempel op het moment van de klus en is elke wijziging zichtbaar. Ze zijn een controleerbaar bewijs van de gewerkte uren wanneer iemand eraan twijfelt.',
    },
    {
      question: 'Hoe volg ik meerdere ploegen op verschillende opdrachten?',
      answer: 'GeoTapp toont de registraties van vandaag op de kaart, bijgewerkt bij elke geopende of gesloten klus. U weet aan welke opdracht uw monteurs werken, zonder te bellen.',
    },
    {
      question: 'Hoe versnel ik de facturering van de klussen?',
      answer: 'GeoTapp maakt automatisch de export van uren en opdrachten, klaar voor het beheersysteem. Niets met de hand over te typen: minder fouten, en de facturering start vanuit de gegevens die al klaar zijn.',
    },
  ],
};

export default content;
