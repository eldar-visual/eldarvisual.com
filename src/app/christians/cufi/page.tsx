import React from 'react';
import styles from './Hero.module.css';

// 1. החסימה הקריטית ל-SEO - חובה כדי לא לפגוע בדירוג האתר שלך!
export const metadata = {
  title: 'CUFI - Custom Concept | Your Agency Name',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

// 2. קומפוננטת העמוד עם התוכן שלך
export default function CufiPage() {
  return (
    <section className={styles.heroWrapper}>
      {/* Overlay לשליטה על קריאות הטקסט מעל התמונה */}
      <div className={styles.overlay}></div>
      
      <header className={styles.header}>
        <div className={styles.logo}>CUFI</div>
        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#impact">Our Impact</a>
          <a href="#events">Events</a>
        </nav>
        <button className={styles.navDonate}>Donate Now</button>
      </header>

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>Official Operation Update</span>
          <h1 className={styles.title}>
            Pray for Our Troops. <br />
            <span className={styles.highlight}>Stand With Our Allies.</span>
          </h1>
          <p className={styles.description}>
            As the largest pro-Israel organization in the U.S., we empower millions to speak 
            and act with one voice. Join us in defending Israel and the Jewish people.
          </p>
          <div className={styles.ctaGroup}>
            <button className={styles.primaryBtn}>Become a Member</button>
            <button className={styles.secondaryBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Watch Latest Updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}