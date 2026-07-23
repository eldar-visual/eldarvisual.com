import "../globals.css"; 
import { Assistant } from "next/font/google";

const assistant = Assistant({ 
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "600", "700"] 
});

export const metadata = {
  title: 'EldarVisual | פתרונות Web למרפאות',
  description: 'שדרוג אתרי מרפאות לטכנולוגיית Next.js להגדלת המרות.',
};

export default function ClinicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body 
        className={assistant.className}
        suppressHydrationWarning
        style={{ 
          backgroundColor: '#F8FAFC', // הרקע הבהיר והנקי
          color: '#0F172A',
          margin: 0,
          padding: 0
        }}
      >
        {children}
      </body>
    </html>
  );
}