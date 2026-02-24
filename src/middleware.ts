import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const host = request.headers.get('host')
  const protocol = request.headers.get('x-forwarded-proto') || 'http'

  // 1. בדיקה אם המשתמש נכנס עם www
  // 2. בדיקה אם הפרוטוקול הוא לא https (למקרה ש-Cloudflare לא חסם את זה)
  if (host?.startsWith('www.') || protocol === 'http') {
    const newHost = host?.replace('www.', '')
    
    // יצירת כתובת חדשה מאובטחת וללא www
    const newUrl = `https://${newHost}${url.pathname}${url.search}`
    
    // החזרת הפניית 301 (קבועה) - הכי טוב ל-SEO
    return NextResponse.redirect(newUrl, 301)
  }

  return NextResponse.next()
}

// הגדרה אילו דפים המידלוור יבדוק (כדי לא להכביד על קבצי עיצוב/תמונות)
export const config = {
  matcher: [
    /*
     * התאמה לכל הנתיבים פרט לאלו שמתחילים ב:
     * - api (נתיבי API)
     * - _next/static (קבצים סטטיים)
     * - _next/image (אופטימיזציית תמונות)
     * - favicon.ico (אייקון האתר)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}