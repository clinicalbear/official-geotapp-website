import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App for rørleggere og varmeinstallatører | GeoTapp GPS-rapporter',
    description: 'App for rørleggere og varmeinstallatører: rapporter med posisjon og bilder, bilder av anleggene og rapporter der hver endring kan oppdages. Å vise frem når noen bestrider noe. Prøv gratis.',
  },
  hero: {
    badge: 'App for rørleggere, varmeinstallatører og installatører',
    h1_line1: 'App for rørleggere og varmeinstallatører:',
    h1_line2: 'GPS-rapporter, fotobevis og færre tvister.',
    subtitle: 'GeoTapp registrerer hvert rørleggeroppdrag med GPS, bilder og registrerte klokkeslett. Bestrider kunden noe? Du viser rapporten i stedet for å diskutere.',
    cta_primary: 'Prøv gratis i 14 dager',
    cta_note: 'Prøveperioden binder deg ikke til noe. Ikke noe kredittkort.',
  },
  pain: {
    title: 'Problemet som alle rørleggerfirmaer kjenner godt',
    items: [
      {
        title: 'Kunden nekter for oppdraget eller materialene som ble brukt',
        desc: 'Kunden sier at reparasjonen ikke ble gjort, eller at materialene var andre. Uten dokumentasjon som kan etterprøves, blir hver innsigelse ord mot ord.',
      },
      {
        title: 'Ingen dokumentasjon av anlegget etter oppdraget',
        desc: 'Teknikeren er ferdig med jobben, men det finnes verken bilder eller tekniske notater. Ved en senere feil blir det umulig å rekonstruere hva som ble gjort.',
      },
      {
        title: 'Hasteoppdragene blir stående uten dokumenter',
        desc: 'Akuttoppdrag er de vanskeligste å dokumentere. Teknikeren drar i full fart, jobber uten papir, og etterpå er det ingenting å vise frem for kunden.',
      },
    ],
  },
  workflow: {
    title: 'Slik fungerer det i tre trinn',
    subtitle: 'Fra arbeidsstedet til kontoret uten telefonsamtaler.',
    steps: [
      {
        title: 'Teknikeren registrerer oppdraget på stedet',
        desc: 'Med GeoTapp TimeTracker stempler han inn, tar pauser og stempler ut med posisjon, tar bilder av rørleggeranlegget og legger til tekniske notater fra smarttelefonen.',
      },
      {
        title: 'Kontoret ser alt så snart det kommer inn',
        desc: 'GeoTapp Flow mottar dataene så snart telefonen har dekning. Lederen ser oppdrag, tildelt tekniker, fremdrift og fotobevis uten å ringe.',
      },
      {
        title: 'Rapporten er dokumentasjonen din',
        desc: 'Når oppdraget er ferdig, lager systemet en forseglet rapport: klokkeslett med GPS, bilder av anlegget, brukte materialer, tekniske notater. Hver endring kan oppdages. Kunden kan kontrollere den selv.',
      },
    ],
  },
  differenza: {
    title: 'App for rørleggere: registrering eller dokumentasjon som kan etterprøves?',
    subtitle: 'De fleste appene registrerer bare klokkeslettet. GeoTapp lager dokumentasjon som kan etterprøves.',
    rows: [
      {
        label: 'Hva som registreres',
        competitor: 'Klokkeslett for inn- og utstempling',
        geotapp: 'Klokkeslett + posisjon ved stemplingen + bilder av anlegget + materialer og notater',
      },
      {
        label: 'Ved en tvist',
        competitor: 'Bare ditt ord',
        geotapp: 'Forseglet rapport, hver endring kan oppdages',
      },
      {
        label: 'Dokumentasjon av oppdraget',
        competitor: 'Manuell eller mangler',
        geotapp: 'Lages automatisk med GPS og bilder',
      },
      {
        label: 'Hvem kan kontrollere',
        competitor: 'Bare kontoret ditt',
        geotapp: 'Du, oppdragsgiveren, en tredjepart',
      },
      {
        label: 'GDPR',
        competitor: 'Ofte uklart',
        geotapp: 'Laget for å holde seg innenfor rammene i GDPR, skjemaer inkludert',
      },
    ],
  },
  prima_dopo: {
    title: 'Før GeoTapp. Etter GeoTapp.',
    prima: [
      'Kunden nekter for at reparasjonen ble utført.',
      'Du har verken bilder eller klokkeslett som kan etterprøves.',
      'Diskusjonen drar ut i flere uker. Du risikerer å ikke bli betalt.',
      'Teknikeren har ingenting å forsvare seg med.',
    ],
    dopo: [
      'Kunden nekter for at reparasjonen ble utført.',
      'Du åpner rapporten: bilder med GPS av anlegget, forseglet klokkeslett, tekniske notater.',
      'Du sender den til kunden, og kunden kontrollerer den selv.',
      'Du har dokumentasjon å vise frem. Teknikeren har også noe i hånden.',
    ],
  },
  scenario: {
    title: 'Et typisk tilfelle',
    body: 'En kunde bestrider et akutt rørleggeroppdrag og nekter å betale, med den begrunnelse at arbeidet ikke ble fullført. Med GeoTapp åpner du rapporten: bilder av anlegget før og etter, klokkeslett med GPS for ankomst og slutt på arbeidet, tekniske notater om materialene som ble byttet ut, alt laget automatisk fra teknikerens smarttelefon på stedet.',
    resolution: 'I stedet for ord mot ord finnes det et dokument som kunden kan kontrollere selv.',
  },
  features: {
    title: 'App for rørleggere og varmeinstallatører: dette får du i GeoTapp.',
    items: [
      {
        title: 'Stempling med GPS som kan etterprøves',
        desc: 'Hver inngang, pause og utgang registreres med posisjon, tidsstempel og oppdrag. Kan vises frem for kunden når det trengs.',
      },
      {
        title: 'Forseglede bilder av rørleggeranlegg',
        desc: 'Teknikeren tar bilder før og etter oppdraget. Hvert bilde knyttes til GPS og tidsstempel: hver senere endring kan oppdages.',
      },
      {
        title: 'Automatiske digitale rapporter',
        desc: 'Når jobben er ferdig, er rapporten allerede klar: timer, bilder, tekniske notater og materialer. Kontoret sender den til kunden fra Flow med ett klikk.',
      },
      {
        title: 'Styring av akuttoppdrag og planlagt vedlikehold',
        desc: 'Styr både akuttoppdrag og periodisk vedlikehold fra samme panel. Hvert oppdrag har sitt eget oppdragsnummer og sin egen historikk.',
      },
      {
        title: 'Eksport av oppmøte til lønn',
        desc: 'Eksporter månedens oppmøte til Excel eller CSV, klart for regnskapsføreren eller lønnskontoret. Lønnskjøringen blir en rask operasjon.',
      },
      {
        title: 'Rørleggerne dine er beskyttet',
        desc: 'En rapport som kan etterprøves gir teknikeren noe å møte grunnløse beskyldninger med, om arbeid som ikke er utført eller materialer som ikke er brukt.',
      },
    ],
  },
  cta_mid: {
    title: 'Vil du se hvordan det fungerer på et ekte rørleggeroppdrag?',
    body: 'Prøv det på et ekte oppdrag, fra oppdraget opprettes til rapporten kunden mottar: 14 dager gratis, uten kredittkort.',
    cta: 'Prøv gratis i 14 dager',
  },
  trust: {
    title: 'I rapportene våre kan man se hver endring, selv om du gjør den eller vi gjør den.',
    body: 'GeoTapp-rapportene lages av systemet i det øyeblikket oppdraget utføres. Når rapporten er forseglet, brytes forseglingen hvis noen retter et klokkeslett eller flytter et bilde, og kontrollen melder fra om det.',
    badge: 'Kan kontrolleres av hvem som helst, uten tilgang til kontoen din',
  },
  testimonial: {
    quote: 'Før brukte jeg timer på å forklare oppdragene for kundene. Nå sender jeg rapporten, og kunden kontrollerer den selv.',
    author: 'Roberto C.',
    role: 'Eier, rørleggerfirma og varmeinstallasjoner',
  },
  faq: {
    title: 'Ofte stilte spørsmål',
    subtitle: 'Det rørleggere spør oss om oftest før de kommer i gang.',
    items: [
      {
        q: 'Er GeoTapp egnet som app for rørleggere og varmeinstallatører?',
        a: 'Ja. GeoTapp brukes av rørleggere og varmeinstallatører til å styre oppdrag, rapporter, timer og fotobevis av anleggene. Det fungerer både for akuttoppdrag og for planlagt vedlikehold.',
      },
      {
        q: 'Kan jeg bruke GeoTapp til å dokumentere rørleggeroppdrag og varmeoppdrag?',
        a: 'Ja. Teknikeren tar bilder før og etter oppdraget fra appen. Hvert bilde knyttes til GPS, tidsstempel og oppdrag og tas med i en rapport der hver endring kan oppdages.',
      },
      {
        q: 'Håndterer GeoTapp både akuttoppdrag og planlagt vedlikehold?',
        a: 'Ja. Hver type oppdrag, akutt, vedlikehold, ferdigstillelse, har sitt eget oppdrag i GeoTapp. Historikken for hvert anlegg er alltid tilgjengelig med alle fotobevisene.',
      },
    ],
  },
  cta: {
    title: 'Hvert oppdrag som er gjort godt, fortjener dokumentasjon. GeoTapp lager den.',
    subtitle: 'Rapporter som kan etterprøves, posisjon ved stemplingene, forseglede bilder i rapporten.',
    primary: 'Prøv gratis i 14 dager',
    secondary: 'Se priser',
  },
  pricing_hint: {
    label: 'TimeTracker-plasser fra',
    per: 'per ansatt per måned, pluss Flow-planen fra 39 € per måned',
    note: 'Gratis prøveperiode i 14 dager',
  },
  schema_sector_name: 'Rørleggere',
  schema_faq: [
    {
      question: 'Fungerer GeoTapp som app for rørleggere og varmeinstallatører?',
      answer: 'Ja. GeoTapp er appen for rørleggere og varmeinstallatører som registrerer hvert oppdrag med GPS, bilder og registrerte klokkeslett. Teknikeren stempler i felt, kontoret ser alt så snart det kommer inn, og kunden får en forseglet rapport.',
    },
    {
      question: 'Hvordan forsegler jeg et rørleggeroppdrag med GeoTapp?',
      answer: 'Teknikeren registrerer start- og sluttidspunkt med posisjon, bilder av anlegget før og etter og tekniske notater om materialene som er brukt i GeoTapp. Systemet lager en forseglet rapport som kunden kan kontrollere selv.',
    },
    {
      question: 'Håndterer GeoTapp akuttoppdrag og planlagt vedlikehold?',
      answer: 'Ja. Både akuttoppdrag og periodisk vedlikehold håndteres i den samme appen. Hvert oppdrag gir en historikk med fotobevis og klokkeslett og posisjoner registrert ved stemplingene.',
    },
    {
      question: 'Blir GeoTapp-rapportene godtatt ved en tvist?',
      answer: 'GeoTapp-rapportene er forseglet med GPS, tidsstempel og fotobevis. Kunden kontrollerer dem selv. De hjelper til å vise at dokumentet ikke er endret; alene er de verken et absolutt bevis for det som skjedde eller juridisk rådgivning.',
    },
  ],
};

export default content;
