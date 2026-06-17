"use client"
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './faq.module.css';

const faqs = [
  {
    q: "כמה זמן לוקח לבנות אתר כזה?",
    a: "תהליך האפיון והפיתוח אצלנו ממוקד תוצאות. בניגוד לאתרים גנריים, אנחנו עובדים בשיטת MVP מואץ – האתר שלך יהיה באוויר תוך זמן קצר, עם דגש על איכות קוד קצה שלא דורשת אחזקה שוטפת."
  },
  {
    q: "אני לא טכני, איך אני מעדכן תכנים?",
    a: "אנחנו בונים את האתר עם מערכת ניהול תוכן מותאמת אישית שמאפשרת לך לעדכן תמונות, מאמרים או שעות פעילות בקלות, ללא שורת קוד אחת."
  },
  {
    q: "איך זה שונה מבניית אתר בוורדפרס?",
    a: "וורדפרס סובלת מעומס תוספים שמאט את האתר. אנחנו בונים בטכנולוגיית Next.js – מה שאומר אתר מהיר בטירוף, מאובטח הרבה יותר, ובעיקר כזה שנותן חוויית פרימיום למטופלים שלך."
  },
  {
    q: "האם זה באמת ישפיע על כמות הלידים?",
    a: "הקמפיין שלך מביא תנועה, אבל האתר הוא זה שסוגר את העסקה. ברגע שאנחנו בונים אתר בטכנולוגיית Next.js שנטען באופן מיידי ומספקים חוויית משתמש חלקה במובייל, אנחנו מונעים את נטישת הגולשים ברגע הלחיצה. המטרה היא פשוטה: לנצל בצורה מקסימלית את התקציב שאתה כבר ממילא משלם עליו למדיה."
}
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>שאלות נפוצות</h2>
        <div className={styles.accordion}>
          {faqs.map((item, index) => (
            <div key={index} className={styles.item} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              <div className={styles.question}>
                <span>{item.q}</span>
                {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </div>
              {openIndex === index && <div className={styles.answer}>{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}