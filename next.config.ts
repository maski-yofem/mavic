/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  basePath: '/mavic', 
  images: {
    unoptimized: true, 
  },
};

module.exports = nextConfig;