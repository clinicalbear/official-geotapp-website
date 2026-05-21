import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App for Elektrikere | GeoTapp — GPS Arbeidsrapporter & Bevis',
    description: 'GeoTapp er appen for elektrikere: GPS-verifiserte arbeidsrapporter, installasjonsbilder og manipuleringssikre registreringer. Lukk tvister med ekte bevis. Prøv gratis.',
  },
  hero: {
    badge: 'App for Elektrikere og El-installatører',
    h1_line1: 'App for elektrikere:',
    h1_line2: 'GPS-rapporter, fotobevis og null tvister.',
    subtitle: 'GeoTapp registrerer hvert elektrisk arbeid med GPS, bilder og verifiserbare tidsstempler. Kunden bestrider arbeidet? Vis rapporten — ingen diskusjon. Dine teknikere er beskyttet, dine fakturaer også.',
    cta_primary: 'Start gratis',
    cta_note: 'Uten forpliktelse. Svar innen 12 arbeidstimer.',
  },
  pain: {
    title: 'Problemet som alle elektrikere kjenner',
    items: [
      {
        title: 'Kunden nekter for innsatsen eller timene',
        desc: 'De sier at teknikeren ikke var til stede, eller at installasjonen ikke ble fullført. Uten verifiserbart bevis drar tvisten ut i uker.',
      },
      {
        title: 'Ingen dokumentasjon av installasjonen etter jobben',
        desc: 'Teknikeren er ferdig, men det finnes ingen fotodokumentasjon eller teknisk notat. Å rekonstruere hva som ble gjort blir umulig.',
      },
      {
        title: 'Kontoret vet ikke hvor teknikerne er',
        desc: 'Samtaler, meldinger, usikkerhet. For å informere en kunde om fremdrift må du først finne teknikeren.',
      },
    ],
  },
  workflow: {
    title: 'Slik fungerer det i tre trinn',
    subtitle: 'Fra arbeidsstedet til kontoret — uten telefonsamtaler.',
    steps: [
      {
        title: 'Teknikeren registrerer innsatsen på stedet',
        desc: 'Med GeoTapp TimeTracker stempler han inn og ut med GPS, fotograferer installasjonen og legger til tekniske notater fra smarttelefonen.',
      },
      {
        title: 'Kontoret ser alt i sanntid',
        desc: 'GeoTapp Flow mottar data øyeblikkelig. Den ansvarlige ser oppdraget, tildelt tekniker, fremdrift og fotobevis uten å ringe.',
      },
      {
        title: 'Rapporten er ditt bevis',
        desc: 'Ved avslutning genererer systemet en forseglet rapport: GPS-tidsstempel, installasjonsbilder, tekniske notater. Umanipulerbar. Kunden kan verifisere den selvstendig.',
      },
    ],
  },
  features: {
    title: 'App for elektrikere: hva du får med GeoTapp.',
    items: [
      {
        title: 'Verifiserbar GPS-tidsregistrering',
        desc: 'Hvert ankomst og avgang registreres med lokasjon, tidsstempel og oppdrag. Forsvarlig overfor kunder og tilsyn.',
      },
      {
        title: 'Forseglede installasjonsbilder',
        desc: 'Teknikeren fotograferer fra appen. Hvert bilde er koblet til GPS og tidsstempel — umanipulerbart.',
      },
      {
        title: 'Automatiske digitale arbeidsrapporter',
        desc: 'Rapporten er klar ved avslutning: timer, bilder, notater og underskrift. Teknikeren sender fra appen.',
      },
      {
        title: 'Styring av flere arbeidsplasser',
        desc: 'Tildel innsatser og motta advarsler om en oppgave ikke åpnes eller lukkes i tide.',
      },
      {
        title: 'Lønnseksport',
        desc: 'Månedlig fremmøtedata kompatibel med Visma, Tripletex og Uni Economy. Lønnsbehandling blir en rask oppgave.',
      },
      {
        title: 'Dine elektrikere er beskyttet',
        desc: 'En verifiserbar rapport beskytter teknikeren mot grunnløse anklager. Godt arbeid bevises med data.',
      },
    ],
  },
  testimonial: {
    quote: 'Med GeoTapp dokumenterer teknikerne mine installasjonen så snart de er ferdige. Ingen tvist overlever rapporten. Fakturaene betales.',
    author: 'Karl M.',
    role: 'Eier, el-installasjoner',
  },
  faq: {
    title: 'Vanlige spørsmål',
    subtitle: 'Hva elektrikere spør oss om før de starter.',
    items: [
      {
        q: 'Er GeoTapp egnet som app for elektrikere?',
        a: 'Ja. GeoTapp brukes av elektrikere og el-installatører til å styre innsatser, timelister, fremmøte og fotodokumentasjon av installasjoner.',
      },
      {
        q: 'Hjelper GeoTapp med å løse tvister med kunder?',
        a: 'Det er den primære bruken: GPS, fotobevis og forseglede rapporter løser enhver grunnløs tvist på minutter.',
      },
      {
        q: 'Overholder GeoTapp GDPR for medarbeidergeolokasjon?',
        a: 'Ja. GeoTapp håndterer geolokasjon i samsvar med GDPR og inkluderer informasjonsskjemaer til medarbeidere.',
      },
    ],
  },
  cta: {
    title: 'Hvert godt utført jobb fortjener bevis. GeoTapp genererer det.',
    subtitle: 'Verifiserbare rapporter, ekte GPS, forseglede bilder. Ditt arbeid er forsvarlig.',
    primary: 'Start gratis',
    secondary: 'Se priser',
  },
  pricing_hint: {
    label: 'Fra',
    per: 'medarbeider/måned',
    note: 'Gratis prøveperiode 14 dager',
  },
  schema_sector_name: 'Elektrikere',
};

export default content;
