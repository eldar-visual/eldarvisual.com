import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "../globals.css"; 
import Script from 'next/script';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// ייבוא המילונים
import heDict from '../../dictionaries/he.json';
import enDict from '../../dictionaries/en.json';

const assistant = Assistant({ 
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "600", "700", "800"] 
});

// 1. הוספת הפונקציה הקריטית ל-Static Export שפותרת את השגיאה
export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'he' },
  ];
}

// Only the languages above exist; any other /[lang] value is a 404.
// Keeps every route fully static (required by next-on-pages).
export const dynamicParams = false;

// 2. הגדרת טיפוסים נכונה (Types) במקום השימוש ב-any
type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

type MetadataProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || 'en';
  const isHe = lang === 'he';
  const dict = isHe ? heDict : enDict;
  
  const ogImage = isHe ? "/og-image-he.png" : "/og-image.webp";
  
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    openGraph: {
      title: dict.metadata.ogTitle,
      description: dict.metadata.ogDescription,
      url: `https://eldarvisual.com/${lang}`,
      siteName: "EldarVisual",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: dict.metadata.imageAlt,
        },
      ],
      locale: isHe ? "he_IL" : "en_US",
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || 'en';
  
  const dir = lang === 'he' ? 'rtl' : 'ltr';
  const dict = lang === 'he' ? heDict : enDict;

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning={true}>
      <body className={assistant.className} suppressHydrationWarning={true}>
        
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "vk8t7p6xj1");`}
        </Script>
        
        
        
        <main>{children}</main>

       
        
      </body>
    </html>
  );
}
