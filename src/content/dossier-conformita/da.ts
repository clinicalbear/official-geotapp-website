import type { DossierCopy } from './types';

const da: DossierCopy = {
  metaTitle: 'GeoTapp compliance-dossier: bevis for arbejde, ikke overvågning',
  metaDesc:
    'Hvad GeoTapp gør, og hvad det ikke gør, med de retlige kilder i klar tekst og grænserne sagt uden omsvøb. GDPR, dansk ansættelsesret, integritet i beviset.',
  badge: 'Compliance-dossier',
  h1: 'Bevis for arbejde, ikke overvågning',
  subtitle:
    'Hvad GeoTapp gør, og frem for alt hvad det ikke gør. Med de retlige kilder i klar tekst og grænserne sagt uden omsvøb. Et dokument til at læse, efterprøve og citere.',
  sections: [
    {
      heading: 'Hvorfor dette dokument findes',
      paragraphs: [
        'I Bruxelles skrives reglerne for, hvordan medarbejdere må overvåges, lige nu, mellem direktivet om platformsarbejde, algoritmisk ledelse og AI-forordningen anvendt på arbejdslivet. Imens skal den, der sender hold ud i marken, allerede registrere timerne, bevise dem, når nogen bestrider dem, og gøre det uden at træde folks privatliv for nær. Det er en svær balance, og på den balance hviler en stor del af tilliden mellem dem, der organiserer arbejdet, og dem, der udfører det.',
        'GeoTapp er opstået inde i dette problem, ikke ved siden af det. Derfor sætter vi, i stedet for at love, på skrift, hvad værktøjet gør og ikke gør, med de retlige kilder i klar tekst og grænserne sagt uden omsvøb. Det følgende kan læses, efterprøves og citeres. Den, der finder et svagt punkt, opfordres til at sige det: et compliance-dossier er kun så meget værd som det, der holder, ikke det, der lyder godt.',
      ],
    },
    {
      heading: 'Hvad det gør, og frem for alt hvad det ikke gør',
      paragraphs: [
        'Princippet er kun ét: registrere hændelsen, ikke følge personen.',
        'GeoTapp registrerer kun positionen, når medarbejderen stempler (ind, start og slut på pause, ud) eller tager et foto som bevis, og ikke i løbet af dagen. Mellem to stemplinger registreres der ikke noget automatisk: ingen rute over bevægelser, ingen position indsamlet i det skjulte, ingen digital skygning. Appen beder heller ikke om tilladelse til at læse positionen i baggrunden, så den kunne ikke gøre det, selv om den ville. I den nuværende version af appen tages bevisfotoet kun med live-kameraet: man kan ikke uploade et billede fra galleriet. De indsamlede data er reduceret til det nødvendige minimum ved et bevidst designvalg, ikke som en eftertanke.',
        'Hvad GeoTapp ikke gør, er lige så vigtigt. Det forfølger ikke medarbejderen uden for arbejdstiden, det profilerer ikke adfærd, det måler ikke fagforeningsaktivitet, det aflæser ikke følelsestilstande, det bygger ikke scorer på mennesker. Det er den afgrænsning, som de europæiske forslag om platformsarbejde og algoritmisk ledelse peger på som noget, der bør forbydes, og GeoTapp er bygget til at holde sig uden for den.',
      ],
    },
    {
      heading: 'GDPR-principperne, anvendt og ikke remset op',
      paragraphs: [
        'Dataminimering (art. 5, stk. 1, litra c i GDPR): positionen indsamles kun ved stemplingen, ikke løbende.',
        'Formålsbegrænsning (art. 5, stk. 1, litra b): formålet er bevis for udført arbejde, ikke fjernkontrol af personen.',
        'Retsgrundlag (art. 6): opfyldelse af ansættelsesforholdet og en dokumenteret legitim interesse, ledsaget af information til medarbejderen.',
        'Gennemsigtighed (art. 12-14): medarbejderen modtager en klar privatlivsmeddelelse. GeoTapp stiller en skabelon til GPS-privatlivsmeddelelse til rådighed, gratis og til download.',
        'Databeskyttelse gennem design (art. 25): minimal indsamling er værktøjets standardadfærd, ikke en mulighed, der skal slås til.',
      ],
    },
    {
      heading: 'Sammenhængen med dansk ansættelsesret',
      paragraphs: [
        'I Danmark hviler behandlingen af medarbejderes positionsdata på databeskyttelsesforordningen (GDPR) sammen med de almindelige ansættelsesretlige rammer, og Datatilsynet er den kompetente tilsynsmyndighed. En arbejdsgiver, der vil registrere medarbejderes position, skal have et gyldigt retsgrundlag, holde behandlingen inden for et legitimt formål, overholde proportionalitet, så indgrebet ikke går videre end nødvendigt, og på forhånd informere medarbejderen klart om, hvad der indsamles, hvorfor og hvor længe.',
        'GeoTapp placerer sig inden for disse rammer som et værktøj, der gør det lettere at overholde reglerne, ikke som en genvej, der omgår dem. Den dataansvarlige er fortsat arbejdsgiveren, med de pligter det indebærer: GeoTapp leverer et værktøj, der er bygget til at holde sig inden for reglerne, og ressourcerne til at anvende dem. For de øvrige europæiske lande samler EU-kortet over medarbejder-GPS niogtredive nationale faktaark, efterprøvet i hånden, med hvert lands pligter, kompetente myndighed og sanktioner.',
      ],
    },
    {
      heading: 'Integriteten i beviset',
      paragraphs: [
        'Når GeoTapp siger »bevis for arbejde«, mener vi noget, man kan vise frem, når nogen bestrider det, og for at kunne det skal det være svært at forfalske, og enhver senere rettelse skal kunne ses. Forsvaret er lagdelt.',
        'Optagelsen af foto er låst til live-kameraet: den værdi, der identificerer denne tilstand, er fastlagt i klienterne og, frem for alt, efterprøvet af databasens regler i selve skriveøjeblikket, som afviser en stempling med en anden tilstand. For hvert foto beregner klienten et kryptografisk SHA-256-aftryk, en nødvendig betingelse for at fortsætte.',
        'Når arbejdssessionerne først er oprettet, er de beskyttede: starttidspunktet, den position, der blev registreret ved stemplingen, og brugerens identitet kan ikke ændres af medarbejderen, og sletning er forbeholdt administratorerne. Sessioner med position opstår kun gennem en funktion på serveren med administrative rettigheder, ikke ved direkte skrivning fra appen, så medarbejderen ikke kan tilbagedatere en stempling, flytte dens position eller få den til at forsvinde.',
        'Opdagelsen af falsk GPS virker, allerede før stemplingen sendes af sted. På Android-enheder er kontrollen flerlaget, med en liste over kendte spoofing-apps og kontrol af tilladelser til fiktiv position: udløses den, afvises stemplingen, den bliver ikke blot markeret. Tegn på root opdages, og virksomheden kan vælge at blokere stempling på de telefoner. Positioner, der er for upræcise, afvises også. På iOS bruges styresystemets eget signal, der angiver en softwaresimuleret position. Desuden opfanges »teleportering«, altså en flytning med en fysisk umulig hastighed mellem to stemplinger.',
        'Hver stempling efterlader til sidst et spor i en kontrollog på serveren, med tidspunktet genereret af serveren og ikke af enheden, og ingen app, heller ikke en administrators, kan skrive i den log.',
      ],
    },
    {
      heading: 'Grænserne, sagt klart',
      paragraphs: [
        'Dette er det afsnit, mange ville udelade, og netop det gør hele resten troværdigt. GeoTapp gør spoofing svært og dokumenterer stemplingens kontekst, men lover ikke det umulige, og at sige det er en form for respekt over for læseren.',
        'Serveren efterprøver ikke koordinaterne kryptografisk på ny: den kontrollerer, at de er plausible og inden for en eventuel geofence, men stoler på den position, enheden oplyser. Enhedsattesteringen bekræfter, at appen kommer fra de officielle kanaler, men den beskytter ikke mod en ændret klient, der er analyseret af en med de rette kompetencer. Tilstanden »kun live-kamera« er en ærlig erklæring fra enheden, ikke et kryptografisk bevis, som serveren kan efterprøve igen på selve billedet. Kontrollerne er mere fuldstændige på smartphonen end på uret. Og frem for alt fritager værktøjet ikke virksomheden fra dens rolle som dataansvarlig: pligten til information, til aftale, hvor det kræves, og til proportionalitet forbliver dens.',
        'Sagt på en anden måde: GeoTapp hæver barren og dokumenterer hændelsen, det sælger ikke usårlighed. Den, der lover usårlighed, har som regel aldrig skullet bevise den i retten.',
      ],
    },
    {
      heading: 'De offentlige ressourcer, der støtter op',
      paragraphs: [
        'Alt, hvad der skal til for at anvende disse principper, er offentligt og gratis: EU-kortet over medarbejder-GPS med faktaark for niogtredive lande, skabelonen til GPS-privatlivsmeddelelse, sanktionsberegneren, overvågningsindekset. Efterprøvet ved kilden, frit at bruge og citere med angivelse af oprindelse. De er der, fordi det at bringe arbejdet i overensstemmelse med reglerne ikke burde være et privilegium for dem, der har råd til en juridisk afdeling.',
      ],
    },
    {
      heading: 'Erklæring',
      paragraphs: [
        'De tekniske udsagn i dette dokument er afgivet og underskrevet af Michele Angelo Petraroli, stifter af GeoTapp, som påtager sig ansvaret for dem og stiller sig til rådighed for efterprøvning og modsigelse.',
      ],
    },
  ],
  sourcesTitle: 'Kilder og henvisninger',
  sources: [
    'Forordning (EU) 2016/679 (GDPR), navnlig art. 5, 6, 12-14, 25.',
    'Dansk ansættelsesret og de almindelige rammer for behandling af medarbejderdata.',
    'Datatilsynets vejledning og praksis om behandling af medarbejderes positionsdata.',
    'EU-tekster under behandling: direktivet om platformsarbejde, bestemmelser om algoritmisk ledelse, AI-forordningen anvendt på arbejdslivet.',
  ],
  lastUpdated: 'Version 1.1 · opdateret den 30. september 2026',
  faq: {
    title: 'Ofte stillede spørgsmål',
    items: [
      { q: 'Hvad er compliance-dossieret?', a: 'Det er det dokument, der med kilderne i hånd forklarer, hvorfor GeoTapp er et værktøj til bevis for udført arbejde og ikke til overvågning, og hvordan det hviler på GDPR og arbejdsretten. Det er til dem, der vil forstå, hvordan dataene behandles, ikke til dem, der nøjes med et slogan.' },
      { q: 'Er GeoTapp et overvågningssystem?', a: 'Nej, det er ikke tænkt til at overvåge. Det registrerer kun positionen, når medarbejderen stempler (ind, pauser, ud) eller tager et foto som bevis, aldrig løbende, og det forbereder den privatlivsmeddelelse, medarbejderen underskriver i appen, før der kan stemples. Det viser, hvad der er udført og hvor, det holder ikke øje med folk.' },
      { q: 'Hvad skal jeg bruge dette dossier til?', a: 'Til at svare, når en medarbejder, en kunde eller en rådgiver spørger, om det, du bruger, overholder reglerne. I stedet for at improvisere har du en tekst, der stiller ræsonnementet og kilderne op, og som du kan videresende, som den er.' },
      { q: 'Er kilderne efterprøvet?', a: 'Ja, dossieret henviser til reel lovgivning og reelle afgørelser, opført til sidst med opdateringsdatoen. Det er dog en informativ ressource og ikke juridisk rådgivning: for din konkrete situation bør du få alt vurderet af en fagperson.' },
      { q: 'Kan jeg vise det til en kunde eller i en tvist?', a: 'Du kan bruge det til at forklare, hvordan GeoTapp er sat op, og til at vise, at overholdelsen af reglerne ikke bare er en påstand. I en tvist er det dog dine egne data og din egen privatlivsmeddelelse, der tæller: dossieret er konteksten, beviset er den registrerede arbejdssession.' },
      { q: 'Gælder det kun for Italien?', a: 'Det underliggende ræsonnement holder i hele Unionen, fordi det tager udgangspunkt i GDPR, men detaljerne om kontrol af medarbejdere ændrer sig fra land til land. For et enkelt lands situation bør du starte med dets faktaark her blandt ressourcerne.' },
    ],
  },
};

export default da;
