import React from 'react';
import Image from 'next/image';
import styles from './hero.module.css'; // הייבוא הקריטי שהיה חסר

const ScrollContent = () => {
    const scrollToProcess = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById('process');
        if (element) {
             element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
    <>
      {/* ITEM 1 - עם Priority לשיפור ה-LCP בדסקטופ */}
      <div className={`${styles.scrollItem} ${styles.blueHover}`}>
        <div className={styles.itemContent}>
            <div className={styles.imgWrapper}>
              <Image 
                src="/coding.webp" 
                alt="Clean Architecture Code" 
                fill 
                priority // מוריד את ה-LCP של הדסקטופ
                className={`${styles.imgCover} ${styles.grayscaleHover}`} 
                sizes="(max-width: 768px) 100vw, 33vw" 
              />
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.skeletonLine} style={{ width: '33%' }}></div>
              <h3 className={styles.itemTitle}>Clean Architecture</h3>
              <div className="space-y-1 pt-1"><div className={styles.skeletonLine} style={{ width: '100%' }}></div></div>
            </div>
        </div>
      </div>
      
      {/* שאר הפריטים (ITEM 2, 3, 4) נשארים בדיוק כמו שהיו ב-Hero.tsx המקורי */}
      {/* וודא שהעתקת אותם במלואם לכאן */}
    </>
    );
};

export default ScrollContent;