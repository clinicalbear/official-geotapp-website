import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App voor loodgieters en cv-installateurs | GeoTapp',
    description: 'Werkbonnen met locatie en foto\'s en rapporten waarin elke wijziging zichtbaar is: om te tonen wanneer iemand iets betwist. Probeer het gratis.',
  },
  hero: {
    badge: 'App voor loodgieters, cv-installateurs en installateurs',
    h1_line1: 'App voor loodgieters en cv-installateurs:',
    h1_line2: 'werkbonnen met gps, fotobewijzen en minder geschillen.',
    subtitle: 'GeoTapp legt elke loodgieterswerkzaamheid vast met gps, foto\'s en vastgelegde tijden. Betwist de klant het? U toont de werkbon in plaats van mondeling te discussiëren.',
    cta_primary: 'Probeer het 14 dagen gratis',
    cta_note: 'De proefperiode verplicht u tot niets. Geen creditcard.',
  },
  pain: {
    title: 'Het probleem dat elk loodgietersbedrijf goed kent',
    items: [
      {
        title: 'De klant ontkent de klus of de gebruikte materialen',
        desc: 'Hij zegt dat de reparatie niet is uitgevoerd of dat de materialen anders waren. Zonder controleerbaar bewijs wordt elke betwisting woord tegen woord.',
      },
      {
        title: 'Geen documentatie van de installatie na de klus',
        desc: 'De monteur heeft het werk afgemaakt, maar er is geen fotospoor en geen technische notitie. Bij een latere storing wordt reconstrueren wat er is gedaan onmogelijk.',
      },
      {
        title: 'Spoedklussen blijven zonder documenten',
        desc: 'Noodklussen zijn het moeilijkst te documenteren. De monteur vertrekt haastig, werkt zonder papier, en daarna is er niets om aan de klant te tonen.',
      },
    ],
  },
  workflow: {
    title: 'Zo werkt het in drie stappen',
    subtitle: 'Van de bouwplaats naar het kantoor zonder telefoontjes.',
    steps: [
      {
        title: 'De monteur legt de klus vast in het veld',
        desc: 'Met GeoTapp TimeTracker registreert hij aankomst, pauzes en vertrek met de locatie, maakt hij foto\'s van de installatie en voegt hij technische notities toe vanaf zijn smartphone.',
      },
      {
        title: 'Het kantoor ziet alles zodra het binnenkomt',
        desc: 'GeoTapp Flow ontvangt de gegevens zodra de telefoon netwerk heeft. De verantwoordelijke ziet opdracht, toegewezen monteur, voortgang en fotobewijzen zonder te bellen.',
      },
      {
        title: 'De werkbon is uw bewijs',
        desc: 'Aan het eind van de klus maakt het systeem een verzegeld rapport: gps-tijd, foto\'s van de installatie, gebruikte materialen, technische notities. Elke wijziging is zichtbaar. De klant kan het zelfstandig controleren.',
      },
    ],
  },
  differenza: {
    title: 'App voor loodgieters: registratie of controleerbaar bewijs?',
    subtitle: 'De meeste apps leggen de tijd vast. GeoTapp levert controleerbaar bewijs.',
    rows: [
      {
        label: 'Wat het vastlegt',
        competitor: 'Tijd van aankomst/vertrek',
        geotapp: 'Tijd + locatie bij de registratie + foto\'s van de installatie + materialen en notities',
      },
      {
        label: 'Bij een betwisting',
        competitor: 'Alleen uw woord',
        geotapp: 'Verzegeld rapport, elke wijziging zichtbaar',
      },
      {
        label: 'Documentatie van de klus',
        competitor: 'Handmatig of afwezig',
        geotapp: 'Automatisch gemaakt met gps en foto\'s',
      },
      {
        label: 'Wie kan controleren',
        competitor: 'Alleen uw kantoor',
        geotapp: 'U, de opdrachtgever, een derde partij',
      },
      {
        label: 'Naleving van de AVG',
        competitor: 'Vaak nog te controleren',
        geotapp: 'Gebouwd om binnen de kaders van de AVG te blijven, inclusief formulieren',
      },
    ],
  },
  prima_dopo: {
    title: 'Voor GeoTapp. Na GeoTapp.',
    prima: [
      'De klant ontkent dat de reparatie is uitgevoerd.',
      'U hebt geen foto\'s of controleerbare tijden.',
      'De discussie duurt weken. U riskeert niet betaald te worden.',
      'De monteur heeft niets in handen om zich te verdedigen.',
    ],
    dopo: [
      'De klant ontkent dat de reparatie is uitgevoerd.',
      'U opent de werkbon: gps-foto\'s van de installatie, verzegelde tijd, technische notities.',
      'U stuurt hem door, en hij controleert het zelf.',
      'U hebt een bewijs om te tonen. Ook de monteur heeft iets in handen.',
    ],
  },
  scenario: {
    title: 'Een typisch geval',
    body: 'Een klant betwist een dringende cv-klus en weigert te betalen met het argument dat het werk niet is afgemaakt. Met GeoTapp opent u de werkbon: foto\'s van de installatie voor en na, gps-tijd van aankomst en einde van het werk, technische notities over de vervangen materialen, alles automatisch gemaakt met de smartphone van de monteur ter plaatse.',
    resolution: 'In plaats van woord tegen woord is er een document dat de klant zelf controleert.',
  },
  features: {
    title: 'App voor loodgieters en cv-installateurs: wat u in GeoTapp vindt.',
    items: [
      {
        title: 'Controleerbare gps-registratie',
        desc: 'Elke aankomst, pauze en elk vertrek wordt vastgelegd met locatie, tijdstempel en opdracht. Om aan de klant te tonen wanneer het nodig is.',
      },
      {
        title: 'Verzegelde foto\'s van loodgietersinstallaties',
        desc: 'De monteur maakt foto\'s voor en na de klus. Elk beeld is gekoppeld aan gps en tijdstempel: elke latere wijziging is zichtbaar.',
      },
      {
        title: 'Automatische digitale werkbonnen',
        desc: 'Aan het eind van het werk is de werkbon al klaar: uren, foto\'s, technische notities en materialen. Het kantoor stuurt hem met één klik vanuit Flow naar de klant.',
      },
      {
        title: 'Beheer van spoedklussen en gepland onderhoud',
        desc: 'Beheer zowel de noodklussen als het periodieke onderhoud vanuit hetzelfde paneel. Elke klus heeft zijn eigen opdracht en zijn eigen historie.',
      },
      {
        title: 'Export van aanwezigheid voor de salarisadministratie',
        desc: 'Exporteer de aanwezigheid van de maand in Excel of CSV, klaar voor de salarisadministrateur. De salarisverwerking wordt een snelle handeling.',
      },
      {
        title: 'Uw loodgieters zijn beschermd',
        desc: 'Een controleerbaar rapport geeft de monteur iets in handen tegen ongegronde beschuldigingen over niet uitgevoerd werk of niet gebruikte materialen.',
      },
    ],
  },
  cta_mid: {
    title: 'Wilt u zien hoe het werkt bij een echte loodgieterswerkzaamheid?',
    body: 'Probeer het op een echte klus, van het openen van de opdracht tot de werkbon die de klant ontvangt: 14 dagen gratis, zonder creditcard.',
    cta: 'Probeer het 14 dagen gratis',
  },
  trust: {
    title: 'In onze rapporten is elke wijziging zichtbaar, ook als u haar aanbrengt of wij.',
    body: 'GeoTapp-rapporten worden door het systeem gemaakt op het moment van de klus. Is het rapport eenmaal verzegeld, dan verbreekt het corrigeren van een tijd of het verplaatsen van een foto de verzegeling, en de controle meldt het.',
    badge: 'Te controleren door iedereen, zonder toegang tot uw account',
  },
  testimonial: {
    quote: 'Vroeger verloor ik uren aan het uitleggen van klussen aan klanten. Nu stuur ik de werkbon en de klant controleert hem zelf.',
    author: 'Robert C.',
    role: 'Eigenaar, loodgieters- en cv-installaties',
  },
  faq: {
    title: 'Veelgestelde vragen',
    subtitle: 'Wat loodgieters ons vragen voordat ze beginnen.',
    items: [
      {
        q: 'Is GeoTapp geschikt als app voor loodgieters en cv-installateurs?',
        a: 'Ja. GeoTapp wordt door loodgieters en cv-installateurs gebruikt om klussen, werkbonnen, uren en fotobewijzen van installaties te beheren. Het werkt zowel voor spoedklussen als voor gepland onderhoud.',
      },
      {
        q: 'Kan ik GeoTapp gebruiken om loodgieters- en cv-klussen te documenteren?',
        a: 'Ja. De monteur maakt voor en na de klus foto\'s met de app. Elk beeld is gekoppeld aan gps, tijdstempel en opdracht, opgenomen in een werkbon waarin elke wijziging zichtbaar is.',
      },
      {
        q: 'Beheert GeoTapp zowel noodklussen als gepland onderhoud?',
        a: 'Ja. Elk type klus, spoed, onderhoud, keuring, heeft zijn eigen opdracht in GeoTapp. De historie van elke installatie is altijd beschikbaar met alle fotobewijzen.',
      },
    ],
  },
  cta: {
    title: 'Elke goed uitgevoerde klus verdient een bewijs. GeoTapp maakt het.',
    subtitle: 'Controleerbare rapporten, locatie bij de registraties, foto\'s verzegeld in het rapport.',
    primary: 'Probeer het 14 dagen gratis',
    secondary: 'Bekijk de prijzen',
  },
  pricing_hint: {
    label: 'TimeTracker-plaatsen vanaf',
    per: 'per medewerker per maand, plus het Flow-plan vanaf € 39 per maand',
    note: 'Gratis proefperiode van 14 dagen',
  },
  schema_sector_name: 'Loodgieters',
  schema_faq: [
    {
      question: 'Werkt GeoTapp als app voor loodgieters en cv-installateurs?',
      answer: 'Ja. GeoTapp is de app voor loodgieters en cv-installateurs die elke klus vastlegt met gps, foto\'s en vastgelegde tijden. De monteur registreert in het veld, het kantoor ziet alles zodra het binnenkomt, de klant ontvangt een verzegelde werkbon.',
    },
    {
      question: 'Hoe verzegel ik een loodgieterswerkzaamheid met GeoTapp?',
      answer: 'De monteur legt in GeoTapp de begin- en eindtijd met de locatie vast, de foto\'s van de installatie voor en na, en de technische notities over de gebruikte materialen. Het systeem maakt een verzegelde werkbon die de klant zelfstandig kan controleren.',
    },
    {
      question: 'Beheert GeoTapp loodgieters-spoedklussen en gepland onderhoud?',
      answer: 'Ja. Zowel de noodklussen als het periodieke onderhoud worden door dezelfde app beheerd. Elke klus levert een historie op met fotobewijzen en tijden en locaties die bij de registraties zijn vastgelegd.',
    },
    {
      question: 'Worden GeoTapp-werkbonnen geaccepteerd bij een betwisting?',
      answer: 'GeoTapp-werkbonnen zijn verzegeld met gps, tijdstempel en fotobewijzen. De klant controleert ze zelf. Ze helpen te laten zien dat het document niet is gewijzigd; op zichzelf zijn ze geen absoluut bewijs van het feit en geen juridisch advies.',
    },
  ],
};

export default content;
