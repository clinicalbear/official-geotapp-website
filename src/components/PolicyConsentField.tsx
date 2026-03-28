'use client';

import { PRIVACY_URL, TERMS_URL } from '@/lib/policyAcceptance';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocaleFromPathname } from '@/lib/i18n/locale-routing';
import { usePathname } from 'next/navigation';

type PolicyConsentFieldProps = {
  termsAccepted: boolean;
  privacyRead: boolean;
  onTermsAcceptedChange: (value: boolean) => void;
  onPrivacyReadChange: (value: boolean) => void;
  compact?: boolean;
};

export default function PolicyConsentField({
  termsAccepted,
  privacyRead,
  onTermsAcceptedChange,
  onPrivacyReadChange,
  compact = false,
}: PolicyConsentFieldProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dict = getDictionary(locale).cart;
  const textClass = compact ? 'text-xs' : 'text-sm';

  return (
    <div className="space-y-3">
      <label className={`flex items-start gap-3 text-slate-700 ${textClass}`}>
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={(event) => onTermsAcceptedChange(event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
        />
        <span>
          {dict.policy_terms_prefix}{' '}
          <a
            href={TERMS_URL}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            {dict.policy_terms_link}
          </a>{' '}
          {dict.policy_terms_suffix}
        </span>
      </label>

      <label className={`flex items-start gap-3 text-slate-700 ${textClass}`}>
        <input
          type="checkbox"
          checked={privacyRead}
          onChange={(event) => onPrivacyReadChange(event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
        />
        <span>
          {dict.policy_privacy_prefix}{' '}
          <a
            href={PRIVACY_URL}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            {dict.policy_privacy_link}
          </a>{' '}
          {dict.policy_privacy_suffix}
        </span>
      </label>
    </div>
  );
}
