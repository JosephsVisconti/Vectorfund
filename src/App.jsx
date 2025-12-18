import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="logo">Vector Fund</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h1 className="hero-title">Vector Fund</h1>
          <p className="hero-subtitle">Investing in the Future of Technology</p>
          <p className="hero-description">
            We partner with exceptional founders building transformative companies
          </p>
          <button className="cta-button">Get in Touch</button>
        </section>

        <section className="features" id="about">
          <div className="feature-card">
            <h3>Early Stage Focus</h3>
            <p>Investing in seed and Series A rounds</p>
          </div>
          <div className="feature-card">
            <h3>Strategic Support</h3>
            <p>Beyond capital - hands-on partnership</p>
          </div>
          <div className="feature-card">
            <h3>Long-term Vision</h3>
            <p>Building lasting relationships with founders</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Vector Fund. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
