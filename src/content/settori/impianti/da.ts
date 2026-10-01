import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App til installatører og teknikere: opgaver med GPS | GeoTapp',
    description: 'Dokumentér opgaver, timer og materialer for installatører og teknikere, med position ved stempling. Servicebeviser, der laves automatisk. Prøv GeoTapp gratis.',
  },
  hero: {
    badge: 'App til installatører, teknikere og serviceteams',
    h1_line1: 'Hver opgave dokumenteret,',
    h1_line2: 'hver time registreret.',
    subtitle: 'Til el-, VVS- og andre installatører og teknikere. GeoTapp forener Flow + TimeTracker og registrerer GPS, timer og fotos for hver sag, fra varevognen til kontoret uden telefonopkald.',
    cta_primary: 'Prøv GeoTapp gratis i 14 dage',
    cta_note: 'Prøveperioden binder dig ikke til noget. Intet kreditkort kræves.',
  },
  pain: {
    title: 'Problemer vi løser hver dag',
    items: [
      {
        title: 'Kunderne bestrider timerne på opgaven',
        desc: 'GPS-stemplinger med tidsstempel som verificerbart bevis. Data forsegles i det øjeblik, opgaven udføres: enhver senere ændring kan opdages.',
      },
      {
        title: 'Du jagter teknikerne for at vide, hvor de er',
        desc: 'Hver stempling fra teknikeren kommer straks ind i dashboardet, med klokkeslæt og position. Du ved, hvor de har været, uden at ringe.',
      },
      {
        title: 'Arbejdsrapporter, der er ufuldstændige eller aldrig afleveres',
        desc: 'Oplysningerne kommer for sent, ufuldstændige eller slet ikke. At genopbygge timer og opgaver ved månedens udgang er et job for sig, som koster tid og penge.',
      },
    ],
  },
  workflow: {
    title: 'Sådan fungerer det',
    subtitle: 'Tre enkle trin. Intet papir. Ingen opkald.',
    steps: [
      {
        title: 'Teknikeren stempler ind med GPS ved opgavens start',
        desc: 'Åbner sagen fra smartphonen. GeoTapp registrerer GPS-koordinater, tidsstempel og fotos i det øjeblik: enhver ændring kan opdages.',
      },
      {
        title: 'Timerne registreres for hver sag',
        desc: 'Hver arbejdstime knyttes til den rigtige sag. Lederen ser, stempling efter stempling, hvem der arbejder hvor.',
      },
      {
        title: 'Kunderapporten laves uden at skrive noget',
        desc: 'Når opgaven er færdig, laver systemet en rapport med GPS, timer og forsegling. Kunden modtager den og verificerer den selv.',
      },
    ],
  },
  differenza: {
    title: 'App til installatører: tidsregistrering eller verificerbart bevis?',
    subtitle: 'De fleste apps registrerer blot klokkeslættet. GeoTapp producerer verificerbare beviser.',
    rows: [
      {
        label: 'Hvad registreres',
        competitor: 'Ind- og udstemplingstidspunkt',
        geotapp: 'Klokkeslæt + position ved stemplingen + fotos + udført arbejde',
      },
      {
        label: 'Hvem kan verificere',
        competitor: 'Kun dit kontor',
        geotapp: 'Dig, bygherren, en tredjepart, uafhængigt',
      },
      {
        label: 'Ved uenighed',
        competitor: 'Kun dit ord',
        geotapp: 'Forseglet rapport, enhver ændring kan opdages',
      },
      {
        label: 'Arbejdsrapport for opgaven',
        competitor: 'Manuel eller fraværende',
        geotapp: 'Laves automatisk med GPS og fotos',
      },
      {
        label: 'GDPR',
        competitor: 'Ofte uafklaret',
        geotapp: 'Bygget til at holde sig inden for rammerne af GDPR, blanketter inkluderet',
      },
    ],
  },
  prima_dopo: {
    title: 'Sådan er det nu. Sådan er det med GeoTapp.',
    prima: [
      'Kunden bestrider sluttidspunktet for opgaven og beder om rabat.',
      'Teknikeren siger: «Jeg brugte 4 timer.» Kunden siger: «Jeg kan kun se 2.»',
      'Du har ingen beviser. Diskussionen varer dage, og betalingen er i fare.',
      'Ved månedens udgang genopbygger du timer og sager fra WhatsApp-beskeder.',
    ],
    dopo: [
      'Bestrider kunden noget? Du åbner rapporten: fotos, position, klokkeslæt, forsegling.',
      'Du sender den til kunden. Diskussionen er slut på et minut.',
      'Du har noget at vise. Teknikeren har også noget i hånden.',
      'Ved månedens udgang er eksporten allerede klar, timer og sager samlet automatisk.',
    ],
  },
  features: {
    title: 'Funktioner lavet til installatører og teknikere',
    items: [
      {
        title: 'Verificerbar GPS-stempling',
        desc: 'Hver ind- og udstempling og hver pause er knyttet til position, klokkeslæt og sag. Kan vises til kunden eller til tilsynet, når der er brug for det.',
      },
      {
        title: 'Forseglede fotobeviser',
        desc: 'Teknikeren tager fotos fra appen. Hvert billede er knyttet til opgaven med GPS og tidsstempel: enhver ændring efter oprettelsen kan opdages.',
      },
      {
        title: 'Styring af sager på flere adresser',
        desc: 'Tildel sager, følg fremdriften i hver opgave, og få en advarsel, hvis en vagt står åben.',
      },
      {
        title: 'Automatiske digitale arbejdsrapporter',
        desc: 'Når opgaven er færdig, er rapporten allerede klar: timer, fotos og noter. Intet papir, ingen opkald. Kontoret sender den til kunden fra Flow med ét klik.',
      },
      {
        title: 'Eksport til løn og fakturering',
        desc: 'Eksportér månedens fremmøde og timer pr. sag. Løn og fakturering tager udgangspunkt i de færdige data, uden at du skriver noget af igen.',
      },
      {
        title: 'Position kun ved stempling',
        desc: 'Geolokalisering bygget til at holde sig inden for rammerne af GDPR: aldrig løbende, og oplysningerne til medarbejderne underskrives i appen, før der stemples.',
      },
    ],
  },
  testimonial: {
    quote: 'Når en kunde bestrider timerne, åbner vi rapporten med position og fotos, og kunden tjekker den selv.',
    author: 'Roberto F.',
    role: 'Indehaver, installationsfirma, 20 teknikere',
  },
  faq: {
    title: 'Ofte stillede spørgsmål',
    subtitle: 'Det, vi oftest bliver spurgt om, før man går i gang.',
    items: [
      {
        q: 'Bestrider kunderne timerne på opgaverne?',
        a: 'Med GeoTapp får GPS-stemplingerne tidsstempel i det øjeblik, opgaven udføres, og enhver ændring kan opdages. De er et verificerbart bevis for de udførte timer, når nogen sætter spørgsmålstegn ved dem.',
      },
      {
        q: 'Hvordan følger jeg flere hold på forskellige sager?',
        a: 'GeoTapp viser sagernes status på ét skærmbillede, opdateret, hver gang en tekniker stempler. Du ser, hvem der har stemplet på hvilken sag, uden at ringe.',
      },
      {
        q: 'Hvordan får jeg faktureringen af opgaverne hurtigere af sted?',
        a: 'GeoTapp laver automatisk en eksport af timer og sager, klar til dit system. Intet at skrive af i hånden: færre fejl, og faktureringen tager udgangspunkt i de færdige data.',
      },
    ],
  },
  cta: {
    title: 'Prøv GeoTapp gratis i 14 dage',
    subtitle: 'Prøveperioden binder dig ikke til noget. Intet kreditkort kræves.',
    primary: 'Start gratis prøveperiode',
    secondary: 'Se priserne',
  },
  pricing_hint: {
    label: 'TimeTracker-pladser fra',
    per: 'pr. medarbejder om måneden, plus Flow-planen fra 39 € om måneden',
    note: 'Gratis prøveperiode i 14 dage',
  },
  schema_sector_name: 'Installationer',
  schema_faq: [
    {
      question: 'Bestrider kunderne timerne på opgaverne?',
      answer: 'Med GeoTapp får GPS-stemplingerne tidsstempel i det øjeblik, opgaven udføres, og enhver ændring kan opdages. De er et verificerbart bevis for de udførte timer, når nogen sætter spørgsmålstegn ved dem.',
    },
    {
      question: 'Hvordan følger jeg flere hold på forskellige sager?',
      answer: 'GeoTapp viser sagernes status på ét skærmbillede, opdateret, hver gang en tekniker stempler. Du ser, hvem der har stemplet på hvilken sag, uden at ringe.',
    },
    {
      question: 'Hvordan får jeg faktureringen af opgaverne hurtigere af sted?',
      answer: 'GeoTapp laver automatisk en eksport af timer og sager, klar til dit system. Intet at skrive af i hånden: færre fejl, og faktureringen tager udgangspunkt i de færdige data.',
    },
  ],
};

export default content;
