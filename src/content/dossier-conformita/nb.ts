import type { DossierCopy } from './types';

const nb: DossierCopy = {
  metaTitle: 'GeoTapps samsvarsdossier: bevis på arbeid, ikke overvåking',
  metaDesc:
    'Hva GeoTapp gjør og ikke gjør, med rettskildene åpent fram og grensene sagt rett ut. GDPR, arbeidsmiljøloven, bevisets integritet.',
  badge: 'Samsvarsdossier',
  h1: 'Bevis på arbeid, ikke overvåking',
  subtitle:
    'Hva GeoTapp gjør og, framfor alt, hva det ikke gjør. Med rettskildene åpent fram og grensene sagt rett ut. Et dokument til å lese, etterprøve og sitere.',
  sections: [
    {
      heading: 'Hvorfor dette dokumentet finnes',
      paragraphs: [
        'I Brussel skrives reglene for hvordan arbeidstakere kan følges med på akkurat nå, mellom direktivet om plattformarbeid, algoritmisk styring og AI-forordningen anvendt på arbeidslivet. I mellomtiden må de som sender lag ut i felten allerede registrere timene, bevise dem når noen bestrider dem, og gjøre det uten å trå over personvernet til folk. Det er en vanskelig balanse, og på denne balansen hviler mye av tilliten mellom dem som organiserer arbeidet og dem som utfører det.',
        'GeoTapp er født inne i dette problemet, ikke ved siden av det. Derfor, i stedet for å love, skriver vi ned hva verktøyet gjør og ikke gjør, med rettskildene åpent fram og grensene sagt rett ut. Det som følger kan leses, etterprøves og siteres. Den som finner et svakt punkt oppfordres til å si fra: et samsvarsdossier er verdt det som holder, ikke det som høres bra ut.',
      ],
    },
    {
      heading: 'Hva det gjør, og framfor alt hva det ikke gjør',
      paragraphs: [
        'Prinsippet er ett eneste: registrere hendelsen, ikke følge personen.',
        'GeoTapp henter posisjonen kun i selve stemplingsøyeblikket, ved inngang og utgang, og ikke gjennom dagen. Mellom ett stempel og det neste finnes ingen sporing: ingen sporlinje av bevegelser, ingen posisjon samlet inn i det skjulte, ingen digital skygging. Bildet som følger stemplingen kan kun tas med direktekameraet, det går ikke an å laste opp et bilde fra galleriet. Dataene som samles inn er redusert til det minst mulige nødvendige ved et bevisst valg i utformingen, ikke som en ettertanke.',
        'Det GeoTapp ikke gjør er like viktig. Det følger ikke arbeidstakeren utenfor arbeidstid, profilerer ikke atferd, måler ikke fagforeningsaktivitet, leser ikke følelsestilstander, bygger ikke poengsummer på folk. Det er nettopp det området Europaparlamentet har pekt ut som noe som bør forbys, og GeoTapp står allerede utenfor det.',
      ],
    },
    {
      heading: 'GDPR-prinsippene, anvendt og ikke bare framsagt',
      paragraphs: [
        'Dataminimering (art. 5 nr. 1 bokstav c i personvernforordningen): posisjonen hentes kun ved stempling, ikke kontinuerlig.',
        'Formålsbegrensning (art. 5 nr. 1 bokstav b): formålet er bevis på utført arbeid, ikke fjernkontroll av personen.',
        'Behandlingsgrunnlag (art. 6): oppfyllelse av arbeidsforholdet og en dokumentert berettiget interesse, sammen med informasjonen til den ansatte.',
        'Åpenhet (art. 12 til 14): arbeidstakeren får tydelig informasjon. GeoTapp stiller til rådighet en mal for GPS-informasjon, gratis og nedlastbar.',
        'Innebygd vern (art. 25): den minimale innsamlingen er verktøyets standardatferd, ikke et valg som må slås på.',
      ],
    },
    {
      heading: 'Forholdet til det norske regelverket',
      paragraphs: [
        'I Norge er behandling av personopplysninger i arbeidslivet regulert av personvernforordningen (GDPR), med Datatilsynet som tilsynsmyndighet, og av arbeidsmiljøloven med tilhørende forskrift om kameraovervåking og innsyn i opplysninger. Bruk av et verktøy som kan gi opplysninger om arbeidstakeres bevegelser krever at tiltaket er forholdsmessig, at det har et saklig formål, og at arbeidstakeren får forhåndsinformasjon. Drøfting med tillitsvalgte hører med der virksomheten har det.',
        'GeoTapp plasserer seg innenfor denne rammen som et verktøy som letter samsvar, ikke som en snarvei som omgår det. Behandlingsansvarlig er fortsatt arbeidsgiveren, med sine plikter: GeoTapp leverer et verktøy utformet for å holde seg innenfor reglene, og ressursene for å anvende dem. For andre europeiske land samler EU-kartet over GPS og arbeidstakere trettini nasjonale faktaark, etterprøvd for hånd, med plikter, ansvarlig myndighet og sanksjoner i hvert land.',
      ],
    },
    {
      heading: 'Bevisets integritet',
      paragraphs: [
        'Når GeoTapp sier «bevis på arbeid», menes noe som holder mot en innsigelse, og for å holde må det være vanskelig å forfalske og umulig å endre i ettertid. Forsvaret er lagdelt.',
        'Bildeopptaket er låst til direktekameraet: verdien som identifiserer denne modusen er fastsatt i klientene og, framfor alt, etterprøves av databasens regler i skriveøyeblikket, som avviser et stempel med en annen modus. For hvert bilde beregner klienten et kryptografisk fingeravtrykk med SHA-256, en nødvendig betingelse for å gå videre.',
        'Arbeidsøktene er uforanderlige når de først er opprettet: starttidspunktet, posisjonen registrert ved stemplingen og brukerens identitet kan ikke endres av den ansatte, og sletting er forbeholdt administratorene. Økter med posisjon oppstår kun gjennom en funksjon på serversiden med administrative rettigheter, ikke ved direkte skriving fra appen, slik at operatøren ikke kan tilbakedatere et stempel, flytte posisjonen eller få det til å forsvinne.',
        'Oppdagelsen av falsk GPS virker allerede før stemplingen starter. På Android-enheter er kontrollen lagdelt, med en liste over kjente spoofing-apper, sjekk av tillatelser for fiktiv posisjon og av tegn på rooting: slår den til, blir stemplingen blokkert, ikke bare markert. På iOS brukes operativsystemets eget signal som angir en programvaresimulert posisjon. I tillegg fanges «teleportering» opp, altså en forflytning i en fysisk umulig hastighet mellom to stempler.',
        'Hver stempling etterlater til slutt et spor i en revisjonslogg på serversiden, med tidspunktet generert av serveren og ikke av enheten, og ingen klient kan skrive i den loggen, ikke engang en administrator.',
      ],
    },
    {
      heading: 'Grensene, sagt tydelig',
      paragraphs: [
        'Dette er den delen mange ville utelatt, og det er nettopp den som gjør resten troverdig. GeoTapp gjør spoofing vanskelig og bevitner konteksten rundt stemplingen, men lover ikke det umulige, og å si det er en form for respekt overfor den som leser.',
        'Serveren etterprøver ikke koordinatene kryptografisk på nytt: den kontrollerer at de er plausible og innenfor en eventuell geofence, men stoler på posisjonen enheten oppgir. Enhetsattesteringen bekrefter at appen kommer fra de offisielle kanalene, men beskytter ikke mot en klient som er endret og analysert av noen med de rette ferdighetene. Modusen «kun direktekamera» er en ærlig erklæring fra enheten, ikke et kryptografisk bevis serveren kan gjenta på selve bildet. Kontrollene er mer fullstendige på telefonen enn på klokken. Og framfor alt fritar verktøyet ikke virksomheten fra rollen som behandlingsansvarlig: plikten til informasjon, til drøfting der det trengs, til forholdsmessighet er fortsatt dens.',
        'Sagt på en annen måte: GeoTapp hever lista og dokumenterer hendelsen, det selger ikke usårbarhet. De som lover usårbarhet har som regel aldri måttet bevise den i en rettssal.',
      ],
    },
    {
      heading: 'De offentlige ressursene som støtter dette',
      paragraphs: [
        'Alt som trengs for å anvende disse prinsippene er offentlig og gratis: EU-kartet over GPS og arbeidstakere med faktaark for de trettini landene, malen for GPS-informasjon, kalkulatoren for sanksjoner, overvåkingsindeksen. Etterprøvd ved kilden, fritt å bruke og sitere med angivelse av hvor det kommer fra. De er der fordi det å bringe arbeidet i samsvar med reglene ikke burde være et privilegium for dem som har råd til en juridisk avdeling.',
      ],
    },
    {
      heading: 'Attestasjon',
      paragraphs: [
        'De tekniske påstandene i dette dokumentet er utarbeidet og signert av Michele Angelo Petraroli, grunnlegger av GeoTapp, som tar ansvaret for dem og stiller seg til rådighet for etterprøving og motforestillinger. Godkjenningen fra en arbeidsrettsadvokat og et personvernombud vil bli lagt til i neste versjon av dokumentet.',
      ],
    },
  ],
  sourcesTitle: 'Kilder og henvisninger',
  sources: [
    'Forordning (EU) 2016/679 (GDPR), særlig art. 5, 6, 12 til 14 og 25.',
    'Lov om arbeidsmiljø, arbeidstid og stillingsvern (arbeidsmiljøloven) med forskrift om kameraovervåking og innsyn i e-post og personopplysninger.',
    'Veiledning og praksis fra Datatilsynet om personvern i arbeidslivet.',
    'EU-tekster under behandling: direktivet om plattformarbeid, bestemmelser om algoritmisk styring, AI-forordningen anvendt på arbeidslivet.',
  ],
  lastUpdated: 'Versjon 1.0',
  faq: {"title": "Ofte stilte spørsmål", "items": [{"q": "Hva er samsvarsdossieret?", "a": "Det er dokumentet som forklarer, med kildene i hånden, hvorfor GeoTapp er et verktøy for å dokumentere arbeid og ikke for overvåking, og hvordan det holder mål under GDPR og arbeidsrettslige regler. Det er for alle som virkelig vil forstå hvordan dataene håndteres, ikke for dem som nøyer seg med et slagord."}, {"q": "Er GeoTapp et overvåkingssystem?", "a": "Nei, og det er bygd nettopp for ikke å være det. Verktøyet registrerer posisjon bare ved innstempling, når noen åpner eller avslutter et oppdrag, aldri kontinuerlig, og det lager personvernerklæringen som skal signeres. Det beviser hva som ble gjort og hvor, det overvåker ikke folk."}, {"q": "Hva trenger jeg dette dossieret til?", "a": "Til å svare når en ansatt, en kunde eller en rådgiver spør om det du bruker er i samsvar med reglene. I stedet for å improvisere har du en tekst som legger frem resonnementet og kildene, og som du kan videresende som den er."}, {"q": "Er kildene verifisert?", "a": "Ja, dossieret peker til reell lov og reelle avgjørelser, listet opp til slutt med oppdateringsdatoen. Det forblir likevel en informativ ressurs og ikke juridisk rådgivning: for din spesifikke situasjon, få alt vurdert av en fagperson."}, {"q": "Kan jeg vise det til en kunde eller i en tvist?", "a": "Du kan bruke det til å forklare hvordan GeoTapp er satt opp og til å vise at samsvar ikke er en påstand som slenges ut lettvint. I en rettstvist er det likevel dine reelle data og din personvernerklæring som teller: dossieret er konteksten, beviset er den registrerte arbeidsøkten."}, {"q": "Gjelder det bare for Italia?", "a": "Resonnementet som ligger til grunn holder i hele Unionen, fordi det tar utgangspunkt i GDPR, men detaljene om overvåking av ansatte endrer seg fra land til land. For situasjonen i én enkelt stat, start fra landets ark her i ressursene."}]},
};

export default nb;
