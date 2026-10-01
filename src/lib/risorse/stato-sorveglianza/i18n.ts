import type { AppLocale } from '@/lib/i18n/config';

/**
 * Testi della risorsa "I numeri della sorveglianza sul lavoro": la lettura d'insieme
 * dei provvedimenti dell'osservatorio, in undici lingue. I numeri NON stanno qui: si
 * calcolano a build time dallo stesso data.json dell'osservatorio, cosi' le due risorse
 * non possono divergere. Qui ci sono solo le parole intorno ai numeri.
 *
 * La nota metodologica e' obbligatoria e viene prima dei grafici: il registro raccoglie
 * cio' che le autorita' PUBBLICANO, e le pratiche di pubblicazione cambiano moltissimo
 * (la Spagna pubblica ogni risoluzione, la Germania quasi nessuna). Un grafico per paese
 * sarebbe una classifica falsa, per questo non c'e'.
 */

export interface StatoStrings {
  kicker: string;
  nomeBreve: string;
  h1: string;
  lede: string;
  // nota metodologica, prima di tutto
  avvertenza: string;
  // stat tiles
  tProvvedimenti: string;
  tPaesi: string;
  tSanzioni: string;
  tArco: string;
  tSanzioniNota: (n: number) => string;
  // grafici
  gAnniTitolo: string;
  gAnniNota: string;
  inCorso: string;
  gTemiTitolo: string;
  gTemiNota: string;
  gMulteTitolo: string;
  gMulteNota: string;
  // sintesi e chiusura
  sintesiTitolo: string;
  chiusura: string;
  vaiOsservatorio: string;
  metaTitle: string;
  metaDesc: string;
}

const it: StatoStrings = {
  kicker: 'Risorse',
  nomeBreve: 'La sorveglianza sul lavoro in numeri',
  h1: 'La sorveglianza sul lavoro in Europa, in numeri',
  lede: 'Cosa dicono, messi in fila, i provvedimenti che le autorità per la protezione dei dati hanno emesso su geolocalizzazione, videosorveglianza e presenze dei lavoratori. Ogni numero è calcolato dall’osservatorio, e ogni riga di quell’osservatorio porta il link al documento ufficiale.',
  avvertenza: 'Un avvertimento prima dei numeri. Questi dati contano i provvedimenti che le autorità PUBBLICANO, non quelli che emettono: la Spagna mette online ogni risoluzione, la Germania quasi nessuna. Quindi non è una classifica di dove si sorveglia di più, e per questo non troverai qui un grafico per paese. È una fotografia di cosa è pubblico e verificabile, niente di più.',
  tProvvedimenti: 'provvedimenti',
  tPaesi: 'paesi',
  tSanzioni: 'in multe verificate',
  tArco: 'arco di tempo',
  tSanzioniNota: (n) => `su ${n} provvedimenti con l’importo scritto per esteso`,
  gAnniTitolo: 'Provvedimenti per anno',
  gAnniNota: 'I provvedimenti pubblicati sul controllo dei lavoratori sono aumentati dal 2020 a oggi, con un solo calo nel 2023.',
  inCorso: 'anno in corso',
  gTemiTitolo: 'Di cosa trattano',
  gTemiNota: 'Un provvedimento può toccare più temi, quindi la somma supera il totale.',
  gMulteTitolo: 'Le multe più alte',
  gMulteNota: 'Solo gli importi scritti per esteso nel documento dell’autorità.',
  sintesiTitolo: 'In breve',
  chiusura: 'Ogni cifra di questa pagina viene dall’osservatorio europeo, e lì ogni provvedimento porta il collegamento al documento originale. I dati si possono riusare citando GeoTapp.',
  vaiOsservatorio: 'Vai all’osservatorio, provvedimento per provvedimento',
  metaTitle: 'La sorveglianza sul lavoro in Europa, in numeri',
  metaDesc: 'I provvedimenti delle autorità europee su geolocalizzazione, videosorveglianza e presenze dei lavoratori, letti d’insieme: quanti, di cosa trattano, le multe più alte.',
};

const en: StatoStrings = {
  kicker: 'Resources',
  nomeBreve: 'Worker monitoring by the numbers',
  h1: 'Worker monitoring in Europe, by the numbers',
  lede: 'What the data protection authorities’ rulings on location tracking, camera surveillance and attendance say when you line them up. Every number is computed from the register, and every row of that register links to the official document.',
  avvertenza: 'A warning before the numbers. This counts the rulings authorities PUBLISH, not the ones they issue: Spain puts every resolution online, Germany almost none. So it is not a ranking of where workers are watched most, and that is why there is no per-country chart here. It is a picture of what is public and verifiable, nothing more.',
  tProvvedimenti: 'rulings',
  tPaesi: 'countries',
  tSanzioni: 'in verified fines',
  tArco: 'time span',
  tSanzioniNota: (n) => `across ${n} rulings with the amount written out`,
  gAnniTitolo: 'Rulings per year',
  gAnniNota: 'Published rulings on worker monitoring have increased since 2020, with a single dip in 2023.',
  inCorso: 'year in progress',
  gTemiTitolo: 'What they are about',
  gTemiNota: 'A ruling can touch several topics, so the total is higher than the count.',
  gMulteTitolo: 'The largest fines',
  gMulteNota: 'Only amounts written out in full in the authority’s document.',
  sintesiTitolo: 'In short',
  chiusura: 'Every figure on this page comes from the European register, where each ruling links to the original document. The data may be reused with credit to GeoTapp.',
  vaiOsservatorio: 'Go to the register, ruling by ruling',
  metaTitle: 'Worker monitoring in Europe, by the numbers',
  metaDesc: 'Rulings from European data protection authorities on GPS, camera surveillance and attendance, read together: how many, what about, the largest fines.',
};

const de: StatoStrings = {
  kicker: 'Ressourcen',
  nomeBreve: 'Überwachung am Arbeitsplatz in Zahlen',
  h1: 'Überwachung am Arbeitsplatz in Europa, in Zahlen',
  lede: 'Was die Entscheidungen der Datenschutzbehörden zu Standortdaten, Videoüberwachung und Zeiterfassung ergeben, wenn man sie nebeneinanderlegt. Jede Zahl stammt aus dem Register, und jede Zeile dort verlinkt das amtliche Dokument.',
  avvertenza: 'Ein Hinweis vor den Zahlen. Gezählt werden die Entscheidungen, die Behörden VERÖFFENTLICHEN, nicht die, die sie erlassen: Spanien stellt jede Entscheidung online, Deutschland fast keine. Es ist also keine Rangliste, wo am meisten überwacht wird, und darum gibt es hier kein Länder-Diagramm. Es ist ein Bild dessen, was öffentlich und prüfbar ist, nicht mehr.',
  tProvvedimenti: 'Entscheidungen',
  tPaesi: 'Länder',
  tSanzioni: 'an geprüften Bußgeldern',
  tArco: 'Zeitraum',
  tSanzioniNota: (n) => `aus ${n} Entscheidungen mit ausgeschriebenem Betrag`,
  gAnniTitolo: 'Entscheidungen pro Jahr',
  gAnniNota: 'Die veröffentlichten Entscheidungen zur Überwachung am Arbeitsplatz sind seit 2020 gestiegen, mit einem einzigen Rückgang im Jahr 2023.',
  inCorso: 'laufendes Jahr',
  gTemiTitolo: 'Worum es geht',
  gTemiNota: 'Eine Entscheidung kann mehrere Themen betreffen, daher liegt die Summe über der Gesamtzahl.',
  gMulteTitolo: 'Die höchsten Bußgelder',
  gMulteNota: 'Nur Beträge, die im Dokument der Behörde ausgeschrieben sind.',
  sintesiTitolo: 'Kurz gefasst',
  chiusura: 'Jede Zahl auf dieser Seite stammt aus dem europäischen Register, wo jede Entscheidung das Originaldokument verlinkt. Die Daten dürfen mit Nennung von GeoTapp weiterverwendet werden.',
  vaiOsservatorio: 'Zum Register, Entscheidung für Entscheidung',
  metaTitle: 'Überwachung am Arbeitsplatz in Europa, in Zahlen',
  metaDesc: 'Entscheidungen europäischer Datenschutzbehörden zu GPS, Videoüberwachung und Zeiterfassung, zusammen gelesen: wie viele, worum, die höchsten Bußgelder.',
};

const fr: StatoStrings = {
  kicker: 'Ressources',
  nomeBreve: 'La surveillance au travail en chiffres',
  h1: 'La surveillance au travail en Europe, en chiffres',
  lede: 'Ce que disent, mises bout à bout, les décisions des autorités de protection des données sur la géolocalisation, la vidéosurveillance et les présences des travailleurs. Chaque chiffre est calculé à partir du registre, et chaque ligne de ce registre renvoie au document officiel.',
  avvertenza: 'Un avertissement avant les chiffres. On compte les décisions que les autorités PUBLIENT, pas celles qu’elles rendent : l’Espagne met en ligne chaque décision, l’Allemagne presque aucune. Ce n’est donc pas un classement des pays où l’on surveille le plus, et c’est pourquoi vous ne trouverez pas ici de graphique par pays. C’est une photographie de ce qui est public et vérifiable, rien de plus.',
  tProvvedimenti: 'décisions',
  tPaesi: 'pays',
  tSanzioni: 'd’amendes vérifiées',
  tArco: 'période couverte',
  tSanzioniNota: (n) => `sur ${n} décisions dont le montant est écrit en toutes lettres`,
  gAnniTitolo: 'Décisions par an',
  gAnniNota: 'Les décisions publiées sur le contrôle des travailleurs ont augmenté depuis 2020, avec un seul recul en 2023.',
  inCorso: 'année en cours',
  gTemiTitolo: 'Ce dont elles traitent',
  gTemiNota: 'Une décision peut toucher plusieurs thèmes, le total dépasse donc le nombre de décisions.',
  gMulteTitolo: 'Les amendes les plus élevées',
  gMulteNota: 'Seuls les montants écrits en toutes lettres dans le document de l’autorité.',
  sintesiTitolo: 'En bref',
  chiusura: 'Chaque chiffre de cette page provient du registre européen, où chaque décision renvoie au document d’origine. Les données sont réutilisables en citant GeoTapp.',
  vaiOsservatorio: 'Aller au registre, décision par décision',
  metaTitle: 'La surveillance au travail en Europe, en chiffres',
  metaDesc: 'Les décisions des autorités européennes sur le GPS, la vidéosurveillance et les présences, lues ensemble : combien, sur quoi, les amendes les plus élevées.',
};

const es: StatoStrings = {
  kicker: 'Recursos',
  nomeBreve: 'La vigilancia laboral en cifras',
  h1: 'La vigilancia laboral en Europa, en cifras',
  lede: 'Lo que dicen, puestas en fila, las resoluciones que las autoridades de protección de datos han dictado sobre geolocalización, videovigilancia y registro de la jornada de los trabajadores. Cada cifra se calcula a partir del registro, y cada fila de ese registro enlaza el documento oficial.',
  avvertenza: 'Una advertencia antes de las cifras. Estos datos cuentan las resoluciones que las autoridades PUBLICAN, no las que dictan: España pone en línea cada resolución, Alemania casi ninguna. Por tanto no es una clasificación de dónde se vigila más, y por eso aquí no encontrarás un gráfico por país. Es una fotografía de lo que es público y verificable, nada más.',
  tProvvedimenti: 'resoluciones',
  tPaesi: 'países',
  tSanzioni: 'en multas verificadas',
  tArco: 'periodo cubierto',
  tSanzioniNota: (n) => `de ${n} resoluciones con el importe escrito por extenso`,
  gAnniTitolo: 'Resoluciones por año',
  gAnniNota: 'Las resoluciones publicadas sobre el control de los trabajadores han aumentado desde 2020 hasta hoy, con un solo descenso en 2023.',
  inCorso: 'año en curso',
  gTemiTitolo: 'De qué tratan',
  gTemiNota: 'Una resolución puede tocar varios temas, así que la suma supera el total.',
  gMulteTitolo: 'Las multas más altas',
  gMulteNota: 'Solo los importes escritos por extenso en el documento de la autoridad.',
  sintesiTitolo: 'En resumen',
  chiusura: 'Cada cifra de esta página procede del registro europeo, y allí cada resolución enlaza el documento original. Los datos se pueden reutilizar citando a GeoTapp.',
  vaiOsservatorio: 'Ir al registro, resolución por resolución',
  metaTitle: 'La vigilancia laboral en Europa, en cifras',
  metaDesc: 'Las resoluciones de las autoridades europeas sobre control laboral, leídas en conjunto: cuántas son, de qué tratan y las multas más altas.',
};

const pt: StatoStrings = {
  kicker: 'Recursos',
  nomeBreve: 'A vigilância no trabalho em números',
  h1: 'A vigilância no trabalho na Europa, em números',
  lede: 'O que dizem, postas em fila, as decisões que as autoridades de proteção de dados emitiram sobre geolocalização, videovigilância e assiduidade dos trabalhadores. Cada número é calculado a partir do registo, e cada linha desse registo liga ao documento oficial.',
  avvertenza: 'Um aviso antes dos números. Estes dados contam as decisões que as autoridades PUBLICAM, não as que emitem: a Espanha põe online cada resolução, a Alemanha quase nenhuma. Por isso não é uma classificação de onde se vigia mais, e por isso não há aqui um gráfico por país. É uma fotografia do que é público e verificável, nada mais.',
  tProvvedimenti: 'decisões',
  tPaesi: 'países',
  tSanzioni: 'em coimas verificadas',
  tArco: 'período coberto',
  tSanzioniNota: (n) => `em ${n} decisões com o montante escrito por extenso`,
  gAnniTitolo: 'Decisões por ano',
  gAnniNota: 'As decisões publicadas sobre o controlo dos trabalhadores aumentaram desde 2020 até hoje, com uma única descida em 2023.',
  inCorso: 'ano em curso',
  gTemiTitolo: 'Sobre o que tratam',
  gTemiNota: 'Uma decisão pode tocar vários temas, por isso a soma supera o total.',
  gMulteTitolo: 'As coimas mais altas',
  gMulteNota: 'Apenas os montantes escritos por extenso no documento da autoridade.',
  sintesiTitolo: 'Em resumo',
  chiusura: 'Cada número desta página provém do registo europeu, e aí cada decisão liga ao documento original. Os dados podem ser reutilizados citando a GeoTapp.',
  vaiOsservatorio: 'Ir para o registo, decisão a decisão',
  metaTitle: 'A vigilância no trabalho na Europa, em números',
  metaDesc: 'As decisões das autoridades europeias sobre controlo laboral, lidas em conjunto: quantas são, sobre o que tratam e as coimas mais altas.',
};

const nl: StatoStrings = {
  kicker: 'Bronnen',
  nomeBreve: 'Het toezicht op het werk in cijfers',
  h1: 'Het toezicht op het werk in Europa, in cijfers',
  lede: 'Wat de besluiten die de toezichthouders voor gegevensbescherming hebben genomen over geolocatie, cameratoezicht en aanwezigheid van werknemers zeggen, als u ze op een rij zet. Elk cijfer is berekend uit het register, en elke regel van dat register bevat de link naar het officiële document.',
  avvertenza: 'Een waarschuwing voor de cijfers. Geteld worden de besluiten die toezichthouders PUBLICEREN, niet die ze nemen: Spanje zet elk besluit online, Duitsland bijna geen. Het is dus geen ranglijst van waar het meest wordt bewaakt, en daarom vindt u hier geen grafiek per land. Het is een momentopname van wat openbaar en controleerbaar is, niets meer.',
  tProvvedimenti: 'besluiten',
  tPaesi: 'landen',
  tSanzioni: 'aan geverifieerde boetes',
  tArco: 'periode',
  tSanzioniNota: (n) => `uit ${n} besluiten met het bedrag voluit`,
  gAnniTitolo: 'Besluiten per jaar',
  gAnniNota: 'De gepubliceerde besluiten over het controleren van werknemers zijn sinds 2020 toegenomen, met slechts één daling in 2023.',
  inCorso: 'lopend jaar',
  gTemiTitolo: 'Waarover ze gaan',
  gTemiNota: 'Een besluit kan meerdere onderwerpen raken, dus de som ligt boven het totaal.',
  gMulteTitolo: 'De hoogste boetes',
  gMulteNota: 'Alleen de bedragen die voluit in het document van de toezichthouder staan.',
  sintesiTitolo: 'In het kort',
  chiusura: 'Elk cijfer op deze pagina komt uit het Europese register, en daar bevat elk besluit de link naar het originele document. De gegevens mogen worden hergebruikt met vermelding van GeoTapp.',
  vaiOsservatorio: 'Naar het register, besluit voor besluit',
  metaTitle: 'Het toezicht op het werk in Europa, in cijfers',
  metaDesc: 'Besluiten van Europese toezichthouders over geolocatie, cameratoezicht en aanwezigheid van werknemers, samen gelezen: hoeveel, waarover, de hoogste boetes.',
};

const sv: StatoStrings = {
  kicker: 'Resurser',
  nomeBreve: 'Overvakning i arbetslivet i siffror',
  h1: 'Europeisk tillsyn av kontroll i arbetslivet, i siffror',
  lede: 'Vad dataskyddsmyndigheternas beslut om positionsdata, kamerabevakning och narvaro sager nar man laegger dem bredvid varandra. Varje siffra beraknas fran registret, och varje rad dar lankar till originaldokumentet.',
  avvertenza: 'En varning fore siffrorna. Har raknas de beslut myndigheterna PUBLICERAR, inte de de fattar: Spanien laegger ut varje beslut, Tyskland nastan inga. Det ar alltsa ingen rankning av var det overvakas mest, och darfor finns ingen graf per land. Det ar en bild av vad som ar offentligt och kontrollerbart, inte mer.',
  tProvvedimenti: 'beslut',
  tPaesi: 'lander',
  tSanzioni: 'i verifierade sanktionsavgifter',
  tArco: 'tidsspann',
  tSanzioniNota: (n) => `fran ${n} beslut med beloppet utskrivet`,
  gAnniTitolo: 'Beslut per ar',
  gAnniNota: 'De publicerade besluten om kontroll i arbetslivet har okat ar for ar sedan 2020.',
  inCorso: 'pagaende ar',
  gTemiTitolo: 'Vad de handlar om',
  gTemiNota: 'Ett beslut kan rora flera amnen, sa summan overstiger antalet.',
  gMulteTitolo: 'De hogsta avgifterna',
  gMulteNota: 'Endast belopp som skrivs ut i myndighetens dokument.',
  sintesiTitolo: 'Kort sagt',
  chiusura: 'Varje siffra pa denna sida kommer fran det europeiska registret, dar varje beslut lankar till originaldokumentet. Uppgifterna far ateranvandas med hanvisning till GeoTapp.',
  vaiOsservatorio: 'Till registret, beslut for beslut',
  metaTitle: 'Overvakning i arbetslivet i Europa, i siffror',
  metaDesc: 'Beslut fran europeiska dataskyddsmyndigheter om GPS, kamerabevakning och narvaro, lasta tillsammans: hur manga, om vad, de hogsta avgifterna.',
};

const da: StatoStrings = {
  kicker: 'Ressourcer',
  nomeBreve: 'Overvågning på arbejdet i tal',
  h1: 'Overvågning på arbejdspladsen i Europa, i tal',
  lede: 'Hvad siger de afgørelser, som databeskyttelsesmyndighederne har truffet om geolokalisering, videoovervågning og fremmøde, når man stiller dem op ved siden af hinanden? Hvert tal er beregnet ud fra registret, og hver række i registret har link til det officielle dokument.',
  avvertenza: 'En advarsel før tallene. Disse data tæller de afgørelser, myndighederne OFFENTLIGGØR, ikke dem, de træffer: Spanien lægger hver afgørelse online, Tyskland næsten ingen. Det er derfor ikke en rangliste over, hvor der overvåges mest, og derfor finder du ikke her en graf pr. land. Det er et billede af, hvad der er offentligt og kan kontrolleres, ikke mere.',
  tProvvedimenti: 'afgørelser',
  tPaesi: 'lande',
  tSanzioni: 'i kontrollerede bøder',
  tArco: 'tidsrum',
  tSanzioniNota: (n) => `af ${n} afgørelser med beløbet skrevet ud`,
  gAnniTitolo: 'Afgørelser pr. år',
  gAnniNota: 'De offentliggjorte afgørelser om kontrol af medarbejdere er steget fra 2020 til i dag, med kun ét fald i 2023.',
  inCorso: 'igangværende år',
  gTemiTitolo: 'Hvad de handler om',
  gTemiNota: 'En afgørelse kan røre ved flere emner, så summen overstiger totalen.',
  gMulteTitolo: 'De højeste bøder',
  gMulteNota: 'Kun beløb, der er skrevet ud i myndighedens dokument.',
  sintesiTitolo: 'Kort sagt',
  chiusura: 'Hvert tal på denne side kommer fra det europæiske register, og dér har hver afgørelse link til det oprindelige dokument. Data kan genbruges med kildeangivelse til GeoTapp.',
  vaiOsservatorio: 'Gå til registret, afgørelse for afgørelse',
  metaTitle: 'Overvågning på arbejdspladsen i Europa, i tal',
  metaDesc: 'Afgørelser fra europæiske myndigheder om geolokalisering, videoovervågning og fremmøde, set samlet: hvor mange, hvad de handler om, de højeste bøder.',
};

const nb: StatoStrings = {
  kicker: 'Ressurser',
  nomeBreve: 'Overvaking i arbeidslivet i tall',
  h1: 'Europeisk handheving av kontroll i arbeidslivet, i tall',
  lede: 'Hva datatilsynenes vedtak om posisjonsdata, kameraovervaking og oppmote sier nar man legger dem ved siden av hverandre. Hvert tall er beregnet fra registeret, og hver rad der lenker til originaldokumentet.',
  avvertenza: 'En advarsel for tallene. Her telles vedtakene myndighetene PUBLISERER, ikke de de fatter: Spania legger ut hvert vedtak, Tyskland nesten ingen. Det er altsa ingen rangering av hvor det overvakes mest, og derfor finnes ingen graf per land. Det er et bilde av hva som er offentlig og kontrollerbart, ikke mer.',
  tProvvedimenti: 'vedtak',
  tPaesi: 'land',
  tSanzioni: 'i verifiserte gebyrer',
  tArco: 'tidsrom',
  tSanzioniNota: (n) => `fra ${n} vedtak med belopet skrevet ut`,
  gAnniTitolo: 'Vedtak per ar',
  gAnniNota: 'De publiserte vedtakene om kontroll i arbeidslivet har okt ar for ar siden 2020.',
  inCorso: 'innevaerende ar',
  gTemiTitolo: 'Hva de handler om',
  gTemiNota: 'Et vedtak kan berore flere temaer, sa summen overstiger antallet.',
  gMulteTitolo: 'De hoyeste gebyrene',
  gMulteNota: 'Bare belop skrevet ut i myndighetens dokument.',
  sintesiTitolo: 'Kort sagt',
  chiusura: 'Hvert tall pa denne siden kommer fra det europeiske registeret, der hvert vedtak lenker til originaldokumentet. Dataene kan gjenbrukes med kreditering av GeoTapp.',
  vaiOsservatorio: 'Til registeret, vedtak for vedtak',
  metaTitle: 'Overvaking i arbeidslivet i Europa, i tall',
  metaDesc: 'Vedtak fra europeiske datatilsyn om GPS, kameraovervaking og oppmote, lest sammen: hvor mange, om hva, de hoyeste gebyrene.',
};

const ru: StatoStrings = {
  kicker: 'Ресурсы',
  nomeBreve: 'Контроль на работе в цифрах',
  h1: 'Европейский надзор за контролем работников, в цифрах',
  lede: 'Что говорят вместе решения органов по защите данных о геолокации, видеонаблюдении и учёте рабочего времени. Каждая цифра вычислена из реестра, и каждая его строка ведёт к официальному документу.',
  avvertenza: 'Предупреждение перед цифрами. Считаются решения, которые органы ПУБЛИКУЮТ, а не выносят: Испания выкладывает каждое решение, Германия почти ни одного. Это не рейтинг того, где следят больше, и поэтому здесь нет диаграммы по странам. Это картина того, что публично и проверяемо, не более.',
  tProvvedimenti: 'решений',
  tPaesi: 'стран',
  tSanzioni: 'проверенных штрафов',
  tArco: 'период',
  tSanzioniNota: (n) => `из ${n} решений с указанной суммой`,
  gAnniTitolo: 'Решений в год',
  gAnniNota: 'Число опубликованных решений о контроле работников растёт год за годом с 2020.',
  inCorso: 'текущий год',
  gTemiTitolo: 'О чём они',
  gTemiNota: 'Одно решение может касаться нескольких тем, поэтому сумма больше числа.',
  gMulteTitolo: 'Самые крупные штрафы',
  gMulteNota: 'Только суммы, прописанные в документе органа.',
  sintesiTitolo: 'Коротко',
  chiusura: 'Каждая цифра на этой странице взята из европейского реестра, где каждое решение ведёт к оригиналу. Данные можно повторно использовать со ссылкой на GeoTapp.',
  vaiOsservatorio: 'К реестру, решение за решением',
  metaTitle: 'Контроль на работе в Европе, в цифрах',
  metaDesc: 'Решения европейских органов по защите данных о GPS, видеонаблюдении и учёте времени: сколько, о чём, самые крупные штрафы.',
};

const BY_LOCALE: Record<AppLocale, StatoStrings> = {
  it, en, de, fr, es, pt, nl, sv, da, nb, ru,
  'en-us': en, 'en-gb': en, 'en-au': en, 'en-ie': en, 'en-ca': en,
};

export function statoStrings(locale: AppLocale): StatoStrings {
  return BY_LOCALE[locale] ?? it;
}
