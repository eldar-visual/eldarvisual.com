import type { Metadata } from "next";
import { getDictionary } from '@/getDictionary';

type MetadataProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang === 'he' ? 'he' : 'en');
  return {
    ...dict.blessIsrael.metadata,
    openGraph: {
      ...dict.blessIsrael.metadata,
      url: `https://eldarvisual.com/${lang}/christians/bless-israel`,
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function BlessIsraelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
