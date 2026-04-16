const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Community-led impact</span>
          <h1 className="hero-title">Empowering Young Women for a Better Future</h1>
          <p className="hero-copy">
            Zharah SD Initiative Foundation is building a mission-driven platform for education,
            hygiene awareness, healthcare support, and practical skill development for young
            women and youth.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href="#donate">
              Donate Now
            </a>
            <a className="button button--secondary" href="#about">
              Learn More
            </a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Impact priorities">
          <h2 className="hero-card__title">What this initiative focuses on</h2>
          <ul className="hero-card__list">
            <li>Improving access to education and opportunity for girls and young women.</li>
            <li>Promoting healthy hygiene practices and personal wellness awareness.</li>
            <li>Connecting communities to healthcare support and practical life skills.</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default Hero
