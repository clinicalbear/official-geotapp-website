import type { Metadata } from 'next';
import ComparisonPageL from '@/components/ComparisonPageL';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-picaponto/';
const ARTICLE_DATE_PUBLISHED = '2026-07-16';
const ARTICLE_DATE_MODIFIED = '2026-07-16';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs PicaPonto - Confronto 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: registrare o dimostrare? Confronto su prezzo, metodi di timbratura, conformità e report non modificabili verificabili dal committente.' },
  en: { title: 'GeoTapp vs PicaPonto - Comparison 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: recording or proving? Compare pricing, clock-in methods, compliance and tamper-proof reports the client can verify independently.' },
  de: { title: 'GeoTapp vs PicaPonto - Vergleich 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: erfassen oder beweisen? Vergleich von Preis, Stempelmethoden, Compliance und unveränderbaren, vom Auftraggeber verifizierbaren Berichten.' },
  fr: { title: 'GeoTapp vs PicaPonto - Comparaison 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto : enregistrer ou prouver ? Comparez prix, methodes de pointage, conformite et rapports infalsifiables verifiables par le client.' },
  es: { title: 'GeoTapp vs PicaPonto - Comparacion 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: registrar o demostrar? Compara precio, metodos de fichaje, cumplimiento e informes inalterables verificables por el cliente.' },
  pt: { title: 'GeoTapp vs PicaPonto - Comparacao 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: registar ou provar? Compare preco, metodos de picagem, conformidade e relatorios inalteraveis verificaveis pelo cliente.' },
  nl: { title: 'GeoTapp vs PicaPonto - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: registreren of bewijzen? Vergelijk prijs, klokmethodes, naleving en onwijzigbare rapporten die de klant zelf kan verifieren.' },
  da: { title: 'GeoTapp vs PicaPonto - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: registrere eller bevise? Sammenlign pris, stemplingsmetoder, overholdelse og uforanderlige rapporter kunden selv kan verificere.' },
  sv: { title: 'GeoTapp vs PicaPonto - Jamforelse 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: registrera eller bevisa? Jamfor pris, stamplingsmetoder, efterlevnad och oforanderliga rapporter kunden sjalv kan verifiera.' },
  nb: { title: 'GeoTapp vs PicaPonto - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: registrere eller bevise? Sammenlign pris, stemplingsmetoder, etterlevelse og uforanderlige rapporter kunden selv kan verifisere.' },
  ru: { title: 'GeoTapp vs PicaPonto - Sravnenie 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: uchityvat ili dokazyvat? Sravnite cenu, sposoby otmetki, sootvetstvie i neizmenyaemye otchyoty, kotorye klient proveryaet sam.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual e la differenza principale tra GeoTapp e PicaPonto?', a: 'PicaPonto e un sistema di rilevazione presenze: registra entrate e uscite con app, QR code, orologio fisico e biometria, a un prezzo pubblico molto basso. GeoTapp e un sistema di prova del lavoro: produce un report con GPS reale, hash crittografico e foto che il committente verifica da solo, e che non e modificabile nemmeno dall amministratore. La differenza e tra registrare una presenza e dimostrarla a un terzo.' },
    { q: 'Quanto costa PicaPonto rispetto a GeoTapp?', a: 'PicaPonto pubblica i prezzi: 0,75 euro per collaboratore al mese nel piano Basic, 1,25 nel Premium, con minimi di 12,50 e 22,50 euro. E tra i piu bassi in Europa. Se il prezzo per collaboratore e il fattore decisivo, PicaPonto e molto competitivo. GeoTapp risolve un problema diverso, la prova verso il committente, non compete sul prezzo piu basso.' },
    { q: 'PicaPonto ha piu metodi di timbratura di GeoTapp?', a: 'Si. PicaPonto offre app, browser, QR code, orologio marcatempo fisico, biometria e riconoscimento facciale. GeoTapp vive sullo smartphone. Se hai personale senza smartphone o una portineria con lettore a parete, PicaPonto copre quel caso e GeoTapp no.' },
    { q: 'Il committente puo verificare i report?', a: 'PicaPonto genera report interni per l amministrazione e le buste paga. GeoTapp genera un report con sigillo crittografico che il committente verifica in modo indipendente, senza account e senza fidarsi dell azienda. Un registro che il datore di lavoro puo correggere non ha lo stesso valore probatorio di un report non alterabile.' },
  ],
  en: [
    { q: 'What is the main difference between GeoTapp and PicaPonto?', a: 'PicaPonto is an attendance system: it records clock-ins and clock-outs via app, QR code, physical clock and biometrics, at a very low public price. GeoTapp is a proof-of-work system: it produces a report with real GPS, a cryptographic hash and photos that the client verifies independently, and that not even the account administrator can edit. The difference is between recording a presence and proving it to a third party.' },
    { q: 'How much does PicaPonto cost compared to GeoTapp?', a: 'PicaPonto publishes its prices: 0.75 euro per worker per month on Basic, 1.25 on Premium, with minimums of 12.50 and 22.50 euro. It is among the lowest in Europe. If price per worker is the deciding factor, PicaPonto is very competitive. GeoTapp solves a different problem, proof to the client, and does not compete on lowest price.' },
    { q: 'Does PicaPonto have more clock-in methods than GeoTapp?', a: 'Yes. PicaPonto offers app, browser, QR code, physical time clock, biometrics and facial recognition. GeoTapp lives on the smartphone. If you have staff without a smartphone or a front desk with a wall reader, PicaPonto covers that case and GeoTapp does not.' },
    { q: 'Can the client verify the reports?', a: 'PicaPonto generates internal reports for administration and payroll. GeoTapp generates a report with a cryptographic seal that the client verifies independently, without an account and without trusting the company. A record the employer can correct does not carry the same evidentiary value as a tamper-proof report.' },
  ],
  de: [
    { q: 'Was ist der Hauptunterschied zwischen GeoTapp und PicaPonto?', a: 'PicaPonto ist ein Anwesenheitssystem: Es erfasst Kommen und Gehen per App, QR-Code, fester Stempeluhr und Biometrie, zu einem sehr niedrigen offentlichen Preis. GeoTapp ist ein Arbeitsnachweis-System: Es erstellt einen Bericht mit echtem GPS, kryptographischem Hash und Fotos, den der Auftraggeber selbst verifiziert und den nicht einmal der Administrator andern kann. Der Unterschied liegt zwischen dem Erfassen einer Anwesenheit und dem Beweisen gegenuber einem Dritten.' },
    { q: 'Was kostet PicaPonto im Vergleich zu GeoTapp?', a: 'PicaPonto veroffentlicht die Preise: 0,75 Euro pro Mitarbeiter und Monat im Basic-Tarif, 1,25 im Premium, mit Mindestbetragen von 12,50 und 22,50 Euro. Das gehort zu den niedrigsten in Europa. Wenn der Preis pro Mitarbeiter entscheidend ist, ist PicaPonto sehr wettbewerbsfahig. GeoTapp lost ein anderes Problem, den Nachweis gegenuber dem Auftraggeber, und konkurriert nicht um den niedrigsten Preis.' },
    { q: 'Hat PicaPonto mehr Stempelmethoden als GeoTapp?', a: 'Ja. PicaPonto bietet App, Browser, QR-Code, feste Stempeluhr, Biometrie und Gesichtserkennung. GeoTapp lebt auf dem Smartphone. Wenn Sie Personal ohne Smartphone oder einen Empfang mit Wandleser haben, deckt PicaPonto diesen Fall ab und GeoTapp nicht.' },
    { q: 'Kann der Auftraggeber die Berichte verifizieren?', a: 'PicaPonto erstellt interne Berichte fur Verwaltung und Lohnabrechnung. GeoTapp erstellt einen Bericht mit kryptographischem Siegel, den der Auftraggeber unabhangig verifiziert, ohne Konto und ohne dem Unternehmen zu vertrauen. Eine Aufzeichnung, die der Arbeitgeber korrigieren kann, hat nicht die gleiche Beweiskraft wie ein unveranderbarer Bericht.' },
  ],
  fr: [
    { q: 'Quelle est la difference principale entre GeoTapp et PicaPonto ?', a: 'PicaPonto est un systeme de pointage : il enregistre les entrees et sorties par appli, QR code, horloge physique et biometrie, a un prix public tres bas. GeoTapp est un systeme de preuve du travail : il produit un rapport avec GPS reel, hachage cryptographique et photos que le client verifie lui-meme, et que meme l administrateur ne peut pas modifier. La difference est entre enregistrer une presence et la prouver a un tiers.' },
    { q: 'Combien coute PicaPonto par rapport a GeoTapp ?', a: 'PicaPonto publie ses prix : 0,75 euro par collaborateur et par mois en Basic, 1,25 en Premium, avec des minimums de 12,50 et 22,50 euros. C est parmi les plus bas d Europe. Si le prix par collaborateur est le facteur decisif, PicaPonto est tres competitif. GeoTapp resout un autre probleme, la preuve envers le client, et ne rivalise pas sur le prix le plus bas.' },
    { q: 'PicaPonto a-t-il plus de methodes de pointage que GeoTapp ?', a: 'Oui. PicaPonto propose appli, navigateur, QR code, pointeuse physique, biometrie et reconnaissance faciale. GeoTapp vit sur le smartphone. Si vous avez du personnel sans smartphone ou un accueil avec badgeuse murale, PicaPonto couvre ce cas et pas GeoTapp.' },
    { q: 'Le client peut-il verifier les rapports ?', a: 'PicaPonto genere des rapports internes pour l administration et la paie. GeoTapp genere un rapport avec sceau cryptographique que le client verifie de facon independante, sans compte et sans faire confiance a l entreprise. Un registre que l employeur peut corriger n a pas la meme valeur probante qu un rapport infalsifiable.' },
  ],
  es: [
    { q: 'Cual es la diferencia principal entre GeoTapp y PicaPonto?', a: 'PicaPonto es un sistema de control de presencia: registra entradas y salidas con app, codigo QR, reloj fisico y biometria, a un precio publico muy bajo. GeoTapp es un sistema de prueba del trabajo: produce un informe con GPS real, hash criptografico y fotos que el cliente verifica por su cuenta, y que ni siquiera el administrador puede modificar. La diferencia esta entre registrar una presencia y demostrarla a un tercero.' },
    { q: 'Cuanto cuesta PicaPonto frente a GeoTapp?', a: 'PicaPonto publica sus precios: 0,75 euros por colaborador al mes en Basic, 1,25 en Premium, con minimos de 12,50 y 22,50 euros. Esta entre los mas bajos de Europa. Si el precio por colaborador es el factor decisivo, PicaPonto es muy competitivo. GeoTapp resuelve otro problema, la prueba ante el cliente, y no compite por el precio mas bajo.' },
    { q: 'Tiene PicaPonto mas metodos de fichaje que GeoTapp?', a: 'Si. PicaPonto ofrece app, navegador, codigo QR, reloj de fichar fisico, biometria y reconocimiento facial. GeoTapp vive en el smartphone. Si tienes personal sin smartphone o una recepcion con lector de pared, PicaPonto cubre ese caso y GeoTapp no.' },
    { q: 'Puede el cliente verificar los informes?', a: 'PicaPonto genera informes internos para la administracion y las nominas. GeoTapp genera un informe con sello criptografico que el cliente verifica de forma independiente, sin cuenta y sin fiarse de la empresa. Un registro que el empleador puede corregir no tiene el mismo valor probatorio que un informe inalterable.' },
  ],
  pt: [
    { q: 'Qual e a diferenca principal entre a GeoTapp e o PicaPonto?', a: 'O PicaPonto e um sistema de assiduidade: regista entradas e saidas por app, codigo QR, relogio fisico e biometria, a um preco publico muito baixo. A GeoTapp e um sistema de prova do trabalho: produz um relatorio com GPS real, hash criptografico e fotos que o cliente verifica sozinho, e que nem o administrador pode alterar. A diferenca esta entre registar uma presenca e prova-la a um terceiro.' },
    { q: 'Quanto custa o PicaPonto em comparacao com a GeoTapp?', a: 'O PicaPonto publica os precos: 0,75 euro por colaborador por mes no Basic, 1,25 no Premium, com minimos de 12,50 e 22,50 euros. Esta entre os mais baixos da Europa. Se o preco por colaborador e o fator decisivo, o PicaPonto e muito competitivo. A GeoTapp resolve outro problema, a prova perante o cliente, e nao compete pelo preco mais baixo.' },
    { q: 'O PicaPonto tem mais metodos de picagem do que a GeoTapp?', a: 'Sim. O PicaPonto oferece app, browser, codigo QR, relogio de ponto fisico, biometria e reconhecimento facial. A GeoTapp vive no smartphone. Se tem pessoal sem smartphone ou uma rececao com leitor de parede, o PicaPonto cobre esse caso e a GeoTapp nao.' },
    { q: 'O cliente pode verificar os relatorios?', a: 'O PicaPonto gera relatorios internos para a administracao e os salarios. A GeoTapp gera um relatorio com selo criptografico que o cliente verifica de forma independente, sem conta e sem confiar na empresa. Um registo que o empregador pode corrigir nao tem o mesmo valor probatorio que um relatorio inalteravel.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en PicaPonto?', a: 'PicaPonto is een aanwezigheidssysteem: het registreert in- en uitklokken via app, QR-code, fysieke klok en biometrie, tegen een zeer lage openbare prijs. GeoTapp is een werkbewijssysteem: het produceert een rapport met echt GPS, een cryptografische hash en foto s die de klant zelf verifieert, en dat zelfs de beheerder niet kan wijzigen. Het verschil zit tussen een aanwezigheid registreren en die bewijzen aan een derde.' },
    { q: 'Wat kost PicaPonto vergeleken met GeoTapp?', a: 'PicaPonto publiceert de prijzen: 0,75 euro per medewerker per maand in Basic, 1,25 in Premium, met minima van 12,50 en 22,50 euro. Het behoort tot de laagste van Europa. Als de prijs per medewerker de doorslag geeft, is PicaPonto zeer concurrerend. GeoTapp lost een ander probleem op, het bewijs naar de klant, en concurreert niet op laagste prijs.' },
    { q: 'Heeft PicaPonto meer klokmethodes dan GeoTapp?', a: 'Ja. PicaPonto biedt app, browser, QR-code, fysieke prikklok, biometrie en gezichtsherkenning. GeoTapp leeft op de smartphone. Als u personeel zonder smartphone heeft of een receptie met een wandlezer, dekt PicaPonto dat geval en GeoTapp niet.' },
    { q: 'Kan de klant de rapporten verifieren?', a: 'PicaPonto genereert interne rapporten voor administratie en loon. GeoTapp genereert een rapport met een cryptografisch zegel dat de klant onafhankelijk verifieert, zonder account en zonder het bedrijf te vertrouwen. Een registratie die de werkgever kan corrigeren heeft niet dezelfde bewijskracht als een onwijzigbaar rapport.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og PicaPonto?', a: 'PicaPonto er et fremmodesystem: det registrerer ind- og udstempling via app, QR-kode, fysisk ur og biometri, til en meget lav offentlig pris. GeoTapp er et arbejdsbevis-system: det producerer en rapport med aegte GPS, et kryptografisk hash og fotos, som kunden selv verificerer, og som ikke engang administratoren kan aendre. Forskellen er mellem at registrere et fremmode og at bevise det over for en tredjepart.' },
    { q: 'Hvad koster PicaPonto sammenlignet med GeoTapp?', a: 'PicaPonto offentliggor priserne: 0,75 euro per medarbejder om maneden i Basic, 1,25 i Premium, med minimum pa 12,50 og 22,50 euro. Det er blandt de laveste i Europa. Hvis prisen per medarbejder er den afgorende faktor, er PicaPonto meget konkurrencedygtig. GeoTapp loser et andet problem, beviset over for kunden, og konkurrerer ikke pa laveste pris.' },
    { q: 'Har PicaPonto flere stemplingsmetoder end GeoTapp?', a: 'Ja. PicaPonto tilbyder app, browser, QR-kode, fysisk stempelur, biometri og ansigtsgenkendelse. GeoTapp lever pa smartphonen. Hvis du har personale uden smartphone eller en reception med en vaegscanner, daekker PicaPonto det tilfaelde og GeoTapp ikke.' },
    { q: 'Kan kunden verificere rapporterne?', a: 'PicaPonto genererer interne rapporter til administration og lon. GeoTapp genererer en rapport med et kryptografisk segl, som kunden verificerer uafhaengigt, uden konto og uden at stole pa virksomheden. Et register, som arbejdsgiveren kan rette, har ikke samme bevisvaerdi som en uforanderlig rapport.' },
  ],
  sv: [
    { q: 'Vad ar den viktigaste skillnaden mellan GeoTapp och PicaPonto?', a: 'PicaPonto ar ett narvarosystem: det registrerar in- och utstampling via app, QR-kod, fysisk klocka och biometri, till ett mycket lagt offentligt pris. GeoTapp ar ett arbetsbevis-system: det producerar en rapport med akta GPS, en kryptografisk hash och foton som kunden sjalv verifierar, och som inte ens administratoren kan andra. Skillnaden ar mellan att registrera en narvaro och att bevisa den for en tredje part.' },
    { q: 'Vad kostar PicaPonto jamfort med GeoTapp?', a: 'PicaPonto publicerar priserna: 0,75 euro per medarbetare och manad i Basic, 1,25 i Premium, med miniminivaer pa 12,50 och 22,50 euro. Det ar bland de lagsta i Europa. Om priset per medarbetare ar den avgorande faktorn ar PicaPonto mycket konkurrenskraftig. GeoTapp loser ett annat problem, beviset mot kunden, och konkurrerar inte om lagsta pris.' },
    { q: 'Har PicaPonto fler stamplingsmetoder an GeoTapp?', a: 'Ja. PicaPonto erbjuder app, webblasare, QR-kod, fysisk stampelklocka, biometri och ansiktsigenkanning. GeoTapp lever pa smartphonen. Om du har personal utan smartphone eller en reception med en vaggscanner tacker PicaPonto det fallet och GeoTapp inte.' },
    { q: 'Kan kunden verifiera rapporterna?', a: 'PicaPonto genererar interna rapporter for administration och lon. GeoTapp genererar en rapport med ett kryptografiskt sigill som kunden verifierar oberoende, utan konto och utan att lita pa foretaget. Ett register som arbetsgivaren kan andra har inte samma bevisvarde som en oforanderlig rapport.' },
  ],
  nb: [
    { q: 'Hva er hovedforskjellen mellom GeoTapp og PicaPonto?', a: 'PicaPonto er et oppmotesystem: det registrerer inn- og utstempling via app, QR-kode, fysisk klokke og biometri, til en svaert lav offentlig pris. GeoTapp er et arbeidsbevis-system: det produserer en rapport med ekte GPS, en kryptografisk hash og bilder som kunden selv verifiserer, og som ikke engang administratoren kan endre. Forskjellen er mellom a registrere et oppmote og a bevise det overfor en tredjepart.' },
    { q: 'Hva koster PicaPonto sammenlignet med GeoTapp?', a: 'PicaPonto publiserer prisene: 0,75 euro per medarbeider per maned i Basic, 1,25 i Premium, med minstebelop pa 12,50 og 22,50 euro. Det er blant de laveste i Europa. Hvis prisen per medarbeider er den avgjorende faktoren, er PicaPonto svaert konkurransedyktig. GeoTapp loser et annet problem, beviset overfor kunden, og konkurrerer ikke pa laveste pris.' },
    { q: 'Har PicaPonto flere stemplingsmetoder enn GeoTapp?', a: 'Ja. PicaPonto tilbyr app, nettleser, QR-kode, fysisk stemplingsklokke, biometri og ansiktsgjenkjenning. GeoTapp lever pa smarttelefonen. Hvis du har ansatte uten smarttelefon eller en resepsjon med en veggleser, dekker PicaPonto det tilfellet og GeoTapp ikke.' },
    { q: 'Kan kunden verifisere rapportene?', a: 'PicaPonto genererer interne rapporter for administrasjon og lonn. GeoTapp genererer en rapport med et kryptografisk segl som kunden verifiserer uavhengig, uten konto og uten a stole pa selskapet. Et register som arbeidsgiveren kan rette, har ikke samme bevisverdi som en uforanderlig rapport.' },
  ],
  ru: [
    { q: 'V chyom glavnoe razlichie mezhdu GeoTapp i PicaPonto?', a: 'PicaPonto eto sistema ucheta prisutstviya: ona registriruet prihod i uhod cherez prilozhenie, QR-kod, fizicheskie chasy i biometriyu, po ochen nizkoj publichnoj cene. GeoTapp eto sistema dokazatelstva raboty: ona sozdayot otchyot s realnym GPS, kriptograficheskim heshem i foto, kotoryj klient proveryaet sam i kotoryj ne mozhet izmenit dazhe administrator. Razlichie mezhdu tem, chtoby zafiksirovat prisutstvie, i tem, chtoby dokazat ego tretemu licu.' },
    { q: 'Skolko stoit PicaPonto po sravneniyu s GeoTapp?', a: 'PicaPonto publikuet ceny: 0,75 evro za sotrudnika v mesyac v plane Basic, 1,25 v Premium, s minimumami 12,50 i 22,50 evro. Eto odni iz samyh nizkih v Evrope. Esli cena za sotrudnika reshayushchij faktor, PicaPonto ochen konkurentosposobna. GeoTapp reshaet druguyu zadachu, dokazatelstvo pered klientom, i ne konkuriruet po samoj nizkoj cene.' },
    { q: 'U PicaPonto bolshe sposobov otmetki, chem u GeoTapp?', a: 'Da. PicaPonto predlagaet prilozhenie, brauzer, QR-kod, fizicheskie chasy ucheta, biometriyu i raspoznavanie lica. GeoTapp zhivyot v smartfone. Esli u vas est personal bez smartfona ili prohodnaya s nastennym schityvatelem, PicaPonto pokryvaet etot sluchaj, a GeoTapp net.' },
    { q: 'Mozhet li klient proverit otchyoty?', a: 'PicaPonto sozdayot vnutrennie otchyoty dlya administracii i zarplaty. GeoTapp sozdayot otchyot s kriptograficheskoj pechatyu, kotoryj klient proveryaet nezavisimo, bez akkaunta i bez doveriya k kompanii. Uchyot, kotoryj rabotodatel mozhet ispravit, ne imeet takoj dokazatelnoj sily, kak neizmenyaemyj otchyot.' },
  ],
};

type Copy = {
  badge: string; h1sub: string; desc: string;
  summary: string; summaryText: string;
  noteTitle: string; noteText: string;
  features: string; feat: string; diff: string;
  cta: string; ctaDesc: string; ctaBtn: string;
  geo: string[]; comp: string[]; footnote: string;
};

const T: Record<string, Copy> = {
  it: {
    badge: 'Confronto App', h1sub: 'registrare o dimostrare?',
    desc: 'PicaPonto registra le presenze con app, QR code, orologio fisico e biometria, a un prezzo pubblico tra i piu bassi d Europa. GeoTapp produce un report con GPS reale, hash crittografico e foto che il committente verifica da solo e che nessuno puo modificare. Due approcci diversi.',
    summary: 'In sintesi:',
    summaryText: 'PicaPonto e un ottimo sistema di presenze per chi deve registrare le ore a basso costo, con molti metodi di timbratura e una forte leva sulla conformita. GeoTapp e per chi deve dimostrare al committente che il lavoro e stato fatto, con un report non alterabile che il cliente controlla da solo.',
    noteTitle: 'La domanda che cambia la scelta',
    noteText: 'PicaPonto risponde a "ho il registro in ordine se arriva l ispezione?". GeoTapp risponde a "come dimostro al cliente che il lavoro e stato fatto?". Sembrano la stessa domanda e non lo sono: un registro presenze serve allo Stato e alla busta paga, un report non modificabile serve per quella telefonata del venerdi sera in cui il cliente contesta la fattura. Nessuno dei due e migliore, risolvono perdite diverse.',
    features: 'Confronto funzionalita chiave', feat: 'Funzionalita', diff: 'Approcci diversi',
    cta: 'Vuoi vedere GeoTapp in azione?',
    ctaDesc: 'Ti mostriamo come un intervento diventa una prova verificabile, in 10 minuti, senza impegno.',
    ctaBtn: 'Inizia subito gratuitamente!',
    geo: ['Report non modificabile, nemmeno dall amministratore','GPS reale con controllo anti-spoofing','Foto sigillate con catena hash crittografata','Il committente verifica da solo, senza account','Progettato per pulizie, manutenzione, sicurezza, installatori'],
    comp: ['Prezzo pubblico bassissimo (0,75-1,25 euro per persona)','App, QR, orologio fisico, biometria, riconoscimento facciale','Forte leva sulla conformita (art. 202 Codigo do Trabalho)','Report interni per amministrazione e buste paga','Fornitore portoghese attivo dal 1988'],
    footnote: '* Per legge (GDPR Art. 13 e, in Italia, Art. 4 Statuto dei Lavoratori), ogni dipendente deve firmare un informativa privacy prima di essere geolocalizzato. La maggior parte dei software GPS non lo gestisce: il rischio legale resta al titolare. GeoTapp genera automaticamente l informativa personalizzata, la fa firmare digitalmente al dipendente e blocca l accesso GPS finche non e firmata.',
  },
  en: {
    badge: 'App Comparison', h1sub: 'recording or proving?',
    desc: 'PicaPonto records attendance via app, QR code, physical clock and biometrics, at one of the lowest public prices in Europe. GeoTapp produces a report with real GPS, a cryptographic hash and photos the client verifies independently and that nobody can edit. Two different approaches.',
    summary: 'Bottom line:',
    summaryText: 'PicaPonto is a great attendance system for companies that need to record hours cheaply, with many clock-in methods and a strong compliance angle. GeoTapp is for companies that need to prove to their client that the work was done, with a tamper-proof report the client checks independently.',
    noteTitle: 'The question that changes the choice',
    noteText: 'PicaPonto answers "is my record in order if the inspector shows up?". GeoTapp answers "how do I prove to my client that the work was done?". They sound like the same question and they are not: an attendance record is for the State and payroll, a tamper-proof report is for that Friday-evening phone call where the client disputes the invoice. Neither is better, they solve different losses.',
    features: 'Key features comparison', feat: 'Feature', diff: 'Different approaches',
    cta: 'Want to see GeoTapp in action?',
    ctaDesc: 'We show you how a job becomes verifiable proof, in 10 minutes, no commitment.',
    ctaBtn: 'Start for free!',
    geo: ['Report not editable, not even by the administrator','Real GPS with anti-spoofing check','Photos sealed with cryptographic hash chain','Client verifies independently, no account needed','Designed for cleaning, maintenance, security, installers'],
    comp: ['Very low public price (0.75-1.25 euro per person)','App, QR, physical clock, biometrics, facial recognition','Strong compliance angle (Art. 202 Codigo do Trabalho)','Internal reports for administration and payroll','Portuguese supplier active since 1988'],
    footnote: '* By law (GDPR Art. 13), every employee must sign a privacy notice before being geolocated. Most GPS software does not handle this: the legal risk stays with the employer. GeoTapp automatically generates the personalised notice, gets it digitally signed by the employee and blocks GPS access until it is signed.',
  },
  de: {
    badge: 'App-Vergleich', h1sub: 'erfassen oder beweisen?',
    desc: 'PicaPonto erfasst Anwesenheiten per App, QR-Code, fester Stempeluhr und Biometrie, zu einem der niedrigsten offentlichen Preise Europas. GeoTapp erstellt einen Bericht mit echtem GPS, kryptographischem Hash und Fotos, den der Auftraggeber selbst verifiziert und den niemand andern kann. Zwei unterschiedliche Ansatze.',
    summary: 'Fazit:',
    summaryText: 'PicaPonto ist ein sehr gutes Anwesenheitssystem fur Unternehmen, die Stunden gunstig erfassen mussen, mit vielen Stempelmethoden und starkem Compliance-Fokus. GeoTapp ist fur Unternehmen, die ihrem Auftraggeber beweisen mussen, dass die Arbeit erbracht wurde, mit einem unveranderbaren Bericht, den der Auftraggeber selbst pruft.',
    noteTitle: 'Die Frage, die die Wahl entscheidet',
    noteText: 'PicaPonto beantwortet "ist meine Aufzeichnung in Ordnung, wenn die Prufung kommt?". GeoTapp beantwortet "wie beweise ich meinem Auftraggeber, dass die Arbeit erledigt wurde?". Das klingt nach derselben Frage und ist es nicht: eine Zeiterfassung ist fur den Staat und die Lohnabrechnung, ein unveranderbarer Bericht ist fur den Freitagabend-Anruf, in dem der Kunde die Rechnung anficht. Keiner ist besser, sie losen unterschiedliche Verluste.',
    features: 'Vergleich der wichtigsten Funktionen', feat: 'Funktion', diff: 'Unterschiedliche Ansatze',
    cta: 'Mochten Sie GeoTapp in Aktion sehen?',
    ctaDesc: 'Wir zeigen Ihnen, wie ein Einsatz zum verifizierbaren Beweis wird, in 10 Minuten, unverbindlich.',
    ctaBtn: 'Jetzt kostenlos starten!',
    geo: ['Bericht nicht anderbar, nicht einmal vom Administrator','Echtes GPS mit Anti-Spoofing-Prufung','Fotos versiegelt mit kryptographischer Hash-Kette','Der Auftraggeber verifiziert selbst, ohne Konto','Entwickelt fur Reinigung, Wartung, Sicherheit, Installateure'],
    comp: ['Sehr niedriger offentlicher Preis (0,75-1,25 Euro pro Person)','App, QR, feste Uhr, Biometrie, Gesichtserkennung','Starker Compliance-Fokus (Art. 202 Codigo do Trabalho)','Interne Berichte fur Verwaltung und Lohn','Portugiesischer Anbieter seit 1988'],
    footnote: '* Laut Gesetz (DSGVO Art. 13) muss jeder Mitarbeiter vor der Geolokalisierung eine Datenschutzerklarung unterschreiben. Die meiste GPS-Software handhabt das nicht: das rechtliche Risiko bleibt beim Arbeitgeber. GeoTapp erstellt automatisch die personalisierte Erklarung, lasst sie digital unterschreiben und sperrt den GPS-Zugang, bis sie unterschrieben ist.',
  },
  fr: {
    badge: 'Comparatif d applis', h1sub: 'enregistrer ou prouver ?',
    desc: 'PicaPonto enregistre les presences par appli, QR code, horloge physique et biometrie, a l un des prix publics les plus bas d Europe. GeoTapp produit un rapport avec GPS reel, hachage cryptographique et photos que le client verifie lui-meme et que personne ne peut modifier. Deux approches differentes.',
    summary: 'En resume :',
    summaryText: 'PicaPonto est un excellent systeme de pointage pour ceux qui doivent enregistrer les heures a bas cout, avec de nombreuses methodes et un fort levier de conformite. GeoTapp est pour ceux qui doivent prouver a leur donneur d ordre que le travail a ete fait, avec un rapport infalsifiable que le client controle lui-meme.',
    noteTitle: 'La question qui change le choix',
    noteText: 'PicaPonto repond a "mon registre est-il en ordre si l inspection arrive ?". GeoTapp repond a "comment prouver au client que le travail a ete fait ?". Cela semble la meme question et ce n en est pas une : un registre de presence est pour l Etat et la paie, un rapport infalsifiable est pour cet appel du vendredi soir ou le client conteste la facture. Aucun n est meilleur, ils resolvent des pertes differentes.',
    features: 'Comparaison des fonctionnalites cles', feat: 'Fonctionnalite', diff: 'Des approches differentes',
    cta: 'Envie de voir GeoTapp en action ?',
    ctaDesc: 'Nous vous montrons comment une intervention devient une preuve verifiable, en 10 minutes, sans engagement.',
    ctaBtn: 'Commencez gratuitement !',
    geo: ['Rapport non modifiable, meme par l administrateur','GPS reel avec controle anti-spoofing','Photos scellees par chaine de hachage cryptographique','Le client verifie lui-meme, sans compte','Concu pour le nettoyage, la maintenance, la securite, les installateurs'],
    comp: ['Prix public tres bas (0,75-1,25 euro par personne)','Appli, QR, horloge physique, biometrie, reconnaissance faciale','Fort levier de conformite (Art. 202 Codigo do Trabalho)','Rapports internes pour l administration et la paie','Fournisseur portugais actif depuis 1988'],
    footnote: '* Selon la loi (RGPD Art. 13), chaque salarie doit signer un avis de confidentialite avant d etre geolocalise. La plupart des logiciels GPS ne le gerent pas : le risque juridique reste a l employeur. GeoTapp genere automatiquement l avis personnalise, le fait signer numeriquement et bloque l acces GPS tant qu il n est pas signe.',
  },
  es: {
    badge: 'Comparativa de apps', h1sub: 'registrar o demostrar?',
    desc: 'PicaPonto registra las presencias con app, codigo QR, reloj fisico y biometria, a uno de los precios publicos mas bajos de Europa. GeoTapp produce un informe con GPS real, hash criptografico y fotos que el cliente verifica por su cuenta y que nadie puede modificar. Dos enfoques distintos.',
    summary: 'En resumen:',
    summaryText: 'PicaPonto es un excelente sistema de fichaje para quien necesita registrar las horas a bajo coste, con muchos metodos y una fuerte palanca de cumplimiento. GeoTapp es para quien necesita demostrar a su cliente que el trabajo se hizo, con un informe inalterable que el cliente controla por si mismo.',
    noteTitle: 'La pregunta que cambia la eleccion',
    noteText: 'PicaPonto responde a "tengo el registro en orden si llega la inspeccion?". GeoTapp responde a "como demuestro al cliente que el trabajo se hizo?". Parecen la misma pregunta y no lo son: un registro de presencia es para el Estado y la nomina, un informe inalterable es para esa llamada del viernes por la tarde en la que el cliente discute la factura. Ninguno es mejor, resuelven perdidas distintas.',
    features: 'Comparacion de funciones clave', feat: 'Funcion', diff: 'Enfoques distintos',
    cta: 'Quieres ver GeoTapp en accion?',
    ctaDesc: 'Te mostramos como una intervencion se convierte en una prueba verificable, en 10 minutos, sin compromiso.',
    ctaBtn: 'Empieza gratis!',
    geo: ['Informe no modificable, ni por el administrador','GPS real con control anti-spoofing','Fotos selladas con cadena hash criptografica','El cliente verifica por si mismo, sin cuenta','Disenado para limpieza, mantenimiento, seguridad, instaladores'],
    comp: ['Precio publico bajisimo (0,75-1,25 euro por persona)','App, QR, reloj fisico, biometria, reconocimiento facial','Fuerte palanca de cumplimiento (Art. 202 Codigo do Trabalho)','Informes internos para administracion y nominas','Proveedor portugues activo desde 1988'],
    footnote: '* Por ley (RGPD Art. 13), cada empleado debe firmar un aviso de privacidad antes de ser geolocalizado. La mayoria del software GPS no lo gestiona: el riesgo legal recae en el empleador. GeoTapp genera automaticamente el aviso personalizado, hace que se firme digitalmente y bloquea el acceso GPS hasta que este firmado.',
  },
  pt: {
    badge: 'Comparativo de apps', h1sub: 'registar ou provar?',
    desc: 'O PicaPonto regista as presencas por app, codigo QR, relogio fisico e biometria, a um dos precos publicos mais baixos da Europa. A GeoTapp produz um relatorio com GPS real, hash criptografico e fotos que o cliente verifica sozinho e que ninguem pode alterar. Duas abordagens diferentes.',
    summary: 'Em resumo:',
    summaryText: 'O PicaPonto e um otimo sistema de assiduidade para quem precisa de registar as horas a baixo custo, com muitos metodos e uma forte alavanca de conformidade. A GeoTapp e para quem precisa de provar ao cliente que o trabalho foi feito, com um relatorio inalteravel que o cliente controla sozinho.',
    noteTitle: 'A pergunta que muda a escolha',
    noteText: 'O PicaPonto responde a "tenho o registo em ordem se chegar a inspecao?". A GeoTapp responde a "como provo ao cliente que o trabalho foi feito?". Parecem a mesma pergunta e nao sao: um registo de presenca e para o Estado e o salario, um relatorio inalteravel e para aquele telefonema de sexta a noite em que o cliente contesta a fatura. Nenhum e melhor, resolvem perdas diferentes.',
    features: 'Comparacao das funcionalidades-chave', feat: 'Funcionalidade', diff: 'Abordagens diferentes',
    cta: 'Quer ver a GeoTapp em acao?',
    ctaDesc: 'Mostramos-lhe como uma intervencao se torna uma prova verificavel, em 10 minutos, sem compromisso.',
    ctaBtn: 'Comece gratis!',
    geo: ['Relatorio inalteravel, nem pelo administrador','GPS real com controlo anti-spoofing','Fotos seladas com cadeia hash criptografica','O cliente verifica sozinho, sem conta','Concebido para limpeza, manutencao, seguranca, instaladores'],
    comp: ['Preco publico baixissimo (0,75-1,25 euro por pessoa)','App, QR, relogio fisico, biometria, reconhecimento facial','Forte alavanca de conformidade (Art. 202 Codigo do Trabalho)','Relatorios internos para administracao e salarios','Fornecedor portugues ativo desde 1988'],
    footnote: '* Por lei (RGPD Art. 13), cada trabalhador deve assinar um aviso de privacidade antes de ser geolocalizado. A maioria do software GPS nao trata disto: o risco legal fica com o empregador. A GeoTapp gera automaticamente o aviso personalizado, fa-lo assinar digitalmente e bloqueia o acesso GPS ate estar assinado.',
  },
  nl: {
    badge: 'App-vergelijking', h1sub: 'registreren of bewijzen?',
    desc: 'PicaPonto registreert aanwezigheid via app, QR-code, fysieke klok en biometrie, tegen een van de laagste openbare prijzen van Europa. GeoTapp produceert een rapport met echt GPS, een cryptografische hash en foto s die de klant zelf verifieert en die niemand kan wijzigen. Twee verschillende benaderingen.',
    summary: 'Kort gezegd:',
    summaryText: 'PicaPonto is een uitstekend aanwezigheidssysteem voor wie de uren goedkoop moet registreren, met veel klokmethodes en een sterke nalevingshoek. GeoTapp is voor wie aan zijn opdrachtgever moet bewijzen dat het werk is gedaan, met een onwijzigbaar rapport dat de klant zelf controleert.',
    noteTitle: 'De vraag die de keuze bepaalt',
    noteText: 'PicaPonto beantwoordt "is mijn registratie in orde als de inspectie komt?". GeoTapp beantwoordt "hoe bewijs ik de klant dat het werk is gedaan?". Ze klinken als dezelfde vraag en dat zijn ze niet: een aanwezigheidsregistratie is voor de Staat en het loon, een onwijzigbaar rapport is voor dat telefoontje op vrijdagavond waarin de klant de factuur betwist. Geen van beide is beter, ze lossen verschillende verliezen op.',
    features: 'Vergelijking van kernfuncties', feat: 'Functie', diff: 'Verschillende benaderingen',
    cta: 'GeoTapp in actie zien?',
    ctaDesc: 'We laten je zien hoe een opdracht verifieerbaar bewijs wordt, in 10 minuten, vrijblijvend.',
    ctaBtn: 'Begin gratis!',
    geo: ['Rapport niet wijzigbaar, zelfs niet door de beheerder','Echt GPS met anti-spoofing-controle','Foto s verzegeld met cryptografische hashketen','De klant verifieert zelf, zonder account','Ontworpen voor schoonmaak, onderhoud, beveiliging, installateurs'],
    comp: ['Zeer lage openbare prijs (0,75-1,25 euro per persoon)','App, QR, fysieke klok, biometrie, gezichtsherkenning','Sterke nalevingshoek (Art. 202 Codigo do Trabalho)','Interne rapporten voor administratie en loon','Portugese leverancier actief sinds 1988'],
    footnote: '* Volgens de wet (AVG Art. 13) moet elke werknemer een privacyverklaring ondertekenen voordat hij wordt gelokaliseerd. De meeste GPS-software regelt dit niet: het juridische risico blijft bij de werkgever. GeoTapp genereert automatisch de gepersonaliseerde verklaring, laat die digitaal ondertekenen en blokkeert de GPS-toegang tot ze ondertekend is.',
  },
  da: {
    badge: 'App-sammenligning', h1sub: 'registrere eller bevise?',
    desc: 'PicaPonto registrerer fremmode via app, QR-kode, fysisk ur og biometri, til en af de laveste offentlige priser i Europa. GeoTapp producerer en rapport med aegte GPS, et kryptografisk hash og fotos, som kunden selv verificerer, og som ingen kan aendre. To forskellige tilgange.',
    summary: 'Kort sagt:',
    summaryText: 'PicaPonto er et fremragende fremmodesystem for dem, der skal registrere timer billigt, med mange metoder og en staerk overholdelsesvinkel. GeoTapp er for dem, der skal bevise over for kunden, at arbejdet blev udfort, med en uforanderlig rapport, kunden selv kontrollerer.',
    noteTitle: 'Sporgsmalet, der aendrer valget',
    noteText: 'PicaPonto svarer pa "er mit register i orden, hvis tilsynet kommer?". GeoTapp svarer pa "hvordan beviser jeg over for kunden, at arbejdet blev udfort?". De lyder som det samme sporgsmal, og det er de ikke: et fremmoderegister er til staten og lonnen, en uforanderlig rapport er til det telefonopkald fredag aften, hvor kunden bestrider fakturaen. Ingen er bedre, de loser forskellige tab.',
    features: 'Sammenligning af noglefunktioner', feat: 'Funktion', diff: 'Forskellige tilgange',
    cta: 'Vil du se GeoTapp i aktion?',
    ctaDesc: 'Vi viser dig, hvordan en opgave bliver til verificerbart bevis, pa 10 minutter, uforpligtende.',
    ctaBtn: 'Start gratis!',
    geo: ['Rapport kan ikke aendres, heller ikke af administratoren','Aegte GPS med anti-spoofing-kontrol','Fotos forseglet med kryptografisk hash-kaede','Kunden verificerer selv, uden konto','Designet til rengoring, vedligeholdelse, sikkerhed, installatorer'],
    comp: ['Meget lav offentlig pris (0,75-1,25 euro per person)','App, QR, fysisk ur, biometri, ansigtsgenkendelse','Staerk overholdelsesvinkel (Art. 202 Codigo do Trabalho)','Interne rapporter til administration og lon','Portugisisk leverandor aktiv siden 1988'],
    footnote: '* Ifolge loven (GDPR Art. 13) skal hver medarbejder underskrive en privatlivserklaering, for de geolokaliseres. Det meste GPS-software handterer ikke dette: den juridiske risiko bliver hos arbejdsgiveren. GeoTapp genererer automatisk den personlige erklaering, far den underskrevet digitalt og blokerer GPS-adgang, indtil den er underskrevet.',
  },
  sv: {
    badge: 'App-jamforelse', h1sub: 'registrera eller bevisa?',
    desc: 'PicaPonto registrerar narvaro via app, QR-kod, fysisk klocka och biometri, till ett av de lagsta offentliga priserna i Europa. GeoTapp producerar en rapport med akta GPS, en kryptografisk hash och foton som kunden sjalv verifierar och som ingen kan andra. Tva olika tillvagagangssatt.',
    summary: 'Kort sagt:',
    summaryText: 'PicaPonto ar ett utmarkt narvarosystem for den som behover registrera timmar billigt, med manga metoder och en stark efterlevnadsvinkel. GeoTapp ar for den som behover bevisa for kunden att arbetet gjordes, med en oforanderlig rapport som kunden sjalv kontrollerar.',
    noteTitle: 'Fragan som andrar valet',
    noteText: 'PicaPonto svarar pa "ar mitt register i ordning om inspektionen kommer?". GeoTapp svarar pa "hur bevisar jag for kunden att arbetet gjordes?". De later som samma fraga och ar det inte: ett narvaroregister ar for staten och lonen, en oforanderlig rapport ar for det dar telefonsamtalet pa fredagskvallen dar kunden bestrider fakturan. Ingen ar battre, de loser olika forluster.',
    features: 'Jamforelse av nyckelfunktioner', feat: 'Funktion', diff: 'Olika tillvagagangssatt',
    cta: 'Vill du se GeoTapp i aktion?',
    ctaDesc: 'Vi visar dig hur ett jobb blir verifierbart bevis, pa 10 minuter, utan forpliktelse.',
    ctaBtn: 'Borja gratis!',
    geo: ['Rapport kan inte andras, inte ens av administratoren','Akta GPS med anti-spoofing-kontroll','Foton forseglade med kryptografisk hashkedja','Kunden verifierar sjalv, utan konto','Utformad for stadning, underhall, sakerhet, installatorer'],
    comp: ['Mycket lagt offentligt pris (0,75-1,25 euro per person)','App, QR, fysisk klocka, biometri, ansiktsigenkanning','Stark efterlevnadsvinkel (Art. 202 Codigo do Trabalho)','Interna rapporter for administration och lon','Portugisisk leverantor aktiv sedan 1988'],
    footnote: '* Enligt lag (GDPR Art. 13) maste varje anstalld underteckna ett integritetsmeddelande innan geolokalisering. De flesta GPS-program hanterar inte detta: den rattsliga risken stannar hos arbetsgivaren. GeoTapp genererar automatiskt det personliga meddelandet, later underteckna det digitalt och blockerar GPS-atkomst tills det ar undertecknat.',
  },
  nb: {
    badge: 'App-sammenligning', h1sub: 'registrere eller bevise?',
    desc: 'PicaPonto registrerer oppmote via app, QR-kode, fysisk klokke og biometri, til en av de laveste offentlige prisene i Europa. GeoTapp produserer en rapport med ekte GPS, en kryptografisk hash og bilder som kunden selv verifiserer og som ingen kan endre. To ulike tilnaerminger.',
    summary: 'Kort sagt:',
    summaryText: 'PicaPonto er et utmerket oppmotesystem for den som ma registrere timer billig, med mange metoder og en sterk etterlevelsesvinkel. GeoTapp er for den som ma bevise overfor kunden at arbeidet ble gjort, med en uforanderlig rapport kunden selv kontrollerer.',
    noteTitle: 'Sporsmalet som endrer valget',
    noteText: 'PicaPonto svarer pa "er registeret mitt i orden hvis tilsynet kommer?". GeoTapp svarer pa "hvordan beviser jeg overfor kunden at arbeidet ble gjort?". De hores ut som det samme sporsmalet, og det er de ikke: et oppmoteregister er for staten og lonnen, en uforanderlig rapport er for den telefonsamtalen fredag kveld der kunden bestrider fakturaen. Ingen er bedre, de loser ulike tap.',
    features: 'Sammenligning av nokkelfunksjoner', feat: 'Funksjon', diff: 'Ulike tilnaerminger',
    cta: 'Vil du se GeoTapp i aksjon?',
    ctaDesc: 'Vi viser deg hvordan en jobb blir verifiserbart bevis, pa 10 minutter, uforpliktende.',
    ctaBtn: 'Start gratis!',
    geo: ['Rapport kan ikke endres, ikke engang av administratoren','Ekte GPS med anti-spoofing-kontroll','Bilder forseglet med kryptografisk hash-kjede','Kunden verifiserer selv, uten konto','Utviklet for renhold, vedlikehold, sikkerhet, installatorer'],
    comp: ['Svaert lav offentlig pris (0,75-1,25 euro per person)','App, QR, fysisk klokke, biometri, ansiktsgjenkjenning','Sterk etterlevelsesvinkel (Art. 202 Codigo do Trabalho)','Interne rapporter for administrasjon og lonn','Portugisisk leverandor aktiv siden 1988'],
    footnote: '* Ifolge loven (GDPR Art. 13) ma hver ansatt signere en personvernerklaering for geolokalisering. De fleste GPS-programmer handterer ikke dette: den juridiske risikoen blir hos arbeidsgiveren. GeoTapp genererer automatisk den personlige erklaeringen, far den signert digitalt og blokkerer GPS-tilgang til den er signert.',
  },
  ru: {
    badge: 'Sravnenie prilozhenij', h1sub: 'uchityvat ili dokazyvat?',
    desc: 'PicaPonto registriruet prisutstvie cherez prilozhenie, QR-kod, fizicheskie chasy i biometriyu, po odnoj iz samyh nizkih publichnyh cen v Evrope. GeoTapp sozdayot otchyot s realnym GPS, kriptograficheskim heshem i foto, kotoryj klient proveryaet sam i kotoryj nikto ne mozhet izmenit. Dva raznyh podhoda.',
    summary: 'Korotko:',
    summaryText: 'PicaPonto otlichnaya sistema ucheta prisutstviya dlya teh, komu nuzhno deshevo registrirovat chasy, so mnozhestvom metodov i silnym akcentom na sootvetstvie. GeoTapp dlya teh, komu nuzhno dokazat klientu, chto rabota vypolnena, s neizmenyaemym otchyotom, kotoryj klient proveryaet sam.',
    noteTitle: 'Vopros, kotoryj menyaet vybor',
    noteText: 'PicaPonto otvechaet na vopros "v poryadke li moj uchyot, esli pridyot proverka?". GeoTapp otvechaet na drugoj: "kak dokazat klientu, chto rabota vypolnena?". Eto zvuchit kak odin vopros, no eto ne tak: uchyot prisutstviya dlya gosudarstva i zarplaty, neizmenyaemyj otchyot dlya togo zvonka v pyatnicu vecherom, kogda klient osparivaet schyot. Ni odin ne luchshe, oni reshayut raznye poteri.',
    features: 'Sravnenie klyuchevyh funkcij', feat: 'Funkciya', diff: 'Raznye podhody',
    cta: 'Hotite uvidet GeoTapp v dejstvii?',
    ctaDesc: 'My pokazhem, kak zadanie stanovitsya proveryaemym dokazatelstvom, za 10 minut, bez obyazatelstv.',
    ctaBtn: 'Nachnite besplatno!',
    geo: ['Otchyot nelzya izmenit, dazhe administratoru','Realnyj GPS s proverkoj anti-spoofing','Foto opechatany kriptograficheskoj hesh-cepochkoj','Klient proveryaet sam, bez akkaunta','Razrabotano dlya uborki, obsluzhivaniya, ohrany, montazhnikov'],
    comp: ['Ochen nizkaya publichnaya cena (0,75-1,25 evro za cheloveka)','Prilozhenie, QR, fizicheskie chasy, biometriya, raspoznavanie lica','Silnyj akcent na sootvetstvie (St. 202 Codigo do Trabalho)','Vnutrennie otchyoty dlya administracii i zarplaty','Portugalskij postavshchik, aktiven s 1988 goda'],
    footnote: '* Po zakonu (GDPR St. 13) kazhdyj sotrudnik dolzhen podpisat uvedomlenie o konfidencialnosti do geolokacii. Bolshinstvo GPS-programm etim ne zanimaetsya: yuridicheskij risk ostayotsya na rabotodatele. GeoTapp avtomaticheski sozdayot personalizirovannoe uvedomlenie, dayot podpisat ego cifrovoj podpisyu i blokiruet dostup GPS, poka ono ne podpisano.',
  },
};

const ROWS_LABELS: Record<string, string[]> = {
  it: ['GPS anti-spoofing (rileva posizioni falsificate)','Report sigillato crittograficamente','Verifica indipendente da parte del committente','Prove fotografiche con catena hash crittografata','Conformita GDPR / Garante Privacy','Timbratura da smartphone','QR code check-in','Timbratrice fisica / biometria','App nativa Android/iOS','Prezzo pubblico trasparente','Multi-sede','Report non modificabile dall amministratore','Informativa GPS automatica con firma digitale*'],
  en: ['Anti-spoofing GPS (detects fake positions)','Cryptographically sealed report','Independent verification by client','Photo evidence with cryptographic hash chain','GDPR compliant','Smartphone check-in','QR code check-in','Physical clock / biometrics','Native app Android/iOS','Transparent public pricing','Multi-site','Report not editable by administrator','Automatic GPS privacy notice with digital signature*'],
  de: ['Anti-Spoofing-GPS (erkennt gefalschte Positionen)','Kryptographisch versiegelter Bericht','Unabhangige Prufung durch den Auftraggeber','Fotobeweise mit kryptographischer Hash-Kette','DSGVO-konform','Stempelung per Smartphone','QR-Code-Check-in','Feste Stempeluhr / Biometrie','Native App Android/iOS','Transparenter offentlicher Preis','Mehrere Standorte','Bericht nicht vom Administrator anderbar','Automatische GPS-Datenschutzerklarung mit digitaler Signatur*'],
  fr: ['GPS anti-spoofing (detecte les positions falsifiees)','Rapport scelle cryptographiquement','Verification independante par le client','Preuves photographiques avec chaine de hachage cryptographique','Conforme RGPD','Pointage depuis smartphone','Check-in par QR code','Pointeuse physique / biometrie','Application native Android/iOS','Prix public transparent','Multi-sites','Rapport non modifiable par l administrateur','Avis de confidentialite GPS automatique avec signature numerique*'],
  es: ['GPS anti-spoofing (detecta posiciones falsificadas)','Informe sellado criptograficamente','Verificacion independiente por el cliente','Pruebas fotograficas con cadena hash criptografica','Conforme al RGPD','Fichaje desde smartphone','Check-in por codigo QR','Reloj fisico / biometria','App nativa Android/iOS','Precio publico transparente','Multisede','Informe no modificable por el administrador','Aviso de privacidad GPS automatico con firma digital*'],
  pt: ['GPS anti-spoofing (deteta posicoes falsificadas)','Relatorio selado criptograficamente','Verificacao independente pelo cliente','Provas fotograficas com cadeia hash criptografica','Conforme o RGPD','Registo a partir do smartphone','Check-in por codigo QR','Relogio fisico / biometria','App nativa Android/iOS','Preco publico transparente','Multilocal','Relatorio nao modificavel pelo administrador','Aviso de privacidade GPS automatico com assinatura digital*'],
  nl: ['Anti-spoofing-GPS (detecteert vervalste posities)','Cryptografisch verzegeld rapport','Onafhankelijke verificatie door de klant','Fotobewijs met cryptografische hashketen','AVG-conform','Registratie via smartphone','Check-in via QR-code','Fysieke klok / biometrie','Native app Android/iOS','Transparante openbare prijs','Meerdere locaties','Rapport niet wijzigbaar door beheerder','Automatische GPS-privacyverklaring met digitale handtekening*'],
  da: ['Anti-spoofing-GPS (registrerer forfalskede positioner)','Kryptografisk forseglet rapport','Uafhaengig verificering af kunden','Fotobeviser med kryptografisk hash-kaede','GDPR-kompatibel','Registrering fra smartphone','Check-in via QR-kode','Fysisk ur / biometri','Native app Android/iOS','Transparent offentlig pris','Flere lokationer','Rapport kan ikke aendres af administratoren','Automatisk GPS-privatlivserklaering med digital signatur*'],
  sv: ['Anti-spoofing-GPS (upptacker forfalskade positioner)','Kryptografiskt forseglad rapport','Oberoende verifiering av kunden','Fotobevis med kryptografisk hashkedja','GDPR-kompatibel','Incheckning fran smartphone','Incheckning via QR-kod','Fysisk klocka / biometri','Native app Android/iOS','Transparent offentligt pris','Flera arbetsplatser','Rapport kan inte andras av administratoren','Automatiskt GPS-integritetsmeddelande med digital signatur*'],
  nb: ['Anti-spoofing-GPS (oppdager forfalskede posisjoner)','Kryptografisk forseglet rapport','Uavhengig verifisering av oppdragsgiver','Fotobevis med kryptografisk hash-kjede','GDPR-kompatibel','Registrering fra smarttelefon','Innsjekking via QR-kode','Fysisk klokke / biometri','Native app Android/iOS','Transparent offentlig pris','Flere lokasjoner','Rapport kan ikke endres av administratoren','Automatisk GPS-personvernerklaering med digital signatur*'],
  ru: ['Anti-spoofing GPS (vyyavlyaet podelku)','Kriptograficheski opechatannyj otchyot','Nezavisimaya proverka klientom','Fotodokazatelstva s hesh-cepochkoj','Sootvetstvie GDPR','Otmetka so smartfona','Otmetka po QR-kodu','Fizicheskie chasy / biometriya','Nativnoe prilozhenie Android/iOS','Prozrachnaya publichnaya cena','Neskolko obektov','Otchyot ne izmenyaem administratorom','Avtomaticheskoe uvedomlenie o GPS s cifrovoj podpisyu*'],
};
// GeoTapp: tutto vero. PicaPonto: falso su prova/sigillo/verifica/foto/immutabile;
// vero su GDPR, smartphone, QR, timbratrice fisica+biometria, app nativa, prezzo pubblico, multi-sede.
const ROWS_GEO =  [true, true, true, true, true, true, true, false, true, false, true, true, true];
const ROWS_COMP = [false,false,false,false,true, true, true, true,  true, true,  true, false,false];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] ?? META.en;
  return {
    title: m.title,
    description: m.description,
    alternates: buildLocaleAlternates(locale, PATHNAME),
  };
}

export default async function GeoTappVsPicaPontoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = T[locale] ?? T.en;
  const faqItems = FAQ[locale] ?? FAQ.en;
  const labels = ROWS_LABELS[locale] ?? ROWS_LABELS.en;
  const rows = labels.map((feature, i) => ({ feature, geotapp: ROWS_GEO[i], competitor: ROWS_COMP[i] }));

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  const breadcrumb = buildComparisonBreadcrumb({ locale, pathname: PATHNAME, competitorName: 'PicaPonto' });
  const meta = META[locale] ?? META.en;
  const article = buildComparisonArticle({ locale, pathname: PATHNAME, headline: meta.title, description: meta.description, datePublished: ARTICLE_DATE_PUBLISHED, dateModified: ARTICLE_DATE_MODIFIED });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ComparisonPageL
        locale={locale}
        competitorName="PicaPonto"
        competitorId="picaponto"
        badge={t.badge}
        h1sub={t.h1sub}
        desc={t.desc}
        summaryLabel={t.summary}
        summaryText={t.summaryText}
        featuresTitle={t.features}
        featureColLabel={t.feat}
        footnote={t.footnote}
        diffTitle={t.diff}
        geoItems={t.geo}
        compItems={t.comp}
        note={{ title: t.noteTitle, text: t.noteText }}
        rows={rows}
        faqItems={faqItems}
        ctaTitle={t.cta}
        ctaDesc={t.ctaDesc}
        ctaBtn={t.ctaBtn}
      />
    </>
  );
}
