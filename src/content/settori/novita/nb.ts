import type { NovitaCopy } from './types';

const copy: NovitaCopy = {
  ui: {
    kicker: 'Nytt',
    flowCaption: 'Flow, kontrollpanelet for sjefen',
    phoneCaption: 'TimeTracker, på telefonen',
    altFlow: 'Flow, kontrollpanelet for sjefen: skjermbilde av {tool}',
    altPhone: 'TimeTracker på telefonen: skjermbilde av {tool}',
    flowOnly: 'Dette verktøyet bruker du fra Flow-panelet. De ansatte trenger ikke gjøre noe på telefonen.',
    seeAlso: 'For elektrokontroller, kjeler og F-gass finnes det egne verktøy:',
    moreShots: 'Flere skjermbilder fra dette verktøyet',
    enlarge: 'Forstørr: {name}',
    close: 'Lukk',
    prev: 'Forrige',
    next: 'Neste',
  },
  sections: {
    sicurezza: {
      title: 'Nye verktøy for vakthold: vaktrunde, alenearbeid, vaktoverlevering og Nødsituasjoner',
      intro: 'Når du velger bransje, slår GeoTapp bare på verktøyene du trenger i yrket ditt. For vakthold er det tre, pluss modulen Nødsituasjoner som gjelder alle bransjer. Hvert verktøy har en del i Flow, der du bestemmer og følger opp, og en del på telefonen til vekteren.',
    },
    pulizie: {
      title: 'Nye verktøy for renhold: kvalitetskontroll og sikkerhetsdatablad',
      intro: 'To verktøy laget for klager og kontroller som et renholdsfirma møter hver uke. De slås på når du velger bransje, de andre holdes skjult.',
    },
    elettricisti: {
      title: 'Nye verktøy for elektrikere: målinger ved ferdigstilling og påminnelser om kontroller',
      intro: 'For deg som leverer fra deg en installasjon, og for deg som må huske kundenes kontroller. GeoTapp samler, setter opp og minner deg på det: kontrollene, samsvarserklæringene og signaturene er fortsatt dine.',
    },
    edilizia: {
      title: 'Nye verktøy for bygg og anlegg: bedriftenes dokumenter og estimat for arbeidsinnsats',
      intro: 'To verktøy for deg som koordinerer byggeplasser med underentreprenører, slik at papirene er i orden når det kommer til stykket. De brukes fra Flow, i panelet for sjefen.',
    },
    idraulici: {
      title: 'Nye verktøy for rørleggere og VVS: kjelkontroller og F-gassregister',
      intro: 'Jobben som kommer tilbake hvert år, og som glemmes akkurat når den trengs: å ringe kundene om kontroll av anlegget og å holde orden på utstyr med fluorholdige gasser.',
    },
    installatori: {
      title: 'Nye verktøy for installatører: levering med signatur og varelager i bilen',
      intro: 'To verktøy for de to tingene som koster deg tid på hver jobb: å avslutte leveringen sammen med kunden og å vite hva som faktisk ligger i bilen.',
    },
    manutenzione: {
      title: 'Nye verktøy for vedlikehold: responstider og QR-koder på utstyret',
      intro: 'For deg som jobber med serviceavtaler og mye utstyr fordelt på flere bygg: å vite hvor mye tid som er igjen på hver henvendelse, og å finne historikken til en maskin med ett trykk.',
    },
    impianti: {
      title: 'Nye verktøy for installatører: levering med signatur og varelager i bilen',
      intro: 'Denne siden henvender seg til deg som monterer og leverer anlegg, uansett type. Derfor finner du her de to verktøyene som gjelder alle: levering med signatur og varelager i bilen. Elektrokontroller og kjelkontroller er egne fag og har egne verktøy.',
    },
  },
  tools: {
    giro_ronda: {
      title: 'Vaktrunde',
      body: 'Klokka er tre om natten, og kunden vil vite om vekteren var innom alle punktene på lageret. I Flow tegner du punktene på kartet og setter opp rundene med tidspunkter. Når vekteren kommer forbi, trykker hun «Passering» på telefonen. Om morgenen ligger nattens rapport der, ferdig satt opp.',
      note: 'Posisjonen leses bare i det øyeblikket vekteren trykker «Passering». Mellom to punkter registreres ingenting.',
    },
    lavoratore_isolato: {
      title: 'Alenearbeid',
      body: 'En vekter alene på et anlegg om natten. For hvert sted velger du en plan med det intervallet du vil ha. Med det intervallet spør telefonen «Alt i orden?», og kommer det ikke noe svar, varsles koordinatoren. I Flow ser du pågående vakter og historikken over hvem som svarte og når.',
      note: 'Det sendes ingen posisjon. Dette er et hjelpemiddel og erstatter ikke tiltakene som kreves for den som jobber alene.',
    },
    consegne_turno: {
      title: 'Vaktoverlevering',
      body: 'Klokka seks overlater nattvekteren stedet til morgenvakta. Før var det nøkler i et skap og en talemelding. Nå skriver vekteren ved vaktslutt ned notater, nøkler og avvik til den som kommer etterpå, og vedkommende overtar fra telefonen. I Flow ser du overleveringer som ikke er overtatt ennå og avvik som er åpne. Historikken kan ikke endres.',
    },
    emergenze: {
      title: 'Nødsituasjoner og øvelser',
      body: 'Evakueringsøvelse i en bygning eller på et arrangement: koordinatoren velger scenario og trykker på plantegningen der faren er. Alle på laget får rollen sin på telefonen, hva de skal gjøre og utgangene i rekkefølge, og svarer med ett trykk: til stede, på vei, kan ikke. Dashbordet viser hvem som har svart og etter hvor lang tid. Planene kan også åpnes uten nett.',
      note: 'Dette er et verktøy for koordinering og øving. Det erstatter ikke beredskapsplanen din og godkjenner den ikke, og et varsel kan utebli, så alle bekrefter selv.',
    },
    qualita_pulizie: {
      title: 'Kvalitetskontroll',
      body: 'Kontaktpersonen hos kunden sier at tredje etasje ikke er rengjort godt nok. Laglederen går runden i området med sjekklisten, markerer godkjent, ikke godkjent eller ikke relevant, og legger ved et bilde. I Flow har hvert punkt en vekt fra 1 til 3, månedens poengsum vises per sted og område, og ved månedsslutt får du en PDF til kunden, med åpne tiltak.',
    },
    schede_consumi: {
      title: 'Sikkerhetsdatablad og forbruk',
      body: 'Når tilsynet kommer, vil de se sikkerhetsdatabladet til produktet som står på vognen. I Flow har hvert sted sine produkter, hvert med databladet som PDF, og du ser uttak og kostnader for måneden. På telefonen kan databladene leses også uten nett, og uttaket registreres med en gang.',
    },
    verifiche_misure: {
      title: 'Kontroller og målinger',
      body: 'Skapet er lukket, arbeidet er ferdig: kontinuitet, isolasjon, jordfeilbrytere, jording. Elektrikeren legger inn hver måling fra telefonen med resultat og bilde av måleinstrumentet. Flow samler målingene per oppdrag og setter dem opp som vedlegg til samsvarserklæringen og rapporten fra sluttkontrollen (FEL, NEK 400).',
      note: 'GeoTapp samler og setter opp. GeoTapp kontrollerer, godkjenner eller garanterer ikke noe. Samsvarserklæringen og signaturen er elvirksomhetens ansvar.',
    },
    impianti_terra: {
      title: 'Kontroll av jording',
      body: 'For hver kunde legger du inn datoen for siste periodiske kontroll av det elektriske anlegget. Flow varsler deg før den neste forfaller, så du slipper å oppdage det når datoen allerede er passert. Intervallet bestemmer du og kunden selv.',
      note: 'Datoene legger bedriften din inn selv. GeoTapp minner deg på dem, utfører ikke kontrollen og sier ikke om den er gyldig.',
    },
    documenti_imprese: {
      title: 'Bedriftenes dokumenter',
      body: 'Før du slipper en underentreprenør inn på byggeplassen vil du ha papirene hans i orden, og huske når de går ut. Flow holder en oversikt over dokumentene til hver underentreprenør og varsler deg før datoen. Du bestemmer selv hvilke dokumenter du krever og når de utløper.',
      note: 'Det varsler før en dato, og sier ikke om et dokument er gyldig. Det sjekker du selv, eller rådgiveren din.',
    },
    congruita: {
      title: 'Estimat for arbeidsinnsats',
      body: 'Ved byggeplassens slutt vil rådgiveren vite hvor mye arbeidskraften utgjør av verdien på arbeidet. Flow lager et internt estimat for hver byggeplass ut fra de registrerte timene og eksporterer det til CSV eller PDF, klart til å sendes videre.',
      note: 'Dette er et internt estimat for eget bruk. Det er ikke et offisielt regnestykke.',
    },
    caldaie: {
      title: 'Kjelkontroller',
      body: 'September: flere kunders kontroll nærmer seg. Flow viser anleggene du bør kontakte denne måneden og lager et utkast til melding til kunden, som bare sendes hvis du sender den selv. På telefonen har teknikeren en liste over anleggene med datoene og fyller ut kontrollrapporten med målingene.',
      note: 'Det finnes intet nasjonalt register. Feiing og tilsyn gjør brann- og feiervesenet i kommunen, og GeoTapp sender ingenting til myndighetene. GeoTapp samler og setter opp dataene, og kontrollerer eller garanterer ikke samsvar.',
    },
    fgas: {
      title: 'F-gassregister',
      body: 'Et apparat med fluorholdige gasser har en fylling, et CO2-ekvivalent og en historikk over utført arbeid. I Flow ser du apparatene og hva som må rapporteres. Fra telefonen åpner teknikeren registeret og legger til et nytt oppdrag med en gang, uten å skrive det inn på nytt om kvelden.',
      note: 'Sertifikatet for personell og eventuelle meldinger er teknikerens og bedriftens ansvar. GeoTapp sender ikke noe til myndighetene.',
    },
    consegna_firma: {
      title: 'Levering med signatur',
      body: 'Monteringen er ferdig. Teknikeren leser strekkoden på hvert serienummer med telefonen, tar sluttbilder og lar kunden signere på skjermen. Ut kommer en leveringsprotokoll som PDF, med logoen din, bedriftens opplysninger og strekkoden til hvert serienummer, og den legges inn i rapporten for jobben. I Flow ser du månedens leveringer og velger utseendet på protokollen: logo, opplysninger, tekster, farge.',
    },
    magazzino_furgone: {
      title: 'Lager i bilen',
      body: 'Teknikeren kommer til kunden og oppdager at han ikke har den rette koblingen. På telefonen ser han hva som er i bilen og hva som er i ferd med å ta slutt, og noterer materialet som er brukt på hvert oppdrag. I Flow setter du grenser per bil, ser hva som må bestilles og hva materialet på hver jobb koster.',
    },
    sla: {
      title: 'Responstider (SLA)',
      body: 'Avtalen med borettslaget sier hvor raskt en henvendelse skal tas i arbeid og hvor raskt den skal være løst. I Flow viser hver henvendelse tiden som er igjen for begge deler, per avtale, og ved månedsslutt er det en rapport. På telefonen ser teknikeren henvendelsene som er tildelt ham, tar dem i arbeid og markerer dem som løst.',
    },
    qr_apparecchi: {
      title: 'QR-koder på utstyret',
      body: 'Foran en pumpe eller et sikringsskap skanner teknikeren QR-etiketten og får med en gang historikken og oppdragene for det utstyret. Den som skanner uten konto, for eksempel en leietaker, kan melde fra om et problem. I Flow administrerer du utstyret og skriver ut etikettene.',
    },
  },
  shots: {
    flow_emergenze_attiva: 'Flow: koordinatoren velger scenario og trykker på plantegningen der faren er, for å starte øvelsen',
    flow_emergenze_evento: 'Flow: dashbord for øvelsen som pågår, med hvem som har svart og hvor raskt',
    flow_emergenze_evento_persone: 'Flow: listen over personene på laget med svaret deres: til stede, på vei eller kan ikke',
    flow_emergenze_sito: 'Flow: plantegningen av stedet med utganger, utstyr og soner',
    flow_emergenze_protocolli: 'Flow: protokollene per scenario og rolle',
    flow_emergenze_squadre: 'Flow: lagene med kursbevis, og de som mangler blir markert',
    flow_emergenze_scadenzario: 'Flow: oversikt over kursbevis og kontroller av utstyret med datoer',
    tt_emergenze_dashboard: 'Telefon: startskjermen med varselet om øvelse',
    tt_emergenze_indicazioni: 'Telefon: personlige instrukser, med rolle og hva man skal gjøre',
    tt_emergenze_indicazioni_2: 'Telefon: utgangene i rekkefølge, uten de som er sperret',
    tt_emergenze_risposta: 'Telefon: svar med ett trykk: til stede, på vei eller kan ikke',
    tt_emergenze_piani: 'Telefon: planene, tilgjengelige også uten nett',
  },
};

export default copy;
