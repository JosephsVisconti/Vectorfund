import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          We look for creative founders solving problems
        </h1>
        <p className="hero-manifesto">
          Problems that have been unsolved until now—leveraging breakthrough capabilities
          in software, science, and AI. Before traction. Before revenue. Before consensus.
        </p>
        <div className="hero-cta">
          <Link to="/contact" className="cta-link">Get in Touch →</Link>
        </div>
      </div>
    </section>
  )
}

export default Home
