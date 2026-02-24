'use client'

import Link from 'next/link'
import HeroBackground from '../components/HeroBackground'
import LogoMark from '../components/LogoMark'

const tiles = [
  { label: 'AI',            x: 5,  y: 8,  size: 6,   opacity: 0.08, anim: 'float-a', delay: 0,   color: '#00ff88' },
  { label: 'NEURAL NET',    x: 70, y: 5,  size: 2.2, opacity: 0.06, anim: 'float-b', delay: 0.4, color: '#fff' },
  { label: '</>',           x: 55, y: 60, size: 5,   opacity: 0.05, anim: 'float-c', delay: 1.1, color: '#00ff88' },
  { label: 'LEGAL',         x: 80, y: 20, size: 3.5, opacity: 0.05, anim: 'float-d', delay: 0.7, color: '#fff' },
  { label: 'SCALE',         x: 15, y: 70, size: 4.5, opacity: 0.06, anim: 'float-a', delay: 1.5, color: '#00ff88' },
  { label: 'MARKETING',     x: 60, y: 80, size: 2.8, opacity: 0.04, anim: 'float-b', delay: 0.2, color: '#fff' },
  { label: 'FUND',          x: 40, y: 15, size: 5.5, opacity: 0.04, anim: 'float-c', delay: 2,   color: '#fff' },
  { label: 'GROWTH',        x: 82, y: 55, size: 3.2, opacity: 0.06, anim: 'float-d', delay: 0.9, color: '#00ff88' },
  { label: 'CODE',          x: 28, y: 40, size: 4,   opacity: 0.05, anim: 'float-a', delay: 1.8, color: '#fff' },
  { label: 'DEPLOY',        x: 48, y: 88, size: 2.5, opacity: 0.05, anim: 'float-b', delay: 0.6, color: '#00ff88' },
  { label: 'SERIES A',      x: 3,  y: 50, size: 2.8, opacity: 0.04, anim: 'float-c', delay: 1.3, color: '#fff' },
  { label: 'PITCH',         x: 72, y: 38, size: 3.8, opacity: 0.05, anim: 'float-d', delay: 2.2, color: '#fff' },
  { label: 'DATA',          x: 20, y: 88, size: 3,   opacity: 0.04, anim: 'float-a', delay: 0.3, color: '#00ff88' },
  { label: 'FOUNDER',       x: 88, y: 75, size: 2.4, opacity: 0.05, anim: 'float-b', delay: 1.6, color: '#fff' },
  { label: 'CONTRACT',      x: 35, y: 62, size: 2.2, opacity: 0.04, anim: 'float-c', delay: 0.8, color: '#fff' },
  { label: 'LAUNCH',        x: 60, y: 30, size: 3.5, opacity: 0.05, anim: 'float-d', delay: 1.9, color: '#00ff88' },
  { label: 'ANALYTICS',     x: 10, y: 30, size: 2.6, opacity: 0.04, anim: 'float-a', delay: 2.5, color: '#fff' },
  { label: 'LP',            x: 33, y: 25, size: 2.4, opacity: 0.05, anim: 'float-b', delay: 3.1, color: '#fff' },
  { label: 'PORTFOLIO',     x: 55, y: 10, size: 2.8, opacity: 0.05, anim: 'float-c', delay: 1.6, color: '#fff' },
  { label: 'STARTUP',       x: 76, y: 88, size: 3,   opacity: 0.05, anim: 'float-c', delay: 0.5, color: '#00ff88' },
  { label: 'AI MODEL',      x: 88, y: 10, size: 2.6, opacity: 0.05, anim: 'float-d', delay: 1.4, color: '#fff' },
  { label: '01101',         x: 2,  y: 82, size: 2,   opacity: 0.04, anim: 'float-a', delay: 2.8, color: '#00ff88' },
  { label: 'CARRY',         x: 78, y: 62, size: 2.2, opacity: 0.04, anim: 'float-d', delay: 3.4, color: '#fff' },
  { label: 'LLM',           x: 65, y: 68, size: 3,   opacity: 0.05, anim: 'float-d', delay: 2.1, color: '#fff' },
  { label: 'SCALE →',       x: 90, y: 42, size: 2.2, opacity: 0.04, anim: 'float-a', delay: 0.9, color: '#00ff88' },
]

export default function Home() {
  return (
    <>
      <section className="hero-full">
        {/* ── Layer 1: background media (photo + video) ── */}
        <HeroBackground />

        {/* ── Layer 2: dark gradient overlay (contrast for text) ── */}
        <div className="hero-gradient" aria-hidden="true" />

        {/* ── Layer 3: film grain / noise texture ── */}
        <div className="hero-noise" aria-hidden="true" />

        {/* ── Layer 4: floating keyword tiles ── */}
        <div className="chaos-layer" aria-hidden="true">
          {tiles.map((t, i) => (
            <span
              key={i}
              className={`chaos-tile anim-${t.anim.replace('float-', '')}`}
              style={{
                left: `${t.x}%`,
                top: `${t.y}%`,
                fontSize: `${t.size}rem`,
                opacity: t.opacity,
                color: t.color,
                animationDelay: `${t.delay}s`,
              }}
            >
              {t.label}
            </span>
          ))}
        </div>

        {/* ── Layer 4b: large logo watermark (same level as tiles) ── */}
        <div className="hero-watermark" aria-hidden="true">
          <LogoMark size={320} opacity={0.04} />
        </div>

        {/* ── Layer 5: hero headline + subcopy + CTA ── */}
        <div className="hero-center">
          <h1 className="hero-title">
            A generation holds capital.<br />
            A generation builds the future.<br />
            We connect them with precision.
          </h1>
          <p className="hero-manifesto">
            Vector Fund is an AI-first venture firm aligning experienced investors with high-signal technical founders — built for speed, clarity, and liquidity.
          </p>
          <div className="hero-cta-split">
            <Link href="/vision" className="cta-link-secondary">For Investors →</Link>
            <Link href="/focus" className="cta-link-primary">For Investees →</Link>
          </div>
        </div>
      </section>

      <div className="bridge-strip">
        <div className="bridge-strip-item">
          <span className="bridge-strip-value">$25K – $100K</span>
          <span className="bridge-strip-label">Deployed per company</span>
        </div>
        <div className="bridge-strip-item">
          <span className="bridge-strip-value">5 – 10%</span>
          <span className="bridge-strip-label">Equity, clean terms</span>
        </div>
        <div className="bridge-strip-item">
          <span className="bridge-strip-value">Pre-Seed</span>
          <span className="bridge-strip-label">Stage of entry</span>
        </div>
        <div className="bridge-strip-item">
          <span className="bridge-strip-value">Hands-On</span>
          <span className="bridge-strip-label">Level of involvement</span>
        </div>
      </div>
    </>
  )
}
