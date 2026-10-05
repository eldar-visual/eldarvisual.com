'use client';

import React from 'react';
import Image from 'next/image';
import styles from './HeroStyles.module.css'; 

// הוספנו כאן את הקבלה של ה-dict כדי שה-TS יפסיק לצעוק!
const InfiniteScroll = ({ dict }: { dict?: any }) => {
    const scrollToProcess = (e: React.MouseEvent) => {
        e.preventDefault();
        
        if (typeof window !== 'undefined') {
            const element = document.getElementById('process');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
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
                            alt={dict?.mockup?.architectureAlt || "Clean architecture code"}
                            fill 
                            className={`${styles.imgCover} ${styles.grayscaleHover}`} 
                            sizes="33vw" 
                        />
                    </div>
                    <div className={styles.textWrapper}>
                        <div className={styles.skeletonLine} style={{ width: '33%' }}></div>
                        <h3 className={styles.itemTitle}>{dict?.mockup?.architectureTitle || "Clean Architecture"}</h3>
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
                            alt={dict?.mockup?.uxAlt || "UI and UX design"}
                            fill 
                            className={`${styles.imgCover} ${styles.hueHover}`} 
                            sizes="33vw"
                        />
                    </div>
                    <div className={styles.textWrapper}>
                        <h3 className={styles.itemTitle}>{dict?.mockup?.uxTitle || "User Experience & Interface Design"}</h3>
                        <button onClick={scrollToProcess} className={styles.miniBtn}>{dict?.mockup?.uxBtn || "See Design Process"}</button>
                    </div>
                </div>
            </div>

            {/* ITEM 3: Services */}
            <div className={`${styles.scrollItem} ${styles.greenHover}`}>
                <div className={styles.webmasterHeader}>
                    <h3 className={styles.itemTitle}>{dict?.mockup?.webmasterTitle || "Website Management & Maintenance"}</h3>
                </div>
                <div className={styles.gridImgs}>
                    <div className={`${styles.gridImgWrap} ${styles.flashHover}`}>
                        <Image src="/webmasterservice.webp" alt={dict?.mockup?.webmasterAlt || "Website management and maintenance"} fill className={styles.imgCover} />
                    </div>
                    <div className={`${styles.gridImgWrap} ${styles.darkenHover}`}>
                        <Image src="/webmaster2.webp" alt={dict?.mockup?.webmasterSecondaryAlt || "Website infrastructure maintenance"} fill className={styles.imgCover} />
                    </div>
                    <div className={styles.plusMore}>+4</div>
                </div>
            </div>

            {/* ITEM 4: Management */}
            <div className={styles.scrollItem}>
                <div className={styles.zoomContainer}>
                    <Image src="/settings.webp" alt={dict?.mockup?.managementAlt || "Website management"} fill className={`${styles.imgCover} ${styles.zoomHover}`} />
                    <div className={styles.overlayGrad}>
                        <h3 className={styles.overlayText}>{dict?.mockup?.managementTitle || "Website Management"}</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfiniteScroll;
