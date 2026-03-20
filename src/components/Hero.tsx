"use client"; 
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './HeroStyles.module.css';
import InfiniteScroll from './InfiniteScroll';


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


// === הוספתי כאן את שתי התכונות החדשות לכפתור המשני ===
export interface HeroProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  ctaText?: React.ReactNode;
  trustLine?: React.ReactNode;
  hideSecondaryBtn?: boolean; // <--- הוספנו את פקודת ההסתרה
}

export default function Hero({ title, subtitle, ctaText, trustLine, hideSecondaryBtn }: HeroProps = {}) {

  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
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
                src="/floatForWeb.webp" 
                alt="UI/UX Design Illustration" 
                width={600} 
                height={400}
                priority
            />
        </div>
      
        <div className={styles.heroTextSide}>
          <h1 className={styles.heroTitle}>
            {title ? title : (
              <>
                <span className="title-part-1">Modern Websites.</span>
                <span className="title-part-2">Clean Code.</span>
                <span className={`title-part-3 ${styles.heroTitleGradient}`}>Real Results.</span>
              </>
            )}
          </h1> 
          
          <div className={`${styles.heroSubtitleGroup} delay1`}>
            <p className={styles.heroSubtitle}>
              {subtitle ? subtitle : (
                <>
                  High-performance websites built with modern frameworks. 
                  Faster loading, better UX, and built for long-term growth. 
                  No templates, no bloat.
                </>
              )}
            </p>
          </div>

          <div className={`${styles.heroActions} delay2`}>
            <button onClick={(e) => scrollToSection(e, 'contact')} className={styles.btnPrimary}>
              {ctaText ? ctaText : "Start with a Website Review"}
            </button>
            
            {/* === הכפתור השני עטוף בתנאי === */}
            {!hideSecondaryBtn && (
              <button onClick={(e) => scrollToSection(e, 'portfolio')} className={`${styles.btnLink} group`}>
                <span>View Projects</span>
                <ArrowRight size={16} className={styles.arrowIcon} />
              </button>
            )}
          </div>

          <p className={styles.trustLine}>
            {trustLine ? trustLine : "Performance-focused | UX-driven | Built to last"}
          </p>
        </div>

        {/* === חלק 3: Browser Mockup לדסקטופ === */}
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
   {isMounted && (
     <div className={styles.scrollingContent}>
        <InfiniteScroll />
        <InfiniteScroll />
     </div>
   )}
</div>
              </div>
          </div>
        </div>

      </div>
    </section>
  );
}