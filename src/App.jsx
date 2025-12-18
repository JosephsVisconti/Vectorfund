import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Vision from './pages/Vision'
import Philosophy from './pages/Philosophy'
import Focus from './pages/Focus'
import Contact from './pages/Contact'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <Router>
      <div className="app">
        <header className="header">
          <nav className="nav">
            <Link to="/" className="logo" onClick={closeMenu}>Vector Fund</Link>

            <button
              className="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
              <Link to="/vision" onClick={closeMenu}>Vision</Link>
              <Link to="/philosophy" onClick={closeMenu}>Philosophy</Link>
              <Link to="/focus" onClick={closeMenu}>Focus</Link>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </div>
          </nav>
        </header>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/focus" element={<Focus />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <span>VECTOR FUND</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
