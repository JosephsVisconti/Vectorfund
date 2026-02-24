export const metadata = {
  title: 'Focus | Vector Fund',
  description: 'What Vector Fund backs — AI-native founders at pre-seed and what we provide in return.',
}

const lookFor = [
  'Technical founders who have already built something — working code, not decks',
  'AI-native builders leveraging LLMs, novel computational methods, or frontier scientific approaches to attack problems that were previously impossible',
  'Conviction over consensus — founders building the thing they cannot stop thinking about, not the thing they think VCs want to hear',
  'Builders from hackathons, research labs, or independent development who see around corners',
]

const provide = [
  'Capital at pre-seed: $25K–$100K with standard, clean terms (5–10% equity) that won\'t complicate your next raise',
  'Legal architecture: entity formation, IP protection, cap table design — done right from day one',
  'Distribution infrastructure: go-to-market strategy, organic marketing playbooks, user acquisition frameworks',
  'Access to a network of experienced investors and operators who know how to scale businesses across every stage',
]

const steps = [
  'Send us a short description of what you\'re building and where it is today — working prototype preferred, deck optional.',
  'We read everything. If there\'s a fit, we respond within 5 business days to schedule a conversation.',
  'We move fast. If we\'re in, you\'ll have a term sheet within two weeks of first contact.',
]

export default function Focus() {
  return (
    <section className="focus page-section">
      <div className="section-content">
        <h2 className="section-title">What We Fund</h2>

        <p className="focus-intro">
          We fund technical founders building AI-native products at the pre-seed stage —
          before revenue, before consensus, after proof. Our selection criteria are tight
          because our involvement is deep. We do not make bets. We make commitments.
        </p>

        <div className="focus-group">
          <p className="focus-group-label">What we look for in founders</p>
          <div className="focus-list">
            {lookFor.map((item, i) => (
              <div key={i} className="focus-item">
                <span className="focus-marker">→</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="focus-group">
          <p className="focus-group-label">What we provide in return</p>
          <div className="focus-list">
            {provide.map((item, i) => (
              <div key={i} className="focus-item">
                <span className="focus-marker">→</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="focus-details">
          <div className="detail">
            <span className="detail-label">Investment Size</span>
            <span className="detail-value">$25K – $100K</span>
          </div>
          <div className="detail">
            <span className="detail-label">Equity</span>
            <span className="detail-value">5 – 10%</span>
          </div>
          <div className="detail">
            <span className="detail-label">Stage</span>
            <span className="detail-value">Pre-Seed</span>
          </div>
          <div className="detail">
            <span className="detail-label">Involvement</span>
            <span className="detail-value">Hands-On</span>
          </div>
        </div>

        <div className="process-section">
          <p className="process-heading">What happens next</p>
          <div className="process-steps">
            {steps.map((step, i) => (
              <div key={i} className="process-step">
                <span className="process-step-number">0{i + 1}</span>
                <p className="process-step-text">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
