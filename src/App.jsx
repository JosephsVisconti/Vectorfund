import './App.css'
import VectorLogo from './VectorLogo'

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="logo">VECTOR</div>
          <div className="nav-links">
            <a href="#vision">Vision</a>
            <a href="#philosophy">Philosophy</a>
            <a href="#focus">Focus</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-logo">
            <VectorLogo />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">
              We find creators at the moment of creation
            </h1>
            <p className="hero-manifesto">
              Exceptional technical founders leveraging artificial intelligence to solve meaningful problems.
              Before traction. Before revenue. Before consensus.
            </p>
          </div>
        </section>

        <section className="divider"></section>

        <section className="vision" id="vision">
          <div className="section-content">
            <h2 className="section-title">Vision</h2>
            <div className="vision-text">
              <p>
                Artificial intelligence is a foundational shift—comparable to the creation of the internet itself.
                While large model providers and infrastructure companies will define the first wave of value creation,
                the greatest long-term impact will come from the builders who apply these tools with precision,
                creativity, and conviction.
              </p>
              <p>
                Vector Fund exists to find those builders early and help transform raw technical insight into
                enduring companies.
              </p>
            </div>
          </div>
        </section>

        <section className="divider"></section>

        <section className="philosophy" id="philosophy">
          <div className="section-content">
            <h2 className="section-title">Investment Philosophy</h2>
            <div className="philosophy-grid">
              <div className="philosophy-principle">
                <h3>We invest at the point where talent meets intent</h3>
                <p>
                  Our focus is not on polished decks or pedigree, but on signal: technical depth,
                  speed of execution, and clarity of purpose.
                </p>
              </div>
              <div className="philosophy-principle">
                <h3>We partner at the moment of decision</h3>
                <p>
                  When exceptional builders decide to turn code into a company, we provide early conviction
                  capital and structural guidance.
                </p>
              </div>
              <div className="philosophy-principle">
                <h3>We align through equity, not fees</h3>
                <p>
                  Our incentives are fully aligned with founders. Success is measured by durable growth
                  and eventual liquidity—acquisition, secondary sales, or public markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="divider"></section>

        <section className="focus" id="focus">
          <div className="section-content">
            <h2 className="section-title">What We Back</h2>
            <div className="focus-list">
              <div className="focus-item">
                <span className="focus-marker">→</span>
                <p>AI-native software companies at pre-seed and pre-revenue stages</p>
              </div>
              <div className="focus-item">
                <span className="focus-marker">→</span>
                <p>Builders emerging from hackathons, research, or independent development</p>
              </div>
              <div className="focus-item">
                <span className="focus-marker">→</span>
                <p>Companies leveraging modern AI tools to create focused, applied solutions</p>
              </div>
              <div className="focus-item">
                <span className="focus-marker">→</span>
                <p>Mission-driven products with potential for large-scale adoption</p>
              </div>
            </div>

            <div className="focus-details">
              <div className="detail">
                <span className="detail-label">Investment Size</span>
                <span className="detail-value">$25K – $100K</span>
              </div>
              <div className="detail">
                <span className="detail-label">Equity Position</span>
                <span className="detail-value">5 – 10%</span>
              </div>
              <div className="detail">
                <span className="detail-label">Stage</span>
                <span className="detail-value">Pre-Seed</span>
              </div>
            </div>
          </div>
        </section>

        <section className="divider"></section>

        <section className="contact" id="contact">
          <div className="section-content">
            <h2 className="section-title">Get in Touch</h2>
            <p className="contact-text">
              If you're building something that matters, we want to hear from you.
            </p>
            <p className="contact-email">
              <a href="mailto:hello@vectorfund.io">hello@vectorfund.io</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <span>VECTOR FUND</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  )
}

export default App
