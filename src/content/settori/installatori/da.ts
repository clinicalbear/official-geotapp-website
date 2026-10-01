import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App til installatører og VVS-montører | GeoTapp',
    description: 'GeoTapp til installatører og VVS-montører: arbejdsrapporter med position og foto, fotodokumentation og rapporter, hvor enhver ændring kan opdages. Prøv gratis.',
  },
  hero: {
    badge: 'App til installatører, VVS-montører og varmeinstallatører',
    h1_line1: 'Bestrider kunden timerne?',
    h1_line2: 'Vis ham arbejdsrapporten med GPS.',
    subtitle: 'Dine teknikere stempler fra smartphonen med ét tryk. Systemet laver en arbejdsrapport med registreret position og foto, og enhver ændring kan opdages. Når kunden spørger “hvor lang tid brugte I?”, har du svaret klar.',
    cta_primary: 'Prøv gratis i 14 dage',
    cta_note: 'Intet kreditkort. I gang fra første dag.',
  },
  pain: {
    title: 'Problemet, du allerede kender',
    items: [
      {
        title: 'Tvister om timer og opgaver',
        desc: 'Kunden afviser tidspunktet. Teknikeren har intet at vise. Tvisten trækker ud i uger og koster mere end selve opgaven.',
      },
      {
        title: 'Kontoret, der render efter folkene i felten',
        desc: 'Lederen ringer til teknikerne for at høre, hvor de er, hvad de har lavet, og hvornår de bliver færdige. Hvert opkald afbryder begge parter.',
      },
      {
        title: 'Ufuldstændige eller bortkomne arbejdsrapporter',
        desc: 'Sedler, WhatsApp, e-mails: oplysningerne kommer ufuldstændigt, for sent eller slet ikke. At genskabe opgørelsen bagefter er et job i sig selv.',
      },
    ],
  },
  workflow: {
    title: 'Sådan fungerer det i tre trin',
    subtitle: 'Fra varebilen til kontoret uden telefonopkald.',
    steps: [
      {
        title: 'Teknikeren stempler på stedet',
        desc: 'Med GeoTapp TimeTracker registrerer teknikeren indstempling, pauser, udstempling, fotos og noter direkte fra smartphonen. Positionen tages kun ved stempling, som GDPR lægger op til.',
      },
      {
        title: 'Kontoret ser det hele, så snart det kommer ind',
        desc: 'Flow modtager dataene med det samme. Lederen ser opgave, fremdrift, tildelt tekniker og fotodokumentation uden at ringe.',
      },
      {
        title: 'Rapporten er dit bevis, som du kan vise kunden',
        desc: 'Når opgaven er slut, laves rapporten med rigtige GPS-data og fotodokumentation. Enhver ændring kan opdages. Kunden kan selv kontrollere, at den er ægte. Når der opstår tvivl, skal du ikke forklare dig. Du skal vise.',
      },
    ],
  },
  differenza: {
    title: 'App til installatører: stempling eller verificerbar dokumentation?',
    subtitle: 'De fleste apps registrerer klokkeslættet. GeoTapp laver verificerbar dokumentation.',
    rows: [
      {
        label: 'Hvad den registrerer',
        competitor: 'Tidspunkt for ind- og udstempling',
        geotapp: 'Tidspunkt + position ved stempling + foto + udført arbejde',
      },
      {
        label: 'Hvem kan kontrollere',
        competitor: 'Kun dit kontor',
        geotapp: 'Dig, bygherren eller en tredjepart, hver for sig',
      },
      {
        label: 'Ved en tvist',
        competitor: 'Kun dit ord',
        geotapp: 'Forseglet rapport, enhver ændring kan opdages',
      },
      {
        label: 'Arbejdsrapport',
        competitor: 'Manuel eller ikke-eksisterende',
        geotapp: 'Laves automatisk med GPS og foto',
      },
      {
        label: 'GDPR',
        competitor: 'Skal ofte undersøges nærmere',
        geotapp: 'Bygget til at holde sig inden for rammerne af GDPR, blanketter inkluderet',
      },
    ],
  },

  prima_dopo: {
    title: 'Sådan er det nu. Sådan er det med GeoTapp.',
    prima: [
      'Kunden afviser tidspunktet eller det udførte arbejde.',
      'Teknikeren siger “jeg har gjort det”. Kunden siger “det kan jeg ikke se”.',
      'Du har intet i hånden. Diskussionen varer i dagevis.',
      'Nogle gange mister du betalingen. Du mister altid tid.',
    ],
    dopo: [
      'Kunden afviser tidspunktet eller det udførte arbejde.',
      'Du åbner rapporten: foto, GPS, klokkeslæt, forsegling.',
      'Du sender den til ham. Diskussionen er slut på et minut.',
      'Du har noget at vise. Teknikeren har også noget i hånden.',
    ],
  },

  scenario: {
    title: 'Et typisk tilfælde',
    body: 'Kunden bestrider sluttidspunktet og beder om rabat på fakturaen. Med GeoTapp åbner du rapporten for opgaven: foto af det færdige anlæg, tidspunkter og positioner for stemplingerne og varigheden regnet ud automatisk, alt sammen lavet af teknikerens smartphone, mens arbejdet blev udført.',
    resolution: 'I stedet for ord mod ord er der et dokument, som kunden selv kan kontrollere.',
  },

  features: {
    title: 'App til installatører og VVS-montører: arbejdsrapporter med GPS og fotodokumentation.',
    items: [
      {
        title: 'Verificerbar stempling med GPS',
        desc: 'Hver indstempling, pause og udstempling er knyttet til position, tidspunkt og sag. Du kan vise den til kunden eller en tilsynsmyndighed, når det er nødvendigt.',
      },
      {
        title: 'Forseglet fotodokumentation',
        desc: 'Teknikeren tager fotos fra appen. Hvert billede knyttes til opgaven med GPS og tidsstempel og kommer med i rapporten. Ingen kan ændre dem, uden at systemet opdager det.',
      },
      {
        title: 'Eksport til lønbehandling',
        desc: 'Eksportér månedens registreringer til Excel eller CSV, klar til din lønbogholder.',
      },
      {
        title: 'Styring af sager på flere byggepladser',
        desc: 'Tildel sager, følg fremdriften på hver byggeplads, og få en besked, hvis en vagt står åben.',
      },
      {
        title: 'Automatiske digitale arbejdsrapporter',
        desc: 'Når opgaven er slut, er rapporten allerede klar: timer, fotos og noter. Intet papir, ingen opkald. Kontoret sender den til kunden fra Flow med et klik.',
      },
      {
        title: 'Også dine teknikere har et bevis',
        desc: 'En verificerbar rapport giver teknikeren noget i hånden mod ubegrundede beskyldninger. Den, der arbejder godt, kan vise det med data. Ingen gråzone mellem felt og kontor.',
      },
    ],
  },

  cta_mid: {
    title: 'Vil du se, hvordan det virker på en rigtig opgave?',
    body: 'Vi viser dig hele forløbet: fra sagen oprettes, til arbejdsrapporten kunden modtager.',
    cta: 'Prøv gratis i 14 dage',
  },

  trust: {
    title: 'Vores rapporter: enhver ændring kan opdages. Hverken af dig eller af os.',
    body: 'GeoTapp-rapporterne laves af systemet, mens opgaven udføres. Når rapporten er forseglet, brydes forseglingen, hvis man retter et klokkeslæt eller flytter et foto, og kontrollen melder det. Den, der modtager rapporten, kunde eller rådgiver, kan selv kontrollere den.',
    badge: 'Kan kontrolleres af enhver, uden adgang til din konto',
  },
  testimonial: {
    quote: 'Før brugte vi timer på at samle sedlerne ind fra felten. Nu er arbejdsrapporten allerede klar, når teknikeren er tilbage ved varebilen.',
    author: 'Marco R.',
    role: 'Driftsleder, installation i boliger og erhverv',
  },
  faq: {
    title: 'Ofte stillede spørgsmål',
    subtitle: 'Det, vi oftest bliver spurgt om, før man går i gang.',
    items: [
      {
        q: 'Passer GeoTapp som software til installatører og servicefolk?',
        a: 'Ja. GeoTapp hjælper installatører, elektrikere, VVS-montører og servicefolk med at styre opgaver, arbejdsrapporter, timer, rejser og dokumentation af det udførte arbejde mellem felt og kontor.',
      },
      {
        q: 'Kan jeg bruge GeoTapp til arbejdsrapporter og fotodokumentation?',
        a: 'Ja. TimeTracker samler fotos, noter og verificerbare stemplinger i felten, mens Flow knytter alt til sagen og den driftsmæssige historik.',
      },
      {
        q: 'Hjælper GeoTapp med at få færre tvister om timer og udført arbejde?',
        a: 'Det er et af de vigtigste formål: tider, position, noter og fotodokumentation gør det tydeligere og lettere at vise, hvad der er sket under opgaven.',
      },
    ],
  },
  cta: {
    title: 'Arbejdet er udført. Nu skal du kunne vise det.',
    subtitle: 'GeoTapp laver verificerbar dokumentation for hver opgave, forseglede rapporter, som kunden selv kan kontrollere.',
    primary: 'Prøv gratis i 14 dage',
    secondary: 'Se priserne',
  },
  pricing_hint: {
    label: 'TimeTracker-pladser fra',
    per: 'pr. medarbejder pr. måned, plus Flow-abonnement fra 39 € pr. måned',
    note: 'Gratis prøveperiode i 14 dage',
  },

  schema_sector_name: 'Installatører',
  schema_faq: [
    {
      question: 'Virker GeoTapp for VVS-montører og varmeinstallatører, der er ude at køre?',
      answer: 'Ja. GeoTapp er appen til installatører og VVS-montører, lavet til dem, der arbejder på byggepladser og i private hjem. Med den integrerede håndtering af arbejdsrapporter registrerer teknikerne opgaver, fotos og timer direkte fra smartphonen, uden at skulle tilbage til kontoret.',
    },
    {
      question: 'Hvordan dokumenterer jeg en serviceopgave eller installation?',
      answer: 'Når opgaven er færdig, registrerer teknikeren i GeoTapp: start- og sluttidspunkt med position, fotos af det udførte arbejde og tekniske noter. Systemet laver en forseglet rapport, som kunden selv kan kontrollere.',
    },
    {
      question: 'Kan jeg bruge GeoTapp til at styre flere installationsteams på forskellige byggepladser?',
      answer: 'Ja. Med GeoTapp Flow kan indehaveren koordinere flere teams, tildele sager, følge opgavernes status og samle fotodokumentation fra alle aktive byggepladser, så snart den kommer ind.',
    },
    {
      question: 'Kan rapporterne bruges, hvis kunden bestrider noget?',
      answer: 'GeoTapp-rapporterne er forseglet med position, tidsstempel og fotodokumentation. Kunden kontrollerer dem selv. De hjælper med at vise, at dokumentet ikke er ændret; alene er de hverken et absolut bevis for det skete eller juridisk rådgivning.',
    },
    {
      question: 'Overholder GeoTapp GDPR, når det gælder teknikernes position?',
      answer: 'Det er bygget til at holde sig inden for rammerne: positionen registreres kun, når teknikeren stempler eller tager et bevisfoto, aldrig løbende, og informationen til medarbejderne underskrives i appen før den første stempling. Resten (fx aftale med medarbejderrepræsentanter eller tilladelse, hvor det kræves) er arbejdsgiverens ansvar.',
    },
  ],
};

export default content;
