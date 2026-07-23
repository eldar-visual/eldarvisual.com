import React from 'react';
import HeroMedical from '../../../components/HeroMedical'; // <-- זה השינוי המרכזי: קוראים לקומפוננטה הרפואית החדשה
import TrustBar from '@/components/TrustBar';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import FAQSection from '@/components/FAQSection';
import FooterMedical from '@/components/FooterMedical';
export const metadata = {
  title: 'EldarVisual | פתרונות Web למרפאות אסתטיקה ושיניים',
  description: 'שדרוג אתרי מרפאות לטכנולוגיית Next.js להגדלת יחס ההמרה מפרסום.',
};

const clinicDict = {
  title: "הלקוח כבר שפט אותך ",
  gradient: "עוד לפני שדיברתם",
  subtitle: 
(<>
אנחנו הופכים את הרושם הראשוני שלך למנוע צמיחה - כדי שמבקרים יהפכו לפניות.
<br /> בלי תבניות. רק תוצאות.
</>
),
  cta: "קבל ביקורת אתר חינם",
  calendlyLink: "https://calendly.com/aviram-eldarvisual/30min",
  hideSecondaryBtn: true,
  tags: "שיחה קצרה בלי התחייבות"
};

export default function ClinicsPage() {
  return (
    <main dir="rtl">
      <HeroMedical dict={clinicDict} />
      {/* בהמשך נוכל להוסיף לכאן גם את קומפוננטת Process או Services אם נרצה */}
      <TrustBar/>
      <ProblemSection/>
      <SolutionSection />
      <FAQSection />
      <FooterMedical/>
    </main>
  );
}