export type FontWeights = keyof typeof fontWeights;

export const fontWeights = {
    normal: 200,
    bold: 700,
} as const;
