import en from './dictionaries/en.json';
import he from './dictionaries/he.json';
import enSubpages from './dictionaries/subpages.en.json';
import heSubpages from './dictionaries/subpages.he.json';

export type Dictionary = typeof en & typeof enSubpages;

// ייבוא סטטי ומוחלט - מונע שגיאות של Static Export!
const dictionaries = {
  en: { ...en, ...enSubpages },
  he: { ...he, ...heSubpages },
};

// הפונקציה נשארת async כדי לא לשבור לך את הקוד ב-page.tsx
export const getDictionary = async (locale: 'en' | 'he') => {
  return dictionaries[locale] || dictionaries.en;
};
