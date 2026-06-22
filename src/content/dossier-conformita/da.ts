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
        'I Bruxelles skrives reglerne for, hvordan medarbejdere må følges, lige nu, mellem direktivet om platformsarbejde, algoritmisk ledelse og AI-forordningen anvendt på arbejdslivet. Imens skal den, der sender hold ud i marken, allerede registrere timerne, bevise dem når nogen bestrider dem, og gøre det uden at træde på folks privatliv. Det er en svær balance, og på den balance hviler en stor del af tilliden mellem dem, der organiserer arbejdet, og dem, der udfører det.',
        'GeoTapp er født inde i dette problem, ikke ved siden af det. Derfor sætter vi, i stedet for at love, på skrift hvad værktøjet gør og ikke gør, med de retlige kilder i klar tekst og grænserne sagt uden omsvøb. Det følgende kan læses, efterprøves og citeres. Den, der finder et svagt punkt, opfordres til at sige det: et compliance-dossier er værd det, der holder, ikke det, der lyder godt.',
      ],
    },
    {
      heading: 'Hvad det gør, og frem for alt hvad det ikke gør',
      paragraphs: [
        'Princippet er ét og kun ét: registrere hændelsen, ikke følge personen.',
        'GeoTapp registrerer position kun i selve stemplingsøjeblikket, ved ankomst og ved afgang, og ikke i løbet af dagen. Mellem to stempler er der ingen sporing: ingen rute over bevægelser, ingen position indsamlet i det skjulte, ingen digital skygning. Det foto, der ledsager stemplingen, kan kun tages med live-kameraet, det er ikke muligt at uploade et billede fra galleriet. De indsamlede data er reduceret til det nødvendige minimum ved et bevidst designvalg, ikke som en eftertanke.',
        'Hvad GeoTapp ikke gør er lige så vigtigt. Det forfølger ikke medarbejderen uden for arbejdstiden, det profilerer ikke adfærd, det måler ikke faglig aktivitet, det aflæser ikke følelsestilstande, det bygger ikke scorer på mennesker. Det er præcis den grænse, som Europa-Parlamentet har peget på som noget, der bør forbydes, og GeoTapp ligger allerede uden for den.',
      ],
    },
    {
      heading: 'GDPR-principperne, anvendt og ikke remset op',
      paragraphs: [
        'Dataminimering (art. 5, stk. 1, litra c i GDPR): position indsamles kun ved stemplingen, ikke løbende.',
        'Formålsbegrænsning (art. 5, stk. 1, litra b): formålet er bevis for udført arbejde, ikke fjernkontrol af personen.',
        'Retsgrundlag (art. 6): opfyldelse af ansættelsesforholdet og en dokumenteret legitim interesse, ledsaget af oplysning til medarbejderen.',
        'Gennemsigtighed (art. 12-14): medarbejderen modtager en klar oplysning. GeoTapp stiller en skabelon til GPS-oplysning til rådighed, gratis og til download.',
        'Databeskyttelse gennem design (art. 25): minimal indsamling er værktøjets standardadfærd, ikke en mulighed, der skal slås til.',
      ],
    },
    {
      heading: 'Sammenhængen med dansk ansættelsesret',
      paragraphs: [
        'I Danmark hviler behandlingen af medarbejderes positionsdata på databeskyttelsesforordningen (GDPR) sammen med de almindelige ansættelsesretlige rammer, og Datatilsynet er den kompetente tilsynsmyndighed. En arbejdsgiver, der vil registrere medarbejderes position, skal have et gyldigt retsgrundlag, holde behandlingen inden for et legitimt formål, overholde proportionalitet, så indgrebet ikke går videre end nødvendigt, og forudgående informere medarbejderen klart om, hvad der indsamles, hvorfor og hvor længe.',
        'GeoTapp placerer sig inden for disse rammer som et værktøj, der letter overholdelsen, ikke som en genvej, der omgår den. Den dataansvarlige er fortsat arbejdsgiveren, med de pligter det indebærer: GeoTapp leverer et værktøj, der er bygget til at holde sig inden for reglerne, og ressourcerne til at anvende dem. For de øvrige europæiske lande samler EU-kortet over medarbejder-GPS niogtredive nationale faktaark, efterprøvet i hånden, med hvert lands pligter, kompetente myndighed og sanktioner.',
      ],
    },
    {
      heading: 'Integriteten i beviset',
      paragraphs: [
        'Når GeoTapp siger ’bevis for arbejde’, menes der noget, der holder over for en indsigelse, og for at holde skal det være svært at forfalske og umuligt at rette i bagefter. Forsvaret er lagdelt.',
        'Optagelsen af foto er låst til live-kameraet: den værdi, der identificerer denne tilstand, er fastlagt i klienterne og, frem for alt, efterprøvet af databasens regler i selve skriveøjeblikket, som afviser en stempling med en anden tilstand. For hvert foto beregner klienten et SHA-256 kryptografisk aftryk, en nødvendig betingelse for at fortsætte.',
        'Arbejdssessionerne er uforanderlige, når de først er oprettet: starttidspunktet, den position der blev registreret ved stemplingen og brugerens identitet kan ikke ændres af medarbejderen, og sletning er forbeholdt administratorerne. Sessioner med position opstår kun gennem en serverside-funktion med administrative rettigheder, ikke ved direkte skrivning fra appen, så medarbejderen kan ikke tilbagedatere en stempling, flytte dens position eller få den til at forsvinde.',
        'Registreringen af falsk GPS virker, før stemplingen overhovedet sendes afsted. På Android-enheder er kontrollen flerlaget, med en liste over kendte spoofing-apps, kontrol af tilladelser til fiktiv position og af tegn på root: udløses den, blokeres stemplingen, ikke blot markeres. På iOS bruges det native signal fra styresystemet, der angiver en softwaresimuleret position. Desuden opfanges ’teleportering’, altså en bevægelse med en fysisk umulig hastighed mellem to stemplinger.',
        'Hver stempling efterlader til sidst et spor i en revisionslog på serveren, med tidspunktet genereret af serveren og ikke af enheden, og ingen klient kan skrive i den log, heller ikke en administrator.',
      ],
    },
    {
      heading: 'Grænserne, sagt klart',
      paragraphs: [
        'Dette er det afsnit, mange ville udelade, og netop det gør hele resten troværdigt. GeoTapp gør spoofing svært og bevidner stemplingens kontekst, men lover ikke det umulige, og at sige det er en form for respekt for læseren.',
        'Serveren efterprøver ikke koordinaterne kryptografisk på ny: den kontrollerer, at de er plausible og inden for en eventuel geofence, men stoler på den position, enheden oplyser. Enhedsattesteringen bekræfter, at appen kommer fra de officielle kanaler, den beskytter ikke mod en klient, der er ændret og analyseret af en med de rette kompetencer. Tilstanden ’kun live-kamera’ er en ærlig erklæring fra enheden, ikke et kryptografisk bevis, som serveren kan gentage på selve billedet. Kontrollerne er mere fuldstændige på smartphonen end på uret. Og frem for alt fritager værktøjet ikke virksomheden fra sin rolle som dataansvarlig: pligten til oplysning, til aftale hvor det kræves, til proportionalitet forbliver dens.',
        'Sagt på en anden måde: GeoTapp hæver barren og dokumenterer hændelsen, det sælger ikke usårlighed. Den, der lover usårlighed, har som regel aldrig skullet bevise den i retten.',
      ],
    },
    {
      heading: 'De offentlige ressourcer, der støtter op',
      paragraphs: [
        'Alt, hvad der skal til for at anvende disse principper, er offentligt og gratis: EU-kortet over medarbejder-GPS med faktaark for niogtredive lande, skabelonen til GPS-oplysning, sanktionsberegneren, overvågningsindekset. Efterprøvet ved kilden, frit at bruge og citere med angivelse af oprindelse. De er der, fordi det at bringe arbejdet i overensstemmelse med reglerne ikke burde være et privilegium for dem, der har råd til en juridisk afdeling.',
      ],
    },
    {
      heading: 'Attestering',
      paragraphs: [
        'De tekniske udsagn i dette dokument er udarbejdet og underskrevet af Michele Angelo Petraroli, stifter af GeoTapp, som påtager sig ansvaret for dem og stiller sig til rådighed for efterprøvning og modsigelse. En tilslutning fra en ansættelsesretlig advokat og en DPO vil blive tilføjet i den næste version af dokumentet.',
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
  lastUpdated: 'Version 1.0',
  faq: {"title": "Ofte stillede spørgsmål", "items": [{"q": "Hvad er compliance-dossieret?", "a": "Det er det dokument, der med kilderne i hånd forklarer, hvorfor GeoTapp er et værktøj til bevis på udført arbejde og ikke til overvågning, og hvordan det holder under GDPR og arbejdsretten. Det er til alle, der vil forstå rigtigt, hvordan dataene håndteres, ikke til dem, der nøjes med et slogan."}, {"q": "Er GeoTapp et overvågningssystem?", "a": "Nej, og det er bygget specifikt til ikke at være det. Værktøjet registrerer kun positionen ved stempling, når nogen åbner eller lukker en opgave, aldrig løbende, og det laver den privatlivsmeddelelse, der skal underskrives. Det dokumenterer, hvad der blev udført og hvor, det holder ikke øje med folk."}, {"q": "Hvad skal jeg bruge dette dossier til?", "a": "Til at svare, når en medarbejder, en kunde eller en rådgiver spørger, om det, du bruger, er compliant. I stedet for at improvisere har du en tekst, der lægger ræsonnementet og kilderne frem, og som du kan videresende, som den er."}, {"q": "Er kilderne verificeret?", "a": "Ja, dossieret peger på reel lovgivning og reelle afgørelser, listet til sidst med opdateringsdatoen. Det forbliver dog en informativ ressource og ikke juridisk rådgivning: for din konkrete situation bør du få alt vurderet af en fagperson."}, {"q": "Kan jeg vise det til en kunde eller i en tvist?", "a": "Du kan bruge det til at forklare, hvordan GeoTapp er sat op, og til at vise, at compliance ikke er en påstand, der bare smides ud i luften. I en retssag er det dog dine reelle data og din privatlivsmeddelelse, der tæller: dossieret er konteksten, beviset er den registrerede arbejdssession."}, {"q": "Gælder det kun for Italien?", "a": "Det underliggende ræsonnement holder i hele Unionen, fordi det tager udgangspunkt i GDPR, men detaljerne om overvågning af medarbejdere ændrer sig fra land til land. For en enkelt stats situation bør du starte fra dens ark her i ressourcerne."}]},
};

export default da;
