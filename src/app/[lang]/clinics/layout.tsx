import "../../globals.css";
import { Assistant } from "next/font/google";

const assistant = Assistant({ 
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "600", "700"] 
});

export default function ClinicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div
        className={assistant.className}
        style={{ 
          backgroundColor: '#F8FAFC', // הרקע הבהיר והנקי
          color: '#0F172A',
          margin: 0,
          padding: 0
        }}
      >
        {children}
      </div>
  );
}
