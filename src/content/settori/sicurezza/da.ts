import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Software til Vagtvirksomheder og Vagtmænd | Dokumenteret Tilstedeværelse | GeoTapp',
    description: 'Personalehåndtering til vagtvirksomheder, vagtmænd og eventvagtservice: GPS-verificeret tilstedeværelse, geolokaliserede hændelsesrapporter og certifikathåndtering ifølge Vagtoverenskomsten.',
  },
  hero: {
    badge: 'Software til Vagtvirksomheder, Vagtmænd og Eventvagtservice',
    h1_line1: 'Dokumenteret tilstedeværelse og vagtregistrering',
    h1_line2: 'for vagtmænd og vagtvirksomheder',
    subtitle: 'GeoTapp Flow og TimeTracker dokumenterer vagtmændenes tilstedeværelse på tildelte poster med verificeret GPS og uforanderlige tidsstempler. Certifikathåndtering ifølge Vagtoverenskomsten, digital vagtafløsning og geolokaliserede hændelsesrapporter — alt på én platform.',
    cta_primary: 'Book en Demo',
    cta_note: 'Ingen binding. Svar inden for 12 arbejdstimer.',
  },
  pain: {
    title: 'De problemer du allerede kender',
    items: [
      {
        title: 'At bevise at vagtmænd var på tildelte poster til rette tid',
        desc: 'En kunde bestrider, om en vagtmand var til stede på sin post på et bestemt tidspunkt. Uden verificeret GPS og uforanderlige tidsstempler forbliver tvisten åben og kontraktoverholdelse er umulig at dokumentere.',
      },
      {
        title: 'Hændelsesrapporter uden lokationsdokumentation',
        desc: 'En håndskrevet hændelsesrapport har ringe bevisværdi uden certificeret GPS-position og et manipulationssikret tidsstempel. Papirlogboger er for nemme at bestride.',
      },
      {
        title: 'Vagtafløsning stadig på papir',
        desc: 'Vagtskilte sker mundtligt eller med håndskrevne noter. Kritiske oplysninger går tabt, ansvaret er uklart og en efterfølgende revision er umulig.',
      },
    ],
  },
  workflow: {
    title: 'Sådan fungerer det i tre trin',
    subtitle: 'Fra vagtposten til kontoret — uden papirarbejde.',
    steps: [
      {
        title: 'Vagtmanden stempler ind på den tildelte post',
        desc: 'GeoTapp TimeTracker registrerer ind- og udstemplingKort, GPS-position og fotos med uforanderlige tidsstempler. Hver runde logges automatisk fra vagtmandens smartphone.',
      },
      {
        title: 'Lederen ser alle poster i realtid',
        desc: 'Flow modtager data øjeblikkeligt. Driftslederen kontrollerer fuld postbemanding, vagtskifter og afvigelser uden at ringe til feltet.',
      },
      {
        title: 'Tilstedeværelsesrapporten er klar til kunden',
        desc: 'Ved vagtens afslutning er tilstedeværelsesprotokollen struktureret med rigtige GPS-data, klar til kunderevision eller inspektion ifølge Vagtoverenskomsten.',
      },
    ],
  },
  features: {
    title: 'Hvad du får',
    items: [
      {
        title: 'GPS-verificeret tilstedeværelse pr. vagtmand',
        desc: 'Hvert ind-stem er knyttet til position, tidsstempel og tildelt post. Forsvarligt over for kunden, politiet og i enhver kontraktretlig tvist.',
      },
      {
        title: 'Certifikat- og kvalifikationshåndtering (Vagtoverenskomsten)',
        desc: 'Håndter vagtbeviser, uddannelsesintyg og udløbsdatoer for hvert personalemedlem. Ingen ukvalificeret medarbejder på vagt ved en fejltagelse.',
      },
      {
        title: 'Export kompatibelt med Uniconta og e-conomic',
        desc: 'Eksporter månedlige tilstedeværelsesdata i de formater, som Uniconta og e-conomic accepterer. Lønbehandling bliver en hurtig og fejlfri operation.',
      },
    ],
  },
  testimonial: {
    quote: 'Med GeoTapp er tvister om postbemanding fortid. Kunder modtager en GPS-stemplet tilstedeværelsesprotokol og der er intet at diskutere.',
    author: 'Lars N.',
    role: 'Driftsleder, vagtvirksomhed',
  },
  faq: {
    title: 'Ofte stillede spørgsmål',
    subtitle: 'Hvad teams spørger os om mest inden de starter.',
    items: [
      {
        q: 'Er GeoTapp egnet til vagtvirksomheder og autoriserede vagtmænd?',
        a: 'Ja. GeoTapp bruges af vagtvirksomheder til at dokumentere vagtmænds tilstedeværelse på tildelte poster med verificeret GPS, styre vagtskifter og følge op på certifikaters udløbsdatoer ifølge Vagtoverenskomsten.',
      },
      {
        q: 'Hvordan hjælper GeoTapp med dokumentation af hændelsesrapporter?',
        a: 'TimeTracker knytter hvert hændelse til en certificeret GPS-position og et uforanderligt tidsstempel. Den genererede hændelsesrapport indeholder koordinater, tid og fotos, hvilket gør den forsvarbar i retslige og kontraktmæssige procedurer.',
      },
      {
        q: 'Understøtter GeoTapp digital vagtafløsning mellem vagtmænd?',
        a: 'Ja. Vagtskifter registreres digitalt med bekræftelse, driftsnotater og poststatus. Lederen har fuld indsigt i tjenestekontinuiteten uden at være afhængig af mundtlige overleveringer.',
      },
    ],
  },
  cta: {
    title: 'Stop tvister om postbemanding.',
    subtitle: 'GeoTapp Flow og TimeTracker giver din vagtvirksomhed de verificerbare beviser, som kunder og tilsynsmyndigheder kræver.',
    primary: 'Book en Demo',
    secondary: 'Se Priser',
  },
  schema_sector_name: 'Vagtvirksomheder',
};

export default content;
