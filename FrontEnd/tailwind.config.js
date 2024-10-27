/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via class
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: {
          DEFAULT: "var(--secondary)",
          V2: "var(--secondary-v2)",
          V3: "var(--secondary-v3)",
        },
        neutral: "var(--neutral)",
        // Define dark mode colors if needed
        'dark-background': '#1a1a1a', // Example dark background
        'dark-text': '#e0e0e0', // Example dark text color
      },
    },
  },
  plugins: [],
};
