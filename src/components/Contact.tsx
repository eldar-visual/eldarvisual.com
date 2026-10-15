'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Mail, Phone, Send, CheckCircle, Copy } from 'lucide-react';
import { useSubmit } from '@formspree/react';
import { usePathname } from 'next/navigation';
import { trackContactEvent, type ContactIntent } from '@/lib/contactAnalytics';
import type enDict from '@/dictionaries/en.json';
import BusinessTypeSelect from './BusinessTypeSelect';
import './Contact.css';

type ContactDictionary = typeof enDict.contact;
type ContactFields = { name: string; email: string; website: string; type: string; message: string; request_type: ContactIntent; language: string };
type FieldName = 'name' | 'email' | 'website' | 'message';
type FieldErrors = Partial<Record<FieldName, string>>;
const fieldNames: FieldName[] = ['name', 'email', 'website', 'message'];
const emailAddress = 'aviram@eldarvisual.com';

export default function Contact({ dict }: { dict: ContactDictionary }) {
  const submit = useSubmit<ContactFields>('xlggjajo');
  const pathname = usePathname();
  const [intent, setIntent] = useState<ContactIntent>('project');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const pending = useRef(false);
  const started = useRef(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const form = dict.form;

  useEffect(() => {
    const selectFromHash = () => {
      if (!['#contact-review', '#contact-project'].includes(window.location.hash)) return;
      const selectedIntent = window.location.hash === '#contact-review' ? 'review' : 'project';
      setIntent(selectedIntent);
      trackContactEvent(selectedIntent === 'review' ? 'review_selected' : 'project_selected', selectedIntent);
    };
    selectFromHash();
    window.addEventListener('hashchange', selectFromHash);
    return () => {
      window.removeEventListener('hashchange', selectFromHash);
      if (copyTimer.current) clearTimeout(copyTimer.current);
    };
  }, []);

  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setCopyFailed(false);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopyFailed(true);
    }
  };

  const focusField = (field: FieldName) => {
    (formRef.current?.elements.namedItem(field) as HTMLInputElement | HTMLTextAreaElement | null)?.focus();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending.current) return;
    const element = event.currentTarget;
    const data = new FormData(element);
    const nextErrors: FieldErrors = {};
    for (const field of fieldNames) data.set(field, String(data.get(field) ?? '').trim());
    for (const field of ['name', 'email', 'message'] as const) {
      if (!data.get(field)) nextErrors[field] = form.validationRequired;
    }
    const emailInput = element.elements.namedItem('email') as HTMLInputElement;
    if (data.get('email') && emailInput.validity.typeMismatch) nextErrors.email = form.validationEmail;
    if (data.get('website')) {
      try {
        const website = new URL(String(data.get('website')));
        if (!['https:', 'http:'].includes(website.protocol) || !website.hostname) nextErrors.website = form.validationWebsite;
      } catch {
        nextErrors.website = form.validationWebsite;
      }
    }
    setErrors(nextErrors);
    const firstError = fieldNames.find(field => nextErrors[field]);
    if (firstError) {
      setStatus('idle');
      focusField(firstError);
      trackContactEvent('validation_error', intent);
      return;
    }

    pending.current = true;
    setStatus('submitting');
    trackContactEvent('submit', intent);
    const submittedIntent = intent;
    try {
      const result = await submit(data);
      if (result.kind === 'error') {
        const serverErrors: FieldErrors = {};
        for (const field of fieldNames) {
          if (result.getFieldErrors(field).length) serverErrors[field] = form.validationServer;
        }
        setErrors(serverErrors);
        setStatus('error');
        const firstServerError = fieldNames.find(field => serverErrors[field]);
        if (firstServerError) focusField(firstServerError);
        trackContactEvent('error', submittedIntent);
      } else {
        setStatus('success');
        trackContactEvent('success', submittedIntent);
      }
    } catch {
      setStatus('error');
      trackContactEvent('error', submittedIntent);
    } finally {
      pending.current = false;
    }
  };

  const onFieldInput = (field: FieldName) => {
    setErrors(previous => ({ ...previous, [field]: undefined }));
    if (!started.current) {
      started.current = true;
      trackContactEvent('started', intent);
    }
  };

  const fieldAccessibility = (field: FieldName) => ({
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': [field === 'website' ? 'website-hint' : '', errors[field] ? field + '-error' : ''].filter(Boolean).join(' ') || undefined,
    onInput: () => onFieldInput(field)
  });

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-container">
        <div className="contact-grid">
          <div className="info-side">
            <span className="section-label">{dict.subtitle}</span>
            <h2 id="contact-title" className="contact-headline">
              {dict.title}<span className="highlight-purple">{dict.gradient}</span>
            </h2>
            <p className="contact-desc">{dict.desc1}</p>
            <p className="contact-desc">{dict.desc2}</p>
            <div className="contact-details">
              <div className="contact-item contact-email-row">
                <a href={'mailto:' + emailAddress} className="contact-clickable-area" aria-label={dict.emailLink + ': ' + emailAddress}>
                  <span className="icon-box"><Mail size={20} aria-hidden="true" /></span>
                  <span className="contact-text" dir="ltr">{emailAddress}</span>
                </a>
                <button type="button" onClick={handleCopy} className="inline-copy-btn" aria-label={dict.copy}>
                  {copied ? <CheckCircle size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                  <span aria-live="polite">{copied ? dict.copied : dict.copy}</span>
                </button>
              </div>
              {copyFailed && <p className="form-error" role="status">{dict.copyFailed}</p>}
              <a href="tel:+972546786874" className="contact-item">
                <span className="icon-box"><Phone size={20} aria-hidden="true" /></span>
                <span className="contact-text" dir="ltr">+972 54 678 6874</span>
              </a>
            </div>
          </div>

          <div className="form-wrapper">
            <span id="contact-project" className="contact-route-anchor" />
            <span id="contact-review" className="contact-route-anchor" />
            {status === 'success' ? (
              <div ref={successRef} className="success-message" role="status" aria-live="polite" tabIndex={-1}>
                <CheckCircle size={48} aria-hidden="true" />
                <h3 className="success-title">{form.successTitle}</h3>
                <p className="success-desc">{form.successDesc}</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate aria-busy={status === 'submitting'} data-clarity-mask="true">
                <fieldset className="request-options" disabled={status === 'submitting'}>
                  <legend>{form.requestLabel}</legend>
                  {(['project', 'review'] as const).map(option => (
                    <label key={option} className={'request-option ' + (intent === option ? 'selected' : '')}>
                      <input type="radio" name="request_type" value={option} checked={intent === option} onChange={() => {
                        setIntent(option);
                        window.history.replaceState(null, '', '#contact-' + option);
                        trackContactEvent(option === 'review' ? 'review_selected' : 'project_selected', option);
                      }} />
                      <span>{option === 'project' ? form.projectOption : form.reviewOption}</span>
                    </label>
                  ))}
                </fieldset>
                <h3 className="form-title">{intent === 'review' ? form.reviewTitle : form.projectTitle}</h3>
                {intent === 'review' && <div className="review-scope"><p>{form.reviewScope}</p><p>{form.reviewTiming}</p></div>}
                <p className="form-hint">{form.requiredNote}</p>
                <input type="hidden" name="language" value={pathname.startsWith('/he') ? 'he' : 'en'} />
                <input type="hidden" name="_subject" value={'Eldar Visual: ' + (intent === 'review' ? 'Website review' : 'New project')} />
                <fieldset className="contact-fields" disabled={status === 'submitting'}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">{form.nameLabel}</label>
                    <input id="name" name="name" className="form-input" placeholder={form.namePlaceholder} autoComplete="name" maxLength={150} required {...fieldAccessibility('name')} />
                    {errors.name && <p id="name-error" className="form-error">{errors.name}</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">{form.emailLabel}</label>
                    <input type="email" id="email" name="email" className="form-input" placeholder={form.emailPlaceholder} autoComplete="email" inputMode="email" dir="ltr" maxLength={254} required {...fieldAccessibility('email')} />
                    {errors.email && <p id="email-error" className="form-error">{errors.email}</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="website" className="form-label">{form.websiteLabel} <span>({form.optional})</span></label>
                    <input type="url" id="website" name="website" className="form-input" placeholder={form.websitePlaceholder} autoComplete="url" inputMode="url" dir="ltr" maxLength={2048} {...fieldAccessibility('website')} />
                    <p id="website-hint" className="form-hint">{form.websiteHint}</p>
                    {errors.website && <p id="website-error" className="form-error">{errors.website}</p>}
                  </div>
                  <div className="form-group">
                    <label id="type-label" htmlFor="type" className="form-label">{form.typeLabel} <span>({form.optional})</span></label>
                    <BusinessTypeSelect form={form} disabled={status === 'submitting'} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">{form.goalLabel}</label>
                    <textarea id="message" name="message" className="form-textarea" placeholder={form.goalPlaceholder} maxLength={10000} required {...fieldAccessibility('message')} />
                    {errors.message && <p id="message-error" className="form-error">{errors.message}</p>}
                  </div>
                </fieldset>
                {Object.values(errors).some(Boolean) && <p className="form-error" role="alert">{form.validationSummary}</p>}
                {status === 'error' && <div className="form-failure" role="alert"><p>{form.errorMessage}</p><a href={'mailto:' + emailAddress}>{form.emailAlternative}</a></div>}
                <p className="form-next-step">{form.nextStep}</p>
                <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
                  {status === 'submitting' ? form.submitting : intent === 'review' ? form.reviewSubmit : form.submitBtn}
                  <Send size={16} aria-hidden="true" />
                </button>
                <p className="form-hint form-privacy">{form.privacyNote}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
