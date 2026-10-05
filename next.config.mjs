import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: dirname(fileURLToPath(import.meta.url)),
  },
  // Fully static site: `next build` writes plain HTML to ./out,
  // which Cloudflare Pages serves directly (no next-on-pages needed).
  // The "/" -> "/en" redirect lives in public/_redirects.
  output: 'export',
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
