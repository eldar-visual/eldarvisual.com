import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: dirname(fileURLToPath(import.meta.url)),
  },
  async redirects() {
    return [{ source: '/', destination: '/en', permanent: false }];
  },
  distDir: 'out', // זה מכריח את Next.js לקרוא לתיקייה out
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
