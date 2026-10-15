import Navbar from '../../components/Navbar';
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

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || 'en';
  const dict = lang === 'he' ? heDict : enDict;

  return (
    <>
      <Navbar dict={dict.navbar} />
      <Hero dict={dict.hero} ctaTarget="review" />
      
      <Portfolio dict={dict.portfolio} testimonial={dict.testimonial} />
      <Services dict={dict.services} />
      <Process dict={dict.process} />
      <Contact dict={dict.contact} />
      <Footer dict={dict.footer} />
      
    </>
    
  );
}
