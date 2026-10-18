'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { useSubmit } from '@formspree/react';
import type enSubpages from '@/dictionaries/subpages.en.json';
import styles from './ministries.module.css';

type AuditDictionary = typeof enSubpages.ministries.audit;
type AuditField = 'name' | 'email' | 'website';
type AuditFields = Record<AuditField, string> & { message: string; request_type: string; language: string; source: string };
type FieldErrors = Partial<Record<AuditField, string>>;
const fieldNames: AuditField[] = ['name', 'email', 'website'];

export default function AuditForm({ dict, lang }: { dict: AuditDictionary; lang: 'en' | 'he' }) {
  const submit = useSubmit<AuditFields>('xlggjajo');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const pending = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const labels = dict.form;
  const fields = [
    { name: 'name' as const, label: labels.nameLabel, placeholder: dict.namePlaceholder, type: 'text', autoComplete: 'name', maxLength: 150 },
    { name: 'email' as const, label: labels.emailLabel, placeholder: dict.emailPlaceholder, type: 'email', autoComplete: 'email', maxLength: 254 },
    { name: 'website' as const, label: labels.websiteLabel, placeholder: dict.websitePlaceholder, type: 'url', autoComplete: 'url', maxLength: 2048 }
  ];

  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  const focusField = (field: AuditField) => {
    (formRef.current?.elements.namedItem(field) as HTMLInputElement | null)?.focus();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending.current) return;
    const element = event.currentTarget;
    const data = new FormData(element);
    const nextErrors: FieldErrors = {};
    for (const field of fieldNames) {
      data.set(field, String(data.get(field) ?? '').trim());
      if (!data.get(field)) nextErrors[field] = labels.requiredError;
    }
    const emailInput = element.elements.namedItem('email') as HTMLInputElement;
    if (data.get('email') && emailInput.validity.typeMismatch) nextErrors.email = labels.emailError;
    if (data.get('website')) {
      try {
        const website = new URL(String(data.get('website')));
        if (!['https:', 'http:'].includes(website.protocol) || !website.hostname) nextErrors.website = labels.websiteError;
      } catch {
        nextErrors.website = labels.websiteError;
      }
    }
    setErrors(nextErrors);
    const firstError = fieldNames.find(field => nextErrors[field]);
    if (firstError) {
      setStatus('idle');
      focusField(firstError);
      return;
    }

    pending.current = true;
    setStatus('submitting');
    try {
      const result = await submit(data);
      if (result.kind === 'error') {
        const serverErrors: FieldErrors = {};
        for (const field of fieldNames) {
          if (result.getFieldErrors(field).length) serverErrors[field] = labels.serverFieldError;
        }
        setErrors(serverErrors);
        setStatus('error');
        const firstServerError = fieldNames.find(field => serverErrors[field]);
        if (firstServerError) focusField(firstServerError);
      } else {
        setStatus('success');
      }
    } catch {
      setStatus('error');
    } finally {
      pending.current = false;
    }
  };

  if (status === 'success') {
    return (
      <div ref={successRef} className={styles.successMessage} role="status" tabIndex={-1} lang={lang} dir={lang === 'he' ? 'rtl' : 'ltr'}>
        <h3>{labels.successTitle}</h3>
        <p>{labels.successDescription}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit} noValidate lang={lang}
      dir={lang === 'he' ? 'rtl' : 'ltr'} aria-busy={status === 'submitting'} data-clarity-mask="true">
      <p className={styles.formNotice}>{labels.requiredNote}</p>
      <input type="hidden" name="request_type" value="review" />
      <input type="hidden" name="language" value={lang} />
      <input type="hidden" name="source" value="ministries" />
      <input type="hidden" name="message" value="Ministry website audit request" />
      <input type="hidden" name="_subject" value="Eldar Visual: Ministries website audit" />
      <fieldset className={styles.formFields} disabled={status === 'submitting'}>
        {fields.map(field => (
          <div key={field.name} className={styles.formGroup}>
            <label htmlFor={'ministries-' + field.name} className={styles.formLabel}>{field.label}</label>
            <input id={'ministries-' + field.name} name={field.name} type={field.type} placeholder={field.placeholder}
              autoComplete={field.autoComplete} maxLength={field.maxLength} required className={styles.input}
              inputMode={field.name === 'name' ? 'text' : field.name === 'email' ? 'email' : 'url'}
              dir={field.name === 'name' ? undefined : 'ltr'} aria-invalid={errors[field.name] ? true : undefined}
              aria-describedby={errors[field.name] ? 'ministries-' + field.name + '-error' : undefined}
              onInput={() => setErrors(previous => ({ ...previous, [field.name]: undefined }))} />
            {errors[field.name] && <p id={'ministries-' + field.name + '-error'} className={styles.fieldError}>{errors[field.name]}</p>}
          </div>
        ))}
        {Object.values(errors).some(Boolean) && <p role="alert" className={styles.fieldError}>{labels.validationSummary}</p>}
        {status === 'error' && (
          <div role="alert" className={styles.submitError}>
            <p>{labels.submitError}</p>
            <a href="mailto:aviram@eldarvisual.com">{labels.emailAlternative}</a>
          </div>
        )}
        <button type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
          {status === 'submitting' ? labels.submitting : dict.submit}
        </button>
      </fieldset>
    </form>
  );
}
