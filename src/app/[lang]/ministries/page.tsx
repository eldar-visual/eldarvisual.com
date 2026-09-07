import Image from 'next/image';
import styles from './ministries.module.css';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function MinistriesPage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroViewport}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/MiniHero.png" 
            alt="A crowd praising the word of God" 
            fill
            priority
            className={styles.bgImage}
          />
          <div className={styles.overlay}></div>
        </div>
        
        <div className={styles.heroContent}>
          <span className={styles.tag}>High-Performance Websites for Ministries</span>
          <h1 className={styles.title}>
            Help More People <br></br> Connect with Your Mission.
          </h1> 
          <p className={styles.subtitle}>
We design and build modern, fast ministry websites that help supporters understand your work, trust your organization, and contribute easily from any device.</p>
          <div className={styles.ctaGroup}>
            <a href="#audit-form" className={styles.primaryCta}>Request Your Website Audit</a>
          </div>
        </div> 
      </section>

      {/* Main Content */}
      <main className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Where Ministry Websites Create Donor Friction</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Mobile Friction</h3>
              <p>Many ministry websites aren’t designed for today’s mobile-first audience. When giving is difficult on a phone, supporters are more likely to leave before completing a donation.</p>
            </div>
            <div className={styles.card}>
              <h3>Slow Performance, Lower Trust</h3> 
              <p>A slow or outdated website can reduce confidence before visitors even engage with your ministry. First impressions matter.</p>
            </div>
            <div className={styles.card}>
              <h3>Buried Impact</h3>
              <p>When your mission, stories, and impact are difficult to find, visitors struggle to understand why your ministry matters—and why they should support it.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Built for Trust. Engineered for Performance.</h2>
          <div className={styles.grid}>
            <div className={styles.cardHighlight}>
              <h3>Fast Global Delivery</h3>
              <p>Built with modern technologies to deliver fast, reliable experiences for supporters around the world.</p>
            </div>
            <div className={styles.cardHighlight}>
              <h3>Simplified Mobile Giving</h3>
              <p>Clear user flows and thoughtful design make giving simple across every device.</p>
            </div>
            <div className={styles.cardHighlight}>
              <h3>Designed Around Supporters</h3>
              <p>Every page is designed to help visitors understand your mission, build trust, and take meaningful action.</p>
            </div>
          </div>
        </section>
        <section id="audit-form" className={styles.auditSection}>
          <h2>A Website Should Support Your MinistryNot Hold It Back.</h2>
          <p>Share your website, and we’ll send you a personalized audit report by email highlighting opportunities to improve clarity, trust, performance, accessibility, and the overall supporter experience.</p>
          <form className={styles.form}>
            <input type="text" placeholder="Your Name" required className={styles.input} />
            <input type="email" placeholder="Ministry Email" required className={styles.input} />
            <input type="url" placeholder="Website URL (e.g., https://ministry.org)" required className={styles.input} />
            <button type="submit" className={styles.submitBtn}> Request Your Website Audit</button>
          </form>
        </section>
      </main>
    </div>
  );
}