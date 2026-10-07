import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.1.13'],
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

export default function config(phase) {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...nextConfig,
      output: undefined,
      async redirects() {
        return [{ source: '/', destination: '/en', permanent: false }];
      },
    };
  }

  return nextConfig;
}
