import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App til rengøringsfirmaer: GPS og foto pr. opgave',
    description: 'Stempling med GPS kun ved start og slut og foto af hver opgave: dokumentationen, du kan vise kunden, når vedkommende bestrider en ydelse. 14 dage gratis.',
  },

  hero: {
    badge: 'App til rengøringsfirmaer, facility management og multiservice',
    h1_line1: 'Appen til rengøringsfirmaer,',
    h1_line2: 'der forsegler hver opgave.',
    subtitle:
      'GeoTapp er appen til rengøringsfirmaer, der gør hver opgave til dokumentation, du kan vise. Kunderne bestrider, og et skrevet klokkeslæt er ikke nok. GeoTapp registrerer positionen ved hver stempling, samler bevisfotos og lukker det hele i en forseglet rapport, hvor enhver ændring kan opdages, og som kunden selv kan kontrollere.',
    cta_primary: 'Prøv det på en rigtig opgave',
    cta_note: '14 dage, op til 50 medarbejdere i felten, intet kreditkort.',
  },

  pain: {
    title: 'Hvis du ikke kan dokumentere det, er det aldrig sket for kunden.',
    items: [
      {
        title: 'Kunden nægter, at opgaven er udført',
        desc: 'Kunden siger, at området ikke er gjort rent, eller at medarbejderen ikke var der. Du har et skrevet klokkeslæt, kunden har sin version. Uden verificerbar dokumentation risikerer du kontrakten.',
      },
      {
        title: 'Medarbejdere i felten, du ikke kan kontrollere',
        desc: 'Du kan ikke være på alle steder. Du ved ikke, om arbejdet er gjort, før kunden klager, og så er det for sent at genskabe noget.',
      },
      {
        title: 'Tilsynet beder om ægte dokumentation',
        desc: 'Arbejdstider, tilstedeværelse, overarbejde, pauser: en tidsseddel er ikke nok. Den, der kontrollerer, vil se registrerede tider, ikke tider gættet efter hukommelsen.',
      },
    ],
  },

  prima_dopo: {
    title: 'Sådan er det nu. Sådan er det med GeoTapp.',
    prima: [
      'Kunden ringer og siger, at badeværelset ikke er gjort rent.',
      'Medarbejderen siger “jeg har gjort det”. Kunden siger “det har han ikke”.',
      'Du har intet i hånden til at bevise noget.',
      'Diskussionen trækker ud i dagevis. Nogle gange mister du kontrakten.',
    ],
    dopo: [
      'Kunden ringer og siger, at badeværelset ikke er gjort rent.',
      'Du åbner rapporten for opgaven: foto af det rene badeværelse, tidspunkt, position.',
      'Du sender den til kunden. Du har svaret med data, og kunden kontrollerer dem selv.',
      'Du har noget at vise. Medarbejderen har også noget i hånden.',
    ],
  },

  scenario: {
    title: 'Et typisk tilfælde',
    body: 'Kunden siger, at badeværelset ikke er gjort rent. Med GeoTapp åbner du rapporten og viser fotoet af rummet, tidspunktet for billedet og positionen, alt sammen lavet automatisk af medarbejderens app, mens opgaven blev udført.',
    resolution: 'Du har svaret med data, ikke med dit ord mod kundens.',
  },

  differenza: {
    title: 'Stempling eller verificerbar dokumentation af arbejdet.',
    subtitle: 'De fleste apps registrerer data. GeoTapp laver dokumentation.',
    rows: [
      {
        label: 'Hvad den registrerer',
        competitor: 'Tidspunkt for ind- og udstempling',
        geotapp: 'Tidspunkt + position ved stempling + foto + udført arbejde',
      },
      {
        label: 'Hvem kan kontrollere',
        competitor: 'Kun dit kontor',
        geotapp: 'Dig, kunden eller en tredjepart, hver for sig',
      },
      {
        label: 'Ved en tvist',
        competitor: 'Kun dit ord',
        geotapp: 'Forseglet rapport, enhver ændring kan opdages',
      },
      {
        label: 'Fotodokumentation',
        competitor: 'Mangler eller er løsrevet',
        geotapp: 'Vedlagt rapporten med tidspunkt og position',
      },
      {
        label: 'GDPR',
        competitor: 'Skal ofte undersøges nærmere',
        geotapp: 'Bygget til at holde sig inden for rammerne af GDPR, blanketter inkluderet',
      },
      {
        label: 'Overblik opdateret ved hver stempling',
        competitor: 'Nej',
        geotapp: 'Ja, alle steder, alle medarbejdere',
      },
    ],
  },

  non_gestionale: {
    title: 'Det er ikke bare et administrationssystem.',
    subtitle: 'Administrationssystemer organiserer arbejdet. GeoTapp organiserer det og forsegler det derudover.',
    items: [
      {
        label: 'Hovedformål',
        gestionale: 'Planlægge og organisere',
        geotapp: 'Lave verificerbar dokumentation',
      },
      {
        label: 'Hvad det leverer',
        gestionale: 'Data internt i dit system',
        geotapp: 'Forseglede rapporter, som tredjeparter kan kontrollere',
      },
      {
        label: 'Ved en tvist',
        gestionale: 'Du viser data, som kun du kan læse',
        geotapp: 'Du sender en rapport, som kunden selv kontrollerer',
      },
      {
        label: 'Værdi for kunden',
        gestionale: 'Ingen, det er et internt værktøj',
        geotapp: 'Høj: kunden kontrollerer den selv',
      },
      {
        label: 'Fotodokumentation',
        gestionale: 'Ikke med eller adskilt',
        geotapp: 'Integreret i rapporten med GPS og tidsstempel',
      },
    ],
  },

  workflow: {
    title: 'Fra byggepladsen til kontoret bliver hver opgave til dokumentation.',
    subtitle: 'Tre trin. Intet papir. Ingen opkald.',
    steps: [
      {
        title: 'Medarbejderen forsegler beviset på stedet',
        desc: 'Med GeoTapp TimeTracker registrerer medarbejderen indstempling, pauser, udstempling, fotos af rummene og noter fra smartphonen. Positionen aflæses af telefonen i det øjeblik og skrives ikke ind i hånden, og enhver senere ændring kan opdages.',
      },
      {
        title: 'Kontoret er opdateret ved hver stempling',
        desc: 'Flow viser på ét skærmbillede, hvem der har stemplet, hvor og hvornår. Du ser status for hver bygning, får en besked, hvis en vagt står åben, og tildeler sager, uden at jagte nogen.',
      },
      {
        title: 'Rapporten er allerede klar. Forseglet: enhver ændring kan ses.',
        desc: 'Når vagten er slut, laver systemet automatisk en forseglet rapport med positioner, fotos og forsegling. Kunden modtager den og kontrollerer den selv, uden adgang til dit system og uden at skulle stole på dit ord.',
      },
    ],
  },

  features: {
    title: 'App til rengøringsfirmaer: færre diskussioner, mere dokumentation.',
    items: [
      {
        title: 'Svar på enhver indsigelse med data',
        desc: 'Når hver opgave har en verificerbar rapport, har du dokumentationen til at svare med det samme. Færre mundtlige forhandlinger, der varer i uger.',
      },
      {
        title: 'Reel kontrol over alle steder',
        desc: 'Du ved, hvor og hvornår hver medarbejder har stemplet, så snart stemplingen kommer ind, på alle bygninger og fra enhver enhed. Mellem to stemplinger registreres der intet automatisk.',
      },
      {
        title: 'Rapporter, der kan forsvares overalt',
        desc: 'Hver rapport er forseglet: enhver ændring kan opdages. Den, der modtager den, kunde, tilsyn eller rådgiver, kan selv kontrollere den.',
      },
      {
        title: 'Klar til tilsynet',
        desc: 'Arbejdstider, pauser, overarbejde og tillæg registreres vagt for vagt og kommer med i oversigten til din lønbogholder. Ved et tilsyn er dokumentationen allerede i orden.',
      },
      {
        title: 'Styring af flere steder uden opkald',
        desc: 'Mange adresser, ét skærmbillede. Du tildeler sager, ser, hvem der har stemplet hvor, og får en besked, hvis en vagt står åben.',
      },
      {
        title: 'Dine medarbejdere er beskyttet',
        desc: 'En verificerbar rapport giver også medarbejderen noget i hånden mod ubegrundede beskyldninger. Den, der arbejder godt, kan vise det.',
      },
    ],
  },

  cosa_cambia: {
    title: 'Det, der virkelig ændrer sig.',
    items: [
      {
        title: 'Du behøver ikke længere stole blindt på medarbejderne.',
        desc: 'Ikke fordi de ikke er pålidelige, men fordi du ikke behøver. Systemet laver dokumentationen i det øjeblik, opgaven udføres, uanset hvad de fortæller dig. Data forbliver, som de blev registreret.',
      },
      {
        title: 'Du behøver ikke længere forsvare dig mundtligt.',
        desc: 'Du slipper for at forklare, retfærdiggøre og huske. Når en kunde bestrider noget, åbner du rapporten og sender den. Det er ikke dit ord mod kundens. Det er et verificerbart dokument.',
      },
      {
        title: 'Du har verificerbar dokumentation. Altid.',
        desc: 'Hver afsluttet opgave bliver automatisk til en rapport: positioner, fotos, tidspunkter og forsegling. Du behøver ikke gøre noget ekstra. Systemet gør det, mens dine medarbejdere arbejder.',
      },
    ],
  },

  prova_visiva: {
    title: 'Det, du ser, og det, kunden ser.',
    subtitle: 'Appen til dem, der arbejder i felten. Rapporten til dem, der skal svare.',
  },

  cta_mid: {
    title: 'Vil du se, hvordan det virker på en rigtig opgave?',
    body: 'Prøv det på en rigtig opgave, fra medarbejderen, der åbner opgaven, til rapporten, som kunden modtager: 14 dage gratis, uden kreditkort.',
    cta: 'Prøv gratis i 14 dage',
  },

  testimonial: {
    quote:
      'Før havde vi altid en kunde, der bestred noget. Siden vi bruger GeoTapp, sender vi rapporten, og samtalen ændrer sig med det samme: man taler om data, ikke om ord. Diskussionerne bliver meget kortere.',
    author: 'Roberta M.',
    role: 'Driftschef, industrirengøring - Norditalien',
  },

  trust: {
    title: 'Hvis en af vores rapporter ændres, kan det ses. Også hvis vi gør det.',
    body:
      'GeoTapp-rapporterne laves af systemet, mens opgaven udføres. Når rapporten er forseglet, brydes forseglingen, hvis man retter et klokkeslæt eller flytter et foto, og kontrollen melder det. Den, der modtager rapporten, kunde, tilsyn eller rådgiver, kan selv kontrollere den.',
    badge: 'Kan kontrolleres af enhver, uden adgang til din konto',
  },

  faq: {
    title: 'Ofte stillede spørgsmål',
    subtitle: 'Det, vi oftest bliver spurgt om, før man går i gang.',
    items: [
      {
        q: 'Er GeoTapp bare en stemplingsapp til rengøringsfirmaer?',
        a: 'Nej. GeoTapp er et system til verificerbar dokumentation af arbejdet, ikke bare en stemplingsapp. Stemplingsapps registrerer et klokkeslæt. GeoTapp laver en forseglet rapport med position, fotodokumentation og tidsstempel, som kunden selv kan kontrollere. Forskellen mellem “det står der” og “det kan dokumenteres”.',
      },
      {
        q: 'Kan det bruges sammen med den gældende overenskomst?',
        a: 'GeoTapp registrerer arbejdstider, pauser, overarbejde og tillæg, også nat- og helligdagsarbejde, og eksporterer dem til Excel eller CSV til din lønbogholder, som anvender dem efter den gældende overenskomst. Ved et tilsyn har du al dokumentation klar.',
      },
      {
        q: 'Hvordan styrer jeg hold fordelt på flere steder på samme tid?',
        a: 'Med GeoTapp Flow har du ét skærmbillede for alle steder. Du ser, hvem der har stemplet hvor, så snart stemplingen kommer ind, tildeler sager og får en besked, hvis en vagt står åben. Ingen opkald, ingen e-mails.',
      },
      {
        q: 'Hvordan kontrollerer jeg, at medarbejderne har udført arbejdet?',
        a: 'Hver opgave åbnes og lukkes med position registreret af medarbejderens smartphone. Medarbejderen sender bevisfotos knyttet til sagen, med tidspunkt og position. Rapporten laves automatisk og forsegles ved afslutningen: enhver ændring kan ses.',
      },
      {
        q: 'Overholder GeoTapp GDPR, når det gælder medarbejdernes position?',
        a: 'GeoTapp er bygget til at holde sig inden for rammerne af GDPR og Datatilsynets vejledning: det registrerer kun positionen, når medarbejderen stempler (indstempling, pauser, udstempling) eller tager et bevisfoto, lader informationen underskrive i appen før stempling og indsamler ikke unødvendige data.',
      },
      {
        q: 'Virker det også til facility management og multiservice?',
        a: 'Ja. Rengøringsfirmaer, multiservice, facility management og alle virksomheder med medarbejdere fordelt på flere steder bruger GeoTapp. Det passer fra det lille hold til virksomheden med hundredvis af medarbejdere, uden komplicerede opsætninger.',
      },
      {
        q: 'Hvad koster GeoTapp for et rengøringsfirma?',
        a: 'GeoTapp Flow starter ved 39 € pr. måned; TimeTracker-pladserne til medarbejderne koster 3 € pr. måned pr. plads op til 25, 2,50 € fra plads 26. Abonnementet har en mindste varighed på 12 måneder. Først kan du prøve det gratis i 14 dage, uden kort.',
      },
    ],
  },

  cta: {
    title: 'Dine medarbejdere arbejder godt. Sørg for, at man kan se det.',
    subtitle:
      'Hver dag bliver arbejdet udført. Problemet er, at der uden verificerbar dokumentation står dit ord mod kundens, når nogen bestrider noget. GeoTapp gør hver opgave til dokumentation, du kan vise.',
    primary: 'Prøv gratis i 14 dage',
    secondary: 'Se priserne',
  },

  pricing_hint: {
    label: 'TimeTracker-pladser fra',
    per: 'pr. medarbejder pr. måned, plus Flow-abonnement fra 39 € pr. måned',
    note: 'Gratis prøveperiode i 14 dage',
  },

  schema_sector_name: 'Rengøringsfirmaer',

  schema_faq: [
    {
      question: 'Er GeoTapp bare en stemplingsapp til rengøringsfirmaer?',
      answer: 'Nej. GeoTapp er appen og softwaren til rengøringsfirmaer og multiservice, der går videre end stempling: den laver forseglede rapporter med positioner, fotos og tidspunkter, som kunden selv kontrollerer, ikke bare et register over timer.',
    },
    {
      question: 'Kan det bruges sammen med den gældende overenskomst?',
      answer: 'GeoTapp registrerer arbejdstider, pauser, overarbejde og tillæg og eksporterer dem til Excel eller CSV til din lønbogholder, som anvender dem efter den gældende overenskomst.',
    },
    {
      question: 'Hvordan styrer jeg flere steder på samme tid?',
      answer: 'Ét skærmbillede for alle steder. Du ser, hvem der har stemplet hvor, så snart stemplingen kommer ind, tildeler sager og får en besked, hvis en vagt står åben, uden telefonopkald.',
    },
    {
      question: 'Hvordan dokumenterer jeg, at arbejdet er udført?',
      answer: 'Hver opgave åbnes og lukkes med registreret position. Medarbejderen sender bevisfotos knyttet til sagen. Rapporten laves automatisk og forsegles ved afslutningen: enhver ændring kan ses.',
    },
    {
      question: 'Overholder GeoTapp GDPR, når det gælder medarbejdernes position?',
      answer: 'Bygget til at holde sig inden for rammerne af GDPR: det registrerer kun positionen, når medarbejderen stempler eller tager et bevisfoto, aldrig løbende, og lader informationen underskrive i appen før stempling.',
    },
    {
      question: 'Virker det også til facility management og multiservice?',
      answer: 'Ja. GeoTapp passer til rengøringsfirmaer, multiservice og facility management, fra det lille hold til virksomheden med hundredvis af medarbejdere.',
    },
    {
      question: 'Hvad koster det?',
      answer: 'GeoTapp Flow fra 39 € pr. måned, plus TimeTracker-pladser fra 3 € pr. medarbejder pr. måned. Abonnementet har en mindste varighed på 12 måneder. Først kan du prøve det gratis i 14 dage, uden kort.',
    },
  ],
};

export default content;
