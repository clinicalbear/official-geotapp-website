'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HeartbeatLine({ color = '#8B5CF6' }: { color?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  // ECG beat pattern
  const beat = 'l30 0 l5 -12 l5 12 l20 0 l4 -8 l3 18 l4 -65 l4 85 l4 -35 l3 7 l25 0';
  const gap = 'l40 0';
  const fullPath = `M0 50 ${gap} ${beat} ${gap} ${beat} ${gap} ${beat} ${gap} ${beat} ${gap} ${beat} ${gap} ${beat} ${gap} ${beat} ${gap} ${beat} ${gap} ${beat} L1400 50`;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <svg
        viewBox="0 0 1400 100"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100vw',
          height: '120px',
          transform: 'translateY(-50%)',
        }}
      >
        {/* Glow behind the line */}
        <motion.path
          d={fullPath}
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.06"
          style={{ filter: 'blur(8px)' }}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />
        {/* Main line */}
        <motion.path
          d={fullPath}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.15"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />
        {/* Bright dot traveling along the path — slow */}
        {inView && (
          <>
            <circle r="3" fill={color} opacity="0.4">
              <animateMotion
                dur="16s"
                repeatCount="indefinite"
                path={fullPath}
              />
            </circle>
            <circle r="6" fill={color} opacity="0.1">
              <animateMotion
                dur="16s"
                repeatCount="indefinite"
                path={fullPath}
              />
            </circle>
          </>
        )}
      </svg>
    </div>
  );
}
