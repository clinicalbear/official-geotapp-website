/**
 * Ελληνική εκδοχή των κειμένων που στις κάρτες χωρών είναι γραμμένα ως απλό
 * `string` (δηλαδή στα ιταλικά, τη βασική γλώσσα): οι τίτλοι των πηγών και τα
 * ονόματα των σημείων επικοινωνίας. Κλειδί = το ακριβές ΙΤΑΛΙΚΟ κείμενο όπως
 * εμφανίζεται στην κάρτα, τιμή = η ελληνική εκδοχή. Χρησιμοποιείται από το
 * `loc()` (./localize.ts) αποκλειστικά για το `el`. Τα επίσημα ονόματα νόμων και
 * αρχών μένουν στην πρωτότυπη γλώσσα, με ελληνική εξήγηση σε παρένθεση όπου
 * βοηθά να καταλάβει ο αναγνώστης περί τίνος πρόκειται.
 *
 * Μια νέα πηγή ή ένας αλλαγμένος τίτλος σε κάρτα χωρίς εγγραφή εδώ μένει στα
 * ιταλικά στην ελληνική σελίδα: το τεστ `traduzioni-el.test.ts` το επισημαίνει.
 */
export const TESTI_EL: Readonly<Record<string, string>> = {
  "Legge lituana sulla protezione giuridica dei dati personali (ADTAĮ), art. 5 c. 4, testo consolidato":
    "Λιθουανικός νόμος για τη νομική προστασία των δεδομένων προσωπικού χαρακτήρα (ADTAĮ), άρθρο 5 παρ. 4, κωδικοποιημένο κείμενο",
  "UOOU, relazione annuale 2012, controllo su Česká pošta (monitoraggio degli spostamenti dei portalettere)":
    "UOOU, ετήσια έκθεση 2012, έλεγχος στην Česká pošta (παρακολούθηση των μετακινήσεων των ταχυδρόμων)",
  "CNPD, Deliberação 2019/494 (norme della Lei 58/2019 disapplicate)":
    "CNPD, Deliberação 2019/494 (διατάξεις του Lei 58/2019 που δεν εφαρμόζονται)",
  "Garante Privacy, Provvedimento n. 7 del 16 gennaio 2025 (doc-web 10112287)":
    "Garante Privacy, απόφαση αρ. 7 της 16ης Ιανουαρίου 2025 (doc-web 10112287)",
  "Garante Privacy, Provvedimento n. 755 del 18 dicembre 2025, n. 10213711 (Pioneer Hi-Bred Italia Sementi)":
    "Garante Privacy, απόφαση αρ. 755 της 18ης Δεκεμβρίου 2025, doc-web 10213711 (Pioneer Hi-Bred Italia Sementi)",
  "Garante Privacy, Provvedimento n. 382 del 28 maggio 2026, n. 10259916 (Azienda di Tutela della Salute per la Liguria)":
    "Garante Privacy, απόφαση αρ. 382 της 28ης Μαΐου 2026, doc-web 10259916 (Azienda di Tutela della Salute per la Liguria, η υγειονομική αρχή της Λιγουρίας)",
  "Garante Privacy, Provvedimento n. 135 del 13 marzo 2025 (doc-web 10128005), rimosso temporaneamente dal sito in ottemperanza alla sentenza del Tribunale di Cosenza n. 972 del 1° luglio 2026 (opposizione accolta)":
    "Garante Privacy, απόφαση αρ. 135 της 13ης Μαρτίου 2025 (doc-web 10128005), αφαιρέθηκε προσωρινά από τον ιστότοπο κατ' εφαρμογή της απόφασης αρ. 972 της 1ης Ιουλίου 2026 του Πρωτοδικείου της Κοζέντσα (η ανακοπή έγινε δεκτή)",
  "Avvocati Associati, commento alla sentenza Trib. Cosenza n. 972/2026 (22/09/2026), con passi citati":
    "Avvocati Associati, σχολιασμός της απόφασης αρ. 972/2026 του Πρωτοδικείου της Κοζέντσα (22/09/2026), με παραθέματα",
  "Legge 20 maggio 1970, n. 300 (Statuto dei Lavoratori), art. 4":
    "Νόμος αρ. 300 της 20ής Μαΐου 1970 (ιταλικός νόμος για τα δικαιώματα των εργαζομένων), άρθρο 4",
  "Regolamento UE 2016/679 (GDPR), artt. 5, 13, 25, 35, 88":
    "Κανονισμός (ΕΕ) 2016/679 (ΓΚΠΔ), άρθρα 5, 13, 25, 35, 88",
  "Betriebsverfassungsgesetz, § 87 (cogestione del consiglio aziendale)":
    "Betriebsverfassungsgesetz (γερμανικός νόμος για το καθεστώς των επιχειρήσεων), § 87 (συναπόφαση του εργοστασιακού συμβουλίου)",
  "Bundesdatenschutzgesetz, § 26 (dati dei lavoratori)":
    "Bundesdatenschutzgesetz (γερμανικός ομοσπονδιακός νόμος για την προστασία δεδομένων), § 26 (δεδομένα των εργαζομένων)",
  "Garante del Baden-Württemberg, FAQ sulle basi giuridiche dei dati dei dipendenti (sentenza CGUE C-34/21)":
    "Αρχή προστασίας δεδομένων του Βάδης-Βυρτεμβέργης, συχνές ερωτήσεις για τις νομικές βάσεις των δεδομένων των εργαζομένων (απόφαση ΔΕΕ C-34/21)",
  "Regolamento UE 2016/679 (GDPR)":
    "Κανονισμός (ΕΕ) 2016/679 (ΓΚΠΔ)",
  "Garante della Renania-Palatinato, guida sulla localizzazione GPS dei dipendenti":
    "Αρχή προστασίας δεδομένων της Ρηνανίας-Παλατινάτου, οδηγός για τον εντοπισμό τοποθεσίας των εργαζομένων μέσω GPS",
  "Lista DSK dei trattamenti che richiedono una valutazione d'impatto (settore privato)":
    "Κατάλογος DSK των πράξεων επεξεργασίας που απαιτούν εκτίμηση αντικτύπου (ιδιωτικός τομέας)",
  "BfDI, elenco delle autorità garanti per la protezione dei dati dei Land":
    "BfDI, κατάλογος των αρχών προστασίας δεδομένων των ομόσπονδων κρατιδίων",
  "Garante di Amburgo, comunicato del 1 ottobre 2020 (sanzione H&M)":
    "Αρχή προστασίας δεδομένων του Αμβούργου, ανακοίνωση της 1ης Οκτωβρίου 2020 (πρόστιμο H&M)",
  "BayLDA, autorità garante della Baviera":
    "BayLDA, η αρχή προστασίας δεδομένων της Βαυαρίας",
  "BlnBDI, autorità garante di Berlino":
    "BlnBDI, η αρχή προστασίας δεδομένων του Βερολίνου",
  "Code du travail, art. L2312-38 (consultazione del CSE sui mezzi di controllo)":
    "Code du travail, άρθρο L2312-38 (διαβούλευση με την CSE για τα μέσα ελέγχου)",
  "Code du travail, art. L1222-4 (nessuna raccolta da dispositivo non portato a conoscenza)":
    "Code du travail, άρθρο L1222-4 (απαγορεύεται η συλλογή δεδομένων με συσκευή για την οποία δεν έχει ενημερωθεί ο εργαζόμενος)",
  "CNIL, guida sulla geolocalizzazione dei veicoli dei dipendenti":
    "CNIL, οδηγός για τη γεωεντοπιστική παρακολούθηση των οχημάτων των εργαζομένων",
  "CNIL, lista dei trattamenti che richiedono una valutazione d'impatto (AIPD)":
    "CNIL, κατάλογος των πράξεων επεξεργασίας που απαιτούν εκτίμηση αντικτύπου (AIPD)",
  "CNIL, abolizione delle dichiarazioni preventive dal 25 maggio 2018":
    "CNIL, κατάργηση των προηγούμενων δηλώσεων από τις 25 Μαΐου 2018",
  "CNIL, deliberazione SAN-2022-015 del 7 luglio 2022 (UBEEQO International, 175.000 €), su Légifrance":
    "CNIL, απόφαση SAN-2022-015 της 7ης Ιουλίου 2022 (UBEEQO International, 175.000 €), στο Légifrance",
  "Ley Organica 3/2018 (LOPDGDD), art. 90 (geolocalizzazione sul lavoro)":
    "Ley Orgánica 3/2018 (LOPDGDD), άρθρο 90 (γεωεντοπισμός στην εργασία)",
  "Estatuto de los Trabajadores, artt. 20.3 e 64":
    "Estatuto de los Trabajadores, άρθρα 20.3 και 64",
  "AEPD, FAQ sul GPS nelle auto aziendali usate dai lavoratori":
    "AEPD, συχνές ερωτήσεις για το GPS στα εταιρικά αυτοκίνητα που χρησιμοποιούν οι εργαζόμενοι",
  "AEPD, lista dei trattamenti che richiedono una valutazione d'impatto (art. 35.4 GDPR)":
    "AEPD, κατάλογος των πράξεων επεξεργασίας που απαιτούν εκτίμηση αντικτύπου (άρθρο 35 παρ. 4 ΓΚΠΔ)",
  "AEPD, guida sulla protezione dei dati nei rapporti di lavoro":
    "AEPD, οδηγός για την προστασία δεδομένων στις εργασιακές σχέσεις",
  "AEPD, sanzione PS/00454/2024 (Ares Capital, 200.000 €)":
    "AEPD, πρόστιμο PS/00454/2024 (Ares Capital, 200.000 €)",
  "Wet op de ondernemingsraden (WOR), art. 27 (diritto di consenso del consiglio aziendale)":
    "Wet op de ondernemingsraden (WOR, νόμος για τα εργοστασιακά συμβούλια), άρθρο 27 (δικαίωμα συναίνεσης του εργοστασιακού συμβουλίου)",
  "Autoriteit Persoonsgegevens, lista dei trattamenti che richiedono una DPIA":
    "Autoriteit Persoonsgegevens, κατάλογος των πράξεων επεξεργασίας που απαιτούν DPIA",
  "Autoriteit Persoonsgegevens, condizioni per il controllo dei dipendenti":
    "Autoriteit Persoonsgegevens, προϋποθέσεις για τον έλεγχο των εργαζομένων",
  "Autoriteit Persoonsgegevens, controllo dei dipendenti a distanza (GPS sulle auto aziendali)":
    "Autoriteit Persoonsgegevens, εξ αποστάσεως έλεγχος των εργαζομένων (GPS στα εταιρικά αυτοκίνητα)",
  "Autoriteit Persoonsgegevens, sanzione per il trattamento delle impronte dei dipendenti":
    "Autoriteit Persoonsgegevens, πρόστιμο για την επεξεργασία των δακτυλικών αποτυπωμάτων των εργαζομένων",
  "CNPD, Deliberacao 7680/2014 (geolocalizzazione nel contesto lavorativo)":
    "CNPD, Deliberação 7680/2014 (γεωεντοπισμός στον εργασιακό χώρο)",
  "Lei 58/2019, art. 28 (relazioni di lavoro)":
    "Lei 58/2019, άρθρο 28 (εργασιακές σχέσεις)",
  "CNPD, videovigilanza: nel contesto lavorativo restano le condizioni del Codice del lavoro, senza l'autorizzazione della CNPD":
    "CNPD, βιντεοεπιτήρηση: στον εργασιακό χώρο ισχύουν οι προϋποθέσεις του Κώδικα Εργασίας, χωρίς άδεια της CNPD",
  "CNPD, valutazione d'impatto sulla protezione dei dati":
    "CNPD, εκτίμηση αντικτύπου για την προστασία δεδομένων",
  "CNPD, Regulamento n.º 798/2018 (lista dei trattamenti soggetti a valutazione d'impatto)":
    "CNPD, Regulamento n.º 798/2018 (κατάλογος των πράξεων επεξεργασίας που υπόκεινται σε εκτίμηση αντικτύπου)",
  "Tribunal da Relação de Lisboa, acórdão del 17 giugno 2026, proc. 2266/25.4T8TVD.L1-4 (GPS del veicolo di una lavoratrice)":
    "Tribunal da Relação de Lisboa, acórdão της 17ης Ιουνίου 2026, υπόθεση 2266/25.4T8TVD.L1-4 (GPS στο όχημα μιας εργαζόμενης)",
  "CNPD, presentare una segnalazione":
    "CNPD, υποβολή αναφοράς",
  "Datatilsynet, guida sul controllo dei dipendenti (Kontrol af medarbejdere)":
    "Datatilsynet, οδηγός για τον έλεγχο των εργαζομένων (Kontrol af medarbejdere)",
  "Datatilsynet, lista dei trattamenti che richiedono una valutazione d'impatto":
    "Datatilsynet, κατάλογος των πράξεων επεξεργασίας που απαιτούν εκτίμηση αντικτύπου",
  "Datatilsynet, controlli 2020 sull'obbligo di informazione nelle misure di controllo dei dipendenti (GPS, videosorveglianza e altre)":
    "Datatilsynet, έλεγχοι του 2020 για την υποχρέωση ενημέρωσης στα μέτρα ελέγχου των εργαζομένων (GPS, βιντεοεπιτήρηση και άλλα)",
  "Datatilsynet, aree prioritarie dei controlli nel 2026 (sorveglianza dei dipendenti)":
    "Datatilsynet, τομείς προτεραιότητας των ελέγχων το 2026 (παρακολούθηση των εργαζομένων)",
  "Datatilsynet (autorità garante danese)":
    "Datatilsynet (η δανική αρχή προστασίας δεδομένων)",
  "Lag 1976:580 om medbestammande i arbetslivet (MBL), § 11":
    "Lag 1976:580 om medbestämmande i arbetslivet (MBL), § 11",
  "IMY, controllo e sorveglianza dei dipendenti":
    "IMY, έλεγχος και παρακολούθηση των εργαζομένων",
  "IMY, come usare i servizi di localizzazione (GPS) sui dipendenti":
    "IMY, πώς χρησιμοποιούνται οι υπηρεσίες εντοπισμού τοποθεσίας (GPS) στους εργαζόμενους",
  "IMY, quando svolgere una valutazione d'impatto":
    "IMY, πότε γίνεται εκτίμηση αντικτύπου",
  "IMY, presentare un reclamo":
    "IMY, υποβολή καταγγελίας",
  "IMY, sanzione al Comune di Skelleftea (riconoscimento facciale per le presenze)":
    "IMY, πρόστιμο στον Δήμο του Skellefteå (αναγνώριση προσώπου για την καταγραφή παρουσιών)",
  "Arbeidsmiljoloven, kap. 9 (misure di controllo, §§ 9-1 e 9-2)":
    "Arbeidsmiljøloven (νόμος για το εργασιακό περιβάλλον), κεφ. 9 (μέτρα ελέγχου, §§ 9-1 και 9-2)",
  "Datatilsynet (Norvegia), GPS e tracciamento dei veicoli aziendali":
    "Datatilsynet (Νορβηγία), GPS και εντοπισμός των εταιρικών οχημάτων",
  "Datatilsynet (Norvegia), quando svolgere una valutazione d'impatto":
    "Datatilsynet (Νορβηγία), πότε γίνεται εκτίμηση αντικτύπου",
  "Datatilsynet (autorità garante norvegese)":
    "Datatilsynet (η νορβηγική αρχή προστασίας δεδομένων)",
  "Personvernnemnda, PVN-2017-07 (uso del GPS per controllare le ore del dipendente)":
    "Personvernnemnda, PVN-2017-07 (χρήση του GPS για τον έλεγχο των ωρών του εργαζομένου)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96 (misure di controllo che toccano la dignita: consenso del consiglio aziendale)":
    "Arbeitsverfassungsgesetz (ArbVG, αυστριακός νόμος για τις εργασιακές σχέσεις), § 96 (μέτρα ελέγχου που θίγουν την ανθρώπινη αξιοπρέπεια: συναίνεση του εργοστασιακού συμβουλίου)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96a (sistemi che trattano dati personali dei lavoratori)":
    "Arbeitsverfassungsgesetz (ArbVG), § 96a (συστήματα που επεξεργάζονται δεδομένα προσωπικού χαρακτήρα των εργαζομένων)",
  "DSFA-V, regolamento sui trattamenti che richiedono una valutazione d'impatto":
    "DSFA-V, κανονισμός για τις πράξεις επεξεργασίας που απαιτούν εκτίμηση αντικτύπου",
  "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (fine del registro DVR)":
    "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (τέλος του μητρώου DVR)",
  "Datenschutzbehörde (DSB), decisione 2022-0.021.739 (stop al GPS sui veicoli aziendali)":
    "Datenschutzbehörde (DSB), απόφαση 2022-0.021.739 (παύση του GPS στα εταιρικά οχήματα)",
  "Datenschutzbehörde (DSB), procedura di reclamo":
    "Datenschutzbehörde (DSB), διαδικασία καταγγελίας",
  "CCT n. 81 del 26 aprile 2002 (controllo delle comunicazioni elettroniche in rete)":
    "CCT αρ. 81 της 26ης Απριλίου 2002 (έλεγχος των ηλεκτρονικών επικοινωνιών στο δίκτυο)",
  "APD/GBA, geolocalizzazione dei lavoratori":
    "APD/GBA, γεωεντοπισμός των εργαζομένων",
  "APD/GBA, valutazione d'impatto sulla protezione dei dati":
    "APD/GBA, εκτίμηση αντικτύπου για την προστασία δεδομένων",
  "APD/GBA, presentare un reclamo":
    "APD/GBA, υποβολή καταγγελίας",
  "Chambre Contentieuse APD/GBA, decisione 114/2024 (impronte per le presenze, 45.000 euro), testo integrale":
    "Chambre Contentieuse APD/GBA, απόφαση 114/2024 (δακτυλικά αποτυπώματα για την καταγραφή παρουσιών, 45.000 ευρώ), πλήρες κείμενο",
  "ICO, guida sul monitoraggio dei lavoratori (UK GDPR)":
    "ICO, οδηγός για την παρακολούθηση των εργαζομένων (UK GDPR)",
  "ICO, sorveglianza nei veicoli":
    "ICO, επιτήρηση στα οχήματα",
  "ICO, quando serve una DPIA":
    "ICO, πότε απαιτείται DPIA",
  "ICO, provvedimento sul monitoraggio GPS (Home Office, 2024)":
    "ICO, μέτρο επιβολής για την παρακολούθηση μέσω GPS (Home Office, 2024)",
  "ICO, presentare una segnalazione":
    "ICO, υποβολή αναφοράς",
  "DPC, guida sul tracciamento dei veicoli aziendali (maggio 2020)":
    "DPC, οδηγός για τον εντοπισμό των εταιρικών οχημάτων (Μάιος 2020)",
  "DPC, lista dei trattamenti che richiedono una DPIA":
    "DPC, κατάλογος των πράξεων επεξεργασίας που απαιτούν DPIA",
  "DPC, consultazione preventiva":
    "DPC, προηγούμενη διαβούλευση",
  "DPC, presentare un reclamo":
    "DPC, υποβολή καταγγελίας",
  "DPC, decisione Limerick City and County Council (dicembre 2021)":
    "DPC, απόφαση για το Limerick City and County Council (Δεκέμβριος 2021)",
  "DPC, sentenza Doolin v. DPC (High Court, febbraio 2020)":
    "DPC, απόφαση Doolin κατά DPC (High Court, Φεβρουάριος 2020)",
  "IFPDT/FDPIC, mezzi tecnici di sorveglianza sul luogo di lavoro":
    "IFPDT/FDPIC, τεχνικά μέσα επιτήρησης στον χώρο εργασίας",
  "IFPDT/FDPIC, trattamento dei dati da parte del datore di lavoro (CO art. 328b)":
    "IFPDT/FDPIC, επεξεργασία δεδομένων από τον εργοδότη (CO, άρθρο 328b)",
  "IFPDT/FDPIC, valutazione d'impatto sulla protezione dei dati (nLPD art. 22)":
    "IFPDT/FDPIC, εκτίμηση αντικτύπου για την προστασία δεδομένων (nLPD, άρθρο 22)",
  "Legge federale sulla protezione dei dati (nLPD), art. 22, 23 e 60-65 (Fedlex)":
    "Ομοσπονδιακός νόμος για την προστασία δεδομένων (nLPD), άρθρα 22, 23 και 60-65 (Fedlex)",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo":
    "Κανονισμός (ΕΕ) 2016/679 (ΓΚΠΔ), για σύγκριση",
  "Legge 190/2018, art. 5 (monitoraggio dei dipendenti)":
    "Νόμος 190/2018, άρθρο 5 (παρακολούθηση των εργαζομένων)",
  "Codul Muncii, art. 40 (obblighi del datore), Portal Legislativ":
    "Codul Muncii (Κώδικας Εργασίας), άρθρο 40 (υποχρεώσεις του εργοδότη), Portal Legislativ",
  "ANSPDCP, comunicato del 23 marzo 2023 (sanzione Tehnoplus, GPS)":
    "ANSPDCP, ανακοίνωση της 23ης Μαρτίου 2023 (πρόστιμο Tehnoplus, GPS)",
  "ANSPDCP, Decizia 174/2018 (lista trattamenti che richiedono DPIA), Monitorul Oficial 919/31.10.2018, art. 1 lett. d e g":
    "ANSPDCP, Decizia 174/2018 (κατάλογος των πράξεων επεξεργασίας που απαιτούν DPIA), Monitorul Oficial 919/31.10.2018, άρθρο 1 στοιχ. d και g",
  "ANSPDCP, presentazione dei reclami":
    "ANSPDCP, υποβολή καταγγελιών",
  "Legge del 4 dicembre 2025 di modifica del Codice del lavoro, Dz.U. 2026 poz. 25 (art. 22(2) par. 8: \"su carta o in forma elettronica\", in vigore dal 27 gennaio 2026)":
    "Νόμος της 4ης Δεκεμβρίου 2025 για την τροποποίηση του Κώδικα Εργασίας, Dz.U. 2026 poz. 25 (άρθρο 22(2) παρ. 8: «σε χαρτί ή σε ηλεκτρονική μορφή», σε ισχύ από τις 27 Ιανουαρίου 2026)",
  "Kodeks pracy, art. 22(3) par. 3-4 (altre forme di monitoraggio, tra cui il GPS), testo consolidato Dz.U. 2026 poz. 1245":
    "Kodeks pracy, άρθρο 22(3) παρ. 3-4 (άλλες μορφές παρακολούθησης, μεταξύ των οποίων το GPS), κωδικοποιημένο κείμενο Dz.U. 2026 poz. 1245",
  "UODO, guida alla protezione dei dati sul luogo di lavoro":
    "UODO, οδηγός για την προστασία δεδομένων στον χώρο εργασίας",
  "UODO, lista dei trattamenti che richiedono una DPIA (M.P. 2019 poz. 666)":
    "UODO, κατάλογος των πράξεων επεξεργασίας που απαιτούν DPIA (M.P. 2019 poz. 666)",
  "UODO, presentare un reclamo":
    "UODO, υποβολή καταγγελίας",
  "UODO, sanzione Centrum Medyczne Ujastek (monitoraggio non comunicato ai dipendenti)":
    "UODO, πρόστιμο στο Centrum Medyczne Ujastek (παρακολούθηση που δεν είχε γνωστοποιηθεί στους εργαζόμενους)",
  "Zakonik prace (Codice del lavoro), art. 316":
    "Zákoník práce (Κώδικας Εργασίας), άρθρο 316",
  "Stanovisko 2/2017 sul trattamento dei dati sul posto di lavoro, pubblicato dall UOOU":
    "Γνώμη 2/2017 για την επεξεργασία δεδομένων στον χώρο εργασίας, όπως δημοσιεύεται από την UOOU",
  "UOOU, lista dei trattamenti che richiedono una DPIA":
    "UOOU, κατάλογος των πράξεων επεξεργασίας που απαιτούν DPIA",
  "UOOU, presentare una segnalazione":
    "UOOU, υποβολή αναφοράς",
  "Tribunale municipale di Praga 6 A 42/2013 (Ceska posta, GPS sui portalettere), sentenza":
    "Δημοτικό δικαστήριο της Πράγας 6 A 42/2013 (Česká pošta, GPS στους ταχυδρόμους), απόφαση",
  "epravo.cz, GPS monitoring zamestnancu podruhe (riporta una multa di 80.000 CZK e 7.770 portalettere, non confermati da fonti ufficiali)":
    "epravo.cz, GPS monitoring zaměstnanců podruhé (αναφέρει πρόστιμο 80.000 CZK και 7.770 ταχυδρόμους, που δεν επιβεβαιώνονται από επίσημες πηγές)",
  "UOOU, relazione annuale 2014, controlli su Skoda Auto e Plzensky Prazdroj (GPS nei veicoli aziendali)":
    "UOOU, ετήσια έκθεση 2014, έλεγχοι σε Škoda Auto και Plzeňský Prazdroj (GPS στα εταιρικά οχήματα)",
  "HDPA (Garante greco), FAQ sui rapporti di lavoro (geolocalizzazione)":
    "HDPA (ελληνική αρχή προστασίας δεδομένων), συχνές ερωτήσεις για τις εργασιακές σχέσεις (γεωεντοπισμός)",
  "Legge 4624/2019, art. 27 (dati dei dipendenti), traduzione ufficiale HDPA":
    "Νόμος 4624/2019, άρθρο 27 (δεδομένα των εργαζομένων), επίσημη μετάφραση της HDPA",
  "HDPA, Decisione 65/2018 (lista dei trattamenti che richiedono DPIA)":
    "HDPA, απόφαση 65/2018 (κατάλογος των πράξεων επεξεργασίας που απαιτούν DPIA)",
  "HDPA, sanzione a un datore per geolocalizzazione (16 febbraio 2024)":
    "HDPA, πρόστιμο σε εργοδότη για γεωεντοπισμό (16 Φεβρουαρίου 2024)",
  "HDPA (Garante greco), pagina ufficiale":
    "HDPA (ελληνική αρχή προστασίας δεδομένων), επίσημη σελίδα",
  "Legge sulla protezione della privacy nella vita lavorativa (759/2004) - testo consolidato in finlandese (Finlex)":
    "Νόμος για την προστασία της ιδιωτικότητας στην εργασιακή ζωή (759/2004), κωδικοποιημένο κείμενο στα φινλανδικά (Finlex)",
  "Garante finlandese (Tietosuojavaltuutettu), FAQ sulla vita lavorativa":
    "Φινλανδική αρχή προστασίας δεδομένων (Tietosuojavaltuutettu), συχνές ερωτήσεις για την εργασιακή ζωή",
  "Garante finlandese, lista dei trattamenti che richiedono una DPIA":
    "Φινλανδική αρχή προστασίας δεδομένων, κατάλογος των πράξεων επεξεργασίας που απαιτούν DPIA",
  "Garante finlandese, segnalare una violazione":
    "Φινλανδική αρχή προστασίας δεδομένων, αναφορά παράβασης",
  "Garante finlandese, sanzione per dati di localizzazione usati per la rilevazione orario (2021)":
    "Φινλανδική αρχή προστασίας δεδομένων, πρόστιμο για δεδομένα τοποθεσίας που χρησιμοποιήθηκαν για την καταγραφή ωραρίου (2021)",
  "Zakon o zaštiti na radu (legge sicurezza sul lavoro), art. 43 (dispositivi di sorveglianza)":
    "Zakon o zaštiti na radu (νόμος για την ασφάλεια στην εργασία), άρθρο 43 (συσκευές επιτήρησης)",
  "Zakon o radu (legge sul lavoro), art. 29 (dati dei lavoratori) e art. 150 (consultazione del consiglio dei lavoratori)":
    "Zakon o radu (νόμος για την εργασία), άρθρο 29 (δεδομένα των εργαζομένων) και άρθρο 150 (διαβούλευση με το συμβούλιο των εργαζομένων)",
  "AZOP (Garante croato), trattamento dei dati dei dipendenti tramite GPS":
    "AZOP (κροατική αρχή προστασίας δεδομένων), επεξεργασία των δεδομένων των εργαζομένων μέσω GPS",
  "AZOP, lista dei trattamenti che richiedono una DPIA":
    "AZOP, κατάλογος των πράξεων επεξεργασίας που απαιτούν DPIA",
  "AZOP, richiesta di accertamento di violazione (reclamo)":
    "AZOP, αίτηση διαπίστωσης παράβασης (καταγγελία)",
  "AZOP (Garante croato), pagina ufficiale":
    "AZOP (κροατική αρχή προστασίας δεδομένων), επίσημη σελίδα",
  "IP-RS (Garante sloveno), linee guida sull'uso dei dispositivi GPS":
    "IP-RS (σλοβενική αρχή προστασίας δεδομένων), κατευθυντήριες γραμμές για τη χρήση συσκευών GPS",
  "IP-RS, parere 'Sledenje zaposlenim' (tracciamento dei dipendenti)":
    "IP-RS, γνωμοδότηση 'Sledenje zaposlenim' (εντοπισμός των εργαζομένων)",
  "IP-RS, comunicato del 15.04.2026: multa di 6.000 euro a un'azienda pubblica per GPS sui dipendenti":
    "IP-RS, ανακοίνωση της 15.04.2026: πρόστιμο 6.000 ευρώ σε δημόσια επιχείρηση για GPS στους εργαζόμενους",
  "Zakon o delovnih razmerjih (ZDR-1), art. 48 (dati dei lavoratori)":
    "Zakon o delovnih razmerjih (ZDR-1), άρθρο 48 (δεδομένα των εργαζομένων)",
  "Zakon o sodelovanju delavcev pri upravljanju (ZSDU), art. 89-90 (informazione del consiglio dei lavoratori)":
    "Zakon o sodelovanju delavcev pri upravljanju (ZSDU), άρθρα 89-90 (ενημέρωση του συμβουλίου των εργαζομένων)",
  "IP-RS, elenco dei trattamenti per cui e' obbligatoria la valutazione d'impatto (art. 35.4 GDPR)":
    "IP-RS, κατάλογος των πράξεων επεξεργασίας για τις οποίες είναι υποχρεωτική η εκτίμηση αντικτύπου (άρθρο 35 παρ. 4 ΓΚΠΔ)",
  "IP-RS, presentare una segnalazione":
    "IP-RS, υποβολή αναφοράς",
  "Zakonnik prace (Codice del lavoro), art. 13 par. 4 (monitoraggio dei dipendenti)":
    "Zákonník práce (Κώδικας Εργασίας), άρθρο 13 παρ. 4 (παρακολούθηση των εργαζομένων)",
  "UOOU SR (Garante slovacco), procedura di tutela":
    "UOOU SR (σλοβακική αρχή προστασίας δεδομένων), διαδικασία προστασίας",
  "Parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli, versione slovacca pubblicata dall UOOU SR":
    "Γνώμη 2/2017 για την επεξεργασία δεδομένων στον χώρο εργασίας (WP249), παρ. 5.7 οχήματα, σλοβακική έκδοση που δημοσιεύεται από την UOOU SR",
  "Lista slovacca dei trattamenti soggetti a DPIA (punti 3 e 9), pubblicata dall EDPB":
    "Σλοβακικός κατάλογος των πράξεων επεξεργασίας που υπόκεινται σε DPIA (σημεία 3 και 9), όπως δημοσιεύεται από το EDPB",
  "UOOU SR, guida sulla liceita del trattamento (versione aggiornata 22/01/2019), esempio del par. 13 c. 4 del Codice del lavoro":
    "UOOU SR, οδηγός για τη νομιμότητα της επεξεργασίας (ενημερωμένη έκδοση 22/01/2019), παράδειγμα της παρ. 13 εδ. 4 του Κώδικα Εργασίας",
  "UOOU SR, presentare una proposta di avvio del procedimento (reclamo)":
    "UOOU SR, υποβολή πρότασης για κίνηση της διαδικασίας (καταγγελία)",
  "UOOU SR, relazione sullo stato della protezione dei dati 2025 (par. 9.2.1, trattamento di dati di geolocalizzazione)":
    "UOOU SR, έκθεση για την κατάσταση της προστασίας δεδομένων 2025 (παρ. 9.2.1, επεξεργασία δεδομένων γεωεντοπισμού)",
  "Codice del lavoro (Mt.), art. 9 (diritti della persona) e art. 11/A (controllo dei lavoratori)":
    "Κώδικας Εργασίας (Mt.), άρθρο 9 (δικαιώματα του προσώπου) και άρθρο 11/A (έλεγχος των εργαζομένων)",
  "NAIH, guida sui trattamenti sul luogo di lavoro (novembre 2016, precedente al GDPR), par. 5 sul GPS":
    "NAIH, οδηγός για τις επεξεργασίες στον χώρο εργασίας (Νοέμβριος 2016, πριν από τον ΓΚΠΔ), παρ. 5 για το GPS",
  "NAIH, lista dei trattamenti che richiedono una valutazione d'impatto":
    "NAIH, κατάλογος των πράξεων επεξεργασίας που απαιτούν εκτίμηση αντικτύπου",
  "NAIH, sanzione Auchan (monitoraggio dei dipendenti)":
    "NAIH, πρόστιμο Auchan (παρακολούθηση των εργαζομένων)",
  "NAIH (Garante ungherese), pagina ufficiale":
    "NAIH (ουγγρική αρχή προστασίας δεδομένων), επίσημη σελίδα",
  "Legge sulla protezione dei dati (ZZLD), testo consolidato sul sito del CPDP (art. 25д e 25и; ultima modifica ДВ 70/2024)":
    "Νόμος για την προστασία των δεδομένων (ZZLD), κωδικοποιημένο κείμενο στον ιστότοπο της CPDP (άρθρα 25д και 25и· τελευταία τροποποίηση ДВ 70/2024)",
  "CPDP (Garante bulgaro), guida sulla privacy sul luogo di lavoro (2014, anteriore al GDPR), par. 3.5.2 sistemi GPS":
    "CPDP (βουλγαρική αρχή προστασίας δεδομένων), οδηγός για την ιδιωτικότητα στον χώρο εργασίας (2014, πριν από τον ΓΚΠΔ), παρ. 3.5.2 συστήματα GPS",
  "CPDP, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "CPDP, κατάλογος των πράξεων επεξεργασίας που απαιτούν DPIA (άρθρο 35 παρ. 4)",
  "CPDP, parere su LUKOIL (riuso della videosorveglianza per valutare i dipendenti)":
    "CPDP, γνωμοδότηση για τη LUKOIL (επαναχρησιμοποίηση της βιντεοεπιτήρησης για την αξιολόγηση των εργαζομένων)",
  "CPDP (Garante bulgaro), pagina ufficiale":
    "CPDP (βουλγαρική αρχή προστασίας δεδομένων), επίσημη σελίδα",
  "AKI (Garante estone), FAQ sui rapporti di lavoro (GPS)":
    "AKI (εσθονική αρχή προστασίας δεδομένων), συχνές ερωτήσεις για τις εργασιακές σχέσεις (GPS)",
  "AKI, guida per il personale sui dati nel rapporto di lavoro (2011, ante-GDPR), punto 2.9 GPS":
    "AKI, οδηγός για το προσωπικό σχετικά με τα δεδομένα στην εργασιακή σχέση (2011, πριν από τον ΓΚΠΔ), σημείο 2.9 GPS",
  "Legge sul fiduciario dei lavoratori (Töötajate usaldusisiku seadus), §§ 17 e 20 - Riigi Teataja":
    "Νόμος για τον εκπρόσωπο εμπιστοσύνης των εργαζομένων (Töötajate usaldusisiku seadus), §§ 17 και 20 - Riigi Teataja",
  "Legge estone sulla protezione dei dati personali (Isikuandmete kaitse seadus), §§ 62-73 - Riigi Teataja":
    "Εσθονικός νόμος για την προστασία των δεδομένων προσωπικού χαρακτήρα (Isikuandmete kaitse seadus), §§ 62-73 - Riigi Teataja",
  "AKI, materiale sul trattamento dei dati nel rapporto di lavoro":
    "AKI, υλικό για την επεξεργασία δεδομένων στην εργασιακή σχέση",
  "AKI, valutazione d'impatto (capitolo 5)":
    "AKI, εκτίμηση αντικτύπου (κεφάλαιο 5)",
  "AKI, presentare un reclamo":
    "AKI, υποβολή καταγγελίας",
  "AKI (Garante estone), pagina ufficiale":
    "AKI (εσθονική αρχή προστασίας δεδομένων), επίσημη σελίδα",
  "DVI (Garante lettone), posso tracciare i viaggi del mio dipendente? (GPS)":
    "DVI (λεττονική αρχή προστασίας δεδομένων), μπορώ να παρακολουθώ τις διαδρομές του εργαζομένου μου; (GPS)",
  "Legge lettone sul trattamento dei dati delle persone fisiche (Fizisko personu datu apstrādes likums) - Likumi.lv":
    "Λεττονικός νόμος για την επεξεργασία δεδομένων φυσικών προσώπων (Fizisko personu datu apstrādes likums) - Likumi.lv",
  "DVI, videosorveglianza dei dipendenti in presenza (16/09/2022)":
    "DVI, βιντεοεπιτήρηση των εργαζομένων με φυσική παρουσία (16/09/2022)",
  "DVI, videosorveglianza dei dipendenti nel lavoro da remoto":
    "DVI, βιντεοεπιτήρηση των εργαζομένων στην τηλεργασία",
  "DVI, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "DVI, κατάλογος των πράξεων επεξεργασίας που απαιτούν DPIA (άρθρο 35 παρ. 4)",
  "DVI, presentare un reclamo":
    "DVI, υποβολή καταγγελίας",
  "Gruppo art. 29, parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli":
    "Ομάδα εργασίας του άρθρου 29, γνώμη 2/2017 για την επεξεργασία δεδομένων στον χώρο εργασίας (WP249), παρ. 5.7 οχήματα",
  "VDAI, lista dei trattamenti che richiedono una DPIA (voce 10: monitoraggio dei dipendenti)":
    "VDAI, κατάλογος των πράξεων επεξεργασίας που απαιτούν DPIA (σημείο 10: παρακολούθηση των εργαζομένων)",
  "VDAI, decisione sul trattamento della corrispondenza personale di un dipendente (2022)":
    "VDAI, απόφαση για την επεξεργασία της προσωπικής αλληλογραφίας ενός εργαζομένου (2022)",
  "VDAI (Garante lituano), servizi e reclami":
    "VDAI (λιθουανική αρχή προστασίας δεδομένων), υπηρεσίες και καταγγελίες",
  "Loi du 1er août 2018, art. 71 (nuovo art. L.261-1 del Code du travail) e art. 72 (abrogazione della legge del 2 agosto 2002), Legilux":
    "Loi du 1er août 2018, άρθρο 71 (νέο άρθρο L.261-1 του Code du travail) και άρθρο 72 (κατάργηση του νόμου της 2ας Αυγούστου 2002), Legilux",
  "Code du travail, art. L.261-1 (sorveglianza dei lavoratori) - riproduzione CNPD":
    "Code du travail, άρθρο L.261-1 (επιτήρηση των εργαζομένων) - αναπαραγωγή από την CNPD",
  "CNPD, geolocalizzazione dei veicoli: necessità e proporzionalità":
    "CNPD, γεωεντοπισμός των οχημάτων: αναγκαιότητα και αναλογικότητα",
  "CNPD, geolocalizzazione: valutazione d'impatto (AIPD)":
    "CNPD, γεωεντοπισμός: εκτίμηση αντικτύπου (AIPD)",
  "CNPD, decisione 11FR/2021 (sanzione geolocalizzazione veicoli di servizio)":
    "CNPD, απόφαση 11FR/2021 (πρόστιμο για γεωεντοπισμό των υπηρεσιακών οχημάτων)",
  "CNPD, presentare un reclamo (Faire valoir vos droits)":
    "CNPD, υποβολή καταγγελίας (Faire valoir vos droits)",
  "Regole n. 50/2023 sulla sorveglianza elettronica (Gazzetta ufficiale)":
    "Κανόνες αρ. 50/2023 για την ηλεκτρονική επιτήρηση (Επίσημη Εφημερίδα)",
  "Regole 1329/2025 di Persónuvernd (modifica delle Regole 50/2023, art. 3: 90 giorni)":
    "Κανόνες 1329/2025 της Persónuvernd (τροποποίηση των Κανόνων 50/2023, άρθρο 3: 90 ημέρες)",
  "Persónuvernd (Garante islandese), FAQ sul GPS e i dispositivi di localizzazione":
    "Persónuvernd (ισλανδική αρχή προστασίας δεδομένων), συχνές ερωτήσεις για το GPS και τις συσκευές εντοπισμού",
  "Persónuvernd, lista dei trattamenti che richiedono una DPIA (Auglýsing nr. 828/2019)":
    "Persónuvernd, κατάλογος των πράξεων επεξεργασίας που απαιτούν DPIA (Auglýsing nr. 828/2019)",
  "Persónuvernd, presentare un reclamo":
    "Persónuvernd, υποβολή καταγγελίας",
  "Persónuvernd, decisione Islandspostur (uso illecito del GPS su un dipendente)":
    "Persónuvernd, απόφαση Íslandspóstur (παράνομη χρήση του GPS σε εργαζόμενο)",
  "IDPC (Garante maltese), guida al settore del lavoro":
    "IDPC (μαλτέζικη αρχή προστασίας δεδομένων), οδηγός για τον εργασιακό τομέα",
  "IDPC, valutazione d'impatto sulla protezione dei dati":
    "IDPC, εκτίμηση αντικτύπου για την προστασία δεδομένων",
  "IDPC, presentare un reclamo":
    "IDPC, υποβολή καταγγελίας",
  "IDPC, decisione CDP/COMP/579/2025 del 20 aprile 2026 (videosorveglianza della mensa aziendale)":
    "IDPC, απόφαση CDP/COMP/579/2025 της 20ής Απριλίου 2026 (βιντεοεπιτήρηση της εταιρικής καντίνας)",
  "Legge 125(I)/2018 sulla protezione dei dati (art. 36: abrogazione delle leggi 2001-2012)":
    "Νόμος 125(I)/2018 για την προστασία των δεδομένων (άρθρο 36: κατάργηση των νόμων 2001-2012)",
  "Commissario cipriota, registro delle attività: abolito l'obbligo di notifica al Commissario (art. 30 GDPR)":
    "Κύπριος Επίτροπος, μητρώο δραστηριοτήτων: καταργήθηκε η υποχρέωση γνωστοποίησης στον Επίτροπο (άρθρο 30 ΓΚΠΔ)",
  "Commissario cipriota, valutazione d'impatto (elenco indicativo: monitoraggio sistematico dei dipendenti, GPS)":
    "Κύπριος Επίτροπος, εκτίμηση αντικτύπου (ενδεικτικός κατάλογος: συστηματική παρακολούθηση των εργαζομένων, GPS)",
  "GDPR, art. 13 (informazione), testo ufficiale EUR-Lex":
    "ΓΚΠΔ, άρθρο 13 (ενημέρωση), επίσημο κείμενο EUR-Lex",
  "GDPR, art. 6(1)(f) e considerando 43 (base giuridica e squilibrio fra le parti), testo ufficiale EUR-Lex":
    "ΓΚΠΔ, άρθρο 6 παρ. 1 στοιχ. στ) και αιτιολογική σκέψη 43 (νομική βάση και ανισορροπία μεταξύ των μερών), επίσημο κείμενο EUR-Lex",
  "Garante cipriota, pagina ufficiale":
    "Κύπριος Επίτροπος Προστασίας Δεδομένων, επίσημη σελίδα",
  "Legge 124/2024 sulla protezione dei dati personali (in vigore dal 1 febbraio 2025)":
    "Νόμος 124/2024 για την προστασία των δεδομένων προσωπικού χαρακτήρα (σε ισχύ από την 1η Φεβρουαρίου 2025)",
  "IDP, linea guida n. 03 del 30.04.2025 sulla videosorveglianza":
    "IDP, κατευθυντήρια γραμμή αρ. 03 της 30.04.2025 για τη βιντεοεπιτήρηση",
  "IDP (Garante albanese), pagina ufficiale":
    "IDP (αλβανική αρχή προστασίας δεδομένων), επίσημη σελίδα",
  "Legge sulla protezione dei dati (LPDP, 87/2018) - testo ufficiale":
    "Νόμος για την προστασία των δεδομένων (LPDP, 87/2018) - επίσημο κείμενο",
  "Poverenik (Garante serbo), competenze e contatti":
    "Poverenik (σερβική αρχή προστασίας δεδομένων), αρμοδιότητες και στοιχεία επικοινωνίας",
  "Danas, ispezione straordinaria del Poverenik al JKP Mediana di Nis (7 aprile 2026)":
    "Danas, έκτακτη επιθεώρηση του Poverenik στη JKP Mediana του Νις (7 Απριλίου 2026)",
  "N1, GPS su 80 cassonetti del JKP Mediana di Nis (protesta dei lavoratori, gennaio 2026)":
    "N1, GPS σε 80 κάδους της JKP Mediana του Νις (διαμαρτυρία των εργαζομένων, Ιανουάριος 2026)",
  "Legge sulla protezione dei dati personali (Gazzetta BiH 12/25), testo pubblicato dall AZLP":
    "Νόμος για την προστασία των δεδομένων προσωπικού χαρακτήρα (Εφημερίδα της ΒΕ 12/25), κείμενο όπως δημοσιεύεται από την AZLP",
  "AZLP, decisione del 10.11.2025 sulla lista dei trattamenti che richiedono una DPIA (punto 8: dati dei dipendenti, controllo di lavoro e spostamenti)":
    "AZLP, απόφαση της 10.11.2025 για τον κατάλογο των πράξεων επεξεργασίας που απαιτούν DPIA (σημείο 8: δεδομένα των εργαζομένων, έλεγχος εργασίας και μετακινήσεων)",
  "AZLP (Garante bosniaco), pagina ufficiale":
    "AZLP (αρχή προστασίας δεδομένων της Βοσνίας-Ερζεγοβίνης), επίσημη σελίδα",
  "Legge sulla protezione dei dati personali, Gazzetta ufficiale BiH 12/25":
    "Νόμος για την προστασία των δεδομένων προσωπικού χαρακτήρα, Επίσημη Εφημερίδα της ΒΕ 12/25",
  "Legge sulla protezione dei dati personali, testo consolidato pubblicato dall'AZLP (artt. 26-28 e sanzioni, art. 74)":
    "Νόμος για την προστασία των δεδομένων προσωπικού χαρακτήρα, κωδικοποιημένο κείμενο που δημοσιεύεται από την AZLP (άρθρα 26-28 και κυρώσεις, άρθρο 74)",
  "Nuova legge sulla protezione dei dati personali, Službeni list CG 133/2026 (pubblicata l'11.9.2026, in vigore dal 19.9.2026, si applica dal 19.3.2027, art. 106; artt. 88, 89 e 105)":
    "Νέος νόμος για την προστασία των δεδομένων προσωπικού χαρακτήρα, Službeni list CG 133/2026 (δημοσιεύθηκε στις 11.9.2026, σε ισχύ από τις 19.9.2026, εφαρμόζεται από τις 19.3.2027, άρθρο 106· άρθρα 88, 89 και 105)",
  "AZLP, posizione del Consiglio sull'uso del GPS nei veicoli di servizio (29.04.2025)":
    "AZLP, θέση του Συμβουλίου για τη χρήση του GPS στα υπηρεσιακά οχήματα (29.04.2025)",
  "AZLP (Garante montenegrino), contatti":
    "AZLP (αρχή προστασίας δεδομένων του Μαυροβουνίου), στοιχεία επικοινωνίας",
  "AZLP, moduli (richiesta di tutela dei diritti)":
    "AZLP, έντυπα (αίτηση προστασίας δικαιωμάτων)",
  "Regolamento UE 2016/679 (GDPR), riferimento comparativo":
    "Κανονισμός (ΕΕ) 2016/679 (ΓΚΠΔ), για σύγκριση",
  "Legge sulla protezione dei dati (LPDP, Gazzetta 42/20) - traduzione inglese non ufficiale pubblicata dall'AZLP":
    "Νόμος για την προστασία των δεδομένων (LPDP, Εφημερίδα 42/20) - ανεπίσημη αγγλική μετάφραση που δημοσιεύεται από την AZLP",
  "AZLP, lista dei trattamenti che richiedono la DPIA (11.05.2020, punti 10 e 12: posizione e spostamenti, dati dei lavoratori)":
    "AZLP, κατάλογος των πράξεων επεξεργασίας που απαιτούν DPIA (11.05.2020, σημεία 10 και 12: τοποθεσία και μετακινήσεις, δεδομένα των εργαζομένων)",
  "AZLP, atti subordinati (regolamenti e liste), pagina ufficiale":
    "AZLP, δευτερογενείς πράξεις (κανονισμοί και κατάλογοι), επίσημη σελίδα",
  "AZLP (Garante macedone), pagina ufficiale e reclami":
    "AZLP (αρχή προστασίας δεδομένων της Βόρειας Μακεδονίας), επίσημη σελίδα και καταγγελίες",
  "Legge dell'Ucraina n. 2297-VI sulla protezione dei dati personali (2010)":
    "Νόμος της Ουκρανίας αρ. 2297-VI για την προστασία των δεδομένων προσωπικού χαρακτήρα (2010)",
  "Ordine del Difensore civico 1/02-14: procedura di notifica dei trattamenti a rischio particolare":
    "Διάταγμα του Συνηγόρου του Πολίτη 1/02-14: διαδικασία γνωστοποίησης των επεξεργασιών ιδιαίτερου κινδύνου",
  "Codice ucraino delle infrazioni amministrative, art. 188-39 (violazioni in materia di dati personali)":
    "Ουκρανικός Κώδικας Διοικητικών Παραβάσεων, άρθρο 188-39 (παραβάσεις σχετικά με τα δεδομένα προσωπικού χαρακτήρα)",
  "Difensore civico (Garante ucraino), protezione dei dati personali":
    "Συνήγορος του Πολίτη (ουκρανική αρχή προστασίας δεδομένων), προστασία των δεδομένων προσωπικού χαρακτήρα",
  "ICLG, protezione dei dati in Ucraina (basi giuridiche, DPIA)":
    "ICLG, προστασία δεδομένων στην Ουκρανία (νομικές βάσεις, DPIA)",
  "CNPDCP, presentare un reclamo":
    "CNPDCP, υποβολή καταγγελίας",
  "Legge 195/2024 sulla protezione dei dati personali, in vigore dal 23 agosto 2026 (art. 35 DPIA, art. 88 sanzioni), testo inglese pubblicato dal CNPDCP":
    "Νόμος 195/2024 για την προστασία των δεδομένων προσωπικού χαρακτήρα, σε ισχύ από τις 23 Αυγούστου 2026 (άρθρο 35 DPIA, άρθρο 88 κυρώσεις), αγγλικό κείμενο που δημοσιεύεται από την CNPDCP",
  "CNPDCP, ordine 27/2022: lista dei trattamenti soggetti a valutazione d'impatto (modificata dall'ordine 39/2026)":
    "CNPDCP, διάταγμα 27/2022: κατάλογος των πράξεων επεξεργασίας που υπόκεινται σε εκτίμηση αντικτύπου (τροποποιήθηκε με το διάταγμα 39/2026)",
  "Ordine OAC n. 94 del 1 giugno 2022: Registro degli operatori di dati personali (casi di iscrizione)":
    "Διάταγμα OAC αρ. 94 της 1ης Ιουνίου 2022: Μητρώο των φορέων επεξεργασίας δεδομένων προσωπικού χαρακτήρα (περιπτώσεις εγγραφής)",
  "NPDPC (N. Shved), responsabilita amministrativa per violazione della normativa sui dati personali (art. 23.7 CAO)":
    "NPDPC (N. Shved), διοικητική ευθύνη για παραβίαση της νομοθεσίας περί δεδομένων προσωπικού χαρακτήρα (άρθρο 23.7 CAO)",
  "NPDPC (Garante bielorusso), informazioni e contatti":
    "NPDPC (λευκορωσική αρχή προστασίας δεδομένων), πληροφορίες και στοιχεία επικοινωνίας",
  "GRATA, protezione dei dati e privacy dei dipendenti in Bielorussia":
    "GRATA, προστασία δεδομένων και ιδιωτικότητα των εργαζομένων στη Λευκορωσία",
  "DLA Piper, applicazione e sanzioni in Bielorussia":
    "DLA Piper, εφαρμογή και κυρώσεις στη Λευκορωσία",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo lontano":
    "Κανονισμός (ΕΕ) 2016/679 (ΓΚΠΔ), μακρινό σημείο σύγκρισης",
  "ANPD, denúncia di inadempimento della LGPD":
    "ANPD, καταγγελία μη συμμόρφωσης με τη LGPD",
  "ANPD, canale per il titolare dei dati":
    "ANPD, κανάλι για το υποκείμενο των δεδομένων",
  "Lei n. 15.352/2026 (l’ANPD diventa agência reguladora)":
    "Lei n. 15.352/2026 (η ANPD γίνεται ρυθμιστική υπηρεσία)",
  "BfDI, elenco delle autorità dei Land (per trovare la tua)":
    "BfDI, κατάλογος των αρχών των ομόσπονδων κρατιδίων (για να βρεις τη δική σου)",
  "BayLDA (esempio, Baviera)":
    "BayLDA (παράδειγμα, Βαυαρία)",
  "CNIL, presentare un reclamo":
    "CNIL, υποβολή καταγγελίας",
  "AEPD, sede elettronica":
    "AEPD, ηλεκτρονική υπηρεσία",
  "CNPD, segnalazioni":
    "CNPD, αναφορές",
  "IMY, reclami":
    "IMY, καταγγελίες",
  "Datenschutzbehörde (DSB), reclamo":
    "Datenschutzbehörde (DSB), καταγγελία",
  "APD/GBA, reclamo":
    "APD/GBA, καταγγελία",
  "ICO, segnalazioni":
    "ICO, αναφορές",
  "DPC, reclami":
    "DPC, καταγγελίες",
  "ANSPDCP, reclami":
    "ANSPDCP, καταγγελίες",
  "UODO, reclami":
    "UODO, καταγγελίες",
  "UOOU, segnalazioni":
    "UOOU, αναφορές",
  "Garante, segnalazioni":
    "Garante, αναφορές",
  "AZOP, reclami":
    "AZOP, καταγγελίες",
  "IP-RS, segnalazioni":
    "IP-RS, αναφορές",
  "UOOU SR, avvio del procedimento":
    "UOOU SR, κίνηση της διαδικασίας",
  "AKI, reclami":
    "AKI, καταγγελίες",
  "DVI, reclami":
    "DVI, καταγγελίες",
  "VDAI, servizi e reclami":
    "VDAI, υπηρεσίες και καταγγελίες",
  "CNPD, reclami":
    "CNPD, καταγγελίες",
  "Persónuvernd, reclami":
    "Persónuvernd, καταγγελίες",
  "IDPC, reclami":
    "IDPC, καταγγελίες",
  "Garante cipriota":
    "Κύπριος Επίτροπος Προστασίας Δεδομένων",
  "AZLP, tutela dei diritti":
    "AZLP, προστασία δικαιωμάτων",
  "Difensore civico, protezione dei dati":
    "Συνήγορος του Πολίτη, προστασία δεδομένων",
  "CNPDCP, reclami":
    "CNPDCP, καταγγελίες",
  "Arbeitsvertragsrechts-Anpassungsgesetz (AVRAG), § 10 (misure di controllo che toccano la dignita: accordo aziendale, o consenso del lavoratore se manca il consiglio aziendale)":
    "Arbeitsvertragsrechts-Anpassungsgesetz (AVRAG), § 10 (μέτρα ελέγχου που θίγουν την ανθρώπινη αξιοπρέπεια: εταιρική συμφωνία ή, αν δεν υπάρχει εργοστασιακό συμβούλιο, συναίνεση του εργαζομένου)",
  "APD/GBA, decisione n. 01/2019 del 16 gennaio 2019 (elenco dei trattamenti che richiedono una valutazione d'impatto)":
    "APD/GBA, απόφαση αρ. 01/2019 της 16ης Ιανουαρίου 2019 (κατάλογος των πράξεων επεξεργασίας που απαιτούν εκτίμηση αντικτύπου)",
  "Commissario cipriota, decisione del 25 ottobre 2019 sul Gruppo Louis (Bradford Factor)":
    "Κύπριος Επίτροπος, απόφαση της 25ης Οκτωβρίου 2019 για τον Όμιλο Louis (Bradford Factor)",
  "Datatilsynet, casi di multa (bødesager)":
    "Datatilsynet, υποθέσεις προστίμων (bødesager)",
  "CNIL, dieci nuove sanzioni in procedura semplificata (annunciate il 7 novembre 2023)":
    "CNIL, δέκα νέες κυρώσεις με απλουστευμένη διαδικασία (ανακοινώθηκαν στις 7 Νοεμβρίου 2023)",
  "Data (Use and Access) Act 2025 (Commencement No. 9 and Transitional and Saving Provisions) Regulations 2026, SI 2026/1015 (Information Commission dal 30/09/2026)":
    "Data (Use and Access) Act 2025 (Commencement No. 9 and Transitional and Saving Provisions) Regulations 2026, SI 2026/1015 (Information Commission από τις 30/09/2026)",
  "UK GDPR, art. 83 c. 5 (legislation.gov.uk)":
    "UK GDPR, άρθρο 83 παρ. 5 (legislation.gov.uk)",
  "DPC, pagina sul tracciamento dei veicoli dei dipendenti (ultimo aggiornamento della guida: maggio 2020)":
    "DPC, σελίδα για τον εντοπισμό των οχημάτων των εργαζομένων (τελευταία ενημέρωση του οδηγού: Μάιος 2020)",
  "AGI - Avvocati Giuslavoristi Italiani (associazione di avvocati giuslavoristi), «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (sentenza n. 972 del 1° luglio 2026; il testo della sentenza non è stato reperito in fonte ufficiale)":
    "AGI - Avvocati Giuslavoristi Italiani (ένωση ιταλών δικηγόρων εργατικού δικαίου), «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (απόφαση αρ. 972 της 1ης Ιουλίου 2026· το κείμενο της απόφασης δεν βρέθηκε σε επίσημη πηγή)",
  "VDAI, elenco delle decisioni più significative (multe, ordini e altro), dal 2019 al 14 gennaio 2025":
    "VDAI, κατάλογος των σημαντικότερων αποφάσεων (πρόστιμα, εντολές και άλλα), από το 2019 έως τις 14 Ιανουαρίου 2025",
  "Codice del lavoro della Repubblica di Moldova n. 154/2003, art. 91 lett. h)":
    "Κώδικας Εργασίας της Δημοκρατίας της Μολδαβίας αρ. 154/2003, άρθρο 91 στοιχ. h)",
  "Código do Trabalho, arts. 20-21 (mezzi di sorveglianza a distanza)":
    "Código do Trabalho, άρθρα 20-21 (μέσα εξ αποστάσεως επιτήρησης)",
  "Kodeks pracy, art. 22(2) (monitoraggio), testo consolidato Dz.U. 2026 poz. 1245 (pubblicato il 24 settembre 2026, stato giuridico al 27 agosto 2026)":
    "Kodeks pracy, άρθρο 22(2) (παρακολούθηση), κωδικοποιημένο κείμενο Dz.U. 2026 poz. 1245 (δημοσιεύθηκε στις 24 Σεπτεμβρίου 2026, νομική κατάσταση στις 27 Αυγούστου 2026)",
  "Poverenik, decisione sulla lista dei trattamenti che richiedono una DPIA (Sl. glasnik RS 45/2019 e 112/2020, testo consolidato)":
    "Poverenik, απόφαση για τον κατάλογο των πράξεων επεξεργασίας που απαιτούν DPIA (Sl. glasnik RS 45/2019 και 112/2020, κωδικοποιημένο κείμενο)",
  "Legge della Repubblica di Bielorussia n. 99-Z del 7 maggio 2021 sulla protezione dei dati personali, testo ufficiale su pravo.by":
    "Νόμος της Δημοκρατίας της Λευκορωσίας αρ. 99-Z της 7ης Μαΐου 2021 για την προστασία των δεδομένων προσωπικού χαρακτήρα, επίσημο κείμενο στο pravo.by",
  "Commissario cipriota, sintesi della decisione sul Gruppo Louis (818 dipendenti)":
    "Κύπριος Επίτροπος, περίληψη της απόφασης για τον Όμιλο Louis (818 εργαζόμενοι)",
  "CNIL, deliberazione SAN-2022-015 del 7 luglio 2022 sulla società UBEEQO INTERNATIONAL (pagina della CNIL)":
    "CNIL, απόφαση SAN-2022-015 της 7ης Ιουλίου 2022 για την εταιρεία UBEEQO INTERNATIONAL (σελίδα της CNIL)",
  "LPDP (87/2018), artt. 54, 55(1) e 95, testo ufficiale":
    "LPDP (87/2018), άρθρα 54, 55(1) και 95, επίσημο κείμενο",
  "LPDP (87/2018), artt. 54, 55(1) e 95, e decisione del Poverenik sulla lista DPIA (45/2019 e 112/2020), punti 2(7) e 4":
    "LPDP (87/2018), άρθρα 54, 55(1) και 95, και απόφαση του Poverenik για τον κατάλογο DPIA (45/2019 και 112/2020), σημεία 2(7) και 4",
  "VDAI, elenco delle decisioni del 2025 (multe, ordini e altro)":
    "VDAI, κατάλογος των αποφάσεων του 2025 (πρόστιμα, εντολές και άλλα)",
  "VDAI, elenco delle decisioni del 2026 (multe, ordini e altro)":
    "VDAI, κατάλογος των αποφάσεων του 2026 (πρόστιμα, εντολές και άλλα)",
  "EDPB, linee guida 05/2020 sul consenso ai sensi del regolamento 2016/679, par. 21 (squilibrio di potere nel rapporto di lavoro)":
    "EDPB, κατευθυντήριες γραμμές 05/2020 για τη συγκατάθεση βάσει του κανονισμού 2016/679, παρ. 21 (ανισορροπία ισχύος στην εργασιακή σχέση)",
};
