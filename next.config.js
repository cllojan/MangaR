/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    LOCAL:process.env.URL
  }
}

module.exports = nextConfig
