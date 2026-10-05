import React from 'react';
import { Clock, ShieldAlert, Smartphone } from 'lucide-react';
import styles from './problem.module.css';
import type { Dictionary } from '@/getDictionary';

export default function ProblemSection({ dict }: { dict: Dictionary['clinics']['problem'] }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* צד ימין: טקסט וכאבים */}
        <div className={styles.textSide}>
          <span className={styles.label}>{dict.label}</span>
          <h2 className={styles.title}>
            {dict.title} <span className={styles.highlight}>{dict.highlight}</span>
          </h2>
          <p className={styles.description}>
            {dict.description}
          </p>

          <div className={styles.painPoints}>
            <div className={styles.point}>
              <div className={styles.iconWrap}><Clock size={22} /></div>
              <div className={styles.pointContent}>
                <h3>{dict.points[0].title}</h3>
                <p>{dict.points[0].description}</p>
              </div>
            </div>

            <div className={styles.point}>
              <div className={styles.iconWrap}><ShieldAlert size={22} /></div>
              <div className={styles.pointContent}>
                <h3>{dict.points[1].title}</h3>
                <p>{dict.points[1].description}</p>
              </div>
            </div>

            <div className={styles.point}>
              <div className={styles.iconWrap}><Smartphone size={22} /></div>
              <div className={styles.pointContent}>
                <h3>{dict.points[2].title}</h3>
                <p>{dict.points[2].description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* צד שמאל: המחשה ויזואלית (מוקאפ אזהרה) */}
        <div className={styles.visualSide}>
          <div className={styles.abstractCard}>
            <div className={styles.cardHeader}>
              <div className={styles.dots}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
              <div className={styles.urlBar}>analytics / bounce-rate</div>
            </div>
            
            <div className={styles.cardBody}>
              <div className={styles.alertBox}>
                <span className={styles.alertNumber}>53%</span>
                <span className={styles.alertText}>{dict.alertText}</span>
              </div>
              
              <div className={styles.graphSkeleton}>
                <div className={styles.bar} style={{ height: '100%', opacity: 0.2 }}></div>
                <div className={styles.bar} style={{ height: '80%', opacity: 0.4 }}></div>
                <div className={styles.bar} style={{ height: '40%', opacity: 0.7 }}></div>
                <div className={styles.bar} style={{ height: '15%', backgroundColor: '#EF4444' }}></div>
              </div>
              <p className={styles.graphLabel}>{dict.graphLabel}</p>
            </div>
          </div>
          
          {/* אלמנט עיצובי ברקע */}
          <div className={styles.bgGlow}></div>
        </div>

      </div>
    </section>
  );
}
