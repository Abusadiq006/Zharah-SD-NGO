const About = () => {
  return (
    <section className="section section--soft" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Who You Are Building For</h2>
          <p className="section-copy">
            This project is shaping into a public-facing NGO website for Zharah SD Initiative
            Foundation. Its purpose is to introduce the mission, explain the key focus areas,
            and create clear pathways for support and community connection.
          </p>
        </div>

        <div className="about-grid">
          <article className="info-card">
            <h3>Mission</h3>
            <p>
              Support young women and youth with programs that improve dignity, health,
              education, and long-term economic opportunity.
            </p>
          </article>

          <article className="info-card">
            <h3>Vision</h3>
            <p>
              Build communities where empowered women can lead, thrive, and multiply impact
              across families and future generations.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
