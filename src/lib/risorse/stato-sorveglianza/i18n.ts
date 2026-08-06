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
  h1: 'L’enforcement europeo sul controllo dei lavoratori, in numeri',
  lede: 'Cosa dicono, messi in fila, i provvedimenti che le autorita’ per la protezione dei dati hanno emesso su geolocalizzazione, videosorveglianza e presenze dei lavoratori. Ogni numero e’ calcolato dall’osservatorio, e ogni riga di quell’osservatorio porta il link al documento ufficiale.',
  avvertenza: 'Un avvertimento prima dei numeri. Questi dati contano i provvedimenti che le autorita’ PUBBLICANO, non quelli che emettono: la Spagna mette online ogni risoluzione, la Germania quasi nessuna. Quindi non e’ una classifica di dove si sorveglia di piu’, e per questo non troverai qui un grafico per paese. E’ una fotografia di cosa e’ pubblico e verificabile, niente di piu’.',
  tProvvedimenti: 'provvedimenti',
  tPaesi: 'paesi',
  tSanzioni: 'in multe verificate',
  tArco: 'arco di tempo',
  tSanzioniNota: (n) => `su ${n} provvedimenti con l’importo scritto per esteso`,
  gAnniTitolo: 'Provvedimenti per anno',
  gAnniNota: 'I provvedimenti pubblicati sul controllo dei lavoratori sono cresciuti di anno in anno dal 2020.',
  inCorso: 'anno in corso',
  gTemiTitolo: 'Di cosa trattano',
  gTemiNota: 'Un provvedimento puo’ toccare piu’ temi, quindi la somma supera il totale.',
  gMulteTitolo: 'Le multe piu’ alte',
  gMulteNota: 'Solo gli importi scritti per esteso nel documento dell’autorita’.',
  sintesiTitolo: 'In breve',
  chiusura: 'Ogni cifra di questa pagina viene dall’osservatorio europeo, e li’ ogni provvedimento porta il collegamento al documento originale. I dati si possono riusare citando GeoTapp.',
  vaiOsservatorio: 'Vai all’osservatorio, provvedimento per provvedimento',
  metaTitle: 'La sorveglianza sul lavoro in Europa, in numeri',
  metaDesc: 'I provvedimenti delle autorita’ europee su geolocalizzazione, videosorveglianza e presenze dei lavoratori, letti d’insieme: quanti, di cosa trattano, le multe piu’ alte.',
};

const en: StatoStrings = {
  kicker: 'Resources',
  nomeBreve: 'Worker monitoring by the numbers',
  h1: 'European enforcement on worker monitoring, by the numbers',
  lede: 'What the data protection authorities’ rulings on location tracking, camera surveillance and attendance say when you line them up. Every number is computed from the register, and every row of that register links to the official document.',
  avvertenza: 'A warning before the numbers. This counts the rulings authorities PUBLISH, not the ones they issue: Spain puts every resolution online, Germany almost none. So it is not a ranking of where workers are watched most, and that is why there is no per-country chart here. It is a picture of what is public and verifiable, nothing more.',
  tProvvedimenti: 'rulings',
  tPaesi: 'countries',
  tSanzioni: 'in verified fines',
  tArco: 'time span',
  tSanzioniNota: (n) => `across ${n} rulings with the amount written out`,
  gAnniTitolo: 'Rulings per year',
  gAnniNota: 'Published rulings on worker monitoring have grown year on year since 2020.',
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
  nomeBreve: 'Ueberwachung am Arbeitsplatz in Zahlen',
  h1: 'Europaeische Durchsetzung zur Arbeitnehmerueberwachung, in Zahlen',
  lede: 'Was die Entscheidungen der Datenschutzbehoerden zu Standortdaten, Videoueberwachung und Zeiterfassung ergeben, wenn man sie nebeneinanderlegt. Jede Zahl stammt aus dem Register, und jede Zeile dort verlinkt das amtliche Dokument.',
  avvertenza: 'Ein Hinweis vor den Zahlen. Gezaehlt werden die Entscheidungen, die Behoerden VEROEFFENTLICHEN, nicht die, die sie erlassen: Spanien stellt jede Entscheidung online, Deutschland fast keine. Es ist also keine Rangliste, wo am meisten ueberwacht wird, und darum gibt es hier kein Laender-Diagramm. Es ist ein Bild dessen, was oeffentlich und pruefbar ist, nicht mehr.',
  tProvvedimenti: 'Entscheidungen',
  tPaesi: 'Laender',
  tSanzioni: 'an geprueften Bussgeldern',
  tArco: 'Zeitraum',
  tSanzioniNota: (n) => `aus ${n} Entscheidungen mit ausgeschriebenem Betrag`,
  gAnniTitolo: 'Entscheidungen pro Jahr',
  gAnniNota: 'Die veroeffentlichten Entscheidungen zur Arbeitnehmerueberwachung sind seit 2020 Jahr fuer Jahr gestiegen.',
  inCorso: 'laufendes Jahr',
  gTemiTitolo: 'Worum es geht',
  gTemiNota: 'Eine Entscheidung kann mehrere Themen betreffen, daher liegt die Summe ueber der Gesamtzahl.',
  gMulteTitolo: 'Die hoechsten Bussgelder',
  gMulteNota: 'Nur Betraege, die im Dokument der Behoerde ausgeschrieben sind.',
  sintesiTitolo: 'Kurz gefasst',
  chiusura: 'Jede Zahl auf dieser Seite stammt aus dem europaeischen Register, wo jede Entscheidung das Originaldokument verlinkt. Die Daten duerfen mit Nennung von GeoTapp weiterverwendet werden.',
  vaiOsservatorio: 'Zum Register, Entscheidung fuer Entscheidung',
  metaTitle: 'Arbeitnehmerueberwachung in Europa, in Zahlen',
  metaDesc: 'Entscheidungen europaeischer Datenschutzbehoerden zu GPS, Videoueberwachung und Zeiterfassung, zusammen gelesen: wie viele, worum, die hoechsten Bussgelder.',
};

const fr: StatoStrings = {
  kicker: 'Ressources',
  nomeBreve: 'La surveillance au travail en chiffres',
  h1: 'La sanction europeenne du controle des salaries, en chiffres',
  lede: 'Ce que disent, mises bout a bout, les decisions des autorites de protection des donnees sur la geolocalisation, la videosurveillance et les presences. Chaque chiffre est calcule a partir du registre, et chaque ligne du registre renvoie au document officiel.',
  avvertenza: 'Un avertissement avant les chiffres. On compte les decisions que les autorites PUBLIENT, pas celles qu’elles rendent : l’Espagne met en ligne chaque decision, l’Allemagne presque aucune. Ce n’est donc pas un classement de la ou l’on surveille le plus, et c’est pourquoi il n’y a pas de graphique par pays. C’est une image de ce qui est public et verifiable, rien de plus.',
  tProvvedimenti: 'decisions',
  tPaesi: 'pays',
  tSanzioni: 'd’amendes verifiees',
  tArco: 'periode',
  tSanzioniNota: (n) => `sur ${n} decisions dont le montant est ecrit en toutes lettres`,
  gAnniTitolo: 'Decisions par an',
  gAnniNota: 'Les decisions publiees sur le controle des salaries augmentent d’annee en annee depuis 2020.',
  inCorso: 'annee en cours',
  gTemiTitolo: 'Sur quoi elles portent',
  gTemiNota: 'Une decision peut toucher plusieurs themes, donc le total depasse le nombre.',
  gMulteTitolo: 'Les amendes les plus elevees',
  gMulteNota: 'Seuls les montants ecrits en toutes lettres dans le document de l’autorite.',
  sintesiTitolo: 'En bref',
  chiusura: 'Chaque chiffre de cette page vient du registre europeen, ou chaque decision renvoie au document d’origine. Les donnees sont reutilisables en citant GeoTapp.',
  vaiOsservatorio: 'Aller au registre, decision par decision',
  metaTitle: 'La surveillance au travail en Europe, en chiffres',
  metaDesc: 'Les decisions des autorites europeennes sur le GPS, la videosurveillance et les presences, lues ensemble : combien, sur quoi, les amendes les plus elevees.',
};

const es: StatoStrings = {
  kicker: 'Recursos',
  nomeBreve: 'La vigilancia laboral en cifras',
  h1: 'La sancion europea del control de los trabajadores, en cifras',
  lede: 'Lo que dicen, puestas en fila, las resoluciones de las autoridades de proteccion de datos sobre geolocalizacion, videovigilancia y registro de jornada. Cada cifra se calcula del registro, y cada fila del registro enlaza el documento oficial.',
  avvertenza: 'Una advertencia antes de las cifras. Se cuentan las resoluciones que las autoridades PUBLICAN, no las que dictan: Espana pone en linea cada resolucion, Alemania casi ninguna. No es, por tanto, una clasificacion de donde se vigila mas, y por eso aqui no hay grafico por pais. Es una imagen de lo que es publico y verificable, nada mas.',
  tProvvedimenti: 'resoluciones',
  tPaesi: 'paises',
  tSanzioni: 'en multas verificadas',
  tArco: 'periodo',
  tSanzioniNota: (n) => `de ${n} resoluciones con el importe escrito`,
  gAnniTitolo: 'Resoluciones por ano',
  gAnniNota: 'Las resoluciones publicadas sobre control de los trabajadores crecen ano tras ano desde 2020.',
  inCorso: 'ano en curso',
  gTemiTitolo: 'De que tratan',
  gTemiNota: 'Una resolucion puede tocar varios temas, asi que la suma supera el total.',
  gMulteTitolo: 'Las multas mas altas',
  gMulteNota: 'Solo importes escritos en el documento de la autoridad.',
  sintesiTitolo: 'En resumen',
  chiusura: 'Cada cifra de esta pagina viene del registro europeo, donde cada resolucion enlaza el documento original. Los datos se pueden reutilizar citando a GeoTapp.',
  vaiOsservatorio: 'Ir al registro, resolucion por resolucion',
  metaTitle: 'La vigilancia laboral en Europa, en cifras',
  metaDesc: 'Resoluciones de las autoridades europeas sobre GPS, videovigilancia y jornada, leidas juntas: cuantas, de que, las multas mas altas.',
};

const pt: StatoStrings = {
  kicker: 'Recursos',
  nomeBreve: 'A vigilancia no trabalho em numeros',
  h1: 'A aplicacao europeia sobre o controlo dos trabalhadores, em numeros',
  lede: 'O que dizem, alinhadas, as decisoes das autoridades de protecao de dados sobre geolocalizacao, videovigilancia e assiduidade. Cada numero e calculado a partir do registo, e cada linha do registo liga ao documento oficial.',
  avvertenza: 'Um aviso antes dos numeros. Contam-se as decisoes que as autoridades PUBLICAM, nao as que emitem: a Espanha poe online cada decisao, a Alemanha quase nenhuma. Nao e, portanto, uma classificacao de onde se vigia mais, e por isso nao ha aqui grafico por pais. E uma imagem do que e publico e verificavel, nada mais.',
  tProvvedimenti: 'decisoes',
  tPaesi: 'paises',
  tSanzioni: 'em coimas verificadas',
  tArco: 'periodo',
  tSanzioniNota: (n) => `de ${n} decisoes com o montante escrito`,
  gAnniTitolo: 'Decisoes por ano',
  gAnniNota: 'As decisoes publicadas sobre controlo dos trabalhadores crescem ano apos ano desde 2020.',
  inCorso: 'ano em curso',
  gTemiTitolo: 'Sobre o que sao',
  gTemiNota: 'Uma decisao pode tocar varios temas, por isso a soma supera o total.',
  gMulteTitolo: 'As coimas mais altas',
  gMulteNota: 'Apenas montantes escritos no documento da autoridade.',
  sintesiTitolo: 'Em resumo',
  chiusura: 'Cada numero desta pagina vem do registo europeu, onde cada decisao liga ao documento original. Os dados podem ser reutilizados citando a GeoTapp.',
  vaiOsservatorio: 'Ir para o registo, decisao a decisao',
  metaTitle: 'A vigilancia no trabalho na Europa, em numeros',
  metaDesc: 'Decisoes das autoridades europeias sobre GPS, videovigilancia e assiduidade, lidas em conjunto: quantas, sobre o que, as coimas mais altas.',
};

const nl: StatoStrings = {
  kicker: 'Bronnen',
  nomeBreve: 'Controle op het werk in cijfers',
  h1: 'Europese handhaving op werknemerscontrole, in cijfers',
  lede: 'Wat de besluiten van de toezichthouders over locatiegegevens, cameratoezicht en urenregistratie zeggen als je ze naast elkaar legt. Elk cijfer is berekend uit het register, en elke regel daarvan linkt naar het officiele document.',
  avvertenza: 'Een waarschuwing voor de cijfers. Geteld worden de besluiten die toezichthouders PUBLICEREN, niet die ze nemen: Spanje zet elk besluit online, Duitsland bijna geen. Het is dus geen ranglijst van waar het meest gecontroleerd wordt, en daarom is er geen grafiek per land. Het is een beeld van wat openbaar en controleerbaar is, niet meer.',
  tProvvedimenti: 'besluiten',
  tPaesi: 'landen',
  tSanzioni: 'aan geverifieerde boetes',
  tArco: 'periode',
  tSanzioniNota: (n) => `uit ${n} besluiten met het bedrag voluit`,
  gAnniTitolo: 'Besluiten per jaar',
  gAnniNota: 'De gepubliceerde besluiten over werknemerscontrole nemen sinds 2020 jaar na jaar toe.',
  inCorso: 'lopend jaar',
  gTemiTitolo: 'Waarover ze gaan',
  gTemiNota: 'Een besluit kan meerdere onderwerpen raken, dus de som is hoger dan het aantal.',
  gMulteTitolo: 'De hoogste boetes',
  gMulteNota: 'Alleen bedragen die voluit in het document van de toezichthouder staan.',
  sintesiTitolo: 'Kort',
  chiusura: 'Elk cijfer op deze pagina komt uit het Europese register, waar elk besluit naar het originele document linkt. De gegevens mogen met bronvermelding van GeoTapp worden hergebruikt.',
  vaiOsservatorio: 'Naar het register, besluit voor besluit',
  metaTitle: 'Controle op het werk in Europa, in cijfers',
  metaDesc: 'Besluiten van Europese toezichthouders over GPS, cameratoezicht en urenregistratie, samen gelezen: hoeveel, waarover, de hoogste boetes.',
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
  nomeBreve: 'Overvaagning paa arbejdet i tal',
  h1: 'Europaeisk haandhaevelse af kontrol paa arbejdet, i tal',
  lede: 'Hvad datatilsynenes afgorelser om lokationsdata, videoovervaagning og fremmode siger, naar man laegger dem ved siden af hinanden. Hvert tal er beregnet fra registret, og hver raekke der linker til det officielle dokument.',
  avvertenza: 'En advarsel for tallene. Her taelles de afgorelser, myndighederne OFFENTLIGGOR, ikke dem de traeffer: Spanien laegger hver afgorelse online, Tyskland naesten ingen. Det er derfor ikke en rangliste over, hvor der overvages mest, og derfor er der ingen graf pr. land. Det er et billede af, hvad der er offentligt og kontrollerbart, ikke mere.',
  tProvvedimenti: 'afgorelser',
  tPaesi: 'lande',
  tSanzioni: 'i verificerede boder',
  tArco: 'tidsrum',
  tSanzioniNota: (n) => `af ${n} afgorelser med belobet skrevet ud`,
  gAnniTitolo: 'Afgorelser pr. ar',
  gAnniNota: 'De offentliggjorte afgorelser om kontrol paa arbejdet er vokset ar for ar siden 2020.',
  inCorso: 'igangvaerende ar',
  gTemiTitolo: 'Hvad de handler om',
  gTemiNota: 'En afgorelse kan rore flere emner, sa summen overstiger antallet.',
  gMulteTitolo: 'De hojeste boder',
  gMulteNota: 'Kun belob skrevet ud i myndighedens dokument.',
  sintesiTitolo: 'Kort sagt',
  chiusura: 'Hvert tal paa denne side kommer fra det europaeiske register, hvor hver afgorelse linker til originaldokumentet. Data maa genbruges med kredit til GeoTapp.',
  vaiOsservatorio: 'Til registret, afgorelse for afgorelse',
  metaTitle: 'Overvaagning paa arbejdet i Europa, i tal',
  metaDesc: 'Afgorelser fra europaeiske datatilsyn om GPS, videoovervaagning og fremmode, laest sammen: hvor mange, om hvad, de hojeste boder.',
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
