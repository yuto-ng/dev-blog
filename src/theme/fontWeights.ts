export type FontWeights = keyof typeof fontWeights;

export const fontWeights = {
    normal: 400,
    bold: 700,
} as const;
