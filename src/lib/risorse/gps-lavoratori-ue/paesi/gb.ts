/**
 * Scheda-paese Regno Unito per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * guida ICO sul monitoraggio dei lavoratori (UK GDPR), guida ICO sulla
 * sorveglianza nei veicoli, guida ICO su quando serve una DPIA, provvedimento
 * ICO sul tracciamento GPS dell'Home Office (2024), pagina ICO per le
 * segnalazioni e il GDPR recepito come UK GDPR.
 *
 * Il Regno Unito ha un'unica autorità nazionale, l'ICO, per Inghilterra,
 * Scozia, Galles e Irlanda del Nord: nessuna ripartizione regionale.
 * Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_ICO_MONITORAGGIO = {
  titolo: 'ICO, guida sul monitoraggio dei lavoratori (UK GDPR)',
  url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/employment/monitoring-workers/data-protection-and-monitoring-workers/',
};
const FONTE_ICO_VEICOLI = {
  titolo: 'ICO, sorveglianza nei veicoli',
  url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/cctv-and-video-surveillance/guidance-on-video-surveillance-including-cctv/additional-considerations-for-technologies-other-than-cctv/surveillance-in-vehicles/',
};
const FONTE_ICO_DPIA = {
  titolo: 'ICO, quando serve una DPIA',
  url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/when-do-we-need-to-do-a-dpia/',
};
const FONTE_ICO_HOME_OFFICE = {
  titolo: 'ICO, provvedimento sul monitoraggio GPS (Home Office, 2024)',
  url: 'https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2024/03/ico-finds-the-home-office-s-pilot-of-gps-electronic-monitoring-of-migrants-breached-uk-data-protection-law/',
};
const FONTE_ICO_SEGNALAZIONI = {
  titolo: 'ICO, presentare una segnalazione',
  url: 'https://ico.org.uk/concerns/',
};
const FONTE_INFORMATION_COMMISSION = {
  titolo:
    'Data (Use and Access) Act 2025 (Commencement No. 9) Regulations 2026, SI 2026/1015 (Information Commission dal 30/09/2026)',
  url: 'https://www.legislation.gov.uk/uksi/2026/1015/made',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) come UK GDPR',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const regnoUnito: SchedaPaese = {
  codiceISO: 'GB',
  slugCanonico: 'regno-unito',
  nome: 'Regno Unito',
  nomi: {
    it: 'Regno Unito',
    en: 'United Kingdom',
    'en-us': 'United Kingdom',
    'en-gb': 'United Kingdom',
    'en-au': 'United Kingdom',
    'en-ie': 'United Kingdom',
    'en-ca': 'United Kingdom',
    de: 'Vereinigtes Königreich',
    nl: 'Verenigd Koninkrijk',
    fr: 'Royaume-Uni',
    es: 'Reino Unido',
    pt: 'Reino Unido',
    da: 'Storbritannien',
    sv: 'Storbritannien',
    nb: 'Storbritannia',
    ru: 'Великобритания',
  },
  bandiera: '🇬🇧',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: "Information Commission (ICO)",
    portale: FONTE_ICO_SEGNALAZIONI.url,
    urlFonte: FONTE_ICO_SEGNALAZIONI.url,
    verificatoIl: '2026-09-30',
    note: {
      it: "Il Regno Unito ha un'unica autorità nazionale, l'ICO, per Inghilterra, Scozia, Galles e Irlanda del Nord: nessuna ripartizione regionale. Dal 30 settembre 2026 l'Information Commissioner è sostituito dalla Information Commission (Data (Use and Access) Act 2025, artt. 118-119); l'ufficio continua a chiamarsi ICO.",
      en: 'The United Kingdom has a single national authority, the ICO, for England, Scotland, Wales and Northern Ireland: no regional split. From 30 September 2026 the Information Commissioner is replaced by the Information Commission (Data (Use and Access) Act 2025, ss. 118-119); the office continues to be known as the ICO.',
      de: 'Das Vereinigte Königreich hat eine einzige nationale Behörde, das ICO, für England, Schottland, Wales und Nordirland: keine regionale Aufteilung. Ab dem 30. September 2026 wird der Information Commissioner durch die Information Commission ersetzt (Data (Use and Access) Act 2025, Abschn. 118-119); die Behörde bleibt als ICO bekannt.',
      fr: 'Le Royaume-Uni dispose d’une seule autorité nationale, l’ICO, pour l’Angleterre, l’Écosse, le pays de Galles et l’Irlande du Nord : aucune répartition régionale. Depuis le 30 septembre 2026, l’Information Commissioner est remplacé par l’Information Commission (Data (Use and Access) Act 2025, art. 118-119) ; l’office reste connu sous le nom d’ICO.',
      es: 'El Reino Unido tiene una única autoridad nacional, la ICO, para Inglaterra, Escocia, Gales e Irlanda del Norte: sin reparto regional. Desde el 30 de septiembre de 2026 el Information Commissioner es sustituido por la Information Commission (Data (Use and Access) Act 2025, arts. 118-119); la oficina sigue conociéndose como ICO.',
      pt: "O Reino Unido tem uma única autoridade nacional, o ICO, para Inglaterra, Escócia, País de Gales e Irlanda do Norte: não existe repartição regional. A partir de 30 de setembro de 2026, o Information Commissioner é substituído pela Information Commission (Data (Use and Access) Act 2025, arts. 118-119); o gabinete continua a chamar-se ICO.",
      da: 'Storbritannien har én national myndighed, ICO, for England, Skotland, Wales og Nordirland: ingen regional opdeling. Fra 30. september 2026 erstattes Information Commissioner af Information Commission (Data (Use and Access) Act 2025, §§ 118-119); kontoret hedder stadig ICO.',
      sv: 'Storbritannien har en enda nationell myndighet, ICO, för England, Skottland, Wales och Nordirland: det finns ingen regional uppdelning. Från och med den 30 september 2026 ersätts Information Commissioner av Information Commission (Data (Use and Access) Act 2025, avsnitt 118-119); kontoret fortsätter att kallas ICO.',
      nb: 'Storbritannia har én nasjonal myndighet, ICO, for England, Skottland, Wales og Nord-Irland: ingen regional inndeling. Fra 30. september 2026 erstattes Information Commissioner av Information Commission (Data (Use and Access) Act 2025, §§ 118-119); kontoret heter fortsatt ICO.',
      nl: 'Het Verenigd Koninkrijk heeft één nationale autoriteit, de ICO, voor Engeland, Schotland, Wales en Noord-Ierland: geen regionale verdeling. Vanaf 30 september 2026 wordt de Information Commissioner vervangen door de Information Commission (Data (Use and Access) Act 2025, art. 118-119); het bureau blijft bekend als ICO.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Consultazione dei lavoratori o dei loro rappresentanti prima di introdurre il monitoraggio',
        en: 'Consultation of workers or their representatives before introducing monitoring',
        de: 'Anhörung der Beschäftigten oder ihrer Vertreter vor der Einführung der Überwachung',
        fr: 'Consultation des travailleurs ou de leurs représentants avant la mise en place de la surveillance',
        es: 'Consulta a los trabajadores o a sus representantes antes de introducir la supervisión',
        pt: "Consulta dos trabalhadores ou dos seus representantes antes de introduzir a monitorização",
        da: 'Høring af medarbejdere eller deres repræsentanter, før overvågning indføres',
        sv: 'Samråd med arbetstagarna eller deras företrädare innan övervakning införs',
        nb: 'Høring av de ansatte eller deres representanter før overvåking innføres',
        nl: 'Raadpleging van de werknemers of hun vertegenwoordigers voordat monitoring wordt ingevoerd',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "L'ICO chiede di raccogliere e documentare il parere dei lavoratori o dei loro rappresentanti (es. sindacati) prima di introdurre il monitoraggio, salvo buoni motivi; non è un consenso vincolante, ma va documentato.",
        en: 'The ICO asks employers to gather and document the views of workers or their representatives (e.g. trade unions) before introducing monitoring, unless there are good reasons not to; it is not binding consent, but it must be documented.',
        de: 'Das ICO verlangt, dass die Auffassung der Beschäftigten oder ihrer Vertreter (z. B. Gewerkschaften) vor der Einführung der Überwachung eingeholt und dokumentiert wird, sofern keine triftigen Gründe dagegen sprechen; es handelt sich nicht um eine verbindliche Einwilligung, sie muss aber dokumentiert werden.',
        fr: 'L’ICO demande de recueillir et de documenter l’avis des travailleurs ou de leurs représentants (par ex. les syndicats) avant de mettre en place la surveillance, sauf motifs valables ; il ne s’agit pas d’un consentement contraignant, mais cela doit être documenté.',
        es: 'La ICO pide recabar y documentar la opinión de los trabajadores o de sus representantes (p. ej. los sindicatos) antes de introducir la supervisión, salvo que existan buenas razones para no hacerlo; no es un consentimiento vinculante, pero debe documentarse.',
        pt: "O ICO pede que se recolha e documente o parecer dos trabalhadores ou dos seus representantes (por exemplo, sindicatos) antes de introduzir a monitorização, salvo motivos válidos em contrário; não é um consentimento vinculativo, mas deve ficar documentado.",
        da: 'ICO beder arbejdsgiverne om at indhente og dokumentere medarbejdernes eller deres repræsentanters (f.eks. fagforeningers) synspunkter, før overvågning indføres, medmindre der er gode grunde til ikke at gøre det; det er ikke et bindende samtykke, men det skal dokumenteres.',
        sv: 'ICO uppmanar arbetsgivare att inhämta och dokumentera arbetstagarnas eller deras företrädares (till exempel fackföreningars) synpunkter innan övervakning införs, om det inte finns goda skäl att låta bli; det är inget bindande samtycke, men det ska dokumenteras.',
        nb: 'ICO ber arbeidsgiverne om å innhente og dokumentere de ansattes eller deres representanters (f.eks. fagforeningers) synspunkter før overvåking innføres, med mindre det er gode grunner til ikke å gjøre det; det er ikke et bindende samtykke, men det må dokumenteres.',
        nl: 'De ICO vraagt om de mening van de werknemers of hun vertegenwoordigers (bijv. vakbonden) te verzamelen en te documenteren voordat monitoring wordt ingevoerd, tenzij er goede redenen zijn om dat niet te doen; het is geen bindende toestemming, maar het moet worden gedocumenteerd.',
      },
      fonte: FONTE_ICO_MONITORAGGIO,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installation',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: 'Autorisation préalable d’une autorité avant l’installation',
        es: 'Autorización previa de una autoridad antes de la instalación',
        pt: "Autorização prévia de uma autoridade antes da instalação",
        da: 'Forudgående tilladelse fra en myndighed før installation',
        sv: 'Förhandstillstånd från en myndighet innan installation',
        nb: 'Forhåndstillatelse fra en myndighet før installasjon',
        nl: 'Voorafgaande toestemming van een autoriteit vóór installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva dell'ICO; vale la responsabilizzazione (autovalutazione + DPIA). L'ICO va consultato prima solo se la DPIA evidenzia un rischio elevato non mitigabile.",
        en: 'No prior authorisation from the ICO is required; accountability applies (self-assessment + DPIA). The ICO must be consulted in advance only if the DPIA identifies a high risk that cannot be mitigated.',
        de: 'Eine vorherige Genehmigung des ICO ist nicht erforderlich; es gilt die Rechenschaftspflicht (Selbstbewertung + DPIA). Das ICO ist vorab nur dann zu konsultieren, wenn die DPIA ein hohes, nicht minderbares Risiko ergibt.',
        fr: 'Aucune autorisation préalable de l’ICO n’est requise ; le principe de responsabilité s’applique (auto-évaluation + DPIA). L’ICO ne doit être consulté au préalable que si la DPIA met en évidence un risque élevé impossible à atténuer.',
        es: 'No se requiere autorización previa de la ICO; rige la responsabilidad proactiva (autoevaluación + DPIA). Solo hay que consultar previamente a la ICO si la DPIA evidencia un riesgo elevado que no puede mitigarse.',
        pt: "Não é necessária autorização prévia do ICO; aplica-se a responsabilização (autoavaliação + DPIA). O ICO só tem de ser consultado previamente se a DPIA revelar um risco elevado que não possa ser mitigado.",
        da: "Der kræves ingen forudgående tilladelse fra ICO; ansvarlighed gælder (selvvurdering + DPIA). ICO skal kun høres på forhånd, hvis DPIA'en viser en høj risiko, der ikke kan afhjælpes.",
        sv: "Något förhandstillstånd från ICO krävs inte; ansvarsskyldigheten gäller (självbedömning + DPIA). ICO ska bara höras i förväg om DPIA:n visar en hög risk som inte kan begränsas.",
        nb: 'Det kreves ingen forhåndstillatelse fra ICO; ansvarlighet gjelder (egenvurdering + DPIA). ICO skal bare høres på forhånd hvis DPIA-en viser en høy risiko som ikke kan reduseres.',
        nl: 'Voorafgaande toestemming van de ICO is niet vereist; de verantwoordingsplicht geldt (zelfbeoordeling + DPIA). De ICO hoeft alleen vooraf te worden geraadpleegd als de DPIA een hoog risico aantoont dat niet kan worden beperkt.',
      },
      fonte: FONTE_ICO_MONITORAGGIO,
    },
    {
      voce: {
        it: 'Base giuridica valida e informazione ai lavoratori (di norma interesse legittimo, non il consenso; niente sorveglianza occulta)',
        en: 'Valid legal basis and information to workers (usually legitimate interests, not consent; no covert surveillance)',
        de: 'Gültige Rechtsgrundlage und Information der Beschäftigten (in der Regel berechtigtes Interesse, nicht Einwilligung; keine verdeckte Überwachung)',
        fr: 'Base légale valable et information des travailleurs (en règle générale l’intérêt légitime, et non le consentement ; aucune surveillance cachée)',
        es: 'Base jurídica válida e información a los trabajadores (por lo general el interés legítimo, no el consentimiento; sin vigilancia encubierta)',
        pt: "Base jurídica válida e informação aos trabalhadores (em regra, interesse legítimo e não o consentimento; sem vigilância oculta)",
        da: 'Gyldigt retsgrundlag og information til medarbejderne (normalt legitim interesse, ikke samtykke; ingen skjult overvågning)',
        sv: 'Giltig rättslig grund och information till arbetstagarna (i regel berättigat intresse, inte samtycke; ingen dold övervakning)',
        nb: 'Gyldig rettslig grunnlag og informasjon til de ansatte (normalt berettiget interesse, ikke samtykke; ingen skjult overvåking)',
        nl: 'Geldige rechtsgrond en informatie aan de werknemers (doorgaans gerechtvaardigd belang, niet toestemming; geen heimelijke surveillance)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il consenso di norma non è valido per lo squilibrio di potere; la base usuale è l'interesse legittimo con valutazione documentata (LIA). I lavoratori vanno informati in modo chiaro; la sorveglianza occulta solo in casi eccezionali.",
        en: 'Consent is usually not valid because of the imbalance of power; the usual basis is legitimate interests with a documented assessment (LIA). Workers must be informed clearly; covert surveillance is allowed only in exceptional cases.',
        de: 'Die Einwilligung ist wegen des Machtungleichgewichts in der Regel nicht gültig; üblich ist das berechtigte Interesse mit einer dokumentierten Bewertung (LIA). Die Beschäftigten müssen klar informiert werden; verdeckte Überwachung ist nur in Ausnahmefällen zulässig.',
        fr: 'Le consentement n’est en général pas valable en raison du déséquilibre de pouvoir ; la base habituelle est l’intérêt légitime avec une évaluation documentée (LIA). Les travailleurs doivent être informés clairement ; la surveillance cachée n’est admise que dans des cas exceptionnels.',
        es: 'El consentimiento por lo general no es válido debido al desequilibrio de poder; la base habitual es el interés legítimo con una evaluación documentada (LIA). Los trabajadores deben ser informados con claridad; la vigilancia encubierta solo en casos excepcionales.',
        pt: "Em regra, o consentimento não é válido devido ao desequilíbrio de poder; a base habitual é o interesse legítimo, com avaliação documentada (LIA). Os trabalhadores devem ser informados de forma clara; a vigilância oculta só em casos excecionais.",
        da: 'Samtykke er normalt ikke gyldigt på grund af den skæve magtbalance; det sædvanlige grundlag er legitim interesse med en dokumenteret vurdering (LIA). Medarbejderne skal informeres klart; skjult overvågning er kun tilladt i ekstraordinære tilfælde.',
        sv: 'Samtycke är i regel inte giltigt på grund av maktobalansen; den vanliga grunden är berättigat intresse med en dokumenterad bedömning (LIA). Arbetstagarna ska informeras tydligt; dold övervakning är endast tillåten i undantagsfall.',
        nb: 'Samtykke er normalt ikke gyldig på grunn av den skjeve maktbalansen; det vanlige grunnlaget er berettiget interesse med en dokumentert vurdering (LIA). De ansatte må informeres klart; skjult overvåking er bare tillatt i ekstraordinære tilfeller.',
        nl: 'Toestemming is doorgaans niet geldig vanwege de machtsongelijkheid; de gebruikelijke grondslag is het gerechtvaardigd belang met een gedocumenteerde beoordeling (LIA). Werknemers moeten duidelijk worden geïnformeerd; heimelijke surveillance alleen in uitzonderlijke gevallen.',
      },
      fonte: FONTE_ICO_MONITORAGGIO,
    },
    {
      voce: {
        it: 'Divieto di tracciamento continuo ingiustificato; disattivazione fuori orario per uso privato',
        en: 'No unjustified continuous tracking; deactivation outside working hours for private use',
        de: 'Verbot der ungerechtfertigten kontinuierlichen Ortung; Deaktivierung außerhalb der Arbeitszeit zur privaten Nutzung',
        fr: 'Interdiction du suivi continu injustifié ; désactivation en dehors des heures de travail pour l’usage privé',
        es: 'Prohibición del rastreo continuo injustificado; desactivación fuera del horario laboral para uso privado',
        pt: "Proibição de seguimento contínuo injustificado; desativação fora do horário para uso privado",
        da: 'Ingen uberettiget kontinuerlig sporing; afbrydelse uden for arbejdstiden ved privat brug',
        sv: 'Ingen omotiverad kontinuerlig spårning; avstängning utanför arbetstid vid privat användning',
        nb: 'Ingen uberettiget kontinuerlig sporing; avstenging utenfor arbeidstid ved privat bruk',
        nl: 'Verbod op ongerechtvaardigde continue tracking; uitschakeling buiten werktijd voor privégebruik',
      },
      risposta: 'si',
      dettaglio: {
        it: "L'ICO non ha una regola specifica sul GPS. Nella sua guida sulla sorveglianza a bordo dei veicoli (registrazione video) giudica probabilmente eccessiva la registrazione continua mentre il veicolo è usato a fini privati fuori orario, e dice che il conducente dovrebbe poter disattivarla; nell'esempio sulla DPIA (auto aziendali con localizzazione, usate anche in privato) il monitoraggio dei movimenti in ogni momento richiede una DPIA. Il ragionamento va applicato per analogia al GPS.",
        en: 'The ICO has no GPS-specific rule. In its guidance on surveillance in vehicles (video recording) it considers continuous recording while the vehicle is used privately outside working hours likely to be excessive, and says drivers should have the option to deactivate it; in its DPIA example (company cars with location tracking, also used privately) monitoring movements at all times requires a DPIA. The reasoning applies to GPS by analogy.',
        de: 'Das ICO hat keine GPS-spezifische Regel. In seinem Leitfaden zur Überwachung in Fahrzeugen (Videoaufzeichnung) hält es die kontinuierliche Aufzeichnung, während das Fahrzeug außerhalb der Arbeitszeit privat genutzt wird, für wahrscheinlich unverhältnismäßig und sagt, Fahrer sollten sie deaktivieren können; im DPIA-Beispiel (Firmenwagen mit Ortung, auch privat genutzt) erfordert die Überwachung der Bewegungen zu jeder Zeit eine DPIA. Die Überlegung gilt sinngemäß für GPS.',
        fr: 'L’ICO n’a pas de règle propre au GPS. Dans son guide sur la surveillance dans les véhicules (enregistrement vidéo), il juge probablement excessif l’enregistrement continu pendant que le véhicule est utilisé à titre privé hors des heures de travail et dit que le conducteur devrait pouvoir le désactiver ; dans son exemple d’AIPD (voitures de société géolocalisées, aussi utilisées à titre privé), le suivi des déplacements à tout moment impose une AIPD. Le raisonnement s’applique par analogie au GPS.',
        es: 'La ICO no tiene una regla específica sobre el GPS. En su guía sobre la vigilancia en vehículos (grabación de vídeo) considera probablemente excesiva la grabación continua mientras el vehículo se usa con fines privados fuera del horario laboral y dice que el conductor debería poder desactivarla; en su ejemplo de DPIA (coches de empresa con localización, usados también en privado) el seguimiento de los movimientos en todo momento exige una DPIA. El razonamiento se aplica por analogía al GPS.',
        pt: "O ICO não tem uma regra específica sobre o GPS. No seu guia sobre a vigilância a bordo de veículos (gravação de vídeo), considera provavelmente excessiva a gravação contínua enquanto o veículo é utilizado para fins privados fora do horário, e afirma que o condutor deveria poder desativá-la; no exemplo sobre a DPIA (automóveis de empresa com localização, utilizados também em privado), a monitorização dos movimentos em qualquer momento exige uma DPIA. O raciocínio deve ser aplicado, por analogia, ao GPS.",
        da: 'ICO har ingen særlig regel om GPS. I sin vejledning om overvågning i køretøjer (videooptagelse) anser den kontinuerlig optagelse, mens køretøjet bruges privat uden for arbejdstiden, for sandsynligvis at være overdreven og siger, at chaufførerne bør have mulighed for at slå den fra; i eksemplet om DPIA (firmabiler med lokalisering, der også bruges privat) kræver overvågning af bevægelser på alle tidspunkter en DPIA. Ræsonnementet anvendes på GPS ved analogi.',
        sv: 'ICO har ingen särskild regel om GPS. I sin vägledning om övervakning i fordon (videoinspelning) anser ICO att kontinuerlig inspelning medan fordonet används privat utanför arbetstid sannolikt är överdriven, och säger att förarna bör ha möjlighet att stänga av den; i exemplet om DPIA (tjänstebilar med lokalisering, som även används privat) kräver övervakning av förflyttningar hela tiden en DPIA. Resonemanget tillämpas på GPS i analogi.',
        nb: 'ICO har ingen særskilt regel om GPS. I sin veiledning om overvåking i kjøretøyer (videoopptak) anser den kontinuerlig opptak mens kjøretøyet brukes privat utenfor arbeidstid for sannsynligvis å være overdrevent, og sier at sjåførene bør ha mulighet til å slå det av; i eksempelet om DPIA (firmabiler med lokalisering som også brukes privat) krever overvåking av bevegelser til enhver tid en DPIA. Resonnementet brukes på GPS ved analogi.',
        nl: 'De ICO heeft geen specifieke gps-regel. In zijn gids over bewaking in voertuigen (videoregistratie) acht hij continue registratie terwijl het voertuig buiten werktijd privé wordt gebruikt waarschijnlijk buitensporig en zegt hij dat de bestuurder de registratie moet kunnen uitschakelen; in zijn DPIA-voorbeeld (bedrijfsauto\'s met locatietracking, ook privé gebruikt) vereist het te allen tijde volgen van bewegingen een DPIA. De redenering geldt naar analogie voor gps.',
      },
      fonte: FONTE_ICO_VEICOLI,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il tracciamento della geolocalizzazione dei lavoratori",
        en: "Data protection impact assessment (DPIA) for tracking workers' geolocation",
        de: 'Datenschutz-Folgenabschätzung (DPIA) für die Standortverfolgung der Beschäftigten',
        fr: 'Analyse d’impact (DPIA) pour le suivi de la géolocalisation des travailleurs',
        es: 'Evaluación de impacto (DPIA) para el rastreo de la geolocalización de los trabajadores',
        pt: "Avaliação de impacto (DPIA) para o seguimento da geolocalização dos trabalhadores",
        da: 'Konsekvensanalyse (DPIA) ved sporing af medarbejdernes geolokalisering',
        sv: 'Konsekvensbedömning (DPIA) för spårning av arbetstagarnas geolokalisering',
        nb: 'Personvernkonsekvensvurdering (DPIA) ved sporing av de ansattes geolokalisering',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) voor het volgen van de geolocatie van werknemers',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista ICO include il tracciamento della geolocalizzazione o del comportamento di una persona, e richiede la DPIA quando si combina con un altro criterio delle linee guida europee. I lavoratori possono essere soggetti vulnerabili per lo squilibrio di potere, e l'ICO porta l'esempio di auto aziendali con localizzazione: la DPIA è richiesta.",
        en: "The ICO's list includes tracking a person's geolocation or behaviour, and requires a DPIA where it is combined with another criterion from the European guidelines. Employees can be vulnerable data subjects because of the power imbalance, and the ICO gives the example of company cars with location tracking: a DPIA is required.",
        de: 'Die Liste des ICO umfasst die Verfolgung des Standorts oder des Verhaltens einer Person und verlangt eine DPIA, wenn dies mit einem weiteren Kriterium der europäischen Leitlinien zusammentrifft. Beschäftigte können wegen des Machtungleichgewichts schutzbedürftig sein; das ICO nennt das Beispiel von Firmenwagen mit Ortung: Eine DPIA ist erforderlich.',
        fr: 'La liste de l’ICO inclut le suivi de la géolocalisation ou du comportement d’une personne et exige une DPIA lorsqu’il se combine avec un autre critère des lignes directrices européennes. Les salariés peuvent être des personnes vulnérables en raison du déséquilibre de pouvoir, et l’ICO donne l’exemple de voitures de société géolocalisées : une DPIA est requise.',
        es: 'La lista de la ICO incluye el rastreo de la geolocalización o del comportamiento de una persona y exige una DPIA cuando se combina con otro criterio de las directrices europeas. Los empleados pueden ser sujetos vulnerables por el desequilibrio de poder, y la ICO pone el ejemplo de coches de empresa con localización: se exige una DPIA.',
        pt: "A lista do ICO inclui o seguimento da geolocalização ou do comportamento de uma pessoa, e exige a DPIA quando se combina com outro critério das orientações europeias. Os trabalhadores podem ser titulares vulneráveis devido ao desequilíbrio de poder, e o ICO dá o exemplo de automóveis de empresa com localização: a DPIA é exigida.",
        da: "ICO's liste omfatter sporing af en persons geolokalisering eller adfærd og kræver en DPIA, når den kombineres med et andet kriterium fra de europæiske retningslinjer. Medarbejdere kan være sårbare registrerede på grund af den skæve magtbalance, og ICO nævner eksemplet med firmabiler med lokalisering: en DPIA er påkrævet.",
        sv: "ICO:s lista omfattar spårning av en persons geolokalisering eller beteende och kräver en DPIA när den kombineras med ett annat kriterium i de europeiska riktlinjerna. Anställda kan vara sårbara registrerade på grund av maktobalansen, och ICO ger exemplet tjänstebilar med lokalisering: en DPIA krävs.",
        nb: 'ICOs liste omfatter sporing av en persons geolokalisering eller atferd og krever en DPIA når den kombineres med et annet kriterium fra de europeiske retningslinjene. Ansatte kan være sårbare registrerte på grunn av den skjeve maktbalansen, og ICO nevner eksempelet med firmabiler med lokalisering: en DPIA er påkrevd.',
        nl: 'De lijst van de ICO omvat het volgen van de geolocatie of het gedrag van een persoon en vereist een DPIA wanneer dit samenvalt met een ander criterium uit de Europese richtsnoeren. Werknemers kunnen kwetsbaar zijn door de machtsongelijkheid, en de ICO geeft het voorbeeld van bedrijfsauto\'s met locatietracking: een DPIA is vereist.',
      },
      fonte: FONTE_ICO_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Raccogli e documenta il parere dei lavoratori o dei loro rappresentanti.',
        en: 'Gather and document the views of workers or their representatives.',
        de: 'Holen Sie die Auffassung der Beschäftigten oder ihrer Vertreter ein und dokumentieren Sie sie.',
        fr: 'Recueillez et documentez l’avis des travailleurs ou de leurs représentants.',
        es: 'Recaba y documenta la opinión de los trabajadores o de sus representantes.',
        pt: "Recolha e documente o parecer dos trabalhadores ou dos seus representantes.",
        da: 'Indhent og dokumentér medarbejdernes eller deres repræsentanters synspunkter.',
        sv: 'Inhämta och dokumentera arbetstagarnas eller deras företrädares synpunkter.',
        nb: 'Innhent og dokumenter de ansattes eller deres representanters synspunkter.',
        nl: 'Verzamel en documenteer de mening van de werknemers of hun vertegenwoordigers.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Individua una base giuridica valida (di norma interesse legittimo) e svolgi la valutazione documentata (LIA).",
        en: 'Identify a valid legal basis (usually legitimate interests) and carry out the documented assessment (LIA).',
        de: 'Ermitteln Sie eine gültige Rechtsgrundlage (in der Regel berechtigtes Interesse) und führen Sie die dokumentierte Bewertung (LIA) durch.',
        fr: 'Identifiez une base légale valable (en règle générale l’intérêt légitime) et réalisez l’évaluation documentée (LIA).',
        es: 'Determina una base jurídica válida (por lo general el interés legítimo) y realiza la evaluación documentada (LIA).',
        pt: "Identifique uma base jurídica válida (em regra, interesse legítimo) e realize a avaliação documentada (LIA).",
        da: 'Find et gyldigt retsgrundlag (normalt legitim interesse), og gennemfør den dokumenterede vurdering (LIA).',
        sv: 'Fastställ en giltig rättslig grund (i regel berättigat intresse) och genomför den dokumenterade bedömningen (LIA).',
        nb: 'Finn et gyldig rettslig grunnlag (normalt berettiget interesse), og gjennomfør den dokumenterte vurderingen (LIA).',
        nl: 'Bepaal een geldige rechtsgrond (doorgaans gerechtvaardigd belang) en voer de gedocumenteerde beoordeling (LIA) uit.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) prima di attivare il tracciamento.",
        en: 'Carry out the data protection impact assessment (DPIA) before activating the tracking.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DPIA) durch, bevor Sie die Ortung aktivieren.',
        fr: 'Réalisez l’analyse d’impact (DPIA) avant d’activer le suivi.',
        es: 'Realiza la evaluación de impacto (DPIA) antes de activar el rastreo.',
        pt: "Realize a avaliação de impacto (DPIA) antes de ativar o seguimento.",
        da: 'Gennemfør konsekvensanalysen (DPIA), før du aktiverer sporingen.',
        sv: 'Genomför konsekvensbedömningen (DPIA) innan du aktiverar spårningen.',
        nb: 'Gjennomfør personvernkonsekvensvurderingen (DPIA) før du aktiverer sporingen.',
        nl: 'Voer de gegevensbeschermingseffectbeoordeling (DPIA) uit voordat u de tracking activeert.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Informa i lavoratori in modo chiaro e accessibile (niente sorveglianza occulta salvo casi eccezionali).',
        en: 'Inform workers in a clear and accessible way (no covert surveillance except in exceptional cases).',
        de: 'Informieren Sie die Beschäftigten klar und verständlich (keine verdeckte Überwachung außer in Ausnahmefällen).',
        fr: 'Informez les travailleurs de manière claire et accessible (aucune surveillance cachée sauf cas exceptionnels).',
        es: 'Informa a los trabajadores de forma clara y accesible (sin vigilancia encubierta salvo casos excepcionales).',
        pt: "Informe os trabalhadores de forma clara e acessível (sem vigilância oculta, salvo casos excecionais).",
        da: 'Informér medarbejderne klart og tilgængeligt (ingen skjult overvågning undtagen i ekstraordinære tilfælde).',
        sv: 'Informera arbetstagarna på ett tydligt och lättillgängligt sätt (ingen dold övervakning utom i undantagsfall).',
        nb: 'Informer de ansatte klart og tilgjengelig (ingen skjult overvåking unntatt i ekstraordinære tilfeller).',
        nl: 'Informeer de werknemers op een duidelijke en toegankelijke manier (geen heimelijke surveillance behalve in uitzonderlijke gevallen).',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: niente registrazione continua fuori orario, disattivazione per uso privato.',
        en: 'Configure the system: no continuous recording outside working hours, deactivation for private use.',
        de: 'Konfigurieren Sie das System: keine kontinuierliche Aufzeichnung außerhalb der Arbeitszeit, Deaktivierung für die private Nutzung.',
        fr: 'Configurez le système : aucun enregistrement continu en dehors des heures de travail, désactivation pour l’usage privé.',
        es: 'Configura el sistema: sin grabación continua fuera del horario laboral, desactivación para uso privado.',
        pt: "Configure o sistema: sem gravação contínua fora do horário, desativação para uso privado.",
        da: 'Konfigurér systemet: ingen kontinuerlig optagelse uden for arbejdstiden, afbrydelse ved privat brug.',
        sv: 'Konfigurera systemet: ingen kontinuerlig registrering utanför arbetstid, avstängning vid privat användning.',
        nb: 'Konfigurer systemet: ingen kontinuerlig opptak utenfor arbeidstid, avstenging ved privat bruk.',
        nl: 'Configureer het systeem: geen continue registratie buiten werktijd, uitschakeling voor privégebruik.',
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
        nb: 'Hvis du bytter system eller overvåkingsprogramvare, oppdater og utlever personvernerklæringen på nytt, og kontroller om du på nytt må informere eller konsultere de ansattes representanter, der loven krever det. Leverandøren (databehandleren), de innsamlede opplysningene og fremgangsmåtene endrer seg ofte: den informasjonen som ble gitt tidligere, er ikke nok.',
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'ICO, segnalazioni',
      portale: FONTE_ICO_SEGNALAZIONI.url,
      urlFonte: FONTE_ICO_SEGNALAZIONI.url,
      verificatoIl: '2026-09-30',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'provvedimento di enforcement + diffida (nessuna multa); rischio UK GDPR fino a 17,5 milioni di sterline o 4% del fatturato, se maggiore',
      en: 'enforcement notice + warning (no fine); UK GDPR risk of up to 17.5 million pounds or 4% of turnover, whichever is higher',
      de: 'Anordnung zur Durchsetzung + Verwarnung (kein Bußgeld); UK-GDPR-Risiko von bis zu 17,5 Millionen Pfund oder 4 % des Umsatzes, je nachdem, welcher Betrag höher ist',
      fr: 'mise en demeure d’exécution + avertissement (pas d’amende) ; risque UK GDPR pouvant atteindre 17,5 millions de livres sterling ou 4 % du chiffre d’affaires, le montant le plus élevé étant retenu',
      es: 'requerimiento de cumplimiento + apercibimiento (sin multa); riesgo UK GDPR de hasta 17,5 millones de libras esterlinas o el 4 % de la facturación, el importe que sea mayor',
      pt: "decisão de execução (enforcement notice) + repreensão (sem coima); risco de até 17,5 milhões de libras ou 4 % do volume de negócios, consoante o que for mais elevado, ao abrigo do UK GDPR",
      da: 'håndhævelsespåbud + advarsel (ingen bøde); risiko efter UK GDPR for op til 17,5 millioner pund eller 4 % af omsætningen, hvis det er højere',
      sv: 'föreläggande (enforcement notice) + varning (ingen böter); risk enligt UK GDPR på upp till 17,5 miljoner pund eller 4 % av omsättningen, beroende på vilket som är högst',
      nb: 'håndhevingsvedtak + advarsel (ingen bot); risiko etter UK GDPR for opptil 17,5 millioner pund eller 4 % av omsetningen, hvis det er høyere',
      nl: 'handhavingsbevel + waarschuwing (geen boete); UK GDPR-risico tot 17,5 miljoen pond of 4% van de omzet, het hoogste bedrag',
    },
    casoCitato: {
      it: "ICO contro l'Home Office (1° marzo 2024): provvedimento di enforcement e diffida per non aver valutato a sufficienza l'intrusività del tracciamento GPS continuo (cavigliera su persone in regime di immigrazione), DPIA inadeguata, niente prova di necessità e proporzionalità. Non è un caso di dipendenti, ma il ragionamento dell'ICO sul tracciamento GPS continuo e direttamente trasferibile.",
      en: "ICO against the Home Office (1 March 2024): enforcement notice and warning for failing to adequately assess the intrusiveness of continuous GPS tracking (ankle tag on people under immigration powers), inadequate DPIA, no evidence of necessity and proportionality. It is not an employee case, but the ICO's reasoning on continuous GPS tracking is directly transferable.",
      de: "ICO gegen das Home Office (1. März 2024): Anordnung zur Durchsetzung und Verwarnung, weil die Eingriffsintensität der kontinuierlichen GPS-Ortung (Fußfessel bei Personen im Rahmen der Einwanderungsbehörde) nicht ausreichend bewertet wurde, unzureichende DPIA, kein Nachweis von Erforderlichkeit und Verhältnismäßigkeit. Es handelt sich nicht um einen Fall von Beschäftigten, aber die Argumentation des ICO zur kontinuierlichen GPS-Ortung ist direkt übertragbar.",
      fr: 'ICO contre le Home Office (1er mars 2024) : mise en demeure d’exécution et avertissement pour ne pas avoir suffisamment évalué le caractère intrusif du suivi GPS continu (bracelet à la cheville sur des personnes relevant du régime d’immigration), DPIA inadéquate, aucune preuve de nécessité et de proportionnalité. Il ne s’agit pas d’un cas de salariés, mais le raisonnement de l’ICO sur le suivi GPS continu est directement transposable.',
      es: "ICO contra el Home Office (1 de marzo de 2024): requerimiento de cumplimiento y apercibimiento por no haber evaluado suficientemente el carácter intrusivo del rastreo GPS continuo (tobillera a personas bajo el régimen de inmigración), DPIA inadecuada, sin prueba de necesidad y proporcionalidad. No es un caso de empleados, pero el razonamiento de la ICO sobre el rastreo GPS continuo es directamente trasladable.",
      pt: "ICO contra o Home Office (1 de março de 2024): decisão de execução e repreensão por não ter avaliado suficientemente o caráter intrusivo do seguimento GPS contínuo (pulseira eletrónica no tornozelo em pessoas sujeitas ao regime de imigração), DPIA inadequada, sem prova de necessidade e proporcionalidade. Não é um caso de trabalhadores, mas o raciocínio do ICO sobre o seguimento GPS contínuo é diretamente transponível.",
      da: "ICO mod Home Office (1. marts 2024): håndhævelsespåbud og advarsel for ikke at have vurderet tilstrækkeligt, hvor indgribende kontinuerlig GPS-sporing er (elektronisk fodlænke på personer underlagt indvandringskontrol), utilstrækkelig DPIA, ingen dokumentation for nødvendighed og proportionalitet. Det er ikke en sag om medarbejdere, men ICO's ræsonnement om kontinuerlig GPS-sporing kan direkte overføres.",
      sv: "ICO mot Home Office (1 mars 2024): föreläggande (enforcement notice) och varning för att inte i tillräcklig grad ha bedömt hur ingripande den kontinuerliga GPS-spårningen var (fotlänk på personer under migrationsbefogenheter), otillräcklig DPIA, inga belägg för nödvändighet och proportionalitet. Det är inte ett fall som rör anställda, men ICO:s resonemang om kontinuerlig GPS-spårning är direkt överförbart.",
      nb: 'ICO mot Home Office (1. mars 2024): håndhevingsvedtak og advarsel for ikke å ha vurdert tilstrekkelig hvor inngripende kontinuerlig GPS-sporing er (elektronisk fotlenke på personer underlagt innvandringskontroll), utilstrekkelig DPIA, ingen dokumentasjon for nødvendighet og proporsjonalitet. Det er ikke en sak om ansatte, men ICOs resonnement om kontinuerlig GPS-sporing kan overføres direkte.',
      nl: "ICO tegen het Home Office (1 maart 2024): handhavingsbevel en waarschuwing wegens het onvoldoende beoordelen van de indringendheid van continue GPS-tracking (enkelband bij personen onder het immigratieregime), ontoereikende DPIA, geen bewijs van noodzaak en evenredigheid. Het is geen werknemerszaak, maar de redenering van de ICO over continue GPS-tracking is direct overdraagbaar.",
    },
    urlFonte: FONTE_ICO_HOME_OFFICE.url,
    tipoImporto: 'caso-affine',
  },

  fonti: [
    FONTE_ICO_MONITORAGGIO,
    FONTE_ICO_VEICOLI,
    FONTE_ICO_DPIA,
    FONTE_ICO_HOME_OFFICE,
    FONTE_ICO_SEGNALAZIONI,
    FONTE_INFORMATION_COMMISSION,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
