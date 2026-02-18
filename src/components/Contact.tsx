import React, { useState } from 'react'; // הוספנו useState
import './Contact.css';
import { Mail, Phone, Send, CheckCircle, X, ExternalLink } from 'lucide-react'; // הוספנו X ו-ExternalLink
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  // 1. ניהול הסטייט של הטופס
  const [state, handleSubmit] = useForm("xlggjajo"); // אל תשכח לשים את הקוד שלך פה!

  // 2. ניהול הסטייט של המודל (הפופ-אפ)
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const emailAddress = "aviram@eldarvisual.com";

  // פונקציה לפתיחת הפופ-אפ (במקום לפתוח מייל ישר)
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault(); // מונע את הפתיחה האוטומטית
    setIsEmailModalOpen(true);
  };
 
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        <div className="contact-grid">
          
          {/* === צד שמאל === */}
          <div className="info-side">
            <span className="section-label">Let's Talk</span>
            <h2 className="contact-headline">Build. Revamp.</h2>
            <h2 className="contact-headline highlight-purple">Manage.</h2>
  
            <p className="contact-desc">
              From concept to completion, and ongoing growth. 
              We handle everything your website needs to succeed—so you can focus on your business.
            </p>
            <p className="contact-desc">
              We are currently accepting new projects. Get in touch with us 
              to discuss your vision and how we can help achieve it.
            </p>
            
            <div className="contact-details">
              
              {/* כפתור האימייל שפותח את המודל */}
              <a href={`mailto:${emailAddress}`} onClick={handleEmailClick} className="contact-item">
                <div className="icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-info">
                   <span className="contact-text">{emailAddress}</span>
                </div>
              </a>

              <a href="tel:+972546786874" className="contact-item">
                <div className="icon-box">
                  <Phone size={20} />
                </div>
                <div className="contact-info">
                   <span className="contact-text">+972 54 678 6874</span>
                </div>
              </a>
            </div>
          </div>

          {/* === צד ימין: טופס === */}
          <div className="form-wrapper">
            {state.succeeded ? (
                <div className="success-message">
                    <CheckCircle size={48} color="#4ade80" style={{marginBottom: '1rem'}} />
                    <h3 className="success-title">Message Sent!</h3>
                    <p className="success-desc">
                        Thanks for reaching out. We'll get back to you shortly.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" id="name" name="name" className="form-input" placeholder="John Doe" required />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" id="email" name="email" className="form-input" placeholder="john@example.com" required />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Tell us about your project</label>
                        <textarea id="message" name="message" className="form-textarea" placeholder="I need a website for..." required></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <button type="submit" className="submit-btn" disabled={state.submitting}>
                        {state.submitting ? 'Sending...' : <>Send Message <Send size={16} style={{marginLeft: '8px'}}/></>}
                    </button>
                </form>
            )}
          </div>
        </div>
      </div>

      {/* === המודל (Popup) לבחירת אימייל === */}
      {isEmailModalOpen && (
        <div className="modal-overlay" onClick={() => setIsEmailModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsEmailModalOpen(false)}>
              <X size={24} />
            </button>
            
            <h3 className="modal-title">Choose Email Provider</h3>
            
            <div className="provider-list">
              {/* Gmail */}
              <a 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="provider-btn"
              >
                Gmail <ExternalLink size={14}/>
              </a>

              {/* Outlook / Hotmail */}
              <a 
                href={`https://outlook.live.com/mail/0/deeplink/compose?to=${emailAddress}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="provider-btn"
              >
                Outlook / Hotmail <ExternalLink size={14}/>
              </a>

              {/* Yahoo */}
              <a 
                href={`https://compose.mail.yahoo.com/?to=${emailAddress}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="provider-btn"
              >
                Yahoo Mail <ExternalLink size={14}/>
              </a>

              {/* Default App */}
              <a 
                href={`mailto:${emailAddress}`} 
                className="provider-btn"
                style={{borderColor: '#A855F7', color: '#A855F7'}}
              >
                Open Default Mail App
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Contact;