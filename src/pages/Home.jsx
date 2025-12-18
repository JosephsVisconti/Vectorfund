import VectorLogo from '../VectorLogo'

function Home() {
  return (
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
  )
}

export default Home
