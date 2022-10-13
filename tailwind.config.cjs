/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        "2xl": 32,
      },
      colors: {
        "grey-900": "#121214",
        "grey-800": "#202024",
        "grey-400": "#7C7C8A",
        "grey-200": "#C4C4CC",
        "grey-100": "#E1E1E6",

        "cian-300": "#9BE1FB",
        "cian-500": "#81D8F7",
      },
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
