import type { DossierCopy } from './types';

const nb: DossierCopy = {
  metaTitle: 'GeoTapps samsvarsdossier: bevis på arbeid, ikke overvåking',
  metaDesc:
    'Hva GeoTapp gjør og ikke gjør, med rettskildene åpent fram og grensene sagt rett ut. GDPR, norsk arbeidsrett, bevisets integritet.',
  badge: 'Samsvarsdossier',
  h1: 'Bevis på arbeid, ikke overvåking',
  subtitle:
    'Hva GeoTapp gjør og, framfor alt, hva det ikke gjør. Med rettskildene åpent fram og grensene sagt rett ut. Et dokument til å lese, etterprøve og sitere.',
  sections: [
    {
      heading: 'Hvorfor dette dokumentet finnes',
      paragraphs: [
        'I Brussel skrives det akkurat nå regler for hvordan arbeidstakere kan overvåkes, mellom direktivet om plattformarbeid, algoritmisk styring og AI-forordningen anvendt på arbeidslivet. I mellomtiden må de som sender lag ut i felten allerede registrere timene, bevise dem når noen bestrider dem, og gjøre det uten å trå over personvernet til folk. Det er en vanskelig balanse, og på denne balansen hviler mye av tilliten mellom dem som organiserer arbeidet og dem som utfører det.',
        'GeoTapp er født inne i dette problemet, ikke ved siden av det. Derfor, i stedet for å love, skriver vi ned hva verktøyet gjør og ikke gjør, med rettskildene åpent fram og grensene sagt rett ut. Det som følger kan leses, etterprøves og siteres. Den som finner et svakt punkt oppfordres til å si fra: et samsvarsdossier er verdt det som holder, ikke det som høres bra ut.',
      ],
    },
    {
      heading: 'Hva det gjør, og framfor alt hva det ikke gjør',
      paragraphs: [
        'Prinsippet er ett eneste: registrere hendelsen, ikke følge personen.',
        'GeoTapp registrerer posisjonen bare når arbeidstakeren stempler (inngang, start og slutt på pause, utgang) eller tar et bevisbilde, og ikke gjennom dagen. Mellom ett stempel og det neste registreres ingenting automatisk: ingen sporlinje av bevegelser, ingen posisjon samlet inn i det skjulte, ingen digital skygging. Appen ber heller ikke om tillatelse til å lese posisjonen i bakgrunnen, så den kunne ikke gjort det selv om noen ville. I den nåværende versjonen av appen tas bevisbildet kun med direktekameraet: det går ikke an å laste opp et bilde fra galleriet. Dataene som samles inn er redusert til det minst mulige nødvendige ved et bevisst valg i utformingen, ikke som en ettertanke.',
        'Det GeoTapp ikke gjør er like viktig. Det følger ikke arbeidstakeren utenfor arbeidstid, profilerer ikke atferd, måler ikke fagforeningsaktivitet, leser ikke følelsestilstander, bygger ikke poengsummer på folk. Det er det området de europeiske forslagene om plattformarbeid og algoritmisk styring peker ut som noe som bør forbys, og GeoTapp er utformet for å holde seg utenfor det.',
      ],
    },
    {
      heading: 'GDPR-prinsippene, anvendt og ikke bare framsagt',
      paragraphs: [
        'Dataminimering (art. 5 nr. 1 bokstav c i personvernforordningen): posisjonen hentes kun ved stempling, ikke kontinuerlig.',
        'Formålsbegrensning (art. 5 nr. 1 bokstav b): formålet er bevis på utført arbeid, ikke fjernkontroll av personen.',
        'Behandlingsgrunnlag (art. 6): oppfyllelse av arbeidsforholdet og en dokumentert berettiget interesse, sammen med informasjon til den ansatte.',
        'Åpenhet (art. 12 til 14): arbeidstakeren får tydelig informasjon. GeoTapp stiller en mal for GPS-informasjon til rådighet, gratis og nedlastbar.',
        'Innebygd vern (art. 25): den minimale innsamlingen er verktøyets standardatferd, ikke et valg som må slås på.',
      ],
    },
    {
      heading: 'Forholdet til det norske regelverket',
      paragraphs: [
        'I Norge hviler behandlingen av arbeidstakeres posisjonsopplysninger på personvernforordningen (GDPR) sammen med de alminnelige arbeidsrettslige rammene, og Datatilsynet er tilsynsmyndighet. En arbeidsgiver som vil registrere arbeidstakeres posisjon, må ha et gyldig behandlingsgrunnlag, holde behandlingen innenfor et saklig formål, sørge for at tiltaket er forholdsmessig og ikke går lenger enn nødvendig, og på forhånd gi arbeidstakeren tydelig informasjon om hva som samles inn, hvorfor og hvor lenge.',
        'GeoTapp plasserer seg innenfor denne rammen som et verktøy som letter samsvar, ikke som en snarvei som omgår det. Behandlingsansvarlig er fortsatt arbeidsgiveren, med sine plikter: GeoTapp leverer et verktøy utformet for å holde seg innenfor reglene, og ressursene for å anvende dem. For andre europeiske land samler EU-kartet over GPS og arbeidstakere trettini nasjonale faktaark, etterprøvd for hånd, med plikter, ansvarlig myndighet og sanksjoner i hvert land.',
      ],
    },
    {
      heading: 'Bevisets integritet',
      paragraphs: [
        'Når GeoTapp sier «bevis på arbeid», menes noe som holder mot en innsigelse, og for å være til nytte må det være vanskelig å forfalske, og hver senere endring må framstå tydelig. Forsvaret er lagdelt.',
        'Bildeopptaket er låst til direktekameraet: verdien som identifiserer denne modusen er fastsatt i klientene og, framfor alt, etterprøves av databasens regler i skriveøyeblikket, som avviser et stempel med en annen modus. For hvert bilde beregner klienten et kryptografisk fingeravtrykk med SHA-256, en nødvendig betingelse for å gå videre.',
        'Når arbeidsøktene først er opprettet, er de beskyttet: starttidspunktet, posisjonen registrert ved stemplingen og brukerens identitet kan ikke endres av den ansatte, og sletting er forbeholdt administratorene. Økter med posisjon oppstår kun gjennom en funksjon på serversiden med administrative rettigheter, ikke ved direkte skriving fra appen, slik at operatøren ikke kan tilbakedatere et stempel, flytte posisjonen eller få det til å forsvinne.',
        'Oppdagelsen av falsk GPS virker allerede før stemplingen går av sted. På Android-enheter er kontrollen lagdelt, med en liste over kjente spoofing-apper og kontroll av tillatelser for fiktiv posisjon: slår den til, blir stemplingen avvist, ikke bare markert. Tegn på rooting oppdages, og virksomheten kan velge å blokkere stempling på slike telefoner. Posisjoner som er for upresise, avvises også. På iOS brukes operativsystemets eget signal som angir en programvaresimulert posisjon. I tillegg fanges «teleportering» opp, altså en forflytning i en fysisk umulig hastighet mellom to stempler.',
        'Hver stempling etterlater til slutt et spor i en revisjonslogg på serversiden, med tidspunktet generert av serveren og ikke av enheten, og ingen app kan skrive i den loggen, heller ikke en administrators.',
      ],
    },
    {
      heading: 'Grensene, sagt tydelig',
      paragraphs: [
        'Dette er den delen mange ville utelatt, og det er nettopp den som gjør resten troverdig. GeoTapp gjør spoofing vanskelig og bevitner konteksten rundt stemplingen, men lover ikke det umulige, og å si det er en form for respekt overfor den som leser.',
        'Serveren etterprøver ikke koordinatene kryptografisk på nytt: den kontrollerer at de er plausible og innenfor en eventuell geofence, men stoler på posisjonen enheten oppgir. Enhetsattesteringen bekrefter at appen kommer fra de offisielle kanalene, men beskytter ikke mot en endret klient som er analysert av noen med de rette ferdighetene. Modusen «kun direktekamera» er en ærlig erklæring fra enheten, ikke et kryptografisk bevis serveren kan gjenta på selve bildet. Kontrollene er mer fullstendige på smarttelefonen enn på klokken. Og framfor alt fritar verktøyet ikke virksomheten fra rollen som behandlingsansvarlig: plikten til informasjon, til avtale der det trengs, til forholdsmessighet er fortsatt dens.',
        'Sagt på en annen måte: GeoTapp hever listen og dokumenterer hendelsen, det selger ikke usårbarhet. De som lover usårbarhet har som regel aldri måttet bevise den i en rettssal.',
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
        'De tekniske påstandene i dette dokumentet er utarbeidet og signert av Michele Angelo Petraroli, grunnlegger av GeoTapp, som tar ansvaret for dem og stiller seg til rådighet for etterprøving og motforestillinger.',
      ],
    },
  ],
  sourcesTitle: 'Kilder og henvisninger',
  sources: [
    'Forordning (EU) 2016/679 (GDPR), særlig art. 5, 6, 12 til 14 og 25.',
    'Norsk arbeidsrett og de alminnelige rammene for behandling av arbeidstakeres opplysninger.',
    'Datatilsynets veiledning og praksis om behandling av arbeidstakeres posisjonsopplysninger.',
    'EU-tekster under behandling: direktivet om plattformarbeid, bestemmelser om algoritmisk styring, AI-forordningen anvendt på arbeidslivet.',
  ],
  lastUpdated: 'Versjon 1.1 · oppdatert 30. september 2026',
  faq: {
    title: 'Ofte stilte spørsmål',
    items: [
      { q: 'Hva er samsvarsdossieret?', a: 'Det er dokumentet som forklarer, med kildene i hånden, hvorfor GeoTapp er et verktøy for bevis på arbeid og ikke for overvåking, og hvordan det hviler på GDPR og arbeidsrettslige regler. Det er for alle som virkelig vil forstå hvordan dataene behandles, ikke for dem som nøyer seg med et slagord.' },
      { q: 'Er GeoTapp et overvåkingssystem?', a: 'Nei, det er ikke laget for å overvåke. Det registrerer posisjonen bare når operatøren stempler (inngang, pauser, utgang) eller tar et bevisbilde, aldri kontinuerlig, og det forbereder informasjonen arbeidstakeren signerer i appen før vedkommende kan stemple. Det viser hva som er gjort og hvor, det holder ikke øye med folk.' },
      { q: 'Hva trenger jeg dette dossieret til?', a: 'Til å svare når en ansatt, en kunde eller en rådgiver spør om det du bruker er i samsvar med reglene. I stedet for å improvisere har du en tekst som legger fram resonnementet og kildene, og som du kan videresende som den er.' },
      { q: 'Er kildene etterprøvd?', a: 'Ja, dossieret henviser til reelle regler og reelle avgjørelser, oppført til slutt med oppdateringsdatoen. Det er likevel en informativ ressurs og ikke juridisk rådgivning: for din konkrete situasjon bør du få alt vurdert av en fagperson.' },
      { q: 'Kan jeg vise det til en kunde eller i en tvist?', a: 'Du kan bruke det til å forklare hvordan GeoTapp er satt opp, og til å vise at samsvar ikke er en påstand som slenges ut. I en tvist er det likevel dine egne data og din egen informasjon til de ansatte som teller: dossieret er konteksten, beviset er den registrerte arbeidsøkten.' },
      { q: 'Gjelder det bare for Italia?', a: 'Resonnementet som ligger til grunn holder i hele Unionen, fordi det tar utgangspunkt i GDPR, men detaljene om kontroll av arbeidstakere varierer fra land til land. For situasjonen i én enkelt stat, start med landets faktaark her blant ressursene.' },
    ],
  },
};

export default nb;
