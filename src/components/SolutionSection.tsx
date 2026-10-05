import React from 'react';
import { Palette, Zap, CalendarCheck } from 'lucide-react';
import styles from './solution.module.css';
import Link from 'next/link';
import type { Dictionary } from '@/getDictionary';

export default function SolutionSection({ dict }: { dict: Dictionary['clinics']['solution'] }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <span className={styles.label}>{dict.label}</span>
          <h2 className={styles.title}>
            {dict.title} <span className={styles.highlight}>{dict.highlight}</span>
          </h2>
          <p className={styles.subtitle}>
            {dict.subtitle}
          </p>
        </div>

        <div className={styles.grid}>
          {/* עמוד תווך 1: עיצוב */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Palette size={28} />
            </div>
            <h3 className={styles.cardTitle}>{dict.cards[0].title}</h3>
            <p className={styles.cardText}>
              {dict.cards[0].description}
            </p>
          </div>

          {/* עמוד תווך 2: מהירות */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Zap size={28} />
            </div>
            <h3 className={styles.cardTitle}>{dict.cards[1].title}</h3>
            <p className={styles.cardText}>
              {dict.cards[1].description}
            </p>
          </div>

          {/* עמוד תווך 3: המרות */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <CalendarCheck size={28} />
            </div>
            <h3 className={styles.cardTitle}>{dict.cards[2].title}</h3>
            <p className={styles.cardText}>
              {dict.cards[2].description}
            </p>
          </div>
        </div>

      </div>
      <div className={styles.ctaWrapper}>
  <p className={styles.ctaText}>
    {dict.ctaText}
  </p>
  <a 
  href="https://calendly.com/aviram-eldarvisual/30min" 
  className={styles.ctaButton}
  target="_blank" 
  rel="noopener noreferrer"
>
    {dict.ctaButton}
  </a>
</div>
    </section>
  );
}
