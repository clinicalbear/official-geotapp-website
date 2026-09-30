import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App voor elektriciens: werkbon met tijd, locatie en foto\'s',
    description: 'Eén tik bij aankomst, één bij vertrek, de foto\'s van de schakelkast bij de klus gevoegd. De werkbon is klaar als u weer vertrekt. 14 dagen gratis.',
  },
  hero: {
    badge: 'App voor elektriciens en elektrotechnische installateurs',
    h1_line1: 'App voor elektriciens:',
    h1_line2: 'werkbonnen met gps, fotobewijzen en minder geschillen.',
    subtitle: 'GeoTapp legt elke elektrische klus vast met gps, foto\'s en vastgelegde tijden. Betwist de klant het? U toont de werkbon in plaats van mondeling te discussiëren.',
    cta_primary: 'Probeer het 14 dagen gratis',
    cta_note: 'De proefperiode verplicht u tot niets. Geen creditcard.',
  },
  pain: {
    title: 'Het probleem dat elk elektrotechnisch bedrijf goed kent',
    items: [
      {
        title: 'De klant ontkent de klus of het tijdstip',
        desc: 'Hij zegt dat de monteur er niet was of dat de installatie niet is afgemaakt. Zonder controleerbaar bewijs sleept de betwisting zich weken voort.',
      },
      {
        title: 'Geen documentatie van de installatie na de klus',
        desc: 'De monteur heeft het werk afgemaakt, maar er is geen fotospoor en geen technische notitie. Reconstrueren wat er is gedaan wordt onmogelijk.',
      },
      {
        title: 'Het kantoor weet niet waar de monteurs zijn',
        desc: 'Telefoontjes, berichten, onzekerheid. Elke keer dat u een klant moet bijpraten over de voortgang van het werk, moet u eerst de monteur opsporen.',
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
        desc: 'Aan het eind van de klus maakt het systeem een verzegeld rapport: gps-tijd, foto\'s van de installatie, technische notities. Elke wijziging is zichtbaar. De klant kan het zelfstandig controleren.',
      },
    ],
  },
  differenza: {
    title: 'App voor elektriciens: registratie of controleerbaar bewijs?',
    subtitle: 'De meeste apps leggen de tijd vast. GeoTapp levert controleerbaar bewijs.',
    rows: [
      {
        label: 'Wat het vastlegt',
        competitor: 'Tijd van aankomst/vertrek',
        geotapp: 'Tijd + locatie bij de registratie + foto\'s van de installatie + technische notities',
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
      'De klant ontkent dat de installatie is afgemaakt.',
      'U hebt geen foto\'s of controleerbare tijden.',
      'De discussie duurt weken. U riskeert niet betaald te worden.',
      'De monteur heeft niets in handen om zich te verdedigen.',
    ],
    dopo: [
      'De klant ontkent dat de installatie is afgemaakt.',
      'U opent de werkbon: gps-foto\'s van de installatie, verzegelde tijd, handtekening.',
      'U stuurt hem door, en hij controleert het zelf.',
      'U hebt een bewijs om te tonen. Ook de monteur heeft iets in handen.',
    ],
  },
  scenario: {
    title: 'Een typisch geval',
    body: 'Een klant betwist dat de elektrische installatie is afgemaakt en weigert de laatste factuur te betalen. Met GeoTapp opent u de werkbon: foto\'s van de afgemaakte schakelkast, gps-tijd van begin en einde van het werk, technische notities van de monteur, alles automatisch gemaakt met de smartphone ter plaatse.',
    resolution: 'In plaats van woord tegen woord is er een document dat de klant zelf controleert.',
  },
  cosa_cambia: {
    title: 'Wat er echt verandert, vanaf de eerste klus',
    items: [
      {
        title: '\'s Avonds wordt niets meer overgetikt',
        desc: 'De uren gaan niet meer via het papier, dan via het bericht, dan via het beheersysteem. Ze ontstaan al op de juiste opdracht, met de locatie en het tijdstip van het moment waarop ze zijn gemaakt, en aan het eind van de maand is de export voor de salarisadministratie klaar zonder dat iemand ze overtypt.',
      },
      {
        title: 'De werkbon is geen discussie meer',
        desc: 'Als de opdrachtgever vraagt hoeveel uur er aan zijn installatie is gewerkt, is het antwoord niet het woord van de monteur tegen het zijne, maar een verzegeld document met de foto\'s van de schakelkast, de tijden en de technische notities, dat hij zelf kan controleren zonder in uw account te komen.',
      },
      {
        title: 'Ook de monteur heeft iets in handen',
        desc: 'Het geldt in beide richtingen. Wie goed werkt en te horen krijgt dat hij te laat was, heeft het bewijs van het tijdstip, en hoeft niet uit het hoofd te weten wat hij drie weken geleden deed om zich te verdedigen.',
      },
    ],
  },
  features: {
    title: 'App voor elektriciens: wat u in GeoTapp vindt.',
    items: [
      {
        title: 'Controleerbare gps-registratie',
        desc: 'Elke aankomst, pauze en elk vertrek wordt vastgelegd met locatie, tijdstempel en opdracht. Om aan de klant te tonen wanneer het nodig is.',
      },
      {
        title: 'Fotobewijzen van de installatie',
        desc: 'De monteur maakt na afloop van de klus foto\'s met de app. Elk beeld is gekoppeld aan gps en tijdstempel: elke latere wijziging is zichtbaar.',
      },
      {
        title: 'Automatische digitale werkbonnen',
        desc: 'Aan het eind van het werk is de werkbon al klaar: uren, foto\'s en technische notities. Het kantoor stuurt hem met één klik vanuit Flow naar de klant.',
      },
      {
        title: 'Opdrachtenbeheer voor meerdere bouwplaatsen',
        desc: 'Wijs klussen toe, volg de voortgang opdracht voor opdracht.',
      },
      {
        title: 'Export van aanwezigheid voor de salarisadministratie',
        desc: 'Exporteer de aanwezigheid van de maand in Excel of CSV, klaar voor de salarisadministrateur. De salarisverwerking wordt een snelle handeling.',
      },
      {
        title: 'Uw elektriciens zijn beschermd',
        desc: 'Een controleerbaar rapport geeft de monteur iets in handen tegen ongegronde beschuldigingen. Wie goed werkt, toont dat aan met gegevens.',
      },
    ],
  },
  cta_mid: {
    title: 'Wilt u zien hoe het werkt bij een echte elektrische klus?',
    body: 'Probeer het op een echte klus, van het openen van de opdracht tot de werkbon die de klant ontvangt: 14 dagen gratis, zonder creditcard.',
    cta: 'Probeer het 14 dagen gratis',
  },
  trust: {
    title: 'In onze rapporten is elke wijziging zichtbaar, ook als u haar aanbrengt of wij.',
    body: 'GeoTapp-rapporten worden door het systeem gemaakt op het moment van de klus. Is het rapport eenmaal verzegeld, dan verbreekt het corrigeren van een tijd of het verplaatsen van een foto de verzegeling, en de controle meldt het.',
    badge: 'Te controleren door iedereen, zonder toegang tot uw account',
  },
  testimonial: {
    quote: 'Met GeoTapp leggen mijn monteurs de installatie vast zodra die klaar is. Als een klant iets betwist, hebben we de werkbon om te tonen.',
    author: 'Luc M.',
    role: 'Eigenaar, elektrotechnische installaties voor woningen en industrie',
  },
  faq: {
    title: 'Veelgestelde vragen',
    subtitle: 'Wat elektriciens ons vragen voordat ze beginnen.',
    items: [
      {
        q: 'Is GeoTapp geschikt als app voor elektriciens?',
        a: 'Ja. GeoTapp wordt door elektriciens en installateurs gebruikt om klussen, werkbonnen, uren en fotobewijzen van installaties te beheren. Het werkt zowel voor werk op één opdracht als voor meerdere bouwplaatsen tegelijk.',
      },
      {
        q: 'Kan ik GeoTapp gebruiken om installaties en elektrische klussen te documenteren?',
        a: 'Ja. De monteur maakt tijdens of na afloop van de klus foto\'s met de app. Elk beeld is gekoppeld aan gps, tijdstempel en opdracht, opgenomen in een werkbon waarin elke wijziging zichtbaar is.',
      },
      {
        q: 'Helpt GeoTapp om geschillen met klanten op te lossen?',
        a: 'Dat is precies het belangrijkste gebruik: gps-tijd, fotobewijzen en een verzegelde werkbon geven u een document om te tonen wanneer een betwisting ongegrond is.',
      },
      {
        q: 'Is het ook geschikt als app voor installateurs, niet alleen voor elektriciens?',
        a: 'Ja. Elektrische installaties, cv en sanitair, airconditioning, brandbeveiliging, zonnepanelen. Het vak verandert, het probleem blijft hetzelfde: aantonen wie waar is geweest, hoe lang hij er was en wat hij afgemaakt heeft achtergelaten. De werkbon ziet er voor iedereen hetzelfde uit.',
      },
      {
        q: 'Hoe werken de werkbonnen voor installateurs?',
        a: 'De monteur sluit de klus af vanaf zijn telefoon en de werkbon is al geschreven, met uren, locatie, foto\'s van de installatie en technische notities. Er blijft geen formulier over dat \'s avonds moet worden ingevuld, en dat is juist de reden waarom werkbonnen te laat komen of helemaal niet komen.',
      },
      {
        q: 'Kunnen we stoppen met het verzamelen van uren en foto\'s via WhatsApp?',
        a: 'Het is de reden waarom de meeste bedrijven bij ons komen. In een chat raken de uren zoek tussen de berichten, worden foto\'s gecomprimeerd en moet er aan het eind van de maand iemand alles met de hand overtypen. Hier ontstaat het gegeven al gekoppeld aan de opdracht en aan de persoon.',
      },
    ],
  },
  cta: {
    title: 'Elke goed uitgevoerde installatie verdient een bewijs. GeoTapp maakt het.',
    subtitle: 'Controleerbare rapporten, locatie bij de registraties, foto\'s verzegeld in het rapport.',
    primary: 'Probeer het 14 dagen gratis',
    secondary: 'Bekijk de prijzen',
  },
  pricing_hint: {
    label: 'TimeTracker-plaatsen vanaf',
    per: 'per medewerker per maand, plus het Flow-plan vanaf € 39 per maand',
    note: 'Gratis proefperiode van 14 dagen',
  },
  schema_sector_name: 'Elektriciens',
  schema_faq: [
    {
      question: 'Werkt GeoTapp als app voor elektriciens?',
      answer: 'Ja. GeoTapp is de app voor elektriciens en installateurs die elke klus vastlegt met gps, foto\'s en vastgelegde tijden. De monteur registreert in het veld, het kantoor ziet alles zodra het binnenkomt, de klant ontvangt een verzegelde werkbon.',
    },
    {
      question: 'Hoe verzegel ik een elektrische klus met GeoTapp?',
      answer: 'De monteur legt in GeoTapp de begin- en eindtijd met de locatie vast, de foto\'s van de installatie en de technische notities. Het systeem maakt een verzegelde werkbon die de klant zelfstandig kan controleren.',
    },
    {
      question: 'Helpt GeoTapp bij het beheren van meerdere ploegen elektriciens op verschillende bouwplaatsen?',
      answer: 'Ja. Met GeoTapp Flow kan de eigenaar meerdere ploegen coördineren, opdrachten toewijzen, de status van de klussen volgen en fotobewijzen van alle actieve bouwplaatsen verzamelen, zodra ze zijn geüpload.',
    },
    {
      question: 'Worden GeoTapp-werkbonnen geaccepteerd bij een betwisting?',
      answer: 'GeoTapp-werkbonnen zijn verzegeld met gps, tijdstempel en fotobewijzen. De klant controleert ze zelf. Ze helpen te laten zien dat het document niet is gewijzigd; op zichzelf zijn ze geen absoluut bewijs van het feit en geen juridisch advies.',
    },
    {
      question: 'Werkt GeoTapp ook als app voor installateurs?',
      answer: 'Ja. Naast elektrische installaties dekt het cv en sanitair, airconditioning, brandbeveiliging en zonnepanelen. De monteur legt de klus in het veld vast met gps en foto\'s, en de werkbon wordt voor elk type installatie op dezelfde manier gemaakt.',
    },
    {
      question: 'Volgt GeoTapp de locatie van de monteurs tijdens de dag?',
      answer: 'Nee. De locatie wordt alleen vastgelegd wanneer de monteur registreert (aankomst, pauzes, vertrek) of een bewijsfoto maakt. Tussen twee registraties in wordt niets automatisch vastgelegd: de app vraagt zelfs geen toestemming om de locatie op de achtergrond te lezen.',
    },
  ],
};

export default content;
