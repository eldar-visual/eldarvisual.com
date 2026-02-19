import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: "Aviram Eldar",
    category: "Official Studio Site", 
    desc: "My professional digital presence, featuring high-end web design and interactive motion.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/aviramweb.png",
    link: "https://aviram-eldar.website/#home" 
  },
  {
    id: 2,
    title: "Judith Asher Art",
    category: "Concept & UI Demo", 
    desc: "A digital gallery concept exploring minimalist aesthetics and visual storytelling.",
    tech: ["Next.js", "CSS Modules"],
    image: "/JudithArtSite.png",
    link: "https://judith-art.netlify.app" 
  },
  {
    id: 3, 
    title: "Adi Shoham",
    category: "Full-Stack Concept", 
    desc: "Premium jewelry store demonstration, integrating MongoDB for dynamic content management.",
    tech: ["Next.js", "MongoDB", "Node.js"],
    image: "/AdiShoham.png",
    link: "https://adi-shoham.netlify.app/" 
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        
        <header className="portfolio-header">
          <span className="sub-title">Our Work</span>
          <h2 className="main-title">
            Recent <span className="gradient-text">Projects.</span>
          </h2>
        </header>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <article key={project.id} className="premium-card">
              <div className="image-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
                
                <div className="card-overlay">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="view-btn"
                  >
                    View Project <ArrowUpRight size={20} />
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
                  {project.tech.map(t => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mobile-link">
                  Visit Site <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}