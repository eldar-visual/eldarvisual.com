import Image from 'next/image';
import styles from './ministries.module.css';
import { getDictionary } from '@/getDictionary';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang === 'he' ? 'he' : 'en');
  return {
    ...dict.ministries.metadata,
    openGraph: {
      ...dict.ministries.metadata,
      url: `https://eldarvisual.com/${lang}/ministries`,
    },
  };
}

export default async function MinistriesPage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const { ministries: dict } = await getDictionary(lang === 'he' ? 'he' : 'en');

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroViewport}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/MiniHero.png" 
            alt={dict.hero.imageAlt}
            fill
            priority
            className={styles.bgImage}
          />
          <div className={styles.overlay}></div>
        </div>
        
        <div className={styles.heroContent}>
          <span className={styles.tag}>{dict.hero.tag}</span>
          <h1 className={styles.title}>
            {dict.hero.title} <br /> {dict.hero.gradient}
          </h1> 
          <p className={styles.subtitle}>
            {dict.hero.subtitle}</p>
          <div className={styles.ctaGroup}>
            <a href="#audit-form" className={styles.primaryCta}>{dict.hero.cta}</a>
          </div>
        </div> 
      </section>

      {/* Main Content */}
      <main className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{dict.problem.title}</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>{dict.problem.cards[0].title}</h3>
              <p>{dict.problem.cards[0].description}</p>
            </div>
            <div className={styles.card}>
              <h3>{dict.problem.cards[1].title}</h3>
              <p>{dict.problem.cards[1].description}</p>
            </div>
            <div className={styles.card}>
              <h3>{dict.problem.cards[2].title}</h3>
              <p>{dict.problem.cards[2].description}</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{dict.solution.title}</h2>
          <div className={styles.grid}>
            <div className={styles.cardHighlight}>
              <h3>{dict.solution.cards[0].title}</h3>
              <p>{dict.solution.cards[0].description}</p>
            </div>
            <div className={styles.cardHighlight}>
              <h3>{dict.solution.cards[1].title}</h3>
              <p>{dict.solution.cards[1].description}</p>
            </div>
            <div className={styles.cardHighlight}>
              <h3>{dict.solution.cards[2].title}</h3>
              <p>{dict.solution.cards[2].description}</p>
            </div>
          </div>
        </section>
        <section id="audit-form" className={styles.auditSection}>
          <h2>{dict.audit.title}</h2>
          <p>{dict.audit.description}</p>
          <form className={styles.form}>
            <input type="text" placeholder={dict.audit.namePlaceholder} required className={styles.input} />
            <input type="email" placeholder={dict.audit.emailPlaceholder} required className={styles.input} />
            <input type="url" placeholder={dict.audit.websitePlaceholder} required className={styles.input} />
            <button type="submit" className={styles.submitBtn}>{dict.audit.submit}</button>
          </form>
        </section>
      </main>
    </div>
  );
}
