import React from 'react';
import './Footer.css';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* צד שמאל: טקסט זכויות יוצרים */}
        <div className="footer-copyright">
          © 2026 EldarVisual Web Studio. All rights reserved.
        </div>

        {/* צד ימין: אייקונים */}
        <div className="footer-socials">
          <a href="https://github.com/avirameldar" className="social-link" aria-label="Github">
            <Github size={20} />
          </a>
          
          <a href="https://www.linkedin.com/in/aviram-eldar/" className="social-link" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>

          {/* הסתרנו זמנית את אינסטגרם ופייסבוק.
             כשתרצה להחזיר אותם, פשוט מחק את הסוגריים המסולסלים והכוכביות שמקיפים אותם.
          */}

          {/* <a href="#" className="social-link" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#" className="social-link" aria-label="Facebook">
            <Facebook size={20} />
          </a> 
          */}

        </div>

      </div>
    </footer>
  );
};

export default Footer;