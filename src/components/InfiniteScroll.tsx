/* === ScrollContent.tsx === */
import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

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
      {/* ITEM 1: Engineering */}
      <div className={`${styles.scrollItem} ${styles.blueHover}`}>
        <div className={styles.itemContent}>
            <div className={styles.imgWrapper}>
              <Image 
                src="/coding.webp" 
                alt="Clean Architecture Code" 
                fill 
                className={`${styles.imgCover} ${styles.grayscaleHover}`} 
                sizes="33vw" 
              />
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.skeletonLine} style={{ width: '33%' }}></div>
              <h3 className={styles.itemTitle}>Clean Architecture</h3>
              <div className={styles.skeletonLine} style={{ width: '100%' }}></div>
            </div>
        </div>
      </div>

      {/* ITEM 2: UX/UI */}
      <div className={`${styles.scrollItem} ${styles.purpleHover}`}>
        <div className={`${styles.itemContent} ${styles.itemReverse}`}>
            <div className={styles.imgWrapper}>
              <Image 
                src="/uxui.webp" 
                alt="UX/UI Design Interface" 
                fill 
                className={`${styles.imgCover} ${styles.hueHover}`} 
                sizes="33vw"
              />
            </div>
            <div className={styles.textWrapper}>
              <h3 className={styles.itemTitle}>UX/UI Experience</h3>
              <button onClick={scrollToProcess} className={styles.miniBtn}>See Design Process</button>
            </div>
        </div>
      </div>

      {/* ITEM 3: Services */}
      <div className={`${styles.scrollItem} ${styles.greenHover}`}>
          <div className={styles.webmasterHeader}>
            <h3 className={styles.itemTitle}>Webmaster Services</h3>
          </div>
          <div className={styles.gridImgs}>
            <div className={`${styles.gridImgWrap} ${styles.flashHover}`}>
                <Image src="/webmasterservice.webp" alt="Service 1" fill className={styles.imgCover} />
            </div>
            <div className={`${styles.gridImgWrap} ${styles.darkenHover}`}>
                <Image src="/webmaster2.webp" alt="Service 2" fill className={styles.imgCover} />
            </div>
            <div className={styles.plusMore}>+4</div>
          </div>
      </div>

      {/* ITEM 4: Management */}
      <div className={styles.scrollItem}>
          <div className={styles.zoomContainer}>
            <Image src="/settings.webp" alt="Management" fill className={`${styles.imgCover} ${styles.zoomHover}`} />
            <div className={styles.overlayGrad}>
                <h3 className={styles.overlayText}>Website Management</h3>
            </div>
          </div>
      </div>
    </>
    );
};

export default ScrollContent;