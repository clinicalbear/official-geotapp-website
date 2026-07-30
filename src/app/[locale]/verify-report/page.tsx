import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

const META: Record<string, { title: string; description: string }> = {
  it: {
    title: 'Verifica un report GeoTapp | GeoTapp',
    description:
      'Carica il pacchetto firmato e verifica la firma elettronica, la catena degli eventi e le impronte delle foto. La verifica gira sul verificatore aperto: nessun file resta sui nostri server.',
  },
  en: {
    title: 'Verify a GeoTapp report | GeoTapp',
    description:
      'Upload the signed package to check the electronic signature, the event chain and the photo fingerprints. Verification runs on the open verifier: no file is kept on our servers.',
  },
  de: {
    title: 'Einen GeoTapp-Bericht prüfen | GeoTapp',
    description:
      'Laden Sie das signierte Paket hoch und prüfen Sie die elektronische Signatur, die Ereigniskette und die Foto-Fingerabdrücke. Die Prüfung läuft mit dem offenen Prüfwerkzeug: keine Datei bleibt auf unseren Servern.',
  },
  fr: {
    title: 'Vérifier un rapport GeoTapp | GeoTapp',
    description:
      "Chargez le paquet signé et vérifiez la signature électronique, la chaîne des événements et les empreintes des photos. La vérification tourne sur le vérificateur ouvert : aucun fichier ne reste sur nos serveurs.",
  },
  es: {
    title: 'Verifica un informe de GeoTapp | GeoTapp',
    description:
      'Sube el paquete firmado y verifica la firma electrónica, la cadena de eventos y las huellas de las fotos. La verificación funciona con el verificador abierto: ningún archivo se queda en nuestros servidores.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = META[locale] ?? META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildLocaleAlternates(locale, '/verify-report/'),
    openGraph: {
      url: `https://geotapp.com/${locale}/verify-report/`,
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

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../../verify-report/page';
