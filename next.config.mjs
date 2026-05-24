/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rada.info',
      },
      {
        protocol: 'https',
        hostname: 'lcptodcz.lviv.ua',
      },
    ],
  },
};

export default nextConfig;
