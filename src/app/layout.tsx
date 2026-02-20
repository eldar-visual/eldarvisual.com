import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

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
       <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vk8t7p6xj1");
          `}
        </Script>
        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1445546377170231');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }} 
            src="https://www.facebook.com/tr?id=1445546377170231&ev=PageView&noscript=1" 
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}