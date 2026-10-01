import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App for installatører: styring av oppdrag med GPS | GeoTapp',
    description: 'Dokumenter oppdrag, timer og materialer for installatører, med posisjon ved stemplingene. Automatisk dokumentasjon av utført arbeid, klar til å vise frem når noen bestrider noe. Prøv GeoTapp gratis.',
  },
  hero: {
    badge: 'App for installatører og teknikere',
    h1_line1: 'Hvert oppdrag dokumentert,',
    h1_line2: 'hver time registrert.',
    subtitle: 'For elektro-, rørlegger-, varme- og installasjonsfirmaer. GeoTapp kobler Flow og TimeTracker for å registrere GPS, timer og bilder for hvert oppdrag, fra varebilen til kontoret uten telefonsamtaler.',
    cta_primary: 'Prøv GeoTapp gratis i 14 dager',
    cta_note: 'Prøveperioden binder deg ikke til noe. Ikke noe kredittkort kreves.',
  },
  pain: {
    title: 'Problemer vi løser hver dag',
    items: [
      {
        title: 'Kundene bestrider timene på oppdraget',
        desc: 'Stemplinger med GPS og tidsstempel som dokumentasjon som kan etterprøves. Dataene forsegles i øyeblikket oppdraget utføres: hver senere endring kan oppdages.',
      },
      {
        title: 'Du jager teknikerne for å vite hvor de er',
        desc: 'Hver stempling fra teknikeren kommer rett inn i dashboardet, med klokkeslett og posisjon. Du vet hvor de har vært uten å ringe.',
      },
      {
        title: 'Ufullstendige rapporter, eller rapporter som aldri leveres',
        desc: 'Dataene kommer for sent, ufullstendige eller ikke i det hele tatt. Å rekonstruere timer og oppdrag ved månedsslutt er en egen jobb som koster tid og penger.',
      },
    ],
  },
  workflow: {
    title: 'Slik fungerer det',
    subtitle: 'Tre enkle trinn. Null papir. Null telefonsamtaler.',
    steps: [
      {
        title: 'Teknikeren stempler med GPS når oppdraget starter',
        desc: 'Åpner oppdraget fra smarttelefonen. GeoTapp registrerer GPS-koordinater, tidsstempel og bilder i øyeblikket: hver endring kan oppdages.',
      },
      {
        title: 'Timene registreres automatisk per oppdrag',
        desc: 'Hver arbeidet time knyttes til riktig oppdrag. Lederen ser, stempling for stempling, hvem som jobber hvor.',
      },
      {
        title: 'Kunderapporten lages uten at noen skriver noe',
        desc: 'Når oppdraget er ferdig, lager systemet en rapport med GPS, timer og forsegling. Kunden mottar den og kontrollerer den selv.',
      },
    ],
  },
  differenza: {
    title: 'App for installatører: stempling eller dokumentasjon som kan etterprøves?',
    subtitle: 'De fleste appene registrerer bare klokkeslettet. GeoTapp lager dokumentasjon som kan etterprøves.',
    rows: [
      {
        label: 'Hva som registreres',
        competitor: 'Klokkeslett for inn- og utstempling',
        geotapp: 'Klokkeslett + posisjon ved stemplingen + bilder + utført arbeid',
      },
      {
        label: 'Hvem kan kontrollere',
        competitor: 'Bare kontoret ditt',
        geotapp: 'Du, oppdragsgiveren, en tredjepart, uavhengig av hverandre',
      },
      {
        label: 'Ved en tvist',
        competitor: 'Bare ditt ord',
        geotapp: 'Forseglet rapport, hver endring kan oppdages',
      },
      {
        label: 'Rapport fra oppdraget',
        competitor: 'Manuell eller mangler',
        geotapp: 'Lages automatisk med GPS og bilder',
      },
      {
        label: 'GDPR',
        competitor: 'Ofte uklart',
        geotapp: 'Laget for å holde seg innenfor rammene i GDPR, skjemaer inkludert',
      },
    ],
  },
  prima_dopo: {
    title: 'Slik er det i dag. Slik er det med GeoTapp.',
    prima: [
      'Kunden bestrider sluttidspunktet for oppdraget og krever avslag.',
      'Teknikeren sier «jeg brukte 4 timer». Kunden sier «jeg ser bare 2».',
      'Du har ingen dokumentasjon. Diskusjonen drar ut i flere dager, og betalingen er i fare.',
      'Ved månedsslutt rekonstruerer du timer og oppdrag fra WhatsApp-meldinger.',
    ],
    dopo: [
      'Bestrider kunden? Du åpner rapporten: bilder, posisjon, klokkeslett, forsegling.',
      'Du sender den til kunden. Diskusjonen er over på ett minutt.',
      'Du har dokumentasjon å vise frem. Teknikeren har også noe i hånden.',
      'Ved månedsslutt er eksporten allerede klar, med timer og oppdrag samlet automatisk.',
    ],
  },
  features: {
    title: 'Funksjoner laget for installatører',
    items: [
      {
        title: 'Stempling med GPS som kan etterprøves',
        desc: 'Hver inngang, pause og utgang knyttes til posisjon, klokkeslett og oppdrag. Kan vises frem for kunden eller tilsynet når det trengs.',
      },
      {
        title: 'Forseglede fotobevis',
        desc: 'Teknikeren tar bilder fra appen. Hvert bilde knyttes til oppdraget med GPS og tidsstempel: hver endring etter at det er laget, kan oppdages.',
      },
      {
        title: 'Styring av oppdrag på flere byggeplasser',
        desc: 'Tildel oppdrag, følg fremdriften for hvert oppdrag og få en varsling hvis et skift blir stående åpent.',
      },
      {
        title: 'Automatiske digitale rapporter',
        desc: 'Når oppdraget er ferdig, er rapporten allerede klar: timer, bilder og notater. Ikke noe papir, ingen telefonsamtaler. Kontoret sender den til kunden fra Flow med ett klikk.',
      },
      {
        title: 'Eksport til lønn og fakturering',
        desc: 'Eksporter månedlig oppmøte og timer per oppdrag. Lønn og fakturering starter fra ferdige data, uten at noe skrives av på nytt.',
      },
      {
        title: 'Posisjon bare når det stemples',
        desc: 'Geolokalisering laget for å holde seg innenfor rammene i GDPR: aldri løpende, og informasjonen til de ansatte signeres i appen før de stempler.',
      },
    ],
  },
  testimonial: {
    quote: 'Når en kunde bestrider timene, åpner vi rapporten med posisjon og bilder, og kunden kontrollerer den selv.',
    author: 'Roberto F.',
    role: 'Eier, installasjonsfirma, 20 teknikere',
  },
  faq: {
    title: 'Ofte stilte spørsmål',
    subtitle: 'Det vi blir spurt om oftest før folk kommer i gang.',
    items: [
      {
        q: 'Bestrider kundene timene på oppdraget?',
        a: 'Med GeoTapp får stemplingene med GPS tidsstempel i det øyeblikket oppdraget utføres, og hver endring kan oppdages. De er dokumentasjon som kan etterprøves for timene som er utført, når noen trekker dem i tvil.',
      },
      {
        q: 'Hvordan følger jeg flere lag på ulike oppdrag?',
        a: 'GeoTapp viser status på oppdragene på ett skjermbilde, oppdatert hver gang en tekniker stempler. Du ser hvem som har stemplet på hvilket oppdrag, uten å ringe.',
      },
      {
        q: 'Hvordan får jeg raskere fakturering av oppdragene?',
        a: 'GeoTapp lager automatisk eksporten av timer og oppdrag, klar for økonomisystemet. Ingenting å skrive av for hånd: færre feil, og faktureringen starter fra ferdige data.',
      },
    ],
  },
  cta: {
    title: 'Prøv GeoTapp gratis i 14 dager',
    subtitle: 'Prøveperioden binder deg ikke til noe. Ingen kredittkort kreves.',
    primary: 'Prøv gratis i 14 dager',
    secondary: 'Se priser',
  },
  pricing_hint: {
    label: 'TimeTracker-plasser fra',
    per: 'per ansatt per måned, pluss Flow-planen fra 39 € per måned',
    note: 'Gratis prøveperiode i 14 dager',
  },
  schema_sector_name: 'Installasjoner',
  schema_faq: [
    {
      question: 'Bestrider kundene timene på oppdraget?',
      answer: 'Med GeoTapp får stemplingene med GPS tidsstempel i det øyeblikket oppdraget utføres, og hver endring kan oppdages. De er dokumentasjon som kan etterprøves for timene som er utført, når noen trekker dem i tvil.',
    },
    {
      question: 'Hvordan følger jeg flere lag på ulike oppdrag?',
      answer: 'GeoTapp viser status på oppdragene på ett skjermbilde, oppdatert hver gang en tekniker stempler. Du ser hvem som har stemplet på hvilket oppdrag, uten å ringe.',
    },
    {
      question: 'Hvordan får jeg raskere fakturering av oppdragene?',
      answer: 'GeoTapp lager automatisk eksporten av timer og oppdrag, klar for økonomisystemet. Ingenting å skrive av for hånd: færre feil, og faktureringen starter fra ferdige data.',
    },
  ],
};

export default content;
