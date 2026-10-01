import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Software til vagtselskaber | GeoTapp vagtplaner med GPS',
    description: 'GeoTapp er softwaren til vagt- og sikkerhedsvirksomheder: vagter med position ved stemplingerne, dokumenterede kontrolrunder og bevisfotos. Bygget med GDPR for øje. Prøv gratis.',
  },
  hero: {
    badge: 'Software til vagtselskaber, vagter og eventvagter',
    h1_line1: 'Verificerbar tilstedeværelse og vagtplaner',
    h1_line2: 'til vagt- og sikkerhedsbranchen',
    subtitle: 'GeoTapp Flow og TimeTracker dokumenterer vagternes tilstedeværelse på de tildelte poster: position og tidspunkt ved hver stempling, bevisfotos og forseglede rapporter. Vagtplaner, anmodninger om vagtbytte og beskeder samlet på én platform. Appen til vagtselskaber, der forsegler hver vagt, hver runde og hver tilstedeværelse.',
    cta_primary: 'Prøv gratis i 14 dage',
    cta_note: 'Prøven binder dig ikke til noget. Intet kreditkort.',
  },
  pain: {
    title: 'De problemer, du allerede kender',
    items: [
      {
        title: 'At dokumentere tilstedeværelse på de tildelte poster',
        desc: 'Kunden bestrider, at vagten var til stede på et bestemt tidspunkt. Uden registreret position og tidspunkt står dit ord mod hans, og du risikerer kontrakten.',
      },
      {
        title: 'Hændelsesrapporter uden dokumenteret position',
        desc: 'En håndskrevet hændelsesrapport uden registreret position og tidspunkt er nem at bestride.',
      },
      {
        title: 'Vagtoverdragelse, der stadig foregår på papir',
        desc: 'Vagtskiftet mellem vagterne sker med sedler eller telefonopkald. Vigtige oplysninger går tabt, ansvaret er uklart, og det er svært at rekonstruere bagefter.',
      },
    ],
  },
  workflow: {
    title: 'Sådan fungerer det i tre trin',
    subtitle: 'Fra vagtposten til kontoret uden papir.',
    steps: [
      {
        title: 'Vagten stempler på den tildelte post',
        desc: 'GeoTapp TimeTracker registrerer indstempling, pauser og udstempling med position og tidspunkt, og bevisfotos ved kontrolpunkterne. Hver kontrol dokumenterer vagten med et tryk: mellem to stemplinger registreres der intet automatisk.',
      },
      {
        title: 'Lederen ser vagterne, så snart de kommer ind',
        desc: 'Flow modtager dataene, så snart de kommer ind. Driftslederen kontrollerer dækningen af alle poster, vagtbytter og eventuelle afvigelser uden at ringe ud i felten.',
      },
      {
        title: 'Rapporten er dit bevis, som kan forsvares ved en revision',
        desc: 'Når vagten er slut, laves tilstedeværelsesregistret med de positioner, der er registreret ved stemplingerne, og enhver ændring kan opdages. Kunden eller myndighederne kan selv kontrollere, at det er intakt.',
      },
    ],
  },
  differenza: {
    title: 'Software til vagtselskaber: tilstedeværelsesregister eller verificerbar dokumentation?',
    subtitle: 'De fleste systemer registrerer vagterne. GeoTapp forsegler hver tilstedeværelse i en verificerbar rapport.',
    rows: [
      {
        label: 'Hvad den registrerer',
        competitor: 'Tidspunkt for vagtens start og slut',
        geotapp: 'Tidspunkt + position ved stempling + foto + position på den tildelte post',
      },
      {
        label: 'Hvem kan kontrollere',
        competitor: 'Kun dit kontor',
        geotapp: 'Dig, kunden eller myndighederne, hver for sig',
      },
      {
        label: 'Ved en tvist',
        competitor: 'Kun dit ord',
        geotapp: 'Forseglet rapport, som tredjeparter kan kontrollere',
      },
      {
        label: 'Bevis for kontrolrunde',
        competitor: 'Mangler eller findes på papir',
        geotapp: 'Position, tidspunkt og foto ved kontrolpunktet',
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
      'Kunden bestrider, at vagten var til stede på et bestemt tidspunkt.',
      'Vagten siger “jeg var der”. Kunden siger “det kan jeg ikke se”.',
      'Du har intet at bevise det med. Tvisten trækker ud.',
      'Du risikerer at miste kontrakten.',
    ],
    dopo: [
      'Kunden bestrider, at vagten var til stede på et bestemt tidspunkt.',
      'Du åbner rapporten: position på den tildelte post, tidspunkter, foto af stedet.',
      'Du sender den til ham, og han kontrollerer den selv.',
      'Du har noget at vise.',
    ],
  },

  scenario: {
    title: 'Et typisk tilfælde',
    body: 'Kunden hævder, at vagten ikke var på sin post på et kritisk tidspunkt. Med GeoTapp åbner du vagtrapporten: position registreret ved kontrolpunktet, forseglet tidsstempel, foto af stedet, alt sammen registreret af vagtens smartphone, da vagten stemplede og tog billederne.',
    resolution: 'I stedet for ord mod ord er der et dokument, som kunden selv kan kontrollere.',
  },

  features: {
    title: 'Software til vagtselskaber: forseglede vagter, dokumenterede kontroller.',
    items: [
      {
        title: 'Verificerbar stempling med GPS for hver vagt',
        desc: 'Hver tilstedeværelse er knyttet til position, tidspunkt og tildelt post. Du kan vise den til kunden, til en tilsynsmyndighed eller ved en kontraktrevision, når det er nødvendigt.',
      },
      {
        title: 'Register over vagterne',
        desc: 'Gem rolle, kontaktoplysninger og tildelte poster for hver vagt, og bestem, hvem der ser hvad i appen.',
      },
      {
        title: 'Eksport til Excel eller CSV til lønbehandling',
        desc: 'Eksportér månedens registreringer til Excel eller CSV, klar til din lønbogholder. Lønbehandlingen bliver hurtig og uden fejl fra at skrive tallene af igen.',
      },
      {
        title: 'Digital vagtoverdragelse',
        desc: 'Anmodninger om vagtbytte går gennem appen, og beskederne bliver i sagens kanal: færre sedler og telefonopkald mellem to vagter.',
      },
      {
        title: 'Overblik over flere steder, opdateret ved hver stempling',
        desc: 'Lederen ser den seneste stemplede position for hver vagt, status for hver post og de aktive vagtbytter, fra enhver enhed, uden telefonopkald.',
      },
      {
        title: 'Rapporter, der kan forsvares ved en revision og over for myndighederne',
        desc: 'Hver vagt giver en forseglet rapport med positioner, tidspunkter og bevisfotos, som kunden og myndighederne selv kan kontrollere.',
      },
    ],
  },

  cta_mid: {
    title: 'Vil du se, hvordan det virker i en rigtig tvist?',
    body: 'Prøv det på den rigtige opgave, fra vagten, der stempler på sin post, til rapporten, som kunden modtager: 14 dage gratis, uden kreditkort.',
    cta: 'Prøv gratis i 14 dage',
  },

  trust: {
    title: 'Enhver ændring i vores rapporter kan ses, også hvis du eller vi foretager den.',
    body: 'GeoTapp-rapporterne laves af systemet, under vagten. Når rapporten er forseglet, brydes forseglingen, hvis man retter et klokkeslæt eller flytter et foto, og kontrollen melder det. Den, der modtager rapporten, kunde eller myndighed, kan selv kontrollere den.',
    badge: 'Kan kontrolleres af enhver, uden adgang til din konto',
  },
  testimonial: {
    quote: 'Vi sender kunderne det forseglede tilstedeværelsesregister med positionerne fra stemplingerne: når de bestrider noget, kontrollerer de det selv.',
    author: 'Luca M.',
    role: 'Driftschef, vagtselskab',
  },
  faq: {
    title: 'Ofte stillede spørgsmål',
    subtitle: 'Det, vi oftest bliver spurgt om, før man går i gang.',
    items: [
      {
        q: 'Passer GeoTapp til vagtselskaber og vagter?',
        a: 'Ja. Vagtselskaber bruger GeoTapp til at dokumentere tilstedeværelsen på de tildelte poster med position, styre vagter og vagtbytter og samle bevisfotos ved kontrolpunkterne.',
      },
      {
        q: 'Hvordan hjælper GeoTapp med hændelsesrapporter?',
        a: 'TimeTracker knytter hver hændelse til position og tidspunkt, som forsegles i rapporten. Hændelsesrapporten fra GeoTapp indeholder koordinater, tidspunkt og foto, og kunden kan selv kontrollere, at dokumentet ikke er ændret.',
      },
      {
        q: 'Hjælper GeoTapp ved vagtskifte mellem vagter?',
        a: 'Ja. Anmodninger om vagtbytte går gennem appen, vagterne ligger i Flows kalender, og beskederne bliver i sagens kanal. Lederen kan se, hvem der dækker hvad, uden at være afhængig af telefonopkald.',
      },
    ],
  },
  cta: {
    title: 'Vagten blev passet. Nu skal du kunne vise det.',
    subtitle: 'GeoTapp laver verificerbar dokumentation for hver vagt, forseglede rapporter, som kunden og myndighederne selv kan kontrollere.',
    primary: 'Prøv gratis i 14 dage',
    secondary: 'Se priserne',
  },
  pricing_hint: {
    label: 'TimeTracker-pladser fra',
    per: 'pr. medarbejder pr. måned, plus Flow-abonnement fra 39 € pr. måned',
    note: 'Gratis prøveperiode i 14 dage',
  },

  schema_sector_name: 'Vagtselskaber',
  schema_faq: [
    {
      question: 'Virker GeoTapp til styring af vagter og kontrolrunder?',
      answer: 'Ja. GeoTapp gør det muligt for sikkerhedsvirksomheder at forsegle hver vagt og hver runde: vagterne stempler fra smartphonen med position, og det giver dokumenteret bevis for den udførte tjeneste.',
    },
    {
      question: 'Hvordan dokumenterer jeg kontrolrunder og periodiske kontroller?',
      answer: 'Hver kontrol registreres med GeoTapp TimeTracker: tidspunkt, position, foto af stedet og noter. Den forseglede rapport er tilgængelig for kunden, så snart den er lavet, eller når vagten er slut.',
    },
    {
      question: 'Kan jeg vise kunden, at kontrolrunderne er gennemført regelmæssigt?',
      answer: 'Ja. GeoTapp-rapporterne er forseglet og indeholder positioner, tidspunkter og bevisfotos fra kontrolpunkterne. Kunden kan selv kontrollere, at rapporten ikke er ændret, og se, hvornår og hvor vagten stemplede.',
    },
    {
      question: 'Hjælper GeoTapp med natarbejde og overenskomsten for vagtbranchen?',
      answer: 'GeoTapp registrerer arbejdstider, overarbejde samt nat- og helligdagsarbejde og eksporterer dem til din lønbogholder, som anvender dem efter den gældende overenskomst. Det er bygget til at holde sig inden for rammerne af GDPR: position kun, når vagten stempler.',
    },
    {
      question: 'Virker det også til at koordinere flere hold på forskellige steder?',
      answer: 'Ja. Med GeoTapp Flow ser lederen den seneste stemplede position for alle vagter, tildeler vagter, håndterer hastende afløsninger og samler rapporterne fra alle steder på ét skærmbillede.',
    },
  ],
};

export default content;
