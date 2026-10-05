import React from 'react';
import { ShieldCheck, Zap, Activity, Star } from 'lucide-react';
import styles from './trustBar.module.css';
import type { Dictionary } from '@/getDictionary';

export default function TrustBar({ dict }: { dict: Dictionary['clinics']['trustBar'] }) {
  return (
    <section className={styles.trustSection}>
      <p className={styles.trustTitle}>
        {dict.title}
      </p>
      
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitItem}>
          <Zap size={20} className={styles.icon} />
          <span>{dict.benefits[0]}</span>
        </div>
        
        <span className={styles.divider}>•</span>
        
        <div className={styles.benefitItem}>
          <ShieldCheck size={20} className={styles.icon} />
          <span>{dict.benefits[1]}</span>
        </div>
        
        <span className={styles.divider}>•</span>
        
        <div className={styles.benefitItem}>
          <Activity size={20} className={styles.icon} />
          <span>{dict.benefits[2]}</span>
        </div>
        
        <span className={styles.divider}>•</span>
        
        <div className={styles.benefitItem}>
          <Star size={20} className={styles.icon} />
          <span>{dict.benefits[3]}</span>
        </div>
      </div>
    </section>
  );
}
