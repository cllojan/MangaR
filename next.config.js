/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  
  env:{
    LOCAL:process.env.URL
  },
  images:{
    domains:["otakuteca"],
    remotePatterns:[
      {
        protocol:"https",
        hostname:"otakuteca.com",        
        pathname:'/**'
      },
    ],
    
  }
}

module.exports = nextConfig
