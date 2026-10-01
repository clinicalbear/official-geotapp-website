import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Byggeplass-app: GPS-oppmøte og lagstyring | GeoTapp',
    description: 'Hold orden på oppmøte, skift og sikkerhet på byggeplassen med stemplinger med GPS. Forseglede, automatiske rapporter, laget for å holde seg innenfor GDPR.',
  },
  hero: {
    badge: 'App for byggefirmaer og byggeplasser',
    h1_line1: 'Byggeplassen din dokumentert,',
    h1_line2: 'ved hver stempling.',
    subtitle: 'Stemplinger med posisjon, lagstyring og automatiske, forseglede rapporter. Null papirarbeid, og når noen bestrider noe, har du dokumentasjon å vise frem. GeoTapp kobler Flow og TimeTracker for deg som driver byggeplasser, underentreprenører og byggeledelse.',
    cta_primary: 'Prøv det på en ekte byggeplass',
    cta_note: '14 dager, opptil 50 arbeidere i felt, uten kredittkort.',
  },
  pain: {
    title: 'Problemer vi løser hver dag',
    items: [
      {
        title: 'Hvem var på byggeplassen, og når?',
        desc: 'Hver stempling registrerer klokkeslett og posisjon slik telefonen måler dem i øyeblikket, ikke lagt inn for hånd, og havner i den forseglede rapporten som byggeledelsen kan kontrollere.',
      },
      {
        title: 'Hvordan styrer du underentreprenørene?',
        desc: 'Registrer oppmøte for alle lag, også underentreprenørene, fra ett dashboard som oppdateres ved hver stempling.',
      },
      {
        title: 'Tar byggeplassrapportene timer å lage?',
        desc: 'De lages automatisk med GPS, timer og oppmøte. Klare for byggeledelsen og for fremdriftsrapportene uten manuell inntasting.',
      },
    ],
  },
  workflow: {
    title: 'Slik fungerer det',
    subtitle: 'Tre enkle trinn. Null papir. Null telefonsamtaler.',
    steps: [
      {
        title: 'Arbeideren stempler inn ved byggeplassen',
        desc: 'Starter skiftet fra smarttelefonen. GeoTapp registrerer klokkeslett og posisjon i øyeblikket og, om nødvendig, bilder som dokumentasjon. Mellom to stemplinger registrerer den ingenting automatisk.',
      },
      {
        title: 'Anleggslederen ser stemplingene så snart de kommer',
        desc: 'Ett dashboard for alle lag og alle byggeplasser. Hvem som har stemplet, hvor og når, uten at du må ringe rundt etter noen.',
      },
      {
        title: 'Rapporten er klar for fremdriftsrapportene og byggeledelsen',
        desc: 'Ved dagens eller oppdragets slutt lager systemet en forseglet rapport med oppmøte, GPS og timer. Klar for byggeledelsen uten ett minutts manuelt arbeid.',
      },
    ],
  },
  differenza: {
    title: 'Byggeplass-app: tidsregistrering eller etterprøvbar dokumentasjon?',
    subtitle: 'De fleste appene registrerer bare klokkeslettet. GeoTapp lager dokumentasjon som kan etterprøves.',
    rows: [
      {
        label: 'Hva som registreres',
        competitor: 'Klokkeslett for inn- og utstempling',
        geotapp: 'Klokkeslett + posisjon ved stemplingen + bilder + utført arbeid',
      },
      {
        label: 'Hvem kan kontrollere',
        competitor: 'Bare kontoret ditt',
        geotapp: 'Du, byggeledelsen, en tredjepart, uavhengig av hverandre',
      },
      {
        label: 'Ved en tvist',
        competitor: 'Bare ditt ord',
        geotapp: 'Forseglet rapport, hver endring kan oppdages',
      },
      {
        label: 'Byggeplassrapport',
        competitor: 'Manuell eller mangler',
        geotapp: 'Lages automatisk med GPS og oppmøte',
      },
      {
        label: 'GDPR',
        competitor: 'Ofte uklart',
        geotapp: 'Laget for å holde seg innenfor rammene i GDPR, skjemaer inkludert',
      },
    ],
  },
  prima_dopo: {
    title: 'Slik er det i dag. Slik er det med GeoTapp.',
    prima: [
      'Byggeledelsen spør hvem som var på byggeplassen tirsdag. Ingen vet det sikkert.',
      'Oppmøtelistene kommer ufullstendige, for sent eller uleselige.',
      'Underentreprenøren bestrider timene. Du har ingen dokumentasjon.',
      'Du lager fremdriftsrapporten for hånd og setter sammen tallene fra WhatsApp-meldinger.',
    ],
    dopo: [
      'Byggeledelsen spør hvem som var på byggeplassen tirsdag. Du åpner stemplingene fra den dagen: alt er der.',
      'Oppmøtet registreres ved hver stempling, med klokkeslett og posisjon.',
      'Bestrider underentreprenøren? Du viser den forseglede rapporten.',
      'Fremdriftsrapporten er allerede klar: timer, oppmøte og GPS samlet automatisk.',
    ],
  },
  features: {
    title: 'Funksjoner laget for byggeplassen',
    items: [
      {
        title: 'Forseglet oppmøte med GPS',
        desc: 'Hver inngang, pause og utgang fra byggeplassen registreres med posisjon og klokkeslett. Kan vises frem for byggeledelsen, byggherren og tilsynet når det trengs.',
      },
      {
        title: 'Dashboard for flere byggeplasser',
        desc: 'Følg flere byggeplasser fra én skjerm: for hver byggeplass ser du hvem som har stemplet, hvor og når, så snart stemplingen kommer inn.',
      },
      {
        title: 'Automatiske rapporter til fremdriftsrapportene',
        desc: 'Systemet lager rapporter med samlet oppmøte, timer og GPS. Klare for fremdriftsrapportene og byggeledelsen, uten manuell inntasting.',
      },
      {
        title: 'Oppfølging av underentreprenører',
        desc: 'Hvert lag, internt eller eksternt, stempler fra smarttelefonen. Anleggslederen ser alle fra ett dashboard, uten å jage noen.',
      },
      {
        title: 'Forseglede bilder som dokumentasjon',
        desc: 'Arbeiderne tar bilder fra appen. Hvert bilde knyttes til byggeplassen med GPS og tidsstempel: hver senere endring kan oppdages.',
      },
      {
        title: 'Posisjon bare når det stemples',
        desc: 'Geolokalisering laget for å holde seg innenfor rammene i GDPR: posisjon bare når det stemples, aldri løpende, og informasjonen til de ansatte signeres i appen før de stempler.',
      },
    ],
  },
  testimonial: {
    quote: 'Siden vi begynte å bruke GeoTapp, ber ikke byggeledelsen oss lenger om oppmøtelister. Vi åpner rapporten, og fremdriftsrapporten er allerede klar.',
    author: 'Giuseppe M.',
    role: 'Eier, byggefirma, 35 ansatte',
  },
  faq: {
    title: 'Ofte stilte spørsmål',
    subtitle: 'Det vi blir spurt om oftest før folk kommer i gang.',
    items: [
      {
        q: 'Hvem var på byggeplassen, og når?',
        a: 'Hver stempling registrerer klokkeslett og posisjon slik telefonen måler dem i øyeblikket, ikke lagt inn for hånd, og havner i den forseglede rapporten som byggeledelsen kan kontrollere.',
      },
      {
        q: 'Hvordan styrer du underentreprenørene på byggeplassen?',
        a: 'GeoTapp registrerer oppmøte for alle lag, også underentreprenørene. Hver arbeider stempler fra sin egen smarttelefon, og anleggslederen ser stemplingene så snart de kommer inn, i ett felles dashboard.',
      },
      {
        q: 'Krever byggeplassrapportene timevis med manuelt arbeid?',
        a: 'Nei. GeoTapp lager rapportene automatisk med GPS, timer og oppmøte. De er klare for byggeledelsen og for fremdriftsrapportene uten manuell inntasting.',
      },
    ],
  },
  cta: {
    title: 'Prøv GeoTapp gratis i 14 dager',
    subtitle: 'Prøveperioden binder deg ikke til noe. Ingen kredittkort kreves.',
    primary: 'Prøv gratis i 14 dager',
    secondary: 'Se priser',
  },
  pricing_hint: {
    label: 'TimeTracker-plasser fra',
    per: 'per ansatt per måned, pluss Flow-planen fra 39 € per måned',
    note: 'Gratis prøveperiode i 14 dager',
  },
  schema_sector_name: 'Bygg og anlegg',
  schema_faq: [
    {
      question: 'Hvem var på byggeplassen, og når?',
      answer: 'Hver stempling registrerer klokkeslett og posisjon slik telefonen måler dem i øyeblikket, ikke lagt inn for hånd, og havner i den forseglede rapporten som byggeledelsen kan kontrollere.',
    },
    {
      question: 'Hvordan styrer du underentreprenørene på byggeplassen?',
      answer: 'GeoTapp registrerer oppmøte for alle lag, også underentreprenørene. Hver arbeider stempler fra sin egen smarttelefon, og anleggslederen ser stemplingene så snart de kommer inn, i ett felles dashboard.',
    },
    {
      question: 'Krever byggeplassrapportene timevis med manuelt arbeid?',
      answer: 'Nei. GeoTapp lager rapportene automatisk med GPS, timer og oppmøte. De er klare for byggeledelsen og for fremdriftsrapportene uten manuell inntasting.',
    },
  ],
};

export default content;
