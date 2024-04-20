/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
];
export const theme = {
    extend: {
        height: {
            '100': '650px',
          }
    },
};
export const plugins = [];