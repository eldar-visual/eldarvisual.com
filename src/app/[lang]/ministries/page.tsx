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
          <span className={styles.tag}>Tailored for Faith-Based Organizations</span>
          <h1 className={styles.title}>
            Engineered for Impact: Ultra-Fast Digital Platforms for Global Ministries
          </h1>
          <p className={styles.subtitle}>
            We build high-converting, friction-free web experiences that increase donor trust, maximize mobile contributions, and load instantly on any device.
          </p>
          <div className={styles.ctaGroup}>
            <a href="#audit-form" className={styles.primaryCta}>Request a Free Mobile Audit</a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Traditional Ministry Websites Lose Donors</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Mobile Friction</h3>
              <p>Over 70% of traffic arrives via newsletters and social media on mobile. Cluttered layouts cause drop-offs right before the donation step.</p>
            </div>
            <div className={styles.card}>
              <h3>Speed & Trust Issues</h3>
              <p>Slow WordPress sites and complex navigation reduce credibility with new or younger supporters who expect seamless digital experiences.</p>
            </div>
            <div className={styles.card}>
              <h3>Buried Impact</h3>
              <p>Critical humanitarian efforts are often hidden under walls of text instead of clear, engaging visual project flows.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Built on Next.js. Optimized for Conversion.</h2>
          <div className={styles.grid}>
            <div className={styles.cardHighlight}>
              <h3>Instant Edge Delivery</h3>
              <p>Zero-delay page rendering powered by Next.js and Cloudflare Pages for global reliability.</p>
            </div>
            <div className={styles.cardHighlight}>
              <h3>Frictionless Mobile Flow</h3>
              <p>Streamlined, multi-currency donation interfaces that convert interest into action in 2 clicks.</p>
            </div>
            <div className={styles.cardHighlight}>
              <h3>Donor-First UX</h3>
              <p>A modern visual hierarchy that establishes authority, transparency, and trust within 5 seconds.</p>
            </div>
          </div>
        </section>
        <section id="audit-form" className={styles.auditSection}>
          <h2>Is Your Mobile Flow Costing You Contributions?</h2>
          <p>Send us your URL. We’ll provide a concise 2-minute video breakdown pointing out friction points in your donor journey—no obligations.</p>
          <form className={styles.form}>
            <input type="text" placeholder="Your Name" required className={styles.input} />
            <input type="email" placeholder="Ministry Email" required className={styles.input} />
            <input type="url" placeholder="Website URL (e.g., https://ministry.org)" required className={styles.input} />
            <button type="submit" className={styles.submitBtn}>Get Free Audit Video</button>
          </form>
        </section>
      </main>
    </div>
  );
}