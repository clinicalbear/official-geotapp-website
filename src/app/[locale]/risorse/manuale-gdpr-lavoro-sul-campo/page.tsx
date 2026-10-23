import type { Metadata } from 'next';
import { LeadAssetPage, leadAssetMetadata } from '@/components/risorse/LeadAssetPage';

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return leadAssetMetadata('manuale', params);
}

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <LeadAssetPage asset="manuale" params={params} />;
}
