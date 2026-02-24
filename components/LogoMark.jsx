export default function LogoMark({ size = 40, opacity = 1, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      <line x1="12" y1="36" x2="12" y2="11" stroke="white" strokeWidth="2.5" strokeLinecap="square" />
      <polyline
        points="7,17 12,10 17,17"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      <line x1="12" y1="20" x2="34" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="square" />
      <line x1="12" y1="28" x2="27" y2="28" stroke="white" strokeWidth="2.5" strokeLinecap="square" />
      <circle cx="12" cy="36" r="3" fill="#00ff88" />
    </svg>
  )
}
