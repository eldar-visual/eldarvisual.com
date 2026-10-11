import { ArrowUpRight, Quote } from 'lucide-react';
import './Testimonial.css';

interface TestimonialDictionary {
  subtitle: string;
  title: string;
  gradient: string;
  quote: string;
  name: string;
  role: string;
  readFull: string;
  originalLabel?: string;
  fullRecommendation?: string[];
}

const originalRecommendation = [
  'When you build a tower, one should calculate and plan the project. Likewise, the person who would like to create a business, often benefits from investing in a professional website. Eldar Visual enables a company or private person to reach clients through the world wide web, in a way that is fast and fantastic.',
  'Aviram has shown his ability to design, produce and launch an all-in complete website. Through personal relation and communication, he shared my vision as a Tour Guide in Israel, and created a save, clear and beautiful site:',
  'This website is a recommendation in itself for his work. Johnny ends with a big thank you (תודה) to Aviram.'
];

function RecommendationBody({ paragraphs, lang }: { paragraphs: string[]; lang: 'he' | 'en' }) {
  return (
    <blockquote className="testimonial-full-quote" lang={lang} dir={lang === 'he' ? 'rtl' : 'ltr'}>
      {paragraphs.map((paragraph, index) => (
        <p key={paragraph}>
          {paragraph}
          {index === 1 && (
            <> <a href="https://johnnythescroll.com/" target="_blank" rel="noopener noreferrer" dir="ltr">www.johnnythescroll.com</a></>
          )}
        </p>
      ))}
    </blockquote>
  );
}

export default function Testimonial({ dict }: { dict: TestimonialDictionary }) {
  return (
    <section id="testimonial" className="testimonial-section" aria-labelledby="testimonial-title">
      <div className="testimonial-container">
        <header className="testimonial-header">
          <span className="testimonial-eyebrow">{dict.subtitle}</span>
          <h2 id="testimonial-title" className="testimonial-title">
            {dict.title} <span>{dict.gradient}</span>
          </h2>
        </header>

        <figure className="testimonial-card">
          <Quote className="testimonial-quote-icon" size={40} aria-hidden="true" />
          <blockquote className="testimonial-excerpt">
            <p>{dict.quote}</p>
          </blockquote>

          <figcaption className="testimonial-attribution">
            <div className="testimonial-client">
              <span className="testimonial-name">{dict.name}</span>
              <span className="testimonial-role">{dict.role}</span>
            </div>
            <a className="testimonial-project" href="https://johnnythescroll.com/" target="_blank" rel="noopener noreferrer" dir="ltr">
              Johnny the Scroll <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </figcaption>

          <details className="testimonial-details">
            <summary>{dict.readFull}</summary>
            {dict.fullRecommendation && (
              <RecommendationBody paragraphs={dict.fullRecommendation} lang="he" />
            )}
            {dict.originalLabel && <h3 className="testimonial-original-label">{dict.originalLabel}</h3>}
            <RecommendationBody paragraphs={originalRecommendation} lang="en" />
          </details>
        </figure>
      </div>
    </section>
  );
}
