"use client"
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './faq.module.css';
import type { Dictionary } from '@/getDictionary';

export default function FAQSection({ dict }: { dict: Dictionary['clinics']['faq'] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{dict.title}</h2>
        <div className={styles.accordion}>
          {dict.items.map((item, index) => (
            <div key={index} className={styles.item} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              <div className={styles.question}>
                <span>{item.q}</span>
                {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </div>
              {openIndex === index && <div className={styles.answer}>{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
