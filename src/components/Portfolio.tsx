import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import './Portfolio.css';
import Image from 'next/image';

interface PortfolioProps {
  dict?: any;
}

// המערך הבסיסי - מחזיק רק תמונות וקישורים קשיחים
const baseProjects = [
  { id: 1, image: "/aviramweb.webp", link: "https://aviram-eldar.website/#home" },
  { id: 2, image: "/JudithArtSite.webp", link: "https://judith-art.netlify.app" },
  { id: 3, image: "/AdiShoham.webp", link: "https://adi-shoham.netlify.app/" }
];

export default function Portfolio({ dict }: PortfolioProps) {
  
  // מיזוג המערך הבסיסי עם הטקסטים מהמילון
  const translatedProjects = baseProjects.map((base, index) => {
    const dictProject = dict?.projects?.[index];
    return {
      ...base,
      title: dictProject?.title || "Project Title",
      category: dictProject?.category || "Category",
      desc: dictProject?.desc || "Description",
      tech: dictProject?.tech || []
    };
  });

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        
        <header className="portfolio-header">
          <span className="sub-title">{dict?.subtitle || "Our Work"}</span>
          <h2 className="main-title">
            {dict?.title || "Recent"} <span className="gradient-text">{dict?.gradient || "Projects."}</span>
          </h2>
        </header>

        <div className="portfolio-grid">
          {translatedProjects.map((project) => (
            <article key={project.id} className="premium-card">
              <div className="image-wrapper">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill 
                  className="project-img" 
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={75}
                />
                <div className="card-overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-btn">
                    {dict?.viewProject || "View Project"} <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>

              <div className="project-details">
                <div className="details-header">
                  <span className="category-label">{project.category}</span>
                  <h3 className="project-name">{project.title}</h3>
                </div>
                
                <p className="project-summary">{project.desc}</p>
                
                <div className="tech-pills">
                  {project.tech.map((t: string) => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mobile-link">
                  {dict?.visitSite || "Visit Site"} <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}