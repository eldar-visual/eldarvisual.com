"use client";

import React from 'react';
import Image from 'next/image';
import { Play, Heart, Facebook, Youtube, Twitter, MessageCircle } from 'lucide-react';
import styles from './bless.module.css';
import { Lancelot } from 'next/font/google';

const lancelot = Lancelot({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});



export default function BlessIsraelMockup() {
  return (
    <div className={styles.pageWrapper}>
      
      {/* Navbar עם Container ליישור */}
      <header className={styles.topNav}>
        <div className={styles.siteContainer}>
          <div className={styles.navInner}>
            <div className={styles.logoBox}>
              <Image 
                src="/bless-israel/logo.png" 
                alt="Bless Israel Logo" 
                width={190} 
                height={120} 
                priority 
              />
            </div>
            
            <ul className={styles.navMenu}>
              <li>Our Mission</li>
              <li>Programs</li>
              <li>Impact</li>
              <li>Contact</li>
            </ul>

            <div className={styles.navActions}>
              <div className={styles.socialIcons}>
                <Twitter size={20} />
                <Facebook size={20} />
                <Youtube size={22} />
              </div>
              <button className={styles.goldCta}>Support Now</button>
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
              alt="Bless Israel Leaders" 
              fill 
              className={styles.heroImage}
              priority 
            />
            
            <div className={styles.vignetteOverlay}></div>

            <div className={styles.contentLayer}>
              {/* כפתור Play הועלה למעלה */}
              <button className={styles.playCenter}>
                <Play size={65} fill="white" strokeWidth={0}/>
              </button>

              {/* הטקסט והכפתורים למטה */}
              <div className={styles.textBottomContainer}>
                <h1 className={styles.mainTitle}>
                  Raising Up Zion <br />
                  <span className={styles.goldHighlight}>Before the Nations</span>
                </h1>
                
                <div className={styles.buttonSet}>
                  <button className={styles.donateBtn}>
                    Donate Now <Heart size={18} fill="currentColor" />
                  </button>
                  <button className={styles.playBtn}>
                    <Play size={18} fill="white" strokeWidth={0} /> Watch The Mission
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className={`${styles.missionStatement} ${lancelot.className}`}>
            Uniting Jews and Christians in Messiah to co-labor and raise up Zion before the Nations
          </p>
        </div>
      </main>
{/* --- סקשן 1: רצועת הדרכות וחדשות --- */}
     <section className={styles.newsBanner}>
        <div className={styles.siteContainer}>
          <h2 className={styles.bannerText}>
            We also provide <span className={styles.goldHighlight}>TEACHINGS & NEWS UPDATES</span>
          </h2>
          {/* טופס הרשמה חדש */}
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address..." className={styles.emailInput} required />
            <button type="submit" className={styles.subscribeBtn}>Subscribe</button>
          </form>
        </div>
      </section>

      {/* --- סקשן 2: המלצות (Testimonials) --- */}
      <section className={styles.testimonialsSection}>
        <div className={styles.siteContainer}>
          <div className={styles.gridContainer}>
            
            {/* כרטיסייה 1 */}
            <div className={styles.testiCard}>
              <p className={styles.quote}>"I completely support the vision of Bless Israel Network to provide a platform for leaders of Israeli Congregations and Ministries to share what they are doing to build the Kingdom of God in Israel."</p>
              <div className={styles.authorBox}>
                <Image src="/bless-israel/JB.webp" alt="Jonathan Bernis" width={55} height={55} className={styles.authorImage} />
                <div>
                  <h4 className={styles.authorName}>Jonathan Bernis</h4>
                  <p className={styles.authorTitle}>President & CEO, Jewish Voice Ministries</p>
                </div>
              </div>
            </div>

            {/* כרטיסייה 2 */}
            <div className={styles.testiCard}>
              <p className={styles.quote}>"Revelation to the Nations is needed in these Last Days! Daniel & D'vorah's vision to connect the voices of authentic Israeli believers to the nations will serve as a great hub for the Body of Messiah until all Israel will be saved."</p>
              <div className={styles.authorBox}>
               <Image src="/bless-israel/IS.webp" alt="Rabbi Itzchak Shapira" width={55} height={55} className={styles.authorImage} />
                <div>
                  <h4 className={styles.authorName}>Rabbi Itzchak Shapira</h4>
                  <p className={styles.authorTitle}>Author, Return of the Kosher Pig</p>
                </div>
              </div>
            </div>

            {/* כרטיסייה 3 */}
            <div className={styles.testiCard}>
              <p className={styles.quote}>"I praise God for the visionary venture HE has placed in the hearts of Daniel & D'vorah. It is certainly deserving of widespread support from the Christian community."</p>
              <div className={styles.authorBox}>
<Image src="/bless-israel/DR.webp" alt="Dr. David Reagan" width={55} height={55} className={styles.authorImage} />                <div>
                  <h4 className={styles.authorName}>Dr. David Reagan</h4>
                  <p className={styles.authorTitle}>Founder & Director, Lion and Lamb Ministries</p>
                </div>
              </div>
            </div>

            {/* כרטיסייה 4 */}
            <div className={styles.testiCard}>
              <p className={styles.quote}>"We are living at a time when Israel is most often slandered and marginalized. We need to be present in all platforms of media to counter the lies and misunderstandings..."</p>
              <div className={styles.authorBox}>
<Image src="/bless-israel/BM.webp" alt="Boaz Michael" width={55} height={55} className={styles.authorImage} />                <div>
                  <h4 className={styles.authorName}>Boaz Michael</h4>
                  <p className={styles.authorTitle}>Founder & President, First Fruits of Zion</p>
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
              <p>© {new Date().getFullYear()} Bless Israel Network. All rights reserved.</p>
              <p className={styles.credit}>Digital Experience by <span className={styles.goldText}>EldarVisual</span></p>
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