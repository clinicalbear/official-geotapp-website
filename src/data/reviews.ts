export type Source = 'capterra' | 'trustpilot' | 'g2' | 'getapp' | 'softwareadvice';

/** A review's text in one language. */
export type LocalizedText = {
  title?: string;
  quote: string;
};

export type Review = {
  id: string;
  source: Source;
  sourceUrl: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;          // ISO YYYY-MM-DD
  /** BCP-47 language the review was originally written in. */
  origLang: string;
  reviewer: {
    displayName: string;
    role?: string;
    companySize?: string;
    industry?: string;
  };
  /** Verbatim original text as written by the reviewer. */
  original: LocalizedText;
  /** Translations keyed by BCP-47 locale. Does not include origLang. */
  translations: Record<string, LocalizedText>;
};

/**
 * Resolve the text to display for a given page locale.
 * Falls back to the original language when no translation exists.
 */
export function resolveReviewText(
  r: Review,
  locale: string,
): { text: LocalizedText; lang: string; isTranslated: boolean } {
  if (locale === r.origLang) {
    return { text: r.original, lang: r.origLang, isTranslated: false };
  }
  const t = r.translations[locale];
  if (t) {
    return { text: t, lang: locale, isTranslated: true };
  }
  return { text: r.original, lang: r.origLang, isTranslated: false };
}

export const REVIEWS: Review[] = [
  {
    id: 'capterra-2026-05-16-marika',
    source: 'capterra',
    sourceUrl: 'https://www.capterra.com/p/10041643/GeoTapp-Flow/',
    rating: 5,
    date: '2026-05-16',
    origLang: 'it',
    reviewer: {
      displayName: 'Marika B.',
      role: 'Informatore Scientifico',
      industry: 'Medical devices',
      companySize: '1',
    },
    original: {
      title: 'GeoTapp Flow è il top',
      quote:
        "Applicazione intuitiva e facile da utilizzare. Tutto viene inserito in maniera ordinata ed organizzata. Valido supporto nell'organizzazione del lavoro quotidiano. Consiglio vivamente di provarla, utile per tenere tutto sotto controllo.",
    },
    translations: {
      en: {
        title: 'GeoTapp Flow is the top',
        quote:
          'An intuitive, easy-to-use app. Everything is entered in a tidy, organized way. A solid support for organizing daily work. I highly recommend trying it, useful for keeping everything under control.',
      },
      de: {
        title: 'GeoTapp Flow ist spitze',
        quote:
          'Eine intuitive und einfach zu bedienende App. Alles wird ordentlich und übersichtlich erfasst. Eine wertvolle Unterstützung bei der Organisation der täglichen Arbeit. Ich empfehle wärmstens, sie auszuprobieren, nützlich, um alles im Griff zu behalten.',
      },
      fr: {
        title: "GeoTapp Flow, c'est le top",
        quote:
          "Une application intuitive et facile à utiliser. Tout est saisi de manière ordonnée et organisée. Un soutien précieux dans l'organisation du travail quotidien. Je recommande vivement de l'essayer, utile pour garder tout sous contrôle.",
      },
      es: {
        title: 'GeoTapp Flow es lo mejor',
        quote:
          'Una aplicación intuitiva y fácil de usar. Todo se introduce de forma ordenada y organizada. Un apoyo válido en la organización del trabajo diario. Recomiendo encarecidamente probarla, útil para tener todo bajo control.',
      },
      pt: {
        title: 'GeoTapp Flow é o melhor',
        quote:
          'Uma aplicação intuitiva e fácil de utilizar. Tudo é inserido de forma ordenada e organizada. Um apoio válido na organização do trabalho diário. Recomendo vivamente experimentá-la, útil para manter tudo sob controlo.',
      },
      nl: {
        title: 'GeoTapp Flow is top',
        quote:
          'Een intuïtieve en gebruiksvriendelijke app. Alles wordt netjes en georganiseerd ingevoerd. Een waardevolle ondersteuning bij het organiseren van het dagelijkse werk. Ik raad het ten zeerste aan om het te proberen, handig om alles onder controle te houden.',
      },
      ru: {
        title: 'GeoTapp Flow на высоте',
        quote:
          'Интуитивно понятное и простое в использовании приложение. Всё вносится аккуратно и организованно. Надёжная поддержка в организации повседневной работы. Очень рекомендую попробовать, полезно для того, чтобы держать всё под контролем.',
      },
      da: {
        title: 'GeoTapp Flow er det bedste',
        quote:
          'En intuitiv og brugervenlig app. Alt indtastes pænt og organiseret. En værdifuld støtte i organiseringen af det daglige arbejde. Jeg anbefaler varmt at prøve den, nyttig til at holde styr på det hele.',
      },
      sv: {
        title: 'GeoTapp Flow är bäst',
        quote:
          'En intuitiv och lättanvänd app. Allt matas in på ett ordnat och organiserat sätt. Ett värdefullt stöd i organiseringen av det dagliga arbetet. Jag rekommenderar verkligen att prova den, användbar för att hålla koll på allt.',
      },
      nb: {
        title: 'GeoTapp Flow er best',
        quote:
          'En intuitiv og brukervennlig app. Alt legges inn ryddig og organisert. En verdifull støtte i organiseringen av det daglige arbeidet. Jeg anbefaler virkelig å prøve den, nyttig for å holde kontroll på alt.',
      },
    },
  },
  {
    id: 'capterra-2026-05-11',
    source: 'capterra',
    sourceUrl: 'https://www.capterra.com/p/10041643/GeoTapp-Flow/',
    rating: 5,
    date: '2026-05-11',
    origLang: 'en',
    reviewer: {
      displayName: 'Capterra verified reviewer',
      industry: 'Events services',
      companySize: '51-200',
    },
    original: {
      title: 'A good app for a good work',
      quote:
        'Very intuitive, easy and quick to use. My favorite features is the ability to centralize geographic time stamps and expense reports in a single environment, eliminating wasted time and data misunderstandings. My experience with Geotapp Flow is positive for organizations seeking to eliminate administrative bottleneck and desire a transparent view of operation. The added value lies not only in the "control" but also in the availability of data, which allows for strategic planning based on numerical evidence rather than estimates.',
    },
    translations: {
      it: {
        title: 'Una buona app per un buon lavoro',
        quote:
          'Molto intuitiva, facile e veloce da usare. La funzione che preferisco è la possibilità di centralizzare timbrature geografiche e note spese in un unico ambiente, eliminando perdite di tempo e malintesi sui dati. La mia esperienza con GeoTapp Flow è positiva per le organizzazioni che vogliono eliminare i colli di bottiglia amministrativi e desiderano una visione trasparente delle operazioni. Il valore aggiunto non sta solo nel controllo, ma anche nella disponibilità dei dati, che permette una pianificazione strategica basata su evidenze numeriche invece che su stime.',
      },
      de: {
        title: 'Eine gute App für gute Arbeit',
        quote:
          'Sehr intuitiv, einfach und schnell zu bedienen. Meine Lieblingsfunktion ist die Möglichkeit, geografische Zeitstempel und Spesenabrechnungen in einer einzigen Umgebung zu zentralisieren, wodurch Zeitverlust und Missverständnisse bei den Daten vermieden werden. Meine Erfahrung mit GeoTapp Flow ist positiv für Organisationen, die administrative Engpässe beseitigen und einen transparenten Überblick über den Betrieb wünschen. Der Mehrwert liegt nicht nur in der Kontrolle, sondern auch in der Verfügbarkeit der Daten, die eine strategische Planung auf Basis von Zahlen statt Schätzungen ermöglicht.',
      },
      fr: {
        title: 'Une bonne app pour un bon travail',
        quote:
          "Très intuitive, facile et rapide à utiliser. Ma fonctionnalité préférée est la possibilité de centraliser les pointages géographiques et les notes de frais dans un seul environnement, éliminant les pertes de temps et les malentendus sur les données. Mon expérience avec GeoTapp Flow est positive pour les organisations qui cherchent à éliminer les goulots d'étranglement administratifs et souhaitent une vision transparente des opérations. La valeur ajoutée ne réside pas seulement dans le contrôle, mais aussi dans la disponibilité des données, qui permet une planification stratégique fondée sur des preuves chiffrées plutôt que sur des estimations.",
      },
      es: {
        title: 'Una buena app para un buen trabajo',
        quote:
          'Muy intuitiva, fácil y rápida de usar. Mi función favorita es la posibilidad de centralizar los fichajes geográficos y las notas de gastos en un único entorno, eliminando pérdidas de tiempo y malentendidos sobre los datos. Mi experiencia con GeoTapp Flow es positiva para las organizaciones que buscan eliminar los cuellos de botella administrativos y desean una visión transparente de las operaciones. El valor añadido no reside solo en el control, sino también en la disponibilidad de los datos, que permite una planificación estratégica basada en evidencias numéricas en lugar de estimaciones.',
      },
      pt: {
        title: 'Uma boa app para um bom trabalho',
        quote:
          'Muito intuitiva, fácil e rápida de utilizar. A funcionalidade que prefiro é a possibilidade de centralizar marcações geográficas e notas de despesas num único ambiente, eliminando perdas de tempo e mal-entendidos sobre os dados. A minha experiência com o GeoTapp Flow é positiva para as organizações que procuram eliminar os estrangulamentos administrativos e desejam uma visão transparente das operações. O valor acrescentado não reside apenas no controlo, mas também na disponibilidade dos dados, que permite um planeamento estratégico baseado em evidências numéricas em vez de estimativas.',
      },
      nl: {
        title: 'Een goede app voor goed werk',
        quote:
          "Zeer intuïtief, eenvoudig en snel in gebruik. Mijn favoriete functie is de mogelijkheid om geografische tijdregistraties en onkostennota's in één omgeving te centraliseren, waardoor tijdverlies en misverstanden over gegevens worden voorkomen. Mijn ervaring met GeoTapp Flow is positief voor organisaties die administratieve knelpunten willen wegnemen en een transparant beeld van de activiteiten wensen. De toegevoegde waarde zit niet alleen in de controle, maar ook in de beschikbaarheid van gegevens, die strategische planning op basis van cijfers in plaats van schattingen mogelijk maakt.",
      },
      ru: {
        title: 'Хорошее приложение для хорошей работы',
        quote:
          'Очень интуитивное, простое и быстрое в использовании. Моя любимая функция: возможность объединить геолокационные отметки времени и отчёты о расходах в единой среде, что устраняет потери времени и недоразумения с данными. Мой опыт работы с GeoTapp Flow положительный для организаций, стремящихся устранить административные узкие места и желающих иметь прозрачное представление о работе. Дополнительная ценность заключается не только в контроле, но и в доступности данных, что позволяет вести стратегическое планирование на основе числовых показателей, а не оценок.',
      },
      da: {
        title: 'En god app til godt arbejde',
        quote:
          'Meget intuitiv, nem og hurtig at bruge. Min yndlingsfunktion er muligheden for at samle geografiske tidsregistreringer og udgiftsrapporter i ét miljø, hvilket eliminerer spildtid og misforståelser om data. Min erfaring med GeoTapp Flow er positiv for organisationer, der ønsker at fjerne administrative flaskehalse og ønsker et gennemsigtigt overblik over driften. Merværdien ligger ikke kun i kontrollen, men også i tilgængeligheden af data, som muliggør strategisk planlægning baseret på tal frem for skøn.',
      },
      sv: {
        title: 'En bra app för bra arbete',
        quote:
          'Mycket intuitiv, enkel och snabb att använda. Min favoritfunktion är möjligheten att samla geografiska tidsstämplar och utläggsrapporter i en enda miljö, vilket eliminerar tidsförluster och missförstånd kring data. Min erfarenhet av GeoTapp Flow är positiv för organisationer som vill ta bort administrativa flaskhalsar och önskar en transparent bild av verksamheten. Mervärdet ligger inte bara i kontrollen, utan också i datatillgången, som möjliggör strategisk planering baserad på siffror i stället för uppskattningar.',
      },
      nb: {
        title: 'En god app for godt arbeid',
        quote:
          'Svært intuitiv, enkel og rask å bruke. Min favorittfunksjon er muligheten til å samle geografiske tidsstempler og utgiftsrapporter i ett miljø, noe som fjerner tidstap og misforståelser om data. Min erfaring med GeoTapp Flow er positiv for organisasjoner som ønsker å fjerne administrative flaskehalser og vil ha et transparent bilde av driften. Merverdien ligger ikke bare i kontrollen, men også i tilgjengeligheten av data, som muliggjør strategisk planlegging basert på tall i stedet for anslag.',
      },
    },
  },
  {
    id: 'trustpilot-2026-04-23-facchetti',
    source: 'trustpilot',
    sourceUrl: 'https://it.trustpilot.com/review/geotapp.com',
    rating: 5,
    date: '2026-04-23',
    origLang: 'it',
    reviewer: {
      displayName: 'Luca Facchetti',
    },
    original: {
      title: 'È una buona applicazione e facile da usare',
      quote: 'È una buona applicazione e facile da usare.',
    },
    translations: {
      en: {
        title: 'A good app and easy to use',
        quote: 'A good app and easy to use.',
      },
      de: {
        title: 'Eine gute und einfach zu bedienende App',
        quote: 'Eine gute und einfach zu bedienende App.',
      },
      fr: {
        title: 'Une bonne application et facile à utiliser',
        quote: 'Une bonne application et facile à utiliser.',
      },
      es: {
        title: 'Una buena aplicación y fácil de usar',
        quote: 'Una buena aplicación y fácil de usar.',
      },
      pt: {
        title: 'Uma boa aplicação e fácil de usar',
        quote: 'Uma boa aplicação e fácil de usar.',
      },
      nl: {
        title: 'Een goede app en makkelijk te gebruiken',
        quote: 'Een goede app en makkelijk te gebruiken.',
      },
      ru: {
        title: 'Хорошее приложение, простое в использовании',
        quote: 'Хорошее приложение, простое в использовании.',
      },
      da: {
        title: 'En god app og nem at bruge',
        quote: 'En god app og nem at bruge.',
      },
      sv: {
        title: 'En bra app och lätt att använda',
        quote: 'En bra app och lätt att använda.',
      },
      nb: {
        title: 'En god app og lett å bruke',
        quote: 'En god app og lett å bruke.',
      },
    },
  },
  {
    id: 'trustpilot-2026-04-23-berizzi',
    source: 'trustpilot',
    sourceUrl: 'https://it.trustpilot.com/review/geotapp.com',
    rating: 5,
    date: '2026-04-23',
    origLang: 'en',
    reviewer: {
      displayName: 'Marika Berizzi',
    },
    original: {
      title: 'Geotapp is a practical App',
      quote:
        'Geotapp is a practical App, simple to use and intuitive. It has everything I need. Highly recommended.',
    },
    translations: {
      it: {
        title: "Geotapp è un'app pratica",
        quote:
          "Geotapp è un'app pratica, semplice da usare e intuitiva. Ha tutto ciò che mi serve. Consigliatissima.",
      },
      de: {
        title: 'Geotapp ist eine praktische App',
        quote:
          'Geotapp ist eine praktische App, einfach zu bedienen und intuitiv. Sie hat alles, was ich brauche. Sehr zu empfehlen.',
      },
      fr: {
        title: 'Geotapp est une app pratique',
        quote:
          "Geotapp est une application pratique, simple à utiliser et intuitive. Elle a tout ce dont j'ai besoin. Vivement recommandée.",
      },
      es: {
        title: 'Geotapp es una app práctica',
        quote:
          'Geotapp es una aplicación práctica, sencilla de usar e intuitiva. Tiene todo lo que necesito. Muy recomendable.',
      },
      pt: {
        title: 'Geotapp é uma app prática',
        quote:
          'Geotapp é uma aplicação prática, simples de usar e intuitiva. Tem tudo o que preciso. Altamente recomendada.',
      },
      nl: {
        title: 'Geotapp is een praktische app',
        quote:
          'Geotapp is een praktische app, eenvoudig te gebruiken en intuïtief. Het heeft alles wat ik nodig heb. Echt aan te raden.',
      },
      ru: {
        title: 'Geotapp практичное приложение',
        quote:
          'Geotapp практичное приложение, простое в использовании и интуитивно понятное. В нём есть всё, что мне нужно. Очень рекомендую.',
      },
      da: {
        title: 'Geotapp er en praktisk app',
        quote:
          'Geotapp er en praktisk app, enkel at bruge og intuitiv. Den har alt, hvad jeg har brug for. Klart anbefalet.',
      },
      sv: {
        title: 'Geotapp är en praktisk app',
        quote:
          'Geotapp är en praktisk app, enkel att använda och intuitiv. Den har allt jag behöver. Verkligen rekommenderad.',
      },
      nb: {
        title: 'Geotapp er en praktisk app',
        quote:
          'Geotapp er en praktisk app, enkel å bruke og intuitiv. Den har alt jeg trenger. Sterkt anbefalt.',
      },
    },
  },
];
