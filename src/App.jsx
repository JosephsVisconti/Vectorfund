import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="logo">VECTOR</div>
          <div className="nav-links">
            <a href="#approach">Approach</a>
            <a href="#criteria">Criteria</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Converting raw technical talent into equity that exits at scale</h1>
            <p className="hero-subtitle">
              Pre-seed conviction engine for exceptional builders
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">$25K–$100K</span>
                <span className="stat-label">Check Size</span>
              </div>
              <div className="stat">
                <span className="stat-value">5–10%</span>
                <span className="stat-label">Equity Position</span>
              </div>
              <div className="stat">
                <span className="stat-value">Pre-Seed</span>
                <span className="stat-label">Stage Focus</span>
              </div>
            </div>
          </div>
        </section>

        <section className="divider"></section>

        <section className="approach" id="approach">
          <div className="section-content">
            <h2 className="section-title">Our Approach</h2>
            <p className="section-intro">
              We invest pre-seed capital and provide company formation support to exceptional technical founders.
              Our value is front-loaded — we help founders go from idea to institution — and our compensation
              is entirely aligned through equity ownership.
            </p>

            <div className="approach-grid">
              <div className="approach-item">
                <div className="approach-number">01</div>
                <h3>Discovery</h3>
                <p>Sourcing technical talent through hackathons and builder communities. We look for strong technical signal, not polished business plans.</p>
              </div>

              <div className="approach-item">
                <div className="approach-number">02</div>
                <h3>Formation</h3>
                <p>Company structure, cap table hygiene, IP assignment, and go-to-market framing. We take equity, not fees.</p>
              </div>

              <div className="approach-item">
                <div className="approach-number">03</div>
                <h3>Scale</h3>
                <p>Strategic leverage for top companies: early hiring, customer intros, narrative shaping, and next round prep.</p>
              </div>

              <div className="approach-item">
                <div className="approach-number">04</div>
                <h3>Liquidity</h3>
                <p>Acquisition, secondary sales, or public markets. Our wins are your wins.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="divider"></section>

        <section className="criteria" id="criteria">
          <div className="section-content">
            <h2 className="section-title">What We Look For</h2>
            <div className="criteria-list">
              <div className="criteria-item">
                <div className="criteria-icon">→</div>
                <div className="criteria-text">
                  <h3>Technical Excellence</h3>
                  <p>Strong builders with demonstrated technical ability</p>
                </div>
              </div>
              <div className="criteria-item">
                <div className="criteria-icon">→</div>
                <div className="criteria-text">
                  <h3>Early Conviction</h3>
                  <p>Pre-seed stage with clear technical vision</p>
                </div>
              </div>
              <div className="criteria-item">
                <div className="criteria-icon">→</div>
                <div className="criteria-text">
                  <h3>Institutional Potential</h3>
                  <p>Willingness to build a real company, not a lifestyle business</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="divider"></section>

        <section className="contact" id="contact">
          <div className="section-content">
            <h2 className="section-title">Get in Touch</h2>
            <p className="contact-email">
              <a href="mailto:hello@vectorfund.io">hello@vectorfund.io</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <span>VECTOR</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  )
}

export default App
