import React from 'react';
import Image from 'next/image';
import { Linkedin, Globe } from 'lucide-react';
import styles from './footerMedical.module.css';

export default function FooterMedical(){
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* ימין: לוגו וזהות הסטודיו המרכזית */}
        <div className={styles.brandSide}>
          <div className={styles.logoGroup}>
            <div className={styles.logoWrapper}>
              <Image 
                src="/EV-Logo.png" 
                alt="EldarVisual לוגו" 
                width={36} 
                height={36} 
                className={styles.logoImg}
                priority
              />
            </div>
            <div className={styles.textGroup}>
              <span className={styles.brandName}>EldarVisual</span>
              <span className={styles.brandTag}>סטודיו לפיתוח ואפיון אתרים</span>
            </div>
          </div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} EldarVisual. כל הזכויות שמורות.
          </p>
        </div>

        {/* שמאל: רשתות וקרדיט מקצועי */}
        <div className={styles.linksSide}>
          <div className={styles.socials}>
            <a 
              href="https://www.linkedin.com/in/aviram-eldar/" 
              className={styles.socialLink} 
              aria-label="פרופיל לינקדאין" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://eldarvisual.com" 
              className={styles.socialLink} 
              aria-label="אתר הסטודיו הראשי"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Globe size={20} />
            </a>
          </div>
          <span className={styles.disclaimer}>אפיון, עיצוב ופיתוח בקוד נקי</span>
        </div>

      </div>
    </footer>
  );
}