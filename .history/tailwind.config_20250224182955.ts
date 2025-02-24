import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      width: {
        '11': '2.75rem',
      },
      height: {
        '11': '2.75rem',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'white-100': 'rgba(255, 255, 255, 1)',
        'white-20': 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
} satisfies Config;
