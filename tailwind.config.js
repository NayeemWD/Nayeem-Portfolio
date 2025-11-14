// tailwind.config.js
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-box-w": "linear-gradient(145deg, #e2e8ec, #ffffff)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },

  plugins: [daisyui],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
