import path from 'node:path';
import type { StorybookConfig } from '@storybook/nextjs';
import { merge } from 'webpack-merge';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-queryparams'
    ],
    // NOTE: storybookでpublicフォルダ内の画像を読み込むための設定
    staticDirs: ['../public'],
    framework: {
        name: '@storybook/nextjs',
        options: {
            nextConfigPath: '/Users/bp-123/Documents/private/nextjs-blog/next.config.js',
        },
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config) => {
        return merge(config, {
            resolve: {
                alias: {
                    ...config.resolve?.alias,
                    '@': path.resolve(__dirname, '../src'),
                },
            },
        });
    },
};
export default config;
