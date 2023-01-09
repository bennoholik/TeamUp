/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      screens: {
        sm: { min: "480px" },
        md: { min: "640px" },
        lg: { min: "960px" },
        xl: { min: "1366px" },
        max_sm: { max: "480px" },
        max_md: { max: "640px" },
        max_lg: { max: "960px" },
        max_xl: { max: "1366px" },
      },
    },
  },
  plugins: [],
};
