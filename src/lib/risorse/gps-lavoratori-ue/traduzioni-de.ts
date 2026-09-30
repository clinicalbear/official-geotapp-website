/**
 * Deutsche Fassung der Texte, die in den Länderblättern als einfache `string`
 * stehen (also auf Italienisch, der Mastersprache): die Titel der Quellen und die
 * Namen der Kontaktstellen. Schlüssel = der ITALIENISCHE Text genau wie im Blatt,
 * Wert = die deutsche Fassung. Wird von `loc()` (./localize.ts) nur für `de`
 * verwendet. Amtliche Namen von Gesetzen und Behörden bleiben in der
 * Originalsprache, wo nötig mit deutscher Erläuterung in Klammern.
 *
 * Eine neue Quelle oder ein geänderter Titel in einem Blatt ohne Eintrag hier
 * bleibt auf der deutschen Seite italienisch: der Test `traduzioni-de.test.ts`
 * meldet es.
 */
export const TESTI_DE: Readonly<Record<string, string>> = {
  "Legge lituana sulla protezione giuridica dei dati personali (ADTAĮ), art. 5 c. 4, testo consolidato":
    "Litauisches Gesetz über den rechtlichen Schutz personenbezogener Daten (ADTAĮ), Art. 5 Abs. 4, konsolidierte Fassung",
  "UOOU, relazione annuale 2012, controllo su Česká pošta (monitoraggio degli spostamenti dei portalettere)":
    "UOOU, Jahresbericht 2012, Kontrolle der Česká pošta (Überwachung der Bewegungen von Briefzustellern)",
  "CNPD, Deliberação 2019/494 (norme della Lei 58/2019 disapplicate)":
    "CNPD, Deliberação 2019/494 (Bestimmungen des Gesetzes 58/2019 nicht angewandt)",
  "Garante Privacy, Provvedimento n. 7 del 16 gennaio 2025 (doc-web 10112287)":
    "Garante Privacy, Entscheidung Nr. 7 vom 16. Januar 2025 (doc-web 10112287)",
  "Garante Privacy, Provvedimento n. 755 del 18 dicembre 2025, n. 10213711 (Pioneer Hi-Bred Italia Sementi)":
    "Garante Privacy, Entscheidung Nr. 755 vom 18. Dezember 2025, doc-web 10213711 (Pioneer Hi-Bred Italia Sementi)",
  "Garante Privacy, Provvedimento n. 382 del 28 maggio 2026, n. 10259916 (Azienda di Tutela della Salute per la Liguria)":
    "Garante Privacy, Entscheidung Nr. 382 vom 28. Mai 2026, doc-web 10259916 (Azienda di Tutela della Salute per la Liguria, die ligurische Gesundheitsbehörde)",
  "Garante Privacy, Provvedimento n. 135 del 13 marzo 2025 (doc-web 10128005), rimosso temporaneamente dal sito in ottemperanza alla sentenza del Tribunale di Cosenza n. 972 del 1° luglio 2026 (opposizione accolta)":
    "Garante Privacy, Entscheidung Nr. 135 vom 13. März 2025 (doc-web 10128005), vorübergehend von der Website entfernt in Befolgung des Urteils Nr. 972 des Landgerichts Cosenza vom 1. Juli 2026 (Einspruch stattgegeben)",
  "AGI Lavoro, «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (sentenza n. 972 del 1° luglio 2026; il testo della sentenza non è stato reperito in fonte ufficiale)":
    "AGI Lavoro, „Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza“ (Urteil Nr. 972 vom 1. Juli 2026; der Urteilstext war in keiner amtlichen Quelle auffindbar)",
  "Avvocati Associati, commento alla sentenza Trib. Cosenza n. 972/2026 (22/09/2026), con passi citati":
    "Avvocati Associati, Kommentar zum Urteil Nr. 972/2026 des Landgerichts Cosenza (22. September 2026), mit zitierten Passagen",
  "Legge 20 maggio 1970, n. 300 (Statuto dei Lavoratori), art. 4":
    "Gesetz Nr. 300 vom 20. Mai 1970 (Arbeitnehmerstatut), Art. 4",
  "Regolamento UE 2016/679 (GDPR), artt. 5, 13, 25, 35, 88":
    "Verordnung (EU) 2016/679 (DSGVO), Art. 5, 13, 25, 35, 88",
  "Betriebsverfassungsgesetz, § 87 (cogestione del consiglio aziendale)":
    "Betriebsverfassungsgesetz, § 87 (Mitbestimmung des Betriebsrats)",
  "Bundesdatenschutzgesetz, § 26 (dati dei lavoratori)":
    "Bundesdatenschutzgesetz, § 26 (Beschäftigtendaten)",
  "Garante del Baden-Württemberg, FAQ sulle basi giuridiche dei dati dei dipendenti (sentenza CGUE C-34/21)":
    "Landesbeauftragter für den Datenschutz Baden-Württemberg, FAQ zu den Rechtsgrundlagen für Beschäftigtendaten (EuGH-Urteil C-34/21)",
  "Regolamento UE 2016/679 (GDPR)":
    "Verordnung (EU) 2016/679 (DSGVO)",
  "Garante della Renania-Palatinato, guida sulla localizzazione GPS dei dipendenti":
    "Landesbeauftragter für den Datenschutz Rheinland-Pfalz, Leitfaden zur GPS-Ortung von Beschäftigten",
  "Lista DSK dei trattamenti che richiedono una valutazione d'impatto (settore privato)":
    "DSK, Liste der Verarbeitungstätigkeiten, für die eine Datenschutz-Folgenabschätzung durchzuführen ist (nicht-öffentlicher Bereich)",
  "BfDI, elenco delle autorità garanti per la protezione dei dati dei Land":
    "BfDI, Verzeichnis der Datenschutzbehörden der Länder",
  "Garante di Amburgo, comunicato del 1 ottobre 2020 (sanzione H&M)":
    "Hamburgische Datenschutzbehörde, Pressemitteilung vom 1. Oktober 2020 (Bußgeld gegen H&M)",
  "BayLDA, autorità garante della Baviera":
    "BayLDA, die bayerische Datenschutzbehörde",
  "BlnBDI, autorità garante di Berlino":
    "BlnBDI, die Berliner Datenschutzbehörde",
  "Code du travail, art. L2312-38 (consultazione del CSE sui mezzi di controllo)":
    "Code du travail, Art. L2312-38 (Anhörung des CSE zu Kontrollmitteln)",
  "Code du travail, art. L1222-4 (nessuna raccolta da dispositivo non portato a conoscenza)":
    "Code du travail, Art. L1222-4 (keine Datenerhebung über ein Gerät, von dem die beschäftigte Person nichts weiß)",
  "CNIL, guida sulla geolocalizzazione dei veicoli dei dipendenti":
    "CNIL, Leitfaden zur Ortung der Fahrzeuge von Beschäftigten",
  "CNIL, lista dei trattamenti che richiedono una valutazione d'impatto (AIPD)":
    "CNIL, Liste der Verarbeitungstätigkeiten, für die eine Folgenabschätzung (AIPD) erforderlich ist",
  "CNIL, abolizione delle dichiarazioni preventive dal 25 maggio 2018":
    "CNIL, Abschaffung der vorherigen Anmeldungen ab dem 25. Mai 2018",
  "CNIL, dieci nuove sanzioni (procedura semplificata, 7 novembre 2023)":
    "CNIL, zehn neue Sanktionen (vereinfachtes Verfahren, 7. November 2023)",
  "CNIL, deliberazione SAN-2022-015 del 7 luglio 2022 (UBEEQO International, 175.000 €), su Légifrance":
    "CNIL, Beschluss SAN-2022-015 vom 7. Juli 2022 (UBEEQO International, 175.000 €), auf Légifrance",
  "Ley Organica 3/2018 (LOPDGDD), art. 90 (geolocalizzazione sul lavoro)":
    "Ley Orgánica 3/2018 (LOPDGDD), Art. 90 (Ortung am Arbeitsplatz)",
  "Estatuto de los Trabajadores, artt. 20.3 e 64":
    "Estatuto de los Trabajadores, Art. 20.3 und 64",
  "AEPD, FAQ sul GPS nelle auto aziendali usate dai lavoratori":
    "AEPD, FAQ zu GPS in Firmenwagen, die Beschäftigte nutzen",
  "AEPD, lista dei trattamenti che richiedono una valutazione d'impatto (art. 35.4 GDPR)":
    "AEPD, Liste der Verarbeitungstätigkeiten, für die eine Folgenabschätzung erforderlich ist (Art. 35 Abs. 4 DSGVO)",
  "AEPD, guida sulla protezione dei dati nei rapporti di lavoro":
    "AEPD, Leitfaden zum Datenschutz im Arbeitsverhältnis",
  "AEPD, sanzione PS/00454/2024 (Ares Capital, 200.000 €)":
    "AEPD, Sanktion PS/00454/2024 (Ares Capital, 200.000 €)",
  "Wet op de ondernemingsraden (WOR), art. 27 (diritto di consenso del consiglio aziendale)":
    "Wet op de ondernemingsraden (WOR, Betriebsrätegesetz), Art. 27 (Zustimmungsrecht des Betriebsrats)",
  "Autoriteit Persoonsgegevens, lista dei trattamenti che richiedono una DPIA":
    "Autoriteit Persoonsgegevens, Liste der Verarbeitungstätigkeiten, die eine DSFA erfordern",
  "Autoriteit Persoonsgegevens, condizioni per il controllo dei dipendenti":
    "Autoriteit Persoonsgegevens, Voraussetzungen für die Überwachung von Beschäftigten",
  "Autoriteit Persoonsgegevens, controllo dei dipendenti a distanza (GPS sulle auto aziendali)":
    "Autoriteit Persoonsgegevens, Fernüberwachung von Beschäftigten (GPS in Firmenwagen)",
  "Autoriteit Persoonsgegevens, sanzione per il trattamento delle impronte dei dipendenti":
    "Autoriteit Persoonsgegevens, Bußgeld für die Verarbeitung von Fingerabdrücken von Beschäftigten",
  "Codigo do Trabalho, art. 20 (mezzi di sorveglianza a distanza)":
    "Código do Trabalho (Arbeitsgesetzbuch), Art. 20 (Mittel der Fernüberwachung)",
  "CNPD, Deliberacao 7680/2014 (geolocalizzazione nel contesto lavorativo)":
    "CNPD, Deliberação 7680/2014 (Ortung im Arbeitsverhältnis)",
  "Lei 58/2019, art. 28 (relazioni di lavoro)":
    "Lei 58/2019, Art. 28 (Arbeitsverhältnisse)",
  "CNPD, videovigilanza: nel contesto lavorativo restano le condizioni del Codice del lavoro, senza l'autorizzazione della CNPD":
    "CNPD, Videoüberwachung: Im Arbeitsverhältnis gelten weiterhin die Voraussetzungen des Arbeitsgesetzbuchs, ohne Genehmigung der CNPD",
  "CNPD, valutazione d'impatto sulla protezione dei dati":
    "CNPD, Datenschutz-Folgenabschätzung",
  "CNPD, Regulamento n.º 798/2018 (lista dei trattamenti soggetti a valutazione d'impatto)":
    "CNPD, Regulamento n.º 798/2018 (Liste der Verarbeitungstätigkeiten, die einer Folgenabschätzung unterliegen)",
  "Tribunal da Relação de Lisboa, acórdão del 17 giugno 2026, proc. 2266/25.4T8TVD.L1-4 (GPS del veicolo di una lavoratrice)":
    "Tribunal da Relação de Lisboa, Urteil vom 17. Juni 2026, Az. 2266/25.4T8TVD.L1-4 (GPS im Fahrzeug einer Beschäftigten)",
  "CNPD, presentare una segnalazione":
    "CNPD, Meldung einreichen",
  "Datatilsynet, guida sul controllo dei dipendenti (Kontrol af medarbejdere)":
    "Datatilsynet, Leitfaden zur Überwachung von Beschäftigten (Kontrol af medarbejdere)",
  "Datatilsynet, lista dei trattamenti che richiedono una valutazione d'impatto":
    "Datatilsynet, Liste der Verarbeitungstätigkeiten, die eine Folgenabschätzung erfordern",
  "Datatilsynet, controlli 2020 sull'obbligo di informazione nelle misure di controllo dei dipendenti (GPS, videosorveglianza e altre)":
    "Datatilsynet, Kontrollen 2020 zur Informationspflicht bei Überwachungsmaßnahmen gegenüber Beschäftigten (GPS, Videoüberwachung und andere)",
  "Datatilsynet, aree prioritarie dei controlli nel 2026 (sorveglianza dei dipendenti)":
    "Datatilsynet, Schwerpunkte der Kontrollen 2026 (Überwachung von Beschäftigten)",
  "Datatilsynet (autorità garante danese)":
    "Datatilsynet (dänische Datenschutzbehörde)",
  "Lag 1976:580 om medbestammande i arbetslivet (MBL), § 11":
    "Lag 1976:580 om medbestämmande i arbetslivet (MBL, Mitbestimmungsgesetz), § 11",
  "IMY, controllo e sorveglianza dei dipendenti":
    "IMY, Kontrolle und Überwachung von Beschäftigten",
  "IMY, come usare i servizi di localizzazione (GPS) sui dipendenti":
    "IMY, Einsatz von Ortungsdiensten (GPS) bei Beschäftigten",
  "IMY, quando svolgere una valutazione d'impatto":
    "IMY, wann eine Folgenabschätzung durchzuführen ist",
  "IMY, presentare un reclamo":
    "IMY, Beschwerde einreichen",
  "IMY, sanzione al Comune di Skelleftea (riconoscimento facciale per le presenze)":
    "IMY, Bußgeld gegen die Gemeinde Skellefteå (Gesichtserkennung zur Anwesenheitserfassung)",
  "Arbeidsmiljoloven, kap. 9 (misure di controllo, §§ 9-1 e 9-2)":
    "Arbeidsmiljøloven (Arbeitsumweltgesetz), Kap. 9 (Kontrollmaßnahmen, §§ 9-1 und 9-2)",
  "Datatilsynet (Norvegia), GPS e tracciamento dei veicoli aziendali":
    "Datatilsynet (Norwegen), GPS und Ortung von Firmenfahrzeugen",
  "Datatilsynet (Norvegia), quando svolgere una valutazione d'impatto":
    "Datatilsynet (Norwegen), wann eine Folgenabschätzung durchzuführen ist",
  "Datatilsynet (autorità garante norvegese)":
    "Datatilsynet (norwegische Datenschutzbehörde)",
  "Personvernnemnda, PVN-2017-07 (uso del GPS per controllare le ore del dipendente)":
    "Personvernnemnda, PVN-2017-07 (Einsatz von GPS zur Kontrolle der Arbeitszeit einer beschäftigten Person)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96 (misure di controllo che toccano la dignita: consenso del consiglio aziendale)":
    "Arbeitsverfassungsgesetz (ArbVG), § 96 (Kontrollmaßnahmen, die die Menschenwürde berühren: Zustimmung des Betriebsrats)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96a (sistemi che trattano dati personali dei lavoratori)":
    "Arbeitsverfassungsgesetz (ArbVG), § 96a (Systeme, die personenbezogene Daten von Beschäftigten verarbeiten)",
  "DSFA-V, regolamento sui trattamenti che richiedono una valutazione d'impatto":
    "DSFA-V, Verordnung über Verarbeitungstätigkeiten, die eine Datenschutz-Folgenabschätzung erfordern",
  "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (fine del registro DVR)":
    "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (Ende des DVR-Registers)",
  "Datenschutzbehörde (DSB), decisione 2022-0.021.739 (stop al GPS sui veicoli aziendali)":
    "Datenschutzbehörde (DSB), Bescheid 2022-0.021.739 (Stopp für GPS in Firmenfahrzeugen)",
  "Datenschutzbehörde (DSB), procedura di reclamo":
    "Datenschutzbehörde (DSB), Beschwerdeverfahren",
  "CCT n. 81 del 26 aprile 2002 (controllo delle comunicazioni elettroniche in rete)":
    "Kollektivarbeitsabkommen (KAA) Nr. 81 vom 26. April 2002 (Kontrolle der elektronischen Kommunikation im Netz)",
  "APD/GBA, geolocalizzazione dei lavoratori":
    "APD/GBA, Ortung von Beschäftigten",
  "APD/GBA, valutazione d'impatto sulla protezione dei dati":
    "APD/GBA, Datenschutz-Folgenabschätzung",
  "APD/GBA, presentare un reclamo":
    "APD/GBA, Beschwerde einreichen",
  "Chambre Contentieuse APD/GBA, decisione 114/2024 (impronte per le presenze, 45.000 euro), testo integrale":
    "Streitkammer der APD/GBA, Entscheidung 114/2024 (Fingerabdrücke zur Anwesenheitserfassung, 45.000 €), Volltext",
  "ICO, guida sul monitoraggio dei lavoratori (UK GDPR)":
    "ICO, Leitlinien zur Überwachung von Beschäftigten (UK GDPR)",
  "ICO, sorveglianza nei veicoli":
    "ICO, Überwachung in Fahrzeugen",
  "ICO, quando serve una DPIA":
    "ICO, wann eine DSFA erforderlich ist",
  "ICO, provvedimento sul monitoraggio GPS (Home Office, 2024)":
    "ICO, Durchsetzungsmaßnahme zur GPS-Überwachung (Home Office, 2024)",
  "ICO, presentare una segnalazione":
    "ICO, Bedenken melden",
  "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission dal 30/09/2026)":
    "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission ab dem 30. September 2026)",
  "Regolamento UE 2016/679 (GDPR) come UK GDPR":
    "Verordnung (EU) 2016/679 (DSGVO) als UK GDPR",
  "DPC, guida sul tracciamento dei veicoli aziendali (maggio 2020)":
    "DPC, Leitfaden zur Ortung von Firmenfahrzeugen (Mai 2020)",
  "DPC, pagina sul tracciamento dei veicoli dei dipendenti (aggiornata a maggio 2026)":
    "DPC, Seite zur Ortung von Fahrzeugen von Beschäftigten (Stand Mai 2026)",
  "DPC, lista dei trattamenti che richiedono una DPIA":
    "DPC, Liste der Verarbeitungstätigkeiten, die eine DSFA erfordern",
  "DPC, consultazione preventiva":
    "DPC, vorherige Konsultation",
  "DPC, presentare un reclamo":
    "DPC, Beschwerde einreichen",
  "DPC, decisione Limerick City and County Council (dicembre 2021)":
    "DPC, Entscheidung zum Limerick City and County Council (Dezember 2021)",
  "DPC, sentenza Doolin v. DPC (High Court, febbraio 2020)":
    "DPC, Urteil Doolin v. DPC (High Court, Februar 2020)",
  "IFPDT/FDPIC, mezzi tecnici di sorveglianza sul luogo di lavoro":
    "EDÖB, technische Überwachungsmittel am Arbeitsplatz",
  "IFPDT/FDPIC, trattamento dei dati da parte del datore di lavoro (CO art. 328b)":
    "EDÖB, Datenbearbeitung durch den Arbeitgeber (OR Art. 328b)",
  "IFPDT/FDPIC, valutazione d'impatto sulla protezione dei dati (nLPD art. 22)":
    "EDÖB, Datenschutz-Folgenabschätzung (nDSG Art. 22)",
  "Legge federale sulla protezione dei dati (nLPD), art. 22, 23 e 60-65 (Fedlex)":
    "Bundesgesetz über den Datenschutz (nDSG), Art. 22, 23 und 60-65 (Fedlex)",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo":
    "Verordnung (EU) 2016/679 (DSGVO), zum Vergleich",
  "Legge 190/2018, art. 5 (monitoraggio dei dipendenti)":
    "Gesetz 190/2018, Art. 5 (Überwachung von Beschäftigten)",
  "Codul Muncii, art. 40 (obblighi del datore), Portal Legislativ":
    "Codul Muncii (Arbeitsgesetzbuch), Art. 40 (Pflichten des Arbeitgebers), Legislativportal",
  "ANSPDCP, comunicato del 23 marzo 2023 (sanzione Tehnoplus, GPS)":
    "ANSPDCP, Pressemitteilung vom 23. März 2023 (Bußgeld gegen Tehnoplus, GPS)",
  "ANSPDCP, Decizia 174/2018 (lista trattamenti che richiedono DPIA), Monitorul Oficial 919/31.10.2018, art. 1 lett. d e g":
    "ANSPDCP, Beschluss 174/2018 (Liste der Verarbeitungstätigkeiten, die eine DSFA erfordern), Monitorul Oficial 919/31.10.2018, Art. 1 Buchst. d und g",
  "ANSPDCP, presentazione dei reclami":
    "ANSPDCP, Einreichung von Beschwerden",
  "Kodeks pracy, art. 22(2) (monitoraggio), testo consolidato Dz.U. 2026 poz. 1245 (in vigore dal 24 settembre 2026)":
    "Kodeks pracy (Arbeitsgesetzbuch), Art. 22(2) (Überwachung), konsolidierte Fassung Dz.U. 2026 Pos. 1245 (in Kraft seit 24. September 2026)",
  "Legge del 4 dicembre 2025 di modifica del Codice del lavoro, Dz.U. 2026 poz. 25 (art. 22(2) par. 8: \"su carta o in forma elettronica\", in vigore dal 27 gennaio 2026)":
    "Gesetz vom 4. Dezember 2025 zur Änderung des Arbeitsgesetzbuchs, Dz.U. 2026 Pos. 25 (Art. 22(2) Abs. 8: „in Papierform oder elektronisch“, in Kraft seit 27. Januar 2026)",
  "Kodeks pracy, art. 22(3) par. 3-4 (altre forme di monitoraggio, tra cui il GPS), testo consolidato Dz.U. 2026 poz. 1245":
    "Kodeks pracy, Art. 22(3) Abs. 3-4 (weitere Formen der Überwachung, darunter GPS), konsolidierte Fassung Dz.U. 2026 Pos. 1245",
  "UODO, guida alla protezione dei dati sul luogo di lavoro":
    "UODO, Leitfaden zum Datenschutz am Arbeitsplatz",
  "UODO, lista dei trattamenti che richiedono una DPIA (M.P. 2019 poz. 666)":
    "UODO, Liste der Verarbeitungstätigkeiten, die eine DSFA erfordern (M.P. 2019 Pos. 666)",
  "UODO, presentare un reclamo":
    "UODO, Beschwerde einreichen",
  "UODO, sanzione Centrum Medyczne Ujastek (monitoraggio non comunicato ai dipendenti)":
    "UODO, Bußgeld gegen Centrum Medyczne Ujastek (den Beschäftigten nicht mitgeteilte Überwachung)",
  "Zakonik prace (Codice del lavoro), art. 316":
    "Zákoník práce (Arbeitsgesetzbuch), Art. 316",
  "Stanovisko 2/2017 sul trattamento dei dati sul posto di lavoro, pubblicato dall UOOU":
    "Stellungnahme 2/2017 zur Datenverarbeitung am Arbeitsplatz, veröffentlicht vom UOOU",
  "UOOU, lista dei trattamenti che richiedono una DPIA":
    "UOOU, Liste der Verarbeitungstätigkeiten, die eine DSFA erfordern",
  "UOOU, presentare una segnalazione":
    "UOOU, Meldung einreichen",
  "Tribunale municipale di Praga 6 A 42/2013 (Ceska posta, GPS sui portalettere), sentenza":
    "Stadtgericht Prag, 6 A 42/2013 (Česká pošta, GPS bei Briefzustellern), Urteil",
  "epravo.cz, GPS monitoring zamestnancu podruhe (riporta una multa di 80.000 CZK e 7.770 portalettere, non confermati da fonti ufficiali)":
    "epravo.cz, GPS monitoring zaměstnanců podruhé (berichtet von einem Bußgeld von 80.000 CZK und 7.770 Briefzustellern, von amtlichen Quellen nicht bestätigt)",
  "UOOU, relazione annuale 2014, controlli su Skoda Auto e Plzensky Prazdroj (GPS nei veicoli aziendali)":
    "UOOU, Jahresbericht 2014, Kontrollen bei Škoda Auto und Plzeňský Prazdroj (GPS in Firmenfahrzeugen)",
  "HDPA (Garante greco), FAQ sui rapporti di lavoro (geolocalizzazione)":
    "HDPA (griechische Datenschutzbehörde), FAQ zu Arbeitsverhältnissen (Ortung)",
  "Legge 4624/2019, art. 27 (dati dei dipendenti), traduzione ufficiale HDPA":
    "Gesetz 4624/2019, Art. 27 (Beschäftigtendaten), amtliche Übersetzung der HDPA",
  "HDPA, Decisione 65/2018 (lista dei trattamenti che richiedono DPIA)":
    "HDPA, Beschluss 65/2018 (Liste der Verarbeitungstätigkeiten, die eine DSFA erfordern)",
  "HDPA, sanzione a un datore per geolocalizzazione (16 febbraio 2024)":
    "HDPA, Bußgeld gegen einen Arbeitgeber wegen Ortung (16. Februar 2024)",
  "HDPA (Garante greco), pagina ufficiale":
    "HDPA (griechische Datenschutzbehörde), offizielle Seite",
  "Legge sulla protezione della privacy nella vita lavorativa (759/2004) - testo consolidato in finlandese (Finlex)":
    "Gesetz über den Schutz der Privatsphäre im Arbeitsleben (759/2004), konsolidierte Fassung auf Finnisch (Finlex)",
  "Garante finlandese (Tietosuojavaltuutettu), FAQ sulla vita lavorativa":
    "Finnischer Datenschutzbeauftragter (Tietosuojavaltuutettu), FAQ zum Arbeitsleben",
  "Garante finlandese, lista dei trattamenti che richiedono una DPIA":
    "Finnischer Datenschutzbeauftragter, Liste der Verarbeitungstätigkeiten, die eine DSFA erfordern",
  "Garante finlandese, segnalare una violazione":
    "Finnischer Datenschutzbeauftragter, Verstoß melden",
  "Garante finlandese, sanzione per dati di localizzazione usati per la rilevazione orario (2021)":
    "Finnischer Datenschutzbeauftragter, Bußgeld für Standortdaten, die zur Arbeitszeiterfassung genutzt wurden (2021)",
  "Zakon o zaštiti na radu (legge sicurezza sul lavoro), art. 43 (dispositivi di sorveglianza)":
    "Zakon o zaštiti na radu (Arbeitsschutzgesetz), Art. 43 (Überwachungsgeräte)",
  "Zakon o radu (legge sul lavoro), art. 29 (dati dei lavoratori) e art. 150 (consultazione del consiglio dei lavoratori)":
    "Zakon o radu (Arbeitsgesetz), Art. 29 (Beschäftigtendaten) und Art. 150 (Anhörung des Betriebsrats)",
  "AZOP (Garante croato), trattamento dei dati dei dipendenti tramite GPS":
    "AZOP (kroatische Datenschutzbehörde), Verarbeitung von Beschäftigtendaten über GPS",
  "AZOP, lista dei trattamenti che richiedono una DPIA":
    "AZOP, Liste der Verarbeitungstätigkeiten, die eine DSFA erfordern",
  "AZOP, richiesta di accertamento di violazione (reclamo)":
    "AZOP, Antrag auf Feststellung eines Verstoßes (Beschwerde)",
  "AZOP (Garante croato), pagina ufficiale":
    "AZOP (kroatische Datenschutzbehörde), offizielle Seite",
  "IP-RS (Garante sloveno), linee guida sull'uso dei dispositivi GPS":
    "IP-RS (slowenische Datenschutzbehörde), Leitlinien zum Einsatz von GPS-Geräten",
  "IP-RS, parere 'Sledenje zaposlenim' (tracciamento dei dipendenti)":
    "IP-RS, Stellungnahme „Sledenje zaposlenim“ (Ortung von Beschäftigten)",
  "IP-RS, comunicato del 15.04.2026: multa di 6.000 euro a un'azienda pubblica per GPS sui dipendenti":
    "IP-RS, Pressemitteilung vom 15.04.2026: Bußgeld von 6.000 € gegen einen öffentlichen Versorgungsbetrieb wegen GPS bei Beschäftigten",
  "Zakon o delovnih razmerjih (ZDR-1), art. 48 (dati dei lavoratori)":
    "Zakon o delovnih razmerjih (ZDR-1, Arbeitsverhältnisgesetz), Art. 48 (Beschäftigtendaten)",
  "Zakon o sodelovanju delavcev pri upravljanju (ZSDU), art. 89-90 (informazione del consiglio dei lavoratori)":
    "Zakon o sodelovanju delavcev pri upravljanju (ZSDU, Mitbestimmungsgesetz), Art. 89-90 (Unterrichtung des Betriebsrats)",
  "IP-RS, elenco dei trattamenti per cui e' obbligatoria la valutazione d'impatto (art. 35.4 GDPR)":
    "IP-RS, Liste der Verarbeitungstätigkeiten, für die eine Folgenabschätzung verpflichtend ist (Art. 35 Abs. 4 DSGVO)",
  "IP-RS, presentare una segnalazione":
    "IP-RS, Meldung einreichen",
  "Zakonnik prace (Codice del lavoro), art. 13 par. 4 (monitoraggio dei dipendenti)":
    "Zákonník práce (Arbeitsgesetzbuch), Art. 13 Abs. 4 (Überwachung von Beschäftigten)",
  "UOOU SR (Garante slovacco), procedura di tutela":
    "UOOU SR (slowakische Datenschutzbehörde), Schutzverfahren",
  "Parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli, versione slovacca pubblicata dall UOOU SR":
    "Stellungnahme 2/2017 zur Datenverarbeitung am Arbeitsplatz (WP249), Abschnitt 5.7 Fahrzeuge, slowakische Fassung, veröffentlicht vom UOOU SR",
  "Lista slovacca dei trattamenti soggetti a DPIA (punti 3 e 9), pubblicata dall EDPB":
    "Slowakische Liste der Verarbeitungstätigkeiten, die einer DSFA unterliegen (Punkte 3 und 9), veröffentlicht vom EDSA",
  "UOOU SR, guida sulla liceita del trattamento (versione aggiornata 22/01/2019), esempio del par. 13 c. 4 del Codice del lavoro":
    "UOOU SR, Leitfaden zur Rechtmäßigkeit der Verarbeitung (aktualisierte Fassung vom 22. Januar 2019), Beispiel zu Art. 13 Abs. 4 des Arbeitsgesetzbuchs",
  "UOOU SR, presentare una proposta di avvio del procedimento (reclamo)":
    "UOOU SR, Antrag auf Verfahrenseinleitung (Beschwerde)",
  "UOOU SR, relazione sullo stato della protezione dei dati 2025 (par. 9.2.1, trattamento di dati di geolocalizzazione)":
    "UOOU SR, Bericht zum Stand des Schutzes personenbezogener Daten 2025 (Abschnitt 9.2.1, Verarbeitung von Standortdaten)",
  "Codice del lavoro (Mt.), art. 9 (diritti della persona) e art. 11/A (controllo dei lavoratori)":
    "Arbeitsgesetzbuch (Mt.), Art. 9 (Persönlichkeitsrechte) und Art. 11/A (Kontrolle der Beschäftigten)",
  "NAIH, guida sui trattamenti sul luogo di lavoro (novembre 2016, precedente al GDPR), par. 5 sul GPS":
    "NAIH, Leitfaden zur Datenverarbeitung am Arbeitsplatz (November 2016, vor der DSGVO), Abschnitt 5 zu GPS",
  "NAIH, lista dei trattamenti che richiedono una valutazione d'impatto":
    "NAIH, Liste der Verarbeitungstätigkeiten, die eine Folgenabschätzung erfordern",
  "NAIH, sanzione Auchan (monitoraggio dei dipendenti)":
    "NAIH, Bußgeld gegen Auchan (Überwachung von Beschäftigten)",
  "NAIH (Garante ungherese), pagina ufficiale":
    "NAIH (ungarische Datenschutzbehörde), offizielle Seite",
  "Legge sulla protezione dei dati (ZZLD), testo consolidato sul sito del CPDP (art. 25д e 25и; ultima modifica ДВ 70/2024)":
    "Gesetz zum Schutz personenbezogener Daten (ZZLD), konsolidierte Fassung auf der Website der CPDP (Art. 25д und 25и; zuletzt geändert durch ДВ 70/2024)",
  "CPDP (Garante bulgaro), guida sulla privacy sul luogo di lavoro (2014, anteriore al GDPR), par. 3.5.2 sistemi GPS":
    "CPDP (bulgarische Datenschutzbehörde), Leitfaden zur Privatsphäre am Arbeitsplatz (2014, vor der DSGVO), Abschnitt 3.5.2 GPS-Systeme",
  "CPDP, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "CPDP, Liste der Verarbeitungstätigkeiten, die eine DSFA erfordern (Art. 35 Abs. 4)",
  "CPDP, parere su LUKOIL (riuso della videosorveglianza per valutare i dipendenti)":
    "CPDP, Stellungnahme zu LUKOIL (Weiterverwendung der Videoüberwachung zur Bewertung von Beschäftigten)",
  "CPDP (Garante bulgaro), pagina ufficiale":
    "CPDP (bulgarische Datenschutzbehörde), offizielle Seite",
  "AKI (Garante estone), FAQ sui rapporti di lavoro (GPS)":
    "AKI (estnische Datenschutzbehörde), FAQ zu Arbeitsverhältnissen (GPS)",
  "AKI, guida per il personale sui dati nel rapporto di lavoro (2011, ante-GDPR), punto 2.9 GPS":
    "AKI, Leitfaden für Personalverantwortliche zu Daten im Arbeitsverhältnis (2011, vor der DSGVO), Punkt 2.9 GPS",
  "Legge sul fiduciario dei lavoratori (Töötajate usaldusisiku seadus), §§ 17 e 20 - Riigi Teataja":
    "Gesetz über die Vertrauensperson der Beschäftigten (Töötajate usaldusisiku seadus), §§ 17 und 20 - Riigi Teataja",
  "Legge estone sulla protezione dei dati personali (Isikuandmete kaitse seadus), §§ 62-73 - Riigi Teataja":
    "Estnisches Gesetz zum Schutz personenbezogener Daten (Isikuandmete kaitse seadus), §§ 62-73 - Riigi Teataja",
  "AKI, materiale sul trattamento dei dati nel rapporto di lavoro":
    "AKI, Material zur Datenverarbeitung im Arbeitsverhältnis",
  "AKI, valutazione d'impatto (capitolo 5)":
    "AKI, Folgenabschätzung (Kapitel 5)",
  "AKI, presentare un reclamo":
    "AKI, Beschwerde einreichen",
  "AKI (Garante estone), pagina ufficiale":
    "AKI (estnische Datenschutzbehörde), offizielle Seite",
  "DVI (Garante lettone), posso tracciare i viaggi del mio dipendente? (GPS)":
    "DVI (lettische Datenschutzbehörde), Darf ich die Fahrten meiner Beschäftigten orten? (GPS)",
  "Legge lettone sul trattamento dei dati delle persone fisiche (Fizisko personu datu apstrādes likums) - Likumi.lv":
    "Lettisches Gesetz über die Verarbeitung personenbezogener Daten (Fizisko personu datu apstrādes likums) - Likumi.lv",
  "DVI, videosorveglianza dei dipendenti in presenza (16/09/2022)":
    "DVI, Videoüberwachung von Beschäftigten vor Ort (16. September 2022)",
  "DVI, videosorveglianza dei dipendenti nel lavoro da remoto":
    "DVI, Videoüberwachung von Beschäftigten im Homeoffice",
  "DVI, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "DVI, Liste der Verarbeitungstätigkeiten, die eine DSFA erfordern (Art. 35 Abs. 4)",
  "DVI, presentare un reclamo":
    "DVI, Beschwerde einreichen",
  "Gruppo art. 29, parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli":
    "Artikel-29-Datenschutzgruppe, Stellungnahme 2/2017 zur Datenverarbeitung am Arbeitsplatz (WP249), Abschnitt 5.7 Fahrzeuge",
  "VDAI, lista dei trattamenti che richiedono una DPIA (voce 10: monitoraggio dei dipendenti)":
    "VDAI, Liste der Verarbeitungstätigkeiten, die eine DSFA erfordern (Punkt 10: Überwachung von Beschäftigten)",
  "VDAI, decisione sul trattamento della corrispondenza personale di un dipendente (2022)":
    "VDAI, Entscheidung zur Verarbeitung der privaten Korrespondenz einer beschäftigten Person (2022)",
  "VDAI, elenco delle decisioni (multe, ordini e altro) fino al 2025":
    "VDAI, Verzeichnis der Entscheidungen (Bußgelder, Anordnungen und weitere) bis 2025",
  "VDAI (Garante lituano), servizi e reclami":
    "VDAI (litauische Datenschutzbehörde), Leistungen und Beschwerden",
  "Loi du 1er août 2018, art. 71 (nuovo art. L.261-1 del Code du travail) e art. 72 (abrogazione della legge del 2 agosto 2002), Legilux":
    "Loi du 1er août 2018, Art. 71 (neuer Art. L.261-1 des Code du travail) und Art. 72 (Aufhebung des Gesetzes vom 2. August 2002), Legilux",
  "Code du travail, art. L.261-1 (sorveglianza dei lavoratori) - riproduzione CNPD":
    "Code du travail, Art. L.261-1 (Überwachung von Beschäftigten) - Wiedergabe der CNPD",
  "CNPD, geolocalizzazione dei veicoli: necessità e proporzionalità":
    "CNPD, Ortung von Fahrzeugen: Erforderlichkeit und Verhältnismäßigkeit",
  "CNPD, geolocalizzazione: valutazione d'impatto (AIPD)":
    "CNPD, Ortung: Folgenabschätzung (AIPD)",
  "CNPD, decisione 11FR/2021 (sanzione geolocalizzazione veicoli di servizio)":
    "CNPD, Entscheidung 11FR/2021 (Sanktion wegen Ortung von Dienstfahrzeugen)",
  "CNPD, presentare un reclamo (Faire valoir vos droits)":
    "CNPD, Beschwerde einreichen (Faire valoir vos droits)",
  "Regole n. 50/2023 sulla sorveglianza elettronica (Gazzetta ufficiale)":
    "Regeln Nr. 50/2023 zur elektronischen Überwachung (Amtsblatt)",
  "Regole 1329/2025 di Persónuvernd (modifica delle Regole 50/2023, art. 3: 90 giorni)":
    "Regeln 1329/2025 der Persónuvernd (Änderung der Regeln 50/2023, Art. 3: 90 Tage)",
  "Persónuvernd (Garante islandese), FAQ sul GPS e i dispositivi di localizzazione":
    "Persónuvernd (isländische Datenschutzbehörde), FAQ zu GPS und Ortungsgeräten",
  "Persónuvernd, lista dei trattamenti che richiedono una DPIA (Auglýsing nr. 828/2019)":
    "Persónuvernd, Liste der Verarbeitungstätigkeiten, die eine DSFA erfordern (Auglýsing nr. 828/2019)",
  "Persónuvernd, presentare un reclamo":
    "Persónuvernd, Beschwerde einreichen",
  "Persónuvernd, decisione Islandspostur (uso illecito del GPS su un dipendente)":
    "Persónuvernd, Entscheidung zu Íslandspóstur (unzulässiger GPS-Einsatz bei einer beschäftigten Person)",
  "IDPC (Garante maltese), guida al settore del lavoro":
    "IDPC (maltesische Datenschutzbehörde), Leitfaden für den Arbeitsbereich",
  "IDPC, valutazione d'impatto sulla protezione dei dati":
    "IDPC, Datenschutz-Folgenabschätzung",
  "IDPC, presentare un reclamo":
    "IDPC, Beschwerde einreichen",
  "IDPC, decisione CDP/COMP/579/2025 del 20 aprile 2026 (videosorveglianza della mensa aziendale)":
    "IDPC, Entscheidung CDP/COMP/579/2025 vom 20. April 2026 (Videoüberwachung der Betriebskantine)",
  "Legge 125(I)/2018 sulla protezione dei dati (art. 36: abrogazione delle leggi 2001-2012)":
    "Gesetz 125(I)/2018 zum Datenschutz (Art. 36: Aufhebung der Gesetze von 2001-2012)",
  "Commissario cipriota, registro delle attività: abolito l'obbligo di notifica al Commissario (art. 30 GDPR)":
    "Zyprischer Beauftragter, Verzeichnis von Verarbeitungstätigkeiten: Die Pflicht zur Meldung an den Beauftragten ist abgeschafft (Art. 30 DSGVO)",
  "Commissario cipriota, valutazione d'impatto (elenco indicativo: monitoraggio sistematico dei dipendenti, GPS)":
    "Zyprischer Beauftragter, Folgenabschätzung (Orientierungsliste: systematische Überwachung von Beschäftigten, GPS)",
  "GDPR, art. 13 (informazione), testo ufficiale EUR-Lex":
    "DSGVO, Art. 13 (Informationspflicht), amtlicher Text auf EUR-Lex",
  "GDPR, art. 6(1)(f) e considerando 43 (base giuridica e squilibrio fra le parti), testo ufficiale EUR-Lex":
    "DSGVO, Art. 6 Abs. 1 Buchst. f und Erwägungsgrund 43 (Rechtsgrundlage und Ungleichgewicht zwischen den Parteien), amtlicher Text auf EUR-Lex",
  "Garante cipriota, pagina ufficiale":
    "Zyprischer Beauftragter, offizielle Seite",
  "Commissario cipriota, decisione del 25.10.2019 sul Gruppo Louis (strumento Bradford Factor)":
    "Zyprischer Beauftragter, Entscheidung vom 25.10.2019 zur Louis-Gruppe (Bradford-Faktor-Instrument)",
  "Legge 124/2024 sulla protezione dei dati personali (in vigore dal 1 febbraio 2025)":
    "Gesetz 124/2024 zum Schutz personenbezogener Daten (in Kraft seit 1. Februar 2025)",
  "IDP, linea guida n. 03 del 30.04.2025 sulla videosorveglianza":
    "IDP, Leitlinie Nr. 03 vom 30.04.2025 zur Videoüberwachung",
  "IDP (Garante albanese), pagina ufficiale":
    "IDP (albanische Datenschutzbehörde), offizielle Seite",
  "Legge sulla protezione dei dati (LPDP, 87/2018) - testo ufficiale":
    "Gesetz zum Schutz personenbezogener Daten (LPDP, 87/2018) - amtlicher Text",
  "Poverenik, decisione sulla lista dei trattamenti che richiedono una DPIA (Gazzetta 45/2019)":
    "Poverenik, Beschluss über die Liste der Verarbeitungstätigkeiten, die eine DSFA erfordern (Amtsblatt 45/2019)",
  "Odluka sulla lista dei trattamenti che richiedono DPIA (Sl. glasnik RS 45/2019 e 112/2020, testo consolidato)":
    "Odluka über die Liste der Verarbeitungstätigkeiten, die eine DSFA erfordern (Sl. glasnik RS 45/2019 und 112/2020, konsolidierte Fassung)",
  "Poverenik (Garante serbo), competenze e contatti":
    "Poverenik (serbischer Beauftragter), Zuständigkeiten und Kontakt",
  "Danas, ispezione straordinaria del Poverenik al JKP Mediana di Nis (7 aprile 2026)":
    "Danas, außerordentliche Kontrolle des Poverenik bei JKP Mediana in Niš (7. April 2026)",
  "N1, GPS su 80 cassonetti del JKP Mediana di Nis (protesta dei lavoratori, gennaio 2026)":
    "N1, GPS an 80 Müllcontainern bei JKP Mediana in Niš (Protest der Beschäftigten, Januar 2026)",
  "Legge sulla protezione dei dati personali (Gazzetta BiH 12/25), testo pubblicato dall AZLP":
    "Gesetz zum Schutz personenbezogener Daten (Amtsblatt BiH 12/25), Text veröffentlicht von der AZLP",
  "AZLP, decisione del 10.11.2025 sulla lista dei trattamenti che richiedono una DPIA (punto 8: dati dei dipendenti, controllo di lavoro e spostamenti)":
    "AZLP, Beschluss vom 10.11.2025 über die Liste der Verarbeitungstätigkeiten, die eine DSFA erfordern (Punkt 8: Beschäftigtendaten, Kontrolle von Arbeit und Bewegungen)",
  "AZLP (Garante bosniaco), pagina ufficiale":
    "AZLP (bosnische Datenschutzbehörde), offizielle Seite",
  "Legge sulla protezione dei dati personali, Gazzetta ufficiale BiH 12/25":
    "Gesetz zum Schutz personenbezogener Daten, Amtsblatt BiH 12/25",
  "Legge sulla protezione dei dati personali, testo consolidato pubblicato dall'AZLP (artt. 26-28 e sanzioni, art. 74)":
    "Gesetz zum Schutz personenbezogener Daten, konsolidierte Fassung, veröffentlicht von der AZLP (Art. 26-28 und Sanktionen, Art. 74)",
  "Nuova legge sulla protezione dei dati personali, Službeni list CG 133/2026 (pubblicata l'11.9.2026, in vigore dal 19.9.2026, si applica dal 19.3.2027, art. 106; artt. 88, 89 e 105)":
    "Neues Gesetz zum Schutz personenbezogener Daten, Službeni list CG 133/2026 (veröffentlicht am 11.9.2026, in Kraft seit 19.9.2026, anwendbar ab 19.3.2027, Art. 106; Art. 88, 89 und 105)",
  "AZLP, posizione del Consiglio sull'uso del GPS nei veicoli di servizio (29.04.2025)":
    "AZLP, Stellungnahme des Rates zum Einsatz von GPS in Dienstfahrzeugen (29.04.2025)",
  "AZLP (Garante montenegrino), contatti":
    "AZLP (montenegrinische Datenschutzbehörde), Kontakt",
  "AZLP, moduli (richiesta di tutela dei diritti)":
    "AZLP, Formulare (Antrag auf Schutz der Rechte)",
  "Regolamento UE 2016/679 (GDPR), riferimento comparativo":
    "Verordnung (EU) 2016/679 (DSGVO), zum Vergleich",
  "Legge sulla protezione dei dati (LPDP, Gazzetta 42/20) - traduzione inglese non ufficiale pubblicata dall'AZLP":
    "Gesetz zum Schutz personenbezogener Daten (LPDP, Amtsblatt 42/20) - inoffizielle englische Übersetzung, veröffentlicht von der AZLP",
  "AZLP, lista dei trattamenti che richiedono la DPIA (11.05.2020, punti 10 e 12: posizione e spostamenti, dati dei lavoratori)":
    "AZLP, Liste der Verarbeitungstätigkeiten, die eine DSFA erfordern (11.05.2020, Punkte 10 und 12: Standort und Bewegungen, Beschäftigtendaten)",
  "AZLP, atti subordinati (regolamenti e liste), pagina ufficiale":
    "AZLP, untergesetzliche Vorschriften (Verordnungen und Listen), offizielle Seite",
  "AZLP (Garante macedone), pagina ufficiale e reclami":
    "AZLP (nordmazedonische Datenschutzbehörde), offizielle Seite und Beschwerden",
  "Legge dell'Ucraina n. 2297-VI sulla protezione dei dati personali (2010)":
    "Gesetz der Ukraine Nr. 2297-VI über den Schutz personenbezogener Daten (2010)",
  "Ordine del Difensore civico 1/02-14: procedura di notifica dei trattamenti a rischio particolare":
    "Anordnung des Ombudsmanns 1/02-14: Verfahren zur Meldung von Verarbeitungen mit besonderem Risiko",
  "Codice ucraino delle infrazioni amministrative, art. 188-39 (violazioni in materia di dati personali)":
    "Ukrainisches Gesetzbuch über Ordnungswidrigkeiten, Art. 188-39 (Verstöße gegen das Datenschutzrecht)",
  "Difensore civico (Garante ucraino), protezione dei dati personali":
    "Ombudsmann (ukrainische Datenschutzbehörde), Schutz personenbezogener Daten",
  "ICLG, protezione dei dati in Ucraina (basi giuridiche, DPIA)":
    "ICLG, Datenschutz in der Ukraine (Rechtsgrundlagen, DSFA)",
  "CNPDCP, presentare un reclamo":
    "CNPDCP, Beschwerde einreichen",
  "Legge 195/2024 sulla protezione dei dati personali, in vigore dal 23 agosto 2026 (art. 35 DPIA, art. 88 sanzioni), testo inglese pubblicato dal CNPDCP":
    "Gesetz 195/2024 zum Schutz personenbezogener Daten, in Kraft seit 23. August 2026 (Art. 35 DSFA, Art. 88 Sanktionen), englischer Text, veröffentlicht von der CNPDCP",
  "CNPDCP, ordine 27/2022: lista dei trattamenti soggetti a valutazione d'impatto (modificata dall'ordine 39/2026)":
    "CNPDCP, Anordnung 27/2022: Liste der Verarbeitungstätigkeiten, die einer Folgenabschätzung unterliegen (geändert durch Anordnung 39/2026)",
  "Legge della Repubblica di Bielorussia n. 99-Z del 7 maggio 2021 sulla protezione dei dati personali (NPDPC)":
    "Gesetz der Republik Belarus Nr. 99-Z vom 7. Mai 2021 über den Schutz personenbezogener Daten (NPDPC)",
  "Ordine OAC n. 94 del 1 giugno 2022: Registro degli operatori di dati personali (casi di iscrizione)":
    "OAC-Anordnung Nr. 94 vom 1. Juni 2022: Register der Betreiber personenbezogener Daten (Fälle der Eintragung)",
  "NPDPC (N. Shved), responsabilita amministrativa per violazione della normativa sui dati personali (art. 23.7 CAO)":
    "NPDPC (N. Shved), verwaltungsrechtliche Haftung bei Verstößen gegen das Datenschutzrecht (Art. 23.7 CAO)",
  "NPDPC (Garante bielorusso), informazioni e contatti":
    "NPDPC (belarussische Datenschutzbehörde), Informationen und Kontakt",
  "GRATA, protezione dei dati e privacy dei dipendenti in Bielorussia":
    "GRATA, Datenschutz und Privatsphäre von Beschäftigten in Belarus",
  "DLA Piper, applicazione e sanzioni in Bielorussia":
    "DLA Piper, Rechtsdurchsetzung und Sanktionen in Belarus",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo lontano":
    "Verordnung (EU) 2016/679 (DSGVO), entfernter Vergleichspunkt",
  "ANPD, denúncia di inadempimento della LGPD":
    "ANPD, Meldung eines Verstoßes gegen die LGPD",
  "ANPD, canale per il titolare dei dati":
    "ANPD, Kanal für betroffene Personen",
  "Lei n. 15.352/2026 (l’ANPD diventa agência reguladora)":
    "Lei n. 15.352/2026 (die ANPD wird zur Regulierungsbehörde, agência reguladora)",
  "BfDI, elenco delle autorità dei Land (per trovare la tua)":
    "BfDI, Verzeichnis der Landesbehörden (um Ihre zu finden)",
  "BayLDA (esempio, Baviera)":
    "BayLDA (Beispiel: Bayern)",
  "CNIL, presentare un reclamo":
    "CNIL, Beschwerde einreichen",
  "AEPD, sede elettronica":
    "AEPD, elektronische Behörden-Plattform (sede electrónica)",
  "CNPD, segnalazioni":
    "CNPD, Meldungen",
  "IMY, reclami":
    "IMY, Beschwerden",
  "Datenschutzbehörde (DSB), reclamo":
    "Datenschutzbehörde (DSB), Beschwerde",
  "APD/GBA, reclamo":
    "APD/GBA, Beschwerde",
  "ICO, segnalazioni":
    "ICO, Meldungen",
  "DPC, reclami":
    "DPC, Beschwerden",
  "ANSPDCP, reclami":
    "ANSPDCP, Beschwerden",
  "UODO, reclami":
    "UODO, Beschwerden",
  "UOOU, segnalazioni":
    "UOOU, Meldungen",
  "Garante, segnalazioni":
    "Datenschutzbeauftragter, Meldungen",
  "AZOP, reclami":
    "AZOP, Beschwerden",
  "IP-RS, segnalazioni":
    "IP-RS, Meldungen",
  "UOOU SR, avvio del procedimento":
    "UOOU SR, Verfahrenseinleitung",
  "AKI, reclami":
    "AKI, Beschwerden",
  "DVI, reclami":
    "DVI, Beschwerden",
  "VDAI, servizi e reclami":
    "VDAI, Leistungen und Beschwerden",
  "CNPD, reclami":
    "CNPD, Beschwerden",
  "Persónuvernd, reclami":
    "Persónuvernd, Beschwerden",
  "IDPC, reclami":
    "IDPC, Beschwerden",
  "Garante cipriota":
    "Zyprischer Beauftragter",
  "AZLP, tutela dei diritti":
    "AZLP, Schutz der Rechte",
  "Difensore civico, protezione dei dati":
    "Ombudsmann, Datenschutz",
  "CNPDCP, reclami":
    "CNPDCP, Beschwerden",
};
