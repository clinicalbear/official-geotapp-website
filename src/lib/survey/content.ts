/**
 * BOZZA CONTENUTO SONDAGGIO "Prova del lavoro" — 11 lingue, DUE PERCORSI.
 * Stato: DA RIVEDERE (Michele controlli almeno IT e NB, che conosce).
 *
 * Struttura: anonimo. Q1 (settore) comune -> domanda BRANCH che smista ->
 *   Percorso A "chi SVOLGE il lavoro" (e a volte lo subisce contestato): a1,a2,a3
 *   Percorso B "chi COMMISSIONA il lavoro" (e a volte lo contesta): b1,b2,b3
 *   -> email facoltativa + invio (comuni).
 * Un solo link universale auto-localizzante; il confronto A vs B è il dato citabile.
 * Scale a3/b3: 1 = per niente, 5 = moltissimo.
 */

export type SurveyLocale =
  | 'it' | 'en' | 'de' | 'nl' | 'fr' | 'es' | 'pt' | 'da' | 'sv' | 'nb' | 'ru';

interface ScaleQ { label: string; lowLabel: string; highLabel: string }
interface ChoiceQ { label: string; options: string[] }

export interface SurveyContent {
  title: string;
  intro: string;
  q1: ChoiceQ;                                   // settore (comune)
  branch: { label: string; optionA: string; optionB: string };
  pathA: { a1: ChoiceQ; a2: ChoiceQ; a3: ScaleQ }; // chi svolge il lavoro
  pathB: { b1: ChoiceQ; b2: ChoiceQ; b3: ScaleQ }; // chi commissiona il lavoro
  emailLabel: string;
  emailPlaceholder: string;
  privacyNote: string;
  submit: string;
  thankYou: string;
}

export const SURVEY: Record<SurveyLocale, SurveyContent> = {
  it: {
    title: 'Lavoro sul campo: ti fidi della parola o ti serve una prova?',
    intro: '2 minuti, anonimo. Ci aiuti a capire un problema vero, da tutte e due le parti.',
    q1: { label: 'Di cosa ti occupi?', options: ['Pulizie', 'Sicurezza e vigilanza', 'Edilizia e impianti', 'Altri servizi sul campo', 'Nessuna di queste'] },
    branch: { label: 'Rispondi più spesso da chi svolge il lavoro o da chi lo commissiona?', optionA: 'Svolgo il lavoro (e a volte mi viene contestato)', optionB: 'Commissiono il lavoro (e a volte lo contesto)' },
    pathA: {
      a1: { label: 'Ti è mai capitato che un cliente contestasse un lavoro dicendo che "non risultava" fatto?', options: ['Sì, più volte', 'Sì, qualche volta', 'Mai'] },
      a2: { label: 'Hai mai perso soldi (mancato pagamento, lavoro rifatto gratis) per ore o interventi che non riuscivi a dimostrare?', options: ['Sì', 'No', 'Non saprei'] },
      a3: { label: 'Quanto ti aiuterebbe avere una prova certa (foto + posizione + orario) di ogni lavoro svolto?', lowLabel: 'Per niente', highLabel: 'Moltissimo' },
    },
    pathB: {
      b1: { label: 'Ti è mai capitato di dubitare che un lavoro che hai pagato fosse stato davvero svolto, o fatto bene?', options: ['Sì, più volte', 'Sì, qualche volta', 'Mai'] },
      b2: { label: 'Hai mai contestato o trattenuto un pagamento per questo?', options: ['Sì', 'No'] },
      b3: { label: 'Quanto ti farebbe preferire un fornitore sapere che ti dà una prova certa (foto + posizione + orario) di ogni intervento?', lowLabel: 'Per niente', highLabel: 'Moltissimo' },
    },
    emailLabel: 'Vuoi ricevere i risultati del sondaggio? Lascia la mail (facoltativo)',
    emailPlaceholder: 'la-tua@email.it',
    privacyNote: 'Sondaggio anonimo. Nessun dato obbligatorio. La mail, se la lasci, serve solo per i risultati e non viene condivisa.',
    submit: 'Invia',
    thankYou: 'Grazie. Il tuo contributo conta davvero.',
  },
  en: {
    title: 'Field work: do you trust their word, or do you need proof?',
    intro: '2 minutes, anonymous. Help us understand a real problem, from both sides.',
    q1: { label: 'What do you do?', options: ['Cleaning', 'Security and surveillance', 'Construction and installations', 'Other field services', 'None of these'] },
    branch: { label: 'Are you answering mostly as someone who does the work, or who commissions it?', optionA: 'I do the work (and sometimes it gets disputed)', optionB: 'I commission the work (and sometimes I dispute it)' },
    pathA: {
      a1: { label: 'Has a client ever disputed a job, claiming there was no record it had been done?', options: ['Yes, several times', 'Yes, occasionally', 'Never'] },
      a2: { label: 'Have you ever lost money (unpaid invoice, work redone for free) because of hours or jobs you could not prove?', options: ['Yes', 'No', 'Not sure'] },
      a3: { label: 'How much would it help to have solid proof (photo + location + time) of every job done?', lowLabel: 'Not at all', highLabel: 'Enormously' },
    },
    pathB: {
      b1: { label: 'Have you ever doubted that a job you paid for was actually done, or done properly?', options: ['Yes, several times', 'Yes, occasionally', 'Never'] },
      b2: { label: 'Have you ever disputed or withheld a payment because of it?', options: ['Yes', 'No'] },
      b3: { label: 'How much would it make you prefer a supplier knowing they give you solid proof (photo + location + time) of every job?', lowLabel: 'Not at all', highLabel: 'Enormously' },
    },
    emailLabel: 'Want the survey results? Leave your email (optional)',
    emailPlaceholder: 'your@email.com',
    privacyNote: 'Anonymous survey. No required data. Your email, if you leave it, is used only for the results and is never shared.',
    submit: 'Submit',
    thankYou: 'Thank you. Your input really matters.',
  },
  de: {
    title: 'Arbeit vor Ort: Vertraust du dem Wort, oder brauchst du einen Nachweis?',
    intro: '2 Minuten, anonym. Hilf uns, ein echtes Problem zu verstehen, von beiden Seiten.',
    q1: { label: 'Was machst du?', options: ['Reinigung', 'Sicherheit und Bewachung', 'Bau und Installation', 'Andere Außendienste', 'Nichts davon'] },
    branch: { label: 'Antwortest du eher als jemand, der die Arbeit ausführt, oder der sie beauftragt?', optionA: 'Ich führe die Arbeit aus (und manchmal wird sie bestritten)', optionB: 'Ich beauftrage die Arbeit (und manchmal bestreite ich sie)' },
    pathA: {
      a1: { label: 'Hat ein Kunde je eine Leistung bestritten mit der Begründung, es gebe keinen Nachweis dafür?', options: ['Ja, mehrmals', 'Ja, gelegentlich', 'Nie'] },
      a2: { label: 'Hast du je Geld verloren (unbezahlte Rechnung, kostenlos wiederholte Arbeit), weil du Stunden oder Einsätze nicht nachweisen konntest?', options: ['Ja', 'Nein', 'Weiß nicht'] },
      a3: { label: 'Wie sehr würde ein sicherer Nachweis (Foto + Standort + Uhrzeit) jeder geleisteten Arbeit helfen?', lowLabel: 'Gar nicht', highLabel: 'Enorm' },
    },
    pathB: {
      b1: { label: 'Hast du je bezweifelt, dass eine bezahlte Arbeit wirklich oder ordentlich ausgeführt wurde?', options: ['Ja, mehrmals', 'Ja, gelegentlich', 'Nie'] },
      b2: { label: 'Hast du deswegen je eine Zahlung bestritten oder zurückgehalten?', options: ['Ja', 'Nein'] },
      b3: { label: 'Wie sehr würdest du einen Anbieter bevorzugen, der dir einen sicheren Nachweis (Foto + Standort + Uhrzeit) jeder Leistung liefert?', lowLabel: 'Gar nicht', highLabel: 'Enorm' },
    },
    emailLabel: 'Möchtest du die Ergebnisse? Hinterlasse deine E-Mail (optional)',
    emailPlaceholder: 'deine@email.de',
    privacyNote: 'Anonyme Umfrage. Keine Pflichtangaben. Deine E-Mail wird, falls angegeben, nur für die Ergebnisse genutzt und nicht weitergegeben.',
    submit: 'Senden',
    thankYou: 'Danke. Dein Beitrag zählt wirklich.',
  },
  nl: {
    title: 'Werk op locatie: vertrouw je op hun woord, of heb je bewijs nodig?',
    intro: '2 minuten, anoniem. Help ons een echt probleem te begrijpen, van beide kanten.',
    q1: { label: 'Wat doe je?', options: ['Schoonmaak', 'Beveiliging en bewaking', 'Bouw en installatie', 'Andere diensten op locatie', 'Geen van deze'] },
    branch: { label: 'Antwoord je vooral als iemand die het werk uitvoert, of die het opdraagt?', optionA: 'Ik voer het werk uit (en soms wordt het betwist)', optionB: 'Ik geef het werk opdracht (en soms betwist ik het)' },
    pathA: {
      a1: { label: 'Heeft een klant ooit een klus betwist met de bewering dat er geen bewijs was dat die was uitgevoerd?', options: ['Ja, meerdere keren', 'Ja, af en toe', 'Nooit'] },
      a2: { label: 'Heb je ooit geld verloren (onbetaalde factuur, werk gratis overgedaan) door uren of klussen die je niet kon aantonen?', options: ['Ja', 'Nee', 'Weet ik niet'] },
      a3: { label: 'Hoeveel zou het helpen om hard bewijs (foto + locatie + tijd) te hebben van elke uitgevoerde klus?', lowLabel: 'Helemaal niet', highLabel: 'Enorm' },
    },
    pathB: {
      b1: { label: 'Heb je ooit getwijfeld of een klus waarvoor je betaalde echt of goed was uitgevoerd?', options: ['Ja, meerdere keren', 'Ja, af en toe', 'Nooit'] },
      b2: { label: 'Heb je daarom ooit een betaling betwist of ingehouden?', options: ['Ja', 'Nee'] },
      b3: { label: 'Hoeveel zou je een leverancier verkiezen die je hard bewijs (foto + locatie + tijd) van elke klus geeft?', lowLabel: 'Helemaal niet', highLabel: 'Enorm' },
    },
    emailLabel: 'Wil je de resultaten? Laat je e-mail achter (optioneel)',
    emailPlaceholder: 'jouw@email.nl',
    privacyNote: 'Anonieme enquête. Geen verplichte gegevens. Je e-mail, indien achtergelaten, wordt alleen gebruikt voor de resultaten en nooit gedeeld.',
    submit: 'Versturen',
    thankYou: 'Bedankt. Jouw bijdrage telt echt.',
  },
  fr: {
    title: 'Travail sur le terrain : tu fais confiance à la parole, ou il te faut une preuve ?',
    intro: '2 minutes, anonyme. Aide-nous à comprendre un vrai problème, des deux côtés.',
    q1: { label: 'Que fais-tu ?', options: ['Nettoyage', 'Sécurité et surveillance', 'Bâtiment et installations', 'Autres services sur le terrain', 'Aucun de ceux-ci'] },
    branch: { label: 'Réponds-tu plutôt comme celui qui exécute le travail, ou qui le commande ?', optionA: 'J\'exécute le travail (et parfois on le conteste)', optionB: 'Je commande le travail (et parfois je le conteste)' },
    pathA: {
      a1: { label: 'Un client a-t-il déjà contesté une intervention en affirmant qu\'il n\'y avait aucune preuve qu\'elle ait été faite ?', options: ['Oui, plusieurs fois', 'Oui, parfois', 'Jamais'] },
      a2: { label: 'As-tu déjà perdu de l\'argent (facture impayée, travail refait gratuitement) à cause d\'heures ou d\'interventions que tu ne pouvais pas prouver ?', options: ['Oui', 'Non', 'Je ne sais pas'] },
      a3: { label: 'À quel point une preuve solide (photo + position + heure) de chaque intervention t\'aiderait-elle ?', lowLabel: 'Pas du tout', highLabel: 'Énormément' },
    },
    pathB: {
      b1: { label: 'As-tu déjà douté qu\'un travail que tu as payé ait vraiment été fait, ou bien fait ?', options: ['Oui, plusieurs fois', 'Oui, parfois', 'Jamais'] },
      b2: { label: 'As-tu déjà contesté ou retenu un paiement pour cette raison ?', options: ['Oui', 'Non'] },
      b3: { label: 'À quel point préférerais-tu un prestataire qui te fournit une preuve solide (photo + position + heure) de chaque intervention ?', lowLabel: 'Pas du tout', highLabel: 'Énormément' },
    },
    emailLabel: 'Tu veux les résultats ? Laisse ton e-mail (facultatif)',
    emailPlaceholder: 'ton@email.fr',
    privacyNote: 'Enquête anonyme. Aucune donnée obligatoire. Ton e-mail, si tu le laisses, sert uniquement aux résultats et n\'est jamais partagé.',
    submit: 'Envoyer',
    thankYou: 'Merci. Ta contribution compte vraiment.',
  },
  es: {
    title: 'Trabajo de campo: ¿te fías de la palabra o necesitas una prueba?',
    intro: '2 minutos, anónimo. Ayúdanos a entender un problema real, desde los dos lados.',
    q1: { label: '¿A qué te dedicas?', options: ['Limpieza', 'Seguridad y vigilancia', 'Construcción e instalaciones', 'Otros servicios de campo', 'Ninguno de estos'] },
    branch: { label: '¿Respondes más bien como quien ejecuta el trabajo o quien lo encarga?', optionA: 'Ejecuto el trabajo (y a veces me lo cuestionan)', optionB: 'Encargo el trabajo (y a veces lo cuestiono)' },
    pathA: {
      a1: { label: '¿Alguna vez un cliente ha cuestionado un trabajo alegando que no había constancia de que se hubiera hecho?', options: ['Sí, varias veces', 'Sí, alguna vez', 'Nunca'] },
      a2: { label: '¿Has perdido dinero alguna vez (factura impagada, trabajo rehecho gratis) por horas o intervenciones que no podías demostrar?', options: ['Sí', 'No', 'No lo sé'] },
      a3: { label: '¿Cuánto te ayudaría tener una prueba sólida (foto + ubicación + hora) de cada trabajo realizado?', lowLabel: 'Nada', highLabel: 'Muchísimo' },
    },
    pathB: {
      b1: { label: '¿Alguna vez has dudado de que un trabajo que pagaste se hubiera hecho de verdad, o bien hecho?', options: ['Sí, varias veces', 'Sí, alguna vez', 'Nunca'] },
      b2: { label: '¿Has cuestionado o retenido un pago por ello alguna vez?', options: ['Sí', 'No'] },
      b3: { label: '¿Cuánto preferirías a un proveedor sabiendo que te da una prueba sólida (foto + ubicación + hora) de cada intervención?', lowLabel: 'Nada', highLabel: 'Muchísimo' },
    },
    emailLabel: '¿Quieres los resultados? Deja tu correo (opcional)',
    emailPlaceholder: 'tu@email.es',
    privacyNote: 'Encuesta anónima. Ningún dato obligatorio. Tu correo, si lo dejas, se usa solo para los resultados y nunca se comparte.',
    submit: 'Enviar',
    thankYou: 'Gracias. Tu aportación cuenta de verdad.',
  },
  pt: {
    title: 'Trabalho no terreno: confias na palavra ou precisas de uma prova?',
    intro: '2 minutos, anónimo. Ajuda-nos a perceber um problema real, dos dois lados.',
    q1: { label: 'A que te dedicas?', options: ['Limpeza', 'Segurança e vigilância', 'Construção e instalações', 'Outros serviços no terreno', 'Nenhum destes'] },
    branch: { label: 'Respondes mais como quem executa o trabalho ou quem o encomenda?', optionA: 'Executo o trabalho (e às vezes contestam-mo)', optionB: 'Encomendo o trabalho (e às vezes contesto-o)' },
    pathA: {
      a1: { label: 'Já aconteceu um cliente contestar um trabalho alegando que não havia registo de que tinha sido feito?', options: ['Sim, várias vezes', 'Sim, às vezes', 'Nunca'] },
      a2: { label: 'Já perdeste dinheiro (fatura por pagar, trabalho refeito de graça) por horas ou intervenções que não conseguias provar?', options: ['Sim', 'Não', 'Não sei'] },
      a3: { label: 'Quanto te ajudaria ter uma prova sólida (foto + localização + hora) de cada trabalho realizado?', lowLabel: 'Nada', highLabel: 'Imenso' },
    },
    pathB: {
      b1: { label: 'Já duvidaste de que um trabalho que pagaste tivesse sido mesmo feito, ou bem feito?', options: ['Sim, várias vezes', 'Sim, às vezes', 'Nunca'] },
      b2: { label: 'Já contestaste ou retiveste um pagamento por causa disso?', options: ['Sim', 'Não'] },
      b3: { label: 'Quanto preferirias um fornecedor sabendo que te dá uma prova sólida (foto + localização + hora) de cada intervenção?', lowLabel: 'Nada', highLabel: 'Imenso' },
    },
    emailLabel: 'Queres os resultados? Deixa o teu email (opcional)',
    emailPlaceholder: 'o-teu@email.pt',
    privacyNote: 'Inquérito anónimo. Nenhum dado obrigatório. O teu email, se o deixares, serve apenas para os resultados e nunca é partilhado.',
    submit: 'Enviar',
    thankYou: 'Obrigado. O teu contributo conta mesmo.',
  },
  da: {
    title: 'Arbejde i marken: stoler du på ordet, eller har du brug for bevis?',
    intro: '2 minutter, anonymt. Hjælp os med at forstå et reelt problem, fra begge sider.',
    q1: { label: 'Hvad laver du?', options: ['Rengøring', 'Sikkerhed og vagt', 'Byggeri og installation', 'Andre tjenester i marken', 'Ingen af disse'] },
    branch: { label: 'Svarer du mest som en, der udfører arbejdet, eller som bestiller det?', optionA: 'Jeg udfører arbejdet (og nogle gange bestrides det)', optionB: 'Jeg bestiller arbejdet (og nogle gange bestrider jeg det)' },
    pathA: {
      a1: { label: 'Har en kunde nogensinde bestridt et stykke arbejde med påstand om, at der ikke var bevis for, at det var udført?', options: ['Ja, flere gange', 'Ja, en gang imellem', 'Aldrig'] },
      a2: { label: 'Har du nogensinde tabt penge (ubetalt faktura, arbejde lavet om gratis) på grund af timer eller opgaver, du ikke kunne bevise?', options: ['Ja', 'Nej', 'Ved ikke'] },
      a3: { label: 'Hvor meget ville det hjælpe at have solidt bevis (foto + placering + tidspunkt) for hvert udført stykke arbejde?', lowLabel: 'Slet ikke', highLabel: 'Enormt' },
    },
    pathB: {
      b1: { label: 'Har du nogensinde tvivlet på, om et stykke arbejde, du betalte for, virkelig blev udført eller udført ordentligt?', options: ['Ja, flere gange', 'Ja, en gang imellem', 'Aldrig'] },
      b2: { label: 'Har du nogensinde bestridt eller tilbageholdt en betaling på grund af det?', options: ['Ja', 'Nej'] },
      b3: { label: 'Hvor meget ville du foretrække en leverandør, der giver dig solidt bevis (foto + placering + tidspunkt) for hver opgave?', lowLabel: 'Slet ikke', highLabel: 'Enormt' },
    },
    emailLabel: 'Vil du have resultaterne? Efterlad din e-mail (valgfrit)',
    emailPlaceholder: 'din@email.dk',
    privacyNote: 'Anonym undersøgelse. Ingen påkrævede data. Din e-mail bruges, hvis du efterlader den, kun til resultaterne og deles aldrig.',
    submit: 'Send',
    thankYou: 'Tak. Dit bidrag betyder virkelig noget.',
  },
  sv: {
    title: 'Arbete i fält: litar du på ordet, eller behöver du bevis?',
    intro: '2 minuter, anonymt. Hjälp oss att förstå ett verkligt problem, från båda sidor.',
    q1: { label: 'Vad gör du?', options: ['Städning', 'Säkerhet och bevakning', 'Bygg och installation', 'Andra fälttjänster', 'Ingen av dessa'] },
    branch: { label: 'Svarar du mest som någon som utför arbetet, eller som beställer det?', optionA: 'Jag utför arbetet (och ibland bestrids det)', optionB: 'Jag beställer arbetet (och ibland bestrider jag det)' },
    pathA: {
      a1: { label: 'Har en kund någonsin bestridit ett jobb och hävdat att det inte fanns något bevis för att det utförts?', options: ['Ja, flera gånger', 'Ja, ibland', 'Aldrig'] },
      a2: { label: 'Har du någonsin förlorat pengar (obetald faktura, omgjort arbete gratis) på grund av timmar eller jobb du inte kunde bevisa?', options: ['Ja', 'Nej', 'Vet inte'] },
      a3: { label: 'Hur mycket skulle det hjälpa att ha solida bevis (foto + plats + tid) för varje utfört jobb?', lowLabel: 'Inte alls', highLabel: 'Enormt' },
    },
    pathB: {
      b1: { label: 'Har du någonsin tvivlat på att ett jobb du betalade för verkligen utfördes, eller utfördes ordentligt?', options: ['Ja, flera gånger', 'Ja, ibland', 'Aldrig'] },
      b2: { label: 'Har du någonsin bestridit eller hållit inne en betalning på grund av det?', options: ['Ja', 'Nej'] },
      b3: { label: 'Hur mycket skulle du föredra en leverantör som ger dig solida bevis (foto + plats + tid) för varje jobb?', lowLabel: 'Inte alls', highLabel: 'Enormt' },
    },
    emailLabel: 'Vill du ha resultaten? Lämna din e-post (valfritt)',
    emailPlaceholder: 'din@email.se',
    privacyNote: 'Anonym undersökning. Inga obligatoriska uppgifter. Din e-post, om du lämnar den, används bara för resultaten och delas aldrig.',
    submit: 'Skicka',
    thankYou: 'Tack. Ditt bidrag spelar verkligen roll.',
  },
  nb: {
    title: 'Arbeid ute i felt: stoler du på ordet, eller trenger du bevis?',
    intro: '2 minutter, anonymt. Hjelp oss å forstå et reelt problem, fra begge sider.',
    q1: { label: 'Hva jobber du med?', options: ['Renhold', 'Sikkerhet og vakthold', 'Bygg og installasjon', 'Andre tjenester ute i felt', 'Ingen av disse'] },
    branch: { label: 'Svarer du mest som en som utfører arbeidet, eller som bestiller det?', optionA: 'Jeg utfører arbeidet (og av og til bestrides det)', optionB: 'Jeg bestiller arbeidet (og av og til bestrider jeg det)' },
    pathA: {
      a1: { label: 'Har en kunde noen gang bestridt et arbeid med påstand om at det ikke fantes bevis for at det var utført?', options: ['Ja, flere ganger', 'Ja, av og til', 'Aldri'] },
      a2: { label: 'Har du noen gang tapt penger (ubetalt faktura, arbeid gjort om gratis) på grunn av timer eller oppdrag du ikke kunne bevise?', options: ['Ja', 'Nei', 'Vet ikke'] },
      a3: { label: 'Hvor mye ville det hjelpe å ha solid bevis (foto + posisjon + tidspunkt) for hvert utført arbeid?', lowLabel: 'Ikke i det hele tatt', highLabel: 'Enormt' },
    },
    pathB: {
      b1: { label: 'Har du noen gang tvilt på at et arbeid du betalte for virkelig ble utført, eller godt utført?', options: ['Ja, flere ganger', 'Ja, av og til', 'Aldri'] },
      b2: { label: 'Har du noen gang bestridt eller holdt tilbake en betaling på grunn av det?', options: ['Ja', 'Nei'] },
      b3: { label: 'Hvor mye ville du foretrekke en leverandør som gir deg solid bevis (foto + posisjon + tidspunkt) for hvert oppdrag?', lowLabel: 'Ikke i det hele tatt', highLabel: 'Enormt' },
    },
    emailLabel: 'Vil du ha resultatene? Legg igjen e-posten din (valgfritt)',
    emailPlaceholder: 'din@email.no',
    privacyNote: 'Anonym undersøkelse. Ingen obligatoriske data. E-posten din, hvis du legger den igjen, brukes bare til resultatene og deles aldri.',
    submit: 'Send',
    thankYou: 'Takk. Bidraget ditt betyr virkelig noe.',
  },
  ru: {
    title: 'Работа на выезде: верите на слово или нужно доказательство?',
    intro: '2 минуты, анонимно. Помогите нам понять реальную проблему с обеих сторон.',
    q1: { label: 'Чем вы занимаетесь?', options: ['Уборка', 'Безопасность и охрана', 'Строительство и монтаж', 'Другие выездные услуги', 'Ничего из перечисленного'] },
    branch: { label: 'Вы отвечаете скорее как тот, кто выполняет работу, или кто её заказывает?', optionA: 'Я выполняю работу (и иногда её оспаривают)', optionB: 'Я заказываю работу (и иногда оспариваю её)' },
    pathA: {
      a1: { label: 'Случалось ли, что клиент оспаривал работу, утверждая, что нет подтверждения, что она была выполнена?', options: ['Да, несколько раз', 'Да, иногда', 'Никогда'] },
      a2: { label: 'Теряли ли вы деньги (неоплаченный счёт, переделанная бесплатно работа) из-за часов или работ, которые не могли подтвердить?', options: ['Да', 'Нет', 'Не знаю'] },
      a3: { label: 'Насколько помогло бы иметь надёжное доказательство (фото + местоположение + время) каждой выполненной работы?', lowLabel: 'Совсем нет', highLabel: 'Очень сильно' },
    },
    pathB: {
      b1: { label: 'Сомневались ли вы когда-нибудь, что работа, за которую вы заплатили, действительно была выполнена или выполнена качественно?', options: ['Да, несколько раз', 'Да, иногда', 'Никогда'] },
      b2: { label: 'Оспаривали ли вы или удерживали оплату из-за этого?', options: ['Да', 'Нет'] },
      b3: { label: 'Насколько вы предпочли бы поставщика, зная, что он даёт надёжное доказательство (фото + местоположение + время) каждой работы?', lowLabel: 'Совсем нет', highLabel: 'Очень сильно' },
    },
    emailLabel: 'Хотите получить результаты? Оставьте e-mail (необязательно)',
    emailPlaceholder: 'ваш@email.ru',
    privacyNote: 'Анонимный опрос. Обязательных данных нет. E-mail, если вы его оставите, используется только для результатов и никогда не передаётся третьим лицам.',
    submit: 'Отправить',
    thankYou: 'Спасибо. Ваш вклад действительно важен.',
  },
};
