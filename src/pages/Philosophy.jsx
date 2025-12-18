function Philosophy() {
  return (
    <section className="philosophy page-section">
      <div className="section-content">
        <h2 className="section-title">How We Build Companies</h2>
        <p className="philosophy-intro">
          We partner with exceptional technical founders who have built something that solves a real problem—but need help turning it into a company.
        </p>

        <div className="timeline">
          <div className="timeline-stage">
            <div className="timeline-marker">01</div>
            <div className="timeline-content">
              <h3>Discovery: Pre-Revenue Product</h3>
              <p>
                You've built software that solves a major problem. It works. Users want it.
                But you're not business-savvy—you're a builder. The product can change the world,
                whether AI-native or built using modern tools like Claude, GPT, or other platforms.
              </p>
              <span className="timeline-label">Where you are</span>
            </div>
          </div>

          <div className="timeline-stage">
            <div className="timeline-marker">02</div>
            <div className="timeline-content">
              <h3>Formation: Building the Foundation</h3>
              <p>
                We provide early conviction capital and help establish the company properly.
                Legal structure, cap table, IP protection, initial positioning. We take equity,
                not fees. You stay focused on building while we handle the business infrastructure.
              </p>
              <span className="timeline-label">What we do first</span>
            </div>
          </div>

          <div className="timeline-stage">
            <div className="timeline-marker">03</div>
            <div className="timeline-content">
              <h3>Growth: Go-to-Market & Business Model</h3>
              <p>
                Marketing strategy. Business model design. Customer acquisition. Revenue generation.
                Pricing. We help you understand how to make profit, scale distribution, and build
                a real business around your product. Strategic guidance on hiring, sales, and operations.
              </p>
              <span className="timeline-label">Where we add value</span>
            </div>
          </div>

          <div className="timeline-stage">
            <div className="timeline-marker">04</div>
            <div className="timeline-content">
              <h3>Scale: Building for the Long Term</h3>
              <p>
                We help companies grow. Fundraising for next rounds. Team expansion. Market positioning.
                Operational excellence. Some companies grow for decades. Others prepare for acquisition.
                Either path requires institutional discipline and strategic clarity.
              </p>
              <span className="timeline-label">How we scale</span>
            </div>
          </div>

          <div className="timeline-stage">
            <div className="timeline-marker">05</div>
            <div className="timeline-content">
              <h3>Exit or Endure: Creating Liquidity</h3>
              <p>
                Acquisition readiness. Secondary sales. Continued growth as an independent company.
                We help founders navigate the path to liquidity—whether that's a strategic exit,
                going public, or building a generational business. Success is measured in outcomes, not timelines.
              </p>
              <span className="timeline-label">The outcome</span>
            </div>
          </div>
        </div>

        <div className="philosophy-footer">
          <p>We invest at the moment of creation. We exit at the moment of impact.</p>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
