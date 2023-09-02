import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Cairo", ...defaultTheme.fontFamily.sans],
                nunito: "Tajawal, sans-serif",
                tajawal: "Tajawal, sans-serif",
            },

            colors: {
                primary: {
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a",
                    950: "#172554",
                },
                secondary: {
                    900: "#b9987a",
                    800: "#c9a48b",
                    700: "#d9b49c",
                    600: "#e9c0ad",
                    500: "#f9d0be",
                },
            },
        },
    },

    plugins: [
        forms,
        typography,
        require("flowbite/plugin"),
        require("tailwindcss-debug-screens"),
        function ({ addUtilities }) {
            const extendUnderline = {
                ".underline": {
                    textDecoration: "underline",
                    "text-decoration-color": "#881337",
                },
            };
            addUtilities(extendUnderline);
        },
    ],
};
