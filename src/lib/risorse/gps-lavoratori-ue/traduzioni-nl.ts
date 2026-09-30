/**
 * Nederlandse versie van de teksten die in de landenpagina's als gewone `string`
 * staan (dus in het Italiaans, de hoofdtaal): de titels van de bronnen en de namen
 * van de contactpunten. Sleutel = de ITALIAANSE tekst precies zoals in de pagina,
 * waarde = de Nederlandse versie. Wordt door `loc()` (./localize.ts) alleen voor
 * `nl` gebruikt. Officiële namen van wetten en autoriteiten blijven in de oorspronkelijke
 * taal, waar nodig met een Nederlandse toelichting tussen haakjes.
 *
 * Een nieuwe bron of een gewijzigde titel in een pagina zonder vermelding hier blijft
 * op de Nederlandse pagina Italiaans: de test `traduzioni-nl.test.ts` meldt het.
 */
export const TESTI_NL: Readonly<Record<string, string>> = {
  "Legge lituana sulla protezione giuridica dei dati personali (ADTAĮ), art. 5 c. 4, testo consolidato":
    "Litouwse wet inzake de rechtsbescherming van persoonsgegevens (ADTAĮ), art. 5 lid 4, geconsolideerde tekst",
  "UOOU, relazione annuale 2012, controllo su Česká pošta (monitoraggio degli spostamenti dei portalettere)":
    "UOOU, jaarverslag 2012, controle bij Česká pošta (monitoring van de verplaatsingen van postbezorgers)",
  "CNPD, Deliberação 2019/494 (norme della Lei 58/2019 disapplicate)":
    "CNPD, Deliberação 2019/494 (bepalingen van Lei 58/2019 buiten toepassing gelaten)",
  "Garante Privacy, Provvedimento n. 7 del 16 gennaio 2025 (doc-web 10112287)":
    "Garante Privacy, besluit nr. 7 van 16 januari 2025 (doc-web 10112287)",
  "Garante Privacy, Provvedimento n. 755 del 18 dicembre 2025, n. 10213711 (Pioneer Hi-Bred Italia Sementi)":
    "Garante Privacy, besluit nr. 755 van 18 december 2025, doc-web 10213711 (Pioneer Hi-Bred Italia Sementi)",
  "Garante Privacy, Provvedimento n. 382 del 28 maggio 2026, n. 10259916 (Azienda di Tutela della Salute per la Liguria)":
    "Garante Privacy, besluit nr. 382 van 28 mei 2026, doc-web 10259916 (Azienda di Tutela della Salute per la Liguria, de Ligurische gezondheidsautoriteit)",
  "Garante Privacy, Provvedimento n. 135 del 13 marzo 2025 (doc-web 10128005), rimosso temporaneamente dal sito in ottemperanza alla sentenza del Tribunale di Cosenza n. 972 del 1° luglio 2026 (opposizione accolta)":
    "Garante Privacy, besluit nr. 135 van 13 maart 2025 (doc-web 10128005), tijdelijk van de website verwijderd ter uitvoering van vonnis nr. 972 van 1 juli 2026 van de rechtbank van Cosenza (verzet toegewezen)",
  "AGI Lavoro, «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (sentenza n. 972 del 1° luglio 2026; il testo della sentenza non è stato reperito in fonte ufficiale)":
    "AGI Lavoro, «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (vonnis nr. 972 van 1 juli 2026; de tekst van het vonnis is niet in een officiële bron gevonden)",
  "Avvocati Associati, commento alla sentenza Trib. Cosenza n. 972/2026 (22/09/2026), con passi citati":
    "Avvocati Associati, commentaar op vonnis nr. 972/2026 van de rechtbank van Cosenza (22 september 2026), met geciteerde passages",
  "Legge 20 maggio 1970, n. 300 (Statuto dei Lavoratori), art. 4":
    "Wet van 20 mei 1970, nr. 300 (Italiaans arbeidsstatuut), art. 4",
  "Regolamento UE 2016/679 (GDPR), artt. 5, 13, 25, 35, 88":
    "Verordening (EU) 2016/679 (AVG), art. 5, 13, 25, 35, 88",
  "Betriebsverfassungsgesetz, § 87 (cogestione del consiglio aziendale)":
    "Betriebsverfassungsgesetz, § 87 (medebeslissingsrecht van de ondernemingsraad)",
  "Bundesdatenschutzgesetz, § 26 (dati dei lavoratori)":
    "Bundesdatenschutzgesetz, § 26 (gegevens van werknemers)",
  "Garante del Baden-Württemberg, FAQ sulle basi giuridiche dei dati dei dipendenti (sentenza CGUE C-34/21)":
    "Toezichthouder voor gegevensbescherming van Baden-Württemberg, FAQ over de rechtsgronden voor werknemersgegevens (arrest HvJ-EU C-34/21)",
  "Regolamento UE 2016/679 (GDPR)":
    "Verordening (EU) 2016/679 (AVG)",
  "Garante della Renania-Palatinato, guida sulla localizzazione GPS dei dipendenti":
    "Toezichthouder voor gegevensbescherming van Rijnland-Palts, handleiding over gps-tracking van werknemers",
  "Lista DSK dei trattamenti che richiedono una valutazione d'impatto (settore privato)":
    "DSK-lijst van verwerkingen waarvoor een gegevensbeschermingseffectbeoordeling vereist is (particuliere sector)",
  "BfDI, elenco delle autorità garanti per la protezione dei dati dei Land":
    "BfDI, overzicht van de toezichthouders voor gegevensbescherming van de deelstaten",
  "Garante di Amburgo, comunicato del 1 ottobre 2020 (sanzione H&M)":
    "Toezichthouder voor gegevensbescherming van Hamburg, persbericht van 1 oktober 2020 (boete voor H&M)",
  "BayLDA, autorità garante della Baviera":
    "BayLDA, de Beierse toezichthouder voor gegevensbescherming",
  "BlnBDI, autorità garante di Berlino":
    "BlnBDI, de Berlijnse toezichthouder voor gegevensbescherming",
  "Code du travail, art. L2312-38 (consultazione del CSE sui mezzi di controllo)":
    "Code du travail, art. L2312-38 (raadpleging van het CSE over controlemiddelen)",
  "Code du travail, art. L1222-4 (nessuna raccolta da dispositivo non portato a conoscenza)":
    "Code du travail, art. L1222-4 (geen gegevensverzameling via een apparaat waarvan de werknemer niets weet)",
  "CNIL, guida sulla geolocalizzazione dei veicoli dei dipendenti":
    "CNIL, handleiding over de geolocatie van voertuigen van werknemers",
  "CNIL, lista dei trattamenti che richiedono una valutazione d'impatto (AIPD)":
    "CNIL, lijst van verwerkingen waarvoor een gegevensbeschermingseffectbeoordeling (AIPD) vereist is",
  "CNIL, abolizione delle dichiarazioni preventive dal 25 maggio 2018":
    "CNIL, afschaffing van de voorafgaande aangiften vanaf 25 mei 2018",
  "CNIL, dieci nuove sanzioni (procedura semplificata, 7 novembre 2023)":
    "CNIL, tien nieuwe sancties (vereenvoudigde procedure, 7 november 2023)",
  "CNIL, deliberazione SAN-2022-015 del 7 luglio 2022 (UBEEQO International, 175.000 €), su Légifrance":
    "CNIL, besluit SAN-2022-015 van 7 juli 2022 (UBEEQO International, € 175.000), op Légifrance",
  "Ley Organica 3/2018 (LOPDGDD), art. 90 (geolocalizzazione sul lavoro)":
    "Ley Orgánica 3/2018 (LOPDGDD), art. 90 (geolocatie op het werk)",
  "Estatuto de los Trabajadores, artt. 20.3 e 64":
    "Estatuto de los Trabajadores, art. 20.3 en 64",
  "AEPD, FAQ sul GPS nelle auto aziendali usate dai lavoratori":
    "AEPD, FAQ over gps in bedrijfsauto's die werknemers gebruiken",
  "AEPD, lista dei trattamenti che richiedono una valutazione d'impatto (art. 35.4 GDPR)":
    "AEPD, lijst van verwerkingen waarvoor een gegevensbeschermingseffectbeoordeling vereist is (art. 35 lid 4 AVG)",
  "AEPD, guida sulla protezione dei dati nei rapporti di lavoro":
    "AEPD, handleiding over gegevensbescherming in arbeidsrelaties",
  "AEPD, sanzione PS/00454/2024 (Ares Capital, 200.000 €)":
    "AEPD, sanctie PS/00454/2024 (Ares Capital, € 200.000)",
  "Wet op de ondernemingsraden (WOR), art. 27 (diritto di consenso del consiglio aziendale)":
    "Wet op de ondernemingsraden (WOR), art. 27 (instemmingsrecht van de ondernemingsraad)",
  "Autoriteit Persoonsgegevens, lista dei trattamenti che richiedono una DPIA":
    "Autoriteit Persoonsgegevens, lijst van verwerkingen waarvoor een DPIA vereist is",
  "Autoriteit Persoonsgegevens, condizioni per il controllo dei dipendenti":
    "Autoriteit Persoonsgegevens, voorwaarden voor het controleren van werknemers",
  "Autoriteit Persoonsgegevens, controllo dei dipendenti a distanza (GPS sulle auto aziendali)":
    "Autoriteit Persoonsgegevens, controle van werknemers op afstand (gps in bedrijfsauto's)",
  "Autoriteit Persoonsgegevens, sanzione per il trattamento delle impronte dei dipendenti":
    "Autoriteit Persoonsgegevens, boete voor de verwerking van vingerafdrukken van werknemers",
  "Codigo do Trabalho, art. 20 (mezzi di sorveglianza a distanza)":
    "Código do Trabalho, art. 20 (middelen voor toezicht op afstand)",
  "CNPD, Deliberacao 7680/2014 (geolocalizzazione nel contesto lavorativo)":
    "CNPD, Deliberação 7680/2014 (geolocatie in de arbeidscontext)",
  "Lei 58/2019, art. 28 (relazioni di lavoro)":
    "Lei 58/2019, art. 28 (arbeidsrelaties)",
  "CNPD, videovigilanza: nel contesto lavorativo restano le condizioni del Codice del lavoro, senza l'autorizzazione della CNPD":
    "CNPD, camerabewaking: in de arbeidscontext blijven de voorwaarden van het arbeidswetboek gelden, zonder toestemming van de CNPD",
  "CNPD, valutazione d'impatto sulla protezione dei dati":
    "CNPD, gegevensbeschermingseffectbeoordeling",
  "CNPD, Regulamento n.º 798/2018 (lista dei trattamenti soggetti a valutazione d'impatto)":
    "CNPD, Regulamento n.º 798/2018 (lijst van verwerkingen waarvoor een effectbeoordeling vereist is)",
  "Tribunal da Relação de Lisboa, acórdão del 17 giugno 2026, proc. 2266/25.4T8TVD.L1-4 (GPS del veicolo di una lavoratrice)":
    "Tribunal da Relação de Lisboa, arrest van 17 juni 2026, zaak 2266/25.4T8TVD.L1-4 (gps op het voertuig van een werkneemster)",
  "CNPD, presentare una segnalazione":
    "CNPD, een melding indienen",
  "Datatilsynet, guida sul controllo dei dipendenti (Kontrol af medarbejdere)":
    "Datatilsynet, handleiding over het controleren van werknemers (Kontrol af medarbejdere)",
  "Datatilsynet, lista dei trattamenti che richiedono una valutazione d'impatto":
    "Datatilsynet, lijst van verwerkingen waarvoor een gegevensbeschermingseffectbeoordeling vereist is",
  "Datatilsynet, controlli 2020 sull'obbligo di informazione nelle misure di controllo dei dipendenti (GPS, videosorveglianza e altre)":
    "Datatilsynet, controles in 2020 op de informatieplicht bij maatregelen voor het controleren van werknemers (gps, camerabewaking en andere)",
  "Datatilsynet, aree prioritarie dei controlli nel 2026 (sorveglianza dei dipendenti)":
    "Datatilsynet, prioritaire aandachtsgebieden voor controles in 2026 (toezicht op werknemers)",
  "Datatilsynet (autorità garante danese)":
    "Datatilsynet (Deense toezichthouder voor gegevensbescherming)",
  "Lag 1976:580 om medbestammande i arbetslivet (MBL), § 11":
    "Lag 1976:580 om medbestämmande i arbetslivet (MBL, wet op de medezeggenschap op het werk), § 11",
  "IMY, controllo e sorveglianza dei dipendenti":
    "IMY, controle en toezicht op werknemers",
  "IMY, come usare i servizi di localizzazione (GPS) sui dipendenti":
    "IMY, hoe locatiediensten (gps) bij werknemers te gebruiken",
  "IMY, quando svolgere una valutazione d'impatto":
    "IMY, wanneer een gegevensbeschermingseffectbeoordeling uit te voeren",
  "IMY, presentare un reclamo":
    "IMY, een klacht indienen",
  "IMY, sanzione al Comune di Skelleftea (riconoscimento facciale per le presenze)":
    "IMY, sanctie tegen de gemeente Skellefteå (gezichtsherkenning voor aanwezigheid)",
  "Arbeidsmiljoloven, kap. 9 (misure di controllo, §§ 9-1 e 9-2)":
    "Arbeidsmiljøloven (arbeidsomstandighedenwet), hoofdstuk 9 (controlemaatregelen, §§ 9-1 en 9-2)",
  "Datatilsynet (Norvegia), GPS e tracciamento dei veicoli aziendali":
    "Datatilsynet (Noorwegen), gps en tracking van bedrijfsvoertuigen",
  "Datatilsynet (Norvegia), quando svolgere una valutazione d'impatto":
    "Datatilsynet (Noorwegen), wanneer een gegevensbeschermingseffectbeoordeling uit te voeren",
  "Datatilsynet (autorità garante norvegese)":
    "Datatilsynet (Noorse toezichthouder voor gegevensbescherming)",
  "Personvernnemnda, PVN-2017-07 (uso del GPS per controllare le ore del dipendente)":
    "Personvernnemnda, PVN-2017-07 (gebruik van gps om de uren van de werknemer te controleren)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96 (misure di controllo che toccano la dignita: consenso del consiglio aziendale)":
    "Arbeitsverfassungsgesetz (ArbVG, wet op de arbeidsverhoudingen), § 96 (controlemaatregelen die de menselijke waardigheid raken: toestemming van de ondernemingsraad)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96a (sistemi che trattano dati personali dei lavoratori)":
    "Arbeitsverfassungsgesetz (ArbVG), § 96a (systemen die persoonsgegevens van werknemers verwerken)",
  "DSFA-V, regolamento sui trattamenti che richiedono una valutazione d'impatto":
    "DSFA-V, verordening over verwerkingen waarvoor een gegevensbeschermingseffectbeoordeling vereist is",
  "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (fine del registro DVR)":
    "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (einde van het DVR-register)",
  "Datenschutzbehörde (DSB), decisione 2022-0.021.739 (stop al GPS sui veicoli aziendali)":
    "Datenschutzbehörde (DSB), besluit 2022-0.021.739 (verbod op gps in bedrijfsvoertuigen)",
  "Datenschutzbehörde (DSB), procedura di reclamo":
    "Datenschutzbehörde (DSB), klachtenprocedure",
  "CCT n. 81 del 26 aprile 2002 (controllo delle comunicazioni elettroniche in rete)":
    "CAO nr. 81 van 26 april 2002 (controle op elektronische communicatie in het netwerk)",
  "APD/GBA, geolocalizzazione dei lavoratori":
    "APD/GBA, geolocatie van werknemers",
  "APD/GBA, valutazione d'impatto sulla protezione dei dati":
    "APD/GBA, gegevensbeschermingseffectbeoordeling",
  "APD/GBA, presentare un reclamo":
    "APD/GBA, een klacht indienen",
  "Chambre Contentieuse APD/GBA, decisione 114/2024 (impronte per le presenze, 45.000 euro), testo integrale":
    "Geschillenkamer van de APD/GBA, besluit 114/2024 (vingerafdrukken voor aanwezigheid, € 45.000), volledige tekst",
  "ICO, guida sul monitoraggio dei lavoratori (UK GDPR)":
    "ICO, richtsnoeren over het monitoren van werknemers (UK GDPR)",
  "ICO, sorveglianza nei veicoli":
    "ICO, toezicht in voertuigen",
  "ICO, quando serve una DPIA":
    "ICO, wanneer is een DPIA nodig",
  "ICO, provvedimento sul monitoraggio GPS (Home Office, 2024)":
    "ICO, handhavingsbesluit over gps-monitoring (Home Office, 2024)",
  "ICO, presentare una segnalazione":
    "ICO, een melding indienen",
  "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission dal 30/09/2026)":
    "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission vanaf 30 september 2026)",
  "Regolamento UE 2016/679 (GDPR) come UK GDPR":
    "Verordening (EU) 2016/679 (AVG) als UK GDPR",
  "DPC, guida sul tracciamento dei veicoli aziendali (maggio 2020)":
    "DPC, handleiding over het volgen van bedrijfsvoertuigen (mei 2020)",
  "DPC, pagina sul tracciamento dei veicoli dei dipendenti (aggiornata a maggio 2026)":
    "DPC, pagina over het volgen van voertuigen van werknemers (bijgewerkt in mei 2026)",
  "DPC, lista dei trattamenti che richiedono una DPIA":
    "DPC, lijst van verwerkingen waarvoor een DPIA vereist is",
  "DPC, consultazione preventiva":
    "DPC, voorafgaande raadpleging",
  "DPC, presentare un reclamo":
    "DPC, een klacht indienen",
  "DPC, decisione Limerick City and County Council (dicembre 2021)":
    "DPC, besluit over Limerick City and County Council (december 2021)",
  "DPC, sentenza Doolin v. DPC (High Court, febbraio 2020)":
    "DPC, arrest Doolin v. DPC (High Court, februari 2020)",
  "IFPDT/FDPIC, mezzi tecnici di sorveglianza sul luogo di lavoro":
    "FDPIC, technische toezichtmiddelen op de werkplek",
  "IFPDT/FDPIC, trattamento dei dati da parte del datore di lavoro (CO art. 328b)":
    "FDPIC, gegevensverwerking door de werkgever (OR art. 328b)",
  "IFPDT/FDPIC, valutazione d'impatto sulla protezione dei dati (nLPD art. 22)":
    "FDPIC, gegevensbeschermingseffectbeoordeling (nLPD art. 22)",
  "Legge federale sulla protezione dei dati (nLPD), art. 22, 23 e 60-65 (Fedlex)":
    "Federale wet inzake gegevensbescherming (nLPD), art. 22, 23 en 60-65 (Fedlex)",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo":
    "Verordening (EU) 2016/679 (AVG), ter vergelijking",
  "Legge 190/2018, art. 5 (monitoraggio dei dipendenti)":
    "Wet 190/2018, art. 5 (monitoring van werknemers)",
  "Codul Muncii, art. 40 (obblighi del datore), Portal Legislativ":
    "Codul Muncii (arbeidswetboek), art. 40 (verplichtingen van de werkgever), Portal Legislativ",
  "ANSPDCP, comunicato del 23 marzo 2023 (sanzione Tehnoplus, GPS)":
    "ANSPDCP, persbericht van 23 maart 2023 (boete Tehnoplus, gps)",
  "ANSPDCP, Decizia 174/2018 (lista trattamenti che richiedono DPIA), Monitorul Oficial 919/31.10.2018, art. 1 lett. d e g":
    "ANSPDCP, Decizia 174/2018 (lijst van verwerkingen waarvoor een DPIA vereist is), Monitorul Oficial 919/31.10.2018, art. 1 onder d en g",
  "ANSPDCP, presentazione dei reclami":
    "ANSPDCP, het indienen van klachten",
  "Kodeks pracy, art. 22(2) (monitoraggio), testo consolidato Dz.U. 2026 poz. 1245 (in vigore dal 24 settembre 2026)":
    "Kodeks pracy (arbeidswetboek), art. 22(2) (monitoring), geconsolideerde tekst Dz.U. 2026 nr. 1245 (van kracht vanaf 24 september 2026)",
  "Legge del 4 dicembre 2025 di modifica del Codice del lavoro, Dz.U. 2026 poz. 25 (art. 22(2) par. 8: \"su carta o in forma elettronica\", in vigore dal 27 gennaio 2026)":
    "Wet van 4 december 2025 tot wijziging van het arbeidswetboek, Dz.U. 2026 nr. 25 (art. 22(2) punt 8: \"op papier of in elektronische vorm\", van kracht vanaf 27 januari 2026)",
  "Kodeks pracy, art. 22(3) par. 3-4 (altre forme di monitoraggio, tra cui il GPS), testo consolidato Dz.U. 2026 poz. 1245":
    "Kodeks pracy, art. 22(3) punt 3-4 (andere vormen van monitoring, waaronder gps), geconsolideerde tekst Dz.U. 2026 nr. 1245",
  "UODO, guida alla protezione dei dati sul luogo di lavoro":
    "UODO, handleiding over gegevensbescherming op de werkplek",
  "UODO, lista dei trattamenti che richiedono una DPIA (M.P. 2019 poz. 666)":
    "UODO, lijst van verwerkingen waarvoor een DPIA vereist is (M.P. 2019 nr. 666)",
  "UODO, presentare un reclamo":
    "UODO, een klacht indienen",
  "UODO, sanzione Centrum Medyczne Ujastek (monitoraggio non comunicato ai dipendenti)":
    "UODO, sanctie tegen Centrum Medyczne Ujastek (monitoring niet meegedeeld aan de werknemers)",
  "Zakonik prace (Codice del lavoro), art. 316":
    "Zákoník práce (arbeidswetboek), art. 316",
  "Stanovisko 2/2017 sul trattamento dei dati sul posto di lavoro, pubblicato dall UOOU":
    "Stanovisko 2/2017 over de verwerking van gegevens op het werk, gepubliceerd door de UOOU",
  "UOOU, lista dei trattamenti che richiedono una DPIA":
    "UOOU, lijst van verwerkingen waarvoor een DPIA vereist is",
  "UOOU, presentare una segnalazione":
    "UOOU, een melding indienen",
  "Tribunale municipale di Praga 6 A 42/2013 (Ceska posta, GPS sui portalettere), sentenza":
    "Gemeentelijke rechtbank van Praag 6 A 42/2013 (Česká pošta, gps bij postbezorgers), vonnis",
  "epravo.cz, GPS monitoring zamestnancu podruhe (riporta una multa di 80.000 CZK e 7.770 portalettere, non confermati da fonti ufficiali)":
    "epravo.cz, GPS monitoring zaměstnanců podruhé (meldt een boete van 80.000 CZK en 7.770 postbezorgers, niet bevestigd door officiële bronnen)",
  "UOOU, relazione annuale 2014, controlli su Skoda Auto e Plzensky Prazdroj (GPS nei veicoli aziendali)":
    "UOOU, jaarverslag 2014, controles bij Škoda Auto en Plzeňský Prazdroj (gps in bedrijfsvoertuigen)",
  "HDPA (Garante greco), FAQ sui rapporti di lavoro (geolocalizzazione)":
    "HDPA (Griekse toezichthouder), FAQ over arbeidsrelaties (geolocatie)",
  "Legge 4624/2019, art. 27 (dati dei dipendenti), traduzione ufficiale HDPA":
    "Wet 4624/2019, art. 27 (gegevens van werknemers), officiële vertaling van de HDPA",
  "HDPA, Decisione 65/2018 (lista dei trattamenti che richiedono DPIA)":
    "HDPA, besluit 65/2018 (lijst van verwerkingen waarvoor een DPIA vereist is)",
  "HDPA, sanzione a un datore per geolocalizzazione (16 febbraio 2024)":
    "HDPA, boete tegen een werkgever wegens geolocatie (16 februari 2024)",
  "HDPA (Garante greco), pagina ufficiale":
    "HDPA (Griekse toezichthouder), officiële pagina",
  "Legge sulla protezione della privacy nella vita lavorativa (759/2004) - testo consolidato in finlandese (Finlex)":
    "Wet op de bescherming van de persoonlijke levenssfeer in het arbeidsleven (759/2004), geconsolideerde tekst in het Fins (Finlex)",
  "Garante finlandese (Tietosuojavaltuutettu), FAQ sulla vita lavorativa":
    "Finse toezichthouder (Tietosuojavaltuutettu), FAQ over het arbeidsleven",
  "Garante finlandese, lista dei trattamenti che richiedono una DPIA":
    "Finse toezichthouder, lijst van verwerkingen waarvoor een DPIA vereist is",
  "Garante finlandese, segnalare una violazione":
    "Finse toezichthouder, een inbreuk melden",
  "Garante finlandese, sanzione per dati di localizzazione usati per la rilevazione orario (2021)":
    "Finse toezichthouder, boete voor locatiegegevens die voor de tijdsregistratie zijn gebruikt (2021)",
  "Zakon o zaštiti na radu (legge sicurezza sul lavoro), art. 43 (dispositivi di sorveglianza)":
    "Zakon o zaštiti na radu (wet op de veiligheid op het werk), art. 43 (toezichtapparatuur)",
  "Zakon o radu (legge sul lavoro), art. 29 (dati dei lavoratori) e art. 150 (consultazione del consiglio dei lavoratori)":
    "Zakon o radu (arbeidswet), art. 29 (gegevens van werknemers) en art. 150 (raadpleging van de ondernemingsraad)",
  "AZOP (Garante croato), trattamento dei dati dei dipendenti tramite GPS":
    "AZOP (Kroatische toezichthouder), verwerking van werknemersgegevens via gps",
  "AZOP, lista dei trattamenti che richiedono una DPIA":
    "AZOP, lijst van verwerkingen waarvoor een DPIA vereist is",
  "AZOP, richiesta di accertamento di violazione (reclamo)":
    "AZOP, verzoek om vaststelling van een inbreuk (klacht)",
  "AZOP (Garante croato), pagina ufficiale":
    "AZOP (Kroatische toezichthouder), officiële pagina",
  "IP-RS (Garante sloveno), linee guida sull'uso dei dispositivi GPS":
    "IP-RS (Sloveense toezichthouder), richtlijnen over het gebruik van gps-apparaten",
  "IP-RS, parere 'Sledenje zaposlenim' (tracciamento dei dipendenti)":
    "IP-RS, advies 'Sledenje zaposlenim' (het volgen van werknemers)",
  "IP-RS, comunicato del 15.04.2026: multa di 6.000 euro a un'azienda pubblica per GPS sui dipendenti":
    "IP-RS, persbericht van 15.04.2026: boete van € 6.000 voor een overheidsbedrijf wegens gps bij werknemers",
  "Zakon o delovnih razmerjih (ZDR-1), art. 48 (dati dei lavoratori)":
    "Zakon o delovnih razmerjih (ZDR-1, arbeidsverhoudingenwet), art. 48 (gegevens van werknemers)",
  "Zakon o sodelovanju delavcev pri upravljanju (ZSDU), art. 89-90 (informazione del consiglio dei lavoratori)":
    "Zakon o sodelovanju delavcev pri upravljanju (ZSDU, wet op de deelname van werknemers aan het bestuur), art. 89-90 (informatie aan de ondernemingsraad)",
  "IP-RS, elenco dei trattamenti per cui e' obbligatoria la valutazione d'impatto (art. 35.4 GDPR)":
    "IP-RS, lijst van verwerkingen waarvoor een gegevensbeschermingseffectbeoordeling verplicht is (art. 35 lid 4 AVG)",
  "IP-RS, presentare una segnalazione":
    "IP-RS, een melding indienen",
  "Zakonnik prace (Codice del lavoro), art. 13 par. 4 (monitoraggio dei dipendenti)":
    "Zákonník práce (arbeidswetboek), art. 13 lid 4 (monitoring van werknemers)",
  "UOOU SR (Garante slovacco), procedura di tutela":
    "UOOU SR (Slowaakse toezichthouder), beschermingsprocedure",
  "Parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli, versione slovacca pubblicata dall UOOU SR":
    "Advies 2/2017 over de verwerking van gegevens op het werk (WP249), punt 5.7 voertuigen, Slowaakse versie gepubliceerd door de UOOU SR",
  "Lista slovacca dei trattamenti soggetti a DPIA (punti 3 e 9), pubblicata dall EDPB":
    "Slowaakse lijst van verwerkingen waarvoor een DPIA vereist is (punt 3 en 9), gepubliceerd door het EDPB",
  "UOOU SR, guida sulla liceita del trattamento (versione aggiornata 22/01/2019), esempio del par. 13 c. 4 del Codice del lavoro":
    "UOOU SR, handleiding over de rechtmatigheid van de verwerking (bijgewerkte versie van 22 januari 2019), voorbeeld bij art. 13 lid 4 van het arbeidswetboek",
  "UOOU SR, presentare una proposta di avvio del procedimento (reclamo)":
    "UOOU SR, een voorstel tot inleiding van de procedure indienen (klacht)",
  "UOOU SR, relazione sullo stato della protezione dei dati 2025 (par. 9.2.1, trattamento di dati di geolocalizzazione)":
    "UOOU SR, verslag over de stand van de gegevensbescherming 2025 (punt 9.2.1, verwerking van geolocatiegegevens)",
  "Codice del lavoro (Mt.), art. 9 (diritti della persona) e art. 11/A (controllo dei lavoratori)":
    "Arbeidswetboek (Mt.), art. 9 (persoonlijkheidsrechten) en art. 11/A (controle op werknemers)",
  "NAIH, guida sui trattamenti sul luogo di lavoro (novembre 2016, precedente al GDPR), par. 5 sul GPS":
    "NAIH, handleiding over verwerkingen op de werkplek (november 2016, van vóór de AVG), punt 5 over gps",
  "NAIH, lista dei trattamenti che richiedono una valutazione d'impatto":
    "NAIH, lijst van verwerkingen waarvoor een gegevensbeschermingseffectbeoordeling vereist is",
  "NAIH, sanzione Auchan (monitoraggio dei dipendenti)":
    "NAIH, boete tegen Auchan (monitoring van werknemers)",
  "NAIH (Garante ungherese), pagina ufficiale":
    "NAIH (Hongaarse toezichthouder), officiële pagina",
  "Legge sulla protezione dei dati (ZZLD), testo consolidato sul sito del CPDP (art. 25д e 25и; ultima modifica ДВ 70/2024)":
    "Wet op de bescherming van persoonsgegevens (ZZLD), geconsolideerde tekst op de website van de CPDP (art. 25д en 25и; laatst gewijzigd ДВ 70/2024)",
  "CPDP (Garante bulgaro), guida sulla privacy sul luogo di lavoro (2014, anteriore al GDPR), par. 3.5.2 sistemi GPS":
    "CPDP (Bulgaarse toezichthouder), handleiding over privacy op de werkplek (2014, van vóór de AVG), punt 3.5.2 gps-systemen",
  "CPDP, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "CPDP, lijst van verwerkingen waarvoor een DPIA vereist is (art. 35 lid 4)",
  "CPDP, parere su LUKOIL (riuso della videosorveglianza per valutare i dipendenti)":
    "CPDP, advies over LUKOIL (hergebruik van camerabewaking om werknemers te beoordelen)",
  "CPDP (Garante bulgaro), pagina ufficiale":
    "CPDP (Bulgaarse toezichthouder), officiële pagina",
  "AKI (Garante estone), FAQ sui rapporti di lavoro (GPS)":
    "AKI (Estse toezichthouder), FAQ over arbeidsrelaties (gps)",
  "AKI, guida per il personale sui dati nel rapporto di lavoro (2011, ante-GDPR), punto 2.9 GPS":
    "AKI, handleiding voor personeel over gegevens in de arbeidsrelatie (2011, van vóór de AVG), punt 2.9 gps",
  "Legge sul fiduciario dei lavoratori (Töötajate usaldusisiku seadus), §§ 17 e 20 - Riigi Teataja":
    "Wet op de vertrouwenspersoon van werknemers (Töötajate usaldusisiku seadus), §§ 17 en 20 - Riigi Teataja",
  "Legge estone sulla protezione dei dati personali (Isikuandmete kaitse seadus), §§ 62-73 - Riigi Teataja":
    "Estse wet op de bescherming van persoonsgegevens (Isikuandmete kaitse seadus), §§ 62-73 - Riigi Teataja",
  "AKI, materiale sul trattamento dei dati nel rapporto di lavoro":
    "AKI, materiaal over de verwerking van gegevens in de arbeidsrelatie",
  "AKI, valutazione d'impatto (capitolo 5)":
    "AKI, gegevensbeschermingseffectbeoordeling (hoofdstuk 5)",
  "AKI, presentare un reclamo":
    "AKI, een klacht indienen",
  "AKI (Garante estone), pagina ufficiale":
    "AKI (Estse toezichthouder), officiële pagina",
  "DVI (Garante lettone), posso tracciare i viaggi del mio dipendente? (GPS)":
    "DVI (Letse toezichthouder), mag ik de reizen van mijn werknemer volgen? (gps)",
  "Legge lettone sul trattamento dei dati delle persone fisiche (Fizisko personu datu apstrādes likums) - Likumi.lv":
    "Letse wet op de verwerking van gegevens van natuurlijke personen (Fizisko personu datu apstrādes likums) - Likumi.lv",
  "DVI, videosorveglianza dei dipendenti in presenza (16/09/2022)":
    "DVI, camerabewaking van werknemers op locatie (16 september 2022)",
  "DVI, videosorveglianza dei dipendenti nel lavoro da remoto":
    "DVI, camerabewaking van werknemers die op afstand werken",
  "DVI, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "DVI, lijst van verwerkingen waarvoor een DPIA vereist is (art. 35 lid 4)",
  "DVI, presentare un reclamo":
    "DVI, een klacht indienen",
  "Gruppo art. 29, parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli":
    "Groep artikel 29, advies 2/2017 over de verwerking van gegevens op het werk (WP249), punt 5.7 voertuigen",
  "VDAI, lista dei trattamenti che richiedono una DPIA (voce 10: monitoraggio dei dipendenti)":
    "VDAI, lijst van verwerkingen waarvoor een DPIA vereist is (punt 10: monitoring van werknemers)",
  "VDAI, decisione sul trattamento della corrispondenza personale di un dipendente (2022)":
    "VDAI, besluit over de verwerking van de persoonlijke correspondentie van een werknemer (2022)",
  "VDAI, elenco delle decisioni (multe, ordini e altro) fino al 2025":
    "VDAI, overzicht van de besluiten (boetes, bevelen en overige) tot 2025",
  "VDAI (Garante lituano), servizi e reclami":
    "VDAI (Litouwse toezichthouder), diensten en klachten",
  "Loi du 1er août 2018, art. 71 (nuovo art. L.261-1 del Code du travail) e art. 72 (abrogazione della legge del 2 agosto 2002), Legilux":
    "Loi du 1er août 2018, art. 71 (nieuw art. L.261-1 van de Code du travail) en art. 72 (intrekking van de wet van 2 augustus 2002), Legilux",
  "Code du travail, art. L.261-1 (sorveglianza dei lavoratori) - riproduzione CNPD":
    "Code du travail, art. L.261-1 (toezicht op werknemers) - weergave van de CNPD",
  "CNPD, geolocalizzazione dei veicoli: necessità e proporzionalità":
    "CNPD, geolocatie van voertuigen: noodzaak en evenredigheid",
  "CNPD, geolocalizzazione: valutazione d'impatto (AIPD)":
    "CNPD, geolocatie: gegevensbeschermingseffectbeoordeling (AIPD)",
  "CNPD, decisione 11FR/2021 (sanzione geolocalizzazione veicoli di servizio)":
    "CNPD, besluit 11FR/2021 (sanctie voor geolocatie van dienstvoertuigen)",
  "CNPD, presentare un reclamo (Faire valoir vos droits)":
    "CNPD, een klacht indienen (Faire valoir vos droits)",
  "Regole n. 50/2023 sulla sorveglianza elettronica (Gazzetta ufficiale)":
    "Regels nr. 50/2023 over elektronisch toezicht (Staatscourant)",
  "Regole 1329/2025 di Persónuvernd (modifica delle Regole 50/2023, art. 3: 90 giorni)":
    "Regels 1329/2025 van Persónuvernd (wijziging van Regels 50/2023, art. 3: 90 dagen)",
  "Persónuvernd (Garante islandese), FAQ sul GPS e i dispositivi di localizzazione":
    "Persónuvernd (IJslandse toezichthouder), FAQ over gps en locatieapparaten",
  "Persónuvernd, lista dei trattamenti che richiedono una DPIA (Auglýsing nr. 828/2019)":
    "Persónuvernd, lijst van verwerkingen waarvoor een DPIA vereist is (Auglýsing nr. 828/2019)",
  "Persónuvernd, presentare un reclamo":
    "Persónuvernd, een klacht indienen",
  "Persónuvernd, decisione Islandspostur (uso illecito del GPS su un dipendente)":
    "Persónuvernd, besluit over Íslandspóstur (onrechtmatig gebruik van gps bij een werknemer)",
  "IDPC (Garante maltese), guida al settore del lavoro":
    "IDPC (Maltese toezichthouder), gids voor de arbeidssector",
  "IDPC, valutazione d'impatto sulla protezione dei dati":
    "IDPC, gegevensbeschermingseffectbeoordeling",
  "IDPC, presentare un reclamo":
    "IDPC, een klacht indienen",
  "IDPC, decisione CDP/COMP/579/2025 del 20 aprile 2026 (videosorveglianza della mensa aziendale)":
    "IDPC, besluit CDP/COMP/579/2025 van 20 april 2026 (camerabewaking van de bedrijfskantine)",
  "Legge 125(I)/2018 sulla protezione dei dati (art. 36: abrogazione delle leggi 2001-2012)":
    "Wet 125(I)/2018 over gegevensbescherming (art. 36: intrekking van de wetten 2001-2012)",
  "Commissario cipriota, registro delle attività: abolito l'obbligo di notifica al Commissario (art. 30 GDPR)":
    "Cypriotische Commissaris, register van verwerkingsactiviteiten: de meldingsplicht aan de Commissaris is afgeschaft (art. 30 AVG)",
  "Commissario cipriota, valutazione d'impatto (elenco indicativo: monitoraggio sistematico dei dipendenti, GPS)":
    "Cypriotische Commissaris, gegevensbeschermingseffectbeoordeling (indicatieve lijst: systematische monitoring van werknemers, gps)",
  "GDPR, art. 13 (informazione), testo ufficiale EUR-Lex":
    "AVG, art. 13 (informatie), officiële tekst op EUR-Lex",
  "GDPR, art. 6(1)(f) e considerando 43 (base giuridica e squilibrio fra le parti), testo ufficiale EUR-Lex":
    "AVG, art. 6 lid 1 onder f en overweging 43 (rechtsgrond en onevenwicht tussen partijen), officiële tekst op EUR-Lex",
  "Garante cipriota, pagina ufficiale":
    "Cypriotische toezichthouder, officiële pagina",
  "Commissario cipriota, decisione del 25.10.2019 sul Gruppo Louis (strumento Bradford Factor)":
    "Cypriotische Commissaris, besluit van 25.10.2019 over de Louis Group (Bradford Factor-instrument)",
  "Legge 124/2024 sulla protezione dei dati personali (in vigore dal 1 febbraio 2025)":
    "Wet 124/2024 over de bescherming van persoonsgegevens (van kracht sinds 1 februari 2025)",
  "IDP, linea guida n. 03 del 30.04.2025 sulla videosorveglianza":
    "IDP, richtlijn nr. 03 van 30.04.2025 over camerabewaking",
  "IDP (Garante albanese), pagina ufficiale":
    "IDP (Albanese toezichthouder), officiële pagina",
  "Legge sulla protezione dei dati (LPDP, 87/2018) - testo ufficiale":
    "Wet op de bescherming van persoonsgegevens (LPDP, 87/2018) - officiële tekst",
  "Poverenik, decisione sulla lista dei trattamenti che richiedono una DPIA (Gazzetta 45/2019)":
    "Poverenik, besluit over de lijst van verwerkingen waarvoor een DPIA vereist is (Staatscourant 45/2019)",
  "Odluka sulla lista dei trattamenti che richiedono DPIA (Sl. glasnik RS 45/2019 e 112/2020, testo consolidato)":
    "Odluka over de lijst van verwerkingen waarvoor een DPIA vereist is (Sl. glasnik RS 45/2019 en 112/2020, geconsolideerde tekst)",
  "Poverenik (Garante serbo), competenze e contatti":
    "Poverenik (Servische toezichthouder), bevoegdheden en contactgegevens",
  "Danas, ispezione straordinaria del Poverenik al JKP Mediana di Nis (7 aprile 2026)":
    "Danas, buitengewone inspectie van de Poverenik bij JKP Mediana in Niš (7 april 2026)",
  "N1, GPS su 80 cassonetti del JKP Mediana di Nis (protesta dei lavoratori, gennaio 2026)":
    "N1, gps op 80 afvalcontainers van JKP Mediana in Niš (protest van de werknemers, januari 2026)",
  "Legge sulla protezione dei dati personali (Gazzetta BiH 12/25), testo pubblicato dall AZLP":
    "Wet op de bescherming van persoonsgegevens (Staatscourant van BiH 12/25), tekst gepubliceerd door de AZLP",
  "AZLP, decisione del 10.11.2025 sulla lista dei trattamenti che richiedono una DPIA (punto 8: dati dei dipendenti, controllo di lavoro e spostamenti)":
    "AZLP, besluit van 10.11.2025 over de lijst van verwerkingen waarvoor een DPIA vereist is (punt 8: gegevens van werknemers, controle van werk en verplaatsingen)",
  "AZLP (Garante bosniaco), pagina ufficiale":
    "AZLP (Bosnische toezichthouder), officiële pagina",
  "Legge sulla protezione dei dati personali, Gazzetta ufficiale BiH 12/25":
    "Wet op de bescherming van persoonsgegevens, Staatscourant van BiH 12/25",
  "Legge sulla protezione dei dati personali, testo consolidato pubblicato dall'AZLP (artt. 26-28 e sanzioni, art. 74)":
    "Wet op de bescherming van persoonsgegevens, geconsolideerde tekst gepubliceerd door de AZLP (art. 26-28 en sancties, art. 74)",
  "Nuova legge sulla protezione dei dati personali, Službeni list CG 133/2026 (pubblicata l'11.9.2026, in vigore dal 19.9.2026, si applica dal 19.3.2027, art. 106; artt. 88, 89 e 105)":
    "Nieuwe wet op de bescherming van persoonsgegevens, Službeni list CG 133/2026 (gepubliceerd op 11.9.2026, van kracht sinds 19.9.2026, van toepassing vanaf 19.3.2027, art. 106; art. 88, 89 en 105)",
  "AZLP, posizione del Consiglio sull'uso del GPS nei veicoli di servizio (29.04.2025)":
    "AZLP, standpunt van de Raad over het gebruik van gps in dienstvoertuigen (29.04.2025)",
  "AZLP (Garante montenegrino), contatti":
    "AZLP (Montenegrijnse toezichthouder), contactgegevens",
  "AZLP, moduli (richiesta di tutela dei diritti)":
    "AZLP, formulieren (verzoek om bescherming van rechten)",
  "Regolamento UE 2016/679 (GDPR), riferimento comparativo":
    "Verordening (EU) 2016/679 (AVG), ter vergelijking",
  "Legge sulla protezione dei dati (LPDP, Gazzetta 42/20) - traduzione inglese non ufficiale pubblicata dall'AZLP":
    "Wet op de bescherming van persoonsgegevens (LPDP, Staatscourant 42/20) - niet-officiële Engelse vertaling gepubliceerd door de AZLP",
  "AZLP, lista dei trattamenti che richiedono la DPIA (11.05.2020, punti 10 e 12: posizione e spostamenti, dati dei lavoratori)":
    "AZLP, lijst van verwerkingen waarvoor de DPIA vereist is (11.05.2020, punt 10 en 12: locatie en verplaatsingen, gegevens van werknemers)",
  "AZLP, atti subordinati (regolamenti e liste), pagina ufficiale":
    "AZLP, uitvoeringsbesluiten (verordeningen en lijsten), officiële pagina",
  "AZLP (Garante macedone), pagina ufficiale e reclami":
    "AZLP (Noord-Macedonische toezichthouder), officiële pagina en klachten",
  "Legge dell'Ucraina n. 2297-VI sulla protezione dei dati personali (2010)":
    "Wet van Oekraïne nr. 2297-VI over de bescherming van persoonsgegevens (2010)",
  "Ordine del Difensore civico 1/02-14: procedura di notifica dei trattamenti a rischio particolare":
    "Bevel van de Ombudsman 1/02-14: procedure voor de melding van verwerkingen met een bijzonder risico",
  "Codice ucraino delle infrazioni amministrative, art. 188-39 (violazioni in materia di dati personali)":
    "Oekraïens wetboek van administratieve overtredingen, art. 188-39 (schendingen van de regels over persoonsgegevens)",
  "Difensore civico (Garante ucraino), protezione dei dati personali":
    "Ombudsman (Oekraïense toezichthouder), bescherming van persoonsgegevens",
  "ICLG, protezione dei dati in Ucraina (basi giuridiche, DPIA)":
    "ICLG, gegevensbescherming in Oekraïne (rechtsgronden, DPIA)",
  "CNPDCP, presentare un reclamo":
    "CNPDCP, een klacht indienen",
  "Legge 195/2024 sulla protezione dei dati personali, in vigore dal 23 agosto 2026 (art. 35 DPIA, art. 88 sanzioni), testo inglese pubblicato dal CNPDCP":
    "Wet 195/2024 over de bescherming van persoonsgegevens, van kracht sinds 23 augustus 2026 (art. 35 DPIA, art. 88 sancties), Engelse tekst gepubliceerd door de CNPDCP",
  "CNPDCP, ordine 27/2022: lista dei trattamenti soggetti a valutazione d'impatto (modificata dall'ordine 39/2026)":
    "CNPDCP, bevel 27/2022: lijst van verwerkingen waarvoor een effectbeoordeling vereist is (gewijzigd bij bevel 39/2026)",
  "Legge della Repubblica di Bielorussia n. 99-Z del 7 maggio 2021 sulla protezione dei dati personali (NPDPC)":
    "Wet van de Republiek Belarus nr. 99-Z van 7 mei 2021 over de bescherming van persoonsgegevens (NPDPC)",
  "Ordine OAC n. 94 del 1 giugno 2022: Registro degli operatori di dati personali (casi di iscrizione)":
    "Bevel OAC nr. 94 van 1 juni 2022: Register van exploitanten van persoonsgegevens (gevallen van inschrijving)",
  "NPDPC (N. Shved), responsabilita amministrativa per violazione della normativa sui dati personali (art. 23.7 CAO)":
    "NPDPC (N. Shved), administratieve aansprakelijkheid voor schending van de regels over persoonsgegevens (art. 23.7 CAO)",
  "NPDPC (Garante bielorusso), informazioni e contatti":
    "NPDPC (Wit-Russische toezichthouder), informatie en contactgegevens",
  "GRATA, protezione dei dati e privacy dei dipendenti in Bielorussia":
    "GRATA, gegevensbescherming en privacy van werknemers in Belarus",
  "DLA Piper, applicazione e sanzioni in Bielorussia":
    "DLA Piper, handhaving en sancties in Belarus",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo lontano":
    "Verordening (EU) 2016/679 (AVG), verre vergelijking",
  "ANPD, denúncia di inadempimento della LGPD":
    "ANPD, melding van niet-naleving van de LGPD",
  "ANPD, canale per il titolare dei dati":
    "ANPD, kanaal voor de betrokkene",
  "Lei n. 15.352/2026 (l’ANPD diventa agência reguladora)":
    "Lei n. 15.352/2026 (de ANPD wordt agência reguladora)",
  "BfDI, elenco delle autorità dei Land (per trovare la tua)":
    "BfDI, overzicht van de toezichthouders van de deelstaten (om de uwe te vinden)",
  "BayLDA (esempio, Baviera)":
    "BayLDA (voorbeeld, Beieren)",
  "CNIL, presentare un reclamo":
    "CNIL, een klacht indienen",
  "AEPD, sede elettronica":
    "AEPD, elektronisch loket",
  "CNPD, segnalazioni":
    "CNPD, meldingen",
  "IMY, reclami":
    "IMY, klachten",
  "Datenschutzbehörde (DSB), reclamo":
    "Datenschutzbehörde (DSB), klacht",
  "APD/GBA, reclamo":
    "APD/GBA, klacht",
  "ICO, segnalazioni":
    "ICO, meldingen",
  "DPC, reclami":
    "DPC, klachten",
  "ANSPDCP, reclami":
    "ANSPDCP, klachten",
  "UODO, reclami":
    "UODO, klachten",
  "UOOU, segnalazioni":
    "UOOU, meldingen",
  "Garante, segnalazioni":
    "Toezichthouder, meldingen",
  "AZOP, reclami":
    "AZOP, klachten",
  "IP-RS, segnalazioni":
    "IP-RS, meldingen",
  "UOOU SR, avvio del procedimento":
    "UOOU SR, inleiding van de procedure",
  "AKI, reclami":
    "AKI, klachten",
  "DVI, reclami":
    "DVI, klachten",
  "VDAI, servizi e reclami":
    "VDAI, diensten en klachten",
  "CNPD, reclami":
    "CNPD, klachten",
  "Persónuvernd, reclami":
    "Persónuvernd, klachten",
  "IDPC, reclami":
    "IDPC, klachten",
  "Garante cipriota":
    "Cypriotische toezichthouder",
  "AZLP, tutela dei diritti":
    "AZLP, bescherming van rechten",
  "Difensore civico, protezione dei dati":
    "Ombudsman, gegevensbescherming",
  "CNPDCP, reclami":
    "CNPDCP, klachten",
};
