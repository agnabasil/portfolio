import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a",
                foreground: "#ededed",
                card: {
                    DEFAULT: "#141414",
                    foreground: "#ffffff",
                },
                accent: {
                    DEFAULT: "#3b82f6",
                    foreground: "#ffffff",
                },
                muted: {
                    DEFAULT: "#737373",
                    foreground: "#a3a3a3",
                },
                border: "#262626",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "Inter", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
export default config;
