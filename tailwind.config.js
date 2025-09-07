/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                royalBlue: '#3567B1',
                lightSeaGreen: '#00B5B5',
                lightBlack: '#333333',
                lightGrey: '#D9D9D9',
            },
            opacity: {
                default: '0.7',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
