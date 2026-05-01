'use client';

/**
 * MapBackground — decorative map-like pattern with roads, intersections and GPS pins.
 * Tilted in 3D perspective. Colors adapt to article product context.
 * Fades toward center so it doesn't distract from content.
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
  const lines: string[] = [];

  // ── Main roads (thick, smooth curves + straight segments) ──
  const roads = [
    // Horizontal roads
    'M-50 180 L300 180 Q350 180 380 210 L380 350 Q380 380 410 380 L800 380',
    'M-50 500 L200 500 L200 320 Q200 280 240 280 L600 280 Q640 280 640 320 L640 600 L900 600',
    'M100 -20 L100 150 Q100 180 130 180 L500 180 Q530 180 530 210 L530 500 Q530 530 560 530 L1300 530',
    // Vertical roads
    'M350 -20 L350 180 Q350 220 390 220 L700 220',
    'M750 -20 L750 200 Q750 240 710 240 L500 240 Q460 240 460 280 L460 700',
    'M1050 -20 L1050 300 Q1050 340 1010 340 L800 340 Q760 340 760 380 L760 800',
    // Diagonal roads
    'M-20 650 Q200 600 400 550 Q600 500 750 380',
    'M900 -20 Q850 200 800 350 Q750 500 850 700',
  ];

  roads.forEach((d, i) => {
    lines.push(
      `<path d="${d}" fill="none" stroke="${c(i)}" stroke-width="1.2" opacity="0.18" stroke-linecap="round"/>`
    );
  });

  // ── Secondary roads (thinner, more organic) ──
  const secondaryRoads = [
    'M200 -20 Q220 100 180 200 Q140 300 200 400 Q260 500 220 600',
    'M600 -20 L600 100 Q600 130 630 130 L900 130',
    'M-20 350 L150 350 Q180 350 180 380 L180 550',
    'M400 400 Q450 420 500 400 Q550 380 600 420 Q650 460 700 430 L850 430',
    'M-20 100 L120 100 Q150 100 150 130 L150 250',
    'M850 200 L1000 200 Q1030 200 1030 230 L1030 400 L1200 400',
    'M300 600 Q400 580 500 620 Q600 660 700 620 L900 620',
    'M1100 100 L1100 500 Q1100 540 1060 540 L900 540',
  ];

  secondaryRoads.forEach((d, i) => {
    lines.push(
      `<path d="${d}" fill="none" stroke="${c(i + 2)}" stroke-width="0.7" opacity="0.12" stroke-linecap="round"/>`
    );
  });

  // ── Roundabouts / intersections (circles) ──
  const roundabouts = [
    { x: 380, y: 180, r: 12 },
    { x: 530, y: 500, r: 10 },
    { x: 750, y: 240, r: 8 },
    { x: 200, y: 500, r: 10 },
    { x: 640, y: 280, r: 9 },
    { x: 1050, y: 340, r: 11 },
  ];

  roundabouts.forEach((rb, i) => {
    lines.push(
      `<circle cx="${rb.x}" cy="${rb.y}" r="${rb.r}" fill="none" stroke="${c(i)}" stroke-width="0.8" opacity="0.15"/>`
    );
  });

  // ── GPS Pins ──
  const pins = [
    { x: 380, y: 160 },
    { x: 640, y: 260 },
    { x: 200, y: 480 },
    { x: 530, y: 480 },
    { x: 750, y: 220 },
    { x: 1050, y: 320 },
    { x: 100, y: 170 },
    { x: 850, y: 410 },
    { x: 460, y: 350 },
  ];

  pins.forEach((p, i) => {
    const color = c(i);
    // Pin shape: teardrop/marker
    lines.push(
      `<g transform="translate(${p.x},${p.y})" opacity="0.25">` +
        `<path d="M0-12 C-6-12 -10-7 -10-4 C-10 2 0 10 0 10 C0 10 10 2 10-4 C10-7 6-12 0-12Z" fill="${color}"/>` +
        `<circle cx="0" cy="-4" r="3" fill="white" opacity="0.8"/>` +
      `</g>`
    );
  });

  // ── Small buildings/blocks (rectangles near roads) ──
  const blocks = [
    { x: 130, y: 190, w: 25, h: 18 },
    { x: 420, y: 190, w: 30, h: 20 },
    { x: 540, y: 290, w: 22, h: 28 },
    { x: 660, y: 290, w: 18, h: 22 },
    { x: 770, y: 390, w: 24, h: 16 },
    { x: 210, y: 510, w: 20, h: 25 },
    { x: 360, y: 540, w: 28, h: 18 },
    { x: 550, y: 540, w: 22, h: 20 },
    { x: 880, y: 610, w: 26, h: 22 },
    { x: 110, y: 110, w: 18, h: 24 },
    { x: 620, y: 140, w: 20, h: 16 },
    { x: 1060, y: 350, w: 22, h: 18 },
  ];

  blocks.forEach((b, i) => {
    lines.push(
      `<rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="2" fill="${c(i)}" opacity="0.06"/>`
    );
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">${lines.join('')}</svg>`;
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
        inset: '-20% -10%',
        width: '120%',
        height: '140%',
        zIndex: 0,
        pointerEvents: 'none',
        backgroundImage: encoded,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // 3D tilt — like looking at a map on a desk
        transform: 'perspective(1200px) rotateX(12deg) rotateZ(-3deg)',
        transformOrigin: 'center center',
        // Fade toward center: visible on edges, transparent where content is
        maskImage:
          'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 18%, transparent 32%, transparent 68%, rgba(0,0,0,0.4) 82%, rgba(0,0,0,0.9) 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 18%, transparent 32%, transparent 68%, rgba(0,0,0,0.4) 82%, rgba(0,0,0,0.9) 100%)',
      }}
    />
  );
}
