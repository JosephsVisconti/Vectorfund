'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const closeMenu = () => setMenuOpen(false)
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance < -minSwipeDistance && menuOpen) closeMenu()
  }

  return (
    <header className="header">
      <nav className="nav">
        <Link href="/" className="logo" onClick={closeMenu}>Vector Fund</Link>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <Link href="/vision" onClick={closeMenu}>Vision</Link>
          <Link href="/philosophy" onClick={closeMenu}>Philosophy</Link>
          <Link href="/focus" onClick={closeMenu}>Focus</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      </nav>
    </header>
  )
}
