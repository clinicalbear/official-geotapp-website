/**
 * Русская версия текстов, которые в карточках стран записаны как обычная
 * `string` (то есть на итальянском, мастер-языке): заголовки источников и
 * названия контактных органов. Ключ = точный ИТАЛЬЯНСКИЙ текст, как он
 * указан в карточке, значение = русская версия. Используется `loc()`
 * (./localize.ts) исключительно для `ru`. Официальные названия законов и
 * органов сохраняются на языке оригинала, с русским пояснением в скобках
 * там, где это помогает понять, о чём идёт речь.
 *
 * Новый источник или изменённый заголовок в карточке без записи здесь
 * остаётся на итальянском на русской странице: это выявляет тест
 * `traduzioni-ru.test.ts`.
 */
export const TESTI_RU: Readonly<Record<string, string>> = {
  "Legge lituana sulla protezione giuridica dei dati personali (ADTAĮ), art. 5 c. 4, testo consolidato":
    "Литовский закон о правовой защите персональных данных (ADTAĮ), ст. 5 ч. 4, консолидированный текст",
  "UOOU, relazione annuale 2012, controllo su Česká pošta (monitoraggio degli spostamenti dei portalettere)":
    "UOOU, годовой отчёт за 2012 год, проверка Česká pošta (слежение за перемещениями почтальонов)",
  "CNPD, Deliberação 2019/494 (norme della Lei 58/2019 disapplicate)":
    "CNPD, Deliberação 2019/494 (положения Lei 58/2019 не применяются)",
  "Garante Privacy, Provvedimento n. 7 del 16 gennaio 2025 (doc-web 10112287)":
    "Garante Privacy, решение № 7 от 16 января 2025 г. (doc-web 10112287)",
  "Garante Privacy, Provvedimento n. 755 del 18 dicembre 2025, n. 10213711 (Pioneer Hi-Bred Italia Sementi)":
    "Garante Privacy, решение № 755 от 18 декабря 2025 г., doc-web 10213711 (Pioneer Hi-Bred Italia Sementi)",
  "Garante Privacy, Provvedimento n. 382 del 28 maggio 2026, n. 10259916 (Azienda di Tutela della Salute per la Liguria)":
    "Garante Privacy, решение № 382 от 28 мая 2026 г., doc-web 10259916 (Azienda di Tutela della Salute per la Liguria, орган здравоохранения региона Лигурия)",
  "Garante Privacy, Provvedimento n. 135 del 13 marzo 2025 (doc-web 10128005), rimosso temporaneamente dal sito in ottemperanza alla sentenza del Tribunale di Cosenza n. 972 del 1° luglio 2026 (opposizione accolta)":
    "Garante Privacy, решение № 135 от 13 марта 2025 г. (doc-web 10128005), временно удалено с сайта во исполнение решения суда Козенцы № 972 от 1 июля 2026 г. (возражение удовлетворено)",
  "AGI Lavoro, «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (sentenza n. 972 del 1° luglio 2026; il testo della sentenza non è stato reperito in fonte ufficiale)":
    "AGI Lavoro, «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (решение № 972 от 1 июля 2026 г.; текст решения не найден в официальном источнике)",
  "Avvocati Associati, commento alla sentenza Trib. Cosenza n. 972/2026 (22/09/2026), con passi citati":
    "Avvocati Associati, комментарий к решению суда Козенцы № 972/2026 (22.09.2026) с цитируемыми фрагментами",
  "Legge 20 maggio 1970, n. 300 (Statuto dei Lavoratori), art. 4":
    "Закон № 300 от 20 мая 1970 г. (Статут трудящихся Италии), ст. 4",
  "Regolamento UE 2016/679 (GDPR), artt. 5, 13, 25, 35, 88":
    "Регламент (ЕС) 2016/679 (GDPR), ст. 5, 13, 25, 35, 88",
  "Betriebsverfassungsgesetz, § 87 (cogestione del consiglio aziendale)":
    "Betriebsverfassungsgesetz (немецкий закон о производственном совете), § 87 (соучастие производственного совета в управлении)",
  "Bundesdatenschutzgesetz, § 26 (dati dei lavoratori)":
    "Bundesdatenschutzgesetz (федеральный закон Германии о защите данных), § 26 (данные работников)",
  "Garante del Baden-Württemberg, FAQ sulle basi giuridiche dei dati dei dipendenti (sentenza CGUE C-34/21)":
    "Орган по защите данных земли Баден-Вюртемберг, вопросы и ответы о правовых основаниях обработки данных сотрудников (решение Суда ЕС по делу C-34/21)",
  "Regolamento UE 2016/679 (GDPR)":
    "Регламент (ЕС) 2016/679 (GDPR)",
  "Garante della Renania-Palatinato, guida sulla localizzazione GPS dei dipendenti":
    "Орган по защите данных земли Рейнланд-Пфальц, руководство по GPS-слежению за сотрудниками",
  "Lista DSK dei trattamenti che richiedono una valutazione d'impatto (settore privato)":
    "Перечень DSK операций обработки, требующих оценки воздействия (частный сектор)",
  "BfDI, elenco delle autorità garanti per la protezione dei dati dei Land":
    "BfDI, список органов по защите данных земель Германии",
  "Garante di Amburgo, comunicato del 1 ottobre 2020 (sanzione H&M)":
    "Орган по защите данных Гамбурга, пресс-релиз от 1 октября 2020 г. (штраф H&M)",
  "BayLDA, autorità garante della Baviera":
    "BayLDA, орган по защите данных земли Бавария",
  "BlnBDI, autorità garante di Berlino":
    "BlnBDI, орган по защите данных Берлина",
  "Code du travail, art. L2312-38 (consultazione del CSE sui mezzi di controllo)":
    "Code du travail (трудовой кодекс Франции), ст. L2312-38 (консультация с CSE по средствам контроля)",
  "Code du travail, art. L1222-4 (nessuna raccolta da dispositivo non portato a conoscenza)":
    "Code du travail, ст. L1222-4 (запрет сбора данных с устройства, о котором работник не был уведомлён)",
  "CNIL, guida sulla geolocalizzazione dei veicoli dei dipendenti":
    "CNIL, руководство по геолокации служебных автомобилей сотрудников",
  "CNIL, lista dei trattamenti che richiedono una valutazione d'impatto (AIPD)":
    "CNIL, перечень операций обработки, требующих оценки воздействия (AIPD)",
  "CNIL, abolizione delle dichiarazioni preventive dal 25 maggio 2018":
    "CNIL, отмена предварительных уведомлений с 25 мая 2018 г.",
  "CNIL, dieci nuove sanzioni (procedura semplificata, 7 novembre 2023)":
    "CNIL, десять новых санкций (упрощённая процедура, 7 ноября 2023 г.)",
  "CNIL, deliberazione SAN-2022-015 del 7 luglio 2022 (UBEEQO International, 175.000 €), su Légifrance":
    "CNIL, решение SAN-2022-015 от 7 июля 2022 г. (UBEEQO International, 175 000 €), на Légifrance",
  "Ley Organica 3/2018 (LOPDGDD), art. 90 (geolocalizzazione sul lavoro)":
    "Ley Orgánica 3/2018 (LOPDGDD), ст. 90 (геолокация на рабочем месте)",
  "Estatuto de los Trabajadores, artt. 20.3 e 64":
    "Estatuto de los Trabajadores, ст. 20.3 и 64",
  "AEPD, FAQ sul GPS nelle auto aziendali usate dai lavoratori":
    "AEPD, вопросы и ответы о GPS в служебных автомобилях, используемых работниками",
  "AEPD, lista dei trattamenti che richiedono una valutazione d'impatto (art. 35.4 GDPR)":
    "AEPD, перечень операций обработки, требующих оценки воздействия (ст. 35.4 GDPR)",
  "AEPD, guida sulla protezione dei dati nei rapporti di lavoro":
    "AEPD, руководство по защите данных в трудовых отношениях",
  "AEPD, sanzione PS/00454/2024 (Ares Capital, 200.000 €)":
    "AEPD, штраф PS/00454/2024 (Ares Capital, 200 000 €)",
  "Wet op de ondernemingsraden (WOR), art. 27 (diritto di consenso del consiglio aziendale)":
    "Wet op de ondernemingsraden (WOR, нидерландский закон о производственных советах), ст. 27 (право производственного совета на согласие)",
  "Autoriteit Persoonsgegevens, lista dei trattamenti che richiedono una DPIA":
    "Autoriteit Persoonsgegevens, перечень операций обработки, требующих DPIA",
  "Autoriteit Persoonsgegevens, condizioni per il controllo dei dipendenti":
    "Autoriteit Persoonsgegevens, условия контроля за сотрудниками",
  "Autoriteit Persoonsgegevens, controllo dei dipendenti a distanza (GPS sulle auto aziendali)":
    "Autoriteit Persoonsgegevens, дистанционный контроль за сотрудниками (GPS в служебных автомобилях)",
  "Autoriteit Persoonsgegevens, sanzione per il trattamento delle impronte dei dipendenti":
    "Autoriteit Persoonsgegevens, штраф за обработку отпечатков пальцев сотрудников",
  "Codigo do Trabalho, art. 20 (mezzi di sorveglianza a distanza)":
    "Código do Trabalho (трудовой кодекс Португалии), ст. 20 (средства дистанционного наблюдения)",
  "CNPD, Deliberacao 7680/2014 (geolocalizzazione nel contesto lavorativo)":
    "CNPD, Deliberação 7680/2014 (геолокация в трудовых отношениях)",
  "Lei 58/2019, art. 28 (relazioni di lavoro)":
    "Lei 58/2019, ст. 28 (трудовые отношения)",
  "CNPD, videovigilanza: nel contesto lavorativo restano le condizioni del Codice del lavoro, senza l'autorizzazione della CNPD":
    "CNPD, видеонаблюдение: в трудовых отношениях продолжают действовать условия трудового кодекса, без разрешения CNPD",
  "CNPD, valutazione d'impatto sulla protezione dei dati":
    "CNPD, оценка воздействия на защиту данных",
  "CNPD, Regulamento n.º 798/2018 (lista dei trattamenti soggetti a valutazione d'impatto)":
    "CNPD, Regulamento n.º 798/2018 (перечень операций обработки, подлежащих оценке воздействия)",
  "Tribunal da Relação de Lisboa, acórdão del 17 giugno 2026, proc. 2266/25.4T8TVD.L1-4 (GPS del veicolo di una lavoratrice)":
    "Tribunal da Relação de Lisboa, решение от 17 июня 2026 г., дело 2266/25.4T8TVD.L1-4 (GPS в автомобиле работницы)",
  "CNPD, presentare una segnalazione":
    "CNPD, подать обращение",
  "Datatilsynet, guida sul controllo dei dipendenti (Kontrol af medarbejdere)":
    "Datatilsynet, руководство «Kontrol af medarbejdere» (контроль за сотрудниками)",
  "Datatilsynet, lista dei trattamenti che richiedono una valutazione d'impatto":
    "Datatilsynet, перечень операций обработки, требующих оценки воздействия",
  "Datatilsynet, controlli 2020 sull'obbligo di informazione nelle misure di controllo dei dipendenti (GPS, videosorveglianza e altre)":
    "Datatilsynet, проверки 2020 года соблюдения обязанности информирования при мерах контроля за сотрудниками (GPS, видеонаблюдение и другие)",
  "Datatilsynet, aree prioritarie dei controlli nel 2026 (sorveglianza dei dipendenti)":
    "Datatilsynet, приоритетные направления проверок в 2026 году (надзор за сотрудниками)",
  "Datatilsynet (autorità garante danese)":
    "Datatilsynet (орган по защите данных Дании)",
  "Lag 1976:580 om medbestammande i arbetslivet (MBL), § 11":
    "Lag 1976:580 om medbestämmande i arbetslivet (MBL, шведский закон об участии в управлении на производстве), § 11",
  "IMY, controllo e sorveglianza dei dipendenti":
    "IMY, контроль и надзор за сотрудниками",
  "IMY, come usare i servizi di localizzazione (GPS) sui dipendenti":
    "IMY, как использовать сервисы геолокации (GPS) в отношении сотрудников",
  "IMY, quando svolgere una valutazione d'impatto":
    "IMY, когда проводить оценку воздействия",
  "IMY, presentare un reclamo":
    "IMY, подать жалобу",
  "IMY, sanzione al Comune di Skelleftea (riconoscimento facciale per le presenze)":
    "IMY, штраф коммуне Шеллефтео (распознавание лиц для учёта присутствия)",
  "Arbeidsmiljoloven, kap. 9 (misure di controllo, §§ 9-1 e 9-2)":
    "Arbeidsmiljøloven (закон Норвегии об условиях труда), гл. 9 (меры контроля, §§ 9-1 и 9-2)",
  "Datatilsynet (Norvegia), GPS e tracciamento dei veicoli aziendali":
    "Datatilsynet (Норвегия), GPS и слежение за служебными автомобилями",
  "Datatilsynet (Norvegia), quando svolgere una valutazione d'impatto":
    "Datatilsynet (Норвегия), когда проводить оценку воздействия",
  "Datatilsynet (autorità garante norvegese)":
    "Datatilsynet (орган по защите данных Норвегии)",
  "Personvernnemnda, PVN-2017-07 (uso del GPS per controllare le ore del dipendente)":
    "Personvernnemnda, PVN-2017-07 (использование GPS для контроля рабочего времени сотрудника)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96 (misure di controllo che toccano la dignita: consenso del consiglio aziendale)":
    "Arbeitsverfassungsgesetz (ArbVG, австрийский закон о производственной конституции), § 96 (меры контроля, затрагивающие достоинство: согласие производственного совета)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96a (sistemi che trattano dati personali dei lavoratori)":
    "Arbeitsverfassungsgesetz (ArbVG), § 96a (системы, обрабатывающие персональные данные работников)",
  "DSFA-V, regolamento sui trattamenti che richiedono una valutazione d'impatto":
    "DSFA-V, постановление об операциях обработки, требующих оценки воздействия",
  "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (fine del registro DVR)":
    "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (прекращение ведения реестра DVR)",
  "Datenschutzbehörde (DSB), decisione 2022-0.021.739 (stop al GPS sui veicoli aziendali)":
    "Datenschutzbehörde (DSB), решение 2022-0.021.739 (запрет GPS в служебных автомобилях)",
  "Datenschutzbehörde (DSB), procedura di reclamo":
    "Datenschutzbehörde (DSB), процедура подачи жалобы",
  "CCT n. 81 del 26 aprile 2002 (controllo delle comunicazioni elettroniche in rete)":
    "CCT № 81 от 26 апреля 2002 г. (контроль за электронными сообщениями в сети)",
  "APD/GBA, geolocalizzazione dei lavoratori":
    "APD/GBA, геолокация работников",
  "APD/GBA, valutazione d'impatto sulla protezione dei dati":
    "APD/GBA, оценка воздействия на защиту данных",
  "APD/GBA, presentare un reclamo":
    "APD/GBA, подать жалобу",
  "Chambre Contentieuse APD/GBA, decisione 114/2024 (impronte per le presenze, 45.000 euro), testo integrale":
    "Chambre Contentieuse APD/GBA, решение 114/2024 (отпечатки пальцев для учёта присутствия, 45 000 евро), полный текст",
  "ICO, guida sul monitoraggio dei lavoratori (UK GDPR)":
    "ICO, руководство по мониторингу работников (UK GDPR)",
  "ICO, sorveglianza nei veicoli":
    "ICO, наблюдение в транспортных средствах",
  "ICO, quando serve una DPIA":
    "ICO, когда требуется DPIA",
  "ICO, provvedimento sul monitoraggio GPS (Home Office, 2024)":
    "ICO, решение по GPS-мониторингу (Home Office, 2024)",
  "ICO, presentare una segnalazione":
    "ICO, подать обращение",
  "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission dal 30/09/2026)":
    "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission с 30.09.2026)",
  "Regolamento UE 2016/679 (GDPR) come UK GDPR":
    "Регламент (ЕС) 2016/679 (GDPR) в качестве UK GDPR",
  "DPC, guida sul tracciamento dei veicoli aziendali (maggio 2020)":
    "DPC, руководство по слежению за служебными автомобилями (май 2020 г.)",
  "DPC, pagina sul tracciamento dei veicoli dei dipendenti (aggiornata a maggio 2026)":
    "DPC, страница о слежении за автомобилями сотрудников (обновлено в мае 2026 г.)",
  "DPC, lista dei trattamenti che richiedono una DPIA":
    "DPC, перечень операций обработки, требующих DPIA",
  "DPC, consultazione preventiva":
    "DPC, предварительная консультация",
  "DPC, presentare un reclamo":
    "DPC, подать жалобу",
  "DPC, decisione Limerick City and County Council (dicembre 2021)":
    "DPC, решение по делу Limerick City and County Council (декабрь 2021 г.)",
  "DPC, sentenza Doolin v. DPC (High Court, febbraio 2020)":
    "DPC, решение по делу Doolin v. DPC (Высокий суд, февраль 2020 г.)",
  "IFPDT/FDPIC, mezzi tecnici di sorveglianza sul luogo di lavoro":
    "FDPIC, технические средства наблюдения на рабочем месте",
  "IFPDT/FDPIC, trattamento dei dati da parte del datore di lavoro (CO art. 328b)":
    "FDPIC, обработка данных работодателем (CO ст. 328b)",
  "IFPDT/FDPIC, valutazione d'impatto sulla protezione dei dati (nLPD art. 22)":
    "FDPIC, оценка воздействия на защиту данных (nLPD ст. 22)",
  "Legge federale sulla protezione dei dati (nLPD), art. 22, 23 e 60-65 (Fedlex)":
    "Федеральный закон о защите данных Швейцарии (nLPD), ст. 22, 23 и 60–65 (Fedlex)",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo":
    "Регламент (ЕС) 2016/679 (GDPR) — для сравнения",
  "Legge 190/2018, art. 5 (monitoraggio dei dipendenti)":
    "Закон 190/2018, ст. 5 (мониторинг сотрудников)",
  "Codul Muncii, art. 40 (obblighi del datore), Portal Legislativ":
    "Codul Muncii (трудовой кодекс Румынии), ст. 40 (обязанности работодателя), Portal Legislativ",
  "ANSPDCP, comunicato del 23 marzo 2023 (sanzione Tehnoplus, GPS)":
    "ANSPDCP, пресс-релиз от 23 марта 2023 г. (штраф Tehnoplus, GPS)",
  "ANSPDCP, Decizia 174/2018 (lista trattamenti che richiedono DPIA), Monitorul Oficial 919/31.10.2018, art. 1 lett. d e g":
    "ANSPDCP, Decizia 174/2018 (перечень операций обработки, требующих DPIA), Monitorul Oficial 919/31.10.2018, ст. 1 п. d и g",
  "ANSPDCP, presentazione dei reclami":
    "ANSPDCP, подача жалоб",
  "Kodeks pracy, art. 22(2) (monitoraggio), testo consolidato Dz.U. 2026 poz. 1245 (in vigore dal 24 settembre 2026)":
    "Kodeks pracy (трудовой кодекс Польши), ст. 22(2) (мониторинг), консолидированный текст Dz.U. 2026 poz. 1245 (действует с 24 сентября 2026 г.)",
  "Legge del 4 dicembre 2025 di modifica del Codice del lavoro, Dz.U. 2026 poz. 25 (art. 22(2) par. 8: \"su carta o in forma elettronica\", in vigore dal 27 gennaio 2026)":
    "Закон от 4 декабря 2025 г. о внесении изменений в трудовой кодекс, Dz.U. 2026 poz. 25 (ст. 22(2) п. 8: «на бумаге или в электронной форме», действует с 27 января 2026 г.)",
  "Kodeks pracy, art. 22(3) par. 3-4 (altre forme di monitoraggio, tra cui il GPS), testo consolidato Dz.U. 2026 poz. 1245":
    "Kodeks pracy, ст. 22(3) п. 3–4 (иные формы мониторинга, включая GPS), консолидированный текст Dz.U. 2026 poz. 1245",
  "UODO, guida alla protezione dei dati sul luogo di lavoro":
    "UODO, руководство по защите данных на рабочем месте",
  "UODO, lista dei trattamenti che richiedono una DPIA (M.P. 2019 poz. 666)":
    "UODO, перечень операций обработки, требующих DPIA (M.P. 2019 poz. 666)",
  "UODO, presentare un reclamo":
    "UODO, подать жалобу",
  "UODO, sanzione Centrum Medyczne Ujastek (monitoraggio non comunicato ai dipendenti)":
    "UODO, штраф Centrum Medyczne Ujastek (мониторинг, о котором сотрудники не были уведомлены)",
  "Zakonik prace (Codice del lavoro), art. 316":
    "Zákoník práce (трудовой кодекс Чехии), ст. 316",
  "Stanovisko 2/2017 sul trattamento dei dati sul posto di lavoro, pubblicato dall UOOU":
    "Stanovisko 2/2017 об обработке данных на рабочем месте, опубликовано UOOU",
  "UOOU, lista dei trattamenti che richiedono una DPIA":
    "UOOU, перечень операций обработки, требующих DPIA",
  "UOOU, presentare una segnalazione":
    "UOOU, подать обращение",
  "Tribunale municipale di Praga 6 A 42/2013 (Ceska posta, GPS sui portalettere), sentenza":
    "Муниципальный суд Праги, дело 6 A 42/2013 (Česká pošta, GPS у почтальонов), решение",
  "epravo.cz, GPS monitoring zamestnancu podruhe (riporta una multa di 80.000 CZK e 7.770 portalettere, non confermati da fonti ufficiali)":
    "epravo.cz, «GPS monitoring zaměstnanců podruhé» (сообщает о штрафе в 80 000 крон и 7770 почтальонах, не подтверждено официальными источниками)",
  "UOOU, relazione annuale 2014, controlli su Skoda Auto e Plzensky Prazdroj (GPS nei veicoli aziendali)":
    "UOOU, годовой отчёт за 2014 год, проверки Škoda Auto и Plzeňský Prazdroj (GPS в служебных автомобилях)",
  "HDPA (Garante greco), FAQ sui rapporti di lavoro (geolocalizzazione)":
    "HDPA (орган по защите данных Греции), вопросы и ответы о трудовых отношениях (геолокация)",
  "Legge 4624/2019, art. 27 (dati dei dipendenti), traduzione ufficiale HDPA":
    "Закон 4624/2019, ст. 27 (данные сотрудников), официальный перевод HDPA",
  "HDPA, Decisione 65/2018 (lista dei trattamenti che richiedono DPIA)":
    "HDPA, решение 65/2018 (перечень операций обработки, требующих DPIA)",
  "HDPA, sanzione a un datore per geolocalizzazione (16 febbraio 2024)":
    "HDPA, штраф работодателю за геолокацию (16 февраля 2024 г.)",
  "HDPA (Garante greco), pagina ufficiale":
    "HDPA (орган по защите данных Греции), официальная страница",
  "Legge sulla protezione della privacy nella vita lavorativa (759/2004) - testo consolidato in finlandese (Finlex)":
    "Закон о защите частной жизни в трудовых отношениях (759/2004) — консолидированный текст на финском языке (Finlex)",
  "Garante finlandese (Tietosuojavaltuutettu), FAQ sulla vita lavorativa":
    "Уполномоченный по защите данных Финляндии (Tietosuojavaltuutettu), вопросы и ответы о трудовой жизни",
  "Garante finlandese, lista dei trattamenti che richiedono una DPIA":
    "Уполномоченный по защите данных Финляндии, перечень операций обработки, требующих DPIA",
  "Garante finlandese, segnalare una violazione":
    "Уполномоченный по защите данных Финляндии, сообщить о нарушении",
  "Garante finlandese, sanzione per dati di localizzazione usati per la rilevazione orario (2021)":
    "Уполномоченный по защите данных Финляндии, штраф за использование данных геолокации для учёта рабочего времени (2021 г.)",
  "Zakon o zaštiti na radu (legge sicurezza sul lavoro), art. 43 (dispositivi di sorveglianza)":
    "Zakon o zaštiti na radu (закон Хорватии об охране труда), ст. 43 (средства наблюдения)",
  "Zakon o radu (legge sul lavoro), art. 29 (dati dei lavoratori) e art. 150 (consultazione del consiglio dei lavoratori)":
    "Zakon o radu (закон Хорватии о труде), ст. 29 (данные работников) и ст. 150 (консультация с советом работников)",
  "AZOP (Garante croato), trattamento dei dati dei dipendenti tramite GPS":
    "AZOP (орган по защите данных Хорватии), обработка данных сотрудников посредством GPS",
  "AZOP, lista dei trattamenti che richiedono una DPIA":
    "AZOP, перечень операций обработки, требующих DPIA",
  "AZOP, richiesta di accertamento di violazione (reclamo)":
    "AZOP, заявление об установлении нарушения (жалоба)",
  "AZOP (Garante croato), pagina ufficiale":
    "AZOP (орган по защите данных Хорватии), официальная страница",
  "IP-RS (Garante sloveno), linee guida sull'uso dei dispositivi GPS":
    "IP-RS (орган по защите данных Словении), руководящие указания по использованию GPS-устройств",
  "IP-RS, parere 'Sledenje zaposlenim' (tracciamento dei dipendenti)":
    "IP-RS, заключение «Sledenje zaposlenim» (слежение за сотрудниками)",
  "IP-RS, comunicato del 15.04.2026: multa di 6.000 euro a un'azienda pubblica per GPS sui dipendenti":
    "IP-RS, пресс-релиз от 15.04.2026: штраф в 6000 евро государственному предприятию за GPS в отношении сотрудников",
  "Zakon o delovnih razmerjih (ZDR-1), art. 48 (dati dei lavoratori)":
    "Zakon o delovnih razmerjih (ZDR-1, закон Словении о трудовых отношениях), ст. 48 (данные работников)",
  "Zakon o sodelovanju delavcev pri upravljanju (ZSDU), art. 89-90 (informazione del consiglio dei lavoratori)":
    "Zakon o sodelovanju delavcev pri upravljanju (ZSDU, закон Словении об участии работников в управлении), ст. 89–90 (информирование совета работников)",
  "IP-RS, elenco dei trattamenti per cui e' obbligatoria la valutazione d'impatto (art. 35.4 GDPR)":
    "IP-RS, перечень операций обработки, для которых обязательна оценка воздействия (ст. 35.4 GDPR)",
  "IP-RS, presentare una segnalazione":
    "IP-RS, подать обращение",
  "Zakonnik prace (Codice del lavoro), art. 13 par. 4 (monitoraggio dei dipendenti)":
    "Zákonník práce (трудовой кодекс Словакии), ст. 13 п. 4 (мониторинг сотрудников)",
  "UOOU SR (Garante slovacco), procedura di tutela":
    "UOOU SR (орган по защите данных Словакии), процедура защиты прав",
  "Parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli, versione slovacca pubblicata dall UOOU SR":
    "Заключение 2/2017 об обработке данных на рабочем месте (WP249), п. 5.7 транспортные средства, словацкая версия, опубликована UOOU SR",
  "Lista slovacca dei trattamenti soggetti a DPIA (punti 3 e 9), pubblicata dall EDPB":
    "Словацкий перечень операций обработки, подлежащих DPIA (пункты 3 и 9), опубликован EDPB",
  "UOOU SR, guida sulla liceita del trattamento (versione aggiornata 22/01/2019), esempio del par. 13 c. 4 del Codice del lavoro":
    "UOOU SR, руководство о законности обработки (обновлённая версия от 22.01.2019), пример из п. 13 ч. 4 трудового кодекса",
  "UOOU SR, presentare una proposta di avvio del procedimento (reclamo)":
    "UOOU SR, подать предложение о начале производства (жалоба)",
  "UOOU SR, relazione sullo stato della protezione dei dati 2025 (par. 9.2.1, trattamento di dati di geolocalizzazione)":
    "UOOU SR, отчёт о состоянии защиты данных за 2025 год (п. 9.2.1, обработка данных геолокации)",
  "Codice del lavoro (Mt.), art. 9 (diritti della persona) e art. 11/A (controllo dei lavoratori)":
    "Трудовой кодекс Венгрии (Mt.), ст. 9 (личные права) и ст. 11/A (контроль за работниками)",
  "NAIH, guida sui trattamenti sul luogo di lavoro (novembre 2016, precedente al GDPR), par. 5 sul GPS":
    "NAIH, руководство по обработке данных на рабочем месте (ноябрь 2016 г., до GDPR), п. 5 о GPS",
  "NAIH, lista dei trattamenti che richiedono una valutazione d'impatto":
    "NAIH, перечень операций обработки, требующих оценки воздействия",
  "NAIH, sanzione Auchan (monitoraggio dei dipendenti)":
    "NAIH, штраф Auchan (мониторинг сотрудников)",
  "NAIH (Garante ungherese), pagina ufficiale":
    "NAIH (орган по защите данных Венгрии), официальная страница",
  "Legge sulla protezione dei dati (ZZLD), testo consolidato sul sito del CPDP (art. 25д e 25и; ultima modifica ДВ 70/2024)":
    "Закон о защите персональных данных (ZZLD), консолидированный текст на сайте CPDP (ст. 25д и 25и; последние изменения ДВ 70/2024)",
  "CPDP (Garante bulgaro), guida sulla privacy sul luogo di lavoro (2014, anteriore al GDPR), par. 3.5.2 sistemi GPS":
    "CPDP (орган по защите данных Болгарии), руководство по защите частной жизни на рабочем месте (2014 г., до GDPR), п. 3.5.2 системы GPS",
  "CPDP, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "CPDP, перечень операций обработки, требующих DPIA (ст. 35.4)",
  "CPDP, parere su LUKOIL (riuso della videosorveglianza per valutare i dipendenti)":
    "CPDP, заключение по делу LUKOIL (повторное использование видеонаблюдения для оценки сотрудников)",
  "CPDP (Garante bulgaro), pagina ufficiale":
    "CPDP (орган по защите данных Болгарии), официальная страница",
  "AKI (Garante estone), FAQ sui rapporti di lavoro (GPS)":
    "AKI (орган по защите данных Эстонии), вопросы и ответы о трудовых отношениях (GPS)",
  "AKI, guida per il personale sui dati nel rapporto di lavoro (2011, ante-GDPR), punto 2.9 GPS":
    "AKI, руководство для персонала о данных в трудовых отношениях (2011 г., до GDPR), п. 2.9 GPS",
  "Legge sul fiduciario dei lavoratori (Töötajate usaldusisiku seadus), §§ 17 e 20 - Riigi Teataja":
    "Закон о доверенном лице работников (Töötajate usaldusisiku seadus), §§ 17 и 20 — Riigi Teataja",
  "Legge estone sulla protezione dei dati personali (Isikuandmete kaitse seadus), §§ 62-73 - Riigi Teataja":
    "Закон Эстонии о защите персональных данных (Isikuandmete kaitse seadus), §§ 62–73 — Riigi Teataja",
  "AKI, materiale sul trattamento dei dati nel rapporto di lavoro":
    "AKI, материалы об обработке данных в трудовых отношениях",
  "AKI, valutazione d'impatto (capitolo 5)":
    "AKI, оценка воздействия (глава 5)",
  "AKI, presentare un reclamo":
    "AKI, подать жалобу",
  "AKI (Garante estone), pagina ufficiale":
    "AKI (орган по защите данных Эстонии), официальная страница",
  "DVI (Garante lettone), posso tracciare i viaggi del mio dipendente? (GPS)":
    "DVI (орган по защите данных Латвии), могу ли я отслеживать поездки своего сотрудника? (GPS)",
  "Legge lettone sul trattamento dei dati delle persone fisiche (Fizisko personu datu apstrādes likums) - Likumi.lv":
    "Закон Латвии об обработке данных физических лиц (Fizisko personu datu apstrādes likums) — Likumi.lv",
  "DVI, videosorveglianza dei dipendenti in presenza (16/09/2022)":
    "DVI, видеонаблюдение за сотрудниками на рабочем месте (16.09.2022)",
  "DVI, videosorveglianza dei dipendenti nel lavoro da remoto":
    "DVI, видеонаблюдение за сотрудниками при удалённой работе",
  "DVI, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "DVI, перечень операций обработки, требующих DPIA (ст. 35.4)",
  "DVI, presentare un reclamo":
    "DVI, подать жалобу",
  "Gruppo art. 29, parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli":
    "Рабочая группа по ст. 29, заключение 2/2017 об обработке данных на рабочем месте (WP249), п. 5.7 транспортные средства",
  "VDAI, lista dei trattamenti che richiedono una DPIA (voce 10: monitoraggio dei dipendenti)":
    "VDAI, перечень операций обработки, требующих DPIA (пункт 10: мониторинг сотрудников)",
  "VDAI, decisione sul trattamento della corrispondenza personale di un dipendente (2022)":
    "VDAI, решение об обработке личной переписки сотрудника (2022 г.)",
  "VDAI, elenco delle decisioni (multe, ordini e altro) fino al 2025":
    "VDAI, перечень решений (штрафы, предписания и прочее) до 2025 года",
  "VDAI (Garante lituano), servizi e reclami":
    "VDAI (орган по защите данных Литвы), сервисы и жалобы",
  "Loi du 1er août 2018, art. 71 (nuovo art. L.261-1 del Code du travail) e art. 72 (abrogazione della legge del 2 agosto 2002), Legilux":
    "Loi du 1er août 2018, ст. 71 (новая ст. L.261-1 Code du travail) и ст. 72 (отмена закона от 2 августа 2002 г.), Legilux",
  "Code du travail, art. L.261-1 (sorveglianza dei lavoratori) - riproduzione CNPD":
    "Code du travail (трудовой кодекс Люксембурга), ст. L.261-1 (надзор за работниками) — воспроизведено CNPD",
  "CNPD, geolocalizzazione dei veicoli: necessità e proporzionalità":
    "CNPD, геолокация транспортных средств: необходимость и соразмерность",
  "CNPD, geolocalizzazione: valutazione d'impatto (AIPD)":
    "CNPD, геолокация: оценка воздействия (AIPD)",
  "CNPD, decisione 11FR/2021 (sanzione geolocalizzazione veicoli di servizio)":
    "CNPD, решение 11FR/2021 (штраф за геолокацию служебных автомобилей)",
  "CNPD, presentare un reclamo (Faire valoir vos droits)":
    "CNPD, подать жалобу (Faire valoir vos droits)",
  "Regole n. 50/2023 sulla sorveglianza elettronica (Gazzetta ufficiale)":
    "Правила № 50/2023 об электронном наблюдении (Официальная газета)",
  "Regole 1329/2025 di Persónuvernd (modifica delle Regole 50/2023, art. 3: 90 giorni)":
    "Правила 1329/2025 Persónuvernd (изменение Правил 50/2023, ст. 3: 90 дней)",
  "Persónuvernd (Garante islandese), FAQ sul GPS e i dispositivi di localizzazione":
    "Persónuvernd (орган по защите данных Исландии), вопросы и ответы о GPS и устройствах геолокации",
  "Persónuvernd, lista dei trattamenti che richiedono una DPIA (Auglýsing nr. 828/2019)":
    "Persónuvernd, перечень операций обработки, требующих DPIA (Auglýsing nr. 828/2019)",
  "Persónuvernd, presentare un reclamo":
    "Persónuvernd, подать жалобу",
  "Persónuvernd, decisione Islandspostur (uso illecito del GPS su un dipendente)":
    "Persónuvernd, решение по делу Islandspóstur (незаконное использование GPS в отношении сотрудника)",
  "IDPC (Garante maltese), guida al settore del lavoro":
    "IDPC (орган по защите данных Мальты), руководство для сферы труда",
  "IDPC, valutazione d'impatto sulla protezione dei dati":
    "IDPC, оценка воздействия на защиту данных",
  "IDPC, presentare un reclamo":
    "IDPC, подать жалобу",
  "IDPC, decisione CDP/COMP/579/2025 del 20 aprile 2026 (videosorveglianza della mensa aziendale)":
    "IDPC, решение CDP/COMP/579/2025 от 20 апреля 2026 г. (видеонаблюдение в корпоративной столовой)",
  "Legge 125(I)/2018 sulla protezione dei dati (art. 36: abrogazione delle leggi 2001-2012)":
    "Закон 125(I)/2018 о защите данных (ст. 36: отмена законов 2001–2012 гг.)",
  "Commissario cipriota, registro delle attività: abolito l'obbligo di notifica al Commissario (art. 30 GDPR)":
    "Уполномоченный Кипра, реестр операций обработки: обязанность уведомления Уполномоченного отменена (ст. 30 GDPR)",
  "Commissario cipriota, valutazione d'impatto (elenco indicativo: monitoraggio sistematico dei dipendenti, GPS)":
    "Уполномоченный Кипра, оценка воздействия (ориентировочный перечень: систематический мониторинг сотрудников, GPS)",
  "GDPR, art. 13 (informazione), testo ufficiale EUR-Lex":
    "GDPR, ст. 13 (информирование), официальный текст на EUR-Lex",
  "GDPR, art. 6(1)(f) e considerando 43 (base giuridica e squilibrio fra le parti), testo ufficiale EUR-Lex":
    "GDPR, ст. 6(1)(f) и преамбула, п. 43 (правовое основание и дисбаланс сторон), официальный текст на EUR-Lex",
  "Garante cipriota, pagina ufficiale":
    "Уполномоченный Кипра, официальная страница",
  "Commissario cipriota, decisione del 25.10.2019 sul Gruppo Louis (strumento Bradford Factor)":
    "Уполномоченный Кипра, решение от 25.10.2019 по делу Louis Group (инструмент Bradford Factor)",
  "Legge 124/2024 sulla protezione dei dati personali (in vigore dal 1 febbraio 2025)":
    "Закон 124/2024 о защите персональных данных (действует с 1 февраля 2025 г.)",
  "IDP, linea guida n. 03 del 30.04.2025 sulla videosorveglianza":
    "IDP, методические указания № 03 от 30.04.2025 по видеонаблюдению",
  "IDP (Garante albanese), pagina ufficiale":
    "IDP (орган по защите данных Албании), официальная страница",
  "Legge sulla protezione dei dati (LPDP, 87/2018) - testo ufficiale":
    "Закон о защите персональных данных (LPDP, 87/2018) — официальный текст",
  "Poverenik, decisione sulla lista dei trattamenti che richiedono una DPIA (Gazzetta 45/2019)":
    "Поверéник, решение об утверждении перечня операций обработки, требующих DPIA (Официальная газета 45/2019)",
  "Odluka sulla lista dei trattamenti che richiedono DPIA (Sl. glasnik RS 45/2019 e 112/2020, testo consolidato)":
    "Odluka об утверждении перечня операций обработки, требующих DPIA (Sl. glasnik RS 45/2019 и 112/2020, консолидированный текст)",
  "Poverenik (Garante serbo), competenze e contatti":
    "Поверéник (орган по защите данных Сербии), полномочия и контакты",
  "Danas, ispezione straordinaria del Poverenik al JKP Mediana di Nis (7 aprile 2026)":
    "Danas, внеплановая проверка Поверéника на предприятии JKP Mediana в Нише (7 апреля 2026 г.)",
  "N1, GPS su 80 cassonetti del JKP Mediana di Nis (protesta dei lavoratori, gennaio 2026)":
    "N1, GPS на 80 мусорных контейнерах JKP Mediana в Нише (протест работников, январь 2026 г.)",
  "Legge sulla protezione dei dati personali (Gazzetta BiH 12/25), testo pubblicato dall AZLP":
    "Закон о защите персональных данных (Официальная газета БиГ 12/25), текст опубликован AZLP",
  "AZLP, decisione del 10.11.2025 sulla lista dei trattamenti che richiedono una DPIA (punto 8: dati dei dipendenti, controllo di lavoro e spostamenti)":
    "AZLP, решение от 10.11.2025 об утверждении перечня операций обработки, требующих DPIA (пункт 8: данные сотрудников, контроль работы и перемещений)",
  "AZLP (Garante bosniaco), pagina ufficiale":
    "AZLP (орган по защите данных Боснии и Герцеговины), официальная страница",
  "Legge sulla protezione dei dati personali, Gazzetta ufficiale BiH 12/25":
    "Закон о защите персональных данных, Официальная газета БиГ 12/25",
  "Legge sulla protezione dei dati personali, testo consolidato pubblicato dall'AZLP (artt. 26-28 e sanzioni, art. 74)":
    "Закон о защите персональных данных, консолидированный текст, опубликован AZLP (ст. 26–28 и санкции, ст. 74)",
  "Nuova legge sulla protezione dei dati personali, Službeni list CG 133/2026 (pubblicata l'11.9.2026, in vigore dal 19.9.2026, si applica dal 19.3.2027, art. 106; artt. 88, 89 e 105)":
    "Новый закон о защите персональных данных, Службени лист ЦГ 133/2026 (опубликован 11.9.2026, действует с 19.9.2026, применяется с 19.3.2027, ст. 106; ст. 88, 89 и 105)",
  "AZLP, posizione del Consiglio sull'uso del GPS nei veicoli di servizio (29.04.2025)":
    "AZLP, позиция Совета по использованию GPS в служебных автомобилях (29.04.2025)",
  "AZLP (Garante montenegrino), contatti":
    "AZLP (орган по защите данных Черногории), контакты",
  "AZLP, moduli (richiesta di tutela dei diritti)":
    "AZLP, формы (заявление о защите прав)",
  "Regolamento UE 2016/679 (GDPR), riferimento comparativo":
    "Регламент (ЕС) 2016/679 (GDPR) — для сравнения",
  "Legge sulla protezione dei dati (LPDP, Gazzetta 42/20) - traduzione inglese non ufficiale pubblicata dall'AZLP":
    "Закон о защите персональных данных (LPDP, Официальная газета 42/20) — неофициальный перевод на английский язык, опубликован AZLP",
  "AZLP, lista dei trattamenti che richiedono la DPIA (11.05.2020, punti 10 e 12: posizione e spostamenti, dati dei lavoratori)":
    "AZLP, перечень операций обработки, требующих DPIA (11.05.2020, пункты 10 и 12: местоположение и перемещения, данные работников)",
  "AZLP, atti subordinati (regolamenti e liste), pagina ufficiale":
    "AZLP, подзаконные акты (постановления и перечни), официальная страница",
  "AZLP (Garante macedone), pagina ufficiale e reclami":
    "AZLP (орган по защите данных Северной Македонии), официальная страница и жалобы",
  "Legge dell'Ucraina n. 2297-VI sulla protezione dei dati personali (2010)":
    "Закон Украины № 2297-VI о защите персональных данных (2010 г.)",
  "Ordine del Difensore civico 1/02-14: procedura di notifica dei trattamenti a rischio particolare":
    "Распоряжение Уполномоченного по правам человека 1/02-14: порядок уведомления об операциях обработки с повышенным риском",
  "Codice ucraino delle infrazioni amministrative, art. 188-39 (violazioni in materia di dati personali)":
    "Кодекс Украины об административных правонарушениях, ст. 188-39 (нарушения в сфере персональных данных)",
  "Difensore civico (Garante ucraino), protezione dei dati personali":
    "Уполномоченный по правам человека (орган по защите данных Украины), защита персональных данных",
  "ICLG, protezione dei dati in Ucraina (basi giuridiche, DPIA)":
    "ICLG, защита данных в Украине (правовые основания, DPIA)",
  "CNPDCP, presentare un reclamo":
    "CNPDCP, подать жалобу",
  "Legge 195/2024 sulla protezione dei dati personali, in vigore dal 23 agosto 2026 (art. 35 DPIA, art. 88 sanzioni), testo inglese pubblicato dal CNPDCP":
    "Закон 195/2024 о защите персональных данных, действует с 23 августа 2026 г. (ст. 35 DPIA, ст. 88 санкции), текст на английском языке опубликован CNPDCP",
  "CNPDCP, ordine 27/2022: lista dei trattamenti soggetti a valutazione d'impatto (modificata dall'ordine 39/2026)":
    "CNPDCP, постановление 27/2022: перечень операций обработки, подлежащих оценке воздействия (изменено постановлением 39/2026)",
  "Legge della Repubblica di Bielorussia n. 99-Z del 7 maggio 2021 sulla protezione dei dati personali (NPDPC)":
    "Закон Республики Беларусь № 99-З от 7 мая 2021 г. о защите персональных данных (NPDPC)",
  "Ordine OAC n. 94 del 1 giugno 2022: Registro degli operatori di dati personali (casi di iscrizione)":
    "Приказ OAC № 94 от 1 июня 2022 г.: Реестр операторов персональных данных (случаи регистрации)",
  "NPDPC (N. Shved), responsabilita amministrativa per violazione della normativa sui dati personali (art. 23.7 CAO)":
    "NPDPC (Н. Швед), административная ответственность за нарушение законодательства о персональных данных (ст. 23.7 КоАП)",
  "NPDPC (Garante bielorusso), informazioni e contatti":
    "NPDPC (орган по защите данных Беларуси), информация и контакты",
  "GRATA, protezione dei dati e privacy dei dipendenti in Bielorussia":
    "GRATA, защита данных и частной жизни сотрудников в Беларуси",
  "DLA Piper, applicazione e sanzioni in Bielorussia":
    "DLA Piper, правоприменение и санкции в Беларуси",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo lontano":
    "Регламент (ЕС) 2016/679 (GDPR) — отдалённый ориентир для сравнения",
  "ANPD, denúncia di inadempimento della LGPD":
    "ANPD, заявление о несоблюдении LGPD",
  "ANPD, canale per il titolare dei dati":
    "ANPD, канал для субъекта данных",
  "Lei n. 15.352/2026 (l’ANPD diventa agência reguladora)":
    "Lei n. 15.352/2026 (ANPD становится регулирующим агентством, agência reguladora)",
  "BfDI, elenco delle autorità dei Land (per trovare la tua)":
    "BfDI, список органов земель (чтобы найти свой)",
  "BayLDA (esempio, Baviera)":
    "BayLDA (пример: Бавария)",
  "CNIL, presentare un reclamo":
    "CNIL, подать жалобу",
  "AEPD, sede elettronica":
    "AEPD, электронная приёмная",
  "CNPD, segnalazioni":
    "CNPD, обращения",
  "IMY, reclami":
    "IMY, жалобы",
  "Datenschutzbehörde (DSB), reclamo":
    "Datenschutzbehörde (DSB), жалоба",
  "APD/GBA, reclamo":
    "APD/GBA, жалоба",
  "ICO, segnalazioni":
    "ICO, обращения",
  "DPC, reclami":
    "DPC, жалобы",
  "ANSPDCP, reclami":
    "ANSPDCP, жалобы",
  "UODO, reclami":
    "UODO, жалобы",
  "UOOU, segnalazioni":
    "UOOU, обращения",
  "Garante, segnalazioni":
    "Уполномоченный по защите данных Финляндии, обращения",
  "AZOP, reclami":
    "AZOP, жалобы",
  "IP-RS, segnalazioni":
    "IP-RS, обращения",
  "UOOU SR, avvio del procedimento":
    "UOOU SR, начало производства",
  "AKI, reclami":
    "AKI, жалобы",
  "DVI, reclami":
    "DVI, жалобы",
  "VDAI, servizi e reclami":
    "VDAI, сервисы и жалобы",
  "CNPD, reclami":
    "CNPD, жалобы",
  "Persónuvernd, reclami":
    "Persónuvernd, жалобы",
  "IDPC, reclami":
    "IDPC, жалобы",
  "Garante cipriota":
    "Уполномоченный Кипра",
  "AZLP, tutela dei diritti":
    "AZLP, защита прав",
  "Difensore civico, protezione dei dati":
    "Уполномоченный по правам человека, защита данных",
  "CNPDCP, reclami":
    "CNPDCP, жалобы",
};
