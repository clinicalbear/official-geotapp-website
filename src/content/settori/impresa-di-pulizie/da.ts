import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App til rengøringsfirmaer: hold med GPS | GeoTapp',
    description:
      'Styr hold, vagter og fremmøde med GPS-stemplinger. Servicebeviser, der laves automatisk, når en kunde bestrider noget. App bygget med GDPR for øje.',
  },

  hero: {
    badge: 'App til rengøringsfirmaer og multiservice',
    h1_line1: 'Dit rengøringsfirma,',
    h1_line2: 'styret, stempling efter stempling.',
    subtitle:
      'GPS-stemplinger, automatiske servicebeviser og vagtstyring i én app. Ingen regneark, færre tvister. Bestrider kunden noget? Send rapporten i stedet for at diskutere.',
    cta_primary: 'Prøv det på en rigtig kontrakt',
    cta_note: '14 dage, op til 50 medarbejdere i felten, uden kreditkort.',
  },

  pain: {
    title: 'Problemer vi løser hver dag',
    items: [
      {
        title: 'Bestrider kunderne de arbejdede timer?',
        desc: 'Hver stempling registrerer position og klokkeslæt. Send rapporten, og kunden kan selv verificere den.',
      },
      {
        title: 'Er papirtimesedlerne upålidelige?',
        desc: 'Stemplinger fra smartphonen, uden noget indtastet i hånden. Data står, som de blev registreret: enhver ændring kan opdages.',
      },
      {
        title: 'Er det svært at koordinere flere hold?',
        desc: 'Du ser, hvem der har stemplet, og hvor, på alle steder, i ét dashboard. Ingen telefonopkald.',
      },
    ],
  },

  prima_dopo: {
    title: 'Sådan er det nu. Sådan er det med GeoTapp.',
    prima: [
      'Kunden ringer og siger, at toilettet ikke er blevet gjort rent.',
      'Medarbejderen siger: «Det har jeg gjort.» Kunden siger: «Nej, det har du ikke.»',
      'Du har intet i hånden til at bevise noget.',
      'Diskussionen trækker ud i dagevis. Nogle gange mister du kontrakten.',
    ],
    dopo: [
      'Kunden ringer og siger, at toilettet ikke er blevet gjort rent.',
      'Du åbner rapporten for opgaven: foto af det rene toilet, klokkeslæt, position.',
      'Du sender den til kunden, og kunden verificerer den selv.',
      'Du har noget at vise. Medarbejderen har også noget i hånden.',
    ],
  },

  workflow: {
    title: 'Sådan fungerer det',
    subtitle: 'Tre enkle trin. Intet papir. Ingen opkald.',
    steps: [
      {
        title: 'Medarbejderen stempler ind på stedet',
        desc: 'Åbner og lukker vagten fra smartphonen. GeoTapp registrerer position og klokkeslæt i det øjeblik og, hvis det er nødvendigt, bevisfotos. Mellem to stemplinger registreres der intet automatisk.',
      },
      {
        title: 'Lederen ser hver stempling, så snart den kommer',
        desc: 'Ét dashboard for alle steder. Du ser, hvem der har stemplet, hvor og hvornår, uden at jagte nogen.',
      },
      {
        title: 'Rapporten er klar automatisk',
        desc: 'Ved vagtens afslutning laver systemet en forseglet rapport med GPS, fotos og kryptografisk segl. Send den til kunden, som selv kan verificere den.',
      },
    ],
  },

  differenza: {
    title: 'Stempling eller servicebevis.',
    subtitle: 'De fleste apps registrerer klokkeslæt. GeoTapp producerer beviser til din kunde.',
    rows: [
      {
        label: 'Hvad registreres',
        competitor: 'Ind- og udstemplingstidspunkt',
        geotapp: 'Klokkeslæt + position ved stemplingen + fotos + udført arbejde',
      },
      {
        label: 'Hvem kan verificere',
        competitor: 'Kun dit kontor',
        geotapp: 'Dig selv, kunden eller en tredjepart, uafhængigt',
      },
      {
        label: 'Ved uenighed',
        competitor: 'Kun dit ord',
        geotapp: 'Forseglet rapport, enhver ændring kan opdages',
      },
      {
        label: 'Fotobevis',
        competitor: 'Fraværende eller løsrevet',
        geotapp: 'Vedlagt rapporten med tidsstempel og GPS',
      },
      {
        label: 'GDPR',
        competitor: 'Ofte uafklaret',
        geotapp: 'Bygget til at holde sig inden for rammerne af GDPR, blanketter inkluderet',
      },
    ],
  },

  features: {
    title: 'App til rengøringsfirmaer: servicebeviser, ikke kun stemplinger.',
    items: [
      {
        title: 'Automatiske servicebeviser',
        desc: 'Hver afsluttet opgave laver en rapport med GPS, fotos og tidsstempel. Kunden modtager den og verificerer den selv, uden adgang til dit system.',
      },
      {
        title: 'Overblik over alle steder',
        desc: 'Du ser, hvem der har stemplet, og hvor, i alle bygninger, efterhånden som hver stempling kommer. Ingen opkald, ingen e-mails. Mellem to stemplinger registreres der intet automatisk.',
      },
      {
        title: 'Rapporter, som alle kan verificere',
        desc: 'Hver rapport er forseglet, og enhver ændring kan opdages. En kunde, en inspektør eller en advokat kan verificere den uafhængigt.',
      },
      {
        title: 'Styring af vagter og hold',
        desc: 'Tildel vagter, styr kontrakter, og få en advarsel, hvis en vagt står åben.',
      },
      {
        title: 'Fotodokumentation',
        desc: 'Medarbejderne tager fotos direkte fra appen. Hvert billede har klokkeslæt og position: et visuelt bevis på det udførte arbejde.',
      },
      {
        title: 'Dine medarbejdere er beskyttet',
        desc: 'En verificerbar rapport giver også medarbejderen noget at svare med på ubegrundede beskyldninger. Den, der arbejder godt, viser det med data.',
      },
    ],
  },

  testimonial: {
    quote:
      'Når en kunde bestrider en opgave, sender vi rapporten med fotos og position, og kunden verificerer den selv.',
    author: 'Rosa M.',
    role: 'Indehaver, rengøringsfirma',
  },

  faq: {
    title: 'Ofte stillede spørgsmål',
    subtitle: 'Det, vi oftest bliver spurgt om, før man går i gang.',
    items: [
      {
        q: 'Hvordan fungerer GPS-stempling for rengøringsfirmaer?',
        a: 'Medarbejderen stempler ind og ud fra smartphonen. GeoTapp registrerer GPS-positionen i det øjeblik, og den er ikke indtastet i hånden. Hver stempling indgår i den forseglede rapport med tidsstempel og position, som kunden kan verificere.',
      },
      {
        q: 'Kan jeg bevise over for kunden, at opgaven er udført?',
        a: 'Ja. GeoTapp laver automatisk en forseglet rapport med GPS, fotos og tidsstempel, når opgaven er færdig. Kunden modtager den og verificerer den selv, uden adgang til dit system.',
      },
      {
        q: 'Er GeoTapp bygget til at holde sig inden for GDPR ved geolokalisering af medarbejdere?',
        a: 'GeoTapp er bygget til at holde sig inden for rammerne af databeskyttelsesreglerne (GDPR): det registrerer kun positionen, når medarbejderen stempler (start, pause, slut) eller tager et bevisfoto, lader medarbejderne underskrive oplysningerne i appen før den første stempling og indsamler ingen unødvendige data. Mellem to stemplinger registreres der intet automatisk.',
      },
      {
        q: 'Hvordan styrer jeg hold fordelt på flere steder på samme tid?',
        a: 'Med GeoTapp Flow har du ét dashboard for alle steder. Du ser, hvem der har stemplet, og hvor, kan tildele kontrakter og få en advarsel, hvis en vagt står åben.',
      },
      {
        q: 'Er papirtimesedler stadig nødvendige?',
        a: 'Nej. GeoTapp erstatter papirtimesedlerne med stemplinger fra smartphonen. Data kan eksporteres til Excel eller CSV til lønbehandlingen.',
      },
      {
        q: 'Hvad koster GeoTapp for et rengøringsfirma?',
        a: 'GeoTapp Flow starter ved 39 € om måneden; hver medarbejder med TimeTracker-appen koster 3 € om måneden ekstra (2,50 € fra den 26. plads). Abonnementet har en mindste varighed på 12 måneder. Priserne er ekskl. moms. Du kan prøve gratis i 14 dage, uden kreditkort.',
      },
      {
        q: 'GPS-sporer GeoTapp medarbejderne?',
        a: 'Der er ingen løbende sporing. Medarbejderen stempler ind og ud fra smartphonen, og hver stempling knyttes til en GPS-position og et tidsstempel, som registreres i det øjeblik (start, pause, slut) og når der tages et bevisfoto. Det er en position, der skal vise fremmøde, ikke overvågning: mellem to stemplinger registreres der intet automatisk, og appen beder ikke om tilladelse til position i baggrunden.',
      },
    ],
  },

  cta: {
    title: 'Dine medarbejdere arbejder godt. Sørg for, at kunden kan se det.',
    subtitle:
      'Hver opgave bliver til en rapport, du kan vise, og som kunden selv kan verificere.',
    primary: 'Start gratis prøveperiode',
    secondary: 'Se priserne',
  },

  pricing_hint: {
    label: 'TimeTracker-pladser fra',
    per: 'pr. medarbejder om måneden, plus Flow-planen fra 39 € om måneden (ekskl. moms)',
    note: 'Gratis prøveperiode i 14 dage',
  },

  schema_sector_name: 'Rengøringsfirma',

  schema_faq: [
    {
      question: 'Hvordan fungerer GPS-stempling for rengøringsfirmaer?',
      answer:
        'Medarbejderen stempler ind og ud fra smartphonen. GeoTapp registrerer GPS-positionen i det øjeblik, og den er ikke indtastet i hånden. Hver stempling indgår i den forseglede rapport med tidsstempel og position, som kunden kan verificere.',
    },
    {
      question: 'Kan jeg bevise over for kunden, at opgaven er udført?',
      answer:
        'Ja. GeoTapp laver automatisk en forseglet rapport med GPS, fotos og tidsstempel. Kunden modtager den og verificerer den selv.',
    },
    {
      question: 'Er GeoTapp bygget til at holde sig inden for GDPR ved geolokalisering af medarbejdere?',
      answer:
        'GeoTapp er bygget til at holde sig inden for rammerne af databeskyttelsesreglerne (GDPR): det registrerer kun positionen, når medarbejderen stempler (start, pause, slut) eller tager et bevisfoto, lader medarbejderne underskrive oplysningerne i appen før den første stempling og indsamler ingen unødvendige data. Mellem to stemplinger registreres der intet automatisk.',
    },
    {
      question: 'GPS-sporer GeoTapp medarbejderne?',
      answer:
        'Der er ingen løbende sporing. Medarbejderen stempler ind og ud fra smartphonen, og hver stempling knyttes til en GPS-position og et tidsstempel, som registreres i det øjeblik (start, pause, slut) og når der tages et bevisfoto. Mellem to stemplinger registreres der intet automatisk.',
    },
  ],
};

export default content;
