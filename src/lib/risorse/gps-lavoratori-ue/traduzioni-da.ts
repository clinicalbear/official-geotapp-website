/**
 * Dansk version af de tekster, som i landekortene er skrevet som almindelig
 * `string` (dvs. på italiensk, mastersproget): kildernes titler og
 * kontaktpunkternes navne. Nøgle = den præcise ITALIENSKE tekst, som den står
 * i kortet, værdi = den danske version. Bruges af `loc()` (./localize.ts)
 * udelukkende for `da`. Officielle navne på love og myndigheder bevares på
 * originalsproget, med en dansk forklaring i parentes, hvor det hjælper med at
 * forstå, hvad der er tale om.
 *
 * En ny kilde eller en ændret titel i et kort uden indgang her forbliver på
 * italiensk på den danske side: testen `traduzioni-da.test.ts` påpeger det.
 */
export const TESTI_DA: Readonly<Record<string, string>> = {
  "Legge lituana sulla protezione giuridica dei dati personali (ADTAĮ), art. 5 c. 4, testo consolidato":
    "Litauisk lov om retlig beskyttelse af personoplysninger (ADTAĮ), art. 5, stk. 4, konsolideret tekst",
  "UOOU, relazione annuale 2012, controllo su Česká pošta (monitoraggio degli spostamenti dei portalettere)":
    "UOOU, årsberetning 2012, kontrol af Česká pošta (overvågning af postbudenes færden)",
  "CNPD, Deliberação 2019/494 (norme della Lei 58/2019 disapplicate)":
    "CNPD, Deliberação 2019/494 (bestemmelser i Lei 58/2019, som ikke anvendes)",
  "Garante Privacy, Provvedimento n. 7 del 16 gennaio 2025 (doc-web 10112287)":
    "Garante Privacy, afgørelse nr. 7 af 16. januar 2025 (doc-web 10112287)",
  "Garante Privacy, Provvedimento n. 755 del 18 dicembre 2025, n. 10213711 (Pioneer Hi-Bred Italia Sementi)":
    "Garante Privacy, afgørelse nr. 755 af 18. december 2025, doc-web 10213711 (Pioneer Hi-Bred Italia Sementi)",
  "Garante Privacy, Provvedimento n. 382 del 28 maggio 2026, n. 10259916 (Azienda di Tutela della Salute per la Liguria)":
    "Garante Privacy, afgørelse nr. 382 af 28. maj 2026, doc-web 10259916 (Azienda di Tutela della Salute per la Liguria, Liguriens sundhedsmyndighed)",
  "Garante Privacy, Provvedimento n. 135 del 13 marzo 2025 (doc-web 10128005), rimosso temporaneamente dal sito in ottemperanza alla sentenza del Tribunale di Cosenza n. 972 del 1° luglio 2026 (opposizione accolta)":
    "Garante Privacy, afgørelse nr. 135 af 13. marts 2025 (doc-web 10128005), midlertidigt fjernet fra webstedet i henhold til dom nr. 972 af 1. juli 2026 fra retten i Cosenza (indsigelsen fik medhold)",
  "AGI Lavoro, «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (sentenza n. 972 del 1° luglio 2026; il testo della sentenza non è stato reperito in fonte ufficiale)":
    "AGI Lavoro, «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (dom nr. 972 af 1. juli 2026; dommens tekst er ikke fundet i en officiel kilde)",
  "Avvocati Associati, commento alla sentenza Trib. Cosenza n. 972/2026 (22/09/2026), con passi citati":
    "Avvocati Associati, kommentar til dom nr. 972/2026 fra retten i Cosenza (22. september 2026), med citerede passager",
  "Legge 20 maggio 1970, n. 300 (Statuto dei Lavoratori), art. 4":
    "Lov nr. 300 af 20. maj 1970 (den italienske lov om arbejdstageres rettigheder), art. 4",
  "Regolamento UE 2016/679 (GDPR), artt. 5, 13, 25, 35, 88":
    "Forordning (EU) 2016/679 (GDPR), art. 5, 13, 25, 35 og 88",
  "Betriebsverfassungsgesetz, § 87 (cogestione del consiglio aziendale)":
    "Betriebsverfassungsgesetz (den tyske lov om virksomhedsforfatning), § 87 (virksomhedsrådets medbestemmelse)",
  "Bundesdatenschutzgesetz, § 26 (dati dei lavoratori)":
    "Bundesdatenschutzgesetz (den tyske forbundslov om databeskyttelse), § 26 (medarbejderoplysninger)",
  "Garante del Baden-Württemberg, FAQ sulle basi giuridiche dei dati dei dipendenti (sentenza CGUE C-34/21)":
    "Baden-Württembergs tilsynsmyndighed for databeskyttelse, FAQ om retsgrundlag for medarbejderoplysninger (EU-Domstolens dom C-34/21)",
  "Regolamento UE 2016/679 (GDPR)":
    "Forordning (EU) 2016/679 (GDPR)",
  "Garante della Renania-Palatinato, guida sulla localizzazione GPS dei dipendenti":
    "Rheinland-Pfalz' tilsynsmyndighed for databeskyttelse, vejledning om GPS-lokalisering af medarbejdere",
  "Lista DSK dei trattamenti che richiedono una valutazione d'impatto (settore privato)":
    "DSK's liste over behandlinger, der kræver en konsekvensanalyse (den private sektor)",
  "BfDI, elenco delle autorità garanti per la protezione dei dati dei Land":
    "BfDI, liste over delstaternes tilsynsmyndigheder for databeskyttelse",
  "Garante di Amburgo, comunicato del 1 ottobre 2020 (sanzione H&M)":
    "Hamborgs tilsynsmyndighed for databeskyttelse, pressemeddelelse af 1. oktober 2020 (bøde til H&M)",
  "BayLDA, autorità garante della Baviera":
    "BayLDA, Bayerns tilsynsmyndighed for databeskyttelse",
  "BlnBDI, autorità garante di Berlino":
    "BlnBDI, Berlins tilsynsmyndighed for databeskyttelse",
  "Code du travail, art. L2312-38 (consultazione del CSE sui mezzi di controllo)":
    "Code du travail (den franske arbejdskodeks), art. L2312-38 (høring af CSE om kontrolmidler)",
  "Code du travail, art. L1222-4 (nessuna raccolta da dispositivo non portato a conoscenza)":
    "Code du travail (den franske arbejdskodeks), art. L1222-4 (ingen indsamling via en enhed, som medarbejderen ikke er blevet informeret om)",
  "CNIL, guida sulla geolocalizzazione dei veicoli dei dipendenti":
    "CNIL, vejledning om geolokalisering af medarbejdernes køretøjer",
  "CNIL, lista dei trattamenti che richiedono una valutazione d'impatto (AIPD)":
    "CNIL, liste over behandlinger, der kræver en konsekvensanalyse (AIPD)",
  "CNIL, abolizione delle dichiarazioni preventive dal 25 maggio 2018":
    "CNIL, afskaffelse af forhåndsanmeldelser siden 25. maj 2018",
  "CNIL, dieci nuove sanzioni (procedura semplificata, 7 novembre 2023)":
    "CNIL, ti nye sanktioner (forenklet procedure, 7. november 2023)",
  "CNIL, deliberazione SAN-2022-015 del 7 luglio 2022 (UBEEQO International, 175.000 €), su Légifrance":
    "CNIL, afgørelse SAN-2022-015 af 7. juli 2022 (UBEEQO International, 175.000 €), på Légifrance",
  "Ley Organica 3/2018 (LOPDGDD), art. 90 (geolocalizzazione sul lavoro)":
    "Ley Orgánica 3/2018 (LOPDGDD), art. 90 (geolokalisering i arbejdsforhold)",
  "Estatuto de los Trabajadores, artt. 20.3 e 64":
    "Estatuto de los Trabajadores, art. 20.3 og 64",
  "AEPD, FAQ sul GPS nelle auto aziendali usate dai lavoratori":
    "AEPD, FAQ om GPS i firmabiler, som medarbejdere bruger",
  "AEPD, lista dei trattamenti che richiedono una valutazione d'impatto (art. 35.4 GDPR)":
    "AEPD, liste over behandlinger, der kræver en konsekvensanalyse (art. 35, stk. 4, i GDPR)",
  "AEPD, guida sulla protezione dei dati nei rapporti di lavoro":
    "AEPD, vejledning om databeskyttelse i arbejdsforhold",
  "AEPD, sanzione PS/00454/2024 (Ares Capital, 200.000 €)":
    "AEPD, sanktion PS/00454/2024 (Ares Capital, 200.000 €)",
  "Wet op de ondernemingsraden (WOR), art. 27 (diritto di consenso del consiglio aziendale)":
    "Wet op de ondernemingsraden (WOR, den nederlandske lov om virksomhedsråd), art. 27 (virksomhedsrådets samtykkeret)",
  "Autoriteit Persoonsgegevens, lista dei trattamenti che richiedono una DPIA":
    "Autoriteit Persoonsgegevens, liste over behandlinger, der kræver en konsekvensanalyse (DPIA)",
  "Autoriteit Persoonsgegevens, condizioni per il controllo dei dipendenti":
    "Autoriteit Persoonsgegevens, betingelser for kontrol af medarbejdere",
  "Autoriteit Persoonsgegevens, controllo dei dipendenti a distanza (GPS sulle auto aziendali)":
    "Autoriteit Persoonsgegevens, fjernkontrol af medarbejdere (GPS i firmabiler)",
  "Autoriteit Persoonsgegevens, sanzione per il trattamento delle impronte dei dipendenti":
    "Autoriteit Persoonsgegevens, bøde for behandling af medarbejdernes fingeraftryk",
  "Codigo do Trabalho, art. 20 (mezzi di sorveglianza a distanza)":
    "Código do Trabalho (den portugisiske arbejdskodeks), art. 20 (fjernovervågning)",
  "CNPD, Deliberacao 7680/2014 (geolocalizzazione nel contesto lavorativo)":
    "CNPD, Deliberação 7680/2014 (geolokalisering i arbejdsforhold)",
  "Lei 58/2019, art. 28 (relazioni di lavoro)":
    "Lei 58/2019, art. 28 (arbejdsforhold)",
  "CNPD, videovigilanza: nel contesto lavorativo restano le condizioni del Codice del lavoro, senza l'autorizzazione della CNPD":
    "CNPD, videoovervågning: i arbejdsforhold gælder fortsat arbejdskodeksens betingelser, uden CNPD's tilladelse",
  "CNPD, valutazione d'impatto sulla protezione dei dati":
    "CNPD, konsekvensanalyse vedrørende databeskyttelse",
  "CNPD, Regulamento n.º 798/2018 (lista dei trattamenti soggetti a valutazione d'impatto)":
    "CNPD, Regulamento n.º 798/2018 (liste over behandlinger, der kræver en konsekvensanalyse)",
  "Tribunal da Relação de Lisboa, acórdão del 17 giugno 2026, proc. 2266/25.4T8TVD.L1-4 (GPS del veicolo di una lavoratrice)":
    "Tribunal da Relação de Lisboa, dom af 17. juni 2026, sag 2266/25.4T8TVD.L1-4 (GPS i en medarbejders køretøj)",
  "CNPD, presentare una segnalazione":
    "CNPD, indsende en indberetning",
  "Datatilsynet, guida sul controllo dei dipendenti (Kontrol af medarbejdere)":
    "Datatilsynet, vejledningen »Kontrol af medarbejdere«",
  "Datatilsynet, lista dei trattamenti che richiedono una valutazione d'impatto":
    "Datatilsynet, liste over behandlinger, der kræver en konsekvensanalyse",
  "Datatilsynet, controlli 2020 sull'obbligo di informazione nelle misure di controllo dei dipendenti (GPS, videosorveglianza e altre)":
    "Datatilsynet, tilsyn i 2020 med oplysningspligten ved kontrolforanstaltninger over for medarbejdere (GPS, videoovervågning m.fl.)",
  "Datatilsynet, aree prioritarie dei controlli nel 2026 (sorveglianza dei dipendenti)":
    "Datatilsynet, prioriterede tilsynsområder i 2026 (overvågning af medarbejdere)",
  "Datatilsynet (autorità garante danese)":
    "Datatilsynet (den danske tilsynsmyndighed for databeskyttelse)",
  "Lag 1976:580 om medbestammande i arbetslivet (MBL), § 11":
    "Lag 1976:580 om medbestämmande i arbetslivet (MBL, den svenske lov om medbestemmelse i arbejdslivet), § 11",
  "IMY, controllo e sorveglianza dei dipendenti":
    "IMY, kontrol og overvågning af medarbejdere",
  "IMY, come usare i servizi di localizzazione (GPS) sui dipendenti":
    "IMY, sådan bruger man lokaliseringstjenester (GPS) over for medarbejdere",
  "IMY, quando svolgere una valutazione d'impatto":
    "IMY, hvornår man skal foretage en konsekvensanalyse",
  "IMY, presentare un reclamo":
    "IMY, indgive en klage",
  "IMY, sanzione al Comune di Skelleftea (riconoscimento facciale per le presenze)":
    "IMY, sanktion over for Skellefteå kommune (ansigtsgenkendelse til tilstedeværelsesregistrering)",
  "Arbeidsmiljoloven, kap. 9 (misure di controllo, §§ 9-1 e 9-2)":
    "Arbeidsmiljøloven (den norske arbejdsmiljølov), kap. 9 (kontrolforanstaltninger, §§ 9-1 og 9-2)",
  "Datatilsynet (Norvegia), GPS e tracciamento dei veicoli aziendali":
    "Datatilsynet (Norge), GPS og sporing af firmabiler",
  "Datatilsynet (Norvegia), quando svolgere una valutazione d'impatto":
    "Datatilsynet (Norge), hvornår man skal foretage en konsekvensanalyse",
  "Datatilsynet (autorità garante norvegese)":
    "Datatilsynet (den norske tilsynsmyndighed for databeskyttelse)",
  "Personvernnemnda, PVN-2017-07 (uso del GPS per controllare le ore del dipendente)":
    "Personvernnemnda, PVN-2017-07 (brug af GPS til at kontrollere en medarbejders timer)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96 (misure di controllo che toccano la dignita: consenso del consiglio aziendale)":
    "Arbeitsverfassungsgesetz (ArbVG, den østrigske arbejdsforfatningslov), § 96 (kontrolforanstaltninger, der berører menneskeværdigheden: samtykke fra virksomhedsrådet)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96a (sistemi che trattano dati personali dei lavoratori)":
    "Arbeitsverfassungsgesetz (ArbVG), § 96a (systemer, der behandler medarbejdernes personoplysninger)",
  "DSFA-V, regolamento sui trattamenti che richiedono una valutazione d'impatto":
    "DSFA-V, forordning om behandlinger, der kræver en konsekvensanalyse",
  "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (fine del registro DVR)":
    "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (DVR-registerets ophør)",
  "Datenschutzbehörde (DSB), decisione 2022-0.021.739 (stop al GPS sui veicoli aziendali)":
    "Datenschutzbehörde (DSB), afgørelse 2022-0.021.739 (forbud mod GPS i firmabiler)",
  "Datenschutzbehörde (DSB), procedura di reclamo":
    "Datenschutzbehörde (DSB), klageprocedure",
  "CCT n. 81 del 26 aprile 2002 (controllo delle comunicazioni elettroniche in rete)":
    "CCT nr. 81 af 26. april 2002 (kontrol af elektronisk kommunikation i netværk)",
  "APD/GBA, geolocalizzazione dei lavoratori":
    "APD/GBA, geolokalisering af medarbejdere",
  "APD/GBA, valutazione d'impatto sulla protezione dei dati":
    "APD/GBA, konsekvensanalyse vedrørende databeskyttelse",
  "APD/GBA, presentare un reclamo":
    "APD/GBA, indgive en klage",
  "Chambre Contentieuse APD/GBA, decisione 114/2024 (impronte per le presenze, 45.000 euro), testo integrale":
    "Chambre Contentieuse APD/GBA, afgørelse 114/2024 (fingeraftryk til tilstedeværelsesregistrering, 45.000 euro), fuld tekst",
  "ICO, guida sul monitoraggio dei lavoratori (UK GDPR)":
    "ICO, vejledning om overvågning af medarbejdere (UK GDPR)",
  "ICO, sorveglianza nei veicoli":
    "ICO, overvågning i køretøjer",
  "ICO, quando serve una DPIA":
    "ICO, hvornår der kræves en DPIA",
  "ICO, provvedimento sul monitoraggio GPS (Home Office, 2024)":
    "ICO, afgørelse om GPS-overvågning (Home Office, 2024)",
  "ICO, presentare una segnalazione":
    "ICO, indsende en indberetning",
  "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission dal 30/09/2026)":
    "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission fra 30.09.2026)",
  "Regolamento UE 2016/679 (GDPR) come UK GDPR":
    "Forordning (EU) 2016/679 (GDPR) som UK GDPR",
  "DPC, guida sul tracciamento dei veicoli aziendali (maggio 2020)":
    "DPC, vejledning om sporing af firmabiler (maj 2020)",
  "DPC, pagina sul tracciamento dei veicoli dei dipendenti (aggiornata a maggio 2026)":
    "DPC, side om sporing af medarbejdernes køretøjer (opdateret i maj 2026)",
  "DPC, lista dei trattamenti che richiedono una DPIA":
    "DPC, liste over behandlinger, der kræver en DPIA",
  "DPC, consultazione preventiva":
    "DPC, forudgående høring",
  "DPC, presentare un reclamo":
    "DPC, indgive en klage",
  "DPC, decisione Limerick City and County Council (dicembre 2021)":
    "DPC, afgørelse Limerick City and County Council (december 2021)",
  "DPC, sentenza Doolin v. DPC (High Court, febbraio 2020)":
    "DPC, dom Doolin v. DPC (High Court, februar 2020)",
  "IFPDT/FDPIC, mezzi tecnici di sorveglianza sul luogo di lavoro":
    "FDPIC, tekniske overvågningsmidler på arbejdspladsen",
  "IFPDT/FDPIC, trattamento dei dati da parte del datore di lavoro (CO art. 328b)":
    "FDPIC, arbejdsgiverens behandling af oplysninger (OR/CO art. 328b)",
  "IFPDT/FDPIC, valutazione d'impatto sulla protezione dei dati (nLPD art. 22)":
    "FDPIC, konsekvensanalyse vedrørende databeskyttelse (nLPD art. 22)",
  "Legge federale sulla protezione dei dati (nLPD), art. 22, 23 e 60-65 (Fedlex)":
    "Forbundslov om databeskyttelse (nLPD), art. 22, 23 og 60-65 (Fedlex)",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo":
    "Forordning (EU) 2016/679 (GDPR): sammenligningsgrundlag",
  "Legge 190/2018, art. 5 (monitoraggio dei dipendenti)":
    "Lov 190/2018, art. 5 (overvågning af medarbejdere)",
  "Codul Muncii, art. 40 (obblighi del datore), Portal Legislativ":
    "Codul Muncii (den rumænske arbejdskodeks), art. 40 (arbejdsgiverens forpligtelser), Portal Legislativ",
  "ANSPDCP, comunicato del 23 marzo 2023 (sanzione Tehnoplus, GPS)":
    "ANSPDCP, pressemeddelelse af 23. marts 2023 (bøde til Tehnoplus, GPS)",
  "ANSPDCP, Decizia 174/2018 (lista trattamenti che richiedono DPIA), Monitorul Oficial 919/31.10.2018, art. 1 lett. d e g":
    "ANSPDCP, Decizia 174/2018 (liste over behandlinger, der kræver en DPIA), Monitorul Oficial 919/31.10.2018, art. 1, litra d og g",
  "ANSPDCP, presentazione dei reclami":
    "ANSPDCP, indgivelse af klager",
  "Kodeks pracy, art. 22(2) (monitoraggio), testo consolidato Dz.U. 2026 poz. 1245 (in vigore dal 24 settembre 2026)":
    "Kodeks pracy (den polske arbejdskodeks), art. 22(2) (overvågning), konsolideret tekst Dz.U. 2026 poz. 1245 (i kraft fra 24. september 2026)",
  "Legge del 4 dicembre 2025 di modifica del Codice del lavoro, Dz.U. 2026 poz. 25 (art. 22(2) par. 8: \"su carta o in forma elettronica\", in vigore dal 27 gennaio 2026)":
    "Lov af 4. december 2025 om ændring af arbejdskodeksen, Dz.U. 2026 poz. 25 (art. 22(2) stk. 8: “på papir eller i elektronisk form”, i kraft fra 27. januar 2026)",
  "Kodeks pracy, art. 22(3) par. 3-4 (altre forme di monitoraggio, tra cui il GPS), testo consolidato Dz.U. 2026 poz. 1245":
    "Kodeks pracy, art. 22(3) stk. 3-4 (andre former for overvågning, herunder GPS), konsolideret tekst Dz.U. 2026 poz. 1245",
  "UODO, guida alla protezione dei dati sul luogo di lavoro":
    "UODO, vejledning om databeskyttelse på arbejdspladsen",
  "UODO, lista dei trattamenti che richiedono una DPIA (M.P. 2019 poz. 666)":
    "UODO, liste over behandlinger, der kræver en DPIA (M.P. 2019 poz. 666)",
  "UODO, presentare un reclamo":
    "UODO, indgive en klage",
  "UODO, sanzione Centrum Medyczne Ujastek (monitoraggio non comunicato ai dipendenti)":
    "UODO, sanktion over for Centrum Medyczne Ujastek (overvågning, som medarbejderne ikke var informeret om)",
  "Zakonik prace (Codice del lavoro), art. 316":
    "Zákoník práce (den tjekkiske arbejdskodeks), art. 316",
  "Stanovisko 2/2017 sul trattamento dei dati sul posto di lavoro, pubblicato dall UOOU":
    "Udtalelse 2/2017 om behandling af oplysninger på arbejdspladsen, offentliggjort af UOOU",
  "UOOU, lista dei trattamenti che richiedono una DPIA":
    "UOOU, liste over behandlinger, der kræver en DPIA",
  "UOOU, presentare una segnalazione":
    "UOOU, indsende en indberetning",
  "Tribunale municipale di Praga 6 A 42/2013 (Ceska posta, GPS sui portalettere), sentenza":
    "Byretten i Prag 6 A 42/2013 (Česká pošta, GPS på postbude), dom",
  "epravo.cz, GPS monitoring zamestnancu podruhe (riporta una multa di 80.000 CZK e 7.770 portalettere, non confermati da fonti ufficiali)":
    "epravo.cz, GPS monitoring zaměstnanců podruhé (nævner en bøde på 80.000 CZK og 7.770 postbude, ikke bekræftet af officielle kilder)",
  "UOOU, relazione annuale 2014, controlli su Skoda Auto e Plzensky Prazdroj (GPS nei veicoli aziendali)":
    "UOOU, årsberetning 2014, kontrol af Škoda Auto og Plzeňský Prazdroj (GPS i firmabiler)",
  "HDPA (Garante greco), FAQ sui rapporti di lavoro (geolocalizzazione)":
    "HDPA (den græske tilsynsmyndighed for databeskyttelse), FAQ om arbejdsforhold (geolokalisering)",
  "Legge 4624/2019, art. 27 (dati dei dipendenti), traduzione ufficiale HDPA":
    "Lov 4624/2019, art. 27 (medarbejderoplysninger), officiel oversættelse fra HDPA",
  "HDPA, Decisione 65/2018 (lista dei trattamenti che richiedono DPIA)":
    "HDPA, afgørelse 65/2018 (liste over behandlinger, der kræver en DPIA)",
  "HDPA, sanzione a un datore per geolocalizzazione (16 febbraio 2024)":
    "HDPA, bøde til en arbejdsgiver for geolokalisering (16. februar 2024)",
  "HDPA (Garante greco), pagina ufficiale":
    "HDPA (den græske tilsynsmyndighed for databeskyttelse), officiel side",
  "Legge sulla protezione della privacy nella vita lavorativa (759/2004) - testo consolidato in finlandese (Finlex)":
    "Lov om beskyttelse af privatlivets fred i arbejdslivet (759/2004): konsolideret tekst på finsk (Finlex)",
  "Garante finlandese (Tietosuojavaltuutettu), FAQ sulla vita lavorativa":
    "Finlands databeskyttelsesombudsmand (Tietosuojavaltuutettu), FAQ om arbejdslivet",
  "Garante finlandese, lista dei trattamenti che richiedono una DPIA":
    "Finlands databeskyttelsesombudsmand, liste over behandlinger, der kræver en DPIA",
  "Garante finlandese, segnalare una violazione":
    "Finlands databeskyttelsesombudsmand, anmelde en overtrædelse",
  "Garante finlandese, sanzione per dati di localizzazione usati per la rilevazione orario (2021)":
    "Finlands databeskyttelsesombudsmand, bøde for lokaliseringsoplysninger brugt til registrering af arbejdstid (2021)",
  "Zakon o zaštiti na radu (legge sicurezza sul lavoro), art. 43 (dispositivi di sorveglianza)":
    "Zakon o zaštiti na radu (den kroatiske lov om sikkerhed på arbejdspladsen), art. 43 (overvågningsanordninger)",
  "Zakon o radu (legge sul lavoro), art. 29 (dati dei lavoratori) e art. 150 (consultazione del consiglio dei lavoratori)":
    "Zakon o radu (den kroatiske arbejdslov), art. 29 (medarbejderoplysninger) og art. 150 (høring af arbejdsrådet)",
  "AZOP (Garante croato), trattamento dei dati dei dipendenti tramite GPS":
    "AZOP (den kroatiske tilsynsmyndighed for databeskyttelse), behandling af medarbejderoplysninger via GPS",
  "AZOP, lista dei trattamenti che richiedono una DPIA":
    "AZOP, liste over behandlinger, der kræver en DPIA",
  "AZOP, richiesta di accertamento di violazione (reclamo)":
    "AZOP, anmodning om fastslåelse af en overtrædelse (klage)",
  "AZOP (Garante croato), pagina ufficiale":
    "AZOP (den kroatiske tilsynsmyndighed for databeskyttelse), officiel side",
  "IP-RS (Garante sloveno), linee guida sull'uso dei dispositivi GPS":
    "IP-RS (den slovenske tilsynsmyndighed for databeskyttelse), retningslinjer for brug af GPS-enheder",
  "IP-RS, parere 'Sledenje zaposlenim' (tracciamento dei dipendenti)":
    "IP-RS, udtalelse “Sledenje zaposlenim” (sporing af medarbejdere)",
  "IP-RS, comunicato del 15.04.2026: multa di 6.000 euro a un'azienda pubblica per GPS sui dipendenti":
    "IP-RS, pressemeddelelse af 15.04.2026: bøde på 6.000 euro til en offentlig virksomhed for GPS på medarbejdere",
  "Zakon o delovnih razmerjih (ZDR-1), art. 48 (dati dei lavoratori)":
    "Zakon o delovnih razmerjih (ZDR-1, den slovenske lov om arbejdsforhold), art. 48 (medarbejderoplysninger)",
  "Zakon o sodelovanju delavcev pri upravljanju (ZSDU), art. 89-90 (informazione del consiglio dei lavoratori)":
    "Zakon o sodelovanju delavcev pri upravljanju (ZSDU, den slovenske lov om medarbejdernes deltagelse i ledelsen), art. 89-90 (information af arbejdsrådet)",
  "IP-RS, elenco dei trattamenti per cui e' obbligatoria la valutazione d'impatto (art. 35.4 GDPR)":
    "IP-RS, liste over behandlinger, hvor en konsekvensanalyse er obligatorisk (art. 35, stk. 4, i GDPR)",
  "IP-RS, presentare una segnalazione":
    "IP-RS, indsende en indberetning",
  "Zakonnik prace (Codice del lavoro), art. 13 par. 4 (monitoraggio dei dipendenti)":
    "Zákonník práce (den slovakiske arbejdskodeks), art. 13, stk. 4 (overvågning af medarbejdere)",
  "UOOU SR (Garante slovacco), procedura di tutela":
    "UOOU SR (den slovakiske tilsynsmyndighed for databeskyttelse), beskyttelsesprocedure",
  "Parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli, versione slovacca pubblicata dall UOOU SR":
    "Udtalelse 2/2017 om behandling af oplysninger på arbejdspladsen (WP249), pkt. 5.7 køretøjer, slovakisk version offentliggjort af UOOU SR",
  "Lista slovacca dei trattamenti soggetti a DPIA (punti 3 e 9), pubblicata dall EDPB":
    "Slovakisk liste over behandlinger, der er omfattet af en DPIA (punkt 3 og 9), offentliggjort af EDPB",
  "UOOU SR, guida sulla liceita del trattamento (versione aggiornata 22/01/2019), esempio del par. 13 c. 4 del Codice del lavoro":
    "UOOU SR, vejledning om behandlingens lovlighed (opdateret version af 22.01.2019), eksempel i § 13, stk. 4 i arbejdskodeksen",
  "UOOU SR, presentare una proposta di avvio del procedimento (reclamo)":
    "UOOU SR, indsende et forslag om indledning af sagen (klage)",
  "UOOU SR, relazione sullo stato della protezione dei dati 2025 (par. 9.2.1, trattamento di dati di geolocalizzazione)":
    "UOOU SR, rapport om databeskyttelsens tilstand 2025 (pkt. 9.2.1, behandling af geolokaliseringsoplysninger)",
  "Codice del lavoro (Mt.), art. 9 (diritti della persona) e art. 11/A (controllo dei lavoratori)":
    "Den ungarske arbejdskodeks (Mt.), art. 9 (personlighedsrettigheder) og art. 11/A (kontrol af medarbejdere)",
  "NAIH, guida sui trattamenti sul luogo di lavoro (novembre 2016, precedente al GDPR), par. 5 sul GPS":
    "NAIH, vejledning om behandlinger på arbejdspladsen (november 2016, før GDPR), pkt. 5 om GPS",
  "NAIH, lista dei trattamenti che richiedono una valutazione d'impatto":
    "NAIH, liste over behandlinger, der kræver en konsekvensanalyse",
  "NAIH, sanzione Auchan (monitoraggio dei dipendenti)":
    "NAIH, bøde til Auchan (overvågning af medarbejdere)",
  "NAIH (Garante ungherese), pagina ufficiale":
    "NAIH (den ungarske tilsynsmyndighed for databeskyttelse), officiel side",
  "Legge sulla protezione dei dati (ZZLD), testo consolidato sul sito del CPDP (art. 25д e 25и; ultima modifica ДВ 70/2024)":
    "Lov om beskyttelse af personoplysninger (ZZLD), konsolideret tekst på CPDP's websted (art. 25д og 25и; senest ændret ДВ 70/2024)",
  "CPDP (Garante bulgaro), guida sulla privacy sul luogo di lavoro (2014, anteriore al GDPR), par. 3.5.2 sistemi GPS":
    "CPDP (den bulgarske tilsynsmyndighed for databeskyttelse), vejledning om privatlivets fred på arbejdspladsen (2014, før GDPR), pkt. 3.5.2 GPS-systemer",
  "CPDP, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "CPDP, liste over behandlinger, der kræver en DPIA (art. 35, stk. 4)",
  "CPDP, parere su LUKOIL (riuso della videosorveglianza per valutare i dipendenti)":
    "CPDP, udtalelse om LUKOIL (genbrug af videoovervågning til at vurdere medarbejdere)",
  "CPDP (Garante bulgaro), pagina ufficiale":
    "CPDP (den bulgarske tilsynsmyndighed for databeskyttelse), officiel side",
  "AKI (Garante estone), FAQ sui rapporti di lavoro (GPS)":
    "AKI (den estiske tilsynsmyndighed for databeskyttelse), FAQ om arbejdsforhold (GPS)",
  "AKI, guida per il personale sui dati nel rapporto di lavoro (2011, ante-GDPR), punto 2.9 GPS":
    "AKI, vejledning til personalet om oplysninger i ansættelsesforholdet (2011, før GDPR), pkt. 2.9 GPS",
  "Legge sul fiduciario dei lavoratori (Töötajate usaldusisiku seadus), §§ 17 e 20 - Riigi Teataja":
    "Lov om tillidsrepræsentanter (Töötajate usaldusisiku seadus), §§ 17 og 20, Riigi Teataja",
  "Legge estone sulla protezione dei dati personali (Isikuandmete kaitse seadus), §§ 62-73 - Riigi Teataja":
    "Estisk lov om beskyttelse af personoplysninger (Isikuandmete kaitse seadus), §§ 62-73, Riigi Teataja",
  "AKI, materiale sul trattamento dei dati nel rapporto di lavoro":
    "AKI, materiale om behandling af oplysninger i ansættelsesforholdet",
  "AKI, valutazione d'impatto (capitolo 5)":
    "AKI, konsekvensanalyse (kapitel 5)",
  "AKI, presentare un reclamo":
    "AKI, indgive en klage",
  "AKI (Garante estone), pagina ufficiale":
    "AKI (den estiske tilsynsmyndighed for databeskyttelse), officiel side",
  "DVI (Garante lettone), posso tracciare i viaggi del mio dipendente? (GPS)":
    "DVI (den lettiske tilsynsmyndighed for databeskyttelse), må jeg spore min medarbejders rejser? (GPS)",
  "Legge lettone sul trattamento dei dati delle persone fisiche (Fizisko personu datu apstrādes likums) - Likumi.lv":
    "Lettisk lov om behandling af fysiske personers oplysninger (Fizisko personu datu apstrādes likums), Likumi.lv",
  "DVI, videosorveglianza dei dipendenti in presenza (16/09/2022)":
    "DVI, videoovervågning af medarbejdere på arbejdspladsen (16.09.2022)",
  "DVI, videosorveglianza dei dipendenti nel lavoro da remoto":
    "DVI, videoovervågning af medarbejdere ved fjernarbejde",
  "DVI, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "DVI, liste over behandlinger, der kræver en DPIA (art. 35, stk. 4)",
  "DVI, presentare un reclamo":
    "DVI, indgive en klage",
  "Gruppo art. 29, parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli":
    "Artikel 29-gruppen, udtalelse 2/2017 om behandling af oplysninger på arbejdspladsen (WP249), pkt. 5.7 køretøjer",
  "VDAI, lista dei trattamenti che richiedono una DPIA (voce 10: monitoraggio dei dipendenti)":
    "VDAI, liste over behandlinger, der kræver en DPIA (punkt 10: overvågning af medarbejdere)",
  "VDAI, decisione sul trattamento della corrispondenza personale di un dipendente (2022)":
    "VDAI, afgørelse om behandling af en medarbejders personlige korrespondance (2022)",
  "VDAI, elenco delle decisioni (multe, ordini e altro) fino al 2025":
    "VDAI, liste over afgørelser (bøder, påbud m.m.) til og med 2025",
  "VDAI (Garante lituano), servizi e reclami":
    "VDAI (den litauiske tilsynsmyndighed for databeskyttelse), tjenester og klager",
  "Loi du 1er août 2018, art. 71 (nuovo art. L.261-1 del Code du travail) e art. 72 (abrogazione della legge del 2 agosto 2002), Legilux":
    "Loi du 1er août 2018, art. 71 (ny art. L.261-1 i Code du travail) og art. 72 (ophævelse af loven af 2. august 2002), Legilux",
  "Code du travail, art. L.261-1 (sorveglianza dei lavoratori) - riproduzione CNPD":
    "Code du travail (den luxembourgske arbejdskodeks), art. L.261-1 (overvågning af medarbejdere), gengivet af CNPD",
  "CNPD, geolocalizzazione dei veicoli: necessità e proporzionalità":
    "CNPD, geolokalisering af køretøjer: nødvendighed og proportionalitet",
  "CNPD, geolocalizzazione: valutazione d'impatto (AIPD)":
    "CNPD, geolokalisering: konsekvensanalyse (AIPD)",
  "CNPD, decisione 11FR/2021 (sanzione geolocalizzazione veicoli di servizio)":
    "CNPD, afgørelse 11FR/2021 (sanktion for geolokalisering af tjenestekøretøjer)",
  "CNPD, presentare un reclamo (Faire valoir vos droits)":
    "CNPD, indgive en klage (Faire valoir vos droits)",
  "Regole n. 50/2023 sulla sorveglianza elettronica (Gazzetta ufficiale)":
    "Regler nr. 50/2023 om elektronisk overvågning (lovtidende)",
  "Regole 1329/2025 di Persónuvernd (modifica delle Regole 50/2023, art. 3: 90 giorni)":
    "Persónuvernds regler 1329/2025 (ændring af reglerne 50/2023, art. 3: 90 dage)",
  "Persónuvernd (Garante islandese), FAQ sul GPS e i dispositivi di localizzazione":
    "Persónuvernd (den islandske tilsynsmyndighed for databeskyttelse), FAQ om GPS og lokaliseringsenheder",
  "Persónuvernd, lista dei trattamenti che richiedono una DPIA (Auglýsing nr. 828/2019)":
    "Persónuvernd, liste over behandlinger, der kræver en DPIA (Auglýsing nr. 828/2019)",
  "Persónuvernd, presentare un reclamo":
    "Persónuvernd, indgive en klage",
  "Persónuvernd, decisione Islandspostur (uso illecito del GPS su un dipendente)":
    "Persónuvernd, afgørelse Islandspostur (ulovlig brug af GPS over for en medarbejder)",
  "IDPC (Garante maltese), guida al settore del lavoro":
    "IDPC (den maltesiske tilsynsmyndighed for databeskyttelse), vejledning for arbejdsområdet",
  "IDPC, valutazione d'impatto sulla protezione dei dati":
    "IDPC, konsekvensanalyse vedrørende databeskyttelse",
  "IDPC, presentare un reclamo":
    "IDPC, indgive en klage",
  "IDPC, decisione CDP/COMP/579/2025 del 20 aprile 2026 (videosorveglianza della mensa aziendale)":
    "IDPC, afgørelse CDP/COMP/579/2025 af 20. april 2026 (videoovervågning af firmakantinen)",
  "Legge 125(I)/2018 sulla protezione dei dati (art. 36: abrogazione delle leggi 2001-2012)":
    "Lov 125(I)/2018 om databeskyttelse (art. 36: ophævelse af lovene 2001-2012)",
  "Commissario cipriota, registro delle attività: abolito l'obbligo di notifica al Commissario (art. 30 GDPR)":
    "Cyperns kommissær, register over behandlingsaktiviteter: pligten til at anmelde til kommissæren er ophævet (art. 30 i GDPR)",
  "Commissario cipriota, valutazione d'impatto (elenco indicativo: monitoraggio sistematico dei dipendenti, GPS)":
    "Cyperns kommissær, konsekvensanalyse (vejledende liste: systematisk overvågning af medarbejdere, GPS)",
  "GDPR, art. 13 (informazione), testo ufficiale EUR-Lex":
    "GDPR, art. 13 (information), officiel tekst fra EUR-Lex",
  "GDPR, art. 6(1)(f) e considerando 43 (base giuridica e squilibrio fra le parti), testo ufficiale EUR-Lex":
    "GDPR, art. 6, stk. 1, litra f, og præambelbetragtning 43 (retsgrundlag og skævhed mellem parterne), officiel tekst fra EUR-Lex",
  "Garante cipriota, pagina ufficiale":
    "Cyperns kommissær, officiel side",
  "Commissario cipriota, decisione del 25.10.2019 sul Gruppo Louis (strumento Bradford Factor)":
    "Cyperns kommissær, afgørelse af 25.10.2019 om Louis-koncernen (Bradford Factor-værktøjet)",
  "Legge 124/2024 sulla protezione dei dati personali (in vigore dal 1 febbraio 2025)":
    "Lov 124/2024 om beskyttelse af personoplysninger (i kraft fra 1. februar 2025)",
  "IDP, linea guida n. 03 del 30.04.2025 sulla videosorveglianza":
    "IDP, retningslinje nr. 03 af 30.04.2025 om videoovervågning",
  "IDP (Garante albanese), pagina ufficiale":
    "IDP (den albanske tilsynsmyndighed for databeskyttelse), officiel side",
  "Legge sulla protezione dei dati (LPDP, 87/2018) - testo ufficiale":
    "Lov om databeskyttelse (LPDP, 87/2018), officiel tekst",
  "Poverenik, decisione sulla lista dei trattamenti che richiedono una DPIA (Gazzetta 45/2019)":
    "Poverenik, afgørelse om listen over behandlinger, der kræver en DPIA (Den officielle tidende 45/2019)",
  "Odluka sulla lista dei trattamenti che richiedono DPIA (Sl. glasnik RS 45/2019 e 112/2020, testo consolidato)":
    "Odluka om listen over behandlinger, der kræver en DPIA (Sl. glasnik RS 45/2019 og 112/2020, konsolideret tekst)",
  "Poverenik (Garante serbo), competenze e contatti":
    "Poverenik (den serbiske tilsynsmyndighed for databeskyttelse), kompetencer og kontakt",
  "Danas, ispezione straordinaria del Poverenik al JKP Mediana di Nis (7 aprile 2026)":
    "Danas, ekstraordinært tilsyn fra Poverenik hos JKP Mediana i Niš (7. april 2026)",
  "N1, GPS su 80 cassonetti del JKP Mediana di Nis (protesta dei lavoratori, gennaio 2026)":
    "N1, GPS på 80 affaldscontainere hos JKP Mediana i Niš (medarbejdernes protest, januar 2026)",
  "Legge sulla protezione dei dati personali (Gazzetta BiH 12/25), testo pubblicato dall AZLP":
    "Lov om beskyttelse af personoplysninger (Den officielle tidende for BiH 12/25), tekst offentliggjort af AZLP",
  "AZLP, decisione del 10.11.2025 sulla lista dei trattamenti che richiedono una DPIA (punto 8: dati dei dipendenti, controllo di lavoro e spostamenti)":
    "AZLP, afgørelse af 10.11.2025 om listen over behandlinger, der kræver en DPIA (punkt 8: medarbejderoplysninger, kontrol af arbejde og færden)",
  "AZLP (Garante bosniaco), pagina ufficiale":
    "AZLP (den bosniske tilsynsmyndighed for databeskyttelse), officiel side",
  "Legge sulla protezione dei dati personali, Gazzetta ufficiale BiH 12/25":
    "Lov om beskyttelse af personoplysninger, Den officielle tidende for BiH 12/25",
  "Legge sulla protezione dei dati personali, testo consolidato pubblicato dall'AZLP (artt. 26-28 e sanzioni, art. 74)":
    "Lov om beskyttelse af personoplysninger, konsolideret tekst offentliggjort af AZLP (art. 26-28 og sanktioner, art. 74)",
  "Nuova legge sulla protezione dei dati personali, Službeni list CG 133/2026 (pubblicata l'11.9.2026, in vigore dal 19.9.2026, si applica dal 19.3.2027, art. 106; artt. 88, 89 e 105)":
    "Ny lov om beskyttelse af personoplysninger, Službeni list CG 133/2026 (offentliggjort 11.9.2026, i kraft fra 19.9.2026, finder anvendelse fra 19.3.2027, art. 106; art. 88, 89 og 105)",
  "AZLP, posizione del Consiglio sull'uso del GPS nei veicoli di servizio (29.04.2025)":
    "AZLP, rådets holdning til brugen af GPS i tjenestekøretøjer (29.04.2025)",
  "AZLP (Garante montenegrino), contatti":
    "AZLP (den montenegrinske tilsynsmyndighed for databeskyttelse), kontakt",
  "AZLP, moduli (richiesta di tutela dei diritti)":
    "AZLP, formularer (anmodning om beskyttelse af rettigheder)",
  "Regolamento UE 2016/679 (GDPR), riferimento comparativo":
    "Forordning (EU) 2016/679 (GDPR), sammenligningsgrundlag",
  "Legge sulla protezione dei dati (LPDP, Gazzetta 42/20) - traduzione inglese non ufficiale pubblicata dall'AZLP":
    "Lov om databeskyttelse (LPDP, Den officielle tidende 42/20), uofficiel engelsk oversættelse offentliggjort af AZLP",
  "AZLP, lista dei trattamenti che richiedono la DPIA (11.05.2020, punti 10 e 12: posizione e spostamenti, dati dei lavoratori)":
    "AZLP, liste over behandlinger, der kræver en DPIA (11.05.2020, punkt 10 og 12: position og færden, medarbejderoplysninger)",
  "AZLP, atti subordinati (regolamenti e liste), pagina ufficiale":
    "AZLP, underordnede retsakter (forordninger og lister), officiel side",
  "AZLP (Garante macedone), pagina ufficiale e reclami":
    "AZLP (den makedonske tilsynsmyndighed for databeskyttelse), officiel side og klager",
  "Legge dell'Ucraina n. 2297-VI sulla protezione dei dati personali (2010)":
    "Ukraines lov nr. 2297-VI om beskyttelse af personoplysninger (2010)",
  "Ordine del Difensore civico 1/02-14: procedura di notifica dei trattamenti a rischio particolare":
    "Ombudsmandens ordre 1/02-14: procedure for anmeldelse af behandlinger med særlig risiko",
  "Codice ucraino delle infrazioni amministrative, art. 188-39 (violazioni in materia di dati personali)":
    "Ukraines lov om administrative overtrædelser, art. 188-39 (overtrædelser vedrørende personoplysninger)",
  "Difensore civico (Garante ucraino), protezione dei dati personali":
    "Ombudsmanden (Ukraines tilsynsmyndighed for databeskyttelse), beskyttelse af personoplysninger",
  "ICLG, protezione dei dati in Ucraina (basi giuridiche, DPIA)":
    "ICLG, databeskyttelse i Ukraine (retsgrundlag, DPIA)",
  "CNPDCP, presentare un reclamo":
    "CNPDCP, indgive en klage",
  "Legge 195/2024 sulla protezione dei dati personali, in vigore dal 23 agosto 2026 (art. 35 DPIA, art. 88 sanzioni), testo inglese pubblicato dal CNPDCP":
    "Lov 195/2024 om beskyttelse af personoplysninger, i kraft fra 23. august 2026 (art. 35 DPIA, art. 88 sanktioner), engelsk tekst offentliggjort af CNPDCP",
  "CNPDCP, ordine 27/2022: lista dei trattamenti soggetti a valutazione d'impatto (modificata dall'ordine 39/2026)":
    "CNPDCP, ordre 27/2022: liste over behandlinger, der er omfattet af en konsekvensanalyse (ændret ved ordre 39/2026)",
  "Legge della Repubblica di Bielorussia n. 99-Z del 7 maggio 2021 sulla protezione dei dati personali (NPDPC)":
    "Republikken Belarus' lov nr. 99-Z af 7. maj 2021 om beskyttelse af personoplysninger (NPDPC)",
  "Ordine OAC n. 94 del 1 giugno 2022: Registro degli operatori di dati personali (casi di iscrizione)":
    "OAC-ordre nr. 94 af 1. juni 2022: Register over operatører af personoplysninger (tilfælde, hvor registrering kræves)",
  "NPDPC (N. Shved), responsabilita amministrativa per violazione della normativa sui dati personali (art. 23.7 CAO)":
    "NPDPC (N. Shved), administrativt ansvar for overtrædelse af reglerne om personoplysninger (art. 23.7 CAO)",
  "NPDPC (Garante bielorusso), informazioni e contatti":
    "NPDPC (den belarusiske tilsynsmyndighed for databeskyttelse), information og kontakt",
  "GRATA, protezione dei dati e privacy dei dipendenti in Bielorussia":
    "GRATA, databeskyttelse og medarbejdernes privatliv i Belarus",
  "DLA Piper, applicazione e sanzioni in Bielorussia":
    "DLA Piper, håndhævelse og sanktioner i Belarus",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo lontano":
    "Forordning (EU) 2016/679 (GDPR): fjernt sammenligningsgrundlag",
  "ANPD, denúncia di inadempimento della LGPD":
    "ANPD, anmeldelse af manglende overholdelse af LGPD",
  "ANPD, canale per il titolare dei dati":
    "ANPD, kanal for den registrerede",
  "Lei n. 15.352/2026 (l’ANPD diventa agência reguladora)":
    "Lei n. 15.352/2026 (ANPD bliver en reguleringsagentur)",
  "BfDI, elenco delle autorità dei Land (per trovare la tua)":
    "BfDI, liste over delstaternes myndigheder (for at finde din egen)",
  "BayLDA (esempio, Baviera)":
    "BayLDA (eksempel, Bayern)",
  "CNIL, presentare un reclamo":
    "CNIL, indgive en klage",
  "AEPD, sede elettronica":
    "AEPD, elektronisk kontor",
  "CNPD, segnalazioni":
    "CNPD, indberetninger",
  "IMY, reclami":
    "IMY, klager",
  "Datenschutzbehörde (DSB), reclamo":
    "Datenschutzbehörde (DSB), klage",
  "APD/GBA, reclamo":
    "APD/GBA, klage",
  "ICO, segnalazioni":
    "ICO, indberetninger",
  "DPC, reclami":
    "DPC, klager",
  "ANSPDCP, reclami":
    "ANSPDCP, klager",
  "UODO, reclami":
    "UODO, klager",
  "UOOU, segnalazioni":
    "UOOU, indberetninger",
  "Garante, segnalazioni":
    "Finlands databeskyttelsesombudsmand, indberetninger",
  "AZOP, reclami":
    "AZOP, klager",
  "IP-RS, segnalazioni":
    "IP-RS, indberetninger",
  "UOOU SR, avvio del procedimento":
    "UOOU SR, indledning af sagen",
  "AKI, reclami":
    "AKI, klager",
  "DVI, reclami":
    "DVI, klager",
  "VDAI, servizi e reclami":
    "VDAI, tjenester og klager",
  "CNPD, reclami":
    "CNPD, klager",
  "Persónuvernd, reclami":
    "Persónuvernd, klager",
  "IDPC, reclami":
    "IDPC, klager",
  "Garante cipriota":
    "Cyperns kommissær",
  "AZLP, tutela dei diritti":
    "AZLP, beskyttelse af rettigheder",
  "Difensore civico, protezione dei dati":
    "Ombudsmanden, databeskyttelse",
  "CNPDCP, reclami":
    "CNPDCP, klager",
};
