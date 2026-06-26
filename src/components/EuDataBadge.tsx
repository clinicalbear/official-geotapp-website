'use client';

import { ShieldCheck } from 'lucide-react';

/**
 * Sigillo UE tondo "Dati in Europa" — emblema di residenza dati.
 * Cerchio blu UE + anello di 12 stelle oro + scudo e testo localizzato al centro.
 * Claim accurato: dati di lavoro (timbrature, foto, anagrafiche) ospitati in UE.
 */
export default function EuDataBadge({
  label,
  size = 128,
  className = '',
}: {
  label: string;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label={label}
    >
      {/* corpo del sigillo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0b3bb0] to-[#002a7a] shadow-[0_10px_28px_rgba(0,43,128,0.38)]" />
      {/* anello oro interno */}
      <div className="absolute inset-[3px] rounded-full border-2 border-[#FFCC00]/55" />
      {/* 12 stelle oro in cerchio (come bandiera UE) */}
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="absolute left-1/2 top-1/2 text-[#FFCC00] leading-none"
          style={{
            fontSize: size * 0.085,
            transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(${-size * 0.39}px) rotate(${-i * 30}deg)`,
          }}
        >
          ★
        </span>
      ))}
      {/* centro: scudo + testo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{ padding: size * 0.2 }}>
        <ShieldCheck size={size * 0.16} className="text-white mb-1" strokeWidth={2.2} />
        <span
          className="text-white font-extrabold uppercase leading-tight"
          style={{ fontSize: size * 0.092, letterSpacing: '0.02em' }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
