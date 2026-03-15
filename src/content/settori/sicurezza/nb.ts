import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Programvare for Vaktselskaper og Vektere | Dokumentert Tilstedeværelse | GeoTapp',
    description: 'Personaladministrasjon for vaktselskaper, vektere og arrangementsikkerhet: GPS-verifisert tilstedeværelse, geolokaliserte hendelsesrapporter og sertifikathåndtering ifølge Landsoverenskomsten for vektere.',
  },
  hero: {
    badge: 'Programvare for Vaktselskaper, Vektere og Arrangementsikkerhet',
    h1_line1: 'Dokumentert tilstedeværelse og vaktregistrering',
    h1_line2: 'for vektere og vaktselskaper',
    subtitle: 'GeoTapp Flow og TimeTracker dokumenterer vekternes tilstedeværelse på tildelte poster med verifisert GPS og uforanderlige tidsstempler. Sertifikathåndtering ifølge Landsoverenskomsten for vektere, digital vaktoverdragelse og geolokaliserte hendelsesrapporter — alt på én plattform.',
    cta_primary: 'Book en Demo',
    cta_note: 'Ingen binding. Svar innen 12 arbeidstimer.',
  },
  pain: {
    title: 'Problemene du allerede kjenner',
    items: [
      {
        title: 'Bevise at vektere var på tildelte poster til rett tid',
        desc: 'En kunde bestrider om en vekter var til stede på sin post på et bestemt tidspunkt. Uten verifisert GPS og uforanderlige tidsstempler forblir tvisten åpen og kontraktsoverholdelse er umulig å dokumentere.',
      },
      {
        title: 'Hendelsesrapporter uten posisjonsbevis',
        desc: 'En håndskrevet hendelsesrapport har liten bevisverdi uten sertifisert GPS-posisjon og et manipulasjonssikkert tidsstempel. Papirlogger er for enkle å bestride.',
      },
      {
        title: 'Vaktoverdragelse fortsatt på papir',
        desc: 'Vaktbytter skjer muntlig eller med håndskrevne notater. Kritisk informasjon går tapt, ansvar er uklart og en etterfølgende revisjon er umulig.',
      },
    ],
  },
  workflow: {
    title: 'Slik fungerer det i tre trinn',
    subtitle: 'Fra vaktposten til kontoret — uten papirarbeid.',
    steps: [
      {
        title: 'Vekteren stempler inn på tildelt post',
        desc: 'GeoTapp TimeTracker registrerer inn- og utstempling, GPS-posisjon og bilder med uforanderlige tidsstempler. Hver runde logges automatisk fra vekterens smarttelefon.',
      },
      {
        title: 'Lederen ser alle poster i sanntid',
        desc: 'Flow mottar data øyeblikkelig. Driftslederen kontrollerer full postbemanning, vaktbytter og avvik uten å ringe ut i feltet.',
      },
      {
        title: 'Tilstedeværelsesrapporten er klar for kunden',
        desc: 'Ved vaktens slutt er tilstedeværelsesprotokollet strukturert med ekte GPS-data, klart for kunderevisjon eller inspeksjon ifølge Landsoverenskomsten.',
      },
    ],
  },
  features: {
    title: 'Hva du får',
    items: [
      {
        title: 'GPS-verifisert tilstedeværelse per vekter',
        desc: 'Hvert innstempel er koblet til posisjon, tidsstempel og tildelt post. Forsvarlig overfor kunden, politiet og i enhver kontraktsrettslig tvist.',
      },
      {
        title: 'Sertifikat- og kvalifikasjonshåndtering (Landsoverenskomsten for vektere)',
        desc: 'Håndter vekterlisenser, kursbevis og utløpsdatoer for hvert personalemedlem. Ingen ukvalifisert ansatt på vakt ved en feil.',
      },
      {
        title: 'Export kompatibelt med Visma Lønn og Datakraft',
        desc: 'Eksporter månedlige tilstedeværelsesdata i formatene som Visma Lønn og Datakraft aksepterer. Lønnsbehandling blir en rask og feilfri operasjon.',
      },
    ],
  },
  testimonial: {
    quote: 'Med GeoTapp er tvister om postbemanning fortid. Kunder mottar en GPS-stemplet tilstedeværelsesprotokoll og det er ingenting å diskutere.',
    author: 'Tor A.',
    role: 'Driftsleder, vaktselskap',
  },
  faq: {
    title: 'Ofte stilte spørsmål',
    subtitle: 'Hva team spør oss om mest før de starter.',
    items: [
      {
        q: 'Er GeoTapp egnet for vaktselskaper og autoriserte vektere?',
        a: 'Ja. GeoTapp brukes av vaktselskaper for å dokumentere vekternes tilstedeværelse på tildelte poster med verifisert GPS, administrere vaktbytter og følge opp sertifikatenes utløpsdatoer ifølge Landsoverenskomsten for vektere.',
      },
      {
        q: 'Hvordan hjelper GeoTapp med dokumentasjon av hendelsesrapporter?',
        a: 'TimeTracker kobler hver hendelse til en sertifisert GPS-posisjon og et uforanderlig tidsstempel. Den genererte hendelsesrapporten inneholder koordinater, tid og bilder, noe som gjør den forsvarbar i rettslige og kontraktsmessige prosedyrer.',
      },
      {
        q: 'Støtter GeoTapp digital vaktoverdragelse mellom vektere?',
        a: 'Ja. Vaktbytter registreres digitalt med bekreftelse, driftsnotater og poststatus. Lederen har full innsikt i tjenestekontinuiteten uten å være avhengig av muntlige overdragelser.',
      },
    ],
  },
  cta: {
    title: 'Stopp tvister om postbemanning.',
    subtitle: 'GeoTapp Flow og TimeTracker gir vaktselskapets ditt de verifiserbare bevisene som kunder og tilsynsmyndigheter krever.',
    primary: 'Book en Demo',
    secondary: 'Se Priser',
  },
  schema_sector_name: 'Vaktselskaper',
};

export default content;
