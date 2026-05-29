'use client';

import Link, { type LinkProps } from 'next/link';
import { type ComponentProps, type ReactNode } from 'react';
import { trackEvent } from '@/lib/analytics';

type TrialCTALinkProps = LinkProps & {
  source: string;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<'a'>, keyof LinkProps>;

export function TrialCTALink({ source, onClick, children, ...rest }: TrialCTALinkProps) {
  return (
    <Link
      {...rest}
      onClick={(e) => {
        trackEvent('trial_click', { cta_source: source });
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}
