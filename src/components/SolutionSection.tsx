import React from 'react';
import { Palette, Zap, CalendarCheck } from 'lucide-react';
import styles from './solution.module.css';
import Link from 'next/link';

export default function SolutionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <span className={styles.label}>הפתרון של EldarVisual</span>
          <h2 className={styles.title}>
            ארכיטקטורת אינטרנט שבנויה <span className={styles.highlight}>למלא את היומן שלך.</span>
          </h2>
          <p className={styles.subtitle}>
            אנחנו לא משתמשים בתבניות מוכנות. כל קליניקה מקבלת אפיון מדויק, עיצוב פיקסל-פרפקט ופיתוח בקוד נקי על בסיס טכנולוגיות הקצה של הייטק (Next.js).
          </p>
        </div>

        <div className={styles.grid}>
          {/* עמוד תווך 1: עיצוב */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Palette size={28} />
            </div>
            <h3 className={styles.cardTitle}>עיצוב בוטיק פרימיום</h3>
            <p className={styles.cardText}>
              ממשק משתמש (UI) יוקרתי ונקי שמשדר סמכות מקצועית מהשנייה הראשונה. הלקוחות שלך יבינו מיד למה הטיפולים שלך שווים יותר.
            </p>
          </div>

          {/* עמוד תווך 2: מהירות */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Zap size={28} />
            </div>
            <h3 className={styles.cardTitle}>ביצועי קצה (0 זמני טעינה)</h3>
            <p className={styles.cardText}>
              בזכות טכנולוגיית Next.js, האתר שלך ייטען כמעט מיד. אנחנו עוצרים את הנטישה במובייל ומנצלים כל שקל מקמפיין הממומן שלך.
            </p>
          </div>

          {/* עמוד תווך 3: המרות */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <CalendarCheck size={28} />
            </div>
            <h3 className={styles.cardTitle}>אופטימיזציה להזמנת תורים</h3>
            <p className={styles.cardText}>
              מסע משתמש (UX) חכם ומינימליסטי שמנתב את הגולש בצורה חלקה ונטולת חיכוך ישירות ליצירת קשר או לקביעת פגישת ייעוץ.
            </p>
          </div>
        </div>

      </div>
      <div className={styles.ctaWrapper}>
  <p className={styles.ctaText}>
    מוכן לשדרג את הנראות של הקליניקה ולהפסיק לאבד לידים?
  </p>
  <a 
  href="https://calendly.com/aviram-eldarvisual/30min" 
  className={styles.ctaButton}
  target="_blank" 
  rel="noopener noreferrer"
>
    בוא נתחיל בשיחת ייעוץ
  </a>
</div>
    </section>
  );
}