export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

import type { Metadata } from 'next';
import type { AppLocale } from '@/lib/i18n/config';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import SettoriPage from '../../settori/page';

const SETTORI_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Settori — Documentazione verificabile per ogni settore | GeoTapp', description: 'GeoTapp trasforma ogni intervento in prova verificabile: installatori, imprese di pulizia, sicurezza. Report sigillati con GPS e foto — verificabili da chiunque.' },
  en: { title: 'Sectors — Verifiable proof of work for every sector | GeoTapp', description: 'GeoTapp turns every field job into verifiable proof: installers, cleaning companies, security. Tamper-proof reports with GPS and photos — verifiable by anyone.' },
  de: { title: 'Branchen — Verifizierbare Arbeitsnachweise für jede Branche | GeoTapp', description: 'GeoTapp macht jeden Außendiensteinsatz zum verifizierbaren Nachweis: Installateure, Reinigung, Sicherheit. Manipulationssichere Berichte mit GPS und Fotos — von jedem prüfbar.' },
  fr: { title: 'Secteurs — Preuves vérifiables du travail pour chaque secteur | GeoTapp', description: 'GeoTapp transforme chaque intervention en preuve vérifiable : installateurs, nettoyage, sécurité. Rapports scellés avec GPS et photos — vérifiables par n\'importe qui.' },
  es: { title: 'Sectores — Pruebas verificables del trabajo para cada sector | GeoTapp', description: 'GeoTapp convierte cada intervención en prueba verificable: instaladores, limpieza, seguridad. Informes sellados con GPS y fotos — verificables por cualquiera.' },
  pt: { title: 'Setores — Provas verificáveis do trabalho para cada setor | GeoTapp', description: 'GeoTapp transforma cada intervenção em prova verificável: instaladores, limpeza, segurança. Relatórios selados com GPS e fotos — verificáveis por qualquer pessoa.' },
  nl: { title: 'Sectoren — Verifieerbaar bewijs voor elke sector | GeoTapp', description: 'GeoTapp maakt elke velddienst tot verifieerbaar bewijs: installateurs, schoonmaak, beveiliging. Verzegelde rapporten met GPS en foto\'s — door iedereen te verifiëren.' },
  ru: { title: 'Отрасли — Верифицируемые доказательства работы для каждой отрасли | GeoTapp', description: 'GeoTapp превращает каждый выезд в верифицируемое доказательство: монтажники, клининг, охрана. Запечатанные отчёты с GPS и фото — проверяемые кем угодно.' },
  da: { title: 'Brancher — Verificerbare arbejdsbeviser for enhver branche | GeoTapp', description: 'GeoTapp gør hvert feltbesøg til verificerbart bevis: installatører, rengøring, sikkerhed. Forseglede rapporter med GPS og fotos — verificerbare af enhver.' },
  sv: { title: 'Branscher — Verifierbara arbetsbevis för varje sektor | GeoTapp', description: 'GeoTapp förvandlar varje fältuppdrag till verifierbart bevis: installatörer, städning, säkerhet. Förseglade rapporter med GPS och foton — verifierbara av vem som helst.' },
  nb: { title: 'Bransjer — Verifiserbare arbeidsbevis for enhver bransje | GeoTapp', description: 'GeoTapp gjør hvert feltoppdrag til verifiserbart bevis: installatører, renhold, sikkerhet. Forseglede rapporter med GPS og bilder — verifiserbare av alle.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = SETTORI_META[locale] ?? SETTORI_META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildLocaleAlternates(locale, '/settori/'),
    openGraph: {
      url: `https://geotapp.com/${locale}/settori/`,
      type: 'website',
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function LocaleSettoriPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <SettoriPage locale={locale as AppLocale} />;
}
