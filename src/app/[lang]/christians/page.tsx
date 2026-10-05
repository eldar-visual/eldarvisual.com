import React from 'react';
import Navbar from '@/components/Navbar'; 
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getDictionary } from '@/getDictionary';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang === 'he' ? 'he' : 'en');
  return {
    ...dict.christians.metadata,
    openGraph: {
      ...dict.christians.metadata,
      url: `https://eldarvisual.com/${lang}/christians`,
    },
  };
}

export default async function ChristianLander({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang === 'he' ? 'he' : 'en');
  return (
    <main style={{ backgroundColor: '#020617' }}>
   <Hero 
        dict={{ ...dict.hero, ...dict.christians.hero }}
        hideSecondaryBtn={true} 
      />

     {/* אזור "כאב" ייעודי שמדבר אליהם */}
      <section style={{ 
        padding: '3rem 2rem 6rem', /* התאמנו מעט את הריווח העליון לאינדיקטור */
        textAlign: 'center', 
        backgroundColor: '#020617',
        marginTop: '-13rem', /* משיכה למעלה כדי "לשאוב" את המשתמש פנימה */
        position: 'relative', 
        zIndex: 10 
      }}>
        
        {/* === הוספה חדשה: אינדיקטור גלילה (Scroll Indicator) === */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            width: '24px',
            height: '40px',
            borderRadius: '12px',
            border: '2px solid rgba(255, 255, 255, 0.4)', /* צבע גבול שקוף מעט */
            position: 'relative',
          }}>
            {/* הנקודה האנימטיבית הפנימית (הגלגלת) */}
            <div style={{
              width: '6px',
              height: '6px',
              backgroundColor: 'white',
              borderRadius: '50%',
              position: 'absolute',
              top: '8px',
              left: '50%',
              /* שימוש באנימציה שהגדרנו בשלב 1 */
              animation: 'scrollDownAnim 1.5s infinite ease-in-out',
            }} />
          </div>
        </div>
        {/* === סוף ההוספה === */}

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '2px' }}>
            {dict.christians.problem.label}
          </span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', color: 'white' }}>
            {dict.christians.problem.title}
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.2rem', lineHeight: '1.6', marginTop: '1.5rem' }}>
            {dict.christians.problem.description}
          </p>
        </div>
      </section>

      <Process dict={dict.process} />
      
      <Contact dict={dict.contact} />
      <Footer dict={dict.footer} />
    </main>
  );
}
