import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.toyotavindecoder.com',
      },
    ],
  },
};

export default nextConfig;