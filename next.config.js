/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
      },
    images:{
        domains: ['https://imgbb.com/', 'i.ibb.co','lh3.googleusercontent.com'],
        
         
    },
    webpack(config) {
        config.experiments = {
          ...config.experiments,
          topLevelAwait: true,
        }
        return config
    }
}

module.exports = nextConfig