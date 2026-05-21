import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App for Rørleggere og VVS-teknikere | GeoTapp — GPS, Rapporter & Dokumentasjon',
    description: 'GeoTapp er appen for rørleggere og VVS-teknikere: GPS-verifiserte rapporter, bilder av installasjoner og uforanderlig dokumentasjon. Løs tvister med ekte bevis. Prøv gratis.',
  },
  hero: {
    badge: 'App for Rørleggere og VVS-teknikere',
    h1_line1: 'App for rørleggere og VVS-teknikere:',
    h1_line2: 'GPS-rapporter, fotobevis og null tvister.',
    subtitle: 'GeoTapp registrerer hvert oppdrag på kjeler og varmeanlegg med GPS, bilder og verifiserbare tidsstempler. Kunden nekter utskiftede deler? Vis rapporten — ingen diskusjon nødvendig. Dine teknikere er beskyttet, faktureringen din også.',
    cta_primary: 'Kom i gang gratis!',
    cta_note: 'Ingen binding. Svar innen 12 arbeidstimer.',
  },
  pain: {
    title: 'Problemet som enhver VVS-bedrift kjenner godt',
    items: [
      {
        title: 'Kunden nekter utskiftede deler på kjelen',
        desc: 'Han sier at du installerte andre komponenter enn avtalt, eller at anlegget allerede var slik. Uten fotodokumentasjon blir tvisten ord mot ord.',
      },
      {
        title: 'Ingen dokumentasjon av installasjonen etter oppdraget',
        desc: 'Teknikeren avsluttet reparasjonen, men det er verken fotoregistrering eller teknisk notat. Hvis feilen returnerer, er det umulig å rekonstruere hva som ble gjort.',
      },
      {
        title: 'Akuttoppdrag er ikke sporbare',
        desc: 'Varmefeil oppstår til umulige tider. Teknikeren rykker ut, løser problemet, men det er ingenting igjen å vise kunden eller forsikringen.',
      },
    ],
  },
  workflow: {
    title: 'Slik fungerer det i tre trinn',
    subtitle: 'Fra jobben til kontoret — uten telefonsamtaler.',
    steps: [
      {
        title: 'Teknikeren registrerer oppdraget på stedet',
        desc: 'Med GeoTapp TimeTracker stemplet han inn og ut med GPS, fotograferer anlegget og kjelen og legger til notater om utskiftede deler fra sin smarttelefon.',
      },
      {
        title: 'Kontoret ser alt i sanntid',
        desc: 'GeoTapp Flow mottar data øyeblikkelig. Den ansvarlige ser saken, tildelt tekniker, fremgang og fotodokumentasjon uten å ringe.',
      },
      {
        title: 'Rapporten er ditt bevis',
        desc: 'Etter oppdraget genererer systemet en forseglet rapport: GPS-tidsstempel, anleggsbilder og deler, tekniske notater. Uforanderlig. Kunden kan bekrefte den selvstendig.',
      },
    ],
  },
  differenza: {
    title: 'App for rørleggere: tidsregistrering eller jobbsertifisering?',
    subtitle: 'De fleste apper registrerer innstempling. GeoTapp produserer verifiserbar dokumentasjon.',
    rows: [
      {
        label: 'Hva det registrerer',
        competitor: 'Inn- og utstemplingstid',
        geotapp: 'Tid + verifisert GPS + anleggsbilder + utskiftede deler',
      },
      {
        label: 'Ved tvist',
        competitor: 'Data ikke forsvarbar',
        geotapp: 'Forseglet rapport, uforanderlig',
      },
      {
        label: 'Jobbdokumentasjon',
        competitor: 'Manuell eller fraværende',
        geotapp: 'Autogenerert med GPS og bilder',
      },
      {
        label: 'Hvem kan bekrefte',
        competitor: 'Bare ditt kontor',
        geotapp: 'Du, oppdragsgiveren, en tredjepart',
      },
      {
        label: 'GDPR-samsvar',
        competitor: 'Ofte å bekrefte',
        geotapp: 'Compliant by design, skjemaer inkludert',
      },
    ],
  },
  prima_dopo: {
    title: 'Før GeoTapp. Etter GeoTapp.',
    prima: [
      'Kunden nekter at ventilen ble byttet ut.',
      'Du har ingen bilder og ingen dokumenterte deler.',
      'Diskusjonen pågår i uker. Du risikerer å ikke bli betalt.',
      'Teknikeren har ingenting i hånden for å forsvare seg.',
    ],
    dopo: [
      'Kunden nekter at ventilen ble byttet ut.',
      'Du åpner rapporten: bilde av fjernet del, av den nye monterte, GPS-tidsstempel, tekniske notater.',
      'Du sender den. Tvisten slutter på ett minutt.',
      'Betalingen er sikret. Teknikeren er beskyttet.',
    ],
  },
  scenario: {
    title: 'Virkelig tilfelle',
    body: 'En kunde bestrider utskiftingen av en kjelbrennere og nekter å betale fakturaen. Med GeoTapp åpner du rapporten: bilde av den defekte, fjernede delen, den nye installerte, GPS-tidsstempel for oppdraget og tekniske notater fra teknikeren — alt automatisk generert fra smarttelefonen på stedet.',
    resolution: 'Tvisten faller. Fakturaen betales i sin helhet.',
  },
  features: {
    title: 'App for rørleggere og VVS-teknikere: hva du finner i GeoTapp.',
    items: [
      {
        title: 'Verifiserbar GPS-tidsstempling',
        desc: 'Hvert besøk og avreise fra anlegget registreres med sted, tidsstempel og sak. Forsvarbar overfor kunder og forsikringer.',
      },
      {
        title: 'Forseglede anleggsbilder',
        desc: 'Teknikeren fotograferer fra appen under og etter oppdraget. Hvert bilde er knyttet til GPS og tidsstempel — uforanderlig etter generering.',
      },
      {
        title: 'Automatiske digitale jobbrapporter',
        desc: 'Etter avslutning av arbeidet er rapporten klar: timer, bilder, utskiftede deler og signatur. Teknikeren sender den til kunden direkte fra appen.',
      },
      {
        title: 'Saks- og akutthåndtering',
        desc: 'Tildel akuttoppdrag, overvåk fremgang og motta varsler hvis en aktivitet ikke fullføres i tide.',
      },
      {
        title: 'Lønnseksport',
        desc: 'Eksporter månedlig fremmøte i formater kompatible med norske lønnssystemer. Lønnsbehandling blir en rask operasjon.',
      },
      {
        title: 'Dine teknikere er beskyttet',
        desc: 'En verifiserbar rapport beskytter teknikeren mot ubegrunnede anklager om deler eller timer. Den som arbeider godt beviser det med data.',
      },
    ],
  },
  cta_mid: {
    title: 'Vil du se hvordan det fungerer på et ekte VVS-oppdrag?',
    body: 'Vi viser deg den komplette flyten: fra åpning av saken til rapporten kunden mottar. På 20 minutter vet du om det er noe for deg.',
    cta: 'Kom i gang gratis!',
  },
  trust: {
    title: 'Rapportene våre kan ikke endres. Ikke av deg. Ikke av oss.',
    body: 'GeoTapp-rapporter genereres av systemet i øyeblikket for oppdraget. Det er ingen panel for å "korrigere" et tidspunkt eller flytte et bilde. Dataene er som de er — digitalt signert, med ekte GPS.',
    badge: 'Verifiserbar av alle — uten tilgang til din konto',
  },
  testimonial: {
    quote: 'Med GeoTapp fotograferer mine teknikere anlegget før og etter hvert oppdrag. Tvister om deler har forsvunnet. Fakturaer blir betalt.',
    author: 'Marco S.',
    role: 'Eier, bolig- og næringsvarmeinstallasjoner',
  },
  faq: {
    title: 'Ofte stilte spørsmål',
    subtitle: 'Hva rørleggere spør oss om mest før de starter.',
    items: [
      {
        q: 'Er GeoTapp egnet som app for rørleggere og VVS-teknikere?',
        a: 'Ja. GeoTapp brukes av rørleggere og VVS-teknikere for å håndtere oppdrag på kjeler og anlegg med GPS-rapporter, bilder og verifiserbare timer.',
      },
      {
        q: 'Kan jeg bruke GeoTapp til å dokumentere utskifting av deler på kjeler?',
        a: 'Ja. Teknikeren fotograferer fra appen den fjernede og den installerte delen. Hvert bilde er knyttet til GPS, tidsstempel og sak — inkludert i den uforanderlige rapporten.',
      },
      {
        q: 'Hjelper GeoTapp med å løse kundetvister om installasjoner?',
        a: 'Det er akkurat det primære brukstilfellet: GPS-tidsstempel, fotodokumentasjon av deler og en forseglet rapport gjør enhver ubegrunnet tvist løsbar på noen minutter.',
      },
    ],
  },
  cta: {
    title: 'Hvert godt utført VVS-oppdrag fortjener dokumentasjon. GeoTapp genererer den.',
    subtitle: 'Verifiserbare rapporter, ekte GPS, forseglede bilder. Arbeidet ditt er forsvarbart.',
    primary: 'Kom i gang gratis!',
    secondary: 'Se priser',
  },
  pricing_hint: {
    label: 'Fra',
    per: 'operatør/måned',
    note: '14 dagers gratis prøveperiode',
  },
  schema_sector_name: 'Rørleggere og VVS-teknikere',
  schema_faq: [
    {
      question: 'Fungerer GeoTapp som app for rørleggere og VVS-teknikere?',
      answer: 'Ja. GeoTapp er appen for rørleggere og VVS-teknikere som registrerer hvert oppdrag på kjeler og anlegg med GPS, bilder og verifiserbare tidsstempler. Teknikeren stemplet inn fra stedet, kontoret ser alt i sanntid og kunden mottar en forseglet rapport.',
    },
    {
      question: 'Hvordan sertifiserer jeg et kjeloppdrag med GeoTapp?',
      answer: 'Teknikeren registrerer start og slutt med verifisert GPS, fotograferer utskiftede deler og legger til tekniske notater. Systemet genererer en forseglet rapport som kunden kan bekrefte selvstendig.',
    },
    {
      question: 'Håndterer GeoTapp flere team av VVS-teknikere på forskjellige oppdrag?',
      answer: 'Ja. GeoTapp Flow lar eieren koordinere flere team, tildele akuttoppdrag, følge saksstatus og samle fotodokumentasjon fra alle aktive steder i sanntid.',
    },
    {
      question: 'Aksepteres GeoTapp-rapporter ved tvister om varmeinstallasjoner?',
      answer: 'GeoTapp-rapporter er forseglet med GPS, tidsstempler og fotodokumentasjon. De har blitt brukt med suksess til å løse tvister om arbeid som ble nektet av sluttkunden.',
    },
  ],
};

export default content;
