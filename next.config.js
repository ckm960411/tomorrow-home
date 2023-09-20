/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.ohou.se'
      },
      {
        protocol: 'https',
        hostname: 'gi.esmplus.com'
      },
      {
        protocol: 'https',
        hostname: 'ai.esmplus.com'
      },
      {
        protocol: 'https',
        hostname: 'open.lge.co.kr'
      },
    ]
  }
}

module.exports = nextConfig
