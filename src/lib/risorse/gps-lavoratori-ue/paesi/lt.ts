/**
 * Scheda-paese Lituania per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * parere WP249 del Gruppo art. 29 (informazione, interesse legittimo, veicoli),
 * lista VDAI dei trattamenti che richiedono una DPIA, decisione
 * VDAI del 2022 sulla corrispondenza personale di un dipendente, servizi e
 * reclami del VDAI e GDPR.
 *
 * La Lituania ha un'unica autorità' nazionale, il VDAI, senza ripartizione
 * regionale. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_WP249 = {
  titolo:
    'Gruppo art. 29, parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli',
  url: 'https://ec.europa.eu/newsroom/article29/redirection/document/45631',
};
const FONTE_VDAI_DPIA = {
  titolo:
    'VDAI, lista dei trattamenti che richiedono una DPIA (voce 10: monitoraggio dei dipendenti)',
  url: 'https://www.edpb.europa.eu/sites/default/files/decisions/lt-dpia_list_en_20190314.pdf',
};
const FONTE_VDAI_CORRISPONDENZA = {
  titolo:
    'VDAI, decisione sul trattamento della corrispondenza personale di un dipendente (2022)',
  url: 'https://www.edpb.europa.eu/news/national-news/2023/lithuanian-sa-adopted-decision-processing-employees-personal-correspondence_en',
};
const FONTE_VDAI_DECISIONI = {
  titolo: 'VDAI, elenco delle decisioni (multe, ordini e altro) fino al 2025',
  url: 'https://vdai.lrv.lt/lt/sprendimai/vdai-sprendimai-baudos-nurodymai-ir-kt/',
};
const FONTE_VDAI_SERVIZI = {
  titolo: 'VDAI (Garante lituano), servizi e reclami',
  url: 'https://vdai.lrv.lt/en/services/',
};
const FONTE_ADTAI_5 = {
  titolo: 'Legge lituana sulla protezione giuridica dei dati personali (ADTAĮ), art. 5 c. 4, testo consolidato',
  url: 'https://www.infolex.lt/ta/51494',
  nonUfficiale: 'banca-dati' as const,
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const lituania: SchedaPaese = {
  codiceISO: 'LT',
  slugCanonico: 'lituania',
  nome: 'Lituania',
  nomi: {
    it: 'Lituania',
    en: 'Lithuania',
    'en-us': 'Lithuania',
    'en-gb': 'Lithuania',
    'en-au': 'Lithuania',
    'en-ie': 'Lithuania',
    'en-ca': 'Lithuania',
    de: 'Litauen',
    nl: 'Litouwen',
    fr: 'Lituanie',
    es: 'Lituania',
    pt: 'Lituânia',
    da: 'Litauen',
    sv: 'Litauen',
    nb: 'Litauen',
    ru: 'Литва',
  },
  bandiera: '🇱🇹',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: {
      it: 'VDAI (Valstybinė duomenų apsaugos inspekcija, Garante lituano)',
      en: 'VDAI (Valstybine duomenu apsaugos inspekcija, Lithuanian data protection authority)',
      de: 'VDAI (Valstybine duomenu apsaugos inspekcija, litauische Datenschutzbehörde)',
      fr: 'VDAI (Valstybine duomenu apsaugos inspekcija, autorité lituanienne de protection des données)',
      es: 'VDAI (Valstybinė duomenų apsaugos inspekcija, autoridad lituana de protección de datos)',
      nl: 'VDAI (Valstybine duomenu apsaugos inspekcija, Litouwse gegevensbeschermingsautoriteit)',
      pt: 'VDAI (Valstybine duomenu apsaugos inspekcija, autoridade lituana de proteção de dados)',
      da: 'VDAI (Valstybinė duomenų apsaugos inspekcija, litauisk databeskyttelsesmyndighed)',
      sv: 'VDAI (Valstybine duomenu apsaugos inspekcija, litauiska dataskyddsmyndigheten)',
      nb: 'VDAI (Valstybine duomenu apsaugos inspekcija, litauisk datatilsyn)',
      ru: 'VDAI (Valstybine duomenu apsaugos inspekcija, литовский орган по защите данных)',
    },
    portale: FONTE_VDAI_SERVIZI.url,
    urlFonte: FONTE_VDAI_SERVIZI.url,
    verificatoIl: '2026-09-30',
    note: {
      it: "La Lituania ha un'unica autorità nazionale, il VDAI; nessuna ripartizione regionale.",
      en: 'Lithuania has a single national authority, the VDAI; there is no regional split.',
      de: 'Litauen hat eine einzige nationale Behörde, das VDAI; es gibt keine regionale Aufteilung.',
      fr: 'La Lituanie dispose d’une seule autorité nationale, le VDAI ; il n’y a pas de répartition régionale.',
      es: 'Lituania cuenta con una única autoridad nacional, el VDAI; no hay reparto regional.',
      pt: "A Lituânia tem uma única autoridade nacional, a VDAI; não existe repartição regional.",
      da: 'Litauen har én national myndighed, VDAI; der er ingen regional opdeling.',
      sv: 'Litauen har en enda nationell myndighet, VDAI; det finns ingen regional uppdelning.',
      nb: 'Litauen har én nasjonal myndighet, VDAI; det er ingen regional oppdeling.',
      nl: 'Litouwen heeft een enkele nationale autoriteit, het VDAI; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione preventiva e chiara ai lavoratori sul tracciamento (GDPR art. 13) e informazione scritta con firma o comunque provabile (ADTAĮ art. 5 c. 4)',
        en: 'Clear prior information to workers about tracking (GDPR art. 13) and written information acknowledged by signature or otherwise provable (ADTAĮ art. 5(4))',
        de: 'Klare vorherige Information der Arbeitnehmer über die Ortung (DSGVO Art. 13) und schriftliche Information gegen Unterschrift oder auf andere nachweisbare Weise (ADTAĮ Art. 5 Abs. 4)',
        fr: 'Information préalable et claire des travailleurs sur le suivi (RGPD art. 13) et information écrite contre signature ou autrement prouvable (ADTAĮ art. 5, al. 4)',
        es: 'Información previa y clara a los trabajadores sobre el seguimiento (RGPD art. 13) e información por escrito con firma o de otro modo acreditable (ADTAĮ art. 5, apdo. 4)',
        pt: "Informação prévia e clara aos trabalhadores sobre o seguimento (RGPD, art. 13.º) e informação escrita com assinatura ou, em todo o caso, comprovável (ADTAĮ, art. 5, n.º 4)",
        da: 'Klar forudgående information til medarbejderne om sporingen (GDPR art. 13) og skriftlig information med underskrift eller på anden måde dokumenterbar (ADTAĮ art. 5, stk. 4)',
        sv: 'Tydlig information i förväg till arbetstagarna om spårningen (GDPR art. 13) och skriftlig information med underskrift eller på annat sätt styrkt (ADTAĮ art. 5 st. 4)',
        nb: 'Tydelig forhåndsinformasjon til de ansatte om sporingen (GDPR art. 13) og skriftlig informasjon med underskrift eller på annen måte som kan dokumenteres (ADTAĮ art. 5 nr. 4)',
        nl: 'Duidelijke voorafgaande informatie aan werknemers over het volgen (AVG art. 13) en schriftelijke informatie tegen handtekening of op een andere aantoonbare manier (ADTAĮ art. 5, lid 4)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore deve dire chiaramente ai lavoratori che sul veicolo aziendale c'è un dispositivo di localizzazione e che i loro spostamenti vengono registrati, prima di cominciare (GDPR art. 13; parere WP249 del Gruppo art. 29, ripreso dall'EDPB). L'art. 27 del Codice del lavoro lituano tutela la vita privata e i dati dei lavoratori e la segretezza della loro corrispondenza personale, ma non contiene una regola specifica sul tracciamento. La legge lituana sulla protezione giuridica dei dati personali (ADTAĮ, art. 5 c. 4, testo in vigore dal 1° luglio 2024) lo dice in modo esplicito: quando si trattano dati sul monitoraggio del comportamento, della posizione o degli spostamenti dei lavoratori, questi vanno informati per iscritto con firma o in un altro modo che provi l'avvenuta informazione, fornendo le informazioni dell'art. 13, par. 1 e 2, GDPR.",
        en: "The employer must clearly tell workers that a tracking device is installed in the company vehicle and that their movements are recorded, before it starts (GDPR art. 13; Article 29 Working Party opinion WP249, endorsed by the EDPB). Article 27 of the Lithuanian Labour Code protects workers' private life and data and the secrecy of their personal correspondence, but contains no specific rule on tracking. The Lithuanian Law on the Legal Protection of Personal Data (ADTAĮ, art. 5(4), text in force since 1 July 2024) says so explicitly: when data on monitoring workers' behaviour, location or movement is processed, the workers must be informed in writing against signature or in another way that proves they were informed, with the information required by GDPR art. 13(1) and (2).",
        de: 'Der Arbeitgeber muss den Arbeitnehmern vor Beginn klar mitteilen, dass im Dienstfahrzeug ein Ortungsgerät eingebaut ist und ihre Bewegungen aufgezeichnet werden (DSGVO Art. 13; Stellungnahme WP249 der Artikel-29-Gruppe, vom EDSA übernommen). Artikel 27 des litauischen Arbeitsgesetzbuchs schützt Privatleben und Daten der Arbeitnehmer und das Geheimnis ihrer persönlichen Korrespondenz, enthält aber keine eigene Regel zur Ortung. Das litauische Gesetz über den rechtlichen Schutz personenbezogener Daten (ADTAĮ, Art. 5 Abs. 4, in Kraft seit dem 1. Juli 2024) sagt es ausdrücklich: Werden Daten zur Überwachung von Verhalten, Standort oder Bewegung der Arbeitnehmer verarbeitet, sind diese schriftlich gegen Unterschrift oder auf eine andere nachweisbare Weise zu informieren, mit den Angaben nach Art. 13 Abs. 1 und 2 DSGVO.',
        fr: 'L’employeur doit indiquer clairement aux travailleurs, avant le début, qu’un dispositif de localisation est installé dans le véhicule de l’entreprise et que leurs déplacements sont enregistrés (RGPD art. 13 ; avis WP249 du groupe de l’article 29, repris par le CEPD). L’article 27 du Code du travail lituanien protège la vie privée et les données des travailleurs et le secret de leur correspondance personnelle, mais ne contient pas de règle spécifique sur le suivi. La loi lituanienne sur la protection juridique des données personnelles (ADTAĮ, art. 5, al. 4, en vigueur depuis le 1er juillet 2024) le dit expressément : lorsque sont traitées des données de suivi du comportement, de la position ou des déplacements des travailleurs, ceux-ci doivent être informés par écrit contre signature ou d’une autre manière qui prouve l’information, avec les éléments de l’art. 13, par. 1 et 2, du RGPD.',
        es: 'El empleador debe informar claramente a los trabajadores, antes de empezar, de que en el vehículo de la empresa hay un dispositivo de localización y de que sus desplazamientos se registran (RGPD art. 13; dictamen WP249 del Grupo del artículo 29, asumido por el CEPD). El artículo 27 del Código del trabajo lituano protege la vida privada y los datos de los trabajadores y el secreto de su correspondencia personal, pero no contiene una regla específica sobre el seguimiento. La ley lituana de protección jurídica de los datos personales (ADTAĮ, art. 5, apdo. 4, en vigor desde el 1 de julio de 2024) lo dice expresamente: cuando se tratan datos de seguimiento del comportamiento, la ubicación o los desplazamientos de los trabajadores, hay que informarles por escrito con firma o de otro modo que acredite la información, con los datos del art. 13, apdo. 1 y 2, del RGPD.',
        pt: "A entidade empregadora deve dizer claramente aos trabalhadores que o veículo da empresa tem um dispositivo de localização e que as suas deslocações são registadas, antes de começar (RGPD, art. 13.º; parecer WP249 do Grupo de Trabalho do artigo 29.º, retomado pelo CEPD). O art. 27 do Código do Trabalho lituano protege a vida privada e os dados dos trabalhadores e o sigilo da sua correspondência pessoal, mas não contém uma regra específica sobre o seguimento. A lei lituana sobre a proteção jurídica dos dados pessoais (ADTAĮ, art. 5, n.º 4, texto em vigor desde 1 de julho de 2024) di-lo de forma explícita: quando se tratam dados sobre a monitorização do comportamento, da localização ou das deslocações dos trabalhadores, estes devem ser informados por escrito com assinatura ou de outro modo que prove que a informação foi prestada, fornecendo as informações do art. 13.º, n.os 1 e 2, do RGPD.",
        da: 'Arbejdsgiveren skal, før det begynder, klart oplyse medarbejderne om, at der er en lokaliseringsenhed i firmabilen, og at deres bevægelser registreres (GDPR art. 13; udtalelse WP249 fra artikel 29-gruppen, videreført af EDPB). Art. 27 i den litauiske arbejdslov beskytter medarbejdernes privatliv og data og fortroligheden af deres personlige korrespondance, men indeholder ingen særlig regel om sporing. Den litauiske lov om retlig beskyttelse af personoplysninger (ADTAĮ, art. 5, stk. 4, tekst i kraft siden 1. juli 2024) siger det udtrykkeligt: når der behandles data om overvågning af medarbejdernes adfærd, position eller bevægelser, skal medarbejderne informeres skriftligt mod underskrift eller på en anden måde, der beviser, at de er informeret, med de oplysninger, der kræves efter art. 13, stk. 1 og 2, i GDPR.',
        sv: 'Arbetsgivaren måste tydligt tala om för arbetstagarna att det finns en spårningsenhet i tjänstefordonet och att deras förflyttningar registreras, innan det börjar (GDPR art. 13; yttrande WP249 från artikel 29-gruppen, som EDPB har ställt sig bakom). Art. 27 i den litauiska arbetslagen skyddar arbetstagarnas privatliv och uppgifter samt hemligheten i deras personliga korrespondens, men innehåller ingen särskild regel om spårning. Den litauiska lagen om rättsligt skydd av personuppgifter (ADTAĮ, art. 5 st. 4, text i kraft sedan den 1 juli 2024) säger det uttryckligen: när uppgifter om övervakning av arbetstagarnas beteende, position eller förflyttningar behandlas ska arbetstagarna informeras skriftligen mot underskrift eller på annat sätt som styrker att de har informerats, med de uppgifter som krävs enligt art. 13.1 och 13.2 GDPR.',
        nb: 'Arbeidsgiveren må før det begynner, tydelig opplyse de ansatte om at det er en lokaliseringsenhet i firmabilen, og at bevegelsene deres registreres (GDPR art. 13; uttalelse WP249 fra Artikkel 29-gruppen, videreført av EDPB). Art. 27 i den litauiske arbeidsloven beskytter de ansattes privatliv og data og fortroligheten i personlig korrespondanse, men inneholder ingen særskilt regel om sporing. Den litauiske loven om rettslig vern av personopplysninger (ADTAĮ, art. 5 nr. 4, tekst i kraft siden 1. juli 2024) sier det uttrykkelig: når det behandles data om overvåking av de ansattes atferd, posisjon eller bevegelser, skal de ansatte informeres skriftlig mot underskrift eller på en annen måte som beviser at de er informert, med opplysningene som kreves etter art. 13 nr. 1 og 2 i GDPR.',
        nl: 'De werkgever moet de werknemers vóór de start duidelijk laten weten dat in het bedrijfsvoertuig een volgsysteem zit en dat hun bewegingen worden vastgelegd (AVG art. 13; advies WP249 van de Groep artikel 29, overgenomen door het EDPB). Artikel 27 van het Litouwse Arbeidswetboek beschermt het privéleven en de gegevens van werknemers en het geheim van hun persoonlijke correspondentie, maar bevat geen specifieke regel over het volgen. De Litouwse wet op de rechtsbescherming van persoonsgegevens (ADTAĮ, art. 5, lid 4, in werking sinds 1 juli 2024) zegt het uitdrukkelijk: wanneer gegevens over het volgen van gedrag, locatie of verplaatsingen van werknemers worden verwerkt, moeten zij schriftelijk tegen handtekening of op een andere aantoonbare manier worden geïnformeerd, met de informatie van art. 13, lid 1 en 2, AVG.',
      },
      fonte: FONTE_ADTAI_5,
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
        it: 'Con il GDPR non serve più alcuna notifica o autorizzazione preventiva; il titolare si autovaluta e conserva la documentazione.',
        en: 'Under the GDPR no prior notification or authorisation is needed any longer; the controller self-assesses and keeps the documentation.',
        de: 'Mit der DSGVO ist keine vorherige Meldung oder Genehmigung mehr erforderlich; der Verantwortliche bewertet selbst und bewahrt die Dokumentation auf.',
        fr: 'Avec le RGPD, aucune notification ou autorisation préalable n’est plus nécessaire ; le responsable du traitement procède à une auto-évaluation et conserve la documentation.',
        es: 'Con el RGPD ya no es necesaria ninguna notificación ni autorización previa; el responsable se autoevalúa y conserva la documentación.',
        pt: "Com o RGPD já não é necessária qualquer notificação ou autorização prévia; o responsável pelo tratamento faz a sua autoavaliação e conserva a documentação.",
        da: 'Med GDPR kræves der ikke længere nogen forudgående anmeldelse eller tilladelse; den dataansvarlige foretager selv vurderingen og opbevarer dokumentationen.',
        sv: 'Med GDPR krävs inte längre någon förhandsanmälan eller något förhandstillstånd; den personuppgiftsansvarige gör en självbedömning och sparar dokumentationen.',
        nb: 'Med GDPR kreves det ikke lenger noen forhåndsmelding eller forhåndstillatelse; den behandlingsansvarlige foretar selv vurderingen og tar vare på dokumentasjonen.',
        nl: 'Met de AVG is geen voorafgaande melding of toestemming meer nodig; de verwerkingsverantwoordelijke beoordeelt dit zelf en bewaart de documentatie.',
      },
      fonte: FONTE_GDPR,
    },
    {
      voce: {
        it: 'Base = interesse legittimo, non il consenso',
        en: 'Basis = legitimate interest, not consent',
        de: 'Grundlage = berechtigtes Interesse, nicht die Einwilligung',
        fr: 'Base = intérêt légitime, non le consentement',
        es: 'Base = interés legítimo, no el consentimiento',
        pt: "Base = interesse legítimo, não o consentimento",
        da: 'Grundlag = legitim interesse, ikke samtykke',
        sv: 'Grund = berättigat intresse, inte samtycke',
        nb: 'Grunnlag = berettiget interesse, ikke samtykke',
        nl: 'Grondslag = gerechtvaardigd belang, niet de toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il monitoraggio è ammesso solo con uno scopo reale e giustificato; la base è l\'interesse legittimo, non il consenso, che nel rapporto di lavoro di norma non è liberamente prestato (WP249: è molto improbabile che il consenso sia una base valida).',
        en: 'Monitoring is allowed only for a real and justified purpose; the basis is legitimate interest, not consent, which in the employment relationship is normally not freely given (WP249: consent is highly unlikely to be a valid basis).',
        de: 'Die Überwachung ist nur für einen tatsächlichen und gerechtfertigten Zweck zulässig; die Grundlage ist das berechtigte Interesse, nicht die Einwilligung, die im Arbeitsverhältnis in der Regel nicht freiwillig erteilt wird (WP249: Einwilligung ist höchst unwahrscheinlich eine gültige Grundlage).',
        fr: 'La surveillance n’est admise que pour une finalité réelle et justifiée ; la base est l’intérêt légitime, et non le consentement, qui dans la relation de travail n’est en général pas librement donné (WP249 : le consentement est très improbable comme base valable).',
        es: 'La vigilancia solo se admite con una finalidad real y justificada; la base es el interés legítimo, no el consentimiento, que en la relación laboral normalmente no se presta libremente (WP249: es muy improbable que el consentimiento sea una base válida).',
        pt: "A monitorização só é admitida com uma finalidade real e justificada; a base é o interesse legítimo e não o consentimento, que na relação de trabalho, em regra, não é prestado livremente (WP249: é muito improvável que o consentimento seja uma base válida).",
        da: 'Overvågning er kun tilladt med et reelt og begrundet formål; grundlaget er legitim interesse, ikke samtykke, som i ansættelsesforholdet normalt ikke gives frit (WP249: det er meget usandsynligt, at samtykke er et gyldigt grundlag).',
        sv: 'Övervakning är endast tillåten för ett verkligt och motiverat ändamål; grunden är berättigat intresse, inte samtycke, som i anställningsförhållandet normalt inte lämnas frivilligt (WP249: det är mycket osannolikt att samtycke är en giltig grund).',
        nb: 'Overvåking er bare tillatt med et reelt og begrunnet formål; grunnlaget er berettiget interesse, ikke samtykke, som i et arbeidsforhold normalt ikke gis fritt (WP249: det er svært lite sannsynlig at samtykke er et gyldig grunnlag).',
        nl: 'Monitoring is alleen toegestaan voor een reeel en gerechtvaardigd doel; de grondslag is het gerechtvaardigd belang, niet de toestemming, die in de arbeidsverhouding doorgaans niet vrijelijk wordt gegeven (WP249: toestemming is hoogst onwaarschijnlijk een geldige grondslag).',
      },
      fonte: FONTE_WP249,
    },
    {
      voce: {
        it: 'GPS proporzionato, sospeso fuori orario o disattivabile dal lavoratore; niente tracciamento continuo',
        en: 'Proportionate GPS, suspended outside working hours or switchable off by the worker; no continuous tracking',
        de: 'Verhältnismäßiges GPS, außerhalb der Arbeitszeit ausgesetzt oder vom Arbeitnehmer abschaltbar; keine kontinuierliche Verfolgung',
        fr: 'GPS proportionné, suspendu en dehors des heures de travail ou désactivable par le travailleur ; pas de suivi continu',
        es: 'GPS proporcional, suspendido fuera del horario de trabajo o desactivable por el trabajador; sin seguimiento continuo',
        pt: "GPS proporcionado, suspenso fora do horário ou desativável pelo trabalhador; sem seguimento contínuo",
        da: 'Proportionel GPS-brug, sat på pause uden for arbejdstiden eller mulig at slå fra for medarbejderen; ingen kontinuerlig sporing',
        sv: 'Proportionerlig GPS, avstängd utanför arbetstid eller möjlig för arbetstagaren att stänga av; ingen ständig spårning',
        nb: 'Forholdsmessig GPS-bruk, satt på pause utenfor arbeidstid eller mulig for den ansatte å slå av; ingen kontinuerlig sporing',
        nl: 'Evenredig GPS, buiten werktijd opgeschort of door de werknemer uit te schakelen; geen continue tracking',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il tracciamento del veicolo va sospeso fuori dall\'orario di lavoro o il lavoratore deve poterlo disattivare; per il WP249 è improbabile che esista una base giuridica per localizzare il veicolo fuori dall\'orario di lavoro, e il trattamento è eccessivo quando serve solo a controllare il lavoro, che si potrebbe controllare con altri mezzi.',
        en: 'Vehicle tracking must be suspended outside working hours or the worker must be able to switch it off; under WP249 a legal basis for locating the vehicle outside working hours is unlikely, and the processing is excessive when its sole purpose is to monitor the work, which could be monitored by other means.',
        de: 'Die Fahrzeugverfolgung muss außerhalb der Arbeitszeit ausgesetzt werden oder der Arbeitnehmer muss sie abschalten können; nach WP249 ist eine Rechtsgrundlage für die Ortung des Fahrzeugs außerhalb der Arbeitszeit unwahrscheinlich, und die Verarbeitung ist übermäßig, wenn sie allein der Kontrolle der Arbeit dient, die sich auch anders kontrollieren ließe.',
        fr: 'Le suivi du véhicule doit être suspendu en dehors des heures de travail ou le travailleur doit pouvoir le désactiver ; selon le WP249, une base juridique pour localiser le véhicule en dehors des heures de travail est improbable, et le traitement est excessif lorsqu’il ne sert qu’à contrôler le travail, qui pourrait l’être par d’autres moyens.',
        es: 'El seguimiento del vehículo debe suspenderse fuera del horario de trabajo o el trabajador debe poder desactivarlo; según el WP249, es improbable que exista una base jurídica para localizar el vehículo fuera del horario de trabajo, y el tratamiento es excesivo cuando solo sirve para controlar el trabajo, que podría controlarse por otros medios.',
        pt: "O seguimento do veículo deve ser suspenso fora do horário de trabalho ou o trabalhador deve poder desativá-lo; para o WP249, é improvável que exista uma base jurídica para localizar o veículo fora do horário de trabalho, e o tratamento é excessivo quando serve apenas para controlar o trabalho, que poderia ser controlado por outros meios.",
        da: 'Sporingen af køretøjet skal sættes på pause uden for arbejdstiden, eller medarbejderen skal kunne slå den fra; ifølge WP249 er det usandsynligt, at der findes et retsgrundlag for at lokalisere køretøjet uden for arbejdstiden, og behandlingen er uforholdsmæssig, når den kun tjener til at kontrollere arbejdet, som kunne kontrolleres på andre måder.',
        sv: 'Spårningen av fordonet ska stängas av utanför arbetstid eller så ska arbetstagaren kunna stänga av den; enligt WP249 är det osannolikt att det finns en rättslig grund för att lokalisera fordonet utanför arbetstid, och behandlingen är överdriven när den endast syftar till att kontrollera arbetet, som skulle kunna kontrolleras på andra sätt.',
        nb: 'Sporingen av kjøretøyet må settes på pause utenfor arbeidstid, eller den ansatte må kunne slå den av; ifølge WP249 er det lite sannsynlig at det finnes et rettslig grunnlag for å lokalisere kjøretøyet utenfor arbeidstid, og behandlingen er uforholdsmessig når den bare tjener til å kontrollere arbeidet, som kunne vært kontrollert på andre måter.',
        nl: 'Het volgen van het voertuig moet buiten werktijd worden opgeschort of de werknemer moet het kunnen uitschakelen; volgens WP249 is een rechtsgrond om het voertuig buiten werktijd te lokaliseren onwaarschijnlijk, en de verwerking is bovenmatig wanneer ze alleen dient om het werk te controleren, wat ook met andere middelen kan.',
      },
      fonte: FONTE_WP249,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio dei dipendenti, inclusi posizione e movimento (lista VDAI, voce 10)",
        en: 'Data protection impact assessment (DPIA) for monitoring employees, including location and movement (VDAI list, item 10)',
        de: 'Datenschutz-Folgenabschätzung (DSFA) für die Überwachung von Beschäftigten, einschließlich Standort und Bewegung (VDAI-Liste, Punkt 10)',
        fr: 'Analyse d’impact relative à la protection des données (AIPD) pour la surveillance des salariés, y compris la position et le mouvement (liste VDAI, point 10)',
        es: 'Evaluación de impacto relativa a la protección de datos (EIPD) para la vigilancia de los empleados, incluida la posición y el movimiento (lista VDAI, punto 10)',
        pt: "Avaliação de impacto (DPIA) para a monitorização dos trabalhadores, incluindo localização e movimento (lista da VDAI, ponto 10)",
        da: "Konsekvensanalyse (DPIA) ved overvågning af medarbejdere, herunder position og bevægelser (VDAI's liste, punkt 10)",
        sv: "Konsekvensbedömning (DPIA) för övervakning av anställda, inklusive position och förflyttningar (VDAI:s lista, punkt 10)",
        nb: 'Vurdering av personvernkonsekvenser (DPIA) ved overvåking av ansatte, inkludert posisjon og bevegelser (VDAIs liste, punkt 10)',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) voor de monitoring van werknemers, inclusief locatie en beweging (VDAI-lijst, punt 10)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista VDAI dei trattamenti che richiedono una valutazione d'impatto include espressamente il trattamento dei dati dei dipendenti per il monitoraggio, inclusi comportamento, posizione o movimento.",
        en: 'The VDAI list of processing operations requiring a data protection impact assessment expressly includes the processing of employees\' data for monitoring, including behaviour, location or movement.',
        de: 'Die VDAI-Liste der Verarbeitungsvorgänge, die eine Datenschutz-Folgenabschätzung erfordern, umfasst ausdrücklich die Verarbeitung von Beschäftigtendaten zur Überwachung, einschließlich Verhalten, Standort oder Bewegung.',
        fr: 'La liste VDAI des traitements nécessitant une analyse d’impact inclut expressément le traitement des données des salariés à des fins de surveillance, y compris le comportement, la position ou le mouvement.',
        es: 'La lista VDAI de los tratamientos que requieren una evaluación de impacto incluye expresamente el tratamiento de los datos de los empleados con fines de vigilancia, incluido el comportamiento, la posición o el movimiento.',
        pt: "A lista da VDAI dos tratamentos que exigem uma avaliação de impacto inclui expressamente o tratamento de dados dos trabalhadores para a monitorização, incluindo comportamento, localização ou movimento.",
        da: "VDAI's liste over behandlinger, der kræver en konsekvensanalyse, omfatter udtrykkeligt behandling af medarbejderes data til overvågning, herunder adfærd, position eller bevægelser.",
        sv: "VDAI:s lista över behandlingar som kräver en konsekvensbedömning omfattar uttryckligen behandling av anställdas uppgifter för övervakning, inklusive beteende, position eller förflyttningar.",
        nb: 'VDAIs liste over behandlinger som krever en vurdering av personvernkonsekvenser, omfatter uttrykkelig behandling av ansattes data til overvåking, inkludert atferd, posisjon eller bevegelser.',
        nl: 'De VDAI-lijst van verwerkingen waarvoor een gegevensbeschermingseffectbeoordeling vereist is, omvat uitdrukkelijk de verwerking van werknemersgegevens voor monitoring, inclusief gedrag, locatie of beweging.',
      },
      fonte: FONTE_VDAI_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Scrivi le regole sul tracciamento e informa i lavoratori prima di attivarlo (art. 13 GDPR).',
        en: 'Write down the tracking rules and inform workers before switching it on (art. 13 GDPR).',
        de: 'Legen Sie die Regeln zur Ortung schriftlich fest und informieren Sie die Arbeitnehmer, bevor Sie sie einschalten (Art. 13 DSGVO).',
        fr: 'Mettez par écrit les règles de suivi et informez les travailleurs avant de l’activer (art. 13 RGPD).',
        es: 'Pon por escrito las reglas del seguimiento e informa a los trabajadores antes de activarlo (art. 13 RGPD).',
        pt: "Redija as regras sobre o seguimento e informe os trabalhadores antes de o ativar (art. 13.º do RGPD).",
        da: 'Skriv reglerne om sporing ned, og informér medarbejderne, før du aktiverer den (art. 13 i GDPR).',
        sv: 'Skriv ner reglerna för spårningen och informera arbetstagarna innan du aktiverar den (art. 13 GDPR).',
        nb: 'Skriv ned reglene om sporing, og informer de ansatte før du aktiverer den (art. 13 i GDPR).',
        nl: 'Leg de regels voor het volgen schriftelijk vast en informeer de werknemers voordat u het inschakelt (art. 13 AVG).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo, non il consenso).',
        en: 'Identify a valid legal basis (legitimate interest, not consent).',
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage (berechtigtes Interesse, nicht die Einwilligung).',
        fr: 'Déterminez une base juridique valable (intérêt légitime, non le consentement).',
        es: 'Identifica una base jurídica válida (interés legítimo, no el consentimiento).',
        pt: "Identifique uma base jurídica válida (interesse legítimo, não o consentimento).",
        da: 'Find et gyldigt retsgrundlag (legitim interesse, ikke samtykke).',
        sv: 'Fastställ en giltig rättslig grund (berättigat intresse, inte samtycke).',
        nb: 'Finn et gyldig rettslig grunnlag (berettiget interesse, ikke samtykke).',
        nl: 'Bepaal een geldige rechtsgrondslag (gerechtvaardigd belang, niet de toestemming).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio dei dipendenti, inclusi posizione e movimento.",
        en: 'Carry out the data protection impact assessment (DPIA) for monitoring employees, including location and movement.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) für die Überwachung der Beschäftigten durch, einschließlich Standort und Bewegung.',
        fr: 'Réalisez l’analyse d’impact relative à la protection des données (AIPD) pour la surveillance des salariés, y compris la position et le mouvement.',
        es: 'Realiza la evaluación de impacto relativa a la protección de datos (EIPD) para la vigilancia de los empleados, incluida la posición y el movimiento.',
        pt: "Realize a avaliação de impacto (DPIA) para a monitorização dos trabalhadores, incluindo localização e movimento.",
        da: 'Gennemfør konsekvensanalysen (DPIA) for overvågning af medarbejdere, herunder position og bevægelser.',
        sv: 'Genomför konsekvensbedömningen (DPIA) för övervakning av anställda, inklusive position och förflyttningar.',
        nb: 'Gjennomfør vurderingen av personvernkonsekvenser (DPIA) for overvåking av ansatte, inkludert posisjon og bevegelser.',
        nl: 'Voer de gegevensbeschermingseffectbeoordeling (DPIA) uit voor de monitoring van werknemers, inclusief locatie en beweging.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Configura il sistema in modo proporzionato: sospeso fuori orario o disattivabile dal lavoratore.',
        en: 'Configure the system in a proportionate way: suspended outside working hours or switchable off by the worker.',
        de: 'Konfigurieren Sie das System verhältnismäßig: außerhalb der Arbeitszeit ausgesetzt oder vom Arbeitnehmer abschaltbar.',
        fr: 'Configurez le système de manière proportionnée : suspendu en dehors des heures de travail ou désactivable par le travailleur.',
        es: 'Configura el sistema de forma proporcionada: suspendido fuera del horario de trabajo o desactivable por el trabajador.',
        pt: "Configure o sistema de forma proporcionada: suspenso fora do horário ou desativável pelo trabalhador.",
        da: 'Konfigurér systemet proportionalt: sat på pause uden for arbejdstiden eller mulig at slå fra for medarbejderen.',
        sv: 'Konfigurera systemet proportionerligt: avstängt utanför arbetstid eller möjligt för arbetstagaren att stänga av.',
        nb: 'Sett opp systemet forholdsmessig: satt på pause utenfor arbeidstid eller mulig for den ansatte å slå av.',
        nl: 'Configureer het systeem op evenredige wijze: buiten werktijd opgeschort of door de werknemer uit te schakelen.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Conserva la documentazione e mettila a disposizione del VDAI su richiesta.',
        en: 'Keep the documentation and make it available to the VDAI on request.',
        de: 'Bewahren Sie die Dokumentation auf und stellen Sie sie dem VDAI auf Anfrage zur Verfügung.',
        fr: 'Conservez la documentation et mettez-la à la disposition du VDAI sur demande.',
        es: 'Conserva la documentación y ponla a disposición del VDAI cuando lo solicite.',
        pt: "Conserve a documentação e disponibilize-a à VDAI quando solicitada.",
        da: 'Opbevar dokumentationen, og stil den til rådighed for VDAI efter anmodning.',
        sv: 'Spara dokumentationen och ställ den till VDAI:s förfogande på begäran.',
        nb: 'Ta vare på dokumentasjonen, og still den til rådighet for VDAI på forespørsel.',
        nl: 'Bewaar de documentatie en stel deze op verzoek ter beschikking van het VDAI.',
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
        da: 'Hvis du skifter system eller overvågningssoftware, skal du opdatere og udlevere privatlivsoplysningerne igen og undersøge, om du på ny skal informere eller høre medarbejdernes repræsentanter, hvor loven kræver det. Ofte ændrer leverandøren (databehandleren), de indsamlede oplysninger og metoderne sig: de oplysninger, der blev udleveret tidligere, er ikke nok.',
        sv: 'Om du byter system eller övervakningsprogram ska du uppdatera och lämna ut integritetsinformationen på nytt och kontrollera om du på nytt måste informera eller höra de anställdas företrädare, där lagen kräver det. Ofta ändras leverantören (personuppgiftsbiträdet), de insamlade uppgifterna och metoderna: den information som lämnades tidigare räcker inte.',
        nb: 'Hvis du bytter system eller overvåkingsprogramvare, må du oppdatere og dele ut personverninformasjonen på nytt og vurdere om du på nytt må informere eller høre de ansattes representanter, der loven krever det. Ofte endrer leverandøren (databehandleren), de innsamlede opplysningene og metodene seg: informasjonen som ble delt ut tidligere, er ikke nok.',
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'VDAI, servizi e reclami',
      portale: FONTE_VDAI_SERVIZI.url,
      urlFonte: FONTE_VDAI_SERVIZI.url,
      verificatoIl: '2026-09-30',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a 20 milioni di euro o 4% del fatturato (GDPR)',
      en: 'up to 20 million euro or 4% of turnover (GDPR)',
      de: 'bis zu 20 Millionen Euro oder 4% des Umsatzes (DSGVO)',
      fr: 'jusqu’à 20 millions d’euros ou 4 % du chiffre d’affaires (RGPD)',
      es: 'hasta 20 millones de euros o el 4 % de la facturación (RGPD)',
      pt: "até 20 milhões de euros ou 4 % do volume de negócios (RGPD)",
      da: 'op til 20 millioner euro eller 4 % af omsætningen (GDPR)',
      sv: 'upp till 20 miljoner euro eller 4 % av omsättningen (GDPR)',
      nb: 'opptil 20 millioner euro eller 4 % av omsetningen (GDPR)',
      nl: 'tot 20 miljoen euro of 4% van de omzet (AVG)',
    },
    casoCitato: {
      it: 'Non risulta una multa del VDAI specifica pubblicata per il GPS sui dipendenti. Il rischio sanzionatorio resta quello generale del GDPR (art. 83).',
      en: 'There is no specific, published VDAI fine for GPS on employees. The sanction risk remains the general one under the GDPR (Art. 83).',
      de: 'Es gibt kein spezifisches, veröffentlichtes VDAI-Bußgeld zu GPS bei Beschäftigten. Das Sanktionsrisiko bleibt das allgemeine der DSGVO (Art. 83).',
      fr: 'Il n’existe pas d’amende du VDAI spécifique et publiée pour le GPS des salariés. Le risque de sanction reste celui, général, du RGPD (art. 83).',
      es: 'No consta una multa del VDAI específica y publicada por el GPS de los empleados. El riesgo sancionador sigue siendo el general del RGPD (art. 83).',
      pt: "Não consta nenhuma coima da VDAI específica publicada sobre o GPS nos trabalhadores. O risco sancionatório mantém-se o geral do RGPD (art. 83.º).",
      da: 'Der kendes ingen specifik offentliggjort bøde fra VDAI for GPS på medarbejdere. Sanktionsrisikoen er fortsat den generelle efter GDPR (art. 83).',
      sv: 'Det finns inga uppgifter om någon särskild publicerad VDAI-sanktion för GPS på anställda. Sanktionsrisken är fortfarande den allmänna enligt GDPR (art. 83).',
      nb: 'Det er ikke kjent noen spesifikk offentliggjort bot fra VDAI for GPS på ansatte. Sanksjonsrisikoen er fortsatt den generelle etter GDPR (art. 83).',
      nl: 'Er is geen specifieke, gepubliceerde VDAI-boete voor gps bij werknemers. Het sanctierisico blijft het algemene van de AVG (art. 83).',
    },
    urlFonte: FONTE_VDAI_DECISIONI.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_ADTAI_5,
    FONTE_WP249,
    FONTE_VDAI_DPIA,
    FONTE_VDAI_CORRISPONDENZA,
    FONTE_VDAI_DECISIONI,
    FONTE_VDAI_SERVIZI,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
