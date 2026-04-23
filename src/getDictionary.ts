import en from './dictionaries/en.json';
import he from './dictionaries/he.json';

// ייבוא סטטי ומוחלט - מונע שגיאות של Static Export!
const dictionaries = {
  en,
  he,
};

// הפונקציה נשארת async כדי לא לשבור לך את הקוד ב-page.tsx
export const getDictionary = async (locale: 'en' | 'he') => {
  return dictionaries[locale] || dictionaries.en;
};