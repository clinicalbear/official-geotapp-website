/**
 * Versión en español de los textos que, en las fichas de país, están escritos
 * como simples `string` (es decir, en italiano, la lengua maestra): los títulos
 * de las fuentes y los nombres de los puntos de contacto. Clave = el texto
 * ITALIANO exacto tal como figura en la ficha, valor = la versión en español.
 * Lo usa `loc()` (./localize.ts) solo para `es`. Los nombres oficiales de leyes
 * y de autoridades se conservan en la lengua de origen, con una aclaración en
 * español entre paréntesis cuando ayuda a entender de qué se trata.
 *
 * Una fuente nueva o un título modificado en una ficha sin entrada aquí se
 * queda en italiano en la página en español: el test `traduzioni-es.test.ts`
 * lo señala.
 */
export const TESTI_ES: Readonly<Record<string, string>> = {
  "Legge lituana sulla protezione giuridica dei dati personali (ADTAĮ), art. 5 c. 4, testo consolidato":
    "Ley lituana de protección jurídica de los datos personales (ADTAĮ), art. 5, apdo. 4, texto consolidado",
  "UOOU, relazione annuale 2012, controllo su Česká pošta (monitoraggio degli spostamenti dei portalettere)":
    "UOOU, informe anual 2012, inspección a Česká pošta (seguimiento de los desplazamientos de los carteros)",
  "CNPD, Deliberação 2019/494 (norme della Lei 58/2019 disapplicate)":
    "CNPD, Deliberação 2019/494 (disposiciones de la Lei 58/2019 inaplicadas)",
  "Garante Privacy, Provvedimento n. 7 del 16 gennaio 2025 (doc-web 10112287)":
    "Garante Privacy, resolución n.º 7 de 16 de enero de 2025 (doc-web 10112287)",
  "Garante Privacy, Provvedimento n. 755 del 18 dicembre 2025, n. 10213711 (Pioneer Hi-Bred Italia Sementi)":
    "Garante Privacy, resolución n.º 755 de 18 de diciembre de 2025, doc-web 10213711 (Pioneer Hi-Bred Italia Sementi)",
  "Garante Privacy, Provvedimento n. 382 del 28 maggio 2026, n. 10259916 (Azienda di Tutela della Salute per la Liguria)":
    "Garante Privacy, resolución n.º 382 de 28 de mayo de 2026, doc-web 10259916 (Azienda di Tutela della Salute per la Liguria, la autoridad sanitaria de Liguria)",
  "Garante Privacy, Provvedimento n. 135 del 13 marzo 2025 (doc-web 10128005), rimosso temporaneamente dal sito in ottemperanza alla sentenza del Tribunale di Cosenza n. 972 del 1° luglio 2026 (opposizione accolta)":
    "Garante Privacy, resolución n.º 135 de 13 de marzo de 2025 (doc-web 10128005), retirada temporalmente del sitio en cumplimiento de la sentencia n.º 972 de 1 de julio de 2026 del Tribunal de Cosenza (oposición estimada)",
  "AGI Lavoro, «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (sentenza n. 972 del 1° luglio 2026; il testo della sentenza non è stato reperito in fonte ufficiale)":
    "AGI Lavoro, «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (sentencia n.º 972 de 1 de julio de 2026; el texto de la sentencia no se ha encontrado en una fuente oficial)",
  "Avvocati Associati, commento alla sentenza Trib. Cosenza n. 972/2026 (22/09/2026), con passi citati":
    "Avvocati Associati, comentario a la sentencia n.º 972/2026 del Tribunal de Cosenza (22 de septiembre de 2026), con pasajes citados",
  "Legge 20 maggio 1970, n. 300 (Statuto dei Lavoratori), art. 4":
    "Ley n.º 300 de 20 de mayo de 1970 (Estatuto de los Trabajadores italiano), art. 4",
  "Regolamento UE 2016/679 (GDPR), artt. 5, 13, 25, 35, 88":
    "Reglamento (UE) 2016/679 (RGPD), arts. 5, 13, 25, 35 y 88",
  "Betriebsverfassungsgesetz, § 87 (cogestione del consiglio aziendale)":
    "Betriebsverfassungsgesetz (ley alemana de organización de la empresa), § 87 (codecisión del comité de empresa)",
  "Bundesdatenschutzgesetz, § 26 (dati dei lavoratori)":
    "Bundesdatenschutzgesetz (ley federal alemana de protección de datos), § 26 (datos de los trabajadores)",
  "Garante del Baden-Württemberg, FAQ sulle basi giuridiche dei dati dei dipendenti (sentenza CGUE C-34/21)":
    "Autoridad de protección de datos de Baden-Wurtemberg, preguntas frecuentes sobre las bases jurídicas de los datos de los trabajadores (sentencia del TJUE C-34/21)",
  "Regolamento UE 2016/679 (GDPR)":
    "Reglamento (UE) 2016/679 (RGPD)",
  "Garante della Renania-Palatinato, guida sulla localizzazione GPS dei dipendenti":
    "Autoridad de protección de datos de Renania-Palatinado, guía sobre la localización GPS de los trabajadores",
  "Lista DSK dei trattamenti che richiedono una valutazione d'impatto (settore privato)":
    "Lista de la DSK de los tratamientos que requieren una evaluación de impacto (sector privado)",
  "BfDI, elenco delle autorità garanti per la protezione dei dati dei Land":
    "BfDI, lista de las autoridades de protección de datos de los Länder",
  "Garante di Amburgo, comunicato del 1 ottobre 2020 (sanzione H&M)":
    "Autoridad de protección de datos de Hamburgo, comunicado de 1 de octubre de 2020 (multa a H&M)",
  "BayLDA, autorità garante della Baviera":
    "BayLDA, la autoridad de protección de datos de Baviera",
  "BlnBDI, autorità garante di Berlino":
    "BlnBDI, la autoridad de protección de datos de Berlín",
  "Code du travail, art. L2312-38 (consultazione del CSE sui mezzi di controllo)":
    "Code du travail (Código de trabajo francés), art. L2312-38 (consulta del CSE sobre los medios de control)",
  "Code du travail, art. L1222-4 (nessuna raccolta da dispositivo non portato a conoscenza)":
    "Code du travail (Código de trabajo francés), art. L1222-4 (ninguna recogida mediante un dispositivo del que el trabajador no haya sido informado)",
  "CNIL, guida sulla geolocalizzazione dei veicoli dei dipendenti":
    "CNIL, guía sobre la geolocalización de los vehículos de los trabajadores",
  "CNIL, lista dei trattamenti che richiedono una valutazione d'impatto (AIPD)":
    "CNIL, lista de los tratamientos que requieren una evaluación de impacto (EIPD)",
  "CNIL, abolizione delle dichiarazioni preventive dal 25 maggio 2018":
    "CNIL, supresión de las declaraciones previas desde el 25 de mayo de 2018",
  "CNIL, dieci nuove sanzioni (procedura semplificata, 7 novembre 2023)":
    "CNIL, diez nuevas sanciones (procedimiento simplificado, 7 de noviembre de 2023)",
  "CNIL, deliberazione SAN-2022-015 del 7 luglio 2022 (UBEEQO International, 175.000 €), su Légifrance":
    "CNIL, deliberación SAN-2022-015 de 7 de julio de 2022 (UBEEQO International, 175.000 €), en Légifrance",
  "Ley Organica 3/2018 (LOPDGDD), art. 90 (geolocalizzazione sul lavoro)":
    "Ley Orgánica 3/2018 (LOPDGDD), art. 90 (geolocalización en el ámbito laboral)",
  "Estatuto de los Trabajadores, artt. 20.3 e 64":
    "Estatuto de los Trabajadores, arts. 20.3 y 64",
  "AEPD, FAQ sul GPS nelle auto aziendali usate dai lavoratori":
    "AEPD, preguntas frecuentes sobre el GPS en los vehículos de empresa utilizados por los trabajadores",
  "AEPD, lista dei trattamenti che richiedono una valutazione d'impatto (art. 35.4 GDPR)":
    "AEPD, lista de los tratamientos que requieren una evaluación de impacto (art. 35.4 del RGPD)",
  "AEPD, guida sulla protezione dei dati nei rapporti di lavoro":
    "AEPD, guía sobre la protección de datos en las relaciones laborales",
  "AEPD, sanzione PS/00454/2024 (Ares Capital, 200.000 €)":
    "AEPD, sanción PS/00454/2024 (Ares Capital, 200.000 €)",
  "Wet op de ondernemingsraden (WOR), art. 27 (diritto di consenso del consiglio aziendale)":
    "Wet op de ondernemingsraden (WOR, ley neerlandesa de comités de empresa), art. 27 (derecho de aprobación del comité de empresa)",
  "Autoriteit Persoonsgegevens, lista dei trattamenti che richiedono una DPIA":
    "Autoriteit Persoonsgegevens, lista de los tratamientos que requieren una EIPD",
  "Autoriteit Persoonsgegevens, condizioni per il controllo dei dipendenti":
    "Autoriteit Persoonsgegevens, condiciones para el control de los trabajadores",
  "Autoriteit Persoonsgegevens, controllo dei dipendenti a distanza (GPS sulle auto aziendali)":
    "Autoriteit Persoonsgegevens, control de los trabajadores a distancia (GPS en los vehículos de empresa)",
  "Autoriteit Persoonsgegevens, sanzione per il trattamento delle impronte dei dipendenti":
    "Autoriteit Persoonsgegevens, multa por el tratamiento de las huellas dactilares de los trabajadores",
  "Codigo do Trabalho, art. 20 (mezzi di sorveglianza a distanza)":
    "Código do Trabalho (Código de trabajo portugués), art. 20 (medios de vigilancia a distancia)",
  "CNPD, Deliberacao 7680/2014 (geolocalizzazione nel contesto lavorativo)":
    "CNPD, Deliberação 7680/2014 (geolocalización en el ámbito laboral)",
  "Lei 58/2019, art. 28 (relazioni di lavoro)":
    "Lei 58/2019, art. 28 (relaciones laborales)",
  "CNPD, videovigilanza: nel contesto lavorativo restano le condizioni del Codice del lavoro, senza l'autorizzazione della CNPD":
    "CNPD, videovigilancia: en el ámbito laboral siguen aplicándose las condiciones del Código de trabajo, sin autorización de la CNPD",
  "CNPD, valutazione d'impatto sulla protezione dei dati":
    "CNPD, evaluación de impacto relativa a la protección de datos",
  "CNPD, Regulamento n.º 798/2018 (lista dei trattamenti soggetti a valutazione d'impatto)":
    "CNPD, Regulamento n.º 798/2018 (lista de los tratamientos sujetos a una evaluación de impacto)",
  "Tribunal da Relação de Lisboa, acórdão del 17 giugno 2026, proc. 2266/25.4T8TVD.L1-4 (GPS del veicolo di una lavoratrice)":
    "Tribunal da Relação de Lisboa, acórdão de 17 de junio de 2026, proc. 2266/25.4T8TVD.L1-4 (GPS en el vehículo de una trabajadora)",
  "CNPD, presentare una segnalazione":
    "CNPD, presentar una denuncia",
  "Datatilsynet, guida sul controllo dei dipendenti (Kontrol af medarbejdere)":
    "Datatilsynet, guía sobre el control de los trabajadores (Kontrol af medarbejdere)",
  "Datatilsynet, lista dei trattamenti che richiedono una valutazione d'impatto":
    "Datatilsynet, lista de los tratamientos que requieren una evaluación de impacto",
  "Datatilsynet, controlli 2020 sull'obbligo di informazione nelle misure di controllo dei dipendenti (GPS, videosorveglianza e altre)":
    "Datatilsynet, inspecciones de 2020 sobre la obligación de información en las medidas de control de los trabajadores (GPS, videovigilancia y otras)",
  "Datatilsynet, aree prioritarie dei controlli nel 2026 (sorveglianza dei dipendenti)":
    "Datatilsynet, áreas prioritarias de las inspecciones en 2026 (vigilancia de los trabajadores)",
  "Datatilsynet (autorità garante danese)":
    "Datatilsynet (autoridad danesa de protección de datos)",
  "Lag 1976:580 om medbestammande i arbetslivet (MBL), § 11":
    "Lag 1976:580 om medbestämmande i arbetslivet (MBL, ley sueca de codeterminación en la vida laboral), § 11",
  "IMY, controllo e sorveglianza dei dipendenti":
    "IMY, control y vigilancia de los trabajadores",
  "IMY, come usare i servizi di localizzazione (GPS) sui dipendenti":
    "IMY, cómo utilizar los servicios de localización (GPS) con los trabajadores",
  "IMY, quando svolgere una valutazione d'impatto":
    "IMY, cuándo realizar una evaluación de impacto",
  "IMY, presentare un reclamo":
    "IMY, presentar una reclamación",
  "IMY, sanzione al Comune di Skelleftea (riconoscimento facciale per le presenze)":
    "IMY, sanción al municipio de Skellefteå (reconocimiento facial para el control de asistencia)",
  "Arbeidsmiljoloven, kap. 9 (misure di controllo, §§ 9-1 e 9-2)":
    "Arbeidsmiljøloven (ley noruega de entorno laboral), cap. 9 (medidas de control, §§ 9-1 y 9-2)",
  "Datatilsynet (Norvegia), GPS e tracciamento dei veicoli aziendali":
    "Datatilsynet (Noruega), GPS y seguimiento de los vehículos de empresa",
  "Datatilsynet (Norvegia), quando svolgere una valutazione d'impatto":
    "Datatilsynet (Noruega), cuándo realizar una evaluación de impacto",
  "Datatilsynet (autorità garante norvegese)":
    "Datatilsynet (autoridad noruega de protección de datos)",
  "Personvernnemnda, PVN-2017-07 (uso del GPS per controllare le ore del dipendente)":
    "Personvernnemnda, PVN-2017-07 (uso del GPS para controlar las horas de un trabajador)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96 (misure di controllo che toccano la dignita: consenso del consiglio aziendale)":
    "Arbeitsverfassungsgesetz (ArbVG, ley austriaca de constitución laboral), § 96 (medidas de control que afectan a la dignidad humana: consentimiento del comité de empresa)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96a (sistemi che trattano dati personali dei lavoratori)":
    "Arbeitsverfassungsgesetz (ArbVG), § 96a (sistemas que tratan datos personales de los trabajadores)",
  "DSFA-V, regolamento sui trattamenti che richiedono una valutazione d'impatto":
    "DSFA-V, reglamento sobre los tratamientos que requieren una evaluación de impacto",
  "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (fine del registro DVR)":
    "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (fin del registro DVR)",
  "Datenschutzbehörde (DSB), decisione 2022-0.021.739 (stop al GPS sui veicoli aziendali)":
    "Datenschutzbehörde (DSB), resolución 2022-0.021.739 (prohibición del GPS en los vehículos de empresa)",
  "Datenschutzbehörde (DSB), procedura di reclamo":
    "Datenschutzbehörde (DSB), procedimiento de reclamación",
  "CCT n. 81 del 26 aprile 2002 (controllo delle comunicazioni elettroniche in rete)":
    "CCT n.º 81 de 26 de abril de 2002 (control de las comunicaciones electrónicas en red)",
  "APD/GBA, geolocalizzazione dei lavoratori":
    "APD/GBA, geolocalización de los trabajadores",
  "APD/GBA, valutazione d'impatto sulla protezione dei dati":
    "APD/GBA, evaluación de impacto relativa a la protección de datos",
  "APD/GBA, presentare un reclamo":
    "APD/GBA, presentar una reclamación",
  "Chambre Contentieuse APD/GBA, decisione 114/2024 (impronte per le presenze, 45.000 euro), testo integrale":
    "Chambre Contentieuse APD/GBA, decisión 114/2024 (huellas dactilares para el control de asistencia, 45.000 euros), texto íntegro",
  "ICO, guida sul monitoraggio dei lavoratori (UK GDPR)":
    "ICO, guía sobre la supervisión de los trabajadores (UK GDPR)",
  "ICO, sorveglianza nei veicoli":
    "ICO, vigilancia en los vehículos",
  "ICO, quando serve una DPIA":
    "ICO, cuándo hace falta una EIPD",
  "ICO, provvedimento sul monitoraggio GPS (Home Office, 2024)":
    "ICO, resolución sobre la supervisión por GPS (Home Office, 2024)",
  "ICO, presentare una segnalazione":
    "ICO, presentar una denuncia",
  "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission dal 30/09/2026)":
    "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission desde el 30/09/2026)",
  "Regolamento UE 2016/679 (GDPR) come UK GDPR":
    "Reglamento (UE) 2016/679 (RGPD) como UK GDPR",
  "DPC, guida sul tracciamento dei veicoli aziendali (maggio 2020)":
    "DPC, guía sobre el seguimiento de los vehículos de empresa (mayo de 2020)",
  "DPC, pagina sul tracciamento dei veicoli dei dipendenti (aggiornata a maggio 2026)":
    "DPC, página sobre el seguimiento de los vehículos de los trabajadores (actualizada en mayo de 2026)",
  "DPC, lista dei trattamenti che richiedono una DPIA":
    "DPC, lista de los tratamientos que requieren una EIPD",
  "DPC, consultazione preventiva":
    "DPC, consulta previa",
  "DPC, presentare un reclamo":
    "DPC, presentar una reclamación",
  "DPC, decisione Limerick City and County Council (dicembre 2021)":
    "DPC, decisión Limerick City and County Council (diciembre de 2021)",
  "DPC, sentenza Doolin v. DPC (High Court, febbraio 2020)":
    "DPC, sentencia Doolin v. DPC (High Court, febrero de 2020)",
  "IFPDT/FDPIC, mezzi tecnici di sorveglianza sul luogo di lavoro":
    "PFPDT/FDPIC, medios técnicos de vigilancia en el lugar de trabajo",
  "IFPDT/FDPIC, trattamento dei dati da parte del datore di lavoro (CO art. 328b)":
    "PFPDT/FDPIC, tratamiento de datos por parte del empleador (CO art. 328b)",
  "IFPDT/FDPIC, valutazione d'impatto sulla protezione dei dati (nLPD art. 22)":
    "PFPDT/FDPIC, evaluación de impacto relativa a la protección de datos (nLPD art. 22)",
  "Legge federale sulla protezione dei dati (nLPD), art. 22, 23 e 60-65 (Fedlex)":
    "Ley federal de protección de datos (nLPD), arts. 22, 23 y 60-65 (Fedlex)",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo":
    "Reglamento (UE) 2016/679 (RGPD): referencia comparativa",
  "Legge 190/2018, art. 5 (monitoraggio dei dipendenti)":
    "Ley 190/2018, art. 5 (supervisión de los trabajadores)",
  "Codul Muncii, art. 40 (obblighi del datore), Portal Legislativ":
    "Codul Muncii (Código de trabajo rumano), art. 40 (obligaciones del empleador), Portal Legislativ",
  "ANSPDCP, comunicato del 23 marzo 2023 (sanzione Tehnoplus, GPS)":
    "ANSPDCP, comunicado de 23 de marzo de 2023 (multa a Tehnoplus, GPS)",
  "ANSPDCP, Decizia 174/2018 (lista trattamenti che richiedono DPIA), Monitorul Oficial 919/31.10.2018, art. 1 lett. d e g":
    "ANSPDCP, Decizia 174/2018 (lista de tratamientos que requieren una EIPD), Monitorul Oficial 919/31.10.2018, art. 1 letras d y g",
  "ANSPDCP, presentazione dei reclami":
    "ANSPDCP, presentación de reclamaciones",
  "Kodeks pracy, art. 22(2) (monitoraggio), testo consolidato Dz.U. 2026 poz. 1245 (in vigore dal 24 settembre 2026)":
    "Kodeks pracy (Código de trabajo polaco), art. 22(2) (supervisión), texto consolidado Dz.U. 2026 poz. 1245 (en vigor desde el 24 de septiembre de 2026)",
  "Legge del 4 dicembre 2025 di modifica del Codice del lavoro, Dz.U. 2026 poz. 25 (art. 22(2) par. 8: \"su carta o in forma elettronica\", in vigore dal 27 gennaio 2026)":
    "Ley de 4 de diciembre de 2025 por la que se modifica el Código de trabajo, Dz.U. 2026 poz. 25 (art. 22(2) apdo. 8: «en papel o en forma electrónica», en vigor desde el 27 de enero de 2026)",
  "Kodeks pracy, art. 22(3) par. 3-4 (altre forme di monitoraggio, tra cui il GPS), testo consolidato Dz.U. 2026 poz. 1245":
    "Kodeks pracy, art. 22(3) apdos. 3-4 (otras formas de supervisión, incluido el GPS), texto consolidado Dz.U. 2026 poz. 1245",
  "UODO, guida alla protezione dei dati sul luogo di lavoro":
    "UODO, guía sobre la protección de datos en el lugar de trabajo",
  "UODO, lista dei trattamenti che richiedono una DPIA (M.P. 2019 poz. 666)":
    "UODO, lista de los tratamientos que requieren una EIPD (M.P. 2019 poz. 666)",
  "UODO, presentare un reclamo":
    "UODO, presentar una reclamación",
  "UODO, sanzione Centrum Medyczne Ujastek (monitoraggio non comunicato ai dipendenti)":
    "UODO, sanción al Centrum Medyczne Ujastek (supervisión no comunicada a los trabajadores)",
  "Zakonik prace (Codice del lavoro), art. 316":
    "Zákoník práce (Código de trabajo checo), art. 316",
  "Stanovisko 2/2017 sul trattamento dei dati sul posto di lavoro, pubblicato dall UOOU":
    "Dictamen 2/2017 sobre el tratamiento de datos en el lugar de trabajo, publicado por la UOOU",
  "UOOU, lista dei trattamenti che richiedono una DPIA":
    "UOOU, lista de los tratamientos que requieren una EIPD",
  "UOOU, presentare una segnalazione":
    "UOOU, presentar una denuncia",
  "Tribunale municipale di Praga 6 A 42/2013 (Ceska posta, GPS sui portalettere), sentenza":
    "Tribunal municipal de Praga 6 A 42/2013 (Česká pošta, GPS en los carteros), sentencia",
  "epravo.cz, GPS monitoring zamestnancu podruhe (riporta una multa di 80.000 CZK e 7.770 portalettere, non confermati da fonti ufficiali)":
    "epravo.cz, GPS monitoring zaměstnanců podruhé (informa de una multa de 80.000 CZK y de 7.770 carteros, sin confirmación en fuentes oficiales)",
  "UOOU, relazione annuale 2014, controlli su Skoda Auto e Plzensky Prazdroj (GPS nei veicoli aziendali)":
    "UOOU, informe anual 2014, inspecciones a Škoda Auto y Plzeňský Prazdroj (GPS en los vehículos de empresa)",
  "HDPA (Garante greco), FAQ sui rapporti di lavoro (geolocalizzazione)":
    "HDPA (autoridad griega de protección de datos), preguntas frecuentes sobre las relaciones laborales (geolocalización)",
  "Legge 4624/2019, art. 27 (dati dei dipendenti), traduzione ufficiale HDPA":
    "Ley 4624/2019, art. 27 (datos de los trabajadores), traducción oficial de la HDPA",
  "HDPA, Decisione 65/2018 (lista dei trattamenti che richiedono DPIA)":
    "HDPA, Decisión 65/2018 (lista de los tratamientos que requieren una EIPD)",
  "HDPA, sanzione a un datore per geolocalizzazione (16 febbraio 2024)":
    "HDPA, multa a un empleador por geolocalización (16 de febrero de 2024)",
  "HDPA (Garante greco), pagina ufficiale":
    "HDPA (autoridad griega de protección de datos), página oficial",
  "Legge sulla protezione della privacy nella vita lavorativa (759/2004) - testo consolidato in finlandese (Finlex)":
    "Ley sobre la protección de la privacidad en la vida laboral (759/2004): texto consolidado en finés (Finlex)",
  "Garante finlandese (Tietosuojavaltuutettu), FAQ sulla vita lavorativa":
    "Defensor de la protección de datos de Finlandia (Tietosuojavaltuutettu), preguntas frecuentes sobre la vida laboral",
  "Garante finlandese, lista dei trattamenti che richiedono una DPIA":
    "Defensor de la protección de datos de Finlandia, lista de los tratamientos que requieren una EIPD",
  "Garante finlandese, segnalare una violazione":
    "Defensor de la protección de datos de Finlandia, notificar una infracción",
  "Garante finlandese, sanzione per dati di localizzazione usati per la rilevazione orario (2021)":
    "Defensor de la protección de datos de Finlandia, multa por datos de localización utilizados para registrar el horario (2021)",
  "Zakon o zaštiti na radu (legge sicurezza sul lavoro), art. 43 (dispositivi di sorveglianza)":
    "Zakon o zaštiti na radu (ley croata de seguridad en el trabajo), art. 43 (dispositivos de vigilancia)",
  "Zakon o radu (legge sul lavoro), art. 29 (dati dei lavoratori) e art. 150 (consultazione del consiglio dei lavoratori)":
    "Zakon o radu (ley croata del trabajo), art. 29 (datos de los trabajadores) y art. 150 (consulta al consejo de trabajadores)",
  "AZOP (Garante croato), trattamento dei dati dei dipendenti tramite GPS":
    "AZOP (autoridad croata de protección de datos), tratamiento de datos de los trabajadores mediante GPS",
  "AZOP, lista dei trattamenti che richiedono una DPIA":
    "AZOP, lista de los tratamientos que requieren una EIPD",
  "AZOP, richiesta di accertamento di violazione (reclamo)":
    "AZOP, solicitud de comprobación de una infracción (reclamación)",
  "AZOP (Garante croato), pagina ufficiale":
    "AZOP (autoridad croata de protección de datos), página oficial",
  "IP-RS (Garante sloveno), linee guida sull'uso dei dispositivi GPS":
    "IP-RS (autoridad eslovena de protección de datos), directrices sobre el uso de dispositivos GPS",
  "IP-RS, parere 'Sledenje zaposlenim' (tracciamento dei dipendenti)":
    "IP-RS, dictamen «Sledenje zaposlenim» (seguimiento de los trabajadores)",
  "IP-RS, comunicato del 15.04.2026: multa di 6.000 euro a un'azienda pubblica per GPS sui dipendenti":
    "IP-RS, comunicado de 15.04.2026: multa de 6.000 euros a una empresa pública por GPS a los trabajadores",
  "Zakon o delovnih razmerjih (ZDR-1), art. 48 (dati dei lavoratori)":
    "Zakon o delovnih razmerjih (ZDR-1, ley eslovena de relaciones laborales), art. 48 (datos de los trabajadores)",
  "Zakon o sodelovanju delavcev pri upravljanju (ZSDU), art. 89-90 (informazione del consiglio dei lavoratori)":
    "Zakon o sodelovanju delavcev pri upravljanju (ZSDU, ley eslovena de participación de los trabajadores en la gestión), arts. 89-90 (información al consejo de trabajadores)",
  "IP-RS, elenco dei trattamenti per cui e' obbligatoria la valutazione d'impatto (art. 35.4 GDPR)":
    "IP-RS, lista de los tratamientos para los que es obligatoria la evaluación de impacto (art. 35.4 del RGPD)",
  "IP-RS, presentare una segnalazione":
    "IP-RS, presentar una denuncia",
  "Zakonnik prace (Codice del lavoro), art. 13 par. 4 (monitoraggio dei dipendenti)":
    "Zákonník práce (Código de trabajo eslovaco), art. 13 apdo. 4 (supervisión de los trabajadores)",
  "UOOU SR (Garante slovacco), procedura di tutela":
    "UOOU SR (autoridad eslovaca de protección de datos), procedimiento de tutela",
  "Parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli, versione slovacca pubblicata dall UOOU SR":
    "Dictamen 2/2017 sobre el tratamiento de datos en el lugar de trabajo (WP249), apdo. 5.7 vehículos, versión eslovaca publicada por la UOOU SR",
  "Lista slovacca dei trattamenti soggetti a DPIA (punti 3 e 9), pubblicata dall EDPB":
    "Lista eslovaca de los tratamientos sujetos a una EIPD (puntos 3 y 9), publicada por el CEPD",
  "UOOU SR, guida sulla liceita del trattamento (versione aggiornata 22/01/2019), esempio del par. 13 c. 4 del Codice del lavoro":
    "UOOU SR, guía sobre la licitud del tratamiento (versión actualizada 22/01/2019), ejemplo del art. 13 apdo. 4 del Código de trabajo",
  "UOOU SR, presentare una proposta di avvio del procedimento (reclamo)":
    "UOOU SR, presentar una propuesta de inicio de procedimiento (reclamación)",
  "UOOU SR, relazione sullo stato della protezione dei dati 2025 (par. 9.2.1, trattamento di dati di geolocalizzazione)":
    "UOOU SR, informe sobre el estado de la protección de datos 2025 (apdo. 9.2.1, tratamiento de datos de geolocalización)",
  "Codice del lavoro (Mt.), art. 9 (diritti della persona) e art. 11/A (controllo dei lavoratori)":
    "Código de trabajo húngaro (Mt.), art. 9 (derechos de la persona) y art. 11/A (control de los trabajadores)",
  "NAIH, guida sui trattamenti sul luogo di lavoro (novembre 2016, precedente al GDPR), par. 5 sul GPS":
    "NAIH, guía sobre los tratamientos en el lugar de trabajo (noviembre de 2016, anterior al RGPD), apdo. 5 sobre el GPS",
  "NAIH, lista dei trattamenti che richiedono una valutazione d'impatto":
    "NAIH, lista de los tratamientos que requieren una evaluación de impacto",
  "NAIH, sanzione Auchan (monitoraggio dei dipendenti)":
    "NAIH, multa a Auchan (supervisión de los trabajadores)",
  "NAIH (Garante ungherese), pagina ufficiale":
    "NAIH (autoridad húngara de protección de datos), página oficial",
  "Legge sulla protezione dei dati (ZZLD), testo consolidato sul sito del CPDP (art. 25д e 25и; ultima modifica ДВ 70/2024)":
    "Ley de protección de datos personales (ZZLD), texto consolidado en el sitio de la CPDP (arts. 25д y 25и; última modificación ДВ 70/2024)",
  "CPDP (Garante bulgaro), guida sulla privacy sul luogo di lavoro (2014, anteriore al GDPR), par. 3.5.2 sistemi GPS":
    "CPDP (autoridad búlgara de protección de datos), guía sobre la privacidad en el lugar de trabajo (2014, anterior al RGPD), apdo. 3.5.2 sistemas GPS",
  "CPDP, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "CPDP, lista de los tratamientos que requieren una EIPD (art. 35.4)",
  "CPDP, parere su LUKOIL (riuso della videosorveglianza per valutare i dipendenti)":
    "CPDP, dictamen sobre LUKOIL (reutilización de la videovigilancia para evaluar a los trabajadores)",
  "CPDP (Garante bulgaro), pagina ufficiale":
    "CPDP (autoridad búlgara de protección de datos), página oficial",
  "AKI (Garante estone), FAQ sui rapporti di lavoro (GPS)":
    "AKI (autoridad estonia de protección de datos), preguntas frecuentes sobre las relaciones laborales (GPS)",
  "AKI, guida per il personale sui dati nel rapporto di lavoro (2011, ante-GDPR), punto 2.9 GPS":
    "AKI, guía para el personal sobre los datos en la relación laboral (2011, anterior al RGPD), punto 2.9 GPS",
  "Legge sul fiduciario dei lavoratori (Töötajate usaldusisiku seadus), §§ 17 e 20 - Riigi Teataja":
    "Ley del representante de confianza de los trabajadores (Töötajate usaldusisiku seadus), §§ 17 y 20, Riigi Teataja",
  "Legge estone sulla protezione dei dati personali (Isikuandmete kaitse seadus), §§ 62-73 - Riigi Teataja":
    "Ley estonia de protección de datos personales (Isikuandmete kaitse seadus), §§ 62-73, Riigi Teataja",
  "AKI, materiale sul trattamento dei dati nel rapporto di lavoro":
    "AKI, material sobre el tratamiento de datos en la relación laboral",
  "AKI, valutazione d'impatto (capitolo 5)":
    "AKI, evaluación de impacto (capítulo 5)",
  "AKI, presentare un reclamo":
    "AKI, presentar una reclamación",
  "AKI (Garante estone), pagina ufficiale":
    "AKI (autoridad estonia de protección de datos), página oficial",
  "DVI (Garante lettone), posso tracciare i viaggi del mio dipendente? (GPS)":
    "DVI (autoridad letona de protección de datos), ¿puedo hacer un seguimiento de los desplazamientos de mi trabajador? (GPS)",
  "Legge lettone sul trattamento dei dati delle persone fisiche (Fizisko personu datu apstrādes likums) - Likumi.lv":
    "Ley letona de tratamiento de datos de las personas físicas (Fizisko personu datu apstrādes likums), Likumi.lv",
  "DVI, videosorveglianza dei dipendenti in presenza (16/09/2022)":
    "DVI, videovigilancia de los trabajadores en el centro de trabajo (16/09/2022)",
  "DVI, videosorveglianza dei dipendenti nel lavoro da remoto":
    "DVI, videovigilancia de los trabajadores en el trabajo a distancia",
  "DVI, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "DVI, lista de los tratamientos que requieren una EIPD (art. 35.4)",
  "DVI, presentare un reclamo":
    "DVI, presentar una reclamación",
  "Gruppo art. 29, parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli":
    "Grupo del artículo 29, dictamen 2/2017 sobre el tratamiento de datos en el lugar de trabajo (WP249), apdo. 5.7 vehículos",
  "VDAI, lista dei trattamenti che richiedono una DPIA (voce 10: monitoraggio dei dipendenti)":
    "VDAI, lista de los tratamientos que requieren una EIPD (punto 10: supervisión de los trabajadores)",
  "VDAI, decisione sul trattamento della corrispondenza personale di un dipendente (2022)":
    "VDAI, resolución sobre el tratamiento de la correspondencia personal de un trabajador (2022)",
  "VDAI, elenco delle decisioni (multe, ordini e altro) fino al 2025":
    "VDAI, lista de las resoluciones (multas, órdenes y otras) hasta 2025",
  "VDAI (Garante lituano), servizi e reclami":
    "VDAI (autoridad lituana de protección de datos), servicios y reclamaciones",
  "Loi du 1er août 2018, art. 71 (nuovo art. L.261-1 del Code du travail) e art. 72 (abrogazione della legge del 2 agosto 2002), Legilux":
    "Loi du 1er août 2018, art. 71 (nuevo art. L.261-1 del Code du travail) y art. 72 (derogación de la ley de 2 de agosto de 2002), Legilux",
  "Code du travail, art. L.261-1 (sorveglianza dei lavoratori) - riproduzione CNPD":
    "Code du travail (Código de trabajo luxemburgués), art. L.261-1 (vigilancia de los trabajadores), reproducción de la CNPD",
  "CNPD, geolocalizzazione dei veicoli: necessità e proporzionalità":
    "CNPD, geolocalización de los vehículos: necesidad y proporcionalidad",
  "CNPD, geolocalizzazione: valutazione d'impatto (AIPD)":
    "CNPD, geolocalización: evaluación de impacto (EIPD)",
  "CNPD, decisione 11FR/2021 (sanzione geolocalizzazione veicoli di servizio)":
    "CNPD, decisión 11FR/2021 (sanción por geolocalización de vehículos de servicio)",
  "CNPD, presentare un reclamo (Faire valoir vos droits)":
    "CNPD, presentar una reclamación (Faire valoir vos droits)",
  "Regole n. 50/2023 sulla sorveglianza elettronica (Gazzetta ufficiale)":
    "Reglas n.º 50/2023 sobre la vigilancia electrónica (Boletín Oficial)",
  "Regole 1329/2025 di Persónuvernd (modifica delle Regole 50/2023, art. 3: 90 giorni)":
    "Reglas 1329/2025 de Persónuvernd (modificación de las Reglas 50/2023, art. 3: 90 días)",
  "Persónuvernd (Garante islandese), FAQ sul GPS e i dispositivi di localizzazione":
    "Persónuvernd (autoridad islandesa de protección de datos), preguntas frecuentes sobre el GPS y los dispositivos de localización",
  "Persónuvernd, lista dei trattamenti che richiedono una DPIA (Auglýsing nr. 828/2019)":
    "Persónuvernd, lista de los tratamientos que requieren una EIPD (Auglýsing nr. 828/2019)",
  "Persónuvernd, presentare un reclamo":
    "Persónuvernd, presentar una reclamación",
  "Persónuvernd, decisione Islandspostur (uso illecito del GPS su un dipendente)":
    "Persónuvernd, resolución Islandspostur (uso ilícito del GPS con un trabajador)",
  "IDPC (Garante maltese), guida al settore del lavoro":
    "IDPC (autoridad maltesa de protección de datos), guía del ámbito laboral",
  "IDPC, valutazione d'impatto sulla protezione dei dati":
    "IDPC, evaluación de impacto relativa a la protección de datos",
  "IDPC, presentare un reclamo":
    "IDPC, presentar una reclamación",
  "IDPC, decisione CDP/COMP/579/2025 del 20 aprile 2026 (videosorveglianza della mensa aziendale)":
    "IDPC, decisión CDP/COMP/579/2025 de 20 de abril de 2026 (videovigilancia del comedor de empresa)",
  "Legge 125(I)/2018 sulla protezione dei dati (art. 36: abrogazione delle leggi 2001-2012)":
    "Ley 125(I)/2018 de protección de datos (art. 36: derogación de las leyes de 2001-2012)",
  "Commissario cipriota, registro delle attività: abolito l'obbligo di notifica al Commissario (art. 30 GDPR)":
    "Comisionado chipriota, registro de actividades: suprimida la obligación de notificación al Comisionado (art. 30 del RGPD)",
  "Commissario cipriota, valutazione d'impatto (elenco indicativo: monitoraggio sistematico dei dipendenti, GPS)":
    "Comisionado chipriota, evaluación de impacto (lista indicativa: supervisión sistemática de los trabajadores, GPS)",
  "GDPR, art. 13 (informazione), testo ufficiale EUR-Lex":
    "RGPD, art. 13 (información), texto oficial de EUR-Lex",
  "GDPR, art. 6(1)(f) e considerando 43 (base giuridica e squilibrio fra le parti), testo ufficiale EUR-Lex":
    "RGPD, art. 6(1)(f) y considerando 43 (base jurídica y desequilibrio entre las partes), texto oficial de EUR-Lex",
  "Garante cipriota, pagina ufficiale":
    "Comisionado chipriota, página oficial",
  "Commissario cipriota, decisione del 25.10.2019 sul Gruppo Louis (strumento Bradford Factor)":
    "Comisionado chipriota, decisión de 25.10.2019 sobre el Grupo Louis (herramienta Bradford Factor)",
  "Legge 124/2024 sulla protezione dei dati personali (in vigore dal 1 febbraio 2025)":
    "Ley 124/2024 de protección de datos personales (en vigor desde el 1 de febrero de 2025)",
  "IDP, linea guida n. 03 del 30.04.2025 sulla videosorveglianza":
    "IDP, directriz n.º 03 de 30.04.2025 sobre la videovigilancia",
  "IDP (Garante albanese), pagina ufficiale":
    "IDP (autoridad albanesa de protección de datos), página oficial",
  "Legge sulla protezione dei dati (LPDP, 87/2018) - testo ufficiale":
    "Ley de protección de datos personales (LPDP, 87/2018), texto oficial",
  "Poverenik, decisione sulla lista dei trattamenti che richiedono una DPIA (Gazzetta 45/2019)":
    "Poverenik, decisión sobre la lista de los tratamientos que requieren una EIPD (Boletín 45/2019)",
  "Odluka sulla lista dei trattamenti che richiedono DPIA (Sl. glasnik RS 45/2019 e 112/2020, testo consolidato)":
    "Decisión (Odluka) sobre la lista de los tratamientos que requieren una EIPD (Sl. glasnik RS 45/2019 y 112/2020, texto consolidado)",
  "Poverenik (Garante serbo), competenze e contatti":
    "Poverenik (autoridad serbia de protección de datos), competencias y contacto",
  "Danas, ispezione straordinaria del Poverenik al JKP Mediana di Nis (7 aprile 2026)":
    "Danas, inspección extraordinaria del Poverenik al JKP Mediana de Niš (7 de abril de 2026)",
  "N1, GPS su 80 cassonetti del JKP Mediana di Nis (protesta dei lavoratori, gennaio 2026)":
    "N1, GPS en 80 contenedores del JKP Mediana de Niš (protesta de los trabajadores, enero de 2026)",
  "Legge sulla protezione dei dati personali (Gazzetta BiH 12/25), testo pubblicato dall AZLP":
    "Ley de protección de datos personales (Boletín Oficial de BiH 12/25), texto publicado por la AZLP",
  "AZLP, decisione del 10.11.2025 sulla lista dei trattamenti che richiedono una DPIA (punto 8: dati dei dipendenti, controllo di lavoro e spostamenti)":
    "AZLP, decisión de 10.11.2025 sobre la lista de los tratamientos que requieren una EIPD (punto 8: datos de los trabajadores, control del trabajo y de los desplazamientos)",
  "AZLP (Garante bosniaco), pagina ufficiale":
    "AZLP (autoridad bosnia de protección de datos), página oficial",
  "Legge sulla protezione dei dati personali, Gazzetta ufficiale BiH 12/25":
    "Ley de protección de datos personales, Boletín Oficial de BiH 12/25",
  "Legge sulla protezione dei dati personali, testo consolidato pubblicato dall'AZLP (artt. 26-28 e sanzioni, art. 74)":
    "Ley de protección de datos personales, texto consolidado publicado por la AZLP (arts. 26-28 y sanciones, art. 74)",
  "Nuova legge sulla protezione dei dati personali, Službeni list CG 133/2026 (pubblicata l'11.9.2026, in vigore dal 19.9.2026, si applica dal 19.3.2027, art. 106; artt. 88, 89 e 105)":
    "Nueva ley de protección de datos personales, Službeni list CG 133/2026 (publicada el 11 de septiembre de 2026, en vigor desde el 19 de septiembre de 2026, se aplica desde el 19 de marzo de 2027, art. 106; arts. 88, 89 y 105)",
  "AZLP, posizione del Consiglio sull'uso del GPS nei veicoli di servizio (29.04.2025)":
    "AZLP, posición del Consejo sobre el uso del GPS en los vehículos de servicio (29.04.2025)",
  "AZLP (Garante montenegrino), contatti":
    "AZLP (autoridad montenegrina de protección de datos), contacto",
  "AZLP, moduli (richiesta di tutela dei diritti)":
    "AZLP, formularios (solicitud de tutela de derechos)",
  "Regolamento UE 2016/679 (GDPR), riferimento comparativo":
    "Reglamento (UE) 2016/679 (RGPD), referencia comparativa",
  "Legge sulla protezione dei dati (LPDP, Gazzetta 42/20) - traduzione inglese non ufficiale pubblicata dall'AZLP":
    "Ley de protección de datos personales (LPDP, Boletín 42/20), traducción inglesa no oficial publicada por la AZLP",
  "AZLP, lista dei trattamenti che richiedono la DPIA (11.05.2020, punti 10 e 12: posizione e spostamenti, dati dei lavoratori)":
    "AZLP, lista de los tratamientos que requieren la EIPD (11.05.2020, puntos 10 y 12: ubicación y desplazamientos, datos de los trabajadores)",
  "AZLP, atti subordinati (regolamenti e liste), pagina ufficiale":
    "AZLP, actos subordinados (reglamentos y listas), página oficial",
  "AZLP (Garante macedone), pagina ufficiale e reclami":
    "AZLP (autoridad macedonia de protección de datos), página oficial y reclamaciones",
  "Legge dell'Ucraina n. 2297-VI sulla protezione dei dati personali (2010)":
    "Ley de Ucrania n.º 2297-VI de protección de datos personales (2010)",
  "Ordine del Difensore civico 1/02-14: procedura di notifica dei trattamenti a rischio particolare":
    "Orden del Defensor del Pueblo 1/02-14: procedimiento de notificación de los tratamientos de riesgo especial",
  "Codice ucraino delle infrazioni amministrative, art. 188-39 (violazioni in materia di dati personali)":
    "Código ucraniano de infracciones administrativas, art. 188-39 (infracciones en materia de datos personales)",
  "Difensore civico (Garante ucraino), protezione dei dati personali":
    "Defensor del Pueblo (autoridad ucraniana de protección de datos), protección de datos personales",
  "ICLG, protezione dei dati in Ucraina (basi giuridiche, DPIA)":
    "ICLG, protección de datos en Ucrania (bases jurídicas, EIPD)",
  "CNPDCP, presentare un reclamo":
    "CNPDCP, presentar una reclamación",
  "Legge 195/2024 sulla protezione dei dati personali, in vigore dal 23 agosto 2026 (art. 35 DPIA, art. 88 sanzioni), testo inglese pubblicato dal CNPDCP":
    "Ley 195/2024 de protección de datos personales, en vigor desde el 23 de agosto de 2026 (art. 35 EIPD, art. 88 sanciones), texto inglés publicado por la CNPDCP",
  "CNPDCP, ordine 27/2022: lista dei trattamenti soggetti a valutazione d'impatto (modificata dall'ordine 39/2026)":
    "CNPDCP, orden 27/2022: lista de los tratamientos sujetos a evaluación de impacto (modificada por la orden 39/2026)",
  "Legge della Repubblica di Bielorussia n. 99-Z del 7 maggio 2021 sulla protezione dei dati personali (NPDPC)":
    "Ley de la República de Bielorrusia n.º 99-Z de 7 de mayo de 2021 de protección de datos personales (NPDPC)",
  "Ordine OAC n. 94 del 1 giugno 2022: Registro degli operatori di dati personali (casi di iscrizione)":
    "Orden OAC n.º 94 de 1 de junio de 2022: Registro de los operadores de datos personales (supuestos de inscripción)",
  "NPDPC (N. Shved), responsabilita amministrativa per violazione della normativa sui dati personali (art. 23.7 CAO)":
    "NPDPC (N. Shved), responsabilidad administrativa por infracción de la normativa sobre datos personales (art. 23.7 CAO)",
  "NPDPC (Garante bielorusso), informazioni e contatti":
    "NPDPC (autoridad bielorrusa de protección de datos), información y contacto",
  "GRATA, protezione dei dati e privacy dei dipendenti in Bielorussia":
    "GRATA, protección de datos y privacidad de los trabajadores en Bielorrusia",
  "DLA Piper, applicazione e sanzioni in Bielorussia":
    "DLA Piper, aplicación y sanciones en Bielorrusia",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo lontano":
    "Reglamento (UE) 2016/679 (RGPD): referencia comparativa lejana",
  "ANPD, denúncia di inadempimento della LGPD":
    "ANPD, denuncia de incumplimiento de la LGPD",
  "ANPD, canale per il titolare dei dati":
    "ANPD, canal para el titular de los datos",
  "Lei n. 15.352/2026 (l’ANPD diventa agência reguladora)":
    "Lei n.º 15.352/2026 (la ANPD pasa a ser una agência reguladora, autoridad reguladora)",
  "BfDI, elenco delle autorità dei Land (per trovare la tua)":
    "BfDI, lista de las autoridades de los Länder (para encontrar la tuya)",
  "BayLDA (esempio, Baviera)":
    "BayLDA (ejemplo, Baviera)",
  "CNIL, presentare un reclamo":
    "CNIL, presentar una reclamación",
  "AEPD, sede elettronica":
    "AEPD, sede electrónica",
  "CNPD, segnalazioni":
    "CNPD, denuncias",
  "IMY, reclami":
    "IMY, reclamaciones",
  "Datenschutzbehörde (DSB), reclamo":
    "Datenschutzbehörde (DSB), reclamación",
  "APD/GBA, reclamo":
    "APD/GBA, reclamación",
  "ICO, segnalazioni":
    "ICO, denuncias",
  "DPC, reclami":
    "DPC, reclamaciones",
  "ANSPDCP, reclami":
    "ANSPDCP, reclamaciones",
  "UODO, reclami":
    "UODO, reclamaciones",
  "UOOU, segnalazioni":
    "UOOU, denuncias",
  "Garante, segnalazioni":
    "Defensor de la protección de datos de Finlandia, denuncias",
  "AZOP, reclami":
    "AZOP, reclamaciones",
  "IP-RS, segnalazioni":
    "IP-RS, denuncias",
  "UOOU SR, avvio del procedimento":
    "UOOU SR, inicio del procedimiento",
  "AKI, reclami":
    "AKI, reclamaciones",
  "DVI, reclami":
    "DVI, reclamaciones",
  "VDAI, servizi e reclami":
    "VDAI, servicios y reclamaciones",
  "CNPD, reclami":
    "CNPD, reclamaciones",
  "Persónuvernd, reclami":
    "Persónuvernd, reclamaciones",
  "IDPC, reclami":
    "IDPC, reclamaciones",
  "Garante cipriota":
    "Comisionado chipriota",
  "AZLP, tutela dei diritti":
    "AZLP, tutela de los derechos",
  "Difensore civico, protezione dei dati":
    "Defensor del Pueblo, protección de datos",
  "CNPDCP, reclami":
    "CNPDCP, reclamaciones",
};
