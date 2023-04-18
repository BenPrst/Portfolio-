/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        coal: "url('./public/coal.jpg')",
        coaltower: "url('./public/coaltower.jpg')",
        mixer: "url('./public/mixer.jpg')",
        cinema: "url('./public/cinema.jpg')",
      },
    },
  },
  plugins: [],
};
