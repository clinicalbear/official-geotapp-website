'use client';

import { useEffect, useState } from 'react';

/**
 * Visual indicator shown when the current browser has been opted out of analytics
 * via ?gt_internal=on. Renders a fixed red badge top-right so the developer/founder
 * can see at a glance that their visits are NOT polluting GA4.
 *
 * Click the badge to re-enable analytics (removes the localStorage flag).
 */
export default function InternalTrafficBadge() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(localStorage.getItem('gt_skip_analytics') === '1');
  }, []);

  if (!active) return null;

  const disable = () => {
    localStorage.removeItem('gt_skip_analytics');
    (window as unknown as { __gtSkip?: boolean }).__gtSkip = false;
    setActive(false);
  };

  return (
    <button
      onClick={disable}
      title="Click to re-enable analytics tracking on this browser"
      style={{
        position: 'fixed',
        top: 12,
        right: 12,
        zIndex: 9999,
        background: '#dc2626',
        color: 'white',
        fontSize: 12,
        fontWeight: 700,
        padding: '6px 12px',
        borderRadius: 999,
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(220,38,38,0.4)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        letterSpacing: '0.02em',
      }}
    >
      🚫 ANALYTICS OFF
    </button>
  );
}
