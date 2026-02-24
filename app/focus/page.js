export const metadata = {
  title: 'Focus | Vector Fund',
}

export default function Focus() {
  return (
    <section className="focus page-section">
      <div className="section-content">
        <h2 className="section-title">What We Back</h2>

        <p className="focus-intro">
          Creative founders developing products that solve problems which have been unsolved until now—leveraging
          the latest advancements in software development, science, and artificial intelligence.
        </p>

        <div className="focus-list">
          {[
            'Products tackling problems that were previously impossible or impractical to solve',
            'Creative technical founders pushing boundaries in software, science, and AI',
            'Solutions built on breakthrough capabilities—large language models, new computational methods, novel scientific approaches',
            'Pre-seed and pre-revenue companies with working prototypes demonstrating technical feasibility',
            'Builders from hackathons, research labs, or independent development who see what others miss',
            'Mission-driven products with potential to fundamentally change how people work, create, or solve problems',
          ].map((item, i) => (
            <div key={i} className="focus-item">
              <span className="focus-marker">→</span>
              <p>{item}</p>
            </div>
          ))}
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
  )
}
