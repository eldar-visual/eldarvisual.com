"use client"; 
import React, { useState } from 'react'; 
import './Contact.css';
import { Mail, Phone, Send, CheckCircle, X, ExternalLink } from 'lucide-react'; 
import { useForm, ValidationError } from '@formspree/react';

interface ContactProps {
  dict?: any;
}

const Contact = ({ dict }: ContactProps) => {
  const [state, handleSubmit] = useForm("xlggjajo");
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [companyType, setCompanyType] = useState(""); 

  const emailAddress = "aviram@eldarvisual.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsEmailModalOpen(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          
          <div className="info-side">
            <span className="section-label">{dict?.subtitle || "Let's Talk"}</span>
            <h2 className="contact-headline">{dict?.title || "Architect. Develop."}</h2>
            <h2 className="contact-headline highlight-purple">{dict?.gradient || "Launch."}</h2>
  
            <p className="contact-desc">{dict?.desc1 || "From software architecture to development, launch, and monitoring. We build stable digital infrastructures that allow your business to grow seamlessly."}</p>
            <p className="contact-desc">{dict?.desc2 || "We are currently available for select projects. Leave your details to discuss the right architecture for your product."}</p>
            
            <div className="contact-details">
              <div className="contact-item contact-email-row">
                <div className="contact-clickable-area" onClick={handleEmailClick}>
                  <div className="icon-box"><Mail size={20} /></div>
                  <div className="contact-info">
                     <span className="contact-text">{emailAddress}</span>
                  </div>
                </div>
                
                <button onClick={(e) => { e.stopPropagation(); handleCopy(); }} className="inline-copy-btn">
                  {copied ? <CheckCircle size={14} /> : <Send size={14} />}
                  <span>{copied ? (dict?.copied || "Copied!") : (dict?.copy || "Copy")}</span>
                </button>
              </div>

              <a href="tel:+972546786874" className="contact-item">
                <div className="icon-box"><Phone size={20} /></div>
                <div className="contact-info">
                   <span className="contact-text" dir="ltr">+972 54 678 6874</span>
                </div>
              </a>
            </div>
          </div>

          <div className="form-wrapper">
            {state.succeeded ? (
                <div className="success-message">
                    <CheckCircle size={48} color="#4ade80" style={{marginBottom: '1rem'}} />
                    <h3 className="success-title">{dict?.form?.successTitle || "Message Sent!"}</h3>
                    <p className="success-desc">{dict?.form?.successDesc || "Thanks for reaching out."}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">{dict?.form?.nameLabel || "Full Name"}</label>
                        <input type="text" id="name" name="name" className="form-input" placeholder={dict?.form?.namePlaceholder || "John Doe"} required />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">{dict?.form?.emailLabel || "Email Address"}</label>
                        <input type="email" id="email" name="email" className="form-input" placeholder={dict?.form?.emailPlaceholder || "john@example.com"} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="website" className="form-label">{dict?.form?.websiteLabel || "Website URL"}</label>
                        <input type="url" id="website" name="website" className="form-input" placeholder={dict?.form?.websitePlaceholder || "https://your-site.com"} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="type" className="form-label">{dict?.form?.typeLabel || "Company Type"}</label>
                        <select 
                            id="type" 
                            name="type" 
                            className={`form-input ${companyType === "" ? "placeholder-active" : ""}`}
                            required 
                            value={companyType}
                            onChange={(e) => setCompanyType(e.target.value)}
                        >
                            <option value="" disabled hidden>{dict?.form?.typePlaceholder || "Choose company type..."}</option>
                            <option value="startup">{dict?.form?.typeStartup || "Tech Startup"}</option>
                            <option value="service">{dict?.form?.typeService || "Service Business"}</option>
                            <option value="ecommerce">{dict?.form?.typeEcommerce || "E-commerce"}</option>
                            <option value="personal">{dict?.form?.typePersonal || "Portfolio"}</option>
                            <option value="other">{dict?.form?.typeOther || "Other"}</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="form-label">{dict?.form?.goalLabel || "What is your main goal?"}</label>
                        <textarea id="message" name="message" className="form-textarea" placeholder={dict?.form?.goalPlaceholder || "Boost speed..."} required></textarea>
                    </div>

                    <button type="submit" className="submit-btn" disabled={state.submitting}>
                        {state.submitting ? (dict?.form?.submitting || 'Processing...') : <>{dict?.form?.submitBtn || "Get a Performance & UX Audit"} <Send size={16} style={{marginLeft: '8px'}}/></>}
                    </button>
                </form>
            )}
          </div>
        </div>
      </div>

      {isEmailModalOpen && (
        <div className="modal-overlay" onClick={() => setIsEmailModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsEmailModalOpen(false)}><X size={24} /></button>
            <h3 className="modal-title">{dict?.modal?.title || "Choose Email Provider"}</h3>
            <div className="provider-list">
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`} target="_blank" rel="noopener noreferrer" className="provider-btn">Gmail <ExternalLink size={14}/></a>
              <a href={`https://outlook.live.com/mail/0/deeplink/compose?to=${emailAddress}`} target="_blank" rel="noopener noreferrer" className="provider-btn">Outlook <ExternalLink size={14}/></a>
              <a href={`https://compose.mail.yahoo.com/?to=${emailAddress}`} target="_blank" rel="noopener noreferrer" className="provider-btn">Yahoo <ExternalLink size={14}/></a>
              <a href={`mailto:${emailAddress}`} className="provider-btn" style={{borderColor: '#A855F7', color: '#A855F7'}}>{dict?.modal?.default || "Open Default Mail App"}</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;