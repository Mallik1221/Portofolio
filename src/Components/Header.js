import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faLinkedin, faSquareGithub, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      closeMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'portfolio', 'contact'];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { top } = element.getBoundingClientRect();
          if (top >= 0 && top <= window.innerHeight / 3) {
            setActiveSection(section);
          }
        }
      });
    };

    document.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <h1 className="sitename">Harsha</h1>
        </Link>
        <nav className={`navmenu ${menuOpen ? 'open' : ''}`}>
          <ul>
            {['home', 'about', 'resume', 'portfolio', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={activeSection === section ? 'active' : ''}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button className="mobile-nav-toggle d-xl-none" onClick={toggleMenu}>
          <i className={`bi ${menuOpen ? 'bi-x' : 'bi-list'}`}></i>
        </button>
        <div className="header-social-links">
          <a href="https://x.com/" className="twitter"><i className="bi bi-twitter"></i></a>
          <a href="https://www.facebook.com/harshavivek.nani?mibextid=ZbWKwL" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="https://github.com/Harsha-vivek03" className="github"><i class="fa-brands fa-github"></i></a>
          
          <a href="https://www.linkedin.com/in/harsha-vivek-a47309243" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
