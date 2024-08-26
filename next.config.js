import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['picsum.photos'],
    },
};

export default withVanillaExtract(nextConfig);
