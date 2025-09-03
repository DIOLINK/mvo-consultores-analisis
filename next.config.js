/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/mvo-consultores-analisis' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mvo-consultores-analisis/' : '',
}

module.exports = nextConfig
