'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import MapBackground from '@/components/blog/MapBackground';
import LNastro from '@/components/LNastro';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';
import { trackEvent } from '@/lib/analytics';
import { britishToVariant } from '@/lib/i18n/en-spelling';

const POSTS_PER_PAGE = 13; // 1 in evidenza + 12 in griglia

export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  image: string | null;
  categories: Array<{ slug: string; name: string }>;
  readingTime: number;
};

/** Nome della categoria come si mostra sul sito (le categorie vere stanno su WordPress). */
const ALIAS_CATEGORIE: Record<string, Record<string, string>> = {
  it: {
    'dimostrazione certificata lavoro svolto': 'Prova del lavoro svolto',
    'guide': 'Guide pratiche',
    'guide pratiche': 'Guide pratiche',
    'geotapp-flow': 'GeoTapp Flow',
    'field service': 'Lavoro sul campo',
  },
  en: {
    'digitalizzazione aziendale': 'Business digitalisation',
    'gestione presenze': 'Attendance management',
    'normativa gdpr': 'GDPR rules',
    'controllo costi': 'Cost control',
    'controllo di gestione': 'Management accounting',
    'gestione team': 'Team management',
    'amministrazione': 'Administration',
    'organizzazione aziendale': 'Business organisation',
    'geotapp-flow': 'GeoTapp Flow',
    'field service': 'Field service',
    'app': 'Apps',
  },
  de: {
    'amministrazione': 'Verwaltung',
    'app': 'Apps',
    'controllo costi': 'Kostenkontrolle',
    'controllo di gestione': 'Controlling',
    'digitalizzazione aziendale': 'Digitalisierung im Unternehmen',
    'dimostrazione certificata lavoro svolto': 'Nachweis der geleisteten Arbeit',
    'field service': 'Außendienst',
    'geotapp-flow': 'GeoTapp Flow',
    'gestione presenze': 'Anwesenheitsverwaltung',
    'gestione team': 'Teamführung',
    'gestione aziendale': 'Unternehmensführung',
    'guide': 'Praxisleitfäden',
    'guide pratiche': 'Praxisleitfäden',
    'praktische leitfäden': 'Praxisleitfäden',
    'normativa gdpr': 'DSGVO-Vorschriften',
    'organizzazione aziendale': 'Betriebsorganisation',
    'produttività': 'Produktivität',
    'soluzioni per pmi': 'Lösungen für KMU',
    'software gestionale': 'Verwaltungssoftware',
    'timbratura digitale': 'Digitale Zeiterfassung',
    'senza categoria': 'Allgemein',
    'novità': 'Neuigkeiten',
    'prodotti': 'Produkte',
    'risorse': 'Ressourcen',
    'gestione flotte': 'Flottenmanagement',
    'imprese di pulizie': 'Reinigungsunternehmen',
    'sicurezza privata': 'Sicherheitsdienste',
    'edilizia': 'Bauwirtschaft',
    'confronti': 'Vergleiche',
    'cleaning': 'Reinigung',
    'zeit-tracker': 'TimeTracker',
  },
  fr: {
    'actualités': 'Actualités',
    'amministrazione': 'Administration',
    'app': 'Applications',
    'confronti': 'Comparatifs',
    'controllo costi': 'Maîtrise des coûts',
    'controllo di gestione': 'Contrôle de gestion',
    'digitalizzazione aziendale': 'Numérique en entreprise',
    'dimostrazione certificata lavoro svolto': 'Preuve du travail réalisé',
    'field service': 'Travail sur le terrain',
    'field service fr': 'Travail sur le terrain',
    'geotapp-flow': 'GeoTapp Flow',
    'geotapp-timetracker': 'TimeTracker',
    'geotapp timetracker': 'TimeTracker',
    'gestione presenze': 'Gestion des présences',
    'gestione team': 'Gestion d’équipe',
    'gestione aziendale': 'Gestion d’entreprise',
    'guide': 'Guides pratiques',
    'guide pratiche': 'Guides pratiques',
    'normativa gdpr': 'Réglementation RGPD',
    'organizzazione aziendale': 'Organisation de l’entreprise',
    'produttività': 'Productivité',
    'soluzioni per pmi': 'Solutions pour les PME',
    'software gestionale': 'Logiciels de gestion',
    'timbratura digitale': 'Pointage numérique',
    'senza categoria': 'Général',
    'novità': 'Actualités',
    'prodotti': 'Produits',
    'risorse': 'Ressources',
    'gestione flotte': 'Gestion de flotte',
    'imprese di pulizie': 'Entreprises de nettoyage',
    'sicurezza privata': 'Sécurité privée',
    'edilizia': 'BTP',
    'cleaning': 'Nettoyage',
  },
  es: {
    'amministrazione': 'Administración',
    'app': 'Aplicaciones',
    'confronti': 'Comparativas',
    'controllo costi': 'Control de costes',
    'controllo di gestione': 'Control de gestión',
    'digitalizzazione aziendale': 'Digitalización de la empresa',
    'dimostrazione certificata lavoro svolto': 'Prueba del trabajo realizado',
    'field service': 'Trabajo en campo',
    'field service es': 'Trabajo en campo',
    'geotapp-flow': 'GeoTapp Flow',
    'geotapp-timetracker': 'TimeTracker',
    'geotapp timetracker': 'TimeTracker',
    'gestione presenze': 'Gestión de fichajes',
    'gestione team': 'Gestión de equipos',
    'gestione aziendale': 'Gestión empresarial',
    'guide': 'Guías prácticas',
    'guide pratiche': 'Guías prácticas',
    'normativa gdpr': 'Normativa RGPD',
    'organizzazione aziendale': 'Organización de la empresa',
    'produttività': 'Productividad',
    'soluzioni per pmi': 'Soluciones para pymes',
    'software gestionale': 'Software de gestión',
    'timbratura digitale': 'Fichaje digital',
    'senza categoria': 'General',
    'novità': 'Novedades',
    'noticias': 'Noticias',
    'prodotti': 'Productos',
    'risorse': 'Recursos',
    'gestione flotte': 'Gestión de flotas',
    'imprese di pulizie': 'Empresas de limpieza',
    'sicurezza privata': 'Seguridad privada',
    'edilizia': 'Construcción',
    'cleaning': 'Limpieza',
  },
  pt: {
    'amministrazione': 'Administração',
    'aplicativo': 'Aplicações',
    'app': 'Aplicações',
    'confronti': 'Comparações',
    'controllo costi': 'Controlo de custos',
    'controllo di gestione': 'Controlo de gestão',
    'digitalizzazione aziendale': 'Digitalização da empresa',
    'dimostrazione certificata lavoro svolto': 'Prova do trabalho realizado',
    'field service': 'Trabalho no terreno',
    'field service pt': 'Trabalho no terreno',
    'geotapp-flow': 'GeoTapp Flow',
    'geotapp-timetracker': 'TimeTracker',
    'geotapp timetracker': 'TimeTracker',
    'gestione presenze': 'Gestão de assiduidade',
    'gestione team': 'Gestão de equipas',
    'gestione aziendale': 'Gestão empresarial',
    'gestão de negócios': 'Gestão empresarial',
    'gestão de frotas': 'Gestão de frotas',
    'guide': 'Guias práticos',
    'guide pratiche': 'Guias práticos',
    'normativa gdpr': 'Normas RGPD',
    'organizzazione aziendale': 'Organização da empresa',
    'produttività': 'Produtividade',
    'soluzioni per pmi': 'Soluções para PME',
    'software gestionale': 'Software de gestão',
    'timbratura digitale': 'Picagem digital',
    'senza categoria': 'Geral',
    'novità': 'Novidades',
    'notícias': 'Notícias',
    'prodotti': 'Produtos',
    'risorse': 'Recursos',
    'gestione flotte': 'Gestão de frotas',
    'imprese di pulizie': 'Empresas de limpeza',
    'sicurezza privata': 'Segurança privada',
    'edilizia': 'Construção',
    'cleaning': 'Limpeza',
  },
  da: {
    'amministrazione': 'Administration',
    'app': 'Apps',
    'confronti': 'Sammenligninger',
    'controllo costi': 'Omkostningskontrol',
    'controllo di gestione': 'Økonomistyring',
    'digitalizzazione aziendale': 'Digitalisering af virksomheden',
    'dimostrazione certificata lavoro svolto': 'Dokumentation af udført arbejde',
    'field service': 'Arbejde i marken',
    'field service da': 'Arbejde i marken',
    'geotapp-flow': 'GeoTapp Flow',
    'geotapp-timetracker': 'TimeTracker',
    'geotapp timetracker': 'TimeTracker',
    'gestione presenze': 'Fremmøderegistrering',
    'gestione team': 'Teamledelse',
    'gestione aziendale': 'Virksomhedsstyring',
    'guide': 'Praktiske vejledninger',
    'guide pratiche': 'Praktiske vejledninger',
    'normativa gdpr': 'Regler og GDPR',
    'organizzazione aziendale': 'Virksomhedens organisation',
    'produttività': 'Produktivitet',
    'soluzioni per pmi': 'Løsninger til SMV',
    'software gestionale': 'Styringssoftware',
    'timbratura digitale': 'Digital stempling',
    'senza categoria': 'Generelt',
    'novità': 'Nyheder',
    'prodotti': 'Produkter',
    'risorse': 'Ressourcer',
    'gestione flotte': 'Flådestyring',
    'imprese di pulizie': 'Rengøringsfirmaer',
    'sicurezza privata': 'Private vagtselskaber',
    'edilizia': 'Byggeri',
    'cleaning': 'Rengøring',
  },
  sv: {
    'amministrazione': 'Administration',
    'app': 'Appar',
    'confronti': 'Jämförelser',
    'controllo costi': 'Kostnadskontroll',
    'controllo di gestione': 'Ekonomistyrning',
    'digitalizzazione aziendale': 'Digitalisering av företaget',
    'dimostrazione certificata lavoro svolto': 'Dokumentation av utfört arbete',
    'field service': 'Arbete i fält',
    'field service sv': 'Arbete i fält',
    'geotapp-flow': 'GeoTapp Flow',
    'geotapp-timetracker': 'TimeTracker',
    'geotapp timetracker': 'TimeTracker',
    'gestione presenze': 'Närvaroregistrering',
    'gestione team': 'Teamledning',
    'gestione aziendale': 'Företagsledning',
    'företagsledning': 'Företagsledning',
    'guide': 'Praktiska guider',
    'guide pratiche': 'Praktiska guider',
    'praktiska guider': 'Praktiska guider',
    'normativa gdpr': 'Regler och GDPR',
    'organizzazione aziendale': 'Företagets organisation',
    'produttività': 'Produktivitet',
    'soluzioni per pmi': 'Lösningar för småföretag',
    'software gestionale': 'Verksamhetssystem',
    'timbratura digitale': 'Digital stämpling',
    'senza categoria': 'Allmänt',
    'novità': 'Nyheter',
    'nyheter': 'Nyheter',
    'prodotti': 'Produkter',
    'produkter': 'Produkter',
    'risorse': 'Resurser',
    'gestione flotte': 'Fordonshantering',
    'vagnparkshantering': 'Fordonshantering',
    'imprese di pulizie': 'Städföretag',
    'sicurezza privata': 'Bevakningsföretag',
    'edilizia': 'Bygg',
    'cleaning': 'Städning',
  },
  nl: {
    'amministrazione': 'Administratie',
    'app': 'Apps',
    'controllo costi': 'Kostenbeheersing',
    'controllo di gestione': 'Bedrijfsbeheer',
    'digitalizzazione aziendale': 'Digitalisering van het bedrijf',
    'dimostrazione certificata lavoro svolto': 'Bewijs van het uitgevoerde werk',
    'field service': 'Werk in het veld',
    'field service nl': 'Werk in het veld',
    'geotapp-flow': 'GeoTapp Flow',
    'gestione presenze': 'Aanwezigheidsbeheer',
    'gestione team': 'Teambeheer',
    'gestione aziendale': 'Bedrijfsvoering',
    'guide': 'Praktijkgidsen',
    'guide pratiche': 'Praktijkgidsen',
    'normativa gdpr': 'AVG-regels',
    'organizzazione aziendale': 'Bedrijfsorganisatie',
    'produttività': 'Productiviteit',
    'soluzioni per pmi': 'Oplossingen voor het MKB',
    'software gestionale': 'Beheersoftware',
    'timbratura digitale': 'Digitale tijdregistratie',
    'senza categoria': 'Algemeen',
    'novità': 'Nieuws',
    'nieuws': 'Nieuws',
    'prodotti': 'Producten',
    'risorse': 'Bronnen',
    'gestione flotte': 'Wagenparkbeheer',
    'imprese di pulizie': 'Schoonmaakbedrijven',
    'sicurezza privata': 'Particuliere beveiliging',
    'edilizia': 'Bouw',
    'confronti': 'Vergelijkingen',
    'cleaning': 'Schoonmaak',
  },
};
function nomeCategoria(nome: string, locale: string): string {
  const pulito = nome.replace(/&amp;/g, '&').trim();
  const alias = (ALIAS_CATEGORIE[locale] ?? ALIAS_CATEGORIE[locale.split('-')[0]])?.[pulito.toLowerCase()];
  return britishToVariant(alias ?? pulito, locale);
}

export default function BlogClient({ locale, posts }: { locale: AppLocale; posts: Post[] }) {
  const dict = getDictionary(locale);
  const b = dict.blog;
  const [page, setPage] = useState(0);
  const [activeCat, setActiveCat] = useState<string>('all');

  // Le categorie arrivano da WordPress, con doppioni («GeoTapp» due volte, «guide» e
  // «Guide Pratiche») e nomi che promettono troppo («certificata»). Qui si mostrano con
  // il nome ripulito, si uniscono quelle che hanno lo stesso nome e si tengono solo quelle
  // con almeno due articoli: il filtro deve aiutare a scegliere, non elencare tutto.
  const categories = useMemo(() => {
    const byName = new Map<string, { name: string; slugs: Set<string>; count: number }>();
    for (const p of posts) {
      const seen = new Set<string>();
      for (const c of p.categories ?? []) {
        const name = nomeCategoria(c.name, locale);
        const key = name.toLocaleLowerCase(locale);
        const prev = byName.get(key) ?? { name, slugs: new Set<string>(), count: 0 };
        prev.slugs.add(c.slug);
        if (!seen.has(key)) prev.count += 1;
        seen.add(key);
        byName.set(key, prev);
      }
    }
    return Array.from(byName.entries())
      .map(([key, v]) => ({ slug: key, name: v.name, slugs: v.slugs, count: v.count }))
      .filter((c) => c.count >= 2)
      .sort((a, c) => c.count - a.count);
  }, [posts, locale]);

  const filtered = useMemo(() => {
    if (activeCat === 'all') return posts;
    const scelta = categories.find((c) => c.slug === activeCat);
    if (!scelta) return posts;
    return posts.filter((p) => (p.categories ?? []).some((c) => scelta.slugs.has(c.slug)));
  }, [posts, activeCat, categories]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const visible = filtered.slice(page * POSTS_PER_PAGE, (page + 1) * POSTS_PER_PAGE);

  // Il primo post e' in evidenza (grande), il resto va nella griglia a filo.
  const featured = visible[0] ?? null;
  const rest = visible.slice(1);

  function handleCatClick(slug: string) {
    setActiveCat(slug);
    setPage(0);
  }

  const trialHref = `/${locale}/trial/`;

  return (
    <div className="lp-l lp-blog">
      <MapBackground />

      <section className="ph">
        <div className="w">
          {/* "Pensieri e Scintille" resta come firma nell'occhiello: l'H1 del
              blog dice di cosa parliamo, non come ci sentiamo quando scriviamo. */}
          <p className="kk k"><s></s>{dict.navbar.blog}{(b as any).hero_tagline ? ` · ${(b as any).hero_tagline}` : ''}</p>
          <h1>{b.hero_title}</h1>
          <p className="lede">{b.hero_desc}</p>
          <div className="acts">
            <Link
              className="b1"
              href={trialHref}
              onClick={() => trackEvent('trial_click', { cta_source: 'blog_hero' })}
            >
              {b.cta_btn}
            </Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="w">
          {posts.length === 0 ? (
            <p>{b.no_posts}</p>
          ) : (
            <>
              {featured && (
                <Link href={featured.url} className="feat r-s">
                  {featured.image && (
                    <div className="ph">
                      <img src={featured.image} alt="" loading="lazy" />
                    </div>
                  )}
                  <div className="tx">
                    <p className="m">
                      {featured.categories[0] && <span>{nomeCategoria(featured.categories[0].name, locale)}</span>}
                      <span>{formatDate(featured.date, locale)}</span>
                      {featured.readingTime > 0 && <span>{featured.readingTime} min</span>}
                    </p>
                    <h2>{featured.title}</h2>
                    {featured.excerpt && <p>{featured.excerpt}</p>}
                    <span className="go">{b.read_article}</span>
                  </div>
                </Link>
              )}

              {categories.length > 0 && (
                <div className="cats r d1">
                  <button className={activeCat === 'all' ? 'on' : ''} onClick={() => handleCatClick('all')}>
                    {b.cat_all}
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      className={activeCat === cat.slug ? 'on' : ''}
                      onClick={() => handleCatClick(cat.slug)}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}

              {rest.length > 0 && (
                <div className="posts">
                  {rest.map((post, i) => (
                    <Link key={post.id} href={post.url} className={`r d${(i % 4) + 1}`}>
                      {post.image && (
                        <div className="ph">
                          <img src={post.image} alt="" loading="lazy" />
                        </div>
                      )}
                      <p className="m">
                        {post.categories[0] && <span>{nomeCategoria(post.categories[0].name, locale)}</span>}
                        <span>{formatDate(post.date, locale)}</span>
                        {post.readingTime > 0 && <span>{post.readingTime} min</span>}
                      </p>
                      <h3>{post.title}</h3>
                    </Link>
                  ))}
                </div>
              )}

              {totalPages > 1 && (
                <div className="pag r">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button key={i} className={i === page ? 'on' : ''} onClick={() => setPage(i)}>
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <LNastro />

      <section className="end">
        <img className="bg" src="/bg2.webp" alt="" aria-hidden="true" loading="lazy" />
        <div className="ov" />
        <div className="w">
          <h2 className="r">{b.cta_title}</h2>
          <p className="r d1">{b.cta_desc}</p>
          <div className="acts r d2">
            <Link
              className="b1"
              href={trialHref}
              onClick={() => trackEvent('trial_click', { cta_source: 'blog_bottom' })}
            >
              {b.cta_btn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function formatDate(iso: string, locale: string): string {
  return new Date(iso).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
}
