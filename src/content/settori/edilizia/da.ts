import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Byggeplads-app: GPS-fremmøde & Holdstyring | GeoTapp',
    description: 'Administrer fremmøde, vagter og sikkerhed på byggepladsen med GPS i realtid. Certificerede stemplinger, automatiske rapporter. GDPR-kompatibel app for byggefirmaer.',
  },
  hero: {
    badge: 'App til byggefirmaer og byggepladser',
    h1_line1: 'Din byggeplads under kontrol,',
    h1_line2: 'i realtid.',
    subtitle: 'GPS-certificerede stemplinger, holdstyring og automatiske rapporter. Intet papirarbejde, ingen tvister. GeoTapp forbinder Flow + TimeTracker for byggeledere, underentreprenører og projektledelse.',
    cta_primary: 'Prøv GeoTapp gratis i 14 dage',
    cta_note: 'Ingen binding. Intet kreditkort påkrævet.',
  },
  pain: {
    title: 'Problemer vi løser hver dag',
    items: [
      {
        title: 'Hvem var på byggepladsen og hvornår?',
        desc: 'Hver GPS-stempling er tidsstemplet og certificeret. GeoTapp registrerer reelle koordinater i stemplingsøjeblikket, ikke indtastet manuelt. Data kan verificeres af byggeledelsen til enhver tid.',
      },
      {
        title: 'Hvordan styrer du underentreprenører?',
        desc: 'Spor adgang og fremmøde for alle hold, inklusive underentreprenører, fra ét realtidsdashboard.',
      },
      {
        title: 'Tager byggepladsrapporter timer?',
        desc: 'Genereret automatisk med GPS, timer og fremmøde. Klar til byggeledelse og stadeopgørelser uden manuel indtastning.',
      },
    ],
  },
  workflow: {
    title: 'Sådan fungerer det',
    subtitle: 'Tre enkle trin. Intet papir. Ingen opkald.',
    steps: [
      {
        title: 'Medarbejderen stempler ind ved byggepladsen',
        desc: 'Starter vagten fra smartphonen. GeoTapp registrerer reelle GPS-koordinater, tidsstempel og, om nødvendigt, fotos. Fuldautomatisk, manipulationssikkert.',
      },
      {
        title: 'Byggeledelsen ser alt i realtid',
        desc: 'Ét dashboard for alle hold og alle byggepladser. Hvem er til stede, hvor og siden hvornår, uden at jagte nogen over telefonen.',
      },
      {
        title: 'Rapporten er klar til stadeopgørelser',
        desc: 'Ved dagens eller projektets afslutning genererer systemet en forseglet rapport med fremmøde, GPS og timer. Klar til byggeledelsen uden et minuts manuelt arbejde.',
      },
    ],
  },
  differenza: {
    title: 'Byggeplads-app: tidsregistrering eller certificering?',
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
        geotapp: 'Dig, byggeledelsen, en tredjepart, uafhængigt',
      },
      {
        label: 'Ved tvist',
        competitor: 'Data ikke forsvarligt',
        geotapp: 'Forseglet rapport, manipulationssikker',
      },
      {
        label: 'Byggepladsrapport',
        competitor: 'Manuel eller fraværende',
        geotapp: 'Automatisk genereret med GPS og fremmøde',
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
      'Byggeledelsen spørger, hvem der var på pladsen tirsdag. Ingen ved det med sikkerhed.',
      'Fremmødelister ankommer ufuldstændige, forsinkede eller ulæselige.',
      'Underentreprenøren bestrider timerne. Du har intet bevis.',
      'Du forbereder stadeopgørelsen manuelt og sætter data sammen fra WhatsApp-beskeder.',
    ],
    dopo: [
      'Byggeledelsen spørger, hvem der var tirsdag. Åbn dashboardet: det hele er der.',
      'Fremmøde registreres automatisk med GPS og tidsstempel.',
      'Underentreprenøren bestrider? Vis den forseglede rapport.',
      'Stadeopgørelsen er allerede klar: timer, fremmøde og GPS aggregeret automatisk.',
    ],
  },
  features: {
    title: 'Funktioner bygget til byggepladsen',
    items: [
      {
        title: 'GPS-certificeret fremmøde',
        desc: 'Hver ind- og udgang registreres med reel GPS-position og tidsstempel. Forsvarligt over for byggeledelse, kunder og inspektører.',
      },
      {
        title: 'Multi-byggeplads dashboard',
        desc: 'Overvåg flere byggepladser fra én skærm. Se i realtid hvem der er til stede, hvor og siden hvornår, for hver aktiv byggeplads.',
      },
      {
        title: 'Automatiske fremdriftsrapporter',
        desc: 'Systemet genererer rapporter med aggregeret fremmøde, timer og GPS. Klar til stadeopgørelser og byggeledelse uden manuel indtastning.',
      },
      {
        title: 'Underentreprenør-tracking',
        desc: 'Hvert hold, internt eller eksternt, stempler ind fra smartphonen. Byggeledelsen ser alle på ét dashboard uden at jagte nogen.',
      },
      {
        title: 'Forseglet fotobevis',
        desc: 'Medarbejdere tager fotos fra appen. Hvert billede er knyttet til byggepladsen med GPS og tidsstempel, manipulationssikkert efter generering.',
      },
      {
        title: 'Indbygget GDPR-overholdelse',
        desc: 'Geolokalisering kompatibel by design med GDPR-regler og privatlivsretningslinjer. Skabeloner til medarbejdernes privatlivserklæring inkluderet.',
      },
    ],
  },
  testimonial: {
    quote: 'Siden vi begyndte at bruge GeoTapp, beder byggeledelsen ikke længere om fremmødelister. Vi åbner rapporten og stadeopgørelsen er klar.',
    author: 'Josef M.',
    role: 'Ejer, byggefirma, 35 medarbejdere',
  },
  faq: {
    title: 'Ofte stillede spørgsmål',
    subtitle: 'Hvad folk spørger os mest om, før de starter.',
    items: [
      {
        q: 'Hvem var på byggepladsen og hvornår?',
        a: 'Hver GPS-stempling er tidsstemplet og certificeret. GeoTapp registrerer reelle koordinater i stemplingsøjeblikket, ikke indtastet manuelt. Data kan verificeres af byggeledelsen til enhver tid.',
      },
      {
        q: 'Hvordan styrer du underentreprenører på byggepladsen?',
        a: 'GeoTapp sporer adgang og fremmøde for alle hold, inklusive underentreprenører. Hver medarbejder stempler fra sin smartphone, og byggeledelsen ser alt i realtid på ét dashboard.',
      },
      {
        q: 'Kræver byggepladsrapporter timers manuelt arbejde?',
        a: 'Nej. GeoTapp genererer rapporter automatisk med GPS, timer og fremmøde. De er klar til byggeledelse og stadeopgørelser uden manuel indtastning.',
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
    per: 'medarbejder/måned',
    note: '14 dages gratis prøveperiode',
  },
  schema_sector_name: 'Byggeri',
  schema_faq: [
    {
      question: 'Hvem var på byggepladsen og hvornår?',
      answer: 'Hver GPS-stempling er tidsstemplet og certificeret. GeoTapp registrerer reelle koordinater i stemplingsøjeblikket, ikke indtastet manuelt. Data kan verificeres af byggeledelsen til enhver tid.',
    },
    {
      question: 'Hvordan styrer du underentreprenører på byggepladsen?',
      answer: 'GeoTapp sporer adgang og fremmøde for alle hold, inklusive underentreprenører. Hver medarbejder stempler fra sin smartphone, og byggeledelsen ser alt i realtid på ét dashboard.',
    },
    {
      question: 'Kræver byggepladsrapporter timers manuelt arbejde?',
      answer: 'Nej. GeoTapp genererer rapporter automatisk med GPS, timer og fremmøde. De er klar til byggeledelse og stadeopgørelser uden manuel indtastning.',
    },
  ],
};

export default content;
