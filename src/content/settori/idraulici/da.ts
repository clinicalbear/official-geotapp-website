import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    // 2026-10-08: title ripristinato sulla query che portava impressioni (GSC); le
    // passate di lingua del 30/09-01/10 l'avevano sostituito. Guardia: test/sector-title-keywords.test.js
    title: 'App til blikkenslagere: arbejdssedler med GPS og fotos',
    description: 'App til VVS-installatører: arbejdsrapporter med position og foto af anlæggene og rapporter, hvor enhver ændring kan opdages. Prøv gratis i 14 dage.',
  },
  hero: {
    badge: 'App til VVS-installatører, blikkenslagere og teknikere',
    h1_line1: 'App til VVS-installatører:',
    h1_line2: 'GPS-rapporter, fotobeviser og færre tvister.',
    subtitle: 'GeoTapp registrerer hver VVS-opgave med GPS, fotos og registrerede klokkeslæt. Bestrider kunden noget? Du viser rapporten i stedet for at diskutere.',
    cta_primary: 'Start gratis prøveperiode',
    cta_note: 'Prøveperioden binder dig ikke til noget. Intet kreditkort.',
  },
  pain: {
    title: 'Problemet, som ethvert VVS-firma kender alt for godt',
    items: [
      {
        title: 'Kunden afviser, at opgaven blev udført, eller hvilke materialer der blev brugt',
        desc: 'Siger, at reparationen ikke blev udført, eller at materialerne var andre. Uden verificerbare beviser bliver enhver uenighed ord mod ord.',
      },
      {
        title: 'Ingen dokumentation af anlægget efter opgaven',
        desc: 'Teknikeren er færdig med arbejdet, men der er hverken fotos eller tekniske noter. Ved en senere fejl er det umuligt at genskabe, hvad der blev gjort.',
      },
      {
        title: 'Akutte opgaver står uden dokumenter',
        desc: 'Akutte opgaver er de sværeste at dokumentere. Teknikeren kører afsted i hast, arbejder uden papir, og bagefter er der intet at vise kunden.',
      },
    ],
  },
  workflow: {
    title: 'Sådan fungerer det i tre trin',
    subtitle: 'Fra arbejdsstedet til kontoret uden telefonopkald.',
    steps: [
      {
        title: 'Teknikeren registrerer opgaven på stedet',
        desc: 'Med GeoTapp TimeTracker stempler han ind, holder pause og stempler ud med position, tager fotos af VVS-anlægget og tilføjer tekniske noter fra smartphonen.',
      },
      {
        title: 'Kontoret ser det hele, så snart det kommer',
        desc: 'GeoTapp Flow modtager data, så snart telefonen har dækning. Lederen ser sag, tildelt tekniker, fremdrift og fotobeviser uden at ringe.',
      },
      {
        title: 'Rapporten er dit bevis',
        desc: 'Når opgaven er færdig, laver systemet en forseglet rapport: GPS-klokkeslæt, fotos af anlægget, brugte materialer og tekniske noter. Enhver ændring kan opdages. Kunden kan verificere den selv.',
      },
    ],
  },
  differenza: {
    title: 'App til VVS-installatører: registrering eller verificerbart bevis?',
    subtitle: 'De fleste apps registrerer blot klokkeslættet. GeoTapp producerer verificerbare beviser.',
    rows: [
      {
        label: 'Hvad registreres',
        competitor: 'Ind- og udstemplingstidspunkt',
        geotapp: 'Klokkeslæt + position ved stemplingen + fotos af anlægget + materialer og noter',
      },
      {
        label: 'Ved uenighed',
        competitor: 'Kun dit ord',
        geotapp: 'Forseglet rapport, enhver ændring kan opdages',
      },
      {
        label: 'Dokumentation af opgaven',
        competitor: 'Manuel eller fraværende',
        geotapp: 'Laves automatisk med GPS og fotos',
      },
      {
        label: 'Hvem kan verificere',
        competitor: 'Kun dit kontor',
        geotapp: 'Dig, bygherren, en tredjepart',
      },
      {
        label: 'GDPR',
        competitor: 'Ofte uafklaret',
        geotapp: 'Bygget til at holde sig inden for rammerne af GDPR, blanketter inkluderet',
      },
    ],
  },
  prima_dopo: {
    title: 'Før GeoTapp. Efter GeoTapp.',
    prima: [
      'Kunden afviser, at reparationen blev udført.',
      'Du har hverken fotos eller verificerbare klokkeslæt.',
      'Diskussionen varer uger. Du risikerer ikke at blive betalt.',
      'Teknikeren har intet i hånden til at forsvare sig.',
    ],
    dopo: [
      'Kunden afviser, at reparationen blev udført.',
      'Du åbner rapporten: GPS-foto af anlægget, forseglet klokkeslæt, tekniske noter.',
      'Du sender den til kunden, og kunden verificerer den selv.',
      'Du har noget at vise. Teknikeren har også noget i hånden.',
    ],
  },
  scenario: {
    title: 'Et typisk tilfælde',
    body: 'En kunde bestrider en akut VVS-opgave og nægter at betale med den påstand, at arbejdet ikke blev afsluttet. Med GeoTapp åbner du rapporten: fotos af anlægget før og efter, GPS-klokkeslæt for ankomst og afslutning, tekniske noter om de udskiftede materialer, alt sammen lavet automatisk fra teknikerens smartphone på stedet.',
    resolution: 'I stedet for ord mod ord er der et dokument, som kunden selv kan tjekke.',
  },
  features: {
    title: 'App til VVS-installatører: det får du i GeoTapp.',
    items: [
      {
        title: 'Verificerbar GPS-stempling',
        desc: 'Hver ind- og udstempling og hver pause registreres med position, tidsstempel og sag. Kan vises til kunden, når der er brug for det.',
      },
      {
        title: 'Forseglede fotos af VVS-anlæg',
        desc: 'Teknikeren tager fotos før og efter opgaven. Hvert billede er knyttet til GPS og tidsstempel: enhver senere ændring kan opdages.',
      },
      {
        title: 'Automatiske digitale arbejdsrapporter',
        desc: 'Når arbejdet er færdigt, er rapporten allerede klar: timer, fotos, tekniske noter og materialer. Kontoret sender den til kunden fra Flow med ét klik.',
      },
      {
        title: 'Styring af akutte opgaver og planlagt vedligeholdelse',
        desc: 'Styr både akutte opgaver og periodisk vedligeholdelse fra det samme panel. Hver opgave har sin egen sag og sin egen historik.',
      },
      {
        title: 'Eksport af fremmøde til lønnen',
        desc: 'Eksportér månedens fremmøde til Excel eller CSV, klar til din bogholder eller lønkontor. Lønbehandlingen bliver hurtig.',
      },
      {
        title: 'Dine VVS-installatører er beskyttet',
        desc: 'En verificerbar rapport giver teknikeren noget i hånden mod ubegrundede beskyldninger om arbejde, der ikke blev udført, eller materialer, der ikke blev brugt.',
      },
    ],
  },
  cta_mid: {
    title: 'Vil du se, hvordan det fungerer på en rigtig VVS-opgave?',
    body: 'Prøv det på en rigtig opgave, fra sagen oprettes til den rapport, kunden modtager: 14 dage gratis, uden kreditkort.',
    cta: 'Start gratis prøveperiode',
  },
  trust: {
    title: 'I vores rapporter kan man se enhver ændring, også hvis du laver den, eller vi gør.',
    body: 'GeoTapp-rapporterne laves af systemet i det øjeblik, opgaven udføres. Når rapporten er forseglet, brydes forseglingen, hvis man retter et klokkeslæt eller flytter et foto, og verifikationen melder det.',
    badge: 'Kan verificeres af alle, uden adgang til din konto',
  },
  testimonial: {
    quote: 'Før brugte jeg timer på at forklare kunderne opgaverne. Nu sender jeg rapporten, og kunden tjekker den selv.',
    author: 'Roberto C.',
    role: 'Indehaver, VVS-firma',
  },
  faq: {
    title: 'Ofte stillede spørgsmål',
    subtitle: 'Det, VVS-installatører oftest spørger om, før de går i gang.',
    items: [
      {
        q: 'Er GeoTapp egnet som app til VVS-installatører?',
        a: 'Ja. GeoTapp bruges af VVS-installatører til at styre opgaver, arbejdsrapporter, timer og fotobeviser af anlæggene. Det fungerer både til akutte opgaver og til planlagt vedligeholdelse.',
      },
      {
        q: 'Kan jeg bruge GeoTapp til at dokumentere VVS-opgaver?',
        a: 'Ja. Teknikeren tager fotos før og efter opgaven fra appen. Hvert billede er knyttet til GPS, tidsstempel og sag og indgår i en rapport, hvor enhver ændring kan opdages.',
      },
      {
        q: 'Styrer GeoTapp både akutte opgaver og planlagt vedligeholdelse?',
        a: 'Ja. Hver type opgave, akut, vedligeholdelse eller afprøvning, har sin egen sag i GeoTapp. Historikken for hvert anlæg er altid tilgængelig med alle fotobeviser.',
      },
    ],
  },
  cta: {
    title: 'Hver opgave, der er udført godt, fortjener et bevis. GeoTapp laver det.',
    subtitle: 'Verificerbare rapporter, position ved stemplingerne, forseglede fotos i rapporten.',
    primary: 'Start gratis prøveperiode',
    secondary: 'Se priserne',
  },
  pricing_hint: {
    label: 'TimeTracker-pladser fra',
    per: 'pr. medarbejder om måneden, plus Flow-planen fra 39 € om måneden',
    note: 'Gratis prøveperiode i 14 dage',
  },
  schema_sector_name: 'VVS',
  schema_faq: [
    {
      question: 'Fungerer GeoTapp som app til VVS-installatører?',
      answer: 'Ja. GeoTapp er appen til VVS-installatører, der registrerer hver opgave med GPS, fotos og registrerede klokkeslæt. Teknikeren stempler fra marken, kontoret ser det hele, så snart det kommer, og kunden får en forseglet rapport.',
    },
    {
      question: 'Hvordan forsegler jeg en VVS-opgave med GeoTapp?',
      answer: 'Teknikeren registrerer i GeoTapp start- og sluttidspunkt med position, fotos af anlægget før og efter og tekniske noter om de brugte materialer. Systemet laver en forseglet rapport, som kunden selv kan verificere.',
    },
    {
      question: 'Styrer GeoTapp akutte VVS-opgaver og planlagt vedligeholdelse?',
      answer: 'Ja. Både akutte opgaver og periodisk vedligeholdelse styres fra den samme app. Hver opgave giver en historik med fotobeviser og klokkeslæt og positioner registreret ved stemplingerne.',
    },
    {
      question: 'Bliver GeoTapp-rapporterne accepteret, hvis der opstår uenighed?',
      answer: 'GeoTapp-rapporterne er forseglet med GPS, tidsstempel og fotobeviser. Kunden verificerer dem selv. De hjælper med at vise, at dokumentet ikke er ændret; alene er de hverken et absolut bevis for det skete eller juridisk rådgivning.',
    },
  ],
};

export default content;
