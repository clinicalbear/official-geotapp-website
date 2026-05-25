import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { DynamicComparison } from '@/components/DynamicComparison';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/dinamico/';

const META: Record<string, { title: string; description: string }> = {
  it: {
    title: 'Confronta GeoTapp con Connecteam, Hubstaff, Jibble e altri — Comparativa Dinamica',
    description: 'Confronta GeoTapp con i principali competitor del field service in tempo reale. 12 feature, 7 competitor, una sola tabella. Scopri perché GeoTapp è l\'unico che produce prove verificabili del lavoro svolto.',
  },
  en: {
    title: 'Compare GeoTapp vs Connecteam, Hubstaff, Jibble and more — Live Comparison',
    description: 'Compare GeoTapp with the main field service competitors in real time. 12 features, 7 competitors, one table. See why GeoTapp is the only one that produces verifiable work proof.',
  },
  de: {
    title: 'GeoTapp vs Connecteam, Hubstaff, Jibble und mehr — Dynamischer Vergleich',
    description: 'Vergleichen Sie GeoTapp mit den wichtigsten Konkurrenten im Außendienst in Echtzeit. 12 Funktionen, 7 Tools, eine Tabelle.',
  },
  fr: {
    title: 'Comparez GeoTapp vs Connecteam, Hubstaff, Jibble — Comparatif Dynamique',
    description: 'Comparez GeoTapp avec les principaux concurrents du field service en temps réel. 12 fonctionnalités, 7 outils, un tableau.',
  },
  es: {
    title: 'Compara GeoTapp con Connecteam, Hubstaff, Jibble — Comparativa Dinámica',
    description: 'Compara GeoTapp con los principales competidores del field service en tiempo real. 12 funciones, 7 herramientas, una tabla.',
  },
  nl: {
    title: 'Vergelijk GeoTapp met Connecteam, Hubstaff, Jibble — Dynamische Vergelijking',
    description: 'Vergelijk GeoTapp met de belangrijkste field service concurrenten in real time. 12 functies, 7 tools, één tabel.',
  },
  pt: {
    title: 'Compara GeoTapp com Connecteam, Hubstaff, Jibble — Comparação Dinâmica',
    description: 'Compara GeoTapp com os principais concorrentes do field service em tempo real. 12 funções, 7 ferramentas, uma tabela.',
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
    badge: 'Comparativa Dinamica',
    title: 'GeoTapp vs il resto del mercato',
    subtitle: 'Scegli un competitor dal menu, vedi il confronto su 12 feature chiave. Numeri reali, niente marketing fluff.',
    breadcrumbHome: 'Home',
    breadcrumbCompare: 'Confronti',
    breadcrumbDynamic: 'Comparativa dinamica',
    chooseCompetitor: 'Scegli il competitor da confrontare',
    geotappCol: 'GeoTapp',
    featureCol: 'Funzionalità',
    pricingLabel: 'Da {eur}€/utente/mese',
    pricingTrial: 'Trial 14gg, no carta',
    visitWebsite: 'Visita il sito',
    ctaTitle: 'Provalo tu stesso in 14 giorni',
    ctaDesc: 'La differenza si vede al primo intervento documentato. Nessuna carta richiesta.',
    ctaBtn: 'Inizia il trial gratuito →',
    keyDifference: 'La differenza chiave',
    differenceText: 'Tutti i competitor tracciano ore e posizione. Solo GeoTapp produce un report sigillato crittograficamente che il tuo cliente può verificare in modo indipendente. È la differenza tra "ti dico che ho lavorato" e "ti dimostro che ho lavorato".',
  },
  en: {
    badge: 'Live Comparison',
    title: 'GeoTapp vs everyone else',
    subtitle: 'Pick a competitor from the menu, see the comparison across 12 key features. Real data, no marketing fluff.',
    breadcrumbHome: 'Home',
    breadcrumbCompare: 'Compare',
    breadcrumbDynamic: 'Live comparison',
    chooseCompetitor: 'Pick a competitor to compare',
    geotappCol: 'GeoTapp',
    featureCol: 'Feature',
    pricingLabel: 'From €{eur}/user/month',
    pricingTrial: '14-day trial, no card',
    visitWebsite: 'Visit site',
    ctaTitle: 'Try it yourself for 14 days',
    ctaDesc: 'The difference shows on the first documented job. No card required.',
    ctaBtn: 'Start free trial →',
    keyDifference: 'The key difference',
    differenceText: 'Every competitor tracks hours and location. Only GeoTapp produces a cryptographically sealed report that your client can verify independently. It is the difference between "I say I worked" and "I show I worked".',
  },
  de: {
    badge: 'Dynamischer Vergleich',
    title: 'GeoTapp vs alle anderen',
    subtitle: 'Wählen Sie einen Konkurrenten aus dem Menü, sehen Sie den Vergleich anhand von 12 Schlüsselfunktionen. Echte Daten, kein Marketing-Geschwafel.',
    breadcrumbHome: 'Home',
    breadcrumbCompare: 'Vergleiche',
    breadcrumbDynamic: 'Dynamischer Vergleich',
    chooseCompetitor: 'Wählen Sie einen Konkurrenten',
    geotappCol: 'GeoTapp',
    featureCol: 'Funktion',
    pricingLabel: 'Ab {eur}€/Nutzer/Monat',
    pricingTrial: '14-Tage-Trial, ohne Karte',
    visitWebsite: 'Website besuchen',
    ctaTitle: 'Testen Sie es 14 Tage lang',
    ctaDesc: 'Der Unterschied zeigt sich beim ersten dokumentierten Einsatz. Keine Karte erforderlich.',
    ctaBtn: 'Kostenlos starten →',
    keyDifference: 'Der entscheidende Unterschied',
    differenceText: 'Alle Konkurrenten erfassen Stunden und Standort. Nur GeoTapp erstellt einen kryptografisch versiegelten Bericht, den Ihr Kunde unabhängig prüfen kann. Das ist der Unterschied zwischen "Ich sage, ich habe gearbeitet" und "Ich beweise es".',
  },
  fr: {
    badge: 'Comparatif Dynamique',
    title: 'GeoTapp vs les autres',
    subtitle: 'Choisis un concurrent dans le menu, vois la comparaison sur 12 fonctionnalités clés. Données réelles, pas de blabla marketing.',
    breadcrumbHome: 'Accueil',
    breadcrumbCompare: 'Comparaisons',
    breadcrumbDynamic: 'Comparatif dynamique',
    chooseCompetitor: 'Choisis un concurrent à comparer',
    geotappCol: 'GeoTapp',
    featureCol: 'Fonctionnalité',
    pricingLabel: 'À partir de {eur}€/utilisateur/mois',
    pricingTrial: 'Essai 14j, sans carte',
    visitWebsite: 'Visiter le site',
    ctaTitle: 'Essaie-le 14 jours',
    ctaDesc: 'La différence se voit dès la première intervention documentée. Sans carte requise.',
    ctaBtn: 'Commencer l\'essai →',
    keyDifference: 'La différence clé',
    differenceText: 'Tous les concurrents enregistrent heures et position. Seul GeoTapp produit un rapport scellé cryptographiquement que ton client peut vérifier indépendamment.',
  },
  es: {
    badge: 'Comparativa Dinámica',
    title: 'GeoTapp vs el resto del mercado',
    subtitle: 'Elige un competidor del menú, ve la comparación en 12 funciones clave. Datos reales, sin marketing.',
    breadcrumbHome: 'Inicio',
    breadcrumbCompare: 'Comparaciones',
    breadcrumbDynamic: 'Comparativa dinámica',
    chooseCompetitor: 'Elige un competidor a comparar',
    geotappCol: 'GeoTapp',
    featureCol: 'Función',
    pricingLabel: 'Desde {eur}€/usuario/mes',
    pricingTrial: 'Prueba 14d, sin tarjeta',
    visitWebsite: 'Visitar sitio',
    ctaTitle: 'Pruébalo 14 días',
    ctaDesc: 'La diferencia se ve en la primera intervención documentada. Sin tarjeta requerida.',
    ctaBtn: 'Empezar prueba →',
    keyDifference: 'La diferencia clave',
    differenceText: 'Todos los competidores registran horas y posición. Solo GeoTapp produce un informe sellado criptográficamente que tu cliente puede verificar de forma independiente.',
  },
  nl: {
    badge: 'Dynamische Vergelijking',
    title: 'GeoTapp vs de rest',
    subtitle: 'Kies een concurrent uit het menu, zie de vergelijking op 12 sleutelfuncties. Echte data, geen marketing-praat.',
    breadcrumbHome: 'Home',
    breadcrumbCompare: 'Vergelijkingen',
    breadcrumbDynamic: 'Dynamische vergelijking',
    chooseCompetitor: 'Kies een concurrent om te vergelijken',
    geotappCol: 'GeoTapp',
    featureCol: 'Functie',
    pricingLabel: 'Vanaf €{eur}/gebruiker/maand',
    pricingTrial: '14 dagen trial, geen kaart',
    visitWebsite: 'Bezoek website',
    ctaTitle: 'Probeer het 14 dagen',
    ctaDesc: 'Het verschil zie je bij de eerste gedocumenteerde opdracht. Geen kaart nodig.',
    ctaBtn: 'Start gratis trial →',
    keyDifference: 'Het sleutelverschil',
    differenceText: 'Elke concurrent registreert uren en locatie. Alleen GeoTapp produceert een cryptografisch verzegeld rapport dat je klant onafhankelijk kan verifiëren.',
  },
  pt: {
    badge: 'Comparação Dinâmica',
    title: 'GeoTapp vs o resto do mercado',
    subtitle: 'Escolhe um concorrente no menu, vê a comparação em 12 funções chave. Dados reais, sem marketing.',
    breadcrumbHome: 'Início',
    breadcrumbCompare: 'Comparações',
    breadcrumbDynamic: 'Comparação dinâmica',
    chooseCompetitor: 'Escolhe um concorrente para comparar',
    geotappCol: 'GeoTapp',
    featureCol: 'Função',
    pricingLabel: 'A partir de {eur}€/utilizador/mês',
    pricingTrial: 'Trial 14d, sem cartão',
    visitWebsite: 'Visitar site',
    ctaTitle: 'Experimenta 14 dias',
    ctaDesc: 'A diferença vê-se na primeira intervenção documentada. Sem cartão necessário.',
    ctaBtn: 'Começar trial →',
    keyDifference: 'A diferença chave',
    differenceText: 'Todos os concorrentes registam horas e posição. Só o GeoTapp produz um relatório selado criptograficamente que o teu cliente pode verificar de forma independente.',
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
      url: `https://geotapp.com/${locale}${PATHNAME}`,
      type: 'website',
      title: m.title,
      description: m.description,
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
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 pb-20 pt-20 sm:px-6 md:pt-28">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 text-sm text-slate-500"
        >
          <Link href={`/${locale}/`} className="hover:text-slate-700">
            {c.breadcrumbHome}
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/${locale}/confronto/`}
            className="hover:text-slate-700"
          >
            {c.breadcrumbCompare}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">{c.breadcrumbDynamic}</span>
        </nav>

        {/* Hero */}
        <header className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#8FC436]/10 px-4 py-1 text-sm font-bold text-[#5a8521]">
            {c.badge}
          </span>
          <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            {c.title}
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-600 sm:text-lg">
            {c.subtitle}
          </p>
        </header>

        {/* Dynamic comparison */}
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
      </div>
    </main>
  );
}
