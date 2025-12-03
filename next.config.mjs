/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['*.replit.dev', '*.repl.co'],
    },
  },
};

export default nextConfig;
