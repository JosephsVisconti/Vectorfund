function Contact() {
  const team = [
    {
      name: 'Edward Fleming',
      role: 'Co-Founder',
      bio: 'Edward is a Co-Founder of Vector Fund, where he focuses on market strategy, scaling operations, and evaluating whether founders are solving real problems with genuine market traction. He leverages his experience in marketing within the digital age through influencer networks, social media campaigns, and innovative processes to acquire users through organic marketing strategies. At Vector, he partners with Joseph to assess ideas that will actually work in the marketplace, bringing a strategic and market-focused lens to early-stage investing. Edward currently serves as Chief Operating Officer at Alero Payments, where he oversees operations, merchant onboarding, and payment infrastructure, ensuring merchants transition smoothly while gaining better rates and support. Prior to Alero, Edward worked in commercial real estate brokerage at Matthews Real Estate Investment Services, specializing in single-tenant net lease sales. He holds a Bachelor\'s degree from Southern Methodist University.',
      email: 'Edward@vectorfund.io',
      photo: '/edward-fleming.JPEG'
    },
    {
      name: 'Joseph Visconti',
      role: 'Co-Founder',
      bio: 'Joseph is a Co-Founder of Vector Fund, where he focuses on technical implementation, software evaluation, and go-to-market strategy for founders solving real problems. He assesses software strengths and weaknesses, working with Edward to identify builders creating solutions that address genuine market needs. Joseph is the Founder and software engineer behind Delilah, a legislative media and civic-technology iOS application that leverages AI to increase transparency, accessibility, and public understanding of the legislative process. Joseph previously led AI initiatives within the Florida Department of Government Efficiency, within the Executive Office of the Governor, State of Florida, where he worked alongside software engineers and senior leadership to deploy AI-driven products aimed at improving government efficiency and transparency. Prior to joining Florida DOGE, Joseph served as a Florida Gubernatorial Fellow at FloridaCommerce, where he conducted research on economic incentives and proposed Florida\'s first AI-specific economic development office, earning the Jeb Bush Award for Outstanding Achievement. He holds a double major in Economics and History from Florida State University and completed a professional education at MIT in applied generative AI.',
      email: 'Joseph@vectorfund.io',
      photo: '/Joseph.JPEG'
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
