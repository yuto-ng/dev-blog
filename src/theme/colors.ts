export type Colors = keyof typeof colors;

export const colors = {
    lightBlack: '#333333',
    lightGrey: '#D9D9D9',
    white: '#FFFFFF',
    royalBlue: '#3567B1',
    lightSeaGreen: '#00B5B5',
} as const satisfies {
    [key: string]: `#${string}`;
};
