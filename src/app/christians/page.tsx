'use client';
import React from 'react';
import Navbar from '@/components/Navbar'; 
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


export default function ChristianLander() {
  return (
    <main style={{ backgroundColor: '#020617' }}>
      <Hero 
        title={<>Digital Stewardship for <span style={{color: '#60A5FA'}}>Your Mission</span></>}
        subtitle="Transforming outdated platforms into high-performance digital hubs to maximize your organization's global impact and reach."
        ctaText="Get a Free Ministry Site Audit"
        trustLine="Mission-Driven | Reliable | Built for Growth"
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
            THE PROBLEM
          </span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', color: 'white' }}>
            Is your website hindering your message?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.2rem', lineHeight: '1.6', marginTop: '1.5rem' }}>
            Broken links, slow loading times, and outdated designs aren't just technical issues—they're barriers to your mission. 
            We specialize in breathing new life into legacy sites, ensuring your message reaches the world without interruption.
          </p>
        </div>
      </section>

      <Process />
      
      <Contact /> 
    </main>
  );
}