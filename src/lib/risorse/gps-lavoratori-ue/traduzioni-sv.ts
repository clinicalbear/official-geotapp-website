/**
 * Svensk version av de texter som i landskorten är skrivna som vanlig
 * `string` (dvs. på italienska, mallspråket): källornas titlar och
 * kontaktpunkternas namn. Nyckel = den exakta ITALIENSKA texten, som den står
 * i kortet, värde = den svenska versionen. Används av `loc()` (./localize.ts)
 * enbart för `sv`. Officiella namn på lagar och myndigheter behålls på
 * originalspråket, med en svensk förklaring inom parentes där det hjälper
 * till att förstå vad det rör sig om.
 *
 * En ny källa eller en ändrad titel i ett kort utan post här förblir på
 * italienska på den svenska sidan: testet `traduzioni-sv.test.ts` pekar ut det.
 */
export const TESTI_SV: Readonly<Record<string, string>> = {
  "Legge lituana sulla protezione giuridica dei dati personali (ADTAĮ), art. 5 c. 4, testo consolidato":
    "Litauisk lag om rättsligt skydd av personuppgifter (ADTAĮ), art. 5.4, konsoliderad text",
  "UOOU, relazione annuale 2012, controllo su Česká pošta (monitoraggio degli spostamenti dei portalettere)":
    "UOOU, årsrapport 2012, tillsyn av Česká pošta (övervakning av brevbärarnas förflyttningar)",
  "CNPD, Deliberação 2019/494 (norme della Lei 58/2019 disapplicate)":
    "CNPD, Deliberação 2019/494 (bestämmelser i Lei 58/2019 som inte tillämpas)",
  "Garante Privacy, Provvedimento n. 7 del 16 gennaio 2025 (doc-web 10112287)":
    "Garante Privacy, beslut nr 7 av den 16 januari 2025 (doc-web 10112287)",
  "Garante Privacy, Provvedimento n. 755 del 18 dicembre 2025, n. 10213711 (Pioneer Hi-Bred Italia Sementi)":
    "Garante Privacy, beslut nr 755 av den 18 december 2025, doc-web 10213711 (Pioneer Hi-Bred Italia Sementi)",
  "Garante Privacy, Provvedimento n. 382 del 28 maggio 2026, n. 10259916 (Azienda di Tutela della Salute per la Liguria)":
    "Garante Privacy, beslut nr 382 av den 28 maj 2026, doc-web 10259916 (Azienda di Tutela della Salute per la Liguria, Liguriens hälsomyndighet)",
  "Garante Privacy, Provvedimento n. 135 del 13 marzo 2025 (doc-web 10128005), rimosso temporaneamente dal sito in ottemperanza alla sentenza del Tribunale di Cosenza n. 972 del 1° luglio 2026 (opposizione accolta)":
    "Garante Privacy, beslut nr 135 av den 13 mars 2025 (doc-web 10128005), tillfälligt borttaget från webbplatsen till följd av dom nr 972 av den 1 juli 2026 från tingsrätten i Cosenza (invändningen bifölls)",
  "AGI Lavoro, «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (sentenza n. 972 del 1° luglio 2026; il testo della sentenza non è stato reperito in fonte ufficiale)":
    "AGI Lavoro, «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (dom nr 972 av den 1 juli 2026; domens text har inte hittats i någon officiell källa)",
  "Avvocati Associati, commento alla sentenza Trib. Cosenza n. 972/2026 (22/09/2026), con passi citati":
    "Avvocati Associati, kommentar till dom nr 972/2026 från tingsrätten i Cosenza (22 september 2026), med citerade avsnitt",
  "Legge 20 maggio 1970, n. 300 (Statuto dei Lavoratori), art. 4":
    "Lag nr 300 av den 20 maj 1970 (Italiens lag om arbetstagares rättigheter), art. 4",
  "Regolamento UE 2016/679 (GDPR), artt. 5, 13, 25, 35, 88":
    "Förordning (EU) 2016/679 (GDPR), art. 5, 13, 25, 35 och 88",
  "Betriebsverfassungsgesetz, § 87 (cogestione del consiglio aziendale)":
    "Betriebsverfassungsgesetz (Tysklands lag om företagsorganisation), § 87 (företagsrådets medbestämmande)",
  "Bundesdatenschutzgesetz, § 26 (dati dei lavoratori)":
    "Bundesdatenschutzgesetz (Tysklands federala dataskyddslag), § 26 (anställdas uppgifter)",
  "Garante del Baden-Württemberg, FAQ sulle basi giuridiche dei dati dei dipendenti (sentenza CGUE C-34/21)":
    "Baden-Württembergs tillsynsmyndighet för dataskydd, vanliga frågor om rättslig grund för anställdas uppgifter (EU-domstolens dom C-34/21)",
  "Regolamento UE 2016/679 (GDPR)":
    "Förordning (EU) 2016/679 (GDPR)",
  "Garante della Renania-Palatinato, guida sulla localizzazione GPS dei dipendenti":
    "Rheinland-Pfalz tillsynsmyndighet för dataskydd, vägledning om GPS-positionering av anställda",
  "Lista DSK dei trattamenti che richiedono una valutazione d'impatto (settore privato)":
    "DSK:s förteckning över behandlingar som kräver en konsekvensbedömning (privat sektor)",
  "BfDI, elenco delle autorità garanti per la protezione dei dati dei Land":
    "BfDI, förteckning över delstaternas tillsynsmyndigheter för dataskydd",
  "Garante di Amburgo, comunicato del 1 ottobre 2020 (sanzione H&M)":
    "Hamburgs tillsynsmyndighet för dataskydd, pressmeddelande av den 1 oktober 2020 (böter mot H&M)",
  "BayLDA, autorità garante della Baviera":
    "BayLDA, Bayerns tillsynsmyndighet för dataskydd",
  "BlnBDI, autorità garante di Berlino":
    "BlnBDI, Berlins tillsynsmyndighet för dataskydd",
  "Code du travail, art. L2312-38 (consultazione del CSE sui mezzi di controllo)":
    "Code du travail (Frankrikes arbetslagstiftning), art. L2312-38 (samråd med CSE om kontrollåtgärder)",
  "Code du travail, art. L1222-4 (nessuna raccolta da dispositivo non portato a conoscenza)":
    "Code du travail (Frankrikes arbetslagstiftning), art. L1222-4 (ingen insamling via en enhet som den anställde inte har informerats om)",
  "CNIL, guida sulla geolocalizzazione dei veicoli dei dipendenti":
    "CNIL, vägledning om geolokalisering av de anställdas fordon",
  "CNIL, lista dei trattamenti che richiedono una valutazione d'impatto (AIPD)":
    "CNIL, förteckning över behandlingar som kräver en konsekvensbedömning (AIPD)",
  "CNIL, abolizione delle dichiarazioni preventive dal 25 maggio 2018":
    "CNIL, avskaffandet av förhandsanmälningar från och med den 25 maj 2018",
  "CNIL, dieci nuove sanzioni (procedura semplificata, 7 novembre 2023)":
    "CNIL, tio nya sanktioner (förenklat förfarande, 7 november 2023)",
  "CNIL, deliberazione SAN-2022-015 del 7 luglio 2022 (UBEEQO International, 175.000 €), su Légifrance":
    "CNIL, beslut SAN-2022-015 av den 7 juli 2022 (UBEEQO International, 175 000 €), på Légifrance",
  "Ley Organica 3/2018 (LOPDGDD), art. 90 (geolocalizzazione sul lavoro)":
    "Ley Orgánica 3/2018 (LOPDGDD), art. 90 (geolokalisering i arbetet)",
  "Estatuto de los Trabajadores, artt. 20.3 e 64":
    "Estatuto de los Trabajadores (Spaniens arbetstagarstadga), art. 20.3 och 64",
  "AEPD, FAQ sul GPS nelle auto aziendali usate dai lavoratori":
    "AEPD, vanliga frågor om GPS i tjänstebilar som arbetstagare använder",
  "AEPD, lista dei trattamenti che richiedono una valutazione d'impatto (art. 35.4 GDPR)":
    "AEPD, förteckning över behandlingar som kräver en konsekvensbedömning (art. 35.4 GDPR)",
  "AEPD, guida sulla protezione dei dati nei rapporti di lavoro":
    "AEPD, vägledning om dataskydd i anställningsförhållanden",
  "AEPD, sanzione PS/00454/2024 (Ares Capital, 200.000 €)":
    "AEPD, sanktion PS/00454/2024 (Ares Capital, 200 000 €)",
  "Wet op de ondernemingsraden (WOR), art. 27 (diritto di consenso del consiglio aziendale)":
    "Wet op de ondernemingsraden (WOR, Nederländernas lag om företagsråd), art. 27 (företagsrådets samtyckesrätt)",
  "Autoriteit Persoonsgegevens, lista dei trattamenti che richiedono una DPIA":
    "Autoriteit Persoonsgegevens, förteckning över behandlingar som kräver en DPIA",
  "Autoriteit Persoonsgegevens, condizioni per il controllo dei dipendenti":
    "Autoriteit Persoonsgegevens, villkor för kontroll av anställda",
  "Autoriteit Persoonsgegevens, controllo dei dipendenti a distanza (GPS sulle auto aziendali)":
    "Autoriteit Persoonsgegevens, övervakning av anställda på distans (GPS i tjänstebilar)",
  "Autoriteit Persoonsgegevens, sanzione per il trattamento delle impronte dei dipendenti":
    "Autoriteit Persoonsgegevens, sanktionsavgift för behandling av anställdas fingeravtryck",
  "Codigo do Trabalho, art. 20 (mezzi di sorveglianza a distanza)":
    "Código do Trabalho (Portugals arbetslagstiftning), art. 20 (övervakning på distans)",
  "CNPD, Deliberacao 7680/2014 (geolocalizzazione nel contesto lavorativo)":
    "CNPD, Deliberação 7680/2014 (geolokalisering i arbetslivet)",
  "Lei 58/2019, art. 28 (relazioni di lavoro)":
    "Lei 58/2019, art. 28 (anställningsförhållanden)",
  "CNPD, videovigilanza: nel contesto lavorativo restano le condizioni del Codice del lavoro, senza l'autorizzazione della CNPD":
    "CNPD, kameraövervakning: i arbetslivet gäller fortfarande villkoren i arbetslagstiftningen, utan tillstånd från CNPD",
  "CNPD, valutazione d'impatto sulla protezione dei dati":
    "CNPD, konsekvensbedömning avseende dataskydd",
  "CNPD, Regulamento n.º 798/2018 (lista dei trattamenti soggetti a valutazione d'impatto)":
    "CNPD, Regulamento n.º 798/2018 (förteckning över behandlingar som kräver en konsekvensbedömning)",
  "Tribunal da Relação de Lisboa, acórdão del 17 giugno 2026, proc. 2266/25.4T8TVD.L1-4 (GPS del veicolo di una lavoratrice)":
    "Tribunal da Relação de Lisboa, dom av den 17 juni 2026, mål 2266/25.4T8TVD.L1-4 (GPS i en arbetstagares fordon)",
  "CNPD, presentare una segnalazione":
    "CNPD, lämna in en anmälan",
  "Datatilsynet, guida sul controllo dei dipendenti (Kontrol af medarbejdere)":
    "Datatilsynet, vägledningen «Kontrol af medarbejdere» (kontroll av anställda)",
  "Datatilsynet, lista dei trattamenti che richiedono una valutazione d'impatto":
    "Datatilsynet, förteckning över behandlingar som kräver en konsekvensbedömning",
  "Datatilsynet, controlli 2020 sull'obbligo di informazione nelle misure di controllo dei dipendenti (GPS, videosorveglianza e altre)":
    "Datatilsynet, tillsyn 2020 av informationsskyldigheten vid kontrollåtgärder mot anställda (GPS, kameraövervakning m.fl.)",
  "Datatilsynet, aree prioritarie dei controlli nel 2026 (sorveglianza dei dipendenti)":
    "Datatilsynet, prioriterade tillsynsområden 2026 (övervakning av anställda)",
  "Datatilsynet (autorità garante danese)":
    "Datatilsynet (Danmarks tillsynsmyndighet för dataskydd)",
  "Lag 1976:580 om medbestammande i arbetslivet (MBL), § 11":
    "Lag (1976:580) om medbestämmande i arbetslivet (MBL), § 11",
  "IMY, controllo e sorveglianza dei dipendenti":
    "IMY, kontroll och övervakning av anställda",
  "IMY, come usare i servizi di localizzazione (GPS) sui dipendenti":
    "IMY, så använder du lokaliseringstjänster (GPS) för anställda",
  "IMY, quando svolgere una valutazione d'impatto":
    "IMY, när du ska göra en konsekvensbedömning",
  "IMY, presentare un reclamo":
    "IMY, lämna in ett klagomål",
  "IMY, sanzione al Comune di Skelleftea (riconoscimento facciale per le presenze)":
    "IMY, sanktionsavgift mot Skellefteå kommun (ansiktsigenkänning för närvaroregistrering)",
  "Arbeidsmiljoloven, kap. 9 (misure di controllo, §§ 9-1 e 9-2)":
    "Arbeidsmiljøloven (Norges arbetsmiljölag), kap. 9 (kontrollåtgärder, §§ 9-1 och 9-2)",
  "Datatilsynet (Norvegia), GPS e tracciamento dei veicoli aziendali":
    "Datatilsynet (Norge), GPS och spårning av tjänstefordon",
  "Datatilsynet (Norvegia), quando svolgere una valutazione d'impatto":
    "Datatilsynet (Norge), när du ska göra en konsekvensbedömning",
  "Datatilsynet (autorità garante norvegese)":
    "Datatilsynet (Norges tillsynsmyndighet för dataskydd)",
  "Personvernnemnda, PVN-2017-07 (uso del GPS per controllare le ore del dipendente)":
    "Personvernnemnda, PVN-2017-07 (användning av GPS för att kontrollera en anställds arbetstid)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96 (misure di controllo che toccano la dignita: consenso del consiglio aziendale)":
    "Arbeitsverfassungsgesetz (ArbVG, Österrikes lag om arbetslivets författning), § 96 (kontrollåtgärder som berör människovärdet: samtycke från företagsrådet)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96a (sistemi che trattano dati personali dei lavoratori)":
    "Arbeitsverfassungsgesetz (ArbVG), § 96a (system som behandlar de anställdas personuppgifter)",
  "DSFA-V, regolamento sui trattamenti che richiedono una valutazione d'impatto":
    "DSFA-V, förordning om behandlingar som kräver en konsekvensbedömning",
  "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (fine del registro DVR)":
    "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (DVR-registrets upphörande)",
  "Datenschutzbehörde (DSB), decisione 2022-0.021.739 (stop al GPS sui veicoli aziendali)":
    "Datenschutzbehörde (DSB), beslut 2022-0.021.739 (förbud mot GPS i tjänstefordon)",
  "Datenschutzbehörde (DSB), procedura di reclamo":
    "Datenschutzbehörde (DSB), klagomålsförfarande",
  "CCT n. 81 del 26 aprile 2002 (controllo delle comunicazioni elettroniche in rete)":
    "Kollektivavtal nr 81 av den 26 april 2002 (kontroll av elektronisk kommunikation i nätverk)",
  "APD/GBA, geolocalizzazione dei lavoratori":
    "APD/GBA, geolokalisering av arbetstagare",
  "APD/GBA, valutazione d'impatto sulla protezione dei dati":
    "APD/GBA, konsekvensbedömning avseende dataskydd",
  "APD/GBA, presentare un reclamo":
    "APD/GBA, lämna in ett klagomål",
  "Chambre Contentieuse APD/GBA, decisione 114/2024 (impronte per le presenze, 45.000 euro), testo integrale":
    "Chambre Contentieuse (APD/GBA), beslut 114/2024 (fingeravtryck för närvaroregistrering, 45 000 euro), fullständig text",
  "ICO, guida sul monitoraggio dei lavoratori (UK GDPR)":
    "ICO, vägledning om övervakning av arbetstagare (UK GDPR)",
  "ICO, sorveglianza nei veicoli":
    "ICO, övervakning i fordon",
  "ICO, quando serve una DPIA":
    "ICO, när krävs en DPIA",
  "ICO, provvedimento sul monitoraggio GPS (Home Office, 2024)":
    "ICO, åtgärd mot GPS-övervakning (Home Office, 2024)",
  "ICO, presentare una segnalazione":
    "ICO, lämna in en anmälan",
  "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission dal 30/09/2026)":
    "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission från och med den 30 september 2026)",
  "Regolamento UE 2016/679 (GDPR) come UK GDPR":
    "Förordning (EU) 2016/679 (GDPR) som UK GDPR",
  "DPC, guida sul tracciamento dei veicoli aziendali (maggio 2020)":
    "DPC, vägledning om spårning av tjänstefordon (maj 2020)",
  "DPC, pagina sul tracciamento dei veicoli dei dipendenti (aggiornata a maggio 2026)":
    "DPC, sida om spårning av de anställdas fordon (uppdaterad i maj 2026)",
  "DPC, lista dei trattamenti che richiedono una DPIA":
    "DPC, förteckning över behandlingar som kräver en DPIA",
  "DPC, consultazione preventiva":
    "DPC, förhandssamråd",
  "DPC, presentare un reclamo":
    "DPC, lämna in ett klagomål",
  "DPC, decisione Limerick City and County Council (dicembre 2021)":
    "DPC, beslut om Limerick City and County Council (december 2021)",
  "DPC, sentenza Doolin v. DPC (High Court, febbraio 2020)":
    "DPC, domen Doolin mot DPC (High Court, februari 2020)",
  "IFPDT/FDPIC, mezzi tecnici di sorveglianza sul luogo di lavoro":
    "FDPIC, tekniska övervakningsmedel på arbetsplatsen",
  "IFPDT/FDPIC, trattamento dei dati da parte del datore di lavoro (CO art. 328b)":
    "FDPIC, arbetsgivarens behandling av uppgifter (OR/CO art. 328b)",
  "IFPDT/FDPIC, valutazione d'impatto sulla protezione dei dati (nLPD art. 22)":
    "FDPIC, konsekvensbedömning avseende dataskydd (nLPD art. 22)",
  "Legge federale sulla protezione dei dati (nLPD), art. 22, 23 e 60-65 (Fedlex)":
    "Federal lag om dataskydd (nLPD), art. 22, 23 och 60-65 (Fedlex)",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo":
    "Förordning (EU) 2016/679 (GDPR) som jämförelse",
  "Legge 190/2018, art. 5 (monitoraggio dei dipendenti)":
    "Lag 190/2018, art. 5 (övervakning av anställda)",
  "Codul Muncii, art. 40 (obblighi del datore), Portal Legislativ":
    "Codul Muncii (Rumäniens arbetslagstiftning), art. 40 (arbetsgivarens skyldigheter), Portal Legislativ",
  "ANSPDCP, comunicato del 23 marzo 2023 (sanzione Tehnoplus, GPS)":
    "ANSPDCP, pressmeddelande av den 23 mars 2023 (sanktionsavgift mot Tehnoplus, GPS)",
  "ANSPDCP, Decizia 174/2018 (lista trattamenti che richiedono DPIA), Monitorul Oficial 919/31.10.2018, art. 1 lett. d e g":
    "ANSPDCP, Decizia 174/2018 (förteckning över behandlingar som kräver en DPIA), Monitorul Oficial 919/31.10.2018, art. 1 led d och g",
  "ANSPDCP, presentazione dei reclami":
    "ANSPDCP, hur man lämnar in klagomål",
  "Kodeks pracy, art. 22(2) (monitoraggio), testo consolidato Dz.U. 2026 poz. 1245 (in vigore dal 24 settembre 2026)":
    "Kodeks pracy (Polens arbetslagstiftning), art. 22(2) (övervakning), konsoliderad text Dz.U. 2026 poz. 1245 (i kraft från och med den 24 september 2026)",
  "Legge del 4 dicembre 2025 di modifica del Codice del lavoro, Dz.U. 2026 poz. 25 (art. 22(2) par. 8: \"su carta o in forma elettronica\", in vigore dal 27 gennaio 2026)":
    "Lag av den 4 december 2025 om ändring av arbetslagstiftningen, Dz.U. 2026 poz. 25 (art. 22(2) punkt 8: «på papper eller i elektronisk form», i kraft från och med den 27 januari 2026)",
  "Kodeks pracy, art. 22(3) par. 3-4 (altre forme di monitoraggio, tra cui il GPS), testo consolidato Dz.U. 2026 poz. 1245":
    "Kodeks pracy, art. 22(3) punkt 3-4 (andra former av övervakning, däribland GPS), konsoliderad text Dz.U. 2026 poz. 1245",
  "UODO, guida alla protezione dei dati sul luogo di lavoro":
    "UODO, vägledning om dataskydd på arbetsplatsen",
  "UODO, lista dei trattamenti che richiedono una DPIA (M.P. 2019 poz. 666)":
    "UODO, förteckning över behandlingar som kräver en DPIA (M.P. 2019 poz. 666)",
  "UODO, presentare un reclamo":
    "UODO, lämna in ett klagomål",
  "UODO, sanzione Centrum Medyczne Ujastek (monitoraggio non comunicato ai dipendenti)":
    "UODO, sanktionsavgift mot Centrum Medyczne Ujastek (övervakning som de anställda inte hade informerats om)",
  "Zakonik prace (Codice del lavoro), art. 316":
    "Zákoník práce (Tjeckiens arbetslagstiftning), art. 316",
  "Stanovisko 2/2017 sul trattamento dei dati sul posto di lavoro, pubblicato dall UOOU":
    "Yttrande 2/2017 om behandling av uppgifter på arbetsplatsen, publicerat av UOOU",
  "UOOU, lista dei trattamenti che richiedono una DPIA":
    "UOOU, förteckning över behandlingar som kräver en DPIA",
  "UOOU, presentare una segnalazione":
    "UOOU, lämna in en anmälan",
  "Tribunale municipale di Praga 6 A 42/2013 (Ceska posta, GPS sui portalettere), sentenza":
    "Stadsrätten i Prag 6 A 42/2013 (Česká pošta, GPS på brevbärare), dom",
  "epravo.cz, GPS monitoring zamestnancu podruhe (riporta una multa di 80.000 CZK e 7.770 portalettere, non confermati da fonti ufficiali)":
    "epravo.cz, GPS monitoring zaměstnanců podruhé (redovisar böter på 80 000 CZK och 7 770 brevbärare, ej bekräftat av officiella källor)",
  "UOOU, relazione annuale 2014, controlli su Skoda Auto e Plzensky Prazdroj (GPS nei veicoli aziendali)":
    "UOOU, årsrapport 2014, tillsyn av Škoda Auto och Plzeňský Prazdroj (GPS i tjänstefordon)",
  "HDPA (Garante greco), FAQ sui rapporti di lavoro (geolocalizzazione)":
    "HDPA (Greklands tillsynsmyndighet för dataskydd), vanliga frågor om anställningsförhållanden (geolokalisering)",
  "Legge 4624/2019, art. 27 (dati dei dipendenti), traduzione ufficiale HDPA":
    "Lag 4624/2019, art. 27 (anställdas uppgifter), officiell översättning från HDPA",
  "HDPA, Decisione 65/2018 (lista dei trattamenti che richiedono DPIA)":
    "HDPA, beslut 65/2018 (förteckning över behandlingar som kräver en DPIA)",
  "HDPA, sanzione a un datore per geolocalizzazione (16 febbraio 2024)":
    "HDPA, sanktionsavgift mot en arbetsgivare för geolokalisering (16 februari 2024)",
  "HDPA (Garante greco), pagina ufficiale":
    "HDPA (Greklands tillsynsmyndighet för dataskydd), officiell sida",
  "Legge sulla protezione della privacy nella vita lavorativa (759/2004) - testo consolidato in finlandese (Finlex)":
    "Lag om skydd av privatlivet i arbetslivet (759/2004), konsoliderad text på finska (Finlex)",
  "Garante finlandese (Tietosuojavaltuutettu), FAQ sulla vita lavorativa":
    "Finlands dataombudsman (Tietosuojavaltuutettu), vanliga frågor om arbetslivet",
  "Garante finlandese, lista dei trattamenti che richiedono una DPIA":
    "Finlands dataombudsman, förteckning över behandlingar som kräver en DPIA",
  "Garante finlandese, segnalare una violazione":
    "Finlands dataombudsman, anmäl en överträdelse",
  "Garante finlandese, sanzione per dati di localizzazione usati per la rilevazione orario (2021)":
    "Finlands dataombudsman, sanktionsavgift för lokaliseringsuppgifter som använts för registrering av arbetstid (2021)",
  "Zakon o zaštiti na radu (legge sicurezza sul lavoro), art. 43 (dispositivi di sorveglianza)":
    "Zakon o zaštiti na radu (Kroatiens lag om säkerhet på arbetsplatsen), art. 43 (övervakningsanordningar)",
  "Zakon o radu (legge sul lavoro), art. 29 (dati dei lavoratori) e art. 150 (consultazione del consiglio dei lavoratori)":
    "Zakon o radu (Kroatiens arbetslag), art. 29 (anställdas uppgifter) och art. 150 (samråd med arbetsrådet)",
  "AZOP (Garante croato), trattamento dei dati dei dipendenti tramite GPS":
    "AZOP (Kroatiens tillsynsmyndighet för dataskydd), behandling av anställdas uppgifter via GPS",
  "AZOP, lista dei trattamenti che richiedono una DPIA":
    "AZOP, förteckning över behandlingar som kräver en DPIA",
  "AZOP, richiesta di accertamento di violazione (reclamo)":
    "AZOP, begäran om fastställande av en överträdelse (klagomål)",
  "AZOP (Garante croato), pagina ufficiale":
    "AZOP (Kroatiens tillsynsmyndighet för dataskydd), officiell sida",
  "IP-RS (Garante sloveno), linee guida sull'uso dei dispositivi GPS":
    "IP-RS (Sloveniens tillsynsmyndighet för dataskydd), riktlinjer för användning av GPS-enheter",
  "IP-RS, parere 'Sledenje zaposlenim' (tracciamento dei dipendenti)":
    "IP-RS, yttrande «Sledenje zaposlenim» (spårning av anställda)",
  "IP-RS, comunicato del 15.04.2026: multa di 6.000 euro a un'azienda pubblica per GPS sui dipendenti":
    "IP-RS, pressmeddelande av den 15.04.2026: böter på 6 000 euro mot ett offentligt bolag för GPS på anställda",
  "Zakon o delovnih razmerjih (ZDR-1), art. 48 (dati dei lavoratori)":
    "Zakon o delovnih razmerjih (ZDR-1, Sloveniens lag om anställningsförhållanden), art. 48 (anställdas uppgifter)",
  "Zakon o sodelovanju delavcev pri upravljanju (ZSDU), art. 89-90 (informazione del consiglio dei lavoratori)":
    "Zakon o sodelovanju delavcev pri upravljanju (ZSDU, Sloveniens lag om arbetstagares delaktighet i ledningen), art. 89-90 (information till arbetsrådet)",
  "IP-RS, elenco dei trattamenti per cui e' obbligatoria la valutazione d'impatto (art. 35.4 GDPR)":
    "IP-RS, förteckning över behandlingar där en konsekvensbedömning är obligatorisk (art. 35.4 GDPR)",
  "IP-RS, presentare una segnalazione":
    "IP-RS, lämna in en anmälan",
  "Zakonnik prace (Codice del lavoro), art. 13 par. 4 (monitoraggio dei dipendenti)":
    "Zákonník práce (Slovakiens arbetslagstiftning), art. 13 punkt 4 (övervakning av anställda)",
  "UOOU SR (Garante slovacco), procedura di tutela":
    "UOOU SR (Slovakiens tillsynsmyndighet för dataskydd), skyddsförfarande",
  "Parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli, versione slovacca pubblicata dall UOOU SR":
    "Yttrande 2/2017 om behandling av uppgifter på arbetsplatsen (WP249), pkt 5.7 fordon, slovakisk version publicerad av UOOU SR",
  "Lista slovacca dei trattamenti soggetti a DPIA (punti 3 e 9), pubblicata dall EDPB":
    "Slovakisk förteckning över behandlingar som omfattas av en DPIA (punkt 3 och 9), publicerad av EDPB",
  "UOOU SR, guida sulla liceita del trattamento (versione aggiornata 22/01/2019), esempio del par. 13 c. 4 del Codice del lavoro":
    "UOOU SR, vägledning om behandlingens laglighet (uppdaterad version av den 22.01.2019), exempel på § 13 punkt 4 i arbetslagstiftningen",
  "UOOU SR, presentare una proposta di avvio del procedimento (reclamo)":
    "UOOU SR, lämna in ett förslag om att inleda ett förfarande (klagomål)",
  "UOOU SR, relazione sullo stato della protezione dei dati 2025 (par. 9.2.1, trattamento di dati di geolocalizzazione)":
    "UOOU SR, rapport om tillståndet för skyddet av personuppgifter 2025 (pkt 9.2.1, behandling av geolokaliseringsuppgifter)",
  "Codice del lavoro (Mt.), art. 9 (diritti della persona) e art. 11/A (controllo dei lavoratori)":
    "Ungerns arbetslagstiftning (Mt.), art. 9 (personlighetsrättigheter) och art. 11/A (kontroll av arbetstagare)",
  "NAIH, guida sui trattamenti sul luogo di lavoro (novembre 2016, precedente al GDPR), par. 5 sul GPS":
    "NAIH, vägledning om behandlingar på arbetsplatsen (november 2016, före GDPR), pkt 5 om GPS",
  "NAIH, lista dei trattamenti che richiedono una valutazione d'impatto":
    "NAIH, förteckning över behandlingar som kräver en konsekvensbedömning",
  "NAIH, sanzione Auchan (monitoraggio dei dipendenti)":
    "NAIH, sanktionsavgift mot Auchan (övervakning av anställda)",
  "NAIH (Garante ungherese), pagina ufficiale":
    "NAIH (Ungerns tillsynsmyndighet för dataskydd), officiell sida",
  "Legge sulla protezione dei dati (ZZLD), testo consolidato sul sito del CPDP (art. 25д e 25и; ultima modifica ДВ 70/2024)":
    "Lag om skydd av personuppgifter (ZZLD), konsoliderad text på CPDP:s webbplats (art. 25д och 25и; senast ändrad ДВ 70/2024)",
  "CPDP (Garante bulgaro), guida sulla privacy sul luogo di lavoro (2014, anteriore al GDPR), par. 3.5.2 sistemi GPS":
    "CPDP (Bulgariens tillsynsmyndighet för dataskydd), vägledning om integritet på arbetsplatsen (2014, före GDPR), pkt 3.5.2 GPS-system",
  "CPDP, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "CPDP, förteckning över behandlingar som kräver en DPIA (art. 35.4)",
  "CPDP, parere su LUKOIL (riuso della videosorveglianza per valutare i dipendenti)":
    "CPDP, yttrande om LUKOIL (återanvändning av kameraövervakning för att bedöma anställda)",
  "CPDP (Garante bulgaro), pagina ufficiale":
    "CPDP (Bulgariens tillsynsmyndighet för dataskydd), officiell sida",
  "AKI (Garante estone), FAQ sui rapporti di lavoro (GPS)":
    "AKI (Estlands tillsynsmyndighet för dataskydd), vanliga frågor om anställningsförhållanden (GPS)",
  "AKI, guida per il personale sui dati nel rapporto di lavoro (2011, ante-GDPR), punto 2.9 GPS":
    "AKI, vägledning till personalen om uppgifter i anställningsförhållandet (2011, före GDPR), punkt 2.9 GPS",
  "Legge sul fiduciario dei lavoratori (Töötajate usaldusisiku seadus), §§ 17 e 20 - Riigi Teataja":
    "Lag om arbetstagarnas förtroendeman (Töötajate usaldusisiku seadus), §§ 17 och 20, Riigi Teataja",
  "Legge estone sulla protezione dei dati personali (Isikuandmete kaitse seadus), §§ 62-73 - Riigi Teataja":
    "Estnisk lag om skydd av personuppgifter (Isikuandmete kaitse seadus), §§ 62-73, Riigi Teataja",
  "AKI, materiale sul trattamento dei dati nel rapporto di lavoro":
    "AKI, material om behandling av uppgifter i anställningsförhållandet",
  "AKI, valutazione d'impatto (capitolo 5)":
    "AKI, konsekvensbedömning (kapitel 5)",
  "AKI, presentare un reclamo":
    "AKI, lämna in ett klagomål",
  "AKI (Garante estone), pagina ufficiale":
    "AKI (Estlands tillsynsmyndighet för dataskydd), officiell sida",
  "DVI (Garante lettone), posso tracciare i viaggi del mio dipendente? (GPS)":
    "DVI (Lettlands tillsynsmyndighet för dataskydd), får jag spåra min anställdas resor? (GPS)",
  "Legge lettone sul trattamento dei dati delle persone fisiche (Fizisko personu datu apstrādes likums) - Likumi.lv":
    "Lettisk lag om behandling av fysiska personers uppgifter (Fizisko personu datu apstrādes likums), Likumi.lv",
  "DVI, videosorveglianza dei dipendenti in presenza (16/09/2022)":
    "DVI, kameraövervakning av anställda på plats (16.09.2022)",
  "DVI, videosorveglianza dei dipendenti nel lavoro da remoto":
    "DVI, kameraövervakning av anställda som arbetar på distans",
  "DVI, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "DVI, förteckning över behandlingar som kräver en DPIA (art. 35.4)",
  "DVI, presentare un reclamo":
    "DVI, lämna in ett klagomål",
  "Gruppo art. 29, parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli":
    "Artikel 29-gruppen, yttrande 2/2017 om behandling av uppgifter på arbetsplatsen (WP249), pkt 5.7 fordon",
  "VDAI, lista dei trattamenti che richiedono una DPIA (voce 10: monitoraggio dei dipendenti)":
    "VDAI, förteckning över behandlingar som kräver en DPIA (punkt 10: övervakning av anställda)",
  "VDAI, decisione sul trattamento della corrispondenza personale di un dipendente (2022)":
    "VDAI, beslut om behandling av en anställds personliga korrespondens (2022)",
  "VDAI, elenco delle decisioni (multe, ordini e altro) fino al 2025":
    "VDAI, förteckning över beslut (sanktionsavgifter, förelägganden m.m.) till och med 2025",
  "VDAI (Garante lituano), servizi e reclami":
    "VDAI (Litauens tillsynsmyndighet för dataskydd), tjänster och klagomål",
  "Loi du 1er août 2018, art. 71 (nuovo art. L.261-1 del Code du travail) e art. 72 (abrogazione della legge del 2 agosto 2002), Legilux":
    "Loi du 1er août 2018, art. 71 (ny art. L.261-1 i Code du travail) och art. 72 (upphävande av lagen av den 2 augusti 2002), Legilux",
  "Code du travail, art. L.261-1 (sorveglianza dei lavoratori) - riproduzione CNPD":
    "Code du travail (Luxemburgs arbetslagstiftning), art. L.261-1 (övervakning av arbetstagare), återgiven av CNPD",
  "CNPD, geolocalizzazione dei veicoli: necessità e proporzionalità":
    "CNPD, geolokalisering av fordon: nödvändighet och proportionalitet",
  "CNPD, geolocalizzazione: valutazione d'impatto (AIPD)":
    "CNPD, geolokalisering: konsekvensbedömning (AIPD)",
  "CNPD, decisione 11FR/2021 (sanzione geolocalizzazione veicoli di servizio)":
    "CNPD, beslut 11FR/2021 (sanktion för geolokalisering av tjänstefordon)",
  "CNPD, presentare un reclamo (Faire valoir vos droits)":
    "CNPD, lämna in ett klagomål (Faire valoir vos droits)",
  "Regole n. 50/2023 sulla sorveglianza elettronica (Gazzetta ufficiale)":
    "Regler nr 50/2023 om elektronisk övervakning (Isländska lagtidningen)",
  "Regole 1329/2025 di Persónuvernd (modifica delle Regole 50/2023, art. 3: 90 giorni)":
    "Persónuvernds regler 1329/2025 (ändring av reglerna 50/2023, art. 3: 90 dagar)",
  "Persónuvernd (Garante islandese), FAQ sul GPS e i dispositivi di localizzazione":
    "Persónuvernd (Islands tillsynsmyndighet för dataskydd), vanliga frågor om GPS och lokaliseringsenheter",
  "Persónuvernd, lista dei trattamenti che richiedono una DPIA (Auglýsing nr. 828/2019)":
    "Persónuvernd, förteckning över behandlingar som kräver en DPIA (Auglýsing nr. 828/2019)",
  "Persónuvernd, presentare un reclamo":
    "Persónuvernd, lämna in ett klagomål",
  "Persónuvernd, decisione Islandspostur (uso illecito del GPS su un dipendente)":
    "Persónuvernd, beslut om Islandspostur (olaglig användning av GPS mot en anställd)",
  "IDPC (Garante maltese), guida al settore del lavoro":
    "IDPC (Maltas tillsynsmyndighet för dataskydd), vägledning för arbetslivet",
  "IDPC, valutazione d'impatto sulla protezione dei dati":
    "IDPC, konsekvensbedömning avseende dataskydd",
  "IDPC, presentare un reclamo":
    "IDPC, lämna in ett klagomål",
  "IDPC, decisione CDP/COMP/579/2025 del 20 aprile 2026 (videosorveglianza della mensa aziendale)":
    "IDPC, beslut CDP/COMP/579/2025 av den 20 april 2026 (kameraövervakning av företagets matsal)",
  "Legge 125(I)/2018 sulla protezione dei dati (art. 36: abrogazione delle leggi 2001-2012)":
    "Lag 125(I)/2018 om dataskydd (art. 36: upphävande av lagarna 2001-2012)",
  "Commissario cipriota, registro delle attività: abolito l'obbligo di notifica al Commissario (art. 30 GDPR)":
    "Cyperns dataskyddskommissionär, register över behandlingar: skyldigheten att anmäla till kommissionären har upphävts (art. 30 GDPR)",
  "Commissario cipriota, valutazione d'impatto (elenco indicativo: monitoraggio sistematico dei dipendenti, GPS)":
    "Cyperns dataskyddskommissionär, konsekvensbedömning (vägledande förteckning: systematisk övervakning av anställda, GPS)",
  "GDPR, art. 13 (informazione), testo ufficiale EUR-Lex":
    "GDPR, art. 13 (information), officiell text på EUR-Lex",
  "GDPR, art. 6(1)(f) e considerando 43 (base giuridica e squilibrio fra le parti), testo ufficiale EUR-Lex":
    "GDPR, art. 6.1 f och skäl 43 (rättslig grund och obalans mellan parterna), officiell text på EUR-Lex",
  "Garante cipriota, pagina ufficiale":
    "Cyperns dataskyddskommissionär, officiell sida",
  "Commissario cipriota, decisione del 25.10.2019 sul Gruppo Louis (strumento Bradford Factor)":
    "Cyperns dataskyddskommissionär, beslut av den 25.10.2019 om Louis-koncernen (verktyget Bradford Factor)",
  "Legge 124/2024 sulla protezione dei dati personali (in vigore dal 1 febbraio 2025)":
    "Lag 124/2024 om skydd av personuppgifter (i kraft från och med den 1 februari 2025)",
  "IDP, linea guida n. 03 del 30.04.2025 sulla videosorveglianza":
    "IDP, riktlinje nr 03 av den 30.04.2025 om kameraövervakning",
  "IDP (Garante albanese), pagina ufficiale":
    "IDP (Albaniens tillsynsmyndighet för dataskydd), officiell sida",
  "Legge sulla protezione dei dati (LPDP, 87/2018) - testo ufficiale":
    "Lag om dataskydd (LPDP, 87/2018), officiell text",
  "Poverenik, decisione sulla lista dei trattamenti che richiedono una DPIA (Gazzetta 45/2019)":
    "Poverenik, beslut om förteckningen över behandlingar som kräver en DPIA (Službeni glasnik 45/2019)",
  "Odluka sulla lista dei trattamenti che richiedono DPIA (Sl. glasnik RS 45/2019 e 112/2020, testo consolidato)":
    "Odluka om förteckningen över behandlingar som kräver en DPIA (Sl. glasnik RS 45/2019 och 112/2020, konsoliderad text)",
  "Poverenik (Garante serbo), competenze e contatti":
    "Poverenik (Serbiens tillsynsmyndighet för dataskydd), behörighet och kontakt",
  "Danas, ispezione straordinaria del Poverenik al JKP Mediana di Nis (7 aprile 2026)":
    "Danas, extraordinär tillsyn av Poverenik hos JKP Mediana i Niš (7 april 2026)",
  "N1, GPS su 80 cassonetti del JKP Mediana di Nis (protesta dei lavoratori, gennaio 2026)":
    "N1, GPS på 80 sopkärl hos JKP Mediana i Niš (de anställdas protest, januari 2026)",
  "Legge sulla protezione dei dati personali (Gazzetta BiH 12/25), testo pubblicato dall AZLP":
    "Lag om skydd av personuppgifter (Bosnien och Hercegovinas lagtidning 12/25), text publicerad av AZLP",
  "AZLP, decisione del 10.11.2025 sulla lista dei trattamenti che richiedono una DPIA (punto 8: dati dei dipendenti, controllo di lavoro e spostamenti)":
    "AZLP, beslut av den 10.11.2025 om förteckningen över behandlingar som kräver en DPIA (punkt 8: anställdas uppgifter, kontroll av arbete och förflyttningar)",
  "AZLP (Garante bosniaco), pagina ufficiale":
    "AZLP (Bosnien och Hercegovinas tillsynsmyndighet för dataskydd), officiell sida",
  "Legge sulla protezione dei dati personali, Gazzetta ufficiale BiH 12/25":
    "Lag om skydd av personuppgifter, Bosnien och Hercegovinas lagtidning 12/25",
  "Legge sulla protezione dei dati personali, testo consolidato pubblicato dall'AZLP (artt. 26-28 e sanzioni, art. 74)":
    "Lag om skydd av personuppgifter, konsoliderad text publicerad av AZLP (art. 26-28 och sanktioner, art. 74)",
  "Nuova legge sulla protezione dei dati personali, Službeni list CG 133/2026 (pubblicata l'11.9.2026, in vigore dal 19.9.2026, si applica dal 19.3.2027, art. 106; artt. 88, 89 e 105)":
    "Ny lag om skydd av personuppgifter, Službeni list CG 133/2026 (publicerad den 11.9.2026, i kraft från och med den 19.9.2026, tillämpas från och med den 19.3.2027, art. 106; art. 88, 89 och 105)",
  "AZLP, posizione del Consiglio sull'uso del GPS nei veicoli di servizio (29.04.2025)":
    "AZLP, rådets ståndpunkt om användning av GPS i tjänstefordon (29.04.2025)",
  "AZLP (Garante montenegrino), contatti":
    "AZLP (Montenegros tillsynsmyndighet för dataskydd), kontakt",
  "AZLP, moduli (richiesta di tutela dei diritti)":
    "AZLP, blanketter (begäran om skydd av rättigheter)",
  "Regolamento UE 2016/679 (GDPR), riferimento comparativo":
    "Förordning (EU) 2016/679 (GDPR), som jämförelse",
  "Legge sulla protezione dei dati (LPDP, Gazzetta 42/20) - traduzione inglese non ufficiale pubblicata dall'AZLP":
    "Lag om dataskydd (LPDP, Službeni vesnik 42/20), inofficiell engelsk översättning publicerad av AZLP",
  "AZLP, lista dei trattamenti che richiedono la DPIA (11.05.2020, punti 10 e 12: posizione e spostamenti, dati dei lavoratori)":
    "AZLP, förteckning över behandlingar som kräver en DPIA (11.05.2020, punkt 10 och 12: position och förflyttningar, arbetstagares uppgifter)",
  "AZLP, atti subordinati (regolamenti e liste), pagina ufficiale":
    "AZLP, underordnade rättsakter (förordningar och förteckningar), officiell sida",
  "AZLP (Garante macedone), pagina ufficiale e reclami":
    "AZLP (Nordmakedoniens tillsynsmyndighet för dataskydd), officiell sida och klagomål",
  "Legge dell'Ucraina n. 2297-VI sulla protezione dei dati personali (2010)":
    "Ukrainas lag nr 2297-VI om skydd av personuppgifter (2010)",
  "Ordine del Difensore civico 1/02-14: procedura di notifica dei trattamenti a rischio particolare":
    "Ombudsmannens order 1/02-14: förfarande för anmälan av behandlingar med särskild risk",
  "Codice ucraino delle infrazioni amministrative, art. 188-39 (violazioni in materia di dati personali)":
    "Ukrainas lag om administrativa förseelser, art. 188-39 (överträdelser av personuppgiftsreglerna)",
  "Difensore civico (Garante ucraino), protezione dei dati personali":
    "Ombudsmannen (Ukrainas tillsynsmyndighet för dataskydd), skydd av personuppgifter",
  "ICLG, protezione dei dati in Ucraina (basi giuridiche, DPIA)":
    "ICLG, dataskydd i Ukraina (rättsliga grunder, DPIA)",
  "CNPDCP, presentare un reclamo":
    "CNPDCP, lämna in ett klagomål",
  "Legge 195/2024 sulla protezione dei dati personali, in vigore dal 23 agosto 2026 (art. 35 DPIA, art. 88 sanzioni), testo inglese pubblicato dal CNPDCP":
    "Lag 195/2024 om skydd av personuppgifter, i kraft från och med den 23 augusti 2026 (art. 35 DPIA, art. 88 sanktioner), engelsk text publicerad av CNPDCP",
  "CNPDCP, ordine 27/2022: lista dei trattamenti soggetti a valutazione d'impatto (modificata dall'ordine 39/2026)":
    "CNPDCP, order 27/2022: förteckning över behandlingar som omfattas av en konsekvensbedömning (ändrad genom order 39/2026)",
  "Legge della Repubblica di Bielorussia n. 99-Z del 7 maggio 2021 sulla protezione dei dati personali (NPDPC)":
    "Republiken Belarus lag nr 99-Z av den 7 maj 2021 om skydd av personuppgifter (NPDPC)",
  "Ordine OAC n. 94 del 1 giugno 2022: Registro degli operatori di dati personali (casi di iscrizione)":
    "OAC:s order nr 94 av den 1 juni 2022: Register över personuppgiftsansvariga (fall där registrering krävs)",
  "NPDPC (N. Shved), responsabilita amministrativa per violazione della normativa sui dati personali (art. 23.7 CAO)":
    "NPDPC (N. Shved), administrativt ansvar för överträdelser av personuppgiftsreglerna (art. 23.7 CAO)",
  "NPDPC (Garante bielorusso), informazioni e contatti":
    "NPDPC (Belarus tillsynsmyndighet för dataskydd), information och kontakt",
  "GRATA, protezione dei dati e privacy dei dipendenti in Bielorussia":
    "GRATA, dataskydd och de anställdas integritet i Belarus",
  "DLA Piper, applicazione e sanzioni in Bielorussia":
    "DLA Piper, tillämpning och sanktioner i Belarus",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo lontano":
    "Förordning (EU) 2016/679 (GDPR), avlägsen jämförelsepunkt",
  "ANPD, denúncia di inadempimento della LGPD":
    "ANPD, anmälan om bristande efterlevnad av LGPD",
  "ANPD, canale per il titolare dei dati":
    "ANPD, kanal för den registrerade",
  "Lei n. 15.352/2026 (l’ANPD diventa agência reguladora)":
    "Lei n. 15.352/2026 (ANPD blir en reglerande myndighet, agência reguladora)",
  "BfDI, elenco delle autorità dei Land (per trovare la tua)":
    "BfDI, förteckning över delstaternas myndigheter (för att hitta din egen)",
  "BayLDA (esempio, Baviera)":
    "BayLDA (exempel: Bayern)",
  "CNIL, presentare un reclamo":
    "CNIL, lämna in ett klagomål",
  "AEPD, sede elettronica":
    "AEPD, elektroniskt kontor",
  "CNPD, segnalazioni":
    "CNPD, anmälningar",
  "IMY, reclami":
    "IMY, klagomål",
  "Datenschutzbehörde (DSB), reclamo":
    "Datenschutzbehörde (DSB), klagomål",
  "APD/GBA, reclamo":
    "APD/GBA, klagomål",
  "ICO, segnalazioni":
    "ICO, anmälningar",
  "DPC, reclami":
    "DPC, klagomål",
  "ANSPDCP, reclami":
    "ANSPDCP, klagomål",
  "UODO, reclami":
    "UODO, klagomål",
  "UOOU, segnalazioni":
    "UOOU, anmälningar",
  "Garante, segnalazioni":
    "Finlands dataombudsman, anmälningar",
  "AZOP, reclami":
    "AZOP, klagomål",
  "IP-RS, segnalazioni":
    "IP-RS, anmälningar",
  "UOOU SR, avvio del procedimento":
    "UOOU SR, inledande av förfarande",
  "AKI, reclami":
    "AKI, klagomål",
  "DVI, reclami":
    "DVI, klagomål",
  "VDAI, servizi e reclami":
    "VDAI, tjänster och klagomål",
  "CNPD, reclami":
    "CNPD, klagomål",
  "Persónuvernd, reclami":
    "Persónuvernd, klagomål",
  "IDPC, reclami":
    "IDPC, klagomål",
  "Garante cipriota":
    "Cyperns dataskyddskommissionär",
  "AZLP, tutela dei diritti":
    "AZLP, skydd av rättigheter",
  "Difensore civico, protezione dei dati":
    "Ombudsmannen, dataskydd",
  "CNPDCP, reclami":
    "CNPDCP, klagomål",
};
