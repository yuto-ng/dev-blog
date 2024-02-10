export type FontSizes = keyof typeof fontSizes;

export const fontSizes = {
    xxs: 10,
    xs: 12,
    s: 14,
    m: 16,
    ml: 20,
    l: 24,
    xl: 32,
    xxl: 42,
} as const satisfies { [key: string]: number };
