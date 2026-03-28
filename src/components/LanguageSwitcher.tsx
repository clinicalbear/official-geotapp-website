'use client';

import { usePathname, useRouter } from 'next/navigation';
import { clsx } from 'clsx';
import {
  LOCALE_COOKIE_NAME,
  LOCALE_LABELS,
  SUPPORTED_LOCALES,
  type AppLocale,
} from '@/lib/i18n/config';
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  localizePath,
} from '@/lib/i18n/locale-routing';

type LanguageSwitcherProps = {
  className?: string;
};

export default function LanguageSwitcher({
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;

  return (
    <label
      className={clsx(
        'inline-flex items-center gap-2 text-sm font-medium text-text-secondary',
        className,
      )}
    >
      <span className="sr-only">Language</span>
      <select
        value={currentLocale}
        onChange={(event) => {
          const nextLocale = event.target.value as AppLocale;
          document.cookie = `${LOCALE_COOKIE_NAME}=${nextLocale}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax`;
          router.push(localizePath(pathname || '/', nextLocale));
        }}
        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition-colors hover:border-slate-300 focus:border-slate-400"
      >
        {SUPPORTED_LOCALES.map((locale) => (
          <option key={locale} value={locale}>
            {LOCALE_LABELS[locale]}
          </option>
        ))}
      </select>
    </label>
  );
}
