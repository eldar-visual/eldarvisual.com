"use client";
import React, { useState } from 'react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import './Process.css';

interface ProcessProps {
  dict?: any;
}

export default function Process({ dict }: ProcessProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
    setTimeout(() => setActiveStep(null), 3000);
  };

  return (
    <section id="process" className="process-section">
      <div className="process-container">
        
        <div className="process-header">
          <span className="sub-title">{dict?.subtitle || "The Workflow"}</span>
          <h2 className="main-title">
            {dict?.title || "From Concept to"} <span className="gradient-text">{dict?.gradient || "Completion."}</span>
          </h2>
        </div>

        <div className="steps-wrapper">
          
          {/* === 1: Discovery === */}
          <div className={`step-row ${activeStep === 1 ? 'active' : ''}`} onClick={() => handleStepClick(1)}>
            <div className="visual-side">
              <div className="card-base card-blue">
                 <div className="graph-bars">
                    <div className="bar bar-1"></div>
                    <div className="bar bar-2"></div>
                    <div className="bar bar-3"></div>
                    <div className="bar bar-blue-active"></div>
                 </div>
                 <div className="floating-icon icon-blue-wrap">
                     <Search size={20} className="svg-icon" />
                 </div>
              </div>
            </div>
            
            <div className="content-side">
              <div className="step-header">
                 <span className="step-num text-blue">{dict?.step1_num || "1"}</span>
                 <div className="icon-wrap">
                    <Search size={24} className="text-blue" />
                    <h3 className="step-title">{dict?.step1_title || "Discovery & Strategy"}</h3>
                 </div>
              </div>
              <p className="step-desc">
                {dict?.step1_desc || "We dive deep into your vision, analyzing competitors and defining your target audience."}
              </p>
            </div>
          </div>

          {/* === 2: UI/UX === */}
          <div className={`step-row reverse ${activeStep === 2 ? 'active' : ''}`} onClick={() => handleStepClick(2)}>
            <div className="visual-side">
              <div className="card-base card-purple">
                 {/* עטיפה פנימית קריטית כדי שהאייקון הצף לא ייחתך! */}
                 <div className="card-purple-inner">
                    <div className="card-purple-bg"></div>
                    <div className="card-purple-front">
                        <div className="skeleton-title"></div>
                        <div className="skeleton-box-container">
                            <div className="skeleton-box"></div>
                            <div className="skeleton-box"></div>
                        </div>
                    </div>
                 </div>
                 <div className="floating-icon icon-purple-wrap">
                     <PenTool size={20} className="svg-icon" />
                 </div>
              </div>
            </div>
            <div className="content-side">
               <div className="step-header">
                 <span className="step-num text-purple">{dict?.step2_num || "2"}</span>
                 <div className="icon-wrap">
                    <PenTool size={24} className="text-purple" />
                    <h3 className="step-title">{dict?.step2_title || "UI/UX Design"}</h3>
                 </div>
               </div>
               <p className="step-desc">
                 {dict?.step2_desc || "High-fidelity wireframes and stunning interfaces that provide an intuitive journey."}
               </p>
            </div>
          </div>

          {/* === 3: Development === */}
          <div className={`step-row ${activeStep === 3 ? 'active' : ''}`} onClick={() => handleStepClick(3)}>
            <div className="visual-side">
               <div className="card-base card-green">
                  {/* העטיפה הזו מונעת מהתוכן למתוח את המלבן למטה */}
                  <div className="terminal-wrapper">
                    <div className="terminal-dots">
                        <div className="dot dot-red"></div>
                        <div className="dot dot-yellow"></div>
                        <div className="dot dot-green"></div>
                    </div>
                    <div className="terminal-text">
                        <p className="code-line-1">$ npm run build</p>
                        <p className="code-line-2">&gt; Optimized build...</p>
                        <p className="code-line-3">Done in 0.4s ⚡</p>
                    </div>
                  </div>
                  <div className="floating-icon icon-green-wrap">
                     <Code size={20} className="svg-icon" />
                  </div>
               </div>
            </div>
            <div className="content-side">
               <div className="step-header">
                 <span className="step-num text-green">{dict?.step3_num || "3"}</span>
                 <div className="icon-wrap">
                    <Code size={24} className="text-green" />
                    <h3 className="step-title">{dict?.step3_title || "Development"}</h3>
                 </div>
               </div>
               <p className="step-desc">
                 {dict?.step3_desc || "Clean, semantic code using Next.js. We prioritize speed, security, and scalability."}
               </p>
            </div>
          </div>

         {/* === 4: Launch === */}
          <div className={`step-row reverse ${activeStep === 4 ? 'active' : ''}`} onClick={() => handleStepClick(4)}>
            <div className="visual-side">
               <div className="card-base card-yellow">
                    <div className="dashed-circle"></div>
                    
                    {/* המסכה שחותכת את הטיל כשהוא עף! */}
                    <div className="rocket-mask">
                        <div className="rocket-animation-container">
                            <Rocket size={48} className="rocket-icon" />
                        </div>
                    </div>

                 <div className="floating-icon icon-yellow-wrap">
                      <Rocket size={20} className="svg-icon" />
                 </div>
               </div>
            </div>

            <div className="content-side">
               <div className="step-header">
                 <span className="step-num text-yellow">{dict?.step4_num || "4"}</span>
                 <div className="icon-wrap">
                    <Rocket size={24} className="text-yellow" />
                    <h3 className="step-title">{dict?.step4_title || "Launch & Growth"}</h3>
                 </div>
               </div>
               <p className="step-desc">
                 {dict?.step4_desc || "Liftoff. We deploy your masterpiece to the world and provide continuous optimization."}
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}