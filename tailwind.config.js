/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // fontFamily: {
            //     sans: [
            //         'Segoe UI',
            //         'Segoe UI Web (West European)',
            //         '-apple-system',
            //         'BlinkMacSystemFont',
            //         'Roboto',
            //         'Helvetica Neue',
            //         'sans-serif',
            //     ],
            // },
            colors: {
                primary: '#0095D9',
                primaryhover: '#00537b',
                primarytext: '#0095D9',
                secondarytextgray: '#74757f',
                secondaryblack: '#2d3742',
                secondarytextlitegray: '#aeb1be',
                secondarytextwhite: '#ffffff',
                bordergray: '#e8e9ee',
                backgroundwhite: '#ffffff',
                backgroundgray: '#f5f6fa',
            },
        },
    },
    plugins: [],
};
