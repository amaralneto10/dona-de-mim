/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff6f61", // Coral praia
        secondary: "#fff4e6", // Areia suave
        accent: "#1f6f78", // Azul-esverdeado
        brand: "#233447", // Azul-marinho
      },
    },
  },
  plugins: [],
};
