import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App til Installatører & Teknikere: GPS-opgavesporing | GeoTapp',
    description: 'Spor opgaver, timer og materialer for VVS-, el- og blikkenslagerinstallatører med GPS. Automatiske servicebeviser, ingen kundetvister. Prøv GeoTapp gratis.',
  },
  hero: {
    badge: 'App til installatører, teknikere og serviceteams',
    h1_line1: 'Hver opgave dokumenteret,',
    h1_line2: 'hver time registreret.',
    subtitle: 'For el-, VVS- og mekaniske installatører. GeoTapp forbinder Flow + TimeTracker for at spore GPS, timer og fotos per opgave — fra varevognen til kontoret uden telefonopkald.',
    cta_primary: 'Prøv GeoTapp gratis i 14 dage',
    cta_note: 'Ingen binding. Intet kreditkort påkrævet.',
  },
  pain: {
    title: 'Problemer vi løser hver dag',
    items: [
      {
        title: 'Kunder bestrider de arbejdede timer',
        desc: 'GPS-stemplinger tidsstemplet som uigendriveligt bevis. Data certificeres i opgaveøjeblikket — kan ikke redigeres efterfølgende.',
      },
      {
        title: 'Jagte teknikere for opdateringer',
        desc: 'Realtidskort med status for hver opgave. Du ved, hvor alle dine teknikere er, uden at foretage et eneste opkald.',
      },
      {
        title: 'Ufuldstændige eller manglende arbejdssedler',
        desc: 'Data ankommer for sent, ufuldstændigt eller slet ikke. At rekonstruere timer og opgaver ved månedens afslutning er en separat opgave, der koster tid og penge.',
      },
    ],
  },
  workflow: {
    title: 'Sådan fungerer det',
    subtitle: 'Tre enkle trin. Intet papir. Ingen opkald.',
    steps: [
      {
        title: 'Teknikeren stempler ind via GPS ved start',
        desc: 'Åbner opgaven fra smartphonen. GeoTapp registrerer reelle GPS-koordinater, tidsstempel og fotos — fuldautomatisk, manipulationssikkert.',
      },
      {
        title: 'Timer registreres automatisk per opgave',
        desc: 'Hvert arbejdet minut knyttes til den rigtige opgave. Lederen ser i realtid, hvem der arbejder hvor.',
      },
      {
        title: 'Kunderapporten genereres uden at taste noget',
        desc: 'Ved opgavens afslutning genererer systemet en rapport med GPS, timer og digital signatur. Kunden modtager den og verificerer den selvstændigt.',
      },
    ],
  },
  differenza: {
    title: 'Installatør-app: tidsregistrering eller certificering?',
    subtitle: 'De fleste apps registrerer blot tidspunktet. GeoTapp producerer verificerbart bevis.',
    rows: [
      {
        label: 'Hvad registreres',
        competitor: 'Ind- og udstemplingstid',
        geotapp: 'Tid + verificeret GPS + fotos + udført arbejde',
      },
      {
        label: 'Hvem kan verificere',
        competitor: 'Kun dit kontor',
        geotapp: 'Dig, kunden, en tredjepart — uafhængigt',
      },
      {
        label: 'Ved tvist',
        competitor: 'Data ikke forsvarligt',
        geotapp: 'Forseglet rapport, manipulationssikker',
      },
      {
        label: 'Opgaverapport',
        competitor: 'Manuel eller fraværende',
        geotapp: 'Automatisk genereret med GPS og fotos',
      },
      {
        label: 'GDPR-overholdelse',
        competitor: 'Ofte tvivlsom',
        geotapp: 'Kompatibel by design, formularer inkluderet',
      },
    ],
  },
  prima_dopo: {
    title: 'Hvad der sker nu. Hvad der sker med GeoTapp.',
    prima: [
      'Kunden bestrider sluttidspunktet og beder om rabat.',
      'Teknikeren siger "jeg arbejdede 4 timer". Kunden siger "der står kun 2".',
      'Du har intet bevis. Diskussionen varer dage, og betalingen er i fare.',
      'Ved månedens slutning rekonstruerer du timer og opgaver fra WhatsApp-beskeder.',
    ],
    dopo: [
      'Kunden bestrider? Åbn rapporten: fotos, GPS, tidsstempel, digital signatur.',
      'Du sender den. Tvisten er løst på et minut.',
      'Betalingen er sikret. Teknikeren er beskyttet.',
      'Ved månedens slutning er eksporten allerede klar — timer og opgaver aggregeret automatisk.',
    ],
  },
  features: {
    title: 'Funktioner bygget til installatører og serviceteams',
    items: [
      {
        title: 'Verificerbar GPS-stempling',
        desc: 'Hver ind- og udgang er knyttet til lokation, tidsstempel og opgave. Forsvarligt over for kunder og inspektører.',
      },
      {
        title: 'Forseglet fotobevis',
        desc: 'Teknikeren fotograferer direkte fra appen. Hvert billede er knyttet til opgaven med GPS og tidsstempel — manipulationssikkert efter generering.',
      },
      {
        title: 'Multi-lokation opgavestyring',
        desc: 'Tildel opgaver, spor fremskridt på alle lokationer og modtag automatiske advarsler, hvis en opgave ikke åbnes eller lukkes til tiden.',
      },
      {
        title: 'Automatiske digitale arbejdssedler',
        desc: 'Ved opgavens afslutning er rapporten klar: timer, fotos, noter og underskrift. Intet papir, ingen opkald. Teknikeren sender den til kunden direkte fra appen.',
      },
      {
        title: 'Eksport til løn og fakturering',
        desc: 'Eksportér månedligt fremmøde og timer per opgave. Lønbehandling og fakturering bliver et spørgsmål om minutter.',
      },
      {
        title: 'Indbygget GDPR-overholdelse',
        desc: 'Geolokalisering kompatibel by design med GDPR-regler. Skabeloner til medarbejdernes privatlivserklæring inkluderet.',
      },
    ],
  },
  testimonial: {
    quote: 'Kunder bestrider ikke længere timerne. Vi åbner rapporten med GPS og fotos, og diskussionen stopper der.',
    author: 'Robert F.',
    role: 'Ejer, installationsfirma — 20 teknikere',
  },
  faq: {
    title: 'Ofte stillede spørgsmål',
    subtitle: 'Hvad folk spørger os mest om, før de starter.',
    items: [
      {
        q: 'Bestrider kunder de arbejdede timer på en opgave?',
        a: 'Med GeoTapp tidsstemples GPS-stemplinger i opgaveøjeblikket og kan ikke redigeres. De udgør uigendriveligt bevis for arbejdede timer og eliminerer enhver tvist.',
      },
      {
        q: 'Hvordan overvåger jeg flere teams på forskellige opgaver?',
        a: 'GeoTapp tilbyder et realtidskort med status for hver opgave. Du ved præcis, hvor dine teknikere er, og hvilken opgave de arbejder på, uden at ringe.',
      },
      {
        q: 'Hvordan fremskynder jeg fakturering af afsluttede opgaver?',
        a: 'GeoTapp genererer automatisk eksporten af timer og opgaver klar til dit regnskabsprogram. Ingen manuel indtastning, ingen fejlrisiko — fakturering bliver ét klik.',
      },
    ],
  },
  cta: {
    title: 'Prøv GeoTapp gratis i 14 dage',
    subtitle: 'Ingen binding. Intet kreditkort påkrævet. Svar inden for 12 arbejdstimer.',
    primary: 'Kom gratis i gang',
    secondary: 'Se priser',
  },
  pricing_hint: {
    label: 'Fra',
    per: 'tekniker/måned',
    note: '14 dages gratis prøveperiode',
  },
  schema_sector_name: 'Installationsteknik',
  schema_faq: [
    {
      question: 'Bestrider kunder de arbejdede timer på en opgave?',
      answer: 'Med GeoTapp tidsstemples GPS-stemplinger i opgaveøjeblikket og kan ikke redigeres. De udgør uigendriveligt bevis for arbejdede timer og eliminerer enhver tvist.',
    },
    {
      question: 'Hvordan overvåger jeg flere teams på forskellige opgaver?',
      answer: 'GeoTapp tilbyder et realtidskort med status for hver opgave. Du ved præcis, hvor dine teknikere er, og hvilken opgave de arbejder på, uden at ringe.',
    },
    {
      question: 'Hvordan fremskynder jeg fakturering af afsluttede opgaver?',
      answer: 'GeoTapp genererer automatisk eksporten af timer og opgaver klar til dit regnskabsprogram. Ingen manuel indtastning, ingen fejlrisiko — fakturering bliver ét klik.',
    },
  ],
};

export default content;
