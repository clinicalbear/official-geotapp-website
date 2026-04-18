import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App til Elektrikere | GeoTapp — GPS Arbejdsrapporter & Bevis',
    description: 'GeoTapp er appen til elektrikere: GPS-verificerede arbejdsrapporter, installationsbilleder og manipulationssikre registreringer. Luk tvister med ægte beviser. Prøv gratis.',
  },
  hero: {
    badge: 'App til Elektrikere og El-installatører',
    h1_line1: 'App til elektrikere:',
    h1_line2: 'GPS-rapporter, fotobeviser og nul tvister.',
    subtitle: 'GeoTapp registrerer hvert elektrisk arbejde med GPS, billeder og verificerbare tidsstempler. Kunden bestrider arbejdet? Vis rapporten — ingen diskussion. Dine teknikere er beskyttede, dine fakturaer også.',
    cta_primary: 'Start gratis',
    cta_note: 'Ingen forpligtelse. Svar inden for 12 arbejdstimer.',
  },
  pain: {
    title: 'Problemet som alle elektrikere kender',
    items: [
      {
        title: 'Kunden nægter interventionen eller timerne',
        desc: 'De siger, at teknikeren ikke var til stede, eller at installationen ikke blev afsluttet. Uden verificerbart bevis trækker tvisten ud i uger.',
      },
      {
        title: 'Ingen dokumentation af installationen efter arbejdet',
        desc: 'Teknikeren er færdig, men der er ingen fotodokumentation eller teknisk note. At rekonstruere hvad der blev gjort bliver umuligt.',
      },
      {
        title: 'Kontoret ved ikke, hvor teknikerne er',
        desc: 'Opkald, beskeder, usikkerhed. For at informere en kunde om fremskridt skal du først finde teknikeren.',
      },
    ],
  },
  workflow: {
    title: 'Sådan fungerer det i tre trin',
    subtitle: 'Fra byggepladsen til kontoret — uden telefonopkald.',
    steps: [
      {
        title: 'Teknikeren registrerer arbejdet på stedet',
        desc: 'Med GeoTapp TimeTracker stempler han ind og ud med GPS, fotograferer installationen og tilføjer tekniske noter fra sin smartphone.',
      },
      {
        title: 'Kontoret ser alt i realtid',
        desc: 'GeoTapp Flow modtager data øjeblikkeligt. Den ansvarlige ser opgaven, den tildelte tekniker, fremskridt og fotobeviser uden at ringe.',
      },
      {
        title: 'Rapporten er dit bevis',
        desc: 'Ved afslutningen genererer systemet en forseglet rapport: GPS-tidsstempel, installationsbilleder, tekniske noter. Umanipulerbar. Kunden kan verificere den selvstændigt.',
      },
    ],
  },
  features: {
    title: 'App til elektrikere: hvad du får med GeoTapp.',
    items: [
      {
        title: 'Verificerbar GPS-tidsregistrering',
        desc: 'Hver ankomst og afgang registreres med lokation, tidsstempel og opgave. Forsvarlig over for kunder og tilsyn.',
      },
      {
        title: 'Forseglede installationsbilleder',
        desc: 'Teknikeren fotograferer fra appen. Hvert billede er knyttet til GPS og tidsstempel — umanipulerbart.',
      },
      {
        title: 'Automatiske digitale arbejdsrapporter',
        desc: 'Rapporten er klar ved afslutningen: timer, billeder, noter og underskrift. Teknikeren sender fra appen.',
      },
      {
        title: 'Styring af flere byggepladser',
        desc: 'Tildel opgaver og modtag advarsler, hvis en opgave ikke åbnes eller lukkes til tiden.',
      },
      {
        title: 'Løneksport',
        desc: 'Månedlige fremmødedata kompatible med Visma, e-conomic og Uniconta. Lønbehandling bliver en hurtig opgave.',
      },
      {
        title: 'Dine elektrikere er beskyttede',
        desc: 'En verificerbar rapport beskytter teknikeren mod grundløse anklager. Godt arbejde bevises med data.',
      },
    ],
  },
  testimonial: {
    quote: 'Med GeoTapp dokumenterer mine teknikere installationen, så snart de er færdige. Ingen tvist overlever rapporten. Fakturaerne bliver betalt.',
    author: 'Karl M.',
    role: 'Indehaver, el-installationer',
  },
  faq: {
    title: 'Ofte stillede spørgsmål',
    subtitle: 'Hvad elektrikere spørger os om, inden de starter.',
    items: [
      {
        q: 'Er GeoTapp egnet som app til elektrikere?',
        a: 'Ja. GeoTapp bruges af elektrikere og el-installatører til at styre opgaver, timesedler, fremmøde og fotodokumentation af installationer.',
      },
      {
        q: 'Hjælper GeoTapp med at løse tvister med kunder?',
        a: 'Det er den primære brug: GPS, fotobeviser og forseglede rapporter løser enhver grundløs tvist på minutter.',
      },
      {
        q: 'Overholder GeoTapp GDPR for medarbejdergeolokation?',
        a: 'Ja. GeoTapp håndterer geolokation i overensstemmelse med GDPR og inkluderer informationsformularer til medarbejdere.',
      },
    ],
  },
  cta: {
    title: 'Hvert godt udført job fortjener bevis. GeoTapp genererer det.',
    subtitle: 'Verificerbare rapporter, rigtigt GPS, forseglede billeder. Dit arbejde er forsvarligt.',
    primary: 'Start gratis',
    secondary: 'Se priser',
  },
  pricing_hint: {
    label: 'Fra',
    price: '3 €',
    per: 'medarbejder/måned',
    note: 'Gratis prøve i 14 dage',
  },
  schema_sector_name: 'Elektrikere',
};

export default content;
