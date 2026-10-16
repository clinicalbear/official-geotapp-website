/**
 * Scheda-paese Serbia per la risorsa "GPS sui lavoratori in UE".
 *
 * La Serbia NON e' un paese UE: e' un paese candidato. La sua Legge sulla
 * protezione dei dati (LPDP, 87/2018, in vigore dal 2019) rispecchia da vicino
 * il GDPR: modello di responsabilizzazione, niente registrazione preventiva,
 * valutazione d'impatto per i trattamenti a rischio elevato e parere del
 * Poverenik (Garante serbo).
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * testo ufficiale della LPDP, decisione del Poverenik sulla lista dei
 * trattamenti che richiedono una DPIA (Sl. glasnik RS 45/2019 e 112/2020), pagina istituzionale del Poverenik, cronaca N1 sul
 * caso JKP Mediana di Nis e GDPR come riferimento comparativo.
 *
 * La Serbia non e' federale: l'unica autorita nazionale e' il Poverenik, senza
 * ripartizione regionale. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese , Fonte} from '../types';

// URL delle fonti primarie citate.
const FONTE_LPDP = {
  titolo: 'Legge sulla protezione dei dati (LPDP, 87/2018) - testo ufficiale',
  url: 'https://pravno-informacioni-sistem.rs/eli/rep/sgrs/skupstina/zakon/2018/87/13',
};
const FONTE_LISTA_DPIA = {
  titolo:
    'Poverenik, decisione sulla lista dei trattamenti che richiedono una DPIA (Sl. glasnik RS 45/2019 e 112/2020, testo consolidato)',
  url: 'https://www.pravno-informacioni-sistem.rs/SlGlasnikPortal/eli/rep/sgrs/drugidrzavniorganiorganizacije/odluka/2019/45/1/reg',
};
// Fonte della voce DPIA: gli artt. 54, 55(1) e 95 stanno nella LPDP; la lista
// (punto 2(7)) e il punto 4 stanno nella decisione del Poverenik, che e' la
// fonteAggiuntiva (FONTE_LISTA_DPIA).
const FONTE_DPIA_LPDP = {
  titolo:
    'LPDP (87/2018), artt. 54, 55(1) e 95, testo ufficiale',
  url: 'https://pravno-informacioni-sistem.rs/eli/rep/sgrs/skupstina/zakon/2018/87/13',
};
const FONTE_EDPB_CONSENSO = {
  titolo:
    'EDPB, linee guida 05/2020 sul consenso ai sensi del regolamento 2016/679, par. 21 (squilibrio di potere nel rapporto di lavoro)',
  url: 'https://www.edpb.europa.eu/system/files/documents/files/file1/edpb_guidelines_202005_consent_en.pdf',
};
const FONTE_POVERENIK = {
  titolo: 'Poverenik (Garante serbo), competenze e contatti',
  url: 'https://poverenik.rs/en/about-us/about-the-commissioner/',
};
const FONTE_N1_MEDIANA: Fonte = {
  titolo:
    'N1, GPS su 80 cassonetti del JKP Mediana di Nis (protesta dei lavoratori, gennaio 2026)',
  url: 'https://n1info.rs/vesti/u-nisu-postavljeni-gps-uredjaji-za-pracenje-kanti-za-djubre-radnici-higijene-se-bune/', nonUfficiale: 'stampa',
};
const FONTE_DANAS_MEDIANA: Fonte = {
  titolo:
    'Danas, ispezione straordinaria del Poverenik al JKP Mediana di Nis (7 aprile 2026)',
  url: 'https://www.danas.rs/vesti/drustvo/sta-je-poverenik-cuo-u-niskom-jkp-mediana-tokom-vanrednog-inspekcijskog-nadzora-zbog-postavljanja-gps-uredjaja-na-kante-za-djubre/',
  nonUfficiale: 'stampa',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) - riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const serbia: SchedaPaese = {
  codiceISO: 'RS',
  slugCanonico: 'serbia',
  nome: 'Serbia',
  nomi: {
    it: 'Serbia',
    en: 'Serbia',
    'en-us': 'Serbia',
    'en-gb': 'Serbia',
    'en-au': 'Serbia',
    'en-ie': 'Serbia',
    'en-ca': 'Serbia',
    de: 'Serbien',
    nl: 'Servië',
    fr: 'Serbie',
    es: 'Serbia',
    pt: 'Sérvia',
    da: 'Serbien',
    sv: 'Serbien',
    nb: 'Serbia',
    ru: 'Сербия',
  },
  bandiera: '🇷🇸',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: {
      it: 'Poverenik (Garante serbo per l\'informazione e la protezione dei dati)',
      en: 'Poverenik (Serbian Commissioner for Information and Data Protection)',
      de: 'Poverenik (Serbischer Beauftragter für Information und Datenschutz)',
      fr: 'Poverenik (Commissaire serbe à l’information et à la protection des données)',
      es: 'Poverenik (Comisionado serbio para la Información y la Protección de Datos)',
      nl: 'Poverenik (Servische commissaris voor informatie en gegevensbescherming)',
      pt: 'Poverenik (Comissário sérvio para a Informação e a Proteção de Dados)',
      da: 'Poverenik (serbisk kommissær for information og databeskyttelse)',
      sv: 'Poverenik (serbiska kommissionären för information och dataskydd)',
      nb: 'Poverenik (serbisk kommissær for informasjon og personvern)',
      ru: 'Poverenik (сербский уполномоченный по вопросам информации и защиты данных)',
    },
    portale: FONTE_POVERENIK.url,
    urlFonte: FONTE_POVERENIK.url,
    verificatoIl: '2026-06-15',
    note: {
      it: 'La Serbia è un Paese candidato, fuori dall\'UE, con una legge (LPDP) che rispecchia il GDPR. Unica autorità nazionale, il Poverenik; nessuna ripartizione regionale.',
      en: 'Serbia is a candidate country, outside the EU, with a law (LPDP) that mirrors the GDPR. The only national authority is the Poverenik; there is no regional subdivision.',
      de: 'Serbien ist ein Beitrittskandidat außerhalb der EU mit einem Gesetz (LPDP), das die DSGVO widerspiegelt. Die einzige nationale Behörde ist der Poverenik; es gibt keine regionale Aufteilung.',
      fr: 'La Serbie est un pays candidat, hors de l’UE, doté d’une loi (LPDP) qui reflète le RGPD. La seule autorité nationale est le Poverenik ; il n’y a aucune répartition régionale.',
      es: 'Serbia es un país candidato, fuera de la UE, con una ley (LPDP) que refleja el RGPD. La única autoridad nacional es el Poverenik; no hay división regional.',
      pt: "A Sérvia é um país candidato, fora da UE, com uma lei (LPDP) que reflete o RGPD. A única autoridade nacional é o Poverenik; não existe divisão regional.",
      da: 'Serbien er et kandidatland uden for EU med en lov (LPDP), der spejler GDPR. Den eneste nationale myndighed er Poverenik; der er ingen regional opdeling.',
      sv: 'Serbien är ett kandidatland utanför EU, med en lag (LPDP) som speglar GDPR. Det finns en enda nationell myndighet, Poverenik; det finns ingen regional uppdelning.',
      nb: 'Serbia er et kandidatland utenfor EU, med en lov (LPDP) som speiler GDPR. Den eneste nasjonale myndigheten er Poverenik; ingen regional inndeling.',
      nl: 'Servië is een kandidaat-land, buiten de EU, met een wet (LPDP) die de AVG weerspiegelt. De enige nationale autoriteit is de Poverenik; er is geen regionale onderverdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione dettagliata e preventiva ai lavoratori (LPDP art. 23)',
        en: 'Detailed and prior information to workers (LPDP art. 23)',
        de: 'Detaillierte und vorherige Information der Beschäftigten (LPDP Art. 23)',
        fr: 'Information détaillée et préalable des salariés (LPDP art. 23)',
        es: 'Información detallada y previa a los trabajadores (LPDP art. 23)',
        pt: "Informação detalhada e prévia aos trabalhadores (LPDP art. 23)",
        da: 'Detaljeret og forudgående information til medarbejderne (LPDP art. 23)',
        sv: 'Detaljerad information i förväg till de anställda (LPDP art. 23)',
        nb: 'Detaljert forhåndsinformasjon til de ansatte (LPDP art. 23)',
        nl: 'Gedetailleerde en voorafgaande informatie aan werknemers (LPDP art. 23)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'I lavoratori che useranno i veicoli vanno informati in dettaglio sul trattamento: titolare, finalità, base giuridica, destinatari, conservazione e diritti.',
        en: 'Workers who will use the vehicles must be informed in detail about the processing: controller, purposes, legal basis, recipients, retention and rights.',
        de: 'Beschäftigte, die die Fahrzeuge nutzen werden, müssen ausführlich über die Verarbeitung informiert werden: Verantwortlicher, Zwecke, Rechtsgrundlage, Empfänger, Speicherdauer und Rechte.',
        fr: 'Les salariés qui utiliseront les véhicules doivent être informés en détail du traitement : responsable, finalités, base juridique, destinataires, conservation et droits.',
        es: 'Los trabajadores que utilizarán los vehículos deben ser informados en detalle sobre el tratamiento: responsable, finalidades, base jurídica, destinatarios, conservación y derechos.',
        pt: "Os trabalhadores que vão utilizar os veículos devem ser informados em pormenor sobre o tratamento: responsável, finalidades, base jurídica, destinatários, conservação e direitos.",
        da: 'Medarbejdere, der skal bruge køretøjerne, skal informeres detaljeret om behandlingen: dataansvarlig, formål, retsgrundlag, modtagere, opbevaring og rettigheder.',
        sv: 'De anställda som ska använda fordonen ska informeras i detalj om behandlingen: personuppgiftsansvarig, ändamål, rättslig grund, mottagare, lagring och rättigheter.',
        nb: 'De ansatte som skal bruke kjøretøyene, skal informeres i detalj om behandlingen: behandlingsansvarlig, formål, behandlingsgrunnlag, mottakere, lagring og rettigheter.',
        nl: 'Werknemers die de voertuigen gaan gebruiken, moeten in detail over de verwerking worden geïnformeerd: verwerkingsverantwoordelijke, doeleinden, rechtsgrondslag, ontvangers, bewaring en rechten.',
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: 'Autorizzazione o registrazione preventiva di un\'autorità prima di installare',
        en: 'Authorisation or prior registration with an authority before installing',
        de: 'Genehmigung oder vorherige Registrierung bei einer Behörde vor der Installation',
        fr: 'Autorisation ou enregistrement préalable auprès d’une autorité avant l’installation',
        es: 'Autorización o registro previo ante una autoridad antes de instalar',
        pt: "Autorização ou registo prévio junto de uma autoridade antes de instalar",
        da: 'Tilladelse eller forudgående registrering hos en myndighed før installation',
        sv: 'Tillstånd eller registrering hos en myndighet i förväg innan systemet installeras',
        nb: 'Tillatelse eller forhåndsregistrering hos en myndighet før installasjon',
        nl: 'Toestemming of voorafgaande registratie bij een autoriteit vóór installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: 'La LPDP rispecchia il modello di responsabilizzazione del GDPR: il vecchio Registro centrale delle raccolte di dati ha cessato di essere tenuto con l\'entrata in vigore della legge (art. 98).',
        en: 'The LPDP mirrors the GDPR accountability model: the old Central Register of data collections ceased to be kept when the law entered into force (art. 98).',
        de: 'Das LPDP spiegelt das Rechenschaftsmodell der DSGVO wider: das alte Zentralregister der Datensammlungen wird seit Inkrafttreten des Gesetzes nicht mehr geführt (Art. 98).',
        fr: 'La LPDP reflète le modèle de responsabilisation du RGPD : l’ancien Registre central des fichiers de données n’est plus tenu depuis l’entrée en vigueur de la loi (art. 98).',
        es: 'La LPDP refleja el modelo de responsabilidad proactiva del RGPD: el antiguo Registro central de colecciones de datos dejó de llevarse con la entrada en vigor de la ley (art. 98).',
        pt: "A LPDP reflete o modelo de responsabilidade proativa do RGPD: o antigo Registo central de coleções de dados deixou de ser mantido com a entrada em vigor da lei (art. 98).",
        da: "LPDP spejler GDPR's ansvarlighedsmodel: Det gamle centrale register over dataindsamlinger blev ikke ført længere, da loven trådte i kraft (art. 98).",
        sv: 'LPDP speglar GDPR:s modell med ansvarsskyldighet: det gamla centrala registret över uppgiftssamlingar har upphört att föras när lagen trädde i kraft (art. 98).',
        nb: 'LPDP speiler GDPRs modell med ansvarlighet: det gamle sentrale registeret over datasamlinger ble ikke lenger ført da loven trådte i kraft (art. 98).',
        nl: 'De LPDP weerspiegelt het verantwoordingsmodel van de AVG: het oude Centraal register van gegevensverzamelingen wordt sinds de inwerkingtreding van de wet niet meer bijgehouden (art. 98).',
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: 'Base = interesse legittimo bilanciato con i diritti del lavoratore; il consenso è una base debole',
        en: "Basis = legitimate interest, balanced against the worker's rights; consent is a weak basis",
        de: 'Grundlage = berechtigtes Interesse, abgewogen gegen die Rechte der Arbeitnehmer; die Einwilligung ist eine schwache Grundlage',
        fr: 'Base = intérêt légitime, mis en balance avec les droits du travailleur ; le consentement est une base fragile',
        es: 'Base = interés legítimo, ponderado frente a los derechos del trabajador; el consentimiento es una base débil',
        pt: 'Base = interesse legítimo, ponderado com os direitos do trabalhador; o consentimento é uma base frágil',
        da: 'Grundlaget er legitim interesse, afvejet mod arbejdstagerens rettigheder; samtykke er et svagt grundlag',
        sv: 'Grunden är berättigat intresse, avvägt mot arbetstagarens rättigheter; samtycke är en svag grund',
        nb: 'Grunnlaget er berettiget interesse, avveid mot arbeidstakerens rettigheter; samtykke er et svakt grunnlag',
        nl: 'Grondslag = gerechtvaardigd belang, afgewogen tegen de rechten van de werknemer; toestemming is een zwakke grondslag',
      },
      risposta: 'si',
      dettaglio: {
        it: 'La base è di norma l\'interesse legittimo del datore (art. 12(1)(6) LPDP), bilanciato con gli interessi e i diritti fondamentali del lavoratore (stessa disposizione); nella valutazione d\'impatto va descritto e ne vanno valutate la necessità e la proporzionalità rispetto alle finalità (art. 54(6)(1)-(2) LPDP), e il lavoratore deve esserne informato (art. 23(1)(4)). Nel rapporto di lavoro il consenso è in genere una base debole, per lo squilibrio fra le parti (linee guida EDPB 05/2020 sul consenso).',
        en: 'The basis is normally the employer\'s legitimate interest (art. 12(1)(6) LPDP), balanced against the worker\'s interests and fundamental rights (same provision); in the impact assessment it must be described and its necessity and proportionality to the purposes assessed (art. 54(6)(1)-(2) LPDP), and the worker must be informed of it (art. 23(1)(4)). In the employment relationship consent is generally a weak basis because of the imbalance between the parties (EDPB Guidelines 05/2020 on consent).',
        de: 'Grundlage ist in der Regel das berechtigte Interesse des Arbeitgebers (Art. 12(1)(6) LPDP), abgewogen gegen die Interessen und Grundrechte des Beschäftigten (dieselbe Bestimmung); in der Folgenabschätzung ist es zu beschreiben und seine Erforderlichkeit und Verhältnismäßigkeit in Bezug auf die Zwecke zu prüfen (Art. 54(6)(1)-(2) LPDP), und der Beschäftigte muss darüber informiert werden (Art. 23(1)(4)). Im Arbeitsverhältnis ist die Einwilligung wegen des Ungleichgewichts der Parteien in der Regel eine schwache Grundlage (EDSA-Leitlinien 05/2020 zur Einwilligung).',
        fr: 'La base est en principe l’intérêt légitime de l’employeur (art. 12(1)(6) LPDP), mis en balance avec les intérêts et les droits fondamentaux du salarié (même disposition) ; dans l’analyse d’impact, il doit être décrit et sa nécessité et sa proportionnalité au regard des finalités doivent être évaluées (art. 54(6)(1)-(2) LPDP), et le salarié doit en être informé (art. 23(1)(4)). Dans la relation de travail, le consentement est en général une base faible, en raison du déséquilibre entre les parties (lignes directrices 05/2020 du CEPD sur le consentement).',
        es: 'La base es, por lo general, el interés legítimo del empleador (art. 12(1)(6) LPDP), ponderado con los intereses y los derechos fundamentales del trabajador (misma disposición); en la evaluación de impacto debe describirse y evaluarse su necesidad y proporcionalidad en relación con las finalidades (art. 54(6)(1)-(2) LPDP), y el trabajador debe ser informado de ello (art. 23(1)(4)). En la relación laboral el consentimiento es, en general, una base débil, por el desequilibrio entre las partes (Directrices 05/2020 del CEPD sobre el consentimiento).',
        pt: 'A base é, em regra, o interesse legítimo da entidade empregadora (art. 12(1)(6) LPDP), ponderado com os interesses e os direitos fundamentais do trabalhador (mesma disposição); na avaliação de impacto deve ser descrito e avaliadas a sua necessidade e proporcionalidade em relação às finalidades (art. 54(6)(1)-(2) LPDP), e o trabalhador deve ser informado (art. 23(1)(4)). Na relação laboral o consentimento é, em geral, uma base fraca, por causa do desequilíbrio entre as partes (Diretrizes 05/2020 do CEPD sobre o consentimento).',
        da: "Grundlaget er normalt arbejdsgiverens legitime interesse (art. 12, stk. 1, nr. 6, LPDP), afvejet over for medarbejderens interesser og grundlæggende rettigheder (samme bestemmelse); i konsekvensanalysen skal det beskrives, og dets nødvendighed og proportionalitet i forhold til formålene skal vurderes (art. 54, stk. 6, nr. 1-2, LPDP), og medarbejderen skal informeres herom (art. 23, stk. 1, nr. 4). I ansættelsesforholdet er samtykke generelt et svagt grundlag på grund af ubalancen mellem parterne (EDPB's retningslinjer 05/2020 om samtykke).",
        sv: 'Grunden är normalt arbetsgivarens berättigade intresse (art. 12(1)(6) LPDP), vägt mot den anställdes intressen och grundläggande rättigheter (samma bestämmelse); i konsekvensbedömningen ska det beskrivas och dess nödvändighet och proportionalitet i förhållande till ändamålen bedömas (art. 54(6)(1)-(2) LPDP), och den anställde ska informeras om det (art. 23(1)(4)). I anställningsförhållandet är samtycke i allmänhet en svag grund, på grund av obalansen mellan parterna (EDPB:s riktlinjer 05/2020 om samtycke).',
        nb: 'Grunnlaget er normalt arbeidsgiverens berettigede interesse (art. 12(1)(6) LPDP), avveid mot den ansattes interesser og grunnleggende rettigheter (samme bestemmelse); i konsekvensvurderingen skal det beskrives, og dets nødvendighet og forholdsmessighet i forhold til formålene skal vurderes (art. 54(6)(1)-(2) LPDP), og den ansatte skal informeres om det (art. 23(1)(4)). I arbeidsforholdet er samtykke generelt et svakt grunnlag på grunn av ubalansen mellom partene (EDPBs retningslinjer 05/2020 om samtykke).',
        nl: 'De grondslag is doorgaans het gerechtvaardigd belang van de werkgever (art. 12(1)(6) LPDP), afgewogen tegen de belangen en de grondrechten van de werknemer (dezelfde bepaling); in de effectbeoordeling moet het worden omschreven en moeten de noodzaak en evenredigheid ervan ten opzichte van de doeleinden worden beoordeeld (art. 54(6)(1)-(2) LPDP), en de werknemer moet erover worden geïnformeerd (art. 23(1)(4)). In de arbeidsrelatie is toestemming in het algemeen een zwakke grondslag wegens de ongelijkheid tussen de partijen (EDPB-richtsnoeren 05/2020 over toestemming).',
      },
      fonte: FONTE_LPDP,
      fonteAggiuntiva: FONTE_EDPB_CONSENSO,
    },
    {
      voce: {
        it: 'Niente tracciamento continuo; solo orario e finalità',
        en: 'No continuous tracking; only working hours and purpose',
        de: 'Keine kontinuierliche Ortung; nur Arbeitszeit und Zweck',
        fr: 'Pas de suivi continu ; uniquement horaires de travail et finalité',
        es: 'Sin seguimiento continuo; solo horario y finalidad',
        pt: "Sem seguimento contínuo; apenas horário e finalidade",
        da: 'Ingen løbende sporing; kun arbejdstid og formål',
        sv: 'Ingen kontinuerlig spårning; endast arbetstid och ändamål',
        nb: 'Ingen kontinuerlig sporing; bare arbeidstid og formål',
        nl: 'Geen continue tracking; alleen werktijd en doel',
      },
      risposta: 'si',
      dettaglio: {
        it: 'I dati devono essere raccolti per finalità determinate ed essere limitati a quanto necessario per tali finalità (art. 5(1), punti 2 e 3, LPDP): il GPS va limitato all\'orario di lavoro e alla finalità dichiarata, e un tracciamento continuo, che registra anche movimenti estranei alla finalità, non rispetta la minimizzazione. Una giustificazione generica di tutela del patrimonio non basta a definire la finalità.',
        en: 'Data must be collected for specific purposes and limited to what is necessary for them (art. 5(1), points 2 and 3, LPDP): GPS must be limited to working hours and the stated purpose, and continuous tracking, which also records movements unrelated to the purpose, does not respect minimisation. A generic asset-protection justification is not enough to define the purpose.',
        de: 'Daten müssen für bestimmte Zwecke erhoben und auf das dafür Notwendige beschränkt werden (Art. 5(1) Nr. 2 und 3 LPDP): GPS ist auf die Arbeitszeit und den erklärten Zweck zu beschränken, und eine kontinuierliche Ortung, die auch zweckfremde Bewegungen erfasst, wahrt die Datenminimierung nicht. Eine pauschale Berufung auf den Schutz von Vermögenswerten genügt nicht, um den Zweck zu bestimmen.',
        fr: 'Les données doivent être collectées pour des finalités déterminées et limitées à ce qui est nécessaire à ces finalités (art. 5(1), points 2 et 3, LPDP) : le GPS doit être limité aux heures de travail et à la finalité déclarée, et un suivi continu, qui enregistre aussi des déplacements étrangers à la finalité, ne respecte pas la minimisation. Une justification générale de protection du patrimoine ne suffit pas à définir la finalité.',
        es: 'Los datos deben recogerse para finalidades determinadas y limitarse a lo necesario para ellas (art. 5(1), puntos 2 y 3, LPDP): el GPS debe limitarse al horario laboral y a la finalidad declarada, y un seguimiento continuo, que registra también movimientos ajenos a la finalidad, no respeta la minimización. Una justificación genérica de protección del patrimonio no basta para definir la finalidad.',
        pt: "Os dados devem ser recolhidos para finalidades determinadas e limitar-se ao necessário para essas finalidades (art. 5(1), pontos 2 e 3, LPDP): o GPS deve limitar-se ao horário de trabalho e à finalidade declarada, e um seguimento contínuo, que regista também movimentos alheios à finalidade, não respeita a minimização. Uma justificação genérica de proteção do património não basta para definir a finalidade.",
        da: 'Oplysninger skal indsamles til bestemte formål og være begrænset til det, der er nødvendigt for dem (art. 5, stk. 1, nr. 2 og 3, LPDP): GPS skal begrænses til arbejdstiden og det erklærede formål, og løbende sporing, som også registrerer bevægelser uden forbindelse til formålet, respekterer ikke minimeringen. En generisk begrundelse om beskyttelse af værdier er ikke nok til at definere formålet.',
        sv: 'Uppgifterna ska samlas in för bestämda ändamål och vara begränsade till vad som är nödvändigt för dessa ändamål (art. 5(1), punkt 2 och 3, LPDP): GPS:en ska begränsas till arbetstid och till det angivna ändamålet, och en kontinuerlig spårning, som även registrerar förflyttningar som saknar samband med ändamålet, uppfyller inte uppgiftsminimeringen. En allmän motivering om skydd av egendom räcker inte för att definiera ändamålet.',
        nb: 'Opplysninger skal samles inn for bestemte formål og være begrenset til det som er nødvendig for disse formålene (art. 5(1), punkt 2 og 3, LPDP): GPS skal begrenses til arbeidstiden og det oppgitte formålet, og en kontinuerlig sporing, som også registrerer bevegelser uten sammenheng med formålet, oppfyller ikke dataminimeringen. En generell begrunnelse om vern av verdier er ikke nok til å definere formålet.',
        nl: 'Gegevens moeten voor bepaalde doeleinden worden verzameld en beperkt blijven tot wat daarvoor nodig is (art. 5(1), punten 2 en 3, LPDP): gps moet beperkt blijven tot werktijd en het vermelde doel, en continue tracking, die ook bewegingen buiten het doel registreert, respecteert de dataminimalisatie niet. Een algemene verwijzing naar bescherming van bezittingen volstaat niet om het doel te bepalen.',
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: 'Valutazione d\'impatto (DPIA) ed eventuale parere del Poverenik per il monitoraggio dei dipendenti tramite app o sistemi di tracciamento (lista, LPDP art. 54)',
        en: 'Impact assessment (DPIA) and, where needed, opinion of the Poverenik for monitoring employees via apps or tracking systems (list, LPDP art. 54)',
        de: 'Folgenabschätzung (DSFA) und ggf. Stellungnahme des Poverenik für die Überwachung von Beschäftigten über Apps oder Ortungssysteme (Liste, LPDP Art. 54)',
        fr: 'Analyse d’impact (AIPD) et, le cas échéant, avis du Poverenik pour la surveillance des salariés via des applications ou des systèmes de suivi (liste, LPDP art. 54)',
        es: 'Evaluación de impacto (EIPD) y, en su caso, dictamen del Poverenik para la monitorización de empleados mediante apps o sistemas de seguimiento (lista, LPDP art. 54)',
        pt: "Avaliação de impacto sobre a proteção de dados (AIPD) e, se for caso disso, parecer do Poverenik para a monitorização dos trabalhadores através de aplicações ou sistemas de seguimento (lista, LPDP art. 54)",
        da: 'Konsekvensanalyse (DPIA) og om nødvendigt udtalelse fra Poverenik for overvågning af medarbejdere via apps eller sporingssystemer (liste, LPDP art. 54)',
        sv: 'Konsekvensbedömning (DPIA) och eventuellt yttrande från Poverenik vid övervakning av anställda via appar eller spårningssystem (lista, LPDP art. 54)',
        nb: 'Personvernkonsekvensvurdering (DPIA) og eventuell uttalelse fra Poverenik ved overvåking av ansatte via apper eller sporingssystemer (liste, LPDP art. 54)',
        nl: 'Effectbeoordeling (DPIA) en zo nodig advies van de Poverenik voor het monitoren van werknemers via apps of trackingsystemen (lijst, LPDP art. 54)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il trattamento dei dati dei dipendenti tramite app o sistemi che ne tracciano lavoro, movimenti e comunicazione è nella lista che richiede una valutazione d\'impatto; prima di iniziare il titolare deve svolgere la DPIA (art. 54 LPDP). Il parere del Poverenik va chiesto prima di iniziare solo se la DPIA indica un rischio elevato che le misure previste non riducono (art. 55(1)); omettere la DPIA o il parere dovuto è punito (art. 95).',
        en: 'The processing of employee data via apps or systems that track their work, movements and communication is on the list requiring an impact assessment; before starting, the controller must carry out the DPIA (art. 54 LPDP). The Poverenik\'s opinion must be requested before starting only if the DPIA indicates a high risk that the planned measures do not reduce (art. 55(1)); omitting the DPIA or the required opinion is punished (art. 95).',
        de: 'Die Verarbeitung von Beschäftigtendaten über Apps oder Systeme, die deren Arbeit, Bewegungen und Kommunikation verfolgen, steht auf der Liste, die eine Folgenabschätzung erfordert; vor Beginn muss der Verantwortliche die DSFA durchführen (Art. 54 LPDP). Die Stellungnahme des Poverenik ist vor Beginn nur einzuholen, wenn die DSFA ein hohes Risiko anzeigt, das die geplanten Maßnahmen nicht mindern (Art. 55(1)); das Unterlassen der DSFA oder der gebotenen Stellungnahme wird geahndet (Art. 95).',
        fr: 'Le traitement des données des salariés au moyen d’applications ou de systèmes qui suivent leur travail, leurs déplacements et leurs communications figure sur la liste exigeant une analyse d’impact ; avant de commencer, le responsable doit réaliser l’AIPD (art. 54 LPDP). L’avis du Poverenik ne doit être demandé avant de commencer que si l’AIPD indique un risque élevé que les mesures prévues ne réduisent pas (art. 55(1)) ; omettre l’AIPD ou l’avis requis est sanctionné (art. 95).',
        es: 'El tratamiento de datos de los empleados mediante apps o sistemas que rastrean su trabajo, movimientos y comunicación está en la lista que requiere una evaluación de impacto; antes de comenzar, el responsable debe realizar la EIPD (art. 54 LPDP). El dictamen del Poverenik debe solicitarse antes de comenzar solo si la EIPD indica un riesgo alto que las medidas previstas no reducen (art. 55(1)); omitir la EIPD o el dictamen debido se sanciona (art. 95).',
        pt: "O tratamento de dados dos trabalhadores através de aplicações ou sistemas que acompanham o seu trabalho, movimentos e comunicação consta da lista que exige uma avaliação de impacto; antes de começar, o responsável deve realizar a AIPD (art. 54 LPDP). O parecer do Poverenik só deve ser solicitado antes de começar se a AIPD indicar um risco elevado que as medidas previstas não reduzem (art. 55(1)); omitir a AIPD ou o parecer devido é sancionado (art. 95).",
        da: "Behandling af medarbejderoplysninger via apps eller systemer, der sporer deres arbejde, bevægelser og kommunikation, står på listen over behandlinger, der kræver en konsekvensanalyse; før start skal den dataansvarlige gennemføre konsekvensanalysen (DPIA, art. 54 LPDP). Poverenik's udtalelse skal kun anmodes om før start, hvis konsekvensanalysen viser en høj risiko, som de planlagte foranstaltninger ikke nedbringer (art. 55, stk. 1); udeladelse af konsekvensanalysen eller den krævede udtalelse straffes (art. 95).",
        sv: 'Behandling av de anställdas uppgifter via appar eller system som spårar deras arbete, förflyttningar och kommunikation finns på listan över behandlingar som kräver en konsekvensbedömning; innan behandlingen inleds ska den personuppgiftsansvarige göra en DPIA (art. 54 LPDP). Yttrande från Poverenik ska begäras innan behandlingen inleds endast om DPIA:n visar en hög risk som de planerade åtgärderna inte minskar (art. 55(1)); att utelämna DPIA:n eller det yttrande som krävs är straffbart (art. 95).',
        nb: 'Behandling av de ansattes opplysninger via apper eller systemer som sporer arbeidet, bevegelsene og kommunikasjonen deres står på listen over behandlinger som krever en personvernkonsekvensvurdering; før oppstart må den behandlingsansvarlige gjennomføre en DPIA (art. 54 LPDP). Uttalelse fra Poverenik skal bare innhentes før oppstart hvis DPIA-en viser en høy risiko som de planlagte tiltakene ikke reduserer (art. 55(1)); å unnlate DPIA-en eller den påkrevde uttalelsen er straffbart (art. 95).',
        nl: 'De verwerking van werknemersgegevens via apps of systemen die hun werk, bewegingen en communicatie volgen, staat op de lijst die een effectbeoordeling vereist; vóór aanvang moet de verwerkingsverantwoordelijke de DPIA uitvoeren (art. 54 LPDP). Het advies van de Poverenik moet vóór aanvang alleen worden gevraagd als de DPIA een hoog risico aantoont dat de geplande maatregelen niet verminderen (art. 55(1)); het achterwege laten van de DPIA of het vereiste advies wordt bestraft (art. 95).',
      },
      fonte: FONTE_DPIA_LPDP,
      fonteAggiuntiva: FONTE_LISTA_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Definisci e documenta l\'interesse legittimo con un test tripartito.',
        en: 'Define and document the legitimate interest with a three-part test.',
        de: 'Definieren und dokumentieren Sie das berechtigte Interesse mit einer dreiteiligen Prüfung.',
        fr: 'Définissez et documentez l’intérêt légitime au moyen d’un test en trois parties.',
        es: 'Define y documenta el interés legítimo con una prueba tripartita.',
        pt: "Defina e documente o interesse legítimo com um teste tripartido.",
        da: 'Definér og dokumentér den legitime interesse med en test i tre led.',
        sv: 'Definiera och dokumentera det berättigade intresset med ett prov i tre delar.',
        nb: 'Definer og dokumenter den berettigede interessen med en test i tre ledd.',
        nl: 'Definieer en documenteer het gerechtvaardigd belang met een drieledige toets.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Informa in dettaglio i lavoratori che useranno i veicoli (art. 23).',
        en: 'Inform in detail the workers who will use the vehicles (art. 23).',
        de: 'Informieren Sie die Beschäftigten, die die Fahrzeuge nutzen werden, ausführlich (Art. 23).',
        fr: 'Informez en détail les salariés qui utiliseront les véhicules (art. 23).',
        es: 'Informa en detalle a los trabajadores que utilizarán los vehículos (art. 23).',
        pt: "Informe em pormenor os trabalhadores que vão utilizar os veículos (art. 23).",
        da: 'Informér detaljeret de medarbejdere, der skal bruge køretøjerne (art. 23).',
        sv: 'Informera i detalj de anställda som ska använda fordonen (art. 23).',
        nb: 'Informer i detalj de ansatte som skal bruke kjøretøyene (art. 23).',
        nl: 'Informeer de werknemers die de voertuigen gaan gebruiken in detail (art. 23).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Svolgi la valutazione d\'impatto (DPIA) prima di iniziare e, se indica un rischio elevato non ridotto dalle misure, chiedi il parere del Poverenik.',
        en: 'Carry out the impact assessment (DPIA) before starting and, if it indicates a high risk not reduced by the measures, request the opinion of the Poverenik.',
        de: 'Führen Sie vor Beginn die Folgenabschätzung (DSFA) durch und holen Sie, wenn sie ein durch die Maßnahmen nicht gemindertes hohes Risiko anzeigt, die Stellungnahme des Poverenik ein.',
        fr: 'Réalisez l’analyse d’impact (AIPD) avant de commencer et, si elle indique un risque élevé non réduit par les mesures, sollicitez l’avis du Poverenik.',
        es: 'Realiza la evaluación de impacto (EIPD) antes de comenzar y, si indica un riesgo alto no reducido por las medidas, solicita el dictamen del Poverenik.',
        pt: "Realize a avaliação de impacto (AIPD) antes de começar e, se indicar um risco elevado não reduzido pelas medidas, solicite o parecer do Poverenik.",
        da: "Gennemfør konsekvensanalysen (DPIA) før start, og hvis den viser en høj risiko, som foranstaltningerne ikke nedbringer, skal du anmode om Poverenik's udtalelse.",
        sv: 'Genomför konsekvensbedömningen (DPIA) innan du börjar och, om den visar en hög risk som åtgärderna inte minskar, begär yttrande från Poverenik.',
        nb: 'Gjennomfør personvernkonsekvensvurderingen (DPIA) før oppstart, og hvis den viser en høy risiko som tiltakene ikke reduserer, be om uttalelse fra Poverenik.',
        nl: 'Voer vóór aanvang de effectbeoordeling (DPIA) uit en vraag, als die een door de maatregelen niet verminderd hoog risico aantoont, het advies van de Poverenik.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Limita il GPS all\'orario e alla finalità: niente tracciamento continuo.',
        en: 'Limit GPS to working hours and the purpose: no continuous tracking.',
        de: 'Beschränken Sie das GPS auf die Arbeitszeit und den Zweck: keine kontinuierliche Ortung.',
        fr: 'Limitez le GPS aux horaires de travail et à la finalité : pas de suivi continu.',
        es: 'Limita el GPS al horario y a la finalidad: sin seguimiento continuo.',
        pt: "Limite o GPS ao horário e à finalidade: sem seguimento contínuo.",
        da: 'Begræns GPS til arbejdstiden og formålet: ingen løbende sporing.',
        sv: 'Begränsa GPS:en till arbetstid och ändamål: ingen kontinuerlig spårning.',
        nb: 'Begrens GPS til arbeidstiden og formålet: ingen kontinuerlig sporing.',
        nl: 'Beperk de GPS tot de werktijd en het doel: geen continue tracking.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema in modo proporzionato e rispetta il diritto di opposizione dei lavoratori.',
        en: 'Configure the system in a proportionate way and respect the workers\' right to object.',
        de: 'Konfigurieren Sie das System verhältnismäßig und respektieren Sie das Widerspruchsrecht der Beschäftigten.',
        fr: 'Configurez le système de manière proportionnée et respectez le droit d’opposition des salariés.',
        es: 'Configura el sistema de forma proporcionada y respeta el derecho de oposición de los trabajadores.',
        pt: "Configure o sistema de forma proporcionada e respeite o direito de oposição dos trabalhadores.",
        da: 'Indstil systemet forholdsmæssigt, og respektér medarbejdernes ret til indsigelse.',
        sv: 'Konfigurera systemet proportionerligt och respektera de anställdas rätt att invända.',
        nb: 'Konfigurer systemet forholdsmessig, og respekter de ansattes rett til å protestere.',
        nl: 'Configureer het systeem op een evenredige manier en respecteer het recht van werknemers om bezwaar te maken.',
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
        pt: "Se mudar de sistema ou de software de monitorização, atualize e volte a entregar a informação, e verifique se tem de voltar a informar ou a consultar os representantes dos trabalhadores, quando a lei o prevê. Muitas vezes mudam o fornecedor (subcontratante), os dados recolhidos e as modalidades: a informação entregue antes não basta.",
        da: 'Hvis du skifter system eller overvågningssoftware, skal du opdatere og udlevere privatlivsoplysningerne igen og undersøge, om du på ny skal informere eller høre medarbejdernes repræsentanter, hvor loven kræver det. Ofte ændrer leverandøren (databehandleren), de indsamlede oplysninger og metoderne sig: de oplysninger, der blev udleveret tidligere, er ikke nok.',
        sv: 'Om du byter övervakningssystem eller programvara: uppdatera och lämna ut informationen om personuppgiftsbehandling på nytt, och kontrollera om du åter måste informera eller samråda med de anställdas företrädare, där lagen kräver det. Leverantören (personuppgiftsbiträdet), de insamlade uppgifterna och arbetssätten ändras ofta: den information som lämnades tidigare räcker inte.',
        nb: 'Hvis du bytter overvåkingssystem eller programvare, må du oppdatere og dele ut personvernerklæringen på nytt, og undersøke om du igjen må informere eller rådføre deg med de ansattes representanter, der loven krever det. Ofte endres leverandøren (databehandleren), de innsamlede opplysningene og metodene: informasjonen som ble gitt tidligere er ikke nok.',
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'Poverenik',
      portale: FONTE_POVERENIK.url,
      urlFonte: FONTE_POVERENIK.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'da 50.000 a 2.000.000 RSD per la persona giuridica (circa 425 - 17.000 euro)',
      en: 'from 50,000 to 2,000,000 RSD for the legal entity (about 425 - 17,000 euros)',
      de: 'von 50.000 bis 2.000.000 RSD für die juristische Person (etwa 425 - 17.000 Euro)',
      fr: 'de 50 000 à 2 000 000 RSD pour la personne morale (environ 425 à 17 000 euros)',
      es: 'de 50.000 a 2.000.000 RSD para la persona jurídica (unos 425 - 17.000 euros)',
      pt: "de 50.000 a 2.000.000 RSD para a pessoa coletiva (cerca de 425 - 17.000 euros)",
      da: 'fra 50.000 til 2.000.000 RSD for den juridiske enhed (ca. 425-17.000 euro)',
      sv: '50 000 till 2 000 000 RSD för en juridisk person (cirka 425 - 17 000 euro)',
      nb: 'fra 50 000 til 2 000 000 RSD for den juridiske personen (ca. 425-17 000 euro)',
      nl: 'van 50.000 tot 2.000.000 RSD voor de rechtspersoon (ongeveer 425 - 17.000 euro)',
    },
    casoCitato: {
      it: 'Non risulta una multa del Poverenik specifica pubblicata per il GPS sui dipendenti. Nel 2026 il Poverenik ha svolto un\'ispezione straordinaria sul JKP Mediana di Niš, che aveva installato 80 dispositivi GPS sui cassonetti, contestati dai lavoratori dell\'igiene perché ne avrebbero tracciato indirettamente i movimenti; dall\'ispezione risulta che i cassonetti non erano stati messi in funzione. La mancata DPIA o richiesta di parere è punita con una sanzione da 50.000 a 2.000.000 RSD per la persona giuridica.',
      en: 'There is no specific, published Poverenik fine for GPS on employees. In 2026 the Poverenik carried out an extraordinary inspection of JKP Mediana of Nis, which had installed 80 GPS devices on the waste bins, contested by the sanitation workers because they would indirectly track their movements; the inspection found that the bins had not been put into operation. Failure to carry out the DPIA or request the opinion is punished with a fine of 50,000 to 2,000,000 RSD for the legal entity.',
      de: 'Es gibt keine spezifische, veröffentlichte Geldbuße des Poverenik für GPS bei Beschäftigten. Im Jahr 2026 führte der Poverenik eine außerordentliche Prüfung bei JKP Mediana in Nis durch, das 80 GPS-Geräte an den Mülltonnen installiert hatte, was von den Reinigungskräften beanstandet wurde, weil dadurch indirekt ihre Bewegungen verfolgt würden; die Prüfung ergab, dass die Tonnen nicht in Betrieb genommen worden waren. Das Versäumnis, die DSFA durchzuführen oder die Stellungnahme einzuholen, wird mit einer Geldbuße von 50.000 bis 2.000.000 RSD für die juristische Person geahndet.',
      fr: 'Il n’existe pas d’amende spécifique et publiée du Poverenik pour le GPS sur les salariés. En 2026, le Poverenik a mené une inspection extraordinaire de la JKP Mediana de Niš, qui avait installé 80 dispositifs GPS sur les conteneurs à déchets, contestés par les agents d’hygiène car ils suivraient indirectement leurs déplacements ; l’inspection a constaté que les conteneurs n’avaient pas été mis en service. L’absence d’AIPD ou de demande d’avis est sanctionnée par une amende de 50 000 à 2 000 000 RSD pour la personne morale.',
      es: 'No consta una multa específica y publicada del Poverenik por el GPS sobre empleados. En 2026 el Poverenik realizó una inspección extraordinaria a la JKP Mediana de Niš, que había instalado 80 dispositivos GPS en los contenedores de basura, impugnados por los trabajadores de higiene porque rastrearían indirectamente sus movimientos; la inspección constató que los contenedores no se habían puesto en funcionamiento. La falta de EIPD o de solicitud de dictamen se sanciona con una multa de 50.000 a 2.000.000 RSD para la persona jurídica.',
      pt: "Não consta nenhuma coima específica e publicada do Poverenik por GPS aplicado a trabalhadores. Em 2026, o Poverenik realizou uma inspeção extraordinária à JKP Mediana de Niš, que tinha instalado 80 dispositivos GPS nos contentores do lixo, contestados pelos trabalhadores da higiene urbana porque acompanhariam indiretamente os seus movimentos; a inspeção constatou que os contentores não tinham sido postos em funcionamento. A falta de AIPD ou de pedido de parecer é sancionada com uma coima de 50.000 a 2.000.000 RSD para a pessoa coletiva.",
      da: 'Der findes ingen specifik, offentliggjort bøde fra Poverenik for GPS på medarbejdere. I 2026 gennemførte Poverenik en ekstraordinær inspektion hos JKP Mediana i Niš, som havde installeret 80 GPS-enheder på affaldscontainerne, hvilket renovationsarbejderne anfægtede, fordi de indirekte ville spore deres bevægelser; inspektionen konstaterede, at containerne ikke var taget i brug. Manglende gennemførelse af konsekvensanalysen eller manglende anmodning om udtalelsen straffes med en bøde på 50.000 til 2.000.000 RSD for den juridiske enhed.',
      sv: 'Det finns inget specifikt, offentliggjort vite från Poverenik för GPS på anställda. År 2026 genomförde Poverenik en extra inspektion hos JKP Mediana i Niš, som hade installerat 80 GPS-enheter på avfallsbehållare, vilka de anställda inom renhållningen protesterade mot eftersom de skulle indirekt spåra deras förflyttningar; av inspektionen framgår att behållarna inte hade tagits i bruk. Utebliven DPIA eller begäran om yttrande bestraffas med en sanktion på 50 000 till 2 000 000 RSD för en juridisk person.',
      nb: 'Det finnes ingen spesifikk, offentliggjort bot fra Poverenik for GPS på ansatte. I 2026 gjennomførte Poverenik en ekstraordinær inspeksjon hos JKP Mediana i Niš, som hadde installert 80 GPS-enheter på avfallscontainere, noe renovasjonsarbeiderne protesterte mot fordi de indirekte ville spore bevegelsene deres; inspeksjonen fastslo at containerne ikke var tatt i bruk. Unnlatt DPIA eller unnlatt anmodning om uttalelse straffes med en bot på 50 000 til 2 000 000 RSD for den juridiske personen.',
      nl: 'Er is geen specifieke, gepubliceerde boete van de Poverenik voor GPS op werknemers bekend. In 2026 voerde de Poverenik een buitengewone inspectie uit bij JKP Mediana in Nis, dat 80 GPS-apparaten op de afvalcontainers had geïnstalleerd, aangevochten door de schoonmaakmedewerkers omdat die indirect hun bewegingen zouden volgen; de inspectie stelde vast dat de containers niet in gebruik waren genomen. Het niet uitvoeren van de DPIA of het niet inwinnen van het advies wordt bestraft met een boete van 50.000 tot 2.000.000 RSD voor de rechtspersoon.',
    },
    urlFonte: FONTE_DANAS_MEDIANA.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_LPDP,
    FONTE_LISTA_DPIA,
    FONTE_POVERENIK,
    FONTE_DANAS_MEDIANA,
    FONTE_N1_MEDIANA,
    FONTE_EDPB_CONSENSO,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-10-16',
};
