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
            },
        },
    },
    plugins: [],
};