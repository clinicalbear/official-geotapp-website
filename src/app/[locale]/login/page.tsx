

import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../../login/page';
