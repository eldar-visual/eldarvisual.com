"use client"; 
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './heroMedical.module.css';

export interface HeroMedicalProps {
  dict?: any; 
}

export default function HeroMedical({ dict }: HeroMedicalProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (dict?.calendlyLink) {
      window.open(dict.calendlyLink, '_blank');
    }
  };

  return (
    <section id="hero" className={styles.heroSection}>
      
      {/* רקע צבעים עדינים (טורקיז וכחול) */}
      <div className={styles.heroBgBlobs}>
        <div className={styles.blobBlue} />
        <div className={styles.blobTeal} />
      </div>

      <div className={styles.heroContent}>
        
        {/* תמונה למובייל */}
        <div className={styles.mobileImageContainer}>
            <Image 
                src="/floatForWeb.webp" 
                alt="Clinic Web Design" 
                width={600} 
                height={400}
                priority
            />
        </div>
      
        {/* צד הטקסט */}
        <div className={styles.heroTextSide}>
          <h1 className={styles.heroTitle}>
            {dict?.title || "מרפאות אסתטיקה ושיניים:"}
            <br />
            <span className={styles.heroTitleGradient}>{dict?.gradient || "האתר שלכם מפסיד לידים?"}</span>
          </h1> 
          
          <div className={styles.heroSubtitleGroup}>
            <p className={styles.heroSubtitle}>
              {dict?.subtitle || "מטופלים מצפים לחוויית פרימיום. אנו בונים אתרים נקיים ומהירים שממירים מבקרים למטופלים ביומן."}
            </p>
          </div>

        <div className={styles.heroActions}>
  {/* מחזירים את handleCtaClick שמטפלת בלינק של קלנדלי */}
  <button onClick={handleCtaClick} className={styles.btnPrimary}>
    {dict?.cta || "קבל ביקורת אתר חינם"}
  </button>
  
  {dict?.tags && (
    <p className={styles.trustLine}>
      {dict.tags}
    </p>
  )}
</div>
</div>
       

        {/* Browser Mockup לדסקטופ */}
        <div className={styles.heroVisualSide}>
           <div className={styles.browserMockup}>
            <div className={styles.browserWindow}>
                <div className={styles.browserHeader}>
                  <div className={styles.browserDots}>
                    <div className={styles.dot} />
                    <div className={styles.dot} />
                    <div className={styles.dot} />
                  </div>
                  <div className={styles.browserAddressBar} dir="ltr">your-clinic.com</div>
                </div>
               {/* כאן הכנסנו את התמונה במקום הטקסט הזמני */}
               <div className={styles.browserContentViewport} style={{ position: 'relative', overflow: 'hidden' }}>
                 <Image 
                   src="/clinic.png" 
                   alt="עיצוב אתר פרימיום למרפאה"
                   fill /* גורם לתמונה למלא את האזור */
                   style={{ objectFit: 'cover', objectPosition: 'top' }} /* שומר על פרופורציות ומראה את החלק העליון */
                   priority
                 />
               </div>
              </div>
          </div>
        </div>

      </div>
    </section>
  );
}