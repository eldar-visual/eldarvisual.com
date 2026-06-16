// app/clinics/page.tsx
import React from 'react';
import Hero from '../../components/Hero'; // נתיב לקומפוננטה הקיימת[cite: 11]
// import Process from '../../components/Process_10';
// import Footer from '../../components/Footer_10';

export const metadata = {
  title: 'EldarVisual | פתרונות Web למרפאות אסתטיקה ושיניים',
  description: 'שדרוג אתרי מרפאות לטכנולוגיית Next.js להגדלת יחס ההמרה מפרסום.',
};

const clinicDict = {
  title: "מרפאות אסתטיקה ושיניים: האתר שלכם שורף",
  gradient: "תקציבי פרסום במובייל?",
  subtitle: "מטופלים שמגיעים מהאינסטגרם או מגוגל מצפים לחוויית פרימיום. אתר איטי גורם להם לנטוש למרפאה המתחרה. אנחנו בונים אתרי קצה ב-Next.js שממירים ביקורים לפניות ביומן.",
  cta: "תיאום אבחון אובדן מטופלים (15 דק׳)",
  viewProjects: "צפייה בדוגמאות",
  tags: "Ultra-Fast Loading | Clinical UI/UX | High-Conversion"
};

export default function ClinicsLandingPage() {
  return (
    <main>
      <Hero dict={clinicDict} /> {/* העברת המילון הספציפי[cite: 11] */}
      {/* כאן תכניס את שאר הקומפוננטות (Process, Contact) שגם להן אפשר להעביר dict */}
    </main>
  );
}