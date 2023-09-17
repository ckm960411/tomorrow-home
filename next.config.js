/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.ohou.se'
      }
    ]
  }
}

module.exports = nextConfig
