import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App for vedlikehold: team og oppdrag med GPS | GeoTapp',
    description:
      'Styr vedlikeholdsteam med GPS: oppdrag, vakter, dokumentasjon av utført service. Full historikk for hvert anlegg eller kundested. Prøv GeoTapp gratis.',
  },

  hero: {
    badge: 'App for vedlikeholdsteam',
    h1_line1: 'Vedlikeholdsteamet ditt,',
    h1_line2: 'hvert besøk dokumentert.',
    subtitle:
      'Registrer oppdragene, planlegg vaktene, og dokumenter hvert besøk med posisjonen ved stemplingen og bevisbilder. Full historikk for anlegg og kunder, uten manuell innskriving.',
    cta_primary: 'Prøv GeoTapp gratis i 14 dager',
    cta_note: 'Prøven binder deg ikke til noe. Uten kredittkort.',
  },

  pain: {
    title: 'Problemer vi løser hver dag',
    items: [
      {
        title: 'Hvordan dokumenterer du de periodiske oppdragene?',
        desc: 'Automatisk rapport med GPS, timer og bilder for hvert besøk. Historikken er fullstendig og kan hentes ut uten manuell innskriving.',
      },
      {
        title: 'Kommer teknikerne faktisk til tiden?',
        desc: 'Du ser det så snart teknikeren stempler, uten samtaler: ankomsttidspunkt og posisjon ligger allerede i Flow, for hvert sted.',
      },
      {
        title: 'Hvordan dokumenterer du overfor kundene at tjenesten er levert?',
        desc: 'Full historikk som kan hentes ut for hvert sted: datoer, timer, GPS og bilder. Kunden kontrollerer selv, uten tilgang til systemet ditt.',
      },
    ],
  },

  workflow: {
    title: 'Slik fungerer det',
    subtitle: 'Tre enkle trinn. Ingen papir. Ingen samtaler.',
    steps: [
      {
        title: 'Teknikeren stempler med GPS når han ankommer stedet',
        desc: 'Teknikeren åpner oppdraget fra smarttelefonen. GeoTapp registrerer tidspunkt og posisjon i det øyeblikket og bevisbilder. Mellom to stemplinger registrerer den ingenting automatisk.',
      },
      {
        title: 'Timene og oppdraget registreres automatisk',
        desc: 'De arbeidede timene knyttes til stedet og typen oppdrag. Lederen ser ved hver stempling status for hvert besøk.',
      },
      {
        title: 'Kunden mottar den forseglede rapporten',
        desc: 'Når oppdraget er ferdig, lager systemet en rapport med GPS, timer og forsegling. Kunden kontrollerer den selv, uten tilgang til administrasjonssystemet ditt.',
      },
    ],
  },

  features: {
    title: 'App for vedlikehold: hvert oppdrag dokumentert.',
    items: [
      {
        title: 'Tilstedeværelse med posisjon og tidspunkt',
        desc: 'Hver ankomst, pause og avgang registreres med posisjon, tidspunkt og tildelt sted og tas med i den forseglede rapporten. Du kan vise den til kunden eller en tilsynsmyndighet når det er nødvendig.',
      },
      {
        title: 'Vedlikeholdshistorikk per anlegg',
        desc: 'Hvert oppdrag er knyttet til stedet eller anlegget. Den samlede historikken kan ses og hentes ut, for deg og for kunden.',
      },
      {
        title: 'Automatiske og forseglede rapporter',
        desc: 'Når oppdraget er ferdig, lager systemet en forseglet rapport: timer, posisjoner, bilder og forsegling. Kunden kan selv kontrollere den.',
      },
      {
        title: 'Planlegging av vakter og team',
        desc: 'Tildel oppdrag, styr vaktene, og få beskjed hvis en vakt står åpen.',
      },
      {
        title: 'Fotodokumentasjon',
        desc: 'Teknikerne tar bilder direkte fra appen: før, under og etter oppdraget. Hvert bilde er knyttet til en posisjon og har tidsstempel.',
      },
      {
        title: 'Stempling med ett trykk',
        desc: 'Teknikeren stempler ankomsten med GPS, registrerer pausene og avslutter oppdraget med ett trykk. Hvert bilde som tas, forblir knyttet til oppdraget og tidspunktene.',
      },
    ],
  },

  testimonial: {
    quote:
      'Med GeoTapp er hvert vedlikeholdsoppdrag dokumentert, og vi sender kundene rapporten for hvert besøk.',
    author: 'Andrea L.',
    role: 'Vedlikeholdssjef, eiendomsdrift - Sentral-Italia',
  },

  faq: {
    title: 'Ofte stilte spørsmål',
    subtitle: 'Det vi oftest blir spurt om før dere kommer i gang.',
    items: [
      {
        q: 'Hvordan dokumenterer du de periodiske vedlikeholdsoppdragene?',
        a: 'GeoTapp lager automatisk en rapport for hvert besøk med GPS, timer og bilder. Historikken er fullstendig og kan hentes ut per anlegg eller kundested, uten manuell innskriving.',
      },
      {
        q: 'Kommer teknikerne faktisk til tiden?',
        a: 'Med GeoTapp ser du ankomsttidspunktet og posisjonen til hver tekniker i det øyeblikket vedkommende stempler. Ingen samtaler: opplysningen ligger allerede i Flow.',
      },
      {
        q: 'Hvordan dokumenterer jeg overfor kundene det leverte vedlikeholdet?',
        a: 'GeoTapp lagrer en full historikk som kan hentes ut for hvert kundested: datoer, timer, GPS og bilder av hvert oppdrag. Kunden får den forseglede rapporten, som vedkommende selv kontrollerer uten tilgang til systemet ditt.',
      },
      {
        q: 'Fungerer GeoTapp for vedlikehold av anlegg og eiendomsdrift?',
        a: 'Ja. Vedlikeholdsbedrifter, eiendomsdrift og virksomheter med team fordelt på flere steder bruker GeoTapp. Det passer fra det lille teamet til virksomheten med hundrevis av teknikere.',
      },
      {
        q: 'Overholder GeoTapp GDPR når det gjelder geolokalisering?',
        a: 'GeoTapp er bygget for å holde seg innenfor rammene i GDPR: det registrerer bare posisjonen når teknikeren stempler (innstempling, pauser, utstempling) eller tar et bevisbilde, lar informasjonen signeres i appen før stempling og samler ikke inn unødvendige data.',
      },
      {
        q: 'Hva koster GeoTapp for en vedlikeholdsbedrift?',
        a: 'GeoTapp Flow starter på 39 € per måned; TimeTracker-plassene til teknikerne koster 3 € per måned per plass opp til 25. Abonnementet har en minste varighet på 12 måneder. Først kan du prøve det gratis i 14 dager, uten kort.',
      },
    ],
  },

  cta: {
    title: 'Hvert vedlikeholdsoppdrag fortjener et bevis. GeoTapp lager det.',
    subtitle:
      'Verifiserbare rapporter, posisjon ved stemplingene, full historikk for hvert anlegg.',
    primary: 'Prøv gratis i 14 dager',
    secondary: 'Se prisene',
  },

  pricing_hint: {
    label: 'TimeTracker-plasser fra',
    per: 'per ansatt per måned, pluss Flow-abonnement fra 39 € per måned',
    note: 'Gratis prøveperiode i 14 dager',
  },

  schema_sector_name: 'Vedlikehold',

  schema_faq: [
    {
      question: 'Hvordan dokumenterer du de periodiske vedlikeholdsoppdragene?',
      answer:
        'GeoTapp lager automatisk en rapport for hvert besøk med GPS, timer og bilder. Historikken er fullstendig og kan hentes ut per anlegg eller kundested, uten manuell innskriving.',
    },
    {
      question: 'Kommer teknikerne faktisk til tiden?',
      answer:
        'Med GeoTapp ser du ankomsttidspunktet og posisjonen til hver tekniker i det øyeblikket vedkommende stempler. Opplysningen ligger allerede i Flow, uten samtaler.',
    },
    {
      question: 'Hvordan dokumenterer jeg overfor kundene det leverte vedlikeholdet?',
      answer:
        'GeoTapp lagrer en full historikk som kan hentes ut for hvert kundested: datoer, timer, GPS og bilder av hvert oppdrag. Kunden får den forseglede rapporten, som vedkommende selv kontrollerer.',
    },
  ],
};

export default content;
