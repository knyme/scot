/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'i.ibb.co', 'hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
}

module.exports = nextConfig