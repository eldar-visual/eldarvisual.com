
"use client"; 
import React, { useState } from 'react'; // הוספנו useState
import './Contact.module.css';
import { Mail, Phone, Send, CheckCircle, X, ExternalLink } from 'lucide-react'; // הוספנו X ו-ExternalLink
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xlggjajo");
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // זה התיקון הקריטי - ה-State חייב להיות כאן למעלה
  const [companyType, setCompanyType] = useState(""); 

  const emailAddress = "aviram@eldarvisual.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  // =============================================

  // פונקציה לפתיחת הפופ-אפ
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
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
  
  {/* איחוד המייל וכפתור ההעתקה */}
  <div className="contact-item contact-email-row">
    <div className="contact-clickable-area" onClick={handleEmailClick}>
      <div className="icon-box">
        <Mail size={20} />
      </div>
      <div className="contact-info">
         <span className="contact-text">{emailAddress}</span>
      </div>
    </div>
    
    <button 
      onClick={(e) => { e.stopPropagation(); handleCopy(); }} 
      className="inline-copy-btn"
    >
      {copied ? <CheckCircle size={14} /> : <Send size={14} />}
      <span>{copied ? "Copied!" : "Copy"}</span>
    </button>
  </div>

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
                        <input type="email" id="email" name="email" className="form-input" placeholder="john@exam ple.com" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="website" className="form-label">Website URL (For Free Review)</label>
                        <input type="url" id="website" name="website" className="form-input" placeholder="https://your-site.com" required />
                    </div>

                 <div className="form-group">
    <label htmlFor="type" className="form-label">Company Type</label>
    <select 
        id="type" 
        name="type" 
        /* ה-className משתנה לאפור אם ה-State ריק */
        className={`form-input ${companyType === "" ? "placeholder-active" : ""}`}
        required 
        value={companyType}
        onChange={(e) => setCompanyType(e.target.value)}
    >
        <option value="" disabled hidden>Choose company type...</option>
        <option value="startup">Tech Startup</option>
        <option value="service">Service Business (Law/Health/etc.)</option>
        <option value="ecommerce">E-commerce / Store</option>
        <option value="personal">Portfolio / Personal Brand</option>
        <option value="other">Other</option>
    </select>
</div>

    <div className="form-group">
        <label htmlFor="message" className="form-label">What is your main goal?</label>
        <textarea id="message" name="message" className="form-textarea" placeholder="Boost speed, improve design, more leads..." required></textarea>
    </div>

    <button type="submit" className="submit-btn" disabled={state.submitting}>
        {state.submitting ? 'Analyzing...' : <>Get My Free Audit <Send size={16} style={{marginLeft: '8px'}}/></>}
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