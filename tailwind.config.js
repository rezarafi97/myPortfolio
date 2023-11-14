/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        p1: "#4D98E4",
        p2: "#3E4756",
        p3: "#A2ACBD",
        p4: "#DD7295",
        p5: "#A33E62",
      },
      backgroundImage: {
        bgAbout: "url('/src/assets/bgAbout.svg')",
      },
    },
  },
  plugins: [],
};
