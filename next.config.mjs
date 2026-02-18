/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  distDir: 'out', // זה מכריח את Next.js לקרוא לתיקייה out
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;