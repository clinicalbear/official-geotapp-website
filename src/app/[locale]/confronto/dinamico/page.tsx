import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import { DynamicComparison } from '@/components/DynamicComparison';
import { TrialCTALink } from '@/components/analytics/TrialCTALink';
import LNastro from '@/components/LNastro';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/dinamico/';

const META: Record<string, { title: string; description: string }> = {
  it: {
    title: 'Confronta GeoTapp con Connecteam, Hubstaff, Jibble e altri | GeoTapp',
    description: 'Confronta GeoTapp con 11 concorrenti su 12 funzioni, in una sola tabella: chi registra solo ore e posizione, e chi produce una prova del lavoro che il committente verifica da solo.',
  },
  en: {
    title: 'Compare GeoTapp with Connecteam, Hubstaff, Jibble and more | GeoTapp',
    description: 'Compare GeoTapp with 11 competitors across 12 features in a single table: which ones only record hours and location, and which produce proof of work that the client can check alone.',
  },
  de: {
    title: 'GeoTapp im Vergleich mit Connecteam, Hubstaff, Jibble und mehr | GeoTapp',
    description: 'Vergleichen Sie GeoTapp mit 11 Mitbewerbern bei 12 Funktionen in einer Tabelle: wer nur Stunden und Standort erfasst und wer einen Arbeitsnachweis liefert, den der Auftraggeber selbst überprüft.',
  },
  fr: {
    title: 'Comparez GeoTapp à Connecteam, Hubstaff, Jibble | GeoTapp',
    description: 'Comparez GeoTapp à 11 concurrents sur 12 fonctionnalités, dans un seul tableau : qui n\'enregistre que heures et position, et qui prouve le travail.',
  },
  es: {
    title: 'Compara GeoTapp con Connecteam, Hubstaff, Jibble y otros | GeoTapp',
    description: 'Compara GeoTapp con 11 competidores en 12 funciones, en una sola tabla: quién solo registra horas y posición, y quién produce una prueba del trabajo que el cliente verifica por sí mismo.',
  },
  nl: {
    title: 'GeoTapp vergeleken met Connecteam, Hubstaff, Jibble | GeoTapp',
    description: 'Vergelijk GeoTapp met 11 concurrenten op 12 functies in één tabel: wie alleen uren en locatie vastlegt, en wie bewijs van het werk levert dat de opdrachtgever zelf controleert.',
  },
  pt: {
    title: 'Compare a GeoTapp com Connecteam, Hubstaff e outros | GeoTapp',
    description: 'Compare a GeoTapp com 11 concorrentes em 12 funcionalidades: quem só regista horas e posição e quem produz uma prova que o cliente verifica sozinho.',
  },
  da: {
    title: 'Sammenlign GeoTapp med Connecteam, Hubstaff m.fl. | GeoTapp',
    description: 'Sammenlign GeoTapp med 11 konkurrenter på 12 funktioner i én tabel: hvem registrerer kun timer og position, og hvem dokumenterer arbejdet?',
  },
  sv: {
    title: 'Jämför GeoTapp med Connecteam, Hubstaff m.fl. | GeoTapp',
    description: 'Jämför GeoTapp med 11 konkurrenter på 12 funktioner i en tabell: vilka som bara registrerar timmar och position, och vilka som tar fram ett arbetsbevis som kunden själv verifierar.',
  },
  nb: {
    title: 'Sammenlign GeoTapp med Connecteam, Hubstaff m.fl. | GeoTapp',
    description: 'Sammenlign GeoTapp med 11 konkurrenter på 12 funksjoner i én tabell: hvem registrerer bare timer og posisjon, og hvem dokumenterer arbeidet?',
  },
  ru: {
    title: 'Сравните GeoTapp с Connecteam, Hubstaff, Jibble и другими | GeoTapp',
    description: 'Сравните GeoTapp с 11 конкурентами по 12 функциям в одной таблице: кто фиксирует только часы и местоположение, а кто производит доказательство работы, которое клиент проверяет сам.',
  },
};

interface Copy {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumbHome: string;
  breadcrumbCompare: string;
  breadcrumbDynamic: string;
  chooseCompetitor: string;
  geotappCol: string;
  featureCol: string;
  pricingLabel: string;
  pricingTrial: string;
  visitWebsite: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
  keyDifference: string;
  differenceText: string;
}

const COPY: Record<string, Copy> = {
  it: {
    badge: 'Confronto dinamico',
    title: 'GeoTapp e il resto del mercato',
    subtitle: 'Scegli un concorrente dal menu e vedi il confronto su 12 funzioni chiave. Dati presi dai siti dei concorrenti, senza giri di parole.',
    breadcrumbHome: 'Home',
    breadcrumbCompare: 'Confronti',
    breadcrumbDynamic: 'Comparativa dinamica',
    chooseCompetitor: 'Scegli il concorrente da confrontare',
    geotappCol: 'GeoTapp',
    featureCol: 'Funzionalità',
    pricingLabel: 'Da {eur} € per utente al mese',
    pricingTrial: 'Prova gratuita di 14 giorni, senza carta',
    visitWebsite: 'Visita il sito',
    ctaTitle: 'Provalo tu stesso in 14 giorni',
    ctaDesc: 'La differenza si vede al primo intervento documentato. Nessuna carta richiesta.',
    ctaBtn: 'Inizia la prova gratuita →',
    keyDifference: 'La differenza chiave',
    differenceText: 'Tutti questi strumenti registrano ore o presenze. Nessuno di quelli in tabella, tra le funzioni che dichiara, produce un report sigillato crittograficamente che il tuo cliente verifica da solo. GeoTapp sì. È la differenza tra «ti dico che ho lavorato» e «ti dimostro che ho lavorato».',
  },
  en: {
    badge: 'Dynamic comparison',
    title: 'GeoTapp and the rest of the market',
    subtitle: 'Pick a competitor from the menu and see the comparison across 12 key features. Data taken from the competitors\' own websites, no marketing fluff.',
    breadcrumbHome: 'Home',
    breadcrumbCompare: 'Comparisons',
    breadcrumbDynamic: 'Dynamic comparison',
    chooseCompetitor: 'Pick a competitor to compare',
    geotappCol: 'GeoTapp',
    featureCol: 'Feature',
    pricingLabel: 'From €{eur} per user per month',
    pricingTrial: '14-day free trial, no card',
    visitWebsite: 'Visit site',
    ctaTitle: 'Try it yourself for 14 days',
    ctaDesc: 'The difference shows on the first documented job. No card required.',
    ctaBtn: 'Start the free trial →',
    keyDifference: 'The key difference',
    differenceText: 'All of these tools record hours or attendance. None of the others in the table, among the features they list, produces a cryptographically sealed report that your client can verify alone. GeoTapp does. It is the difference between “I tell you I worked” and “I show you I worked”.',
  },
  de: {
    badge: 'Dynamischer Vergleich',
    title: 'GeoTapp und der Rest des Marktes',
    subtitle: 'Wählen Sie im Menü einen Mitbewerber und sehen Sie den Vergleich bei 12 wichtigen Funktionen. Die Angaben stammen von den Websites der Mitbewerber, ohne Umschweife.',
    breadcrumbHome: 'Startseite',
    breadcrumbCompare: 'Vergleiche',
    breadcrumbDynamic: 'Dynamischer Vergleich',
    chooseCompetitor: 'Wählen Sie den Mitbewerber für den Vergleich',
    geotappCol: 'GeoTapp',
    featureCol: 'Funktion',
    pricingLabel: 'Ab {eur} € pro Nutzer und Monat',
    pricingTrial: '14 Tage kostenlos testen, keine Karte',
    visitWebsite: 'Website besuchen',
    ctaTitle: 'Testen Sie es selbst, 14 Tage lang',
    ctaDesc: 'Der Unterschied zeigt sich beim ersten dokumentierten Einsatz. Keine Kreditkarte nötig.',
    ctaBtn: 'Kostenlos testen →',
    keyDifference: 'Der entscheidende Unterschied',
    differenceText: 'Alle diese Werkzeuge erfassen Stunden oder Anwesenheit. Keines der Werkzeuge in der Tabelle erstellt nach den Funktionen, die es angibt, einen kryptographisch versiegelten Bericht, den Ihr Kunde selbst überprüfen kann. GeoTapp schon. Das ist der Unterschied zwischen „Ich sage Ihnen, dass ich gearbeitet habe“ und „Ich zeige Ihnen, dass ich gearbeitet habe“.',
  },
  fr: {
    badge: 'Comparatif dynamique',
    title: 'GeoTapp et le reste du marché',
    subtitle: 'Choisissez un concurrent dans le menu et consultez la comparaison sur 12 fonctionnalités clés. Données tirées des sites des concurrents, sans détour.',
    breadcrumbHome: 'Accueil',
    breadcrumbCompare: 'Comparaisons',
    breadcrumbDynamic: 'Comparatif dynamique',
    chooseCompetitor: 'Choisissez le concurrent à comparer',
    geotappCol: 'GeoTapp',
    featureCol: 'Fonctionnalité',
    pricingLabel: 'À partir de {eur} € par utilisateur et par mois',
    pricingTrial: 'Essai gratuit de 14 jours, sans carte',
    visitWebsite: 'Visiter le site',
    ctaTitle: 'Essayez-le vous-même pendant 14 jours',
    ctaDesc: 'La différence se voit dès la première intervention documentée. Aucune carte bancaire requise.',
    ctaBtn: 'Commencer l\'essai gratuit →',
    keyDifference: 'La différence clé',
    differenceText: 'Tous ces outils enregistrent les heures ou les présences. Aucun de ceux du tableau, parmi les fonctionnalités qu\'il annonce, ne produit un rapport scellé cryptographiquement que votre client vérifie lui-même. GeoTapp, si. C\'est la différence entre « je vous dis que j\'ai travaillé » et « je vous démontre que j\'ai travaillé ».',
  },
  es: {
    badge: 'Comparativa dinámica',
    title: 'GeoTapp y el resto del mercado',
    subtitle: 'Elige un competidor del menú y consulta la comparación en 12 funciones clave. Datos tomados de las webs de los competidores, sin rodeos.',
    breadcrumbHome: 'Inicio',
    breadcrumbCompare: 'Comparativas',
    breadcrumbDynamic: 'Comparativa dinámica',
    chooseCompetitor: 'Elige el competidor que quieres comparar',
    geotappCol: 'GeoTapp',
    featureCol: 'Función',
    pricingLabel: 'Desde {eur} € por usuario al mes',
    pricingTrial: 'Prueba gratuita de 14 días, sin tarjeta',
    visitWebsite: 'Visitar el sitio',
    ctaTitle: 'Pruébalo tú mismo durante 14 días',
    ctaDesc: 'La diferencia se ve en la primera intervención documentada. No hace falta tarjeta.',
    ctaBtn: 'Empezar prueba gratuita →',
    keyDifference: 'La diferencia clave',
    differenceText: 'Todas estas herramientas registran horas o asistencia. Ninguna de las de la tabla, entre las funciones que declara, produce un informe sellado criptográficamente que tu cliente verifique por sí mismo. GeoTapp sí. Es la diferencia entre «te digo que he trabajado» y «te demuestro que he trabajado».',
  },
  nl: {
    badge: 'Dynamische vergelijking',
    title: 'GeoTapp en de rest van de markt',
    subtitle: 'Kies in het menu een concurrent en bekijk de vergelijking op 12 belangrijke functies. De gegevens komen van de websites van de concurrenten, zonder omhaal.',
    breadcrumbHome: 'Home',
    breadcrumbCompare: 'Vergelijkingen',
    breadcrumbDynamic: 'Dynamische vergelijking',
    chooseCompetitor: 'Kies de concurrent om mee te vergelijken',
    geotappCol: 'GeoTapp',
    featureCol: 'Functie',
    pricingLabel: 'Vanaf € {eur} per gebruiker per maand',
    pricingTrial: '14 dagen gratis proberen, zonder creditcard',
    visitWebsite: 'Bezoek de website',
    ctaTitle: 'Probeer het zelf, 14 dagen lang',
    ctaDesc: 'Het verschil ziet u bij de eerste gedocumenteerde klus. Geen creditcard nodig.',
    ctaBtn: 'Start de gratis proefperiode →',
    keyDifference: 'Het belangrijkste verschil',
    differenceText: 'Al deze tools leggen uren of aanwezigheid vast. Geen enkele van de tools in de tabel maakt, volgens de functies die ze opgeeft, een cryptografisch verzegeld rapport dat uw klant zelf controleert. GeoTapp wel. Dat is het verschil tussen «ik zeg u dat ik heb gewerkt» en «ik toon u dat ik heb gewerkt».',
  },
  pt: {
    badge: 'Comparação dinâmica',
    title: 'A GeoTapp e o resto do mercado',
    subtitle: 'Escolha um concorrente no menu e veja a comparação em 12 funcionalidades-chave. Dados retirados dos sítios dos concorrentes, sem rodeios.',
    breadcrumbHome: 'Início',
    breadcrumbCompare: 'Comparações',
    breadcrumbDynamic: 'Comparação dinâmica',
    chooseCompetitor: 'Escolha o concorrente a comparar',
    geotappCol: 'GeoTapp',
    featureCol: 'Funcionalidade',
    pricingLabel: 'A partir de {eur} € por utilizador por mês',
    pricingTrial: 'Teste gratuito de 14 dias, sem cartão',
    visitWebsite: 'Visitar o sítio',
    ctaTitle: 'Experimente em 14 dias',
    ctaDesc: 'A diferença vê-se na primeira intervenção documentada. Sem cartão.',
    ctaBtn: 'Começar teste gratuito →',
    keyDifference: 'A diferença fundamental',
    differenceText: 'Todas estas ferramentas registam horas ou presenças. Nenhuma das que constam da tabela, entre as funções que declara, produz um relatório selado criptograficamente que o seu cliente verifique sozinho. A GeoTapp produz. É a diferença entre «digo-lhe que trabalhei» e «demonstro-lhe que trabalhei».',
  },
  da: {
    badge: 'Dynamisk sammenligning',
    title: 'GeoTapp og resten af markedet',
    subtitle: 'Vælg en konkurrent i menuen og se sammenligningen på 12 nøglefunktioner. Data fra konkurrenternes egne websteder, uden omsvøb.',
    breadcrumbHome: 'Hjem',
    breadcrumbCompare: 'Sammenligninger',
    breadcrumbDynamic: 'Dynamisk sammenligning',
    chooseCompetitor: 'Vælg den konkurrent, du vil sammenligne med',
    geotappCol: 'GeoTapp',
    featureCol: 'Funktion',
    pricingLabel: 'Fra {eur} € pr. bruger pr. måned',
    pricingTrial: 'Gratis prøveperiode på 14 dage, uden kort',
    visitWebsite: 'Besøg websitet',
    ctaTitle: 'Prøv det selv i 14 dage',
    ctaDesc: 'Forskellen ses ved den første dokumenterede opgave. Intet kort kræves.',
    ctaBtn: 'Start gratis prøveperiode →',
    keyDifference: 'Den afgørende forskel',
    differenceText: 'Alle disse værktøjer registrerer timer eller fremmøde. Ingen af dem i tabellen har, blandt de angivne funktioner, en kryptografisk forseglet rapport, som din kunde selv verificerer. GeoTapp har. Det er forskellen mellem «jeg siger, at jeg har arbejdet» og «jeg kan vise, at jeg har arbejdet».',
  },
  sv: {
    badge: 'Dynamisk jämförelse',
    title: 'GeoTapp och resten av marknaden',
    subtitle: 'Välj en konkurrent i menyn och se jämförelsen på 12 nyckelfunktioner. Uppgifterna är hämtade från konkurrenternas egna webbplatser, utan marknadsföringssnack.',
    breadcrumbHome: 'Hem',
    breadcrumbCompare: 'Jämförelser',
    breadcrumbDynamic: 'Dynamisk jämförelse',
    chooseCompetitor: 'Välj konkurrenten du vill jämföra med',
    geotappCol: 'GeoTapp',
    featureCol: 'Funktion',
    pricingLabel: 'Från {eur} € per användare och månad',
    pricingTrial: '14 dagars gratis provperiod, utan kort',
    visitWebsite: 'Besök webbplatsen',
    ctaTitle: 'Prova själv i 14 dagar',
    ctaDesc: 'Skillnaden syns vid det första dokumenterade uppdraget. Inget kort krävs.',
    ctaBtn: 'Starta den kostnadsfria provperioden →',
    keyDifference: 'Den avgörande skillnaden',
    differenceText: 'Alla dessa verktyg registrerar timmar eller närvaro. Inget av de andra i tabellen har, bland de funktioner de anger, en kryptografiskt förseglad rapport som din kund själv kan verifiera. GeoTapp har det. Det är skillnaden mellan «jag säger att jag har arbetat» och «jag kan visa att jag har arbetat».',
  },
  nb: {
    badge: 'Dynamisk sammenligning',
    title: 'GeoTapp og resten av markedet',
    subtitle: 'Velg en konkurrent i menyen og se sammenligningen på 12 nøkkelfunksjoner. Data fra konkurrentenes egne nettsteder, uten omsvøp.',
    breadcrumbHome: 'Hjem',
    breadcrumbCompare: 'Sammenligninger',
    breadcrumbDynamic: 'Dynamisk sammenligning',
    chooseCompetitor: 'Velg konkurrenten du vil sammenligne med',
    geotappCol: 'GeoTapp',
    featureCol: 'Funksjon',
    pricingLabel: 'Fra {eur} € per bruker per måned',
    pricingTrial: 'Gratis prøveperiode på 14 dager, uten kort',
    visitWebsite: 'Besøk nettstedet',
    ctaTitle: 'Prøv det selv i 14 dager',
    ctaDesc: 'Forskjellen vises ved første dokumenterte oppdrag. Ingen kort kreves.',
    ctaBtn: 'Start gratis prøveperiode →',
    keyDifference: 'Den avgjørende forskjellen',
    differenceText: 'Alle disse verktøyene registrerer timer eller oppmøte. Ingen av dem i tabellen har, blant funksjonene de oppgir, en kryptografisk forseglet rapport som kunden din selv verifiserer. GeoTapp har det. Det er forskjellen mellom «jeg sier at jeg har jobbet» og «jeg kan vise at jeg har jobbet».',
  },
  ru: {
    badge: 'Динамическое сравнение',
    title: 'GeoTapp и остальной рынок',
    subtitle: 'Выберите конкурента из меню и сравните по 12 ключевым функциям. Данные взяты с сайтов самих конкурентов, без прикрас.',
    breadcrumbHome: 'Главная',
    breadcrumbCompare: 'Сравнения',
    breadcrumbDynamic: 'Динамическое сравнение',
    chooseCompetitor: 'Выберите конкурента для сравнения',
    geotappCol: 'GeoTapp',
    featureCol: 'Функция',
    pricingLabel: 'От {eur} €/пользователь/месяц',
    pricingTrial: '14 дней бесплатно, без карты',
    visitWebsite: 'Перейти на сайт',
    ctaTitle: 'Попробуйте сами 14 дней',
    ctaDesc: 'Разница видна на первом задокументированном задании. Карта не нужна.',
    ctaBtn: 'Начать бесплатную пробную версию →',
    keyDifference: 'Ключевое отличие',
    differenceText: 'Все эти инструменты фиксируют часы или присутствие. Ни один из них в таблице, среди заявленных функций, не создаёт криптографически запечатанный отчёт, который ваш клиент проверяет сам. GeoTapp — создаёт. Это разница между «я говорю, что я работал» и «я доказываю, что я работал».',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] ?? META.en;
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: buildLocaleAlternates(locale, PATHNAME),
    openGraph: {
      url: buildCanonicalUrl(locale, PATHNAME),
      type: 'website',
      title: m.title,
      description: m.description,
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: m.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = COPY[locale] ?? COPY.en;

  return (
    <div className="lp-l lp-confronto-vs">
      <section className="ph">
        <div className="crumb"><div className="w">
          <Link href={`/${locale}/`}>{c.breadcrumbHome}</Link> / <Link href={`/${locale}/confronto/`}>{c.breadcrumbCompare}</Link> / {c.breadcrumbDynamic}
        </div></div>
        <div className="w">
          <p className="kk k"><s />{c.badge}</p>
          <h1>{c.title}</h1>
          <p className="lede">{c.subtitle}</p>
          <div className="acts">
            <TrialCTALink href={`/${locale}/trial/`} source="confronto_dinamico_hero" className="b1">{c.ctaBtn}</TrialCTALink>
          </div>
        </div>
      </section>

      <section className="sec"><div className="wn">
        <DynamicComparison
          locale={locale}
          copy={{
            chooseCompetitor: c.chooseCompetitor,
            geotappCol: c.geotappCol,
            featureCol: c.featureCol,
            pricingLabel: c.pricingLabel,
            pricingTrial: c.pricingTrial,
            visitWebsite: c.visitWebsite,
            ctaTitle: c.ctaTitle,
            ctaDesc: c.ctaDesc,
            ctaBtn: c.ctaBtn,
            keyDifference: c.keyDifference,
            differenceText: c.differenceText,
          }}
        />
      </div></section>

      <LNastro />
    </div>
  );
}
