/**
 * Scheda-paese Islanda per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Regole n. 50/2023 sulla sorveglianza elettronica, FAQ del Persónuvernd (Garante
 * islandese) sul GPS, lista Persónuvernd dei trattamenti che richiedono una DPIA
 * (Auglýsing nr. 828/2019), pagina dei reclami al Persónuvernd, decisione
 * Islandspostur sull'uso illecito del GPS su un dipendente e GDPR.
 *
 * L'Islanda fa parte del SEE e applica il GDPR; ha un'unica autorita nazionale,
 * il Persónuvernd, senza ripartizione regionale. Nessun numero, URL o autorita e
 * inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_REGOLE_50_2023 = {
  titolo:
    'Regole n. 50/2023 sulla sorveglianza elettronica (Gazzetta ufficiale)',
  url: 'https://island.is/stjornartidindi/nr/00ede50f-ff8e-4a44-9bb1-019e440b32e1',
};
const FONTE_REGOLE_1329_2025 = {
  titolo:
    'Regole 1329/2025 di Persónuvernd (modifica delle Regole 50/2023, art. 3: 90 giorni)',
  url: 'https://adverts.stjornartidindi.is/B_nr_1329_2025.pdf',
};
const FONTE_PERSUVERND_GPS = {
  titolo:
    'Persónuvernd (Garante islandese), FAQ sul GPS e i dispositivi di localizzazione',
  url: 'https://island.is/s/personuvernd/okuritar',
};
const FONTE_PERSUVERND_DPIA = {
  titolo:
    'Persónuvernd, lista dei trattamenti che richiedono una DPIA (Auglýsing nr. 828/2019)',
  url: 'https://island.is/stjornartidindi/nr/7034a38d-0b61-4f7a-b3ef-a63252df0d6e',
};
const FONTE_PERSUVERND_RECLAMO = {
  titolo: 'Persónuvernd, presentare un reclamo',
  url: 'https://island.is/kvortun-til-personuverndar',
};
const FONTE_PERSUVERND_ISLANDSPOSTUR = {
  titolo:
    'Persónuvernd, decisione Islandspostur (uso illecito del GPS su un dipendente)',
  url: 'https://island.is/s/personuvernd/urskurdir-akvardanir-og-alit/rafraen-voktun-af-halfu-islandsposts',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const islanda: SchedaPaese = {
  codiceISO: 'IS',
  slugCanonico: 'islanda',
  nome: 'Islanda',
  nomi: {
    it: 'Islanda',
    en: 'Iceland',
    'en-us': 'Iceland',
    'en-gb': 'Iceland',
    'en-au': 'Iceland',
    'en-ie': 'Iceland',
    'en-ca': 'Iceland',
    de: 'Island',
    nl: 'IJsland',
    fr: 'Islande',
    es: 'Islandia',
    pt: 'Islândia',
    da: 'Island',
    sv: 'Island',
    nb: 'Island',
    ru: 'Исландия',
  },
  bandiera: '🇮🇸',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: {
      it: 'Persónuvernd (Garante islandese per la protezione dei dati)',
      en: 'Persónuvernd (Icelandic Data Protection Authority)',
      de: 'Persónuvernd (Isländische Datenschutzbehörde)',
      fr: 'Persónuvernd (Autorité islandaise de protection des données)',
      es: 'Persónuvernd (Autoridad islandesa de protección de datos)',
      nl: 'Persónuvernd (IJslandse gegevensbeschermingsautoriteit)',
      pt: 'Persónuvernd (Autoridade islandesa de proteção de dados)',
      da: 'Persónuvernd (Islandsk databeskyttelsesmyndighed)',
      sv: 'Persónuvernd (Isländska dataskyddsmyndigheten)',
      nb: 'Persónuvernd (Islandsk datatilsyn)',
      ru: 'Persónuvernd (Исландский орган по защите данных)',
    },
    portale: FONTE_PERSUVERND_RECLAMO.url,
    urlFonte: 'https://island.is/s/personuvernd',
    verificatoIl: '2026-09-30',
    note: {
      it: "L'Islanda (SEE) ha un'unica autorità nazionale, il Persónuvernd; nessuna ripartizione regionale.",
      en: 'Iceland (EEA) has a single national authority, the Persónuvernd; no regional breakdown.',
      de: 'Island (EWR) hat eine einzige nationale Behörde, die Persónuvernd; keine regionale Aufteilung.',
      fr: 'L’Islande (EEE) dispose d’une seule autorité nationale, le Persónuvernd ; aucune répartition régionale.',
      es: 'Islandia (EEE) tiene una única autoridad nacional, el Persónuvernd; sin reparto regional.',
      pt: "A Islândia (EEE) tem uma única autoridade nacional, a Persónuvernd; não existe repartição regional.",
      da: 'Island (EØS) har én national myndighed, Persónuvernd; der er ingen regional opdeling.',
      sv: 'Island (EES) har en enda nationell myndighet, Persónuvernd; det finns ingen regional uppdelning.',
      nb: 'Island (EØS) har én nasjonal myndighet, Persónuvernd; det finnes ingen regional inndeling.',
      nl: 'IJsland (EER) heeft een enkele nationale autoriteit, de Persónuvernd; geen regionale opdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: "Informazione preventiva ai lavoratori e cartello sull'area sorvegliata (Regole 50/2023)",
        en: 'Prior information to workers and a sign about the monitored area (Rules 50/2023)',
        de: 'Vorherige Information der Beschäftigten und ein Schild zum überwachten Bereich (Regeln 50/2023)',
        fr: 'Information préalable des travailleurs et panneau sur la zone surveillée (Règles 50/2023)',
        es: 'Información previa a los trabajadores y cartel sobre la zona vigilada (Reglas 50/2023)',
        pt: "Informação prévia aos trabalhadores e aviso na área vigiada (Regras 50/2023)",
        da: 'Forudgående information til medarbejderne og et skilt om det overvågede område (regler 50/2023)',
        sv: 'Information i förväg till arbetstagarna och skylt om det övervakade området (regler 50/2023)',
        nb: 'Forhåndsinformasjon til de ansatte og et skilt om det overvåkede området (reglene 50/2023)',
        nl: 'Voorafgaande informatie aan werknemers en een bord over het bewaakte gebied (Regels 50/2023)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La sorveglianza elettronica richiede una finalità chiara e lecita; chi sorveglia deve dare avviso con un cartello o in altro modo evidente prima che la persona entri nell'area sorvegliata o che la sorveglianza inizi (art. 8 c. 1). Ai gruppi che di norma frequentano l'area, come il personale, le informazioni degli artt. 12-13 GDPR vanno inoltre fornite in modo dimostrabile (art. 8 c. 3); per il GPS rimanda a questa regola l'art. 13 c. 3.",
        en: 'Electronic monitoring requires a clear and lawful purpose; whoever monitors must give notice with a sign or in another evident way before the person enters the monitored area or the monitoring starts (art. 8(1)). The groups who normally use the area, such as staff, must also be given the information required by arts. 12-13 GDPR in a demonstrable way (art. 8(3)); for GPS, art. 13(3) refers back to this rule.',
        de: 'Die elektronische Überwachung erfordert einen klaren und rechtmassigen Zweck; wer überwacht, muss durch ein Schild oder auf andere offensichtliche Weise Hinweis geben, bevor die Person den überwachten Bereich betritt oder die Überwachung beginnt (Art. 8 Abs. 1). Den Gruppen, die den Bereich üblicherweise nutzen, etwa dem Personal, sind die Informationen nach Art. 12-13 DSGVO zudem nachweisbar zu geben (Art. 8 Abs. 3); für GPS verweist Art. 13 Abs. 3 auf diese Regel.',
        fr: 'La surveillance électronique exige une finalité claire et licite ; celui qui surveille doit en avertir par un panneau ou d’une autre manière évidente avant que la personne entre dans la zone surveillée ou que la surveillance commence (art. 8 al. 1). Les groupes qui fréquentent habituellement la zone, comme le personnel, doivent en outre recevoir de manière démontrable les informations des art. 12-13 RGPD (art. 8 al. 3) ; pour le GPS, l’art. 13 al. 3 renvoie à cette règle.',
        es: 'La vigilancia electrónica exige una finalidad clara y lícita; quien vigila debe avisar con un cartel o de otro modo evidente antes de que la persona entre en la zona vigilada o de que empiece la vigilancia (art. 8.1). A los grupos que suelen frecuentar la zona, como el personal, se les debe además dar de forma demostrable la información de los arts. 12-13 RGPD (art. 8.3); para el GPS, el art. 13.3 remite a esta regla.',
        pt: "A vigilância eletrónica exige uma finalidade clara e lícita; quem vigia deve avisar, através de um aviso ou de outro meio evidente, antes de a pessoa entrar na área vigiada ou de a vigilância começar (art. 8, n.º 1). Aos grupos que habitualmente frequentam a área, como o pessoal, as informações dos arts. 12.º e 13.º do RGPD devem ainda ser prestadas de forma comprovável (art. 8, n.º 3); para o GPS, o art. 13, n.º 3, remete para esta regra.",
        da: 'Elektronisk overvågning kræver et klart og lovligt formål; den, der overvåger, skal give besked med et skilt eller på anden tydelig måde, før personen træder ind i det overvågede område, eller før overvågningen begynder (art. 8, stk. 1). Grupper, der normalt færdes i området, som f.eks. personalet, skal desuden have oplysningerne efter art. 12-13 i GDPR på en måde, der kan dokumenteres (art. 8, stk. 3); for GPS henviser art. 13, stk. 3, til denne regel.',
        sv: 'Elektronisk övervakning kräver ett tydligt och lagligt ändamål; den som övervakar måste ge besked med en skylt eller på annat tydligt sätt innan personen går in i det övervakade området eller övervakningen börjar (art. 8 st. 1). Grupper som vanligen vistas i området, till exempel personalen, ska dessutom få informationen enligt art. 12-13 GDPR på ett sätt som kan styrkas (art. 8 st. 3); för GPS hänvisar art. 13 st. 3 till denna regel.',
        nb: 'Elektronisk overvåking krever et klart og lovlig formål; den som overvåker, må gi beskjed med et skilt eller på en annen tydelig måte før personen går inn i det overvåkede området, eller før overvåkingen starter (art. 8 nr. 1). Grupper som vanligvis ferdes i området, for eksempel de ansatte, må i tillegg få opplysningene etter art. 12-13 i GDPR på en måte som kan dokumenteres (art. 8 nr. 3); for GPS henviser art. 13 nr. 3 til denne regelen.',
        nl: 'Elektronisch toezicht vereist een duidelijk en rechtmatig doel; wie toezicht houdt, moet dit kenbaar maken met een bord of op een andere duidelijke wijze voordat de persoon het bewaakte gebied betreedt of het toezicht begint (art. 8 lid 1). Groepen die het gebied gewoonlijk gebruiken, zoals personeel, moeten bovendien aantoonbaar de informatie van art. 12-13 AVG krijgen (art. 8 lid 3); voor gps verwijst art. 13 lid 3 naar deze regel.',
      },
      fonte: FONTE_REGOLE_50_2023,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: 'Autorisation préalable d’une autorité avant l’installation',
        es: 'Autorización previa de una autoridad antes de instalar',
        pt: "Autorização prévia de uma autoridade antes da instalação",
        da: 'Forudgående tilladelse fra en myndighed før installation',
        sv: 'Förhandstillstånd från en myndighet innan installation',
        nb: 'Forhåndstillatelse fra en myndighet før installasjon',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva del Persónuvernd; il titolare valuta da sé e documenta la liceità, con DPIA quando richiesta.",
        en: 'No prior authorisation from the Persónuvernd is required; the controller assesses on its own and documents lawfulness, with a DPIA where required.',
        de: 'Eine vorherige Genehmigung der Persónuvernd ist nicht erforderlich; der Verantwortliche beurteilt selbst und dokumentiert die Rechtmassigkeit, mit einer DSFA, sofern erforderlich.',
        fr: 'Aucune autorisation préalable du Persónuvernd n’est requise ; le responsable évalue lui-même et documente la licéité, avec une AIPD lorsque cela est requis.',
        es: 'No se necesita autorización previa del Persónuvernd; el responsable evalúa por sí mismo y documenta la licitud, con una EIPD cuando se requiera.',
        pt: "Não é necessária autorização prévia da Persónuvernd; o responsável pelo tratamento avalia por si e documenta a licitude, com DPIA quando exigida.",
        da: 'Der kræves ingen forudgående tilladelse fra Persónuvernd; den dataansvarlige vurderer selv og dokumenterer lovligheden, med DPIA, når det kræves.',
        sv: 'Något förhandstillstånd från Persónuvernd krävs inte; den personuppgiftsansvarige bedömer själv och dokumenterar lagligheten, med DPIA när det krävs.',
        nb: 'Det kreves ingen forhåndstillatelse fra Persónuvernd; den behandlingsansvarlige vurderer selv og dokumenterer at behandlingen er lovlig, med DPIA når det kreves.',
        nl: 'Er is geen voorafgaande toestemming van de Persónuvernd nodig; de verwerkingsverantwoordelijke beoordeelt zelf en documenteert de rechtmatigheid, met een DPIA waar vereist.',
      },
      fonte: FONTE_PERSUVERND_GPS,
    },
    {
      voce: {
        it: 'Base = interesse legittimo con test documentato, non il consenso',
        en: 'Basis = legitimate interest with a documented test, not consent',
        de: 'Grundlage = berechtigtes Interesse mit dokumentierter Abwägung, nicht Einwilligung',
        fr: 'Base = intérêt légitime avec un test documenté, pas le consentement',
        es: 'Base = interés legítimo con una prueba documentada, no el consentimiento',
        pt: "Base = interesse legítimo com teste documentado, não o consentimento",
        da: 'Grundlag = legitim interesse med en dokumenteret test, ikke samtykke',
        sv: 'Grund = berättigat intresse med ett dokumenterat test, inte samtycke',
        nb: 'Grunnlag = berettiget interesse med en dokumentert vurdering, ikke samtykke',
        nl: 'Grondslag = gerechtvaardigd belang met een gedocumenteerde afweging, niet toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: "La base più pertinente è l'interesse legittimo del datore; il datore deve svolgere una valutazione documentata di prevalenza rispetto ai diritti dei lavoratori. Il consenso di norma non è valido nel rapporto di lavoro.",
        en: 'The most relevant basis is the employer legitimate interest; the employer must carry out a documented balancing assessment against workers rights. Consent is generally not valid in the employment relationship.',
        de: 'Die einschlagigste Grundlage ist das berechtigte Interesse des Arbeitgebers; der Arbeitgeber muss eine dokumentierte Abwägung gegenüber den Rechten der Beschäftigten vornehmen. Die Einwilligung ist im Arbeitsverhältnis in der Regel nicht gültig.',
        fr: 'La base la plus pertinente est l’intérêt légitime de l’employeur ; l’employeur doit réaliser une évaluation documentée de prévalence par rapport aux droits des travailleurs. Le consentement n’est en règle générale pas valable dans la relation de travail.',
        es: 'La base más pertinente es el interés legítimo del empleador; el empleador debe realizar una valoración documentada de prevalencia frente a los derechos de los trabajadores. El consentimiento por lo general no es válido en la relación laboral.',
        pt: "A base mais pertinente é o interesse legítimo da entidade empregadora; esta deve realizar uma avaliação documentada de prevalência face aos direitos dos trabalhadores. Em regra, o consentimento não é válido na relação de trabalho.",
        da: 'Det mest relevante grundlag er arbejdsgiverens legitime interesse; arbejdsgiveren skal foretage en dokumenteret afvejning i forhold til medarbejdernes rettigheder. Samtykke er som regel ikke gyldigt i et ansættelsesforhold.',
        sv: 'Den mest relevanta grunden är arbetsgivarens berättigade intresse; arbetsgivaren måste göra en dokumenterad bedömning av om intresset väger tyngre än arbetstagarnas rättigheter. Samtycke är i regel inte giltigt i anställningsförhållandet.',
        nb: 'Det mest relevante grunnlaget er arbeidsgiverens berettigede interesse; arbeidsgiveren må gjøre en dokumentert avveining mot de ansattes rettigheter. Samtykke er som regel ikke gyldig i et arbeidsforhold.',
        nl: 'De meest relevante grondslag is het gerechtvaardigd belang van de werkgever; de werkgever moet een gedocumenteerde belangenafweging maken ten opzichte van de rechten van de werknemers. Toestemming is in de arbeidsrelatie doorgaans niet geldig.',
      },
      fonte: FONTE_PERSUVERND_GPS,
    },
    {
      voce: {
        it: "GPS solo se c'è un bisogno particolare; evitare la sorveglianza continua; disattivabile se il veicolo è ammesso anche per uso privato",
        en: 'GPS only if there is a particular need; avoid continuous monitoring; switchable off if the vehicle may also be used privately',
        de: 'GPS nur bei besonderem Bedarf; ständige Überwachung vermeiden; abschaltbar, wenn das Fahrzeug auch privat genutzt werden darf',
        fr: 'GPS uniquement en cas de besoin particulier ; éviter la surveillance continue ; désactivable si le véhicule peut aussi servir à titre privé',
        es: 'GPS solo si hay una necesidad particular; evitar la vigilancia continua; desactivable si el vehículo puede usarse también a título privado',
        pt: "GPS apenas se houver uma necessidade particular; evitar a vigilância contínua; desativável se o veículo for também admitido para uso privado",
        da: 'GPS kun, hvis der er et særligt behov; undgå kontinuerlig overvågning; kan slås fra, hvis køretøjet også må bruges privat',
        sv: 'GPS endast om det finns ett särskilt behov; undvik ständig övervakning; ska kunna stängas av om fordonet även får användas privat',
        nb: 'GPS bare hvis det er et særlig behov; unngå kontinuerlig overvåking; skal kunne slås av hvis kjøretøyet også kan brukes privat',
        nl: 'GPS alleen bij een bijzondere behoefte; doorlopend toezicht vermijden; uitschakelbaar als het voertuig ook privé mag worden gebruikt',
      },
      risposta: 'si',
      dettaglio: {
        it: "L'uso di cronotachigrafi o dispositivi di localizzazione richiede un bisogno particolare; prima va verificato se bastano mezzi meno invasivi, senza andare oltre lo stretto necessario (art. 4); se il veicolo può essere usato anche in privato, deve essere possibile spegnere l'apparecchio e il lavoratore va informato in modo dimostrabile (art. 13 c. 2).",
        en: 'The use of tachographs or location devices requires a particular need; first check whether less intrusive means suffice, and go no further than strictly necessary (art. 4); if the vehicle may also be used privately, it must be possible to switch the device off and the worker must be informed in a demonstrable way (art. 13(2)).',
        de: 'Die Nutzung von Fahrtenschreibern oder Ortungsgeraten erfordert einen besonderen Bedarf; zuerst ist zu prüfen, ob mildere Mittel genügen, und es darf nicht über das unbedingt Nötige hinausgegangen werden (Art. 4); darf das Fahrzeug auch privat genutzt werden, muss sich das Gerät abschalten lassen und der Beschäftigte ist nachweisbar zu informieren (Art. 13 Abs. 2).',
        fr: 'L’utilisation de chronotachygraphes ou de dispositifs de localisation exige un besoin particulier ; il faut d’abord vérifier si des moyens moins intrusifs suffisent, sans aller au-delà du strict nécessaire (art. 4) ; si le véhicule peut aussi servir à titre privé, il doit être possible d’éteindre l’appareil et le travailleur doit être informé de manière démontrable (art. 13 al. 2).',
        es: 'El uso de tacógrafos o dispositivos de localización exige una necesidad particular; primero hay que comprobar si bastan medios menos intrusivos, sin ir más allá de lo estrictamente necesario (art. 4); si el vehículo puede usarse también a título privado, debe poder apagarse el dispositivo y el trabajador debe ser informado de forma demostrable (art. 13.2).',
        pt: "A utilização de tacógrafos ou de dispositivos de localização exige uma necessidade particular; deve verificar-se previamente se bastam meios menos invasivos, sem ir além do estritamente necessário (art. 4); se o veículo puder ser utilizado também em privado, deve ser possível desligar o aparelho e o trabalhador deve ser informado de forma comprovável (art. 13, n.º 2).",
        da: 'Brug af færdselsskriver eller lokaliseringsenheder kræver et særligt behov; først skal det undersøges, om mindre indgribende midler er nok, uden at gå videre end strengt nødvendigt (art. 4); hvis køretøjet også må bruges privat, skal det være muligt at slå enheden fra, og medarbejderen skal informeres på en måde, der kan dokumenteres (art. 13, stk. 2).',
        sv: 'Användning av färdskrivare eller lokaliseringsenheter kräver ett särskilt behov; först ska det kontrolleras om mindre ingripande medel räcker, utan att gå längre än strikt nödvändigt (art. 4); om fordonet även får användas privat måste det vara möjligt att stänga av enheten och arbetstagaren ska informeras på ett sätt som kan styrkas (art. 13 st. 2).',
        nb: 'Bruk av fartsskrivere eller lokaliseringsenheter krever et særlig behov; først må det vurderes om mindre inngripende midler er nok, uten å gå lenger enn det som er strengt nødvendig (art. 4); hvis kjøretøyet også kan brukes privat, må det være mulig å slå av enheten, og den ansatte må informeres på en måte som kan dokumenteres (art. 13 nr. 2).',
        nl: 'Het gebruik van tachografen of locatieapparatuur vereist een bijzondere behoefte; eerst moet worden nagegaan of minder ingrijpende middelen volstaan, zonder verder te gaan dan strikt noodzakelijk (art. 4); mag het voertuig ook privé worden gebruikt, dan moet het apparaat kunnen worden uitgeschakeld en moet de werknemer aantoonbaar worden geïnformeerd (art. 13 lid 2).',
      },
      fonte: FONTE_PERSUVERND_GPS,
    },
    {
      voce: {
        it: 'Conservazione dei dati della sorveglianza elettronica: non oltre il necessario e comunque non oltre 90 giorni, salvo eccezioni',
        en: 'Retention of electronic monitoring data: no longer than necessary and in any case no longer than 90 days, save for exceptions',
        de: 'Speicherung der Daten der elektronischen Überwachung: nicht länger als nötig und jedenfalls nicht länger als 90 Tage, außer in Ausnahmefällen',
        fr: 'Conservation des données de la surveillance électronique : pas plus longtemps que nécessaire et en tout cas pas plus de 90 jours, sauf exceptions',
        es: 'Conservación de los datos de la vigilancia electrónica: no más de lo necesario y en todo caso no más de 90 días, salvo excepciones',
        pt: "Conservação dos dados da vigilância eletrónica: não além do necessário e, em todo o caso, não mais de 90 dias, salvo exceções",
        da: 'Opbevaring af data fra elektronisk overvågning: ikke længere end nødvendigt og under alle omstændigheder højst 90 dage, med forbehold for undtagelser',
        sv: 'Lagring av uppgifter från elektronisk övervakning: inte längre än nödvändigt och i inget fall längre än 90 dagar, med undantag',
        nb: 'Lagring av data fra elektronisk overvåking: ikke lenger enn nødvendig og under ingen omstendighet over 90 dager, med forbehold for unntak',
        nl: 'Bewaring van gegevens van elektronisch toezicht: niet langer dan nodig en in elk geval niet langer dan 90 dagen, behoudens uitzonderingen',
      },
      risposta: 'si',
      dettaglio: {
        it: "I dati della sorveglianza elettronica non si conservano oltre il necessario per la finalità e comunque non oltre 90 giorni (Regole 50/2023, art. 11 c. 2; il termine è stato portato da 30 a 90 giorni dalle Regole 1329/2025, art. 3). Eccezioni: consenso della persona a un periodo più lungo; registri delle operazioni o copie di sicurezza; necessità di accertare, esercitare o difendere un diritto in giudizio; autorizzazione del Persónuvernd; sicurezza dello Stato.",
        en: 'Electronic monitoring data must not be kept longer than necessary for the purpose and in any case not longer than 90 days (Rules 50/2023, art. 11(2); the limit was raised from 30 to 90 days by Rules 1329/2025, art. 3). Exceptions: consent of the person to a longer period; logs of operations or security copies; the need to establish, exercise or defend a legal claim; authorisation from the Persónuvernd; state security.',
        de: 'Daten der elektronischen Überwachung dürfen nicht länger als für den Zweck nötig und jedenfalls nicht länger als 90 Tage gespeichert werden (Regeln 50/2023, Art. 11 Abs. 2; die Frist wurde durch die Regeln 1329/2025, Art. 3, von 30 auf 90 Tage angehoben). Ausnahmen: Einwilligung der Person in einen längeren Zeitraum; Protokolle von Vorgängen oder Sicherungskopien; Notwendigkeit, Rechtsansprüche festzustellen, auszuüben oder zu verteidigen; Genehmigung der Persónuvernd; Staatssicherheit.',
        fr: 'Les données de la surveillance électronique ne doivent pas être conservées plus longtemps que nécessaire pour la finalité et en tout cas pas plus de 90 jours (Règles 50/2023, art. 11 al. 2 ; le délai a été porté de 30 à 90 jours par les Règles 1329/2025, art. 3). Exceptions : consentement de la personne à une durée plus longue ; journaux des opérations ou copies de sécurité ; nécessité de constater, exercer ou défendre un droit en justice ; autorisation du Persónuvernd ; sûreté de l’État.',
        es: 'Los datos de la vigilancia electrónica no se conservan más allá de lo necesario para la finalidad y en todo caso no más de 90 días (Reglas 50/2023, art. 11.2; el plazo se elevó de 30 a 90 días por las Reglas 1329/2025, art. 3). Excepciones: consentimiento de la persona a un período más largo; registros de operaciones o copias de seguridad; necesidad de constatar, ejercer o defender un derecho en juicio; autorización del Persónuvernd; seguridad del Estado.',
        pt: "Os dados da vigilância eletrónica não são conservados além do necessário para a finalidade e, em todo o caso, não mais de 90 dias (Regras 50/2023, art. 11, n.º 2; o prazo foi alargado de 30 para 90 dias pelas Regras 1329/2025, art. 3). Exceções: consentimento da pessoa para um período mais longo; registos das operações ou cópias de segurança; necessidade de declarar, exercer ou defender um direito em juízo; autorização da Persónuvernd; segurança do Estado.",
        da: 'Data fra elektronisk overvågning må ikke opbevares længere end nødvendigt for formålet og under alle omstændigheder ikke ud over 90 dage (regler 50/2023, art. 11, stk. 2; fristen blev forlænget fra 30 til 90 dage ved regler 1329/2025, art. 3). Undtagelser: personens samtykke til en længere periode; logfiler over handlinger eller sikkerhedskopier; behov for at fastslå, udøve eller forsvare et retskrav; tilladelse fra Persónuvernd; statens sikkerhed.',
        sv: 'Uppgifter från elektronisk övervakning lagras inte längre än vad som är nödvändigt för ändamålet och i inget fall längre än 90 dagar (regler 50/2023, art. 11 st. 2; gränsen höjdes från 30 till 90 dagar genom regler 1329/2025, art. 3). Undantag: personens samtycke till en längre period; loggar över åtgärder eller säkerhetskopior; behov av att fastställa, göra gällande eller försvara ett rättsligt anspråk; tillstånd från Persónuvernd; statens säkerhet.',
        nb: 'Data fra elektronisk overvåking lagres ikke lenger enn det som er nødvendig for formålet, og under ingen omstendighet over 90 dager (reglene 50/2023, art. 11 nr. 2; fristen ble økt fra 30 til 90 dager ved reglene 1329/2025, art. 3). Unntak: personens samtykke til en lengre periode; logger over handlinger eller sikkerhetskopier; behov for å fastslå, utøve eller forsvare et rettskrav; tillatelse fra Persónuvernd; statens sikkerhet.',
        nl: 'Gegevens van elektronisch toezicht worden niet langer bewaard dan nodig voor het doel en in elk geval niet langer dan 90 dagen (Regels 50/2023, art. 11 lid 2; de termijn is door Regels 1329/2025, art. 3, van 30 naar 90 dagen gebracht). Uitzonderingen: toestemming van de persoon voor een langere periode; logboeken van handelingen of back-ups; noodzaak om een rechtsvordering vast te stellen, uit te oefenen of te verdedigen; toestemming van de Persónuvernd; staatsveiligheid.',
      },
      fonte: FONTE_REGOLE_1329_2025,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio del rendimento o del comportamento dei dipendenti (lista Persónuvernd)",
        en: 'Impact assessment (DPIA) for monitoring employees performance or behaviour (Persónuvernd list)',
        de: 'Datenschutz-Folgenabschätzung (DSFA) zur Überwachung der Leistung oder des Verhaltens der Beschäftigten (Persónuvernd-Liste)',
        fr: 'Analyse d’impact (AIPD) pour le suivi du rendement ou du comportement des salariés (liste Persónuvernd)',
        es: 'Evaluación de impacto (EIPD) para el seguimiento del rendimiento o el comportamiento de los empleados (lista Persónuvernd)',
        pt: "Avaliação de impacto (DPIA) para a monitorização do desempenho ou do comportamento dos trabalhadores (lista da Persónuvernd)",
        da: 'Konsekvensanalyse (DPIA) ved overvågning af medarbejdernes præstationer eller adfærd (Persónuvernds liste)',
        sv: 'Konsekvensbedömning (DPIA) för övervakning av de anställdas prestation eller beteende (Persónuvernds lista)',
        nb: 'Personvernkonsekvensvurdering (DPIA) ved overvåking av de ansattes prestasjoner eller atferd (Persónuvernds liste)',
        nl: 'Effectbeoordeling (DPIA) voor het monitoren van prestaties of gedrag van werknemers (Persónuvernd-lijst)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista Persónuvernd include il trattamento che comporta il monitoraggio del rendimento o del comportamento dei dipendenti tra i casi che richiedono sempre una valutazione d'impatto.",
        en: 'The Persónuvernd list includes processing that involves monitoring employees performance or behaviour among the cases that always require an impact assessment.',
        de: 'Die Persónuvernd-Liste führt die Verarbeitung, die mit der Überwachung der Leistung oder des Verhaltens der Beschäftigten verbunden ist, unter den Fällen auf, die stets eine Folgenabschätzung erfordern.',
        fr: 'La liste Persónuvernd inclut le traitement impliquant le suivi du rendement ou du comportement des salariés parmi les cas qui exigent toujours une analyse d’impact.',
        es: 'La lista Persónuvernd incluye el tratamiento que implica el seguimiento del rendimiento o el comportamiento de los empleados entre los casos que siempre requieren una evaluación de impacto.',
        pt: "A lista da Persónuvernd inclui o tratamento que implica a monitorização do desempenho ou do comportamento dos trabalhadores entre os casos que exigem sempre uma avaliação de impacto.",
        da: 'Persónuvernds liste medtager behandling, der indebærer overvågning af medarbejdernes præstationer eller adfærd, blandt de tilfælde, der altid kræver en konsekvensanalyse.',
        sv: 'Persónuvernds lista omfattar behandling som innebär övervakning av de anställdas prestation eller beteende bland de fall som alltid kräver en konsekvensbedömning.',
        nb: 'Persónuvernds liste tar med behandling som innebærer overvåking av de ansattes prestasjoner eller atferd blant tilfellene som alltid krever en personvernkonsekvensvurdering.',
        nl: 'De Persónuvernd-lijst rekent de verwerking die het monitoren van prestaties of gedrag van werknemers omvat tot de gevallen die altijd een effectbeoordeling vereisen.',
      },
      fonte: FONTE_PERSUVERND_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Verifica un bisogno particolare e una finalità chiara e lecita per il GPS (Regole 50/2023).',
        en: 'Verify a particular need and a clear and lawful purpose for the GPS (Rules 50/2023).',
        de: 'Prüfen Sie einen besonderen Bedarf und einen klaren und rechtmassigen Zweck für das GPS (Regeln 50/2023).',
        fr: 'Vérifiez un besoin particulier et une finalité claire et licite pour le GPS (Règles 50/2023).',
        es: 'Verifica una necesidad particular y una finalidad clara y lícita para el GPS (Reglas 50/2023).',
        pt: "Verifique uma necessidade particular e uma finalidade clara e lícita para o GPS (Regras 50/2023).",
        da: "Kontrollér, at der er et særligt behov og et klart og lovligt formål med GPS'en (regler 50/2023).",
        sv: "Kontrollera att det finns ett särskilt behov och ett tydligt och lagligt ändamål för GPS (regler 50/2023).",
        nb: 'Kontroller at det finnes et særlig behov og et klart og lovlig formål med GPS-en (reglene 50/2023).',
        nl: 'Controleer een bijzondere behoefte en een duidelijk en rechtmatig doel voor de GPS (Regels 50/2023).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo) e svolgi la valutazione documentata.',
        en: 'Identify a valid legal basis (legitimate interest) and carry out the documented assessment.',
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage (berechtigtes Interesse) und nehmen Sie die dokumentierte Abwägung vor.',
        fr: 'Déterminez une base juridique valable (intérêt légitime) et réalisez l’évaluation documentée.',
        es: 'Identifica una base jurídica válida (interés legítimo) y realiza la valoración documentada.',
        pt: "Identifique uma base jurídica válida (interesse legítimo) e realize a avaliação documentada.",
        da: 'Find et gyldigt retsgrundlag (legitim interesse), og gennemfør den dokumenterede vurdering.',
        sv: 'Fastställ en giltig rättslig grund (berättigat intresse) och genomför den dokumenterade bedömningen.',
        nb: 'Finn et gyldig rettslig grunnlag (berettiget interesse), og gjennomfør den dokumenterte vurderingen.',
        nl: 'Bepaal een geldige rechtsgrondslag (gerechtvaardigd belang) en voer de gedocumenteerde afweging uit.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio dei dipendenti.",
        en: 'Carry out the impact assessment (DPIA) for monitoring employees.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) für die Überwachung der Beschäftigten durch.',
        fr: 'Réalisez l’analyse d’impact (AIPD) pour le suivi des salariés.',
        es: 'Realiza la evaluación de impacto (EIPD) para el seguimiento de los empleados.',
        pt: "Realize a avaliação de impacto (DPIA) para a monitorização dos trabalhadores.",
        da: 'Gennemfør konsekvensanalysen (DPIA) for overvågning af medarbejdere.',
        sv: 'Genomför konsekvensbedömningen (DPIA) för övervakning av de anställda.',
        nb: 'Gjennomfør personvernkonsekvensvurderingen (DPIA) for overvåking av ansatte.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor het monitoren van werknemers.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Informa i lavoratori in anticipo e segnala l'area sorvegliata.",
        en: 'Inform workers in advance and signpost the monitored area.',
        de: 'Informieren Sie die Beschäftigten im Voraus und kennzeichnen Sie den überwachten Bereich.',
        fr: 'Informez les travailleurs à l’avance et signalez la zone surveillée.',
        es: 'Informa a los trabajadores con antelación y señaliza la zona vigilada.',
        pt: "Informe os trabalhadores com antecedência e assinale a área vigiada.",
        da: 'Informér medarbejderne på forhånd, og sæt skilte op ved det overvågede område.',
        sv: 'Informera arbetstagarna i förväg och skylta det övervakade området.',
        nb: 'Informer de ansatte på forhånd, og merk det overvåkede området med skilt.',
        nl: 'Informeer werknemers vooraf en markeer het bewaakte gebied.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: niente sorveglianza continua, apparecchio disattivabile se il veicolo può essere usato in privato, niente riuso per altre finalità senza preavviso.',
        en: 'Configure the system: no continuous monitoring, device switchable off if the vehicle may be used privately, no reuse for other purposes without prior notice.',
        de: 'Konfigurieren Sie das System: keine ständige Überwachung, Gerät abschaltbar, wenn das Fahrzeug privat genutzt werden darf, keine Weiterverwendung für andere Zwecke ohne vorherige Ankündigung.',
        fr: 'Configurez le système : pas de surveillance continue, appareil désactivable si le véhicule peut servir à titre privé, pas de réutilisation à d’autres fins sans préavis.',
        es: 'Configura el sistema: sin vigilancia continua, dispositivo desactivable si el vehículo puede usarse a título privado, sin reutilización para otros fines sin previo aviso.',
        pt: "Configure o sistema: sem vigilância contínua, aparelho desativável se o veículo puder ser utilizado em privado, sem reutilização para outras finalidades sem aviso prévio.",
        da: 'Konfigurér systemet: ingen kontinuerlig overvågning, enhed der kan slås fra, hvis køretøjet må bruges privat, ingen genbrug til andre formål uden forudgående varsel.',
        sv: 'Konfigurera systemet: ingen ständig övervakning, enhet som kan stängas av om fordonet får användas privat, ingen återanvändning för andra ändamål utan förhandsinformation.',
        nb: 'Konfigurer systemet: ingen kontinuerlig overvåking, enhet som kan slås av hvis kjøretøyet kan brukes privat, ingen gjenbruk til andre formål uten forhåndsvarsel.',
        nl: 'Configureer het systeem: geen doorlopend toezicht, apparaat uitschakelbaar als het voertuig privé mag worden gebruikt, geen hergebruik voor andere doeleinden zonder voorafgaande kennisgeving.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'Se cambi sistema o software di monitoraggio, aggiorna e riconsegna l’informativa, e verifica se devi di nuovo informare o consultare i rappresentanti dei lavoratori, dove la legge lo prevede. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: l’informativa consegnata prima non basta.',
        en: 'If you switch systems: when you change your monitoring system or software, update and re-issue the privacy notice, and check whether you must inform or consult the workers\' representatives again, where the law requires it. The provider (data processor), the data collected and the methods often change: the one provided earlier is not enough.',
        de: 'Bei Systemwechsel: Wenn Sie Ihr Überwachungssystem oder Ihre Software wechseln, aktualisieren Sie die Datenschutzinformation und händigen Sie sie erneut aus, und prüfen Sie, ob Sie die Arbeitnehmervertretung erneut informieren oder beteiligen müssen, wo das Gesetz es vorsieht. Anbieter (Auftragsverarbeiter), erhobene Daten und Modalitäten ändern sich oft: die zuvor ausgehändigte genügt nicht.',
        fr: 'En cas de changement de système : si vous changez de système ou de logiciel de surveillance, mettez à jour et remettez l’information, et vérifiez si vous devez de nouveau informer ou consulter les représentants du personnel, lorsque la loi le prévoit. Le fournisseur (sous-traitant), les données collectées et les modalités changent souvent : celle remise auparavant ne suffit pas.',
        es: 'Si cambias de sistema o software de monitorización, actualiza y vuelve a entregar la información, y comprueba si debes volver a informar o consultar a los representantes de los trabajadores, cuando la ley lo prevé. A menudo cambian el proveedor (encargado del tratamiento), los datos recogidos y las modalidades: la información entregada antes no basta.',
        pt: "Se mudar de sistema ou de software de monitorização, atualize e entregue de novo a informação e verifique se tem de voltar a informar ou a consultar os representantes dos trabalhadores, nos casos em que a lei o prevê. Muitas vezes mudam o fornecedor (subcontratante), os dados recolhidos e as modalidades: a informação entregue anteriormente não basta.",
        da: 'Hvis du skifter system eller overvågningssoftware, skal du opdatere og udlevere privatlivsinformationen igen og tjekke, om du igen skal informere eller høre medarbejderrepræsentanterne, hvor loven kræver det. Ofte skifter leverandøren (databehandleren), de indsamlede data og metoderne: den information, der blev udleveret tidligere, er ikke nok.',
        sv: 'Om du byter system eller övervakningsprogram ska du uppdatera och lämna ut integritetsinformationen på nytt och kontrollera om du på nytt måste informera eller höra de anställdas företrädare, där lagen kräver det. Ofta ändras leverantören (personuppgiftsbiträdet), de insamlade uppgifterna och metoderna: den information som lämnades tidigare räcker inte.',
        nb: 'Hvis du bytter system eller overvåkingsprogramvare, må du oppdatere og utlevere personvernerklæringen på nytt, og sjekke om du igjen må informere eller rådføre deg med de ansattes representanter, der loven krever det. Ofte endres leverandøren (databehandleren), dataene som samles inn og metodene: informasjonen som ble utlevert tidligere, er ikke nok.',
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'Persónuvernd, reclami',
      portale: FONTE_PERSUVERND_RECLAMO.url,
      urlFonte: FONTE_PERSUVERND_RECLAMO.url,
      verificatoIl: '2026-09-30',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'Illiceità dichiarata, senza multa',
      en: 'unlawfulness declared, with no fine',
      de: 'Rechtswidrigkeit festgestellt, ohne Geldbuße',
      fr: 'illicéité déclarée, sans amende',
      es: 'Ilicitud declarada, sin multa',
      pt: "Ilicitude declarada, sem coima",
      da: 'Ulovlighed fastslået, uden bøde',
      sv: 'Olagligheten fastställd, utan böter',
      nb: 'Ulovlighet fastslått, uten bot',
      nl: 'onrechtmatigheid vastgesteld, zonder boete',
    },
    casoCitato: {
      it: "Persónuvernd, decisione 2022050836 dell'8 novembre 2023 (pubblicata l'8 dicembre 2023): Islandspostur (Poste islandesi) aveva usato i dati del cronotachigrafo/GPS di un veicolo aziendale per valutare il rendimento di un dipendente e giustificarne il licenziamento, cambiando la finalità (il dispositivo era stato presentato per sicurezza e qualità del servizio) senza preavviso. Trattamento dichiarato illecito, senza multa.",
      en: 'Persónuvernd, decision 2022050836 of 8 November 2023 (published 8 December 2023): Islandspostur (Iceland Post) had used the tachograph/GPS data of a company vehicle to assess an employee performance and justify dismissal, changing the purpose (the device had been presented for safety and service quality) without prior notice. Processing declared unlawful, with no fine.',
      de: 'Persónuvernd, Entscheidung 2022050836 vom 8. November 2023 (veröffentlicht am 8. Dezember 2023): Islandspostur (Isländische Post) hatte die Fahrtenschreiber-/GPS-Daten eines Firmenfahrzeugs genutzt, um die Leistung eines Beschäftigten zu bewerten und dessen Kündigung zu rechtfertigen, wobei der Zweck (das Gerät war für Sicherheit und Servicequalität vorgestellt worden) ohne vorherige Ankündigung geändert wurde. Die Verarbeitung wurde für rechtswidrig erklärt, ohne Geldbuße.',
      fr: 'Persónuvernd, décision 2022050836 du 8 novembre 2023 (publiée le 8 décembre 2023) : Islandspostur (Poste islandaise) avait utilisé les données du chronotachygraphe/GPS d’un véhicule de société pour évaluer le rendement d’un salarié et justifier son licenciement, en changeant la finalité (le dispositif avait été présenté pour la sécurité et la qualité du service) sans préavis. Traitement déclaré illicite, sans amende.',
      es: 'Persónuvernd, decisión 2022050836 de 8 de noviembre de 2023 (publicada el 8 de diciembre de 2023): Islandspostur (Correos de Islandia) había usado los datos del tacógrafo/GPS de un vehículo de empresa para evaluar el rendimiento de un empleado y justificar su despido, cambiando la finalidad (el dispositivo se había presentado para la seguridad y la calidad del servicio) sin previo aviso. Tratamiento declarado ilícito, sin multa.',
      pt: "Persónuvernd, decisão 2022050836 de 8 de novembro de 2023 (publicada em 8 de dezembro de 2023): a Islandspostur (Correios islandeses) utilizou os dados do tacógrafo/GPS de um veículo da empresa para avaliar o desempenho de um trabalhador e justificar o seu despedimento, alterando a finalidade (o dispositivo tinha sido apresentado para segurança e qualidade do serviço) sem aviso prévio. Tratamento declarado ilícito, sem coima.",
      da: "Persónuvernd, afgørelse 2022050836 af 8. november 2023 (offentliggjort 8. december 2023): Islandspostur (Islands Post) havde brugt data fra færdselsskriveren/GPS'en i et firmakøretøj til at vurdere en medarbejders præstationer og begrunde en afskedigelse og havde ændret formålet (enheden var blevet præsenteret som sikkerhed og servicekvalitet) uden forudgående varsel. Behandlingen blev erklæret ulovlig, uden bøde.",
      sv: "Persónuvernd, beslut 2022050836 av den 8 november 2023 (publicerat den 8 december 2023): Islandspostur (Isländska posten) hade använt uppgifterna från färdskrivaren/GPS:en i ett tjänstefordon för att bedöma en anställds prestation och motivera uppsägningen, och ändrade därmed ändamålet (enheten hade presenterats för säkerhet och servicekvalitet) utan förhandsinformation. Behandlingen förklarades olaglig, utan böter.",
      nb: 'Persónuvernd, vedtak 2022050836 av 8. november 2023 (offentliggjort 8. desember 2023): Islandspostur (Islands Post) hadde brukt dataene fra fartsskriveren/GPS-en i et firmakjøretøy til å vurdere en ansatts prestasjoner og begrunne en oppsigelse, og endret dermed formålet (enheten var blitt presentert som sikkerhet og servicekvalitet) uten forhåndsvarsel. Behandlingen ble erklært ulovlig, uten bot.',
      nl: 'Persónuvernd, beslissing 2022050836 van 8 november 2023 (gepubliceerd op 8 december 2023): Islandspostur (IJslandse Post) had de tachograaf-/GPS-gegevens van een bedrijfsvoertuig gebruikt om de prestaties van een werknemer te beoordelen en zijn ontslag te rechtvaardigen, waarbij het doel (het apparaat was gepresenteerd voor veiligheid en servicekwaliteit) zonder voorafgaande kennisgeving werd gewijzigd. De verwerking werd onrechtmatig verklaard, zonder boete.',
    },
    urlFonte: FONTE_PERSUVERND_ISLANDSPOSTUR.url,
    tipoImporto: 'caso-gps',
  },

  fonti: [
    FONTE_REGOLE_50_2023,
    FONTE_REGOLE_1329_2025,
    FONTE_PERSUVERND_GPS,
    FONTE_PERSUVERND_DPIA,
    FONTE_PERSUVERND_RECLAMO,
    FONTE_PERSUVERND_ISLANDSPOSTUR,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
