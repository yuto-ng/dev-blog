import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';

const defaultNavigationContext = {
    push: fn((...args: unknown[]) => {
        action('nextNavigation.push')(...args);
    }),
    replace: fn((...args: unknown[]) => {
        action('nextNavigation.replace')(...args);
    }),
    forward: fn((...args: unknown[]) => {
        action('nextNavigation.forward')(...args);
    }),
    back: fn((...args: unknown[]) => {
        action('nextNavigation.back')(...args);
    }),
    prefetch: fn((...args: unknown[]) => {
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
