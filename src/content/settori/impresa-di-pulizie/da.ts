import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App til Rengøringsfirma: GPS-Teamstyring & Servicebevis | GeoTapp',
    description:
      'Styr rengøringsteams, vagtplaner og fremmøde med GPS i realtid. Automatisk servicebevis, nul kundetvister. GDPR-kompatibel rengørings-app.',
  },

  hero: {
    badge: 'App til rengøringsfirmaer og multiservice',
    h1_line1: 'Dit rengøringsfirma,',
    h1_line2: 'styret i realtid.',
    subtitle:
      'GPS-stempling, automatisk servicebevis og vagtstyring i én app. Ingen regneark, ingen tvister. Kunden klager? Send rapporten, og diskussionen er slut.',
    cta_primary: 'Prøv GeoTapp gratis i 14 dage',
    cta_note: 'Ingen binding. Intet kreditkort påkrævet.',
  },

  pain: {
    title: 'Problemer vi løser hver dag',
    items: [
      {
        title: 'Kunder bestrider de arbejdede timer?',
        desc: 'Hver stempling er GPS-verificeret og tidsstemplet. Send rapporten, og diskussionen slutter på tredive sekunder.',
      },
      {
        title: 'Papirtimesedler er upålidelige?',
        desc: 'Automatisk registrering fra smartphonen, ingen manuelle indtastninger. Dataene er hvad de er — og kan ikke ændres.',
      },
      {
        title: 'Svært at koordinere flere teams?',
        desc: 'Se hvor alle er i realtid, på alle lokationer, fra ét dashboard. Ingen opkald.',
      },
    ],
  },

  prima_dopo: {
    title: 'Hvad der sker nu. Hvad der sker med GeoTapp.',
    prima: [
      'Kunden ringer og siger, at badeværelset ikke er gjort rent.',
      'Rengøringsmedarbejderen siger "Det har jeg gjort". Kunden siger "Nej, det har du ikke".',
      'Du har intet at bevise noget med.',
      'Diskussionen trækker ud i dagevis. Nogle gange mister du kontrakten.',
    ],
    dopo: [
      'Kunden ringer og siger, at badeværelset ikke er gjort rent.',
      'Du åbner opgaverapporten: foto af det rene badeværelse, tidspunkt, GPS.',
      'Du sender den. Diskussionen slutter på tredive sekunder.',
      'Kontrakten er sikker. Medarbejderen er beskyttet.',
    ],
  },

  workflow: {
    title: 'Sådan virker det',
    subtitle: 'Tre enkle trin. Nul papir. Nul opkald.',
    steps: [
      {
        title: 'Medarbejderen stempler med GPS',
        desc: 'Åbner og lukker vagten fra sin smartphone. GeoTapp registrerer ægte GPS-koordinater, fotos og tidsstempel — fuldautomatisk, manipulationssikret.',
      },
      {
        title: 'Lederen ser alt i realtid',
        desc: 'Ét dashboard for alle lokationer. Vid præcis hvem der er på stedet, hvor og siden hvornår — uden at jage nogen.',
      },
      {
        title: 'Rapporten er klar automatisk',
        desc: 'Ved vagtens afslutning genererer systemet en forseglet rapport med GPS, fotos og digital signatur. Send den til kunden — uafhængigt verificerbar.',
      },
    ],
  },

  differenza: {
    title: 'Stempling vs Servicebevis.',
    subtitle: 'De fleste apps registrerer tider. GeoTapp producerer beviser for din kunde.',
    rows: [
      {
        label: 'Hvad det registrerer',
        competitor: 'Ind-/udstemplingstid',
        geotapp: 'Tid + verificeret GPS + fotos + udførte opgaver',
      },
      {
        label: 'Hvem kan verificere',
        competitor: 'Kun dit kontor',
        geotapp: 'Dig, kunden, en tredjepart — selvstændigt',
      },
      {
        label: 'Ved tvister',
        competitor: 'Data ikke forsvarlige',
        geotapp: 'Forseglet rapport, manipulationssikret',
      },
      {
        label: 'Fotodokumentation',
        competitor: 'Manglende eller frakoblet',
        geotapp: 'Vedhæftet rapport med tidsstempel og GPS',
      },
      {
        label: 'GDPR-overholdelse',
        competitor: 'Ofte at kontrollere',
        geotapp: 'Kompatibel by design, formularer inkluderet',
      },
    ],
  },

  features: {
    title: 'App til rengøringsfirma: servicebevis, ikke bare stempling.',
    items: [
      {
        title: 'Automatisk servicebevis',
        desc: 'Hver afsluttet opgave genererer en rapport med GPS, fotos og tidsstempel. Kunden modtager den og verificerer selvstændigt.',
      },
      {
        title: 'Reel kontrol over alle lokationer',
        desc: 'Se i realtid hvem der er aktiv hvor, på alle bygninger samtidig. Ingen opkald, ingen e-mails.',
      },
      {
        title: 'Forsvarlige rapporter overalt',
        desc: 'Hver rapport er digitalt signeret og manipulationssikret. Gyldig over for en kunde, en inspektør eller en advokat.',
      },
      {
        title: 'Vagt- og teamstyring',
        desc: 'Tildel vagter, styr opgaver og modtag automatiske advarsler, hvis en opgave ikke åbnes eller lukkes til tiden.',
      },
      {
        title: 'Fotodokumentation',
        desc: 'Medarbejdere tager fotos direkte fra appen. Hvert billede er geotagget med tidsstempel — visuelt bevis for det udførte arbejde.',
      },
      {
        title: 'Dit personale er beskyttet',
        desc: 'En verificerbar rapport beskytter også medarbejderen mod grundløse anklager. Godt arbejde bevises af data.',
      },
    ],
  },

  testimonial: {
    quote:
      'Siden vi begyndte at bruge GeoTapp, løses kundetvister på et minut. Vi sender rapporten med fotos og GPS, og diskussionen stopper der. Vi har ikke mistet en eneste kontrakt på et år.',
    author: 'Susanne M.',
    role: 'Ejer, erhvervsrengøringsfirma — Danmark',
  },

  faq: {
    title: 'Ofte stillede spørgsmål',
    subtitle: 'Det vi oftest bliver spurgt om før start.',
    items: [
      {
        q: 'Hvordan virker GPS-stempling for rengøringsfirmaer?',
        a: 'Medarbejderen stempler ind og ud fra sin smartphone. GeoTapp registrerer GPS-koordinaterne i det øjeblik — ikke indtastet manuelt. Hver stempling er certificeret med tidsstempel og position verificerbar af kunden.',
      },
      {
        q: 'Kan jeg bevise over for kunden, at servicen blev udført?',
        a: 'Ja. GeoTapp genererer automatisk en forseglet rapport med GPS, fotos og tidsstempel efter hver opgave. Kunden modtager den og verificerer selvstændigt.',
      },
      {
        q: 'Er GeoTapp GDPR-kompatibel til GPS-registrering af medarbejdere?',
        a: 'Ja. GeoTapp sporer kun placering i aktiv arbejdstid, inkluderer skabeloner til medarbejderinformation og indsamler ikke unødvendige data.',
      },
      {
        q: 'Hvordan styrer jeg teams på flere lokationer samtidig?',
        a: 'Med GeoTapp Flow har du ét dashboard for alle lokationer. Se i realtid hvem der er aktiv hvor, tildel opgaver og modtag automatiske advarsler.',
      },
      {
        q: 'Er papirtimesedler stadig nødvendige?',
        a: 'Nej. GeoTapp erstatter papirtimesedler fuldstændigt med automatisk GPS-registrering fra smartphones. Data kan eksporteres til lønbehandling.',
      },
      {
        q: 'Hvad koster GeoTapp for et rengøringsfirma?',
        a: 'Planerne starter fra få euro per medarbejder per måned. Prøv gratis i 14 dage — uden binding.',
      },
    ],
  },

  cta: {
    title: 'Dine medarbejdere gør godt arbejde. Sørg for, at kunden ser det.',
    subtitle:
      'Hver opgave bliver til verificerbart servicebevis. Nul tvister, nul tabte kontrakter.',
    primary: 'Start gratis nu!',
    secondary: 'Se Priser',
  },

  pricing_hint: {
    label: 'Fra',
    per: 'medarbejder/måned',
    note: '14 dages gratis prøveperiode',
  },

  schema_sector_name: 'Rengøringsfirma',

  schema_faq: [
    {
      question: 'Hvordan virker GPS-stempling for rengøringsfirmaer?',
      answer:
        'Medarbejderen stempler fra sin smartphone. GeoTapp registrerer GPS-koordinater — ikke manuelt indtastet. Hver stempling er certificeret med tidsstempel og position verificerbar af kunden.',
    },
    {
      question: 'Kan jeg bevise over for kunden, at servicen blev udført?',
      answer:
        'Ja. GeoTapp genererer automatisk en forseglet rapport med GPS, fotos og tidsstempel. Kunden modtager den og verificerer selvstændigt.',
    },
    {
      question: 'Er GeoTapp GDPR-kompatibel til GPS-registrering af medarbejdere?',
      answer:
        'Ja. GeoTapp sporer kun placering i aktiv arbejdstid, inkluderer skabeloner til medarbejderinformation og indsamler ikke unødvendige data.',
    },
  ],
};

export default content;
