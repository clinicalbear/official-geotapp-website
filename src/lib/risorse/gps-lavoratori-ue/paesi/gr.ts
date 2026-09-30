/**
 * Scheda-paese Grecia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * FAQ dell'HDPA (Garante greco) sui rapporti di lavoro, art. 27 della Legge
 * 4624/2019 (dati dei dipendenti), Decisione HDPA 65/2018 (lista dei
 * trattamenti che richiedono una DPIA), sanzione HDPA del 16 febbraio 2024 per
 * geolocalizzazione di un dipendente, pagina ufficiale dell'HDPA e GDPR.
 *
 * La Grecia ha un'unica autorità nazionale, l'HDPA; non ci sono ripartizioni
 * regionali. Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_HDPA_FAQ = {
  titolo:
    'HDPA (Garante greco), FAQ sui rapporti di lavoro (geolocalizzazione)',
  url: 'https://www.dpa.gr/el/enimerwtiko/thematikes_enotites/eidikoiskopoi/ergasiakessxeseis/faq_ergasiakes',
};
const FONTE_LEGGE_4624 = {
  titolo:
    'Legge 4624/2019, art. 27 (dati dei dipendenti), traduzione ufficiale HDPA',
  url: 'https://www.dpa.gr/sites/default/files/2020-08/LAW%204624_2019_EN_TRANSLATED%20BY%20THE%20HDPA.PDF',
};
const FONTE_HDPA_DPIA = {
  titolo:
    'HDPA, Decisione 65/2018 (lista dei trattamenti che richiedono DPIA)',
  url: 'https://www.dpa.gr/sites/default/files/2019-09/65_2018anonym.pdf',
};
const FONTE_HDPA_SANZIONE = {
  titolo:
    'HDPA, sanzione a un datore per geolocalizzazione (16 febbraio 2024)',
  url: 'https://www.dpa.gr/el/enimerwtiko/prakseisArxis/prostimo-kai-epiplixi-se-ergodoti-gia-epexergasia-prosopikon-dedomenon',
};
const FONTE_HDPA = {
  titolo: 'HDPA (Garante greco), pagina ufficiale',
  url: 'https://www.dpa.gr/en',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const grecia: SchedaPaese = {
  codiceISO: 'GR',
  slugCanonico: 'grecia',
  nome: 'Grecia',
  nomi: {
    it: 'Grecia',
    en: 'Greece',
    'en-us': 'Greece',
    'en-gb': 'Greece',
    'en-au': 'Greece',
    'en-ie': 'Greece',
    'en-ca': 'Greece',
    de: 'Griechenland',
    nl: 'Griekenland',
    fr: 'Grèce',
    es: 'Grecia',
    pt: 'Grécia',
    da: 'Grækenland',
    sv: 'Grekland',
    nb: 'Hellas',
    ru: 'Греция',
  },
  bandiera: '🇬🇷',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: {
      it: 'HDPA (Garante greco per la protezione dei dati)',
      en: 'HDPA (Greek Data Protection Authority)',
      de: 'HDPA (Griechische Datenschutzbehörde)',
      fr: 'HDPA (Autorité grecque de protection des données)',
      es: 'HDPA (Autoridad griega de protección de datos)',
      nl: 'HDPA (Griekse gegevensbeschermingsautoriteit)',
      pt: 'HDPA (Autoridade grega de proteção de dados)',
      da: 'HDPA (Græsk databeskyttelsesmyndighed)',
      sv: 'HDPA (Grekiska dataskyddsmyndigheten)',
      nb: 'HDPA (Gresk datatilsyn)',
      ru: 'HDPA (Греческий орган по защите данных)',
    },
    portale: FONTE_HDPA.url,
    urlFonte: FONTE_HDPA.url,
    verificatoIl: '2026-09-30',
    note: {
      it: "La Grecia ha un'unica autorità nazionale, l'HDPA; nessuna ripartizione regionale.",
      en: 'Greece has a single national authority, the HDPA; there is no regional breakdown.',
      de: 'Griechenland hat eine einzige nationale Behörde, die HDPA; es gibt keine regionale Aufteilung.',
      fr: "La Grèce dispose d'une seule autorité nationale, l'HDPA; il n'y a pas de répartition régionale.",
      es: 'Grecia tiene una única autoridad nacional, la HDPA; no existe reparto regional.',
      nl: 'Griekenland heeft één nationale autoriteit, de HDPA; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione ai lavoratori su finalità, tipo di dati raccolti e durata di conservazione',
        en: 'Informing workers about the purposes, type of data collected and retention period',
        de: 'Information der Arbeitnehmer über die Zwecke, die Art der erhobenen Daten und die Speicherdauer',
        fr: 'Information des travailleurs sur les finalités, le type de données collectées et la durée de conservation',
        es: 'Información a los trabajadores sobre las finalidades, el tipo de datos recogidos y la duración de la conservación',
        nl: 'Informeren van werknemers over de doeleinden, het type verzamelde gegevens en de bewaartermijn',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il datore deve informare i lavoratori sullo scopo del trattamento, sul tipo di dati registrati e sul tempo di conservazione.',
        en: 'the employer must inform workers about the purpose of the processing, the type of data recorded and the retention period.',
        de: 'Der Arbeitgeber muss die Arbeitnehmer über den Zweck der Verarbeitung, die Art der erfassten Daten und die Speicherdauer informieren.',
        fr: "l'employeur doit informer les travailleurs de la finalité du traitement, du type de données enregistrées et de la durée de conservation.",
        es: 'el empresario debe informar a los trabajadores sobre la finalidad del tratamiento, el tipo de datos registrados y el plazo de conservación.',
        nl: 'de werkgever moet de werknemers informeren over het doel van de verwerking, het type vastgelegde gegevens en de bewaartermijn.',
      },
      fonte: FONTE_HDPA_FAQ,
    },
    {
      voce: {
        it: "La geolocalizzazione non deve mirare a sorvegliare il lavoratore; limitata all'orario e a un percorso predefinito",
        en: 'Geolocation must not aim to monitor the worker; limited to working hours and a predefined route',
        de: 'Die Geolokalisierung darf nicht auf die Überwachung des Arbeitnehmers abzielen; begrenzt auf die Arbeitszeit und eine vordefinierte Route',
        fr: "La géolocalisation ne doit pas viser à surveiller le travailleur; limitée aux heures de travail et à un itinéraire prédéfini",
        es: 'La geolocalización no debe tener por objeto vigilar al trabajador; limitada al horario laboral y a una ruta predefinida',
        nl: 'De geolocatie mag niet gericht zijn op het bewaken van de werknemer; beperkt tot de werktijden en een vooraf bepaalde route',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per l'HDPA l'installazione di un sistema di geolocalizzazione non lede la sfera privata del lavoratore quando non mira a sorvegliarlo; va limitata all'orario di lavoro e a un percorso predefinito.",
        en: "according to the HDPA, installing a geolocation system does not infringe the worker's private sphere when it does not aim to monitor them; it must be limited to working hours and a predefined route.",
        de: 'Nach Auffassung der HDPA verletzt die Installation eines Geolokalisierungssystems die Privatsphäre des Arbeitnehmers nicht, wenn es nicht auf dessen Überwachung abzielt; es muss auf die Arbeitszeit und eine vordefinierte Route begrenzt werden.',
        fr: "pour l'HDPA, l'installation d'un système de géolocalisation ne porte pas atteinte à la sphère privée du travailleur lorsqu'elle ne vise pas à le surveiller; elle doit être limitée aux heures de travail et à un itinéraire prédéfini.",
        es: 'para la HDPA, la instalación de un sistema de geolocalización no lesiona la esfera privada del trabajador cuando no tiene por objeto vigilarlo; debe limitarse al horario laboral y a una ruta predefinida.',
        nl: 'volgens de HDPA tast de installatie van een geolocatiesysteem de privésfeer van de werknemer niet aan wanneer het niet gericht is op het bewaken ervan; het moet beperkt blijven tot de werktijden en een vooraf bepaalde route.',
      },
      fonte: FONTE_HDPA_FAQ,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installation',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: "Autorisation préalable d'une autorité avant l'installation",
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit vóór installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva dell'HDPA; la consultazione preventiva è prevista solo se la DPIA evidenzia un rischio residuo elevato.",
        en: 'no prior authorisation from the HDPA is required; prior consultation is only foreseen if the DPIA reveals a high residual risk.',
        de: 'Eine vorherige Genehmigung der HDPA ist nicht erforderlich; eine vorherige Konsultation ist nur vorgesehen, wenn die DSFA ein hohes Restrisiko aufzeigt.',
        fr: "aucune autorisation préalable de l'HDPA n'est nécessaire; la consultation préalable n'est prévue que si l'AIPD met en évidence un risque résiduel élevé.",
        es: 'no es necesaria una autorización previa de la HDPA; la consulta previa solo está prevista si la EIPD pone de manifiesto un riesgo residual elevado.',
        nl: 'er is geen voorafgaande toestemming van de HDPA nodig; voorafgaande raadpleging is alleen voorzien als de DPIA een hoog restrisico aan het licht brengt.',
      },
      fonte: FONTE_HDPA_FAQ,
    },
    {
      voce: {
        it: 'Percorso e orario predefiniti, niente uso fuori orario; conservazione non oltre un mese',
        en: 'Predefined route and hours, no use outside working hours; retention no longer than one month',
        de: 'Vorbestimmte Route und Arbeitszeit, keine Nutzung außerhalb der Arbeitszeit; Speicherung nicht länger als einen Monat',
        fr: "Parcours et horaires prédéfinis, pas d'utilisation en dehors des heures de travail; conservation n'excédant pas un mois",
        es: 'Ruta y horario predefinidos, sin uso fuera del horario laboral; conservación no superior a un mes',
        nl: 'Vooraf bepaalde route en werktijden, geen gebruik buiten werktijd; bewaring niet langer dan een maand',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per l'HDPA il sistema è conforme se il lavoratore segue un percorso predefinito in orari di lavoro determinati, la geolocalizzazione avviene entro quel percorso e il veicolo non è usato fuori orario; i dati sono conservati solo per il tempo necessario e comunque non oltre un mese; si adottano misure di sicurezza, accesso solo a persone autorizzate e tecniche di pseudonimizzazione o cifratura; il lavoratore ha diritto di accesso ai dati. Se il sistema è installato solo per aiutare il lavoratore a trovare la destinazione, deve servire esclusivamente a questo e il lavoratore può disattivarlo quando vuole.",
        en: 'according to the HDPA the system is compliant if the worker follows a predefined route during specific working hours, the geolocation takes place within that route and the vehicle is not used outside working hours; data are kept only as long as necessary and in any case no longer than one month; security measures apply, access is limited to authorised persons and pseudonymisation or encryption techniques are used; the worker has a right of access to the data. If the system is installed only to help the worker find the destination, it must serve exclusively that purpose and the worker may deactivate it whenever they wish.',
        de: 'Nach Auffassung der HDPA ist das System konform, wenn der Arbeitnehmer während bestimmter Arbeitszeiten eine vorbestimmte Route befährt, die Geolokalisierung innerhalb dieser Route erfolgt und das Fahrzeug nicht außerhalb der Arbeitszeit genutzt wird; die Daten werden nur so lange wie nötig und jedenfalls nicht länger als einen Monat gespeichert; es gelten Sicherheitsmaßnahmen, der Zugriff ist auf befugte Personen beschränkt und es werden Pseudonymisierungs- oder Verschlüsselungstechniken eingesetzt; der Arbeitnehmer hat ein Zugriffsrecht auf die Daten. Wird das System nur installiert, um dem Arbeitnehmer das Auffinden des Ziels zu erleichtern, muss es ausschließlich diesem Zweck dienen und der Arbeitnehmer kann es jederzeit deaktivieren.',
        fr: "selon l'HDPA, le système est conforme si le travailleur suit un parcours prédéfini pendant des heures de travail déterminées, si la géolocalisation s'effectue dans les limites de ce parcours et si le véhicule n'est pas utilisé en dehors des heures de travail; les données ne sont conservées que le temps nécessaire et en tout cas pas plus d'un mois; des mesures de sécurité sont prises, l'accès est réservé aux personnes autorisées et des techniques de pseudonymisation ou de chiffrement sont appliquées; le travailleur dispose d'un droit d'accès aux données. Si le système est installé uniquement pour aider le travailleur à trouver sa destination, il doit servir exclusivement à cela et le travailleur peut le désactiver quand il le souhaite.",
        es: 'según la HDPA, el sistema es conforme si el trabajador sigue una ruta predefinida en un horario laboral determinado, la geolocalización se realiza dentro de esa ruta y el vehículo no se usa fuera del horario laboral; los datos se conservan solo el tiempo necesario y en todo caso no más de un mes; se aplican medidas de seguridad, el acceso se limita a personas autorizadas y se usan técnicas de seudonimización o cifrado; el trabajador tiene derecho de acceso a los datos. Si el sistema se instala solo para ayudar al trabajador a encontrar el destino, debe servir exclusivamente a ese fin y el trabajador puede desactivarlo cuando lo desee.',
        nl: 'volgens de HDPA is het systeem conform als de werknemer tijdens bepaalde werktijden een vooraf bepaalde route volgt, de geolokalisatie binnen die route plaatsvindt en het voertuig niet buiten werktijd wordt gebruikt; gegevens worden slechts zo lang als nodig bewaard en in elk geval niet langer dan een maand; er gelden beveiligingsmaatregelen, de toegang is beperkt tot bevoegde personen en er worden technieken voor pseudonimisering of versleuteling toegepast; de werknemer heeft recht op inzage in de gegevens. Als het systeem alleen is geïnstalleerd om de werknemer te helpen de bestemming te vinden, moet het uitsluitend daarvoor dienen en kan de werknemer het uitschakelen wanneer hij dat wil.',
      },
      fonte: FONTE_HDPA_FAQ,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio sistematico della posizione dei lavoratori (Decisione 65/2018)",
        en: 'Impact assessment (DPIA) for systematic monitoring of workers location (Decision 65/2018)',
        de: 'Datenschutz-Folgenabschätzung (DSFA) für die systematische Überwachung des Standorts der Arbeitnehmer (Entscheidung 65/2018)',
        fr: "Analyse d'impact (AIPD) pour la surveillance systématique de la localisation des travailleurs (Décision 65/2018)",
        es: 'Evaluación de impacto (EIPD) para la vigilancia sistemática de la ubicación de los trabajadores (Decisión 65/2018)',
        nl: 'Effectbeoordeling (DPIA) voor de systematische monitoring van de locatie van werknemers (Besluit 65/2018)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista HDPA include il monitoraggio sistematico della posizione dei dipendenti tra i trattamenti che richiedono una valutazione d'impatto.",
        en: 'the HDPA list includes the systematic monitoring of employees location among the processing operations that require an impact assessment.',
        de: 'Die HDPA-Liste führt die systematische Überwachung des Standorts der Beschäftigten unter den Verarbeitungen auf, die eine Folgenabschätzung erfordern.',
        fr: "la liste de l'HDPA inclut la surveillance systématique de la localisation des employés parmi les traitements nécessitant une analyse d'impact.",
        es: 'la lista de la HDPA incluye la vigilancia sistemática de la ubicación de los empleados entre los tratamientos que requieren una evaluación de impacto.',
        nl: 'de HDPA-lijst noemt de systematische monitoring van de locatie van werknemers onder de verwerkingen die een effectbeoordeling vereisen.',
      },
      fonte: FONTE_HDPA_DPIA,
    },
    {
      voce: {
        it: 'Base giuridica = stretta necessità per il contratto di lavoro; il consenso solo in via eccezionale (Legge 4624/2019 art. 27)',
        en: 'Legal basis = strict necessity for the employment contract; consent only by exception (Law 4624/2019 art. 27)',
        de: 'Rechtsgrundlage = strikte Erforderlichkeit für den Arbeitsvertrag; Einwilligung nur ausnahmsweise (Gesetz 4624/2019 Art. 27)',
        fr: 'Base juridique = stricte nécessité pour le contrat de travail; consentement seulement à titre exceptionnel (Loi 4624/2019 art. 27)',
        es: 'Base jurídica = estricta necesidad para el contrato de trabajo; consentimiento solo con carácter excepcional (Ley 4624/2019 art. 27)',
        nl: 'Rechtsgrond = strikte noodzaak voor de arbeidsovereenkomst; toestemming alleen bij uitzondering (Wet 4624/2019 art. 27)',
      },
      risposta: 'si',
      dettaglio: {
        it: "L'art. 27 ammette il trattamento dei dati dei lavoratori per il contratto di lavoro solo se strettamente necessario; il consenso può essere usato solo in via eccezionale e, per giudicare se è libero, si tiene conto della dipendenza del lavoratore e delle circostanze (deve essere scritto o elettronico, distinguibile dal contratto, con l'informazione sul diritto di revoca). In ogni caso il titolare applica i principi dell'art. 5 GDPR (art. 27 c. 5).",
        en: 'art. 27 allows the processing of workers\' data for the employment contract only where strictly necessary; consent may be used only by way of exception and, in judging whether it is freely given, the worker\'s dependence and the circumstances are taken into account (it must be written or electronic, clearly distinguishable from the contract, with information on the right to withdraw). In any case the controller applies the principles of art. 5 GDPR (art. 27(5)).',
        de: 'Art. 27 erlaubt die Verarbeitung von Beschäftigtendaten für den Arbeitsvertrag nur, wenn sie unbedingt erforderlich ist; die Einwilligung darf nur ausnahmsweise verwendet werden, und bei der Beurteilung ihrer Freiwilligkeit werden die Abhängigkeit des Arbeitnehmers und die Umstände berücksichtigt (sie muss schriftlich oder elektronisch erfolgen, vom Vertrag klar unterscheidbar sein und die Information über das Widerrufsrecht enthalten). In jedem Fall wendet der Verantwortliche die Grundsätze des Art. 5 DSGVO an (Art. 27 Abs. 5).',
        fr: "l'art. 27 n'admet le traitement des données des travailleurs pour le contrat de travail que s'il est strictement nécessaire; le consentement ne peut être utilisé qu'à titre exceptionnel et, pour apprécier s'il est libre, on tient compte de la dépendance du travailleur et des circonstances (il doit être écrit ou électronique, clairement distinct du contrat, avec l'information sur le droit de retrait). Dans tous les cas, le responsable applique les principes de l'art. 5 RGPD (art. 27 par. 5).",
        es: 'el art. 27 admite el tratamiento de los datos de los trabajadores para el contrato de trabajo solo si es estrictamente necesario; el consentimiento solo puede usarse con carácter excepcional y, para juzgar si es libre, se tienen en cuenta la dependencia del trabajador y las circunstancias (debe ser escrito o electrónico, claramente distinguible del contrato, con la información sobre el derecho de retirada). En todo caso el responsable aplica los principios del art. 5 RGPD (art. 27, apdo. 5).',
        nl: 'art. 27 staat de verwerking van werknemersgegevens voor de arbeidsovereenkomst alleen toe als die strikt noodzakelijk is; toestemming mag alleen bij uitzondering worden gebruikt en bij de beoordeling of zij vrij is gegeven worden de afhankelijkheid van de werknemer en de omstandigheden in aanmerking genomen (zij moet schriftelijk of elektronisch zijn, duidelijk te onderscheiden van het contract, met informatie over het recht van intrekking). In elk geval past de verwerkingsverantwoordelijke de beginselen van art. 5 AVG toe (art. 27 lid 5).',
      },
      fonte: FONTE_LEGGE_4624,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Informa i lavoratori su finalità, dati raccolti e durata di conservazione.',
        en: 'Inform workers about the purposes, data collected and retention period.',
        de: 'Informieren Sie die Arbeitnehmer über die Zwecke, die erhobenen Daten und die Speicherdauer.',
        fr: 'Informez les travailleurs sur les finalités, les données collectées et la durée de conservation.',
        es: 'Informe a los trabajadores sobre las finalidades, los datos recogidos y la duración de la conservación.',
        nl: 'Informeer de werknemers over de doeleinden, de verzamelde gegevens en de bewaartermijn.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Verifica che la geolocalizzazione non miri a sorvegliare il lavoratore e sia limitata all'orario e a un percorso predefinito.",
        en: 'Verify that geolocation does not aim to monitor the worker and is limited to working hours and a predefined route.',
        de: 'Stellen Sie sicher, dass die Geolokalisierung nicht auf die Überwachung des Arbeitnehmers abzielt und auf die Arbeitszeit und eine vordefinierte Route begrenzt ist.',
        fr: "Vérifiez que la géolocalisation ne vise pas à surveiller le travailleur et qu'elle est limitée aux heures de travail et à un itinéraire prédéfini.",
        es: 'Compruebe que la geolocalización no tiene por objeto vigilar al trabajador y que se limita al horario laboral y a una ruta predefinida.',
        nl: 'Controleer of de geolocatie niet gericht is op het bewaken van de werknemer en beperkt is tot de werktijden en een vooraf bepaalde route.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Individua una base giuridica valida (necessità per il contratto di lavoro; il consenso solo in via eccezionale, L. 4624/2019 art. 27).',
        en: 'Identify a valid legal basis (necessity for the employment contract; consent only by exception, Law 4624/2019 art. 27).',
        de: 'Ermitteln Sie eine gültige Rechtsgrundlage (Erforderlichkeit für den Arbeitsvertrag; Einwilligung nur ausnahmsweise, Gesetz 4624/2019 Art. 27).',
        fr: 'Déterminez une base juridique valable (nécessité pour le contrat de travail; consentement seulement à titre exceptionnel, Loi 4624/2019 art. 27).',
        es: 'Determine una base jurídica válida (necesidad para el contrato de trabajo; consentimiento solo con carácter excepcional, Ley 4624/2019 art. 27).',
        nl: 'Bepaal een geldige rechtsgrond (noodzaak voor de arbeidsovereenkomst; toestemming alleen bij uitzondering, Wet 4624/2019 art. 27).',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio sistematico della posizione.",
        en: 'Carry out the impact assessment (DPIA) for the systematic monitoring of location.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) für die systematische Standortüberwachung durch.',
        fr: "Réalisez l'analyse d'impact (AIPD) pour la surveillance systématique de la localisation.",
        es: 'Realice la evaluación de impacto (EIPD) para la vigilancia sistemática de la ubicación.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor de systematische monitoring van de locatie.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: percorso e orario predefiniti, niente uso del veicolo fuori orario, conservazione non oltre un mese.',
        en: 'Configure the system: predefined route and hours, no use of the vehicle outside working hours, retention no longer than one month.',
        de: 'Konfigurieren Sie das System: vorbestimmte Route und Arbeitszeit, keine Nutzung des Fahrzeugs außerhalb der Arbeitszeit, Speicherung nicht länger als einen Monat.',
        fr: "Configurez le système: parcours et horaires prédéfinis, pas d'utilisation du véhicule en dehors des heures de travail, conservation n'excédant pas un mois.",
        es: 'Configure el sistema: ruta y horario predefinidos, sin uso del vehículo fuera del horario laboral, conservación no superior a un mes.',
        nl: 'Configureer het systeem: vooraf bepaalde route en werktijden, geen gebruik van het voertuig buiten werktijd, bewaring niet langer dan een maand.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'Se cambi sistema o software di monitoraggio, aggiorna e riconsegna l’informativa, e verifica se devi di nuovo informare o consultare i rappresentanti dei lavoratori, dove la legge lo prevede. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: l’informativa consegnata prima non basta.',
        en: 'If you switch systems: when you change your monitoring system or software, update and re-issue the privacy notice, and check whether you must inform or consult the workers\' representatives again, where the law requires it. The provider (data processor), the data collected and the methods often change: the one provided earlier is not enough.',
        de: 'Bei Systemwechsel: Wenn Sie Ihr Überwachungssystem oder Ihre Software wechseln, aktualisieren Sie die Datenschutzinformation und händigen Sie sie erneut aus, und prüfen Sie, ob Sie die Arbeitnehmervertretung erneut informieren oder beteiligen müssen, wo das Gesetz es vorsieht. Anbieter (Auftragsverarbeiter), erhobene Daten und Modalitäten ändern sich oft: die zuvor ausgehändigte genügt nicht.',
        fr: 'En cas de changement de système : si vous changez de système ou de logiciel de surveillance, mettez à jour et remettez l’information, et vérifiez si vous devez de nouveau informer ou consulter les représentants du personnel, lorsque la loi le prévoit. Le fournisseur (sous-traitant), les données collectées et les modalités changent souvent : celle remise auparavant ne suffit pas.',
        es: 'En caso de cambio de sistema: si cambias de sistema o software de monitorización, actualiza y vuelve a entregar la información, y comprueba si debes volver a informar o consultar a los representantes de los trabajadores, cuando la ley lo prevé. A menudo cambian el proveedor (encargado del tratamiento), los datos recogidos y las modalidades: la entregada antes no basta.',
        nl: 'Bij een systeemwissel: als je van monitoringsysteem of -software verandert, werk de privacyverklaring bij en verstrek deze opnieuw, en controleer of je de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'HDPA',
      portale: FONTE_HDPA.url,
      urlFonte: FONTE_HDPA.url,
      verificatoIl: '2026-09-30',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '2.000 €',
      en: '2,000 €',
      de: '2.000 €',
      fr: '2 000 €',
      es: '2.000 €',
      nl: '2.000 €',
    },
    casoCitato: {
      it: "HDPA (Garante greco), decisione n. 6/2024 del 16 febbraio 2024: un datore aveva usato il GPS del veicolo aziendale per localizzare un dipendente mentre era in congedo legittimo, fuori dall'orario di lavoro. Multa 2.000 euro per violazione del principio di liceità (art. 5.1.a GDPR), più un'ammonizione per l'informazione insufficiente sul funzionamento del sistema (artt. 5.1.a, 12, 13 e 5.2 GDPR).",
      en: 'HDPA (Greek data protection authority), decision no. 6/2024 of 16 February 2024: an employer had used the company vehicle GPS to locate an employee while they were on legitimate leave, outside working hours. A fine of 2,000 euros for breach of the principle of lawfulness (art. 5(1)(a) GDPR), plus a reprimand for insufficient information on how the system works (arts. 5(1)(a), 12, 13 and 5(2) GDPR).',
      de: 'HDPA (griechische Datenschutzbehörde), Entscheidung vom 16. Februar 2024: Ein Arbeitgeber hatte das GPS des Firmenfahrzeugs genutzt, um einen Beschäftigten während eines rechtmäßigen Urlaubs außerhalb der Arbeitszeit zu orten. Geldbuße von 2.000 Euro wegen Verstoßes gegen den Grundsatz der Rechtmäßigkeit (Art. 5 Abs. 1 Buchst. a DSGVO), zudem eine Verwarnung wegen unzureichender Information über die Funktionsweise des Systems (Art. 5 Abs. 1 Buchst. a, Art. 12, 13 und Art. 5 Abs. 2 DSGVO).',
      fr: "HDPA (autorité grecque de protection des données), décision du 16 février 2024: un employeur avait utilisé le GPS du véhicule de l'entreprise pour localiser un salarié alors qu'il était en congé légitime, en dehors des heures de travail. Amende de 2 000 euros pour manquement au principe de licéité (art. 5, par. 1, point a RGPD), ainsi qu'un rappel à l'ordre pour l'information insuffisante sur le fonctionnement du système (art. 5, par. 1, point a, art. 12, 13 et art. 5, par. 2 RGPD).",
      es: 'HDPA (autoridad griega de protección de datos), decisión de 16 de febrero de 2024: un empresario había usado el GPS del vehículo de empresa para localizar a un empleado mientras estaba en un permiso legítimo, fuera del horario laboral. Multa de 2.000 euros por infracción del principio de licitud (art. 5, apdo. 1, letra a RGPD), además de una amonestación por la información insuficiente sobre el funcionamiento del sistema (art. 5, apdo. 1, letra a, arts. 12, 13 y art. 5, apdo. 2 RGPD).',
      nl: 'HDPA (Griekse gegevensbeschermingsautoriteit), besluit van 16 februari 2024: een werkgever had de gps van het bedrijfsvoertuig gebruikt om een werknemer te lokaliseren terwijl deze met rechtmatig verlof was, buiten werktijd. Een boete van 2.000 euro wegens schending van het beginsel van rechtmatigheid (art. 5 lid 1 onder a AVG), plus een berisping wegens onvoldoende informatie over de werking van het systeem (art. 5 lid 1 onder a, art. 12, 13 en art. 5 lid 2 AVG).',
    },
    urlFonte: FONTE_HDPA_SANZIONE.url,
    tipoImporto: 'caso-gps',
  },

  fonti: [
    FONTE_HDPA_FAQ,
    FONTE_LEGGE_4624,
    FONTE_HDPA_DPIA,
    FONTE_HDPA_SANZIONE,
    FONTE_HDPA,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
