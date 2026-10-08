import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    // 2026-10-08: title ripristinato sulla query che portava impressioni (GSC); le
    // passate di lingua del 30/09-01/10 l'avevano sostituito. Guardia: test/sector-title-keywords.test.js
    title: 'App til VVS-installatører: rapporter med GPS og fotos',
    description: 'Arbejdsrapporter med GPS ved stemplingen og foto af hvert anlæg: dokumentationen, du kan vise, når kunden bestrider kedler og udskiftede dele. Prøv gratis i 14 dage.',
  },
  hero: {
    badge: 'App til varmeinstallatører og varmeanlægsmontører',
    h1_line1: 'App til varmeinstallatører:',
    h1_line2: 'arbejdsrapporter med GPS, fotodokumentation og færre tvister.',
    subtitle: 'GeoTapp registrerer hver opgave på kedler og anlæg med GPS, fotos og registrerede tidspunkter. Nægter kunden, at delene er skiftet? Vis arbejdsrapporten i stedet for at diskutere.',
    cta_primary: 'Prøv gratis i 14 dage',
    cta_note: 'Prøven binder dig ikke til noget. Intet kreditkort.',
  },
  pain: {
    title: 'Det problem, enhver VVS-virksomhed kender godt',
    items: [
      {
        title: 'Kunden nægter, at delene på kedlen er udskiftet',
        desc: 'Kunden siger, at du har skiftet andre komponenter end dem, I aftalte, eller at anlægget allerede var sådan. Uden fotodokumentation bliver bestridelsen ord mod ord.',
      },
      {
        title: 'Ingen dokumentation af anlægget efter opgaven',
        desc: 'Teknikeren er færdig med reparationen, men der er hverken foto eller teknisk note. Hvis fejlen kommer igen, er det umuligt at genskabe, hvad der blev gjort.',
      },
      {
        title: 'Akutte opgaver om natten og i weekenden kan ikke spores',
        desc: 'Fejl på varmeanlægget opstår på umulige tidspunkter. Teknikeren rykker ud og løser problemet, men der er intet tilbage, som kan vises til kunden eller forsikringen.',
      },
    ],
  },
  workflow: {
    title: 'Sådan fungerer det i tre trin',
    subtitle: 'Fra byggepladsen til kontoret uden telefonopkald.',
    steps: [
      {
        title: 'Teknikeren registrerer opgaven på stedet',
        desc: 'Med GeoTapp TimeTracker stempler teknikeren ind, holder pause og stempler ud med position, tager fotos af anlægget og kedlen og skriver noter om udskiftede komponenter fra smartphonen.',
      },
      {
        title: 'Kontoret ser det hele, så snart det kommer ind',
        desc: 'GeoTapp Flow modtager dataene, så snart telefonen har dækning. Den ansvarlige ser sagen, den tildelte tekniker, fremdriften og fotodokumentationen uden at ringe.',
      },
      {
        title: 'Arbejdsrapporten er dit bevis',
        desc: 'Når opgaven er slut, laver systemet en forseglet rapport: GPS-tidspunkt, fotos af anlæg og komponenter, tekniske noter. Enhver ændring kan opdages. Kunden kan selv kontrollere den.',
      },
    ],
  },
  differenza: {
    title: 'App til varmeinstallatører: registrering eller verificerbar dokumentation?',
    subtitle: 'De fleste apps registrerer klokkeslættet. GeoTapp laver verificerbar dokumentation.',
    rows: [
      {
        label: 'Hvad den registrerer',
        competitor: 'Tidspunkt for ind- og udstempling',
        geotapp: 'Tidspunkt + position ved stempling + foto af anlægget + udskiftede komponenter',
      },
      {
        label: 'Ved en tvist',
        competitor: 'Kun dit ord',
        geotapp: 'Forseglet rapport, enhver ændring kan opdages',
      },
      {
        label: 'Dokumentation af opgaven',
        competitor: 'Manuel eller ikke-eksisterende',
        geotapp: 'Laves automatisk med GPS og foto',
      },
      {
        label: 'Hvem kan kontrollere',
        competitor: 'Kun dit kontor',
        geotapp: 'Dig, bygherren eller en tredjepart',
      },
      {
        label: 'GDPR',
        competitor: 'Skal ofte undersøges nærmere',
        geotapp: 'Bygget til at holde sig inden for rammerne af GDPR, blanketter inkluderet',
      },
    ],
  },
  prima_dopo: {
    title: 'Før GeoTapp. Efter GeoTapp.',
    prima: [
      'Kunden nægter, at ventilen er skiftet.',
      'Du har hverken fotos eller dokumenterede materialer.',
      'Diskussionen varer i uger. Du risikerer ikke at blive betalt.',
      'Teknikeren har intet i hånden til at forsvare sig.',
    ],
    dopo: [
      'Kunden nægter, at ventilen er skiftet.',
      'Du åbner arbejdsrapporten: foto af den fjernede komponent, af den nye, GPS-tidspunkt, tekniske noter.',
      'Du sender den til kunden, og han kontrollerer den selv.',
      'Du har noget at vise. Teknikeren har også noget i hånden.',
    ],
  },
  scenario: {
    title: 'Et typisk tilfælde',
    body: 'En kunde bestrider udskiftningen af en brænder på kedlen og nægter at betale fakturaen. Med GeoTapp åbner du arbejdsrapporten: foto af den defekte komponent, der blev fjernet, af den nye, der blev monteret, GPS-tidspunkt for opgaven og teknikerens tekniske noter, alt sammen lavet automatisk af smartphonen på stedet.',
    resolution: 'I stedet for ord mod ord er der et dokument, som kunden selv kan kontrollere.',
  },
  features: {
    title: 'App til varmeinstallatører: det får du i GeoTapp.',
    items: [
      {
        title: 'Verificerbar stempling med GPS',
        desc: 'Hver indstempling, pause og udstempling registreres med position, tidsstempel og sag. Du kan vise den til kunden og forsikringen, når det er nødvendigt.',
      },
      {
        title: 'Fotodokumentation af anlægget',
        desc: 'Teknikeren tager fotos fra appen under og efter opgaven. Hvert billede knyttes til position og tidspunkt og kommer med i den forseglede rapport: enhver senere ændring kan opdages.',
      },
      {
        title: 'Automatiske digitale arbejdsrapporter',
        desc: 'Når arbejdet er slut, er rapporten allerede klar: timer, fotos, udskiftede komponenter. Kontoret sender den til kunden fra Flow med et klik.',
      },
      {
        title: 'Styring af sager og akutte opgaver',
        desc: 'Tildel akutte opgaver, og følg fremdriften sag for sag.',
      },
      {
        title: 'Eksport af registreringer til lønbehandling',
        desc: 'Eksportér månedens registreringer til Excel eller CSV, klar til din lønbogholder. Lønbehandlingen bliver hurtig.',
      },
      {
        title: 'Også dine teknikere har et bevis',
        desc: 'En verificerbar rapport giver teknikeren noget i hånden mod ubegrundede beskyldninger om materialer eller timer. Den, der arbejder godt, kan vise det med data.',
      },
    ],
  },
  cta_mid: {
    title: 'Vil du se, hvordan det virker på en rigtig VVS-opgave?',
    body: 'Prøv det på en rigtig opgave, fra sagen åbnes, til arbejdsrapporten kunden modtager: 14 dage gratis, uden kreditkort.',
    cta: 'Prøv gratis i 14 dage',
  },
  trust: {
    title: 'Enhver ændring i vores rapporter kan ses. Hverken af dig eller af os.',
    body: 'GeoTapp-rapporterne laves af systemet, mens opgaven udføres. Når rapporten er forseglet, brydes forseglingen, hvis man retter et klokkeslæt eller flytter et foto, og kontrollen melder det.',
    badge: 'Kan kontrolleres af enhver, uden adgang til din konto',
  },
  testimonial: {
    quote: 'Med GeoTapp fotograferer mine teknikere anlægget før og efter hver opgave. Når en kunde bestrider materialerne, har vi fotos at vise.',
    author: 'Marco S.',
    role: 'Indehaver, VVS-anlæg i boliger og erhverv',
  },
  faq: {
    title: 'Ofte stillede spørgsmål',
    subtitle: 'Det, varmeinstallatører oftest spørger om, før de går i gang.',
    items: [
      {
        q: 'Passer GeoTapp som app til varmeinstallatører?',
        a: 'Ja. Varmeinstallatører og varmeanlægsmontører bruger GeoTapp til opgaver på kedler, varmeanlæg og sanitet, med arbejdsrapporter med GPS, fotos og verificerbare timer.',
      },
      {
        q: 'Kan jeg bruge GeoTapp til at dokumentere udskiftning af komponenter på kedler?',
        a: 'Ja. Teknikeren tager fotos fra appen af den fjernede og den monterede komponent. Hvert billede knyttes til GPS, tidsstempel og sag og indgår i den forseglede arbejdsrapport.',
      },
      {
        q: 'Hjælper GeoTapp med at løse kunders indsigelser om anlæg?',
        a: 'Det er netop det vigtigste formål: GPS-tidspunkt, fotodokumentation af materialerne og den forseglede arbejdsrapport giver dig et dokument, du kan vise, når en indsigelse er ubegrundet.',
      },
    ],
  },
  cta: {
    title: 'Enhver VVS-opgave, der er udført godt, fortjener et bevis. GeoTapp laver det.',
    subtitle: 'Verificerbare rapporter, position ved stemplingerne, forseglede fotos i rapporten.',
    primary: 'Prøv gratis i 14 dage',
    secondary: 'Se priserne',
  },
  pricing_hint: {
    label: 'TimeTracker-pladser fra',
    per: 'pr. medarbejder pr. måned, plus Flow-abonnement fra 39 € pr. måned',
    note: 'Gratis prøveperiode i 14 dage',
  },
  schema_sector_name: 'Varmeinstallatører',
  schema_faq: [
    {
      question: 'Virker GeoTapp som app til varmeinstallatører?',
      answer: 'Ja. GeoTapp er appen til varmeinstallatører og varmeanlægsmontører, der registrerer hver opgave på kedler og anlæg med GPS, fotos og registrerede tidspunkter. Teknikeren stempler i felten, kontoret ser det hele, så snart det kommer ind, og kunden får en forseglet arbejdsrapport.',
    },
    {
      question: 'Hvordan forsegler jeg en opgave på en kedel med GeoTapp?',
      answer: 'Teknikeren registrerer i GeoTapp start- og sluttidspunkt med position, fotos af de udskiftede komponenter og tekniske noter. Systemet laver en forseglet arbejdsrapport, som kunden selv kan kontrollere.',
    },
    {
      question: 'Hjælper GeoTapp med at styre flere VVS-teams på forskellige opgaver?',
      answer: 'Ja. Med GeoTapp Flow kan indehaveren koordinere flere teams, tildele akutte sager, følge opgavernes status og samle fotodokumentation fra alle aktive byggepladser, så snart den er uploadet.',
    },
    {
      question: 'Kan GeoTapp-rapporterne bruges, hvis kunden bestrider noget om varmeanlæg?',
      answer: 'GeoTapp-rapporterne er forseglet med GPS, tidsstempel og fotodokumentation. Kunden kontrollerer dem selv. De hjælper med at vise, at dokumentet ikke er ændret; alene er de hverken et absolut bevis for det skete eller juridisk rådgivning.',
    },
  ],
};

export default content;
