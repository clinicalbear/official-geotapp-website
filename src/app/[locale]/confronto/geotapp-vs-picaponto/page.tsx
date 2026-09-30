import type { Metadata } from 'next';
import ComparisonPageL from '@/components/ComparisonPageL';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-picaponto/';
const ARTICLE_DATE_PUBLISHED = '2026-07-16';
const ARTICLE_DATE_MODIFIED = '2026-07-16';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs PicaPonto - Confronto 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: registrare o dimostrare? Confronto su prezzo, metodi di timbratura, conformità e report sigillati verificabili dal committente.' },
  en: { title: 'GeoTapp vs PicaPonto - Comparison 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: recording or proving? Comparison on price, clock-in methods, compliance and sealed reports the client can verify alone.' },
  de: { title: 'GeoTapp vs PicaPonto - Vergleich 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: erfassen oder belegen? Vergleich von Preis, Stempelmethoden, Rechtslage und versiegelten Berichten, die der Auftraggeber überprüfen kann.' },
  fr: { title: 'GeoTapp vs PicaPonto - Comparatif 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto : enregistrer ou démontrer ? Prix, modes de pointage, conformité et rapports scellés que le client peut vérifier.' },
  es: { title: 'GeoTapp vs PicaPonto - Comparación 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: ¿registrar o demostrar? Comparación de precio, métodos de fichaje, normativa e informes sellados que el cliente puede verificar.' },
  pt: { title: 'GeoTapp vs PicaPonto - Comparação 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: registar ou provar? Comparação de preço, métodos de picagem, conformidade e relatórios selados verificáveis pelo cliente.' },
  nl: { title: 'GeoTapp vs PicaPonto - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: registreren of aantonen? Vergelijking op prijs, registratiemethoden, naleving en verzegelde rapporten die de opdrachtgever kan controleren.' },
  da: { title: 'GeoTapp vs PicaPonto - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: registrere eller bevise? Sammenlign pris, stemplingsmetoder, overholdelse og uforanderlige rapporter kunden selv kan verificere.' },
  sv: { title: 'GeoTapp vs PicaPonto - Jamforelse 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: registrera eller bevisa? Jamfor pris, stamplingsmetoder, efterlevnad och oforanderliga rapporter kunden sjalv kan verifiera.' },
  nb: { title: 'GeoTapp vs PicaPonto - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: registrere eller bevise? Sammenlign pris, stemplingsmetoder, etterlevelse og uforanderlige rapporter kunden selv kan verifisere.' },
  ru: { title: 'GeoTapp vs PicaPonto - Sravnenie 2026 | GeoTapp', description: 'GeoTapp vs PicaPonto: uchityvat ili dokazyvat? Sravnite cenu, sposoby otmetki, sootvetstvie i neizmenyaemye otchyoty, kotorye klient proveryaet sam.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza principale tra GeoTapp e PicaPonto?', a: 'PicaPonto è un sistema di rilevazione presenze: registra entrate e uscite con app, QR code, orologio fisico e biometria, a un prezzo pubblico molto basso. GeoTapp è un sistema di prova del lavoro: produce un report con posizione, ora, impronte crittografiche e foto che il committente verifica da solo, e se qualcuno lo modifica, amministratore compreso, la verifica lo segnala. La differenza è tra registrare una presenza e dimostrarla a un terzo.' },
    { q: 'Quanto costa PicaPonto rispetto a GeoTapp?', a: 'PicaPonto pubblica i prezzi: 0,75 euro per collaboratore al mese nel piano Basic, 1,25 nel Premium, con minimi di 12,50 e 22,50 euro. È tra i più bassi in Europa. Se il prezzo per collaboratore è il fattore decisivo, PicaPonto è molto competitivo. GeoTapp risolve un problema diverso, la prova verso il committente, e non compete sul prezzo più basso.' },
    { q: 'PicaPonto ha più metodi di timbratura di GeoTapp?', a: 'Sì. PicaPonto offre app, browser, QR code, orologio marcatempo fisico, biometria e riconoscimento facciale. GeoTapp vive sullo smartphone. Se hai personale senza smartphone o una portineria con lettore a parete, PicaPonto copre quel caso e GeoTapp no.' },
    { q: 'Il committente può verificare i report?', a: 'PicaPonto genera report interni per l\'amministrazione e le buste paga. GeoTapp genera un report con sigillo crittografico che il committente verifica da solo, senza account e senza doversi fidare dell\'azienda. Un registro che il datore di lavoro può correggere senza lasciare traccia non si può verificare allo stesso modo di un report sigillato.' },
  ],
  en: [
    { q: 'What is the main difference between GeoTapp and PicaPonto?', a: 'PicaPonto is an attendance system: it records clock-ins and clock-outs via app, QR code, physical clock and biometrics, at a very low public price. GeoTapp is a proof-of-work system: it produces a report with location, time, cryptographic fingerprints and photos that the client verifies alone, and if anyone edits it, the administrator included, the check flags it. The difference is between recording a presence and proving it to a third party.' },
    { q: 'How much does PicaPonto cost compared to GeoTapp?', a: 'PicaPonto publishes its prices: 0.75 euro per worker per month on Basic, 1.25 on Premium, with minimums of 12.50 and 22.50 euro. It is among the lowest in Europe. If the price per worker is the deciding factor, PicaPonto is very competitive. GeoTapp solves a different problem, proof to the client, and does not compete on the lowest price.' },
    { q: 'Does PicaPonto have more clock-in methods than GeoTapp?', a: 'Yes. PicaPonto offers app, browser, QR code, physical time clock, biometrics and facial recognition. GeoTapp lives on the smartphone. If you have staff without a smartphone or a front desk with a wall reader, PicaPonto covers that case and GeoTapp does not.' },
    { q: 'Can the client verify the reports?', a: 'PicaPonto generates internal reports for administration and payroll. GeoTapp generates a report with a cryptographic seal that the client verifies alone, without an account and without having to trust the company. A record the employer can correct without leaving a trace cannot be verified in the same way as a sealed report.' },
  ],
  de: [
    { q: 'Was ist der Hauptunterschied zwischen GeoTapp und PicaPonto?', a: 'PicaPonto ist ein System zur Anwesenheitserfassung: Es erfasst Beginn und Ende der Arbeitszeit per App, QR-Code, physischer Stempeluhr und Biometrie, zu einem sehr niedrigen öffentlichen Preis. GeoTapp ist ein System für den Arbeitsnachweis: Es erstellt einen Bericht mit Position, Uhrzeit, kryptographischen Fingerabdrücken und Fotos, den der Auftraggeber selbst überprüft, und wenn jemand ihn verändert, auch der Administrator, meldet das die Prüfung. Der Unterschied liegt zwischen einer erfassten Anwesenheit und einer, die man gegenüber Dritten belegen kann.' },
    { q: 'Was kostet PicaPonto im Vergleich zu GeoTapp?', a: 'PicaPonto veröffentlicht seine Preise: 0,75 € pro Mitarbeiter und Monat im Tarif Basic, 1,25 € im Premium, mit Mindestbeträgen von 12,50 € und 22,50 €. Das gehört zu den niedrigsten in Europa. Wenn der Preis pro Mitarbeiter den Ausschlag gibt, ist PicaPonto sehr wettbewerbsfähig. GeoTapp löst ein anderes Problem, den Nachweis gegenüber dem Auftraggeber, und konkurriert nicht über den niedrigsten Preis.' },
    { q: 'Hat PicaPonto mehr Stempelmethoden als GeoTapp?', a: 'Ja. PicaPonto bietet App, Browser, QR-Code, physische Stempeluhr, Biometrie und Gesichtserkennung. GeoTapp lebt auf dem Smartphone. Wenn Sie Personal ohne Smartphone haben oder eine Pforte mit Wandterminal, deckt PicaPonto diesen Fall ab, GeoTapp nicht.' },
    { q: 'Kann der Auftraggeber die Berichte überprüfen?', a: 'PicaPonto erstellt interne Berichte für Verwaltung und Lohnabrechnung. GeoTapp erstellt einen Bericht mit kryptographischem Siegel, den der Auftraggeber selbst überprüft, ohne Konto und ohne dem Unternehmen vertrauen zu müssen. Ein Register, das der Arbeitgeber ohne Spuren korrigieren kann, lässt sich nicht auf dieselbe Weise überprüfen wie ein versiegelter Bericht.' },
  ],
  fr: [
    { q: 'Quelle est la différence principale entre GeoTapp et PicaPonto ?', a: 'PicaPonto est un système de suivi des présences : il enregistre arrivées et départs avec une app, un QR code, une pointeuse physique et la biométrie, à un prix public très bas. GeoTapp est un système de preuve du travail : il produit un rapport avec position, heure, empreintes cryptographiques et photos que le client vérifie lui-même, et si quelqu\'un le modifie, administrateur compris, la vérification le signale. La différence, c\'est celle entre enregistrer une présence et la démontrer à un tiers.' },
    { q: 'Combien coûte PicaPonto par rapport à GeoTapp ?', a: 'PicaPonto publie ses prix : 0,75 € par collaborateur et par mois dans l\'offre Basic, 1,25 € dans la Premium, avec des minimums de 12,50 € et 22,50 €. C\'est l\'un des plus bas d\'Europe. Si le prix par collaborateur est le facteur décisif, PicaPonto est très compétitif. GeoTapp résout un problème différent, la preuve vis-à-vis du client, et ne joue pas sur le prix le plus bas.' },
    { q: 'PicaPonto a-t-il plus de modes de pointage que GeoTapp ?', a: 'Oui. PicaPonto propose l\'app, le navigateur, le QR code, la pointeuse physique, la biométrie et la reconnaissance faciale. GeoTapp vit sur le smartphone. Si vous avez du personnel sans smartphone ou une loge avec un lecteur mural, PicaPonto couvre ce cas et GeoTapp non.' },
    { q: 'Le client peut-il vérifier les rapports ?', a: 'PicaPonto génère des rapports internes pour l\'administration et les fiches de paie. GeoTapp génère un rapport avec un sceau cryptographique que le client vérifie lui-même, sans compte et sans avoir à se fier à l\'entreprise. Un registre que l\'employeur peut corriger sans laisser de trace ne se vérifie pas de la même façon qu\'un rapport scellé.' },
  ],
  es: [
    { q: '¿Cuál es la diferencia principal entre GeoTapp y PicaPonto?', a: 'PicaPonto es un sistema de control de presencia: registra entradas y salidas con app, código QR, reloj físico y biometría, a un precio público muy bajo. GeoTapp es un sistema de prueba del trabajo: produce un informe con posición, hora, huellas criptográficas y fotos que el cliente verifica por sí mismo, y si alguien lo modifica, administrador incluido, la verificación lo señala. La diferencia está entre registrar una presencia y demostrarla ante un tercero.' },
    { q: '¿Cuánto cuesta PicaPonto frente a GeoTapp?', a: 'PicaPonto publica sus precios: 0,75 euros por colaborador al mes en el plan Basic y 1,25 en el Premium, con mínimos de 12,50 y 22,50 euros. Está entre los más bajos de Europa. Si el precio por colaborador es el factor decisivo, PicaPonto es muy competitivo. GeoTapp resuelve otro problema, la prueba ante el cliente, y no compite por el precio más bajo.' },
    { q: '¿Tiene PicaPonto más métodos de fichaje que GeoTapp?', a: 'Sí. PicaPonto ofrece app, navegador, código QR, reloj de fichar físico, biometría y reconocimiento facial. GeoTapp vive en el smartphone. Si tienes personal sin smartphone o una recepción con lector de pared, PicaPonto cubre ese caso y GeoTapp no.' },
    { q: '¿Puede el cliente verificar los informes?', a: 'PicaPonto genera informes internos para la administración y las nóminas. GeoTapp genera un informe con sello criptográfico que el cliente verifica por sí mismo, sin cuenta y sin tener que fiarse de la empresa. Un registro que el empleador puede corregir sin dejar rastro no se puede verificar del mismo modo que un informe sellado.' },
  ],
  pt: [
    { q: 'Qual é a principal diferença entre a GeoTapp e o PicaPonto?', a: 'O PicaPonto é um sistema de registo de presenças: regista entradas e saídas por app, código QR, relógio físico e biometria, a um preço público muito baixo. A GeoTapp é um sistema de prova do trabalho: produz um relatório com posição, hora, impressões digitais criptográficas e fotos que o cliente verifica sozinho e, se alguém o alterar, administrador incluído, a verificação assinala-o. A diferença está entre registar uma presença e demonstrá-la a um terceiro.' },
    { q: 'Quanto custa o PicaPonto em comparação com a GeoTapp?', a: 'O PicaPonto publica os preços: 0,75 € por colaborador por mês no plano Basic, 1,25 € no Premium, com mínimos de 12,50 € e 22,50 €. Está entre os mais baixos da Europa. Se o preço por colaborador é o fator decisivo, o PicaPonto é muito competitivo. A GeoTapp resolve um problema diferente, a prova perante o cliente, e não compete pelo preço mais baixo.' },
    { q: 'O PicaPonto tem mais métodos de picagem do que a GeoTapp?', a: 'Sim. O PicaPonto oferece app, navegador, código QR, relógio de ponto físico, biometria e reconhecimento facial. A GeoTapp vive no smartphone. Se tem pessoal sem smartphone ou uma portaria com leitor de parede, o PicaPonto cobre esse caso e a GeoTapp não.' },
    { q: 'O cliente pode verificar os relatórios?', a: 'O PicaPonto gera relatórios internos para a administração e para os recibos de vencimento. A GeoTapp gera um relatório com selo criptográfico que o cliente verifica sozinho, sem conta e sem ter de confiar na empresa. Um registo que o empregador pode corrigir sem deixar rasto não se verifica da mesma forma que um relatório selado.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en PicaPonto?', a: 'PicaPonto is een systeem voor aanwezigheidsregistratie: het legt aankomst en vertrek vast met app, QR-code, fysieke prikklok en biometrie, tegen een zeer lage openbare prijs. GeoTapp is een systeem voor bewijs van het werk: het maakt een rapport met locatie, tijd, cryptografische vingerafdrukken en foto\'s dat de opdrachtgever zelf controleert, en als iemand het wijzigt, de beheerder inbegrepen, meldt de controle het. Het verschil zit tussen een aanwezigheid registreren en haar aan een derde aantonen.' },
    { q: 'Wat kost PicaPonto vergeleken met GeoTapp?', a: 'PicaPonto publiceert de prijzen: 0,75 euro per medewerker per maand in het Basic-abonnement, 1,25 in het Premium-abonnement, met minimumbedragen van 12,50 en 22,50 euro. Het is een van de laagste in Europa. Is de prijs per medewerker de doorslaggevende factor, dan is PicaPonto zeer concurrerend. GeoTapp lost een ander probleem op, het bewijs richting de opdrachtgever, en concurreert niet op de laagste prijs.' },
    { q: 'Heeft PicaPonto meer registratiemethoden dan GeoTapp?', a: 'Ja. PicaPonto biedt app, browser, QR-code, fysieke prikklok, biometrie en gezichtsherkenning. GeoTapp leeft op de smartphone. Hebt u personeel zonder smartphone of een portiersloge met een lezer aan de muur, dan dekt PicaPonto dat geval en GeoTapp niet.' },
    { q: 'Kan de opdrachtgever de rapporten controleren?', a: 'PicaPonto maakt interne rapporten voor de administratie en de loonstroken. GeoTapp maakt een rapport met cryptografische verzegeling dat de opdrachtgever zelf controleert, zonder account en zonder het bedrijf te hoeven vertrouwen. Een register dat de werkgever zonder sporen kan corrigeren, is niet op dezelfde manier te controleren als een verzegeld rapport.' },
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
    desc: 'PicaPonto registra le presenze con app, QR code, orologio fisico e biometria, a un prezzo pubblico tra i più bassi d\'Europa. GeoTapp produce un report con posizione, ora, impronte crittografiche e foto che il committente verifica da solo, e dove ogni modifica successiva è rilevabile. Due approcci diversi.',
    summary: 'In sintesi:',
    summaryText: 'PicaPonto è un ottimo sistema di presenze per chi deve registrare le ore a basso costo, con molti metodi di timbratura e molta attenzione agli obblighi di legge sul registro presenze. GeoTapp è per chi deve mostrare al committente le prove del lavoro, con un report sigillato che il cliente controlla da solo.',
    noteTitle: 'La domanda che cambia la scelta',
    noteText: 'PicaPonto risponde a «ho il registro in ordine se arriva l\'ispezione?». GeoTapp risponde a «come mostro al cliente le prove del lavoro?». Sembrano la stessa domanda e non lo sono: un registro presenze serve allo Stato e alla busta paga, un report sigillato serve per quella telefonata del venerdì sera in cui il cliente contesta la fattura. Nessuno dei due è migliore: risolvono perdite diverse.',
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità', diff: 'Approcci diversi',
    cta: 'Vuoi vedere GeoTapp in azione?',
    ctaDesc: 'Provalo su un intervento vero: 14 giorni gratis, senza carta di credito.',
    ctaBtn: 'Inizia la prova gratuita',
    geo: ['Report sigillato: si vede anche una modifica dell\'amministratore','Alla timbratura rifiuta le posizioni simulate','Foto con impronta SHA-256 dentro il report','Il committente verifica da solo, senza account','Progettato per pulizie, manutenzione, sicurezza, installatori'],
    comp: ['Prezzo pubblico bassissimo (0,75-1,25 euro per persona)','App, QR, orologio fisico, biometria, riconoscimento facciale','Pensato per il registro presenze che la legge portoghese impone (art. 202 del Codice del lavoro portoghese)','Report interni per amministrazione e buste paga','Fornitore portoghese attivo dal 1988'],
    footnote: '* Per legge (art. 13 GDPR e, in Italia, art. 4 dello Statuto dei Lavoratori) ogni dipendente va informato prima di essere geolocalizzato. Se il software lascia questo passaggio al titolare, il rischio resta a lui. GeoTapp prepara l\'informativa personalizzata, la fa firmare per presa visione nell\'app e non lascia timbrare finché non è firmata.',
  },
  en: {
    badge: 'App Comparison', h1sub: 'recording or proving?',
    desc: 'PicaPonto records attendance via app, QR code, physical clock and biometrics, at one of the lowest public prices in Europe. GeoTapp produces a report with location, time, cryptographic fingerprints and photos that the client verifies alone, and in which every later change is detectable. Two different approaches.',
    summary: 'Bottom line:',
    summaryText: 'PicaPonto is a great attendance system for companies that need to record hours cheaply, with many clock-in methods and close attention to the legal obligations on the attendance register. GeoTapp is for companies that need to show the client proof of the work, with a sealed report the client checks alone.',
    noteTitle: 'The question that changes the choice',
    noteText: 'PicaPonto answers “is my register in order if the inspector arrives?”. GeoTapp answers “how do I show the client proof of the work?”. They sound like the same question and they are not: an attendance register is for the State and payroll, a sealed report is for that Friday-evening phone call where the client disputes the invoice. Neither is better: they solve different losses.',
    features: 'Key features comparison', feat: 'Feature', diff: 'Different approaches',
    cta: 'Want to see GeoTapp in action?',
    ctaDesc: 'Try it on a real job: 14 days free, no credit card.',
    ctaBtn: 'Start the free trial',
    geo: ['Sealed report: an edit by the administrator shows too','At clock-in it rejects simulated positions','Photos with SHA-256 fingerprint inside the report','The client verifies alone, without an account','Designed for cleaning, maintenance, security, installers'],
    comp: ['Very low public price (0.75-1.25 euro per person)','App, QR, physical clock, biometrics, facial recognition','Built for the attendance register that Portuguese law requires (Art. 202 of the Portuguese Labour Code)','Internal reports for administration and payroll','Portuguese supplier active since 1988'],
    footnote: '* By law (Art. 13 GDPR and, in Italy, Art. 4 of the Workers\' Statute), every employee must be informed before being geolocated. If the software leaves this step to the employer, the risk stays with them. GeoTapp prepares the personalised notice, has it signed for acknowledgement in the app and does not let staff clock in until it is signed.',
  },
  de: {
    badge: 'App-Vergleich', h1sub: 'erfassen oder belegen?',
    desc: 'PicaPonto erfasst die Anwesenheit per App, QR-Code, physischer Stempeluhr und Biometrie, zu einem öffentlichen Preis, der zu den niedrigsten in Europa gehört. GeoTapp erstellt einen Bericht mit Position, Uhrzeit, kryptographischen Fingerabdrücken und Fotos, den der Auftraggeber selbst überprüft und in dem jede spätere Änderung erkennbar ist. Zwei verschiedene Ansätze.',
    summary: 'Kurz gesagt:',
    summaryText: 'PicaPonto ist ein gutes Anwesenheitssystem für alle, die Stunden günstig erfassen müssen, mit vielen Stempelmethoden und viel Aufmerksamkeit für die gesetzlichen Pflichten beim Anwesenheitsregister. GeoTapp ist für alle, die dem Auftraggeber Arbeitsnachweise vorlegen müssen, mit einem versiegelten Bericht, den der Kunde selbst prüft.',
    noteTitle: 'Die Frage, die die Wahl verändert',
    noteText: 'PicaPonto beantwortet „Ist mein Register in Ordnung, wenn die Kontrolle kommt?“. GeoTapp beantwortet „Wie zeige ich dem Kunden die Nachweise der Arbeit?“. Das scheint dieselbe Frage zu sein, ist es aber nicht: Ein Anwesenheitsregister dient dem Staat und der Lohnabrechnung, ein versiegelter Bericht dem Anruf am Freitagabend, in dem der Kunde die Rechnung beanstandet. Keines von beiden ist besser: Sie lösen verschiedene Verluste.',
    features: 'Vergleich der wichtigsten Funktionen', feat: 'Funktion', diff: 'Verschiedene Ansätze',
    cta: 'Möchten Sie GeoTapp in Aktion sehen?',
    ctaDesc: 'Testen Sie es an einem echten Einsatz: 14 Tage kostenlos, keine Kreditkarte.',
    ctaBtn: 'Kostenlos testen',
    geo: ['Versiegelter Bericht: Auch eine Änderung durch den Administrator fällt auf','Weist beim Stempeln simulierte Positionen ab','Fotos mit SHA-256-Fingerabdruck im Bericht','Der Auftraggeber prüft selbst, ohne Konto','Gedacht für Reinigung, Wartung, Sicherheit, Installateure'],
    comp: ['Sehr niedriger öffentlicher Preis (0,75 bis 1,25 € pro Person)','App, QR, physische Stempeluhr, Biometrie, Gesichtserkennung','Gedacht für das Anwesenheitsregister, das das portugiesische Recht vorschreibt (Art. 202 des portugiesischen Arbeitsgesetzbuchs)','Interne Berichte für Verwaltung und Lohnabrechnung','Portugiesischer Anbieter, aktiv seit 1988'],
    footnote: '* Nach geltendem Recht (Art. 13 DSGVO und in Italien Art. 4 des Arbeitnehmerstatuts) muss jeder Mitarbeiter informiert werden, bevor er geortet wird. Überlässt die Software diesen Schritt dem Arbeitgeber, bleibt das Risiko bei ihm. GeoTapp erstellt die personalisierte Information, lässt sie in der App zur Kenntnisnahme unterschreiben und lässt erst danach das Stempeln zu.',
  },
  fr: {
    badge: 'Comparatif d\'applis',
    h1sub: 'enregistrer ou démontrer ?',
    desc: 'PicaPonto enregistre les présences avec une app, un QR code, une pointeuse physique et la biométrie, à un prix public parmi les plus bas d\'Europe. GeoTapp produit un rapport avec position, heure, empreintes cryptographiques et photos que le client vérifie lui-même, et où toute modification ultérieure est détectable. Deux approches différentes.',
    summary: 'En résumé :',
    summaryText: 'PicaPonto est un très bon système de présences pour qui doit enregistrer les heures à bas coût, avec de nombreux modes de pointage et une grande attention aux obligations légales sur le registre des présences. GeoTapp s\'adresse à qui doit montrer au client les preuves du travail, avec un rapport scellé que le client contrôle lui-même.',
    noteTitle: 'La question qui change le choix',
    noteText: 'PicaPonto répond à « mon registre est-il en ordre si l\'inspection arrive ? ». GeoTapp répond à « comment montrer au client les preuves du travail ? ». Cela ressemble à la même question, et ce n\'en est pas une : un registre des présences sert à l\'État et à la fiche de paie, un rapport scellé sert pour ce coup de téléphone du vendredi soir où le client conteste la facture. Aucun n\'est meilleur que l\'autre : ils évitent des pertes différentes.',
    features: 'Comparaison des fonctionnalités clés',
    feat: 'Fonctionnalité',
    diff: 'Des approches différentes',
    cta: 'Envie de voir GeoTapp en action ?',
    ctaDesc: 'Essayez-le sur une intervention réelle : 14 jours gratuits, sans carte bancaire.',
    ctaBtn: 'Commencer l\'essai gratuit',
    geo: ['Rapport scellé : même une modification par l\'administrateur se voit','Au pointage, refuse les positions simulées','Photos avec empreinte SHA-256 dans le rapport','Le client vérifie lui-même, sans compte','Conçu pour le nettoyage, la maintenance, la sécurité, les installateurs'],
    comp: ['Prix public très bas (0,75 à 1,25 € par personne)','App, QR, pointeuse physique, biométrie, reconnaissance faciale','Pensé pour le registre des présences qu\'impose la loi portugaise (art. 202 du Code du travail portugais)','Rapports internes pour l\'administration et les fiches de paie','Fournisseur portugais actif depuis 1988'],
    footnote: '* Selon la loi (art. 13 du RGPD et, en Italie, art. 4 du Statut des travailleurs), chaque salarié doit être informé avant d\'être géolocalisé. Si le logiciel laisse cette étape à l\'employeur, le risque lui reste. GeoTapp prépare l\'information personnalisée, la fait signer pour prise de connaissance dans l\'app et ne laisse pas pointer tant qu\'elle n\'est pas signée.',
  },
  es: {
    badge: 'Comparativa de apps', h1sub: '¿registrar o demostrar?',
    desc: 'PicaPonto registra las presencias con app, código QR, reloj físico y biometría, a un precio público de los más bajos de Europa. GeoTapp produce un informe con posición, hora, huellas criptográficas y fotos que el cliente verifica por sí mismo, y en el que cualquier modificación posterior es detectable. Dos enfoques distintos.',
    summary: 'En resumen:',
    summaryText: 'PicaPonto es un muy buen sistema de presencia para quien debe registrar las horas a bajo coste, con muchos métodos de fichaje y mucha atención a las obligaciones legales sobre el registro de presencia. GeoTapp es para quien debe mostrar al cliente las pruebas del trabajo, con un informe sellado que el cliente comprueba por sí mismo.',
    noteTitle: 'La pregunta que cambia la elección',
    noteText: 'PicaPonto responde a «¿tengo el registro en orden si llega la inspección?». GeoTapp responde a «¿cómo muestro al cliente las pruebas del trabajo?». Parecen la misma pregunta y no lo son: un registro de presencia sirve al Estado y a la nómina; un informe sellado sirve para esa llamada del viernes por la tarde en la que el cliente discute la factura. Ninguno es mejor: resuelven pérdidas distintas.',
    features: 'Comparación de funciones clave', feat: 'Función', diff: 'Enfoques distintos',
    cta: '¿Quieres ver GeoTapp en acción?',
    ctaDesc: 'Pruébalo en una intervención real: 14 días gratis, sin tarjeta de crédito.',
    ctaBtn: 'Empieza la prueba gratuita',
    geo: ['Informe sellado: también se ve una modificación del administrador','Al fichar rechaza las posiciones simuladas','Fotos con huella SHA-256 dentro del informe','El cliente verifica por sí mismo, sin cuenta','Diseñado para limpieza, mantenimiento, seguridad e instaladores'],
    comp: ['Precio público bajísimo (0,75-1,25 euros por persona)','App, QR, reloj físico, biometría, reconocimiento facial','Pensado para el registro de presencia que impone la ley portuguesa (art. 202 del Código del Trabajo portugués)','Informes internos para administración y nóminas','Proveedor portugués activo desde 1988'],
    footnote: '* Por ley (art. 13 del RGPD y, en Italia, art. 4 del Estatuto de los Trabajadores italiano) hay que informar a cada empleado antes de geolocalizarlo. Si el software deja este paso en manos del titular, el riesgo sigue siendo suyo. GeoTapp prepara el aviso personalizado, lo hace firmar en la app como recibido y no deja fichar hasta que está firmado.',
  },
  pt: {
    badge: 'Comparativo de apps', h1sub: 'registar ou demonstrar?',
    desc: 'O PicaPonto regista as presenças por app, código QR, relógio físico e biometria, a um dos preços públicos mais baixos da Europa. A GeoTapp produz um relatório com posição, hora, impressões digitais criptográficas e fotos que o cliente verifica sozinho e em que qualquer alteração posterior é detetável. Duas abordagens diferentes.',
    summary: 'Em resumo:',
    summaryText: 'O PicaPonto é um ótimo sistema de registo de presenças para quem precisa de registar as horas a baixo custo, com muitos métodos de picagem e muita atenção às obrigações legais sobre o registo de presenças. A GeoTapp é para quem precisa de mostrar ao cliente as provas do trabalho, com um relatório selado que o cliente verifica sozinho.',
    noteTitle: 'A pergunta que muda a escolha',
    noteText: 'O PicaPonto responde a «tenho o registo em ordem se chegar a inspeção?». A GeoTapp responde a «como mostro ao cliente as provas do trabalho?». Parecem a mesma pergunta e não são: um registo de presenças serve o Estado e o recibo de vencimento, um relatório selado serve para aquele telefonema de sexta à noite em que o cliente contesta a fatura. Nenhum é melhor: resolvem perdas diferentes.',
    features: 'Comparação das funcionalidades-chave', feat: 'Funcionalidade', diff: 'Abordagens diferentes',
    cta: 'Quer ver a GeoTapp em ação?',
    ctaDesc: 'Experimente numa intervenção real: 14 dias grátis, sem cartão de crédito.',
    ctaBtn: 'Começar teste gratuito',
    geo: ['Relatório selado: vê-se até uma alteração do administrador','Ao picar o ponto, rejeita as posições simuladas','Fotos com impressão digital SHA-256 dentro do relatório','O cliente verifica sozinho, sem conta','Concebido para limpeza, manutenção, segurança, instaladores'],
    comp: ['Preço público baixíssimo (0,75-1,25 € por pessoa)','App, QR, relógio físico, biometria, reconhecimento facial','Pensado para o registo de presenças que a lei portuguesa impõe (art. 202.º do Código do Trabalho)','Relatórios internos para administração e recibos de vencimento','Fornecedor português ativo desde 1988'],
    footnote: '* Por lei (art. 13.º do RGPD e, em Itália, art. 4.º do Estatuto dos Trabalhadores italiano), cada trabalhador tem de ser informado antes de ser geolocalizado. Se o software deixa este passo à entidade empregadora, o risco fica com ela. A GeoTapp prepara a informação personalizada, faz com que seja assinada na app como tomada de conhecimento e não deixa picar o ponto enquanto não estiver assinada.',
  },
  nl: {
    badge: 'App-vergelijking',
    h1sub: 'registreren of aantonen?',
    desc: 'PicaPonto registreert de aanwezigheid met app, QR-code, fysieke klok en biometrie, tegen een openbare prijs die tot de laagste van Europa behoort. GeoTapp maakt een rapport met locatie, tijd, cryptografische vingerafdrukken en foto\'s dat de opdrachtgever zelf controleert, en waarin elke latere wijziging zichtbaar is. Twee verschillende benaderingen.',
    summary: 'Kort gezegd:',
    summaryText: 'PicaPonto is een uitstekend aanwezigheidssysteem voor wie tegen lage kosten de uren moet vastleggen, met veel registratiemethoden en veel aandacht voor de wettelijke verplichtingen rond het aanwezigheidsregister. GeoTapp is voor wie de opdrachtgever het bewijs van het werk moet tonen, met een verzegeld rapport dat de klant zelf controleert.',
    noteTitle: 'De vraag die de keuze verandert',
    noteText: 'PicaPonto antwoordt op «is mijn register op orde als er een inspectie komt?». GeoTapp antwoordt op «hoe toon ik de klant het bewijs van het werk?». Het lijkt dezelfde vraag en dat is het niet: een aanwezigheidsregister dient de staat en de loonstrook, een verzegeld rapport dient voor dat telefoontje op vrijdagavond waarin de klant de factuur betwist. Geen van beide is beter: ze lossen verschillende verliezen op.',
    features: 'Vergelijking van de belangrijkste functies',
    feat: 'Functie',
    diff: 'Verschillende benaderingen',
    cta: 'Wilt u GeoTapp in actie zien?',
    ctaDesc: 'Probeer het op een echte klus: 14 dagen gratis, zonder creditcard.',
    ctaBtn: 'Start de gratis proefperiode',
    geo: ['Verzegeld rapport: ook een wijziging door de beheerder is zichtbaar','Weigert bij de registratie gesimuleerde locaties','Foto\'s met SHA-256-vingerafdruk in het rapport','De opdrachtgever controleert zelf, zonder account','Ontworpen voor schoonmaak, onderhoud, beveiliging, installateurs'],
    comp: ['Zeer lage openbare prijs (0,75-1,25 euro per persoon)','App, QR, fysieke klok, biometrie, gezichtsherkenning','Bedoeld voor het aanwezigheidsregister dat de Portugese wet oplegt (art. 202 van het Portugese arbeidswetboek)','Interne rapporten voor administratie en loonstroken','Portugese leverancier, actief sinds 1988'],
    footnote: '* Volgens de wet (art. 13 AVG en, in Italië, art. 4 van het arbeidsstatuut) moet elke werknemer worden geïnformeerd voordat hij wordt gelokaliseerd. Laat de software deze stap aan de verantwoordelijke over, dan blijft het risico bij hem. GeoTapp maakt de persoonlijke privacyverklaring klaar, laat die in de app voor kennisgeving ondertekenen en laat niet registreren totdat ze is ondertekend.',
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
  it: ['Controllo della posizione alla timbratura (rifiuta posizioni simulate)','Report sigillato crittograficamente','Verifica indipendente da parte del committente','Foto con impronta SHA-256 nel report','Posizione solo alla timbratura','Timbratura da smartphone','Timbratura con QR code','Timbratrice fisica / biometria','App nativa Android/iOS','Prezzo pubblico trasparente','Più sedi','Report sigillato anche per l\'amministratore','Informativa GPS firmata nell\'app prima di timbrare*'],
  en: ['Position check at clock-in (rejects simulated positions)','Cryptographically sealed report','Independent verification by the client','Photos with SHA-256 fingerprint in the report','Position only at clock-in','Smartphone clock-in','QR code clock-in','Physical time clock / biometrics','Native app Android/iOS','Transparent public pricing','Multi-site','Sealed report, also against changes by the administrator','GPS notice signed in the app before clocking in*'],
  de: ['Positionsprüfung beim Stempeln (weist simulierte Positionen ab)','Kryptographisch versiegelter Bericht','Unabhängige Überprüfung durch den Auftraggeber','Fotos mit SHA-256-Fingerabdruck im Bericht','Position nur beim Stempeln','Stempeln per Smartphone','Stempeln per QR-Code','Physische Stempeluhr / Biometrie','Native App Android/iOS','Transparenter öffentlicher Preis','Mehrere Standorte','Versiegelter Bericht auch gegenüber dem Administrator','GPS-Information vor dem Stempeln in der App unterschrieben*'],
  fr: ['Contrôle de la position au pointage (refuse les positions simulées)','Rapport scellé cryptographiquement','Vérification indépendante par le client','Photos avec empreinte SHA-256 dans le rapport','Position uniquement au pointage','Pointage depuis le smartphone','Pointage par QR code','Pointeuse physique / biométrie','App native Android/iOS','Prix public transparent','Plusieurs sites','Rapport scellé aussi pour l\'administrateur','Information GPS signée dans l\'app avant de pointer*'],
  es: ['Control de la posición al fichar (rechaza posiciones simuladas)','Informe sellado criptográficamente','Verificación independiente por parte del cliente','Fotos con huella SHA-256 en el informe','Posición solo al fichar','Fichaje desde el smartphone','Fichaje con código QR','Reloj de fichar físico / biometría','App nativa Android/iOS','Precio público transparente','Varias sedes','Informe sellado también para el administrador','Aviso GPS firmado en la app antes de fichar*'],
  pt: ['Controlo da posição ao picar o ponto (rejeita posições simuladas)','Relatório selado criptograficamente','Verificação independente por parte do cliente','Fotos com impressão digital SHA-256 no relatório','Posição só ao picar o ponto','Picagem a partir do smartphone','Picagem com código QR','Relógio de ponto físico / biometria','App nativa Android/iOS','Preço público transparente','Vários locais','Relatório selado também para o administrador','Informação GPS assinada na app antes de picar o ponto*'],
  nl: ['Controle van de locatie bij de registratie (weigert gesimuleerde locaties)','Cryptografisch verzegeld rapport','Onafhankelijke controle door de opdrachtgever','Foto\'s met SHA-256-vingerafdruk in het rapport','Locatie alleen bij de registratie','Registratie via de smartphone','Registratie met QR-code','Fysieke prikklok / biometrie','Native app voor Android/iOS','Transparante openbare prijs','Meerdere vestigingen','Verzegeld rapport ook voor de beheerder','GPS-verklaring ondertekend in de app vóór het registreren*'],
  da: ['Anti-spoofing-GPS (registrerer forfalskede positioner)','Kryptografisk forseglet rapport','Uafhaengig verificering af kunden','Fotobeviser med kryptografisk hash-kaede','GDPR-kompatibel','Registrering fra smartphone','Check-in via QR-kode','Fysisk ur / biometri','Native app Android/iOS','Transparent offentlig pris','Flere lokationer','Rapport kan ikke aendres af administratoren','Automatisk GPS-privatlivserklaering med digital signatur*'],
  sv: ['Anti-spoofing-GPS (upptacker forfalskade positioner)','Kryptografiskt forseglad rapport','Oberoende verifiering av kunden','Fotobevis med kryptografisk hashkedja','GDPR-kompatibel','Incheckning fran smartphone','Incheckning via QR-kod','Fysisk klocka / biometri','Native app Android/iOS','Transparent offentligt pris','Flera arbetsplatser','Rapport kan inte andras av administratoren','Automatiskt GPS-integritetsmeddelande med digital signatur*'],
  nb: ['Anti-spoofing-GPS (oppdager forfalskede posisjoner)','Kryptografisk forseglet rapport','Uavhengig verifisering av oppdragsgiver','Fotobevis med kryptografisk hash-kjede','GDPR-kompatibel','Registrering fra smarttelefon','Innsjekking via QR-kode','Fysisk klokke / biometri','Native app Android/iOS','Transparent offentlig pris','Flere lokasjoner','Rapport kan ikke endres av administratoren','Automatisk GPS-personvernerklaering med digital signatur*'],
  ru: ['Anti-spoofing GPS (vyyavlyaet podelku)','Kriptograficheski opechatannyj otchyot','Nezavisimaya proverka klientom','Fotodokazatelstva s hesh-cepochkoj','Sootvetstvie GDPR','Otmetka so smartfona','Otmetka po QR-kodu','Fizicheskie chasy / biometriya','Nativnoe prilozhenie Android/iOS','Prozrachnaya publichnaya cena','Neskolko obektov','Otchyot ne izmenyaem administratorom','Avtomaticheskoe uvedomlenie o GPS s cifrovoj podpisyu*'],
};
// GeoTapp: tutto vero. PicaPonto: falso su prova/sigillo/verifica/foto/immutabile;
// vero su GDPR, smartphone, QR, timbratrice fisica+biometria, app nativa, prezzo pubblico, multi-sede.
// Valori riverificati sul prodotto il 30/09/2026: niente QR/NFC, niente checklist; i prezzi sono pubblici.
const ROWS_GEO =  [true,true,true,true,true,true,false,false,true,true,true,true,true];
const ROWS_COMP = [false,false,false,false,true, true, true, true,  true, true,  true, false,false];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = localizeEnglishDeep(META[locale] ?? META.en, locale);
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: buildLocaleAlternates(locale, PATHNAME),
    openGraph: { url: buildCanonicalUrl(locale, PATHNAME), type: 'website', title: m.title, description: m.description, images: [{ url: '/og-default.png', width: 1200, height: 630, alt: m.title }] },
  };
}

export default async function GeoTappVsPicaPontoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = localizeEnglishDeep(T[locale] ?? T.en, locale);
  const faqItems = localizeEnglishDeep(FAQ[locale] ?? FAQ.en, locale);
  const labels = localizeEnglishDeep(ROWS_LABELS[locale] ?? ROWS_LABELS.en, locale);
  const rows = labels.map((feature, i) => ({ feature, geotapp: ROWS_GEO[i], competitor: ROWS_COMP[i] }));

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  const breadcrumb = buildComparisonBreadcrumb({ locale, pathname: PATHNAME, competitorName: 'PicaPonto' });
  const meta = localizeEnglishDeep(META[locale] ?? META.en, locale);
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
