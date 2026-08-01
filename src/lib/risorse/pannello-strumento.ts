/**
 * Testi dei pannelli laterali degli strumenti in /risorse/ (direzione L).
 * La griglia .tool è a due colonne: a sinistra lo strumento vero, a destra
 * questo pannello che racconta cosa fa e perché serve. Prima la colonna
 * destra restava vuota (richiesta di Mike, 01/08/2026).
 *
 * Voce di Michele, ricreata per lingua (mai tradotta alla lettera):
 * "tu" nei mercati informali, Sie/vous/u/você/вы dove il sito è formale.
 */

export type PannelloToolKey =
  | 'generatore-informativa'
  | 'sanzioni-gps'
  | 'autovalutazione'
  | 'conservazione';

export interface PannelloCopy {
  title: string;
  p1: string;
  p2: string;
}

const PANNELLI: Record<PannelloToolKey, Record<string, PannelloCopy>> = {
  'generatore-informativa': {
    it: {
      title: "Perché ti serve un'informativa",
      p1: "Se rilevi la posizione dei tuoi lavoratori, anche solo alla timbratura, l'art. 13 del GDPR ti chiede di dirglielo per iscritto prima di cominciare: chi tratta i dati, per quale scopo, quando scatta la rilevazione e per quanto tempo la conservi. Senza quel documento anche il sistema più rispettoso parte già in difetto.",
      p2: "Questo generatore prende i tuoi dati, il tuo logo e le tue risposte e impagina una bozza di informativa in PDF, pronta da far rifinire al tuo consulente e consegnare alle squadre. Tutto avviene nel tuo browser, e in un minuto il punto di partenza ce l'hai.",
    },
    en: {
      title: 'Why you need a privacy notice',
      p1: "If you record your workers' location, even just at clock-in, Art. 13 GDPR expects you to tell them in writing before you start: who processes the data, for what purpose, when location is captured and how long it is kept. Without that document even the most respectful setup starts on the wrong foot.",
      p2: 'The generator takes your details, your logo and your answers and lays out a draft notice as a PDF, ready for your advisor to polish and your teams to receive. Everything happens in your browser, and the starting point takes about a minute.',
    },
    de: {
      title: 'Warum Sie eine Datenschutzerklärung brauchen',
      p1: 'Wenn Sie den Standort Ihrer Mitarbeiter erfassen, und sei es nur beim Einstempeln, verlangt Art. 13 DSGVO, dass Sie es ihnen vorher schriftlich mitteilen: wer die Daten verarbeitet, zu welchem Zweck, wann der Standort erfasst wird und wie lange er gespeichert bleibt. Ohne dieses Dokument startet auch das korrekteste System schon mit einem Mangel.',
      p2: 'Der Generator nimmt Ihre Angaben, Ihr Logo und Ihre Antworten und setzt daraus einen Entwurf als PDF, den Ihr Berater verfeinert und Ihre Teams erhalten. Alles bleibt in Ihrem Browser, und der Ausgangspunkt steht in einer Minute.',
    },
    fr: {
      title: "Pourquoi il vous faut une note d'information",
      p1: "Si vous relevez la position de vos salariés, même seulement au pointage, l'art. 13 du RGPD vous demande de le leur dire par écrit avant de commencer : qui traite les données, dans quel but, quand la position est relevée et combien de temps elle est conservée. Sans ce document, même le système le plus respectueux part déjà en tort.",
      p2: 'Le générateur prend vos informations, votre logo et vos réponses et met en page un projet de note en PDF, prêt à passer chez votre conseil et à remettre aux équipes. Tout se passe dans votre navigateur, et le point de départ tient en une minute.',
    },
    es: {
      title: 'Por qué necesitas un aviso de privacidad',
      p1: 'Si registras la ubicación de tus trabajadores, aunque sea solo al fichar, el art. 13 del RGPD te pide decírselo por escrito antes de empezar: quién trata los datos, con qué finalidad, cuándo se registra la posición y cuánto tiempo se conserva. Sin ese documento, hasta el sistema más respetuoso arranca ya en falta.',
      p2: 'El generador toma tus datos, tu logotipo y tus respuestas y monta un borrador de aviso en PDF, listo para que tu asesor lo afine y tus equipos lo reciban. Todo ocurre en tu navegador, y el punto de partida lo tienes en un minuto.',
    },
    nl: {
      title: 'Waarom u een privacyverklaring nodig hebt',
      p1: 'Registreert u de locatie van uw werknemers, al is het alleen bij het inklokken, dan vraagt art. 13 AVG dat u het hun vooraf schriftelijk vertelt: wie de gegevens verwerkt, met welk doel, wanneer de locatie wordt vastgelegd en hoe lang die bewaard blijft. Zonder dat document begint ook het netste systeem al met een gebrek.',
      p2: 'De generator neemt uw gegevens, uw logo en uw antwoorden en zet daar een conceptverklaring van op in pdf, klaar om door uw adviseur te laten bijschaven en aan de ploegen te overhandigen. Alles gebeurt in uw browser, en het vertrekpunt staat er binnen een minuut.',
    },
    pt: {
      title: 'Porque precisa de uma informação de privacidade',
      p1: 'Se regista a localização dos seus trabalhadores, nem que seja só ao picar o ponto, o art. 13 do RGPD pede que lho diga por escrito antes de começar: quem trata os dados, com que finalidade, quando a posição é registada e por quanto tempo fica guardada. Sem esse documento, até o sistema mais respeitador parte já em falta.',
      p2: 'O gerador pega nos seus dados, no seu logótipo e nas suas respostas e compõe um rascunho de informação em PDF, pronto para o seu consultor afinar e para entregar às equipas. Tudo acontece no seu navegador, e o ponto de partida fica pronto num minuto.',
    },
    da: {
      title: 'Derfor skal du bruge en oplysningstekst',
      p1: "Registrerer du dine medarbejderes position, om så kun ved indstempling, kræver GDPR's art. 13, at du fortæller dem det skriftligt, før du går i gang: hvem der behandler oplysningerne, med hvilket formål, hvornår positionen registreres, og hvor længe den gemmes. Uden det dokument starter selv det pæneste system allerede med en mangel.",
      p2: 'Generatoren tager dine oplysninger, dit logo og dine svar og sætter et udkast op som pdf, klar til at din rådgiver finpudser det, og dine hold får det udleveret. Alt sker i din browser, og udgangspunktet står klar på et minut.',
    },
    sv: {
      title: 'Därför behöver du en informationstext',
      p1: 'Registrerar du dina anställdas position, om så bara vid instämpling, kräver GDPR art. 13 att du berättar det skriftligt innan du börjar: vem som behandlar uppgifterna, i vilket syfte, när positionen registreras och hur länge den sparas. Utan det dokumentet börjar även det snyggaste systemet redan med en brist.',
      p2: 'Generatorn tar dina uppgifter, din logotyp och dina svar och sätter ihop ett utkast som pdf, redo för din rådgivare att finslipa och för dina team att få i handen. Allt sker i din webbläsare, och utgångspunkten står klar på en minut.',
    },
    nb: {
      title: 'Derfor trenger du en informasjonstekst',
      p1: 'Registrerer du posisjonen til arbeidstakerne dine, om så bare ved innstempling, krever GDPR art. 13 at du forteller dem det skriftlig før du starter: hvem som behandler opplysningene, med hvilket formål, når posisjonen registreres og hvor lenge den lagres. Uten det dokumentet starter selv det ryddigste systemet allerede med en mangel.',
      p2: 'Generatoren tar opplysningene dine, logoen din og svarene dine og setter opp et utkast som pdf, klart til at rådgiveren din finpusser det og lagene får det utlevert. Alt skjer i nettleseren din, og utgangspunktet står klart på et minutt.',
    },
    ru: {
      title: 'Зачем вам уведомление о геолокации',
      p1: 'Если вы фиксируете местоположение работников, пусть даже только при отметке прихода, ст. 13 GDPR требует сообщить им об этом письменно до запуска: кто обрабатывает данные, с какой целью, когда фиксируется позиция и как долго она хранится. Без этого документа даже самая аккуратная система стартует уже с нарушением.',
      p2: 'Генератор берёт ваши данные, логотип и ответы и собирает черновик уведомления в PDF, который остаётся довести вашему юристу и вручить бригадам. Всё происходит в вашем браузере, и отправная точка готова за минуту.',
    },
  },
  'sanzioni-gps': {
    it: {
      title: 'Cosa ti dice questo calcolatore',
      p1: "Ogni Paese punisce a modo suo un GPS fuori regola: c'è chi calcola percentuali sul fatturato, chi stacca importi fissi, e la cifra vera dipende anche da quanto hai già messo in ordine. I massimali che leggi qui vengono dalle norme e dai provvedimenti reali di 39 Paesi, verificati alla fonte.",
      p2: "Scegli il Paese, spunta quello che hai già in regola e vedi la sanzione massima comminata lì e l'esposizione che ti resta. Meglio saperlo da questa pagina che dal verbale di un'ispezione.",
    },
    en: {
      title: 'What this calculator tells you',
      p1: 'Every country punishes an out-of-line GPS setup its own way: some count percentages of turnover, some hand out fixed amounts, and the real figure also depends on how much you already have in order. The maximums here come from the laws and actual decisions of 39 countries, checked at the source.',
      p2: "Pick the country, tick what you already have in place and see the highest fine actually handed out there and the exposure you're left with. Better to learn it from this page than from an inspection report.",
    },
    de: {
      title: 'Was dieser Rechner Ihnen zeigt',
      p1: 'Jedes Land ahndet ein GPS ohne Rechtsgrundlage auf seine Art: mal in Prozent vom Umsatz, mal mit festen Beträgen, und die echte Summe hängt auch davon ab, wie viel Sie schon geregelt haben. Die Höchstwerte hier stammen aus den Gesetzen und tatsächlichen Entscheidungen von 39 Ländern, an der Quelle geprüft.',
      p2: 'Wählen Sie das Land, haken Sie ab, was bei Ihnen schon in Ordnung ist, und Sie sehen die höchste dort tatsächlich verhängte Sanktion und Ihr verbleibendes Risiko. Besser, Sie erfahren es auf dieser Seite als aus einem Prüfbericht.',
    },
    fr: {
      title: 'Ce que ce calculateur vous dit',
      p1: "Chaque pays sanctionne à sa façon un GPS hors des clous : pourcentages du chiffre d'affaires ici, montants fixes là, et la somme réelle dépend aussi de ce que vous avez déjà mis en ordre. Les plafonds affichés viennent des textes et des décisions réelles de 39 pays, vérifiés à la source.",
      p2: "Choisissez le pays, cochez ce qui est déjà en règle chez vous et voyez l'amende maximale réellement prononcée là-bas et l'exposition qui vous reste. Mieux vaut l'apprendre sur cette page que dans un procès-verbal.",
    },
    es: {
      title: 'Qué te dice esta calculadora',
      p1: 'Cada país castiga a su manera un GPS fuera de norma: unos calculan porcentajes de la facturación, otros imponen importes fijos, y la cifra real depende también de cuánto tienes ya en orden. Los máximos que ves aquí salen de las normas y de resoluciones reales de 39 países, verificados en la fuente.',
      p2: 'Elige el país, marca lo que ya tienes en regla y verás la sanción máxima realmente impuesta allí y la exposición que te queda. Mejor descubrirlo en esta página que en el acta de una inspección.',
    },
    nl: {
      title: 'Wat deze calculator u vertelt',
      p1: 'Elk land straft een gps buiten de regels op zijn eigen manier: hier percentages van de omzet, daar vaste bedragen, en het echte cijfer hangt ook af van wat u al op orde hebt. De maxima komen uit de wetten en echte besluiten van 39 landen, aan de bron gecontroleerd.',
      p2: 'Kies het land, vink aan wat bij u al geregeld is en zie de hoogste boete die daar werkelijk is opgelegd en het risico dat overblijft. Beter dat u het van deze pagina leert dan uit een inspectierapport.',
    },
    pt: {
      title: 'O que esta calculadora lhe diz',
      p1: 'Cada país pune à sua maneira um GPS fora das regras: uns calculam percentagens da faturação, outros aplicam montantes fixos, e o valor real depende também do que já tem em ordem. Os máximos que vê aqui vêm das normas e de decisões reais de 39 países, verificados na fonte.',
      p2: 'Escolha o país, assinale o que já tem em regra e veja a coima máxima realmente aplicada lá e a exposição que lhe resta. Melhor sabê-lo nesta página do que no auto de uma inspeção.',
    },
    da: {
      title: 'Det fortæller beregneren dig',
      p1: 'Hvert land straffer gps uden styr på reglerne på sin egen måde: nogle regner procenter af omsætningen, andre giver faste beløb, og det reelle tal afhænger også af, hvor meget du allerede har på plads. Maksimumbeløbene her stammer fra lovene og faktiske afgørelser i 39 lande, efterprøvet ved kilden.',
      p2: 'Vælg landet, sæt hak ved det, du allerede har i orden, og se den højeste bøde, der reelt er givet dér, og den risiko, du har tilbage. Bedre at få det at vide på denne side end i en tilsynsrapport.',
    },
    sv: {
      title: 'Det här säger kalkylatorn dig',
      p1: 'Varje land straffar gps utan ordning på reglerna på sitt sätt: några räknar procent av omsättningen, andra delar ut fasta belopp, och den verkliga summan beror också på hur mycket du redan har på plats. Maxbeloppen kommer från lagarna och verkliga beslut i 39 länder, kontrollerade vid källan.',
      p2: 'Välj land, bocka i det du redan har i ordning och se den högsta sanktion som faktiskt dömts ut där och risken du har kvar. Bättre att få veta det på den här sidan än i en tillsynsrapport.',
    },
    nb: {
      title: 'Dette forteller kalkulatoren deg',
      p1: 'Hvert land straffer gps uten orden i reglene på sin måte: noen regner prosent av omsetningen, andre gir faste beløp, og det reelle tallet avhenger også av hvor mye du allerede har på plass. Maksbeløpene kommer fra lovene og faktiske vedtak i 39 land, kontrollert ved kilden.',
      p2: 'Velg landet, huk av det du allerede har i orden, og se den høyeste boten som faktisk er gitt der og risikoen du sitter igjen med. Bedre å få vite det på denne siden enn i en tilsynsrapport.',
    },
    ru: {
      title: 'Что показывает этот калькулятор',
      p1: 'Каждая страна наказывает за GPS без порядка по-своему: где-то считают проценты от оборота, где-то назначают фиксированные суммы, и реальная цифра зависит и от того, сколько у вас уже приведено в порядок. Максимумы здесь взяты из законов и реальных решений 39 стран и проверены по первоисточникам.',
      p2: 'Выберите страну, отметьте то, что у вас уже в порядке, и увидите максимальный реально назначенный там штраф и оставшийся риск. Лучше узнать это на этой странице, чем из акта проверки.',
    },
  },
  autovalutazione: {
    it: {
      title: 'Perché farti queste domande',
      p1: 'Presenze, posizione, foto di cantiere: sono dati personali dei tuoi lavoratori, e la conformità non è un bollino da comprare una volta, è una serie di abitudini che o hai o non hai. Le nove domande battono i punti dove le aziende con squadre sul campo inciampano più spesso.',
      p2: 'Rispondi con sincerità: alla fine hai un punteggio, le aree dove intervenire e le risorse collegate per sistemarle. Nessuna risposta lascia il tuo browser, il test serve a te, non a noi.',
    },
    en: {
      title: 'Why ask yourself these questions',
      p1: "Attendance, location, site photos: all personal data of your workers, and compliance isn't a badge you buy once, it's a set of habits you either have or you don't. The nine questions cover the spots where field-team companies stumble most often.",
      p2: 'Answer honestly: at the end you get a score, the areas to work on and the linked resources to fix them. No answer leaves your browser, the test is for you, not for us.',
    },
    de: {
      title: 'Warum Sie sich diese Fragen stellen sollten',
      p1: 'Anwesenheiten, Standort, Baustellenfotos: alles personenbezogene Daten Ihrer Mitarbeiter, und Compliance ist kein Siegel, das man einmal kauft, sondern eine Reihe von Gewohnheiten, die man hat oder nicht hat. Die neun Fragen treffen die Stellen, an denen Betriebe mit Außendienstteams am häufigsten stolpern.',
      p2: 'Antworten Sie ehrlich: Am Ende sehen Sie eine Punktzahl, die Bereiche, an denen Sie ansetzen sollten, und die passenden Ressourcen dazu. Keine Antwort verlässt Ihren Browser, der Test arbeitet für Sie, nicht für uns.',
    },
    fr: {
      title: 'Pourquoi vous poser ces questions',
      p1: "Présences, position, photos de chantier : ce sont des données personnelles de vos salariés, et la conformité n'est pas un label qu'on achète une fois, c'est une série d'habitudes qu'on a ou qu'on n'a pas. Les neuf questions visent les points où les entreprises de terrain trébuchent le plus souvent.",
      p2: 'Répondez avec franchise : à la fin vous avez un score, les zones où intervenir et les ressources liées pour y remédier. Aucune réponse ne quitte votre navigateur, le test travaille pour vous, pas pour nous.',
    },
    es: {
      title: 'Por qué hacerte estas preguntas',
      p1: 'Presencias, ubicación, fotos de obra: son datos personales de tus trabajadores, y el cumplimiento no es un sello que se compra una vez, es una serie de hábitos que se tienen o no se tienen. Las nueve preguntas apuntan a los puntos donde más tropiezan las empresas con equipos de campo.',
      p2: 'Responde con sinceridad: al final tienes una puntuación, las áreas donde intervenir y los recursos enlazados para arreglarlas. Ninguna respuesta sale de tu navegador, el test trabaja para ti, no para nosotros.',
    },
    nl: {
      title: 'Waarom uzelf deze vragen stellen',
      p1: "Aanwezigheid, locatie, werffoto's: allemaal persoonsgegevens van uw werknemers, en naleving is geen keurmerk dat u één keer koopt, maar een reeks gewoonten die u hebt of niet hebt. De negen vragen raken de punten waar bedrijven met veldteams het vaakst struikelen.",
      p2: 'Antwoord eerlijk: aan het einde hebt u een score, de gebieden om aan te pakken en de gekoppelde bronnen om ze op te lossen. Geen enkel antwoord verlaat uw browser, de test werkt voor u, niet voor ons.',
    },
    pt: {
      title: 'Porquê fazer-se estas perguntas',
      p1: 'Presenças, localização, fotos de obra: são dados pessoais dos seus trabalhadores, e a conformidade não é um selo que se compra uma vez, é um conjunto de hábitos que se têm ou não se têm. As nove perguntas tocam nos pontos onde as empresas com equipas no terreno mais tropeçam.',
      p2: 'Responda com sinceridade: no fim tem uma pontuação, as áreas onde intervir e os recursos ligados para as resolver. Nenhuma resposta sai do seu navegador, o teste trabalha para si, não para nós.',
    },
    da: {
      title: 'Derfor skal du stille dig selv spørgsmålene',
      p1: 'Fremmøde, position, fotos fra pladsen: alt sammen persondata om dine medarbejdere, og efterlevelse er ikke et mærke, man køber én gang, men en række vaner, man har eller ikke har. De ni spørgsmål rammer de steder, hvor virksomheder med hold i marken oftest snubler.',
      p2: 'Svar ærligt: til sidst får du en score, områderne at tage fat på og de tilhørende ressourcer til at rette op. Intet svar forlader din browser, testen arbejder for dig, ikke for os.',
    },
    sv: {
      title: 'Därför ska du ställa dig frågorna',
      p1: 'Närvaro, position, foton från arbetsplatsen: allt är personuppgifter om dina anställda, och efterlevnad är inget märke man köper en gång, utan en rad vanor man har eller inte har. De nio frågorna träffar punkterna där företag med team i fält snubblar oftast.',
      p2: 'Svara ärligt: i slutet får du en poäng, områdena att ta tag i och de kopplade resurserna för att rätta till dem. Inget svar lämnar din webbläsare, testet arbetar för dig, inte för oss.',
    },
    nb: {
      title: 'Derfor bør du stille deg spørsmålene',
      p1: 'Oppmøte, posisjon, bilder fra plassen: alt er personopplysninger om arbeidstakerne dine, og etterlevelse er ikke et merke man kjøper én gang, men en rekke vaner man har eller ikke har. De ni spørsmålene treffer punktene der bedrifter med lag i felt oftest snubler.',
      p2: 'Svar ærlig: til slutt får du en poengsum, områdene å ta tak i og de tilknyttede ressursene for å rette opp. Ingen svar forlater nettleseren din, testen jobber for deg, ikke for oss.',
    },
    ru: {
      title: 'Зачем задавать себе эти вопросы',
      p1: 'Посещаемость, позиция, фото с объекта: всё это персональные данные ваших работников, а соответствие требованиям не значок, который покупают один раз, это набор привычек, которые либо есть, либо нет. Девять вопросов бьют в точки, где компании с полевыми бригадами спотыкаются чаще всего.',
      p2: 'Отвечайте честно: в конце вы получите балл, зоны, где нужно вмешаться, и подобранные ресурсы, чтобы их закрыть. Ни один ответ не покидает ваш браузер, тест работает на вас, а не на нас.',
    },
  },
  conservazione: {
    it: {
      title: 'A cosa serve una politica di conservazione',
      p1: 'Il GDPR non ti dice per quanto tenere buste paga, timbrature o certificati medici: ti chiede di deciderlo, scriverlo e rispettarlo. Si chiama limitazione della conservazione, ed è tra le prime cose che un controllo va a guardare.',
      p2: 'Scegli il Paese e i tipi di dato che gestisci sul personale: lo strumento compone la tabella con le durate consigliate, la nota che le giustifica e il PDF da allegare al registro dei trattamenti. Per i documenti contabili valgono le durate di legge del Paese che indichi.',
    },
    en: {
      title: 'What a retention policy is for',
      p1: "The GDPR won't tell you how long to keep payslips, clock-in records or medical certificates: it expects you to decide, write it down and stick to it. That's storage limitation, and it's among the first things an inspection looks at.",
      p2: 'Pick the country and the types of staff data you handle: the tool puts together the table with recommended periods, the note that justifies each one and the PDF to attach to your records of processing. For accounting documents the legal periods of the country you choose apply.',
    },
    de: {
      title: 'Wozu eine Aufbewahrungsrichtlinie dient',
      p1: 'Die DSGVO sagt Ihnen nicht, wie lange Lohnabrechnungen, Stempelzeiten oder Atteste aufzubewahren sind: Sie verlangt, dass Sie es festlegen, aufschreiben und einhalten. Das ist die Speicherbegrenzung, und sie gehört zu den ersten Punkten, die eine Prüfung ansieht.',
      p2: 'Wählen Sie das Land und die Datenarten, die Sie zum Personal führen: Das Tool stellt die Tabelle mit empfohlenen Fristen zusammen, dazu die Begründung je Zeile und das PDF für Ihr Verarbeitungsverzeichnis. Für Buchhaltungsunterlagen gelten die gesetzlichen Fristen des gewählten Landes.',
    },
    fr: {
      title: 'À quoi sert une politique de conservation',
      p1: "Le RGPD ne vous dit pas combien de temps garder bulletins de paie, pointages ou certificats médicaux : il vous demande de le décider, de l'écrire et de vous y tenir. C'est la limitation de la conservation, et c'est l'un des premiers points qu'un contrôle regarde.",
      p2: "Choisissez le pays et les types de données que vous gérez sur le personnel : l'outil compose le tableau avec les durées conseillées, la note qui les justifie et le PDF à joindre à votre registre des traitements. Pour les pièces comptables, les durées légales du pays choisi s'appliquent.",
    },
    es: {
      title: 'Para qué sirve una política de conservación',
      p1: 'El RGPD no te dice cuánto tiempo guardar nóminas, fichajes o certificados médicos: te pide decidirlo, escribirlo y cumplirlo. Es la limitación del plazo de conservación, y está entre lo primero que mira una inspección.',
      p2: 'Elige el país y los tipos de dato que gestionas sobre el personal: la herramienta compone la tabla con los plazos recomendados, la nota que los justifica y el PDF para adjuntar a tu registro de actividades de tratamiento. Para los documentos contables valen los plazos legales del país que indiques.',
    },
    nl: {
      title: 'Waarvoor een bewaarbeleid dient',
      p1: 'De AVG zegt niet hoe lang u loonstroken, kloktijden of medische attesten moet bewaren: ze vraagt dat u het beslist, opschrijft en naleeft. Dat is opslagbeperking, en het hoort bij het eerste waar een controle naar kijkt.',
      p2: 'Kies het land en de soorten personeelsgegevens die u beheert: de tool stelt de tabel samen met aanbevolen termijnen, de toelichting per regel en de pdf voor bij uw verwerkingsregister. Voor boekhoudstukken gelden de wettelijke termijnen van het gekozen land.',
    },
    pt: {
      title: 'Para que serve uma política de conservação',
      p1: 'O RGPD não lhe diz por quanto tempo guardar recibos de vencimento, registos de ponto ou atestados: pede que o decida, o escreva e o cumpra. É a limitação da conservação, e está entre as primeiras coisas que uma inspeção vai ver.',
      p2: 'Escolha o país e os tipos de dados que gere sobre o pessoal: a ferramenta compõe a tabela com os prazos recomendados, a nota que os justifica e o PDF para juntar ao registo de tratamentos. Para os documentos contabilísticos valem os prazos legais do país que indicar.',
    },
    da: {
      title: 'Det bruger du en opbevaringspolitik til',
      p1: 'GDPR fortæller dig ikke, hvor længe lønsedler, stempeltider eller attester skal gemmes: Den kræver, at du beslutter det, skriver det ned og holder det. Det hedder opbevaringsbegrænsning, og det er noget af det første, et tilsyn kigger på.',
      p2: 'Vælg land og de typer personaledata, du håndterer: værktøjet stiller tabellen op med anbefalede frister, en note der begrunder dem, og en pdf til din fortegnelse over behandlinger. For regnskabsbilag gælder lovfristerne i det land, du vælger.',
    },
    sv: {
      title: 'Det här har du en gallringspolicy till',
      p1: 'GDPR säger inte hur länge lönebesked, stämpeltider eller intyg ska sparas: den kräver att du bestämmer det, skriver ner det och håller dig till det. Det kallas lagringsminimering, och det är bland det första en tillsyn tittar på.',
      p2: 'Välj land och de typer av personaluppgifter du hanterar: verktyget ställer samman tabellen med rekommenderade tider, noten som motiverar dem och pdf:en till ditt register över behandlingar. För bokföringsunderlag gäller lagtiderna i landet du väljer.',
    },
    nb: {
      title: 'Dette bruker du en lagringspolicy til',
      p1: 'GDPR sier ikke hvor lenge lønnsslipper, stemplingstider eller attester skal oppbevares: Den krever at du bestemmer det, skriver det ned og holder deg til det. Det heter lagringsbegrensning, og det er noe av det første et tilsyn ser på.',
      p2: 'Velg land og typene personalopplysninger du håndterer: verktøyet setter opp tabellen med anbefalte frister, notatet som begrunner dem og pdf-en til protokollen din over behandlinger. For regnskapsbilag gjelder lovfristene i landet du velger.',
    },
    ru: {
      title: 'Зачем нужна политика хранения данных',
      p1: 'GDPR не говорит, сколько хранить расчётные листки, отметки времени или справки: он требует, чтобы вы это решили, записали и соблюдали. Это ограничение хранения, и это одно из первого, что смотрит проверка.',
      p2: 'Выберите страну и типы данных о персонале: инструмент собирает таблицу с рекомендованными сроками, пояснением к каждому и PDF для вашего реестра обработки. Для бухгалтерских документов действуют законные сроки выбранной страны.',
    },
  },
};

export function getPannello(tool: PannelloToolKey, locale: string): PannelloCopy {
  const perTool = PANNELLI[tool];
  return perTool[locale] ?? perTool[locale.split('-')[0]] ?? perTool.en ?? perTool.it;
}
