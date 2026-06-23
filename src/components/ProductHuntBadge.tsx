// Badge "Featured on Product Hunt" — link alla scheda di lancio.
// Logo PH (cat arancione) inline come SVG così è nitido e senza richieste esterne.
export default function ProductHuntBadge({ className = '' }: { className?: string }) {
  return (
    <a
      href="https://www.producthunt.com/posts/geotapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GeoTapp su Product Hunt"
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#fff3ef] border border-[#f4c8b9] text-[#b3431f] hover:bg-[#ffe9e1] transition-colors ${className}`}
    >
      <svg width="16" height="16" viewBox="0 0 256 256" aria-hidden="true" className="shrink-0">
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ph-badge-g">
            <stop stopColor="#DA552F" offset="0%" />
            <stop stopColor="#D04B25" offset="100%" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path d="M128 256c70.694 0 128-57.306 128-128S198.694 0 128 0 0 57.306 0 128s57.306 128 128 128z" fill="url(#ph-badge-g)" />
          <path d="M142.7 128H110v-26.5h32.7c7.3 0 13.3 5.9 13.3 13.2 0 7.3-6 13.3-13.3 13.3zm0-53H83.5V181H110v-26.5h32.7c21.9 0 39.8-17.8 39.8-39.7S164.6 75 142.7 75z" fill="#FFF" />
        </g>
      </svg>
      Featured on Product Hunt
      <span aria-hidden="true" className="font-bold">▲</span>
    </a>
  );
}
