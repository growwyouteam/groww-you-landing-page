/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export', // <-- Commented out: Static exports do not support Next.js API routes (/api/*)
  trailingSlash: true,
  images: {
    // Add remote patterns if you plan to fetch images from an external source later
    unoptimized: true,
  },
};

export default nextConfig;
