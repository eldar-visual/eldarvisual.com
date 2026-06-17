import React from 'react';
import { Clock, ShieldAlert, Smartphone } from 'lucide-react';
import styles from './problem.module.css';

export default function ProblemSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* צד ימין: טקסט וכאבים */}
        <div className={styles.textSide}>
          <span className={styles.label}>הכאב המרכזי</span>
          <h2 className={styles.title}>
            אתה משלם על קליקים, אבל <span className={styles.highlight}>מאבד מטופלים בגלל האתר.</span>
          </h2>
          <p className={styles.description}>
            עיצוב גנרי וזמני טעינה איטיים גורמים למטופלי פרימיום לבחור במתחרים, גם כשהקליניקה שלך מקצועית יותר.
          </p>

          <div className={styles.painPoints}>
            <div className={styles.point}>
              <div className={styles.iconWrap}><Clock size={22} /></div>
              <div className={styles.pointContent}>
                <h3>נוטשים בגלל איטיות</h3>
                <p>53% מהגולשים עוזבים במובייל אם האתר נטען מעל 3 שניות. אתרי תבנית כבדים שורפים לך את תקציב הממומן.</p>
              </div>
            </div>

            <div className={styles.point}>
              <div className={styles.iconWrap}><ShieldAlert size={22} /></div>
              <div className={styles.pointContent}>
                <h3>פגיעה בסמכות המקצועית</h3>
                <p>לקוח המחפש טיפולי אסתטיקה ורפואת פרימיום, מצפה לראות אתר אסתטי באיכות פרימיום. אתר תבניתי שנראה כמו של כולם פשוט לא מצדיק את התמחור שלך.</p>
              </div>
            </div>

            <div className={styles.point}>
              <div className={styles.iconWrap}><Smartphone size={22} /></div>
              <div className={styles.pointContent}>
                <h3>מסע משתמש שבור</h3>
                <p>טפסים מסורבלים וכפתורים שקשה ללחוץ עליהם במובייל משאירים את יומן הפגישות שלך ריק.</p>
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
                <span className={styles.alertText}>שיעור נטישה עקב איטיות</span>
              </div>
              
              <div className={styles.graphSkeleton}>
                <div className={styles.bar} style={{ height: '100%', opacity: 0.2 }}></div>
                <div className={styles.bar} style={{ height: '80%', opacity: 0.4 }}></div>
                <div className={styles.bar} style={{ height: '40%', opacity: 0.7 }}></div>
                <div className={styles.bar} style={{ height: '15%', backgroundColor: '#EF4444' }}></div>
              </div>
              <p className={styles.graphLabel}>צניחה בהמרות במובייל (שניות 1-4)</p>
            </div>
          </div>
          
          {/* אלמנט עיצובי ברקע */}
          <div className={styles.bgGlow}></div>
        </div>

      </div>
    </section>
  );
}