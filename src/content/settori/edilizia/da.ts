import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Byggeplads-app: GPS-fremmøde og holdstyring | GeoTapp',
    description: 'Styr fremmøde, vagter og hold på byggepladsen med stemplinger med position. Forseglede rapporter, der laves automatisk, til byggefirmaer.',
  },
  hero: {
    badge: 'App til byggefirmaer og byggepladser',
    h1_line1: 'Din byggeplads dokumenteret,',
    h1_line2: 'ved hver stempling.',
    subtitle: 'Stemplinger med position, holdstyring og automatiske forseglede rapporter. Intet papir, og når nogen bestrider noget, har du noget at vise. GeoTapp forener Flow + TimeTracker for dem, der driver byggepladser, underentreprenører og byggeledelse.',
    cta_primary: 'Prøv det på en rigtig byggeplads',
    cta_note: '14 dage, op til 50 medarbejdere i felten, uden kreditkort.',
  },
  pain: {
    title: 'Problemer vi løser hver dag',
    items: [
      {
        title: 'Hvem var på byggepladsen, og hvornår?',
        desc: 'Hver stempling registrerer klokkeslæt og position, som telefonen måler i det øjeblik, og ikke er indtastet i hånden. Den havner i den forseglede rapport, som byggeledelsen kan verificere.',
      },
      {
        title: 'Hvordan styrer du underentreprenørerne?',
        desc: 'Registrér fremmøde for alle hold, også underentreprenørerne, i ét dashboard, der opdateres ved hver stempling.',
      },
      {
        title: 'Tager byggepladsrapporterne timer?',
        desc: 'De laves automatisk med GPS, timer og fremmøde. Klar til byggeledelsen og til stadeopgørelserne uden manuel indtastning.',
      },
    ],
  },
  workflow: {
    title: 'Sådan fungerer det',
    subtitle: 'Tre enkle trin. Intet papir. Ingen opkald.',
    steps: [
      {
        title: 'Medarbejderen stempler ind ved byggepladsen',
        desc: 'Starter vagten fra smartphonen. GeoTapp registrerer klokkeslæt og position i det øjeblik og, hvis det er nødvendigt, bevisfotos. Mellem to stemplinger registreres der intet automatisk.',
      },
      {
        title: 'Byggelederen ser stemplingerne, så snart de kommer',
        desc: 'Ét dashboard for alle hold og alle byggepladser. Hvem der har stemplet, hvor og hvornår, uden at jagte nogen på telefonen.',
      },
      {
        title: 'Rapporten er klar til stadeopgørelse og byggeledelse',
        desc: 'Ved dagens eller opgavens afslutning laver systemet en forseglet rapport med fremmøde, GPS og timer. Klar til byggeledelsen uden et minuts manuelt arbejde.',
      },
    ],
  },
  differenza: {
    title: 'Byggeplads-app: tidsregistrering eller verificerbart bevis?',
    subtitle: 'De fleste apps registrerer blot klokkeslættet. GeoTapp producerer verificerbare beviser.',
    rows: [
      {
        label: 'Hvad registreres',
        competitor: 'Ind- og udstemplingstidspunkt',
        geotapp: 'Klokkeslæt + position ved stemplingen + fotos + udført arbejde',
      },
      {
        label: 'Hvem kan verificere',
        competitor: 'Kun dit kontor',
        geotapp: 'Dig, byggeledelsen, en tredjepart, uafhængigt',
      },
      {
        label: 'Ved uenighed',
        competitor: 'Kun dit ord',
        geotapp: 'Forseglet rapport, enhver ændring kan opdages',
      },
      {
        label: 'Byggepladsrapport',
        competitor: 'Manuel eller fraværende',
        geotapp: 'Laves automatisk med GPS og fremmøde',
      },
      {
        label: 'GDPR',
        competitor: 'Ofte uafklaret',
        geotapp: 'Bygget til at holde sig inden for rammerne af GDPR, blanketter inkluderet',
      },
    ],
  },
  prima_dopo: {
    title: 'Sådan er det nu. Sådan er det med GeoTapp.',
    prima: [
      'Byggeledelsen spørger, hvem der var på byggepladsen tirsdag. Ingen ved det med sikkerhed.',
      'Fremmødelisterne kommer ufuldstændige, for sent eller ulæselige.',
      'Underentreprenøren bestrider timerne. Du har ingen beviser.',
      'Du laver stadeopgørelsen i hånden og genopbygger data fra WhatsApp-beskeder.',
    ],
    dopo: [
      'Byggeledelsen spørger, hvem der var på byggepladsen tirsdag. Du åbner dagens stemplinger: det hele er der.',
      'Fremmødet registreres ved hver stempling, med klokkeslæt og position.',
      'Bestrider underentreprenøren noget? Du viser den forseglede rapport.',
      'Stadeopgørelsen er allerede klar: timer, fremmøde og GPS samlet automatisk.',
    ],
  },
  features: {
    title: 'Funktioner lavet til byggepladsen',
    items: [
      {
        title: 'Forseglet GPS-fremmøde',
        desc: 'Hver ind- og udstempling og hver pause på byggepladsen registreres med position og klokkeslæt. Kan vises til byggeledelse, bygherre og tilsyn, når der er brug for det.',
      },
      {
        title: 'Dashboard for flere byggepladser',
        desc: 'Følg flere byggepladser fra ét skærmbillede: for hver byggeplads ser du, hvem der har stemplet, hvor og hvornår, så snart stemplingen kommer.',
      },
      {
        title: 'Automatiske rapporter til stadeopgørelser',
        desc: 'Systemet laver rapporter med fremmøde, timer og GPS samlet. Klar til stadeopgørelser og byggeledelse uden manuel indtastning.',
      },
      {
        title: 'Overblik over underentreprenører',
        desc: 'Hvert hold, internt eller eksternt, stempler fra smartphonen. Byggelederen ser alle i ét dashboard uden at jagte nogen.',
      },
      {
        title: 'Forseglede fotobeviser',
        desc: 'Medarbejderne tager fotos fra appen. Hvert billede er knyttet til byggepladsen med GPS og tidsstempel: enhver senere ændring kan opdages.',
      },
      {
        title: 'Position kun ved stempling',
        desc: 'Geolokalisering bygget til at holde sig inden for rammerne af GDPR: position kun ved stempling, aldrig løbende, og oplysningerne til medarbejderne underskrives i appen, før der stemples.',
      },
    ],
  },
  testimonial: {
    quote: 'Siden vi begyndte at bruge GeoTapp, beder byggeledelsen os ikke længere om fremmødelister. Vi åbner rapporten, og stadeopgørelsen er allerede klar.',
    author: 'Giuseppe M.',
    role: 'Indehaver, byggefirma, 35 medarbejdere',
  },
  faq: {
    title: 'Ofte stillede spørgsmål',
    subtitle: 'Det, vi oftest bliver spurgt om, før man går i gang.',
    items: [
      {
        q: 'Hvem var på byggepladsen, og hvornår?',
        a: 'Hver stempling registrerer klokkeslæt og position, som telefonen måler i det øjeblik, og ikke er indtastet i hånden. Den havner i den forseglede rapport, som byggeledelsen kan verificere.',
      },
      {
        q: 'Hvordan styrer du underentreprenørerne på byggepladsen?',
        a: 'GeoTapp registrerer fremmøde for alle hold, også underentreprenørerne. Hver medarbejder stempler fra sin egen smartphone, og byggelederen ser stemplingerne, så snart de kommer, i ét dashboard.',
      },
      {
        q: 'Kræver byggepladsrapporter timevis af manuelt arbejde?',
        a: 'Nej. GeoTapp laver rapporterne automatisk med GPS, timer og fremmøde. De er klar til byggeledelsen og til stadeopgørelserne uden manuel indtastning.',
      },
    ],
  },
  cta: {
    title: 'Prøv GeoTapp gratis i 14 dage',
    subtitle: 'Prøveperioden binder dig ikke til noget. Intet kreditkort kræves.',
    primary: 'Start gratis prøveperiode',
    secondary: 'Se priserne',
  },
  pricing_hint: {
    label: 'TimeTracker-pladser fra',
    per: 'pr. medarbejder om måneden, plus Flow-planen fra 39 € om måneden',
    note: 'Gratis prøveperiode i 14 dage',
  },
  schema_sector_name: 'Byggeri',
  schema_faq: [
    {
      question: 'Hvem var på byggepladsen, og hvornår?',
      answer: 'Hver stempling registrerer klokkeslæt og position, som telefonen måler i det øjeblik, og ikke er indtastet i hånden. Den havner i den forseglede rapport, som byggeledelsen kan verificere.',
    },
    {
      question: 'Hvordan styrer du underentreprenørerne på byggepladsen?',
      answer: 'GeoTapp registrerer fremmøde for alle hold, også underentreprenørerne. Hver medarbejder stempler fra sin egen smartphone, og byggelederen ser stemplingerne, så snart de kommer, i ét dashboard.',
    },
    {
      question: 'Kræver byggepladsrapporter timevis af manuelt arbejde?',
      answer: 'Nej. GeoTapp laver rapporterne automatisk med GPS, timer og fremmøde. De er klar til byggeledelsen og til stadeopgørelserne uden manuel indtastning.',
    },
  ],
};

export default content;
