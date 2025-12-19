import { useState } from 'react'

function Philosophy() {
  const [activeStage, setActiveStage] = useState(0)

  const stages = [
    {
      title: 'Discovery',
      subtitle: 'Finding Exceptional Builders',
      description: 'You've built something that solves a real problem. It works. Users want it. We find founders at this inflection point—when technical execution meets market opportunity.',
      label: 'Where we invest'
    },
    {
      title: 'Formation',
      subtitle: 'Deploying Resources',
      description: 'Capital, legal structure, cap table design, IP protection. We deploy the resources you need to establish a proper foundation. You stay focused on building.',
      label: 'Early support'
    },
    {
      title: 'Growth',
      subtitle: 'Scaling Distribution',
      description: 'Go-to-market strategy. Business model refinement. Customer acquisition. We help you scale what works—pricing, positioning, distribution.',
      label: 'Acceleration'
    },
    {
      title: 'Scale',
      subtitle: 'Long-Term Partnership',
      description: 'Fundraising for next rounds. Team expansion. Market leadership. We support both paths—decades of growth or strategic exits.',
      label: 'Building endurance'
    },
    {
      title: 'Liquidity',
      subtitle: 'Creating Outcomes',
      description: 'Acquisition, secondary sales, public markets, or continued independence. We help founders navigate the path to impact and liquidity.',
      label: 'Impact realized'
    }
  ]

  return (
    <section className="philosophy page-section">
      <div className="section-content">
        <h2 className="section-title">Investment Philosophy</h2>

        <div className="philosophy-vision">
          <p>
            The internet created a generational wave of companies. AI will create the next one.
          </p>
          <p>
            The greatest value won't come from model training—it will come from founders leveraging LLMs from Claude, OpenAI, and xAI to build focused solutions that solve real problems.
          </p>
          <p>
            Our philosophy: deploy capital and resources to help exceptional builders move from Point A to Point B—faster, with fewer obstacles.
          </p>
        </div>

        <div className="horizontal-timeline">
          <div className="timeline-nav">
            {stages.map((stage, index) => (
              <div
                key={index}
                className={`timeline-nav-item ${activeStage === index ? 'active' : ''}`}
                onClick={() => setActiveStage(index)}
              >
                <div className="timeline-nav-marker"></div>
                <span className="timeline-nav-title">{stage.title}</span>
              </div>
            ))}
            <div className="timeline-nav-line"></div>
          </div>

          <div className="timeline-stage-display">
            <h3>{stages[activeStage].subtitle}</h3>
            <p>{stages[activeStage].description}</p>
            <span className="timeline-label">{stages[activeStage].label}</span>
          </div>
        </div>

        <div className="philosophy-footer">
          <p>We invest at the moment of creation. We scale at the moment of conviction.</p>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
