import LogoMark from '../../components/LogoMark'

export const metadata = {
  title: 'Vision | Vector Fund',
  description: 'Why Vector Fund exists — bridging experienced capital with AI-native founders.',
}

export default function Vision() {
  return (
    <section className="vision page-section">
      <div className="section-content">
        <h2 className="section-title">Why Vector Exists</h2>

        <div className="vision-text">
          <p>
            Artificial intelligence is not a feature cycle. It is a civilizational shift — as
            foundational as electrification, as disruptive as the internet. The companies built
            on top of this infrastructure in the next five years will define the next fifty.
          </p>
          <p>
            Most experienced investors recognize this. What they lack is access. The founders
            building meaningful AI companies are not at traditional conferences or in the deal
            networks that worked in previous decades. They are at hackathons, in Discord servers,
            shipping code at 2am. Capital exists. The bridge to these builders does not — until now.
          </p>
          <p>
            Most exceptional technical founders recognize the opportunity too. What they lack is
            infrastructure. Not talent. Not work ethic. Not vision. But the legal architecture to
            protect what they build, the marketing knowledge to acquire their first thousand users,
            the financial fluency to negotiate a fair term sheet. The tools are there. The
            scaffolding is missing.
          </p>
          <p>
            Vector Fund was built to close both gaps simultaneously. We bring institutional-grade
            resources — legal, operational, financial — to pre-seed technical founders. We bring
            curated, vetted deal flow to experienced investors who want exposure to the AI era
            without having to learn a new language.
          </p>
          <p>
            The future belongs not to those who build the rails, but to those who use them to
            reach places no one imagined possible. We exist to make sure those people have a
            train to board.
          </p>
        </div>

        {/* The Bridge */}
        <div className="bridge-split">
          <div className="bridge-col">
            <span className="bridge-col-label">For Investors</span>
            <h3 className="bridge-col-heading">
              Access the AI generation without translating the language
            </h3>
            <p className="bridge-col-body">
              You understand capital allocation, risk, and return. You've built successful
              businesses and managed complex portfolios. What you need is a trusted partner
              who has already done the work of identifying which technical founders are real,
              which problems are solvable, and which teams can execute. We are that partner.
            </p>
            <span className="bridge-col-accent">Curated deal flow. Institutional diligence. Real relationships.</span>
          </div>

          <div className="bridge-split-divider" />

          <div className="bridge-col">
            <span className="bridge-col-label">For Founders</span>
            <h3 className="bridge-col-heading">
              Build without stopping to learn what you don&apos;t need to know yet
            </h3>
            <p className="bridge-col-body">
              You understand systems, models, and architecture. You see the problem clearly and
              know exactly how to solve it. What you shouldn&apos;t have to become is a lawyer,
              a marketer, and a financial analyst before you&apos;ve shipped v1. We provide the
              infrastructure so you can stay in the code.
            </p>
            <span className="bridge-col-accent">Capital. Legal. Distribution. On day one.</span>
          </div>
        </div>

        <div className="section-logomark" aria-hidden="true">
          <LogoMark size={32} opacity={0.15} />
        </div>
      </div>
    </section>
  )
}
