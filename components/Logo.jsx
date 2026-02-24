import Link from 'next/link'

export default function Logo({ onClick }) {
  return (
    <Link href="/" className="logo-link" onClick={onClick} aria-label="Vector Fund">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
      >
        {/* Vertical spine — F stroke + rising vector */}
        <line x1="12" y1="36" x2="12" y2="11" stroke="white" strokeWidth="2.5" strokeLinecap="square" />

        {/* Arrowhead */}
        <polyline
          points="7,17 12,10 17,17"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        />

        {/* Top bar of F — full width */}
        <line x1="12" y1="20" x2="34" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="square" />

        {/* Mid bar of F — 70% width */}
        <line x1="12" y1="28" x2="27" y2="28" stroke="white" strokeWidth="2.5" strokeLinecap="square" />

        {/* Origin dot — green, the only accent */}
        <circle cx="12" cy="36" r="3" fill="#00ff88" />
      </svg>

      <div className="logo-wordmark">
        <span className="logo-wordmark-top">VECTOR</span>
        <span className="logo-wordmark-bottom">FUND</span>
      </div>
    </Link>
  )
}
