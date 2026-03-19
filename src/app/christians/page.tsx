import Hero from '../../components/Hero';
import Process from '../../components/Process';
import Contact from '../../components/Contact';
import styles from '../../components/hero.module.css';

export default function ChristianLander() {
  return (
    <main style={{ backgroundColor: '#020617' }}>
      <Hero 
        title={<>Digital Stewardship for <span style={{color: '#60A5FA'}}>Your Mission</span></>}
        subtitle="Transforming outdated platforms into high-performance digital hubs to maximize your organization's global impact and reach."
        ctaText="Get a Free Ministry Site Audit"
        trustLine="Mission-Driven | Reliable | Built for Growth"
      />

      <section style={{ padding: '5rem 2rem', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '0.9rem' }}>THE PROBLEM</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Is your website hindering your message?</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.2rem', lineHeight: '1.6', marginTop: '1.5rem' }}>
            Broken links, slow loading times, and outdated designs aren't just technical issues—they're barriers to your mission. 
            We specialize in restoring legacy sites for Christian organizations.
          </p>
        </div>
      </section>

      <Process />
      
      <Contact /> 
    </main>
  );
}