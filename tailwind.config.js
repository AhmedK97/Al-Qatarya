/* eslint-env node */
import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

const plugin = require("tailwindcss/plugin");

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
        "./resources/css/**/*.css",
        "./resources/js/**/*.js",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        asideScrollbars: {
            light: "light",
            gray: "gray",
        },
        extend: {
            zIndex: {
                "-1": "-1",
            },
            flexGrow: {
                5: "5",
            },
            maxHeight: {
                "screen-menu": "calc(100vh - 3.5rem)",
                modal: "calc(100vh - 160px)",
            },
            transitionProperty: {
                position: "right, left, top, bottom, margin, padding",
                textColor: "color",
            },
            keyframes: {
                "fade-out": {
                    from: { opacity: 1 },
                    to: { opacity: 0 },
                },
                "fade-in": {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
            },
            animation: {
                "fade-out": "fade-out 250ms ease-in-out",
                "fade-in": "fade-in 250ms ease-in-out",
                "spin-slow": "spin 3s linear infinite",
            },

            fontFamily: {
                sans: ["Cairo", ...defaultTheme.fontFamily.sans],
                nunito: "Tajawal, sans-serif",
                tajawal: "Tajawal, sans-serif",
                ahmedltfont: "Ahmed LT Regular",
            },
            colors: {
                rose: {
                    900: "#660033",
                },
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
                    900: "#cccccc",
                    800: "#cccccc",
                    700: "#cccccc",
                    600: "#cccccc",
                    500: "#cccccc",
                },
            },
        },
    },
    plugins: [
        forms,
        typography,
        require("@tailwindcss/forms"),
        require("flowbite/plugin"),
        require("tailwindcss-debug-screens"),
        plugin(function ({ matchUtilities, theme, addUtilities }) {
            matchUtilities(
                {
                    "aside-scrollbars": (value) => {
                        const track = value === "light" ? "100" : "900";
                        const thumb = value === "light" ? "300" : "600";
                        const color = value === "light" ? "gray" : value;

                        return {
                            scrollbarWidth: "thin",
                            scrollbarColor: `${theme(
                                `colors.${color}.${thumb}`
                            )} ${theme(`colors.${color}.${track}`)}`,
                            "&::-webkit-scrollbar": {
                                width: "8px",
                                height: "8px",
                            },
                            "&::-webkit-scrollbar-track": {
                                backgroundColor: theme(
                                    `colors.${color}.${track}`
                                ),
                            },
                            "&::-webkit-scrollbar-thumb": {
                                borderRadius: "0.25rem",
                                backgroundColor: theme(
                                    `colors.${color}.${thumb}`
                                ),
                            },
                        };
                    },
                },
                { values: theme("asideScrollbars") }
            );
            const extendUnderline = {
                ".underline": {
                    textDecoration: "underline",
                    "text-decoration-color": "#660033",
                },
            };
            addUtilities(extendUnderline);
        }),
    ],
};
