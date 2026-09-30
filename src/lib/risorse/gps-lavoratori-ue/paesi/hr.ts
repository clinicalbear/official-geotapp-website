/**
 * Scheda-paese Croazia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. 43 della Zakon o zaštiti na radu (legge sulla sicurezza sul lavoro) sui
 * dispositivi di sorveglianza, guida AZOP sul trattamento dei dati dei dipendenti
 * tramite GPS, lista AZOP dei trattamenti che richiedono una DPIA, pagina AZOP
 * per i reclami e GDPR.
 *
 * La Croazia ha un'unica autorità nazionale, l'AZOP: nessuna ripartizione
 * regionale. Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_ZZR_43 = {
  titolo:
    'Zakon o zaštiti na radu (legge sicurezza sul lavoro), art. 43 (dispositivi di sorveglianza)',
  url: 'https://www.zakon.hr/z/167/zakon-o-zastiti-na-radu',
};
const FONTE_ZOR = {
  titolo:
    'Zakon o radu (legge sul lavoro), art. 29 (dati dei lavoratori) e art. 150 (consultazione del consiglio dei lavoratori)',
  url: 'https://www.zakon.hr/z/307/zakon-o-radu',
};
const FONTE_AZOP_GPS = {
  titolo:
    'AZOP (Garante croato), trattamento dei dati dei dipendenti tramite GPS',
  url: 'https://azop.hr/obrada-osobnih-podataka-zaposlenika-putem-gps-uredaja/',
};
const FONTE_AZOP_DPIA = {
  titolo: 'AZOP, lista dei trattamenti che richiedono una DPIA',
  url: 'https://azop.hr/odluka-o-uspostavi-i-javnoj-objavi-popisa-vrsta-postupaka-obrade-koje-podlijezu-zahtjevu-za-procjenu-ucinka-na-zastitu-podataka/',
};
const FONTE_AZOP_RECLAMO = {
  titolo: 'AZOP, richiesta di accertamento di violazione (reclamo)',
  url: 'https://azop.hr/zahtjev-za-utvrdivanje-povrede-prava/',
};
const FONTE_AZOP_HOME = {
  titolo: 'AZOP (Garante croato), pagina ufficiale',
  url: 'https://azop.hr/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const croazia: SchedaPaese = {
  codiceISO: 'HR',
  slugCanonico: 'croazia',
  nome: 'Croazia',
  nomi: {
    it: 'Croazia',
    en: 'Croatia',
    'en-us': 'Croatia',
    'en-gb': 'Croatia',
    'en-au': 'Croatia',
    'en-ie': 'Croatia',
    'en-ca': 'Croatia',
    de: 'Kroatien',
    nl: 'Kroatië',
    fr: 'Croatie',
    es: 'Croacia',
    pt: 'Croácia',
    da: 'Kroatien',
    sv: 'Kroatien',
    nb: 'Kroatia',
    ru: 'Хорватия',
  },
  bandiera: '🇭🇷',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'AZOP (Agencija za zaštitu osobnih podataka)',
    urlFonte: FONTE_AZOP_RECLAMO.url,
    verificatoIl: '2026-09-30',
    note: {
      it: "La Croazia ha un'unica autorità nazionale, l'AZOP; nessuna ripartizione regionale.",
      en: 'Croatia has a single national authority, the AZOP; there is no regional breakdown.',
      de: 'Kroatien hat eine einzige nationale Behörde, die AZOP; es gibt keine regionale Aufteilung.',
      fr: 'La Croatie dispose d’une seule autorité nationale, l’AZOP ; il n’y a aucune répartition régionale.',
      es: 'Croacia cuenta con una única autoridad nacional, la AZOP; no existe reparto regional alguno.',
      nl: 'Kroatie heeft een enkele nationale autoriteit, de AZOP; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: "Consenso preventivo del consiglio dei lavoratori se la sorveglianza segue tutti i movimenti per l'intero orario (Zakon o zaštiti na radu, art. 43)",
        en: 'Prior consent of the works council if the surveillance follows all movements for the entire working time (Zakon o zaštiti na radu, art. 43)',
        de: 'Vorherige Zustimmung des Betriebsrats, wenn die Überwachung alle Bewegungen während der gesamten Arbeitszeit verfolgt (Zakon o zaštiti na radu, Art. 43)',
        fr: 'Consentement préalable du conseil des travailleurs si la surveillance suit tous les mouvements pendant toute la durée du travail (Zakon o zaštiti na radu, art. 43)',
        es: 'Consentimiento previo del consejo de trabajadores si la vigilancia sigue todos los movimientos durante toda la jornada (Zakon o zaštiti na radu, art. 43)',
        nl: 'Voorafgaande toestemming van de ondernemingsraad als het toezicht alle bewegingen gedurende de hele werktijd volgt (Zakon o zaštiti na radu, art. 43)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "L'art. 43 della legge sulla sicurezza sul lavoro dice che i «dispositivi di sorveglianza» che seguono tutti i movimenti del lavoratore per l'intero orario si possono usare solo con il previo consenso del consiglio dei lavoratori (o del rappresentante sindacale con i relativi poteri). Il testo riguarda i dispositivi di sorveglianza come strumento di sicurezza sul lavoro (il comma 6 cita audio e video): né la legge né l'AZOP dicono espressamente che valga anche per il GPS, quindi per prudenza conviene ottenere il consenso. In ogni caso, dove esiste un consiglio dei lavoratori, la legge sul lavoro (Zakon o radu, art. 150) impone di consultarlo prima di decidere l'introduzione di una nuova tecnologia.",
        en: 'Art. 43 of the occupational safety law says that "surveillance devices" that follow all of a worker\'s movements for the entire working time may be used only with the prior consent of the works council (or of the union representative holding the relevant powers). The text concerns surveillance devices as a workplace-safety tool (paragraph 6 mentions audio and video): neither the law nor the AZOP says expressly that it also covers GPS, so obtaining consent is the prudent course. In any case, where a works council exists, the Labour Act (Zakon o radu, art. 150) requires consulting it before deciding to introduce a new technology.',
        de: 'Art. 43 des Arbeitsschutzgesetzes besagt, dass „Überwachungsgeräte“, die alle Bewegungen des Arbeitnehmers während der gesamten Arbeitszeit verfolgen, nur mit vorheriger Zustimmung des Betriebsrats (oder des Gewerkschaftsvertreters mit den entsprechenden Befugnissen) eingesetzt werden dürfen. Der Text betrifft Überwachungsgeräte als Instrument der Arbeitssicherheit (Absatz 6 nennt Audio und Video): weder das Gesetz noch die AZOP sagen ausdrücklich, dass er auch für GPS gilt, daher ist es ratsam, die Zustimmung einzuholen. In jedem Fall verlangt das Arbeitsgesetz (Zakon o radu, Art. 150), dass ein bestehender Betriebsrat vor der Entscheidung über die Einführung einer neuen Technologie angehört wird.',
        fr: 'L’art. 43 de la loi sur la sécurité au travail prévoit que les « dispositifs de surveillance » qui suivent tous les mouvements du travailleur pendant toute la durée du travail ne peuvent être utilisés qu’avec le consentement préalable du conseil des travailleurs (ou du représentant syndical disposant des pouvoirs correspondants). Le texte vise les dispositifs de surveillance comme outil de sécurité au travail (l’alinéa 6 mentionne l’audio et la vidéo) : ni la loi ni l’AZOP ne disent expressément qu’il couvre aussi le GPS, il est donc prudent d’obtenir le consentement. Dans tous les cas, là où un conseil des travailleurs existe, le code du travail (Zakon o radu, art. 150) impose de le consulter avant de décider d’introduire une nouvelle technologie.',
        es: 'El art. 43 de la ley de seguridad en el trabajo establece que los «dispositivos de vigilancia» que siguen todos los movimientos del trabajador durante toda la jornada solo pueden utilizarse con el consentimiento previo del consejo de trabajadores (o del representante sindical con las facultades correspondientes). El texto se refiere a los dispositivos de vigilancia como instrumento de seguridad en el trabajo (el apartado 6 menciona audio y vídeo): ni la ley ni la AZOP dicen expresamente que abarque también el GPS, por lo que lo prudente es obtener el consentimiento. En cualquier caso, donde existe un consejo de trabajadores, la ley laboral (Zakon o radu, art. 150) obliga a consultarlo antes de decidir introducir una nueva tecnología.',
        nl: 'Art. 43 van de arbeidsveiligheidswet bepaalt dat "toezichtapparaten" die alle bewegingen van de werknemer gedurende de hele werktijd volgen, alleen mogen worden gebruikt met voorafgaande toestemming van de ondernemingsraad (of van de vakbondsvertegenwoordiger met de betreffende bevoegdheden). De tekst betreft toezichtapparaten als instrument voor veiligheid op het werk (lid 6 noemt audio en video): noch de wet noch de AZOP zegt uitdrukkelijk dat dit ook voor GPS geldt, dus het is verstandig toestemming te verkrijgen. In elk geval verplicht de arbeidswet (Zakon o radu, art. 150) ertoe een bestaande ondernemingsraad te raadplegen voordat wordt besloten een nieuwe technologie in te voeren.',
      },
      fonte: FONTE_ZZR_43,
    },
    {
      voce: {
        it: 'Regole interne scritte e informazione dei lavoratori (AZOP; Zakon o radu, art. 29)',
        en: 'Written internal rules and information to the workers (AZOP; Zakon o radu, art. 29)',
        de: 'Schriftliche interne Regeln und Information der Arbeitnehmer (AZOP; Zakon o radu, Art. 29)',
        fr: 'Règles internes écrites et information des travailleurs (AZOP ; Zakon o radu, art. 29)',
        es: 'Normas internas escritas e información a los trabajadores (AZOP; Zakon o radu, art. 29)',
        nl: 'Schriftelijke interne regels en informatie aan de werknemers (AZOP; Zakon o radu, art. 29)',
      },
      risposta: 'si',
      dettaglio: {
        it: "L'AZOP precisa che non basta informare i lavoratori a voce dell'esistenza del GPS: va disciplinato con regole interne scritte, accessibili a tutti, e il datore deve informarli dell'esistenza del sistema e delle condizioni d'uso. Anche la legge sul lavoro (Zakon o radu, art. 29 c. 2) impone di stabilire in anticipo, nel regolamento aziendale, quali dati del lavoratore si raccolgono e si trattano. (L'obbligo di informare per iscritto «all'assunzione» dell'art. 43 c. 6 della legge sulla sicurezza sul lavoro riguarda i dispositivi audio e video.)",
        en: 'The AZOP states that informing workers orally about the GPS is not enough: it must be regulated by written internal rules available to everyone, and the employer must inform workers of the existence of the system and its conditions of use. The Labour Act (Zakon o radu, art. 29 para. 2) also requires the employer to set out in advance, in the work rules, which worker data are collected and processed. (The duty to inform in writing "at hiring" in art. 43 para. 6 of the occupational safety law concerns audio and video devices.)',
        de: 'Die AZOP stellt klar, dass eine mündliche Information der Arbeitnehmer über das GPS nicht genügt: es muss durch schriftliche, allen zugängliche interne Regeln geregelt werden, und der Arbeitgeber muss die Arbeitnehmer über das Bestehen des Systems und die Nutzungsbedingungen informieren. Auch das Arbeitsgesetz (Zakon o radu, Art. 29 Abs. 2) verpflichtet den Arbeitgeber, in der Arbeitsordnung im Voraus festzulegen, welche Arbeitnehmerdaten erhoben und verarbeitet werden. (Die Pflicht zur schriftlichen Information „bei der Einstellung“ nach Art. 43 Abs. 6 des Arbeitsschutzgesetzes betrifft Audio- und Videogeräte.)',
        fr: 'L’AZOP précise qu’il ne suffit pas d’informer oralement les travailleurs de l’existence du GPS : il doit être encadré par des règles internes écrites, accessibles à tous, et l’employeur doit informer les travailleurs de l’existence du système et de ses conditions d’utilisation. Le code du travail (Zakon o radu, art. 29 al. 2) impose aussi de fixer à l’avance, dans le règlement intérieur, les données du travailleur qui sont collectées et traitées. (L’obligation d’informer par écrit « à l’embauche » de l’art. 43 al. 6 de la loi sur la sécurité au travail concerne les dispositifs audio et vidéo.)',
        es: 'La AZOP precisa que no basta informar verbalmente a los trabajadores de la existencia del GPS: debe regularse con normas internas escritas, accesibles a todos, y el empresario debe informarles de la existencia del sistema y de sus condiciones de uso. La ley laboral (Zakon o radu, art. 29 ap. 2) también obliga a fijar de antemano, en el reglamento de la empresa, qué datos del trabajador se recogen y se tratan. (La obligación de informar por escrito «en la contratación» del art. 43 ap. 6 de la ley de seguridad en el trabajo se refiere a los dispositivos de audio y vídeo.)',
        nl: 'De AZOP stelt dat het niet volstaat werknemers mondeling over de GPS te informeren: die moet worden geregeld in schriftelijke interne regels die voor iedereen toegankelijk zijn, en de werkgever moet de werknemers informeren over het bestaan van het systeem en de gebruiksvoorwaarden. Ook de arbeidswet (Zakon o radu, art. 29 lid 2) verplicht ertoe vooraf in het arbeidsreglement vast te leggen welke gegevens van de werknemer worden verzameld en verwerkt. (De plicht om "bij indiensttreding" schriftelijk te informeren in art. 43 lid 6 van de arbeidsveiligheidswet betreft audio- en videoapparatuur.)',
      },
      fonte: FONTE_AZOP_GPS,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: 'Autorisation préalable d’une autorité avant l’installation',
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva dell'AZOP; il titolare valuta da sé base giuridica e DPIA.",
        en: 'No prior authorisation from the AZOP is required; the controller assesses the legal basis and the DPIA on its own.',
        de: 'Eine vorherige Genehmigung der AZOP ist nicht erforderlich; der Verantwortliche bewertet Rechtsgrundlage und DSFA selbst.',
        fr: 'Aucune autorisation préalable de l’AZOP n’est requise ; le responsable du traitement évalue lui-même la base juridique et l’AIPD.',
        es: 'No se necesita una autorización previa de la AZOP; el responsable evalúa por sí mismo la base jurídica y la EIPD.',
        nl: 'Er is geen voorafgaande toestemming van de AZOP nodig; de verwerkingsverantwoordelijke beoordeelt zelf de rechtsgrond en de DPIA.',
      },
      fonte: FONTE_AZOP_GPS,
    },
    {
      voce: {
        it: 'Solo se necessario per la natura del lavoro; dati usati solo per le finalità delle regole interne; conservazione limitata (AZOP)',
        en: 'Only if necessary for the nature of the work; data used only for the purposes set in the internal rules; limited retention (AZOP)',
        de: 'Nur wenn es die Art der Arbeit erfordert; Daten nur für die in den internen Regeln festgelegten Zwecke; begrenzte Speicherung (AZOP)',
        fr: 'Seulement si la nature du travail l’exige ; données utilisées uniquement pour les finalités fixées par les règles internes ; conservation limitée (AZOP)',
        es: 'Solo si lo exige la naturaleza del trabajo; datos usados únicamente para las finalidades fijadas en las normas internas; conservación limitada (AZOP)',
        nl: 'Alleen als de aard van het werk dit vereist; gegevens alleen gebruikt voor de doeleinden uit de interne regels; beperkte bewaring (AZOP)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per l'AZOP il datore può installare sistemi di controllo dei veicoli aziendali senza il consenso del dipendente solo quando è necessario per la natura professionale del lavoro o per misure di precauzione (per esempio trasporto di merci e persone, servizi postali). I dati possono essere trattati solo per lo scopo fissato nelle regole interne, in particolare se il dipendente può usare l'auto anche a fini privati, e conservati solo per il tempo necessario (limitazione della conservazione, art. 5 GDPR).",
        en: 'According to the AZOP, the employer may install monitoring systems on company vehicles without the employee\'s consent only when this is necessary because of the professional nature of the job or as a precaution (for example transport of goods and passengers, postal services). The data may be processed only for the purpose set in the internal rules, in particular if the employee may also use the car privately, and kept only as long as necessary (storage limitation, art. 5 GDPR).',
        de: 'Nach der AZOP darf der Arbeitgeber Kontrollsysteme in Firmenfahrzeugen ohne Zustimmung des Beschäftigten nur installieren, wenn dies wegen der beruflichen Art der Tätigkeit oder als Vorsichtsmaßnahme erforderlich ist (zum Beispiel Güter- und Personenbeförderung, Postdienste). Die Daten dürfen nur für den in den internen Regeln festgelegten Zweck verarbeitet werden, insbesondere wenn der Beschäftigte das Fahrzeug auch privat nutzen darf, und nur so lange gespeichert werden, wie es erforderlich ist (Speicherbegrenzung, Art. 5 DSGVO).',
        fr: 'Selon l’AZOP, l’employeur ne peut installer des systèmes de contrôle sur les véhicules de l’entreprise sans le consentement du salarié que lorsque c’est nécessaire en raison de la nature professionnelle du travail ou par mesure de précaution (par exemple transport de marchandises et de personnes, services postaux). Les données ne peuvent être traitées que pour la finalité fixée par les règles internes, en particulier si le salarié peut aussi utiliser le véhicule à titre privé, et ne sont conservées que le temps nécessaire (limitation de la conservation, art. 5 RGPD).',
        es: 'Según la AZOP, el empresario solo puede instalar sistemas de control en los vehículos de la empresa sin el consentimiento del empleado cuando sea necesario por la naturaleza profesional del trabajo o como medida de precaución (por ejemplo transporte de mercancías y personas, servicios postales). Los datos solo pueden tratarse para la finalidad fijada en las normas internas, en particular si el empleado puede usar el coche también con fines privados, y conservarse solo el tiempo necesario (limitación del plazo de conservación, art. 5 RGPD).',
        nl: 'Volgens de AZOP mag de werkgever controlesystemen in bedrijfsvoertuigen alleen zonder toestemming van de werknemer installeren wanneer dit nodig is vanwege de professionele aard van het werk of als voorzorgsmaatregel (bijvoorbeeld vervoer van goederen en personen, postdiensten). De gegevens mogen alleen worden verwerkt voor het doel dat in de interne regels is vastgelegd, in het bijzonder als de werknemer de auto ook privé mag gebruiken, en slechts zo lang worden bewaard als nodig is (opslagbeperking, art. 5 AVG).',
      },
      fonte: FONTE_AZOP_GPS,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per i sistemi di tracciamento dei dipendenti (lista AZOP)",
        en: 'Impact assessment (DPIA) for employee tracking systems (AZOP list)',
        de: 'Datenschutz-Folgenabschätzung (DSFA) für Systeme zur Überwachung von Arbeitnehmern (AZOP-Liste)',
        fr: 'Analyse d’impact (AIPD) pour les systèmes de suivi des salariés (liste AZOP)',
        es: 'Evaluación de impacto (EIPD) para los sistemas de seguimiento de los empleados (lista AZOP)',
        nl: 'Effectbeoordeling (DPIA) voor systemen voor het volgen van werknemers (AZOP-lijst)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista AZOP include il trattamento dei dati dei dipendenti tramite app o sistemi di tracciamento (del lavoro, dei movimenti, della comunicazione) tra quelli che richiedono una valutazione d'impatto.",
        en: 'The AZOP list includes the processing of employee data through apps or tracking systems (of work, of movements, of communication) among those that require an impact assessment.',
        de: 'Die AZOP-Liste führt die Verarbeitung von Arbeitnehmerdaten über Apps oder Ortungssysteme (der Arbeit, der Bewegungen, der Kommunikation) unter denjenigen auf, die eine Folgenabschätzung erfordern.',
        fr: 'La liste AZOP inclut le traitement des données des salariés au moyen d’applications ou de systèmes de suivi (du travail, des mouvements, de la communication) parmi ceux qui requièrent une analyse d’impact.',
        es: 'La lista AZOP incluye el tratamiento de los datos de los empleados mediante aplicaciones o sistemas de seguimiento (del trabajo, de los movimientos, de la comunicación) entre los que requieren una evaluación de impacto.',
        nl: 'De AZOP-lijst rekent de verwerking van werknemersgegevens via apps of volgsystemen (van het werk, van de bewegingen, van de communicatie) tot de verwerkingen die een effectbeoordeling vereisen.',
      },
      fonte: FONTE_AZOP_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: "Se esiste un consiglio dei lavoratori, consultalo prima di introdurre il sistema (Zakon o radu art. 150); se il sistema segue tutti i movimenti per l'intero orario, per prudenza ottieni il suo consenso (ZZR art. 43).",
        en: 'If a works council exists, consult it before introducing the system (Zakon o radu art. 150); if the system follows all movements for the entire working time, obtain its consent as a precaution (ZZR art. 43).',
        de: 'Wenn ein Betriebsrat besteht, hören Sie ihn vor Einführung des Systems an (Zakon o radu Art. 150); wenn das System alle Bewegungen während der gesamten Arbeitszeit verfolgt, holen Sie vorsorglich seine Zustimmung ein (ZZR Art. 43).',
        fr: 'S’il existe un conseil des travailleurs, consultez-le avant d’introduire le système (Zakon o radu art. 150) ; si le système suit tous les mouvements pendant toute la durée du travail, obtenez par précaution son consentement (ZZR art. 43).',
        es: 'Si existe un consejo de trabajadores, consúltalo antes de introducir el sistema (Zakon o radu art. 150); si el sistema sigue todos los movimientos durante toda la jornada, obtén por prudencia su consentimiento (ZZR art. 43).',
        nl: 'Als er een ondernemingsraad is, raadpleeg deze voordat u het systeem invoert (Zakon o radu art. 150); als het systeem alle bewegingen gedurende de hele werktijd volgt, verkrijg voor de zekerheid diens toestemming (ZZR art. 43).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Disciplina il GPS con regole interne scritte e informa per iscritto i lavoratori.',
        en: 'Regulate the GPS with written internal rules and inform the workers in writing.',
        de: 'Regeln Sie das GPS mit schriftlichen internen Regeln und informieren Sie die Arbeitnehmer schriftlich.',
        fr: 'Encadrez le GPS par des règles internes écrites et informez les travailleurs par écrit.',
        es: 'Regula el GPS con normas internas escritas e informa a los trabajadores por escrito.',
        nl: 'Regel de GPS met schriftelijke interne regels en informeer de werknemers schriftelijk.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Individua una base giuridica valida (art. 6 GDPR) e documenta perché il sistema è necessario per la natura del lavoro.',
        en: 'Identify a valid legal basis (art. 6 GDPR) and document why the system is necessary for the nature of the work.',
        de: 'Ermitteln Sie eine gültige Rechtsgrundlage (Art. 6 DSGVO) und dokumentieren Sie, warum das System für die Art der Arbeit erforderlich ist.',
        fr: 'Déterminez une base juridique valable (art. 6 RGPD) et documentez pourquoi le système est nécessaire à la nature du travail.',
        es: 'Identifica una base jurídica válida (art. 6 RGPD) y documenta por qué el sistema es necesario para la naturaleza del trabajo.',
        nl: 'Bepaal een geldige rechtsgrond (art. 6 AVG) en documenteer waarom het systeem nodig is voor de aard van het werk.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il sistema di tracciamento.",
        en: 'Carry out the impact assessment (DPIA) for the tracking system.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) für das Ortungssystem durch.',
        fr: 'Réalisez l’analyse d’impact (AIPD) pour le système de suivi.',
        es: 'Realiza la evaluación de impacto (EIPD) para el sistema de seguimiento.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor het volgsysteem.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema in modo proporzionato: dati usati solo per le finalità delle regole interne, conservazione limitata al necessario.',
        en: 'Configure the system in a proportionate way: data used only for the purposes in the internal rules, retention limited to what is necessary.',
        de: 'Konfigurieren Sie das System verhältnismäßig: Daten nur für die Zwecke der internen Regeln verwenden, Speicherung auf das Erforderliche begrenzen.',
        fr: 'Configurez le système de manière proportionnée : données utilisées uniquement pour les finalités des règles internes, conservation limitée au nécessaire.',
        es: 'Configura el sistema de forma proporcionada: datos usados solo para las finalidades de las normas internas, conservación limitada a lo necesario.',
        nl: 'Configureer het systeem op evenredige wijze: gegevens alleen gebruiken voor de doeleinden uit de interne regels, bewaring beperkt tot wat nodig is.',
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
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'AZOP, reclami',
      portale: FONTE_AZOP_RECLAMO.url,
      urlFonte: FONTE_AZOP_RECLAMO.url,
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
      nl: 'tot 20 miljoen euro of 4% van de omzet (AVG)',
    },
    casoCitato: {
      it: "Non risulta una multa dell'AZOP specifica pubblicata per il GPS sui dipendenti. L'art. 43 della legge sulla sicurezza sul lavoro (consenso del consiglio dei lavoratori per i dispositivi di sorveglianza che seguono tutti i movimenti per l'intero orario) non è detto espressamente applicabile al GPS; la legge sul lavoro (art. 150) impone comunque di consultare il consiglio dei lavoratori, se esiste, sull'introduzione di nuove tecnologie. Il rischio sanzionatorio resta quello generale del GDPR (art. 83).",
      en: 'There is no specific and published AZOP fine for GPS on employees. Art. 43 of the occupational safety law (works council consent for surveillance devices that follow all movements for the entire working time) is not expressly stated to apply to GPS; the Labour Act (art. 150) does require consulting the works council, where one exists, on the introduction of new technology. The penalty risk remains the general one under the GDPR (art. 83).',
      de: 'Eine spezifische und veröffentlichte Geldbuße der AZOP für GPS bei Arbeitnehmern ist nicht bekannt. Art. 43 des Arbeitsschutzgesetzes (Zustimmung des Betriebsrats für Überwachungsgeräte, die alle Bewegungen während der gesamten Arbeitszeit verfolgen) gilt nicht ausdrücklich auch für GPS; das Arbeitsgesetz (Art. 150) verlangt jedoch, einen bestehenden Betriebsrat vor der Einführung neuer Technologien anzuhören. Das Sanktionsrisiko bleibt das allgemeine der DSGVO (Art. 83).',
      fr: 'Aucune amende spécifique et publiée de l’AZOP pour le GPS sur les salariés n’est connue. L’art. 43 de la loi sur la sécurité au travail (consentement du conseil des travailleurs pour les dispositifs de surveillance qui suivent tous les mouvements pendant toute la durée du travail) n’est pas expressément déclaré applicable au GPS ; le code du travail (art. 150) impose en revanche de consulter le conseil des travailleurs, s’il existe, sur l’introduction de nouvelles technologies. Le risque de sanction reste celui, général, du RGPD (art. 83).',
      es: 'No consta una multa específica y publicada de la AZOP por el GPS sobre los empleados. El art. 43 de la ley de seguridad en el trabajo (consentimiento del consejo de trabajadores para los dispositivos de vigilancia que siguen todos los movimientos durante toda la jornada) no se declara expresamente aplicable al GPS; la ley laboral (art. 150) sí obliga a consultar al consejo de trabajadores, si existe, sobre la introducción de nuevas tecnologías. El riesgo sancionador sigue siendo el general del RGPD (art. 83).',
      nl: 'Er is geen specifieke en gepubliceerde boete van de AZOP voor GPS bij werknemers bekend. Art. 43 van de arbeidsveiligheidswet (toestemming van de ondernemingsraad voor toezichtapparaten die alle bewegingen gedurende de hele werktijd volgen) is niet uitdrukkelijk op GPS van toepassing verklaard; de arbeidswet (art. 150) verplicht wel de ondernemingsraad, indien aanwezig, te raadplegen over de invoering van nieuwe technologie. Het sanctierisico blijft het algemene van de AVG (art. 83).',
    },
    urlFonte: FONTE_AZOP_GPS.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_ZZR_43,
    FONTE_ZOR,
    FONTE_AZOP_GPS,
    FONTE_AZOP_DPIA,
    FONTE_AZOP_RECLAMO,
    FONTE_AZOP_HOME,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
