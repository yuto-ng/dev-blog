import type { Preview } from '@storybook/react';
import '../src/app/global.css.ts';
import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';

const defaultNavigationContext = {
    push: fn((...args: any[]) => {
        action('nextNavigation.push')(...args);
    }),
    replace: fn((...args: any[]) => {
        action('nextNavigation.replace')(...args);
    }),
    forward: fn((...args: any[]) => {
        action('nextNavigation.forward')(...args);
    }),
    back: fn((...args: any[]) => {
        action('nextNavigation.back')(...args);
    }),
    prefetch: fn((...args: any[]) => {
        action('nextNavigation.prefetch')(...args);
    }),
    refresh: fn(() => {
        action('nextNavigation.refresh')();
    }),
};

const preview: Preview = {
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: defaultNavigationContext,
        },
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
