import Link from 'next/link';
import type { AppLocale } from '@/lib/i18n/config';

type SettoreSlug = 'pulizie' | 'installatori' | 'sicurezza';

const SECTION_TITLE: Record<string, string> = {
  it: 'Ideale per', en: 'Ideal for', de: 'Ideal für', fr: 'Idéal pour',
  es: 'Ideal para', pt: 'Ideal para', nl: 'Ideaal voor', da: 'Ideel til',
  sv: 'Idealisk för', nb: 'Ideell for', ru: 'Идеально для',
};

const SETTORE_NAMES: Record<SettoreSlug, Record<string, string>> = {
  pulizie: {
    it: 'Imprese di pulizie', en: 'Cleaning companies', de: 'Reinigungsunternehmen',
    fr: 'Entreprises de nettoyage', es: 'Empresas de limpieza', pt: 'Empresas de limpeza',
    nl: 'Schoonmaakbedrijven', da: 'Rengøringsvirksomheder', sv: 'Städföretag',
    nb: 'Rengjøringsbedrifter', ru: 'Клининговые компании',
  },
  installatori: {
    it: 'Installatori e tecnici', en: 'Installers & field service', de: 'Installateure & Außendienst',
    fr: 'Installateurs & terrain', es: 'Instaladores y técnicos de campo', pt: 'Instaladores e técnicos',
    nl: 'Installateurs & buitendienst', da: 'Installatører & serviceteknikere', sv: 'Installatörer & fältservice',
    nb: 'Installatører & felttjeneste', ru: 'Монтажники и выездные техники',
  },
  sicurezza: {
    it: 'Servizi di sicurezza', en: 'Security services', de: 'Sicherheitsdienste',
    fr: 'Services de sécurité', es: 'Servicios de seguridad', pt: 'Serviços de segurança',
    nl: 'Beveiligingsdiensten', da: 'Sikkerhedstjenester', sv: 'Säkerhetstjänster',
    nb: 'Sikkerhetstjenester', ru: 'Службы безопасности',
  },
};

interface Props {
  locale: AppLocale;
  settori: SettoreSlug[];
}

export default function SettoriLinks({ locale, settori }: Props) {
  const title = SECTION_TITLE[locale] ?? SECTION_TITLE['en'];
  return (
    <div className="bg-slate-50 border-t border-slate-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4">{title}</p>
        <div className="flex flex-wrap gap-3">
          {settori.map((slug) => (
            <Link
              key={slug}
              href={`/${locale}/settori/${slug}/`}
              className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
            >
              {SETTORE_NAMES[slug][locale] ?? SETTORE_NAMES[slug]['en']}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
