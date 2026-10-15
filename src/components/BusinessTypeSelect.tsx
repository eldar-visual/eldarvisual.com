'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import type enDict from '@/dictionaries/en.json';

export default function BusinessTypeSelect({ form, disabled }: { form: typeof enDict.contact.form; disabled: boolean }) {
  const options = [
    { value: '', label: form.typePlaceholder },
    { value: 'startup', label: form.typeStartup },
    { value: 'service', label: form.typeService },
    { value: 'ecommerce', label: form.typeEcommerce },
    { value: 'nonprofit', label: form.typePersonal },
    { value: 'other', label: form.typeOther }
  ];
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const selected = options.find(option => option.value === value)!;

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, [open]);

  useEffect(() => {
    if (open) rootRef.current?.querySelector('[data-active="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [open, activeIndex]);

  const choose = (index: number) => {
    setValue(options[index].value);
    setOpen(false);
    triggerRef.current?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape' || event.key === 'Tab') {
      setOpen(false);
      if (event.key === 'Escape' && open) event.preventDefault();
      return;
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!open) {
        setActiveIndex(options.findIndex(option => option.value === value));
        setOpen(true);
      } else {
        const direction = event.key === 'ArrowDown' ? 1 : -1;
        setActiveIndex(index => (index + direction + options.length) % options.length);
      }
    } else if (open && (event.key === 'Home' || event.key === 'End')) {
      event.preventDefault();
      setActiveIndex(event.key === 'Home' ? 0 : options.length - 1);
    } else if (open && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      choose(activeIndex);
    }
  };

  return (
    <div ref={rootRef} className="business-select" onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
    }}>
      <input type="hidden" name="type" value={value} />
      <button ref={triggerRef} type="button" id="type" className="form-input business-select-trigger"
        role="combobox" aria-haspopup="listbox" aria-expanded={open && !disabled} aria-controls="business-options"
        aria-labelledby="type-label type-value" aria-activedescendant={open && !disabled ? 'business-option-' + activeIndex : undefined}
        disabled={disabled} onKeyDown={handleKeyDown} onClick={() => {
          setActiveIndex(options.findIndex(option => option.value === value));
          setOpen(current => !current);
        }}>
        <span id="type-value">{selected.label}</span><ChevronDown size={18} aria-hidden="true" />
      </button>
      {open && !disabled && (
        <ul id="business-options" role="listbox" aria-labelledby="type-label" className="business-select-menu">
          {options.map((option, index) => (
            <li key={option.value} role="presentation">
              <button type="button" role="option" id={'business-option-' + index} aria-selected={value === option.value}
                data-active={activeIndex === index} tabIndex={-1} className="business-select-option"
                onMouseDown={event => event.preventDefault()} onMouseEnter={() => setActiveIndex(index)}
                onClick={() => choose(index)}>
                <span>{option.label}</span>{value === option.value && <Check size={16} aria-hidden="true" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
