/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://bank-transaction-qyk83vopr-dobafullstack.vercel.app/:path*',
      },
    ]
  },
};

module.exports = nextConfig;
