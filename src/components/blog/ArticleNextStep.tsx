import Link from 'next/link';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { localizePath } from '@/lib/i18n/locale-routing';
import type { AppLocale } from '@/lib/i18n/config';
import {
  Sparkles,
  ShieldCheck,
  Wrench,
  HardHat,
  Zap,
  Droplets,
  Flame,
  ArrowRight,
} from 'lucide-react';

interface Category {
  id: number;
  slug: string;
  name: string;
}

interface ArticleNextStepProps {
  categories: Category[];
  locale: string;
}

const SECTOR_MAP: Record<string, { path: string; icon: React.ReactNode }> = {
  pulizie: { path: '/settori/pulizie/', icon: <Sparkles size={22} className="text-primary" /> },
  pulizia: { path: '/settori/pulizie/', icon: <Sparkles size={22} className="text-primary" /> },
  cleaning: { path: '/settori/pulizie/', icon: <Sparkles size={22} className="text-primary" /> },
  reinigung: { path: '/settori/pulizie/', icon: <Sparkles size={22} className="text-primary" /> },
  sicurezza: { path: '/settori/sicurezza/', icon: <ShieldCheck size={22} className="text-blue-500" /> },
  security: { path: '/settori/sicurezza/', icon: <ShieldCheck size={22} className="text-blue-500" /> },
  sicherheit: { path: '/settori/sicurezza/', icon: <ShieldCheck size={22} className="text-blue-500" /> },
  installatori: { path: '/settori/installatori/', icon: <Wrench size={22} className="text-amber-600" /> },
  installers: { path: '/settori/installatori/', icon: <Wrench size={22} className="text-amber-600" /> },
  installateure: { path: '/settori/installatori/', icon: <Wrench size={22} className="text-amber-600" /> },
  edilizia: { path: '/settori/edilizia/', icon: <HardHat size={22} className="text-orange-500" /> },
  construction: { path: '/settori/edilizia/', icon: <HardHat size={22} className="text-orange-500" /> },
  bauwesen: { path: '/settori/edilizia/', icon: <HardHat size={22} className="text-orange-500" /> },
  elettricisti: { path: '/settori/elettricisti/', icon: <Zap size={22} className="text-yellow-500" /> },
  electricians: { path: '/settori/elettricisti/', icon: <Zap size={22} className="text-yellow-500" /> },
  elektriker: { path: '/settori/elettricisti/', icon: <Zap size={22} className="text-yellow-500" /> },
  idraulici: { path: '/settori/idraulici/', icon: <Droplets size={22} className="text-cyan-500" /> },
  plumbers: { path: '/settori/idraulici/', icon: <Droplets size={22} className="text-cyan-500" /> },
  klempner: { path: '/settori/idraulici/', icon: <Droplets size={22} className="text-cyan-500" /> },
  termoidraulici: { path: '/settori/termoidraulici/', icon: <Flame size={22} className="text-red-500" /> },
  heating: { path: '/settori/termoidraulici/', icon: <Flame size={22} className="text-red-500" /> },
};

function findSectorMatch(categories: Category[]): { path: string; icon: React.ReactNode; sectorName: string } | null {
  for (const cat of categories) {
    const slug = cat.slug.toLowerCase();
    // Direct match
    if (SECTOR_MAP[slug]) {
      return { ...SECTOR_MAP[slug], sectorName: cat.name };
    }
    // Partial match — check if any key is contained in the category slug
    for (const [key, value] of Object.entries(SECTOR_MAP)) {
      if (slug.includes(key) || key.includes(slug)) {
        return { ...value, sectorName: cat.name };
      }
    }
  }
  return null;
}

export default function ArticleNextStep({ categories, locale }: ArticleNextStepProps) {
  const dict = getDictionary(locale as AppLocale).blog;
  const match = findSectorMatch(categories);

  const href = match
    ? localizePath(match.path, locale as AppLocale)
    : localizePath('/come-funziona/', locale as AppLocale);

  const icon = match?.icon ?? <Sparkles size={22} className="text-primary" />;

  const text = match
    ? dict.next_step_text.replace('{sector}', match.sectorName)
    : dict.next_step_fallback;

  return (
    <div className="my-12 mx-auto max-w-3xl">
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-primary/40 via-blue-400/30 to-emerald-400/40">
        <div className="rounded-2xl bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-base font-bold text-slate-900 leading-snug mb-3 sm:mb-0">
              {text}
            </p>
          </div>
          <Link
            href={href}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-primary hover:text-slate-900 transition-all duration-300 shadow-lg shadow-slate-900/20"
          >
            {dict.next_step_cta}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
