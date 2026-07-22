"use client"; 
import React, { useState } from 'react';
import './Services.css';
import { Code, Layout, RefreshCw, Settings, ShoppingBag, TrendingUp, ArrowRight } from 'lucide-react';

export default function Services({ dict }: { dict?: any }) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setActiveCard(prev => (prev === id ? null : id));
  };

  // מערך חסין תקלות - מותאם לסטנדרט פרימיום B2B באנגלית
  const serviceItems = dict?.items || [
    {
      title: "Mobile App Development (React Native)",
      desc: "Native app development for iOS and Android from a single codebase. We focus on offline-first architecture and high performance for enterprises and startups.",
      features: ["React Native & Expo", "Offline-First Architecture", "Smart Data Synchronization", "Store Deployment"]
    },
    {
      title: "Web & SaaS Development",
      desc: "Complex systems and web applications built to scale. We utilize Next.js and React to ensure maximum security and performance.",
      features: ["Next.js & React", "Server-Side Rendering", "API Integration", "Serverless Architecture"]
    },
    {
      title: "UX/UI Design",
      desc: "Precise interfaces that reduce friction and increase conversions. We design data-driven user journeys based on business understanding.",
      features: ["Functional Specification", "Wireframing", "UI Design", "Design Systems"]
    },
    {
      title: "Legacy System Modernization",
      desc: "Migrating outdated systems to modern architecture. Improving speed, security, and maintainability without losing SEO history.",
      features: ["Code & Performance Audit", "Modern Tech Stack Migration", "SEO Preservation", "Database Migration"]
    },
    {
      title: "Management, Maintenance & Security",
      desc: "Webmaster services for organizations demanding zero downtime. We handle performance monitoring, security updates, and ongoing digital infrastructure management.",
      features: ["24/7 Uptime Monitoring", "Monthly Security Updates", "Automated Backups", "Server & Traffic Management"]
    },
    {
      title: "E-Commerce Development",
      desc: "Fast and secure e-commerce infrastructures. Emphasis on frictionless checkout experiences and reliable inventory management.",
      features: ["Headless E-Commerce", "Secure Payment Gateways", "Inventory System Sync", "Mobile Speed Optimization"]
    }
  ];

  const icons = [
    <Code key="1" className="service-icon-svg" />,
    <Layout key="2" className="service-icon-svg" />,
    <RefreshCw key="3" className="service-icon-svg" />,
    <Settings key="4" className="service-icon-svg" />,
    <ShoppingBag key="5" className="service-icon-svg" />,
    <TrendingUp key="6" className="service-icon-svg" />
  ];

  return (
    <section id="services">
      <div className="services-bg-pattern">
        <img src="/services.webp" alt="" aria-hidden="true" />
      </div>

      <div className="services-container">
        <div className="services-header">
          <span className="services-subtitle">{dict?.subtitle || "What We Do"}</span>
          <h2 className="services-title">
            {dict?.title || "Architecture Built For"} <span className="services-title-gradient">{dict?.gradient || "Stability & Growth."}</span>
          </h2>
        </div>

        <div className="services-grid">
          {serviceItems.map((service: any, index: number) => (
            <div 
              key={index} 
              className={`service-card ${activeCard === index ? 'active-mobile' : ''}`}
              onClick={() => handleCardClick(index)}
            > 
              <div className="service-icon-box">{icons[index]}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
              <div className="service-features">
                <span className="service-features-title">
                  {dict?.included || "What's Included:"}
                </span>
                <ul className="service-features-list">
                  {service.features?.map((feature: string, idx: number) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <a href="#contact" className="btn-start-project">
            {dict?.cta || "Get a Performance & UX Audit"}
            <ArrowRight className="cta-icon-svg btn-icon-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}