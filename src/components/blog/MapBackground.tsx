'use client';

/**
 * MapBackground — dense city-map pattern with streets, blocks, pins.
 * 3D perspective tilt. Fades toward center for content readability.
 */

interface MapBackgroundProps {
  products?: Array<'timetracker' | 'flow' | 'verifier'>;
}

const COLORS = {
  timetracker: '#F97316',
  flow: '#8B5CF6',
  verifier: '#22C55E',
};

function buildSvg(colors: string[]): string {
  const c = (i: number) => colors[i % colors.length];
  const parts: string[] = [];

  // ── Dense street grid — major roads ──
  const majorH = [0, 120, 260, 380, 520, 650, 780, 900];
  const majorV = [0, 150, 300, 440, 580, 720, 870, 1020, 1150, 1300];

  majorH.forEach((y, i) => {
    parts.push(`<line x1="0" y1="${y}" x2="1400" y2="${y}" stroke="${c(i)}" stroke-width="1.4" opacity="0.16"/>`);
  });
  majorV.forEach((x, i) => {
    parts.push(`<line x1="${x}" y1="0" x2="${x}" y2="950" stroke="${c(i)}" stroke-width="1.4" opacity="0.16"/>`);
  });

  // ── Secondary streets between major ones ──
  const secH = [55, 170, 320, 450, 585, 710, 840];
  const secV = [75, 220, 370, 510, 650, 795, 945, 1085, 1230];

  secH.forEach((y, i) => {
    // Some are shorter (dead ends, not full width)
    const x1 = (i % 3 === 0) ? 0 : majorV[i % majorV.length];
    const x2 = (i % 3 === 1) ? 1400 : majorV[(i + 3) % majorV.length];
    parts.push(`<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${c(i)}" stroke-width="0.6" opacity="0.10"/>`);
  });
  secV.forEach((x, i) => {
    const y1 = (i % 3 === 0) ? 0 : majorH[i % majorH.length];
    const y2 = (i % 3 === 2) ? 950 : majorH[(i + 2) % majorH.length];
    parts.push(`<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="${c(i + 1)}" stroke-width="0.6" opacity="0.10"/>`);
  });

  // ── Curved roads (boulevards, tangenziali) ──
  const curves = [
    'M0 200 Q200 160 400 220 Q600 280 800 200 Q1000 120 1200 210 L1400 250',
    'M0 680 Q300 620 500 700 Q700 780 900 680 Q1100 580 1300 700 L1400 720',
    'M200 0 Q160 200 250 400 Q340 600 200 800 L180 950',
    'M1000 0 Q1060 250 980 450 Q900 650 1020 850 L1040 950',
    'M0 450 Q150 420 300 460 Q500 510 700 440 Q900 370 1100 460 L1400 480',
  ];
  curves.forEach((d, i) => {
    parts.push(`<path d="${d}" fill="none" stroke="${c(i)}" stroke-width="1.0" opacity="0.14" stroke-linecap="round"/>`);
  });

  // ── Building blocks (fill spaces between streets) ──
  for (let gi = 0; gi < majorH.length - 1; gi++) {
    for (let gj = 0; gj < majorV.length - 1; gj++) {
      const y = majorH[gi];
      const x = majorV[gj];
      const cellW = majorV[gj + 1] - x;
      const cellH = majorH[gi + 1] - y;

      // Skip some cells for variety (parks, open areas)
      if ((gi + gj) % 5 === 0) continue;

      // 2-4 buildings per block
      const numBuildings = 2 + ((gi * 7 + gj * 3) % 3);
      for (let b = 0; b < numBuildings; b++) {
        const bx = x + 8 + ((b * 31 + gi * 13) % (cellW - 30));
        const by = y + 8 + ((b * 23 + gj * 17) % (cellH - 25));
        const bw = 12 + ((gi + gj + b) % 3) * 8;
        const bh = 10 + ((gi * 2 + b) % 3) * 6;
        parts.push(
          `<rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="1.5" fill="${c(gi + gj + b)}" opacity="0.05"/>`
        );
      }
    }
  }

  // ── Roundabouts at key intersections ──
  const roundabouts = [
    { x: 300, y: 260 }, { x: 580, y: 120 }, { x: 720, y: 380 },
    { x: 440, y: 520 }, { x: 150, y: 650 }, { x: 870, y: 260 },
    { x: 1020, y: 520 }, { x: 300, y: 780 }, { x: 720, y: 650 },
    { x: 1150, y: 380 }, { x: 580, y: 780 }, { x: 1020, y: 780 },
  ];
  roundabouts.forEach((r, i) => {
    parts.push(`<circle cx="${r.x}" cy="${r.y}" r="8" fill="none" stroke="${c(i)}" stroke-width="0.8" opacity="0.14"/>`);
    parts.push(`<circle cx="${r.x}" cy="${r.y}" r="3" fill="${c(i)}" opacity="0.08"/>`);
  });

  // ── GPS Pins (teardrop markers) ──
  const pins = [
    { x: 300, y: 240 }, { x: 580, y: 100 }, { x: 720, y: 360 },
    { x: 440, y: 500 }, { x: 150, y: 630 }, { x: 870, y: 240 },
    { x: 1020, y: 500 }, { x: 300, y: 760 }, { x: 720, y: 630 },
    { x: 1150, y: 360 }, { x: 200, y: 120 }, { x: 500, y: 380 },
    { x: 940, y: 650 }, { x: 1100, y: 120 }, { x: 650, y: 520 },
  ];
  pins.forEach((p, i) => {
    const color = c(i);
    parts.push(
      `<g transform="translate(${p.x},${p.y})" opacity="0.22">` +
        `<path d="M0-10 C-5-10 -8-6 -8-3 C-8 2 0 8 0 8 C0 8 8 2 8-3 C8-6 5-10 0-10Z" fill="${color}"/>` +
        `<circle cx="0" cy="-3" r="2.5" fill="white" opacity="0.9"/>` +
      `</g>`
    );
  });

  // ── Small park/green areas (irregular shapes) ──
  const parks = [
    { x: 460, y: 140, w: 50, h: 35 },
    { x: 760, y: 540, w: 40, h: 45 },
    { x: 170, y: 400, w: 55, h: 30 },
    { x: 1060, y: 680, w: 45, h: 40 },
  ];
  parks.forEach((p, i) => {
    parts.push(
      `<rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" rx="6" fill="${c(i + 1)}" opacity="0.04"/>`
    );
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 950" preserveAspectRatio="xMidYMid slice">${parts.join('')}</svg>`;
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
        inset: '-15% -8%',
        width: '116%',
        height: '130%',
        zIndex: 0,
        pointerEvents: 'none',
        backgroundImage: encoded,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transform: 'perspective(1200px) rotateX(10deg) rotateZ(-2deg)',
        transformOrigin: 'center center',
        maskImage:
          'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 15%, transparent 30%, transparent 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0.9) 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 15%, transparent 30%, transparent 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0.9) 100%)',
      }}
    />
  );
}
