import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EldarVisual Web Studio | Premium Web Design & Development",
  description: "Specialized in crafting high-performance, stunning web applications using React, Next.js, and modern UI/UX principles.",
  keywords: "web design, web development, react, next.js, ui/ux, portfolio, studio, israel",
  icons: {
    icon: '/favicon.ico', 
    apple: '/favicon.ico', 
  },
  openGraph: {
    title: 'EldarVisual Web Studio | Premium Web Design',
    description: 'Specialized in crafting high-performance, stunning web applications.',
    url: 'https://eldarvisual.com',
    siteName: 'EldarVisual',
    images: [
      {
        url: 'https://eldarvisual.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EldarVisual Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}