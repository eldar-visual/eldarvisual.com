
"use client"; 
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './hero.module.css';




// ... (Helper Components: Keyword, Func, CodeLine, CodeBlock - ללא שינוי מהגרסה הקודמת) ...
const Keyword = ({ t }: { t: string }) => <span className={styles.tokenKeyword}>{t}</span>; 
const Func = ({ t }: { t: string }) => <span className={styles.tokenFunc}>{t}</span>; 
const StringVal = ({ t }: { t: string }) => <span className={styles.tokenString}>{t}</span>; 
const Var = ({ t }: { t: string }) => <span className={styles.tokenVar}>{t}</span>; 
const Prop = ({ t }: { t: string }) => <span className={styles.tokenProp}>{t}</span>; 
const Punct = ({ t }: { t: string }) => <span className={styles.tokenPunct}>{t}</span>; 
const Comment = ({ t }: { t: string }) => <span className={styles.tokenComment}>{t}</span>; 

const CodeLine = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.codeLine}>
    {children}
  </div>
);

const CodeBlock = () => (
    <div className={styles.codeBlock}>
      <CodeLine><Comment t="// Initializing core render loop with high-performance vectors" /></CodeLine>
      <CodeLine><Keyword t="const" /> <Func t="animateFrame" /> <Keyword t="=" /> <Keyword t="async" /> (<Var t="delta" />, <Var t="context" />) <Keyword t="=>" /> <Punct t="{" /></CodeLine>
      <CodeLine>  <Keyword t="if" /> (<Var t="!context" />.<Prop t="active" /> || <Var t="system" />.<Prop t="isPaused" />) <Keyword t="return" /> <Var t="Promise" />.<Func t="resolve" />(<Keyword t="null" />);</CodeLine>
      <CodeLine> </CodeLine>
      <CodeLine>  <Comment t="// Calculate complex physics based on user interaction & velocity" /></CodeLine>
      <CodeLine>  <Keyword t="const" /> <Var t="velocity" /> <Keyword t="=" /> <Var t="physicsEngine" />.<Func t="calculateVectors" />(<Var t="delta" />, <Punct t="{" /></CodeLine>
      <CodeLine>    <Prop t="friction" />: <Var t="0.94" />, <Prop t="tension" />: <Var t="120" />, <Prop t="precision" />: <StringVal t="'high-priority'" /></CodeLine>
      <CodeLine>    <Prop t="mass" />: <Var t="config" />.<Prop t="heavy" /> ? <Var t="50.5" /> : <Var t="10.2" />, <Prop t="drag" />: <Var t="0.05" /></CodeLine>
      <CodeLine>  <Punct t="}" />);</CodeLine>
      <CodeLine> </CodeLine>
      <CodeLine>  <Keyword t="await" /> <Var t="renderer" />.<Func t="updateSceneGraph" />(<Var t="scene" />, <Var t="camera" />, <Var t="velocity" />);</CodeLine>
      <CodeLine> </CodeLine>
      <CodeLine>  <Keyword t="return" /> (</CodeLine>
      <CodeLine>    <Punct t="<" /><Var t="motion.div" /> <Prop t="initial" /><Keyword t="=" /><Punct t="{" /><Keyword t="false" /><Punct t="}" /> <Prop t="animate" /><Keyword t="=" /><Punct t="{" /><Var t="velocity" /><Punct t="}" /><Punct t=">" /></CodeLine>
      <CodeLine>      <Punct t="<" /><Var t="Masterpiece" /> <Prop t="pixelPerfect" /><Keyword t="=" /><Punct t="{" /><Keyword t="true" /><Punct t="}" /> <Prop t="renderMode" /><Keyword t="=" /><StringVal t="'3d-accelerated'" /> <Punct t="/>" /></CodeLine>
      <CodeLine>    <Punct t="</" /><Var t="motion.div" /><Punct t=">" /></CodeLine>
      <CodeLine>  );</CodeLine>
      <CodeLine><Punct t="}" />;</CodeLine>
    </div>
);

// === Scroll Content Items (אותו תוכן, ללא שינוי, רק שימוש ב-Styles) ===
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
      {/* ITEM 1 */}
      <div className={`${styles.scrollItem} ${styles.blueHover}`}>
        <div className={styles.itemContent}>
            <div className={styles.imgWrapper}>
              <Image src="/coding.webp" alt="Clean Architecture Code" fill className={`${styles.imgCover} ${styles.grayscaleHover}`} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.skeletonLine} style={{ width: '33%' }}></div>
              <h3 className={styles.itemTitle}>Clean Architecture</h3>
              <div className="space-y-1 pt-1"><div className={styles.skeletonLine} style={{ width: '100%' }}></div></div>
            </div>
        </div>
      </div>
      {/* ITEM 2 */}
      <div className={`${styles.scrollItem} ${styles.purpleHover}`}>
        <div className={`${styles.itemContent} ${styles.itemReverse}`}>
            <div className={styles.imgWrapper}>
              <Image src="/uxui.webp" 
              alt="UX/UI Design Interface" 
              fill className={`${styles.imgCover} ${styles.hueHover}`} 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
              priority
              loading="eager"
              />
            </div>
            <div className={styles.textWrapper}>
              <h3 className={styles.itemTitle}>UX/UI Experience</h3>
              <button onClick={scrollToProcess} className={styles.miniBtn}>See Design Process</button>
            </div>
        </div>
      </div>
      {/* ITEM 3 */}
      <div className={`${styles.scrollItem} ${styles.greenHover}`}>
          <div className={styles.webmasterHeader}><h3 className={styles.itemTitle}>Webmaster Services</h3></div>
          <div className={styles.gridImgs}>
            <div className={`${styles.gridImgWrap} ${styles.flashHover}`}><Image src="/webmasterservice.webp" alt="Webmaster Service 1" fill className={styles.imgCover} sizes="10vw" /></div>
            <div className={`${styles.gridImgWrap} ${styles.darkenHover}`}><Image src="/webmaster2.webp" alt="Webmaster Service 2" fill className={styles.imgCover} sizes="10vw" /></div>
            <div className={styles.plusMore}>+4</div>
          </div>
      </div>
      {/* ITEM 4 */}
      <div className={styles.scrollItem}>
          <div className={`${styles.zoomContainer} group`}>
            <Image src="/settings.webp" alt="Website Management Settings" fill className={`${styles.imgCover} ${styles.zoomHover}`} sizes="(max-width: 768px) 100vw, 33vw" />
            <div className={styles.overlayGrad}><h3 className={styles.overlayText}>Website Management</h3></div>
          </div>
      </div>
    </>
    );
};

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section id="hero" className={styles.heroSection}>
      
      <div className={styles.heroBgBlobs}>
        <div className={styles.blobBlue} />
        <div className={styles.blobPurple} />
      </div>

      <div className={styles.heroCodeBg}>
         <div className={styles.codeRotateWrapper}>
           {Array.from({ length: 2 }).map((_, i) => (
             <CodeBlock key={i} />
           ))}
         </div>
      </div>

      <div className={styles.heroContent}>
        
        {/* === חלק 1: תמונה למובייל בלבד === */}
        <div className={styles.mobileImageContainer}>
            <Image 
                src="/uxui.webp" 
                alt="UI/UX Design Illustration" 
                width={600} 
                height={400}
                priority
            />
        </div>
      
        <div className={styles.heroTextSide}>
          <h1 className={styles.heroTitle}>
            Modern Websites.<br />
            Clean Code.<br />
            <span className={styles.heroTitleGradient}>Real Results.</span>
          </h1>
          
          <div className={styles.heroSubtitleGroup}>
            <p className={styles.heroSubtitle}>
              High-performance websites built with modern frameworks. 
              Faster loading, better UX, and built for long-term growth. 
              No templates, no bloat.
            </p>
          </div>

          <div className={styles.heroActions}>
            <button onClick={(e) => scrollToSection(e, 'contact')} className={styles.btnPrimary}>
              Start with a Website Review
            </button>
            <button onClick={(e) => scrollToSection(e, 'portfolio')} className={`${styles.btnLink} group`}>
              <span>View Projects</span>
              <ArrowRight size={16} className={styles.arrowIcon} />
            </button>
          </div>

          <p className={styles.trustLine}>
            Performance-focused | UX-driven | Built to last
          </p>
        </div>

        {/* === חלק 3: Browser Mockup לדסקטופ === */}
        {/* הוחזר בדיוק לגרסה הקודמת שאהבת. מוסתר במובייל. */}
        <div className={styles.heroVisualSide}>
           <div className={styles.browserMockup}>
            <div className={styles.browserWindow}>
                <div className={styles.browserHeader}>
                  <div className={styles.browserDots}>
                    <div className={styles.dot} />
                    <div className={styles.dot} />
                    <div className={styles.dot} />
                  </div>
                  <div className={styles.browserAddressBar}>eldarvisual.com</div>
                </div>
                <div className={styles.browserContentViewport}>
                   <div className={styles.scrollingContent}>
                      <ScrollContent />
                      <ScrollContent />
                   </div>
                </div>
              </div>
          </div>
        </div>

      </div>
    </section>
  );
}