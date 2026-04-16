const Navbar = () => {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-brand" href="#home">
          <span className="site-brand__name">Zharah SD Initiative Foundation</span>
          <span className="site-brand__tagline">Empowering young women for a better future</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#contact">Contact</a>
          <a href="#donate">Donate</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
