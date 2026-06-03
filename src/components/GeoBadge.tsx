import React from 'react';

// Badge brand uniforme (stile homepage): pallino gradiente pulsante + testo in
// gradiente verde→blu con sottolineatura. Sostituisce le vecchie chip a pillola
// in tutto il sito (tranne il blog, che ha il suo trattamento dedicato).
export default function GeoBadge({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`geo-status ${className}`}>
      <span
        className="w-2 h-2 rounded-full animate-pulse"
        style={{ background: 'linear-gradient(135deg,#8FC436,#3BAEE0)' }}
      />
      <span className="text-geo-gradient geo-underline">{children}</span>
    </span>
  );
}
