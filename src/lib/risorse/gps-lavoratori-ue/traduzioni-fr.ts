/**
 * Version française des textes qui, dans les fiches pays, sont écrits comme
 * simples `string` (donc en italien, la langue maîtresse) : les titres des
 * sources et les noms des points de contact. Clé = le texte ITALIEN exact
 * tel qu’il figure dans la fiche, valeur = la version française. Utilisé par
 * `loc()` (./localize.ts) uniquement pour `fr`. Les noms officiels de lois et
 * d’autorités restent dans la langue d’origine, avec une précision française
 * entre parenthèses quand elle aide à comprendre de quoi il s’agit.
 *
 * Une nouvelle source ou un titre modifié dans une fiche sans entrée ici reste
 * en italien sur la page française : le test `traduzioni-fr.test.ts` le signale.
 */
export const TESTI_FR: Readonly<Record<string, string>> = {
  "Legge lituana sulla protezione giuridica dei dati personali (ADTAĮ), art. 5 c. 4, testo consolidato":
    "Loi lituanienne sur la protection juridique des données à caractère personnel (ADTAĮ), art. 5, al. 4, texte consolidé",
  "UOOU, relazione annuale 2012, controllo su Česká pošta (monitoraggio degli spostamenti dei portalettere)":
    "UOOU, rapport annuel 2012, contrôle de Česká pošta (suivi des déplacements des facteurs)",
  "CNPD, Deliberação 2019/494 (norme della Lei 58/2019 disapplicate)":
    "CNPD, Deliberação 2019/494 (dispositions de la Lei 58/2019 écartées)",
  "Garante Privacy, Provvedimento n. 7 del 16 gennaio 2025 (doc-web 10112287)":
    "Garante Privacy, décision n° 7 du 16 janvier 2025 (doc-web 10112287)",
  "Garante Privacy, Provvedimento n. 755 del 18 dicembre 2025, n. 10213711 (Pioneer Hi-Bred Italia Sementi)":
    "Garante Privacy, décision n° 755 du 18 décembre 2025, doc-web 10213711 (Pioneer Hi-Bred Italia Sementi)",
  "Garante Privacy, Provvedimento n. 382 del 28 maggio 2026, n. 10259916 (Azienda di Tutela della Salute per la Liguria)":
    "Garante Privacy, décision n° 382 du 28 mai 2026, doc-web 10259916 (Azienda di Tutela della Salute per la Liguria, l’autorité sanitaire de Ligurie)",
  "Garante Privacy, Provvedimento n. 135 del 13 marzo 2025 (doc-web 10128005), rimosso temporaneamente dal sito in ottemperanza alla sentenza del Tribunale di Cosenza n. 972 del 1° luglio 2026 (opposizione accolta)":
    "Garante Privacy, décision n° 135 du 13 mars 2025 (doc-web 10128005), retirée temporairement du site en exécution du jugement n° 972 du 1er juillet 2026 du tribunal de Cosenza (opposition accueillie)",
  "AGI Lavoro, «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (sentenza n. 972 del 1° luglio 2026; il testo della sentenza non è stato reperito in fonte ufficiale)":
    "AGI Lavoro, « Lavoro agile e geolocalizzazione : sentenza del Tribunale di Cosenza » (jugement n° 972 du 1er juillet 2026 ; le texte du jugement n’a pas été trouvé dans une source officielle)",
  "Avvocati Associati, commento alla sentenza Trib. Cosenza n. 972/2026 (22/09/2026), con passi citati":
    "Avvocati Associati, commentaire du jugement n° 972/2026 du tribunal de Cosenza (22 septembre 2026), avec passages cités",
  "Legge 20 maggio 1970, n. 300 (Statuto dei Lavoratori), art. 4":
    "Loi n° 300 du 20 mai 1970 (Statut des travailleurs italien), art. 4",
  "Regolamento UE 2016/679 (GDPR), artt. 5, 13, 25, 35, 88":
    "Règlement (UE) 2016/679 (RGPD), art. 5, 13, 25, 35 et 88",
  "Betriebsverfassungsgesetz, § 87 (cogestione del consiglio aziendale)":
    "Betriebsverfassungsgesetz (loi allemande sur l’organisation des entreprises), § 87 (codécision du comité d’entreprise)",
  "Bundesdatenschutzgesetz, § 26 (dati dei lavoratori)":
    "Bundesdatenschutzgesetz (loi fédérale allemande sur la protection des données), § 26 (données des salariés)",
  "Garante del Baden-Württemberg, FAQ sulle basi giuridiche dei dati dei dipendenti (sentenza CGUE C-34/21)":
    "Autorité de protection des données du Bade-Wurtemberg, FAQ sur les bases juridiques des données des salariés (arrêt CJUE C-34/21)",
  "Regolamento UE 2016/679 (GDPR)":
    "Règlement (UE) 2016/679 (RGPD)",
  "Garante della Renania-Palatinato, guida sulla localizzazione GPS dei dipendenti":
    "Autorité de protection des données de Rhénanie-Palatinat, guide sur la géolocalisation GPS des salariés",
  "Lista DSK dei trattamenti che richiedono una valutazione d'impatto (settore privato)":
    "Liste de la DSK des traitements nécessitant une analyse d’impact (secteur privé)",
  "BfDI, elenco delle autorità garanti per la protezione dei dati dei Land":
    "BfDI, liste des autorités de protection des données des Länder",
  "Garante di Amburgo, comunicato del 1 ottobre 2020 (sanzione H&M)":
    "Autorité de protection des données de Hambourg, communiqué du 1er octobre 2020 (amende H&M)",
  "BayLDA, autorità garante della Baviera":
    "BayLDA, l’autorité de protection des données de Bavière",
  "BlnBDI, autorità garante di Berlino":
    "BlnBDI, l’autorité de protection des données de Berlin",
  "Code du travail, art. L2312-38 (consultazione del CSE sui mezzi di controllo)":
    "Code du travail, art. L2312-38 (consultation du CSE sur les moyens de contrôle)",
  "Code du travail, art. L1222-4 (nessuna raccolta da dispositivo non portato a conoscenza)":
    "Code du travail, art. L1222-4 (aucune collecte par un dispositif dont le salarié n’a pas été informé)",
  "CNIL, guida sulla geolocalizzazione dei veicoli dei dipendenti":
    "CNIL, guide sur la géolocalisation des véhicules des salariés",
  "CNIL, lista dei trattamenti che richiedono una valutazione d'impatto (AIPD)":
    "CNIL, liste des traitements nécessitant une analyse d’impact (AIPD)",
  "CNIL, abolizione delle dichiarazioni preventive dal 25 maggio 2018":
    "CNIL, suppression des déclarations préalables depuis le 25 mai 2018",
  "CNIL, dieci nuove sanzioni (procedura semplificata, 7 novembre 2023)":
    "CNIL, dix nouvelles sanctions (procédure simplifiée, 7 novembre 2023)",
  "CNIL, deliberazione SAN-2022-015 del 7 luglio 2022 (UBEEQO International, 175.000 €), su Légifrance":
    "CNIL, délibération SAN-2022-015 du 7 juillet 2022 (UBEEQO International, 175 000 €), sur Légifrance",
  "Ley Organica 3/2018 (LOPDGDD), art. 90 (geolocalizzazione sul lavoro)":
    "Ley Orgánica 3/2018 (LOPDGDD), art. 90 (géolocalisation au travail)",
  "Estatuto de los Trabajadores, artt. 20.3 e 64":
    "Estatuto de los Trabajadores, art. 20.3 et 64",
  "AEPD, FAQ sul GPS nelle auto aziendali usate dai lavoratori":
    "AEPD, FAQ sur le GPS dans les véhicules d’entreprise utilisés par les salariés",
  "AEPD, lista dei trattamenti che richiedono una valutazione d'impatto (art. 35.4 GDPR)":
    "AEPD, liste des traitements nécessitant une analyse d’impact (art. 35.4 du RGPD)",
  "AEPD, guida sulla protezione dei dati nei rapporti di lavoro":
    "AEPD, guide sur la protection des données dans les relations de travail",
  "AEPD, sanzione PS/00454/2024 (Ares Capital, 200.000 €)":
    "AEPD, sanction PS/00454/2024 (Ares Capital, 200 000 €)",
  "Wet op de ondernemingsraden (WOR), art. 27 (diritto di consenso del consiglio aziendale)":
    "Wet op de ondernemingsraden (WOR, loi néerlandaise sur les conseils d’entreprise), art. 27 (droit d’approbation du conseil d’entreprise)",
  "Autoriteit Persoonsgegevens, lista dei trattamenti che richiedono una DPIA":
    "Autoriteit Persoonsgegevens, liste des traitements nécessitant une AIPD",
  "Autoriteit Persoonsgegevens, condizioni per il controllo dei dipendenti":
    "Autoriteit Persoonsgegevens, conditions du contrôle des salariés",
  "Autoriteit Persoonsgegevens, controllo dei dipendenti a distanza (GPS sulle auto aziendali)":
    "Autoriteit Persoonsgegevens, contrôle des salariés à distance (GPS dans les véhicules d’entreprise)",
  "Autoriteit Persoonsgegevens, sanzione per il trattamento delle impronte dei dipendenti":
    "Autoriteit Persoonsgegevens, amende pour le traitement des empreintes digitales de salariés",
  "Codigo do Trabalho, art. 20 (mezzi di sorveglianza a distanza)":
    "Código do Trabalho (Code du travail portugais), art. 20 (moyens de surveillance à distance)",
  "CNPD, Deliberacao 7680/2014 (geolocalizzazione nel contesto lavorativo)":
    "CNPD, Deliberação 7680/2014 (géolocalisation dans le cadre du travail)",
  "Lei 58/2019, art. 28 (relazioni di lavoro)":
    "Lei 58/2019, art. 28 (relations de travail)",
  "CNPD, videovigilanza: nel contesto lavorativo restano le condizioni del Codice del lavoro, senza l'autorizzazione della CNPD":
    "CNPD, vidéosurveillance : dans le cadre du travail, les conditions du Code du travail restent applicables, sans autorisation de la CNPD",
  "CNPD, valutazione d'impatto sulla protezione dei dati":
    "CNPD, analyse d’impact relative à la protection des données",
  "CNPD, Regulamento n.º 798/2018 (lista dei trattamenti soggetti a valutazione d'impatto)":
    "CNPD, Regulamento n.º 798/2018 (liste des traitements soumis à une analyse d’impact)",
  "Tribunal da Relação de Lisboa, acórdão del 17 giugno 2026, proc. 2266/25.4T8TVD.L1-4 (GPS del veicolo di una lavoratrice)":
    "Tribunal da Relação de Lisboa, arrêt du 17 juin 2026, dossier 2266/25.4T8TVD.L1-4 (GPS sur le véhicule d’une salariée)",
  "CNPD, presentare una segnalazione":
    "CNPD, déposer un signalement",
  "Datatilsynet, guida sul controllo dei dipendenti (Kontrol af medarbejdere)":
    "Datatilsynet, guide sur le contrôle des salariés (Kontrol af medarbejdere)",
  "Datatilsynet, lista dei trattamenti che richiedono una valutazione d'impatto":
    "Datatilsynet, liste des traitements nécessitant une analyse d’impact",
  "Datatilsynet, controlli 2020 sull'obbligo di informazione nelle misure di controllo dei dipendenti (GPS, videosorveglianza e altre)":
    "Datatilsynet, contrôles de 2020 sur l’obligation d’information dans les mesures de contrôle des salariés (GPS, vidéosurveillance et autres)",
  "Datatilsynet, aree prioritarie dei controlli nel 2026 (sorveglianza dei dipendenti)":
    "Datatilsynet, domaines prioritaires des contrôles en 2026 (surveillance des salariés)",
  "Datatilsynet (autorità garante danese)":
    "Datatilsynet (autorité danoise de protection des données)",
  "Lag 1976:580 om medbestammande i arbetslivet (MBL), § 11":
    "Lag 1976:580 om medbestämmande i arbetslivet (MBL, loi suédoise sur la codétermination dans la vie professionnelle), § 11",
  "IMY, controllo e sorveglianza dei dipendenti":
    "IMY, contrôle et surveillance des salariés",
  "IMY, come usare i servizi di localizzazione (GPS) sui dipendenti":
    "IMY, comment utiliser les services de localisation (GPS) pour les salariés",
  "IMY, quando svolgere una valutazione d'impatto":
    "IMY, quand réaliser une analyse d’impact",
  "IMY, presentare un reclamo":
    "IMY, déposer une réclamation",
  "IMY, sanzione al Comune di Skelleftea (riconoscimento facciale per le presenze)":
    "IMY, sanction contre la commune de Skellefteå (reconnaissance faciale pour les présences)",
  "Arbeidsmiljoloven, kap. 9 (misure di controllo, §§ 9-1 e 9-2)":
    "Arbeidsmiljøloven (loi norvégienne sur l’environnement de travail), chap. 9 (mesures de contrôle, §§ 9-1 et 9-2)",
  "Datatilsynet (Norvegia), GPS e tracciamento dei veicoli aziendali":
    "Datatilsynet (Norvège), GPS et suivi des véhicules d’entreprise",
  "Datatilsynet (Norvegia), quando svolgere una valutazione d'impatto":
    "Datatilsynet (Norvège), quand réaliser une analyse d’impact",
  "Datatilsynet (autorità garante norvegese)":
    "Datatilsynet (autorité norvégienne de protection des données)",
  "Personvernnemnda, PVN-2017-07 (uso del GPS per controllare le ore del dipendente)":
    "Personvernnemnda, PVN-2017-07 (utilisation du GPS pour contrôler les heures d’un salarié)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96 (misure di controllo che toccano la dignita: consenso del consiglio aziendale)":
    "Arbeitsverfassungsgesetz (ArbVG, loi autrichienne sur la constitution du travail), § 96 (mesures de contrôle portant atteinte à la dignité : accord du comité d’entreprise)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96a (sistemi che trattano dati personali dei lavoratori)":
    "Arbeitsverfassungsgesetz (ArbVG), § 96a (systèmes traitant des données personnelles des salariés)",
  "DSFA-V, regolamento sui trattamenti che richiedono una valutazione d'impatto":
    "DSFA-V, règlement sur les traitements nécessitant une analyse d’impact",
  "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (fine del registro DVR)":
    "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (fin du registre DVR)",
  "Datenschutzbehörde (DSB), decisione 2022-0.021.739 (stop al GPS sui veicoli aziendali)":
    "Datenschutzbehörde (DSB), décision 2022-0.021.739 (arrêt du GPS sur les véhicules d’entreprise)",
  "Datenschutzbehörde (DSB), procedura di reclamo":
    "Datenschutzbehörde (DSB), procédure de réclamation",
  "CCT n. 81 del 26 aprile 2002 (controllo delle comunicazioni elettroniche in rete)":
    "Convention collective de travail n° 81 du 26 avril 2002 (contrôle des communications électroniques en réseau)",
  "APD/GBA, geolocalizzazione dei lavoratori":
    "APD/GBA, géolocalisation des travailleurs",
  "APD/GBA, valutazione d'impatto sulla protezione dei dati":
    "APD/GBA, analyse d’impact relative à la protection des données",
  "APD/GBA, presentare un reclamo":
    "APD/GBA, introduire une plainte",
  "Chambre Contentieuse APD/GBA, decisione 114/2024 (impronte per le presenze, 45.000 euro), testo integrale":
    "Chambre contentieuse de l’APD/GBA, décision 114/2024 (empreintes digitales pour les présences, 45 000 euros), texte intégral",
  "ICO, guida sul monitoraggio dei lavoratori (UK GDPR)":
    "ICO, guide sur le contrôle des travailleurs (UK GDPR)",
  "ICO, sorveglianza nei veicoli":
    "ICO, surveillance dans les véhicules",
  "ICO, quando serve una DPIA":
    "ICO, quand une AIPD est nécessaire",
  "ICO, provvedimento sul monitoraggio GPS (Home Office, 2024)":
    "ICO, mesure d’application sur le contrôle par GPS (Home Office, 2024)",
  "ICO, presentare una segnalazione":
    "ICO, signaler un problème",
  "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission dal 30/09/2026)":
    "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission à compter du 30 septembre 2026)",
  "Regolamento UE 2016/679 (GDPR) come UK GDPR":
    "Règlement (UE) 2016/679 (RGPD) tel qu’appliqué au Royaume-Uni (UK GDPR)",
  "DPC, guida sul tracciamento dei veicoli aziendali (maggio 2020)":
    "DPC, guide sur le suivi des véhicules d’entreprise (mai 2020)",
  "DPC, pagina sul tracciamento dei veicoli dei dipendenti (aggiornata a maggio 2026)":
    "DPC, page sur le suivi des véhicules des salariés (mise à jour en mai 2026)",
  "DPC, lista dei trattamenti che richiedono una DPIA":
    "DPC, liste des traitements nécessitant une AIPD",
  "DPC, consultazione preventiva":
    "DPC, consultation préalable",
  "DPC, presentare un reclamo":
    "DPC, déposer une réclamation",
  "DPC, decisione Limerick City and County Council (dicembre 2021)":
    "DPC, décision concernant Limerick City and County Council (décembre 2021)",
  "DPC, sentenza Doolin v. DPC (High Court, febbraio 2020)":
    "DPC, arrêt Doolin c. DPC (High Court, février 2020)",
  "IFPDT/FDPIC, mezzi tecnici di sorveglianza sul luogo di lavoro":
    "PFPDT, moyens techniques de surveillance sur le lieu de travail",
  "IFPDT/FDPIC, trattamento dei dati da parte del datore di lavoro (CO art. 328b)":
    "PFPDT, traitement des données par l’employeur (CO, art. 328b)",
  "IFPDT/FDPIC, valutazione d'impatto sulla protezione dei dati (nLPD art. 22)":
    "PFPDT, analyse d’impact relative à la protection des données (nLPD, art. 22)",
  "Legge federale sulla protezione dei dati (nLPD), art. 22, 23 e 60-65 (Fedlex)":
    "Loi fédérale sur la protection des données (nLPD), art. 22, 23 et 60 à 65 (Fedlex)",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo":
    "Règlement (UE) 2016/679 (RGPD), à titre de comparaison",
  "Legge 190/2018, art. 5 (monitoraggio dei dipendenti)":
    "Loi 190/2018, art. 5 (contrôle des salariés)",
  "Codul Muncii, art. 40 (obblighi del datore), Portal Legislativ":
    "Codul Muncii (Code du travail roumain), art. 40 (obligations de l’employeur), Portal Legislativ",
  "ANSPDCP, comunicato del 23 marzo 2023 (sanzione Tehnoplus, GPS)":
    "ANSPDCP, communiqué du 23 mars 2023 (amende Tehnoplus, GPS)",
  "ANSPDCP, Decizia 174/2018 (lista trattamenti che richiedono DPIA), Monitorul Oficial 919/31.10.2018, art. 1 lett. d e g":
    "ANSPDCP, décision 174/2018 (liste des traitements nécessitant une AIPD), Monitorul Oficial 919/31.10.2018, art. 1, let. d et g",
  "ANSPDCP, presentazione dei reclami":
    "ANSPDCP, dépôt des plaintes",
  "Kodeks pracy, art. 22(2) (monitoraggio), testo consolidato Dz.U. 2026 poz. 1245 (in vigore dal 24 settembre 2026)":
    "Kodeks pracy (Code du travail polonais), art. 22(2) (surveillance), texte consolidé Dz.U. 2026 poz. 1245 (en vigueur depuis le 24 septembre 2026)",
  "Legge del 4 dicembre 2025 di modifica del Codice del lavoro, Dz.U. 2026 poz. 25 (art. 22(2) par. 8: \"su carta o in forma elettronica\", in vigore dal 27 gennaio 2026)":
    "Loi du 4 décembre 2025 modifiant le Code du travail, Dz.U. 2026 poz. 25 (art. 22(2), par. 8 : « sur papier ou sous forme électronique », en vigueur depuis le 27 janvier 2026)",
  "Kodeks pracy, art. 22(3) par. 3-4 (altre forme di monitoraggio, tra cui il GPS), testo consolidato Dz.U. 2026 poz. 1245":
    "Kodeks pracy, art. 22(3), par. 3-4 (autres formes de surveillance, dont le GPS), texte consolidé Dz.U. 2026 poz. 1245",
  "UODO, guida alla protezione dei dati sul luogo di lavoro":
    "UODO, guide sur la protection des données sur le lieu de travail",
  "UODO, lista dei trattamenti che richiedono una DPIA (M.P. 2019 poz. 666)":
    "UODO, liste des traitements nécessitant une AIPD (M.P. 2019 poz. 666)",
  "UODO, presentare un reclamo":
    "UODO, déposer une réclamation",
  "UODO, sanzione Centrum Medyczne Ujastek (monitoraggio non comunicato ai dipendenti)":
    "UODO, sanction contre Centrum Medyczne Ujastek (surveillance non communiquée aux salariés)",
  "Zakonik prace (Codice del lavoro), art. 316":
    "Zákoník práce (Code du travail tchèque), art. 316",
  "Stanovisko 2/2017 sul trattamento dei dati sul posto di lavoro, pubblicato dall UOOU":
    "Avis 2/2017 sur le traitement des données sur le lieu de travail, publié par l’UOOU",
  "UOOU, lista dei trattamenti che richiedono una DPIA":
    "UOOU, liste des traitements nécessitant une AIPD",
  "UOOU, presentare una segnalazione":
    "UOOU, déposer un signalement",
  "Tribunale municipale di Praga 6 A 42/2013 (Ceska posta, GPS sui portalettere), sentenza":
    "Tribunal municipal de Prague, 6 A 42/2013 (Česká pošta, GPS sur les facteurs), jugement",
  "epravo.cz, GPS monitoring zamestnancu podruhe (riporta una multa di 80.000 CZK e 7.770 portalettere, non confermati da fonti ufficiali)":
    "epravo.cz, GPS monitoring zaměstnanců podruhé (fait état d’une amende de 80 000 CZK et de 7 770 facteurs, non confirmés par des sources officielles)",
  "UOOU, relazione annuale 2014, controlli su Skoda Auto e Plzensky Prazdroj (GPS nei veicoli aziendali)":
    "UOOU, rapport annuel 2014, contrôles de Škoda Auto et de Plzeňský Prazdroj (GPS dans les véhicules d’entreprise)",
  "HDPA (Garante greco), FAQ sui rapporti di lavoro (geolocalizzazione)":
    "HDPA (autorité grecque de protection des données), FAQ sur les relations de travail (géolocalisation)",
  "Legge 4624/2019, art. 27 (dati dei dipendenti), traduzione ufficiale HDPA":
    "Loi 4624/2019, art. 27 (données des salariés), traduction officielle de la HDPA",
  "HDPA, Decisione 65/2018 (lista dei trattamenti che richiedono DPIA)":
    "HDPA, décision 65/2018 (liste des traitements nécessitant une AIPD)",
  "HDPA, sanzione a un datore per geolocalizzazione (16 febbraio 2024)":
    "HDPA, sanction contre un employeur pour géolocalisation (16 février 2024)",
  "HDPA (Garante greco), pagina ufficiale":
    "HDPA (autorité grecque de protection des données), page officielle",
  "Legge sulla protezione della privacy nella vita lavorativa (759/2004) - testo consolidato in finlandese (Finlex)":
    "Loi sur la protection de la vie privée dans la vie professionnelle (759/2004), texte consolidé en finnois (Finlex)",
  "Garante finlandese (Tietosuojavaltuutettu), FAQ sulla vita lavorativa":
    "Médiateur finlandais de la protection des données (Tietosuojavaltuutettu), FAQ sur la vie professionnelle",
  "Garante finlandese, lista dei trattamenti che richiedono una DPIA":
    "Médiateur finlandais de la protection des données, liste des traitements nécessitant une AIPD",
  "Garante finlandese, segnalare una violazione":
    "Médiateur finlandais de la protection des données, signaler une violation",
  "Garante finlandese, sanzione per dati di localizzazione usati per la rilevazione orario (2021)":
    "Médiateur finlandais de la protection des données, sanction pour des données de localisation utilisées pour le relevé du temps de travail (2021)",
  "Zakon o zaštiti na radu (legge sicurezza sul lavoro), art. 43 (dispositivi di sorveglianza)":
    "Zakon o zaštiti na radu (loi croate sur la sécurité au travail), art. 43 (dispositifs de surveillance)",
  "Zakon o radu (legge sul lavoro), art. 29 (dati dei lavoratori) e art. 150 (consultazione del consiglio dei lavoratori)":
    "Zakon o radu (loi croate sur le travail), art. 29 (données des salariés) et art. 150 (consultation du conseil des travailleurs)",
  "AZOP (Garante croato), trattamento dei dati dei dipendenti tramite GPS":
    "AZOP (autorité croate de protection des données), traitement des données des salariés par GPS",
  "AZOP, lista dei trattamenti che richiedono una DPIA":
    "AZOP, liste des traitements nécessitant une AIPD",
  "AZOP, richiesta di accertamento di violazione (reclamo)":
    "AZOP, demande de constatation d’une violation (réclamation)",
  "AZOP (Garante croato), pagina ufficiale":
    "AZOP (autorité croate de protection des données), page officielle",
  "IP-RS (Garante sloveno), linee guida sull'uso dei dispositivi GPS":
    "IP-RS (autorité slovène de protection des données), lignes directrices sur l’utilisation des dispositifs GPS",
  "IP-RS, parere 'Sledenje zaposlenim' (tracciamento dei dipendenti)":
    "IP-RS, avis « Sledenje zaposlenim » (suivi des salariés)",
  "IP-RS, comunicato del 15.04.2026: multa di 6.000 euro a un'azienda pubblica per GPS sui dipendenti":
    "IP-RS, communiqué du 15.04.2026 : amende de 6 000 euros contre une entreprise publique pour GPS sur les salariés",
  "Zakon o delovnih razmerjih (ZDR-1), art. 48 (dati dei lavoratori)":
    "Zakon o delovnih razmerjih (ZDR-1, loi slovène sur les relations de travail), art. 48 (données des travailleurs)",
  "Zakon o sodelovanju delavcev pri upravljanju (ZSDU), art. 89-90 (informazione del consiglio dei lavoratori)":
    "Zakon o sodelovanju delavcev pri upravljanju (ZSDU, loi slovène sur la participation des travailleurs à la gestion), art. 89-90 (information du conseil des travailleurs)",
  "IP-RS, elenco dei trattamenti per cui e' obbligatoria la valutazione d'impatto (art. 35.4 GDPR)":
    "IP-RS, liste des traitements pour lesquels l’analyse d’impact est obligatoire (art. 35.4 du RGPD)",
  "IP-RS, presentare una segnalazione":
    "IP-RS, déposer un signalement",
  "Zakonnik prace (Codice del lavoro), art. 13 par. 4 (monitoraggio dei dipendenti)":
    "Zákonník práce (Code du travail slovaque), art. 13, par. 4 (contrôle des salariés)",
  "UOOU SR (Garante slovacco), procedura di tutela":
    "UOOU SR (autorité slovaque de protection des données), procédure de protection",
  "Parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli, versione slovacca pubblicata dall UOOU SR":
    "Avis 2/2017 sur le traitement des données sur le lieu de travail (WP249), par. 5.7 véhicules, version slovaque publiée par l’UOOU SR",
  "Lista slovacca dei trattamenti soggetti a DPIA (punti 3 e 9), pubblicata dall EDPB":
    "Liste slovaque des traitements soumis à une AIPD (points 3 et 9), publiée par le CEPD",
  "UOOU SR, guida sulla liceita del trattamento (versione aggiornata 22/01/2019), esempio del par. 13 c. 4 del Codice del lavoro":
    "UOOU SR, guide sur la licéité du traitement (version mise à jour du 22/01/2019), exemple du par. 13, al. 4 du Code du travail",
  "UOOU SR, presentare una proposta di avvio del procedimento (reclamo)":
    "UOOU SR, déposer une proposition d’ouverture de procédure (réclamation)",
  "UOOU SR, relazione sullo stato della protezione dei dati 2025 (par. 9.2.1, trattamento di dati di geolocalizzazione)":
    "UOOU SR, rapport sur l’état de la protection des données 2025 (par. 9.2.1, traitement des données de géolocalisation)",
  "Codice del lavoro (Mt.), art. 9 (diritti della persona) e art. 11/A (controllo dei lavoratori)":
    "Code du travail hongrois (Mt.), art. 9 (droits de la personnalité) et art. 11/A (contrôle des travailleurs)",
  "NAIH, guida sui trattamenti sul luogo di lavoro (novembre 2016, precedente al GDPR), par. 5 sul GPS":
    "NAIH, guide sur les traitements de données sur le lieu de travail (novembre 2016, antérieur au RGPD), par. 5 sur le GPS",
  "NAIH, lista dei trattamenti che richiedono una valutazione d'impatto":
    "NAIH, liste des traitements nécessitant une analyse d’impact",
  "NAIH, sanzione Auchan (monitoraggio dei dipendenti)":
    "NAIH, sanction contre Auchan (contrôle des salariés)",
  "NAIH (Garante ungherese), pagina ufficiale":
    "NAIH (autorité hongroise de protection des données), page officielle",
  "Legge sulla protezione dei dati (ZZLD), testo consolidato sul sito del CPDP (art. 25д e 25и; ultima modifica ДВ 70/2024)":
    "Loi sur la protection des données personnelles (ZZLD), texte consolidé sur le site de la CPDP (art. 25d et 25i ; dernière modification SG 70/2024)",
  "CPDP (Garante bulgaro), guida sulla privacy sul luogo di lavoro (2014, anteriore al GDPR), par. 3.5.2 sistemi GPS":
    "CPDP (autorité bulgare de protection des données), guide sur la vie privée sur le lieu de travail (2014, antérieur au RGPD), par. 3.5.2 systèmes GPS",
  "CPDP, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "CPDP, liste des traitements nécessitant une AIPD (art. 35.4)",
  "CPDP, parere su LUKOIL (riuso della videosorveglianza per valutare i dipendenti)":
    "CPDP, avis sur LUKOIL (réutilisation de la vidéosurveillance pour évaluer les salariés)",
  "CPDP (Garante bulgaro), pagina ufficiale":
    "CPDP (autorité bulgare de protection des données), page officielle",
  "AKI (Garante estone), FAQ sui rapporti di lavoro (GPS)":
    "AKI (autorité estonienne de protection des données), FAQ sur les relations de travail (GPS)",
  "AKI, guida per il personale sui dati nel rapporto di lavoro (2011, ante-GDPR), punto 2.9 GPS":
    "AKI, guide à l’usage du personnel sur les données dans la relation de travail (2011, antérieur au RGPD), point 2.9 GPS",
  "Legge sul fiduciario dei lavoratori (Töötajate usaldusisiku seadus), §§ 17 e 20 - Riigi Teataja":
    "Loi sur le représentant des salariés (Töötajate usaldusisiku seadus), §§ 17 et 20 - Riigi Teataja",
  "Legge estone sulla protezione dei dati personali (Isikuandmete kaitse seadus), §§ 62-73 - Riigi Teataja":
    "Loi estonienne sur la protection des données personnelles (Isikuandmete kaitse seadus), §§ 62-73 - Riigi Teataja",
  "AKI, materiale sul trattamento dei dati nel rapporto di lavoro":
    "AKI, documentation sur le traitement des données dans la relation de travail",
  "AKI, valutazione d'impatto (capitolo 5)":
    "AKI, analyse d’impact (chapitre 5)",
  "AKI, presentare un reclamo":
    "AKI, déposer une réclamation",
  "AKI (Garante estone), pagina ufficiale":
    "AKI (autorité estonienne de protection des données), page officielle",
  "DVI (Garante lettone), posso tracciare i viaggi del mio dipendente? (GPS)":
    "DVI (autorité lettone de protection des données), puis-je suivre les trajets de mon salarié ? (GPS)",
  "Legge lettone sul trattamento dei dati delle persone fisiche (Fizisko personu datu apstrādes likums) - Likumi.lv":
    "Loi lettone sur le traitement des données des personnes physiques (Fizisko personu datu apstrādes likums) - Likumi.lv",
  "DVI, videosorveglianza dei dipendenti in presenza (16/09/2022)":
    "DVI, vidéosurveillance des salariés sur site (16/09/2022)",
  "DVI, videosorveglianza dei dipendenti nel lavoro da remoto":
    "DVI, vidéosurveillance des salariés en télétravail",
  "DVI, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "DVI, liste des traitements nécessitant une AIPD (art. 35.4)",
  "DVI, presentare un reclamo":
    "DVI, déposer une réclamation",
  "Gruppo art. 29, parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli":
    "Groupe de travail « Article 29 », avis 2/2017 sur le traitement des données sur le lieu de travail (WP249), par. 5.7 véhicules",
  "VDAI, lista dei trattamenti che richiedono una DPIA (voce 10: monitoraggio dei dipendenti)":
    "VDAI, liste des traitements nécessitant une AIPD (point 10 : contrôle des salariés)",
  "VDAI, decisione sul trattamento della corrispondenza personale di un dipendente (2022)":
    "VDAI, décision sur le traitement de la correspondance personnelle d’un salarié (2022)",
  "VDAI, elenco delle decisioni (multe, ordini e altro) fino al 2025":
    "VDAI, liste des décisions (amendes, injonctions et autres) jusqu’en 2025",
  "VDAI (Garante lituano), servizi e reclami":
    "VDAI (autorité lituanienne de protection des données), services et réclamations",
  "Loi du 1er août 2018, art. 71 (nuovo art. L.261-1 del Code du travail) e art. 72 (abrogazione della legge del 2 agosto 2002), Legilux":
    "Loi du 1er août 2018, art. 71 (nouvel art. L.261-1 du Code du travail) et art. 72 (abrogation de la loi du 2 août 2002), Legilux",
  "Code du travail, art. L.261-1 (sorveglianza dei lavoratori) - riproduzione CNPD":
    "Code du travail, art. L.261-1 (surveillance des salariés) - reproduction CNPD",
  "CNPD, geolocalizzazione dei veicoli: necessità e proporzionalità":
    "CNPD, géolocalisation des véhicules : nécessité et proportionnalité",
  "CNPD, geolocalizzazione: valutazione d'impatto (AIPD)":
    "CNPD, géolocalisation : analyse d’impact (AIPD)",
  "CNPD, decisione 11FR/2021 (sanzione geolocalizzazione veicoli di servizio)":
    "CNPD, décision 11FR/2021 (sanction pour la géolocalisation de véhicules de service)",
  "CNPD, presentare un reclamo (Faire valoir vos droits)":
    "CNPD, déposer une réclamation (Faire valoir vos droits)",
  "Regole n. 50/2023 sulla sorveglianza elettronica (Gazzetta ufficiale)":
    "Règles n° 50/2023 sur la surveillance électronique (Journal officiel)",
  "Regole 1329/2025 di Persónuvernd (modifica delle Regole 50/2023, art. 3: 90 giorni)":
    "Règles 1329/2025 de la Persónuvernd (modification des Règles 50/2023, art. 3 : 90 jours)",
  "Persónuvernd (Garante islandese), FAQ sul GPS e i dispositivi di localizzazione":
    "Persónuvernd (autorité islandaise de protection des données), FAQ sur le GPS et les dispositifs de localisation",
  "Persónuvernd, lista dei trattamenti che richiedono una DPIA (Auglýsing nr. 828/2019)":
    "Persónuvernd, liste des traitements nécessitant une AIPD (Auglýsing nr. 828/2019)",
  "Persónuvernd, presentare un reclamo":
    "Persónuvernd, déposer une réclamation",
  "Persónuvernd, decisione Islandspostur (uso illecito del GPS su un dipendente)":
    "Persónuvernd, décision Islandspostur (usage illicite du GPS sur un salarié)",
  "IDPC (Garante maltese), guida al settore del lavoro":
    "IDPC (autorité maltaise de protection des données), guide pour le secteur de l’emploi",
  "IDPC, valutazione d'impatto sulla protezione dei dati":
    "IDPC, analyse d’impact relative à la protection des données",
  "IDPC, presentare un reclamo":
    "IDPC, déposer une réclamation",
  "IDPC, decisione CDP/COMP/579/2025 del 20 aprile 2026 (videosorveglianza della mensa aziendale)":
    "IDPC, décision CDP/COMP/579/2025 du 20 avril 2026 (vidéosurveillance de la cantine d’entreprise)",
  "Legge 125(I)/2018 sulla protezione dei dati (art. 36: abrogazione delle leggi 2001-2012)":
    "Loi 125(I)/2018 sur la protection des données (art. 36 : abrogation des lois de 2001 à 2012)",
  "Commissario cipriota, registro delle attività: abolito l'obbligo di notifica al Commissario (art. 30 GDPR)":
    "Commissaire chypriote, registre des activités : l’obligation de notification au Commissaire est supprimée (art. 30 du RGPD)",
  "Commissario cipriota, valutazione d'impatto (elenco indicativo: monitoraggio sistematico dei dipendenti, GPS)":
    "Commissaire chypriote, analyse d’impact (liste indicative : surveillance systématique des salariés, GPS)",
  "GDPR, art. 13 (informazione), testo ufficiale EUR-Lex":
    "RGPD, art. 13 (information), texte officiel sur EUR-Lex",
  "GDPR, art. 6(1)(f) e considerando 43 (base giuridica e squilibrio fra le parti), testo ufficiale EUR-Lex":
    "RGPD, art. 6, par. 1, point f), et considérant 43 (base juridique et déséquilibre entre les parties), texte officiel sur EUR-Lex",
  "Garante cipriota, pagina ufficiale":
    "Commissaire chypriote, page officielle",
  "Commissario cipriota, decisione del 25.10.2019 sul Gruppo Louis (strumento Bradford Factor)":
    "Commissaire chypriote, décision du 25.10.2019 concernant le groupe Louis (outil Bradford Factor)",
  "Legge 124/2024 sulla protezione dei dati personali (in vigore dal 1 febbraio 2025)":
    "Loi 124/2024 sur la protection des données personnelles (en vigueur depuis le 1er février 2025)",
  "IDP, linea guida n. 03 del 30.04.2025 sulla videosorveglianza":
    "IDP, ligne directrice n° 03 du 30.04.2025 sur la vidéosurveillance",
  "IDP (Garante albanese), pagina ufficiale":
    "IDP (autorité albanaise de protection des données), page officielle",
  "Legge sulla protezione dei dati (LPDP, 87/2018) - testo ufficiale":
    "Loi sur la protection des données (LPDP, 87/2018) - texte officiel",
  "Poverenik, decisione sulla lista dei trattamenti che richiedono una DPIA (Gazzetta 45/2019)":
    "Poverenik, décision sur la liste des traitements nécessitant une AIPD (Journal officiel 45/2019)",
  "Odluka sulla lista dei trattamenti che richiedono DPIA (Sl. glasnik RS 45/2019 e 112/2020, testo consolidato)":
    "Odluka (décision) sur la liste des traitements nécessitant une AIPD (Sl. glasnik RS 45/2019 et 112/2020, texte consolidé)",
  "Poverenik (Garante serbo), competenze e contatti":
    "Poverenik (autorité serbe de protection des données), compétences et coordonnées",
  "Danas, ispezione straordinaria del Poverenik al JKP Mediana di Nis (7 aprile 2026)":
    "Danas, inspection extraordinaire du Poverenik à la JKP Mediana de Niš (7 avril 2026)",
  "N1, GPS su 80 cassonetti del JKP Mediana di Nis (protesta dei lavoratori, gennaio 2026)":
    "N1, GPS sur 80 conteneurs de la JKP Mediana de Niš (protestation des travailleurs, janvier 2026)",
  "Legge sulla protezione dei dati personali (Gazzetta BiH 12/25), testo pubblicato dall AZLP":
    "Loi sur la protection des données personnelles (Journal officiel de BiH 12/25), texte publié par l’AZLP",
  "AZLP, decisione del 10.11.2025 sulla lista dei trattamenti che richiedono una DPIA (punto 8: dati dei dipendenti, controllo di lavoro e spostamenti)":
    "AZLP, décision du 10.11.2025 sur la liste des traitements nécessitant une AIPD (point 8 : données des salariés, contrôle du travail et des déplacements)",
  "AZLP (Garante bosniaco), pagina ufficiale":
    "AZLP (autorité bosnienne de protection des données), page officielle",
  "Legge sulla protezione dei dati personali, Gazzetta ufficiale BiH 12/25":
    "Loi sur la protection des données personnelles, Journal officiel de BiH 12/25",
  "Legge sulla protezione dei dati personali, testo consolidato pubblicato dall'AZLP (artt. 26-28 e sanzioni, art. 74)":
    "Loi sur la protection des données personnelles, texte consolidé publié par l’AZLP (art. 26 à 28 et sanctions, art. 74)",
  "Nuova legge sulla protezione dei dati personali, Službeni list CG 133/2026 (pubblicata l'11.9.2026, in vigore dal 19.9.2026, si applica dal 19.3.2027, art. 106; artt. 88, 89 e 105)":
    "Nouvelle loi sur la protection des données personnelles, Službeni list CG 133/2026 (publiée le 11.9.2026, en vigueur depuis le 19.9.2026, applicable à partir du 19.3.2027, art. 106 ; art. 88, 89 et 105)",
  "AZLP, posizione del Consiglio sull'uso del GPS nei veicoli di servizio (29.04.2025)":
    "AZLP, position du Conseil sur l’utilisation du GPS dans les véhicules de service (29.04.2025)",
  "AZLP (Garante montenegrino), contatti":
    "AZLP (autorité monténégrine de protection des données), coordonnées",
  "AZLP, moduli (richiesta di tutela dei diritti)":
    "AZLP, formulaires (demande de protection des droits)",
  "Regolamento UE 2016/679 (GDPR), riferimento comparativo":
    "Règlement (UE) 2016/679 (RGPD), à titre de comparaison",
  "Legge sulla protezione dei dati (LPDP, Gazzetta 42/20) - traduzione inglese non ufficiale pubblicata dall'AZLP":
    "Loi sur la protection des données (LPDP, Journal officiel 42/20) - traduction anglaise non officielle publiée par l’AZLP",
  "AZLP, lista dei trattamenti che richiedono la DPIA (11.05.2020, punti 10 e 12: posizione e spostamenti, dati dei lavoratori)":
    "AZLP, liste des traitements nécessitant l’AIPD (11.05.2020, points 10 et 12 : localisation et déplacements, données des travailleurs)",
  "AZLP, atti subordinati (regolamenti e liste), pagina ufficiale":
    "AZLP, actes subordonnés (règlements et listes), page officielle",
  "AZLP (Garante macedone), pagina ufficiale e reclami":
    "AZLP (autorité nord-macédonienne de protection des données), page officielle et réclamations",
  "Legge dell'Ucraina n. 2297-VI sulla protezione dei dati personali (2010)":
    "Loi ukrainienne n° 2297-VI sur la protection des données personnelles (2010)",
  "Ordine del Difensore civico 1/02-14: procedura di notifica dei trattamenti a rischio particolare":
    "Ordonnance du Médiateur 1/02-14 : procédure de notification des traitements à risque particulier",
  "Codice ucraino delle infrazioni amministrative, art. 188-39 (violazioni in materia di dati personali)":
    "Code ukrainien des infractions administratives, art. 188-39 (violations en matière de données personnelles)",
  "Difensore civico (Garante ucraino), protezione dei dati personali":
    "Médiateur (autorité ukrainienne de protection des données), protection des données personnelles",
  "ICLG, protezione dei dati in Ucraina (basi giuridiche, DPIA)":
    "ICLG, protection des données en Ukraine (bases juridiques, AIPD)",
  "CNPDCP, presentare un reclamo":
    "CNPDCP, déposer une réclamation",
  "Legge 195/2024 sulla protezione dei dati personali, in vigore dal 23 agosto 2026 (art. 35 DPIA, art. 88 sanzioni), testo inglese pubblicato dal CNPDCP":
    "Loi 195/2024 sur la protection des données personnelles, en vigueur depuis le 23 août 2026 (art. 35 AIPD, art. 88 sanctions), texte anglais publié par la CNPDCP",
  "CNPDCP, ordine 27/2022: lista dei trattamenti soggetti a valutazione d'impatto (modificata dall'ordine 39/2026)":
    "CNPDCP, ordre 27/2022 : liste des traitements soumis à une analyse d’impact (modifiée par l’ordre 39/2026)",
  "Legge della Repubblica di Bielorussia n. 99-Z del 7 maggio 2021 sulla protezione dei dati personali (NPDPC)":
    "Loi de la République du Bélarus n° 99-Z du 7 mai 2021 sur la protection des données personnelles (NPDPC)",
  "Ordine OAC n. 94 del 1 giugno 2022: Registro degli operatori di dati personali (casi di iscrizione)":
    "Ordre OAC n° 94 du 1er juin 2022 : Registre des opérateurs de données personnelles (cas d’inscription)",
  "NPDPC (N. Shved), responsabilita amministrativa per violazione della normativa sui dati personali (art. 23.7 CAO)":
    "NPDPC (N. Shved), responsabilité administrative en cas de violation de la législation sur les données personnelles (art. 23.7 du CAO)",
  "NPDPC (Garante bielorusso), informazioni e contatti":
    "NPDPC (autorité biélorusse de protection des données), informations et coordonnées",
  "GRATA, protezione dei dati e privacy dei dipendenti in Bielorussia":
    "GRATA, protection des données et vie privée des salariés au Bélarus",
  "DLA Piper, applicazione e sanzioni in Bielorussia":
    "DLA Piper, application et sanctions au Bélarus",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo lontano":
    "Règlement (UE) 2016/679 (RGPD), point de comparaison éloigné",
  "ANPD, denúncia di inadempimento della LGPD":
    "ANPD, dénonciation d’un manquement à la LGPD",
  "ANPD, canale per il titolare dei dati":
    "ANPD, canal pour la personne concernée",
  "Lei n. 15.352/2026 (l’ANPD diventa agência reguladora)":
    "Lei n. 15.352/2026 (l’ANPD devient une agência reguladora, autorité de régulation)",
  "BfDI, elenco delle autorità dei Land (per trovare la tua)":
    "BfDI, liste des autorités des Länder (pour trouver la vôtre)",
  "BayLDA (esempio, Baviera)":
    "BayLDA (exemple : Bavière)",
  "CNIL, presentare un reclamo":
    "CNIL, déposer une réclamation",
  "AEPD, sede elettronica":
    "AEPD, sede electrónica (portail en ligne)",
  "CNPD, segnalazioni":
    "CNPD, signalements",
  "IMY, reclami":
    "IMY, réclamations",
  "Datenschutzbehörde (DSB), reclamo":
    "Datenschutzbehörde (DSB), réclamation",
  "APD/GBA, reclamo":
    "APD/GBA, réclamation",
  "ICO, segnalazioni":
    "ICO, signalements",
  "DPC, reclami":
    "DPC, réclamations",
  "ANSPDCP, reclami":
    "ANSPDCP, réclamations",
  "UODO, reclami":
    "UODO, réclamations",
  "UOOU, segnalazioni":
    "UOOU, signalements",
  "Garante, segnalazioni":
    "Médiateur de la protection des données, signalements",
  "AZOP, reclami":
    "AZOP, réclamations",
  "IP-RS, segnalazioni":
    "IP-RS, signalements",
  "UOOU SR, avvio del procedimento":
    "UOOU SR, ouverture de la procédure",
  "AKI, reclami":
    "AKI, réclamations",
  "DVI, reclami":
    "DVI, réclamations",
  "VDAI, servizi e reclami":
    "VDAI, services et réclamations",
  "CNPD, reclami":
    "CNPD, réclamations",
  "Persónuvernd, reclami":
    "Persónuvernd, réclamations",
  "IDPC, reclami":
    "IDPC, réclamations",
  "Garante cipriota":
    "Commissaire chypriote",
  "AZLP, tutela dei diritti":
    "AZLP, protection des droits",
  "Difensore civico, protezione dei dati":
    "Médiateur, protection des données",
  "CNPDCP, reclami":
    "CNPDCP, réclamations",
};
