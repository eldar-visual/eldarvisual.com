import React from 'react';
import { ShieldCheck, Zap, Activity, Star } from 'lucide-react';
import styles from './trustBar.module.css';

export default function TrustBar() {
  return (
    <section className={styles.trustSection}>
      <p className={styles.trustTitle}>
        הסטנדרט הטכנולוגי החדש למרפאות וקליניקות בוטיק
      </p>
      
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitItem}>
          <Zap size={20} className={styles.icon} />
          <span>ביצועי קצה מהירים</span>
        </div>
        
        <span className={styles.divider}>•</span>
        
        <div className={styles.benefitItem}>
          <ShieldCheck size={20} className={styles.icon} />
          <span>אבטחה והגנת פרטיות</span>
        </div>
        
        <span className={styles.divider}>•</span>
        
        <div className={styles.benefitItem}>
          <Activity size={20} className={styles.icon} />
          <span>אופטימיזציה ליומן</span>
        </div>
        
        <span className={styles.divider}>•</span>
        
        <div className={styles.benefitItem}>
          <Star size={20} className={styles.icon} />
          <span>חוויית פרימיום (UX)</span>
        </div>
      </div>
    </section>
  );
}