import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Investing in the next generation of creators and innovators
        </h1>
        <p className="hero-manifesto">
          Exceptional technical founders leveraging artificial intelligence to solve meaningful problems.
          Before traction. Before revenue. Before consensus.
        </p>
        <div className="hero-cta">
          <Link to="/contact" className="cta-link">Get in Touch →</Link>
        </div>
      </div>
    </section>
  )
}

export default Home
