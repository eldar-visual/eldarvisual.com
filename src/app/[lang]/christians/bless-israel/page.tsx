"use client";

import React from 'react';
import Image from 'next/image';
import { Play, Heart, Facebook, Youtube, Twitter, MessageCircle } from 'lucide-react';
import styles from './bless.module.css';
import { Lancelot } from 'next/font/google';
import { useParams } from 'next/navigation';
import heSubpages from '@/dictionaries/subpages.he.json';
import enSubpages from '@/dictionaries/subpages.en.json';

const lancelot = Lancelot({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});



export default function BlessIsraelMockup() {
  const { lang } = useParams<{ lang: string }>();
  const dict = (lang === 'he' ? heSubpages : enSubpages).blessIsrael;
  return (
    <div className={styles.pageWrapper}>
      
      {/* Navbar עם Container ליישור */}
      <header className={styles.topNav}>
        <div className={styles.siteContainer}>
          <div className={styles.navInner}>
            <div className={styles.logoBox}>
              <Image 
                src="/bless-israel/logo.png" 
                alt={dict.nav.logoAlt}
                width={190} 
                height={120} 
                priority 
              />
            </div>
            
            <ul className={styles.navMenu}>
              <li>{dict.nav.mission}</li>
              <li>{dict.nav.programs}</li>
              <li>{dict.nav.impact}</li>
              <li>{dict.nav.contact}</li>
            </ul>

            <div className={styles.navActions}>
              <div className={styles.socialIcons}>
                <Twitter size={20} />
                <Facebook size={20} />
                <Youtube size={22} />
              </div>
              <button className={styles.goldCta}>{dict.nav.support}</button>
            </div>
          </div>
        </div>
      </header>

      {/* אזור מרכזי עם אותו Container ליישור מושלם */}
      <main className={styles.mainStage}>
        <div className={styles.siteContainer}>
          <div className={styles.cinemaFrame}>
            <Image 
              src="/bless-israel/DanielAndDvora.webp" 
              alt={dict.hero.imageAlt}
              fill 
              className={styles.heroImage}
              priority 
            />
            
            <div className={styles.vignetteOverlay}></div>

            <div className={styles.contentLayer}>
              {/* כפתור Play הועלה למעלה */}
              <button className={styles.playCenter} aria-label={dict.hero.playLabel}>
                <Play size={65} fill="white" strokeWidth={0}/>
              </button>

              {/* הטקסט והכפתורים למטה */}
              <div className={styles.textBottomContainer}>
                <h1 className={styles.mainTitle}>
                  {dict.hero.title} <br />
                  <span className={styles.goldHighlight}>{dict.hero.highlight}</span>
                </h1>
                
                <div className={styles.buttonSet}>
                  <button className={styles.donateBtn}>
                    {dict.hero.donate} <Heart size={18} fill="currentColor" />
                  </button>
                  <button className={styles.playBtn}>
                    <Play size={18} fill="white" strokeWidth={0} /> {dict.hero.watch}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className={`${styles.missionStatement} ${lancelot.className}`}>
            {dict.hero.statement}
          </p>
        </div>
      </main>
{/* --- סקשן 1: רצועת הדרכות וחדשות --- */}
     <section className={styles.newsBanner}>
        <div className={styles.siteContainer}>
          <h2 className={styles.bannerText}>
            {dict.newsletter.title} <span className={styles.goldHighlight}>{dict.newsletter.highlight}</span>
          </h2>
          {/* טופס הרשמה חדש */}
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder={dict.newsletter.placeholder} className={styles.emailInput} required />
            <button type="submit" className={styles.subscribeBtn}>{dict.newsletter.submit}</button>
          </form>
        </div>
      </section>

      {/* --- סקשן 2: המלצות (Testimonials) --- */}
      <section className={styles.testimonialsSection}>
        <div className={styles.siteContainer}>
          <div className={styles.gridContainer}>
            
            {/* כרטיסייה 1 */}
            <div className={styles.testiCard}>
              <p className={styles.quote}>{dict.testimonials[0].quote}</p>
              <div className={styles.authorBox}>
                <Image src="/bless-israel/JB.webp" alt={dict.testimonials[0].name} width={55} height={55} className={styles.authorImage} />
                <div>
                  <h4 className={styles.authorName}>{dict.testimonials[0].name}</h4>
                  <p className={styles.authorTitle}>{dict.testimonials[0].role}</p>
                </div>
              </div>
            </div>

            {/* כרטיסייה 2 */}
            <div className={styles.testiCard}>
              <p className={styles.quote}>{dict.testimonials[1].quote}</p>
              <div className={styles.authorBox}>
               <Image src="/bless-israel/IS.webp" alt={dict.testimonials[1].name} width={55} height={55} className={styles.authorImage} />
                <div>
                  <h4 className={styles.authorName}>{dict.testimonials[1].name}</h4>
                  <p className={styles.authorTitle}>{dict.testimonials[1].role}</p>
                </div>
              </div>
            </div>

            {/* כרטיסייה 3 */}
            <div className={styles.testiCard}>
              <p className={styles.quote}>{dict.testimonials[2].quote}</p>
              <div className={styles.authorBox}>
<Image src="/bless-israel/DR.webp" alt={dict.testimonials[2].name} width={55} height={55} className={styles.authorImage} />                <div>
                  <h4 className={styles.authorName}>{dict.testimonials[2].name}</h4>
                  <p className={styles.authorTitle}>{dict.testimonials[2].role}</p>
                </div>
              </div>
            </div>

            {/* כרטיסייה 4 */}
            <div className={styles.testiCard}>
              <p className={styles.quote}>{dict.testimonials[3].quote}</p>
              <div className={styles.authorBox}>
<Image src="/bless-israel/BM.webp" alt={dict.testimonials[3].name} width={55} height={55} className={styles.authorImage} />                <div>
                  <h4 className={styles.authorName}>{dict.testimonials[3].name}</h4>
                  <p className={styles.authorTitle}>{dict.testimonials[3].role}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- סקשן 3: פוטר יוקרתי --- */}
      <footer className={styles.footer}>
        <div className={styles.siteContainer}>
          <div className={styles.footerInner}>
            
            <div className={styles.footerLeft}>
              <p>© {new Date().getFullYear()} Bless Israel Network. {dict.footer.rights}</p>
              <p className={styles.credit}>{dict.footer.credit} <span className={styles.goldText}>EldarVisual</span></p>
            </div>

            <div className={styles.footerRight}>
              <div className={styles.footerSocials}>
                <Twitter size={22} />
                <Facebook size={22} />
                <Youtube size={24} />
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
