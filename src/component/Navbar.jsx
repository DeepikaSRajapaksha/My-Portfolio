import { useEffect, useState } from 'react';
import '../css/Navbar.css';

const Navbar = ({ toggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['top', 'aboutme', 'skills', 'projects', 'contact'];

      let currentSection = 'top';

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop - 150;

          if (window.scrollY >= sectionTop) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

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
        <a
          href="#top"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img
            src={require('../assets/img/logo (2).png')}
            alt="Deepika Sewwandi Logo"
          />
        </a>

        {/* Navigation */}
        <ul className={`navbar-links ${menuOpen ? 'mobile-open' : ''}`}>

          <li>
            <a
              href="#top"
              className={activeSection === 'top' ? 'active' : ''}
              onClick={closeMenu}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#aboutme"
              className={activeSection === 'aboutme' ? 'active' : ''}
              onClick={closeMenu}
            >
              About Me
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={closeMenu}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={closeMenu}
            >
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

          {/* Mobile Menu */}
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