'use client'

import { useState } from 'react'

const stages = [
  {
    title: 'Discovery',
    subtitle: 'Finding Exceptional Builders',
    description: 'Before anyone else, we identify founders who have built something that works. For investors: this is the moment of lowest valuation and highest upside. For founders: this is when you receive capital without giving up the table.',
    label: 'Where we invest'
  },
  {
    title: 'Formation',
    subtitle: 'Deploying Infrastructure',
    description: 'Capital, legal structure, cap table design, IP protection. We deploy the resources you need to establish a proper foundation. For investors, this means no cleanup rounds later. For founders, this means you don\'t lose weekends to paperwork.',
    label: 'Early support'
  },
  {
    title: 'Growth',
    subtitle: 'Scaling Distribution',
    description: 'Go-to-market strategy, pricing, user acquisition, brand positioning. We bring marketing infrastructure that technical founders typically don\'t have and institutional investors don\'t provide. This is the phase that converts great products into real businesses.',
    label: 'Acceleration'
  },
  {
    title: 'Scale',
    subtitle: 'Long-Term Partnership',
    description: 'Fundraising strategy for Series A and beyond. Team expansion frameworks. Introductions to the next tier of capital. For investors, this is when marks appreciate. For founders, this is when you hire the team you always wanted.',
    label: 'Building endurance'
  },
  {
    title: 'Liquidity',
    subtitle: 'Creating Outcomes',
    description: 'Acquisition, secondary sales, public markets, or continued independence. We structure exits that work for everyone at the table — founder, employee, and early investor. The outcome reflects the conviction of everyone who believed early.',
    label: 'Impact realized'
  }
]

const beliefs = [
  {
    number: '01',
    title: 'The application layer wins',
    body: 'The most durable value will not be created by companies training models. It will be created by builders who use models to solve specific, intractable problems in real markets.'
  },
  {
    number: '02',
    title: 'Generational arbitrage is real',
    body: 'Experienced capital cannot access AI-native founders without a translator. Technical founders cannot access institutional infrastructure without a guide. We are both.'
  },
  {
    number: '03',
    title: 'Infrastructure enables conviction',
    body: 'A founder who has to become their own lawyer, marketer, and accountant has less time to become extraordinary at what they\'re actually building. We remove that friction entirely.'
  }
]

export default function Philosophy() {
  const [activeStage, setActiveStage] = useState(0)

  return (
    <section className="philosophy page-section">
      <div className="section-content">
        <h2 className="section-title">How We Operate</h2>

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

        <div className="beliefs-grid">
          {beliefs.map((b, i) => (
            <div key={i} className="belief-card">
              <span className="belief-card-number">{b.number}</span>
              <h4 className="belief-card-title">{b.title}</h4>
              <p className="belief-card-body">{b.body}</p>
            </div>
          ))}
        </div>

        <div className="philosophy-footer">
          <p>We put capital behind people before the market sees what we see — and we stay until the outcome justifies the conviction.</p>
        </div>
      </div>
    </section>
  )
}
