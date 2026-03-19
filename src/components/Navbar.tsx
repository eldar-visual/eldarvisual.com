"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; 
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ניהול גלילה לשינוי עיצוב הנאב-בר
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // חסימת גלילה של הדף כשהתפריט פתוח (חוויית פרימיום)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 768 && isOpen) {
      setIsOpen(false);
    }
  };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, [isOpen]);

  return (
    <>
      {/* שכבת טשטוש לרקע כשהתפריט פתוח */}
      <div 
        className={`menu-overlay ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(false)} 
      />

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          
          {/* Logo */}
          <a href="#hero" className="navbar-logo" onClick={() => setIsOpen(false)}>
            <div className="logo-image-wrapper">
               <Image src="/logob.webp" alt="EV Logo" width={32} height={32} className="logo-img" />
            </div>
            <div className="logo-text">
              <span className="brand-name">EldarVisual</span>
              <span className="brand-tag">WEB STUDIO</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <a href="#services" className="nav-link">Services</a>
            <a href="#process" className="nav-link">Process</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
          </div>

          {/* Desktop CTA */}
          <div className="navbar-cta">
            <a href="#contact" className="btn-talk">Let's Talk</a>
          </div>

          {/* Mobile Toggle - נמצא כעת בתוך ה-container ליישור מושלם */}
          <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
          </div>

        </div>

        {/* Mobile Menu Content */}
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          <a href="#services" className="mobile-link" onClick={() => setIsOpen(false)}>
            Services
          </a>
          <a href="#process" className="mobile-link" onClick={() => setIsOpen(false)}>
            Process
          </a>
          <a href="#portfolio" className="mobile-link" onClick={() => setIsOpen(false)}>
            Portfolio
          </a>
          <a href="#contact" className="mobile-link highlight" onClick={() => setIsOpen(false)}>
            Let's Talk
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;