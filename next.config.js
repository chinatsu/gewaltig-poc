/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // serverActions: true, // not needed at the moment
    mdxRs: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["gravatar.com"],
    disableStaticImages: true,
  },
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
