"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    // בודק את שפת הדפדפן של המשתמש
    const userLang = navigator.language;
    
    // אם הדפדפן מכיל עברית, נעביר לגרסה העברית. אחרת - אנגלית.
    if (userLang.toLowerCase().includes('he')) {
      router.replace('/he');
    } else {
      router.replace('/en');
    }
  }, [router]);

  // מסך ריק בצבע הרקע של האתר לשבריר שנייה בזמן שהניתוב קורה
  return (
    <div style={{ backgroundColor: '#020617', width: '100%', height: '100vh' }}></div>
  );
}