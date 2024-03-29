const path = require('path');
const loaderUtils = require('loader-utils');

const hashOnlyIdent = (context, _, exportName) =>
    'rens-' +
    loaderUtils
        .getHashDigest(
            Buffer.from(
                `filePath:${path
                    .relative(context.rootContext, context.resourcePath)
                    .replace(/\\+/g, '/')}#className:${exportName}`
            ),
            'sha512',
            'base36',
            8
        )
        .replace(/^(-?\d|--)/, '$1');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    webpack(config, { dev }) {
        const rules = config.module.rules
            .find((rule) => typeof rule.oneOf === 'object')
            .oneOf.filter((rule) => Array.isArray(rule.use));

        if (!dev)
            rules.forEach((rule) => {
                rule.use.forEach((moduleLoader) => {
                    if (
                        moduleLoader.loader?.includes('css-loader') &&
                        !moduleLoader.loader?.includes('postcss-loader')
                    )
                        moduleLoader.options.modules.getLocalIdent =
                            hashOnlyIdent;
                });
            });

        return config;
    },
};

module.exports = nextConfig;
