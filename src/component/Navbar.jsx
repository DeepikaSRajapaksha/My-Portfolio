import { useEffect, useState } from 'react';
import '../css/Navbar.css';

const Navbar = ({ toggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">

        {/* Logo */}
        <a href="#top" className="navbar-logo">
          <img
            src={require('../assets/img/logo (2).png')}
            alt="Deepika Sewwandi Logo"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="navbar-links">
          <li>
            <a href="#top" className="active">
              Home
            </a>
          </li>

          <li>
            <a href="#aboutme">
              About Me
            </a>
          </li>

          <li>
            <a href="#skills">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact">
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

          {/* Mobile Menu
          <button
            className="mobile-menu-button"
            onClick={toggleMenu}
            aria-label="Open navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button> */}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;