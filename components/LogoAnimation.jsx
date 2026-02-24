'use client'

export default function LogoAnimation() {
  return (
    <div className="logo-anim-wrap">
      <svg
        className="logo-anim-svg"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Vertical spine */}
        <line
          className="logo-anim-spine"
          x1="12" y1="36" x2="12" y2="11"
          stroke="white" strokeWidth="2.5" strokeLinecap="square"
          strokeDasharray="25" strokeDashoffset="25"
        />
        {/* Arrow — left stroke */}
        <line
          className="logo-anim-arrow-l"
          x1="12" y1="10" x2="7" y2="17"
          stroke="white" strokeWidth="2.5" strokeLinecap="square"
          strokeDasharray="9" strokeDashoffset="9"
        />
        {/* Arrow — right stroke */}
        <line
          className="logo-anim-arrow-r"
          x1="12" y1="10" x2="17" y2="17"
          stroke="white" strokeWidth="2.5" strokeLinecap="square"
          strokeDasharray="9" strokeDashoffset="9"
        />
        {/* Top bar of F */}
        <line
          className="logo-anim-bar-top"
          x1="12" y1="20" x2="34" y2="20"
          stroke="white" strokeWidth="2.5" strokeLinecap="square"
          strokeDasharray="22" strokeDashoffset="22"
        />
        {/* Mid bar of F */}
        <line
          className="logo-anim-bar-mid"
          x1="12" y1="28" x2="27" y2="28"
          stroke="white" strokeWidth="2.5" strokeLinecap="square"
          strokeDasharray="15" strokeDashoffset="15"
        />
        {/* Origin dot */}
        <circle
          className="logo-anim-dot"
          cx="12" cy="36" r="3"
          fill="#00ff88"
          opacity="0"
        />
      </svg>
      <span className="logo-anim-label">VECTOR FUND</span>
    </div>
  )
}
