/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        coal: "url('./src/assets/coal.jpg')",
        coaltower: "url('./src/assets/coaltower.jpg')",
        mixer: "url('./src/assets/mixer.jpg')",
        cinema: "url('./src/assets/cinema.jpg')",
      },
    },
  },
  plugins: [],
};
