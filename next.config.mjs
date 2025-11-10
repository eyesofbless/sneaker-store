
/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    basePath: process.env.NODE_ENV === 'production' ? '/sneaker-store' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/sneaker-store/' : '',
    images:{
        domains: [
            'ohozyrqexwyjrgqkuinx.supabase.co'
        ]
    }
};

export default nextConfig;
