import React from 'react';
import HeroMedical from '../../../components/HeroMedical'; // <-- זה השינוי המרכזי: קוראים לקומפוננטה הרפואית החדשה
import TrustBar from '@/components/TrustBar';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import FAQSection from '@/components/FAQSection';
import FooterMedical from '@/components/FooterMedical';
import { getDictionary } from '@/getDictionary';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang === 'he' ? 'he' : 'en');
  return {
    ...dict.clinics.metadata,
    openGraph: {
      ...dict.clinics.metadata,
      url: `https://eldarvisual.com/${lang}/clinics`,
    },
  };
}

export default async function ClinicsPage({ params }: PageProps) {
  const { lang } = await params;
  const { clinics: dict } = await getDictionary(lang === 'he' ? 'he' : 'en');
  const clinicDict = {
    ...dict.hero,
    subtitle: <>{dict.hero.subtitle}<br />{dict.hero.subtitleEnd}</>,
    calendlyLink: "https://calendly.com/aviram-eldarvisual/30min",
  };
  return (
    <main dir={lang === 'he' ? 'rtl' : 'ltr'}>
      <HeroMedical dict={clinicDict} />
      {/* בהמשך נוכל להוסיף לכאן גם את קומפוננטת Process או Services אם נרצה */}
      <TrustBar dict={dict.trustBar} />
      <ProblemSection dict={dict.problem} />
      <SolutionSection dict={dict.solution} />
      <FAQSection dict={dict.faq} />
      <FooterMedical dict={dict.footer} />
    </main>
  );
}
