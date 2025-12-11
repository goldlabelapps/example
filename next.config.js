const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  transpilePackages: ['react-map-gl', 'mapbox-gl'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'live.staticflickr.com',
        pathname: '/**',
      },
    ],
  },

  // explicitly choose webpack to avoid the Turbopack error
  webpack: (config) => config,
};

module.exports = withPWA(nextConfig);
