'use client';

/**
 * MapBackground — decorative topographic map lines that fade toward the center.
 *
 * Colors adapt to article context:
 *   - TimeTracker (GPS/presenze)   → orange #F97316
 *   - Flow (gestione/operazioni)   → purple #8B5CF6
 *   - Verifier (report/prove)      → green  #22C55E
 *   - Mixed / listing              → all three
 */

interface MapBackgroundProps {
  /** Which product colors to show. Defaults to all three. */
  products?: Array<'timetracker' | 'flow' | 'verifier'>;
}

const COLORS = {
  timetracker: '#F97316',
  flow: '#8B5CF6',
  verifier: '#22C55E',
};

function buildSvg(colors: string[]): string {
  const lines: string[] = [];

  // Topographic contour circles (like elevation lines on a map)
  const contours = [
    { cx: 120, cy: 200, r: 80 },
    { cx: 120, cy: 200, r: 120 },
    { cx: 120, cy: 200, r: 160 },
    { cx: 120, cy: 200, r: 200 },
    { cx: 900, cy: 600, r: 90 },
    { cx: 900, cy: 600, r: 140 },
    { cx: 900, cy: 600, r: 190 },
    { cx: 900, cy: 600, r: 240 },
    { cx: 500, cy: 100, r: 60 },
    { cx: 500, cy: 100, r: 100 },
    { cx: 500, cy: 100, r: 140 },
  ];

  contours.forEach((c, i) => {
    const color = colors[i % colors.length];
    lines.push(
      `<circle cx="${c.cx}" cy="${c.cy}" r="${c.r}" fill="none" stroke="${color}" stroke-width="0.6" opacity="0.4"/>`
    );
  });

  // Road-like paths (smooth curves crossing the viewport)
  const paths = [
    'M0 150 Q200 120 400 180 Q600 240 800 160 Q1000 80 1200 200',
    'M0 450 Q150 400 350 480 Q550 560 750 420 Q950 280 1200 500',
    'M0 700 Q300 650 500 720 Q700 790 1000 680 Q1100 640 1200 700',
    'M100 0 Q120 200 200 400 Q280 600 150 800',
    'M800 0 Q750 150 820 350 Q890 550 780 800',
    'M1100 0 Q1050 250 1120 450 Q1080 650 1150 800',
  ];

  paths.forEach((d, i) => {
    const color = colors[i % colors.length];
    lines.push(
      `<path d="${d}" fill="none" stroke="${color}" stroke-width="0.5" opacity="0.35"/>`
    );
  });

  // GPS-like dots at intersections
  const dots = [
    { x: 400, y: 180 },
    { x: 750, y: 420 },
    { x: 200, y: 400 },
    { x: 820, y: 350 },
    { x: 500, y: 720 },
    { x: 120, y: 200 },
    { x: 900, y: 600 },
  ];

  dots.forEach((d, i) => {
    const color = colors[i % colors.length];
    lines.push(
      `<circle cx="${d.x}" cy="${d.y}" r="2" fill="${color}" opacity="0.3"/>`
    );
  });

  // Grid lines (like map coordinates)
  for (let x = 0; x <= 1200; x += 200) {
    const color = colors[0];
    lines.push(
      `<line x1="${x}" y1="0" x2="${x}" y2="800" stroke="${color}" stroke-width="0.3" opacity="0.15"/>`
    );
  }
  for (let y = 0; y <= 800; y += 200) {
    const color = colors[Math.min(1, colors.length - 1)];
    lines.push(
      `<line x1="0" y1="${y}" x2="1200" y2="${y}" stroke="${color}" stroke-width="0.3" opacity="0.15"/>`
    );
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" preserveAspectRatio="none">${lines.join('')}</svg>`;
}

export default function MapBackground({ products }: MapBackgroundProps) {
  const activeProducts = products && products.length > 0
    ? products
    : (['timetracker', 'flow', 'verifier'] as const);

  const colors = activeProducts.map((p) => COLORS[p]);
  const svg = buildSvg(colors);
  const encoded = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        backgroundImage: encoded,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        // Fade toward center: visible on edges, transparent in the middle
        maskImage:
          'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 15%, transparent 30%, transparent 70%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0.8) 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 15%, transparent 30%, transparent 70%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0.8) 100%)',
      }}
    />
  );
}
