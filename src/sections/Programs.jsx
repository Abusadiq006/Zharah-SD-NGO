const Programs = () => {
  return (
    <section className="section" id="programs">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Core Programs</h2>
          <p className="section-copy">
            Your current content points to four main intervention areas. I kept those and fixed
            the broken layout so each one appears as its own program card.
          </p>
        </div>

        <div className="program-grid">
          <article className="program-card">
            <h3>Education</h3>
            <p>Providing access to learning opportunities, mentorship, and confidence-building for young women.</p>
          </article>

          <article className="program-card">
            <h3>Hygiene</h3>
            <p>Promoting cleanliness, menstrual health awareness, and personal wellness through community education.</p>
          </article>

          <article className="program-card">
            <h3>Healthcare</h3>
            <p>Supporting access to basic healthcare information, outreach, and referral-based assistance where needed.</p>
          </article>

          <article className="program-card">
            <h3>Skill Development</h3>
            <p>Equipping youth with practical, income-generating, and self-reliance skills that create lasting change.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Programs
