import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App for installatører og rørleggere | GeoTapp',
    description: 'GeoTapp for installatører og rørleggere: arbeidsrapporter med posisjon og foto, fotodokumentasjon og rapporter der enhver endring kan oppdages. Prøv gratis.',
  },
  hero: {
    badge: 'App for installatører, rørleggere og varmeinstallatører',
    h1_line1: 'Bestrider kunden timene?',
    h1_line2: 'Vis ham arbeidsrapporten med GPS.',
    subtitle: 'Teknikerne dine stempler fra smarttelefonen med ett trykk. Systemet lager en arbeidsrapport med registrert posisjon og foto, og enhver endring kan oppdages. Når kunden spør «hvor lang tid brukte dere?», har du svaret klart.',
    cta_primary: 'Prøv gratis i 14 dager',
    cta_note: 'Uten kredittkort. Du er i gang fra første dag.',
  },
  pain: {
    title: 'Problemet du allerede kjenner',
    items: [
      {
        title: 'Tvister om timer og oppdrag',
        desc: 'Kunden bestrider tidspunktet. Teknikeren har ingenting å vise til. Tvisten drar ut i uker og koster mer enn selve oppdraget.',
      },
      {
        title: 'Kontoret som jager folkene i felten',
        desc: 'Lederen ringer teknikerne for å høre hvor de er, hva de har gjort og når de blir ferdige. Hver samtale avbryter begge parter.',
      },
      {
        title: 'Ufullstendige eller bortkomne arbeidsrapporter',
        desc: 'Lapper, WhatsApp, e-poster: opplysningene kommer ufullstendige, for sent eller ikke i det hele tatt. Å lage oppgjøret i etterkant er en jobb i seg selv.',
      },
    ],
  },
  workflow: {
    title: 'Slik fungerer det i tre trinn',
    subtitle: 'Fra varebilen til kontoret uten telefonsamtaler.',
    steps: [
      {
        title: 'Teknikeren stempler på stedet',
        desc: 'Med GeoTapp TimeTracker registrerer teknikeren innstempling, pauser, utstempling, bilder og notater direkte fra smarttelefonen. Posisjonen tas bare ved stempling, slik GDPR legger opp til.',
      },
      {
        title: 'Kontoret ser alt så snart det kommer inn',
        desc: 'Flow mottar dataene med en gang. Lederen ser oppdrag, fremdrift, tildelt tekniker og fotodokumentasjon uten å ringe.',
      },
      {
        title: 'Rapporten er beviset du kan vise kunden',
        desc: 'Når oppdraget er ferdig, lages rapporten med ekte GPS-data og fotodokumentasjon. Enhver endring kan oppdages. Kunden kan selv kontrollere at den er ekte. Når det oppstår tvil, trenger du ikke forklare deg. Du kan vise.',
      },
    ],
  },
  differenza: {
    title: 'App for installatører: stempling eller verifiserbar dokumentasjon?',
    subtitle: 'De fleste appene registrerer klokkeslettet. GeoTapp lager verifiserbar dokumentasjon.',
    rows: [
      {
        label: 'Hva den registrerer',
        competitor: 'Tidspunkt for inn- og utstempling',
        geotapp: 'Tidspunkt + posisjon ved stempling + foto + utført arbeid',
      },
      {
        label: 'Hvem kan kontrollere',
        competitor: 'Bare kontoret ditt',
        geotapp: 'Du, byggherren eller en tredjepart, hver for seg',
      },
      {
        label: 'Ved en tvist',
        competitor: 'Bare ditt ord',
        geotapp: 'Forseglet rapport, enhver endring kan oppdages',
      },
      {
        label: 'Arbeidsrapport',
        competitor: 'Manuell eller ikke-eksisterende',
        geotapp: 'Lages automatisk med GPS og foto',
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
      'Kunden bestrider tidspunktet eller det utførte arbeidet.',
      'Teknikeren sier «jeg har gjort det». Kunden sier «det kan jeg ikke se».',
      'Du har ingenting i hånden. Diskusjonen varer i dagevis.',
      'Noen ganger mister du betalingen. Du mister alltid tid.',
    ],
    dopo: [
      'Kunden bestrider tidspunktet eller det utførte arbeidet.',
      'Du åpner rapporten: foto, GPS, klokkeslett, forsegling.',
      'Du sender den til ham. Diskusjonen er over på et minutt.',
      'Du har noe å vise. Teknikeren har også noe i hånden.',
    ],
  },

  scenario: {
    title: 'Et typisk tilfelle',
    body: 'Kunden bestrider sluttidspunktet og ber om avslag på fakturaen. Med GeoTapp åpner du rapporten for oppdraget: foto av det ferdige anlegget, tidspunkter og posisjoner for stemplingene og varigheten regnet ut automatisk, alt sammen laget fra teknikerens smarttelefon mens arbeidet ble utført.',
    resolution: 'I stedet for ord mot ord har du et dokument som kunden selv kan kontrollere.',
  },

  features: {
    title: 'App for installatører og rørleggere: arbeidsrapporter med GPS og fotodokumentasjon.',
    items: [
      {
        title: 'Verifiserbar stempling med GPS',
        desc: 'Hver innstempling, pause og utstempling er knyttet til posisjon, tidspunkt og oppdrag. Du kan vise den til kunden eller en tilsynsmyndighet når det er nødvendig.',
      },
      {
        title: 'Forseglet fotodokumentasjon',
        desc: 'Teknikeren tar bilder fra appen. Hvert bilde knyttes til oppdraget med GPS og tidsstempel og tas med i rapporten. Ingen kan endre dem uten at systemet oppdager det.',
      },
      {
        title: 'Eksport til lønnsbehandling',
        desc: 'Eksporter månedens registreringer til Excel eller CSV, klare for lønnsansvarlig.',
      },
      {
        title: 'Styring av oppdrag på flere byggeplasser',
        desc: 'Tildel oppdrag, følg fremdriften på hver byggeplass, og få beskjed hvis en vakt står åpen.',
      },
      {
        title: 'Automatiske digitale arbeidsrapporter',
        desc: 'Når oppdraget er ferdig, er rapporten allerede klar: timer, bilder og notater. Ingen papir, ingen samtaler. Kontoret sender den til kunden fra Flow med ett klikk.',
      },
      {
        title: 'Teknikerne dine har også et bevis',
        desc: 'En verifiserbar rapport gir teknikeren noe i hånden mot ubegrunnede beskyldninger. Den som jobber godt, kan vise det med data. Ingen gråsone mellom felt og kontor.',
      },
    ],
  },

  cta_mid: {
    title: 'Vil du se hvordan det fungerer på et ekte oppdrag?',
    body: 'Vi viser deg hele forløpet: fra oppdraget opprettes til arbeidsrapporten kunden mottar.',
    cta: 'Prøv gratis i 14 dager',
  },

  trust: {
    title: 'Rapportene våre: enhver endring kan oppdages. Verken av deg eller av oss.',
    body: 'GeoTapp-rapportene lages av systemet mens oppdraget utføres. Når rapporten er forseglet, brytes forseglingen hvis noen retter et klokkeslett eller flytter et bilde, og kontrollen melder fra. Den som mottar rapporten, kunde eller rådgiver, kan kontrollere den selv.',
    badge: 'Kan kontrolleres av hvem som helst, uten tilgang til kontoen din',
  },
  testimonial: {
    quote: 'Før brukte vi timer på å samle inn lapper fra felten. Nå er arbeidsrapporten allerede klar når teknikeren er tilbake ved varebilen.',
    author: 'Marco R.',
    role: 'Driftsleder, installasjon i bolig og næringsbygg',
  },
  faq: {
    title: 'Ofte stilte spørsmål',
    subtitle: 'Det vi oftest blir spurt om før dere kommer i gang.',
    items: [
      {
        q: 'Passer GeoTapp som programvare for installatører og servicefolk?',
        a: 'Ja. GeoTapp hjelper installatører, elektrikere, rørleggere og servicefolk med å styre oppdrag, arbeidsrapporter, timer, reiser og dokumentasjon av utført arbeid mellom felt og kontor.',
      },
      {
        q: 'Kan jeg bruke GeoTapp til arbeidsrapporter og fotodokumentasjon?',
        a: 'Ja. TimeTracker samler bilder, notater og verifiserbare stemplinger i felten, mens Flow knytter alt til oppdraget og den operative historikken.',
      },
      {
        q: 'Hjelper GeoTapp med å få færre tvister om timer og utført arbeid?',
        a: 'Det er et av de viktigste formålene: tider, posisjon, notater og fotodokumentasjon gjør det tydeligere og lettere å vise hva som skjedde under oppdraget.',
      },
    ],
  },
  cta: {
    title: 'Arbeidet er utført. Nå skal du kunne vise det.',
    subtitle: 'GeoTapp lager verifiserbar dokumentasjon for hvert oppdrag, forseglede rapporter som kunden selv kan kontrollere.',
    primary: 'Prøv gratis i 14 dager',
    secondary: 'Se prisene',
  },
  pricing_hint: {
    label: 'TimeTracker-plasser fra',
    per: 'per ansatt per måned, pluss Flow-abonnement fra 39 € per måned',
    note: 'Gratis prøveperiode i 14 dager',
  },

  schema_sector_name: 'Installatører',
  schema_faq: [
    {
      question: 'Fungerer GeoTapp for rørleggere og varmeinstallatører som er på farten?',
      answer: 'Ja. GeoTapp er appen for installatører og rørleggere, laget for dem som jobber på byggeplasser og i private hjem. Med den integrerte håndteringen av arbeidsrapporter registrerer teknikerne oppdrag, bilder og timer direkte fra smarttelefonen, uten å måtte tilbake til kontoret.',
    },
    {
      question: 'Hvordan dokumenterer jeg et serviceoppdrag eller en installasjon?',
      answer: 'Når oppdraget er ferdig, registrerer teknikeren i GeoTapp: start- og sluttidspunkt med posisjon, bilder av det utførte arbeidet og tekniske notater. Systemet lager en forseglet rapport som kunden selv kan kontrollere.',
    },
    {
      question: 'Kan jeg bruke GeoTapp til å styre flere installasjonsteam på forskjellige byggeplasser?',
      answer: 'Ja. Med GeoTapp Flow kan eieren koordinere flere team, tildele oppdrag, følge status på oppdragene og samle fotodokumentasjon fra alle aktive byggeplasser så snart den kommer inn.',
    },
    {
      question: 'Kan rapportene brukes hvis kunden bestrider noe?',
      answer: 'GeoTapp-rapportene er forseglet med posisjon, tidsstempel og fotodokumentasjon. Kunden kontrollerer dem selv. De hjelper med å vise at dokumentet ikke er endret; alene er de verken et absolutt bevis for det som skjedde eller juridisk rådgivning.',
    },
    {
      question: 'Overholder GeoTapp GDPR når det gjelder teknikernes posisjon?',
      answer: 'Det er bygget for å holde seg innenfor rammene: posisjonen registreres bare når teknikeren stempler eller tar et bevisbilde, aldri løpende, og informasjonen til de ansatte signeres i appen før første stempling. Resten (for eksempel avtale med tillitsvalgte eller tillatelse der det kreves) er arbeidsgiverens ansvar.',
    },
  ],
};

export default content;
