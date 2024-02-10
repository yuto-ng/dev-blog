export type FontWeights = keyof typeof fontWeights;

export const fontWeights = {
    normal: 500,
    bold: 800,
} as const;
