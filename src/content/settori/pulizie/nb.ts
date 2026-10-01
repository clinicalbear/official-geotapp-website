import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App for renholdsbedrifter: GPS og foto per oppdrag',
    description: 'Stempling med GPS bare ved start og slutt og foto av hvert oppdrag: dokumentasjonen du kan vise kunden når vedkommende bestrider en tjeneste. 14 dager gratis.',
  },

  hero: {
    badge: 'App for renholdsbedrifter, eiendomsdrift og multiservice',
    h1_line1: 'Appen for renholdsbedrifter',
    h1_line2: 'som forsegler hvert oppdrag.',
    subtitle:
      'GeoTapp er appen for renholdsbedrifter som gjør hvert oppdrag om til dokumentasjon du kan vise. Kundene bestrider, og et påskrevet klokkeslett er ikke nok. GeoTapp registrerer posisjonen ved hver stempling, samler bevisbilder og lukker det hele i en forseglet rapport der enhver endring kan oppdages, og som kunden selv kan kontrollere.',
    cta_primary: 'Prøv det på et ekte oppdrag',
    cta_note: '14 dager, opptil 50 ansatte i felten, uten kredittkort.',
  },

  pain: {
    title: 'Hvis du ikke kan dokumentere det, har det aldri skjedd for kunden.',
    items: [
      {
        title: 'Kunden nekter for at oppdraget er utført',
        desc: 'Kunden sier at området ikke er rengjort, eller at den ansatte ikke var der. Du har et påskrevet klokkeslett, kunden har sin versjon. Uten verifiserbar dokumentasjon risikerer du kontrakten.',
      },
      {
        title: 'Ansatte i felten som du ikke kan kontrollere',
        desc: 'Du kan ikke være overalt. Du vet ikke om arbeidet er gjort før kunden klager, og da er det for sent å rekonstruere noe.',
      },
      {
        title: 'Tilsynet ber om ekte dokumentasjon',
        desc: 'Arbeidstider, tilstedeværelse, overtid, pauser: en timeliste er ikke nok. Den som kontrollerer, vil se registrerte tider, ikke tider gjettet etter hukommelsen.',
      },
    ],
  },

  prima_dopo: {
    title: 'Slik er det nå. Slik er det med GeoTapp.',
    prima: [
      'Kunden ringer og sier at badet ikke er rengjort.',
      'Den ansatte sier «jeg har gjort det». Kunden sier «det har han ikke».',
      'Du har ingenting i hånden som beviser noe.',
      'Diskusjonen drar ut i dagevis. Noen ganger mister du kontrakten.',
    ],
    dopo: [
      'Kunden ringer og sier at badet ikke er rengjort.',
      'Du åpner rapporten for oppdraget: foto av det rene badet, tidspunkt, posisjon.',
      'Du sender den til kunden. Du har svart med data, og kunden kontrollerer dem selv.',
      'Du har noe å vise. Den ansatte har også noe i hånden.',
    ],
  },

  scenario: {
    title: 'Et typisk tilfelle',
    body: 'Kunden sier at badet ikke er rengjort. Med GeoTapp åpner du rapporten og viser bildet av rommet, tidspunktet for bildet og posisjonen, alt sammen laget automatisk av den ansattes app mens oppdraget ble utført.',
    resolution: 'Du har svart med data, ikke med ditt ord mot kundens.',
  },

  differenza: {
    title: 'Stempling eller verifiserbar dokumentasjon av arbeidet.',
    subtitle: 'De fleste appene registrerer data. GeoTapp lager dokumentasjon.',
    rows: [
      {
        label: 'Hva den registrerer',
        competitor: 'Tidspunkt for inn- og utstempling',
        geotapp: 'Tidspunkt + posisjon ved stempling + foto + utført arbeid',
      },
      {
        label: 'Hvem kan kontrollere',
        competitor: 'Bare kontoret ditt',
        geotapp: 'Du, kunden eller en tredjepart, hver for seg',
      },
      {
        label: 'Ved en tvist',
        competitor: 'Bare ditt ord',
        geotapp: 'Forseglet rapport, enhver endring kan oppdages',
      },
      {
        label: 'Fotodokumentasjon',
        competitor: 'Mangler eller er løsrevet',
        geotapp: 'Vedlagt rapporten med tidspunkt og posisjon',
      },
      {
        label: 'GDPR',
        competitor: 'Må ofte undersøkes nærmere',
        geotapp: 'Bygget for å holde seg innenfor rammene i GDPR, skjemaer inkludert',
      },
      {
        label: 'Oversikt oppdatert ved hver stempling',
        competitor: 'Nei',
        geotapp: 'Ja, alle steder, alle ansatte',
      },
    ],
  },

  non_gestionale: {
    title: 'Det er ikke bare et administrasjonssystem.',
    subtitle: 'Administrasjonssystemer organiserer arbeidet. GeoTapp organiserer det og forsegler det i tillegg.',
    items: [
      {
        label: 'Hovedformål',
        gestionale: 'Planlegge og organisere',
        geotapp: 'Lage verifiserbar dokumentasjon',
      },
      {
        label: 'Hva det leverer',
        gestionale: 'Data internt i systemet ditt',
        geotapp: 'Forseglede rapporter som tredjeparter kan kontrollere',
      },
      {
        label: 'Ved en tvist',
        gestionale: 'Du viser data som bare du kan lese',
        geotapp: 'Du sender en rapport som kunden selv kontrollerer',
      },
      {
        label: 'Verdi for kunden',
        gestionale: 'Ingen, det er et internt verktøy',
        geotapp: 'Høy: kunden kontrollerer den selv',
      },
      {
        label: 'Fotodokumentasjon',
        gestionale: 'Ikke med eller adskilt',
        geotapp: 'Integrert i rapporten med GPS og tidsstempel',
      },
    ],
  },

  workflow: {
    title: 'Fra byggeplassen til kontoret blir hvert oppdrag til dokumentasjon.',
    subtitle: 'Tre trinn. Ingen papir. Ingen samtaler.',
    steps: [
      {
        title: 'Den ansatte forsegler beviset på stedet',
        desc: 'Med GeoTapp TimeTracker registrerer den ansatte innstempling, pauser, utstempling, bilder av rommene og notater fra smarttelefonen. Posisjonen leses av telefonen i det øyeblikket og skrives ikke inn for hånd, og enhver senere endring kan oppdages.',
      },
      {
        title: 'Kontoret er oppdatert ved hver stempling',
        desc: 'Flow viser på ett skjermbilde hvem som har stemplet, hvor og når. Du ser status for hver bygning, får beskjed hvis en vakt står åpen, og tildeler oppdrag uten å jage noen.',
      },
      {
        title: 'Rapporten er allerede klar. Forseglet: enhver endring kan ses.',
        desc: 'Når vakten er over, lager systemet automatisk en forseglet rapport med posisjoner, bilder og forsegling. Kunden mottar den og kontrollerer den selv, uten tilgang til systemet ditt og uten å måtte stole på ditt ord.',
      },
    ],
  },

  features: {
    title: 'App for renholdsbedrifter: færre diskusjoner, mer dokumentasjon.',
    items: [
      {
        title: 'Svar på enhver innvending med data',
        desc: 'Når hvert oppdrag har en verifiserbar rapport, har du dokumentasjonen til å svare med en gang. Færre muntlige forhandlinger som varer i uker.',
      },
      {
        title: 'Reell kontroll over alle steder',
        desc: 'Du vet hvor og når hver ansatt har stemplet så snart stemplingen kommer inn, på alle bygninger og fra alle enheter. Mellom to stemplinger registreres ingenting automatisk.',
      },
      {
        title: 'Rapporter som kan forsvares overalt',
        desc: 'Hver rapport er forseglet: enhver endring kan oppdages. Den som mottar den, kunde, tilsyn eller rådgiver, kan kontrollere den selv.',
      },
      {
        title: 'Klar for tilsynet',
        desc: 'Arbeidstider, pauser, overtid og tillegg registreres vakt for vakt og kommer med i oversikten til lønnsansvarlig. Ved et tilsyn er dokumentasjonen allerede i orden.',
      },
      {
        title: 'Styring av flere steder uten samtaler',
        desc: 'Mange adresser, ett skjermbilde. Du tildeler oppdrag, ser hvem som har stemplet hvor, og får beskjed hvis en vakt står åpen.',
      },
      {
        title: 'De ansatte dine er beskyttet',
        desc: 'En verifiserbar rapport gir også den ansatte noe i hånden mot ubegrunnede beskyldninger. Den som jobber godt, kan vise det.',
      },
    ],
  },

  cosa_cambia: {
    title: 'Det som virkelig endrer seg.',
    items: [
      {
        title: 'Du trenger ikke lenger stole blindt på de ansatte.',
        desc: 'Ikke fordi de ikke er pålitelige, men fordi du ikke trenger det. Systemet lager dokumentasjonen i det øyeblikket oppdraget utføres, uansett hva de forteller deg. Dataene forblir slik de ble registrert.',
      },
      {
        title: 'Du trenger ikke lenger forsvare deg muntlig.',
        desc: 'Du slipper å forklare, forsvare og huske. Når en kunde bestrider noe, åpner du rapporten og sender den. Det er ikke ditt ord mot kundens. Det er et verifiserbart dokument.',
      },
      {
        title: 'Du har verifiserbar dokumentasjon. Alltid.',
        desc: 'Hvert avsluttede oppdrag blir automatisk til en rapport: posisjoner, bilder, tidspunkter og forsegling. Du trenger ikke gjøre noe ekstra. Systemet gjør det mens de ansatte jobber.',
      },
    ],
  },

  prova_visiva: {
    title: 'Det du ser, og det kunden ser.',
    subtitle: 'Appen for dem som jobber i felten. Rapporten for dem som skal svare.',
  },

  cta_mid: {
    title: 'Vil du se hvordan det fungerer på et ekte oppdrag?',
    body: 'Prøv det på et ekte oppdrag, fra den ansatte som åpner oppdraget til rapporten kunden mottar: 14 dager gratis, uten kredittkort.',
    cta: 'Prøv gratis i 14 dager',
  },

  testimonial: {
    quote:
      'Før hadde vi alltid en kunde som bestred noe. Siden vi begynte med GeoTapp, sender vi rapporten, og samtalen endrer seg med en gang: man snakker om data, ikke om ord. Diskusjonene blir mye kortere.',
    author: 'Roberta M.',
    role: 'Driftssjef, industrirenhold - Nord-Italia',
  },

  trust: {
    title: 'Hvis en av rapportene våre endres, kan det ses. Også hvis vi gjør det.',
    body:
      'GeoTapp-rapportene lages av systemet mens oppdraget utføres. Når rapporten er forseglet, brytes forseglingen hvis noen retter et klokkeslett eller flytter et bilde, og kontrollen melder fra. Den som mottar rapporten, kunde, tilsyn eller rådgiver, kan kontrollere den selv.',
    badge: 'Kan kontrolleres av hvem som helst, uten tilgang til kontoen din',
  },

  faq: {
    title: 'Ofte stilte spørsmål',
    subtitle: 'Det vi oftest blir spurt om før dere kommer i gang.',
    items: [
      {
        q: 'Er GeoTapp bare en stemplingsapp for renholdsbedrifter?',
        a: 'Nei. GeoTapp er et system for verifiserbar dokumentasjon av arbeidet, ikke bare en stemplingsapp. Stemplingsapper registrerer et klokkeslett. GeoTapp lager en forseglet rapport med posisjon, fotodokumentasjon og tidsstempel som kunden selv kan kontrollere. Forskjellen mellom «det står der» og «det kan dokumenteres».',
      },
      {
        q: 'Kan det brukes sammen med gjeldende tariffavtale?',
        a: 'GeoTapp registrerer arbeidstider, pauser, overtid og tillegg, også natt- og helligdagsarbeid, og eksporterer dem til Excel eller CSV for lønnsansvarlig, som bruker dem etter gjeldende tariffavtale. Ved et tilsyn har du all dokumentasjon klar.',
      },
      {
        q: 'Hvordan styrer jeg team fordelt på flere steder samtidig?',
        a: 'Med GeoTapp Flow har du ett skjermbilde for alle steder. Du ser hvem som har stemplet hvor så snart stemplingen kommer inn, tildeler oppdrag og får beskjed hvis en vakt står åpen. Ingen samtaler, ingen e-poster.',
      },
      {
        q: 'Hvordan kontrollerer jeg at de ansatte har utført arbeidet?',
        a: 'Hvert oppdrag åpnes og lukkes med posisjon registrert av den ansattes smarttelefon. Den ansatte sender bevisbilder knyttet til oppdraget, med tidspunkt og posisjon. Rapporten lages automatisk og forsegles ved avslutningen: enhver endring kan ses.',
      },
      {
        q: 'Overholder GeoTapp GDPR når det gjelder de ansattes posisjon?',
        a: 'GeoTapp er bygget for å holde seg innenfor rammene i GDPR og Datatilsynets veiledning: det registrerer bare posisjonen når den ansatte stempler (innstempling, pauser, utstempling) eller tar et bevisbilde, lar informasjonen signeres i appen før stempling og samler ikke inn unødvendige data.',
      },
      {
        q: 'Fungerer det også for eiendomsdrift og multiservice?',
        a: 'Ja. Renholdsbedrifter, multiservice, eiendomsdrift og alle virksomheter med ansatte fordelt på flere steder bruker GeoTapp. Det passer fra det lille teamet til virksomheten med hundrevis av ansatte, uten kompliserte oppsett.',
      },
      {
        q: 'Hva koster GeoTapp for en renholdsbedrift?',
        a: 'GeoTapp Flow starter på 39 € per måned; TimeTracker-plassene til de ansatte koster 3 € per måned per plass opp til 25, 2,50 € fra plass 26. Abonnementet har en minste varighet på 12 måneder. Først kan du prøve det gratis i 14 dager, uten kort.',
      },
    ],
  },

  cta: {
    title: 'De ansatte dine jobber bra. Sørg for at det kan ses.',
    subtitle:
      'Hver dag blir arbeidet utført. Problemet er at uten verifiserbar dokumentasjon står det ditt ord mot kundens når noen bestrider noe. GeoTapp gjør hvert oppdrag til dokumentasjon du kan vise.',
    primary: 'Prøv gratis i 14 dager',
    secondary: 'Se prisene',
  },

  pricing_hint: {
    label: 'TimeTracker-plasser fra',
    per: 'per ansatt per måned, pluss Flow-abonnement fra 39 € per måned',
    note: 'Gratis prøveperiode i 14 dager',
  },

  schema_sector_name: 'Renholdsbedrifter',

  schema_faq: [
    {
      question: 'Er GeoTapp bare en stemplingsapp for renholdsbedrifter?',
      answer: 'Nei. GeoTapp er appen og programvaren for renholdsbedrifter og multiservice som går lenger enn stempling: den lager forseglede rapporter med posisjoner, bilder og tidspunkter som kunden selv kontrollerer, ikke bare et register over timer.',
    },
    {
      question: 'Kan det brukes sammen med gjeldende tariffavtale?',
      answer: 'GeoTapp registrerer arbeidstider, pauser, overtid og tillegg og eksporterer dem til Excel eller CSV for lønnsansvarlig, som bruker dem etter gjeldende tariffavtale.',
    },
    {
      question: 'Hvordan styrer jeg flere steder samtidig?',
      answer: 'Ett skjermbilde for alle steder. Du ser hvem som har stemplet hvor så snart stemplingen kommer inn, tildeler oppdrag og får beskjed hvis en vakt står åpen, uten telefonsamtaler.',
    },
    {
      question: 'Hvordan dokumenterer jeg at arbeidet er utført?',
      answer: 'Hvert oppdrag åpnes og lukkes med registrert posisjon. Den ansatte sender bevisbilder knyttet til oppdraget. Rapporten lages automatisk og forsegles ved avslutningen: enhver endring kan ses.',
    },
    {
      question: 'Overholder GeoTapp GDPR når det gjelder de ansattes posisjon?',
      answer: 'Bygget for å holde seg innenfor rammene i GDPR: det registrerer bare posisjonen når den ansatte stempler eller tar et bevisbilde, aldri løpende, og lar informasjonen signeres i appen før stempling.',
    },
    {
      question: 'Fungerer det også for eiendomsdrift og multiservice?',
      answer: 'Ja. GeoTapp passer for renholdsbedrifter, multiservice og eiendomsdrift, fra det lille teamet til virksomheten med hundrevis av ansatte.',
    },
    {
      question: 'Hva koster det?',
      answer: 'GeoTapp Flow fra 39 € per måned, pluss TimeTracker-plasser fra 3 € per ansatt per måned. Abonnementet har en minste varighet på 12 måneder. Først kan du prøve det gratis i 14 dager, uten kort.',
    },
  ],
};

export default content;
