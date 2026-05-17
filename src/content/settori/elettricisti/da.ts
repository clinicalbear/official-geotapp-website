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
      {
        q: 'Hvordan håndterer GeoTapp Arbejdsmiljølovens §38 om dokumentation af arbejdstid for elektrikere?',
        a: 'Arbejdsmiljøloven §38 og bekendtgørelse om hvileperiode kræver, at arbejdsgiveren registrerer daglig start, slut og pauser for hver medarbejder — uændret tilgængelig for Arbejdstilsynet i mindst fem år. GeoTapp registrerer hver stempling med GPS-tidsstempel og kryptografisk segl, som ikke kan ændres efterfølgende. Når Arbejdstilsynet kommer på inspektion, eksporterer du PDF-rapporten direkte fra dashboardet — ingen Excel, intet papir, ingen efterrationaliseringer.',
      },
      {
        q: 'Opfylder GeoTapp dokumentationskravene fra Sikkerhedsstyrelsen for el-installationsvirksomheder?',
        a: 'Sikkerhedsstyrelsens autorisationsordning kræver, at autoriserede el-installatører dokumenterer hvem der har udført hvilken installation, hvornår og under hvis fagligt ansvar (KLS-systemet). GeoTapp knytter hver intervention til specifik medarbejder, GPS-koordinater, fototagning af installationen og tidsstempel — alt eksporterbart som installationsrapport i format kompatibelt med Sikkerhedsstyrelsens kontrolskemaer. Ved revision fra autorisationsmyndigheden har du fuld sporbarhed.',
      },
      {
        q: 'Hvordan opfylder GeoTapp DS/EN 50110 om sikkerhed ved elektrisk arbejde?',
        a: 'DS/EN 50110-1 (drift af elektriske installationer) kræver dokumentation af arbejdsmetode, sikkerhedsforanstaltninger og udførende person ved hver intervention på spændingsførende anlæg. GeoTapp lader medarbejderen vedhæfte foto før, under og efter arbejdet, registrere sikkerhedsbarriere (frakobling, jording, afskærmning) i en tjekliste, og signere digitalt. Hele revisionssporet er manipulationssikret og tilgængeligt i op til 10 år — overgår den lovpligtige 5-årige opbevaringsfrist.',
      },
      {
        q: 'Hvordan håndteres tvister med kunder om timeforbrug og udført arbejde på el-installationer?',
        a: 'Den klassiske konflikt: kunden påstår, at elektrikeren brugte færre timer end faktureret, eller at en del af arbejdet ikke blev udført. GeoTapp leverer i hver tvist en uafhængigt verificerbar rapport via geotapp.com/products/geotapp-verifier: GPS-stempling ved ankomst og afgang, før- og efter-fotos af installationen med tidsstempel, og kryptografisk segl. Forbrugerklagenævnet og byggeklagenævnet accepterer denne dokumentation som objektivt bevis. I de fleste tilfælde løses tvisten uden retssag.',
      },
      {
        q: 'Hvad sker der, hvis Datatilsynet kontrollerer GPS-sporing af medarbejdere?',
        a: 'Datatilsynet har siden 2019 udstedt bøder på op til 1,2 millioner kroner til virksomheder, der sporede medarbejdere uden lovligt grundlag eller proportionalitet. GeoTapp er konfigureret efter Datatilsynets vejledning om medarbejderovervågning: GPS aktiveret kun i arbejdstid (slås automatisk fra ved udstempling), forhåndsinformation til medarbejderen, formålsbinding (timeregistrering og sikkerhed — ikke profilering), og dataopbevaring begrænset til den lovpligtige periode. Vi leverer den fulde Artikel 30-fortegnelse over behandlingsaktiviteter klar til Datatilsynets inspektion.',
      },
      {
        q: 'Integrerer GeoTapp med ERP-systemer som e-conomic, Dinero eller Visma for fakturering af el-installationsarbejde?',
        a: 'Ja. GeoTapp eksporterer timesedler og opgavedata i CSV/JSON-format kompatibelt med e-conomic, Dinero, Visma Business og Microsoft Dynamics 365. Hver intervention indeholder kunde-ID, projekt-ID, opgavekategori (servicebesøg, installation eller reparation), faktiske timer og brugte materialer. Det betyder, at faktureringen kan genereres automatisk — uden manuel indtastning og uden forsinkelse på tilbagebetaling fra kunden.',
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
