/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.bigboytoyz.com',
                pathname: '/new-version/products/**',
            },
            {
                protocol: 'https',
                hostname: 'drive.google.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'bbtstorage.blob.core.windows.net',
                pathname: '/carImages/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.bigboytoyz.com',
                pathname: '/products/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.bigboytoyz.com',
                pathname: '/new-version/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.bigboytoyz.com',
                pathname: '/new-version/products/product/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.bigboytoyz.com',
                pathname: '/new-version/brandmodels/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.bigboytoyz.com',
                // Allow all images from CDN
            },
        ]
    }
}

module.exports = nextConfig
