import { useEffect, useState } from 'react';
import '../css/Navbar.css';

const Navbar = ({ toggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);

    if (toggleMenu) {
      toggleMenu();
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">

        {/* Logo */}
        <a href="#top" className="navbar-logo" onClick={closeMenu}>
          <img
            src={require('../assets/img/logo (2).png')}
            alt="Deepika Sewwandi Logo"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className={`navbar-links ${menuOpen ? 'mobile-open' : ''}`}>
          <li>
            <a href="#top" className="active" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#aboutme" onClick={closeMenu}>
              About Me
            </a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="navbar-actions">

          {/* Download CV */}
          <a
            href="/assets/Deepika Sewwandi CV.pdf"
            download="Deepika Sewwandi CV.pdf"
            className="cv-button"
          >
            <span>Download CV</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={handleMenuToggle}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;