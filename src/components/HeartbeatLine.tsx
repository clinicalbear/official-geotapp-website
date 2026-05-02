'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Animated ECG/heartbeat line.
 * Draws itself when it enters the viewport, then pulses continuously.
 * Color defaults to Flow purple (#8B5CF6).
 */
export default function HeartbeatLine({ color = '#8B5CF6' }: { color?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  // ECG-like waveform path: flat → small bump → flat → big spike → dip → recovery → flat (repeated)
  const beat = 'l30 0 l5 -8 l5 8 l20 0 l4 -5 l3 12 l4 -40 l4 55 l4 -22 l3 5 l25 0';
  const gap = 'l40 0';
  const fullPath = `M0 50 ${gap} ${beat} ${gap} ${beat} ${gap} ${beat} ${gap} ${beat} ${gap} ${beat} ${gap} ${beat} ${gap} ${beat} ${gap} ${beat} l40 0`;

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
          width: '100%',
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
        {/* Bright dot traveling along the path */}
        {inView && (
          <>
            <circle r="3" fill={color} opacity="0.4">
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                path={fullPath}
              />
            </circle>
            <circle r="6" fill={color} opacity="0.1">
              <animateMotion
                dur="4s"
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
