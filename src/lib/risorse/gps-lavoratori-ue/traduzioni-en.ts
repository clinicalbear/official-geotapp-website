/**
 * Traduzioni inglesi dei testi che nelle schede-paese sono scritti come `string`
 * semplice (cioe' in italiano, la lingua master): i titoli delle fonti e i nomi
 * dei contatti. Chiave = il testo italiano ESATTO com'e' nella scheda, valore =
 * la resa inglese. Usato da `loc()` (./localize.ts) solo per le lingue inglesi
 * (en, en-us, en-gb, ...): le altre lingue continuano a leggere il testo della
 * scheda. I nomi ufficiali di leggi e autorita' restano in lingua originale, con
 * la traduzione tra parentesi dove serve a capire di cosa si parla.
 *
 * Una fonte nuova o un titolo cambiato in una scheda senza la voce qui sotto
 * resta in italiano nella pagina inglese: il test `traduzioni-en.test.ts` lo segnala.
 */
export const TESTI_EN: Readonly<Record<string, string>> = {
  "Garante Privacy, Provvedimento n. 7 del 16 gennaio 2025 (doc-web 10112287)":
    "Garante Privacy, decision no. 7 of 16 January 2025 (doc-web 10112287)",
  "Garante Privacy, Provvedimento n. 755 del 18 dicembre 2025, n. 10213711 (Pioneer Hi-Bred Italia Sementi)":
    "Garante Privacy, decision no. 755 of 18 December 2025, doc-web 10213711 (Pioneer Hi-Bred Italia Sementi)",
  "Garante Privacy, Provvedimento n. 382 del 28 maggio 2026, n. 10259916 (Azienda di Tutela della Salute per la Liguria)":
    "Garante Privacy, decision no. 382 of 28 May 2026, doc-web 10259916 (Azienda di Tutela della Salute per la Liguria, the Ligurian health authority)",
  "Garante Privacy, Provvedimento n. 135 del 13 marzo 2025 (doc-web 10128005), rimosso temporaneamente dal sito in ottemperanza alla sentenza del Tribunale di Cosenza n. 972 del 1° luglio 2026 (opposizione accolta)":
    "Garante Privacy, decision no. 135 of 13 March 2025 (doc-web 10128005), temporarily removed from the website in compliance with judgment no. 972 of 1 July 2026 of the Court of Cosenza (challenge upheld)",
  "AGI Lavoro, «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (sentenza n. 972 del 1° luglio 2026; il testo della sentenza non è stato reperito in fonte ufficiale)":
    "AGI Lavoro, “Remote working and geolocation: judgment of the Court of Cosenza” (judgment no. 972 of 1 July 2026; the text of the judgment was not found in an official source)",
  "Avvocati Associati, commento alla sentenza Trib. Cosenza n. 972/2026 (22/09/2026), con passi citati":
    "Avvocati Associati, commentary on judgment no. 972/2026 of the Court of Cosenza (22 September 2026), with quoted passages",
  "Legge 20 maggio 1970, n. 300 (Statuto dei Lavoratori), art. 4":
    "Law no. 300 of 20 May 1970 (Workers' Statute), art. 4",
  "Regolamento UE 2016/679 (GDPR), artt. 5, 13, 25, 35, 88":
    "Regulation (EU) 2016/679 (GDPR), arts. 5, 13, 25, 35, 88",
  "Betriebsverfassungsgesetz, § 87 (cogestione del consiglio aziendale)":
    "Betriebsverfassungsgesetz (Works Constitution Act), § 87 (works council co-determination)",
  "Bundesdatenschutzgesetz, § 26 (dati dei lavoratori)":
    "Bundesdatenschutzgesetz (Federal Data Protection Act), § 26 (employee data)",
  "Garante del Baden-Württemberg, FAQ sulle basi giuridiche dei dati dei dipendenti (sentenza CGUE C-34/21)":
    "Baden-Württemberg data protection authority, FAQ on legal bases for employee data (CJEU judgment C-34/21)",
  "Regolamento UE 2016/679 (GDPR)":
    "Regulation (EU) 2016/679 (GDPR)",
  "Garante della Renania-Palatinato, guida sulla localizzazione GPS dei dipendenti":
    "Rhineland-Palatinate data protection authority, guide to GPS tracking of employees",
  "Lista DSK dei trattamenti che richiedono una valutazione d'impatto (settore privato)":
    "DSK list of processing operations that require an impact assessment (private sector)",
  "BfDI, elenco delle autorità garanti per la protezione dei dati dei Land":
    "BfDI, list of the Land data protection authorities",
  "Garante di Amburgo, comunicato del 1 ottobre 2020 (sanzione H&M)":
    "Hamburg data protection authority, press release of 1 October 2020 (H&M fine)",
  "BayLDA, autorità garante della Baviera":
    "BayLDA, the Bavarian data protection authority",
  "BlnBDI, autorità garante di Berlino":
    "BlnBDI, the Berlin data protection authority",
  "Code du travail, art. L2312-38 (consultazione del CSE sui mezzi di controllo)":
    "Code du travail, art. L2312-38 (CSE consultation on monitoring means)",
  "Code du travail, art. L1222-4 (nessuna raccolta da dispositivo non portato a conoscenza)":
    "Code du travail, art. L1222-4 (no data collection through a device the worker has not been told about)",
  "CNIL, guida sulla geolocalizzazione dei veicoli dei dipendenti":
    "CNIL, guide to the geolocation of employees' vehicles",
  "CNIL, lista dei trattamenti che richiedono una valutazione d'impatto (AIPD)":
    "CNIL, list of processing operations that require an impact assessment (AIPD)",
  "CNIL, abolizione delle dichiarazioni preventive dal 25 maggio 2018":
    "CNIL, abolition of prior declarations from 25 May 2018",
  "CNIL, dieci nuove sanzioni (procedura semplificata, 7 novembre 2023)":
    "CNIL, ten new sanctions (simplified procedure, 7 November 2023)",
  "CNIL, deliberazione SAN-2022-015 del 7 luglio 2022 (UBEEQO International, 175.000 €), su Légifrance":
    "CNIL, deliberation SAN-2022-015 of 7 July 2022 (UBEEQO International, EUR 175,000), on Légifrance",
  "Ley Organica 3/2018 (LOPDGDD), art. 90 (geolocalizzazione sul lavoro)":
    "Ley Orgánica 3/2018 (LOPDGDD), art. 90 (geolocation at work)",
  "Estatuto de los Trabajadores, artt. 20.3 e 64":
    "Estatuto de los Trabajadores, arts. 20.3 and 64",
  "AEPD, FAQ sul GPS nelle auto aziendali usate dai lavoratori":
    "AEPD, FAQ on GPS in company cars used by workers",
  "AEPD, lista dei trattamenti che richiedono una valutazione d'impatto (art. 35.4 GDPR)":
    "AEPD, list of processing operations that require an impact assessment (art. 35.4 GDPR)",
  "AEPD, guida sulla protezione dei dati nei rapporti di lavoro":
    "AEPD, guide to data protection in employment relations",
  "AEPD, sanzione PS/00454/2024 (Ares Capital, 200.000 €)":
    "AEPD, penalty PS/00454/2024 (Ares Capital, EUR 200,000)",
  "Wet op de ondernemingsraden (WOR), art. 27 (diritto di consenso del consiglio aziendale)":
    "Wet op de ondernemingsraden (WOR, Works Councils Act), art. 27 (works council right of consent)",
  "Autoriteit Persoonsgegevens, lista dei trattamenti che richiedono una DPIA":
    "Autoriteit Persoonsgegevens, list of processing operations that require a DPIA",
  "Autoriteit Persoonsgegevens, condizioni per il controllo dei dipendenti":
    "Autoriteit Persoonsgegevens, conditions for monitoring employees",
  "Autoriteit Persoonsgegevens, controllo dei dipendenti a distanza (GPS sulle auto aziendali)":
    "Autoriteit Persoonsgegevens, remote monitoring of employees (GPS in company cars)",
  "Autoriteit Persoonsgegevens, sanzione per il trattamento delle impronte dei dipendenti":
    "Autoriteit Persoonsgegevens, fine for processing employees' fingerprints",
  "Codigo do Trabalho, art. 20 (mezzi di sorveglianza a distanza)":
    "Código do Trabalho (Labour Code), art. 20 (remote surveillance means)",
  "CNPD, Deliberacao 7680/2014 (geolocalizzazione nel contesto lavorativo)":
    "CNPD, Deliberação 7680/2014 (geolocation in the employment context)",
  "Lei 58/2019, art. 28 (relazioni di lavoro)":
    "Lei 58/2019, art. 28 (employment relations)",
  "CNPD, videovigilanza: nel contesto lavorativo restano le condizioni del Codice del lavoro, senza l'autorizzazione della CNPD":
    "CNPD, video surveillance: in the employment context the Labour Code conditions remain, without CNPD authorisation",
  "CNPD, valutazione d'impatto sulla protezione dei dati":
    "CNPD, data protection impact assessment",
  "CNPD, Regulamento n.º 798/2018 (lista dei trattamenti soggetti a valutazione d'impatto)":
    "CNPD, Regulamento n.º 798/2018 (list of processing operations subject to an impact assessment)",
  "Tribunal da Relação de Lisboa, acórdão del 17 giugno 2026, proc. 2266/25.4T8TVD.L1-4 (GPS del veicolo di una lavoratrice)":
    "Tribunal da Relação de Lisboa, judgment of 17 June 2026, case 2266/25.4T8TVD.L1-4 (GPS on a worker's vehicle)",
  "CNPD, presentare una segnalazione":
    "CNPD, submit a report",
  "Datatilsynet, guida sul controllo dei dipendenti (Kontrol af medarbejdere)":
    "Datatilsynet, guide to monitoring of employees (Kontrol af medarbejdere)",
  "Datatilsynet, lista dei trattamenti che richiedono una valutazione d'impatto":
    "Datatilsynet, list of processing operations that require an impact assessment",
  "Datatilsynet, controlli 2020 sull'obbligo di informazione nelle misure di controllo dei dipendenti (GPS, videosorveglianza e altre)":
    "Datatilsynet, 2020 inspections on the duty to inform in employee monitoring measures (GPS, video surveillance and others)",
  "Datatilsynet, aree prioritarie dei controlli nel 2026 (sorveglianza dei dipendenti)":
    "Datatilsynet, priority areas for inspections in 2026 (employee surveillance)",
  "Datatilsynet (autorità garante danese)":
    "Datatilsynet (Danish data protection authority)",
  "Lag 1976:580 om medbestammande i arbetslivet (MBL), § 11":
    "Lag 1976:580 om medbestämmande i arbetslivet (MBL, Co-Determination at Work Act), § 11",
  "IMY, controllo e sorveglianza dei dipendenti":
    "IMY, control and surveillance of employees",
  "IMY, come usare i servizi di localizzazione (GPS) sui dipendenti":
    "IMY, how to use location services (GPS) on employees",
  "IMY, quando svolgere una valutazione d'impatto":
    "IMY, when to carry out an impact assessment",
  "IMY, presentare un reclamo":
    "IMY, submit a complaint",
  "IMY, sanzione al Comune di Skelleftea (riconoscimento facciale per le presenze)":
    "IMY, fine against the Municipality of Skelleftea (facial recognition for attendance)",
  "Arbeidsmiljoloven, kap. 9 (misure di controllo, §§ 9-1 e 9-2)":
    "Arbeidsmiljøloven (Working Environment Act), ch. 9 (control measures, §§ 9-1 and 9-2)",
  "Datatilsynet (Norvegia), GPS e tracciamento dei veicoli aziendali":
    "Datatilsynet (Norway), GPS and tracking of company vehicles",
  "Datatilsynet (Norvegia), quando svolgere una valutazione d'impatto":
    "Datatilsynet (Norway), when to carry out an impact assessment",
  "Datatilsynet (autorità garante norvegese)":
    "Datatilsynet (Norwegian data protection authority)",
  "Personvernnemnda, PVN-2017-07 (uso del GPS per controllare le ore del dipendente)":
    "Personvernnemnda, PVN-2017-07 (use of GPS to check an employee's hours)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96 (misure di controllo che toccano la dignita: consenso del consiglio aziendale)":
    "Arbeitsverfassungsgesetz (ArbVG, Labour Constitution Act), § 96 (control measures affecting human dignity: works council consent)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96a (sistemi che trattano dati personali dei lavoratori)":
    "Arbeitsverfassungsgesetz (ArbVG), § 96a (systems that process employees' personal data)",
  "DSFA-V, regolamento sui trattamenti che richiedono una valutazione d'impatto":
    "DSFA-V, regulation on processing operations that require an impact assessment",
  "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (fine del registro DVR)":
    "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (end of the DVR register)",
  "Datenschutzbehörde (DSB), decisione 2022-0.021.739 (stop al GPS sui veicoli aziendali)":
    "Datenschutzbehörde (DSB), decision 2022-0.021.739 (stop to GPS on company vehicles)",
  "Datenschutzbehörde (DSB), procedura di reclamo":
    "Datenschutzbehörde (DSB), complaint procedure",
  "CCT n. 81 del 26 aprile 2002 (controllo delle comunicazioni elettroniche in rete)":
    "CAO/CCT no. 81 of 26 April 2002 (monitoring of electronic communications on the network)",
  "APD/GBA, geolocalizzazione dei lavoratori":
    "APD/GBA, geolocation of workers",
  "APD/GBA, valutazione d'impatto sulla protezione dei dati":
    "APD/GBA, data protection impact assessment",
  "APD/GBA, presentare un reclamo":
    "APD/GBA, submit a complaint",
  "Chambre Contentieuse APD/GBA, decisione 114/2024 (impronte per le presenze, 45.000 euro), testo integrale":
    "Litigation Chamber of the APD/GBA, decision 114/2024 (fingerprints for attendance, EUR 45,000), full text",
  "ICO, guida sul monitoraggio dei lavoratori (UK GDPR)":
    "ICO, guidance on monitoring workers (UK GDPR)",
  "ICO, sorveglianza nei veicoli":
    "ICO, surveillance in vehicles",
  "ICO, quando serve una DPIA":
    "ICO, when do we need a DPIA",
  "ICO, provvedimento sul monitoraggio GPS (Home Office, 2024)":
    "ICO, enforcement action on GPS monitoring (Home Office, 2024)",
  "ICO, presentare una segnalazione":
    "ICO, report a concern",
  "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission dal 30/09/2026)":
    "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission from 30 September 2026)",
  "Regolamento UE 2016/679 (GDPR) come UK GDPR":
    "Regulation (EU) 2016/679 (GDPR) as the UK GDPR",
  "DPC, guida sul tracciamento dei veicoli aziendali (maggio 2020)":
    "DPC, guide to tracking of company vehicles (May 2020)",
  "DPC, pagina sul tracciamento dei veicoli dei dipendenti (aggiornata a maggio 2026)":
    "DPC, page on tracking of employees' vehicles (updated May 2026)",
  "DPC, lista dei trattamenti che richiedono una DPIA":
    "DPC, list of processing operations that require a DPIA",
  "DPC, consultazione preventiva":
    "DPC, prior consultation",
  "DPC, presentare un reclamo":
    "DPC, submit a complaint",
  "DPC, decisione Limerick City and County Council (dicembre 2021)":
    "DPC, decision on Limerick City and County Council (December 2021)",
  "DPC, sentenza Doolin v. DPC (High Court, febbraio 2020)":
    "DPC, Doolin v. DPC judgment (High Court, February 2020)",
  "IFPDT/FDPIC, mezzi tecnici di sorveglianza sul luogo di lavoro":
    "FDPIC, technical means of surveillance in the workplace",
  "IFPDT/FDPIC, trattamento dei dati da parte del datore di lavoro (CO art. 328b)":
    "FDPIC, data processing by the employer (CO art. 328b)",
  "IFPDT/FDPIC, valutazione d'impatto sulla protezione dei dati (nLPD art. 22)":
    "FDPIC, data protection impact assessment (nLPD/revFADP art. 22)",
  "Legge federale sulla protezione dei dati (nLPD), art. 22, 23 e 60-65 (Fedlex)":
    "Federal Act on Data Protection (nLPD/revFADP), arts. 22, 23 and 60-65 (Fedlex)",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo":
    "Regulation (EU) 2016/679 (GDPR), for comparison",
  "Legge 190/2018, art. 5 (monitoraggio dei dipendenti)":
    "Law 190/2018, art. 5 (monitoring of employees)",
  "Codul Muncii, art. 40 (obblighi del datore), Portal Legislativ":
    "Codul Muncii (Labour Code), art. 40 (employer's obligations), Legislative Portal",
  "ANSPDCP, comunicato del 23 marzo 2023 (sanzione Tehnoplus, GPS)":
    "ANSPDCP, press release of 23 March 2023 (Tehnoplus fine, GPS)",
  "ANSPDCP, Decizia 174/2018 (lista trattamenti che richiedono DPIA), Monitorul Oficial 919/31.10.2018, art. 1 lett. d e g":
    "ANSPDCP, Decision 174/2018 (list of processing operations that require a DPIA), Monitorul Oficial 919/31.10.2018, art. 1 letters d and g",
  "ANSPDCP, presentazione dei reclami":
    "ANSPDCP, submitting complaints",
  "Kodeks pracy, art. 22(2) (monitoraggio), testo consolidato Dz.U. 2026 poz. 1245 (in vigore dal 24 settembre 2026)":
    "Kodeks pracy (Labour Code), art. 22(2) (monitoring), consolidated text Dz.U. 2026 item 1245 (in force from 24 September 2026)",
  "Legge del 4 dicembre 2025 di modifica del Codice del lavoro, Dz.U. 2026 poz. 25 (art. 22(2) par. 8: \"su carta o in forma elettronica\", in vigore dal 27 gennaio 2026)":
    "Act of 4 December 2025 amending the Labour Code, Dz.U. 2026 item 25 (art. 22(2) par. 8: “on paper or in electronic form”, in force from 27 January 2026)",
  "Kodeks pracy, art. 22(3) par. 3-4 (altre forme di monitoraggio, tra cui il GPS), testo consolidato Dz.U. 2026 poz. 1245":
    "Kodeks pracy, art. 22(3) par. 3-4 (other forms of monitoring, including GPS), consolidated text Dz.U. 2026 item 1245",
  "UODO, guida alla protezione dei dati sul luogo di lavoro":
    "UODO, guide to data protection in the workplace",
  "UODO, lista dei trattamenti che richiedono una DPIA (M.P. 2019 poz. 666)":
    "UODO, list of processing operations that require a DPIA (M.P. 2019 item 666)",
  "UODO, presentare un reclamo":
    "UODO, submit a complaint",
  "UODO, sanzione Centrum Medyczne Ujastek (monitoraggio non comunicato ai dipendenti)":
    "UODO, fine against Centrum Medyczne Ujastek (monitoring not disclosed to employees)",
  "Zakonik prace (Codice del lavoro), art. 316":
    "Zakonik prace (Labour Code), art. 316",
  "Stanovisko 2/2017 sul trattamento dei dati sul posto di lavoro, pubblicato dall UOOU":
    "Opinion 2/2017 on data processing at work, published by the UOOU",
  "UOOU, lista dei trattamenti che richiedono una DPIA":
    "UOOU, list of processing operations that require a DPIA",
  "UOOU, presentare una segnalazione":
    "UOOU, submit a report",
  "Tribunale municipale di Praga 6 A 42/2013 (Ceska posta, GPS sui portalettere), sentenza":
    "Municipal Court in Prague, 6 A 42/2013 (Ceska posta, GPS on postal carriers), judgment",
  "epravo.cz, GPS monitoring zamestnancu podruhe (riporta la multa di 80.000 CZK e i 7.770 dipendenti)":
    "epravo.cz, GPS monitoring zamestnancu podruhe (reports the CZK 80,000 fine and the 7,770 employees)",
  "UOOU, relazione annuale 2014, controlli su Skoda Auto e Plzensky Prazdroj (GPS nei veicoli aziendali)":
    "UOOU, 2014 annual report, inspections of Skoda Auto and Plzensky Prazdroj (GPS in company vehicles)",
  "HDPA (Garante greco), FAQ sui rapporti di lavoro (geolocalizzazione)":
    "HDPA (Greek data protection authority), FAQ on employment relations (geolocation)",
  "Legge 4624/2019, art. 27 (dati dei dipendenti), traduzione ufficiale HDPA":
    "Law 4624/2019, art. 27 (employee data), official HDPA translation",
  "HDPA, Decisione 65/2018 (lista dei trattamenti che richiedono DPIA)":
    "HDPA, Decision 65/2018 (list of processing operations that require a DPIA)",
  "HDPA, sanzione a un datore per geolocalizzazione (16 febbraio 2024)":
    "HDPA, fine against an employer for geolocation (16 February 2024)",
  "HDPA (Garante greco), pagina ufficiale":
    "HDPA (Greek data protection authority), official page",
  "Legge sulla protezione della privacy nella vita lavorativa (759/2004) - testo consolidato in finlandese (Finlex)":
    "Act on the Protection of Privacy in Working Life (759/2004), consolidated text in Finnish (Finlex)",
  "Garante finlandese (Tietosuojavaltuutettu), FAQ sulla vita lavorativa":
    "Finnish Data Protection Ombudsman (Tietosuojavaltuutettu), FAQ on working life",
  "Garante finlandese, lista dei trattamenti che richiedono una DPIA":
    "Finnish Data Protection Ombudsman, list of processing operations that require a DPIA",
  "Garante finlandese, segnalare una violazione":
    "Finnish Data Protection Ombudsman, report a violation",
  "Garante finlandese, sanzione per dati di localizzazione usati per la rilevazione orario (2021)":
    "Finnish Data Protection Ombudsman, fine for location data used for working-time recording (2021)",
  "Zakon o zaštiti na radu (legge sicurezza sul lavoro), art. 43 (dispositivi di sorveglianza)":
    "Zakon o zaštiti na radu (Occupational Safety Act), art. 43 (surveillance devices)",
  "Zakon o radu (legge sul lavoro), art. 29 (dati dei lavoratori) e art. 150 (consultazione del consiglio dei lavoratori)":
    "Zakon o radu (Labour Act), art. 29 (employee data) and art. 150 (consultation of the works council)",
  "AZOP (Garante croato), trattamento dei dati dei dipendenti tramite GPS":
    "AZOP (Croatian data protection authority), processing of employee data through GPS",
  "AZOP, lista dei trattamenti che richiedono una DPIA":
    "AZOP, list of processing operations that require a DPIA",
  "AZOP, richiesta di accertamento di violazione (reclamo)":
    "AZOP, request to establish a violation (complaint)",
  "AZOP (Garante croato), pagina ufficiale":
    "AZOP (Croatian data protection authority), official page",
  "IP-RS (Garante sloveno), linee guida sull'uso dei dispositivi GPS":
    "IP-RS (Slovenian data protection authority), guidelines on the use of GPS devices",
  "IP-RS, parere 'Sledenje zaposlenim' (tracciamento dei dipendenti)":
    "IP-RS, opinion ‘Sledenje zaposlenim’ (tracking of employees)",
  "IP-RS, comunicato del 15.04.2026: multa di 6.000 euro a un'azienda pubblica per GPS sui dipendenti":
    "IP-RS, press release of 15.04.2026: EUR 6,000 fine on a public utility for GPS on employees",
  "Zakon o delovnih razmerjih (ZDR-1), art. 48 (dati dei lavoratori)":
    "Zakon o delovnih razmerjih (ZDR-1, Employment Relationships Act), art. 48 (employee data)",
  "Zakon o sodelovanju delavcev pri upravljanju (ZSDU), art. 89-90 (informazione del consiglio dei lavoratori)":
    "Zakon o sodelovanju delavcev pri upravljanju (ZSDU, Workers' Participation in Management Act), arts. 89-90 (informing the works council)",
  "IP-RS, elenco dei trattamenti per cui e' obbligatoria la valutazione d'impatto (art. 35.4 GDPR)":
    "IP-RS, list of processing operations for which an impact assessment is mandatory (art. 35.4 GDPR)",
  "IP-RS, presentare una segnalazione":
    "IP-RS, submit a report",
  "Zakonnik prace (Codice del lavoro), art. 13 par. 4 (monitoraggio dei dipendenti)":
    "Zakonnik prace (Labour Code), art. 13 par. 4 (monitoring of employees)",
  "UOOU SR (Garante slovacco), procedura di tutela":
    "UOOU SR (Slovak data protection authority), protection procedure",
  "Parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli, versione slovacca pubblicata dall UOOU SR":
    "Opinion 2/2017 on data processing at work (WP249), section 5.7 vehicles, Slovak version published by the UOOU SR",
  "Lista slovacca dei trattamenti soggetti a DPIA (punti 3 e 9), pubblicata dall EDPB":
    "Slovak list of processing operations subject to a DPIA (items 3 and 9), published by the EDPB",
  "UOOU SR, guida sulla liceita del trattamento (versione aggiornata 22/01/2019), esempio del par. 13 c. 4 del Codice del lavoro":
    "UOOU SR, guide to the lawfulness of processing (updated version of 22 January 2019), example on art. 13 par. 4 of the Labour Code",
  "UOOU SR, presentare una proposta di avvio del procedimento (reclamo)":
    "UOOU SR, submit a proposal to open proceedings (complaint)",
  "UOOU SR, relazione sullo stato della protezione dei dati 2025 (par. 9.2.1, trattamento di dati di geolocalizzazione)":
    "UOOU SR, report on the state of personal data protection 2025 (section 9.2.1, processing of geolocation data)",
  "Codice del lavoro (Mt.), art. 9 (diritti della persona) e art. 11/A (controllo dei lavoratori)":
    "Labour Code (Mt.), art. 9 (personality rights) and art. 11/A (monitoring of workers)",
  "NAIH, guida sui trattamenti sul luogo di lavoro (novembre 2016, precedente al GDPR), par. 5 sul GPS":
    "NAIH, guide to data processing in the workplace (November 2016, pre-GDPR), section 5 on GPS",
  "NAIH, lista dei trattamenti che richiedono una valutazione d'impatto":
    "NAIH, list of processing operations that require an impact assessment",
  "NAIH, sanzione Auchan (monitoraggio dei dipendenti)":
    "NAIH, fine against Auchan (monitoring of employees)",
  "NAIH (Garante ungherese), pagina ufficiale":
    "NAIH (Hungarian data protection authority), official page",
  "Legge sulla protezione dei dati (ZZLD), testo consolidato sul sito del CPDP (art. 25д e 25и; ultima modifica ДВ 70/2024)":
    "Personal Data Protection Act (ZZLD), consolidated text on the CPDP website (arts. 25d and 25i; last amended SG 70/2024)",
  "CPDP (Garante bulgaro), guida sulla privacy sul luogo di lavoro (2014, anteriore al GDPR), par. 3.5.2 sistemi GPS":
    "CPDP (Bulgarian data protection authority), guide to privacy in the workplace (2014, pre-GDPR), section 3.5.2 GPS systems",
  "CPDP, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "CPDP, list of processing operations that require a DPIA (art. 35.4)",
  "CPDP, parere su LUKOIL (riuso della videosorveglianza per valutare i dipendenti)":
    "CPDP, opinion on LUKOIL (reuse of video surveillance to assess employees)",
  "CPDP (Garante bulgaro), pagina ufficiale":
    "CPDP (Bulgarian data protection authority), official page",
  "AKI (Garante estone), FAQ sui rapporti di lavoro (GPS)":
    "AKI (Estonian data protection authority), FAQ on employment relations (GPS)",
  "AKI, guida per il personale sui dati nel rapporto di lavoro (2011, ante-GDPR), punto 2.9 GPS":
    "AKI, guide for staff on data in the employment relationship (2011, pre-GDPR), item 2.9 GPS",
  "Legge sul fiduciario dei lavoratori (Töötajate usaldusisiku seadus), §§ 17 e 20 - Riigi Teataja":
    "Employees' Trustee Act (Töötajate usaldusisiku seadus), §§ 17 and 20 - Riigi Teataja",
  "Legge estone sulla protezione dei dati personali (Isikuandmete kaitse seadus), §§ 62-73 - Riigi Teataja":
    "Estonian Personal Data Protection Act (Isikuandmete kaitse seadus), §§ 62-73 - Riigi Teataja",
  "AKI, materiale sul trattamento dei dati nel rapporto di lavoro":
    "AKI, material on data processing in the employment relationship",
  "AKI, valutazione d'impatto (capitolo 5)":
    "AKI, impact assessment (chapter 5)",
  "AKI, presentare un reclamo":
    "AKI, submit a complaint",
  "AKI (Garante estone), pagina ufficiale":
    "AKI (Estonian data protection authority), official page",
  "DVI (Garante lettone), posso tracciare i viaggi del mio dipendente? (GPS)":
    "DVI (Latvian data protection authority), can I track my employee's trips? (GPS)",
  "Legge lettone sul trattamento dei dati delle persone fisiche (Fizisko personu datu apstrādes likums) - Likumi.lv":
    "Latvian Personal Data Processing Law (Fizisko personu datu apstrādes likums) - Likumi.lv",
  "DVI, videosorveglianza dei dipendenti in presenza (16/09/2022)":
    "DVI, video surveillance of employees on site (16 September 2022)",
  "DVI, videosorveglianza dei dipendenti nel lavoro da remoto":
    "DVI, video surveillance of employees working remotely",
  "DVI, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "DVI, list of processing operations that require a DPIA (art. 35.4)",
  "DVI, presentare un reclamo":
    "DVI, submit a complaint",
  "Gruppo art. 29, parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli":
    "Article 29 Working Party, Opinion 2/2017 on data processing at work (WP249), section 5.7 vehicles",
  "VDAI, lista dei trattamenti che richiedono una DPIA (voce 10: monitoraggio dei dipendenti)":
    "VDAI, list of processing operations that require a DPIA (item 10: monitoring of employees)",
  "VDAI, decisione sul trattamento della corrispondenza personale di un dipendente (2022)":
    "VDAI, decision on the processing of an employee's personal correspondence (2022)",
  "VDAI, elenco delle decisioni (multe, ordini e altro) fino al 2025":
    "VDAI, list of decisions (fines, orders and other) up to 2025",
  "VDAI (Garante lituano), servizi e reclami":
    "VDAI (Lithuanian data protection authority), services and complaints",
  "Loi du 1er août 2018, art. 71 (nuovo art. L.261-1 del Code du travail) e art. 72 (abrogazione della legge del 2 agosto 2002), Legilux":
    "Loi du 1er août 2018, art. 71 (new art. L.261-1 of the Code du travail) and art. 72 (repeal of the law of 2 August 2002), Legilux",
  "Code du travail, art. L.261-1 (sorveglianza dei lavoratori) - riproduzione CNPD":
    "Code du travail, art. L.261-1 (monitoring of workers) - CNPD reproduction",
  "CNPD, geolocalizzazione dei veicoli: necessità e proporzionalità":
    "CNPD, geolocation of vehicles: necessity and proportionality",
  "CNPD, geolocalizzazione: valutazione d'impatto (AIPD)":
    "CNPD, geolocation: impact assessment (AIPD)",
  "CNPD, decisione 11FR/2021 (sanzione geolocalizzazione veicoli di servizio)":
    "CNPD, decision 11FR/2021 (penalty for geolocation of service vehicles)",
  "CNPD, presentare un reclamo (Faire valoir vos droits)":
    "CNPD, submit a complaint (Faire valoir vos droits)",
  "Regole n. 50/2023 sulla sorveglianza elettronica (Gazzetta ufficiale)":
    "Rules no. 50/2023 on electronic monitoring (Official Gazette)",
  "Regole 1329/2025 di Persónuvernd (modifica delle Regole 50/2023, art. 3: 90 giorni)":
    "Persónuvernd Rules 1329/2025 (amending Rules 50/2023, art. 3: 90 days)",
  "Persónuvernd (Garante islandese), FAQ sul GPS e i dispositivi di localizzazione":
    "Persónuvernd (Icelandic data protection authority), FAQ on GPS and location devices",
  "Persónuvernd, lista dei trattamenti che richiedono una DPIA (Auglýsing nr. 828/2019)":
    "Persónuvernd, list of processing operations that require a DPIA (Auglýsing nr. 828/2019)",
  "Persónuvernd, presentare un reclamo":
    "Persónuvernd, submit a complaint",
  "Persónuvernd, decisione Islandspostur (uso illecito del GPS su un dipendente)":
    "Persónuvernd, decision on Islandspostur (unlawful use of GPS on an employee)",
  "IDPC (Garante maltese), guida al settore del lavoro":
    "IDPC (Maltese data protection authority), guide for the employment sector",
  "IDPC, valutazione d'impatto sulla protezione dei dati":
    "IDPC, data protection impact assessment",
  "IDPC, presentare un reclamo":
    "IDPC, submit a complaint",
  "IDPC, decisione CDP/COMP/579/2025 del 20 aprile 2026 (videosorveglianza della mensa aziendale)":
    "IDPC, decision CDP/COMP/579/2025 of 20 April 2026 (video surveillance of the company canteen)",
  "Legge 125(I)/2018 sulla protezione dei dati (art. 36: abrogazione delle leggi 2001-2012)":
    "Law 125(I)/2018 on data protection (art. 36: repeal of the 2001-2012 laws)",
  "Commissario cipriota, registro delle attività: abolito l'obbligo di notifica al Commissario (art. 30 GDPR)":
    "Cypriot Commissioner, records of processing activities: the obligation to notify the Commissioner has been abolished (art. 30 GDPR)",
  "Commissario cipriota, valutazione d'impatto (elenco indicativo: monitoraggio sistematico dei dipendenti, GPS)":
    "Cypriot Commissioner, impact assessment (indicative list: systematic monitoring of employees, GPS)",
  "GDPR, art. 13 (informazione), testo ufficiale EUR-Lex":
    "GDPR, art. 13 (information), official text on EUR-Lex",
  "GDPR, art. 6(1)(f) e considerando 43 (base giuridica e squilibrio fra le parti), testo ufficiale EUR-Lex":
    "GDPR, art. 6(1)(f) and recital 43 (legal basis and imbalance between the parties), official text on EUR-Lex",
  "Garante cipriota, pagina ufficiale":
    "Cypriot Commissioner, official page",
  "Commissario cipriota, decisione del 25.10.2019 sul Gruppo Louis (strumento Bradford Factor)":
    "Cypriot Commissioner, decision of 25.10.2019 on the Louis Group (Bradford Factor tool)",
  "Legge 124/2024 sulla protezione dei dati personali (in vigore dal 1 febbraio 2025)":
    "Law 124/2024 on personal data protection (in force from 1 February 2025)",
  "IDP, linea guida n. 03 del 30.04.2025 sulla videosorveglianza":
    "IDP, guideline no. 03 of 30.04.2025 on video surveillance",
  "IDP (Garante albanese), pagina ufficiale":
    "IDP (Albanian data protection authority), official page",
  "Legge sulla protezione dei dati (LPDP, 87/2018) - testo ufficiale":
    "Personal Data Protection Act (LPDP, 87/2018) - official text",
  "Poverenik, decisione sulla lista dei trattamenti che richiedono una DPIA (Gazzetta 45/2019)":
    "Poverenik, decision on the list of processing operations that require a DPIA (Official Gazette 45/2019)",
  "Odluka sulla lista dei trattamenti che richiedono DPIA (Sl. glasnik RS 45/2019 e 112/2020, testo consolidato)":
    "Odluka on the list of processing operations that require a DPIA (Sl. glasnik RS 45/2019 and 112/2020, consolidated text)",
  "Poverenik (Garante serbo), competenze e contatti":
    "Poverenik (Serbian Commissioner), competences and contacts",
  "Danas, ispezione straordinaria del Poverenik al JKP Mediana di Nis (7 aprile 2026)":
    "Danas, extraordinary inspection by the Poverenik at JKP Mediana of Nis (7 April 2026)",
  "N1, GPS su 80 cassonetti del JKP Mediana di Nis (protesta dei lavoratori, gennaio 2026)":
    "N1, GPS on 80 waste bins at JKP Mediana of Nis (workers' protest, January 2026)",
  "Legge sulla protezione dei dati personali (Gazzetta BiH 12/25), testo pubblicato dall AZLP":
    "Personal Data Protection Law (Official Gazette of BiH 12/25), text published by the AZLP",
  "AZLP, decisione del 10.11.2025 sulla lista dei trattamenti che richiedono una DPIA (punto 8: dati dei dipendenti, controllo di lavoro e spostamenti)":
    "AZLP, decision of 10.11.2025 on the list of processing operations that require a DPIA (item 8: employee data, monitoring of work and movements)",
  "AZLP (Garante bosniaco), pagina ufficiale":
    "AZLP (Bosnian data protection authority), official page",
  "Legge sulla protezione dei dati personali, Gazzetta ufficiale BiH 12/25":
    "Personal Data Protection Law, Official Gazette of BiH 12/25",
  "Legge sulla protezione dei dati personali, testo consolidato pubblicato dall'AZLP (artt. 26-28 e sanzioni, art. 74)":
    "Personal Data Protection Law, consolidated text published by the AZLP (arts. 26-28 and penalties, art. 74)",
  "Nuova legge sulla protezione dei dati personali, Službeni list CG 133/2026 (pubblicata l'11.9.2026, in vigore dal 19.9.2026, si applica dal 19.3.2027, art. 106; artt. 88, 89 e 105)":
    "New Personal Data Protection Law, Službeni list CG 133/2026 (published 11.9.2026, in force from 19.9.2026, applies from 19.3.2027, art. 106; arts. 88, 89 and 105)",
  "AZLP, posizione del Consiglio sull'uso del GPS nei veicoli di servizio (29.04.2025)":
    "AZLP, Council position on the use of GPS in service vehicles (29.04.2025)",
  "AZLP (Garante montenegrino), contatti":
    "AZLP (Montenegrin data protection authority), contacts",
  "AZLP, moduli (richiesta di tutela dei diritti)":
    "AZLP, forms (request for protection of rights)",
  "Regolamento UE 2016/679 (GDPR), riferimento comparativo":
    "Regulation (EU) 2016/679 (GDPR), for comparison",
  "Legge sulla protezione dei dati (LPDP, Gazzetta 42/20) - traduzione inglese non ufficiale pubblicata dall'AZLP":
    "Personal Data Protection Law (LPDP, Official Gazette 42/20) - unofficial English translation published by the AZLP",
  "AZLP, lista dei trattamenti che richiedono la DPIA (11.05.2020, punti 10 e 12: posizione e spostamenti, dati dei lavoratori)":
    "AZLP, list of processing operations that require a DPIA (11.05.2020, items 10 and 12: location and movements, workers' data)",
  "AZLP, atti subordinati (regolamenti e liste), pagina ufficiale":
    "AZLP, secondary legislation (regulations and lists), official page",
  "AZLP (Garante macedone), pagina ufficiale e reclami":
    "AZLP (North Macedonian data protection authority), official page and complaints",
  "Legge dell'Ucraina n. 2297-VI sulla protezione dei dati personali (2010)":
    "Law of Ukraine no. 2297-VI on the Protection of Personal Data (2010)",
  "Ordine del Difensore civico 1/02-14: procedura di notifica dei trattamenti a rischio particolare":
    "Ombudsman Order 1/02-14: procedure for notifying processing that poses a particular risk",
  "Codice ucraino delle infrazioni amministrative, art. 188-39 (violazioni in materia di dati personali)":
    "Ukrainian Code of Administrative Offences, art. 188-39 (violations of personal data legislation)",
  "Difensore civico (Garante ucraino), protezione dei dati personali":
    "Ombudsman (Ukrainian data protection authority), personal data protection",
  "ICLG, protezione dei dati in Ucraina (basi giuridiche, DPIA)":
    "ICLG, data protection in Ukraine (legal bases, DPIA)",
  "CNPDCP, presentare un reclamo":
    "CNPDCP, submit a complaint",
  "Legge 195/2024 sulla protezione dei dati personali, in vigore dal 23 agosto 2026 (art. 35 DPIA, art. 88 sanzioni), testo inglese pubblicato dal CNPDCP":
    "Law 195/2024 on personal data protection, in force from 23 August 2026 (art. 35 DPIA, art. 88 penalties), English text published by the CNPDCP",
  "CNPDCP, ordine 27/2022: lista dei trattamenti soggetti a valutazione d'impatto (modificata dall'ordine 39/2026)":
    "CNPDCP, order 27/2022: list of processing operations subject to an impact assessment (amended by order 39/2026)",
  "Legge della Repubblica di Bielorussia n. 99-Z del 7 maggio 2021 sulla protezione dei dati personali (NPDPC)":
    "Law of the Republic of Belarus no. 99-Z of 7 May 2021 on personal data protection (NPDPC)",
  "Ordine OAC n. 94 del 1 giugno 2022: Registro degli operatori di dati personali (casi di iscrizione)":
    "OAC Order no. 94 of 1 June 2022: Register of personal data operators (cases of registration)",
  "NPDPC (N. Shved), responsabilita amministrativa per violazione della normativa sui dati personali (art. 23.7 CAO)":
    "NPDPC (N. Shved), administrative liability for violations of personal data legislation (art. 23.7 CAO)",
  "NPDPC (Garante bielorusso), informazioni e contatti":
    "NPDPC (Belarusian data protection authority), information and contacts",
  "GRATA, protezione dei dati e privacy dei dipendenti in Bielorussia":
    "GRATA, data protection and employee privacy in Belarus",
  "DLA Piper, applicazione e sanzioni in Bielorussia":
    "DLA Piper, enforcement and penalties in Belarus",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo lontano":
    "Regulation (EU) 2016/679 (GDPR), distant point of comparison",
  "ANPD, denúncia di inadempimento della LGPD":
    "ANPD, report of non-compliance with the LGPD",
  "ANPD, canale per il titolare dei dati":
    "ANPD, channel for the data subject",
  "Lei n. 15.352/2026 (l’ANPD diventa agência reguladora)":
    "Lei n. 15.352/2026 (the ANPD becomes a regulatory agency, agência reguladora)",
  "BfDI, elenco delle autorità dei Land (per trovare la tua)": "BfDI, list of the Land authorities (to find yours)",
  "BayLDA (esempio, Baviera)": "BayLDA (example: Bavaria)",
  "CNIL, presentare un reclamo": "CNIL, submit a complaint",
  "AEPD, sede elettronica": "AEPD, electronic office",
  "CNPD, segnalazioni": "CNPD, reports",
  "IMY, reclami": "IMY, complaints",
  "Datenschutzbehörde (DSB), reclamo": "Datenschutzbehörde (DSB), complaint",
  "APD/GBA, reclamo": "APD/GBA, complaint",
  "ICO, segnalazioni": "ICO, reports",
  "DPC, reclami": "DPC, complaints",
  "ANSPDCP, reclami": "ANSPDCP, complaints",
  "UODO, reclami": "UODO, complaints",
  "UOOU, segnalazioni": "UOOU, reports",
  "Garante, segnalazioni": "Data Protection Ombudsman, reports",
  "AZOP, reclami": "AZOP, complaints",
  "IP-RS, segnalazioni": "IP-RS, reports",
  "UOOU SR, avvio del procedimento": "UOOU SR, opening of proceedings",
  "AKI, reclami": "AKI, complaints",
  "DVI, reclami": "DVI, complaints",
  "VDAI, servizi e reclami": "VDAI, services and complaints",
  "CNPD, reclami": "CNPD, complaints",
  "Persónuvernd, reclami": "Persónuvernd, complaints",
  "IDPC, reclami": "IDPC, complaints",
  "Garante cipriota": "Cypriot Commissioner",
  "AZLP, tutela dei diritti": "AZLP, protection of rights",
  "Difensore civico, protezione dei dati": "Ombudsman, data protection",
  "CNPDCP, reclami": "CNPDCP, complaints",
};
