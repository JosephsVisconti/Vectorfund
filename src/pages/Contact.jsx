function Contact() {
  const team = [
    {
      name: 'Edward Fleming',
      role: 'Co-Founder',
      bio: 'Edward is a Co-Founder of Vector Fund, an AI-first venture capital firm focused on identifying early technical talent and converting conviction into equity that reaches liquidity. At Vector, he works at the intersection of AI innovation, company formation, and strategic execution to assist founders move from raw ideas to scalable, investable businesses. Prior to Vector Fund, Edward worked in commercial real estate brokerage and currently serves as Chief Operating Officer at Alero Payments, a USAG-backed payments company. Across industries, his work centers on building systems, aligning incentives, and scaling businesses responsibly.',
      email: 'edward@vectorfund.io',
      photo: '/edward-fleming.jpg'
    }
  ]

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

        <div className="contact-divider"></div>

        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-text">
          If you're building something that matters, we want to hear from you.
          We respond to every founder who reaches out.
        </p>
        <p className="contact-email">
          <a href="mailto:hello@vectorfund.io">hello@vectorfund.io</a>
        </p>
        <div className="contact-note">
          <p>We're looking for:</p>
          <ul>
            <li>Technical founders building AI-native products</li>
            <li>Teams at pre-seed stage with working prototypes</li>
            <li>Builders with conviction and clarity of vision</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
