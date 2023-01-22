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
        sm: { min: "550px" },
        md: { min: "740px" },
        lg: { min: "960px" },
        xl: { min: "1130px" },
        max_sm: { max: "550px" },
        max_md: { max: "740px" },
        max_lg: { max: "960px" },
        max_xl: { max: "1130px" },
      },
    },
  },
  plugins: [],
};
