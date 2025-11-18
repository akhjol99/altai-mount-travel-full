/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F4EEE4",
          100: "#EAE3D7",
          200: "#D5C8B2",
          300: "#C9A66B",
          700: "#184A3A",
          800: "#0F3A2D"
        }
      },
      boxShadow: { card: "0 10px 30px rgba(0,0,0,.06)" },
      borderRadius: { "2xl":"1rem" }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
