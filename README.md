# 🧬 מסמך DNA ופרופיל טכני – EldarVisual Web Studio

## 1. חזון ושפה עיצובית (Design Language)

הפרויקט הוא עמוד נחיתה (Landing Page) עבור סטודיו לפיתוח ועיצוב ווב. המטרה היא לשדר יוקרה, טכנולוגיה ומודרניות.

* **פאלטת צבעים:** Dark Mode אגרסיבי.
* **צבע ראשי:** `Slate-900` (`#0F172A`) - משמש כרקע ראשי.
* **צבע משני (להפרדה):** `Slate-950` / שחור עמוק (`#020617`) - משמש לסקשנים מתחלפים (Portfolio).
* **צבעי דגש (Accents):** גרדיאנטים של כחול (`Blue-500`), סגול (`Purple-500`) וורוד/מגנטה, המשמשים לטקסטים מודגשים (`text-transparent bg-clip-text`) ואפקטי זוהר (Glow).


* **טיפוגרפיה:** Sans-serif, נקייה, שימוש במשקלים כבדים לכותרות (`font-bold`) וריווח אותיות (`tracking-wider`) לתתי-כותרות.
* **מוטיבים ויזואליים:**
* **Glassmorphism:** רקעים חצי שקופים עם טשטוש (`backdrop-blur`).
* **Glow Effects:** צלליות צבעוניות סביב כרטיסים ואלמנטים.
* **מינימליזם:** שימוש ב-Negative Space (חלל ריק) רב.



## 2. ארכיטקטורה טכנית (Tech Stack)

* **Framework:** React (עם TypeScript).
* **Styling:** Tailwind CSS (למבנה ועיצוב בסיסי) + CSS Modules/Global CSS (לאפקטים מורכבים).
* **Icons:** Lucide React.
* **State Management:** `useState` (לניהול תפריט מובייל).

---

## 3. פתרון הליבה: מנגנון הגלילה (The Navigation Logic)

לאחר ניסיונות עם CSS (`scroll-margin`), הוחלט על מעבר לפתרון **JavaScript כירורגי** כדי להבטיח שליטה מלאה במיקום הגלילה ולמנוע הסתרה ע"י ה-Navbar או הופעת "זנבות" מסקשנים קודמים.

**הלוגיקה (נמצאת ב-`Navbar.tsx`):**

1. ביטול התנהגות הלינק הדיפולטיבית (`e.preventDefault`).
2. חישוב המיקום האבסולוטי של הסקשן בדף.
3. הפחתת **100px** באופן יזום (גובה ה-Navbar + מרווח נשימה).
4. ביצוע גלילה חלקה (`window.scrollTo({ behavior: 'smooth' })`).

---

## 4. פירוט הרכיבים (Components Breakdown)

### A. גדרות גלובליות (`index.css`)

מגדיר את תצורת המסך המלא לכל סקשן.

```css
html { scroll-behavior: smooth; }
body { background-color: #020617; overflow-x: hidden; }

/* מחלקת הבסיס לכל הסקשנים - מבטיחה מסך מלא */
.section-screen {
  width: 100%;
  min-height: 100dvh; /* Dynamic Viewport Height למובייל */
  display: flex;
  flex-direction: column;
  /* padding מטופל פרטנית בכל קומפוננטה כרגע ע"י Tailwind */
}

```

### B. ה-Navbar (המוח)

* **תפקיד:** ניווט, לוגו, כפתור הנעה לפעולה (CTA).
* **עיצוב:** `fixed top-0`, רקע חצי שקוף (`backdrop-blur-md`).
* **פונקציונליות:** מכיל את פונקציית `scrollToSection` שמנהלת את הגלילה לכל האתר.
* **Mobile:** תפריט המבורגר שנפתח (State) ונסגר אוטומטית בעת לחיצה על לינק.

### C. סקשן Hero (קיים - הנחה)

* צריך להיות מוגדר עם `id="hero"`.
* גובה: `min-h-screen`.

### D. סקשן Process (תהליך העבודה)

* **ID:** `process`
* **צבע רקע:** `bg-[#0F172A]` (כחול כהה).
* **מבנה:** כותרת ראשית + 4 שלבים.
* **כרטיסים ויזואליים:** כל שלב מכיל כרטיס עם אנימציית CSS ייחודית:
1. **Discovery:** גרף עמודות (CSS Bars).
2. **Design:** כרטיס תלת-ממדי מסובב (Perspective & Rotate).
3. **Development:** טרמינל קוד עם נקודות (Mac style) וסמן מהבהב.
4. **Launch:** אייקון טיל עם מסגרת מסתובבת.


* **עיצוב מיוחד:** הוסרו מחלקות ה-Tailwind המורכבות לטובת CSS נקי בקובץ חיצוני/מודולרי לשמירה על סדר.

### E. סקשן Portfolio (תיק עבודות)

* **ID:** `portfolio`
* **צבע רקע:** `bg-[#020617]` (שחור/כחול עמוק מאוד) – **ליצירת הפרדה ויזואלית (Contrast) מהסקשנים השכנים.**
* **מבנה:** גריד (Grid) רספונסיבי:
* מובייל: עמודה 1.
* טאבלט: 2 עמודות.
* דסקטופ: 3 עמודות.


* **כרטיס פרויקט:** תמונה, קטגוריה, כותרת, תיאור, תגיות טכנולוגיה, לינק.
* **אינטראקציה:** Hover מעלה את הכרטיס למעלה ויוצר צללית זוהרת.

### F. סקשן Contact (צור קשר)

* **ID:** `contact`
* **צבע רקע:** `bg-[#0F172A]` (חזרה לצבע הכחול הכהה).
* **מבנה:** Flexbox. צד אחד טקסט ופרטים (אימייל, טלפון), צד שני טופס.
* **טופס:** שדות מעוצבים עם רקע כהה ובורדר עדין, פוקוס בצבע כחול.

---

## 5. תמונת מצב נוכחית וקבצים קריטיים

להלן הקוד הסופי (ה-DNA) של הקומפוננטות כפי שסוכמו:

### `Navbar.tsx` (מנגנון הגלילה)

```tsx
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  setIsOpen(false);
  const element = document.getElementById(id);
  if (element) {
    const offset = 100; // המרווח הקדוש
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};
// השימוש בלינקים: onClick={(e) => scrollToSection(e, 'target-id')}

```

### מבנה הסקשנים (Template)

```tsx
// דוגמה ל-Portfolio שממחישה את השיטה
<section id="portfolio" className="w-full min-h-screen py-20 bg-[#020617] text-white flex flex-col justify-center">
  <div className="max-w-6xl mx-auto px-6">
     {/* Content */}
  </div>
</section>

```

---

## 6. משימות להמשך (What's Next?)

זהו הצ'ק-ליסט להשלמת הפרויקט לרמת Production:

1. **אינטגרציה של Hero:** לוודא שסקשן ה-Hero הקיים מחובר ל-`id="hero"` כדי שהלוגו ב-Navbar יחזיר למעלה תקין.
2. **תמונות אמיתיות:** החלפת ה-Placeholders ב-Portfolio בתמונות מסך אמיתיות של פרויקטים.
3. **פונקציונליות טופס:** חיבור הטופס ב-`Contact` לשירות שליחת מיילים (כגון EmailJS או Formspree) כדי שיהיה פונקציונלי.
4. **Footer:** יצירת Footer תחתון קטן עם זכויות יוצרים ולינקים לרשתות חברתיות (מתחת ל-Contact).
5. **בדיקת מובייל (QA):**
* לוודא שהתפריט נפתח ונסגר חלק.
* לוודא שאין גלילה אופקית (Horizontal Scroll) לא רצויה.
* לוודא שהטקסטים לא נחתכים במסכים צרים מאוד.


6. **SEO:** הוספת תגיות Meta, כותרות נכונות (H1, H2), וטקסט אלטרנטיבי לתמונות.


formfree user name:
https://formspree.io/forms/maqqelkl/integration