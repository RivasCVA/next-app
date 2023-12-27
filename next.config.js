/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
    webpack: (config) => {
        // setup svg imports
        const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));
        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/,
            },
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
                use: ['@svgr/webpack'],
            }
        );
        fileLoaderRule.exclude = /\.svg$/i;
        // return modified config
        return config;
    },
}
