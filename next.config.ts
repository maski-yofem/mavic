import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  basePath: '/mavic', 
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;