import React from 'react';
import './Footer.css';
import { Facebook, Github, Linkedin } from 'lucide-react';
import type enDict from '@/dictionaries/en.json';

interface FooterProps {
  dict?: Partial<typeof enDict.footer>;
}

export default function Footer({ dict }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        <div className="footer-content" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="footer-copyright">
            {dict?.copyright || "© 2026 EldarVisual Web Studio. All rights reserved."}
          </div>

        </div>

        <div className="footer-socials">
          <a href="https://github.com/eldar-visual" className="social-link" aria-label="Github" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          <a href="https://www.facebook.com/EldarVisual/" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <Facebook size={20} />
          </a>
          <a href="https://www.linkedin.com/in/aviram-eldar/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
