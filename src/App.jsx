import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Vision from './pages/Vision'
import Philosophy from './pages/Philosophy'
import Focus from './pages/Focus'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <nav className="nav">
            <Link to="/" className="logo">VECTOR</Link>
            <div className="nav-links">
              <Link to="/vision">Vision</Link>
              <Link to="/philosophy">Philosophy</Link>
              <Link to="/focus">Focus</Link>
              <Link to="/contact">Contact</Link>
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
