const Hero = ()=>{
  return(
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Community-led impact</span>
          <h1 className="hero-title">Empowering Young Women for a Better Future</h1>
          <p className="hero-copy">
            Zharah SD Initiative Foundation is building a mission-driven platform for education,
            hygiene awareness, healthcare support, and practical skill development.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href="#donate">Donate Now</a>
            <a className="button button--secondary" href="#about">Learn More</a>
          </div>
        </div>

        <aside className="hero-card">
          <h2 className="hero-card__title">What this initiative focuses on</h2>
          <ul className="hero-card__list">
            <li>Education for young women</li>
            <li>Hygiene awareness</li>
            <li>Healthcare support</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default Hero