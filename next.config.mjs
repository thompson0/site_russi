/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    process.env.REPLIT_DEV_DOMAIN,
    '*.replit.dev',
  ].filter(Boolean),
};

export default nextConfig;
