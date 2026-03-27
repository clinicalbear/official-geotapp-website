import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type AppLocale } from '@/lib/i18n/config';

const WP = 'https://blog.geotapp.com';
const HEADERS = { host: 'blog.geotapp.com', 'x-geotapp-proxy': '1', 'x-forwarded-proto': 'https' };

const SETTORE_CONFIG: Record<string, {
  categoryId: number;
  labels: Record<string, { title: string; description: string; heading: string }>;
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
  if (!config) notFound();

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
