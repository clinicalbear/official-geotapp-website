

import type { Metadata } from 'next';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';

const GUIDA_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Guida utente GeoTapp - Come iniziare | GeoTapp', description: 'Come iniziare con GeoTapp: attivare l\'azienda, invitare i dipendenti, timbrare, raccogliere le prove di lavoro e mandare al cliente un report che verifica da solo.' },
  en: { title: 'GeoTapp User Guide - Getting Started | GeoTapp', description: 'How to get started with GeoTapp: activate your company, invite employees, clock in, collect proof of work and send clients a report they can verify on their own.' },
  de: { title: 'GeoTapp Benutzerhandbuch - Erste Schritte | GeoTapp', description: 'So starten Sie mit GeoTapp: das Unternehmen aktivieren, Mitarbeitende einladen, stempeln, Arbeitsnachweise sammeln und dem Kunden einen Bericht schicken, den er selbst prüft.' },
  fr: { title: 'Guide utilisateur GeoTapp - Démarrage | GeoTapp', description: 'Pour démarrer avec GeoTapp : activer l’entreprise, inviter les salariés, pointer, recueillir les preuves de travail et envoyer au client un rapport qu’il vérifie lui-même.' },
  es: { title: 'Guía de usuario GeoTapp - Primeros pasos | GeoTapp', description: 'Cómo empezar con GeoTapp: activar la empresa, invitar a los empleados, fichar, recoger las pruebas de trabajo y enviar al cliente un informe que verifica por sí mismo.' },
  pt: { title: 'Guia do utilizador GeoTapp - Primeiros passos | GeoTapp', description: 'Como começar com o GeoTapp: ativar a empresa, convidar os colaboradores, picar o ponto, recolher provas e enviar ao cliente um relatório que ele verifica.' },
  nl: { title: 'GeoTapp-gebruikershandleiding - Aan de slag | GeoTapp', description: 'Zo begint u met GeoTapp: het bedrijf activeren, medewerkers uitnodigen, registreren, bewijs van het werk verzamelen en de klant een rapport sturen dat hij zelf controleert.' },
  da: { title: 'GeoTapp-brugervejledning - Kom i gang | GeoTapp', description: 'Sådan kommer du i gang med GeoTapp: aktivér virksomheden, inviter medarbejdere, stempl, indsaml arbejdsbeviser og send kunden en rapport, som vedkommende selv kan verificere.' },
  sv: { title: 'GeoTapps användarhandbok - Kom igång | GeoTapp', description: 'Så kommer du igång med GeoTapp: aktivera företaget, bjud in medarbetare, stämpla, samla in arbetsbevis och skicka kunden en rapport som kunden själv kan kontrollera.' },
  nb: { title: 'GeoTapp-veiledning - Kom i gang | GeoTapp', description: 'Slik kommer du i gang med GeoTapp: aktiver bedriften, inviter ansatte, stemple, samle arbeidsbevis og send kunden en rapport som vedkommende selv kan verifisere.' },
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
