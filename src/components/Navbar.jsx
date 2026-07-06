import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
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
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-text">GGGIC</span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.name} className="nav-item">
              <button 
                className={`nav-link ${currentPage === link.page ? 'active' : ''}`}
                onClick={() => handleNavigation(link.page)}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="navbar-cta-btn">
          Get Started
        </button>

        {/* Mobile Menu Toggle */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? (
            <X className="hamburger-icon" />
          ) : (
            <Menu className="hamburger-icon" />
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-menu">
            {navLinks.map((link) => (
              <li key={link.name} className="mobile-nav-item">
                <button 
                  className={`mobile-nav-link ${currentPage === link.page ? 'active' : ''}`}
                  onClick={() => handleNavigation(link.page)}
                >
                  {link.name}
                </button>
              </li>
            ))}
            <li className="mobile-nav-item">
              <button className="mobile-cta-btn">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
