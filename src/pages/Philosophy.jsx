import TimelineLine from '../TimelineLine'

function Philosophy() {
  return (
    <section className="philosophy page-section">
      <div className="section-content">
        <h2 className="section-title">Investment Philosophy</h2>

        <div className="philosophy-vision">
          <p>
            We recognize the patterns of the past. Just as the creation of the internet spawned a wave of companies—both
            winners and losers—we believe the advent of AI will create a second generational opportunity.
          </p>
          <p>
            The wins in AI won't only come from model training and infrastructure. The greatest value will be created by
            founders who leverage large language models from Claude, OpenAI, xAI, and others to build focused, applied solutions
            that solve real problems.
          </p>
          <p>
            Our philosophy: deploy capital and resources to help exceptional builders move from Point A to Point B—faster,
            with fewer obstacles, and with institutional support from day one.
          </p>
        </div>

        <div className="timeline">
          <TimelineLine />

          <div className="timeline-stage">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Discovery: Finding Exceptional Builders</h3>
              <p>
                You've built something that solves a real problem. It works. Users want it. You're focused on the
                product, the technology, the impact. We find founders at this inflection point—when technical
                execution meets market opportunity.
              </p>
              <span className="timeline-label">Where we invest</span>
            </div>
          </div>

          <div className="timeline-stage">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Formation: Deploying Resources</h3>
              <p>
                Capital, legal structure, cap table design, IP protection, initial market positioning. We deploy the
                resources you need to establish a proper foundation. You stay focused on building. We handle the
                infrastructure. Equity-aligned, no fees.
              </p>
              <span className="timeline-label">Early support</span>
            </div>
          </div>

          <div className="timeline-stage">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Growth: Scaling Distribution</h3>
              <p>
                Go-to-market strategy. Business model refinement. Customer acquisition and revenue generation.
                We help you scale what works—pricing, positioning, distribution. Strategic guidance on team building,
                sales operations, and market expansion.
              </p>
              <span className="timeline-label">Acceleration</span>
            </div>
          </div>

          <div className="timeline-stage">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Scale: Long-Term Partnership</h3>
              <p>
                Fundraising for next rounds. Team expansion. Operational discipline. Market leadership.
                Some companies scale for decades. Others achieve strategic exits. We support both paths with
                institutional resources and long-term conviction.
              </p>
              <span className="timeline-label">Building endurance</span>
            </div>
          </div>

          <div className="timeline-stage">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Liquidity: Creating Outcomes</h3>
              <p>
                Acquisition, secondary sales, public markets, or continued growth as an independent company.
                We help founders navigate the path to impact and liquidity. Success is measured in outcomes
                that matter—for founders, teams, and the problems they solve.
              </p>
              <span className="timeline-label">Impact realized</span>
            </div>
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
