export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

import type { Metadata } from 'next';
import type { AppLocale } from '@/lib/i18n/config';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import SettoriPage from '../../settori/page';

const SETTORI_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Settori - Documentazione verificabile | GeoTapp', description: 'Da pulizie a sicurezza: ogni intervento diventa prova verificabile con GPS e foto. Report sigillati, contestazioni azzerate.' },
  en: { title: 'Sectors - Verifiable proof of work | GeoTapp', description: 'From cleaning to security: every field job becomes verifiable proof with GPS and photos. Tamper-proof reports, zero disputes.' },
  de: { title: 'Branchen - Verifizierbare Nachweise | GeoTapp', description: 'Von Reinigung bis Sicherheit: jeder Außendiensteinsatz wird mit GPS und Fotos verifizierbar. Manipulationssichere Berichte.' },
  fr: { title: 'Secteurs - Preuves vérifiables | GeoTapp', description: 'Du nettoyage à la sécurité : chaque intervention devient preuve vérifiable avec GPS et photos. Rapports scellés, zéro litige.' },
  es: { title: 'Sectores - Pruebas verificables | GeoTapp', description: 'De limpieza a seguridad: cada intervención se vuelve prueba verificable con GPS y fotos. Informes sellados, cero disputas.' },
  pt: { title: 'Setores - Provas verificáveis | GeoTapp', description: 'De limpeza a segurança: cada intervenção vira prova verificável com GPS e fotos. Relatórios selados, zero contestações.' },
  nl: { title: 'Sectoren - Verifieerbaar bewijs | GeoTapp', description: 'Van schoonmaak tot beveiliging: elke interventie wordt verifieerbaar bewijs met GPS en foto\'s. Verzegelde rapporten.' },
  ru: { title: 'Отрасли, Верифицируемые доказательства | GeoTapp', description: 'От клининга до охраны: каждый выезд, верифицируемое доказательство с GPS и фото. Запечатанные отчёты, ноль споров.' },
  da: { title: 'Brancher - Verificerbare beviser | GeoTapp', description: 'Fra rengøring til sikkerhed: hvert feltbesøg bliver verificerbart bevis med GPS og fotos. Forseglede rapporter, nul tvister.' },
  sv: { title: 'Branscher - Verifierbara bevis | GeoTapp', description: 'Från städning till säkerhet: varje fältuppdrag blir verifierbart bevis med GPS och foton. Förseglade rapporter, noll tvister.' },
  nb: { title: 'Bransjer - Verifiserbare bevis | GeoTapp', description: 'Fra renhold til sikkerhet: hvert feltoppdrag blir verifiserbart bevis med GPS og bilder. Forseglede rapporter, null tvister.' },
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
