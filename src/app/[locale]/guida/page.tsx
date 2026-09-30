

import type { Metadata } from 'next';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';

const GUIDA_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Guida utente GeoTapp - Come iniziare | GeoTapp', description: 'Come iniziare con GeoTapp: attivare l\'azienda, invitare i dipendenti, timbrare, raccogliere le prove di lavoro e mandare al cliente un report che verifica da solo.' },
  en: { title: 'GeoTapp User Guide - Getting Started | GeoTapp', description: 'How to get started with GeoTapp: activate your company, invite employees, clock in, collect proof of work and send clients a report they can verify on their own.' },
  de: { title: 'GeoTapp Benutzerhandbuch - Erste Schritte | GeoTapp', description: 'So starten Sie mit GeoTapp: das Unternehmen aktivieren, Mitarbeitende einladen, stempeln, Arbeitsnachweise sammeln und dem Kunden einen Bericht schicken, den er selbst prüft.' },
  fr: { title: 'Guide utilisateur GeoTapp - Démarrage | GeoTapp', description: 'Guide complet GeoTapp : configurer votre équipe, démarrer le pointage GPS, générer des rapports vérifiables et utiliser le Verifier.' },
  es: { title: 'Guía de usuario GeoTapp - Primeros pasos | GeoTapp', description: 'Guía completa de GeoTapp: cómo configurar tu equipo, iniciar el fichaje GPS, generar informes verificables y usar el Verifier.' },
  pt: { title: 'Guia do utilizador GeoTapp - Primeiros passos | GeoTapp', description: 'Guia completo do GeoTapp: como configurar a sua equipa, iniciar a marcação de ponto GPS, gerar relatórios verificáveis e usar o Verifier.' },
  nl: { title: 'GeoTapp-gebruikershandleiding - Aan de slag | GeoTapp', description: 'Zo begint u met GeoTapp: het bedrijf activeren, medewerkers uitnodigen, registreren, bewijs van het werk verzamelen en de klant een rapport sturen dat hij zelf controleert.' },
  da: { title: 'GeoTapp Brugervejledning - Kom i gang | GeoTapp', description: 'Komplet GeoTapp-guide: opsæt dit team, start GPS-tidsregistrering, generer verificerbare rapporter og brug Verifier.' },
  sv: { title: 'GeoTapp Användarhandbok - Kom igång | GeoTapp', description: 'Komplett GeoTapp-guide: konfigurera ditt team, starta GPS-tidregistrering, generera verifierbara rapporter och använd Verifier.' },
  nb: { title: 'GeoTapp Brukerhåndbok - Kom i gang | GeoTapp', description: 'Komplett GeoTapp-guide: konfigurer teamet ditt, start GPS-tidsregistrering, generer verifiserbare rapporter og bruk Verifier.' },
  ru: { title: 'Руководство пользователя GeoTapp, Начало работы | GeoTapp', description: 'Полное руководство по GeoTapp: настройка команды, запуск GPS-учёта времени, создание верифицируемых отчётов и использование Verifier.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = GUIDA_META[locale] ?? GUIDA_META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildLocaleAlternates(locale, '/guida/'),
    openGraph: {
      url: buildCanonicalUrl(locale, '/guida/'),
      type: 'website',
      title: meta.title,
      description: meta.description,
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: meta.title }],
    },
  };
}
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../../guida/page';
