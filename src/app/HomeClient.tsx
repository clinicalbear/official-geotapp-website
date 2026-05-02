'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Map,
  Smartphone,
  Database,
  Hammer,
  Sparkles,
  FileCheck2,
  MapPin,
  WifiOff,
} from 'lucide-react';
// Heavy below-fold components — dynamic import to reduce initial bundle
import dynamic from 'next/dynamic';
const HeartbeatLine = dynamic(() => import('@/components/HeartbeatLine'), { ssr: false });
const FlowCarousel = dynamic(() => import('@/components/FlowCarousel'), { ssr: false });
const TTCarousel = dynamic(() => import('@/components/TTCarousel'), { ssr: false });
const VerifierMockup = dynamic(() => import('@/components/VerifierMockup'), { ssr: false });


// UI MOCKUP COMPONENTS (Built with Tailwind for "Real Example" feel)
const MockupFlow = ({ m }: { m: { pipeline_title: string; month: string; quote_name: string; quote_approved: string } }) => (
  <div className="bg-white rounded-xl border border-border shadow-xl overflow-hidden font-sans text-xs">
    <div className="bg-slate-50 border-b border-border p-3 flex gap-2">
      <div className="w-3 h-3 rounded-full bg-red-400"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
      <div className="w-3 h-3 rounded-full bg-green-400"></div>
    </div>
    <div className="p-4 space-y-3">
      <div className="flex justify-between items-center text-text-secondary">
        <span className="font-bold text-text-primary">{m.pipeline_title}</span>
        <span>{m.month}</span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-3 p-2 bg-green-50 rounded border border-green-100">
          <div className="w-8 h-8 rounded bg-green-200 flex items-center justify-center text-green-700 font-bold">
            €
          </div>
          <div className="flex-1">
            <div className="font-bold text-slate-800">{m.quote_name}</div>
            <div className="text-[10px] text-slate-500">
              {m.quote_approved}
            </div>
          </div>
          <span className="font-bold text-green-600">+€12.500</span>
        </div>
        <div className="flex items-center gap-3 p-2 bg-slate-50 rounded border border-slate-100 opacity-60">
          <div className="w-8 h-8 rounded bg-slate-200"></div>
          <div className="h-2 w-24 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  localizePath,
} from '@/lib/i18n/locale-routing';
const DemoReportBanner = dynamic(() => import('@/components/DemoReportBanner'), { ssr: true });
const TrustBar = dynamic(() => import('@/components/TrustBar'), { ssr: true });
const ListedOn = dynamic(() => import('@/components/ListedOn'), { ssr: true });


const DIFF_COPY: Record<string, { h2_1: string; h2_2: string; desc: string; link: string }> = {
  it: { h2_1: 'Tutto quello che fanno loro, lo facciamo anche noi.', h2_2: 'Ma quello che facciamo noi, loro non possono.', desc: 'Timbratura GPS, CRM, gestione squadre \u2014 s\u00ec, facciamo tutto questo. Ma quando il cliente contesta, gli altri ti lasciano con un foglio Excel. Noi ti diamo un report sigillato, non alterabile, verificabile da chiunque \u2014 e la discussione finisce l\u00ec.', link: 'Scopri la differenza' },
  en: { h2_1: 'Everything they do, we do.', h2_2: 'But what we do, they can\'t.', desc: 'GPS tracking, CRM, team management \u2014 yes, we do all of that. But when a client disputes your work, the others leave you alone. We hand you a sealed, verified report that ends the conversation.', link: 'See the difference' },
  de: { h2_1: 'Alles, was die anderen tun, tun wir auch.', h2_2: 'Aber was wir tun, k\u00f6nnen die anderen nicht.', desc: 'GPS-Tracking, CRM, Teamverwaltung \u2014 ja, das alles machen wir auch. Aber wenn ein Kunde Ihre Arbeit bestreitet, lassen die anderen Sie allein. Wir geben Ihnen einen versiegelten, nicht ver\u00e4nderbaren Bericht, der die Diskussion beendet.', link: 'Den Unterschied sehen' },
  fr: { h2_1: 'Tout ce qu\'ils font, nous le faisons aussi.', h2_2: 'Mais ce que nous faisons, ils ne le peuvent pas.', desc: 'Suivi GPS, CRM, gestion d\'\u00e9quipes \u2014 oui, nous faisons tout cela. Mais quand un client conteste votre travail, les autres vous laissent seul. Nous vous donnons un rapport scell\u00e9, non modifiable, v\u00e9rifiable par tous.', link: 'Voir la diff\u00e9rence' },
  nl: { h2_1: 'Alles wat zij doen, doen wij ook.', h2_2: 'Maar wat wij doen, kunnen zij niet.', desc: 'GPS-tracking, CRM, teambeheer \u2014 ja, dat doen wij ook allemaal. Maar wanneer een klant uw werk betwist, laten de anderen u alleen. Wij geven u een verzegeld, niet-wijzigbaar rapport dat de discussie be\u00ebindigt.', link: 'Ontdek het verschil' },
  es: { h2_1: 'Todo lo que ellos hacen, nosotros tambi\u00e9n.', h2_2: 'Pero lo que hacemos nosotros, ellos no pueden.', desc: 'Seguimiento GPS, CRM, gesti\u00f3n de equipos \u2014 s\u00ed, hacemos todo eso. Pero cuando un cliente cuestiona tu trabajo, los dem\u00e1s te dejan solo. Nosotros te damos un informe sellado, no alterable, verificable por cualquiera.', link: 'Ver la diferencia' },
  pt: { h2_1: 'Tudo o que eles fazem, n\u00f3s tamb\u00e9m fazemos.', h2_2: 'Mas o que n\u00f3s fazemos, eles n\u00e3o conseguem.', desc: 'Rastreamento GPS, CRM, gest\u00e3o de equipes \u2014 sim, fazemos tudo isso. Mas quando um cliente contesta o seu trabalho, os outros deixam voc\u00ea sozinho. N\u00f3s entregamos um relat\u00f3rio selado, verific\u00e1vel, que encerra a discuss\u00e3o.', link: 'Veja a diferen\u00e7a' },
  da: { h2_1: 'Alt hvad de g\u00f8r, g\u00f8r vi ogs\u00e5.', h2_2: 'Men hvad vi g\u00f8r, kan de ikke.', desc: 'GPS-sporing, CRM, teamledelse \u2014 ja, det g\u00f8r vi ogs\u00e5. Men n\u00e5r en kunde bestrider dit arbejde, lader de andre dig alene. Vi giver dig en forseglet, ikke-\u00e6ndringsbar rapport, der afslutter diskussionen.', link: 'Se forskellen' },
  sv: { h2_1: 'Allt de g\u00f6r, g\u00f6r vi ocks\u00e5.', h2_2: 'Men det vi g\u00f6r, kan de inte.', desc: 'GPS-sp\u00e5rning, CRM, teamhantering \u2014 ja, allt det g\u00f6r vi ocks\u00e5. Men n\u00e4r en kund ifr\u00e5gas\u00e4tter ditt arbete, l\u00e4mnar de andra dig ensam. Vi ger dig en f\u00f6rseglad, ej \u00e4ndringsbar rapport som avslutar diskussionen.', link: 'Se skillnaden' },
  nb: { h2_1: 'Alt de gj\u00f8r, gj\u00f8r vi ogs\u00e5.', h2_2: 'Men det vi gj\u00f8r, kan de ikke.', desc: 'GPS-sporing, CRM, teamledelse \u2014 ja, alt det gj\u00f8r vi ogs\u00e5. Men n\u00e5r en kunde bestrider arbeidet ditt, lar de andre deg alene. Vi gir deg en forseglet, ikke-endringsbar rapport som avslutter diskusjonen.', link: 'Se forskjellen' },
  ru: { h2_1: '\u0412\u0441\u0451, \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u044e\u0442 \u043e\u043d\u0438, \u0434\u0435\u043b\u0430\u0435\u043c \u0438 \u043c\u044b.', h2_2: '\u041d\u043e \u0442\u043e, \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u043c \u043c\u044b, \u043e\u043d\u0438 \u043d\u0435 \u043c\u043e\u0433\u0443\u0442.', desc: 'GPS-\u0442\u0440\u0435\u043a\u0438\u043d\u0433, CRM, \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043c\u0438 \u2014 \u0434\u0430, \u0432\u0441\u0451 \u044d\u0442\u043e \u043c\u044b \u0434\u0435\u043b\u0430\u0435\u043c. \u041d\u043e \u043a\u043e\u0433\u0434\u0430 \u043a\u043b\u0438\u0435\u043d\u0442 \u043e\u0441\u043f\u0430\u0440\u0438\u0432\u0430\u0435\u0442 \u0432\u0430\u0448\u0443 \u0440\u0430\u0431\u043e\u0442\u0443, \u0434\u0440\u0443\u0433\u0438\u0435 \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0432\u0430\u0441 \u043e\u0434\u043d\u043e\u0433\u043e. \u041c\u044b \u0434\u0430\u0451\u043c \u0432\u0430\u043c \u0437\u0430\u043f\u0435\u0447\u0430\u0442\u0430\u043d\u043d\u044b\u0439, \u043d\u0435\u0438\u0437\u043c\u0435\u043d\u044f\u0435\u043c\u044b\u0439 \u043e\u0442\u0447\u0451\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u0441\u043f\u043e\u0440.', link: '\u0423\u0432\u0438\u0434\u0435\u0442\u044c \u0440\u0430\u0437\u043d\u0438\u0446\u0443' },
};

export default function Home() {
  // Locale resolution is path-based so all internal links stay language-aware.
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  // Dictionary lookup remains local to keep this page self-contained and deterministic.
  const dict = getDictionary(currentLocale);
  // Single helper avoids scattered localized path logic in sections below.
  const getLink = (path: string) => localizePath(path, currentLocale);
  // Localized link helper prevents accidental fallback to default-language paths.
  // Landing composition below intentionally alternates narrative and proof blocks.

  useEffect(() => {
    const bar = document.getElementById('sticky-mobile-cta');
    if (!bar) return;
    const targets = document.querySelectorAll('section.py-24');
    if (!targets.length) return;
    const lastTarget = targets[targets.length - 1];
    const observer = new IntersectionObserver(
      ([entry]) => { bar.style.display = entry.isIntersecting ? 'none' : ''; },
      { threshold: 0.3 }
    );
    observer.observe(lastTarget);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background min-h-screen text-text-primary overflow-hidden">
      {/* Landing is locale-aware: all internal links pass through getLink(). */}
      {/* HERO SECTION — dark bg, text left, screenshots right */}
      <section className="relative pt-32 pb-20 px-6 bg-slate-900 overflow-hidden">
        {/* Gradient accent top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F97316] via-[#8FC436] to-[#8B5CF6]" />

        <div className="container mx-auto max-w-7xl z-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <div>
              <span className="inline-block px-5 py-2 rounded-full bg-primary/15 border border-primary/25 text-primary text-sm font-bold tracking-wide mb-8 anim-fade-in-up">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                {dict.landing.hero_badge}
              </span>

              {(() => { const d = DIFF_COPY[currentLocale] ?? DIFF_COPY['en']; return (
                <>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.08] tracking-tight mb-6 anim-fade-in-up anim-delay-200">
                    {d.h2_1}<br />
                    <span className="text-primary">{d.h2_2}</span>
                  </h1>
                  <p className="text-lg text-slate-400 leading-relaxed max-w-xl mb-6 anim-fade-in-up anim-delay-300">
                    {d.desc}
                  </p>
                </>
              ); })()}

              <p className="text-sm text-slate-500 mb-8 anim-fade-in-up anim-delay-400">
                {dict.landing.hero_sectors_prefix}{' '}
                <Link href={getLink('/settori/pulizie')} className="underline hover:text-slate-300 transition-colors">
                  {dict.landing.hero_sectors_pulizie}
                </Link>
                {', '}
                <Link href={getLink('/settori/installatori')} className="underline hover:text-slate-300 transition-colors">
                  {dict.landing.hero_sectors_installatori}
                </Link>
                {' '}{dict.landing.hero_sectors_and}{' '}
                <Link href={getLink('/settori/sicurezza')} className="underline hover:text-slate-300 transition-colors">
                  {dict.landing.hero_sectors_sicurezza}
                </Link>
                .
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10 anim-fade-in-up anim-delay-500">
                <Link
                  href={getLink('/trial')}
                  className="group px-8 py-4 bg-primary text-white font-bold rounded-2xl text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 transform hover:-translate-y-1"
                >
                  {dict.landing.hero_cta_primary}
                  <ArrowRight size={18} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={getLink('/settori')}
                  className="px-8 py-4 bg-white/10 text-white border border-white/20 font-bold rounded-2xl text-lg hover:bg-white/20 transition-all"
                >
                  {dict.landing.hero_cta_secondary}
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex flex-col sm:flex-row gap-5 text-sm text-slate-500 anim-fade-in-up anim-delay-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                  <span><strong className="text-slate-300">{dict.landing.trust_gdpr}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-blue-400 shrink-0" />
                  <span><strong className="text-slate-300">{dict.landing.trust_gps}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <WifiOff size={16} className="text-amber-400 shrink-0" />
                  <span><strong className="text-slate-300">{dict.landing.trust_offline}</strong></span>
                </div>
              </div>
            </div>

            {/* Right — stacked screenshots in perspective */}
            <div className="relative hidden lg:block anim-fade-in-up anim-delay-400" style={{ perspective: '1200px' }}>
              {/* Back screenshot — live map */}
              <div
                className="absolute top-8 -left-4 w-[85%] rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40"
                style={{ transform: 'rotateY(-8deg) rotateX(2deg)' }}
              >
                <img src="/screen_live_map.png" alt="GeoTapp Flow Live Map" className="w-full" loading="eager" />
              </div>
              {/* Middle — Flow dashboard */}
              <div
                className="relative w-[90%] rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20"
                style={{ transform: 'rotateY(-3deg)' }}
              >
                <img src="/screen_dashboard.png" alt="GeoTapp Flow Dashboard" className="w-full" loading="eager" />
              </div>
              {/* Front — TimeTracker in smartphone frame, in primo piano */}
              <div
                className="absolute -bottom-6 -right-4 w-[160px] z-20"
                style={{ transform: 'rotateY(-3deg)' }}
              >
                <div className="rounded-[2rem] border-[3px] border-white/20 shadow-2xl shadow-black/60 bg-slate-900 overflow-hidden">
                  <div className="rounded-[1.8rem] overflow-hidden m-[3px]">
                    <img src="/screenshots/timetracker-dashboard.jpg" alt="GeoTapp TimeTracker" className="w-full" loading="eager" />
                  </div>
                </div>
              </div>

            </div>

            {/* Product logos — below screenshots, full width */}
            <div className="hidden lg:flex items-center justify-center gap-10 mt-8 anim-fade-in-up anim-delay-600 lg:col-span-2">
              <Link href={getLink('/products/geotapp-timetracker')} className="group">
                <img src="/TimeTrackerTrasparente.png" alt="TimeTracker" className="h-8 w-auto opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              </Link>
              <div className="w-px h-8 bg-white/15" />
              <Link href={getLink('/products/geotapp-flow')} className="group">
                <img src="/logoFlow.png" alt="Flow" className="h-8 w-auto opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              </Link>
              <div className="w-px h-8 bg-white/15" />
              <Link href={getLink('/products/geotapp-verifier')} className="group">
                <img src="/logoVerifier.png" alt="Verifier" className="h-8 w-auto opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              </Link>
            </div>
          </div>
        </div>

        {/* Background blobs on dark */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="hero-blob-1 absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#8FC436]/10 rounded-full blur-[120px]" />
          <div className="hero-blob-2 absolute top-20 -right-40 w-[500px] h-[500px] bg-[#3BAEE0]/8 rounded-full blur-[120px]" />
          <div className="hero-blob-3 absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-[#8B5CF6]/8 rounded-full blur-[120px]" />
        </div>
      </section>

      {/* TRUST BAR — social proof immediately after hero */}
      <TrustBar locale={currentLocale} />

      {/* LISTED ON — directory badges */}
      <div className="listed-on-wrapper" style={{ background: 'linear-gradient(135deg, #2a8fc4 0%, #3BAEE0 50%, #2a8fc4 100%)', boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.15), inset 0 -4px 12px rgba(0,0,0,0.1)' }}>
        <ListedOn locale={currentLocale} />
      </div>


      {/* PROBLEM SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {dict.landing.problem_title}
            </h2>
            <p className="text-xl text-text-secondary font-light">
              {dict.landing.problem_subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {(dict.landing.problem_items as { title: string; desc: string }[]).map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border-l-4 border-brand-blue shadow-sm">
                <div className="text-6xl font-display font-black text-brand-blue/20 leading-none mb-3 select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SETTORI SECTION */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              {dict.home_sections.settori.title}
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              {dict.home_sections.settori.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Installatori */}
            <Link
              href={getLink('/settori/installatori')}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-300 transition-all hover:shadow-xl hover:shadow-amber-100/50 hover:-translate-y-1"
            >
              <div className="h-2 bg-gradient-to-r from-amber-400 to-orange-500" />
              <div className="p-8">
                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Hammer size={28} />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-3">
                  {dict.home_sections.settori.installatori.name}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {dict.home_sections.settori.installatori.desc}
                </p>
                <div className="text-amber-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  {dict.home_sections.settori.installatori.cta} <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            {/* Sicurezza */}
            <Link
              href={getLink('/settori/sicurezza')}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 hover:border-indigo-300 transition-all hover:shadow-xl hover:shadow-indigo-100/50 hover:-translate-y-1"
            >
              <div className="h-2 bg-gradient-to-r from-indigo-400 to-violet-500" />
              <div className="p-8">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-3">
                  {dict.home_sections.settori.sicurezza.name}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {dict.home_sections.settori.sicurezza.desc}
                </p>
                <div className="text-indigo-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  {dict.home_sections.settori.sicurezza.cta} <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            {/* Pulizie */}
            <Link
              href={getLink('/settori/pulizie')}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 hover:border-cyan-300 transition-all hover:shadow-xl hover:shadow-cyan-100/50 hover:-translate-y-1"
            >
              <div className="h-2 bg-gradient-to-r from-cyan-400 to-teal-500" />
              <div className="p-8">
                <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <Sparkles size={28} />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-3">
                  {dict.home_sections.settori.pulizie.name}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {dict.home_sections.settori.pulizie.desc}
                </p>
                <div className="text-cyan-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  {dict.home_sections.settori.pulizie.cta} <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center mt-10">
            <Link
              href={getLink('/settori')}
              className="inline-flex items-center gap-2 text-slate-500 font-semibold hover:text-slate-900 transition-colors"
            >
              {dict.home_sections.settori.see_all} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Product blocks: Verifier leads as the unique trust mechanism, then office (Flow), then field (App). */}
      {/* PRODUCT SECTION: VERIFIER */}
      <section id="verifier-section" className="py-24 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-[3fr_2fr] gap-16 items-center">
            <div className="order-2 md:order-1">
              {/* Verifier visual mockup with scan + stamp */}
              <VerifierMockup />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                  <FileCheck2 size={24} />
                </div>
                <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm">
                  {dict.home_sections.verifier.badge}
                </h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {dict.home_sections.verifier.title}
              </h3>
              <p
                className="text-lg text-text-secondary leading-relaxed mb-8"
                dangerouslySetInnerHTML={{
                  __html: dict.home_sections.verifier.subtitle,
                }}
              ></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-600 shrink-0 mt-1" size={20} />
                  <span
                    className="text-slate-700"
                    dangerouslySetInnerHTML={{
                      __html: dict.home_sections.verifier.features.integrity,
                    }}
                  ></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-600 shrink-0 mt-1" size={20} />
                  <span
                    className="text-slate-700"
                    dangerouslySetInnerHTML={{
                      __html: dict.home_sections.verifier.features.independent,
                    }}
                  ></span>
                </li>
              </ul>
              <Link
                href={getLink('/products/geotapp-verifier')}
                className="text-emerald-600 font-bold hover:underline flex items-center gap-2"
              >
                {dict.home_sections.verifier.link} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REPORT SECTION */}
      <section className="py-24 border-t border-slate-100 bg-slate-50 relative overflow-hidden">
        {/* Background: floating shield icons */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          {[
            { x: '6%', y: '12%', s: 45, r: -12, o: 0.06, d: 6 },
            { x: '88%', y: '8%', s: 60, r: 8, o: 0.05, d: 8 },
            { x: '93%', y: '60%', s: 38, r: -20, o: 0.06, d: 7 },
            { x: '3%', y: '70%', s: 55, r: 15, o: 0.05, d: 9 },
            { x: '78%', y: '82%', s: 35, r: -5, o: 0.07, d: 5 },
            { x: '18%', y: '88%', s: 50, r: 10, o: 0.05, d: 7.5 },
            { x: '50%', y: '5%', s: 30, r: -8, o: 0.04, d: 6.5 },
            { x: '65%', y: '45%', s: 42, r: 18, o: 0.04, d: 8.5 },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: p.x, top: p.y }}
              initial={{ opacity: 0, scale: 0.5, y: 0 }}
              whileInView={{ opacity: p.o, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, -12, 0, 8, 0] }}
                transition={{ duration: p.d, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ShieldCheck size={p.s} className="text-emerald-500" style={{ transform: `rotate(${p.r}deg)` }} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {dict.landing.report_section_title}
            </h2>
            <p className="text-xl text-text-secondary font-light mb-4">
              {dict.landing.report_section_subtitle}
            </p>
            <p className="text-slate-600 leading-relaxed">
              {dict.landing.report_section_body}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 mb-14 max-w-4xl mx-auto">
            {[
              dict.landing.report_feature_1,
              dict.landing.report_feature_2,
              dict.landing.report_feature_3,
              dict.landing.report_feature_4,
            ].map((feat, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                <span className="text-slate-700 text-sm">{feat}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Link
              href={getLink('/products/geotapp-verifier')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200"
            >
              {dict.landing.report_cta} <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <DemoReportBanner />
          </motion.div>
        </div>
      </section>

      {/* PRODUCT SECTION: FLOW */}
      <section className="py-24 border-t border-slate-100 bg-white relative">
        <HeartbeatLine />
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-[3fr_2fr] gap-16 items-center">
            <div className="order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <FlowCarousel />
              </motion.div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-flow/10 rounded-lg text-flow">
                  <Database size={24} />
                </div>
                <h2 className="text-flow font-bold uppercase tracking-widest text-sm">
                  {dict.home_sections.flow.badge}
                </h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {dict.home_sections.flow.title}
              </h3>
              <p
                className="text-lg text-text-secondary leading-relaxed mb-8"
                dangerouslySetInnerHTML={{
                  __html: dict.home_sections.flow.subtitle,
                }}
              ></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-flow shrink-0 mt-1" size={20} />
                  <span
                    className="text-slate-700"
                    dangerouslySetInnerHTML={{
                      __html: dict.home_sections.flow.features.crm,
                    }}
                  ></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-flow shrink-0 mt-1" size={20} />
                  <span
                    className="text-slate-700"
                    dangerouslySetInnerHTML={{
                      __html: dict.home_sections.flow.features.pipeline,
                    }}
                  ></span>
                </li>
              </ul>
              <Link
                href={getLink('/products/geotapp-flow')}
                className="text-flow font-bold hover:underline flex items-center gap-2"
              >
                {dict.home_sections.flow.link} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION: APP */}
      <section className="py-24 border-t border-slate-100 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-app/10 rounded-lg text-app">
                  <Smartphone size={24} />
                </div>
                <h2 className="text-app font-bold uppercase tracking-widest text-sm">
                  {dict.home_sections.app.badge}
                </h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {dict.home_sections.app.title}
              </h3>
              <p
                className="text-lg text-text-secondary leading-relaxed mb-8"
                dangerouslySetInnerHTML={{
                  __html: dict.home_sections.app.subtitle,
                }}
              ></p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                  <Map className="text-app mb-2" />
                  <div className="font-bold text-slate-900">
                    {dict.home_sections.app.card_gps.title}
                  </div>
                  <div className="text-xs text-slate-500">
                    {dict.home_sections.app.card_gps.desc}
                  </div>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                  <ShieldCheck className="text-app mb-2" />
                  <div className="font-bold text-slate-900">
                    {dict.home_sections.app.card_gdpr.title}
                  </div>
                  <div className="text-xs text-slate-500">
                    {dict.home_sections.app.card_gdpr.desc}
                  </div>
                </div>
              </div>
              <Link
                href={getLink('/products/geotapp-timetracker')}
                className="text-app font-bold hover:underline flex items-center gap-2"
              >
                {dict.home_sections.app.link} <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative pb-8">
              <TTCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM OVERVIEW */}
      <section id="platform" className="py-24 border-t border-slate-100 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              {dict.home_sections.core.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-4 mb-6">
              {dict.home_sections.core.title}
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed font-light">
              {dict.home_sections.core.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex items-start gap-5">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shrink-0">
                <Smartphone size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {dict.home_sections.core.features[0].title}
                </h3>
                <p
                  className="text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: dict.home_sections.core.features[0].desc,
                  }}
                ></p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex items-start gap-5">
              <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 shrink-0">
                <ShieldCheck size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {dict.home_sections.core.features[1].title}
                </h3>
                <p
                  className="text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: dict.home_sections.core.features[1].desc,
                  }}
                ></p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex items-start gap-5">
              <div className="p-3 bg-amber-50 rounded-xl text-amber-600 shrink-0">
                <Zap size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {dict.home_sections.core.features[2].title}
                </h3>
                <p
                  className="text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: dict.home_sections.core.features[2].desc,
                  }}
                ></p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex items-start gap-5">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
                <FileCheck2 size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {dict.home_sections.core.features[3].title}
                </h3>
                <p
                  className="text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: dict.home_sections.core.features[3].desc,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-32 bg-slate-900 text-white text-center px-6">
        <div className="container mx-auto max-w-4xl">
          <h2
            className="text-4xl md:text-5xl font-bold mb-8"
            dangerouslySetInnerHTML={{
              __html: dict.home_sections.footer_cta.title,
            }}
          ></h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            {dict.home_sections.footer_cta.subtitle}
          </p>
          <Link
            href={getLink('/contact')}
            className="inline-block px-10 py-5 bg-primary text-slate-900 font-bold rounded-xl text-xl hover:bg-white transition-all shadow-glow hover:scale-105"
          >
            {dict.home_sections.footer_cta.button}
          </Link>
          <div className="mt-6">
            <Link
              href={getLink('/pricing')}
              className="text-slate-400 hover:text-slate-200 text-sm underline underline-offset-4 transition-colors"
            >
              {dict.home_sections.footer_cta.pricing_link}
            </Link>
          </div>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div
        id="sticky-mobile-cta"
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-sm border-t border-slate-200 px-4 py-3 shadow-2xl"
      >
        <Link
          href={getLink('/trial')}
          className="block w-full text-center py-3 bg-primary text-white font-bold rounded-xl text-base"
        >
          {dict.landing.hero_cta_primary}
        </Link>
      </div>
    </div>
  );
}

// Landing page note: keep locale-aware links and section order deterministic (1/2)

// Landing page note: keep locale-aware links and section order deterministic (2/2)
