import type { StorybookConfig } from '@storybook/nextjs';
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const { merge } = require('webpack-merge');
import * as path from 'path';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
    ],
    // NOTE: storybookでpublicフォルダ内の画像を読み込むための設定
    staticDirs: ['../public'],
    framework: {
        name: '@storybook/nextjs',
        options: {
            nextConfigPath: path.resolve(__dirname, '../next.config.js'),
        },
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async config =>
        merge(config, {
            plugins: [new VanillaExtractPlugin()],
        }),
};
export default config;
