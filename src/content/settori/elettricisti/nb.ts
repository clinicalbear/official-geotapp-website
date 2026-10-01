import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App for elektrikere: rapport med tid, posisjon og bilder',
    description: 'Ett trykk ved ankomst, ett ved avreise, bilder av sikringsskapet lagt ved oppdraget. Rapporten er klar når du kjører videre. 14 dager gratis.',
  },
  hero: {
    badge: 'App for elektrikere og el-installatører',
    h1_line1: 'App for elektrikere:',
    h1_line2: 'GPS-rapporter, fotobevis og færre tvister.',
    subtitle: 'GeoTapp registrerer hvert elektrooppdrag med GPS, bilder og registrerte klokkeslett. Bestrider kunden noe? Du viser rapporten i stedet for å diskutere.',
    cta_primary: 'Prøv gratis i 14 dager',
    cta_note: 'Prøveperioden binder deg ikke til noe. Ikke noe kredittkort.',
  },
  pain: {
    title: 'Problemet som alle elektrofirmaer kjenner godt',
    items: [
      {
        title: 'Kunden nekter for oppdraget eller klokkeslettet',
        desc: 'Kunden sier at teknikeren ikke var der, eller at anlegget ikke ble ferdig. Uten dokumentasjon som kan etterprøves, drar tvisten ut i flere uker.',
      },
      {
        title: 'Ingen dokumentasjon av anlegget etter oppdraget',
        desc: 'Teknikeren er ferdig med jobben, men det finnes verken bilder eller tekniske notater. Å rekonstruere hva som ble gjort, blir umulig.',
      },
      {
        title: 'Kontoret vet ikke hvor teknikerne er',
        desc: 'Telefonsamtaler, meldinger, usikkerhet. Hver gang du skal gi en kunde en oppdatering om fremdriften, må du først få tak i teknikeren.',
      },
    ],
  },
  workflow: {
    title: 'Slik fungerer det i tre trinn',
    subtitle: 'Fra arbeidsstedet til kontoret uten telefonsamtaler.',
    steps: [
      {
        title: 'Teknikeren registrerer oppdraget på stedet',
        desc: 'Med GeoTapp TimeTracker stempler han inn, tar pauser og stempler ut med posisjon, tar bilder av anlegget og legger til tekniske notater fra smarttelefonen.',
      },
      {
        title: 'Kontoret ser alt så snart det kommer inn',
        desc: 'GeoTapp Flow mottar dataene så snart telefonen har dekning. Lederen ser oppdrag, tildelt tekniker, fremdrift og fotobevis uten å ringe.',
      },
      {
        title: 'Rapporten er dokumentasjonen din',
        desc: 'Når oppdraget er ferdig, lager systemet en forseglet rapport: klokkeslett med GPS, bilder av anlegget, tekniske notater. Hver endring kan oppdages. Kunden kan kontrollere den selv.',
      },
    ],
  },
  differenza: {
    title: 'App for elektrikere: registrering eller dokumentasjon som kan etterprøves?',
    subtitle: 'De fleste appene registrerer bare klokkeslettet. GeoTapp lager dokumentasjon som kan etterprøves.',
    rows: [
      {
        label: 'Hva som registreres',
        competitor: 'Klokkeslett for inn- og utstempling',
        geotapp: 'Klokkeslett + posisjon ved stemplingen + bilder av anlegget + tekniske notater',
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
      'Kunden nekter for at anlegget er ferdig.',
      'Du har verken bilder eller klokkeslett som kan etterprøves.',
      'Diskusjonen drar ut i flere uker. Du risikerer å ikke bli betalt.',
      'Teknikeren har ingenting å forsvare seg med.',
    ],
    dopo: [
      'Kunden nekter for at anlegget er ferdig.',
      'Du åpner rapporten: bilder med GPS av anlegget, forseglet klokkeslett, signatur.',
      'Du sender den til kunden, og kunden kontrollerer den selv.',
      'Du har dokumentasjon å vise frem. Teknikeren har også noe i hånden.',
    ],
  },
  scenario: {
    title: 'Et typisk tilfelle',
    body: 'En kunde bestrider at elanlegget er ferdig og nekter å betale den siste fakturaen. Med GeoTapp åpner du rapporten: bilde av det ferdige sikringsskapet, klokkeslett med GPS for start og slutt på arbeidet, teknikerens tekniske notater, alt laget automatisk fra smarttelefonen på stedet.',
    resolution: 'I stedet for ord mot ord finnes det et dokument som kunden kan kontrollere selv.',
  },
  cosa_cambia: {
    title: 'Hva som faktisk endrer seg, fra første oppdrag',
    items: [
      {
        title: 'Om kvelden er det ikke noe å skrive av lenger',
        desc: 'Timene går ikke via en lapp, så en melding, så et økonomisystem. De oppstår allerede på riktig oppdrag, med posisjon og klokkeslett fra da de ble utført, og ved månedsslutt er eksporten til lønn klar uten at noen skriver dem av på nytt.',
      },
      {
        title: 'Rapporten slutter å være en diskusjon',
        desc: 'Når oppdragsgiveren spør hvor mange timer som er brukt på anlegget hans, er svaret ikke teknikerens ord mot hans, men et forseglet dokument med bilder av sikringsskapet, klokkeslett og tekniske notater, som han kan kontrollere selv uten å logge inn på kontoen din.',
      },
      {
        title: 'Teknikeren har også noe i hånden',
        desc: 'Det gjelder begge veier. Den som gjør jobben godt og får høre at han kom for sent, har dokumentasjon på klokkeslettet og slipper å huske hva han gjorde for tre uker siden for å forsvare seg.',
      },
    ],
  },
  features: {
    title: 'App for elektrikere: dette får du i GeoTapp.',
    items: [
      {
        title: 'Stempling med GPS som kan etterprøves',
        desc: 'Hver inngang, pause og utgang registreres med posisjon, tidsstempel og oppdrag. Kan vises frem for kunden når det trengs.',
      },
      {
        title: 'Fotobevis av anlegget',
        desc: 'Teknikeren tar bilder fra appen når oppdraget er ferdig. Hvert bilde knyttes til GPS og tidsstempel: hver senere endring kan oppdages.',
      },
      {
        title: 'Automatiske digitale rapporter',
        desc: 'Når jobben er ferdig, er rapporten allerede klar: timer, bilder og tekniske notater. Kontoret sender den til kunden fra Flow med ett klikk.',
      },
      {
        title: 'Styring av oppdrag på flere byggeplasser',
        desc: 'Tildel oppdrag og følg fremdriften oppdrag for oppdrag.',
      },
      {
        title: 'Eksport av oppmøte til lønn',
        desc: 'Eksporter månedens oppmøte til Excel eller CSV, klart for regnskapsføreren eller lønnskontoret. Lønnskjøringen blir en rask operasjon.',
      },
      {
        title: 'Elektrikerne dine er beskyttet',
        desc: 'En rapport som kan etterprøves gir teknikeren noe å møte grunnløse beskyldninger med. Den som gjør jobben godt, viser det med data.',
      },
    ],
  },
  cta_mid: {
    title: 'Vil du se hvordan det fungerer på et ekte elektrooppdrag?',
    body: 'Prøv det på et ekte oppdrag, fra oppdraget opprettes til rapporten kunden mottar: 14 dager gratis, uten kredittkort.',
    cta: 'Prøv gratis i 14 dager',
  },
  trust: {
    title: 'I rapportene våre kan man se hver endring, selv om du gjør den eller vi gjør den.',
    body: 'GeoTapp-rapportene lages av systemet i det øyeblikket oppdraget utføres. Når rapporten er forseglet, brytes forseglingen hvis noen retter et klokkeslett eller flytter et bilde, og kontrollen melder fra om det.',
    badge: 'Kan kontrolleres av hvem som helst, uten tilgang til kontoen din',
  },
  testimonial: {
    quote: 'Med GeoTapp registrerer teknikerne mine anlegget så snart det er ferdig. Når en kunde bestrider noe, har vi rapporten å vise frem.',
    author: 'Luca M.',
    role: 'Eier, sivile og industrielle elektroinstallasjoner',
  },
  faq: {
    title: 'Ofte stilte spørsmål',
    subtitle: 'Det elektrikere spør oss om oftest før de kommer i gang.',
    items: [
      {
        q: 'Er GeoTapp egnet som app for elektrikere?',
        a: 'Ja. GeoTapp brukes av elektrikere og installatører til å styre oppdrag, rapporter, timer og fotobevis av anleggene. Det fungerer både for arbeid på ett enkelt oppdrag og for flere byggeplasser samtidig.',
      },
      {
        q: 'Kan jeg bruke GeoTapp til å dokumentere elanlegg og oppdrag?',
        a: 'Ja. Teknikeren tar bilder fra appen under eller etter oppdraget. Hvert bilde knyttes til GPS, tidsstempel og oppdrag og tas med i en rapport der hver endring kan oppdages.',
      },
      {
        q: 'Hjelper GeoTapp med å løse innsigelser fra kunder?',
        a: 'Det er nettopp hovedbruken: klokkeslett med GPS, fotobevis og forseglet rapport gir deg et dokument å vise frem når en innsigelse er ubegrunnet.',
      },
      {
        q: 'Passer det også som app for installatører, ikke bare for elektrikere?',
        a: 'Ja. Elanlegg, rørlegging og varme, klimaanlegg, brannsikring, solceller. Faget er forskjellig, problemet er det samme: å vise hvem som var hvor, hvor lenge og hva som ble stående ferdig. Rapporten ser lik ut for alle.',
      },
      {
        q: 'Hvordan fungerer rapportene for installatører?',
        a: 'Teknikeren avslutter oppdraget fra telefonen, og rapporten er allerede skrevet, med timer, posisjon, bilder av anlegget og tekniske notater. Det er ikke noe skjema som må fylles ut om kvelden, og det er nettopp derfor rapportene kommer for sent eller ikke i det hele tatt.',
      },
      {
        q: 'Kan vi slutte å samle inn timer og bilder på WhatsApp?',
        a: 'Det er grunnen til at de fleste firmaene kommer til oss. I en chat forsvinner timene mellom meldingene, bildene komprimeres, og ved månedsslutt må noen skrive alt av for hånd. Her oppstår dataene allerede knyttet til oppdraget og personen.',
      },
    ],
  },
  cta: {
    title: 'Hvert anlegg som er gjort godt, fortjener dokumentasjon. GeoTapp lager den.',
    subtitle: 'Rapporter som kan etterprøves, posisjon ved stemplingene, forseglede bilder i rapporten.',
    primary: 'Prøv gratis i 14 dager',
    secondary: 'Se priser',
  },
  pricing_hint: {
    label: 'TimeTracker-plasser fra',
    per: 'per ansatt per måned, pluss Flow-planen fra 39 € per måned',
    note: 'Gratis prøveperiode i 14 dager',
  },
  schema_sector_name: 'Elektrikere',
  schema_faq: [
    {
      question: 'Fungerer GeoTapp som app for elektrikere?',
      answer: 'Ja. GeoTapp er appen for elektrikere og installatører som registrerer hvert oppdrag med GPS, bilder og registrerte klokkeslett. Teknikeren stempler i felt, kontoret ser alt så snart det kommer inn, og kunden får en forseglet rapport.',
    },
    {
      question: 'Hvordan forsegler jeg et elektrooppdrag med GeoTapp?',
      answer: 'Teknikeren registrerer start- og sluttidspunkt med posisjon, bilder av anlegget og tekniske notater i GeoTapp. Systemet lager en forseglet rapport som kunden kan kontrollere selv.',
    },
    {
      question: 'Hjelper GeoTapp med å styre flere elektrikerlag på ulike byggeplasser?',
      answer: 'Ja. Med GeoTapp Flow kan lederen koordinere flere lag, tildele oppdrag, følge status på oppdragene og samle fotobevis fra alle aktive byggeplasser så snart de er lastet opp.',
    },
    {
      question: 'Blir GeoTapp-rapportene godtatt ved en tvist?',
      answer: 'GeoTapp-rapportene er forseglet med GPS, tidsstempel og fotobevis. Kunden kontrollerer dem selv. De hjelper til å vise at dokumentet ikke er endret; alene er de verken et absolutt bevis for det som skjedde eller juridisk rådgivning.',
    },
    {
      question: 'Fungerer GeoTapp også som app for installatører?',
      answer: 'Ja. I tillegg til elanlegg dekker den rørlegging og varme, klimaanlegg, brannsikring og solceller. Teknikeren registrerer oppdraget i felt med GPS og bilder, og rapporten lages på samme måte for hver type anlegg.',
    },
    {
      question: 'Sporer GeoTapp teknikernes posisjon i løpet av dagen?',
      answer: 'Nei. Posisjonen registreres bare når teknikeren stempler (inn, pause, ut) eller tar et bevisbilde. Mellom to stemplinger registreres ingenting automatisk: appen ber heller ikke om tillatelse til å lese posisjonen i bakgrunnen.',
    },
  ],
};

export default content;
