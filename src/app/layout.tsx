import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // הכותרת הראשית שתופיע בגוגל ובטאב
  title: "EldarVisual Web Studio | Premium Web Design & Development",
  
  // התיאור שמופיע מתחת לכותרת בתוצאות החיפוש
  description: "Specialized in crafting high-performance, stunning web applications using React, Next.js, and modern UI/UX principles.",
  
  // מילות מפתח לחיפוש
  keywords: "web design, web development, react, next.js, ui/ux, portfolio, studio, israel",

  // -- האייקון    ---
  icons: {
    icon: '/favicon.ico', 
    apple: '/f avicon.ico', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}

<div id="site-frame"></div>