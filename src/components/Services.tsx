'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Layout, RefreshCw, Smartphone, ArrowRight } from 'lucide-react';
import type enDict from '@/dictionaries/en.json';
import './Services.css';

export default function Services({ dict }: { dict: typeof enDict.services }) {
  const icons = [RefreshCw, Layout, Smartphone];
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px), (hover: none), (pointer: coarse)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const timers = new Set<ReturnType<typeof setTimeout>>();
    const seen = new Set<Element>();
    const cards = gridRef.current?.querySelectorAll<HTMLElement>('.service-card') ?? [];
    let observer: IntersectionObserver | undefined;
    const clear = () => {
      observer?.disconnect();
      timers.forEach(timer => clearTimeout(timer));
      timers.clear();
      cards.forEach(card => card.classList.remove('service-card-lit'));
    };
    const observe = () => {
      clear();
      if (!mobileQuery.matches || motionQuery.matches) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting || seen.has(entry.target)) return;
          const card = entry.target as HTMLElement;
          seen.add(card);
          card.classList.add('service-card-lit');
          observer?.unobserve(card);
          const timer = setTimeout(() => {
            card.classList.remove('service-card-lit');
            timers.delete(timer);
          }, 1500);
          timers.add(timer);
        });
      }, { threshold: 0.25 });
      cards.forEach(card => {
        if (!seen.has(card)) observer?.observe(card);
      });
    };
    observe();
    mobileQuery.addEventListener('change', observe);
    motionQuery.addEventListener('change', observe);
    return () => {
      clear();
      mobileQuery.removeEventListener('change', observe);
      motionQuery.removeEventListener('change', observe);
    };
  }, [dict.items]);

  return (
    <section id="services" aria-labelledby="services-title">
      <div className="services-bg-pattern" aria-hidden="true">
        <Image src="/services.webp" alt="" width={1200} height={800} sizes="(max-width: 768px) 150vw, 65vw" />
      </div>
      <div className="services-container">
        <header className="services-header">
          <span className="services-subtitle">{dict.subtitle}</span>
          <h2 id="services-title" className="services-title">
            {dict.title} <span className="services-title-gradient">{dict.gradient}</span>
          </h2>
        </header>
        <div ref={gridRef} className="services-grid">
          {dict.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <article key={service.title} className="service-card">
                <div className="service-icon-box"><Icon size={24} aria-hidden="true" /></div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
                <div className="service-features">
                  <span className="service-features-title">{dict.included}</span>
                  <ul className="service-features-list">
                    {service.features.map(feature => <li key={feature}>{feature}</li>)}
                  </ul>
                </div>
                <a href={service.intent === 'review' ? '#contact-review' : '#contact-project'} className="service-link">
                  <span className="light-sweep-text">{service.cta}</span><ArrowRight size={18} className="btn-icon-arrow" aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
        <div className="services-additional">
          <h3>{dict.additionalTitle}</h3>
          <p>{dict.additionalDesc}</p>
        </div>
      </div>
    </section>
  );
}
