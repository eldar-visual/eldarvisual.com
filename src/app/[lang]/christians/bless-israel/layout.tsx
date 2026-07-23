import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bless Israel Network | Interactive Prototype",
  description: "Digital experience concept by EldarVisual",
  robots: {
    index: false,
    follow: false,
  },
};

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