import React from 'react';
import './Footer.module.css';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        <div className="footer-content" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="footer-copyright">
            © 2026 EldarVisual Web Studio. All rights reserved.
          </div>

          <div className="concept-disclaimer" style={{ fontSize: '11px', opacity: 0.5, marginTop: '4px', color: '#94A3B8' }}>
            Designed and developed with passion by Eldar Visual.
          </div>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/eldar-visual" className="social-link" aria-label="Github" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          
          <a href="https://www.linkedin.com/in/aviram-eldar/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}