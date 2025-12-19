function Contact() {
  const team = [
    {
      name: 'Team Member 1',
      role: 'Managing Partner',
      bio: 'Brief bio describing background and expertise.',
      email: 'name@vectorfund.io'
    },
    {
      name: 'Team Member 2',
      role: 'Partner',
      bio: 'Brief bio describing background and expertise.',
      email: 'name@vectorfund.io'
    }
  ]

  return (
    <section className="contact page-section">
      <div className="section-content">
        <h2 className="section-title">Team</h2>

        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-member">
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
