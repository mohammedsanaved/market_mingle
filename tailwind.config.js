/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],

  theme: {
    extend: {
      fontFamily: {
        niconne: ["Niconne", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          ui: ["@chakra-ui/react", "framer-motion"],
          // Add others as needed
        },
      },
    },
  },
};
