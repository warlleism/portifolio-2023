/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': "640px",//tablet
      'md': "768px",
      'lg': "1024px",//laptop
      'xl': "1280px",//desktop
      '2xl': "1536px"
    },
  },
  plugins: [],
};
