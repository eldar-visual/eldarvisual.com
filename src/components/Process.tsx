"use client";
import React, { useState } from 'react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import './Process.css'; 

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
    // חזרה אוטומטית למצב התחלתי אחרי 2 שניות
    setTimeout(() => {
      setActiveStep(null);
    }, 2000);
  };

  return (
    <section id="process">
      <div className="process-container">
        
        {/* Header */}
        <div className="header-wrapper">
          <span className="sub-title">The Workflow</span>
          <h2 className="main-title">
            From Concept to <span className="gradient-text">Completion.</span>
          </h2>
        </div>

        <div className="steps-wrapper">
          
          {/* === 1: Discovery & Strategy === */}
          <div className={`step-row ${activeStep === 1 ? 'active' : ''}`} onClick={() => handleStepClick(1)}>
            <div className="visual-side">
              <div className="card-base card-blue">
                 {/* כדור צף בכותרת */}
                 <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-blue rounded-full shadow-[0_0_10px_#3B82F6] z-20"></div>
                 
                 {/* גרף עמודות פנימי */}
                 <div className="graph-bars">
                    <div className="bar bg-slate-800" style={{ height: '40%' }}></div>
                    <div className="bar bg-slate-700" style={{ height: '60%' }}></div>
                    <div className="bar bg-slate-800" style={{ height: '30%' }}></div>
                    <div className="bar bg-blue" style={{ height: '80%', boxShadow: '0 0 15px rgba(37,99,235,0.5)' }}></div>
                 </div>

                 {/* אייקון צף */}
                 <div className="floating-icon" style={{ top: '-20px', right: '-20px' }}>
                     <Search size={20} className="text-blue" />
                 </div>
              </div>
            </div>
            
            <div className="content-side">
              <div className="step-header">
                 <span className="step-num text-blue">1</span>
                 <div className="icon-wrap">
                    <Search size={24} className="text-blue" />
                    <h3 className="step-title">Discovery & Strategy</h3>
                 </div>
              </div>
              <p className="step-desc">
                We dive deep into your vision, analyzing competitors and defining your target audience to build a solid foundation.
              </p>
            </div>
          </div>

          {/* === 2: UI/UX Design === */}
          <div className={`step-row reverse ${activeStep === 2 ? 'active' : ''}`} onClick={() => handleStepClick(2)}>
            <div className="visual-side">
              <div className="card-purple-wrapper">
                 {/* כדור צף */}
                 <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-1.5 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_#A855F7] z-20" style={{ background: '#A855F7' }}></div>
                 
                 <div className="card-purple-bg"></div>
                 <div className="card-purple-front">
                     {/* שלד פנימי של עיצוב */}
                     <div className="skeleton-title"></div>
                     <div className="skeleton-box-container">
                         <div className="skeleton-box"></div>
                         <div className="skeleton-box"></div>
                     </div>
                 </div>

                 <div className="floating-icon" style={{ bottom: '-16px', right: '-16px', background: '#9333EA', borderColor: '#9333EA' }}>
                     <PenTool size={20} style={{ color: 'white' }} />
                 </div>
              </div>
            </div>

            <div className="content-side">
               <div className="step-header">
                 <span className="step-num text-purple">2</span>
                 <div className="icon-wrap">
                    <PenTool size={24} className="text-purple" />
                    <h3 className="step-title">UI/UX Design</h3>
                 </div>
               </div>
               <p className="step-desc">
                 High-fidelity wireframes and stunning interfaces that provide an intuitive and seamless user journey.
               </p>
            </div>
          </div>

          {/* === 3: Development === */}
          <div className={`step-row ${activeStep === 3 ? 'active' : ''}`} onClick={() => handleStepClick(3)}>
            <div className="visual-side">
               <div className="card-base card-green">
                  {/* נקודות טרמינל */}
                  <div className="terminal-dots">
                      <div className="dot dot-red"></div>
                      <div className="dot dot-yellow"></div>
                      <div className="dot dot-green"></div>
                  </div>
                  
                  {/* טקסט קוד */}
                  <div className="space-y-2 text-slate-500">
                      <p>$ npm run build</p>
                      <p className="text-green-400">&gt; Optimized build...</p>
                      <p style={{ color: 'white' }}>Done in 0.4s ⚡</p>
                      <div className="cursor-blink"></div>
                  </div>
                  
                  <div className="floating-icon" style={{ bottom: '-12px', left: '-12px', background: '#14532d', borderColor: '#22c55e' }}>
                     <Code size={20} className="text-green-300" />
                  </div>
               </div>
            </div>

            <div className="content-side">
               <div className="step-header">
                 <span className="step-num text-green">3</span>
                 <div className="icon-wrap">
                    <Code size={24} className="text-green" />
                    <h3 className="step-title">Development</h3>
                 </div>
               </div>
               <p className="step-desc">
                 Clean, semantic code using Next.js. We prioritize speed, security, and industrial-grade scalability.
               </p>
            </div>
          </div>

          {/* === 4: Launch === */}
          <div className={`step-row reverse ${activeStep === 4 ? 'active' : ''}`} onClick={() => handleStepClick(4)}>
            <div className="visual-side">
               <div className="card-yellow-wrapper">
                 <div className="card-base card-yellow">
                    <div className="dashed-border"></div>
                    
                    {/* אנימציית טיל */}
                    <div className="relative transform hover:-translate-y-2 transition-transform duration-500">
                        <Rocket size={48} className="text-yellow" style={{ filter: 'drop-shadow(0 0 10px rgba(250,204,21,0.5))' }} />
                    </div>
                 </div>

                 {/* אייקון צף חסר (הוסף) */}
                 <div className="floating-icon" style={{ bottom: '-12px', right: '-12px', background: '#422006', borderColor: '#EAB308' }}>
                      <Rocket size={20} className="text-yellow" />
                 </div>
               </div>
            </div>

            <div className="content-side">
               <div className="step-header">
                 <span className="step-num text-yellow">4</span>
                 <div className="icon-wrap">
                    <Rocket size={24} className="text-yellow" />
                    <h3 className="step-title">Launch & Growth</h3>
                 </div>
               </div>
               <p className="step-desc">
                 Liftoff. We deploy your masterpiece to the world and provide continuous optimization for long-term growth.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}