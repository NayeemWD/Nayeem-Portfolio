// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import tailwindcss from "@tailwindcss/vite";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   daisyui: {
//     themes: ["light", "dark", "cupcake"], // Add "cupcake" as system fallback or customize
//   },
//   extend: {
//     backgroundImage: {
//       "gradient-box-w": "linear-gradient(145deg, #e2e8ec, #ffffff)",
//     },
//     fontFamily: {
//       montserrat: ["Montserrat", "sans-serif"],
//     },
//   },
// });



import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});

