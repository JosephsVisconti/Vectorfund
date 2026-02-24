export const metadata = {
  title: 'Team | Vector Fund',
  description: 'Meet the Vector Fund team and reach out — whether you\'re an investor or a founder.',
}

const team = [
  {
    name: 'Edward Fleming',
    role: 'Strategy & Operations',
    bio: "Edward leads strategy and operations at Vector Fund. His background spans commercial real estate, digital marketing, and payments infrastructure — industries that reward execution over theory. He evaluates founders the same way: not on the pitch, but on whether they have built something real. At Vector, he is the bridge between the business logic that experienced investors understand and the technical founders who are creating the next decade of value.",
    email: 'Edward@vectorfund.io',
    photo: '/edward-fleming.JPEG'
  },
  {
    name: 'Joseph Visconti',
    role: 'Chief Technology Officer',
    bio: "Joseph leads technical evaluation and go-to-market strategy at Vector Fund. He built Delilah, an AI-powered civic technology platform, and led AI deployment initiatives within the Florida Governor's Executive Office. He holds graduate-level certification in applied generative AI from MIT. At Vector, he evaluates the technical depth of every company we consider and helps founders translate their architecture into a story the market can buy.",
    email: 'Joseph@vectorfund.io',
    photo: '/Joseph.JPEG'
  }
]

export default function Contact() {
  return (
    <section className="contact page-section">
      <div className="section-content">

        <h2 className="section-title">Team</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-member">
              {member.photo && (
                <div className="team-member-photo">
                  <img src={member.photo} alt={member.name} />
                </div>
              )}
              <div className="team-member-info">
                <h3>{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <p className="team-member-bio">{member.bio}</p>
                <a href={`mailto:${member.email}`} className="team-member-email">{member.email}</a>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-divider" />

        <h2 className="section-title">Get in Touch</h2>

        <div className="contact-split">
          <div className="contact-path">
            <span className="contact-path-label">For Investors</span>
            <h3 className="contact-path-heading">Access the AI generation</h3>
            <p className="contact-path-body">
              You&apos;ve built wealth through experience. You understand business fundamentals,
              risk management, and what separates real companies from good stories. What you
              need is a trusted partner who has already mapped this new terrain.
            </p>
            <ul className="contact-path-checklist">
              <li>We share deal memos with qualified investors</li>
              <li>Our diligence criteria are documented and consistent</li>
              <li>LP terms and minimum check sizes available on request</li>
            </ul>
            <a href="mailto:investors@vectorfund.io" className="contact-path-cta">
              investors@vectorfund.io →
            </a>
          </div>

          <div className="contact-path">
            <span className="contact-path-label">For Founders</span>
            <h3 className="contact-path-heading">Get the infrastructure, not just the check</h3>
            <p className="contact-path-body">
              We respond to every founder who reaches out. Send us what you&apos;re building
              and where it is today. A working prototype is worth more than a 40-slide deck.
              We move fast and we tell you where you stand.
            </p>
            <ul className="contact-path-checklist">
              <li>Technical founders at pre-seed stage</li>
              <li>Working prototype preferred, deck optional</li>
              <li>Response within 5 business days, term sheet in two weeks</li>
            </ul>
            <a href="mailto:founders@vectorfund.io" className="contact-path-cta">
              founders@vectorfund.io →
            </a>
          </div>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.85rem', letterSpacing: '0.06em', textAlign: 'center', marginTop: '1rem' }}>
          For everything else: <a href="mailto:hello@vectorfund.io" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>hello@vectorfund.io</a>
        </p>

      </div>
    </section>
  )
}
