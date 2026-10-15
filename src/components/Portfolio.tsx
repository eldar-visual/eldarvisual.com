import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import Testimonial from './Testimonial';
import type enDict from '@/dictionaries/en.json';
import './Portfolio.css';

type PortfolioDictionary = typeof enDict.portfolio;
const baseProjects = [
  { image: '/jts-hero.webp', link: 'https://johnnythescroll.com/', isDemo: false },
  { image: '/are-you-in-preview.png?v=62b75d43af16', link: 'https://areyouin.netlify.app/', isDemo: true },
  { image: '/adama-ptucha-preview.jpg', link: 'https://adama-ptucha.netlify.app/', isDemo: true },
  { image: '/victoria-preview.webp', link: 'https://victoria-site.netlify.app/', isDemo: true },
  { image: '/JudithArtSite.webp', link: 'https://judith-art.netlify.app/', isDemo: true },
  { image: '/AdiShoham.webp', link: 'https://adi-shoham.netlify.app/', isDemo: true }
];

export default function Portfolio({ dict, testimonial }: { dict: PortfolioDictionary; testimonial: typeof enDict.testimonial }) {
  const projects = baseProjects.map((base, index) => ({ ...base, ...dict.projects[index] }));
  const featured = projects[0];

  return (
    <section id="portfolio" className="portfolio-section" aria-labelledby="portfolio-title">
      <div className="portfolio-container">
        <header className="portfolio-header">
          <span className="sub-title">{dict.subtitle}</span>
          <h2 id="portfolio-title" className="main-title">{dict.title} <span className="gradient-text">{dict.gradient}</span></h2>
        </header>

        <article className="premium-card featured-project">
          <div className="image-wrapper">
            <div className="featured-image-frame"><Image src={featured.image} alt={featured.title} fill className="project-img" sizes="(max-width: 900px) 90vw, 40vw" /></div>
          </div>
          <div className="project-details">
            <span className="project-client-badge">{dict.clientLabel}</span>
            <span className="category-label">{featured.category}</span>
            <h3 className="project-name" dir="auto">{featured.title}</h3>
            <dl className="project-case">
              <dt>{dict.caseGoalLabel}</dt><dd>{dict.caseGoal}</dd>
              <dt>{dict.caseWorkLabel}</dt><dd>{dict.caseWork}</dd>
            </dl>
            <a href={featured.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <span className="light-sweep-text">{dict.visitSite}</span><ExternalLink size={18} aria-hidden="true" />
            </a>
            <div className="project-tech" aria-label={dict.techLabel}>
              <div className="tech-pills">{featured.tech.map(technology => <span key={technology} className="pill" dir="ltr">{technology}</span>)}</div>
            </div>
          </div>
        </article>

        <Testimonial dict={testimonial} />

      </div>
      <div className="portfolio-demos">
        <div className="portfolio-container">
          <header className="portfolio-demo-header">
            <h3>{dict.demoTitle}</h3>
            <p>{dict.demoDesc}</p>
          </header>
          <div className="portfolio-grid">
            {projects.slice(1).map(project => (
              <article key={project.link} className="premium-card">
                <div className="image-wrapper">
                  <Image src={project.image} alt={project.title} fill className="project-img" sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="project-details">
                  <span className="category-label">{project.category}</span>
                  <div className="project-heading">
                    <h4 className="project-name" dir="auto">{project.title}</h4>
                    <span className="project-demo-badge">{dict.demoLabel}</span>
                  </div>
                  <p className="project-summary">{project.desc}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <span className="light-sweep-text">{dict.viewDemo}</span><span className="project-link-name" dir="auto">{project.title}</span><ExternalLink size={16} aria-hidden="true" />
                  </a>
                  <div className="project-tech" aria-label={dict.techLabel}>
                    <div className="tech-pills">{project.tech.map(technology => <span key={technology} className="pill" dir="ltr">{technology}</span>)}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
