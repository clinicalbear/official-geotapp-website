/**
 * Scheda-paese Norvegia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Arbeidsmiljoloven cap. 9 (misure di controllo, §§ 9-1 e 9-2), guida del
 * Datatilsynet su GPS e tracciamento dei veicoli aziendali, guida del
 * Datatilsynet su quando svolgere una valutazione d'impatto, decisione
 * Personvernnemnda PVN-2017-07 e GDPR.
 *
 * La Norvegia (SEE) ha un'unica autorita garante nazionale, il Datatilsynet:
 * non c'e' alcuna ripartizione regionale. Nessun numero, URL o autorita' e'
 * inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_AML_KAP9 = {
  titolo:
    'Arbeidsmiljoloven, kap. 9 (misure di controllo, §§ 9-1 e 9-2)',
  url: 'https://lovdata.no/nav/lov/2005-06-17-62/kap9',
};
const FONTE_DATATILSYNET_VEICOLI = {
  titolo:
    'Datatilsynet (Norvegia), GPS e tracciamento dei veicoli aziendali',
  url: 'https://www.datatilsynet.no/personvern-pa-ulike-omrader/personvern-pa-arbeidsplassen/overvaking-kjoretoy/',
};
const FONTE_DATATILSYNET_DPIA = {
  titolo:
    "Datatilsynet (Norvegia), quando svolgere una valutazione d'impatto",
  url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/vurdering-av-personvernkonsekvenser/nar-ma-man-gjennomfore-en-vurdering-av-personvernkonsekvenser/',
};
const FONTE_DATATILSYNET = {
  titolo: 'Datatilsynet (autorità garante norvegese)',
  url: 'https://www.datatilsynet.no/en/',
};
const FONTE_PVN_2017_07 = {
  titolo:
    'Personvernnemnda, PVN-2017-07 (uso del GPS per controllare le ore del dipendente)',
  url: 'https://personvernnemnda.no/2017/08/26/pvn-2017-07-arbeidsgivers-bruk-av-innsamlede-opplysninger-til-et-nytt-formal-overtredelsesgebyr/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const norvegia: SchedaPaese = {
  codiceISO: 'NO',
  slugCanonico: 'norvegia',
  nome: 'Norvegia',
  nomi: {
    it: 'Norvegia',
    en: 'Norway',
    'en-us': 'Norway',
    'en-gb': 'Norway',
    'en-au': 'Norway',
    'en-ie': 'Norway',
    'en-ca': 'Norway',
    de: 'Norwegen',
    nl: 'Noorwegen',
    fr: 'Norvège',
    es: 'Noruega',
    pt: 'Noruega',
    da: 'Norge',
    sv: 'Norge',
    nb: 'Norge',
    ru: 'Норвегия',
  },
  bandiera: '🇳🇴',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: {
      it: 'Datatilsynet (autorità garante norvegese)',
      en: 'Datatilsynet (Norwegian data protection authority)',
      de: 'Datatilsynet (norwegische Datenschutzbehörde)',
      fr: 'Datatilsynet (autorité norvégienne de protection des données)',
      es: 'Datatilsynet (autoridad noruega de protección de datos)',
      nl: 'Datatilsynet (Noorse gegevensbeschermingsautoriteit)',
      pt: 'Datatilsynet (autoridade norueguesa de proteção de dados)',
      da: 'Datatilsynet (norsk databeskyttelsesmyndighed)',
      sv: 'Datatilsynet (norska dataskyddsmyndigheten)',
      nb: 'Datatilsynet',
      ru: 'Datatilsynet (норвежский орган по защите данных)',
    },
    portale: FONTE_DATATILSYNET.url,
    urlFonte: FONTE_DATATILSYNET.url,
    verificatoIl: '2026-09-30',
    note: {
      it: "La Norvegia (SEE) ha un'unica autorità nazionale, il Datatilsynet; nessuna ripartizione regionale.",
      en: 'Norway (EEA) has a single national authority, the Datatilsynet; there is no regional breakdown.',
      de: 'Norwegen (EWR) hat eine einzige nationale Behörde, das Datatilsynet; es gibt keine regionale Aufteilung.',
      fr: 'La Norvège (EEE) dispose d’une seule autorité nationale, le Datatilsynet ; il n’y a aucune répartition régionale.',
      es: 'Noruega (EEE) tiene una única autoridad nacional, el Datatilsynet; no existe ninguna división regional.',
      pt: "A Noruega (EEE) tem uma única autoridade nacional, o Datatilsynet; não existe qualquer divisão regional.",
      da: 'Norge (EØS) har én national myndighed, Datatilsynet; der er ingen regional opdeling.',
      sv: 'Norge (EES) har en enda nationell myndighet, Datatilsynet; det finns ingen regional uppdelning.',
      nl: 'Noorwegen (EER) heeft een enkele nationale autoriteit, het Datatilsynet; er is geen regionale onderverdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Motivo oggettivo (saklig grunn) e non sproporzionato (Arbeidsmiljøloven § 9-1)',
        en: 'Objective reason (saklig grunn) and not disproportionate (Arbeidsmiljoloven § 9-1)',
        de: 'Sachlicher Grund (saklig grunn) und nicht unverhältnismäßig (Arbeidsmiljoloven § 9-1)',
        fr: 'Motif objectif (saklig grunn) et non disproportionné (Arbeidsmiljoloven § 9-1)',
        es: 'Motivo objetivo (saklig grunn) y no desproporcionado (Arbeidsmiljøloven § 9-1)',
        pt: "Motivo objetivo (saklig grunn) e não desproporcionado (Arbeidsmiljøloven § 9-1)",
        da: 'Saglig grund (saklig grunn) og ikke uforholdsmæssig (Arbeidsmiljøloven § 9-1)',
        sv: 'Saklig grunn och inte oforholdsmessig (Arbeidsmiljøloven § 9-1)',
        nl: 'Objectieve reden (saklig grunn) en niet onevenredig (Arbeidsmiljoloven § 9-1)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Una misura di controllo (incluso il GPS) è ammessa solo se ha un motivo oggettivo nelle esigenze dell'impresa e non comporta un onere sproporzionato per il lavoratore.",
        en: "A control measure (including GPS) is permitted only if it has an objective reason rooted in the business's needs and does not impose a disproportionate burden on the worker.",
        de: 'Eine Kontrollmaßnahme (einschließlich GPS) ist nur zulässig, wenn sie einen sachlichen Grund in den Bedürfnissen des Unternehmens hat und keine unverhältnismäßige Belastung für den Arbeitnehmer darstellt.',
        fr: 'Une mesure de contrôle (y compris le GPS) n’est admise que si elle repose sur un motif objectif lié aux besoins de l’entreprise et n’impose pas une charge disproportionnée au travailleur.',
        es: 'Una medida de control (incluido el GPS) solo se admite si tiene un motivo objetivo basado en las necesidades de la empresa y no supone una carga desproporcionada para el trabajador.',
        pt: "Uma medida de controlo (incluindo o GPS) só é admitida se tiver um motivo objetivo assente nas necessidades da empresa e não implicar um encargo desproporcionado para o trabalhador.",
        da: 'En kontrolforanstaltning (herunder GPS) er kun tilladt, hvis den har en saglig grund, som er begrundet i virksomhedens behov, og ikke pålægger medarbejderen en uforholdsmæssig byrde.',
        sv: 'En kontrollåtgärd (inklusive GPS) är tillåten endast om den har en saklig grund i verksamhetens behov och inte innebär en oproportionerlig belastning för den anställde.',
        nl: 'Een controlemaatregel (waaronder GPS) is alleen toegestaan als deze een objectieve reden heeft in de behoeften van de onderneming en geen onevenredige last voor de werknemer oplevert.',
      },
      fonte: FONTE_AML_KAP9,
    },
    {
      voce: {
        it: 'Discussione preventiva con i rappresentanti (tillitsvalgte) (§ 9-2)',
        en: 'Prior discussion with the employee representatives (tillitsvalgte) (§ 9-2)',
        de: 'Vorherige Erörterung mit den Arbeitnehmervertretern (tillitsvalgte) (§ 9-2)',
        fr: 'Discussion préalable avec les représentants du personnel (tillitsvalgte) (§ 9-2)',
        es: 'Discusión previa con los representantes de los trabajadores (tillitsvalgte) (§ 9-2)',
        pt: "Discussão prévia com os representantes dos trabalhadores (tillitsvalgte) (§ 9-2)",
        da: 'Forudgående drøftelse med medarbejdernes repræsentanter (tillitsvalgte) (§ 9-2)',
        sv: 'Diskussion i förväg med företrädarna (tillitsvalgte) (§ 9-2)',
        nl: 'Voorafgaand overleg met de werknemersvertegenwoordigers (tillitsvalgte) (§ 9-2)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: 'Il datore deve discutere il prima possibile la misura con i rappresentanti dei lavoratori. Vale dove esistono rappresentanti (tillitsvalgte).',
        en: 'The employer must discuss the measure with the employee representatives as soon as possible. This applies where representatives (tillitsvalgte) exist.',
        de: 'Der Arbeitgeber muss die Maßnahme so früh wie möglich mit den Arbeitnehmervertretern erörtern. Dies gilt, wo Vertreter (tillitsvalgte) vorhanden sind.',
        fr: 'L’employeur doit discuter de la mesure avec les représentants du personnel le plus tôt possible. Cela vaut là où des représentants (tillitsvalgte) existent.',
        es: 'El empleador debe discutir la medida con los representantes de los trabajadores lo antes posible. Se aplica donde existen representantes (tillitsvalgte).',
        pt: "A entidade empregadora deve discutir a medida com os representantes dos trabalhadores o mais cedo possível. Aplica-se onde existam representantes (tillitsvalgte).",
        da: 'Arbejdsgiveren skal drøfte foranstaltningen med medarbejdernes repræsentanter så tidligt som muligt. Det gælder, hvor der findes repræsentanter (tillitsvalgte).',
        sv: 'Arbetsgivaren ska så tidigt som möjligt diskutera åtgärden med de anställdas företrädare. Gäller där det finns företrädare (tillitsvalgte).',
        nl: 'De werkgever moet de maatregel zo vroeg mogelijk met de werknemersvertegenwoordigers bespreken. Dit geldt waar vertegenwoordigers (tillitsvalgte) bestaan.',
      },
      fonte: FONTE_AML_KAP9,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorization from an authority before installing',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: 'Autorisation préalable d’une autorité avant l’installation',
        es: 'Autorización previa de una autoridad antes de instalar',
        pt: "Autorização prévia de uma autoridade antes de instalar",
        da: 'Forudgående tilladelse fra en myndighed før installation',
        sv: 'Förhandstillstånd från en myndighet innan systemet installeras',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: 'Il capitolo 9 non prevede alcuna autorizzazione preventiva del Datatilsynet; la liceità è responsabilità del titolare.',
        en: 'Chapter 9 provides for no prior authorization from the Datatilsynet; lawfulness is the responsibility of the controller.',
        de: 'Kapitel 9 sieht keine vorherige Genehmigung des Datatilsynet vor; die Rechtmäßigkeit liegt in der Verantwortung des Verantwortlichen.',
        fr: 'Le chapitre 9 ne prévoit aucune autorisation préalable du Datatilsynet ; la licéité relève de la responsabilité du responsable du traitement.',
        es: 'El capítulo 9 no prevé ninguna autorización previa del Datatilsynet; la licitud es responsabilidad del responsable del tratamiento.',
        pt: "O capítulo 9 não prevê qualquer autorização prévia do Datatilsynet; a licitude é da responsabilidade do responsável pelo tratamento.",
        da: 'Kapitel 9 kræver ingen forudgående tilladelse fra Datatilsynet; lovligheden er den dataansvarliges ansvar.',
        sv: 'Kapitel 9 föreskriver inget förhandstillstånd från Datatilsynet; lagligheten är den personuppgiftsansvariges ansvar.',
        nl: 'Hoofdstuk 9 voorziet niet in voorafgaande toestemming van het Datatilsynet; de rechtmatigheid is de verantwoordelijkheid van de verwerkingsverantwoordelijke.',
      },
      fonte: FONTE_AML_KAP9,
    },
    {
      voce: {
        it: 'Informazione preventiva ai lavoratori (scopo, conseguenze, durata; § 9-2 + art. 13 GDPR)',
        en: 'Prior information to workers (purpose, consequences, duration; § 9-2 + Art. 13 GDPR)',
        de: 'Vorherige Information der Arbeitnehmer (Zweck, Folgen, Dauer; § 9-2 + Art. 13 DSGVO)',
        fr: 'Information préalable des travailleurs (finalité, conséquences, durée ; § 9-2 + art. 13 RGPD)',
        es: 'Información previa a los trabajadores (finalidad, consecuencias, duración; § 9-2 + art. 13 RGPD)',
        pt: "Informação prévia aos trabalhadores (finalidade, consequências, duração; § 9-2 + art. 13.º do RGPD)",
        da: 'Forudgående information til medarbejderne (formål, konsekvenser, varighed; § 9-2 + art. 13 i GDPR)',
        sv: 'Information i förväg till de anställda (ändamål, konsekvenser, varaktighet; § 9-2 + art. 13 GDPR)',
        nl: 'Voorafgaande informatie aan de werknemers (doel, gevolgen, duur; § 9-2 + art. 13 AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Prima di attivare, il datore informa i lavoratori su scopo della misura, conseguenze pratiche (come sarà svolta) e durata prevista.',
        en: 'Before activating it, the employer informs the workers about the purpose of the measure, the practical consequences (how it will be carried out) and the expected duration.',
        de: 'Vor der Aktivierung informiert der Arbeitgeber die Arbeitnehmer über den Zweck der Maßnahme, die praktischen Folgen (wie sie durchgeführt wird) und die voraussichtliche Dauer.',
        fr: 'Avant de l’activer, l’employeur informe les travailleurs de la finalité de la mesure, des conséquences pratiques (comment elle sera mise en œuvre) et de la durée prévue.',
        es: 'Antes de activarla, el empleador informa a los trabajadores sobre la finalidad de la medida, las consecuencias prácticas (cómo se llevará a cabo) y la duración prevista.',
        pt: "Antes de a ativar, a entidade empregadora informa os trabalhadores sobre a finalidade da medida, as consequências práticas (como será executada) e a duração prevista.",
        da: 'Før foranstaltningen aktiveres, informerer arbejdsgiveren medarbejderne om dens formål, de praktiske konsekvenser (hvordan den gennemføres) og den forventede varighed.',
        sv: 'Innan åtgärden aktiveras informerar arbetsgivaren de anställda om åtgärdens ändamål, de praktiska konsekvenserna (hur den kommer att genomföras) och den beräknade varaktigheten.',
        nl: 'Voordat de werkgever deze activeert, informeert hij de werknemers over het doel van de maatregel, de praktische gevolgen (hoe deze wordt uitgevoerd) en de verwachte duur.',
      },
      fonte: FONTE_AML_KAP9,
    },
    {
      voce: {
        it: 'GPS sui veicoli solo per la finalità dichiarata, senza riuso per valutare il rendimento',
        en: 'GPS on vehicles only for the stated purpose, with no reuse to assess performance',
        de: 'GPS in Fahrzeugen nur für den angegebenen Zweck, ohne Weiterverwendung zur Leistungsbewertung',
        fr: 'GPS sur les véhicules uniquement pour la finalité déclarée, sans réutilisation pour évaluer le rendement',
        es: 'GPS en los vehículos solo para la finalidad declarada, sin reutilización para evaluar el rendimiento',
        pt: "GPS nos veículos apenas para a finalidade declarada, sem reutilização para avaliar o desempenho",
        da: 'GPS på køretøjer kun til det angivne formål, uden genbrug til at vurdere præstation',
        sv: 'GPS i fordon endast för det angivna ändamålet, utan återanvändning för att bedöma prestation',
        nl: 'GPS op voertuigen alleen voor het verklaarde doel, zonder hergebruik om de prestaties te beoordelen',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il GPS sui veicoli è normalmente una misura di controllo: lo scopo va specificato, e i dati raccolti non possono essere riusati per valutare il rendimento dei dipendenti.',
        en: 'GPS on vehicles is normally a control measure: the purpose must be specified, and the collected data cannot be reused to assess employees\' performance.',
        de: 'GPS in Fahrzeugen ist normalerweise eine Kontrollmaßnahme: Der Zweck muss angegeben werden, und die erhobenen Daten dürfen nicht zur Bewertung der Leistung der Arbeitnehmer weiterverwendet werden.',
        fr: 'Le GPS sur les véhicules est normalement une mesure de contrôle : la finalité doit être précisée, et les données collectées ne peuvent pas être réutilisées pour évaluer le rendement des salariés.',
        es: 'El GPS en los vehículos es normalmente una medida de control: la finalidad debe especificarse, y los datos recopilados no pueden reutilizarse para evaluar el rendimiento de los empleados.',
        pt: "O GPS nos veículos é normalmente uma medida de controlo: a finalidade deve ser especificada, e os dados recolhidos não podem ser reutilizados para avaliar o desempenho dos trabalhadores.",
        da: 'GPS på køretøjer er normalt en kontrolforanstaltning: formålet skal være fastlagt, og de indsamlede oplysninger må ikke genbruges til at vurdere medarbejdernes præstation.',
        sv: 'GPS i fordon är normalt en kontrollåtgärd: ändamålet ska anges, och de insamlade uppgifterna får inte återanvändas för att bedöma de anställdas prestation.',
        nl: 'GPS op voertuigen is normaal gesproken een controlemaatregel: het doel moet worden gespecificeerd en de verzamelde gegevens mogen niet worden hergebruikt om de prestaties van werknemers te beoordelen.',
      },
      fonte: FONTE_DATATILSYNET_VEICOLI,
    },
    {
      voce: {
        it: "Valutazione d'impatto per il monitoraggio sistematico dei dipendenti e i dati di localizzazione",
        en: 'Data protection impact assessment for systematic monitoring of employees and location data',
        de: 'Datenschutz-Folgenabschätzung für die systematische Überwachung der Arbeitnehmer und Standortdaten',
        fr: 'Analyse d’impact relative à la protection des données pour la surveillance systématique des salariés et les données de localisation',
        es: 'Evaluación de impacto relativa a la protección de datos para la supervisión sistemática de los empleados y los datos de localización',
        pt: "Avaliação de impacto sobre a proteção de dados para a monitorização sistemática dos trabalhadores e os dados de localização",
        da: 'Konsekvensanalyse for systematisk overvågning af medarbejdere og positionsdata',
        sv: 'Konsekvensbedömning vid systematisk övervakning av anställda och positionsuppgifter',
        nl: 'Gegevensbeschermingseffectbeoordeling voor systematische monitoring van werknemers en locatiegegevens',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il Datatilsynet richiede sempre una valutazione d'impatto per il monitoraggio sistematico dei dipendenti, e per i dati di localizzazione combinati con altri criteri di rischio.",
        en: 'The Datatilsynet always requires a data protection impact assessment for the systematic monitoring of employees, and for location data combined with other risk criteria.',
        de: 'Das Datatilsynet verlangt immer eine Datenschutz-Folgenabschätzung für die systematische Überwachung der Arbeitnehmer und für Standortdaten in Kombination mit anderen Risikokriterien.',
        fr: 'Le Datatilsynet exige toujours une analyse d’impact relative à la protection des données pour la surveillance systématique des salariés, et pour les données de localisation combinées à d’autres critères de risque.',
        es: 'El Datatilsynet exige siempre una evaluación de impacto relativa a la protección de datos para la supervisión sistemática de los empleados, y para los datos de localización combinados con otros criterios de riesgo.',
        pt: "O Datatilsynet exige sempre uma avaliação de impacto sobre a proteção de dados para a monitorização sistemática dos trabalhadores, e para os dados de localização combinados com outros critérios de risco.",
        da: 'Datatilsynet kræver altid en konsekvensanalyse for systematisk overvågning af medarbejdere og for positionsdata kombineret med andre risikokriterier.',
        sv: 'Datatilsynet kräver alltid en konsekvensbedömning vid systematisk övervakning av anställda, och för positionsuppgifter i kombination med andra riskkriterier.',
        nl: 'Het Datatilsynet vereist altijd een gegevensbeschermingseffectbeoordeling voor de systematische monitoring van werknemers en voor locatiegegevens in combinatie met andere risicocriteria.',
      },
      fonte: FONTE_DATATILSYNET_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Verifica un motivo oggettivo (saklig grunn) e che la misura non sia sproporzionata (§ 9-1).',
        en: 'Check for an objective reason (saklig grunn) and that the measure is not disproportionate (§ 9-1).',
        de: 'Prüfen Sie, ob ein sachlicher Grund (saklig grunn) vorliegt und ob die Maßnahme nicht unverhältnismäßig ist (§ 9-1).',
        fr: 'Vérifiez l’existence d’un motif objectif (saklig grunn) et que la mesure n’est pas disproportionnée (§ 9-1).',
        es: 'Verifica un motivo objetivo (saklig grunn) y que la medida no sea desproporcionada (§ 9-1).',
        pt: "Verifique a existência de um motivo objetivo (saklig grunn) e que a medida não é desproporcionada (§ 9-1).",
        da: 'Kontrollér, at der er en saglig grund (saklig grunn), og at foranstaltningen ikke er uforholdsmæssig (§ 9-1).',
        sv: 'Kontrollera att det finns en saklig grund (saklig grunn) och att åtgärden inte är oproportionerlig (§ 9-1).',
        nl: 'Controleer of er een objectieve reden (saklig grunn) is en dat de maatregel niet onevenredig is (§ 9-1).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Se esistono rappresentanti dei lavoratori, discuti con loro il prima possibile la misura (§ 9-2).',
        en: 'If employee representatives exist, discuss the measure with them as soon as possible (§ 9-2).',
        de: 'Wenn es Arbeitnehmervertreter gibt, erörtern Sie die Maßnahme so früh wie möglich mit ihnen (§ 9-2).',
        fr: 'Si des représentants du personnel existent, discutez de la mesure avec eux le plus tôt possible (§ 9-2).',
        es: 'Si existen representantes de los trabajadores, discute la medida con ellos lo antes posible (§ 9-2).',
        pt: "Se existirem representantes dos trabalhadores, discuta a medida com eles o mais cedo possível (§ 9-2).",
        da: 'Hvis der findes medarbejderrepræsentanter, skal du drøfte foranstaltningen med dem så tidligt som muligt (§ 9-2).',
        sv: 'Om det finns företrädare för de anställda, diskutera åtgärden med dem så tidigt som möjligt (§ 9-2).',
        nl: 'Als er werknemersvertegenwoordigers zijn, bespreek de maatregel dan zo vroeg mogelijk met hen (§ 9-2).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Informa i lavoratori su scopo, conseguenze e durata prima di attivare.',
        en: 'Inform the workers about the purpose, consequences and duration before activating.',
        de: 'Informieren Sie die Arbeitnehmer vor der Aktivierung über Zweck, Folgen und Dauer.',
        fr: 'Informez les travailleurs de la finalité, des conséquences et de la durée avant l’activation.',
        es: 'Informa a los trabajadores sobre la finalidad, las consecuencias y la duración antes de activar.',
        pt: "Informe os trabalhadores sobre a finalidade, as consequências e a duração antes de ativar.",
        da: 'Informér medarbejderne om formål, konsekvenser og varighed, før du aktiverer.',
        sv: 'Informera de anställda om ändamål, konsekvenser och varaktighet innan du aktiverar.',
        nl: 'Informeer de werknemers over het doel, de gevolgen en de duur voordat u activeert.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto per il monitoraggio sistematico o i dati di localizzazione.",
        en: 'Carry out the data protection impact assessment for systematic monitoring or location data.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung für die systematische Überwachung oder Standortdaten durch.',
        fr: 'Réalisez l’analyse d’impact relative à la protection des données pour la surveillance systématique ou les données de localisation.',
        es: 'Realiza la evaluación de impacto relativa a la protección de datos para la supervisión sistemática o los datos de localización.',
        pt: "Realize a avaliação de impacto sobre a proteção de dados para a monitorização sistemática ou os dados de localização.",
        da: 'Gennemfør konsekvensanalysen for systematisk overvågning eller positionsdata.',
        sv: 'Genomför konsekvensbedömningen vid systematisk övervakning eller positionsuppgifter.',
        nl: 'Voer de gegevensbeschermingseffectbeoordeling uit voor systematische monitoring of locatiegegevens.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: solo finalità dichiarata, niente riuso per valutare il rendimento.',
        en: 'Configure the system: stated purpose only, no reuse to assess performance.',
        de: 'Konfigurieren Sie das System: nur für den angegebenen Zweck, keine Weiterverwendung zur Leistungsbewertung.',
        fr: 'Configurez le système : finalité déclarée uniquement, aucune réutilisation pour évaluer le rendement.',
        es: 'Configura el sistema: solo la finalidad declarada, sin reutilización para evaluar el rendimiento.',
        pt: "Configure o sistema: apenas a finalidade declarada, sem reutilização para avaliar o desempenho.",
        da: 'Indstil systemet: kun det angivne formål, intet genbrug til at vurdere præstation.',
        sv: 'Konfigurera systemet: endast det angivna ändamålet, ingen återanvändning för att bedöma prestation.',
        nl: 'Configureer het systeem: alleen het verklaarde doel, geen hergebruik om de prestaties te beoordelen.',
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
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'Datatilsynet',
      portale: FONTE_DATATILSYNET.url,
      urlFonte: FONTE_DATATILSYNET.url,
      verificatoIl: '2026-09-30',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '100.000 NOK (circa 8.500 euro)',
      en: '100,000 NOK (about 8,500 euros)',
      de: '100.000 NOK (etwa 8.500 Euro)',
      fr: '100 000 NOK (environ 8 500 euros)',
      es: '100.000 NOK (unos 8.500 euros)',
      pt: "100.000 NOK (cerca de 8.500 euros)",
      da: '100.000 NOK (ca. 8.500 euro)',
      sv: '100 000 NOK (cirka 8 500 euro)',
      nl: '100.000 NOK (ongeveer 8.500 euro)',
    },
    casoCitato: {
      it: "Personvernnemnda, PVN-2017-07: un datore confrontava i dati GPS del veicolo aziendale con i fogli ore del dipendente, a sua insaputa, per controllare se avesse lavorato le ore dichiarate, riusando i dati per un nuovo scopo senza base giuridica. Deciso sotto la vecchia legge pre-GDPR, ma il principio (vietato riusare il GPS per controllare le ore) è confermato dalle linee guida attuali del Datatilsynet.",
      en: "Personvernnemnda, PVN-2017-07: an employer compared the GPS data of the company vehicle with the employee's timesheets, without the employee's knowledge, to check whether they had worked the declared hours, reusing the data for a new purpose without a legal basis. Decided under the old pre-GDPR law, but the principle (reusing GPS to check working hours is prohibited) is confirmed by the Datatilsynet's current guidelines.",
      de: 'Personvernnemnda, PVN-2017-07: Ein Arbeitgeber verglich die GPS-Daten des Firmenfahrzeugs ohne Wissen des Arbeitnehmers mit dessen Stundenzetteln, um zu prüfen, ob dieser die angegebenen Stunden gearbeitet hatte, und verwendete die Daten ohne Rechtsgrundlage für einen neuen Zweck weiter. Entschieden nach dem alten Recht vor der DSGVO, aber der Grundsatz (die Weiterverwendung von GPS zur Kontrolle der Arbeitszeiten ist verboten) wird durch die aktuellen Leitlinien des Datatilsynet bestätigt.',
      fr: 'Personvernnemnda, PVN-2017-07 : un employeur comparait les données GPS du véhicule de l’entreprise avec les feuilles d’heures du salarié, à son insu, pour vérifier s’il avait effectué les heures déclarées, réutilisant les données pour une nouvelle finalité sans base légale. Décidé sous l’ancienne loi antérieure au RGPD, mais le principe (la réutilisation du GPS pour contrôler les heures est interdite) est confirmé par les lignes directrices actuelles du Datatilsynet.',
      es: "Personvernnemnda, PVN-2017-07: un empleador comparaba los datos GPS del vehículo de la empresa con las hojas de horas del empleado, sin su conocimiento, para comprobar si había trabajado las horas declaradas, reutilizando los datos para una nueva finalidad sin base jurídica. Decidido bajo la antigua ley, anterior al RGPD, pero el principio (está prohibido reutilizar el GPS para controlar las horas) lo confirman las directrices actuales del Datatilsynet.",
      pt: "Personvernnemnda, PVN-2017-07: uma entidade empregadora comparava os dados GPS do veículo da empresa com as folhas de horas do trabalhador, sem o seu conhecimento, para verificar se tinha trabalhado as horas declaradas, reutilizando os dados para uma nova finalidade sem base jurídica. Decidido ao abrigo da lei antiga, anterior ao RGPD, mas o princípio (é proibido reutilizar o GPS para controlar as horas) é confirmado pelas orientações atuais do Datatilsynet.",
      da: 'Personvernnemnda, PVN-2017-07: en arbejdsgiver sammenlignede firmabilens GPS-data med medarbejderens timesedler uden medarbejderens vidende for at kontrollere, om vedkommende havde arbejdet de angivne timer, og genbrugte dermed oplysningerne til et nyt formål uden retsgrundlag. Afgjort efter den gamle lov fra før GDPR, men princippet (at genbrug af GPS til at kontrollere arbejdstid er forbudt) bekræftes af Datatilsynets nuværende vejledninger.',
      sv: 'Personvernnemnda, PVN-2017-07: en arbetsgivare jämförde GPS-uppgifterna från tjänstefordonet med den anställdes tidrapporter, utan hans eller hennes vetskap, för att kontrollera om han eller hon hade arbetat de angivna timmarna, och återanvände därmed uppgifterna för ett nytt ändamål utan rättslig grund. Avgjort enligt den gamla lagen före GDPR, men principen (det är förbjudet att återanvända GPS för att kontrollera timmar) bekräftas av Datatilsynets nuvarande riktlinjer.',
      nl: 'Personvernnemnda, PVN-2017-07: een werkgever vergeleek de GPS-gegevens van het bedrijfsvoertuig zonder medeweten van de werknemer met diens urenstaten om te controleren of deze de opgegeven uren had gewerkt, waarbij de gegevens zonder rechtsgrond voor een nieuw doel werden hergebruikt. Beslist onder de oude wet van voor de AVG, maar het beginsel (het hergebruik van GPS om de uren te controleren is verboden) wordt bevestigd door de huidige richtlijnen van het Datatilsynet.',
    },
    urlFonte: FONTE_PVN_2017_07.url,
    tipoImporto: 'caso-gps',
  },

  fonti: [
    FONTE_AML_KAP9,
    FONTE_DATATILSYNET_VEICOLI,
    FONTE_DATATILSYNET_DPIA,
    FONTE_DATATILSYNET,
    FONTE_PVN_2017_07,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
