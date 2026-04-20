import logo from '../assets/logo.jpeg'

const Navbar = () => {
  return (
    <header className="site-header">
      <div className="container site-header__inner">

        {/* LEFT: Logo + Brand */}
        <a className="site-brand" href="#home">
          <img src={logo} alt="Zharah SD Logo" className="site-logo" />

          <div className="site-brand__text">
            <span className="site-brand__name">
            </span>
            <span className="site-brand__tagline">
              Empowering young women for a better future
            </span>
          </div>
        </a>

        {/* RIGHT: Navigation */}
        <nav className="site-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#contact">Contact</a>
          <a href="#donate" className="nav-cta">Donate</a>
        </nav>

      </div>
    </header>
  )
}

export default Navbar