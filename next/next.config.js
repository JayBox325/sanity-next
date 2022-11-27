const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,

    images: {
        domains: ['cdn.sanity.io'],
    },

    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },

    async headers() {
        return [
            {
                source: '/',
                headers: [
                    {
                        key: "Cache-Control",
                        value: "s-maxage=1, stale-while-revalidate=59",
                    },
                    {
                        key: "Accept-Encoding",
                        value: "gzip",
                    },
                ],
            },
        ];
    },
}

module.exports = nextConfig
