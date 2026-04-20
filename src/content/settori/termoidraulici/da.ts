import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App til VVS-installatører | GeoTapp — GPS, Rapporter & Dokumentation',
    description: 'GeoTapp er appen til VVS-installatører: GPS-verificerede rapporter, fotos af installationer og uændrelig dokumentation. Løs tvister med reel dokumentation. Prøv gratis.',
  },
  hero: {
    badge: 'App til VVS-installatører og Varmeanlægsinstallatører',
    h1_line1: 'App til VVS-installatører:',
    h1_line2: 'GPS-rapporter, fotodokumentation og nul tvister.',
    subtitle: 'GeoTapp registrerer hvert job på kedler og varmeanlæg med GPS, fotos og verificerbare tidsstempler. Kunden nægter udskiftede dele? Vis rapporten — ingen diskussion. Dine teknikere er beskyttet, din fakturering også.',
    cta_primary: 'Start gratis nu!',
    cta_note: 'Ingen binding. Svar inden for 12 arbejdstimer.',
  },
  pain: {
    title: 'Det problem enhver VVS-virksomhed kender godt',
    items: [
      {
        title: 'Kunden nægter udskiftede dele på kedlen',
        desc: 'Han siger, at du installerede andre komponenter end aftalt, eller at anlægget allerede var sådan. Uden fotodokumentation bliver tvisten ord mod ord.',
      },
      {
        title: 'Ingen dokumentation af installationen efter jobbet',
        desc: 'Teknikeren har afsluttet reparationen, men der er ingen fotoregistrering eller teknisk note. Hvis fejlen vender tilbage, er det umuligt at rekonstruere, hvad der blev gjort.',
      },
      {
        title: 'Akutjob er ikke sporbare',
        desc: 'Varmeanlægsfejl opstår på umulige tidspunkter. Teknikeren rykker ud, løser problemet, men der er intet tilbage at vise kunden eller forsikringen.',
      },
    ],
  },
  workflow: {
    title: 'Sådan fungerer det i tre trin',
    subtitle: 'Fra jobbet til kontoret — uden telefonopkald.',
    steps: [
      {
        title: 'Teknikeren registrerer jobbet på stedet',
        desc: 'Med GeoTapp TimeTracker stempler han ind og ud med GPS, fotograferer anlægget og kedlen og tilføjer noter om udskiftede dele fra sin smartphone.',
      },
      {
        title: 'Kontoret ser alt i realtid',
        desc: 'GeoTapp Flow modtager data øjeblikkeligt. Den ansvarlige ser sagen, den tildelte tekniker, fremskridt og fotodokumentation uden at ringe.',
      },
      {
        title: 'Rapporten er dit bevis',
        desc: 'Efter jobbet genererer systemet en forseglet rapport: GPS-tidsstempel, anlægsfotos og dele, tekniske noter. Uændrelig. Kunden kan verificere den selvstændigt.',
      },
    ],
  },
  differenza: {
    title: 'App til VVS-installatører: tidsregistrering eller jobcertificering?',
    subtitle: 'De fleste apps registrerer indtjek. GeoTapp producerer verificerbar dokumentation.',
    rows: [
      {
        label: 'Hvad det registrerer',
        competitor: 'Ind- og udtjekningstid',
        geotapp: 'Tid + verificeret GPS + anlægsfotos + udskiftede dele',
      },
      {
        label: 'Ved tvist',
        competitor: 'Data ikke forsvarlig',
        geotapp: 'Forseglet rapport, uændrelig',
      },
      {
        label: 'Jobdokumentation',
        competitor: 'Manuel eller fraværende',
        geotapp: 'Auto-genereret med GPS og fotos',
      },
      {
        label: 'Hvem kan verificere',
        competitor: 'Kun dit kontor',
        geotapp: 'Du, ordregiveren, en tredjepart',
      },
      {
        label: 'GDPR-overholdelse',
        competitor: 'Ofte at verificere',
        geotapp: 'Compliant by design, formularer inkluderet',
      },
    ],
  },
  prima_dopo: {
    title: 'Før GeoTapp. Efter GeoTapp.',
    prima: [
      'Kunden nægter, at ventilen blev udskiftet.',
      'Du har ingen fotos og ingen dokumenterede dele.',
      'Diskussionen varer i uger. Du risikerer ikke at blive betalt.',
      'Teknikeren har intet i hånden for at forsvare sig.',
    ],
    dopo: [
      'Kunden nægter, at ventilen blev udskiftet.',
      'Du åbner rapporten: foto af den fjernede del, den nye monterede, GPS-tidsstempel, tekniske noter.',
      'Du sender den. Tvisten slutter på et minut.',
      'Betalingen er sikret. Teknikeren er beskyttet.',
    ],
  },
  scenario: {
    title: 'Virkelig sag',
    body: 'En kunde bestrider udskiftningen af en kedelbrænder og nægter at betale fakturaen. Med GeoTapp åbner du rapporten: foto af den defekte, fjernede del, den nye installerede, GPS-tidsstempel for jobbet og tekniske noter fra teknikeren — alt automatisk genereret fra smartphonen på stedet.',
    resolution: 'Tvisten falder. Fakturaen betales fuldt ud.',
  },
  features: {
    title: 'App til VVS-installatører: hvad du finder i GeoTapp.',
    items: [
      {
        title: 'Verificerbar GPS-tidsstempeling',
        desc: 'Hvert besøg og afgang fra anlægget registreres med placering, tidsstempel og sag. Forsvarlig over for kunder og forsikringer.',
      },
      {
        title: 'Forseglede anlægsfotos',
        desc: 'Teknikeren fotograferer fra appen under og efter jobbet. Hvert billede er knyttet til GPS og tidsstempel — uændrelig efter generering.',
      },
      {
        title: 'Automatiske digitale jobrapporter',
        desc: 'Efter afslutning af arbejdet er rapporten klar: timer, fotos, udskiftede dele og underskrift. Teknikeren sender den til kunden direkte fra appen.',
      },
      {
        title: 'Sags- og akuthåndtering',
        desc: 'Tildel akutjob, overvåg fremskridt og modtag varsler, hvis en aktivitet ikke afsluttes til tiden.',
      },
      {
        title: 'Løneksport',
        desc: 'Eksporter månedlig fremmøde i formater kompatible med danske lønsystemer. Lønbehandling bliver en hurtig operation.',
      },
      {
        title: 'Dine teknikere er beskyttet',
        desc: 'En verificerbar rapport beskytter teknikeren mod ubegrundede anklager om dele eller timer. Den der arbejder godt beviser det med data.',
      },
    ],
  },
  cta_mid: {
    title: 'Vil du se, hvordan det fungerer på et rigtigt VVS-job?',
    body: 'Vi viser dig det komplette flow: fra åbning af sagen til den rapport kunden modtager. På 20 minutter ved du, om det er noget for dig.',
    cta: 'Start gratis nu!',
  },
  trust: {
    title: 'Vores rapporter kan ikke ændres. Ikke af dig. Ikke af os.',
    body: 'GeoTapp-rapporter genereres af systemet i øjeblikket for jobbet. Der er intet panel til at "korrigere" et tidspunkt eller flytte et foto. Dataene er som de er — digitalt signeret, med rigtig GPS.',
    badge: 'Verificerbar af alle — uden adgang til din konto',
  },
  testimonial: {
    quote: 'Med GeoTapp fotograferer mine teknikere anlægget før og efter hvert job. Tvister om dele er forsvundet. Fakturaer bliver betalt.',
    author: 'Marco S.',
    role: 'Ejer, bolig- og erhvervsvarmeinstallationer',
  },
  faq: {
    title: 'Ofte stillede spørgsmål',
    subtitle: 'Hvad VVS-installatører spørger os om mest, før de starter.',
    items: [
      {
        q: 'Er GeoTapp egnet som app til VVS-installatører?',
        a: 'Ja. GeoTapp bruges af VVS-installatører og varmeanlægsinstallatører til at håndtere jobs på kedler og anlæg med GPS-rapporter, fotos og verificerbare timer.',
      },
      {
        q: 'Kan jeg bruge GeoTapp til at dokumentere udskiftning af dele på kedler?',
        a: 'Ja. Teknikeren fotograferer fra appen den fjernede og den installerede del. Hvert billede er knyttet til GPS, tidsstempel og sag — inkluderet i den uændrede rapport.',
      },
      {
        q: 'Hjælper GeoTapp med at løse kundetvister om installationer?',
        a: 'Det er præcis det primære brugstilfælde: GPS-tidsstempel, fotodokumentation af dele og en forseglet rapport gør enhver ubegrundet tvist løsbar på få minutter.',
      },
    ],
  },
  cta: {
    title: 'Hvert godt udført VVS-job fortjener dokumentation. GeoTapp genererer den.',
    subtitle: 'Verificerbare rapporter, rigtig GPS, forseglede fotos. Dit arbejde er forsvarligt.',
    primary: 'Start gratis nu!',
    secondary: 'Se priser',
  },
  pricing_hint: {
    label: 'Fra',
    price: '3 €',
    per: 'operatør/måned',
    note: '14 dages gratis prøveperiode',
  },
  schema_sector_name: 'VVS-installatører',
  schema_faq: [
    {
      question: 'Fungerer GeoTapp som app til VVS-installatører?',
      answer: 'Ja. GeoTapp er appen til VVS-installatører og varmeanlægsinstallatører, der registrerer hvert job på kedler og anlæg med GPS, fotos og verificerbare tidsstempler. Teknikeren stempler ind fra stedet, kontoret ser alt i realtid og kunden modtager en forseglet rapport.',
    },
    {
      question: 'Hvordan certificerer jeg et kedelJob med GeoTapp?',
      answer: 'Teknikeren registrerer start og slut med verificeret GPS, fotograferer de udskiftede dele og tilføjer tekniske noter. Systemet genererer en forseglet rapport, som kunden kan verificere selvstændigt.',
    },
    {
      question: 'Håndterer GeoTapp flere teams af VVS-installatører på forskellige jobs?',
      answer: 'Ja. GeoTapp Flow lader ejeren koordinere flere teams, tildele akutjob, følge sagsstatus og indsamle fotodokumentation fra alle aktive steder i realtid.',
    },
    {
      question: 'Accepteres GeoTapp-rapporter ved tvister om varmeinstallationer?',
      answer: 'GeoTapp-rapporter er forseglet med GPS, tidsstempler og fotodokumentation. De er brugt med succes til at løse tvister om arbejde, der blev nægtet af den endelige kunde.',
    },
  ],
};

export default content;
