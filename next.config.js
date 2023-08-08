/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["gravatar.com"],
    disableStaticImages: true,
  },
}

module.exports = nextConfig
