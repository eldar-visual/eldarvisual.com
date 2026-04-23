import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Process from '../../components/Process';
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';
import Footer from '@/components/Footer';

// ייבוא קשיח וישיר
import heDict from '../../dictionaries/he.json';
import enDict from '../../dictionaries/en.json';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'he' }];
}

export default async function HomePage({ params }: any) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || 'en';
  const dict: any = lang === 'he' ? heDict : enDict;

  return (
    <>
      <Hero 
        title={dict.hero?.title}
        subtitle={dict.hero?.subtitle}
        ctaText={dict.hero?.cta}
        dict={dict.hero} 
      />
      
      <Services dict={dict.services} />
      <Process dict={dict.process} />
      <Portfolio dict={dict.portfolio} />
      <Contact dict={dict.contact} />
      
    </>
  );
}