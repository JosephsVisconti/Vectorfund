'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

const navLinks = [
  { href: '/vision',     label: 'Vision' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/focus',      label: 'Focus' },
  { href: '/contact',    label: 'Team' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <nav className="nav">
        <Logo onClick={closeMenu} />

        <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${pathname === href ? 'nav-link-active' : ''}`}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  )
}
