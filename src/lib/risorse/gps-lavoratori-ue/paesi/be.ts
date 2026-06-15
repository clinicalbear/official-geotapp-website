/**
 * Scheda-paese Belgio per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * CCT n. 81 del 26 aprile 2002 (controllo delle comunicazioni elettroniche in
 * rete), guida dell'APD/GBA sulla geolocalizzazione dei lavoratori, pagina
 * dell'APD/GBA sulla valutazione d'impatto, pagina dell'APD/GBA per i reclami,
 * decisione 114/2024 della Chambre Contentieuse dell'APD/GBA sui dati biometrici
 * per le presenze e GDPR.
 *
 * Il Belgio e' uno Stato federale, ma ha un'unica autorita' garante nazionale,
 * l'APD/GBA: non c'e' alcuna ripartizione regionale. Per questo `federale` e'
 * false. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_CCT_81 = {
  titolo:
    'CCT n. 81 del 26 aprile 2002 (controllo delle comunicazioni elettroniche in rete)',
  url: 'https://cnt-nar.be/sites/default/files/documents/CCT-COORD/cct-081.pdf',
};
const FONTE_APD_GEOLOCALIZZAZIONE = {
  titolo: 'APD/GBA, geolocalizzazione dei lavoratori',
  url: 'https://www.autoriteprotectiondonnees.be/professionnel/themes/vie-privee-sur-le-lieu-de-travail/surveillance-de-l-employeur/geolocalisation',
};
const FONTE_APD_DPIA = {
  titolo: "APD/GBA, valutazione d'impatto sulla protezione dei dati",
  url: 'https://www.autoriteprotectiondonnees.be/professionnel/rgpd-/analyse-d-impact-relative-a-la-protection-des-donnees',
};
const FONTE_APD_RECLAMO = {
  titolo: 'APD/GBA, presentare un reclamo',
  url: 'https://www.autoriteprotectiondonnees.be/citoyen/agir/introduire-une-plainte',
};
const FONTE_DECISIONE_114_2024 = {
  titolo:
    'Chambre Contentieuse APD/GBA, decisione 114/2024 (impronte per le presenze, 45.000 euro)',
  url: 'https://www.claeysengels.be/fr-be/nouvelles-evenements/traitement-des-donnees-biometriques-au-travail-lutilisation-dun-systeme',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const belgio: SchedaPaese = {
  codiceISO: 'BE',
  slugCanonico: 'belgio',
  nome: 'Belgio',
  nomi: {
    it: 'Belgio',
    en: 'Belgium',
    'en-us': 'Belgium',
    'en-gb': 'Belgium',
    'en-au': 'Belgium',
    'en-ie': 'Belgium',
    'en-ca': 'Belgium',
    de: 'Belgien',
    nl: 'België',
    fr: 'Belgique',
    es: 'Bélgica',
    pt: 'Bélgica',
    da: 'Belgien',
    sv: 'Belgien',
    nb: 'Belgia',
    ru: 'Бельгия',
  },
  bandiera: '🇧🇪',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Autorita per la protezione dei dati (APD/GBA)',
    portale: FONTE_APD_RECLAMO.url,
    urlFonte: FONTE_APD_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "Il Belgio e' federale ma ha un'unica autorita' garante nazionale, l'APD/GBA: nessuna ripartizione regionale.",
      en: 'Belgium is federal but has a single national data protection authority, the APD/GBA: there is no regional division.',
      de: 'Belgien ist ein Bundesstaat, hat jedoch nur eine einzige nationale Datenschutzbehörde, die APD/GBA: Es gibt keine regionale Aufteilung.',
      fr: "La Belgique est un État fédéral mais dispose d'une seule autorité de protection des données nationale, l'APD/GBA : il n'y a aucune répartition régionale.",
      es: 'Bélgica es un Estado federal, pero cuenta con una única autoridad nacional de protección de datos, la APD/GBA: no existe ninguna división regional.',
      nl: 'België is federaal, maar heeft één enkele nationale gegevensbeschermingsautoriteit, de APD/GBA: er is geen regionale opdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: "Informazione e concertazione preventiva del consiglio d'impresa (CCT n. 81, art. 7)",
        en: "Prior information and consultation of the works council (conseil d'entreprise) (CCT/CAO no. 81, art. 7)",
        de: "Vorherige Information und Anhörung des Betriebsrats (conseil d'entreprise) (CCT/CAO Nr. 81, Art. 7)",
        fr: "Information et concertation préalables du conseil d'entreprise (CCT n. 81, art. 7)",
        es: "Información y consulta previas del comité de empresa (conseil d'entreprise) (CCT/CAO n.º 81, art. 7)",
        nl: "Voorafgaande informatie en raadpleging van de ondernemingsraad (conseil d'entreprise) (CCT/CAO nr. 81, art. 7)",
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Prima di installare un sistema di controllo il datore deve informare il consiglio d'impresa; in sua assenza la cascata va al comitato per la prevenzione, poi alla delegazione sindacale, poi ai lavoratori. Il consiglio d'impresa esiste dai 50 dipendenti.",
        en: "Before installing a monitoring system the employer must inform the works council (conseil d'entreprise); in its absence the cascade goes to the prevention committee, then to the union delegation, then to the workers. The works council exists from 50 employees.",
        de: "Vor der Installation eines Überwachungssystems muss der Arbeitgeber den Betriebsrat (conseil d'entreprise) informieren; fehlt dieser, geht die Kaskade an den Ausschuss für Gefahrenverhütung, dann an die Gewerkschaftsvertretung, dann an die Arbeitnehmer. Der Betriebsrat besteht ab 50 Beschäftigten.",
        fr: "Avant d'installer un système de contrôle, l'employeur doit informer le conseil d'entreprise ; à défaut, la cascade passe au comité de prévention, puis à la délégation syndicale, puis aux travailleurs. Le conseil d'entreprise existe à partir de 50 travailleurs.",
        es: "Antes de instalar un sistema de control, el empleador debe informar al comité de empresa (conseil d'entreprise); en su ausencia, la cascada pasa al comité de prevención, luego a la delegación sindical y después a los trabajadores. El comité de empresa existe a partir de 50 empleados.",
        nl: "Voordat een controlesysteem wordt geïnstalleerd, moet de werkgever de ondernemingsraad (conseil d'entreprise) informeren; bij ontstentenis daarvan gaat de cascade naar het preventiecomité, dan naar de vakbondsafvaardiging, dan naar de werknemers. De ondernemingsraad bestaat vanaf 50 werknemers.",
      },
      fonte: FONTE_CCT_81,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: "Autorisation préalable d'une autorité avant l'installation",
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit vóór installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva dell'APD/GBA; vale la responsabilizzazione, con valutazione d'impatto quando il rischio e' elevato e consultazione dell'autorita' solo se resta un rischio residuo elevato.",
        en: "No prior authorisation from the APD/GBA is required; the accountability principle applies, with an impact assessment when the risk is high and consultation of the authority only if a high residual risk remains.",
        de: "Eine vorherige Genehmigung der APD/GBA ist nicht erforderlich; es gilt der Grundsatz der Rechenschaftspflicht, mit einer Folgenabschätzung bei hohem Risiko und einer Konsultation der Behörde nur dann, wenn ein hohes Restrisiko verbleibt.",
        fr: "Aucune autorisation préalable de l'APD/GBA n'est requise ; le principe de responsabilisation s'applique, avec une analyse d'impact lorsque le risque est élevé et une consultation de l'autorité uniquement s'il subsiste un risque résiduel élevé.",
        es: "No se requiere una autorización previa de la APD/GBA; rige el principio de responsabilidad proactiva, con una evaluación de impacto cuando el riesgo es elevado y consulta a la autoridad solo si subsiste un riesgo residual elevado.",
        nl: "Een voorafgaande toestemming van de APD/GBA is niet nodig; het verantwoordingsbeginsel geldt, met een effectbeoordeling wanneer het risico hoog is en raadpleging van de autoriteit alleen als er een hoog restrisico blijft bestaan.",
      },
      fonte: FONTE_APD_DPIA,
    },
    {
      voce: {
        it: 'Informazione preventiva ai lavoratori (base giuridica, diritti; art. 13 GDPR)',
        en: 'Prior information to workers (legal basis, rights; art. 13 GDPR)',
        de: 'Vorherige Information der Arbeitnehmer (Rechtsgrundlage, Rechte; Art. 13 DSGVO)',
        fr: 'Information préalable des travailleurs (base juridique, droits ; art. 13 RGPD)',
        es: 'Información previa a los trabajadores (base jurídica, derechos; art. 13 RGPD)',
        nl: 'Voorafgaande informatie aan werknemers (rechtsgrond, rechten; art. 13 AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore deve comunicare prima la base giuridica del trattamento, le finalita' e i diritti dei lavoratori; la base non e' di norma il consenso ma il legittimo interesse o la necessita' contrattuale/legale.",
        en: "The employer must communicate beforehand the legal basis of the processing, the purposes and the workers' rights; the basis is not usually consent but legitimate interest or contractual/legal necessity.",
        de: "Der Arbeitgeber muss zuvor die Rechtsgrundlage der Verarbeitung, die Zwecke und die Rechte der Arbeitnehmer mitteilen; die Grundlage ist in der Regel nicht die Einwilligung, sondern das berechtigte Interesse oder die vertragliche/gesetzliche Erforderlichkeit.",
        fr: "L'employeur doit communiquer au préalable la base juridique du traitement, les finalités et les droits des travailleurs ; la base n'est généralement pas le consentement mais l'intérêt légitime ou la nécessité contractuelle/légale.",
        es: "El empleador debe comunicar previamente la base jurídica del tratamiento, las finalidades y los derechos de los trabajadores; la base no suele ser el consentimiento, sino el interés legítimo o la necesidad contractual/legal.",
        nl: "De werkgever moet vooraf de rechtsgrond van de verwerking, de doeleinden en de rechten van de werknemers meedelen; de grondslag is doorgaans niet de toestemming maar het gerechtvaardigd belang of de contractuele/wettelijke noodzaak.",
      },
      fonte: FONTE_APD_GEOLOCALIZZAZIONE,
    },
    {
      voce: {
        it: 'Divieto di controllo permanente e sistematico (sproporzionato); disattivabile fuori orario',
        en: 'Ban on permanent and systematic monitoring (disproportionate); deactivatable outside working hours',
        de: 'Verbot einer dauerhaften und systematischen Überwachung (unverhältnismäßig); außerhalb der Arbeitszeit abschaltbar',
        fr: 'Interdiction du contrôle permanent et systématique (disproportionné) ; désactivable en dehors des heures de travail',
        es: 'Prohibición del control permanente y sistemático (desproporcionado); desactivable fuera del horario de trabajo',
        nl: 'Verbod op permanente en systematische controle (onevenredig); buiten werktijd uitschakelbaar',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per l'APD un controllo permanente con lettura sistematica dei dati di localizzazione e' in linea di principio sproporzionato; il sistema deve poter essere disattivato quando il veicolo e' usato fuori dall'orario di lavoro.",
        en: "According to the APD, permanent monitoring with systematic reading of location data is in principle disproportionate; the system must be able to be deactivated when the vehicle is used outside working hours.",
        de: "Nach Auffassung der APD ist eine dauerhafte Überwachung mit systematischer Auswertung der Standortdaten grundsätzlich unverhältnismäßig; das System muss abgeschaltet werden können, wenn das Fahrzeug außerhalb der Arbeitszeit genutzt wird.",
        fr: "Pour l'APD, un contrôle permanent avec lecture systématique des données de localisation est en principe disproportionné ; le système doit pouvoir être désactivé lorsque le véhicule est utilisé en dehors des heures de travail.",
        es: "Para la APD, un control permanente con lectura sistemática de los datos de localización es en principio desproporcionado; el sistema debe poder desactivarse cuando el vehículo se utiliza fuera del horario de trabajo.",
        nl: "Volgens de APD is een permanente controle met systematische uitlezing van de locatiegegevens in beginsel onevenredig; het systeem moet kunnen worden uitgeschakeld wanneer het voertuig buiten werktijd wordt gebruikt.",
      },
      fonte: FONTE_APD_GEOLOCALIZZAZIONE,
    },
    {
      voce: {
        it: "Valutazione d'impatto (AIPD) per la sorveglianza sistematica su larga scala",
        en: 'Impact assessment (DPIA) for large-scale systematic monitoring',
        de: 'Folgenabschätzung (DSFA) bei systematischer Überwachung in großem Umfang',
        fr: "Analyse d'impact (AIPD) pour la surveillance systématique à grande échelle",
        es: 'Evaluación de impacto (EIPD) para la vigilancia sistemática a gran escala',
        nl: 'Effectbeoordeling (DPIA) voor grootschalige systematische monitoring',
      },
      risposta: 'si',
      dettaglio: {
        it: "Serve una valutazione d'impatto quando il trattamento e' suscettibile di comportare un rischio elevato, come una sorveglianza sistematica su larga scala.",
        en: 'An impact assessment is required when the processing is likely to result in a high risk, such as large-scale systematic monitoring.',
        de: 'Eine Folgenabschätzung ist erforderlich, wenn die Verarbeitung voraussichtlich ein hohes Risiko mit sich bringt, etwa eine systematische Überwachung in großem Umfang.',
        fr: "Une analyse d'impact est requise lorsque le traitement est susceptible d'engendrer un risque élevé, comme une surveillance systématique à grande échelle.",
        es: 'Es necesaria una evaluación de impacto cuando es probable que el tratamiento entrañe un riesgo elevado, como una vigilancia sistemática a gran escala.',
        nl: 'Een effectbeoordeling is vereist wanneer de verwerking waarschijnlijk een hoog risico met zich meebrengt, zoals een grootschalige systematische monitoring.',
      },
      fonte: FONTE_APD_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: "Informa e consulta il consiglio d'impresa prima di installare (CCT n. 81); in sua assenza, segui la cascata: comitato prevenzione, delegazione sindacale, lavoratori.",
        en: "Inform and consult the works council (conseil d'entreprise) before installing (CCT/CAO no. 81); in its absence, follow the cascade: prevention committee, union delegation, workers.",
        de: "Informieren und konsultieren Sie den Betriebsrat (conseil d'entreprise) vor der Installation (CCT/CAO Nr. 81); fehlt dieser, folgen Sie der Kaskade: Ausschuss für Gefahrenverhütung, Gewerkschaftsvertretung, Arbeitnehmer.",
        fr: "Informez et consultez le conseil d'entreprise avant d'installer (CCT n. 81) ; à défaut, suivez la cascade : comité de prévention, délégation syndicale, travailleurs.",
        es: "Informe y consulte al comité de empresa (conseil d'entreprise) antes de instalar (CCT/CAO n.º 81); en su ausencia, siga la cascada: comité de prevención, delegación sindical, trabajadores.",
        nl: "Informeer en raadpleeg de ondernemingsraad (conseil d'entreprise) vóór installatie (CCT/CAO nr. 81); bij ontstentenis daarvan volgt u de cascade: preventiecomité, vakbondsafvaardiging, werknemers.",
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Individua una base giuridica valida (legittimo interesse o necessita contrattuale/legale), non il consenso.',
        en: 'Identify a valid legal basis (legitimate interest or contractual/legal necessity), not consent.',
        de: 'Ermitteln Sie eine gültige Rechtsgrundlage (berechtigtes Interesse oder vertragliche/gesetzliche Erforderlichkeit), nicht die Einwilligung.',
        fr: "Déterminez une base juridique valable (intérêt légitime ou nécessité contractuelle/légale), et non le consentement.",
        es: 'Determine una base jurídica válida (interés legítimo o necesidad contractual/legal), no el consentimiento.',
        nl: 'Bepaal een geldige rechtsgrond (gerechtvaardigd belang of contractuele/wettelijke noodzaak), niet de toestemming.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Informa preventivamente i lavoratori su base giuridica, finalita' e diritti.",
        en: 'Inform the workers beforehand about the legal basis, the purposes and their rights.',
        de: 'Informieren Sie die Arbeitnehmer im Voraus über die Rechtsgrundlage, die Zwecke und ihre Rechte.',
        fr: 'Informez au préalable les travailleurs sur la base juridique, les finalités et les droits.',
        es: 'Informe previamente a los trabajadores sobre la base jurídica, las finalidades y los derechos.',
        nl: 'Informeer de werknemers vooraf over de rechtsgrond, de doeleinden en de rechten.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto per la sorveglianza sistematica su larga scala.",
        en: 'Carry out the impact assessment for large-scale systematic monitoring.',
        de: 'Führen Sie die Folgenabschätzung für eine systematische Überwachung in großem Umfang durch.',
        fr: "Réalisez l'analyse d'impact pour la surveillance systématique à grande échelle.",
        es: 'Realice la evaluación de impacto para la vigilancia sistemática a gran escala.',
        nl: 'Voer de effectbeoordeling uit voor grootschalige systematische monitoring.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: niente controllo permanente, disattivazione fuori orario.',
        en: 'Configure the system: no permanent monitoring, deactivation outside working hours.',
        de: 'Konfigurieren Sie das System: keine dauerhafte Überwachung, Abschaltung außerhalb der Arbeitszeit.',
        fr: 'Configurez le système : pas de contrôle permanent, désactivation en dehors des heures de travail.',
        es: 'Configure el sistema: sin control permanente, desactivación fuera del horario de trabajo.',
        nl: 'Configureer het systeem: geen permanente controle, uitschakeling buiten werktijd.',
      },
    },
  ],

  contatti: [
    {
      ente: 'APD/GBA, reclamo',
      portale: FONTE_APD_RECLAMO.url,
      urlFonte: FONTE_APD_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '45.000 euro',
      en: '45,000 euros',
      de: '45.000 Euro',
      fr: '45 000 euros',
      es: '45.000 euros',
      nl: '45.000 euro',
    },
    casoCitato: {
      it: "Chambre Contentieuse dell'APD/GBA, decisione 114/2024 del 6 settembre 2024: un datore usava le impronte digitali dei dipendenti per la rilevazione delle presenze, su una base (il consenso) non valida nel rapporto di lavoro e in violazione della minimizzazione (esistevano mezzi meno intrusivi). Non e' un caso di GPS, ma e' il caso belga di riferimento sul controllo delle presenze dei dipendenti.",
      en: "Chambre Contentieuse of the APD/GBA, decision 114/2024 of 6 September 2024: an employer used employees' fingerprints for attendance recording, on a basis (consent) that is not valid in the employment relationship and in breach of data minimisation (less intrusive means existed). It is not a GPS case, but it is the Belgian benchmark case on monitoring employees' attendance.",
      de: "Chambre Contentieuse der APD/GBA, Beschluss 114/2024 vom 6. September 2024: Ein Arbeitgeber nutzte die Fingerabdrücke der Beschäftigten zur Anwesenheitserfassung, auf einer im Arbeitsverhältnis ungültigen Grundlage (der Einwilligung) und unter Verstoß gegen die Datenminimierung (es gab weniger eingriffsintensive Mittel). Es handelt sich nicht um einen GPS-Fall, aber um den belgischen Referenzfall zur Anwesenheitskontrolle der Beschäftigten.",
      fr: "Chambre Contentieuse de l'APD/GBA, décision 114/2024 du 6 septembre 2024 : un employeur utilisait les empreintes digitales des employés pour le pointage des présences, sur une base (le consentement) non valable dans la relation de travail et en violation de la minimisation (des moyens moins intrusifs existaient). Ce n'est pas un cas de GPS, mais c'est le cas belge de référence sur le contrôle des présences des employés.",
      es: "Chambre Contentieuse de la APD/GBA, decisión 114/2024 de 6 de septiembre de 2024: un empleador utilizaba las huellas dactilares de los empleados para el registro de asistencia, sobre una base (el consentimiento) no válida en la relación laboral y en infracción de la minimización (existían medios menos intrusivos). No es un caso de GPS, pero es el caso belga de referencia sobre el control de la asistencia de los empleados.",
      nl: "Chambre Contentieuse van de APD/GBA, beslissing 114/2024 van 6 september 2024: een werkgever gebruikte de vingerafdrukken van werknemers voor de aanwezigheidsregistratie, op een in de arbeidsverhouding ongeldige grondslag (de toestemming) en in strijd met de minimalisatie (er waren minder ingrijpende middelen). Het is geen GPS-zaak, maar het is de Belgische referentiezaak over de controle van de aanwezigheid van werknemers.",
    },
    urlFonte: FONTE_DECISIONE_114_2024.url,
  },

  fonti: [
    FONTE_CCT_81,
    FONTE_APD_GEOLOCALIZZAZIONE,
    FONTE_APD_DPIA,
    FONTE_APD_RECLAMO,
    FONTE_DECISIONE_114_2024,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
