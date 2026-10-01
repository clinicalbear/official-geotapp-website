/**
 * Norsk versjon av tekstene som i landekortene er skrevet som vanlig `string`
 * (dvs. på italiensk, mesterspråket): titlene på kildene og navnene på
 * kontaktpunktene. Nøkkel = den nøyaktige ITALIENSKE teksten slik den står i
 * kortet, verdi = den norske versjonen. Brukes av `loc()` (./localize.ts)
 * utelukkende for `nb`. Offisielle navn på lover og myndigheter beholdes på
 * originalspråket, med en norsk forklaring i parentes der det hjelper å forstå
 * hva det er snakk om.
 *
 * En ny kilde eller en endret tittel i et kort uten oppføring her blir stående
 * på italiensk på den norske siden: testen `traduzioni-nb.test.ts` peker det ut.
 */
export const TESTI_NB: Readonly<Record<string, string>> = {
  "Legge lituana sulla protezione giuridica dei dati personali (ADTAĮ), art. 5 c. 4, testo consolidato":
    "Litauisk lov om rettslig vern av personopplysninger (ADTAĮ), art. 5 nr. 4, konsolidert tekst",
  "UOOU, relazione annuale 2012, controllo su Česká pošta (monitoraggio degli spostamenti dei portalettere)":
    "UOOU, årsrapport 2012, tilsyn med Česká pošta (overvåking av postbudenes forflytninger)",
  "CNPD, Deliberação 2019/494 (norme della Lei 58/2019 disapplicate)":
    "CNPD, Deliberação 2019/494 (bestemmelser i Lei 58/2019 som ikke anvendes)",
  "Garante Privacy, Provvedimento n. 7 del 16 gennaio 2025 (doc-web 10112287)":
    "Garante Privacy, vedtak nr. 7 av 16. januar 2025 (doc-web 10112287)",
  "Garante Privacy, Provvedimento n. 755 del 18 dicembre 2025, n. 10213711 (Pioneer Hi-Bred Italia Sementi)":
    "Garante Privacy, vedtak nr. 755 av 18. desember 2025, doc-web 10213711 (Pioneer Hi-Bred Italia Sementi)",
  "Garante Privacy, Provvedimento n. 382 del 28 maggio 2026, n. 10259916 (Azienda di Tutela della Salute per la Liguria)":
    "Garante Privacy, vedtak nr. 382 av 28. mai 2026, doc-web 10259916 (Azienda di Tutela della Salute per la Liguria, helsemyndigheten i Liguria)",
  "Garante Privacy, Provvedimento n. 135 del 13 marzo 2025 (doc-web 10128005), rimosso temporaneamente dal sito in ottemperanza alla sentenza del Tribunale di Cosenza n. 972 del 1° luglio 2026 (opposizione accolta)":
    "Garante Privacy, vedtak nr. 135 av 13. mars 2025 (doc-web 10128005), midlertidig fjernet fra nettstedet etter dom nr. 972 av 1. juli 2026 fra domstolen i Cosenza (innsigelsen ble tatt til følge)",
  "AGI Lavoro, «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (sentenza n. 972 del 1° luglio 2026; il testo della sentenza non è stato reperito in fonte ufficiale)":
    "AGI Lavoro, «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (dom nr. 972 av 1. juli 2026; domsteksten er ikke funnet i noen offisiell kilde)",
  "Avvocati Associati, commento alla sentenza Trib. Cosenza n. 972/2026 (22/09/2026), con passi citati":
    "Avvocati Associati, kommentar til dom nr. 972/2026 fra domstolen i Cosenza (22. september 2026), med siterte avsnitt",
  "Legge 20 maggio 1970, n. 300 (Statuto dei Lavoratori), art. 4":
    "Lov nr. 300 av 20. mai 1970 (den italienske loven om arbeidstakernes rettigheter), art. 4",
  "Regolamento UE 2016/679 (GDPR), artt. 5, 13, 25, 35, 88":
    "Forordning (EU) 2016/679 (GDPR), art. 5, 13, 25, 35 og 88",
  "Betriebsverfassungsgesetz, § 87 (cogestione del consiglio aziendale)":
    "Betriebsverfassungsgesetz (den tyske loven om bedriftsforfatning), § 87 (medbestemmelse for bedriftsrådet)",
  "Bundesdatenschutzgesetz, § 26 (dati dei lavoratori)":
    "Bundesdatenschutzgesetz (den tyske føderale personvernloven), § 26 (opplysninger om arbeidstakere)",
  "Garante del Baden-Württemberg, FAQ sulle basi giuridiche dei dati dei dipendenti (sentenza CGUE C-34/21)":
    "Tilsynsmyndigheten i Baden-Württemberg, FAQ om rettslig grunnlag for opplysninger om ansatte (EU-domstolens dom C-34/21)",
  "Regolamento UE 2016/679 (GDPR)":
    "Forordning (EU) 2016/679 (GDPR)",
  "Garante della Renania-Palatinato, guida sulla localizzazione GPS dei dipendenti":
    "Tilsynsmyndigheten i Rheinland-Pfalz, veiledning om GPS-lokalisering av ansatte",
  "Lista DSK dei trattamenti che richiedono una valutazione d'impatto (settore privato)":
    "DSKs liste over behandlinger som krever en personvernkonsekvensutredning (privat sektor)",
  "BfDI, elenco delle autorità garanti per la protezione dei dati dei Land":
    "BfDI, liste over delstatenes tilsynsmyndigheter for personvern",
  "Garante di Amburgo, comunicato del 1 ottobre 2020 (sanzione H&M)":
    "Tilsynsmyndigheten i Hamburg, pressemelding av 1. oktober 2020 (bot til H&M)",
  "BayLDA, autorità garante della Baviera":
    "BayLDA, tilsynsmyndigheten i Bayern",
  "BlnBDI, autorità garante di Berlino":
    "BlnBDI, tilsynsmyndigheten i Berlin",
  "Code du travail, art. L2312-38 (consultazione del CSE sui mezzi di controllo)":
    "Code du travail (den franske arbeidslovgivningen), art. L2312-38 (høring av CSE om kontrolltiltak)",
  "Code du travail, art. L1222-4 (nessuna raccolta da dispositivo non portato a conoscenza)":
    "Code du travail (den franske arbeidslovgivningen), art. L1222-4 (ingen innsamling via utstyr som den ansatte ikke er informert om)",
  "CNIL, guida sulla geolocalizzazione dei veicoli dei dipendenti":
    "CNIL, veiledning om geolokalisering av ansattes kjøretøy",
  "CNIL, lista dei trattamenti che richiedono una valutazione d'impatto (AIPD)":
    "CNIL, liste over behandlinger som krever en personvernkonsekvensutredning (AIPD)",
  "CNIL, abolizione delle dichiarazioni preventive dal 25 maggio 2018":
    "CNIL, avskaffelse av forhåndsmeldinger fra 25. mai 2018",
  "CNIL, dieci nuove sanzioni (procedura semplificata, 7 novembre 2023)":
    "CNIL, ti nye sanksjoner (forenklet prosedyre, 7. november 2023)",
  "CNIL, deliberazione SAN-2022-015 del 7 luglio 2022 (UBEEQO International, 175.000 €), su Légifrance":
    "CNIL, vedtak SAN-2022-015 av 7. juli 2022 (UBEEQO International, 175 000 €), på Légifrance",
  "Ley Organica 3/2018 (LOPDGDD), art. 90 (geolocalizzazione sul lavoro)":
    "Ley Orgánica 3/2018 (LOPDGDD), art. 90 (geolokalisering i arbeidsforhold)",
  "Estatuto de los Trabajadores, artt. 20.3 e 64":
    "Estatuto de los Trabajadores, art. 20.3 og 64",
  "AEPD, FAQ sul GPS nelle auto aziendali usate dai lavoratori":
    "AEPD, FAQ om GPS i firmabiler som arbeidstakere bruker",
  "AEPD, lista dei trattamenti che richiedono una valutazione d'impatto (art. 35.4 GDPR)":
    "AEPD, liste over behandlinger som krever en personvernkonsekvensutredning (art. 35 nr. 4 i GDPR)",
  "AEPD, guida sulla protezione dei dati nei rapporti di lavoro":
    "AEPD, veiledning om personvern i arbeidsforhold",
  "AEPD, sanzione PS/00454/2024 (Ares Capital, 200.000 €)":
    "AEPD, sanksjon PS/00454/2024 (Ares Capital, 200 000 €)",
  "Wet op de ondernemingsraden (WOR), art. 27 (diritto di consenso del consiglio aziendale)":
    "Wet op de ondernemingsraden (WOR, den nederlandske loven om bedriftsråd), art. 27 (bedriftsrådets samtykkerett)",
  "Autoriteit Persoonsgegevens, lista dei trattamenti che richiedono una DPIA":
    "Autoriteit Persoonsgegevens, liste over behandlinger som krever en DPIA",
  "Autoriteit Persoonsgegevens, condizioni per il controllo dei dipendenti":
    "Autoriteit Persoonsgegevens, vilkår for kontroll av ansatte",
  "Autoriteit Persoonsgegevens, controllo dei dipendenti a distanza (GPS sulle auto aziendali)":
    "Autoriteit Persoonsgegevens, kontroll av ansatte på avstand (GPS i firmabiler)",
  "Autoriteit Persoonsgegevens, sanzione per il trattamento delle impronte dei dipendenti":
    "Autoriteit Persoonsgegevens, bot for behandling av ansattes fingeravtrykk",
  "Codigo do Trabalho, art. 20 (mezzi di sorveglianza a distanza)":
    "Código do Trabalho (den portugisiske arbeidslovgivningen), art. 20 (overvåking på avstand)",
  "CNPD, Deliberacao 7680/2014 (geolocalizzazione nel contesto lavorativo)":
    "CNPD, Deliberação 7680/2014 (geolokalisering i arbeidsforhold)",
  "Lei 58/2019, art. 28 (relazioni di lavoro)":
    "Lei 58/2019, art. 28 (arbeidsforhold)",
  "CNPD, videovigilanza: nel contesto lavorativo restano le condizioni del Codice del lavoro, senza l'autorizzazione della CNPD":
    "CNPD, videoovervåking: i arbeidsforhold gjelder fortsatt vilkårene i arbeidslovgivningen, uten tillatelse fra CNPD",
  "CNPD, valutazione d'impatto sulla protezione dei dati":
    "CNPD, personvernkonsekvensutredning",
  "CNPD, Regulamento n.º 798/2018 (lista dei trattamenti soggetti a valutazione d'impatto)":
    "CNPD, Regulamento n.º 798/2018 (liste over behandlinger som krever en personvernkonsekvensutredning)",
  "Tribunal da Relação de Lisboa, acórdão del 17 giugno 2026, proc. 2266/25.4T8TVD.L1-4 (GPS del veicolo di una lavoratrice)":
    "Tribunal da Relação de Lisboa, dom av 17. juni 2026, sak 2266/25.4T8TVD.L1-4 (GPS i en arbeidstakers kjøretøy)",
  "CNPD, presentare una segnalazione":
    "CNPD, sende inn en melding",
  "Datatilsynet, guida sul controllo dei dipendenti (Kontrol af medarbejdere)":
    "Datatilsynet, veiledningen «Kontrol af medarbejdere»",
  "Datatilsynet, lista dei trattamenti che richiedono una valutazione d'impatto":
    "Datatilsynet, liste over behandlinger som krever en personvernkonsekvensutredning",
  "Datatilsynet, controlli 2020 sull'obbligo di informazione nelle misure di controllo dei dipendenti (GPS, videosorveglianza e altre)":
    "Datatilsynet, tilsyn i 2020 med informasjonsplikten ved kontrolltiltak overfor ansatte (GPS, videoovervåking m.m.)",
  "Datatilsynet, aree prioritarie dei controlli nel 2026 (sorveglianza dei dipendenti)":
    "Datatilsynet, prioriterte tilsynsområder i 2026 (overvåking av ansatte)",
  "Datatilsynet (autorità garante danese)":
    "Datatilsynet (den danske tilsynsmyndigheten for personvern)",
  "Lag 1976:580 om medbestammande i arbetslivet (MBL), § 11":
    "Lag 1976:580 om medbestämmande i arbetslivet (MBL, den svenske loven om medbestemmelse i arbeidslivet), § 11",
  "IMY, controllo e sorveglianza dei dipendenti":
    "IMY, kontroll og overvåking av ansatte",
  "IMY, come usare i servizi di localizzazione (GPS) sui dipendenti":
    "IMY, slik bruker du lokaliseringstjenester (GPS) overfor ansatte",
  "IMY, quando svolgere una valutazione d'impatto":
    "IMY, når man skal gjennomføre en personvernkonsekvensutredning",
  "IMY, presentare un reclamo":
    "IMY, sende inn en klage",
  "IMY, sanzione al Comune di Skelleftea (riconoscimento facciale per le presenze)":
    "IMY, sanksjon mot Skellefteå kommune (ansiktsgjenkjenning til tidsregistrering)",
  "Arbeidsmiljoloven, kap. 9 (misure di controllo, §§ 9-1 e 9-2)":
    "Arbeidsmiljøloven, kap. 9 (kontrolltiltak, §§ 9-1 og 9-2)",
  "Datatilsynet (Norvegia), GPS e tracciamento dei veicoli aziendali":
    "Datatilsynet (Norge), GPS og sporing av firmabiler",
  "Datatilsynet (Norvegia), quando svolgere una valutazione d'impatto":
    "Datatilsynet (Norge), når man skal gjennomføre en personvernkonsekvensutredning",
  "Datatilsynet (autorità garante norvegese)":
    "Datatilsynet (den norske tilsynsmyndigheten for personvern)",
  "Personvernnemnda, PVN-2017-07 (uso del GPS per controllare le ore del dipendente)":
    "Personvernnemnda, PVN-2017-07 (bruk av GPS til å kontrollere en ansatts timer)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96 (misure di controllo che toccano la dignita: consenso del consiglio aziendale)":
    "Arbeitsverfassungsgesetz (ArbVG, den østerrikske loven om arbeidsforfatning), § 96 (kontrolltiltak som berører menneskeverdet: samtykke fra bedriftsrådet)",
  "Arbeitsverfassungsgesetz (ArbVG), § 96a (sistemi che trattano dati personali dei lavoratori)":
    "Arbeitsverfassungsgesetz (ArbVG), § 96a (systemer som behandler arbeidstakeres personopplysninger)",
  "DSFA-V, regolamento sui trattamenti che richiedono una valutazione d'impatto":
    "DSFA-V, forskrift om behandlinger som krever en personvernkonsekvensutredning",
  "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (fine del registro DVR)":
    "Datenschutzbehörde (DSB), Datenschutzbericht 2018 (slutten på DVR-registeret)",
  "Datenschutzbehörde (DSB), decisione 2022-0.021.739 (stop al GPS sui veicoli aziendali)":
    "Datenschutzbehörde (DSB), vedtak 2022-0.021.739 (forbud mot GPS i firmabiler)",
  "Datenschutzbehörde (DSB), procedura di reclamo":
    "Datenschutzbehörde (DSB), klageprosedyre",
  "CCT n. 81 del 26 aprile 2002 (controllo delle comunicazioni elettroniche in rete)":
    "CCT nr. 81 av 26. april 2002 (kontroll av elektronisk kommunikasjon i nettverk)",
  "APD/GBA, geolocalizzazione dei lavoratori":
    "APD/GBA, geolokalisering av arbeidstakere",
  "APD/GBA, valutazione d'impatto sulla protezione dei dati":
    "APD/GBA, personvernkonsekvensutredning",
  "APD/GBA, presentare un reclamo":
    "APD/GBA, sende inn en klage",
  "Chambre Contentieuse APD/GBA, decisione 114/2024 (impronte per le presenze, 45.000 euro), testo integrale":
    "Chambre Contentieuse APD/GBA, vedtak 114/2024 (fingeravtrykk til tidsregistrering, 45 000 euro), full tekst",
  "ICO, guida sul monitoraggio dei lavoratori (UK GDPR)":
    "ICO, veiledning om overvåking av arbeidstakere (UK GDPR)",
  "ICO, sorveglianza nei veicoli":
    "ICO, overvåking i kjøretøy",
  "ICO, quando serve una DPIA":
    "ICO, når det kreves en DPIA",
  "ICO, provvedimento sul monitoraggio GPS (Home Office, 2024)":
    "ICO, vedtak om GPS-overvåking (Home Office, 2024)",
  "ICO, presentare una segnalazione":
    "ICO, sende inn en melding",
  "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission dal 30/09/2026)":
    "Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission fra 30.09.2026)",
  "Regolamento UE 2016/679 (GDPR) come UK GDPR":
    "Forordning (EU) 2016/679 (GDPR) som UK GDPR",
  "DPC, guida sul tracciamento dei veicoli aziendali (maggio 2020)":
    "DPC, veiledning om sporing av firmabiler (mai 2020)",
  "DPC, pagina sul tracciamento dei veicoli dei dipendenti (aggiornata a maggio 2026)":
    "DPC, side om sporing av ansattes kjøretøy (oppdatert i mai 2026)",
  "DPC, lista dei trattamenti che richiedono una DPIA":
    "DPC, liste over behandlinger som krever en DPIA",
  "DPC, consultazione preventiva":
    "DPC, forhåndsdrøfting",
  "DPC, presentare un reclamo":
    "DPC, sende inn en klage",
  "DPC, decisione Limerick City and County Council (dicembre 2021)":
    "DPC, vedtak Limerick City and County Council (desember 2021)",
  "DPC, sentenza Doolin v. DPC (High Court, febbraio 2020)":
    "DPC, dom Doolin v. DPC (High Court, februar 2020)",
  "IFPDT/FDPIC, mezzi tecnici di sorveglianza sul luogo di lavoro":
    "FDPIC, tekniske overvåkingsmidler på arbeidsplassen",
  "IFPDT/FDPIC, trattamento dei dati da parte del datore di lavoro (CO art. 328b)":
    "FDPIC, arbeidsgivers behandling av opplysninger (OR/CO art. 328b)",
  "IFPDT/FDPIC, valutazione d'impatto sulla protezione dei dati (nLPD art. 22)":
    "FDPIC, personvernkonsekvensutredning (nLPD art. 22)",
  "Legge federale sulla protezione dei dati (nLPD), art. 22, 23 e 60-65 (Fedlex)":
    "Forbundslov om personvern (nLPD), art. 22, 23 og 60–65 (Fedlex)",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo":
    "Forordning (EU) 2016/679 (GDPR): sammenligningsgrunnlag",
  "Legge 190/2018, art. 5 (monitoraggio dei dipendenti)":
    "Lov 190/2018, art. 5 (overvåking av ansatte)",
  "Codul Muncii, art. 40 (obblighi del datore), Portal Legislativ":
    "Codul Muncii (den rumenske arbeidslovgivningen), art. 40 (arbeidsgivers plikter), Portal Legislativ",
  "ANSPDCP, comunicato del 23 marzo 2023 (sanzione Tehnoplus, GPS)":
    "ANSPDCP, pressemelding av 23. mars 2023 (bot til Tehnoplus, GPS)",
  "ANSPDCP, Decizia 174/2018 (lista trattamenti che richiedono DPIA), Monitorul Oficial 919/31.10.2018, art. 1 lett. d e g":
    "ANSPDCP, Decizia 174/2018 (liste over behandlinger som krever en DPIA), Monitorul Oficial 919/31.10.2018, art. 1 bokstav d og g",
  "ANSPDCP, presentazione dei reclami":
    "ANSPDCP, innsending av klager",
  "Kodeks pracy, art. 22(2) (monitoraggio), testo consolidato Dz.U. 2026 poz. 1245 (in vigore dal 24 settembre 2026)":
    "Kodeks pracy (den polske arbeidslovgivningen), art. 22(2) (overvåking), konsolidert tekst Dz.U. 2026 poz. 1245 (i kraft fra 24. september 2026)",
  "Legge del 4 dicembre 2025 di modifica del Codice del lavoro, Dz.U. 2026 poz. 25 (art. 22(2) par. 8: \"su carta o in forma elettronica\", in vigore dal 27 gennaio 2026)":
    "Lov av 4. desember 2025 om endring av arbeidslovgivningen, Dz.U. 2026 poz. 25 (art. 22(2) § 8: «på papir eller i elektronisk form», i kraft fra 27. januar 2026)",
  "Kodeks pracy, art. 22(3) par. 3-4 (altre forme di monitoraggio, tra cui il GPS), testo consolidato Dz.U. 2026 poz. 1245":
    "Kodeks pracy, art. 22(3) § 3–4 (andre former for overvåking, blant annet GPS), konsolidert tekst Dz.U. 2026 poz. 1245",
  "UODO, guida alla protezione dei dati sul luogo di lavoro":
    "UODO, veiledning om personvern på arbeidsplassen",
  "UODO, lista dei trattamenti che richiedono una DPIA (M.P. 2019 poz. 666)":
    "UODO, liste over behandlinger som krever en DPIA (M.P. 2019 poz. 666)",
  "UODO, presentare un reclamo":
    "UODO, sende inn en klage",
  "UODO, sanzione Centrum Medyczne Ujastek (monitoraggio non comunicato ai dipendenti)":
    "UODO, sanksjon mot Centrum Medyczne Ujastek (overvåking som de ansatte ikke var informert om)",
  "Zakonik prace (Codice del lavoro), art. 316":
    "Zákoník práce (den tsjekkiske arbeidslovgivningen), art. 316",
  "Stanovisko 2/2017 sul trattamento dei dati sul posto di lavoro, pubblicato dall UOOU":
    "Uttalelse 2/2017 om behandling av opplysninger på arbeidsplassen, publisert av UOOU",
  "UOOU, lista dei trattamenti che richiedono una DPIA":
    "UOOU, liste over behandlinger som krever en DPIA",
  "UOOU, presentare una segnalazione":
    "UOOU, sende inn en melding",
  "Tribunale municipale di Praga 6 A 42/2013 (Ceska posta, GPS sui portalettere), sentenza":
    "Byretten i Praha 6 A 42/2013 (Česká pošta, GPS på postbud), dom",
  "epravo.cz, GPS monitoring zamestnancu podruhe (riporta una multa di 80.000 CZK e 7.770 portalettere, non confermati da fonti ufficiali)":
    "epravo.cz, GPS monitoring zaměstnanců podruhé (nevner en bot på 80 000 CZK og 7 770 postbud, ikke bekreftet av offisielle kilder)",
  "UOOU, relazione annuale 2014, controlli su Skoda Auto e Plzensky Prazdroj (GPS nei veicoli aziendali)":
    "UOOU, årsrapport 2014, tilsyn med Škoda Auto og Plzeňský Prazdroj (GPS i firmabiler)",
  "HDPA (Garante greco), FAQ sui rapporti di lavoro (geolocalizzazione)":
    "HDPA (den greske tilsynsmyndigheten for personvern), FAQ om arbeidsforhold (geolokalisering)",
  "Legge 4624/2019, art. 27 (dati dei dipendenti), traduzione ufficiale HDPA":
    "Lov 4624/2019, art. 27 (opplysninger om ansatte), offisiell oversettelse fra HDPA",
  "HDPA, Decisione 65/2018 (lista dei trattamenti che richiedono DPIA)":
    "HDPA, vedtak 65/2018 (liste over behandlinger som krever en DPIA)",
  "HDPA, sanzione a un datore per geolocalizzazione (16 febbraio 2024)":
    "HDPA, bot til en arbeidsgiver for geolokalisering (16. februar 2024)",
  "HDPA (Garante greco), pagina ufficiale":
    "HDPA (den greske tilsynsmyndigheten for personvern), offisiell side",
  "Legge sulla protezione della privacy nella vita lavorativa (759/2004) - testo consolidato in finlandese (Finlex)":
    "Lov om vern av personvernet i arbeidslivet (759/2004): konsolidert tekst på finsk (Finlex)",
  "Garante finlandese (Tietosuojavaltuutettu), FAQ sulla vita lavorativa":
    "Finlands personvernombud (Tietosuojavaltuutettu), FAQ om arbeidslivet",
  "Garante finlandese, lista dei trattamenti che richiedono una DPIA":
    "Finlands personvernombud, liste over behandlinger som krever en DPIA",
  "Garante finlandese, segnalare una violazione":
    "Finlands personvernombud, melde fra om et brudd",
  "Garante finlandese, sanzione per dati di localizzazione usati per la rilevazione orario (2021)":
    "Finlands personvernombud, bot for lokaliseringsopplysninger brukt til registrering av arbeidstid (2021)",
  "Zakon o zaštiti na radu (legge sicurezza sul lavoro), art. 43 (dispositivi di sorveglianza)":
    "Zakon o zaštiti na radu (den kroatiske loven om sikkerhet på arbeidsplassen), art. 43 (overvåkingsutstyr)",
  "Zakon o radu (legge sul lavoro), art. 29 (dati dei lavoratori) e art. 150 (consultazione del consiglio dei lavoratori)":
    "Zakon o radu (den kroatiske arbeidsloven), art. 29 (opplysninger om arbeidstakere) og art. 150 (høring av arbeidsrådet)",
  "AZOP (Garante croato), trattamento dei dati dei dipendenti tramite GPS":
    "AZOP (den kroatiske tilsynsmyndigheten for personvern), behandling av ansattes opplysninger via GPS",
  "AZOP, lista dei trattamenti che richiedono una DPIA":
    "AZOP, liste over behandlinger som krever en DPIA",
  "AZOP, richiesta di accertamento di violazione (reclamo)":
    "AZOP, begjæring om fastsettelse av et brudd (klage)",
  "AZOP (Garante croato), pagina ufficiale":
    "AZOP (den kroatiske tilsynsmyndigheten for personvern), offisiell side",
  "IP-RS (Garante sloveno), linee guida sull'uso dei dispositivi GPS":
    "IP-RS (den slovenske tilsynsmyndigheten for personvern), retningslinjer for bruk av GPS-enheter",
  "IP-RS, parere 'Sledenje zaposlenim' (tracciamento dei dipendenti)":
    "IP-RS, uttalelse «Sledenje zaposlenim» (sporing av ansatte)",
  "IP-RS, comunicato del 15.04.2026: multa di 6.000 euro a un'azienda pubblica per GPS sui dipendenti":
    "IP-RS, pressemelding av 15.04.2026: bot på 6 000 euro til en offentlig virksomhet for GPS på ansatte",
  "Zakon o delovnih razmerjih (ZDR-1), art. 48 (dati dei lavoratori)":
    "Zakon o delovnih razmerjih (ZDR-1, den slovenske loven om arbeidsforhold), art. 48 (opplysninger om arbeidstakere)",
  "Zakon o sodelovanju delavcev pri upravljanju (ZSDU), art. 89-90 (informazione del consiglio dei lavoratori)":
    "Zakon o sodelovanju delavcev pri upravljanju (ZSDU, den slovenske loven om arbeidstakernes deltakelse i ledelsen), art. 89–90 (informasjon til arbeidsrådet)",
  "IP-RS, elenco dei trattamenti per cui e' obbligatoria la valutazione d'impatto (art. 35.4 GDPR)":
    "IP-RS, liste over behandlinger der personvernkonsekvensutredning er obligatorisk (art. 35 nr. 4 i GDPR)",
  "IP-RS, presentare una segnalazione":
    "IP-RS, sende inn en melding",
  "Zakonnik prace (Codice del lavoro), art. 13 par. 4 (monitoraggio dei dipendenti)":
    "Zákonník práce (den slovakiske arbeidslovgivningen), art. 13 nr. 4 (overvåking av ansatte)",
  "UOOU SR (Garante slovacco), procedura di tutela":
    "UOOU SR (den slovakiske tilsynsmyndigheten for personvern), vernprosedyre",
  "Parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli, versione slovacca pubblicata dall UOOU SR":
    "Uttalelse 2/2017 om behandling av opplysninger på arbeidsplassen (WP249), pkt. 5.7 kjøretøy, slovakisk versjon publisert av UOOU SR",
  "Lista slovacca dei trattamenti soggetti a DPIA (punti 3 e 9), pubblicata dall EDPB":
    "Slovakisk liste over behandlinger som omfattes av en DPIA (punkt 3 og 9), publisert av EDPB",
  "UOOU SR, guida sulla liceita del trattamento (versione aggiornata 22/01/2019), esempio del par. 13 c. 4 del Codice del lavoro":
    "UOOU SR, veiledning om behandlingens lovlighet (oppdatert versjon av 22.01.2019), eksempel i § 13 nr. 4 i arbeidslovgivningen",
  "UOOU SR, presentare una proposta di avvio del procedimento (reclamo)":
    "UOOU SR, sende inn et forslag om å innlede saksbehandling (klage)",
  "UOOU SR, relazione sullo stato della protezione dei dati 2025 (par. 9.2.1, trattamento di dati di geolocalizzazione)":
    "UOOU SR, rapport om tilstanden for personvernet 2025 (pkt. 9.2.1, behandling av geolokaliseringsopplysninger)",
  "Codice del lavoro (Mt.), art. 9 (diritti della persona) e art. 11/A (controllo dei lavoratori)":
    "Den ungarske arbeidslovgivningen (Mt.), art. 9 (personlighetsrettigheter) og art. 11/A (kontroll av arbeidstakere)",
  "NAIH, guida sui trattamenti sul luogo di lavoro (novembre 2016, precedente al GDPR), par. 5 sul GPS":
    "NAIH, veiledning om behandlinger på arbeidsplassen (november 2016, før GDPR), pkt. 5 om GPS",
  "NAIH, lista dei trattamenti che richiedono una valutazione d'impatto":
    "NAIH, liste over behandlinger som krever en personvernkonsekvensutredning",
  "NAIH, sanzione Auchan (monitoraggio dei dipendenti)":
    "NAIH, bot til Auchan (overvåking av ansatte)",
  "NAIH (Garante ungherese), pagina ufficiale":
    "NAIH (den ungarske tilsynsmyndigheten for personvern), offisiell side",
  "Legge sulla protezione dei dati (ZZLD), testo consolidato sul sito del CPDP (art. 25д e 25и; ultima modifica ДВ 70/2024)":
    "Lov om vern av personopplysninger (ZZLD), konsolidert tekst på CPDPs nettsted (art. 25д og 25и; sist endret ДВ 70/2024)",
  "CPDP (Garante bulgaro), guida sulla privacy sul luogo di lavoro (2014, anteriore al GDPR), par. 3.5.2 sistemi GPS":
    "CPDP (den bulgarske tilsynsmyndigheten for personvern), veiledning om personvern på arbeidsplassen (2014, før GDPR), pkt. 3.5.2 GPS-systemer",
  "CPDP, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "CPDP, liste over behandlinger som krever en DPIA (art. 35 nr. 4)",
  "CPDP, parere su LUKOIL (riuso della videosorveglianza per valutare i dipendenti)":
    "CPDP, uttalelse om LUKOIL (gjenbruk av videoovervåking til å vurdere ansatte)",
  "CPDP (Garante bulgaro), pagina ufficiale":
    "CPDP (den bulgarske tilsynsmyndigheten for personvern), offisiell side",
  "AKI (Garante estone), FAQ sui rapporti di lavoro (GPS)":
    "AKI (den estiske tilsynsmyndigheten for personvern), FAQ om arbeidsforhold (GPS)",
  "AKI, guida per il personale sui dati nel rapporto di lavoro (2011, ante-GDPR), punto 2.9 GPS":
    "AKI, veiledning til personalet om opplysninger i arbeidsforholdet (2011, før GDPR), pkt. 2.9 GPS",
  "Legge sul fiduciario dei lavoratori (Töötajate usaldusisiku seadus), §§ 17 e 20 - Riigi Teataja":
    "Lov om tillitsvalgte (Töötajate usaldusisiku seadus), §§ 17 og 20, Riigi Teataja",
  "Legge estone sulla protezione dei dati personali (Isikuandmete kaitse seadus), §§ 62-73 - Riigi Teataja":
    "Estisk lov om vern av personopplysninger (Isikuandmete kaitse seadus), §§ 62–73, Riigi Teataja",
  "AKI, materiale sul trattamento dei dati nel rapporto di lavoro":
    "AKI, materiell om behandling av opplysninger i arbeidsforholdet",
  "AKI, valutazione d'impatto (capitolo 5)":
    "AKI, personvernkonsekvensutredning (kapittel 5)",
  "AKI, presentare un reclamo":
    "AKI, sende inn en klage",
  "AKI (Garante estone), pagina ufficiale":
    "AKI (den estiske tilsynsmyndigheten for personvern), offisiell side",
  "DVI (Garante lettone), posso tracciare i viaggi del mio dipendente? (GPS)":
    "DVI (den latviske tilsynsmyndigheten for personvern), kan jeg spore den ansattes reiser? (GPS)",
  "Legge lettone sul trattamento dei dati delle persone fisiche (Fizisko personu datu apstrādes likums) - Likumi.lv":
    "Latvisk lov om behandling av fysiske personers opplysninger (Fizisko personu datu apstrādes likums), Likumi.lv",
  "DVI, videosorveglianza dei dipendenti in presenza (16/09/2022)":
    "DVI, videoovervåking av ansatte på arbeidsplassen (16.09.2022)",
  "DVI, videosorveglianza dei dipendenti nel lavoro da remoto":
    "DVI, videoovervåking av ansatte ved fjernarbeid",
  "DVI, lista dei trattamenti che richiedono una DPIA (art. 35.4)":
    "DVI, liste over behandlinger som krever en DPIA (art. 35 nr. 4)",
  "DVI, presentare un reclamo":
    "DVI, sende inn en klage",
  "Gruppo art. 29, parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli":
    "Artikkel 29-gruppen, uttalelse 2/2017 om behandling av opplysninger på arbeidsplassen (WP249), pkt. 5.7 kjøretøy",
  "VDAI, lista dei trattamenti che richiedono una DPIA (voce 10: monitoraggio dei dipendenti)":
    "VDAI, liste over behandlinger som krever en DPIA (punkt 10: overvåking av ansatte)",
  "VDAI, decisione sul trattamento della corrispondenza personale di un dipendente (2022)":
    "VDAI, vedtak om behandling av en ansatts personlige korrespondanse (2022)",
  "VDAI, elenco delle decisioni (multe, ordini e altro) fino al 2025":
    "VDAI, liste over vedtak (bøter, pålegg m.m.) til og med 2025",
  "VDAI (Garante lituano), servizi e reclami":
    "VDAI (den litauiske tilsynsmyndigheten for personvern), tjenester og klager",
  "Loi du 1er août 2018, art. 71 (nuovo art. L.261-1 del Code du travail) e art. 72 (abrogazione della legge del 2 agosto 2002), Legilux":
    "Loi du 1er août 2018, art. 71 (ny art. L.261-1 i Code du travail) og art. 72 (oppheving av loven av 2. august 2002), Legilux",
  "Code du travail, art. L.261-1 (sorveglianza dei lavoratori) - riproduzione CNPD":
    "Code du travail (den luxembourgske arbeidslovgivningen), art. L.261-1 (overvåking av arbeidstakere), gjengitt av CNPD",
  "CNPD, geolocalizzazione dei veicoli: necessità e proporzionalità":
    "CNPD, geolokalisering av kjøretøy: nødvendighet og forholdsmessighet",
  "CNPD, geolocalizzazione: valutazione d'impatto (AIPD)":
    "CNPD, geolokalisering: personvernkonsekvensutredning (AIPD)",
  "CNPD, decisione 11FR/2021 (sanzione geolocalizzazione veicoli di servizio)":
    "CNPD, vedtak 11FR/2021 (sanksjon for geolokalisering av tjenestekjøretøy)",
  "CNPD, presentare un reclamo (Faire valoir vos droits)":
    "CNPD, sende inn en klage (Faire valoir vos droits)",
  "Regole n. 50/2023 sulla sorveglianza elettronica (Gazzetta ufficiale)":
    "Regler nr. 50/2023 om elektronisk overvåking (Lovtidend)",
  "Regole 1329/2025 di Persónuvernd (modifica delle Regole 50/2023, art. 3: 90 giorni)":
    "Persónuverndar regler 1329/2025 (endring av reglene 50/2023, art. 3: 90 dager)",
  "Persónuvernd (Garante islandese), FAQ sul GPS e i dispositivi di localizzazione":
    "Persónuvernd (den islandske tilsynsmyndigheten for personvern), FAQ om GPS og lokaliseringsenheter",
  "Persónuvernd, lista dei trattamenti che richiedono una DPIA (Auglýsing nr. 828/2019)":
    "Persónuvernd, liste over behandlinger som krever en DPIA (Auglýsing nr. 828/2019)",
  "Persónuvernd, presentare un reclamo":
    "Persónuvernd, sende inn en klage",
  "Persónuvernd, decisione Islandspostur (uso illecito del GPS su un dipendente)":
    "Persónuvernd, vedtak Islandspostur (ulovlig bruk av GPS overfor en ansatt)",
  "IDPC (Garante maltese), guida al settore del lavoro":
    "IDPC (den maltesiske tilsynsmyndigheten for personvern), veiledning for arbeidsområdet",
  "IDPC, valutazione d'impatto sulla protezione dei dati":
    "IDPC, personvernkonsekvensutredning",
  "IDPC, presentare un reclamo":
    "IDPC, sende inn en klage",
  "IDPC, decisione CDP/COMP/579/2025 del 20 aprile 2026 (videosorveglianza della mensa aziendale)":
    "IDPC, vedtak CDP/COMP/579/2025 av 20. april 2026 (videoovervåking av bedriftskantinen)",
  "Legge 125(I)/2018 sulla protezione dei dati (art. 36: abrogazione delle leggi 2001-2012)":
    "Lov 125(I)/2018 om personvern (art. 36: oppheving av lovene 2001–2012)",
  "Commissario cipriota, registro delle attività: abolito l'obbligo di notifica al Commissario (art. 30 GDPR)":
    "Kommissæren på Kypros, register over behandlingsaktiviteter: plikten til å melde til kommissæren er opphevet (art. 30 i GDPR)",
  "Commissario cipriota, valutazione d'impatto (elenco indicativo: monitoraggio sistematico dei dipendenti, GPS)":
    "Kommissæren på Kypros, personvernkonsekvensutredning (veiledende liste: systematisk overvåking av ansatte, GPS)",
  "GDPR, art. 13 (informazione), testo ufficiale EUR-Lex":
    "GDPR, art. 13 (informasjon), offisiell tekst fra EUR-Lex",
  "GDPR, art. 6(1)(f) e considerando 43 (base giuridica e squilibrio fra le parti), testo ufficiale EUR-Lex":
    "GDPR, art. 6 nr. 1 bokstav f og fortalepunkt 43 (rettslig grunnlag og skjevt styrkeforhold mellom partene), offisiell tekst fra EUR-Lex",
  "Garante cipriota, pagina ufficiale":
    "Kommissæren på Kypros, offisiell side",
  "Commissario cipriota, decisione del 25.10.2019 sul Gruppo Louis (strumento Bradford Factor)":
    "Kommissæren på Kypros, vedtak av 25.10.2019 om Louis-konsernet (Bradford Factor-verktøyet)",
  "Legge 124/2024 sulla protezione dei dati personali (in vigore dal 1 febbraio 2025)":
    "Lov 124/2024 om vern av personopplysninger (i kraft fra 1. februar 2025)",
  "IDP, linea guida n. 03 del 30.04.2025 sulla videosorveglianza":
    "IDP, retningslinje nr. 03 av 30.04.2025 om videoovervåking",
  "IDP (Garante albanese), pagina ufficiale":
    "IDP (den albanske tilsynsmyndigheten for personvern), offisiell side",
  "Legge sulla protezione dei dati (LPDP, 87/2018) - testo ufficiale":
    "Lov om personvern (LPDP, 87/2018), offisiell tekst",
  "Poverenik, decisione sulla lista dei trattamenti che richiedono una DPIA (Gazzetta 45/2019)":
    "Poverenik, vedtak om listen over behandlinger som krever en DPIA (Službeni glasnik 45/2019)",
  "Odluka sulla lista dei trattamenti che richiedono DPIA (Sl. glasnik RS 45/2019 e 112/2020, testo consolidato)":
    "Odluka om listen over behandlinger som krever en DPIA (Sl. glasnik RS 45/2019 og 112/2020, konsolidert tekst)",
  "Poverenik (Garante serbo), competenze e contatti":
    "Poverenik (den serbiske tilsynsmyndigheten for personvern), kompetanse og kontakt",
  "Danas, ispezione straordinaria del Poverenik al JKP Mediana di Nis (7 aprile 2026)":
    "Danas, ekstraordinært tilsyn fra Poverenik hos JKP Mediana i Niš (7. april 2026)",
  "N1, GPS su 80 cassonetti del JKP Mediana di Nis (protesta dei lavoratori, gennaio 2026)":
    "N1, GPS på 80 avfallscontainere hos JKP Mediana i Niš (arbeidstakernes protest, januar 2026)",
  "Legge sulla protezione dei dati personali (Gazzetta BiH 12/25), testo pubblicato dall AZLP":
    "Lov om vern av personopplysninger (Službeni glasnik BiH 12/25), tekst publisert av AZLP",
  "AZLP, decisione del 10.11.2025 sulla lista dei trattamenti che richiedono una DPIA (punto 8: dati dei dipendenti, controllo di lavoro e spostamenti)":
    "AZLP, vedtak av 10.11.2025 om listen over behandlinger som krever en DPIA (punkt 8: opplysninger om ansatte, kontroll av arbeid og forflytninger)",
  "AZLP (Garante bosniaco), pagina ufficiale":
    "AZLP (den bosniske tilsynsmyndigheten for personvern), offisiell side",
  "Legge sulla protezione dei dati personali, Gazzetta ufficiale BiH 12/25":
    "Lov om vern av personopplysninger, Službeni glasnik BiH 12/25",
  "Legge sulla protezione dei dati personali, testo consolidato pubblicato dall'AZLP (artt. 26-28 e sanzioni, art. 74)":
    "Lov om vern av personopplysninger, konsolidert tekst publisert av AZLP (art. 26–28 og sanksjoner, art. 74)",
  "Nuova legge sulla protezione dei dati personali, Službeni list CG 133/2026 (pubblicata l'11.9.2026, in vigore dal 19.9.2026, si applica dal 19.3.2027, art. 106; artt. 88, 89 e 105)":
    "Ny lov om vern av personopplysninger, Službeni list CG 133/2026 (publisert 11.9.2026, i kraft fra 19.9.2026, gjelder fra 19.3.2027, art. 106; art. 88, 89 og 105)",
  "AZLP, posizione del Consiglio sull'uso del GPS nei veicoli di servizio (29.04.2025)":
    "AZLP, rådets standpunkt til bruk av GPS i tjenestekjøretøy (29.04.2025)",
  "AZLP (Garante montenegrino), contatti":
    "AZLP (den montenegrinske tilsynsmyndigheten for personvern), kontakt",
  "AZLP, moduli (richiesta di tutela dei diritti)":
    "AZLP, skjemaer (begjæring om vern av rettigheter)",
  "Regolamento UE 2016/679 (GDPR), riferimento comparativo":
    "Forordning (EU) 2016/679 (GDPR), sammenligningsgrunnlag",
  "Legge sulla protezione dei dati (LPDP, Gazzetta 42/20) - traduzione inglese non ufficiale pubblicata dall'AZLP":
    "Lov om personvern (LPDP, Službeni vesnik 42/20), uoffisiell engelsk oversettelse publisert av AZLP",
  "AZLP, lista dei trattamenti che richiedono la DPIA (11.05.2020, punti 10 e 12: posizione e spostamenti, dati dei lavoratori)":
    "AZLP, liste over behandlinger som krever en DPIA (11.05.2020, punkt 10 og 12: posisjon og forflytninger, opplysninger om arbeidstakere)",
  "AZLP, atti subordinati (regolamenti e liste), pagina ufficiale":
    "AZLP, underordnede rettsakter (forskrifter og lister), offisiell side",
  "AZLP (Garante macedone), pagina ufficiale e reclami":
    "AZLP (den makedonske tilsynsmyndigheten for personvern), offisiell side og klager",
  "Legge dell'Ucraina n. 2297-VI sulla protezione dei dati personali (2010)":
    "Ukrainas lov nr. 2297-VI om vern av personopplysninger (2010)",
  "Ordine del Difensore civico 1/02-14: procedura di notifica dei trattamenti a rischio particolare":
    "Ombudsmannens ordre 1/02-14: prosedyre for melding av behandlinger med særlig risiko",
  "Codice ucraino delle infrazioni amministrative, art. 188-39 (violazioni in materia di dati personali)":
    "Ukrainas lov om administrative lovbrudd, art. 188-39 (brudd på regler om personopplysninger)",
  "Difensore civico (Garante ucraino), protezione dei dati personali":
    "Ombudsmannen (Ukrainas tilsynsmyndighet for personvern), vern av personopplysninger",
  "ICLG, protezione dei dati in Ucraina (basi giuridiche, DPIA)":
    "ICLG, personvern i Ukraina (rettslig grunnlag, DPIA)",
  "CNPDCP, presentare un reclamo":
    "CNPDCP, sende inn en klage",
  "Legge 195/2024 sulla protezione dei dati personali, in vigore dal 23 agosto 2026 (art. 35 DPIA, art. 88 sanzioni), testo inglese pubblicato dal CNPDCP":
    "Lov 195/2024 om vern av personopplysninger, i kraft fra 23. august 2026 (art. 35 DPIA, art. 88 sanksjoner), engelsk tekst publisert av CNPDCP",
  "CNPDCP, ordine 27/2022: lista dei trattamenti soggetti a valutazione d'impatto (modificata dall'ordine 39/2026)":
    "CNPDCP, ordre 27/2022: liste over behandlinger som omfattes av en personvernkonsekvensutredning (endret ved ordre 39/2026)",
  "Legge della Repubblica di Bielorussia n. 99-Z del 7 maggio 2021 sulla protezione dei dati personali (NPDPC)":
    "Republikken Belarus' lov nr. 99-Z av 7. mai 2021 om vern av personopplysninger (NPDPC)",
  "Ordine OAC n. 94 del 1 giugno 2022: Registro degli operatori di dati personali (casi di iscrizione)":
    "OAC-ordre nr. 94 av 1. juni 2022: Register over behandlere av personopplysninger (tilfeller der registrering kreves)",
  "NPDPC (N. Shved), responsabilita amministrativa per violazione della normativa sui dati personali (art. 23.7 CAO)":
    "NPDPC (N. Shved), administrativt ansvar for brudd på reglene om personopplysninger (art. 23.7 CAO)",
  "NPDPC (Garante bielorusso), informazioni e contatti":
    "NPDPC (den belarusiske tilsynsmyndigheten for personvern), informasjon og kontakt",
  "GRATA, protezione dei dati e privacy dei dipendenti in Bielorussia":
    "GRATA, personvern og ansattes privatliv i Belarus",
  "DLA Piper, applicazione e sanzioni in Bielorussia":
    "DLA Piper, håndheving og sanksjoner i Belarus",
  "Regolamento UE 2016/679 (GDPR) - riferimento comparativo lontano":
    "Forordning (EU) 2016/679 (GDPR): fjernt sammenligningsgrunnlag",
  "ANPD, denúncia di inadempimento della LGPD":
    "ANPD, anmeldelse av manglende overholdelse av LGPD",
  "ANPD, canale per il titolare dei dati":
    "ANPD, kanal for den registrerte",
  "Lei n. 15.352/2026 (l’ANPD diventa agência reguladora)":
    "Lei n. 15.352/2026 (ANPD blir en reguleringsmyndighet)",
  "BfDI, elenco delle autorità dei Land (per trovare la tua)":
    "BfDI, liste over delstatenes myndigheter (for å finne din egen)",
  "BayLDA (esempio, Baviera)":
    "BayLDA (eksempel, Bayern)",
  "CNIL, presentare un reclamo":
    "CNIL, sende inn en klage",
  "AEPD, sede elettronica":
    "AEPD, elektronisk kontor",
  "CNPD, segnalazioni":
    "CNPD, meldinger",
  "IMY, reclami":
    "IMY, klager",
  "Datenschutzbehörde (DSB), reclamo":
    "Datenschutzbehörde (DSB), klage",
  "APD/GBA, reclamo":
    "APD/GBA, klage",
  "ICO, segnalazioni":
    "ICO, meldinger",
  "DPC, reclami":
    "DPC, klager",
  "ANSPDCP, reclami":
    "ANSPDCP, klager",
  "UODO, reclami":
    "UODO, klager",
  "UOOU, segnalazioni":
    "UOOU, meldinger",
  "Garante, segnalazioni":
    "Finlands personvernombud, meldinger",
  "AZOP, reclami":
    "AZOP, klager",
  "IP-RS, segnalazioni":
    "IP-RS, meldinger",
  "UOOU SR, avvio del procedimento":
    "UOOU SR, innledning av saksbehandling",
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
    "Kommissæren på Kypros",
  "AZLP, tutela dei diritti":
    "AZLP, vern av rettigheter",
  "Difensore civico, protezione dei dati":
    "Ombudsmannen, personvern",
  "CNPDCP, reclami":
    "CNPDCP, klager",
};
