/**
 * Auto-valutazione "Sei conforme sui dati dei dipendenti?".
 *
 * 9 domande, scala Sì / In parte / No (2 / 1 / 0 punti, max 18). Tutto client-side:
 * non si raccoglie nessun dato (la risorsa è essa stessa un esempio di minimizzazione).
 * Contenuti localizzati per le 11 lingue del sito (non tradotti meccanicamente: la
 * sostanza GDPR è universale, qui cambia la lingua). I riferimenti normativi per-Paese
 * vivono nelle risorse collegate (mappa UE, generatore informativa).
 */

export type AvLocale =
  | 'it' | 'en' | 'de' | 'fr' | 'es' | 'nl' | 'pt' | 'da' | 'sv' | 'nb' | 'ru';

export type AvRisposta = 'si' | 'parziale' | 'no';

export interface AvDomanda {
  id: string;
  testo: string;
  /** Mostrato quando la risposta non è "sì". */
  feedback: string;
}

export interface AvFascia {
  /** Punteggio minimo (incluso) per rientrare in questa fascia. */
  min: number;
  titolo: string;
  testo: string;
}

export interface AvContenuto {
  heading: string;
  intro: string;
  opt: { si: string; parziale: string; no: string };
  vediRisultato: string;
  ricomincia: string;
  /** "Punteggio" — l'etichetta; il valore {n}/{max} lo compone la UI. */
  punteggio: string;
  areeTitolo: string;
  tuttoOk: string;
  privacyNote: string;
  domande: AvDomanda[];
  /** Ordinate per soglia crescente (rischio, medio, buono). */
  fasce: AvFascia[];
  risorseTitolo: string;
  risorse: { mappa: string; generatore: string; conservazione: string; blog: string };
  faq: { title: string; items: { q: string; a: string }[] };
}

export const PUNTI: Record<AvRisposta, number> = { si: 2, parziale: 1, no: 0 };

/** Punteggio totale dalle risposte (chiavi = id domanda). */
export function calcolaPunteggio(risposte: Record<string, AvRisposta>): number {
  return Object.values(risposte).reduce((s, r) => s + (PUNTI[r] ?? 0), 0);
}

/** Punteggio massimo possibile per un set di domande. */
export function punteggioMax(domande: AvDomanda[]): number {
  return domande.length * 2;
}

/** Fascia di appartenenza dato il punteggio (la più alta con min <= punteggio). */
export function fasciaPer(punteggio: number, fasce: AvFascia[]): AvFascia {
  const ordinate = [...fasce].sort((a, b) => a.min - b.min);
  let scelta = ordinate[0];
  for (const f of ordinate) if (punteggio >= f.min) scelta = f;
  return scelta;
}

/** Domande con risposta diversa da "sì" (aree da rivedere), nell'ordine originale. */
export function areeDaRivedere(
  domande: AvDomanda[],
  risposte: Record<string, AvRisposta>,
): AvDomanda[] {
  return domande.filter((d) => risposte[d.id] && risposte[d.id] !== 'si');
}

const CONTENUTI: Record<AvLocale, AvContenuto> = {
  it: {
    heading: 'Sei conforme sui dati dei tuoi dipendenti?',
    intro: 'Nove domande veloci per capire a che punto sei con la protezione dei dati del personale: presenze, posizione, foto di cantiere. Rispondi con sincerità — nessun dato esce dal tuo browser, questa pagina non registra niente. Alla fine hai un punteggio e le aree su cui intervenire.',
    opt: { si: 'Sì', parziale: 'In parte', no: 'No' },
    vediRisultato: 'Vedi il risultato',
    ricomincia: 'Ricomincia',
    punteggio: 'Punteggio',
    areeTitolo: 'Aree da rivedere',
    tuttoOk: 'Hai risposto "sì" a tutto: ottima base. Continua a tenere allineato ciò che dichiari con ciò che fai davvero.',
    privacyNote: 'Gira tutto nel tuo browser: nessuna risposta viene inviata o salvata da qualche parte. È lo stesso principio di minimizzazione che ti chiediamo nelle domande.',
    domande: [
      { id: 'finalita', testo: 'Hai messo per iscritto una finalità precisa per cui raccogli i dati dei dipendenti (presenze, posizione, foto)?', feedback: 'Scrivi nero su bianco perché raccogli ogni dato. Senza una finalità chiara e specifica non puoi dimostrare che il trattamento è legittimo, ed è il primo punto che un controllo verifica.' },
      { id: 'minimizzazione', testo: 'Raccogli solo i dati strettamente necessari a quella finalità (es. la posizione solo alla timbratura, non in continuo)?', feedback: 'Tieni solo ciò che serve davvero. Tracciare la posizione tutto il giorno quando ti basta l\'orario di entrata e uscita è il classico eccesso che fa scattare le sanzioni.' },
      { id: 'base-giuridica', testo: 'Hai individuato una base giuridica diversa dal consenso (es. obbligo contrattuale o legittimo interesse)?', feedback: 'Nel rapporto di lavoro il consenso quasi mai regge, perché il dipendente non è libero di dire di no. Appoggiati al contratto, a un obbligo di legge o al legittimo interesse, e mettilo per iscritto.' },
      { id: 'informativa', testo: 'Hai consegnato ai dipendenti un\'informativa che spiega cosa raccogli, perché e per quanto tempo (art. 13 GDPR)?', feedback: 'I lavoratori hanno diritto di sapere cosa tratti e perché. Se non hai un\'informativa, partila dal generatore qui tra le risorse e consegnala prima di attivare il sistema.' },
      { id: 'conservazione', testo: 'Hai stabilito per quanto tempo conservi ogni tipo di dato e li cancelli alla scadenza?', feedback: 'I dati non si tengono "per sempre, non si sa mai". Fissa una durata per ciascun tipo e cancella alla scadenza: il generatore di politica di conservazione qui accanto ti dà le durate indicative.' },
      { id: 'tracciamento', testo: 'Eviti di rilevare la posizione fuori dall\'orario di lavoro o durante le pause?', feedback: 'La geolocalizzazione si ferma quando finisce il lavoro. Seguire un dipendente nel tempo libero o in pausa è uno degli abusi più gravi e più facili da contestare.' },
      { id: 'rappresentanza', testo: 'Dove esiste una rappresentanza dei lavoratori, l\'hai coinvolta prima di attivare il sistema?', feedback: 'Un sistema che può controllare l\'attività va concertato prima, non dopo. Dove c\'è RSU, sindacato o consiglio aziendale, vanno coinvolti: in molti Paesi è un obbligo, non una cortesia.' },
      { id: 'riutilizzo', testo: 'Eviti di usare i dati raccolti per scopi diversi da quello dichiarato (es. valutazioni o provvedimenti non previsti)?', feedback: 'Il dato raccolto per organizzare le squadre non può diventare la prova per un licenziamento a sorpresa. Usare i dati per finalità nuove e non dichiarate è una violazione netta.' },
      { id: 'diritti', testo: 'Sapresti rispondere se un dipendente chiede di accedere, correggere o cancellare i suoi dati?', feedback: 'I lavoratori hanno diritti precisi sui propri dati. Prepara una procedura semplice per rispondere nei tempi: arrivare impreparati a una richiesta è già un campanello per il Garante.' },
    ],
    fasce: [
      { min: 0, titolo: 'A rischio', testo: 'Ci sono lacune importanti da chiudere prima che diventino un problema. Parti dalle aree qui sotto: anche solo informativa, base giuridica e durate di conservazione ti tolgono dai guai più grossi.' },
      { min: 8, titolo: 'Da migliorare', testo: 'Una base c\'è, ma resta scoperto qualcosa che in un controllo conta. Sistema le aree segnalate qui sotto e sarai su un terreno solido.' },
      { min: 15, titolo: 'Buona conformità', testo: 'Ci sei quasi del tutto. Tieni allineato nel tempo ciò che dichiari con ciò che fai davvero, e rivedi i pochi punti qui sotto.' },
    ],
    risorseTitolo: 'Strumenti per chiudere le lacune',
    risorse: { mappa: 'Mappa: regole Paese per Paese in UE', generatore: 'Genera l\'informativa privacy (art. 13)', conservazione: 'Genera la politica di conservazione dei dati', blog: 'Approfondimenti sul blog' },
    faq: { title: 'Domande frequenti', items: [
      { q: 'Questo test ha valore legale?', a: 'No: è uno strumento di autodiagnosi per capire dove sei messo, non una certificazione. Ti aiuta a vedere le lacune e a sapere su cosa lavorare. Per una verifica formale serve un professionista.' },
      { q: 'Le mie risposte vengono salvate?', a: 'No. Tutto gira nel tuo browser e non viene inviato né registrato da nessuna parte. È lo stesso principio di minimizzazione dei dati che ti chiediamo nelle domande.' },
      { q: 'Vale solo per chi usa il GPS?', a: 'No. Le domande coprono tutti i dati del personale — presenze, foto, comunicazioni, valutazioni — non solo la posizione. Vanno bene per qualunque azienda con dipendenti.' },
    ] },
  },
  en: {
    heading: 'Are you compliant with your employees\' data?',
    intro: 'Nine quick questions to see where you stand on protecting staff data: attendance, location, site photos. Answer honestly — nothing leaves your browser, this page records nothing. At the end you get a score and the areas to work on.',
    opt: { si: 'Yes', parziale: 'Partly', no: 'No' },
    vediRisultato: 'See the result',
    ricomincia: 'Start over',
    punteggio: 'Score',
    areeTitolo: 'Areas to review',
    tuttoOk: 'You answered "yes" to everything: a great baseline. Keep what you declare aligned with what you actually do.',
    privacyNote: 'Everything runs in your browser: no answer is sent or stored anywhere. It\'s the same minimisation principle we ask about in the questions.',
    domande: [
      { id: 'finalita', testo: 'Have you written down a specific purpose for collecting employee data (attendance, location, photos)?', feedback: 'Put in writing why you collect each piece of data. Without a clear, specific purpose you can\'t show the processing is lawful, and it\'s the first thing an audit checks.' },
      { id: 'minimizzazione', testo: 'Do you collect only the data strictly needed for that purpose (e.g. location only at clock-in, not continuously)?', feedback: 'Keep only what you genuinely need. Tracking location all day when clock-in and clock-out times are enough is the classic excess that triggers fines.' },
      { id: 'base-giuridica', testo: 'Have you identified a legal basis other than consent (e.g. contractual obligation or legitimate interest)?', feedback: 'In an employment relationship consent almost never holds, because the worker isn\'t free to say no. Rely on the contract, a legal obligation or legitimate interest, and put it in writing.' },
      { id: 'informativa', testo: 'Have you given employees a privacy notice explaining what you collect, why and for how long (Art. 13 GDPR)?', feedback: 'Workers have the right to know what you process and why. If you don\'t have a notice, start from the generator here in the resources and hand it over before switching the system on.' },
      { id: 'conservazione', testo: 'Have you set how long you keep each type of data and do you delete it when that period ends?', feedback: 'Data isn\'t kept "forever, just in case". Set a period for each type and delete it on expiry: the retention-policy generator next door gives you indicative durations.' },
      { id: 'tracciamento', testo: 'Do you avoid collecting location outside working hours or during breaks?', feedback: 'Geolocation stops when work stops. Following an employee in their free time or on a break is one of the most serious and most easily challenged abuses.' },
      { id: 'rappresentanza', testo: 'Where worker representation exists, did you involve it before activating the system?', feedback: 'A system that can monitor activity must be agreed beforehand, not after. Where there is a works council or union, involve them: in many countries it\'s an obligation, not a courtesy.' },
      { id: 'riutilizzo', testo: 'Do you avoid using the collected data for purposes other than the stated one (e.g. unplanned assessments or measures)?', feedback: 'Data collected to organise teams can\'t become the evidence for a surprise dismissal. Using data for new, undeclared purposes is a clear breach.' },
      { id: 'diritti', testo: 'Would you know how to respond if an employee asks to access, correct or delete their data?', feedback: 'Workers have specific rights over their data. Prepare a simple procedure to respond in time: being caught unprepared by a request is already a red flag for the regulator.' },
    ],
    fasce: [
      { min: 0, titolo: 'At risk', testo: 'There are significant gaps to close before they become a problem. Start from the areas below: even just the notice, the legal basis and retention periods get you out of the biggest trouble.' },
      { min: 8, titolo: 'Needs work', testo: 'You have a base, but something that matters in an audit is still exposed. Fix the flagged areas below and you\'ll be on solid ground.' },
      { min: 15, titolo: 'Good compliance', testo: 'You\'re almost all the way there. Keep what you declare aligned with what you actually do over time, and review the few points below.' },
    ],
    risorseTitolo: 'Tools to close the gaps',
    risorse: { mappa: 'Map: country-by-country rules in the EU', generatore: 'Generate the privacy notice (Art. 13)', conservazione: 'Generate the data retention policy', blog: 'More on the blog' },
    faq: { title: 'Frequently asked questions', items: [
      { q: 'Does this test carry legal weight?', a: 'No: it\'s a self-diagnosis tool to see where you stand, not a certification. It helps you spot gaps and know what to work on. A formal review needs a professional.' },
      { q: 'Are my answers saved?', a: 'No. Everything runs in your browser and is never sent or stored anywhere. It\'s the same data-minimisation principle we ask about in the questions.' },
      { q: 'Is it only for those using GPS?', a: 'No. The questions cover all staff data — attendance, photos, communications, assessments — not just location. They suit any company with employees.' },
    ] },
  },
  de: {
    heading: 'Sind Sie bei den Daten Ihrer Mitarbeitenden konform?',
    intro: 'Neun kurze Fragen, um zu sehen, wo Sie beim Schutz der Personaldaten stehen: Anwesenheit, Standort, Baustellenfotos. Antworten Sie ehrlich — nichts verlässt Ihren Browser, diese Seite speichert nichts. Am Ende erhalten Sie eine Punktzahl und die Bereiche, an denen Sie arbeiten sollten.',
    opt: { si: 'Ja', parziale: 'Teilweise', no: 'Nein' },
    vediRisultato: 'Ergebnis ansehen',
    ricomincia: 'Neu beginnen',
    punteggio: 'Punktzahl',
    areeTitolo: 'Zu überprüfende Bereiche',
    tuttoOk: 'Sie haben überall mit "Ja" geantwortet: eine sehr gute Grundlage. Halten Sie das, was Sie erklären, dauerhaft mit dem in Einklang, was Sie tatsächlich tun.',
    privacyNote: 'Alles läuft in Ihrem Browser: Keine Antwort wird gesendet oder irgendwo gespeichert. Es ist dasselbe Minimierungsprinzip, nach dem wir in den Fragen fragen.',
    domande: [
      { id: 'finalita', testo: 'Haben Sie einen konkreten Zweck schriftlich festgehalten, für den Sie Mitarbeiterdaten erheben (Anwesenheit, Standort, Fotos)?', feedback: 'Halten Sie schriftlich fest, warum Sie jedes Datum erheben. Ohne einen klaren, konkreten Zweck können Sie die Rechtmäßigkeit der Verarbeitung nicht nachweisen — das prüft eine Kontrolle zuerst.' },
      { id: 'minimizzazione', testo: 'Erheben Sie nur die für diesen Zweck unbedingt nötigen Daten (z. B. den Standort nur beim Einstempeln, nicht laufend)?', feedback: 'Behalten Sie nur, was Sie wirklich brauchen. Den Standort den ganzen Tag zu verfolgen, wenn die Ein- und Ausstempelzeit genügt, ist das klassische Übermaß, das Bußgelder auslöst.' },
      { id: 'base-giuridica', testo: 'Haben Sie eine Rechtsgrundlage außer der Einwilligung bestimmt (z. B. vertragliche Pflicht oder berechtigtes Interesse)?', feedback: 'Im Arbeitsverhältnis trägt die Einwilligung fast nie, weil die beschäftigte Person nicht frei Nein sagen kann. Stützen Sie sich auf den Vertrag, eine gesetzliche Pflicht oder das berechtigte Interesse und halten Sie es schriftlich fest.' },
      { id: 'informativa', testo: 'Haben Sie den Mitarbeitenden eine Datenschutzinformation ausgehändigt, die erklärt, was Sie erheben, warum und wie lange (Art. 13 DSGVO)?', feedback: 'Beschäftigte haben das Recht zu wissen, was Sie verarbeiten und warum. Wenn Sie keine Information haben, beginnen Sie mit dem Generator hier in den Ressourcen und händigen Sie sie aus, bevor Sie das System aktivieren.' },
      { id: 'conservazione', testo: 'Haben Sie festgelegt, wie lange Sie jede Datenart aufbewahren, und löschen Sie sie nach Ablauf?', feedback: 'Daten bewahrt man nicht "für immer, man weiß ja nie" auf. Legen Sie für jede Art eine Dauer fest und löschen Sie nach Ablauf: Der Generator für die Aufbewahrungsrichtlinie nebenan liefert Ihnen Richtwerte.' },
      { id: 'tracciamento', testo: 'Vermeiden Sie es, den Standort außerhalb der Arbeitszeit oder in Pausen zu erfassen?', feedback: 'Die Standortbestimmung endet mit der Arbeit. Eine beschäftigte Person in der Freizeit oder Pause zu verfolgen ist einer der schwersten und am leichtesten angreifbaren Missbräuche.' },
      { id: 'rappresentanza', testo: 'Haben Sie, wo eine Arbeitnehmervertretung besteht, diese vor der Aktivierung des Systems einbezogen?', feedback: 'Ein System, das Tätigkeit kontrollieren kann, ist vorher abzustimmen, nicht danach. Wo ein Betriebsrat oder eine Gewerkschaft besteht, sind sie zu beteiligen: in vielen Ländern eine Pflicht, keine Höflichkeit.' },
      { id: 'riutilizzo', testo: 'Vermeiden Sie es, die erhobenen Daten für andere als die genannten Zwecke zu nutzen (z. B. nicht vorgesehene Bewertungen oder Maßnahmen)?', feedback: 'Daten, die zur Einsatzplanung erhoben wurden, dürfen nicht zum Beweismittel für eine überraschende Kündigung werden. Daten für neue, nicht erklärte Zwecke zu nutzen ist ein klarer Verstoß.' },
      { id: 'diritti', testo: 'Wüssten Sie, wie Sie reagieren, wenn eine beschäftigte Person Auskunft, Berichtigung oder Löschung ihrer Daten verlangt?', feedback: 'Beschäftigte haben konkrete Rechte an ihren Daten. Halten Sie ein einfaches Verfahren bereit, um fristgerecht zu antworten: unvorbereitet auf eine Anfrage zu treffen ist bereits ein Warnsignal für die Aufsichtsbehörde.' },
    ],
    fasce: [
      { min: 0, titolo: 'Gefährdet', testo: 'Es gibt erhebliche Lücken, die zu schließen sind, bevor sie zum Problem werden. Beginnen Sie mit den Bereichen unten: schon Information, Rechtsgrundlage und Aufbewahrungsfristen bewahren Sie vor dem größten Ärger.' },
      { min: 8, titolo: 'Ausbaufähig', testo: 'Eine Grundlage ist da, doch etwas, das in einer Kontrolle zählt, liegt noch offen. Beheben Sie die markierten Bereiche unten, dann stehen Sie auf festem Boden.' },
      { min: 15, titolo: 'Gute Konformität', testo: 'Sie sind fast vollständig dort. Halten Sie das Erklärte dauerhaft mit dem tatsächlichen Tun in Einklang und überprüfen Sie die wenigen Punkte unten.' },
    ],
    risorseTitolo: 'Werkzeuge, um die Lücken zu schließen',
    risorse: { mappa: 'Karte: Regeln Land für Land in der EU', generatore: 'Datenschutzinformation erstellen (Art. 13)', conservazione: 'Aufbewahrungsrichtlinie erstellen', blog: 'Mehr im Blog' },
    faq: { title: 'Häufige Fragen', items: [
      { q: 'Hat dieser Test rechtliche Bedeutung?', a: 'Nein: Es ist ein Selbsteinschätzungswerkzeug, um zu sehen, wo Sie stehen, keine Zertifizierung. Es hilft, Lücken zu erkennen und zu wissen, woran zu arbeiten ist. Eine formale Prüfung erfordert eine Fachperson.' },
      { q: 'Werden meine Antworten gespeichert?', a: 'Nein. Alles läuft in Ihrem Browser und wird nirgendwo gesendet oder gespeichert. Es ist dasselbe Datenminimierungsprinzip, nach dem wir in den Fragen fragen.' },
      { q: 'Gilt das nur für GPS-Nutzer?', a: 'Nein. Die Fragen decken alle Personaldaten ab — Anwesenheit, Fotos, Kommunikation, Bewertungen — nicht nur den Standort. Sie passen für jedes Unternehmen mit Beschäftigten.' },
    ] },
  },
  fr: {
    heading: 'Êtes-vous conforme sur les données de vos salariés ?',
    intro: 'Neuf questions rapides pour voir où vous en êtes sur la protection des données du personnel : présences, localisation, photos de chantier. Répondez honnêtement — rien ne quitte votre navigateur, cette page n\'enregistre rien. À la fin, vous obtenez un score et les points à travailler.',
    opt: { si: 'Oui', parziale: 'En partie', no: 'Non' },
    vediRisultato: 'Voir le résultat',
    ricomincia: 'Recommencer',
    punteggio: 'Score',
    areeTitolo: 'Points à revoir',
    tuttoOk: 'Vous avez répondu « oui » à tout : une très bonne base. Gardez dans le temps ce que vous déclarez aligné sur ce que vous faites réellement.',
    privacyNote: 'Tout fonctionne dans votre navigateur : aucune réponse n\'est envoyée ni stockée nulle part. C\'est le même principe de minimisation que celui sur lequel portent les questions.',
    domande: [
      { id: 'finalita', testo: 'Avez-vous mis par écrit une finalité précise pour laquelle vous collectez les données des salariés (présences, localisation, photos) ?', feedback: 'Notez noir sur blanc pourquoi vous collectez chaque donnée. Sans finalité claire et précise, vous ne pouvez pas démontrer la licéité du traitement, et c\'est le premier point qu\'un contrôle vérifie.' },
      { id: 'minimizzazione', testo: 'Ne collectez-vous que les données strictement nécessaires à cette finalité (ex. la position uniquement au pointage, pas en continu) ?', feedback: 'Ne gardez que ce qui est vraiment utile. Suivre la position toute la journée alors que les heures d\'entrée et de sortie suffisent est l\'excès classique qui déclenche les sanctions.' },
      { id: 'base-giuridica', testo: 'Avez-vous identifié une base légale autre que le consentement (ex. obligation contractuelle ou intérêt légitime) ?', feedback: 'Dans la relation de travail, le consentement ne tient presque jamais, car le salarié n\'est pas libre de refuser. Appuyez-vous sur le contrat, une obligation légale ou l\'intérêt légitime, et mettez-le par écrit.' },
      { id: 'informativa', testo: 'Avez-vous remis aux salariés une information expliquant ce que vous collectez, pourquoi et pour combien de temps (art. 13 RGPD) ?', feedback: 'Les salariés ont le droit de savoir ce que vous traitez et pourquoi. Si vous n\'avez pas d\'information, partez du générateur ici dans les ressources et remettez-la avant d\'activer le système.' },
      { id: 'conservazione', testo: 'Avez-vous fixé combien de temps vous conservez chaque type de donnée et les supprimez-vous à l\'échéance ?', feedback: 'On ne garde pas les données « pour toujours, au cas où ». Fixez une durée pour chaque type et supprimez à l\'échéance : le générateur de politique de conservation à côté vous donne des durées indicatives.' },
      { id: 'tracciamento', testo: 'Évitez-vous de relever la position en dehors des heures de travail ou pendant les pauses ?', feedback: 'La géolocalisation s\'arrête quand le travail s\'arrête. Suivre un salarié sur son temps libre ou en pause est l\'un des abus les plus graves et les plus faciles à contester.' },
      { id: 'rappresentanza', testo: 'Là où une représentation du personnel existe, l\'avez-vous associée avant d\'activer le système ?', feedback: 'Un système capable de contrôler l\'activité se concerte avant, pas après. Là où il y a un CSE ou un syndicat, ils doivent être associés : dans de nombreux pays c\'est une obligation, pas une politesse.' },
      { id: 'riutilizzo', testo: 'Évitez-vous d\'utiliser les données collectées à des fins autres que celle déclarée (ex. évaluations ou mesures non prévues) ?', feedback: 'Une donnée collectée pour organiser les équipes ne peut pas devenir la preuve d\'un licenciement surprise. Utiliser les données pour des finalités nouvelles et non déclarées est une violation nette.' },
      { id: 'diritti', testo: 'Sauriez-vous répondre si un salarié demande à accéder à ses données, à les corriger ou à les effacer ?', feedback: 'Les salariés ont des droits précis sur leurs données. Préparez une procédure simple pour répondre dans les délais : être pris au dépourvu par une demande est déjà un signal d\'alerte pour l\'autorité.' },
    ],
    fasce: [
      { min: 0, titolo: 'À risque', testo: 'Il y a des lacunes importantes à combler avant qu\'elles ne deviennent un problème. Partez des points ci-dessous : rien que l\'information, la base légale et les durées de conservation vous sortent des plus gros ennuis.' },
      { min: 8, titolo: 'À améliorer', testo: 'Une base existe, mais quelque chose qui compte lors d\'un contrôle reste à découvert. Corrigez les points signalés ci-dessous et vous serez sur un terrain solide.' },
      { min: 15, titolo: 'Bonne conformité', testo: 'Vous y êtes presque entièrement. Gardez dans le temps ce que vous déclarez aligné sur ce que vous faites réellement, et revoyez les quelques points ci-dessous.' },
    ],
    risorseTitolo: 'Outils pour combler les lacunes',
    risorse: { mappa: 'Carte : les règles pays par pays dans l\'UE', generatore: 'Générer l\'information de confidentialité (art. 13)', conservazione: 'Générer la politique de conservation des données', blog: 'Pour aller plus loin sur le blog' },
    faq: { title: 'Questions fréquentes', items: [
      { q: 'Ce test a-t-il une valeur juridique ?', a: 'Non : c\'est un outil d\'autodiagnostic pour voir où vous en êtes, pas une certification. Il aide à repérer les lacunes et à savoir sur quoi travailler. Une vérification formelle nécessite un professionnel.' },
      { q: 'Mes réponses sont-elles enregistrées ?', a: 'Non. Tout fonctionne dans votre navigateur et n\'est ni envoyé ni stocké nulle part. C\'est le même principe de minimisation des données que celui sur lequel portent les questions.' },
      { q: 'Est-ce uniquement pour ceux qui utilisent le GPS ?', a: 'Non. Les questions couvrent toutes les données du personnel — présences, photos, communications, évaluations — pas seulement la position. Elles conviennent à toute entreprise avec des salariés.' },
    ] },
  },
  es: {
    heading: '¿Cumples con los datos de tus empleados?',
    intro: 'Nueve preguntas rápidas para ver cómo estás en la protección de los datos del personal: fichajes, ubicación, fotos de obra. Responde con sinceridad — nada sale de tu navegador, esta página no registra nada. Al final obtienes una puntuación y las áreas en las que trabajar.',
    opt: { si: 'Sí', parziale: 'En parte', no: 'No' },
    vediRisultato: 'Ver el resultado',
    ricomincia: 'Empezar de nuevo',
    punteggio: 'Puntuación',
    areeTitolo: 'Áreas a revisar',
    tuttoOk: 'Has respondido «sí» a todo: una base excelente. Mantén en el tiempo lo que declaras alineado con lo que realmente haces.',
    privacyNote: 'Todo funciona en tu navegador: ninguna respuesta se envía ni se guarda en ningún sitio. Es el mismo principio de minimización por el que preguntamos.',
    domande: [
      { id: 'finalita', testo: '¿Has puesto por escrito una finalidad concreta por la que recoges los datos de los empleados (fichajes, ubicación, fotos)?', feedback: 'Deja por escrito por qué recoges cada dato. Sin una finalidad clara y concreta no puedes demostrar la licitud del tratamiento, y es lo primero que comprueba una inspección.' },
      { id: 'minimizzazione', testo: '¿Recoges solo los datos estrictamente necesarios para esa finalidad (p. ej. la ubicación solo al fichar, no en continuo)?', feedback: 'Quédate solo con lo que de verdad necesitas. Rastrear la ubicación todo el día cuando basta la hora de entrada y salida es el exceso clásico que dispara las sanciones.' },
      { id: 'base-giuridica', testo: '¿Has identificado una base jurídica distinta del consentimiento (p. ej. obligación contractual o interés legítimo)?', feedback: 'En la relación laboral el consentimiento casi nunca se sostiene, porque el trabajador no es libre de negarse. Apóyate en el contrato, una obligación legal o el interés legítimo, y déjalo por escrito.' },
      { id: 'informativa', testo: '¿Has entregado a los empleados una información que explique qué recoges, por qué y durante cuánto tiempo (art. 13 RGPD)?', feedback: 'Los trabajadores tienen derecho a saber qué tratas y por qué. Si no tienes una información, parte del generador aquí en los recursos y entrégala antes de activar el sistema.' },
      { id: 'conservazione', testo: '¿Has establecido cuánto tiempo conservas cada tipo de dato y los eliminas al vencimiento?', feedback: 'Los datos no se guardan «para siempre, por si acaso». Fija un plazo para cada tipo y elimina al vencimiento: el generador de política de conservación de al lado te da plazos indicativos.' },
      { id: 'tracciamento', testo: '¿Evitas registrar la ubicación fuera del horario de trabajo o durante las pausas?', feedback: 'La geolocalización se detiene cuando termina el trabajo. Seguir a un empleado en su tiempo libre o en la pausa es uno de los abusos más graves y más fáciles de impugnar.' },
      { id: 'rappresentanza', testo: 'Donde existe representación de los trabajadores, ¿la has implicado antes de activar el sistema?', feedback: 'Un sistema capaz de controlar la actividad se concierta antes, no después. Donde hay comité de empresa o sindicato, deben implicarse: en muchos países es una obligación, no una cortesía.' },
      { id: 'riutilizzo', testo: '¿Evitas usar los datos recogidos para fines distintos del declarado (p. ej. evaluaciones o medidas no previstas)?', feedback: 'Un dato recogido para organizar los equipos no puede convertirse en la prueba de un despido sorpresa. Usar los datos para finalidades nuevas y no declaradas es una infracción clara.' },
      { id: 'diritti', testo: '¿Sabrías responder si un empleado pide acceder, corregir o eliminar sus datos?', feedback: 'Los trabajadores tienen derechos concretos sobre sus datos. Prepara un procedimiento sencillo para responder en plazo: que una solicitud te pille desprevenido ya es una señal de alarma para la autoridad.' },
    ],
    fasce: [
      { min: 0, titolo: 'En riesgo', testo: 'Hay lagunas importantes que cerrar antes de que se conviertan en un problema. Empieza por las áreas de abajo: solo con la información, la base jurídica y los plazos de conservación te quitas los líos más gordos.' },
      { min: 8, titolo: 'Mejorable', testo: 'Hay una base, pero algo que cuenta en una inspección sigue al descubierto. Corrige las áreas señaladas abajo y estarás sobre terreno sólido.' },
      { min: 15, titolo: 'Buen cumplimiento', testo: 'Ya casi lo tienes del todo. Mantén en el tiempo lo que declaras alineado con lo que de verdad haces, y revisa los pocos puntos de abajo.' },
    ],
    risorseTitolo: 'Herramientas para cerrar las lagunas',
    risorse: { mappa: 'Mapa: las reglas país por país en la UE', generatore: 'Generar la información de privacidad (art. 13)', conservazione: 'Generar la política de conservación de datos', blog: 'Más en el blog' },
    faq: { title: 'Preguntas frecuentes', items: [
      { q: '¿Este test tiene valor legal?', a: 'No: es una herramienta de autodiagnóstico para ver cómo estás, no una certificación. Te ayuda a detectar lagunas y saber en qué trabajar. Una verificación formal necesita un profesional.' },
      { q: '¿Se guardan mis respuestas?', a: 'No. Todo funciona en tu navegador y no se envía ni se almacena en ningún sitio. Es el mismo principio de minimización de datos por el que preguntamos.' },
      { q: '¿Sirve solo para quien usa GPS?', a: 'No. Las preguntas cubren todos los datos del personal — fichajes, fotos, comunicaciones, evaluaciones — no solo la ubicación. Valen para cualquier empresa con empleados.' },
    ] },
  },
  nl: {
    heading: 'Bent u in orde met de gegevens van uw werknemers?',
    intro: 'Negen snelle vragen om te zien waar u staat met de bescherming van personeelsgegevens: aanwezigheid, locatie, werffoto\'s. Antwoord eerlijk — niets verlaat uw browser, deze pagina registreert niets. Aan het eind krijgt u een score en de punten om aan te werken.',
    opt: { si: 'Ja', parziale: 'Deels', no: 'Nee' },
    vediRisultato: 'Bekijk het resultaat',
    ricomincia: 'Opnieuw beginnen',
    punteggio: 'Score',
    areeTitolo: 'Te herziene punten',
    tuttoOk: 'U hebt overal "ja" geantwoord: een uitstekende basis. Houd wat u verklaart op termijn in lijn met wat u werkelijk doet.',
    privacyNote: 'Alles draait in uw browser: geen antwoord wordt verzonden of ergens opgeslagen. Het is hetzelfde minimalisatiebeginsel waar de vragen over gaan.',
    domande: [
      { id: 'finalita', testo: 'Hebt u een concreet doel op papier gezet waarvoor u werknemersgegevens verzamelt (aanwezigheid, locatie, foto\'s)?', feedback: 'Leg zwart op wit vast waarom u elk gegeven verzamelt. Zonder een duidelijk, concreet doel kunt u de rechtmatigheid van de verwerking niet aantonen, en dat is het eerste wat een controle nagaat.' },
      { id: 'minimizzazione', testo: 'Verzamelt u alleen de gegevens die strikt nodig zijn voor dat doel (bijv. de locatie alleen bij het inklokken, niet doorlopend)?', feedback: 'Houd alleen wat u echt nodig hebt. De hele dag de locatie volgen terwijl in- en uitkloktijden volstaan is het klassieke teveel dat boetes oplevert.' },
      { id: 'base-giuridica', testo: 'Hebt u een rechtsgrond anders dan toestemming bepaald (bijv. contractuele verplichting of gerechtvaardigd belang)?', feedback: 'In een arbeidsrelatie houdt toestemming bijna nooit stand, omdat de werknemer niet vrij is om nee te zeggen. Steun op het contract, een wettelijke verplichting of het gerechtvaardigd belang, en leg het schriftelijk vast.' },
      { id: 'informativa', testo: 'Hebt u werknemers een privacyverklaring gegeven die uitlegt wat u verzamelt, waarom en hoe lang (art. 13 AVG)?', feedback: 'Werknemers hebben het recht te weten wat u verwerkt en waarom. Hebt u geen verklaring, begin dan bij de generator hier bij de bronnen en overhandig ze voordat u het systeem inschakelt.' },
      { id: 'conservazione', testo: 'Hebt u vastgelegd hoe lang u elk type gegeven bewaart en verwijdert u ze na afloop?', feedback: 'Gegevens bewaart men niet "voor altijd, je weet maar nooit". Stel voor elk type een termijn vast en verwijder na afloop: de generator voor het bewaarbeleid hiernaast geeft u indicatieve termijnen.' },
      { id: 'tracciamento', testo: 'Vermijdt u het registreren van de locatie buiten werktijd of tijdens pauzes?', feedback: 'De geolocatie stopt wanneer het werk stopt. Een werknemer in zijn vrije tijd of pauze volgen is een van de ernstigste en makkelijkst aanvechtbare misbruiken.' },
      { id: 'rappresentanza', testo: 'Hebt u, waar een werknemersvertegenwoordiging bestaat, deze betrokken vóór het activeren van het systeem?', feedback: 'Een systeem dat activiteit kan controleren wordt vooraf afgestemd, niet achteraf. Waar er een ondernemingsraad of vakbond is, moeten ze worden betrokken: in veel landen een verplichting, geen beleefdheid.' },
      { id: 'riutilizzo', testo: 'Vermijdt u de verzamelde gegevens te gebruiken voor andere dan het verklaarde doel (bijv. niet voorziene beoordelingen of maatregelen)?', feedback: 'Een gegeven dat is verzameld om de teams te organiseren kan niet het bewijs worden voor een verrassend ontslag. Gegevens gebruiken voor nieuwe, niet verklaarde doelen is een duidelijke schending.' },
      { id: 'diritti', testo: 'Zou u weten hoe te reageren als een werknemer vraagt zijn gegevens in te zien, te corrigeren of te wissen?', feedback: 'Werknemers hebben concrete rechten op hun gegevens. Maak een eenvoudige procedure klaar om tijdig te antwoorden: onvoorbereid door een verzoek worden overvallen is al een waarschuwingssignaal voor de toezichthouder.' },
    ],
    fasce: [
      { min: 0, titolo: 'Risicovol', testo: 'Er zijn belangrijke leemtes te dichten voordat ze een probleem worden. Begin bij de punten hieronder: alleen al de verklaring, de rechtsgrond en de bewaartermijnen halen u uit de grootste problemen.' },
      { min: 8, titolo: 'Voor verbetering vatbaar', testo: 'Er is een basis, maar iets dat telt bij een controle ligt nog open. Herstel de gemarkeerde punten hieronder en u staat op vaste grond.' },
      { min: 15, titolo: 'Goede naleving', testo: 'U bent er bijna helemaal. Houd op termijn wat u verklaart in lijn met wat u werkelijk doet, en herzie de paar punten hieronder.' },
    ],
    risorseTitolo: 'Hulpmiddelen om de leemtes te dichten',
    risorse: { mappa: 'Kaart: regels land per land in de EU', generatore: 'Genereer de privacyverklaring (art. 13)', conservazione: 'Genereer het bewaarbeleid', blog: 'Meer op de blog' },
    faq: { title: 'Veelgestelde vragen', items: [
      { q: 'Heeft deze test juridische waarde?', a: 'Nee: het is een zelfdiagnose-instrument om te zien waar u staat, geen certificering. Het helpt leemtes te zien en te weten waaraan te werken. Een formele toetsing vereist een professional.' },
      { q: 'Worden mijn antwoorden opgeslagen?', a: 'Nee. Alles draait in uw browser en wordt nergens verzonden of opgeslagen. Het is hetzelfde data-minimalisatiebeginsel waar de vragen over gaan.' },
      { q: 'Geldt het alleen voor wie gps gebruikt?', a: 'Nee. De vragen dekken alle personeelsgegevens — aanwezigheid, foto\'s, communicatie, beoordelingen — niet alleen de locatie. Ze passen bij elk bedrijf met werknemers.' },
    ] },
  },
  pt: {
    heading: 'Está em conformidade com os dados dos seus colaboradores?',
    intro: 'Nove perguntas rápidas para ver em que ponto está na proteção dos dados do pessoal: presenças, localização, fotos de obra. Responda com sinceridade — nada sai do seu navegador, esta página não regista nada. No fim obtém uma pontuação e as áreas a trabalhar.',
    opt: { si: 'Sim', parziale: 'Em parte', no: 'Não' },
    vediRisultato: 'Ver o resultado',
    ricomincia: 'Recomeçar',
    punteggio: 'Pontuação',
    areeTitolo: 'Áreas a rever',
    tuttoOk: 'Respondeu «sim» a tudo: uma excelente base. Mantenha ao longo do tempo o que declara alinhado com o que faz realmente.',
    privacyNote: 'Tudo funciona no seu navegador: nenhuma resposta é enviada ou guardada em lado nenhum. É o mesmo princípio de minimização sobre o qual as perguntas incidem.',
    domande: [
      { id: 'finalita', testo: 'Pôs por escrito uma finalidade concreta para a qual recolhe os dados dos colaboradores (presenças, localização, fotos)?', feedback: 'Deixe por escrito porque recolhe cada dado. Sem uma finalidade clara e concreta não consegue demonstrar a licitude do tratamento, e é o primeiro ponto que uma fiscalização verifica.' },
      { id: 'minimizzazione', testo: 'Recolhe apenas os dados estritamente necessários a essa finalidade (ex. a localização só na marcação, não em contínuo)?', feedback: 'Fique apenas com o que realmente precisa. Seguir a localização o dia todo quando bastam as horas de entrada e saída é o excesso clássico que desencadeia as coimas.' },
      { id: 'base-giuridica', testo: 'Identificou uma base jurídica diferente do consentimento (ex. obrigação contratual ou interesse legítimo)?', feedback: 'Na relação de trabalho o consentimento quase nunca se sustenta, porque o trabalhador não é livre de recusar. Apoie-se no contrato, numa obrigação legal ou no interesse legítimo, e deixe-o por escrito.' },
      { id: 'informativa', testo: 'Entregou aos colaboradores uma informação que explica o que recolhe, porquê e por quanto tempo (art. 13 RGPD)?', feedback: 'Os trabalhadores têm o direito de saber o que trata e porquê. Se não tem uma informação, parta do gerador aqui nos recursos e entregue-a antes de ativar o sistema.' },
      { id: 'conservazione', testo: 'Estabeleceu quanto tempo conserva cada tipo de dado e elimina-os no fim do prazo?', feedback: 'Os dados não se guardam «para sempre, nunca se sabe». Fixe um prazo para cada tipo e elimine no fim: o gerador de política de conservação ao lado dá-lhe prazos indicativos.' },
      { id: 'tracciamento', testo: 'Evita registar a localização fora do horário de trabalho ou durante as pausas?', feedback: 'A geolocalização para quando o trabalho para. Seguir um colaborador no tempo livre ou na pausa é um dos abusos mais graves e mais fáceis de contestar.' },
      { id: 'rappresentanza', testo: 'Onde existe representação dos trabalhadores, envolveu-a antes de ativar o sistema?', feedback: 'Um sistema capaz de controlar a atividade concerta-se antes, não depois. Onde há comissão de trabalhadores ou sindicato, devem ser envolvidos: em muitos países é uma obrigação, não uma cortesia.' },
      { id: 'riutilizzo', testo: 'Evita usar os dados recolhidos para fins diferentes do declarado (ex. avaliações ou medidas não previstas)?', feedback: 'Um dado recolhido para organizar as equipas não pode tornar-se a prova de um despedimento surpresa. Usar os dados para finalidades novas e não declaradas é uma violação clara.' },
      { id: 'diritti', testo: 'Saberia responder se um colaborador pedisse para aceder, corrigir ou apagar os seus dados?', feedback: 'Os trabalhadores têm direitos concretos sobre os seus dados. Prepare um procedimento simples para responder a tempo: ser apanhado desprevenido por um pedido já é um sinal de alerta para a autoridade.' },
    ],
    fasce: [
      { min: 0, titolo: 'Em risco', testo: 'Há lacunas importantes a fechar antes que se tornem um problema. Comece pelas áreas abaixo: só a informação, a base jurídica e os prazos de conservação tiram-no dos maiores sarilhos.' },
      { min: 8, titolo: 'A melhorar', testo: 'Há uma base, mas algo que conta numa fiscalização continua a descoberto. Corrija as áreas assinaladas abaixo e estará em terreno sólido.' },
      { min: 15, titolo: 'Boa conformidade', testo: 'Está quase totalmente lá. Mantenha ao longo do tempo o que declara alinhado com o que faz realmente, e reveja os poucos pontos abaixo.' },
    ],
    risorseTitolo: 'Ferramentas para fechar as lacunas',
    risorse: { mappa: 'Mapa: as regras país a país na UE', generatore: 'Gerar a informação de privacidade (art. 13)', conservazione: 'Gerar a política de conservação de dados', blog: 'Mais no blog' },
    faq: { title: 'Perguntas frequentes', items: [
      { q: 'Este teste tem valor legal?', a: 'Não: é uma ferramenta de autodiagnóstico para ver em que ponto está, não uma certificação. Ajuda a detetar lacunas e a saber em que trabalhar. Uma verificação formal exige um profissional.' },
      { q: 'As minhas respostas são guardadas?', a: 'Não. Tudo funciona no seu navegador e nunca é enviado ou guardado em lado nenhum. É o mesmo princípio de minimização de dados sobre o qual as perguntas incidem.' },
      { q: 'Serve só para quem usa GPS?', a: 'Não. As perguntas cobrem todos os dados do pessoal — presenças, fotos, comunicações, avaliações — não só a localização. Servem para qualquer empresa com colaboradores.' },
    ] },
  },
  da: {
    heading: 'Er du compliant med dine medarbejderes data?',
    intro: 'Ni hurtige spørgsmål for at se, hvor du står med beskyttelsen af personaledata: fremmøde, position, billeder fra arbejdsstedet. Svar ærligt — intet forlader din browser, denne side gemmer intet. Til sidst får du en score og de områder, du skal arbejde med.',
    opt: { si: 'Ja', parziale: 'Delvist', no: 'Nej' },
    vediRisultato: 'Se resultatet',
    ricomincia: 'Start forfra',
    punteggio: 'Score',
    areeTitolo: 'Områder at gennemgå',
    tuttoOk: 'Du har svaret "ja" til alt: et fremragende grundlag. Hold over tid det, du erklærer, i tråd med det, du faktisk gør.',
    privacyNote: 'Alt kører i din browser: intet svar sendes eller gemmes nogen steder. Det er det samme minimeringsprincip, som spørgsmålene handler om.',
    domande: [
      { id: 'finalita', testo: 'Har du skrevet ned, til hvilket konkret formål du indsamler medarbejderdata (fremmøde, position, billeder)?', feedback: 'Skriv sort på hvidt, hvorfor du indsamler hvert datum. Uden et klart, konkret formål kan du ikke påvise, at behandlingen er lovlig, og det er det første, en kontrol tjekker.' },
      { id: 'minimizzazione', testo: 'Indsamler du kun de data, der er strengt nødvendige for det formål (f.eks. positionen kun ved stempling ind, ikke løbende)?', feedback: 'Behold kun det, du reelt har brug for. At følge positionen hele dagen, når ind- og udstemplingstider er nok, er det klassiske overforbrug, der udløser bøder.' },
      { id: 'base-giuridica', testo: 'Har du fastlagt et andet retsgrundlag end samtykke (f.eks. kontraktlig forpligtelse eller legitim interesse)?', feedback: 'I ansættelsesforholdet holder samtykke næsten aldrig, fordi medarbejderen ikke frit kan sige nej. Støt dig til kontrakten, en lovpligt eller den legitime interesse, og skriv det ned.' },
      { id: 'informativa', testo: 'Har du givet medarbejderne en privatlivsmeddelelse, der forklarer, hvad du indsamler, hvorfor og hvor længe (art. 13 GDPR)?', feedback: 'Medarbejdere har ret til at vide, hvad du behandler og hvorfor. Har du ingen meddelelse, så start fra generatoren her i ressourcerne og udlever den, før du tænder systemet.' },
      { id: 'conservazione', testo: 'Har du fastlagt, hvor længe du opbevarer hver datatype, og sletter du dem ved udløb?', feedback: 'Data opbevares ikke "for evigt, man ved aldrig". Fastsæt en periode for hver type og slet ved udløb: generatoren til opbevaringspolitik ved siden af giver dig vejledende perioder.' },
      { id: 'tracciamento', testo: 'Undgår du at registrere positionen uden for arbejdstiden eller i pauser?', feedback: 'Geolokaliseringen stopper, når arbejdet stopper. At følge en medarbejder i fritiden eller i pausen er et af de groveste og letteste at anfægte misbrug.' },
      { id: 'rappresentanza', testo: 'Hvor der findes en medarbejderrepræsentation, har du så inddraget den, før systemet blev aktiveret?', feedback: 'Et system, der kan kontrollere aktivitet, aftales på forhånd, ikke bagefter. Hvor der er samarbejdsudvalg eller fagforening, skal de inddrages: i mange lande en pligt, ikke en høflighed.' },
      { id: 'riutilizzo', testo: 'Undgår du at bruge de indsamlede data til andre formål end det erklærede (f.eks. ikke planlagte vurderinger eller tiltag)?', feedback: 'Data indsamlet for at organisere holdene må ikke blive beviset for en overraskende afskedigelse. At bruge data til nye, ikke-erklærede formål er en klar overtrædelse.' },
      { id: 'diritti', testo: 'Ville du vide, hvordan du skal svare, hvis en medarbejder beder om at få indsigt i, rette eller slette sine data?', feedback: 'Medarbejdere har konkrete rettigheder over deres data. Forbered en enkel procedure, så du svarer til tiden: at blive taget på sengen af en anmodning er allerede et faresignal for tilsynet.' },
    ],
    fasce: [
      { min: 0, titolo: 'I risiko', testo: 'Der er væsentlige huller at lukke, før de bliver et problem. Start fra områderne nedenfor: alene meddelelsen, retsgrundlaget og opbevaringsperioderne får dig ud af de største problemer.' },
      { min: 8, titolo: 'Kan forbedres', testo: 'Der er et grundlag, men noget, der tæller ved en kontrol, ligger stadig åbent. Ret de markerede områder nedenfor, så står du på fast grund.' },
      { min: 15, titolo: 'God efterlevelse', testo: 'Du er der næsten helt. Hold over tid det, du erklærer, i tråd med det, du faktisk gør, og gennemgå de få punkter nedenfor.' },
    ],
    risorseTitolo: 'Værktøjer til at lukke hullerne',
    risorse: { mappa: 'Kort: regler land for land i EU', generatore: 'Generér privatlivsmeddelelsen (art. 13)', conservazione: 'Generér opbevaringspolitikken', blog: 'Mere på bloggen' },
    faq: { title: 'Ofte stillede spørgsmål', items: [
      { q: 'Har denne test juridisk værdi?', a: 'Nej: det er et selvdiagnoseværktøj til at se, hvor du står, ikke en certificering. Det hjælper dig med at se hullerne og vide, hvad du skal arbejde med. En formel kontrol kræver en fagperson.' },
      { q: 'Gemmes mine svar?', a: 'Nej. Alt kører i din browser og sendes eller gemmes ingen steder. Det er det samme dataminimeringsprincip, som spørgsmålene handler om.' },
      { q: 'Gælder det kun for dem, der bruger GPS?', a: 'Nej. Spørgsmålene dækker alle personaledata — fremmøde, billeder, kommunikation, vurderinger — ikke kun positionen. De passer til enhver virksomhed med ansatte.' },
    ] },
  },
  sv: {
    heading: 'Är du förenlig när det gäller dina anställdas data?',
    intro: 'Nio snabba frågor för att se var du står med skyddet av personaldata: närvaro, position, bilder från arbetsplatsen. Svara ärligt — inget lämnar din webbläsare, den här sidan registrerar inget. Till sist får du ett resultat och de områden du behöver arbeta med.',
    opt: { si: 'Ja', parziale: 'Delvis', no: 'Nej' },
    vediRisultato: 'Se resultatet',
    ricomincia: 'Börja om',
    punteggio: 'Poäng',
    areeTitolo: 'Områden att se över',
    tuttoOk: 'Du svarade "ja" på allt: en utmärkt grund. Håll över tid det du uppger i linje med det du faktiskt gör.',
    privacyNote: 'Allt körs i din webbläsare: inget svar skickas eller lagras någonstans. Det är samma minimeringsprincip som frågorna handlar om.',
    domande: [
      { id: 'finalita', testo: 'Har du skrivit ner ett konkret ändamål som du samlar in personaldata för (närvaro, position, bilder)?', feedback: 'Skriv svart på vitt varför du samlar in varje uppgift. Utan ett tydligt, konkret ändamål kan du inte visa att behandlingen är laglig, och det är det första en granskning kontrollerar.' },
      { id: 'minimizzazione', testo: 'Samlar du bara in de uppgifter som är strikt nödvändiga för det ändamålet (t.ex. positionen bara vid instämpling, inte löpande)?', feedback: 'Behåll bara det du verkligen behöver. Att följa positionen hela dagen när in- och utstämplingstider räcker är det klassiska överuttaget som utlöser böter.' },
      { id: 'base-giuridica', testo: 'Har du fastställt en annan rättslig grund än samtycke (t.ex. avtalsförpliktelse eller berättigat intresse)?', feedback: 'I anställningsförhållandet håller samtycke nästan aldrig, eftersom arbetstagaren inte är fri att säga nej. Stöd dig på avtalet, en lagstadgad skyldighet eller det berättigade intresset, och skriv ner det.' },
      { id: 'informativa', testo: 'Har du gett de anställda en integritetsinformation som förklarar vad du samlar in, varför och hur länge (art. 13 GDPR)?', feedback: 'Arbetstagare har rätt att veta vad du behandlar och varför. Har du ingen information, utgå från generatorn här bland resurserna och lämna ut den innan du slår på systemet.' },
      { id: 'conservazione', testo: 'Har du fastställt hur länge du sparar varje typ av uppgift och raderar du dem vid utgången?', feedback: 'Uppgifter sparas inte "för alltid, man vet aldrig". Fastställ en tid för varje typ och radera vid utgången: generatorn för lagringspolicy bredvid ger dig vägledande tider.' },
      { id: 'tracciamento', testo: 'Undviker du att registrera positionen utanför arbetstid eller under raster?', feedback: 'Geolokaliseringen stannar när arbetet stannar. Att följa en anställd på fritiden eller under rasten är ett av de allvarligaste och lättast ifrågasatta missbruken.' },
      { id: 'rappresentanza', testo: 'Där det finns en arbetstagarrepresentation, har du involverat den innan systemet aktiverades?', feedback: 'Ett system som kan kontrollera verksamhet förhandlas i förväg, inte efteråt. Där det finns företagsråd eller fackförening ska de involveras: i många länder en skyldighet, inte en artighet.' },
      { id: 'riutilizzo', testo: 'Undviker du att använda de insamlade uppgifterna för andra ändamål än det uppgivna (t.ex. ej planerade bedömningar eller åtgärder)?', feedback: 'En uppgift som samlats in för att organisera lagen kan inte bli beviset för en överraskande uppsägning. Att använda uppgifter för nya, ej uppgivna ändamål är en tydlig överträdelse.' },
      { id: 'diritti', testo: 'Skulle du veta hur du ska svara om en anställd begär att få tillgång till, rätta eller radera sina uppgifter?', feedback: 'Arbetstagare har konkreta rättigheter till sina uppgifter. Förbered en enkel rutin för att svara i tid: att tas på sängen av en begäran är redan en varningssignal för tillsynsmyndigheten.' },
    ],
    fasce: [
      { min: 0, titolo: 'I riskzonen', testo: 'Det finns betydande luckor att täppa till innan de blir ett problem. Börja med områdena nedan: bara informationen, den rättsliga grunden och lagringstiderna tar dig ur de största bekymren.' },
      { min: 8, titolo: 'Kan förbättras', testo: 'Det finns en grund, men något som räknas vid en granskning ligger fortfarande öppet. Åtgärda de markerade områdena nedan så står du på fast mark.' },
      { min: 15, titolo: 'God efterlevnad', testo: 'Du är nästan hela vägen fram. Håll över tid det du uppger i linje med det du faktiskt gör, och se över de få punkterna nedan.' },
    ],
    risorseTitolo: 'Verktyg för att täppa till luckorna',
    risorse: { mappa: 'Karta: reglerna land för land i EU', generatore: 'Generera integritetsinformationen (art. 13)', conservazione: 'Generera lagringspolicyn', blog: 'Mer på bloggen' },
    faq: { title: 'Vanliga frågor', items: [
      { q: 'Har det här testet juridiskt värde?', a: 'Nej: det är ett självdiagnosverktyg för att se var du står, inte en certifiering. Det hjälper dig att se luckorna och veta vad du ska arbeta med. En formell granskning kräver en yrkesperson.' },
      { q: 'Sparas mina svar?', a: 'Nej. Allt körs i din webbläsare och skickas eller lagras aldrig någonstans. Det är samma dataminimeringsprincip som frågorna handlar om.' },
      { q: 'Gäller det bara för den som använder GPS?', a: 'Nej. Frågorna täcker alla personaldata — närvaro, bilder, kommunikation, bedömningar — inte bara positionen. De passar alla företag med anställda.' },
    ] },
  },
  nb: {
    heading: 'Er du i samsvar med dataene til de ansatte?',
    intro: 'Ni raske spørsmål for å se hvor du står med beskyttelsen av personaldata: oppmøte, posisjon, bilder fra arbeidsstedet. Svar ærlig — ingenting forlater nettleseren din, denne siden lagrer ingenting. Til slutt får du en poengsum og områdene du bør jobbe med.',
    opt: { si: 'Ja', parziale: 'Delvis', no: 'Nei' },
    vediRisultato: 'Se resultatet',
    ricomincia: 'Start på nytt',
    punteggio: 'Poengsum',
    areeTitolo: 'Områder å gjennomgå',
    tuttoOk: 'Du svarte "ja" på alt: et utmerket grunnlag. Hold over tid det du oppgir i tråd med det du faktisk gjør.',
    privacyNote: 'Alt kjører i nettleseren din: ingen svar sendes eller lagres noe sted. Det er det samme minimeringsprinsippet som spørsmålene handler om.',
    domande: [
      { id: 'finalita', testo: 'Har du skrevet ned et konkret formål du samler inn ansattdata for (oppmøte, posisjon, bilder)?', feedback: 'Skriv svart på hvitt hvorfor du samler inn hver opplysning. Uten et klart, konkret formål kan du ikke vise at behandlingen er lovlig, og det er det første en kontroll sjekker.' },
      { id: 'minimizzazione', testo: 'Samler du bare inn dataene som er strengt nødvendige for det formålet (f.eks. posisjonen bare ved innstempling, ikke løpende)?', feedback: 'Behold bare det du virkelig trenger. Å følge posisjonen hele dagen når inn- og utstemplingstider holder, er det klassiske overforbruket som utløser bøter.' },
      { id: 'base-giuridica', testo: 'Har du fastsatt et annet rettslig grunnlag enn samtykke (f.eks. kontraktsforpliktelse eller berettiget interesse)?', feedback: 'I arbeidsforholdet holder samtykke nesten aldri, fordi arbeidstakeren ikke er fri til å si nei. Støtt deg på kontrakten, en lovpålagt plikt eller den berettigede interessen, og skriv det ned.' },
      { id: 'informativa', testo: 'Har du gitt de ansatte en personvernerklæring som forklarer hva du samler inn, hvorfor og hvor lenge (art. 13 GDPR)?', feedback: 'Arbeidstakere har rett til å vite hva du behandler og hvorfor. Har du ingen erklæring, start fra generatoren her i ressursene og del den ut før du slår på systemet.' },
      { id: 'conservazione', testo: 'Har du fastsatt hvor lenge du oppbevarer hver datatype, og sletter du dem ved utløp?', feedback: 'Data oppbevares ikke "for alltid, man vet aldri". Fastsett en periode for hver type og slett ved utløp: generatoren for oppbevaringspolicy ved siden av gir deg veiledende perioder.' },
      { id: 'tracciamento', testo: 'Unngår du å registrere posisjonen utenfor arbeidstiden eller i pauser?', feedback: 'Geolokaliseringen stopper når arbeidet stopper. Å følge en ansatt i fritiden eller i pausen er et av de groveste og letteste å bestride misbrukene.' },
      { id: 'rappresentanza', testo: 'Der det finnes en arbeidstakerrepresentasjon, har du involvert den før systemet ble aktivert?', feedback: 'Et system som kan kontrollere aktivitet, drøftes på forhånd, ikke etterpå. Der det er arbeidsmiljøutvalg eller fagforening, skal de involveres: i mange land en plikt, ikke en høflighet.' },
      { id: 'riutilizzo', testo: 'Unngår du å bruke de innsamlede dataene til andre formål enn det oppgitte (f.eks. ikke planlagte vurderinger eller tiltak)?', feedback: 'Data som er samlet inn for å organisere lagene, kan ikke bli beviset for en overraskende oppsigelse. Å bruke data til nye, ikke-oppgitte formål er et klart brudd.' },
      { id: 'diritti', testo: 'Ville du visst hvordan du skal svare hvis en ansatt ber om innsyn i, retting av eller sletting av dataene sine?', feedback: 'Arbeidstakere har konkrete rettigheter til dataene sine. Forbered en enkel rutine for å svare i tide: å bli tatt på senga av en forespørsel er allerede et varselsignal for tilsynet.' },
    ],
    fasce: [
      { min: 0, titolo: 'I faresonen', testo: 'Det er betydelige hull å tette før de blir et problem. Start fra områdene nedenfor: bare erklæringen, det rettslige grunnlaget og oppbevaringsperiodene får deg ut av de største problemene.' },
      { min: 8, titolo: 'Kan forbedres', testo: 'Det finnes et grunnlag, men noe som teller ved en kontroll, ligger fortsatt åpent. Rett opp de markerte områdene nedenfor, så står du på fast grunn.' },
      { min: 15, titolo: 'God etterlevelse', testo: 'Du er nesten helt i mål. Hold over tid det du oppgir i tråd med det du faktisk gjør, og gjennomgå de få punktene nedenfor.' },
    ],
    risorseTitolo: 'Verktøy for å tette hullene',
    risorse: { mappa: 'Kart: regler land for land i EU', generatore: 'Generer personvernerklæringen (art. 13)', conservazione: 'Generer oppbevaringspolicyen', blog: 'Mer på bloggen' },
    faq: { title: 'Ofte stilte spørsmål', items: [
      { q: 'Har denne testen juridisk verdi?', a: 'Nei: det er et selvdiagnoseverktøy for å se hvor du står, ikke en sertifisering. Det hjelper deg å se hullene og vite hva du skal jobbe med. En formell kontroll krever en fagperson.' },
      { q: 'Lagres svarene mine?', a: 'Nei. Alt kjører i nettleseren din og sendes eller lagres aldri noe sted. Det er det samme dataminimeringsprinsippet som spørsmålene handler om.' },
      { q: 'Gjelder det bare for dem som bruker GPS?', a: 'Nei. Spørsmålene dekker alle personaldata — oppmøte, bilder, kommunikasjon, vurderinger — ikke bare posisjonen. De passer for enhver virksomhet med ansatte.' },
    ] },
  },
  ru: {
    heading: 'Соответствуете ли вы требованиям по данным сотрудников?',
    intro: 'Девять быстрых вопросов, чтобы понять, как у вас обстоят дела с защитой данных персонала: учёт времени, местоположение, фотографии с объекта. Отвечайте честно — ничто не покидает ваш браузер, эта страница ничего не записывает. В конце вы получите балл и области, над которыми стоит поработать.',
    opt: { si: 'Да', parziale: 'Частично', no: 'Нет' },
    vediRisultato: 'Посмотреть результат',
    ricomincia: 'Начать заново',
    punteggio: 'Балл',
    areeTitolo: 'Области для пересмотра',
    tuttoOk: 'Вы ответили «да» на всё: отличная основа. Со временем держите заявленное в соответствии с тем, что вы делаете на самом деле.',
    privacyNote: 'Всё работает в вашем браузере: ни один ответ не отправляется и нигде не сохраняется. Это тот же принцип минимизации, о котором спрашивают вопросы.',
    domande: [
      { id: 'finalita', testo: 'Зафиксировали ли вы письменно конкретную цель сбора данных сотрудников (учёт времени, местоположение, фото)?', feedback: 'Запишите чётко, зачем вы собираете каждый вид данных. Без ясной и конкретной цели вы не сможете доказать законность обработки, а это первое, что проверяет контроль.' },
      { id: 'minimizzazione', testo: 'Собираете ли вы только данные, строго необходимые для этой цели (например, местоположение только при отметке, а не постоянно)?', feedback: 'Храните только то, что действительно нужно. Отслеживать местоположение весь день, когда достаточно времени прихода и ухода, — классическое излишество, ведущее к штрафам.' },
      { id: 'base-giuridica', testo: 'Определили ли вы правовое основание, отличное от согласия (например, договорную обязанность или законный интерес)?', feedback: 'В трудовых отношениях согласие почти никогда не работает, потому что работник не свободен отказать. Опирайтесь на договор, обязанность по закону или законный интерес и зафиксируйте это письменно.' },
      { id: 'informativa', testo: 'Выдали ли вы сотрудникам уведомление, объясняющее, что вы собираете, зачем и на какой срок (ст. 13 GDPR)?', feedback: 'Работники вправе знать, что и зачем вы обрабатываете. Если уведомления нет, начните с генератора здесь, в разделе ресурсов, и выдайте его до включения системы.' },
      { id: 'conservazione', testo: 'Установили ли вы, как долго храните каждый вид данных, и удаляете ли их по истечении срока?', feedback: 'Данные не хранят «навсегда, на всякий случай». Установите срок для каждого вида и удаляйте по истечении: генератор политики хранения рядом подскажет ориентировочные сроки.' },
      { id: 'tracciamento', testo: 'Избегаете ли вы фиксации местоположения вне рабочего времени или во время перерывов?', feedback: 'Геолокация прекращается, когда заканчивается работа. Следить за сотрудником в свободное время или на перерыве — одно из самых серьёзных и легко оспоримых злоупотреблений.' },
      { id: 'rappresentanza', testo: 'Там, где есть представительство работников, привлекли ли вы его до активации системы?', feedback: 'Систему, способную контролировать деятельность, согласуют заранее, а не потом. Где есть профсоюз или производственный совет, их нужно привлечь: во многих странах это обязанность, а не любезность.' },
      { id: 'riutilizzo', testo: 'Избегаете ли вы использования собранных данных для иных целей, чем заявленная (например, непредусмотренные оценки или меры)?', feedback: 'Данные, собранные для организации бригад, не могут стать доказательством для внезапного увольнения. Использование данных для новых, незаявленных целей — явное нарушение.' },
      { id: 'diritti', testo: 'Знали бы вы, как ответить, если сотрудник попросит доступ к своим данным, их исправление или удаление?', feedback: 'У работников есть конкретные права на свои данные. Подготовьте простую процедуру, чтобы ответить вовремя: оказаться неготовым к запросу — уже тревожный знак для надзорного органа.' },
    ],
    fasce: [
      { min: 0, titolo: 'В зоне риска', testo: 'Есть значительные пробелы, которые нужно закрыть, пока они не стали проблемой. Начните с областей ниже: даже одни уведомление, правовое основание и сроки хранения избавят вас от самых крупных неприятностей.' },
      { min: 8, titolo: 'Есть над чем работать', testo: 'Основа есть, но что-то, что важно при проверке, остаётся открытым. Исправьте отмеченные ниже области — и вы будете на твёрдой почве.' },
      { min: 15, titolo: 'Хорошее соответствие', testo: 'Вы почти у цели. Со временем держите заявленное в соответствии с тем, что делаете на самом деле, и пересмотрите немногие пункты ниже.' },
    ],
    risorseTitolo: 'Инструменты, чтобы закрыть пробелы',
    risorse: { mappa: 'Карта: правила по странам ЕС', generatore: 'Создать уведомление о конфиденциальности (ст. 13)', conservazione: 'Создать политику хранения данных', blog: 'Подробнее в блоге' },
    faq: { title: 'Частые вопросы', items: [
      { q: 'Имеет ли этот тест юридическую силу?', a: 'Нет: это инструмент самодиагностики, чтобы понять, где вы находитесь, а не сертификация. Он помогает увидеть пробелы и понять, над чем работать. Для формальной проверки нужен специалист.' },
      { q: 'Сохраняются ли мои ответы?', a: 'Нет. Всё работает в вашем браузере и нигде не отправляется и не хранится. Это тот же принцип минимизации данных, о котором спрашивают вопросы.' },
      { q: 'Это только для тех, кто использует GPS?', a: 'Нет. Вопросы охватывают все данные персонала — учёт времени, фото, переписку, оценки — не только местоположение. Они подходят любой компании с сотрудниками.' },
    ] },
  },
};

export function avLocale(locale: string): AvLocale {
  return (Object.keys(CONTENUTI) as AvLocale[]).includes(locale as AvLocale)
    ? (locale as AvLocale)
    : 'en';
}

export function getAutovalutazione(locale: string): AvContenuto {
  return CONTENUTI[avLocale(locale)];
}
