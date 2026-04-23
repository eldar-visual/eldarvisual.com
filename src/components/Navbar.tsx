"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; 
import { usePathname } from 'next/navigation'; // מזהה באיזו שפה אנחנו
import './Navbar.css';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  dict: {
    services: string;
    process: string;
    portfolio: string;
    cta: string;
  };
}

const Navbar = ({ dict }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); 
  
  // זיהוי השפה הנוכחית להחלפה
  const isHe = pathname?.startsWith('/he');
  const targetLang = isHe ? '/en' : '/he';
  const langLabel = isHe ? 'EN' : 'עב';

  // 1. ניהול גלילה לשינוי עיצוב הנאב-בר
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. חסימת גלילה של הדף כשהתפריט פתוח (הקוד המקורי והחשוב שלך!)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // 3. סגירת התפריט אוטומטית במעבר לדסקטופ (הקוד המקורי שלך!)
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
      <div 
        className={`menu-overlay ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(false)} 
      />

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          
          <a href="#hero" className="navbar-logo" onClick={() => setIsOpen(false)}>
            <div className="logo-image-wrapper">
               <Image src="/logob.webp" alt="EV Logo" width={32} height={32} className="logo-img" />
            </div>
            <div className="logo-text">
              <span className="brand-name">EldarVisual</span>
              <span className="brand-tag">WEB STUDIO</span>
            </div>
          </a>

          <div className="desktop-menu">
            <a href="#services" className="nav-link">{dict.services}</a>
            <a href="#process" className="nav-link">{dict.process}</a>
            <a href="#portfolio" className="nav-link">{dict.portfolio}</a>
          </div>

       {/* הוסר ה-style הידני שעשה לנו בעיות כיוונים! */}
          <div className="navbar-actions">
            
            {/* כפתור השפה לדסקטופ */}
            <a href={targetLang} className="lang-switch-btn hidden-mobile" title="Change Language">
               <Globe size={18} />
               <span>{langLabel}</span>
            </a>

            <div className="navbar-cta">
              <a href="#contact" className="btn-talk">{dict.cta}</a>
            </div>
          </div>

          <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
          </div>

        </div>

        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          {/* כפתור השפה למובייל */}
          <a href={targetLang} className="lang-switch-btn-mobile" onClick={() => setIsOpen(false)}>
              <Globe size={20} />
              <span>Switch to {isHe ? 'English' : 'Hebrew'}</span>
          </a>

          <a href="#services" className="mobile-link" onClick={() => setIsOpen(false)}>
            {dict.services}
          </a>
          <a href="#process" className="mobile-link" onClick={() => setIsOpen(false)}>
            {dict.process}
          </a>
          <a href="#portfolio" className="mobile-link" onClick={() => setIsOpen(false)}>
            {dict.portfolio}
          </a>
          <a href="#contact" className="mobile-link highlight" onClick={() => setIsOpen(false)}>
            {dict.cta}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;