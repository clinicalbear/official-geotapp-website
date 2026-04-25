import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Vedligeholdelses-app: Teamstyring og Opgaver med GPS | GeoTapp',
    description:
      'Styr vedligeholdelsesteams med GPS: opgaver, vagtplaner, servicebevis. Komplet historik per anlæg eller kundelokation. Prøv GeoTapp gratis.',
  },

  hero: {
    badge: 'App til vedligeholdelsesteams',
    h1_line1: 'Dit vedligeholdelsesteam,',
    h1_line2: 'altid under kontrol.',
    subtitle:
      'Registrer opgaver, planlæg vagter og dokumenter hvert besøg med ægte GPS og fotodokumentation. Komplet historik per anlæg og kunde — uden manuel indtastning.',
    cta_primary: 'Prøv GeoTapp gratis i 14 dage',
    cta_note: 'Ingen binding. Intet kreditkort påkrævet.',
  },

  pain: {
    title: 'Problemer vi løser hver dag',
    items: [
      {
        title: 'Hvordan dokumenterer du periodiske vedligeholdelsesbesøg?',
        desc: 'Automatisk rapport med GPS, timer og fotos for hvert besøg. Komplet historik, som kan downloades — uden manuel indtastning.',
      },
      {
        title: 'Ankommer teknikerne virkelig til tiden?',
        desc: 'Verifikation i realtid uden opkald. GPS og ankomsttid er allerede tilgængelige i dit dashboard, for hver lokation.',
      },
      {
        title: 'Hvordan beviser du den leverede service?',
        desc: 'Komplet downloadbar historik per kundelokation: datoer, timer, GPS og fotos. Kunden verificerer selvstændigt, uden adgang til dit system.',
      },
    ],
  },

  workflow: {
    title: 'Sådan virker det',
    subtitle: 'Tre enkle trin. Nul papir. Nul opkald.',
    steps: [
      {
        title: 'Teknikeren stempler GPS ved ankomst',
        desc: 'Åbner opgaven fra sin smartphone. GeoTapp registrerer ægte GPS-koordinater, tidsstempel og fotos — fuldautomatisk, manipulationssikret.',
      },
      {
        title: 'Timer og opgave registreres automatisk',
        desc: 'Hvert arbejdet minut er knyttet til lokationen og opgavetypen. Lederen ser realtidsstatus for hvert besøg.',
      },
      {
        title: 'Kunden modtager den digitalt signerede rapport',
        desc: 'Ved opgavens afslutning genererer systemet en rapport med GPS, timer og digital signatur. Kunden verificerer den selvstændigt.',
      },
    ],
  },

  features: {
    title: 'Vedligeholdelses-app: total kontrol over hver opgave.',
    items: [
      {
        title: 'GPS-verificeret fremmøde',
        desc: 'Hver ankomst og afgang er certificeret med ægte GPS, tidsstempel og tildelt lokation. Forsvarligt over for kunder og inspektører.',
      },
      {
        title: 'Vedligeholdelseshistorik per anlæg',
        desc: 'Hver opgave er knyttet til lokationen eller anlægget. Komplet historik er søgbar og downloadbar.',
      },
      {
        title: 'Automatiske manipulationssikrede rapporter',
        desc: 'Efter hver opgave genererer systemet en forseglet rapport: timer, GPS, fotos og digital signatur.',
      },
      {
        title: 'Teamplanlægning',
        desc: 'Tildel opgaver, styr vagter og modtag automatiske advarsler, hvis en opgave ikke åbnes eller lukkes til tiden.',
      },
      {
        title: 'Fotodokumentation',
        desc: 'Teknikere tager fotos direkte fra appen: før, under og efter opgaven. Hvert billede er geotagget med tidsstempel.',
      },
      {
        title: 'Virker også offline',
        desc: 'På lokationer uden netværksdækning gemmes data lokalt og synkroniseres, så snart forbindelsen vender tilbage.',
      },
    ],
  },

  testimonial: {
    quote:
      'Med GeoTapp er hvert vedligeholdelsesbesøg sporbart. Kunderne ser den komplette historik per anlæg, og der er ikke længere diskussioner om timer eller udført arbejde.',
    author: 'Anders L.',
    role: 'Vedligeholdelsesleder, facility management — Danmark',
  },

  faq: {
    title: 'Ofte stillede spørgsmål',
    subtitle: 'Det vi oftest bliver spurgt om før start.',
    items: [
      {
        q: 'Hvordan dokumenterer man periodiske vedligeholdelsesbesøg?',
        a: 'GeoTapp genererer automatisk en rapport per besøg med GPS, timer og fotos. Komplet historik per anlæg eller kundelokation — uden manuel indtastning.',
      },
      {
        q: 'Ankommer teknikerne virkelig til tiden?',
        a: 'Med GeoTapp kan du verificere ankomsttid og GPS-position for hver tekniker i realtid. Intet opkald nødvendigt.',
      },
      {
        q: 'Hvordan beviser jeg den leverede vedligeholdelsesservice over for kunden?',
        a: 'GeoTapp vedligeholder en komplet downloadbar historik per kundelokation: datoer, timer, GPS og fotos. Kunden verificerer selvstændigt.',
      },
      {
        q: 'Virker GeoTapp til facility-vedligeholdelse og anlægsservice?',
        a: 'Ja. GeoTapp bruges af vedligeholdelsesfirmaer, facility management-virksomheder og organisationer med distribuerede teams. Platformen skalerer fra 3 til 300 teknikere.',
      },
      {
        q: 'Er GeoTapp GDPR-kompatibel?',
        a: 'Ja. GeoTapp sporer kun placering i aktiv arbejdstid, inkluderer skabeloner til medarbejderinformation og indsamler ikke unødvendige data.',
      },
      {
        q: 'Hvad koster GeoTapp for en vedligeholdelsesvirksomhed?',
        a: 'Planerne starter fra få euro per medarbejder per måned. Prøv gratis i 14 dage — uden binding.',
      },
    ],
  },

  cta: {
    title: 'Hver vedligeholdelsesopgave fortjener et bevis. GeoTapp skaber det.',
    subtitle:
      'Verificerbare rapporter, ægte GPS, komplet historik per anlæg. Dit arbejde bliver forsvarligt.',
    primary: 'Start gratis nu!',
    secondary: 'Se Priser',
  },

  pricing_hint: {
    label: 'Fra',
    price: '3 €',
    per: 'medarbejder/måned',
    note: '14 dages gratis prøveperiode',
  },

  schema_sector_name: 'Vedligeholdelse',

  schema_faq: [
    {
      question: 'Hvordan dokumenterer man periodiske vedligeholdelsesbesøg?',
      answer:
        'GeoTapp genererer automatisk en rapport per besøg med GPS, timer og fotos. Komplet historik per anlæg eller kundelokation.',
    },
    {
      question: 'Ankommer teknikerne virkelig til tiden?',
      answer:
        'Med GeoTapp kan du verificere ankomsttid og GPS-position for hver tekniker i realtid. Data er allerede i dit dashboard.',
    },
    {
      question: 'Hvordan beviser jeg den leverede vedligeholdelsesservice?',
      answer:
        'GeoTapp vedligeholder en komplet downloadbar historik per kundelokation: datoer, timer, GPS og fotos. Kunden verificerer selvstændigt.',
    },
  ],
};

export default content;
