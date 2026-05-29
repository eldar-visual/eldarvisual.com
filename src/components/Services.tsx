"use client"; 
import React, { useState } from 'react';
import './Services.css';
import { Code, Layout, RefreshCw, Settings, ShoppingBag, TrendingUp, ArrowRight } from 'lucide-react';

export default function Services({ dict }: { dict?: any }) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setActiveCard(prev => (prev === id ? null : id));
  };

  // מערך חסין תקלות - עברית שיווקית ומדויקת!
  const serviceItems = dict?.items || [
    {
      title: "פיתוח אתרים מותאם אישית",
      desc: "אתרים מהירים כברק הבנויים לצמיחה. אנו משתמשים ב-Next.js ו-React כדי להבטיח אבטחה, שליטה בתוצאות החיפוש (SEO) ויכולת התרחבות.",
      features: ["Next.js ו-React", "רינדור צד שרת", "אינטגרציית API", "ארכיטקטורה ניתנת להרחבה"]
    },
    {
      title: "עיצוב חוויית משתמש (UI/UX)",
      desc: "ממשקים שלא רק נראים טוב — הם ממירים. אנו מעצבים מסעות משתמש שהופכים מבקרים ללקוחות משלמים.",
      features: ["מחקר משתמשים", "תכנון ממשק", "אבות-טיפוס", "מערכות עיצוב"]
    },
    {
      title: "שדרוג וחידוש אתרים",
      desc: "הפיכת אתרים מיושנים ליצירות מופת מודרניות. שיפור מהירות, אמון ושימושיות מבלי לאבד את היסטוריית הקידום שלכם בגוגל.",
      features: ["בקרת ביצועים", "מעבר לטכנולוגיות חדשות", "שמירה על הדירוג בגוגל", "העברת נתונים"]
    },
    {
      title: "ניהול אתרים",
      desc: "אל תדאגו יותר לעדכונים. אנו מטפלים בתחזוקה, תיקוני אבטחה ושינויי תוכן כדי שתוכלו להתמקד בניהול העסק שלכם.",
      features: ["ניטור 24/7", "עדכוני אבטחה", "ניהול תוכן", "גיבויים שוטפים"]
    },
    {
      title: "חנויות וירטואליות (E-Commerce)",
      desc: "חנויות שנועדו למכור. תשלומים מאובטחים, ניהול מלאי וחוויית קופה חלקה ומהירה ללקוח.",
      features: ["שופיפיי או מותאם אישית", "שערי תשלום", "סנכרון מלאי", "אופטימיזציית המרות"]
    },
    {
      title: "קידום וביצועים (SEO)",
      desc: "דירוג גבוה יותר, טעינה מהירה יותר. אופטימיזציה מקיפה של מבנה האתר ומדדי הליבה של גוגל.",
      features: ["SEO טכני", "מדדי ליבה", "אסטרטגיית מילות מפתח", "אופטימיזציית מהירות"]
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
          <span className="services-subtitle">{dict?.subtitle || "מה אנחנו עושים?"}</span>
          <h2 className="services-title">
            {dict?.title || "בנוי ל"} <span className="services-title-gradient">{dict?.gradient || "התרחבות וצמיחה."}</span>
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
                  {dict?.included || "WHAT'S INCLUDED:"}
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
            {dict?.cta || "קבלו ניתוח אתר חינם"}
            <ArrowRight className="cta-icon-svg btn-icon-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}