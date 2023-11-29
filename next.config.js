import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const nextConfig = {
    transpilePackages: ['@company/design-system'],
};

module.exports = createVanillaExtractPlugin(nextConfig);
