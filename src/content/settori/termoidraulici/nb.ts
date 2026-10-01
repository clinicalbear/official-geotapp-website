import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App for VVS-teknikere: rapporter med GPS og bilder',
    description: 'Arbeidsrapporter med GPS ved stemplingen og foto av hvert anlegg: dokumentasjonen du kan vise når kunden bestrider kjeler og utskiftede deler. Prøv gratis i 14 dager.',
  },
  hero: {
    badge: 'App for VVS-teknikere og varmeanleggsmontører',
    h1_line1: 'App for VVS-teknikere:',
    h1_line2: 'arbeidsrapporter med GPS, fotodokumentasjon og færre tvister.',
    subtitle: 'GeoTapp registrerer hvert oppdrag på kjeler og anlegg med GPS, bilder og registrerte tidspunkter. Nekter kunden for at delene er byttet? Vis arbeidsrapporten i stedet for å diskutere.',
    cta_primary: 'Prøv gratis i 14 dager',
    cta_note: 'Prøven binder deg ikke til noe. Uten kredittkort.',
  },
  pain: {
    title: 'Problemet enhver VVS-bedrift kjenner godt',
    items: [
      {
        title: 'Kunden nekter for at delene på kjelen er byttet',
        desc: 'Kunden sier at du har byttet andre komponenter enn de dere ble enige om, eller at anlegget allerede var slik. Uten fotodokumentasjon blir innvendingen ord mot ord.',
      },
      {
        title: 'Ingen dokumentasjon av anlegget etter oppdraget',
        desc: 'Teknikeren er ferdig med reparasjonen, men det finnes verken foto eller teknisk notat. Hvis feilen kommer tilbake, er det umulig å rekonstruere hva som ble gjort.',
      },
      {
        title: 'Akutte oppdrag om natten og i helgene kan ikke spores',
        desc: 'Feil på varmeanlegget oppstår på umulige tidspunkter. Teknikeren rykker ut og løser problemet, men det er ingenting igjen som kan vises til kunden eller forsikringsselskapet.',
      },
    ],
  },
  workflow: {
    title: 'Slik fungerer det i tre trinn',
    subtitle: 'Fra byggeplassen til kontoret uten telefonsamtaler.',
    steps: [
      {
        title: 'Teknikeren registrerer oppdraget på stedet',
        desc: 'Med GeoTapp TimeTracker stempler teknikeren inn, tar pause og stempler ut med posisjon, tar bilder av anlegget og kjelen og skriver notater om utskiftede komponenter fra smarttelefonen.',
      },
      {
        title: 'Kontoret ser alt så snart det kommer inn',
        desc: 'GeoTapp Flow mottar dataene så snart telefonen har dekning. Den ansvarlige ser oppdraget, tildelt tekniker, fremdriften og fotodokumentasjonen uten å ringe.',
      },
      {
        title: 'Arbeidsrapporten er beviset ditt',
        desc: 'Når oppdraget er ferdig, lager systemet en forseglet rapport: GPS-tidspunkt, bilder av anlegg og komponenter, tekniske notater. Enhver endring kan oppdages. Kunden kan selv kontrollere den.',
      },
    ],
  },
  differenza: {
    title: 'App for VVS-teknikere: registrering eller verifiserbar dokumentasjon?',
    subtitle: 'De fleste appene registrerer klokkeslettet. GeoTapp lager verifiserbar dokumentasjon.',
    rows: [
      {
        label: 'Hva den registrerer',
        competitor: 'Tidspunkt for inn- og utstempling',
        geotapp: 'Tidspunkt + posisjon ved stempling + foto av anlegget + utskiftede komponenter',
      },
      {
        label: 'Ved en tvist',
        competitor: 'Bare ditt ord',
        geotapp: 'Forseglet rapport, enhver endring kan oppdages',
      },
      {
        label: 'Dokumentasjon av oppdraget',
        competitor: 'Manuell eller ikke-eksisterende',
        geotapp: 'Lages automatisk med GPS og foto',
      },
      {
        label: 'Hvem kan kontrollere',
        competitor: 'Bare kontoret ditt',
        geotapp: 'Du, byggherren eller en tredjepart',
      },
      {
        label: 'GDPR',
        competitor: 'Må ofte undersøkes nærmere',
        geotapp: 'Bygget for å holde seg innenfor rammene i GDPR, skjemaer inkludert',
      },
    ],
  },
  prima_dopo: {
    title: 'Før GeoTapp. Etter GeoTapp.',
    prima: [
      'Kunden nekter for at ventilen er byttet.',
      'Du har verken bilder eller dokumenterte materialer.',
      'Diskusjonen varer i uker. Du risikerer å ikke bli betalt.',
      'Teknikeren har ingenting i hånden til å forsvare seg med.',
    ],
    dopo: [
      'Kunden nekter for at ventilen er byttet.',
      'Du åpner arbeidsrapporten: foto av den fjernede komponenten, av den nye, GPS-tidspunkt, tekniske notater.',
      'Du sender den til kunden, og han kontrollerer den selv.',
      'Du har noe å vise. Teknikeren har også noe i hånden.',
    ],
  },
  scenario: {
    title: 'Et typisk tilfelle',
    body: 'En kunde bestrider utskiftingen av en brenner på kjelen og nekter å betale fakturaen. Med GeoTapp åpner du arbeidsrapporten: foto av den defekte komponenten som ble fjernet, av den nye som ble montert, GPS-tidspunkt for oppdraget og teknikerens tekniske notater, alt sammen laget automatisk av smarttelefonen på stedet.',
    resolution: 'I stedet for ord mot ord har du et dokument som kunden selv kan kontrollere.',
  },
  features: {
    title: 'App for VVS-teknikere: dette får du i GeoTapp.',
    items: [
      {
        title: 'Verifiserbar stempling med GPS',
        desc: 'Hver innstempling, pause og utstempling registreres med posisjon, tidsstempel og oppdrag. Du kan vise den til kunden og forsikringsselskapet når det er nødvendig.',
      },
      {
        title: 'Fotodokumentasjon av anlegget',
        desc: 'Teknikeren tar bilder fra appen under og etter oppdraget. Hvert bilde knyttes til posisjon og tidspunkt og tas med i den forseglede rapporten: enhver senere endring kan oppdages.',
      },
      {
        title: 'Automatiske digitale arbeidsrapporter',
        desc: 'Når arbeidet er ferdig, er rapporten allerede klar: timer, bilder, utskiftede komponenter. Kontoret sender den til kunden fra Flow med ett klikk.',
      },
      {
        title: 'Styring av oppdrag og akutte oppdrag',
        desc: 'Tildel akutte oppdrag, og følg fremdriften oppdrag for oppdrag.',
      },
      {
        title: 'Eksport av registreringer til lønnsbehandling',
        desc: 'Eksporter månedens registreringer til Excel eller CSV, klare for lønnsansvarlig. Lønnsbehandlingen går raskt.',
      },
      {
        title: 'Teknikerne dine har også et bevis',
        desc: 'En verifiserbar rapport gir teknikeren noe i hånden mot ubegrunnede beskyldninger om materialer eller timer. Den som jobber godt, kan vise det med data.',
      },
    ],
  },
  cta_mid: {
    title: 'Vil du se hvordan det fungerer på et ekte VVS-oppdrag?',
    body: 'Prøv det på et ekte oppdrag, fra oppdraget åpnes til arbeidsrapporten kunden mottar: 14 dager gratis, uten kredittkort.',
    cta: 'Prøv gratis i 14 dager',
  },
  trust: {
    title: 'Enhver endring i rapportene våre kan ses. Verken av deg eller av oss.',
    body: 'GeoTapp-rapportene lages av systemet mens oppdraget utføres. Når rapporten er forseglet, brytes forseglingen hvis noen retter et klokkeslett eller flytter et bilde, og kontrollen melder fra.',
    badge: 'Kan kontrolleres av hvem som helst, uten tilgang til kontoen din',
  },
  testimonial: {
    quote: 'Med GeoTapp fotograferer teknikerne mine anlegget før og etter hvert oppdrag. Når en kunde bestrider materialene, har vi bilder å vise.',
    author: 'Marco S.',
    role: 'Eier, VVS-anlegg i bolig og næringsbygg',
  },
  faq: {
    title: 'Ofte stilte spørsmål',
    subtitle: 'Det VVS-teknikere oftest spør om før de kommer i gang.',
    items: [
      {
        q: 'Passer GeoTapp som app for VVS-teknikere?',
        a: 'Ja. VVS-teknikere og varmeanleggsmontører bruker GeoTapp til oppdrag på kjeler, varmeanlegg og sanitær, med arbeidsrapporter med GPS, bilder og verifiserbare timer.',
      },
      {
        q: 'Kan jeg bruke GeoTapp til å dokumentere utskifting av komponenter på kjeler?',
        a: 'Ja. Teknikeren tar bilder fra appen av den fjernede og den monterte komponenten. Hvert bilde knyttes til GPS, tidsstempel og oppdrag og inngår i den forseglede arbeidsrapporten.',
      },
      {
        q: 'Hjelper GeoTapp med å løse kunders innvendinger om anlegg?',
        a: 'Det er nettopp det viktigste formålet: GPS-tidspunkt, fotodokumentasjon av materialene og den forseglede arbeidsrapporten gir deg et dokument du kan vise når en innvending er ubegrunnet.',
      },
    ],
  },
  cta: {
    title: 'Hvert VVS-oppdrag som er godt utført, fortjener et bevis. GeoTapp lager det.',
    subtitle: 'Verifiserbare rapporter, posisjon ved stemplingene, forseglede bilder i rapporten.',
    primary: 'Prøv gratis i 14 dager',
    secondary: 'Se prisene',
  },
  pricing_hint: {
    label: 'TimeTracker-plasser fra',
    per: 'per ansatt per måned, pluss Flow-abonnement fra 39 € per måned',
    note: 'Gratis prøveperiode i 14 dager',
  },
  schema_sector_name: 'VVS-teknikere',
  schema_faq: [
    {
      question: 'Fungerer GeoTapp som app for VVS-teknikere?',
      answer: 'Ja. GeoTapp er appen for VVS-teknikere og varmeanleggsmontører som registrerer hvert oppdrag på kjeler og anlegg med GPS, bilder og registrerte tidspunkter. Teknikeren stempler i felten, kontoret ser alt så snart det kommer inn, og kunden får en forseglet arbeidsrapport.',
    },
    {
      question: 'Hvordan forsegler jeg et oppdrag på en kjele med GeoTapp?',
      answer: 'Teknikeren registrerer i GeoTapp start- og sluttidspunkt med posisjon, bilder av de utskiftede komponentene og tekniske notater. Systemet lager en forseglet arbeidsrapport som kunden selv kan kontrollere.',
    },
    {
      question: 'Hjelper GeoTapp med å styre flere VVS-team på forskjellige oppdrag?',
      answer: 'Ja. Med GeoTapp Flow kan eieren koordinere flere team, tildele akutte oppdrag, følge status på oppdragene og samle fotodokumentasjon fra alle aktive byggeplasser så snart den er lastet opp.',
    },
    {
      question: 'Kan GeoTapp-rapportene brukes hvis kunden bestrider noe om varmeanlegg?',
      answer: 'GeoTapp-rapportene er forseglet med GPS, tidsstempel og fotodokumentasjon. Kunden kontrollerer dem selv. De hjelper med å vise at dokumentet ikke er endret; alene er de verken et absolutt bevis for det som skjedde eller juridisk rådgivning.',
    },
  ],
};

export default content;
