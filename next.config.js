import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const nextConfig = {
    transpilePackages: ['@company/design-system'],
};

export default createVanillaExtractPlugin(nextConfig);
