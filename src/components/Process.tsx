'use client';

import { useEffect, useRef, useState } from 'react';
import type enDict from '@/dictionaries/en.json';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import './Process.css';

export default function Process({ dict }: { dict: typeof enDict.process }) {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  const resetPreview = () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = null;
    setActiveStep(null);
  };

  const playPreview = (index: number) => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    setActiveStep(index);
    resetTimer.current = setTimeout(() => {
      setActiveStep(null);
      resetTimer.current = null;
    }, 3000);
  };

  const steps = [
    { number: dict.step1_num, title: dict.step1_title, description: dict.step1_desc, Icon: Search, tone: 'blue' },
    { number: dict.step2_num, title: dict.step2_title, description: dict.step2_desc, Icon: PenTool, tone: 'purple' },
    { number: dict.step3_num, title: dict.step3_title, description: dict.step3_desc, Icon: Code, tone: 'green' },
    { number: dict.step4_num, title: dict.step4_title, description: dict.step4_desc, Icon: Rocket, tone: 'gold' }
  ];

  return (
    <section id="process" className="process-section" aria-labelledby="process-title">
      <div className="process-container">
        <header className="process-header">
          <span className="sub-title">{dict.subtitle}</span>
          <h2 id="process-title" className="main-title">{dict.title} <span className="gradient-text">{dict.gradient}</span></h2>
        </header>
        <div className="process-steps">
          {steps.map(({ number, title, description, Icon, tone }, index) => (
            <article key={number} className={'process-step process-step-' + tone + (activeStep === index ? ' process-step-active' : '')}
              onPointerEnter={event => {
                if (event.pointerType === 'mouse') {
                  if (resetTimer.current) clearTimeout(resetTimer.current);
                  resetTimer.current = null;
                  setActiveStep(index);
                }
              }}
              onPointerLeave={event => {
                if (event.pointerType === 'mouse') resetPreview();
              }}
              onPointerUp={event => {
                if (event.pointerType !== 'mouse') playPreview(index);
              }}>
              <div className="process-visual" aria-hidden="true">
                {index === 0 && <div className="process-bars"><span /><span /><span /><span /></div>}
                {index === 1 && <div className="process-wireframe"><span /><div><span /><span /></div></div>}
                {index === 2 && <div className="process-terminal" dir="ltr"><div><span /><span /><span /></div><code>$ npm run build<span className="process-terminal-building">&gt; Optimized build...</span><span className="process-terminal-result">Build complete ✓</span></code></div>}
                {index === 3 && <div className="process-orbit"><span className="process-orbit-ring" /><div className="process-rocket-mask"><div className="process-rocket"><Rocket size={42} /></div></div></div>}
                <span className="process-visual-icon"><Icon size={20} /></span>
              </div>
              <div className="process-step-heading"><span className="process-step-number">{number}</span><h3>{title}</h3></div>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
