import React from 'react';
import styles from './Hero.module.css';
import { getDictionary } from '@/getDictionary';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang === 'he' ? 'he' : 'en');
  return {
    ...dict.cufi.metadata,
    openGraph: {
      ...dict.cufi.metadata,
      url: `https://eldarvisual.com/${lang}/christians/cufi`,
    },
    robots: {
      index: false,
      follow: false,
      nocache: true,
    },
  };
}

// 2. קומפוננטת העמוד עם התוכן שלך
export default async function CufiPage({ params }: PageProps) {
  const { lang } = await params;
  const { cufi: dict } = await getDictionary(lang === 'he' ? 'he' : 'en');
  return (
    <section className={styles.heroWrapper}>
      {/* Overlay לשליטה על קריאות הטקסט מעל התמונה */}
      <div className={styles.overlay}></div>
      
      <header className={styles.header}>
        <div className={styles.logo}>CUFI</div>
        <nav className={styles.nav}>
          <a href="#about">{dict.nav.about}</a>
          <a href="#impact">{dict.nav.impact}</a>
          <a href="#events">{dict.nav.events}</a>
        </nav>
        <button className={styles.navDonate}>{dict.nav.donate}</button>
      </header>

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>{dict.hero.badge}</span>
          <h1 className={styles.title}>
            {dict.hero.title} <br />
            <span className={styles.highlight}>{dict.hero.highlight}</span>
          </h1>
          <p className={styles.description}>
            {dict.hero.description}
          </p>
          <div className={styles.ctaGroup}>
            <button className={styles.primaryBtn}>{dict.hero.primaryCta}</button>
            <button className={styles.secondaryBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              {dict.hero.secondaryCta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
