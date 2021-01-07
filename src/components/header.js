import React, { useEffect, useState } from "react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50)
    })
  }, [])
  return (
    <header className={`header ${isScrolled === true ? "header--sticky" : ""}`}>
      <nav
        className={`header__navigation ${isMenuOpen === true ? "opened" : ""}`}
      >
        <ul>
          <li>
            <a href="#o-mnie" onClick={e => setIsMenuOpen(false)}>
              <span className="menu-item menu-item--base">
                <span className="number">01.</span> o mnie
              </span>
              <span className="menu-item menu-item--clone">
                <span className="number">01.</span> o mnie
              </span>
            </a>
          </li>
          <li>
            <a href="#umiejetnosci" onClick={e => setIsMenuOpen(false)}>
              <span className="menu-item menu-item--base">
                <span className="number">02.</span> umiejętności
              </span>
              <span className="menu-item menu-item--clone">
                <span className="number">02.</span> umiejętności
              </span>
            </a>
          </li>
          <li>
            <a href="#doswiadczenie" onClick={e => setIsMenuOpen(false)}>
              <span className="menu-item menu-item--base">
                <span className="number">03.</span> doświadczenie
              </span>
              <span className="menu-item menu-item--clone">
                <span className="number">03.</span> doświadczenie
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        aria-label="Open menu"
        className={`hamburger hamburger--squeeze mobile-menu__hamburger ${
          isMenuOpen === true ? "is-active" : ""
        }`}
        onClick={e => setIsMenuOpen(!isMenuOpen)}
      >
        {Array(4)
          .fill(null)
          .map((item, index) => (
            <span key={index} />
          ))}
      </button>
    </header>
  )
}

export default Header
