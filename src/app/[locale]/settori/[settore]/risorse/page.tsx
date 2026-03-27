import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type AppLocale } from '@/lib/i18n/config';

const WP = 'https://blog.geotapp.com';
const HEADERS = { host: 'blog.geotapp.com', 'x-geotapp-proxy': '1', 'x-forwarded-proto': 'https' };

const CTA_LABELS: Record<string, { discover: string; cta: string }> = {
  it: { discover: 'Scopri', cta: 'Vai al prodotto →' },
  en: { discover: 'Discover', cta: 'Go to product →' },
  de: { discover: 'Entdecken', cta: 'Zum Produkt →' },
  fr: { discover: 'Découvrir', cta: 'Voir le produit →' },
  es: { discover: 'Descubrir', cta: 'Ver el producto →' },
  pt: { discover: 'Descobrir', cta: 'Ver o produto →' },
  nl: { discover: 'Ontdekken', cta: 'Naar product →' },
  da: { discover: 'Opdag', cta: 'Gå til produkt →' },
  sv: { discover: 'Upptäck', cta: 'Till produkt →' },
  nb: { discover: 'Oppdag', cta: 'Til produkt →' },
  ru: { discover: 'Узнать', cta: 'К продукту →' },
};

const SETTORE_CONFIG: Record<string, {
  categoryId: number;
  labels: Record<string, { title: string; description: string; heading: string }>;
  intro: Record<string, string>;
  product: {
    name: string;
    slug: 'geotapp-app' | 'geotapp-flow' | 'geotapp-verifier';
    ctaLabel: Record<string, { discover: string; cta: string }>;
  };
}> = {
  pulizie: {
    categoryId: 9,
    labels: {
      it: { title: 'Risorse per imprese di pulizie — GeoTapp', description: 'Articoli, guide e risorse per gestire presenze e interventi nelle imprese di pulizie.', heading: 'Risorse per imprese di pulizie' },
      en: { title: 'Resources for cleaning companies — GeoTapp', description: 'Articles, guides and resources for managing attendance and jobs in cleaning companies.', heading: 'Resources for cleaning companies' },
      de: { title: 'Ressourcen für Reinigungsunternehmen — GeoTapp', description: 'Artikel, Leitfäden und Ressourcen für Reinigungsunternehmen.', heading: 'Ressourcen für Reinigungsunternehmen' },
      fr: { title: 'Ressources pour les entreprises de nettoyage — GeoTapp', description: 'Articles, guides et ressources pour les entreprises de nettoyage.', heading: 'Ressources pour les entreprises de nettoyage' },
      es: { title: 'Recursos para empresas de limpieza — GeoTapp', description: 'Artículos, guías y recursos para empresas de limpieza.', heading: 'Recursos para empresas de limpieza' },
    },
    intro: {
      it: 'La gestione delle imprese di pulizia presenta sfide operative che la maggior parte dei software gestionali ignora: squadre distribuite su più cantieri, timbrature difficili da verificare, clienti che chiedono report documentati. Queste guide raccolgono tutto quello che serve sapere per organizzare presenze, interventi e comunicazione interna in modo efficiente — senza sprechi di tempo in telefonate o fogli Excel. Gli articoli coprono temi pratici come la gestione dei turni, il controllo delle presenze GPS, la documentazione dei lavori svolti e la segnalazione di anomalie sul campo. Ogni guida è pensata per responsabili operativi e titolari di imprese di pulizia che vogliono ridurre i problemi quotidiani e aumentare la trasparenza verso i clienti. GeoTapp App è la soluzione pensata per questo settore: permette ai collaboratori di timbrare entrata e uscita dal cantiere tramite GPS, inviare foto dei lavori completati e comunicare in tempo reale con il coordinatore.',
      en: "Managing cleaning companies comes with operational challenges most software ignores: distributed teams across multiple sites, attendance that's hard to verify, and clients demanding documented reports. These guides cover everything needed to organize attendance, jobs, and internal communication efficiently. Topics include shift management, GPS attendance tracking, job documentation, and field anomaly reporting. GeoTapp App lets cleaning staff clock in and out from job sites via GPS, send photos of completed work, and communicate in real time with coordinators.",
      de: 'Die Verwaltung von Reinigungsunternehmen stellt operative Herausforderungen: verteilte Teams auf mehreren Baustellen, schwer nachweisbare Anwesenheiten und Kunden, die dokumentierte Berichte verlangen. Diese Leitfäden decken alles ab, was für eine effiziente Organisation von Anwesenheiten und Aufträgen benötigt wird. GeoTapp App ermöglicht Reinigungskräften, per GPS ein- und auszustempeln, Fotos der erledigten Arbeiten zu senden und in Echtzeit mit dem Koordinator zu kommunizieren.',
      fr: "La gestion des entreprises de nettoyage présente des défis opérationnels que la plupart des logiciels ignorent : équipes réparties sur plusieurs chantiers, pointages difficiles à vérifier, clients exigeant des rapports documentés. Ces guides couvrent tout ce qu'il faut savoir pour organiser les présences, les interventions et la communication interne. GeoTapp App permet aux agents de pointer leurs entrées et sorties par GPS, d'envoyer des photos des travaux réalisés et de communiquer en temps réel avec le coordinateur.",
      es: 'La gestión de empresas de limpieza presenta retos operativos que la mayoría del software ignora: equipos distribuidos en múltiples obras, fichajes difíciles de verificar y clientes que exigen informes documentados. Estas guías cubren todo lo necesario para organizar presencias, intervenciones y comunicación interna de forma eficiente. GeoTapp App permite a los operarios fichar entrada y salida desde la obra por GPS, enviar fotos de los trabajos realizados y comunicarse en tiempo real con el coordinador.',
      pt: "Managing cleaning companies comes with operational challenges most software ignores: distributed teams across multiple sites, attendance that's hard to verify, and clients demanding documented reports. These guides cover everything needed to organize attendance, jobs, and internal communication efficiently. GeoTapp App lets cleaning staff clock in and out from job sites via GPS, send photos of completed work, and communicate in real time with coordinators.",
      nl: "Managing cleaning companies comes with operational challenges most software ignores: distributed teams across multiple sites, attendance that's hard to verify, and clients demanding documented reports. These guides cover everything needed to organize attendance, jobs, and internal communication efficiently. GeoTapp App lets cleaning staff clock in and out from job sites via GPS, send photos of completed work, and communicate in real time with coordinators.",
      da: "Managing cleaning companies comes with operational challenges most software ignores: distributed teams across multiple sites, attendance that's hard to verify, and clients demanding documented reports. These guides cover everything needed to organize attendance, jobs, and internal communication efficiently. GeoTapp App lets cleaning staff clock in and out from job sites via GPS, send photos of completed work, and communicate in real time with coordinators.",
      sv: "Managing cleaning companies comes with operational challenges most software ignores: distributed teams across multiple sites, attendance that's hard to verify, and clients demanding documented reports. These guides cover everything needed to organize attendance, jobs, and internal communication efficiently. GeoTapp App lets cleaning staff clock in and out from job sites via GPS, send photos of completed work, and communicate in real time with coordinators.",
      nb: "Managing cleaning companies comes with operational challenges most software ignores: distributed teams across multiple sites, attendance that's hard to verify, and clients demanding documented reports. These guides cover everything needed to organize attendance, jobs, and internal communication efficiently. GeoTapp App lets cleaning staff clock in and out from job sites via GPS, send photos of completed work, and communicate in real time with coordinators.",
      ru: "Managing cleaning companies comes with operational challenges most software ignores: distributed teams across multiple sites, attendance that's hard to verify, and clients demanding documented reports. These guides cover everything needed to organize attendance, jobs, and internal communication efficiently. GeoTapp App lets cleaning staff clock in and out from job sites via GPS, send photos of completed work, and communicate in real time with coordinators.",
    },
    product: {
      name: 'GeoTapp App',
      slug: 'geotapp-app',
      ctaLabel: CTA_LABELS,
    },
  },
  installatori: {
    categoryId: 65,
    labels: {
      it: { title: 'Risorse per installatori — GeoTapp', description: 'Articoli e guide per installatori e aziende con tecnici sul campo.', heading: 'Risorse per installatori' },
      en: { title: 'Resources for installers — GeoTapp', description: 'Articles and guides for installers and field service companies.', heading: 'Resources for installers' },
      de: { title: 'Ressourcen für Installateure — GeoTapp', description: 'Artikel und Leitfäden für Installateure und Außendienstunternehmen.', heading: 'Ressourcen für Installateure' },
      fr: { title: 'Ressources pour installateurs — GeoTapp', description: 'Articles et guides pour installateurs et entreprises de terrain.', heading: 'Ressources pour installateurs' },
      es: { title: 'Recursos para instaladores — GeoTapp', description: 'Artículos y guías para instaladores y empresas con técnicos de campo.', heading: 'Recursos para instaladores' },
    },
    intro: {
      it: "Gli installatori e le aziende con tecnici sul campo affrontano ogni giorno il problema del coordinamento: sapere dove sono i tecnici, quali interventi sono stati chiusi, cosa è rimasto in sospeso e come documentare il lavoro per il cliente finale. Questi articoli raccolgono le pratiche operative più efficaci per aziende che gestiscono da 3 a 50 tecnici in campo — dall'organizzazione degli ordini di lavoro alla gestione delle emergenze, dalla reportistica automatica all'integrazione con i processi aziendali esistenti. I temi trattati vanno dalla pianificazione degli interventi alla comunicazione con i clienti, passando per la gestione dei ricambi sul campo e il monitoraggio dei KPI operativi. GeoTapp Flow è la piattaforma pensata per questo tipo di aziende: permette di assegnare interventi, seguire lo stato di avanzamento in tempo reale, raccogliere le firme del cliente al termine del lavoro e generare report automatici.",
      en: "Installers and field service companies face daily coordination challenges: knowing where technicians are, which jobs have been closed, what's still pending, and how to document work for the end client. These guides cover effective operational practices for companies managing 3 to 50 field technicians — from work order organization to emergency handling and automatic reporting. GeoTapp Flow lets you assign jobs, track progress in real time, collect client signatures on completion, and generate automatic reports.",
      de: 'Installateure und Außendienstunternehmen stehen täglich vor Koordinationsproblemen: Wo befinden sich die Techniker? Welche Aufträge wurden abgeschlossen? Wie wird die Arbeit für den Endkunden dokumentiert? Diese Leitfäden decken bewährte Betriebspraktiken für Unternehmen mit 3 bis 50 Außendiensttechnikern ab. GeoTapp Flow ermöglicht die Zuweisung von Aufträgen, die Echtzeit-Verfolgung des Fortschritts, die Erfassung von Kundenunterschriften und die automatische Berichterstattung.',
      fr: "Les installateurs et entreprises de terrain font face chaque jour à des problèmes de coordination : savoir où sont les techniciens, quelles interventions ont été clôturées, comment documenter le travail pour le client final. Ces guides couvrent les meilleures pratiques pour les entreprises gérant 3 à 50 techniciens terrain. GeoTapp Flow permet d'assigner des interventions, de suivre l'avancement en temps réel, de collecter les signatures clients et de générer des rapports automatiques.",
      es: 'Los instaladores y empresas de servicio de campo enfrentan retos diarios de coordinación: saber dónde están los técnicos, qué intervenciones se han cerrado y cómo documentar el trabajo para el cliente final. Estas guías cubren las mejores prácticas operativas para empresas con 3 a 50 técnicos de campo. GeoTapp Flow permite asignar intervenciones, seguir el progreso en tiempo real, recoger firmas del cliente y generar informes automáticos.',
      pt: "Installers and field service companies face daily coordination challenges: knowing where technicians are, which jobs have been closed, what's still pending, and how to document work for the end client. GeoTapp Flow lets you assign jobs, track progress in real time, collect client signatures on completion, and generate automatic reports.",
      nl: "Installers and field service companies face daily coordination challenges: knowing where technicians are, which jobs have been closed, what's still pending, and how to document work for the end client. GeoTapp Flow lets you assign jobs, track progress in real time, collect client signatures on completion, and generate automatic reports.",
      da: "Installers and field service companies face daily coordination challenges: knowing where technicians are, which jobs have been closed, what's still pending, and how to document work for the end client. GeoTapp Flow lets you assign jobs, track progress in real time, collect client signatures on completion, and generate automatic reports.",
      sv: "Installers and field service companies face daily coordination challenges: knowing where technicians are, which jobs have been closed, what's still pending, and how to document work for the end client. GeoTapp Flow lets you assign jobs, track progress in real time, collect client signatures on completion, and generate automatic reports.",
      nb: "Installers and field service companies face daily coordination challenges: knowing where technicians are, which jobs have been closed, what's still pending, and how to document work for the end client. GeoTapp Flow lets you assign jobs, track progress in real time, collect client signatures on completion, and generate automatic reports.",
      ru: "Installers and field service companies face daily coordination challenges: knowing where technicians are, which jobs have been closed, what's still pending, and how to document work for the end client. GeoTapp Flow lets you assign jobs, track progress in real time, collect client signatures on completion, and generate automatic reports.",
    },
    product: {
      name: 'GeoTapp Flow',
      slug: 'geotapp-flow',
      ctaLabel: CTA_LABELS,
    },
  },
  sicurezza: {
    categoryId: 9,
    labels: {
      it: { title: 'Risorse per servizi di sicurezza — GeoTapp', description: 'Articoli e guide per aziende di sicurezza e vigilanza.', heading: 'Risorse per servizi di sicurezza' },
      en: { title: 'Resources for security services — GeoTapp', description: 'Articles and guides for security and surveillance companies.', heading: 'Resources for security services' },
      de: { title: 'Ressourcen für Sicherheitsdienste — GeoTapp', description: 'Artikel und Leitfäden für Sicherheitsdienste.', heading: 'Ressourcen für Sicherheitsdienste' },
      fr: { title: 'Ressources pour services de sécurité — GeoTapp', description: 'Articles et guides pour entreprises de sécurité.', heading: 'Ressources pour services de sécurité' },
      es: { title: 'Recursos para servicios de seguridad — GeoTapp', description: 'Artículos y guías para empresas de seguridad.', heading: 'Recursos para servicios de seguridad' },
    },
    intro: {
      it: "Le aziende di sicurezza e vigilanza operano in ambienti dove la tracciabilità non è un'opzione ma un requisito: ogni ronda deve essere documentata, ogni agente deve essere localizzabile, ogni anomalia deve essere segnalata in tempo reale. Questi articoli affrontano i temi operativi più rilevanti per responsabili di servizi di sicurezza — dalla gestione dei turni e delle presenze alla documentazione degli interventi, dalla comunicazione con la centrale operativa alla reportistica per i clienti finali. La gestione delle squadre di sicurezza richiede strumenti che bilancino controllo operativo e privacy dei lavoratori, con prove concrete di servizio per i clienti e alert automatici in caso di anomalie. GeoTapp App è progettata per rispondere a queste esigenze: permette agli agenti di registrare presenze con geolocalizzazione, documentare ronde ed eventi con foto e note, e comunicare istantaneamente con la centrale.",
      en: 'Security and surveillance companies operate in environments where traceability is a requirement, not an option: every patrol must be documented, every agent must be locatable, every incident must be reported in real time. These guides cover the most relevant operational topics for security service managers — from shift and attendance management to incident documentation and client reporting. GeoTapp App lets agents log attendance with geolocation, document patrols with photos and notes, and communicate instantly with the control center.',
      de: 'Sicherheitsunternehmen arbeiten in Umgebungen, wo Nachverfolgbarkeit keine Option, sondern eine Anforderung ist: jede Runde muss dokumentiert, jeder Agent muss ortbar sein, jede Anomalie muss in Echtzeit gemeldet werden. GeoTapp App ermöglicht Agenten, Anwesenheiten mit Geolokalisierung zu erfassen, Runden mit Fotos zu dokumentieren und sofort mit der Zentrale zu kommunizieren.',
      fr: "Les entreprises de sécurité opèrent dans des environnements où la traçabilité est une exigence : chaque ronde doit être documentée, chaque agent doit être localisable, chaque anomalie doit être signalée en temps réel. GeoTapp App permet aux agents d'enregistrer leur présence par géolocalisation, de documenter les rondes avec photos et de communiquer instantanément avec la centrale.",
      es: 'Las empresas de seguridad operan en entornos donde la trazabilidad es un requisito: cada ronda debe documentarse, cada agente debe ser localizable, cada incidente debe reportarse en tiempo real. GeoTapp App permite a los agentes registrar presencias con geolocalización, documentar rondas con fotos y comunicarse instantáneamente con la central.',
      pt: 'Security and surveillance companies operate in environments where traceability is a requirement, not an option: every patrol must be documented, every agent must be locatable, every incident must be reported in real time. GeoTapp App lets agents log attendance with geolocation, document patrols with photos and notes, and communicate instantly with the control center.',
      nl: 'Security and surveillance companies operate in environments where traceability is a requirement, not an option: every patrol must be documented, every agent must be locatable, every incident must be reported in real time. GeoTapp App lets agents log attendance with geolocation, document patrols with photos and notes, and communicate instantly with the control center.',
      da: 'Security and surveillance companies operate in environments where traceability is a requirement, not an option: every patrol must be documented, every agent must be locatable, every incident must be reported in real time. GeoTapp App lets agents log attendance with geolocation, document patrols with photos and notes, and communicate instantly with the control center.',
      sv: 'Security and surveillance companies operate in environments where traceability is a requirement, not an option: every patrol must be documented, every agent must be locatable, every incident must be reported in real time. GeoTapp App lets agents log attendance with geolocation, document patrols with photos and notes, and communicate instantly with the control center.',
      nb: 'Security and surveillance companies operate in environments where traceability is a requirement, not an option: every patrol must be documented, every agent must be locatable, every incident must be reported in real time. GeoTapp App lets agents log attendance with geolocation, document patrols with photos and notes, and communicate instantly with the control center.',
      ru: 'Security and surveillance companies operate in environments where traceability is a requirement, not an option: every patrol must be documented, every agent must be locatable, every incident must be reported in real time. GeoTapp App lets agents log attendance with geolocation, document patrols with photos and notes, and communicate instantly with the control center.',
    },
    product: {
      name: 'GeoTapp App',
      slug: 'geotapp-app',
      ctaLabel: CTA_LABELS,
    },
  },
};

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#8217;/g, '\u2019').replace(/&#8220;/g, '\u201C').replace(/&#8221;/g, '\u201D').replace(/&nbsp;/g, ' ').trim();
}

function isLocalePost(link: string, locale: string): boolean {
  try {
    const afterBlog = new URL(link).pathname.replace(/^\/blog\//, '');
    if (locale === 'it') return !/^[a-z]{2}\//.test(afterBlog);
    return afterBlog.startsWith(`${locale}/`);
  } catch { return false; }
}

function normalizeUrl(link: string, slug: string): string {
  try {
    const p = new URL(link);
    if (p.hostname === 'blog.geotapp.com') return `/blog${p.pathname}`;
  } catch {}
  return `/blog/${slug}/`;
}

async function fetchAllPostsForCategory(locale: string, categoryId: number) {
  try {
    const res = await fetch(
      `${WP}/wp-json/wp/v2/posts?categories=${categoryId}&per_page=100&_fields=id,slug,title,excerpt,date,link&status=publish`,
      { headers: HEADERS, next: { revalidate: 7200 }, signal: AbortSignal.timeout(8000) },
    );
    if (!res.ok) return [];
    const raw = await res.json() as Array<{ id: number; slug: string; title: { rendered: string }; excerpt: { rendered: string }; date: string; link: string }>;
    return raw
      .filter((p) => isLocalePost(p.link ?? '', locale))
      .map((p) => ({
        id: p.id,
        title: stripHtml(p.title?.rendered ?? ''),
        excerpt: stripHtml(p.excerpt?.rendered ?? '').slice(0, 180),
        url: normalizeUrl(p.link, p.slug),
        date: p.date,
      }));
  } catch {
    return [];
  }
}

type Params = { locale: string; settore: string };

export async function generateStaticParams(): Promise<Params[]> {
  const settori = Object.keys(SETTORE_CONFIG);
  return SUPPORTED_LOCALES.flatMap((locale) =>
    settori.map((settore) => ({ locale, settore }))
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, settore } = await params;
  const config = SETTORE_CONFIG[settore];
  if (!config) return {};
  const resolvedLocale = (locale ?? DEFAULT_LOCALE) as AppLocale;
  const label = config.labels[resolvedLocale] ?? config.labels['en'];
  return {
    title: { absolute: label.title },
    description: label.description,
    alternates: buildLocaleAlternates(resolvedLocale, `/settori/${settore}/risorse/`),
  };
}

const BACK_LABELS: Record<string, string> = {
  it: '← Torna al settore', en: '← Back to sector', de: '← Zurück zum Sektor',
  fr: '← Retour au secteur', es: '← Volver al sector', pt: '← Voltar ao setor',
  nl: '← Terug naar sector', da: '← Tilbage til sektor', sv: '← Tillbaka till sektor',
  nb: '← Tilbake til sektor', ru: '← Назад к разделу',
};

const READ_LABELS: Record<string, string> = {
  it: 'Leggi →', en: 'Read →', de: 'Lesen →', fr: 'Lire →',
  es: 'Leer →', pt: 'Ler →', nl: 'Lees →', da: 'Læs →',
  sv: 'Läs →', nb: 'Les →', ru: 'Читать →',
};

export default async function RisorseSettorePage({ params }: { params: Promise<Params> }) {
  const { locale, settore } = await params;
  const config = SETTORE_CONFIG[settore];
  if (!config) return notFound();

  const resolvedLocale = (locale ?? DEFAULT_LOCALE) as AppLocale;
  const label = config.labels[resolvedLocale] ?? config.labels['en'];
  const posts = await fetchAllPostsForCategory(resolvedLocale, config.categoryId);
  const backLabel = BACK_LABELS[resolvedLocale] ?? BACK_LABELS['en'];
  const readLabel = READ_LABELS[resolvedLocale] ?? READ_LABELS['en'];

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Link href={`/${resolvedLocale}/settori/${settore}/`} className="text-sm text-blue-600 hover:underline">
          {backLabel}
        </Link>
        <h1 className="text-3xl font-bold text-slate-900 mt-4 mb-2">{label.heading}</h1>
        <p className="text-slate-500 mb-8">{label.description}</p>

        {posts.length === 0 ? (
          <p className="text-slate-400 text-sm">Nessun articolo disponibile al momento.</p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.id} className="border-b border-slate-100 pb-6">
                <Link href={post.url} className="group">
                  <h2 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors mb-1">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-500 mb-2">{post.excerpt}</p>
                  <span className="text-xs font-medium text-blue-600">{readLabel}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
