import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App til elektrikere: rapport med tid, position og fotos',
    description: 'Ét tryk ved ankomst, ét ved afgang, fotos af tavlen vedlagt opgaven. Rapporten er klar, når du kører videre. 14 dage gratis.',
  },
  hero: {
    badge: 'App til elektrikere og el-installatører',
    h1_line1: 'App til elektrikere:',
    h1_line2: 'GPS-rapporter, fotobeviser og færre tvister.',
    subtitle: 'GeoTapp registrerer hver el-opgave med GPS, fotos og registrerede klokkeslæt. Bestrider kunden noget? Du viser rapporten i stedet for at diskutere.',
    cta_primary: 'Start gratis prøveperiode',
    cta_note: 'Prøveperioden binder dig ikke til noget. Intet kreditkort.',
  },
  pain: {
    title: 'Problemet, som ethvert elfirma kender alt for godt',
    items: [
      {
        title: 'Kunden afviser, at opgaven blev udført, eller klokkeslættet',
        desc: 'Siger, at teknikeren ikke var der, eller at installationen ikke blev færdig. Uden verificerbare beviser trækker uenigheden ud i ugevis.',
      },
      {
        title: 'Ingen dokumentation af installationen efter opgaven',
        desc: 'Teknikeren er færdig med arbejdet, men der er hverken fotos eller tekniske noter. Det bliver umuligt at genskabe, hvad der blev gjort.',
      },
      {
        title: 'Kontoret ved ikke, hvor teknikerne er',
        desc: 'Opkald, beskeder, usikkerhed. Hver gang du skal opdatere en kunde om fremdriften, skal du først finde teknikeren.',
      },
    ],
  },
  workflow: {
    title: 'Sådan fungerer det i tre trin',
    subtitle: 'Fra arbejdsstedet til kontoret uden telefonopkald.',
    steps: [
      {
        title: 'Teknikeren registrerer opgaven på stedet',
        desc: 'Med GeoTapp TimeTracker stempler han ind, holder pause og stempler ud med position, tager fotos af installationen og tilføjer tekniske noter fra smartphonen.',
      },
      {
        title: 'Kontoret ser det hele, så snart det kommer',
        desc: 'GeoTapp Flow modtager data, så snart telefonen har dækning. Lederen ser sag, tildelt tekniker, fremdrift og fotobeviser uden at ringe.',
      },
      {
        title: 'Rapporten er dit bevis',
        desc: 'Når opgaven er færdig, laver systemet en forseglet rapport: GPS-klokkeslæt, fotos af installationen, tekniske noter. Enhver ændring kan opdages. Kunden kan verificere den selv.',
      },
    ],
  },
  differenza: {
    title: 'App til elektrikere: registrering eller verificerbart bevis?',
    subtitle: 'De fleste apps registrerer blot klokkeslættet. GeoTapp producerer verificerbare beviser.',
    rows: [
      {
        label: 'Hvad registreres',
        competitor: 'Ind- og udstemplingstidspunkt',
        geotapp: 'Klokkeslæt + position ved stemplingen + fotos af installationen + tekniske noter',
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
      'Kunden afviser, at installationen blev færdig.',
      'Du har hverken fotos eller verificerbare klokkeslæt.',
      'Diskussionen varer uger. Du risikerer ikke at blive betalt.',
      'Teknikeren har intet i hånden til at forsvare sig.',
    ],
    dopo: [
      'Kunden afviser, at installationen blev færdig.',
      'Du åbner rapporten: GPS-fotos af installationen, forseglet klokkeslæt, underskrift.',
      'Du sender den til kunden, og kunden verificerer den selv.',
      'Du har noget at vise. Teknikeren har også noget i hånden.',
    ],
  },
  scenario: {
    title: 'Et typisk tilfælde',
    body: 'En kunde bestrider, at el-installationen er færdig, og nægter at betale den sidste faktura. Med GeoTapp åbner du rapporten: foto af den færdige tavle, GPS-klokkeslæt for start og afslutning af arbejdet, teknikerens tekniske noter, alt sammen lavet automatisk fra smartphonen på stedet.',
    resolution: 'I stedet for ord mod ord er der et dokument, som kunden selv kan tjekke.',
  },
  cosa_cambia: {
    title: 'Hvad der virkelig ændrer sig, fra den første opgave',
    items: [
      {
        title: 'Om aftenen skrives der ikke mere af',
        desc: 'Timerne går ikke via sedlen, så beskeden og så økonomisystemet. De opstår allerede på den rigtige sag, med position og klokkeslæt fra det øjeblik, de blev arbejdet, og ved månedens udgang er eksporten til lønnen klar, uden at nogen skriver dem af igen.',
      },
      {
        title: 'Rapporten holder op med at være en diskussion',
        desc: 'Når bygherren spørger, hvor mange timer der er brugt på hans installation, er svaret ikke teknikerens ord mod hans, men et forseglet dokument med fotos af tavlen, klokkeslæt og tekniske noter, som han selv kan tjekke uden at logge ind på din konto.',
      },
      {
        title: 'Teknikeren har også noget i hånden',
        desc: 'Det gælder begge veje. Den, der arbejder godt og får at vide, at han kom for sent, har beviset for klokkeslættet og behøver ikke at huske, hvad han gjorde for tre uger siden, for at forsvare sig.',
      },
    ],
  },
  features: {
    title: 'App til elektrikere: det får du i GeoTapp.',
    items: [
      {
        title: 'Verificerbar GPS-stempling',
        desc: 'Hver ind- og udstempling og hver pause registreres med position, tidsstempel og sag. Kan vises til kunden, når der er brug for det.',
      },
      {
        title: 'Bevisfotos af installationen',
        desc: 'Teknikeren tager fotos fra appen, når opgaven er færdig. Hvert billede er knyttet til GPS og tidsstempel: enhver senere ændring kan opdages.',
      },
      {
        title: 'Automatiske digitale arbejdsrapporter',
        desc: 'Når arbejdet er færdigt, er rapporten allerede klar: timer, fotos og tekniske noter. Kontoret sender den til kunden fra Flow med ét klik.',
      },
      {
        title: 'Styring af sager på flere adresser',
        desc: 'Tildel opgaver, og følg fremdriften sag for sag.',
      },
      {
        title: 'Eksport af fremmøde til lønnen',
        desc: 'Eksportér månedens fremmøde til Excel eller CSV, klar til din bogholder eller lønkontor. Lønbehandlingen bliver hurtig.',
      },
      {
        title: 'Dine elektrikere er beskyttet',
        desc: 'En verificerbar rapport giver teknikeren noget i hånden mod ubegrundede beskyldninger. Den, der arbejder godt, viser det med data.',
      },
    ],
  },
  cta_mid: {
    title: 'Vil du se, hvordan det fungerer på en rigtig el-opgave?',
    body: 'Prøv det på en rigtig opgave, fra sagen oprettes til den rapport, kunden modtager: 14 dage gratis, uden kreditkort.',
    cta: 'Start gratis prøveperiode',
  },
  trust: {
    title: 'I vores rapporter kan man se enhver ændring, også hvis du laver den, eller vi gør.',
    body: 'GeoTapp-rapporterne laves af systemet i det øjeblik, opgaven udføres. Når rapporten er forseglet, brydes forseglingen, hvis man retter et klokkeslæt eller flytter et foto, og verifikationen melder det.',
    badge: 'Kan verificeres af alle, uden adgang til din konto',
  },
  testimonial: {
    quote: 'Med GeoTapp registrerer mine teknikere installationen, så snart den er færdig. Når en kunde bestrider noget, har vi rapporten at vise.',
    author: 'Luca M.',
    role: 'Indehaver, civile og industrielle el-installationer',
  },
  faq: {
    title: 'Ofte stillede spørgsmål',
    subtitle: 'Det, elektrikere oftest spørger om, før de går i gang.',
    items: [
      {
        q: 'Er GeoTapp egnet som app til elektrikere?',
        a: 'Ja. GeoTapp bruges af elektrikere og installatører til at styre opgaver, arbejdsrapporter, timer og fotobeviser af installationerne. Det fungerer både til arbejde på én sag og til flere byggepladser på samme tid.',
      },
      {
        q: 'Kan jeg bruge GeoTapp til at dokumentere el-installationer og opgaver?',
        a: 'Ja. Teknikeren tager fotos fra appen under eller efter opgaven. Hvert billede er knyttet til GPS, tidsstempel og sag og indgår i en rapport, hvor enhver ændring kan opdages.',
      },
      {
        q: 'Hjælper GeoTapp med at løse kundernes indsigelser?',
        a: 'Det er netop hovedformålet: GPS-klokkeslæt, fotobeviser og forseglet rapport giver dig et dokument at vise, når en indsigelse er ubegrundet.',
      },
      {
        q: 'Passer det også som app til installatører, ikke kun til elektrikere?',
        a: 'Ja. El-installationer, VVS og varme, aircondition, brandsikring, solceller. Faget skifter, problemet er det samme, nemlig at vise, hvem der var hvor, hvor længe og hvad der blev efterladt færdigt. Rapporten ser ens ud for alle.',
      },
      {
        q: 'Hvordan fungerer rapporterne for installatører?',
        a: 'Teknikeren afslutter opgaven fra telefonen, og rapporten er allerede skrevet, med timer, position, fotos af installationen og tekniske noter. Der er ingen blanket, der skal udfyldes om aftenen, og det er netop grunden til, at rapporterne kommer for sent eller slet ikke.',
      },
      {
        q: 'Kan vi holde op med at samle timer og fotos på WhatsApp?',
        a: 'Det er grunden til, at de fleste firmaer kommer til os. I en chat forsvinder timerne mellem beskederne, fotos bliver komprimeret, og ved månedens udgang skal nogen skrive det hele af i hånden. Her opstår dataene allerede knyttet til sagen og personen.',
      },
    ],
  },
  cta: {
    title: 'Hver installation, der er udført godt, fortjener et bevis. GeoTapp laver det.',
    subtitle: 'Verificerbare rapporter, position ved stemplingerne, forseglede fotos i rapporten.',
    primary: 'Start gratis prøveperiode',
    secondary: 'Se priserne',
  },
  pricing_hint: {
    label: 'TimeTracker-pladser fra',
    per: 'pr. medarbejder om måneden, plus Flow-planen fra 39 € om måneden',
    note: 'Gratis prøveperiode i 14 dage',
  },
  schema_sector_name: 'Elektrikere',
  schema_faq: [
    {
      question: 'Fungerer GeoTapp som app til elektrikere?',
      answer: 'Ja. GeoTapp er appen til elektrikere og installatører, der registrerer hver opgave med GPS, fotos og registrerede klokkeslæt. Teknikeren stempler fra marken, kontoret ser det hele, så snart det kommer, og kunden får en forseglet rapport.',
    },
    {
      question: 'Hvordan forsegler jeg en el-opgave med GeoTapp?',
      answer: 'Teknikeren registrerer i GeoTapp start- og sluttidspunkt med position, fotos af installationen og tekniske noter. Systemet laver en forseglet rapport, som kunden selv kan verificere.',
    },
    {
      question: 'Hjælper GeoTapp med at styre flere elektrikerhold på forskellige byggepladser?',
      answer: 'Ja. Med GeoTapp Flow kan lederen koordinere flere hold, tildele sager, følge status på opgaverne og samle fotobeviser fra alle aktive byggepladser, så snart de er uploadet.',
    },
    {
      question: 'Bliver GeoTapp-rapporterne accepteret, hvis der opstår uenighed?',
      answer: 'GeoTapp-rapporterne er forseglet med GPS, tidsstempel og fotobeviser. Kunden verificerer dem selv. De hjælper med at vise, at dokumentet ikke er ændret; alene er de hverken et absolut bevis for det skete eller juridisk rådgivning.',
    },
    {
      question: 'Fungerer GeoTapp også som app til installatører?',
      answer: 'Ja. Ud over el-installationer dækker det VVS og varme, aircondition, brandsikring og solceller. Teknikeren registrerer opgaven i felten med GPS og fotos, og rapporten laves på samme måde for hver type installation.',
    },
    {
      question: 'Sporer GeoTapp teknikernes position i løbet af dagen?',
      answer: 'Nej. Positionen registreres kun, når teknikeren stempler (ind, pause, ud) eller tager et bevisfoto. Mellem to stemplinger registreres der intet automatisk: appen beder heller ikke om tilladelse til at læse position i baggrunden.',
    },
  ],
};

export default content;
