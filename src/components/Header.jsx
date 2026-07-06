import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Contact Us', page: 'contact' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src="/Images/logo.png" alt="Logo" className="logo-image" />
        </div>

        <ul className="header-menu">
          {navLinks.map((link) => (
            <li key={link.name} className="header-item">
              <button
                className={`header-link ${currentPage === link.page ? 'active' : ''}`}
                onClick={() => handleNavigation(link.page)}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        <button className="header-cta-btn">Get Started</button>

        <button className="header-hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
          {isOpen ? <X className="header-hamburger-icon" /> : <Menu className="header-hamburger-icon" />}
        </button>
      </div>

      {isOpen && (
        <div className="header-mobile-menu">
          <ul className="header-mobile-nav">
            {navLinks.map((link) => (
              <li key={link.name} className="header-mobile-item">
                <button
                  className={`header-mobile-link ${currentPage === link.page ? 'active' : ''}`}
                  onClick={() => handleNavigation(link.page)}
                >
                  {link.name}
                </button>
              </li>
            ))}
            <li className="header-mobile-item">
              <button className="header-mobile-cta-btn">Get Started</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
