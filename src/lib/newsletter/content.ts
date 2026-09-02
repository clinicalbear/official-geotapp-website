/**
 * Testi della pagina /{locale}/newsletter/, nelle stesse 11 lingue del sondaggio.
 *
 * Perche' esiste la pagina: fino al 02/09/2026 il form di iscrizione viveva SOLO
 * dentro gli articoli del blog (`NewsletterInline`) e nel modale, quindi non
 * c'era un URL da mandare a qualcuno che voleva iscriversi. Serviva per l'email
 * di ringraziamento ai rispondenti del sondaggio, che non puo' iscrivere nessuno
 * d'ufficio: l'indirizzo lo hanno lasciato per i risultati, non per la newsletter.
 */

export type NewsletterLocale =
  | 'it' | 'en' | 'de' | 'nl' | 'fr' | 'es' | 'pt' | 'da' | 'sv' | 'nb' | 'ru';

export interface NewsletterContent {
  title: string;
  intro: string;
  promise: string;
  placeholder: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  privacy: string;
}

export const NEWSLETTER: Record<NewsletterLocale, NewsletterContent> = {
  it: {
    title: 'La newsletter di GeoTapp',
    intro: 'Una volta a settimana, come si dimostra un lavoro svolto senza sorvegliare nessuno, e cosa dicono leggi e giudici quando la faccenda finisce male.',
    promise: 'Niente pubblicità travestita da consiglio. Le settimane in cui non c’è niente da dire, non arriva niente.',
    placeholder: 'La tua email',
    submit: 'Iscriviti',
    sending: 'Un attimo…',
    success: 'Fatto. La prossima arriva qui.',
    error: 'Non ha funzionato. Riprova fra un momento.',
    privacy: 'Serve solo l’indirizzo. Ti disiscrivi da qualsiasi email con un click, e sparisce.',
  },
  en: {
    title: 'The GeoTapp newsletter',
    intro: 'Once a week, how work gets proven without watching anyone, and what the law and the courts say once things turn sour.',
    promise: 'No advertising dressed up as advice. On the weeks there is nothing worth saying, nothing goes out.',
    placeholder: 'Your email',
    submit: 'Subscribe',
    sending: 'One moment…',
    success: 'Done. The next one lands here.',
    error: 'That did not work. Try again in a moment.',
    privacy: 'The address is all it takes. Unsubscribe from any email with one click and it is gone.',
  },
  de: {
    title: 'Der GeoTapp-Newsletter',
    intro: 'Einmal die Woche, wie sich geleistete Arbeit belegen lässt, ohne jemanden zu überwachen, und was Gesetz und Gerichte sagen, wenn die Sache schiefgeht.',
    promise: 'Keine Werbung im Ratgeberkostüm. In Wochen, in denen es nichts zu sagen gibt, kommt nichts.',
    placeholder: 'Deine E-Mail',
    submit: 'Abonnieren',
    sending: 'Einen Moment…',
    success: 'Erledigt. Die nächste landet hier.',
    error: 'Das hat nicht geklappt. Versuch es gleich noch einmal.',
    privacy: 'Mehr als die Adresse braucht es nicht. Abmelden geht aus jeder E-Mail mit einem Klick, dann ist sie weg.',
  },
  nl: {
    title: 'De nieuwsbrief van GeoTapp',
    intro: 'Eén keer per week, hoe je uitgevoerd werk aantoont zonder iemand te volgen, en wat de wet en de rechter ervan vinden als het misgaat.',
    promise: 'Geen reclame vermomd als advies. In weken zonder iets te melden komt er niets.',
    placeholder: 'Je e-mail',
    submit: 'Aanmelden',
    sending: 'Momentje…',
    success: 'Gelukt. De volgende komt hier binnen.',
    error: 'Dat ging mis. Probeer het zo nog eens.',
    privacy: 'Alleen het adres. Afmelden kan vanuit elke mail met één klik, en dan is het weg.',
  },
  fr: {
    title: 'La newsletter GeoTapp',
    intro: 'Une fois par semaine, comment prouver un travail fait sans surveiller qui que ce soit, et ce que disent la loi et les juges quand ça tourne mal.',
    promise: 'Pas de publicité déguisée en conseil. Les semaines où il n’y a rien à dire, rien ne part.',
    placeholder: 'Votre email',
    submit: 'S’inscrire',
    sending: 'Un instant…',
    success: 'C’est fait. La prochaine arrive ici.',
    error: 'Ça n’a pas marché. Réessaie dans un instant.',
    privacy: 'L’adresse suffit. On se désinscrit depuis n’importe quel email en un clic, et elle disparaît.',
  },
  es: {
    title: 'La newsletter de GeoTapp',
    intro: 'Una vez por semana, cómo se demuestra un trabajo hecho sin vigilar a nadie, y qué dicen la ley y los jueces cuando la cosa acaba mal.',
    promise: 'Nada de publicidad disfrazada de consejo. Las semanas en que no hay nada que contar, no llega nada.',
    placeholder: 'Tu email',
    submit: 'Suscribirme',
    sending: 'Un momento…',
    success: 'Listo. La próxima llega aquí.',
    error: 'No ha funcionado. Inténtalo dentro de un momento.',
    privacy: 'Basta con la dirección. Te das de baja desde cualquier correo con un clic y desaparece.',
  },
  pt: {
    title: 'A newsletter da GeoTapp',
    intro: 'Uma vez por semana, como se prova um trabalho feito sem vigiar ninguém, e o que dizem a lei e os tribunais quando aquilo corre mal.',
    promise: 'Nada de publicidade disfarçada de conselho. Nas semanas em que não há nada a dizer, não sai nada.',
    placeholder: 'O teu email',
    submit: 'Subscrever',
    sending: 'Um momento…',
    success: 'Feito. A próxima chega aqui.',
    error: 'Não resultou. Tenta daqui a pouco.',
    privacy: 'Basta a morada. Cancelas a partir de qualquer email com um clique, e desaparece.',
  },
  da: {
    title: 'GeoTapps nyhedsbrev',
    intro: 'En gang om ugen, hvordan man beviser udført arbejde uden at overvåge nogen, og hvad loven og domstolene siger, når det går galt.',
    promise: 'Ingen reklame forklædt som gode råd. I de uger, hvor der ikke er noget at sige, kommer der ingenting.',
    placeholder: 'Din e-mail',
    submit: 'Tilmeld',
    sending: 'Øjeblik…',
    success: 'Klaret. Den næste lander her.',
    error: 'Det gik ikke. Prøv igen om lidt.',
    privacy: 'Adressen er nok. Du framelder dig fra enhver mail med et klik, og så er den væk.',
  },
  sv: {
    title: 'GeoTapps nyhetsbrev',
    intro: 'En gång i veckan, hur man visar att ett jobb är gjort utan att övervaka någon, och vad lagen och domstolarna säger när det går snett.',
    promise: 'Ingen reklam utklädd till goda råd. De veckor det inte finns något att säga kommer det ingenting.',
    placeholder: 'Din e-post',
    submit: 'Prenumerera',
    sending: 'Ett ögonblick…',
    success: 'Klart. Nästa landar här.',
    error: 'Det gick inte. Försök igen om en stund.',
    privacy: 'Adressen räcker. Du avslutar från vilket mejl som helst med ett klick, och den försvinner.',
  },
  nb: {
    title: 'Nyhetsbrevet til GeoTapp',
    intro: 'Én gang i uka, hvordan man beviser at en jobb er gjort uten å overvåke noen, og hva loven og domstolene sier når det går galt.',
    promise: 'Ingen reklame forkledd som gode råd. De ukene det ikke er noe å si, kommer det ingenting.',
    placeholder: 'Din e-post',
    submit: 'Abonner',
    sending: 'Et øyeblikk…',
    success: 'Ferdig. Den neste havner her.',
    error: 'Det gikk ikke. Prøv igjen om litt.',
    privacy: 'Adressen holder. Du melder deg av fra hvilken som helst e-post med ett klikk, og da er den borte.',
  },
  ru: {
    title: 'Рассылка GeoTapp',
    intro: 'Раз в неделю, как подтвердить выполненную работу, никого не отслеживая, и что говорят закон и суды, когда доходит до спора.',
    promise: 'Никакой рекламы под видом советов. В недели, когда сказать нечего, ничего и не приходит.',
    placeholder: 'Ваш email',
    submit: 'Подписаться',
    sending: 'Минутку…',
    success: 'Готово. Следующий выпуск придёт сюда.',
    error: 'Не получилось. Попробуйте через минуту.',
    privacy: 'Нужен только адрес. Отписаться можно из любого письма в один клик, и адрес исчезнет.',
  },
};

/** Il locale del sito (anche en-gb, en-us) mappato sulle 11 lingue della newsletter. */
export function linguaNewsletter(locale: string): NewsletterLocale {
  const lc = (locale || 'en').toLowerCase();
  if (lc in NEWSLETTER) return lc as NewsletterLocale;
  const base = lc.split('-')[0];
  return (base in NEWSLETTER ? base : 'en') as NewsletterLocale;
}
