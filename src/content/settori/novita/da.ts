import type { NovitaCopy } from './types';

const copy: NovitaCopy = {
  ui: {
    kicker: 'Nyt',
    flowCaption: 'Flow, ejerens kontrolpanel',
    phoneCaption: 'TimeTracker, på telefonen',
    altFlow: 'Flow, ejerens kontrolpanel: skærmbillede af {tool}',
    altPhone: 'TimeTracker på telefonen: skærmbillede af {tool}',
    flowOnly: 'Dette værktøj bruger du fra Flow-panelet: dine medarbejdere skal ikke gøre noget på telefonen.',
    seeAlso: 'Til eftersyn af el, kedler og F-gas findes der egne værktøjer:',
    moreShots: 'Flere skærmbilleder fra dette værktøj',
    enlarge: 'Forstør: {name}',
    close: 'Luk',
    prev: 'Forrige',
    next: 'Næste',
  },
  sections: {
    sicurezza: {
      title: 'Nye værktøjer til vagtselskaber: vagtrunde, alenearbejde, vagtoverdragelse og Nødsituationer',
      intro: 'Når du vælger branche, slår GeoTapp kun de værktøjer til, der hører til dit fag. Til vagtbranchen er det tre, plus modulet Nødsituationer, som gælder for alle brancher. Hvert værktøj har en del i Flow, hvor du beslutter og følger op, og en del på vagtens telefon.',
    },
    pulizie: {
      title: 'Nye værktøjer til rengøring: kvalitetskontrol og sikkerhedsdatablade',
      intro: 'To værktøjer til de reklamationer og kontroller, et rengøringsfirma møder hver uge. De slås til, når du angiver din branche, de øvrige forbliver skjult.',
    },
    elettricisti: {
      title: 'Nye værktøjer til elektrikere: målinger ved afslutning og kalender for eftersyn',
      intro: 'Til dig, der afleverer en installation, og til dig, der skal huske kundernes tilbagevendende eftersyn. GeoTapp samler, sætter op og minder dig om datoerne: målinger, dokumentation og underskrift ligger fortsat hos den, der udfører arbejdet.',
    },
    edilizia: {
      title: 'Nye værktøjer til byggeri: virksomhedernes dokumenter og lønandel pr. byggeplads',
      intro: 'To værktøjer til dig, der styrer byggepladser med underentreprenører, så papirerne er i orden, når der bliver spurgt. Du bruger dem fra Flow, ejerens kontrolpanel.',
    },
    idraulici: {
      title: 'Nye værktøjer til VVS: kedelkontroller og register over F-gas',
      intro: 'Arbejdet, der vender tilbage hvert år og så let glemmes: at ringe til kunderne om eftersyn af anlægget og holde styr på anlæg med fluorholdige gasser.',
    },
    installatori: {
      title: 'Nye værktøjer til installatører: aflevering med underskrift og varelager i bilen',
      intro: 'To værktøjer til de to ting, der koster tid på hvert job: at afslutte afleveringen hos kunden og at vide, hvad der faktisk ligger i bilen.',
    },
    manutenzione: {
      title: 'Nye værktøjer til vedligehold: reaktionstider og QR på udstyr',
      intro: 'Til dig med serviceaftaler og mange anlæg fordelt på flere bygninger: at vide, hvor lang tid der er tilbage på hver henvendelse, og at finde en maskines historik med ét tryk.',
    },
    impianti: {
      title: 'Nye værktøjer til installatører: aflevering med underskrift og varelager i bilen',
      intro: 'Denne side henvender sig til dig, der monterer og afleverer anlæg, uanset type. Derfor finder du her de to værktøjer, der gælder for alle: aflevering med underskrift og varelager i bilen. Eftersyn af el og kedler er fag for sig og har deres egne værktøjer.',
    },
  },
  tools: {
    giro_ronda: {
      title: 'Vagtrunde',
      body: 'Klokken er tre om natten, og kunden vil vide, om vagten kom forbi alle punkter på lageret. I Flow tegner du punkterne på kortet og sætter runderne op med tidspunkter. Når vagten går forbi, trykker han »Kontrolpunkt« på telefonen. Om morgenen ligger natten klar som en færdig rapport.',
      note: 'Positionen læses kun i det øjeblik, vagten trykker »Kontrolpunkt«. Mellem to punkter registreres der ingenting.',
    },
    lavoratore_isolato: {
      title: 'Alenearbejde',
      body: 'En vagt alene på en lokation, om natten. For hver lokation vælger du en plan med det interval, du foretrækker. Ved hvert interval spørger telefonen »Alt i orden?«, og kommer der intet svar, får koordinatoren besked. I Flow ser du de igangværende vagter og historikken over, hvem der svarede og hvornår.',
      note: 'Der sendes ingen position. Det er et støtteværktøj: det erstatter ikke de sikkerhedsforanstaltninger, der skal gælde for alenearbejde.',
    },
    consegne_turno: {
      title: 'Vagtoverdragelse',
      body: 'Klokken seks overlader natvagten lokationen til morgenvagten. Før var det nøgler i en skuffe og en talebesked. Nu skriver vagten ved vagtens afslutning noter, nøgler og afvigelser til den næste, som overtager dem fra telefonen. I Flow ser du de overdragelser, der endnu ikke er overtaget, og de åbne afvigelser. Historikken kan ikke redigeres.',
    },
    emergenze: {
      title: 'Nødsituationer og øvelser',
      body: 'Evakueringsøvelse i en bygning eller til en begivenhed: koordinatoren vælger scenariet og trykker på planen, hvor faren er. Hver person på holdet får på telefonen sin rolle, hvad vedkommende skal gøre og udgangene i rækkefølge, og svarer med et tryk: til stede, på vej, kan ikke. Overblikket viser, hvem der har svaret og efter hvor lang tid. Planerne kan også åbnes uden net.',
      note: 'Det er et værktøj til koordinering og øvelse: det erstatter ikke din beredskabsplan og godkender den heller ikke. En notifikation kan udeblive, derfor bekræfter hver enkelt selv.',
    },
    qualita_pulizie: {
      title: 'Kvalitetskontrol',
      body: 'Kundens kontaktperson siger, at tredje sal ikke er gjort ordentligt rent. Holdlederen går området igennem med en liste over punkter, markerer OK, ikke OK eller ikke relevant og vedhæfter et foto. I Flow har hvert punkt en vægt fra 1 til 3, månedens score gælder pr. lokation og område, og ved månedens slutning får du en PDF at vise kunden med de åbne opgaver.',
    },
    schede_consumi: {
      title: 'Sikkerhedsdatablade og forbrug',
      body: 'Når en tilsynsførende kommer, vil han se sikkerhedsdatabladet for det produkt, der står på vognen. I Flow har hver lokation sine produkter, hvert med datablad som PDF, og du ser månedens forbrug og omkostninger. På telefonen kan databladene læses, også hvor der ikke er net, og forbruget registreres med det samme.',
    },
    verifiche_misure: {
      title: 'Kontroller og målinger',
      body: 'Tavlen er lukket, arbejdet er færdigt: kontinuitet, isolation, fejlstrømsafbrydere, jordforbindelse. Elektrikeren indtaster hver måling på telefonen med resultatet og et foto af måleinstrumentet. Flow samler målingerne pr. sag og sætter dem op som bilag til verifikationsrapporten (DS/HD 60364-6).',
      note: 'GeoTapp samler og sætter op: det kontrollerer, godkender eller garanterer ikke noget. Rapporten og underskriften ligger hos den autoriserede elinstallatør, der har udført arbejdet.',
    },
    impianti_terra: {
      title: 'Eftersyn af jordforbindelser',
      body: 'For hver kunde indtaster du datoen for det seneste eftersyn af elinstallationen, for eksempel jordforbindelsen. Flow minder dig om det i god tid, så du ikke opdager det, når fristen er overskredet. Intervallet vælger du selv ud fra kundens aftale og dine egne rutiner.',
      note: 'Datoerne indtaster din virksomhed selv: GeoTapp minder dig kun om dem. Det udfører ikke eftersynet og siger ikke, om det er gyldigt.',
    },
    documenti_imprese: {
      title: 'Virksomhedernes dokumenter',
      body: 'Før en underentreprenør kommer på byggepladsen, vil du have hans papirer i orden og huske, hvornår de udløber. Flow holder en kalender over dokumenterne for hver underentreprenør og minder dig om datoen i god tid.',
      note: 'Det minder dig om udløbet, men siger ikke, om et dokument er gyldigt: det kontrollerer du selv eller din rådgiver.',
    },
    congruita: {
      title: 'Lønandel pr. byggeplads',
      body: 'Når byggepladsen er færdig, spørger din rådgiver, hvor stor en del af arbejdets værdi der gik til løn. Flow laver et internt overslag for hver byggeplads ud fra de registrerede timer og eksporterer det som CSV eller PDF, klar til at sende videre.',
      note: 'Det er et internt overslag, ikke en officiel beregning.',
    },
    caldaie: {
      title: 'Kedelkontroller',
      body: 'September: flere kunders eftersyn nærmer sig. Flow viser dig de anlæg, der skal kontaktes i denne måned, og laver et udkast til beskeden til kunden, som kun sendes, hvis du sender den. På telefonen har teknikeren listen over anlæg med frister og udfylder eftersynsrapporten med målingerne.',
      note: 'Der findes ikke noget nationalt register: arbejde på gasanlæg udføres af autoriserede installatører, og skorstensfejeren gør sit. GeoTapp samler og sætter dataene op, kontrollerer eller garanterer ikke noget og melder intet til nogen myndighed.',
    },
    fgas: {
      title: 'Register over F-gas',
      body: 'Et anlæg med fluorholdige gasser har en påfyldning, et CO2-ækvivalent og en historik over udført arbejde. I Flow ser du anlæggene og det, der skal indberettes. Fra telefonen åbner teknikeren registret og tilføjer en ny opgave med det samme, uden at skrive det af om aftenen.',
      note: 'Indberetningen foretager kølemontøren eller virksomheden selv: GeoTapp sender den ikke.',
    },
    consegna_firma: {
      title: 'Aflevering med underskrift',
      body: 'Monteringen er færdig. Teknikeren scanner stregkoden på hvert serienummer med telefonen, tager de sidste billeder og lader kunden skrive under på skærmen. Resultatet er en PDF-afleveringsprotokol med dit logo, virksomhedens oplysninger og stregkoden på hvert serienummer, som kommer med i jobbets rapport. I Flow ser du månedens afleveringer og vælger rapportens udseende: logo, oplysninger, tekster og farve.',
    },
    magazzino_furgone: {
      title: 'Lager i bilen',
      body: 'Teknikeren er ude hos kunden og opdager, at han ikke længere har den rigtige fitting. På telefonen ser han, hvad der ligger i bilen, og hvad der er ved at løbe tør, og han noterer det forbrugte materiale på hver sag. I Flow sætter du grænser pr. bil, ser hvad der skal bestilles hjem og hvad materialet koster på hvert job.',
    },
    sla: {
      title: 'Reaktionstider (SLA)',
      body: 'Aftalen med ejerforeningen siger, inden for hvor lang tid en henvendelse skal tages op, og inden for hvor lang tid den skal løses. I Flow viser hver henvendelse den tid, der er tilbage til begge dele, pr. aftale, og ved månedens slutning er der en rapport. På telefonen ser teknikeren de tildelte henvendelser, tager dem op og markerer dem som løst.',
    },
    qr_apparecchi: {
      title: 'QR på udstyr',
      body: 'Foran en pumpe eller en tavle scanner teknikeren QR-mærkaten og har straks udstyrets historik og tidligere opgaver. Den, der scanner uden en konto, for eksempel en lejer, kan melde et problem. I Flow administrerer du udstyret og printer mærkaterne.',
    },
  },
  shots: {
    flow_emergenze_attiva: 'Flow: koordinatoren vælger scenariet og trykker på planen, hvor faren er, for at starte øvelsen',
    flow_emergenze_evento: 'Flow: overblik over den igangværende øvelse med, hvem der har svaret og efter hvor lang tid',
    flow_emergenze_evento_persone: 'Flow: listen over personerne på holdet med deres svar: til stede, på vej eller kan ikke',
    flow_emergenze_sito: 'Flow: lokationens plantegning med udgange, udstyr og zoner',
    flow_emergenze_protocolli: 'Flow: protokollerne pr. scenarie og rolle',
    flow_emergenze_squadre: 'Flow: holdene med kursusbeviser, og de, der mangler, bliver markeret',
    flow_emergenze_scadenzario: 'Flow: kalender over kursusbeviser og eftersyn af udstyret',
    tt_emergenze_dashboard: 'Telefon: startskærmen med besked om øvelse',
    tt_emergenze_indicazioni: 'Telefon: de personlige anvisninger med rolle og hvad der skal gøres',
    tt_emergenze_indicazioni_2: 'Telefon: udgangene i rækkefølge, uden de spærrede',
    tt_emergenze_risposta: 'Telefon: svar med ét tryk: til stede, på vej eller kan ikke',
    tt_emergenze_piani: 'Telefon: planerne, som også kan læses uden net',
  },
};

export default copy;
