/**
 * Versão em português europeu dos textos que, nas fichas de país, estão escritos
 * como simples `string` (ou seja, em italiano, a língua-mestra): os títulos das
 * fontes e os nomes dos pontos de contacto. Chave = o texto ITALIANO exato tal
 * como figura na ficha, valor = a versão em português. É usado por `loc()`
 * (./localize.ts) apenas para `pt`. Os nomes oficiais de leis e de autoridades
 * mantêm-se na língua de origem, com um esclarecimento em português entre
 * parênteses quando ajuda a perceber de que se trata.
 *
 * Uma fonte nova ou um título alterado numa ficha sem entrada aqui fica em
 * italiano na página em português: o teste `traduzioni-pt.test.ts` assinala-o.
 */
export const TESTI_PT: Readonly<Record<string, string>> = {
  "Legge lituana sulla protezione giuridica dei dati personali (ADTAĮ), art. 5 c. 4, testo consolidato":
    "Lei lituana de proteção jurídica dos dados pessoais (ADTAĮ), art. 5, n.º 4, texto consolidado",
  "UOOU, relazione annuale 2012, controllo su Česká pošta (monitoraggio degli spostamenti dei portalettere)":
    "UOOU, relatório anual de 2012, inspeção à Česká pošta (monitorização das deslocações dos carteiros)",
  "CNPD, Deliberação 2019/494 (norme della Lei 58/2019 disapplicate)":
    "CNPD, Deliberação 2019/494 (disposições da Lei 58/2019 desaplicadas)",
  "Garante Privacy, Provvedimento n. 7 del 16 gennaio 2025 (doc-web 10112287)":
    "Garante Privacy, resolução n.º 7 de 16 de janeiro de 2025 (doc-web 10112287)",
  "Garante Privacy, Provvedimento n. 755 del 18 dicembre 2025, n. 10213711 (Pioneer Hi-Bred Italia Sementi)":
    "Garante Privacy, resolução n.º 755 de 18 de dezembro de 2025, doc-web 10213711 (Pioneer Hi-Bred Italia Sementi)",
  "Garante Privacy, Provvedimento n. 382 del 28 maggio 2026, n. 10259916 (Azienda di Tutela della Salute per la Liguria)":
    "Garante Privacy, resolução n.º 382 de 28 de maio de 2026, doc-web 10259916 (Azienda di Tutela della Salute per la Liguria, a autoridade de saúde da Ligúria)",
  "Garante Privacy, Provvedimento n. 135 del 13 marzo 2025 (doc-web 10128005), rimosso temporaneamente dal sito in ottemperanza alla sentenza del Tribunale di Cosenza n. 972 del 1° luglio 2026 (opposizione accolta)":
    "Garante Privacy, resolução n.º 135 de 13 de março de 2025 (doc-web 10128005), retirada temporariamente do sítio em cumprimento da sentença n.º 972 de 1 de julho de 2026 do Tribunal de Cosenza (oposição aceite)",
  "AGI Lavoro, «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (sentenza n. 972 del 1° luglio 2026; il testo della sentenza non è stato reperito in fonte ufficiale)":
    "AGI Lavoro, «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (sentença n.º 972 de 1 de julho de 2026; o texto da sentença não foi encontrado em fonte oficial)",
  "Avvocati Associati, commento alla sentenza Trib. Cosenza n. 972/2026 (22/09/2026), con passi citati":
    "Avvocati Associati, comentário à sentença n.º 972/2026 do Tribunal de Cosenza (22 de setembro de 2026), com excertos citados",
  "Legge 20 maggio 1970, n. 300 (Statuto dei Lavoratori), art. 4":
    "Lei n.º 300 de 20 de maio de 1970 (Estatuto dos Trabalhadores italiano), art. 4",
  "Regolamento UE 2016/679 (GDPR), artt. 5, 13, 25, 35, 88":
    "Regulamento (UE) 2016/679 (RGPD), arts. 5, 13, 25, 35 e 88",
  "Betriebsverfassungsgesetz, § 87 (cogestione del consiglio aziendale)":
    "Betriebsverfassungsgesetz (lei alemã da organização da empresa), § 87 (codecisão do conselho de empresa)",
  "Bundesdatenschutzgesetz, § 26 (dati dei lavoratori)":
    "Bundesdatenschutzgesetz (lei federal alemã de proteção de dados), § 26 (dados dos trabalhadores)",
  "Garante del Baden-Württemberg, FAQ sulle basi giuridiche dei dati dei dipendenti (sentenza CGUE C-34/21)":
    "Autoridade de proteção de dados de Baden-Württemberg, perguntas frequentes sobre as bases jurídicas dos dados dos trabalhadores (acórdão do TJUE C-34/21)",
  "Regolamento UE 2016/679 (GDPR)":
    "Regulamento (UE) 2016/679 (RGPD)",
  "Garante della Renania-Palatinato, guida sulla localizzazione GPS dei dipendenti":
    "Autoridade de proteção de dados da Renânia-Palatinado, guia sobre a localização GPS dos trabalhadores",
  "Lista DSK dei trattamenti che richiedono una valutazione d'impatto (settore privato)":
    "Lista da DSK dos tratamentos que exigem uma avaliação de impacto (setor privado)",
  "BfDI, elenco delle autorità garanti per la protezione dei dati dei Land":
    "BfDI, lista das autoridades de proteção de dados dos Länder",
  "Garante di Amburgo, comunicato del 1 ottobre 2020 (sanzione H&M)":
    "Autoridade de proteção de dados de Hamburgo, comunicado de 1 de outubro de 2020 (coima à H&M)",
  "BayLDA, autorità garante della Baviera":
    "BayLDA, a autoridade de proteção de dados da Baviera",
  "BlnBDI, autorità garante di Berlino":
    "BlnBDI, a autoridade de proteção de dados de Berlim",
  "Code du travail, art. L2312-38 (consultazione del CSE sui mezzi di controllo)":
    "Code du travail (Código do Trabalho francês), art. L2312-38 (consulta do CSE sobre os meios de controlo)",
  "Code du travail, art. L1222-4 (nessuna raccolta da dispositivo non portato a conoscenza)":
    "Code du travail (Código do Trabalho francês), art. L1222-4 (nenhuma recolha através de um dispositivo de que o trabalhador não tenha sido informado)",
  "CNIL, guida sulla geolocalizzazione dei veicoli dei dipendenti":
    "CNIL, guia sobre a geolocalização dos veículos dos trabalhadores",
  "CNIL, lista dei trattamenti che richiedono una valutazione d'impatto (AIPD)":
    "CNIL, lista dos tratamentos que exigem uma avaliação de impacto (AIPD)",
  "CNIL, abolizione delle dichiarazioni preventive dal 25 maggio 2018":
    "CNIL, supressão das declarações prévias desde 25 de maio de 2018",
  "CNIL, dieci nuove sanzioni (procedura semplificata, 7 novembre 2023)":
    "CNIL, dez novas sanções (procedimento simplificado, 7 de novembro de 2023)",
  "CNIL, deliberazione SAN-2022-015 del 7 luglio 2022 (UBEEQO International, 175.000 €), su Légifrance":
    "CNIL, deliberação SAN-2022-015 de 7 de julho de 2022 (UBEEQO International, 175.000 €), no Légifrance",
  "Ley Organica 3/2018 (LOPDGDD), art. 90 (geolocalizzazione sul lavoro)":
    "Ley Orgánica 3/2018 (LOPDGDD), art. 90 (geolocalização no âmbito laboral)",
  "Estatuto de los Trabajadores, artt. 20.3 e 64":
    "Estatuto de los Trabajadores, arts. 20.3 e 64",
  "AEPD, FAQ sul GPS nelle auto aziendali usate dai lavoratori":
    "AEPD, perguntas frequentes sobre o GPS nos veículos da empresa utilizados pelos trabalhadores",
  "AEPD, lista dei trattamenti che richiedono una valutazione d'impatto (art. 35.4 GDPR)":
    "AEPD, lista dos tratamentos que exigem uma avaliação de impacto (art. 35.4 do RGPD)",
  "AEPD, guida sulla protezione dei dati nei rapporti di lavoro":
    "AEPD, guia sobre a proteção de dados nas relações laborais",
  "AEPD, sanzione PS/00454/2024 (Ares Capital, 200.000 €)":
    "AEPD, sanção PS/00454/2024 (Ares Capital, 200.000 €)",
  "Wet op de ondernemingsraden (WOR), art. 27 (diritto di consenso del consiglio aziendale)":
    "Wet op de ondernemingsraden (WOR, lei neerlandesa dos conselhos de empresa), art. 27 (direito de aprovação do conselho de empresa)",
  "Autoriteit Persoonsgegevens, lista dei trattamenti che richiedono una DPIA":
    "Autoriteit Persoonsgegevens, lista dos tratamentos que exigem uma AIPD",
  "Autoriteit Persoonsgegevens, condizioni per il controllo dei dipendenti":
    "Autoriteit Persoonsgegevens, condições para o controlo dos trabalhadores",
  "Autoriteit Persoonsgegevens, controllo dei dipendenti a distanza (GPS sulle auto aziendali)":
    "Autoriteit Persoonsgegevens, controlo dos trabalhadores à distância (GPS nos veículos da empresa)",
  "Autoriteit Persoonsgegevens, sanzione per il trattamento delle impronte dei dipendenti":
    "Autoriteit Persoonsgegevens, coima pelo tratamento das impressões digitais dos trabalhadores",
  "Codigo do Trabalho, art. 20 (mezzi di sorveglianza a distanza)":
    "Código do Trabalho, art. 20 (meios de vigilância à distância)",
  "CNPD, Deliberacao 7680/2014 (geolocalizzazione nel contesto lavorativo)":
    "CNPD, Deliberação 7680/2014 (geolocalização no âmbito laboral)",
  "Lei 58/2019, art. 28 (relazioni di lavoro)":
    "Lei 58/2019, art. 28 (relações laborais)",
  "CNPD, videovigilanza: nel contesto lavorativo restano le condizioni del Codice del lavoro, senza l'autorizzazione della CNPD":
    "CNPD, videovigilância: no âmbito laboral continuam a aplicar-se as condições do Código do Trabalho, sem autorização da CNPD",
  "CNPD, valutazione d'impatto sulla protezione dei dati":
    "CNPD, avaliação de impacto sobre a proteção de dados",
  "CNPD, Regulamento n.º 798/2018 (lista dei trattamenti soggetti a valutazione d'impatto)":
    "CNPD, Regulamento n.º 798/2018 (lista dos tratamentos sujeitos a avaliação de impacto)",
  "Tribunal da Relação de Lisboa, acórdão del 17 giugno 2026, proc. 2266/25.4T8TVD.L1-4 (GPS del veicolo di una lavoratrice)":
    "Tribunal da Relação de Lisboa, acórdão de 17 de junho de 2026, proc. 2266/25.4T8TVD.L1-4 (GPS no veículo de uma trabalhadora)",
  "CNPD, presentare una segnalazione":
    "CNPD, apresentar uma queixa",
  "Datatilsynet, guida sul controllo dei dipendenti (Kontrol af medarbejdere)":
    "Datatilsynet, guia sobre o controlo dos trabalhadores (Kontrol af medarbejdere)",
  "Datatilsynet, lista dei trattamenti che richiedono una valutazione d'impatto":
    "Datatilsynet, lista dos tratamentos que exigem uma avaliação de impacto",
  "Datatilsynet, controlli 2020 sull'obbligo di informazione nelle misure di controllo dei dipendenti (GPS, videosorveglianza e altre)":
    "Datatilsynet, inspeções de 2020 sobre a obrigação de informação nas medidas de controlo dos trabalhadores (GPS, videovigilância e outras)",
  "Datatilsynet, aree prioritarie dei controlli nel 2026 (sorveglianza dei dipendenti)":
    "Datatilsynet, áreas prioritárias das inspeções em 2026 (vigilância dos trabalhadores)",
  "Datatilsynet (autorità garante danese)":
    "Datatilsynet (autoridade dinamarquesa de proteção de dados)",
  "Lag 1976:580 om medbestammande i arbetslivet (MBL), § 11":
    "Lag 1976:580 om medbestämmande i arbetslivet (MBL, lei sueca da codeterminação na vida laboral), § 11",
  "IMY, controllo e sorveglianza dei dipendenti":
    "IMY, controlo e vigilância dos trabalhadores",
  "IMY, come usare i servizi di localizzazione (GPS) sui dipendenti":
    "IMY, como utilizar os serviços de localização (GPS) com os trabalhadores",
  "IMY, quando svolgere una valutazione d'impatto":
    "IMY, quando realizar uma avaliação de impacto",
  "IMY, presentare un reclamo":
    "IMY, apresentar uma reclamação",
  "IMY, sanzione al Comune di Skelleftea (riconoscimento facciale per le presenze)":
    "IMY, sanção ao município de Skellefteå (reconhecimento facial para o controlo de presenças)",
  "Arbeidsmiljoloven, kap. 9 (misure di controllo, §§ 9-1 e 9-2)":
    "Arbeidsmiljøloven (lei norueguesa do ambiente de trabalho), cap. 9 (medidas de controlo, §§ 9-1 e 9-2)",
  "Datatilsynet (Norvegia), GPS e tracciamento dei veicoli aziendali":
    "Datatilsynet (Noruega), GPS e seguimento dos veículos da empresa",
  "Datatilsynet (Norvegia), quando svolgere una valutazione d'impatto":
    "Datatilsynet (Noruega), quando realizar uma avaliação de impacto",
  "Datatilsynet (autorità garante norvegese)":
    "Datatilsynet (autoridade norueguesa de proteção de dados)",
  "Personvernnemnda, PVN-2017-07 (uso del GPS per controllare le ore del dipendente)":
    "Personvernnemnda, PVN-2017-07 (uso do GPS para controlar as horas de um trabalhador)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96 (misure di controllo che toccano la dignita: consenso del consiglio aziendale)":
    "Arbeitsverfassungsgesetz (ArbVG, lei austríaca da constituição laboral), § 96 (medidas de controlo que afetam a dignidade humana: consentimento do conselho de empresa)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96a (sistemi che trattano dati personali dei lavoratori)":
    "Arbeitsverfassungsgesetz (ArbVG), § 96a (sistemas que tratam dados pessoais dos trabalhadores)",
  "DSFA-V, regolamento sui trattamenti che richiedono una valutazione d'impatto":
    "DSFA-V, regulamento sobre os tratamentos que exigem uma avaliação de impacto",
  "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (fine del registro DVR)":
    "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (fim do registo DVR)",
  "Datenschutzbehörde (DSB), decisione 2022-0.021.739 (stop al GPS sui veicoli aziendali)":
    "Datenschutzbehörde (DSB), decisão 2022-0.021.739 (proibição do GPS nos veículos da empresa)",
  "Datenschutzbehörde (DSB), procedura di reclamo":
    "Datenschutzbehörde (DSB), procedimento de reclamação",
  "CCT n. 81 del 26 aprile 2002 (controllo delle comunicazioni elettroniche in rete)":
    "CCT n.º 81 de 26 de abril de 2002 (controlo das comunicações eletrónicas em rede)",
  "APD/GBA, geolocalizzazione dei lavoratori":
    "APD/GBA, geolocalização dos trabalhadores",
  "APD/GBA, valutazione d'impatto sulla protezione dei dati":
    "APD/GBA, avaliação de impacto sobre a proteção de dados",
  "APD/GBA, presentare un reclamo":
    "APD/GBA, apresentar uma reclamação",
  "Chambre Contentieuse APD/GBA, decisione 114/2024 (impronte per le presenze, 45.000 euro), testo integrale":
    "Chambre Contentieuse APD/GBA, decisão 114/2024 (impressões digitais para o controlo de presenças, 45.000 euros), texto integral",
  "ICO, guida sul monitoraggio dei lavoratori (UK GDPR)":
    "ICO, guia sobre a monitorização dos trabalhadores (UK GDPR)",
  "ICO, sorveglianza nei veicoli":
    "ICO, vigilância nos veículos",
  "ICO, quando serve una DPIA":
    "ICO, quando é necessária uma AIPD",
  "ICO, provvedimento sul monitoraggio GPS (Home Office, 2024)":
    "ICO, decisão sobre a monitorização por GPS (Home Office, 2024)",
  "ICO, presentare una segnalazione":
    "ICO, apresentar uma queixa",
  "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission dal 30/09/2026)":
    "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission desde 30/09/2026)",
  "Regolamento UE 2016/679 (GDPR) come UK GDPR":
    "Regulamento (UE) 2016/679 (RGPD) como UK GDPR",
  "DPC, guida sul tracciamento dei veicoli aziendali (maggio 2020)":
    "DPC, guia sobre o seguimento dos veículos da empresa (maio de 2020)",
  "DPC, pagina sul tracciamento dei veicoli dei dipendenti (aggiornata a maggio 2026)":
    "DPC, página sobre o seguimento dos veículos dos trabalhadores (atualizada em maio de 2026)",
  "DPC, lista dei trattamenti che richiedono una DPIA":
    "DPC, lista dos tratamentos que exigem uma AIPD",
  "DPC, consultazione preventiva":
    "DPC, consulta prévia",
  "DPC, presentare un reclamo":
    "DPC, apresentar uma reclamação",
  "DPC, decisione Limerick City and County Council (dicembre 2021)":
    "DPC, decisão Limerick City and County Council (dezembro de 2021)",
  "DPC, sentenza Doolin v. DPC (High Court, febbraio 2020)":
    "DPC, sentença Doolin v. DPC (High Court, fevereiro de 2020)",
  "IFPDT/FDPIC, mezzi tecnici di sorveglianza sul luogo di lavoro":
    "PFPDT/FDPIC, meios técnicos de vigilância no local de trabalho",
  "IFPDT/FDPIC, trattamento dei dati da parte del datore di lavoro (CO art. 328b)":
    "PFPDT/FDPIC, tratamento de dados pelo empregador (CO art. 328b)",
  "IFPDT/FDPIC, valutazione d'impatto sulla protezione dei dati (nLPD art. 22)":
    "PFPDT/FDPIC, avaliação de impacto sobre a proteção de dados (nLPD art. 22)",
  "Legge federale sulla protezione dei dati (nLPD), art. 22, 23 e 60-65 (Fedlex)":
    "Lei federal de proteção de dados (nLPD), arts. 22, 23 e 60-65 (Fedlex)",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo":
    "Regulamento (UE) 2016/679 (RGPD): referência comparativa",
  "Legge 190/2018, art. 5 (monitoraggio dei dipendenti)":
    "Lei 190/2018, art. 5 (monitorização dos trabalhadores)",
  "Codul Muncii, art. 40 (obblighi del datore), Portal Legislativ":
    "Codul Muncii (Código do Trabalho romeno), art. 40 (obrigações do empregador), Portal Legislativ",
  "ANSPDCP, comunicato del 23 marzo 2023 (sanzione Tehnoplus, GPS)":
    "ANSPDCP, comunicado de 23 de março de 2023 (coima à Tehnoplus, GPS)",
  "ANSPDCP, Decizia 174/2018 (lista trattamenti che richiedono DPIA), Monitorul Oficial 919/31.10.2018, art. 1 lett. d e g":
    "ANSPDCP, Decizia 174/2018 (lista de tratamentos que exigem uma AIPD), Monitorul Oficial 919/31.10.2018, art. 1, alíneas d e g",
  "ANSPDCP, presentazione dei reclami":
    "ANSPDCP, apresentação de reclamações",
  "Kodeks pracy, art. 22(2) (monitoraggio), testo consolidato Dz.U. 2026 poz. 1245 (in vigore dal 24 settembre 2026)":
    "Kodeks pracy (Código do Trabalho polaco), art. 22(2) (monitorização), texto consolidado Dz.U. 2026 poz. 1245 (em vigor desde 24 de setembro de 2026)",
  "Legge del 4 dicembre 2025 di modifica del Codice del lavoro, Dz.U. 2026 poz. 25 (art. 22(2) par. 8: \"su carta o in forma elettronica\", in vigore dal 27 gennaio 2026)":
    "Lei de 4 de dezembro de 2025 que altera o Código do Trabalho, Dz.U. 2026 poz. 25 (art. 22(2) n.º 8: «em papel ou em forma eletrónica», em vigor desde 27 de janeiro de 2026)",
  "Kodeks pracy, art. 22(3) par. 3-4 (altre forme di monitoraggio, tra cui il GPS), testo consolidato Dz.U. 2026 poz. 1245":
    "Kodeks pracy, art. 22(3) n.os 3-4 (outras formas de monitorização, incluindo o GPS), texto consolidado Dz.U. 2026 poz. 1245",
  "UODO, guida alla protezione dei dati sul luogo di lavoro":
    "UODO, guia sobre a proteção de dados no local de trabalho",
  "UODO, lista dei trattamenti che richiedono una DPIA (M.P. 2019 poz. 666)":
    "UODO, lista dos tratamentos que exigem uma AIPD (M.P. 2019 poz. 666)",
  "UODO, presentare un reclamo":
    "UODO, apresentar uma reclamação",
  "UODO, sanzione Centrum Medyczne Ujastek (monitoraggio non comunicato ai dipendenti)":
    "UODO, sanção ao Centrum Medyczne Ujastek (monitorização não comunicada aos trabalhadores)",
  "Zakonik prace (Codice del lavoro), art. 316":
    "Zákoník práce (Código do Trabalho checo), art. 316",
  "Stanovisko 2/2017 sul trattamento dei dati sul posto di lavoro, pubblicato dall UOOU":
    "Parecer 2/2017 sobre o tratamento de dados no local de trabalho, publicado pelo UOOU",
  "UOOU, lista dei trattamenti che richiedono una DPIA":
    "UOOU, lista dos tratamentos que exigem uma AIPD",
  "UOOU, presentare una segnalazione":
    "UOOU, apresentar uma queixa",
  "Tribunale municipale di Praga 6 A 42/2013 (Ceska posta, GPS sui portalettere), sentenza":
    "Tribunal municipal de Praga 6 A 42/2013 (Česká pošta, GPS nos carteiros), sentença",
  "epravo.cz, GPS monitoring zamestnancu podruhe (riporta una multa di 80.000 CZK e 7.770 portalettere, non confermati da fonti ufficiali)":
    "epravo.cz, GPS monitoring zaměstnanců podruhé (refere uma coima de 80.000 CZK e 7.770 carteiros, sem confirmação em fontes oficiais)",
  "UOOU, relazione annuale 2014, controlli su Skoda Auto e Plzensky Prazdroj (GPS nei veicoli aziendali)":
    "UOOU, relatório anual de 2014, inspeções à Škoda Auto e à Plzeňský Prazdroj (GPS nos veículos da empresa)",
  "HDPA (Garante greco), FAQ sui rapporti di lavoro (geolocalizzazione)":
    "HDPA (autoridade grega de proteção de dados), perguntas frequentes sobre as relações laborais (geolocalização)",
  "Legge 4624/2019, art. 27 (dati dei dipendenti), traduzione ufficiale HDPA":
    "Lei 4624/2019, art. 27 (dados dos trabalhadores), tradução oficial da HDPA",
  "HDPA, Decisione 65/2018 (lista dei trattamenti che richiedono DPIA)":
    "HDPA, Decisão 65/2018 (lista dos tratamentos que exigem uma AIPD)",
  "HDPA, sanzione a un datore per geolocalizzazione (16 febbraio 2024)":
    "HDPA, coima a um empregador por geolocalização (16 de fevereiro de 2024)",
  "HDPA (Garante greco), pagina ufficiale":
    "HDPA (autoridade grega de proteção de dados), página oficial",
  "Legge sulla protezione della privacy nella vita lavorativa (759/2004) - testo consolidato in finlandese (Finlex)":
    "Lei sobre a proteção da privacidade na vida laboral (759/2004): texto consolidado em finlandês (Finlex)",
  "Garante finlandese (Tietosuojavaltuutettu), FAQ sulla vita lavorativa":
    "Provedor de proteção de dados da Finlândia (Tietosuojavaltuutettu), perguntas frequentes sobre a vida laboral",
  "Garante finlandese, lista dei trattamenti che richiedono una DPIA":
    "Provedor de proteção de dados da Finlândia, lista dos tratamentos que exigem uma AIPD",
  "Garante finlandese, segnalare una violazione":
    "Provedor de proteção de dados da Finlândia, comunicar uma infração",
  "Garante finlandese, sanzione per dati di localizzazione usati per la rilevazione orario (2021)":
    "Provedor de proteção de dados da Finlândia, coima por dados de localização utilizados para registar o horário (2021)",
  "Zakon o zaštiti na radu (legge sicurezza sul lavoro), art. 43 (dispositivi di sorveglianza)":
    "Zakon o zaštiti na radu (lei croata de segurança no trabalho), art. 43 (dispositivos de vigilância)",
  "Zakon o radu (legge sul lavoro), art. 29 (dati dei lavoratori) e art. 150 (consultazione del consiglio dei lavoratori)":
    "Zakon o radu (lei croata do trabalho), art. 29 (dados dos trabalhadores) e art. 150 (consulta ao conselho de trabalhadores)",
  "AZOP (Garante croato), trattamento dei dati dei dipendenti tramite GPS":
    "AZOP (autoridade croata de proteção de dados), tratamento de dados dos trabalhadores através de GPS",
  "AZOP, lista dei trattamenti che richiedono una DPIA":
    "AZOP, lista dos tratamentos que exigem uma AIPD",
  "AZOP, richiesta di accertamento di violazione (reclamo)":
    "AZOP, pedido de verificação de uma infração (reclamação)",
  "AZOP (Garante croato), pagina ufficiale":
    "AZOP (autoridade croata de proteção de dados), página oficial",
  "IP-RS (Garante sloveno), linee guida sull'uso dei dispositivi GPS":
    "IP-RS (autoridade eslovena de proteção de dados), orientações sobre a utilização de dispositivos GPS",
  "IP-RS, parere 'Sledenje zaposlenim' (tracciamento dei dipendenti)":
    "IP-RS, parecer «Sledenje zaposlenim» (seguimento dos trabalhadores)",
  "IP-RS, comunicato del 15.04.2026: multa di 6.000 euro a un'azienda pubblica per GPS sui dipendenti":
    "IP-RS, comunicado de 15.04.2026: coima de 6.000 euros a uma empresa pública por GPS nos trabalhadores",
  "Zakon o delovnih razmerjih (ZDR-1), art. 48 (dati dei lavoratori)":
    "Zakon o delovnih razmerjih (ZDR-1, lei eslovena das relações laborais), art. 48 (dados dos trabalhadores)",
  "Zakon o sodelovanju delavcev pri upravljanju (ZSDU), art. 89-90 (informazione del consiglio dei lavoratori)":
    "Zakon o sodelovanju delavcev pri upravljanju (ZSDU, lei eslovena da participação dos trabalhadores na gestão), arts. 89-90 (informação ao conselho de trabalhadores)",
  "IP-RS, elenco dei trattamenti per cui e' obbligatoria la valutazione d'impatto (art. 35.4 GDPR)":
    "IP-RS, lista dos tratamentos para os quais é obrigatória a avaliação de impacto (art. 35.4 do RGPD)",
  "IP-RS, presentare una segnalazione":
    "IP-RS, apresentar uma queixa",
  "Zakonnik prace (Codice del lavoro), art. 13 par. 4 (monitoraggio dei dipendenti)":
    "Zákonník práce (Código do Trabalho eslovaco), art. 13, n.º 4 (monitorização dos trabalhadores)",
  "UOOU SR (Garante slovacco), procedura di tutela":
    "UOOU SR (autoridade eslovaca de proteção de dados), procedimento de tutela",
  "Parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli, versione slovacca pubblicata dall UOOU SR":
    "Parecer 2/2017 sobre o tratamento de dados no local de trabalho (WP249), n.º 5.7 veículos, versão eslovaca publicada pelo UOOU SR",
  "Lista slovacca dei trattamenti soggetti a DPIA (punti 3 e 9), pubblicata dall EDPB":
    "Lista eslovaca dos tratamentos sujeitos a uma AIPD (pontos 3 e 9), publicada pelo CEPD",
  "UOOU SR, guida sulla liceita del trattamento (versione aggiornata 22/01/2019), esempio del par. 13 c. 4 del Codice del lavoro":
    "UOOU SR, guia sobre a licitude do tratamento (versão atualizada de 22/01/2019), exemplo do art. 13, n.º 4 do Código do Trabalho",
  "UOOU SR, presentare una proposta di avvio del procedimento (reclamo)":
    "UOOU SR, apresentar uma proposta de início de procedimento (reclamação)",
  "UOOU SR, relazione sullo stato della protezione dei dati 2025 (par. 9.2.1, trattamento di dati di geolocalizzazione)":
    "UOOU SR, relatório sobre o estado da proteção de dados em 2025 (n.º 9.2.1, tratamento de dados de geolocalização)",
  "Codice del lavoro (Mt.), art. 9 (diritti della persona) e art. 11/A (controllo dei lavoratori)":
    "Código do Trabalho húngaro (Mt.), art. 9 (direitos da pessoa) e art. 11/A (controlo dos trabalhadores)",
  "NAIH, guida sui trattamenti sul luogo di lavoro (novembre 2016, precedente al GDPR), par. 5 sul GPS":
    "NAIH, guia sobre os tratamentos no local de trabalho (novembro de 2016, anterior ao RGPD), n.º 5 sobre o GPS",
  "NAIH, lista dei trattamenti che richiedono una valutazione d'impatto":
    "NAIH, lista dos tratamentos que exigem uma avaliação de impacto",
  "NAIH, sanzione Auchan (monitoraggio dei dipendenti)":
    "NAIH, coima à Auchan (monitorização dos trabalhadores)",
  "NAIH (Garante ungherese), pagina ufficiale":
    "NAIH (autoridade húngara de proteção de dados), página oficial",
  "Legge sulla protezione dei dati (ZZLD), testo consolidato sul sito del CPDP (art. 25д e 25и; ultima modifica ДВ 70/2024)":
    "Lei de proteção de dados pessoais (ZZLD), texto consolidado no sítio da CPDP (arts. 25д e 25и; última alteração ДВ 70/2024)",
  "CPDP (Garante bulgaro), guida sulla privacy sul luogo di lavoro (2014, anteriore al GDPR), par. 3.5.2 sistemi GPS":
    "CPDP (autoridade búlgara de proteção de dados), guia sobre a privacidade no local de trabalho (2014, anterior ao RGPD), n.º 3.5.2 sistemas GPS",
  "CPDP, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "CPDP, lista dos tratamentos que exigem uma AIPD (art. 35.4)",
  "CPDP, parere su LUKOIL (riuso della videosorveglianza per valutare i dipendenti)":
    "CPDP, parecer sobre a LUKOIL (reutilização da videovigilância para avaliar os trabalhadores)",
  "CPDP (Garante bulgaro), pagina ufficiale":
    "CPDP (autoridade búlgara de proteção de dados), página oficial",
  "AKI (Garante estone), FAQ sui rapporti di lavoro (GPS)":
    "AKI (autoridade estónia de proteção de dados), perguntas frequentes sobre as relações laborais (GPS)",
  "AKI, guida per il personale sui dati nel rapporto di lavoro (2011, ante-GDPR), punto 2.9 GPS":
    "AKI, guia para o pessoal sobre os dados na relação laboral (2011, anterior ao RGPD), ponto 2.9 GPS",
  "Legge sul fiduciario dei lavoratori (Töötajate usaldusisiku seadus), §§ 17 e 20 - Riigi Teataja":
    "Lei do representante de confiança dos trabalhadores (Töötajate usaldusisiku seadus), §§ 17 e 20, Riigi Teataja",
  "Legge estone sulla protezione dei dati personali (Isikuandmete kaitse seadus), §§ 62-73 - Riigi Teataja":
    "Lei estónia de proteção de dados pessoais (Isikuandmete kaitse seadus), §§ 62-73, Riigi Teataja",
  "AKI, materiale sul trattamento dei dati nel rapporto di lavoro":
    "AKI, material sobre o tratamento de dados na relação laboral",
  "AKI, valutazione d'impatto (capitolo 5)":
    "AKI, avaliação de impacto (capítulo 5)",
  "AKI, presentare un reclamo":
    "AKI, apresentar uma reclamação",
  "AKI (Garante estone), pagina ufficiale":
    "AKI (autoridade estónia de proteção de dados), página oficial",
  "DVI (Garante lettone), posso tracciare i viaggi del mio dipendente? (GPS)":
    "DVI (autoridade letã de proteção de dados), posso seguir as deslocações do meu trabalhador? (GPS)",
  "Legge lettone sul trattamento dei dati delle persone fisiche (Fizisko personu datu apstrādes likums) - Likumi.lv":
    "Lei letã do tratamento de dados das pessoas singulares (Fizisko personu datu apstrādes likums), Likumi.lv",
  "DVI, videosorveglianza dei dipendenti in presenza (16/09/2022)":
    "DVI, videovigilância dos trabalhadores no local de trabalho (16/09/2022)",
  "DVI, videosorveglianza dei dipendenti nel lavoro da remoto":
    "DVI, videovigilância dos trabalhadores em teletrabalho",
  "DVI, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "DVI, lista dos tratamentos que exigem uma AIPD (art. 35.4)",
  "DVI, presentare un reclamo":
    "DVI, apresentar uma reclamação",
  "Gruppo art. 29, parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli":
    "Grupo de Trabalho do artigo 29.º, parecer 2/2017 sobre o tratamento de dados no local de trabalho (WP249), n.º 5.7 veículos",
  "VDAI, lista dei trattamenti che richiedono una DPIA (voce 10: monitoraggio dei dipendenti)":
    "VDAI, lista dos tratamentos que exigem uma AIPD (ponto 10: monitorização dos trabalhadores)",
  "VDAI, decisione sul trattamento della corrispondenza personale di un dipendente (2022)":
    "VDAI, decisão sobre o tratamento da correspondência pessoal de um trabalhador (2022)",
  "VDAI, elenco delle decisioni (multe, ordini e altro) fino al 2025":
    "VDAI, lista das decisões (coimas, ordens e outras) até 2025",
  "VDAI (Garante lituano), servizi e reclami":
    "VDAI (autoridade lituana de proteção de dados), serviços e reclamações",
  "Loi du 1er août 2018, art. 71 (nuovo art. L.261-1 del Code du travail) e art. 72 (abrogazione della legge del 2 agosto 2002), Legilux":
    "Loi du 1er août 2018, art. 71 (novo art. L.261-1 do Code du travail) e art. 72 (revogação da lei de 2 de agosto de 2002), Legilux",
  "Code du travail, art. L.261-1 (sorveglianza dei lavoratori) - riproduzione CNPD":
    "Code du travail (Código do Trabalho luxemburguês), art. L.261-1 (vigilância dos trabalhadores), reprodução da CNPD",
  "CNPD, geolocalizzazione dei veicoli: necessità e proporzionalità":
    "CNPD, geolocalização dos veículos: necessidade e proporcionalidade",
  "CNPD, geolocalizzazione: valutazione d'impatto (AIPD)":
    "CNPD, geolocalização: avaliação de impacto (AIPD)",
  "CNPD, decisione 11FR/2021 (sanzione geolocalizzazione veicoli di servizio)":
    "CNPD, decisão 11FR/2021 (sanção por geolocalização de veículos de serviço)",
  "CNPD, presentare un reclamo (Faire valoir vos droits)":
    "CNPD, apresentar uma reclamação (Faire valoir vos droits)",
  "Regole n. 50/2023 sulla sorveglianza elettronica (Gazzetta ufficiale)":
    "Regras n.º 50/2023 sobre a vigilância eletrónica (Diário Oficial)",
  "Regole 1329/2025 di Persónuvernd (modifica delle Regole 50/2023, art. 3: 90 giorni)":
    "Regras 1329/2025 da Persónuvernd (alteração das Regras 50/2023, art. 3: 90 dias)",
  "Persónuvernd (Garante islandese), FAQ sul GPS e i dispositivi di localizzazione":
    "Persónuvernd (autoridade islandesa de proteção de dados), perguntas frequentes sobre o GPS e os dispositivos de localização",
  "Persónuvernd, lista dei trattamenti che richiedono una DPIA (Auglýsing nr. 828/2019)":
    "Persónuvernd, lista dos tratamentos que exigem uma AIPD (Auglýsing nr. 828/2019)",
  "Persónuvernd, presentare un reclamo":
    "Persónuvernd, apresentar uma reclamação",
  "Persónuvernd, decisione Islandspostur (uso illecito del GPS su un dipendente)":
    "Persónuvernd, decisão Islandspostur (uso ilícito do GPS com um trabalhador)",
  "IDPC (Garante maltese), guida al settore del lavoro":
    "IDPC (autoridade maltesa de proteção de dados), guia do âmbito laboral",
  "IDPC, valutazione d'impatto sulla protezione dei dati":
    "IDPC, avaliação de impacto sobre a proteção de dados",
  "IDPC, presentare un reclamo":
    "IDPC, apresentar uma reclamação",
  "IDPC, decisione CDP/COMP/579/2025 del 20 aprile 2026 (videosorveglianza della mensa aziendale)":
    "IDPC, decisão CDP/COMP/579/2025 de 20 de abril de 2026 (videovigilância do refeitório da empresa)",
  "Legge 125(I)/2018 sulla protezione dei dati (art. 36: abrogazione delle leggi 2001-2012)":
    "Lei 125(I)/2018 de proteção de dados (art. 36: revogação das leis de 2001-2012)",
  "Commissario cipriota, registro delle attività: abolito l'obbligo di notifica al Commissario (art. 30 GDPR)":
    "Comissário cipriota, registo de atividades: suprimida a obrigação de notificação ao Comissário (art. 30 do RGPD)",
  "Commissario cipriota, valutazione d'impatto (elenco indicativo: monitoraggio sistematico dei dipendenti, GPS)":
    "Comissário cipriota, avaliação de impacto (lista indicativa: monitorização sistemática dos trabalhadores, GPS)",
  "GDPR, art. 13 (informazione), testo ufficiale EUR-Lex":
    "RGPD, art. 13 (informação), texto oficial do EUR-Lex",
  "GDPR, art. 6(1)(f) e considerando 43 (base giuridica e squilibrio fra le parti), testo ufficiale EUR-Lex":
    "RGPD, art. 6(1)(f) e considerando 43 (base jurídica e desequilíbrio entre as partes), texto oficial do EUR-Lex",
  "Garante cipriota, pagina ufficiale":
    "Comissário cipriota, página oficial",
  "Commissario cipriota, decisione del 25.10.2019 sul Gruppo Louis (strumento Bradford Factor)":
    "Comissário cipriota, decisão de 25.10.2019 sobre o Grupo Louis (instrumento Bradford Factor)",
  "Legge 124/2024 sulla protezione dei dati personali (in vigore dal 1 febbraio 2025)":
    "Lei 124/2024 de proteção de dados pessoais (em vigor desde 1 de fevereiro de 2025)",
  "IDP, linea guida n. 03 del 30.04.2025 sulla videosorveglianza":
    "IDP, diretriz n.º 03 de 30.04.2025 sobre a videovigilância",
  "IDP (Garante albanese), pagina ufficiale":
    "IDP (autoridade albanesa de proteção de dados), página oficial",
  "Legge sulla protezione dei dati (LPDP, 87/2018) - testo ufficiale":
    "Lei de proteção de dados pessoais (LPDP, 87/2018), texto oficial",
  "Poverenik, decisione sulla lista dei trattamenti che richiedono una DPIA (Gazzetta 45/2019)":
    "Poverenik, decisão sobre a lista dos tratamentos que exigem uma AIPD (Boletim 45/2019)",
  "Odluka sulla lista dei trattamenti che richiedono DPIA (Sl. glasnik RS 45/2019 e 112/2020, testo consolidato)":
    "Decisão (Odluka) sobre a lista dos tratamentos que exigem uma AIPD (Sl. glasnik RS 45/2019 e 112/2020, texto consolidado)",
  "Poverenik (Garante serbo), competenze e contatti":
    "Poverenik (autoridade sérvia de proteção de dados), competências e contacto",
  "Danas, ispezione straordinaria del Poverenik al JKP Mediana di Nis (7 aprile 2026)":
    "Danas, inspeção extraordinária do Poverenik à JKP Mediana de Niš (7 de abril de 2026)",
  "N1, GPS su 80 cassonetti del JKP Mediana di Nis (protesta dei lavoratori, gennaio 2026)":
    "N1, GPS em 80 contentores da JKP Mediana de Niš (protesto dos trabalhadores, janeiro de 2026)",
  "Legge sulla protezione dei dati personali (Gazzetta BiH 12/25), testo pubblicato dall AZLP":
    "Lei de proteção de dados pessoais (Diário Oficial da BiH 12/25), texto publicado pela AZLP",
  "AZLP, decisione del 10.11.2025 sulla lista dei trattamenti che richiedono una DPIA (punto 8: dati dei dipendenti, controllo di lavoro e spostamenti)":
    "AZLP, decisão de 10.11.2025 sobre a lista dos tratamentos que exigem uma AIPD (ponto 8: dados dos trabalhadores, controlo do trabalho e das deslocações)",
  "AZLP (Garante bosniaco), pagina ufficiale":
    "AZLP (autoridade bósnia de proteção de dados), página oficial",
  "Legge sulla protezione dei dati personali, Gazzetta ufficiale BiH 12/25":
    "Lei de proteção de dados pessoais, Diário Oficial da BiH 12/25",
  "Legge sulla protezione dei dati personali, testo consolidato pubblicato dall'AZLP (artt. 26-28 e sanzioni, art. 74)":
    "Lei de proteção de dados pessoais, texto consolidado publicado pela AZLP (arts. 26-28 e sanções, art. 74)",
  "Nuova legge sulla protezione dei dati personali, Službeni list CG 133/2026 (pubblicata l'11.9.2026, in vigore dal 19.9.2026, si applica dal 19.3.2027, art. 106; artt. 88, 89 e 105)":
    "Nova lei de proteção de dados pessoais, Službeni list CG 133/2026 (publicada em 11 de setembro de 2026, em vigor desde 19 de setembro de 2026, aplica-se desde 19 de março de 2027, art. 106; arts. 88, 89 e 105)",
  "AZLP, posizione del Consiglio sull'uso del GPS nei veicoli di servizio (29.04.2025)":
    "AZLP, posição do Conselho sobre o uso do GPS nos veículos de serviço (29.04.2025)",
  "AZLP (Garante montenegrino), contatti":
    "AZLP (autoridade montenegrina de proteção de dados), contacto",
  "AZLP, moduli (richiesta di tutela dei diritti)":
    "AZLP, formulários (pedido de tutela de direitos)",
  "Regolamento UE 2016/679 (GDPR), riferimento comparativo":
    "Regulamento (UE) 2016/679 (RGPD), referência comparativa",
  "Legge sulla protezione dei dati (LPDP, Gazzetta 42/20) - traduzione inglese non ufficiale pubblicata dall'AZLP":
    "Lei de proteção de dados pessoais (LPDP, Boletim 42/20), tradução inglesa não oficial publicada pela AZLP",
  "AZLP, lista dei trattamenti che richiedono la DPIA (11.05.2020, punti 10 e 12: posizione e spostamenti, dati dei lavoratori)":
    "AZLP, lista dos tratamentos que exigem a AIPD (11.05.2020, pontos 10 e 12: localização e deslocações, dados dos trabalhadores)",
  "AZLP, atti subordinati (regolamenti e liste), pagina ufficiale":
    "AZLP, atos subordinados (regulamentos e listas), página oficial",
  "AZLP (Garante macedone), pagina ufficiale e reclami":
    "AZLP (autoridade macedónia de proteção de dados), página oficial e reclamações",
  "Legge dell'Ucraina n. 2297-VI sulla protezione dei dati personali (2010)":
    "Lei da Ucrânia n.º 2297-VI de proteção de dados pessoais (2010)",
  "Ordine del Difensore civico 1/02-14: procedura di notifica dei trattamenti a rischio particolare":
    "Ordem do Provedor de Justiça 1/02-14: procedimento de notificação dos tratamentos de risco particular",
  "Codice ucraino delle infrazioni amministrative, art. 188-39 (violazioni in materia di dati personali)":
    "Código ucraniano das infrações administrativas, art. 188-39 (infrações em matéria de dados pessoais)",
  "Difensore civico (Garante ucraino), protezione dei dati personali":
    "Provedor de Justiça (autoridade ucraniana de proteção de dados), proteção de dados pessoais",
  "ICLG, protezione dei dati in Ucraina (basi giuridiche, DPIA)":
    "ICLG, proteção de dados na Ucrânia (bases jurídicas, AIPD)",
  "CNPDCP, presentare un reclamo":
    "CNPDCP, apresentar uma reclamação",
  "Legge 195/2024 sulla protezione dei dati personali, in vigore dal 23 agosto 2026 (art. 35 DPIA, art. 88 sanzioni), testo inglese pubblicato dal CNPDCP":
    "Lei 195/2024 de proteção de dados pessoais, em vigor desde 23 de agosto de 2026 (art. 35 AIPD, art. 88 sanções), texto inglês publicado pela CNPDCP",
  "CNPDCP, ordine 27/2022: lista dei trattamenti soggetti a valutazione d'impatto (modificata dall'ordine 39/2026)":
    "CNPDCP, ordem 27/2022: lista dos tratamentos sujeitos a avaliação de impacto (alterada pela ordem 39/2026)",
  "Legge della Repubblica di Bielorussia n. 99-Z del 7 maggio 2021 sulla protezione dei dati personali (NPDPC)":
    "Lei da República da Bielorrússia n.º 99-Z de 7 de maio de 2021 de proteção de dados pessoais (NPDPC)",
  "Ordine OAC n. 94 del 1 giugno 2022: Registro degli operatori di dati personali (casi di iscrizione)":
    "Ordem OAC n.º 94 de 1 de junho de 2022: Registo dos operadores de dados pessoais (casos de inscrição)",
  "NPDPC (N. Shved), responsabilita amministrativa per violazione della normativa sui dati personali (art. 23.7 CAO)":
    "NPDPC (N. Shved), responsabilidade administrativa por infração da normativa sobre dados pessoais (art. 23.7 CAO)",
  "NPDPC (Garante bielorusso), informazioni e contatti":
    "NPDPC (autoridade bielorrussa de proteção de dados), informações e contacto",
  "GRATA, protezione dei dati e privacy dei dipendenti in Bielorussia":
    "GRATA, proteção de dados e privacidade dos trabalhadores na Bielorrússia",
  "DLA Piper, applicazione e sanzioni in Bielorussia":
    "DLA Piper, aplicação e sanções na Bielorrússia",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo lontano":
    "Regulamento (UE) 2016/679 (RGPD): referência comparativa distante",
  "ANPD, denúncia di inadempimento della LGPD":
    "ANPD, denúncia de incumprimento da LGPD",
  "ANPD, canale per il titolare dei dati":
    "ANPD, canal para o titular dos dados",
  "Lei n. 15.352/2026 (l’ANPD diventa agência reguladora)":
    "Lei n.º 15.352/2026 (a ANPD passa a ser uma agência reguladora)",
  "BfDI, elenco delle autorità dei Land (per trovare la tua)":
    "BfDI, lista das autoridades dos Länder (para encontrar a sua)",
  "BayLDA (esempio, Baviera)":
    "BayLDA (exemplo, Baviera)",
  "CNIL, presentare un reclamo":
    "CNIL, apresentar uma reclamação",
  "AEPD, sede elettronica":
    "AEPD, sede eletrónica",
  "CNPD, segnalazioni":
    "CNPD, queixas",
  "IMY, reclami":
    "IMY, reclamações",
  "Datenschutzbehörde (DSB), reclamo":
    "Datenschutzbehörde (DSB), reclamação",
  "APD/GBA, reclamo":
    "APD/GBA, reclamação",
  "ICO, segnalazioni":
    "ICO, queixas",
  "DPC, reclami":
    "DPC, reclamações",
  "ANSPDCP, reclami":
    "ANSPDCP, reclamações",
  "UODO, reclami":
    "UODO, reclamações",
  "UOOU, segnalazioni":
    "UOOU, queixas",
  "Garante, segnalazioni":
    "Provedor de proteção de dados da Finlândia, queixas",
  "AZOP, reclami":
    "AZOP, reclamações",
  "IP-RS, segnalazioni":
    "IP-RS, queixas",
  "UOOU SR, avvio del procedimento":
    "UOOU SR, início do procedimento",
  "AKI, reclami":
    "AKI, reclamações",
  "DVI, reclami":
    "DVI, reclamações",
  "VDAI, servizi e reclami":
    "VDAI, serviços e reclamações",
  "CNPD, reclami":
    "CNPD, reclamações",
  "Persónuvernd, reclami":
    "Persónuvernd, reclamações",
  "IDPC, reclami":
    "IDPC, reclamações",
  "Garante cipriota":
    "Comissário cipriota",
  "AZLP, tutela dei diritti":
    "AZLP, tutela dos direitos",
  "Difensore civico, protezione dei dati":
    "Provedor de Justiça, proteção de dados",
  "CNPDCP, reclami":
    "CNPDCP, reclamações",
};
