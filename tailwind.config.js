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
        },
    },
    plugins: [require('tailwindcss-animate')],
};
