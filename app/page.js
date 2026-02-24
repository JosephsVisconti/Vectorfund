import Link from 'next/link'

const tiles = [
  { label: 'AI',           x: 5,  y: 8,  size: 6,   opacity: 0.18, anim: 'float-a', delay: 0,   color: '#00ff88' },
  { label: 'NEURAL NET',   x: 70, y: 5,  size: 2.2, opacity: 0.12, anim: 'float-b', delay: 0.4, color: '#fff' },
  { label: '</>',          x: 55, y: 60, size: 5,   opacity: 0.10, anim: 'float-c', delay: 1.1, color: '#00ff88' },
  { label: 'LEGAL',        x: 80, y: 20, size: 3.5, opacity: 0.13, anim: 'float-d', delay: 0.7, color: '#fff' },
  { label: 'SCALE',        x: 15, y: 70, size: 4.5, opacity: 0.14, anim: 'float-a', delay: 1.5, color: '#00ff88' },
  { label: 'MARKETING',    x: 60, y: 80, size: 2.8, opacity: 0.10, anim: 'float-b', delay: 0.2, color: '#fff' },
  { label: 'FUND',         x: 40, y: 15, size: 5.5, opacity: 0.09, anim: 'float-c', delay: 2,   color: '#fff' },
  { label: 'GROWTH',       x: 82, y: 55, size: 3.2, opacity: 0.15, anim: 'float-d', delay: 0.9, color: '#00ff88' },
  { label: 'CODE',         x: 28, y: 40, size: 4,   opacity: 0.11, anim: 'float-a', delay: 1.8, color: '#fff' },
  { label: 'DEPLOY',       x: 48, y: 88, size: 2.5, opacity: 0.13, anim: 'float-b', delay: 0.6, color: '#00ff88' },
  { label: 'SERIES A',     x: 3,  y: 50, size: 2.8, opacity: 0.10, anim: 'float-c', delay: 1.3, color: '#fff' },
  { label: 'PITCH',        x: 72, y: 38, size: 3.8, opacity: 0.12, anim: 'float-d', delay: 2.2, color: '#fff' },
  { label: 'DATA',         x: 20, y: 88, size: 3,   opacity: 0.09, anim: 'float-a', delay: 0.3, color: '#00ff88' },
  { label: 'FOUNDER',      x: 88, y: 75, size: 2.4, opacity: 0.14, anim: 'float-b', delay: 1.6, color: '#fff' },
  { label: 'CONTRACT',     x: 35, y: 62, size: 2.2, opacity: 0.08, anim: 'float-c', delay: 0.8, color: '#fff' },
  { label: 'LAUNCH',       x: 60, y: 30, size: 3.5, opacity: 0.11, anim: 'float-d', delay: 1.9, color: '#00ff88' },
  { label: 'ANALYTICS',    x: 10, y: 30, size: 2.6, opacity: 0.10, anim: 'float-a', delay: 2.5, color: '#fff' },
  { label: 'INVEST',       x: 50, y: 48, size: 4.2, opacity: 0.07, anim: 'float-b', delay: 1.1, color: '#fff' },
  { label: 'STARTUP',      x: 76, y: 88, size: 3,   opacity: 0.12, anim: 'float-c', delay: 0.5, color: '#00ff88' },
  { label: 'AI MODEL',     x: 88, y: 10, size: 2.6, opacity: 0.13, anim: 'float-d', delay: 1.4, color: '#fff' },
  { label: '01101',        x: 2,  y: 82, size: 2,   opacity: 0.09, anim: 'float-a', delay: 2.8, color: '#00ff88' },
  { label: 'EQUITY',       x: 42, y: 73, size: 2.4, opacity: 0.10, anim: 'float-b', delay: 0.1, color: '#fff' },
  { label: 'DISRUPT',      x: 25, y: 15, size: 3.8, opacity: 0.11, anim: 'float-c', delay: 1.7, color: '#00ff88' },
  { label: 'LLM',          x: 65, y: 68, size: 3,   opacity: 0.13, anim: 'float-d', delay: 2.1, color: '#fff' },
  { label: 'SCALE →',      x: 90, y: 42, size: 2.2, opacity: 0.09, anim: 'float-a', delay: 0.9, color: '#00ff88' },
]

export default function Home() {
  return (
    <section className="hero-full">
      <div className="chaos-layer" aria-hidden="true">
        {tiles.map((t, i) => (
          <span
            key={i}
            className="chaos-tile"
            style={{
              left: `${t.x}%`,
              top: `${t.y}%`,
              fontSize: `${t.size}rem`,
              opacity: t.opacity,
              color: t.color,
              animationName: t.anim,
              animationDelay: `${t.delay}s`,
            }}
          >
            {t.label}
          </span>
        ))}
      </div>

      <div className="hero-overlay" />

      <div className="hero-center">
        <h1 className="hero-title">
          Investing in the next generation of innovators
        </h1>
        <p className="hero-manifesto">
          We are looking for creative founders solving problems that have been unsolved until
          now—leveraging breakthrough capabilities in software, science, and AI. Before traction. Before revenue. Before consensus.
        </p>
        <div className="hero-cta">
          <Link href="/contact" className="cta-link">Get in Touch →</Link>
        </div>
      </div>
    </section>
  )
}
