'use client';

interface MapBackgroundProps {
  products?: Array<'timetracker' | 'flow' | 'verifier'>;
}

const COLORS = {
  timetracker: '#F97316',
  flow: '#8B5CF6',
  verifier: '#22C55E',
};

/**
 * Isometric building: top face + right face + front face
 * Creates a 3D block effect viewed from top-right
 */
function isoBuilding(x: number, y: number, w: number, d: number, h: number, color: string, opacity: number): string {
  // Isometric projection: x shifts right, y shifts down-right
  const iso = 0.5; // isometric ratio

  // Top face (roof)
  const topFace = `M${x},${y - h} L${x + w},${y - h + w * iso * 0.5} L${x + w + d},${y - h + (w - d) * iso * 0.5} L${x + d},${y - h - d * iso * 0.5} Z`;

  // Front face (left wall)
  const frontFace = `M${x},${y - h} L${x + d},${y - h - d * iso * 0.5} L${x + d},${y - d * iso * 0.5} L${x},${y} Z`;

  // Right face (right wall)
  const rightFace = `M${x + d},${y - h - d * iso * 0.5} L${x + w + d},${y - h + (w - d) * iso * 0.5} L${x + w + d},${y + (w - d) * iso * 0.5} L${x + d},${y - d * iso * 0.5} Z`;

  return (
    `<path d="${topFace}" fill="${color}" opacity="${opacity * 0.7}"/>` +
    `<path d="${frontFace}" fill="${color}" opacity="${opacity * 1.0}"/>` +
    `<path d="${rightFace}" fill="${color}" opacity="${opacity * 0.5}"/>`
  );
}

/**
 * Flat road segment
 */
function road(x1: number, y1: number, x2: number, y2: number, width: number, color: string): string {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" opacity="0.10" stroke-linecap="round"/>`;
}

/**
 * GPS pin in isometric style
 */
function pin(x: number, y: number, color: string): string {
  return (
    `<g transform="translate(${x},${y})" opacity="0.25">` +
      // Shadow ellipse on ground
      `<ellipse cx="0" cy="2" rx="4" ry="1.5" fill="#000" opacity="0.15"/>` +
      // Pin body
      `<path d="M0-14 C-5-14 -8-10 -8-7 C-8-2 0 4 0 4 C0 4 8-2 8-7 C8-10 5-14 0-14Z" fill="${color}"/>` +
      // White dot
      `<circle cx="0" cy="-7" r="2.5" fill="white" opacity="0.9"/>` +
    `</g>`
  );
}

function buildSvg(colors: string[]): string {
  const c = (i: number) => colors[i % colors.length];
  const p: string[] = [];

  // ── ROADS — straight streets forming a city grid ──

  // Horizontal streets
  p.push(road(0, 200, 1400, 200, 3, c(0)));
  p.push(road(0, 400, 1400, 400, 3.5, c(1)));
  p.push(road(0, 600, 1400, 600, 3, c(2)));
  p.push(road(0, 800, 1400, 800, 2.5, c(0)));

  // Vertical streets
  p.push(road(200, 0, 200, 950, 3, c(1)));
  p.push(road(450, 0, 450, 950, 3.5, c(2)));
  p.push(road(700, 0, 700, 950, 3, c(0)));
  p.push(road(950, 0, 950, 950, 3, c(1)));
  p.push(road(1200, 0, 1200, 950, 2.5, c(2)));

  // Diagonal boulevard
  p.push(`<path d="M0 100 L500 350 L800 300 L1400 550" fill="none" stroke="${c(0)}" stroke-width="2.5" opacity="0.08" stroke-linecap="round"/>`);
  // Curved ring road
  p.push(`<path d="M100 700 Q400 650 700 700 Q1000 750 1300 680" fill="none" stroke="${c(1)}" stroke-width="2" opacity="0.07" stroke-linecap="round"/>`);

  // Secondary streets (thinner)
  p.push(road(320, 200, 320, 400, 1.5, c(2)));
  p.push(road(580, 200, 580, 400, 1.5, c(0)));
  p.push(road(830, 400, 830, 600, 1.5, c(1)));
  p.push(road(1080, 400, 1080, 600, 1.5, c(2)));
  p.push(road(200, 300, 450, 300, 1.5, c(0)));
  p.push(road(450, 500, 700, 500, 1.5, c(1)));
  p.push(road(700, 300, 950, 300, 1.5, c(2)));
  p.push(road(950, 500, 1200, 500, 1.5, c(0)));
  p.push(road(200, 700, 450, 700, 1.5, c(1)));
  p.push(road(700, 700, 950, 700, 1.5, c(2)));

  // ── ISOMETRIC BUILDINGS — 3D blocks between streets ──

  // Block 1 (top-left: between x200-450, y200-400)
  p.push(isoBuilding(230, 280, 30, 20, 35, c(0), 0.09));
  p.push(isoBuilding(290, 300, 25, 15, 25, c(1), 0.08));
  p.push(isoBuilding(340, 270, 35, 20, 45, c(2), 0.10));
  p.push(isoBuilding(240, 350, 28, 18, 30, c(0), 0.08));
  p.push(isoBuilding(330, 360, 22, 16, 20, c(1), 0.07));
  p.push(isoBuilding(400, 280, 20, 14, 28, c(2), 0.08));

  // Block 2 (top-center: between x450-700, y200-400)
  p.push(isoBuilding(480, 280, 35, 22, 50, c(1), 0.10));
  p.push(isoBuilding(550, 300, 28, 18, 30, c(2), 0.08));
  p.push(isoBuilding(490, 360, 32, 20, 40, c(0), 0.09));
  p.push(isoBuilding(610, 270, 25, 16, 35, c(1), 0.08));
  p.push(isoBuilding(640, 350, 30, 18, 25, c(2), 0.07));
  p.push(isoBuilding(560, 250, 20, 14, 22, c(0), 0.07));

  // Block 3 (top-right: between x700-950, y200-400)
  p.push(isoBuilding(730, 280, 30, 20, 45, c(2), 0.10));
  p.push(isoBuilding(800, 300, 35, 22, 55, c(0), 0.11));
  p.push(isoBuilding(870, 280, 25, 16, 30, c(1), 0.08));
  p.push(isoBuilding(740, 360, 28, 18, 35, c(2), 0.09));
  p.push(isoBuilding(830, 350, 22, 14, 20, c(0), 0.07));
  p.push(isoBuilding(910, 340, 20, 16, 28, c(1), 0.08));

  // Block 4 (far right: between x950-1200, y200-400)
  p.push(isoBuilding(980, 270, 32, 20, 40, c(0), 0.09));
  p.push(isoBuilding(1050, 290, 28, 18, 50, c(1), 0.10));
  p.push(isoBuilding(1120, 280, 25, 16, 32, c(2), 0.08));
  p.push(isoBuilding(990, 360, 30, 20, 25, c(0), 0.07));
  p.push(isoBuilding(1070, 350, 35, 22, 45, c(1), 0.09));
  p.push(isoBuilding(1150, 340, 22, 14, 28, c(2), 0.08));

  // Block 5 (middle-left: between x200-450, y400-600)
  p.push(isoBuilding(230, 480, 28, 18, 35, c(1), 0.09));
  p.push(isoBuilding(300, 500, 32, 20, 42, c(2), 0.10));
  p.push(isoBuilding(380, 470, 25, 16, 28, c(0), 0.08));
  p.push(isoBuilding(250, 560, 30, 18, 38, c(1), 0.09));
  p.push(isoBuilding(350, 550, 22, 14, 22, c(2), 0.07));

  // Block 6 (middle-center: between x450-700, y400-600)
  p.push(isoBuilding(480, 470, 35, 22, 55, c(0), 0.11));
  p.push(isoBuilding(560, 490, 28, 18, 35, c(1), 0.09));
  p.push(isoBuilding(630, 480, 30, 20, 42, c(2), 0.10));
  p.push(isoBuilding(490, 560, 25, 16, 28, c(0), 0.08));
  p.push(isoBuilding(580, 550, 32, 20, 38, c(1), 0.09));

  // Block 7 (middle-right: between x700-950, y400-600)
  p.push(isoBuilding(730, 480, 30, 20, 48, c(2), 0.10));
  p.push(isoBuilding(810, 470, 35, 22, 35, c(0), 0.09));
  p.push(isoBuilding(890, 490, 25, 16, 30, c(1), 0.08));
  p.push(isoBuilding(750, 560, 28, 18, 25, c(2), 0.07));
  p.push(isoBuilding(860, 550, 30, 20, 40, c(0), 0.09));

  // Block 8 (far right middle: between x950-1200, y400-600)
  p.push(isoBuilding(980, 480, 32, 20, 45, c(1), 0.10));
  p.push(isoBuilding(1060, 470, 28, 18, 55, c(2), 0.11));
  p.push(isoBuilding(1140, 490, 25, 16, 32, c(0), 0.08));
  p.push(isoBuilding(1000, 560, 30, 20, 28, c(1), 0.08));
  p.push(isoBuilding(1100, 550, 35, 22, 40, c(2), 0.09));

  // Bottom row buildings (between y600-800)
  p.push(isoBuilding(230, 680, 28, 18, 30, c(0), 0.08));
  p.push(isoBuilding(340, 700, 32, 20, 40, c(1), 0.09));
  p.push(isoBuilding(490, 680, 30, 20, 35, c(2), 0.09));
  p.push(isoBuilding(600, 700, 25, 16, 28, c(0), 0.08));
  p.push(isoBuilding(730, 690, 35, 22, 50, c(1), 0.10));
  p.push(isoBuilding(870, 680, 28, 18, 32, c(2), 0.08));
  p.push(isoBuilding(990, 700, 30, 20, 42, c(0), 0.09));
  p.push(isoBuilding(1100, 680, 25, 16, 28, c(1), 0.08));

  // Top row buildings (y0-200)
  p.push(isoBuilding(230, 150, 25, 16, 30, c(2), 0.08));
  p.push(isoBuilding(350, 170, 30, 20, 40, c(0), 0.09));
  p.push(isoBuilding(500, 150, 28, 18, 35, c(1), 0.09));
  p.push(isoBuilding(640, 160, 32, 20, 45, c(2), 0.10));
  p.push(isoBuilding(780, 140, 25, 16, 28, c(0), 0.08));
  p.push(isoBuilding(920, 160, 30, 18, 38, c(1), 0.09));
  p.push(isoBuilding(1060, 150, 28, 16, 32, c(2), 0.08));

  // ── ROUNDABOUTS ──
  const roundabouts = [
    { x: 450, y: 400 }, { x: 700, y: 200 }, { x: 950, y: 400 },
    { x: 700, y: 600 }, { x: 200, y: 400 }, { x: 1200, y: 600 },
  ];
  roundabouts.forEach((r, i) => {
    p.push(`<circle cx="${r.x}" cy="${r.y}" r="10" fill="none" stroke="${c(i)}" stroke-width="1.5" opacity="0.12"/>`);
    p.push(`<circle cx="${r.x}" cy="${r.y}" r="4" fill="${c(i)}" opacity="0.06"/>`);
  });

  // ── GPS PINS ──
  const pins_data = [
    { x: 320, y: 280 }, { x: 550, y: 480 }, { x: 800, y: 290 },
    { x: 1050, y: 470 }, { x: 400, y: 560 }, { x: 730, y: 680 },
    { x: 250, y: 470 }, { x: 920, y: 550 }, { x: 1150, y: 280 },
    { x: 500, y: 160 }, { x: 870, y: 690 }, { x: 650, y: 350 },
    { x: 350, y: 700 }, { x: 1000, y: 700 }, { x: 150, y: 280 },
  ];
  pins_data.forEach((pp, i) => {
    p.push(pin(pp.x, pp.y, c(i)));
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 950" preserveAspectRatio="xMidYMid slice">${p.join('')}</svg>`;
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
