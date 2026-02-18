import React, { useState } from 'react';
import './Services.css';
import { 
  Code, 
  Layout, 
  RefreshCw, 
  Settings, 
  ShoppingBag, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Custom Web Development",
    description: "Lightning-fast websites built for growth. We use Next.js & React to ensure security, SEO dominance, and scalability.",
    icon: <Code className="service-icon-svg" />,
    features: ["Next.js & React", "Server Side Rendering", "API Integration", "Scalable Architecture"]
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Interfaces that don't just look good—they convert. We design user journeys that turn visitors into customers.",
    icon: <Layout className="service-icon-svg" />,
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    id: 3,
    title: "Website Revamp",
    description: "Transform outdated sites into modern masterpieces. Improve speed, trust, and usability without losing your SEO history.",
    icon: <RefreshCw className="service-icon-svg" />,
    features: ["Performance Audit", "Modern Stack Migration", "SEO Preservation", "Data Migration"]
  },
  {
    id: 4,
    title: "Webmaster Services",
    description: "Never worry about updates again. We handle maintenance, security patches, and content changes so you can focus on business.",
    icon: <Settings className="service-icon-svg" />,
    features: ["24/7 Monitoring", "Security Patches", "Content Updates", "Regular Backups"]
  },
  {
    id: 5,
    title: "E-Commerce",
    description: "Stores designed to sell. Secure payments, inventory management, and a seamless checkout experience.",
    icon: <ShoppingBag className="service-icon-svg" />,
    features: ["Shopify / Custom", "Payment Gateways", "Inventory Sync", "Conversion Optimization"]
  },
  {
    id: 6,
    title: "SEO & Performance",
    description: "Rank higher, load faster. Comprehensive optimization of site structure and core web vitals.",
    icon: <TrendingUp className="service-icon-svg" />,
    features: ["Technical SEO", "Core Web Vitals", "Keyword Strategy", "Speed Optimization"]
  }
];

const Services = () => {
  // ניהול הכרטיס הפעיל במובייל
  const [activeCard, setActiveCard] = useState<number | null>(null);

const handleCardClick = (id: number) => {
  setActiveCard(prev => (prev === id ? null : id));
};

  return (
    <section id="services">
      {/* Background Pattern */}
      <div className="services-bg-pattern">
        <img src="/services.png" alt="" aria-hidden="true" />
      </div>

      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <span className="services-subtitle">OUR EXPERTISE</span>
          <h2 className="services-title">
            Built for <span className="services-title-gradient">Scale.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`service-card ${activeCard === service.id ? 'active-mobile' : ''}`}
              onClick={() => handleCardClick(service.id)}
            > 
              
              {/* Icon Box */}
              <div className="service-icon-box">
                {service.icon}
              </div>

              {/* Text Content */}
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>

              {/* Features List */}
              <div className="service-features">
                <span className="service-features-title">WHAT'S INCLUDED</span>
                <ul className="service-features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="services-cta">
          <a href="#contact" className="btn-start-project">
            Get a Free Website Review
            <ArrowRight className="cta-icon-svg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;