// tailwind.config.js
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", // app directory varsa
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                green: "rgb(var(--color-green) / <alpha-value>)",
                blue: "rgb(var(--color-blue) / <alpha-value>)",
                blue2: "#45BEE0",
                green2: "#44AA00",
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
            animation: {
                marquee: 'marquee 20s linear infinite',
            },
        },
    },
    plugins: [],
};