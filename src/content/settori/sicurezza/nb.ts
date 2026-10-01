import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Programvare for vekterselskaper | GeoTapp vaktlister med GPS',
    description: 'GeoTapp er programvaren for vekter- og sikkerhetsbedrifter: vakter med posisjon ved stemplingene, dokumenterte kontrollrunder og bevisbilder. Bygget med GDPR i tankene. Prøv gratis.',
  },
  hero: {
    badge: 'Programvare for vekterselskaper, vektere og arrangementsvakter',
    h1_line1: 'Verifiserbar tilstedeværelse og vaktlister',
    h1_line2: 'for vekter- og sikkerhetsbransjen',
    subtitle: 'GeoTapp Flow og TimeTracker dokumenterer vekternes tilstedeværelse på de tildelte postene: posisjon og tidspunkt ved hver stempling, bevisbilder og forseglede rapporter. Vaktlister, forespørsler om vaktbytte og meldinger samlet på én plattform. Appen for vekterselskaper som forsegler hver vakt, hver runde og hver tilstedeværelse.',
    cta_primary: 'Prøv gratis i 14 dager',
    cta_note: 'Prøven binder deg ikke til noe. Uten kredittkort.',
  },
  pain: {
    title: 'Problemene du allerede kjenner',
    items: [
      {
        title: 'Å dokumentere tilstedeværelse på de tildelte postene',
        desc: 'Kunden bestrider at vekteren var til stede på et bestemt tidspunkt. Uten registrert posisjon og tidspunkt står ditt ord mot hans, og du risikerer kontrakten.',
      },
      {
        title: 'Hendelsesrapporter uten dokumentert posisjon',
        desc: 'En håndskrevet hendelsesrapport uten registrert posisjon og tidspunkt er lett å bestride.',
      },
      {
        title: 'Vaktoverlevering som fortsatt skjer på papir',
        desc: 'Vaktskiftet mellom vekterne skjer med lapper eller telefonsamtaler. Viktige opplysninger går tapt, ansvaret er uklart, og det er vanskelig å rekonstruere i etterkant.',
      },
    ],
  },
  workflow: {
    title: 'Slik fungerer det i tre trinn',
    subtitle: 'Fra vaktposten til kontoret uten papir.',
    steps: [
      {
        title: 'Vekteren stempler på den tildelte posten',
        desc: 'GeoTapp TimeTracker registrerer innstempling, pauser og utstempling med posisjon og tidspunkt, og bevisbilder ved kontrollpunktene. Hver kontroll dokumenterer vakten med ett trykk: mellom to stemplinger registreres ingenting automatisk.',
      },
      {
        title: 'Lederen ser vekterne så snart de kommer inn',
        desc: 'Flow mottar dataene så snart de kommer inn. Driftslederen kontrollerer dekningen av alle poster, vaktbytter og eventuelle avvik uten å ringe ut i felten.',
      },
      {
        title: 'Rapporten er beviset ditt, og kan forsvares ved en revisjon',
        desc: 'Når vakten er over, lages tilstedeværelsesregisteret med posisjonene som er registrert ved stemplingene, og enhver endring kan oppdages. Kunden eller myndighetene kan selv kontrollere at det er intakt.',
      },
    ],
  },
  differenza: {
    title: 'Programvare for vekterselskaper: tilstedeværelsesregister eller verifiserbar dokumentasjon?',
    subtitle: 'De fleste systemene registrerer vekterne. GeoTapp forsegler hver tilstedeværelse i en verifiserbar rapport.',
    rows: [
      {
        label: 'Hva den registrerer',
        competitor: 'Tidspunkt for vaktens start og slutt',
        geotapp: 'Tidspunkt + posisjon ved stempling + foto + posisjon på den tildelte posten',
      },
      {
        label: 'Hvem kan kontrollere',
        competitor: 'Bare kontoret ditt',
        geotapp: 'Du, kunden eller myndighetene, hver for seg',
      },
      {
        label: 'Ved en tvist',
        competitor: 'Bare ditt ord',
        geotapp: 'Forseglet rapport som tredjeparter kan kontrollere',
      },
      {
        label: 'Bevis for kontrollrunde',
        competitor: 'Mangler eller finnes på papir',
        geotapp: 'Posisjon, tidspunkt og foto ved kontrollpunktet',
      },
      {
        label: 'GDPR',
        competitor: 'Må ofte undersøkes nærmere',
        geotapp: 'Bygget for å holde seg innenfor rammene i GDPR, skjemaer inkludert',
      },
    ],
  },

  prima_dopo: {
    title: 'Slik er det nå. Slik er det med GeoTapp.',
    prima: [
      'Kunden bestrider at vekteren var til stede på et bestemt tidspunkt.',
      'Vekteren sier «jeg var der». Kunden sier «det kan jeg ikke se».',
      'Du har ingenting å bevise det med. Tvisten drar ut.',
      'Du risikerer å miste kontrakten.',
    ],
    dopo: [
      'Kunden bestrider at vekteren var til stede på et bestemt tidspunkt.',
      'Du åpner rapporten: posisjon på den tildelte posten, tidspunkter, foto av stedet.',
      'Du sender den til ham, og han kontrollerer den selv.',
      'Du har noe å vise.',
    ],
  },

  scenario: {
    title: 'Et typisk tilfelle',
    body: 'Kunden hevder at vekteren ikke var på posten sin på et kritisk tidspunkt. Med GeoTapp åpner du vaktrapporten: posisjon registrert ved kontrollpunktet, forseglet tidsstempel, foto av stedet, alt sammen registrert av vekterens smarttelefon da vekteren stemplet og tok bildene.',
    resolution: 'I stedet for ord mot ord har du et dokument som kunden selv kan kontrollere.',
  },

  features: {
    title: 'Programvare for vekterselskaper: forseglede vakter, dokumenterte kontroller.',
    items: [
      {
        title: 'Verifiserbar stempling med GPS for hver vakt',
        desc: 'Hver tilstedeværelse er knyttet til posisjon, tidspunkt og tildelt post. Du kan vise den til kunden, til en tilsynsmyndighet eller ved en kontraktsrevisjon når det er nødvendig.',
      },
      {
        title: 'Register over vekterne',
        desc: 'Lagre rolle, kontaktopplysninger og tildelte poster for hver vekter, og bestem hvem som ser hva i appen.',
      },
      {
        title: 'Eksport til Excel eller CSV for lønnsbehandling',
        desc: 'Eksporter månedens registreringer til Excel eller CSV, klare for lønnsansvarlig. Lønnsbehandlingen går raskt og uten feil fra å skrive tallene av på nytt.',
      },
      {
        title: 'Digital vaktoverlevering',
        desc: 'Forespørsler om vaktbytte går gjennom appen, og meldingene blir i oppdragets kanal: færre lapper og telefonsamtaler mellom to vakter.',
      },
      {
        title: 'Oversikt over flere steder, oppdatert ved hver stempling',
        desc: 'Lederen ser den siste stemplede posisjonen til hver vekter, status for hver post og de aktive vaktbyttene, fra alle enheter, uten telefonsamtaler.',
      },
      {
        title: 'Rapporter som kan forsvares ved en revisjon og overfor myndighetene',
        desc: 'Hver vakt gir en forseglet rapport med posisjoner, tidspunkter og bevisbilder som kunden og myndighetene selv kan kontrollere.',
      },
    ],
  },

  cta_mid: {
    title: 'Vil du se hvordan det fungerer i en ekte tvist?',
    body: 'Prøv det på det ekte oppdraget, fra vekteren som stempler på posten sin til rapporten kunden mottar: 14 dager gratis, uten kredittkort.',
    cta: 'Prøv gratis i 14 dager',
  },

  trust: {
    title: 'Enhver endring i rapportene våre kan ses, også hvis du eller vi gjør den.',
    body: 'GeoTapp-rapportene lages av systemet, under vakten. Når rapporten er forseglet, brytes forseglingen hvis noen retter et klokkeslett eller flytter et bilde, og kontrollen melder fra. Den som mottar rapporten, kunde eller myndighet, kan kontrollere den selv.',
    badge: 'Kan kontrolleres av hvem som helst, uten tilgang til kontoen din',
  },
  testimonial: {
    quote: 'Vi sender kundene det forseglede tilstedeværelsesregisteret med posisjonene fra stemplingene: når de bestrider noe, kontrollerer de det selv.',
    author: 'Luca M.',
    role: 'Driftssjef, vekterselskap',
  },
  faq: {
    title: 'Ofte stilte spørsmål',
    subtitle: 'Det vi oftest blir spurt om før dere kommer i gang.',
    items: [
      {
        q: 'Passer GeoTapp for vekterselskaper og vektere?',
        a: 'Ja. Vekterselskaper bruker GeoTapp til å dokumentere tilstedeværelsen på de tildelte postene med posisjon, styre vakter og vaktbytter og samle bevisbilder ved kontrollpunktene.',
      },
      {
        q: 'Hvordan hjelper GeoTapp med hendelsesrapporter?',
        a: 'TimeTracker knytter hver hendelse til posisjon og tidspunkt, som forsegles i rapporten. Hendelsesrapporten fra GeoTapp inneholder koordinater, tidspunkt og foto, og kunden kan selv kontrollere at dokumentet ikke er endret.',
      },
      {
        q: 'Hjelper GeoTapp ved vaktskifte mellom vektere?',
        a: 'Ja. Forespørsler om vaktbytte går gjennom appen, vaktene ligger i Flows kalender, og meldingene blir i oppdragets kanal. Lederen kan se hvem som dekker hva, uten å være avhengig av telefonsamtaler.',
      },
    ],
  },
  cta: {
    title: 'Vakten ble utført. Nå skal du kunne vise det.',
    subtitle: 'GeoTapp lager verifiserbar dokumentasjon for hver vakt, forseglede rapporter som kunden og myndighetene selv kan kontrollere.',
    primary: 'Prøv gratis i 14 dager',
    secondary: 'Se prisene',
  },
  pricing_hint: {
    label: 'TimeTracker-plasser fra',
    per: 'per ansatt per måned, pluss Flow-abonnement fra 39 € per måned',
    note: 'Gratis prøveperiode i 14 dager',
  },

  schema_sector_name: 'Vekterselskaper',
  schema_faq: [
    {
      question: 'Fungerer GeoTapp til styring av vakter og kontrollrunder?',
      answer: 'Ja. GeoTapp gjør det mulig for sikkerhetsbedrifter å forsegle hver vakt og hver runde: vekterne stempler fra smarttelefonen med posisjon, og det gir dokumentert bevis for den utførte tjenesten.',
    },
    {
      question: 'Hvordan dokumenterer jeg kontrollrunder og periodiske kontroller?',
      answer: 'Hver kontroll registreres med GeoTapp TimeTracker: tidspunkt, posisjon, foto av stedet og notater. Den forseglede rapporten er tilgjengelig for kunden så snart den er laget, eller når vakten er over.',
    },
    {
      question: 'Kan jeg vise kunden at kontrollrundene er gjennomført regelmessig?',
      answer: 'Ja. GeoTapp-rapportene er forseglet og inneholder posisjoner, tidspunkter og bevisbilder fra kontrollpunktene. Kunden kan selv kontrollere at rapporten ikke er endret, og se når og hvor vekteren stemplet.',
    },
    {
      question: 'Hjelper GeoTapp med nattarbeid og tariffavtalen for vekterbransjen?',
      answer: 'GeoTapp registrerer arbeidstider, overtid samt natt- og helligdagsarbeid og eksporterer dem til lønnsansvarlig, som bruker dem etter gjeldende tariffavtale. Det er bygget for å holde seg innenfor rammene i GDPR: posisjon bare når vekteren stempler.',
    },
    {
      question: 'Fungerer det også til å koordinere flere team på forskjellige steder?',
      answer: 'Ja. Med GeoTapp Flow ser lederen den siste stemplede posisjonen til alle vektere, tildeler vakter, håndterer hasteavløsninger og samler rapportene fra alle steder på ett skjermbilde.',
    },
  ],
};

export default content;
