import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App til vedligeholdelse: hold og opgaver med GPS | GeoTapp',
    description:
      'Styr vedligeholdelseshold med GPS: opgaver, vagter, dokumentation af udført service. Fuld historik for hvert anlæg eller kundested. Prøv GeoTapp gratis.',
  },

  hero: {
    badge: 'App til vedligeholdelseshold',
    h1_line1: 'Dit vedligeholdelseshold,',
    h1_line2: 'hvert besøg dokumenteret.',
    subtitle:
      'Registrér opgaverne, planlæg vagterne, og dokumentér hvert besøg med positionen ved stemplingen og bevisfotos. Fuld historik for anlæg og kunder, uden manuel indtastning.',
    cta_primary: 'Prøv GeoTapp gratis i 14 dage',
    cta_note: 'Prøven binder dig ikke til noget. Intet kreditkort.',
  },

  pain: {
    title: 'Problemer, vi løser hver dag',
    items: [
      {
        title: 'Hvordan dokumenterer du de periodiske opgaver?',
        desc: 'Automatisk rapport med GPS, timer og fotos for hvert besøg. Historikken er fuldstændig og kan hentes uden manuel indtastning.',
      },
      {
        title: 'Kommer teknikerne faktisk til tiden?',
        desc: 'Du ser det, så snart teknikeren stempler, uden opkald: ankomsttidspunkt og position ligger allerede i Flow, for hvert sted.',
      },
      {
        title: 'Hvordan dokumenterer du over for kunderne, at servicen er leveret?',
        desc: 'Fuld historik, der kan hentes for hvert sted: datoer, timer, GPS og fotos. Kunden kontrollerer selv, uden adgang til dit system.',
      },
    ],
  },

  workflow: {
    title: 'Sådan fungerer det',
    subtitle: 'Tre enkle trin. Intet papir. Ingen opkald.',
    steps: [
      {
        title: 'Teknikeren stempler med GPS, når han ankommer til stedet',
        desc: 'Teknikeren åbner opgaven fra smartphonen. GeoTapp registrerer tidspunkt og position i det øjeblik og bevisfotos. Mellem to stemplinger registrerer den intet automatisk.',
      },
      {
        title: 'Timerne og opgaven registreres automatisk',
        desc: 'De arbejdede timer knyttes til stedet og typen af opgave. Lederen ser ved hver stempling status for hvert besøg.',
      },
      {
        title: 'Kunden modtager den forseglede rapport',
        desc: 'Når opgaven er slut, laver systemet en rapport med GPS, timer og forsegling. Kunden kontrollerer den selv, uden adgang til dit administrationssystem.',
      },
    ],
  },

  features: {
    title: 'App til vedligeholdelse: hver opgave dokumenteret.',
    items: [
      {
        title: 'Tilstedeværelse med position og tidspunkt',
        desc: 'Hver ankomst, pause og afgang registreres med position, tidspunkt og tildelt sted og kommer med i den forseglede rapport. Du kan vise den til kunden eller en tilsynsmyndighed, når det er nødvendigt.',
      },
      {
        title: 'Vedligeholdelseshistorik pr. anlæg',
        desc: 'Hver opgave er knyttet til stedet eller anlægget. Den samlede historik kan ses og hentes, for dig og for kunden.',
      },
      {
        title: 'Automatiske og forseglede rapporter',
        desc: 'Når opgaven er slut, laver systemet en forseglet rapport: timer, positioner, fotos og forsegling. Kunden kan selv kontrollere den.',
      },
      {
        title: 'Planlægning af vagter og hold',
        desc: 'Tildel opgaver, styr vagterne, og få en besked, hvis en vagt står åben.',
      },
      {
        title: 'Fotodokumentation',
        desc: 'Teknikerne tager fotos direkte fra appen: før, under og efter opgaven. Hvert billede er knyttet til en position og har tidsstempel.',
      },
      {
        title: 'Stempling med ét tryk',
        desc: 'Teknikeren stempler ankomsten med GPS, registrerer pauserne og afslutter opgaven med ét tryk. Hvert foto, der tages, forbliver knyttet til opgaven og dens tidspunkter.',
      },
    ],
  },

  testimonial: {
    quote:
      'Med GeoTapp er hver vedligeholdelsesopgave dokumenteret, og vi sender kunderne rapporten for hvert besøg.',
    author: 'Andrea L.',
    role: 'Vedligeholdelseschef, facility management - Midtitalien',
  },

  faq: {
    title: 'Ofte stillede spørgsmål',
    subtitle: 'Det, vi oftest bliver spurgt om, før man går i gang.',
    items: [
      {
        q: 'Hvordan dokumenterer du de periodiske vedligeholdelsesopgaver?',
        a: 'GeoTapp laver automatisk en rapport for hvert besøg med GPS, timer og fotos. Historikken er fuldstændig og kan hentes pr. anlæg eller kundested, uden manuel indtastning.',
      },
      {
        q: 'Kommer teknikerne faktisk til tiden?',
        a: 'Med GeoTapp ser du ankomsttidspunktet og positionen for hver tekniker i det øjeblik, vedkommende stempler. Ingen opkald: oplysningen ligger allerede i Flow.',
      },
      {
        q: 'Hvordan dokumenterer jeg over for kunderne den leverede vedligeholdelse?',
        a: 'GeoTapp gemmer en fuld historik, der kan hentes for hvert kundested: datoer, timer, GPS og fotos af hver opgave. Kunden får den forseglede rapport, som vedkommende selv kontrollerer uden adgang til dit system.',
      },
      {
        q: 'Virker GeoTapp til vedligeholdelse af anlæg og facility?',
        a: 'Ja. Vedligeholdelsesvirksomheder, facility management og virksomheder med hold fordelt på flere steder bruger GeoTapp. Det passer fra det lille hold til virksomheden med hundredvis af teknikere.',
      },
      {
        q: 'Overholder GeoTapp GDPR, når det gælder geolokalisering?',
        a: 'GeoTapp er bygget til at holde sig inden for rammerne af GDPR: det registrerer kun positionen, når teknikeren stempler (indstempling, pauser, udstempling) eller tager et bevisfoto, lader informationen underskrive i appen før stempling og indsamler ikke unødvendige data.',
      },
      {
        q: 'Hvad koster GeoTapp for en vedligeholdelsesvirksomhed?',
        a: 'GeoTapp Flow starter ved 39 € pr. måned; TimeTracker-pladserne til teknikerne koster 3 € pr. måned pr. plads op til 25. Abonnementet har en mindste varighed på 12 måneder. Først kan du prøve det gratis i 14 dage, uden kort.',
      },
    ],
  },

  cta: {
    title: 'Hver vedligeholdelsesopgave fortjener et bevis. GeoTapp laver det.',
    subtitle:
      'Verificerbare rapporter, position ved stemplingerne, fuld historik for hvert anlæg.',
    primary: 'Prøv gratis i 14 dage',
    secondary: 'Se priserne',
  },

  pricing_hint: {
    label: 'TimeTracker-pladser fra',
    per: 'pr. medarbejder pr. måned, plus Flow-abonnement fra 39 € pr. måned',
    note: 'Gratis prøveperiode i 14 dage',
  },

  schema_sector_name: 'Vedligeholdelse',

  schema_faq: [
    {
      question: 'Hvordan dokumenterer du de periodiske vedligeholdelsesopgaver?',
      answer:
        'GeoTapp laver automatisk en rapport for hvert besøg med GPS, timer og fotos. Historikken er fuldstændig og kan hentes pr. anlæg eller kundested, uden manuel indtastning.',
    },
    {
      question: 'Kommer teknikerne faktisk til tiden?',
      answer:
        'Med GeoTapp ser du ankomsttidspunktet og positionen for hver tekniker i det øjeblik, vedkommende stempler. Oplysningen ligger allerede i Flow, uden opkald.',
    },
    {
      question: 'Hvordan dokumenterer jeg over for kunderne den leverede vedligeholdelse?',
      answer:
        'GeoTapp gemmer en fuld historik, der kan hentes for hvert kundested: datoer, timer, GPS og fotos af hver opgave. Kunden får den forseglede rapport, som vedkommende selv kontrollerer.',
    },
  ],
};

export default content;
